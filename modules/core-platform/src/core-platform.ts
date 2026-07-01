import type { AuthorizationDecisionReasonCode, AuthorizationDecisionSnapshot } from '../../../packages/authorization-client/src/index.js';
import { createAuditReference, type AuditRecord } from '../../../packages/audit-client/src/index.js';
import { type PublicContractDefinition, CORE_PUBLIC_CONTRACTS } from '../../../packages/contracts/src/index.js';
import { buildIdempotencyScope, type IdempotencyCommandIdentity, type IdempotencyResult } from '../../../packages/idempotency/src/index.js';
import { assertTenantContext, createTenantContext, type ActorType, type TenantContext } from '../../../packages/tenant-context/src/index.js';
import { assertResourceReferenceV1, type ResourceReferenceV1 } from '../../../packages/resource-reference/src/index.js';
import { validateSecretReferenceV1, type SecretReferenceV1 } from '../../../packages/secret-reference/src/index.js';
import { validateEvidenceReferenceV1, type EvidenceReferenceV1 } from '../../../packages/evidence-reference/src/index.js';
import { assertEventEnvelopeV1, type EventEnvelopeV1 } from '../../../packages/event-envelope/src/index.js';

export interface PermissionGrant {
  readonly permissionGrantId: string;
  readonly tenantId: string;
  readonly contextId: string;
  readonly actorReferenceId: string;
  readonly permissionCode: string;
  readonly scope: string;
  readonly status: 'active' | 'revoked' | 'expired';
  readonly expiresAt?: string | undefined;
}

export interface InheritanceGrant {
  readonly inheritanceGrantId: string;
  readonly tenantId: string;
  readonly contextId: string;
  readonly sourceActorReferenceId: string;
  readonly targetActorReferenceId: string;
  readonly permissionCode: string;
  readonly inheritedScope: string;
  readonly status: 'active' | 'revoked' | 'expired';
  readonly expiresAt?: string | undefined;
}

export interface License {
  readonly licenseId: string;
  readonly tenantId: string;
  readonly contextId: string;
  readonly moduleCode: string;
  readonly status: 'active' | 'suspended' | 'expired' | 'revoked';
  readonly expiresAt?: string | undefined;
}

export interface FeatureFlag {
  readonly featureFlagId: string;
  readonly tenantId: string;
  readonly contextId: string;
  readonly moduleCode: string;
  readonly flagCode: string;
  readonly enabled: boolean;
}

export interface Entitlement {
  readonly entitlementId: string;
  readonly tenantId: string;
  readonly contextId: string;
  readonly moduleCode: string;
  readonly permissionCode: string;
  readonly status: 'active' | 'suspended' | 'expired' | 'revoked';
}

export interface AuthorizationScope {
  readonly tenantId: string;
  readonly contextId: string;
  readonly actorReferenceId: string;
  readonly resourceReferenceId?: string | undefined;
  readonly permissionCode: string;
  readonly moduleCode: string;
  readonly purpose: string;
  readonly policyReferences: readonly string[];
  readonly sensitivity: 'public' | 'internal' | 'restricted' | 'sensitive' | 'critical';
}

export interface AuthorizationDecisionRequest {
  readonly authorizationDecisionId: string;
  readonly scope: AuthorizationScope;
  readonly resourceReference?: ResourceReferenceV1 | undefined;
  readonly auditReferenceId: string;
  readonly nowIso: string;
  readonly expiresAt: string;
}

export class CoreFailClosedError extends Error {
  readonly reasonCode: string;
  constructor(reasonCode: string) {
    super('fail_closed:' + reasonCode);
    this.reasonCode = reasonCode;
  }
}

export function failClosed(reasonCode: string): never {
  throw new CoreFailClosedError(reasonCode);
}

function isTemporalActive(input: { readonly status: string; readonly expiresAt?: string | undefined }, nowIso: string): boolean {
  if (input.status !== 'active') return false;
  if (!input.expiresAt) return true;
  return Date.parse(input.expiresAt) > Date.parse(nowIso);
}

export class TenantContextService {
  private readonly contexts = new Map<string, TenantContext>();

  resolve(input: { readonly tenantId: string; readonly contextId: string; readonly actorReferenceId: string; readonly actorType: ActorType; readonly correlationId: string }): TenantContext {
    const context = assertTenantContext(createTenantContext(input));
    this.contexts.set(input.tenantId + ':' + input.contextId + ':' + input.actorReferenceId, context);
    return context;
  }
}

export class ContractRegistry {
  private readonly contracts = new Map<string, PublicContractDefinition>();

