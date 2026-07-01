export type NoduosContractType =
  | 'api_internal'
  | 'command'
  | 'event_fact'
  | 'event_request_registered'
  | 'authorized_read_model'
  | 'webhook_internal'
  | 'webhook_external'
  | 'authorization'
  | 'evidence'
  | 'security_lgpd'
  | 'audit'
  | 'transversal';

export type NoduosSensitivityLevel = 'public' | 'internal' | 'restricted' | 'sensitive' | 'critical';
export type NoduosFailureMode = 'deny' | 'quarantine' | 'degrade_safely' | 'mask' | 'retry' | 'dead_letter';

export interface PublicContractDefinition {
  readonly contractId: string;
  readonly contractName: string;
  readonly contractType: NoduosContractType;
  readonly ownerModule: string;
  readonly version: 'v1';
  readonly status: 'Active';
  readonly permissionCode: string;
  readonly tenantRequired: boolean;
  readonly contextRequired: boolean;
  readonly actorReferenceRequired: boolean;
  readonly resourceReferenceRequired: boolean;
  readonly authorizationDecisionRequired: boolean;
  readonly eventEnvelopeRequired: boolean;
  readonly idempotencyKeyRequired: boolean;
  readonly purposeRequired: boolean;
  readonly rawPayloadAllowed: false;
  readonly sensitiveDataLevel: NoduosSensitivityLevel;
  readonly failureMode: NoduosFailureMode;
  readonly noSharedDatabase: true;
  readonly noDomainTransfer: true;
}

function coreContract(input: Omit<PublicContractDefinition, 'ownerModule' | 'version' | 'status' | 'rawPayloadAllowed' | 'noSharedDatabase' | 'noDomainTransfer'>): PublicContractDefinition {
  return {
    ...input,
    ownerModule: 'Core Platform',
    version: 'v1',
    status: 'Active',
    rawPayloadAllowed: false,
    noSharedDatabase: true,
    noDomainTransfer: true
  };
}

