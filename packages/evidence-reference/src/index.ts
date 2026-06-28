import { SensitivityLevel } from '../../contracts/src';

export interface EvidenceReference {
  readonly evidenceReferenceId: string;
  readonly evidenceOwnerModule: string;
  readonly custodyOwnerModule: string;
  readonly tenantId: string;
  readonly contextId: string;
  readonly evidenceType: 'video' | 'snapshot' | 'clip' | 'document' | 'audit_trail' | 'external_event';
  readonly sensitivityLevel: SensitivityLevel.Sensitive | SensitivityLevel.Critical;
  readonly storageReference: string;
  readonly relatedResourceReferenceId: string;
  readonly relatedActorReferenceId?: string;
  readonly sourceEventReference?: string;
  readonly hashReference?: string;
  readonly retentionPolicyReference: string;
  readonly maskingPolicyReference: string;
  readonly accessPolicyReference: string;
  readonly chainOfCustodyReference?: string;
  readonly auditReference: string;
  readonly exportControlPolicyReference: string;
  readonly rawEvidenceAllowed: false;
}

export class EvidenceReferenceError extends Error {
  public constructor(message: string) {
    super(message);
    this.name = 'EvidenceReferenceError';
  }
}

export function createEvidenceReference(input: Omit<EvidenceReference, 'rawEvidenceAllowed'>): EvidenceReference {
  if (input.sensitivityLevel === SensitivityLevel.Critical && !input.chainOfCustodyReference) {
    throw new EvidenceReferenceError('critical evidence requires chain_of_custody_reference.');
  }
  return Object.freeze({ ...input, rawEvidenceAllowed: false });
}
