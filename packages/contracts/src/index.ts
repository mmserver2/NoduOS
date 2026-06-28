export type ContractId = `NODUOS.${string}.v${number}`;
export type PermissionCode = `${string}.${string}.${string}` | `${string}.${string}.${string}_${string}`;

export enum ContractType {
  InternalApi = 'internal_api',
  Command = 'command',
  FactEvent = 'fact_event',
  RequestRegisteredEvent = 'request_registered_event',
  AuthorizedReadModel = 'authorized_read_model',
  InternalWebhook = 'internal_webhook',
  ExternalWebhook = 'external_webhook',
  Authorization = 'authorization',
  Evidence = 'evidence',
  SecurityLgpd = 'security_lgpd',
  Audit = 'audit',
  Transversal = 'transversal'
}

export enum ContractStatus {
  Draft = 'draft',
  Approved = 'approved',
  Active = 'active',
  Deprecated = 'deprecated',
  Superseded = 'superseded',
  Retired = 'retired',
  Revoked = 'revoked'
}

export enum SensitivityLevel {
  Public = 'public',
  Internal = 'internal',
  Restricted = 'restricted',
  Sensitive = 'sensitive',
  Critical = 'critical'
}

export enum FailureMode {
  Deny = 'deny',
  Pause = 'pause',
  Mask = 'mask',
  Quarantine = 'quarantine',
  DeadLetter = 'dead_letter'
}

export interface ContractMetadata {
  readonly contractId: ContractId;
  readonly contractName: string;
  readonly contractType: ContractType;
  readonly contractVersion: `v${number}`;
  readonly status: ContractStatus;
  readonly ownerModule: string;
  readonly permissionCode: PermissionCode;
  readonly sensitivityLevel: SensitivityLevel;
  readonly tenantRequired: boolean;
  readonly contextRequired: boolean;
  readonly actorReferenceRequired: boolean;
  readonly resourceReferenceRequired: boolean;
  readonly authorizationDecisionRequired: boolean;
  readonly auditRequired: boolean;
  readonly idempotencyRequired: boolean;
  readonly failClosed: true;
  readonly rawPayloadAllowed: false;
  readonly compatibilityPolicy: string;
}

export class ContractViolationError extends Error {
  public constructor(message: string) {
    super(message);
    this.name = 'ContractViolationError';
  }
}

export function defineContract(metadata: ContractMetadata): ContractMetadata {
  if (!metadata.contractId.startsWith('NODUOS.')) {
    throw new ContractViolationError('contractId must start with NODUOS.');
  }
  if (!metadata.ownerModule.trim()) {
    throw new ContractViolationError('ownerModule is required.');
  }
  if (!metadata.failClosed) {
    throw new ContractViolationError('failClosed must be true for NoduOS contracts.');
  }
  if (metadata.rawPayloadAllowed) {
    throw new ContractViolationError('rawPayloadAllowed must be false.');
  }
  return Object.freeze({ ...metadata });
}

export const CORE_CONTRACTS = {
  coreAuthorization: 'NODUOS.CORE.CORE_AUTHORIZATION.v1',
  authorizationDecision: 'NODUOS.CORE.AUTHORIZATION_DECISION.v1',
  resourceReference: 'NODUOS.CORE.RESOURCE_REFERENCE.v1',
  tenant: 'NODUOS.CORE.TENANT.v1',
  context: 'NODUOS.CORE.CONTEXT.v1',
  userAccountReference: 'NODUOS.CORE.USER_ACCOUNT_REFERENCE.v1',
  permissionGrant: 'NODUOS.CORE.PERMISSION_GRANT.v1',
  inheritanceGrant: 'NODUOS.CORE.INHERITANCE_GRANT.v1',
  moduleRegistry: 'NODUOS.CORE.MODULE_REGISTRY.v1',
  licenseEntitlement: 'NODUOS.CORE.LICENSE_ENTITLEMENT.v1',
  featureFlag: 'NODUOS.CORE.FEATURE_FLAG.v1',
  auditTrail: 'NODUOS.CORE.CORE_AUDIT_TRAIL.v1',
  securityLog: 'NODUOS.CORE.CORE_SECURITY_LOG.v1',
  apiClient: 'NODUOS.CORE.CORE_API_CLIENT.v1'
} as const;

export const TRANSVERSAL_CONTRACTS = {
  eventEnvelope: 'NODUOS.TRANSVERSAL.EVENT_ENVELOPE.v1',
  authorizationDecision: 'NODUOS.TRANSVERSAL.AUTHORIZATION_DECISION.v1',
  resourceReference: 'NODUOS.TRANSVERSAL.RESOURCE_REFERENCE.v1',
  secretReference: 'NODUOS.TRANSVERSAL.SECRET_REFERENCE.v1',
  evidenceReference: 'NODUOS.TRANSVERSAL.EVIDENCE_REFERENCE.v1',
  auditTrailReference: 'NODUOS.TRANSVERSAL.AUDIT_TRAIL_REFERENCE.v1',
  idempotency: 'NODUOS.TRANSVERSAL.IDEMPOTENCY.v1',
  correlation: 'NODUOS.TRANSVERSAL.CORRELATION.v1',
  deadLetter: 'NODUOS.TRANSVERSAL.DEAD_LETTER.v1'
} as const;