  constructor(seed: readonly PublicContractDefinition[] = CORE_PUBLIC_CONTRACTS) {
    for (const contract of seed) this.contracts.set(contract.contractId, contract);
  }

  require(contractId: string): PublicContractDefinition {
    const contract = this.contracts.get(contractId);
    if (!contract) failClosed('contract_not_registered');
    return contract;
  }

  list(): readonly PublicContractDefinition[] {
    return [...this.contracts.values()];
  }
}

export class InMemoryAuditStore {
  private readonly records: AuditRecord[] = [];
  record(record: AuditRecord): AuditRecord { this.records.push(record); return record; }
  list(): readonly AuditRecord[] { return [...this.records]; }
}

export class AuditService {
  constructor(private readonly store: InMemoryAuditStore = new InMemoryAuditStore()) {}

  record(input: { readonly auditReferenceId: string; readonly tenantId: string; readonly contextId: string; readonly actorReferenceId: string; readonly action: string; readonly purpose: string; readonly correlationId: string; readonly outcome: AuditRecord['outcome']; readonly reasonCode: string; readonly resourceReferenceId?: string | undefined; readonly authorizationDecisionId?: string | undefined; readonly policyReferences?: readonly string[] }): AuditRecord {
    const reference = createAuditReference(input);
    return this.store.record({ ...reference, outcome: input.outcome, reasonCode: input.reasonCode });
  }

  list(): readonly AuditRecord[] { return this.store.list(); }
}

export class InMemoryIdempotencyStore<TValue> {
  private readonly entries = new Map<string, { readonly payloadFingerprint: string; readonly value: TValue }>();

  resolve(identity: IdempotencyCommandIdentity, valueFactory: () => TValue): IdempotencyResult<TValue> {
    if (!identity.idempotencyKey) return { status: 'conflict', reasonCode: 'idempotency_key_required' };
    const scope = buildIdempotencyScope(identity);
    const existing = this.entries.get(scope);
    if (!existing) {
      const value = valueFactory();
      this.entries.set(scope, { payloadFingerprint: identity.payloadFingerprint, value });
      return { status: 'stored', value };
    }
    if (existing.payloadFingerprint !== identity.payloadFingerprint) return { status: 'conflict', reasonCode: 'idempotency_payload_conflict' };
    return { status: 'replayed', value: existing.value };
  }
}

export class AuthorizationDecisionService {
  private readonly decisions: AuthorizationDecisionSnapshot[] = [];
  private readonly permissionGrants: PermissionGrant[] = [];
  private readonly inheritanceGrants: InheritanceGrant[] = [];

  grantPermission(grant: PermissionGrant): void { this.permissionGrants.push(grant); }
  grantInheritance(grant: InheritanceGrant): void { this.inheritanceGrants.push(grant); }
  list(): readonly AuthorizationDecisionSnapshot[] { return [...this.decisions]; }

  issue(request: AuthorizationDecisionRequest): AuthorizationDecisionSnapshot {
    const scopeError = this.validateScope(request.scope);
    if (scopeError) return this.deny(request, scopeError);

    if (request.resourceReference) {
      try { assertResourceReferenceV1(request.resourceReference); }
      catch { return this.deny(request, 'denied_invalid_resource_reference'); }
      if (!request.resourceReference.allowedActions.includes(request.scope.permissionCode)) return this.deny(request, 'denied_invalid_resource_reference');
    }

    const permission = this.permissionGrants.find((grant) =>
      grant.tenantId === request.scope.tenantId &&
      grant.contextId === request.scope.contextId &&
      grant.actorReferenceId === request.scope.actorReferenceId &&
      grant.permissionCode === request.scope.permissionCode &&
      isTemporalActive(grant, request.nowIso)
    );

    const inheritance = this.inheritanceGrants.find((grant) =>
      grant.tenantId === request.scope.tenantId &&
      grant.contextId === request.scope.contextId &&
      grant.targetActorReferenceId === request.scope.actorReferenceId &&
      grant.permissionCode === request.scope.permissionCode &&
      isTemporalActive(grant, request.nowIso)
    );

    if (!permission && !inheritance) return this.deny(request, 'denied_missing_permission');

    const reasonCode: AuthorizationDecisionReasonCode = inheritance && !permission ? 'allowed_by_inheritance' : 'allowed_by_permission_grant';
    const decision: AuthorizationDecisionSnapshot = {
      authorizationDecisionId: request.authorizationDecisionId,
      issuedBy: 'Core Platform',
      decision: 'allow',
      tenantId: request.scope.tenantId,
      contextId: request.scope.contextId,
      actorReferenceId: request.scope.actorReferenceId,
      resourceReferenceId: request.resourceReference?.resourceReferenceId,
      permissionCode: request.scope.permissionCode,
      reasonCode,
      issuedAt: request.nowIso,
      expiresAt: request.expiresAt,
      correlationId: request.scope.tenantId + ':' + request.scope.contextId + ':' + request.authorizationDecisionId,
      auditReferenceId: request.auditReferenceId,
      sensitivityLevel: request.scope.sensitivity,
      policyReferences: request.scope.policyReferences,
      purpose: request.scope.purpose,
      failClosed: true,
      noDomainTransfer: true
    };
    this.decisions.push(decision);
    return decision;
  }

