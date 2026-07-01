import { createAuditReference } from '../../packages/audit-client/src/index.js';
import { assertEventEnvelopeV1 } from '../../packages/event-envelope/src/index.js';
import { createEvidenceReferenceV1, validateEvidenceReferenceV1 } from '../../packages/evidence-reference/src/index.js';
import { createResourceReferenceV1, validateResourceReferenceV1 } from '../../packages/resource-reference/src/index.js';
import { createSecretReferenceV1, validateSecretReferenceV1 } from '../../packages/secret-reference/src/index.js';
import { structuralAssert, structuralAssertEqual } from '../../packages/test-kit/src/index.js';
import { AuthorizationDecisionService, EntitlementService, InMemoryIdempotencyStore, TenantContextService } from '../../modules/core-platform/src/index.js';

const tenantContextService = new TenantContextService();
const context = tenantContextService.resolve({
  tenantId: 'tenant-1',
  contextId: 'context-1',
  actorReferenceId: 'actor-1',
  actorType: 'operator',
  correlationId: 'corr-1'
});
structuralAssertEqual(context.tenant.tenantId, 'tenant-1', 'tenant context must resolve');

const resource = createResourceReferenceV1({
  resourceReferenceId: 'resource-1',
  ownerModule: 'Core Platform',
  resourceType: 'AuthorizationDecision',
  resourcePublicId: 'authz-1',
  tenantId: 'tenant-1',
  contextId: 'context-1',
  allowedActions: ['core.authorization_decision.read_or_manage'],
  authorizationScope: 'organization',
  displayLabelMinimized: 'authz'
});
structuralAssertEqual(validateResourceReferenceV1(resource).length, 0, 'resource reference must be valid');
structuralAssert(resource.noDomainTransfer, 'resource reference must not transfer domain');

const authorization = new AuthorizationDecisionService();
authorization.grantPermission({
  permissionGrantId: 'grant-1',
  tenantId: 'tenant-1',
  contextId: 'context-1',
  actorReferenceId: 'actor-1',
  permissionCode: 'core.authorization_decision.read_or_manage',
  scope: 'organization',
  status: 'active'
});

const decision = authorization.issue({
  authorizationDecisionId: 'authz-1',
  scope: {
    tenantId: 'tenant-1',
    contextId: 'context-1',
    actorReferenceId: 'actor-1',
    resourceReferenceId: 'resource-1',
    permissionCode: 'core.authorization_decision.read_or_manage',
    moduleCode: 'core-platform',
    purpose: 'structural test',
    policyReferences: ['policy-security-core'],
    sensitivity: 'sensitive'
  },
  resourceReference: resource,
  auditReferenceId: 'audit-1',
  nowIso: '2026-07-01T00:00:00.000Z',
  expiresAt: '2026-07-01T00:05:00.000Z'
});
structuralAssertEqual(decision.decision, 'allow', 'authorization must allow valid permission grant');

const denied = authorization.issue({
  authorizationDecisionId: 'authz-2',
  scope: {
    tenantId: '',
    contextId: 'context-1',
    actorReferenceId: 'actor-1',
    permissionCode: 'core.authorization_decision.read_or_manage',
    moduleCode: 'core-platform',
    purpose: 'fail closed test',
    policyReferences: ['policy-security-core'],
    sensitivity: 'sensitive'
  },
  auditReferenceId: 'audit-2',
  nowIso: '2026-07-01T00:00:00.000Z',
  expiresAt: '2026-07-01T00:05:00.000Z'
});
structuralAssertEqual(denied.decision, 'deny', 'missing tenant must deny');

const entitlements = new EntitlementService();
entitlements.seed({
  license: { licenseId: 'license-1', tenantId: 'tenant-1', contextId: 'context-1', moduleCode: 'core-platform', status: 'active' },
  entitlement: { entitlementId: 'entitlement-1', tenantId: 'tenant-1', contextId: 'context-1', moduleCode: 'core-platform', permissionCode: 'core.authorization_decision.read_or_manage', status: 'active' },
  featureFlag: { featureFlagId: 'flag-1', tenantId: 'tenant-1', contextId: 'context-1', moduleCode: 'core-platform', flagCode: 'core.authorization.enabled', enabled: true }
});
entitlements.requireEntitled({
  tenantId: 'tenant-1',
  contextId: 'context-1',
  moduleCode: 'core-platform',
  permissionCode: 'core.authorization_decision.read_or_manage',
  flagCode: 'core.authorization.enabled',
  nowIso: '2026-07-01T00:00:00.000Z'
});

