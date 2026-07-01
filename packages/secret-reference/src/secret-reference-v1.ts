export interface SecretReferenceV1 {
  readonly secretReferenceId: string;
  readonly ownerModule: string;
  readonly vaultProviderReference: string;
  readonly purpose: string;
  readonly scope: string;
  readonly rotationPolicyReference: string;
  readonly revocationPolicyReference: string;
  readonly accessPolicyReference: string;
  readonly auditPolicyReference: string;
  readonly sensitivityLevel: 'critical';
  readonly rawSecretAllowed: 'never';
  readonly noDomainTransfer: true;
}

export function createSecretReferenceV1(input: Omit<SecretReferenceV1, 'sensitivityLevel' | 'rawSecretAllowed' | 'noDomainTransfer'>): SecretReferenceV1 {
  return { ...input, sensitivityLevel: 'critical', rawSecretAllowed: 'never', noDomainTransfer: true };
}

export function validateSecretReferenceV1(reference: SecretReferenceV1): readonly string[] {
  const errors: string[] = [];
  if (!reference.secretReferenceId) errors.push('secret_reference_id_required');
  if (!reference.ownerModule) errors.push('owner_module_required');
  if (!reference.purpose) errors.push('purpose_required');
  if (!reference.scope) errors.push('scope_required');
  if (!reference.rotationPolicyReference) errors.push('rotation_policy_required');
  if (!reference.revocationPolicyReference) errors.push('revocation_policy_required');
  if (!reference.accessPolicyReference) errors.push('access_policy_required');
  if (!reference.auditPolicyReference) errors.push('audit_policy_required');
  if (reference.rawSecretAllowed !== 'never') errors.push('raw_secret_forbidden');
  if (reference.noDomainTransfer !== true) errors.push('no_domain_transfer_required');
  return errors;
}

