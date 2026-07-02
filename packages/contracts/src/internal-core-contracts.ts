export type ContractVersion = "v1";
export type ContractStatus = "Active";
export type SensitivityLevel = "Public" | "Internal" | "Restricted" | "Sensitive" | "Critical";
export type InternalCoreContractId =
  | "NODUOS.CORE.AUTHORIZATION_DECISION.v1"
  | "NODUOS.CORE.RESOURCE_REFERENCE.v1"
  | "NODUOS.CORE.EVENT_ENVELOPE.v1"
  | "NODUOS.CORE.SECRET_REFERENCE.v1"
  | "NODUOS.CORE.EVIDENCE_REFERENCE.v1"
  | "NODUOS.CORE.TENANT_CONTEXT.v1"
  | "NODUOS.CORE.AUDIT_REFERENCE.v1"
  | "NODUOS.CORE.ERROR_ENVELOPE.v1"
  | "NODUOS.CORE.IDEMPOTENCY_COMMAND.v1";

export interface ActorReferenceV1 {
  actor_reference_id: string;
  actor_type: string;
  owner_module: string;
  tenant_id?: string;
  context_id?: string;
  no_domain_transfer: true;
}

export interface AuditReferencePointerV1 {
  audit_reference_id: string;
  contract_id: "NODUOS.CORE.AUDIT_REFERENCE.v1";
  contract_version: ContractVersion;
  owner_module: "Core Platform";
}

export interface InternalCoreContractV1 {
  contract_id: InternalCoreContractId;
  contract_version: ContractVersion;
  owner_module: "Core Platform";
  status: ContractStatus;
  purpose: string;
  allowed_producer: readonly string[];
  allowed_consumer: readonly string[];
  tenant_required: boolean;
  context_required: boolean;
  actor_required: boolean;
  authorization_required: boolean;
  audit_required: boolean;
  resource_reference_policy: string;
  evidence_reference_policy: string;
  secret_reference_policy: string;
  sensitivity_level: SensitivityLevel;
  payload_minimized: true;
  raw_secret_allowed: "never";
  raw_evidence_allowed: false;
  raw_biometric_allowed: false;
  allowed_fields: readonly string[];
  forbidden_fields: readonly string[];
  error_codes: readonly string[];
  fail_closed_rules: readonly string[];
  compatibility_policy: string;
  deprecation_policy: string;
  [key: string]: unknown;
}

export type AuthorizationDecisionV1 = InternalCoreContractV1 & {
  contract_id: "NODUOS.CORE.AUTHORIZATION_DECISION.v1";
  decision_id: string;
  tenant_id: string;
  context_id: string;
  actor_reference: ActorReferenceV1;
  permission_code: string;
  action_code: string;
  correlation_id: string;
  audit_reference: AuditReferencePointerV1;
  issued_at: string;
  expires_at: string;
  decision: "allow" | "deny" | "conditional" | "expired";
  fail_closed: true;
  owner_module_must_execute: true;
};

export type ResourceReferenceV1 = InternalCoreContractV1 & {
  contract_id: "NODUOS.CORE.RESOURCE_REFERENCE.v1";
  resource_reference_id: string;
  public_resource_id: string;
  tenant_id: string;
  scope: readonly string[];
  no_domain_transfer: true;
  no_shared_database_access: true;
};

export type EventEnvelopeV1 = InternalCoreContractV1 & {
  contract_id: "NODUOS.CORE.EVENT_ENVELOPE.v1";
  event_id: string;
  event_name: string;
  event_type: "fact_occurred" | "request_registered" | "state_changed" | "technical";
  event_version: ContractVersion;
  source_module: string;
  producer_module: string;
  payload: Record<string, unknown>;
  correlation_id: string;
};

export type SecretReferenceV1 = InternalCoreContractV1 & {
  contract_id: "NODUOS.CORE.SECRET_REFERENCE.v1";
  secret_reference_id: string;
  raw_secret_allowed: "never";
  no_domain_transfer: true;
};

export type EvidenceReferenceV1 = InternalCoreContractV1 & {
  contract_id: "NODUOS.CORE.EVIDENCE_REFERENCE.v1";
  evidence_reference_id: string;
  raw_evidence_allowed: false;
  no_domain_transfer: true;
};

export type TenantContextV1 = InternalCoreContractV1 & {
  contract_id: "NODUOS.CORE.TENANT_CONTEXT.v1";
  tenant_id: string;
  context_id: string;
  actor_reference: ActorReferenceV1;
  membership_reference: string;
  does_not_authorize: true;
};

export type AuditReferenceV1 = InternalCoreContractV1 & {
  contract_id: "NODUOS.CORE.AUDIT_REFERENCE.v1";
  audit_reference_id: string;
  immutable: true;
  does_not_authorize: true;
};

export type ErrorEnvelopeV1 = InternalCoreContractV1 & {
  contract_id: "NODUOS.CORE.ERROR_ENVELOPE.v1";
  error_id: string;
  error_code: string;
  message_safe: string;
  correlation_id: string;
  retryable: boolean;
  fail_closed: boolean;
};

export type IdempotencyCommandV1 = InternalCoreContractV1 & {
  contract_id: "NODUOS.CORE.IDEMPOTENCY_COMMAND.v1";
  idempotency_key: string;
  payload_fingerprint: string;
  replay_policy: "return_recorded_result" | "return_safe_duplicate_status";
  conflict_policy: "reject_different_payload" | "quarantine_different_payload";
  does_not_authorize: true;
};

export const INTERNAL_CORE_CONTRACT_IDS: readonly InternalCoreContractId[] = [
  "NODUOS.CORE.AUTHORIZATION_DECISION.v1",
  "NODUOS.CORE.RESOURCE_REFERENCE.v1",
  "NODUOS.CORE.EVENT_ENVELOPE.v1",
  "NODUOS.CORE.SECRET_REFERENCE.v1",
  "NODUOS.CORE.EVIDENCE_REFERENCE.v1",
  "NODUOS.CORE.TENANT_CONTEXT.v1",
  "NODUOS.CORE.AUDIT_REFERENCE.v1",
  "NODUOS.CORE.ERROR_ENVELOPE.v1",
  "NODUOS.CORE.IDEMPOTENCY_COMMAND.v1"
];

