export interface SecretReferenceV1 {
  readonly secretReferenceId: string;
  readonly ownerModule: string;
  readonly purpose: string;
  readonly scope: string;
  readonly rotationPolicyReference: string;
  readonly revocationPolicyReference: string;
  readonly accessPolicyReference: string;
  readonly auditPolicyReference: string;
  readonly sensitivityLevel: 'Critico';
  readonly rawSecretAllowed: 'never';
}

export const secretReferenceRules = {
  rawSecretNeverTravels: true,
  rawSecretNeverLogged: true,
  rawSecretNeverDisplayed: true,
  rawSecretNeverInEvent: true,
  rawSecretNeverInReadModel: true,
  failClosedForCriticalSecretFailure: true
} as const;
