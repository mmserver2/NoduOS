import { SensitivityLevel } from '../../contracts/src';

export interface SecretReference {
  readonly secretReferenceId: string;
  readonly ownerModule: string;
  readonly purpose: string;
  readonly scope: string;
  readonly vaultProviderReference: string;
  readonly rotationPolicyReference: string;
  readonly revocationPolicyReference: string;
  readonly accessPolicyReference: string;
  readonly auditPolicyReference: string;
  readonly sensitivityLevel: SensitivityLevel.Critical;
  readonly rawSecretAllowed: 'never';
  readonly expiresAt?: string;
  readonly lastRotatedAt?: string;
}

export class SecretReferenceError extends Error {
  public constructor(message: string) {
    super(message);
    this.name = 'SecretReferenceError';
  }
}

export function createSecretReference(input: Omit<SecretReference, 'sensitivityLevel' | 'rawSecretAllowed'>): SecretReference {
  for (const [key, value] of Object.entries(input)) {
    if (typeof value === 'string' && !value.trim()) {
      throw new SecretReferenceError(`${key} is required for SecretReference.`);
    }
  }
  return Object.freeze({
    ...input,
    sensitivityLevel: SensitivityLevel.Critical,
    rawSecretAllowed: 'never'
  });
}

const RAW_SECRET_FIELD_NAMES = [
  'password', 'senha', 'token', 'accessToken', 'refreshToken', 'secret', 'clientSecret',
  'privateKey', 'apiKey', 'webhookSecret', 'credential', 'certificatePrivateKey'
];

export function assertNoRawSecretFields(payload: unknown, path = 'payload'): void {
  if (payload === null || payload === undefined) return;
  if (Array.isArray(payload)) {
    payload.forEach((item, index) => assertNoRawSecretFields(item, `${path}[${index}]`));
    return;
  }
  if (typeof payload !== 'object') return;
  for (const [key, value] of Object.entries(payload as Record<string, unknown>)) {
    if (RAW_SECRET_FIELD_NAMES.includes(key)) {
      throw new SecretReferenceError(`raw secret field is forbidden at ${path}.${key}; use SecretReference v1.`);
    }
    assertNoRawSecretFields(value, `${path}.${key}`);
  }
}
