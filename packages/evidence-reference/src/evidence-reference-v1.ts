export type EvidenceType = 'VideoEvidence' | 'SnapshotEvidence' | 'ClipEvidence' | 'AccessEvidence' | 'AlarmEvidence' | 'DocumentEvidence' | 'AuditEvidence' | 'SupportEvidence' | 'ExportEvidence';

export interface EvidenceReferenceV1 {
  readonly evidenceReferenceId: string;
  readonly evidenceOwnerModule: string;
  readonly custodyOwnerModule: string;
  readonly relatedResourceReferenceId: string;
  readonly relatedActorReferenceId: string;
  readonly tenantId: string;
  readonly contextId: string;
  readonly evidenceType: EvidenceType;
  readonly sensitivityLevel: 'sensitive' | 'critical';
  readonly storageReference: string;
  readonly retentionPolicyReference: string;
  readonly maskingPolicyReference: string;
  readonly accessPolicyReference: string;
  readonly chainOfCustodyReference: string;
  readonly auditReferenceId: string;
  readonly exportControlPolicyReference: string;
  readonly rawEvidenceAllowed: false;
  readonly noDomainTransfer: true;
}

export function createEvidenceReferenceV1(input: Omit<EvidenceReferenceV1, 'sensitivityLevel' | 'rawEvidenceAllowed' | 'noDomainTransfer'>): EvidenceReferenceV1 {
  return { ...input, sensitivityLevel: 'critical', rawEvidenceAllowed: false, noDomainTransfer: true };
}

export function validateEvidenceReferenceV1(reference: EvidenceReferenceV1): readonly string[] {
  const errors: string[] = [];
  if (!reference.evidenceReferenceId) errors.push('evidence_reference_id_required');
  if (!reference.evidenceOwnerModule) errors.push('evidence_owner_module_required');
  if (!reference.custodyOwnerModule) errors.push('custody_owner_module_required');
  if (!reference.relatedResourceReferenceId) errors.push('related_resource_reference_required');
  if (!reference.relatedActorReferenceId) errors.push('related_actor_reference_required');
  if (!reference.tenantId || !reference.contextId) errors.push('tenant_context_required');
  if (!reference.storageReference) errors.push('storage_reference_required');
  if (!reference.chainOfCustodyReference) errors.push('chain_of_custody_required');
  if (!reference.auditReferenceId) errors.push('audit_reference_required');
  if (reference.rawEvidenceAllowed !== false) errors.push('raw_evidence_forbidden');
  if (reference.noDomainTransfer !== true) errors.push('no_domain_transfer_required');
  return errors;
}