  private deny(request: AuthorizationDecisionRequest, reasonCode: AuthorizationDecisionReasonCode): AuthorizationDecisionSnapshot {
    const decision: AuthorizationDecisionSnapshot = {
      authorizationDecisionId: request.authorizationDecisionId,
      issuedBy: 'Core Platform',
      decision: 'deny',
      tenantId: request.scope.tenantId,
      contextId: request.scope.contextId,
      actorReferenceId: request.scope.actorReferenceId,
      resourceReferenceId: request.resourceReference?.resourceReferenceId,
      permissionCode: request.scope.permissionCode,
      reasonCode,
      issuedAt: request.nowIso,
      expiresAt: request.nowIso,
      correlationId: request.scope.tenantId + ':' + request.scope.contextId + ':' + request.authorizationDecisionId,
      auditReferenceId: request.auditReferenceId,
      sensitivityLevel: request.scope.sensitivity,
      policyReferences: request.scope.policyReferences,
      purpose: request.scope.purpose,
      failClosed: true,
      noDomainTransfer: true
    };
    this.decisions.push(decision);
    return decision;
  }

  private validateScope(scope: AuthorizationScope): AuthorizationDecisionReasonCode | undefined {
    if (!scope.tenantId) return 'denied_missing_tenant';
    if (!scope.contextId) return 'denied_missing_context';
    if (!scope.actorReferenceId) return 'denied_missing_actor';
    if (!scope.permissionCode) return 'denied_missing_permission';
    if (!scope.purpose) return 'denied_missing_policy';
    if ((scope.sensitivity === 'sensitive' || scope.sensitivity === 'critical') && scope.policyReferences.length === 0) return 'denied_missing_policy';
    return undefined;
  }
}

export class CoreReferenceGate {
  checkSecret(reference: SecretReferenceV1): SecretReferenceV1 {
    const errors = validateSecretReferenceV1(reference);
    if (errors.length > 0) failClosed('invalid_secret_reference');
    return reference;
  }

  checkEvidence(reference: EvidenceReferenceV1): EvidenceReferenceV1 {
    const errors = validateEvidenceReferenceV1(reference);
    if (errors.length > 0) failClosed('invalid_evidence_reference');
    return reference;
  }

  checkEvent<TPayload extends Record<string, unknown>>(envelope: EventEnvelopeV1<TPayload>): EventEnvelopeV1<TPayload> {
    return assertEventEnvelopeV1(envelope);
  }
}

export class EntitlementService {
  private readonly licenses: License[] = [];
  private readonly entitlements: Entitlement[] = [];
  private readonly featureFlags: FeatureFlag[] = [];

  seed(input: { readonly license: License; readonly entitlement: Entitlement; readonly featureFlag: FeatureFlag }): void {
    this.licenses.push(input.license);
    this.entitlements.push(input.entitlement);
    this.featureFlags.push(input.featureFlag);
  }

  requireEntitled(input: { readonly tenantId: string; readonly contextId: string; readonly moduleCode: string; readonly permissionCode: string; readonly flagCode: string; readonly nowIso: string }): void {
    const license = this.licenses.find((item) => item.tenantId === input.tenantId && item.contextId === input.contextId && item.moduleCode === input.moduleCode && isTemporalActive(item, input.nowIso));
    if (!license) failClosed('license_required');

    const entitlement = this.entitlements.find((item) => item.tenantId === input.tenantId && item.contextId === input.contextId && item.moduleCode === input.moduleCode && item.permissionCode === input.permissionCode && item.status === 'active');
    if (!entitlement) failClosed('entitlement_required');

    const flag = this.featureFlags.find((item) => item.tenantId === input.tenantId && item.contextId === input.contextId && item.moduleCode === input.moduleCode && item.flagCode === input.flagCode && item.enabled === true);
    if (!flag) failClosed('feature_flag_required');
  }
}

