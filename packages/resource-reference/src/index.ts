import { ContractId, SensitivityLevel } from '../../contracts/src';

export interface ResourceReference {
  readonly resourceReferenceId: string;
  readonly contractId: ContractId;
  readonly contractVersion: `v${number}`;
  readonly referenceVersion: 'v1';
  readonly ownerModule: string;
  readonly resourceType: string;
  readonly resourcePublicId: string;
  readonly tenantId?: string;
  readonly contextId?: string;
  readonly moduleScope: string;
  readonly authorizationScope: string;
  readonly allowedActionsConceptual: readonly string[];
  readonly sensitivityLevel: SensitivityLevel;
  readonly dataCategories: readonly string[];
  readonly lifecycleState: 'active' | 'suspended' | 'archived' | 'deleted' | 'quarantined';
  readonly availabilityState?: 'available' | 'unavailable' | 'unknown';
  readonly policyReferences: readonly string[];
  readonly displayLabelMinimized?: string;
  readonly auditReference?: string;
  readonly expiresAt?: string;
  readonly noDomainTransfer: true;
}

export class ResourceReferenceError extends Error {
  public constructor(message: string) {
    super(message);
    this.name = 'ResourceReferenceError';
  }
}

export function createResourceReference(input: Omit<ResourceReference, 'referenceVersion' | 'noDomainTransfer'> & { readonly noDomainTransfer?: boolean }): ResourceReference {
  if (!input.ownerModule.trim()) throw new ResourceReferenceError('owner_module is required.');
  if (!input.resourceType.trim()) throw new ResourceReferenceError('resource_type is required.');
  if (!input.resourcePublicId.trim()) throw new ResourceReferenceError('resource_public_id is required.');
  if (input.noDomainTransfer === false) {
    throw new ResourceReferenceError('no_domain_transfer must be true.');
  }
  if (input.sensitivityLevel !== SensitivityLevel.Public && input.policyReferences.length === 0) {
    throw new ResourceReferenceError('restricted, sensitive or critical ResourceReference requires policy_references.');
  }
  return Object.freeze({
    ...input,
    referenceVersion: 'v1',
    noDomainTransfer: true
  });
}
