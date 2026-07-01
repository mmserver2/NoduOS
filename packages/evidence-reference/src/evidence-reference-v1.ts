export interface EvidenceReferenceV1 {
  readonly evidenceReferenceId: string;
  readonly evidenceOwnerModule: string;
  readonly custodyOwnerModule: string;
  readonly relatedResourceReference: string;
  readonly tenantId: string;
  readonly contextId: string;
  readonly evidenceType: string;
  readonly sensitivityLevel: 'Sensivel' | 'Critico';
  readonly storageReference: string;
  readonly retentionPolicyReference: string;
  readonly maskingPolicyReference?: string;
  readonly chainOfCustodyReference?: string;
  readonly auditReference: string;
}

export const evidenceReferenceRules = {
  referencesProofWithoutRawPayload: true,
  rawEvidencePayloadAllowedByDefault: false,
  authorizationRequiredForSensitiveView: true,
  exportRequiresAudit: true,
  failClosedWhenPolicyIsMissing: true
} as const;