export const CORE_PUBLIC_CONTRACTS: readonly PublicContractDefinition[] = [
  coreContract({
    contractId: 'NODUOS.CORE.CORE_AUTHORIZATION.v1',
    contractName: 'Core Authorization API',
    contractType: 'api_internal',
    permissionCode: 'core.core_authorization.read_or_manage',
    tenantRequired: true,
    contextRequired: true,
    actorReferenceRequired: true,
    resourceReferenceRequired: true,
    authorizationDecisionRequired: false,
    eventEnvelopeRequired: false,
    idempotencyKeyRequired: true,
    purposeRequired: true,
    sensitiveDataLevel: 'restricted',
    failureMode: 'deny'
  }),
  coreContract({
    contractId: 'NODUOS.CORE.AUTHORIZATION_DECISION.v1',
    contractName: 'Authorization Decision',
    contractType: 'authorization',
    permissionCode: 'core.authorization_decision.read_or_manage',
    tenantRequired: true,
    contextRequired: true,
    actorReferenceRequired: true,
    resourceReferenceRequired: true,
    authorizationDecisionRequired: false,
    eventEnvelopeRequired: true,
    idempotencyKeyRequired: true,
    purposeRequired: true,
    sensitiveDataLevel: 'sensitive',
    failureMode: 'deny'
  }),
  coreContract({
    contractId: 'NODUOS.CORE.RESOURCE_REFERENCE.v1',
    contractName: 'Core Resource Reference',
    contractType: 'authorization',
    permissionCode: 'core.resource_reference.read',
    tenantRequired: true,
    contextRequired: true,
    actorReferenceRequired: true,
    resourceReferenceRequired: true,
    authorizationDecisionRequired: true,
    eventEnvelopeRequired: true,
    idempotencyKeyRequired: false,
    purposeRequired: true,
    sensitiveDataLevel: 'restricted',
    failureMode: 'deny'
  }),
  coreContract({
    contractId: 'NODUOS.CORE.TENANT.v1',
    contractName: 'Tenant',
    contractType: 'api_internal',
    permissionCode: 'core.tenant.read_or_manage',
    tenantRequired: true,
    contextRequired: false,
    actorReferenceRequired: true,
    resourceReferenceRequired: false,
    authorizationDecisionRequired: true,
    eventEnvelopeRequired: true,
    idempotencyKeyRequired: true,
    purposeRequired: true,
    sensitiveDataLevel: 'restricted',
    failureMode: 'deny'
  }),
  coreContract({
    contractId: 'NODUOS.CORE.CONTEXT.v1',
    contractName: 'Context',
    contractType: 'api_internal',
    permissionCode: 'core.context.read_or_manage',
    tenantRequired: true,
    contextRequired: true,
    actorReferenceRequired: true,
    resourceReferenceRequired: false,
    authorizationDecisionRequired: true,
    eventEnvelopeRequired: true,
    idempotencyKeyRequired: true,
    purposeRequired: true,
    sensitiveDataLevel: 'restricted',
    failureMode: 'deny'
  }),
  coreContract({
    contractId: 'NODUOS.CORE.PERMISSION_GRANT.v1',
    contractName: 'Permission Grant',
    contractType: 'api_internal',
    permissionCode: 'core.permission_grant.read_or_manage',
    tenantRequired: true,
    contextRequired: true,
    actorReferenceRequired: true,
    resourceReferenceRequired: false,
    authorizationDecisionRequired: true,
    eventEnvelopeRequired: true,
    idempotencyKeyRequired: true,
    purposeRequired: true,
    sensitiveDataLevel: 'sensitive',
    failureMode: 'deny'
  }),
  coreContract({
    contractId: 'NODUOS.CORE.INHERITANCE_GRANT.v1',
    contractName: 'Inheritance Grant',
    contractType: 'api_internal',
    permissionCode: 'core.inheritance_grant.read_or_manage',
    tenantRequired: true,
    contextRequired: true,
    actorReferenceRequired: true,
    resourceReferenceRequired: false,
    authorizationDecisionRequired: true,
    eventEnvelopeRequired: true,
    idempotencyKeyRequired: true,
    purposeRequired: true,
    sensitiveDataLevel: 'sensitive',
    failureMode: 'deny'
  }),
  coreContract({
    contractId: 'NODUOS.CORE.MODULE_REGISTRY.v1',
    contractName: 'Module Registry',
    contractType: 'api_internal',
    permissionCode: 'core.module_registry.read_or_manage',
    tenantRequired: true,
    contextRequired: true,
    actorReferenceRequired: true,
    resourceReferenceRequired: false,
    authorizationDecisionRequired: true,
    eventEnvelopeRequired: true,
    idempotencyKeyRequired: true,
    purposeRequired: true,
    sensitiveDataLevel: 'restricted',
    failureMode: 'deny'
  }),
  coreContract({
    contractId: 'NODUOS.CORE.LICENSE.v1',
    contractName: 'License',
    contractType: 'api_internal',
    permissionCode: 'core.license.read_or_manage',
    tenantRequired: true,
    contextRequired: true,
    actorReferenceRequired: true,
    resourceReferenceRequired: false,
    authorizationDecisionRequired: true,
    eventEnvelopeRequired: true,
    idempotencyKeyRequired: true,
    purposeRequired: true,
    sensitiveDataLevel: 'restricted',
    failureMode: 'deny'
  }),
  coreContract({
    contractId: 'NODUOS.CORE.FEATURE_FLAG.v1',
    contractName: 'Feature Flag',
    contractType: 'api_internal',
    permissionCode: 'core.feature_flag.read_or_manage',
    tenantRequired: true,
    contextRequired: true,
    actorReferenceRequired: true,
    resourceReferenceRequired: false,
    authorizationDecisionRequired: true,
    eventEnvelopeRequired: true,
    idempotencyKeyRequired: true,
    purposeRequired: true,
    sensitiveDataLevel: 'restricted',
    failureMode: 'deny'
  }),
  coreContract({
    contractId: 'NODUOS.CORE.AUDIT_REFERENCE.v1',
    contractName: 'Audit Reference',
    contractType: 'audit',
    permissionCode: 'core.audit_reference.read',
    tenantRequired: true,
    contextRequired: true,
    actorReferenceRequired: true,
    resourceReferenceRequired: false,
    authorizationDecisionRequired: true,
    eventEnvelopeRequired: true,
    idempotencyKeyRequired: false,
    purposeRequired: true,
    sensitiveDataLevel: 'sensitive',
    failureMode: 'deny'
  })
] as const;

export function validatePublicContractDefinition(contract: PublicContractDefinition): readonly string[] {
  const errors: string[] = [];
  if (!contract.contractId.startsWith('NODUOS.')) errors.push('contract_id_invalid');
  if (!contract.contractId.endsWith('.v1')) errors.push('contract_version_invalid');
  if (!contract.ownerModule) errors.push('owner_module_required');
  if (!contract.permissionCode) errors.push('permission_code_required');
  if (contract.rawPayloadAllowed !== false) errors.push('raw_payload_forbidden');
  if (contract.noSharedDatabase !== true) errors.push('no_shared_database_required');
  if (contract.noDomainTransfer !== true) errors.push('no_domain_transfer_required');
  return errors;
}

export function assertPublicContractDefinition(contract: PublicContractDefinition): PublicContractDefinition {
  const errors = validatePublicContractDefinition(contract);
  if (errors.length > 0) throw new Error('invalid_public_contract:' + errors.join(','));
  return contract;
}

export function findCoreContract(contractId: string): PublicContractDefinition | undefined {
  return CORE_PUBLIC_CONTRACTS.find((contract) => contract.contractId === contractId);
}

