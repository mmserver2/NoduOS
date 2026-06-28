import { ContractMetadata, ContractStatus, ContractType, SensitivityLevel, defineContract } from '../../../../packages/contracts/src';

export const CORE_AUTHORIZATION_CONTRACT: ContractMetadata = defineContract({
  contractId: 'NODUOS.CORE.CORE_AUTHORIZATION.v1',
  contractName: 'Core Authorization API',
  contractType: ContractType.InternalApi,
  contractVersion: 'v1',
  status: ContractStatus.Active,
  ownerModule: 'core-platform',
  permissionCode: 'core.core_authorization.read_or_manage',
  sensitivityLevel: SensitivityLevel.Restricted,
  tenantRequired: true,
  contextRequired: true,
  actorReferenceRequired: true,
  resourceReferenceRequired: true,
  authorizationDecisionRequired: true,
  auditRequired: true,
  idempotencyRequired: false,
  failClosed: true,
  rawPayloadAllowed: false,
  compatibilityPolicy: 'Additive changes only in v1; incompatible changes require v2.'
});

export const CORE_RESOURCE_REFERENCE_CONTRACT: ContractMetadata = defineContract({
  contractId: 'NODUOS.CORE.RESOURCE_REFERENCE.v1',
  contractName: 'Core ResourceReference API',
  contractType: ContractType.Authorization,
  contractVersion: 'v1',
  status: ContractStatus.Active,
  ownerModule: 'core-platform',
  permissionCode: 'core.resource_reference.read',
  sensitivityLevel: SensitivityLevel.Restricted,
  tenantRequired: true,
  contextRequired: true,
  actorReferenceRequired: true,
  resourceReferenceRequired: false,
  authorizationDecisionRequired: true,
  auditRequired: true,
  idempotencyRequired: false,
  failClosed: true,
  rawPayloadAllowed: false,
  compatibilityPolicy: 'ResourceReference v1 must always preserve no_domain_transfer.'
});

export const CORE_CONTRACT_REGISTRY = Object.freeze([
  CORE_AUTHORIZATION_CONTRACT,
  CORE_RESOURCE_REFERENCE_CONTRACT
]);