const idempotency = new InMemoryIdempotencyStore<string>();
const first = idempotency.resolve({ idempotencyKey: 'idem-1', commandName: 'CoreCommand', tenantId: 'tenant-1', contextId: 'context-1', actorReferenceId: 'actor-1', payloadFingerprint: 'hash-a' }, () => 'created');
const replay = idempotency.resolve({ idempotencyKey: 'idem-1', commandName: 'CoreCommand', tenantId: 'tenant-1', contextId: 'context-1', actorReferenceId: 'actor-1', payloadFingerprint: 'hash-a' }, () => 'other');
const conflict = idempotency.resolve({ idempotencyKey: 'idem-1', commandName: 'CoreCommand', tenantId: 'tenant-1', contextId: 'context-1', actorReferenceId: 'actor-1', payloadFingerprint: 'hash-b' }, () => 'bad');
structuralAssertEqual(first.status, 'stored', 'first idempotent command stores');
structuralAssertEqual(replay.status, 'replayed', 'same idempotent command replays');
structuralAssertEqual(conflict.status, 'conflict', 'different payload conflicts');

const secret = createSecretReferenceV1({
  secretReferenceId: 'secret-1',
  ownerModule: 'Core Platform',
  vaultProviderReference: 'vault-ref',
  purpose: 'structural test',
  scope: 'organization',
  rotationPolicyReference: 'rotation-policy',
  revocationPolicyReference: 'revocation-policy',
  accessPolicyReference: 'access-policy',
  auditPolicyReference: 'audit-policy'
});
structuralAssertEqual(secret.rawSecretAllowed, 'never', 'raw secret must never be allowed');
structuralAssertEqual(validateSecretReferenceV1(secret).length, 0, 'secret reference must be valid');

const evidence = createEvidenceReferenceV1({
  evidenceReferenceId: 'evidence-1',
  evidenceOwnerModule: 'Core Platform',
  custodyOwnerModule: 'Auditoria e Compliance',
  relatedResourceReferenceId: 'resource-1',
  relatedActorReferenceId: 'actor-1',
  tenantId: 'tenant-1',
  contextId: 'context-1',
  evidenceType: 'AuditEvidence',
  storageReference: 'storage-reference',
  retentionPolicyReference: 'retention-policy',
  maskingPolicyReference: 'masking-policy',
  accessPolicyReference: 'access-policy',
  chainOfCustodyReference: 'chain-reference',
  auditReferenceId: 'audit-1',
  exportControlPolicyReference: 'export-policy'
});
structuralAssertEqual(evidence.rawEvidenceAllowed, false, 'raw evidence must not be allowed');
structuralAssertEqual(validateEvidenceReferenceV1(evidence).length, 0, 'evidence reference must be valid');

const audit = createAuditReference({
  auditReferenceId: 'audit-event-1',
  tenantId: 'tenant-1',
  contextId: 'context-1',
  actorReferenceId: 'actor-1',
  action: 'AuthorizationDecisionIssued',
  purpose: 'event structural test',
  correlationId: 'corr-event-1'
});

const envelope = assertEventEnvelopeV1({
  eventId: 'event-1',
  eventName: 'AuthorizationDecisionIssued',
  eventType: 'fact_occurred',
  eventVersion: 'v1',
  contractId: 'NODUOS.CORE.AUTHORIZATION_DECISION.v1',
  contractVersion: 'v1',
  envelopeVersion: 'v1',
  sourceModule: 'Core Platform',
  ownerModule: 'Core Platform',
  producerModule: 'Core Platform',
  tenantId: 'tenant-1',
  contextId: 'context-1',
  actorReferenceId: 'actor-1',
  policyReferences: ['policy-security-core'],
  sensitivityLevel: 'sensitive',
  purpose: 'event structural test',
  occurredAt: '2026-07-01T00:00:00.000Z',
  recordedAt: '2026-07-01T00:00:00.000Z',
  publishedAt: '2026-07-01T00:00:00.000Z',
  correlationId: 'corr-event-1',
  payloadSchemaReference: 'NODUOS.CORE.AUTHORIZATION_DECISION.v1',
  payloadMinimized: true,
  payload: { decision: 'allow' },
  auditReference: audit,
  compatibilityPolicy: 'additive_fields_allowed',
  deprecationPolicy: 'explicit_deprecation_required'
});
structuralAssertEqual(envelope.payloadMinimized, true, 'event payload must be minimized');

