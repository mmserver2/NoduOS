import type { NoduosSensitivityLevel } from '../../contracts/src/index.js';

export interface ResourceReferenceV1 {
  readonly resourceReferenceId: string;
  readonly ownerModule: string;
  readonly resourceType: string;
  readonly resourcePublicId: string;
  readonly tenantId: string;
  readonly contextId: string;
  readonly sensitivityLevel: NoduosSensitivityLevel;
  readonly allowedActions: readonly string[];
  readonly lifecycleState: 'active' | 'suspended' | 'archived' | 'deleted' | 'quarantined';
  readonly availabilityState: 'available' | 'unavailable' | 'unknown' | 'degraded';
  readonly authorizationScope: string;
  readonly displayLabelMinimized: string;
  readonly noDomainTransfer: true;
}

export function createResourceReferenceV1(input: {
  readonly resourceReferenceId: string;
  readonly ownerModule: string;
  readonly resourceType: string;
  readonly resourcePublicId: string;
  readonly tenantId: string;
  readonly contextId: string;
  readonly allowedActions: readonly string[];
  readonly authorizationScope: string;
  readonly displayLabelMinimized: string;
  readonly sensitivityLevel?: NoduosSensitivityLevel | undefined;
}): ResourceReferenceV1 {
  return {
    resourceReferenceId: input.resourceReferenceId,
    ownerModule: input.ownerModule,
    resourceType: input.resourceType,
    resourcePublicId: input.resourcePublicId,
    tenantId: input.tenantId,
    contextId: input.contextId,
    sensitivityLevel: input.sensitivityLevel ?? 'restricted',
    allowedActions: input.allowedActions,
    lifecycleState: 'active',
    availabilityState: 'available',
    authorizationScope: input.authorizationScope,
    displayLabelMinimized: input.displayLabelMinimized,
    noDomainTransfer: true
  };
}

export function validateResourceReferenceV1(reference: ResourceReferenceV1): readonly string[] {
  const errors: string[] = [];
  if (!reference.resourceReferenceId) errors.push('resource_reference_id_required');
  if (!reference.ownerModule) errors.push('owner_module_required');
  if (!reference.resourceType) errors.push('resource_type_required');
  if (!reference.resourcePublicId) errors.push('resource_public_id_required');
  if (!reference.tenantId) errors.push('tenant_id_required');
  if (!reference.contextId) errors.push('context_id_required');
  if (reference.allowedActions.length === 0) errors.push('allowed_actions_required');
  if (reference.lifecycleState !== 'active') errors.push('resource_not_active');
  if (reference.noDomainTransfer !== true) errors.push('no_domain_transfer_required');
  return errors;
}

export function assertResourceReferenceV1(reference: ResourceReferenceV1): ResourceReferenceV1 {
  const errors = validateResourceReferenceV1(reference);
  if (errors.length > 0) throw new Error('invalid_resource_reference:' + errors.join(','));
  return reference;
}

