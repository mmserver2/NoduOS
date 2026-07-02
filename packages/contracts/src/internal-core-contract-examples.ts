import type { ActorReferenceV1, AuditReferencePointerV1, IdempotencyCommandV1, InternalCoreContractV1 } from "./internal-core-contracts.js";

const actor: ActorReferenceV1 = {
  actor_reference_id: "actor_ref_01",
  actor_type: "UserAccount",
  owner_module: "Core Platform",
  tenant_id: "tenant_01",
  context_id: "context_01",
  no_domain_transfer: true
};

const audit: AuditReferencePointerV1 = {
  audit_reference_id: "audit_ref_01",
  contract_id: "NODUOS.CORE.AUDIT_REFERENCE.v1",
  contract_version: "v1",
  owner_module: "Core Platform"
};

const base = {
  contract_version: "v1" as const,
  owner_module: "Core Platform" as const,
  status: "Active" as const,
  purpose: "internal core contract validation",
  allowed_producer: ["Core Platform"],
  allowed_consumer: ["authorized internal service"],
  tenant_required: true,
  context_required: true,
  actor_required: true,
  authorization_required: true,
  audit_required: true,
  resource_reference_policy: "ResourceReference required when resource-bound",
  evidence_reference_policy: "EvidenceReference required when proof-bound",
  secret_reference_policy: "SecretReference required when secret-bound",
  sensitivity_level: "Sensitive" as const,
  payload_minimized: true as const,
  raw_secret_allowed: "never" as const,
  raw_evidence_allowed: false as const,
  raw_biometric_allowed: false as const,
  allowed_fields: ["contract_id", "contract_version", "owner_module"],
  forbidden_fields: ["raw_secret", "raw_evidence", "raw_biometric", "full_domain_payload"],
  error_codes: ["CONTRACT_INVALID"],
  fail_closed_rules: ["missing required context fails closed"],
  compatibility_policy: "additive compatible changes only inside v1",
  deprecation_policy: "incompatible changes require new version"
};

export const validResourceReference: InternalCoreContractV1 = {
  ...base,
  contract_id: "NODUOS.CORE.RESOURCE_REFERENCE.v1",
  resource_reference_id: "resource_ref_01",
  public_resource_id: "resource_public_01",
  tenant_id: "tenant_01",
  scope: ["tenant:tenant_01"],
  no_domain_transfer: true,
  no_shared_database_access: true
};

export const validAuthorizationDecision: InternalCoreContractV1 = {
  ...base,
  contract_id: "NODUOS.CORE.AUTHORIZATION_DECISION.v1",
  decision_id: "authz_01",
  tenant_id: "tenant_01",
  context_id: "context_01",
  actor_reference: actor,
  permission_code: "core.contract.validate",
  action_code: "internal_core_contract.validate",
  correlation_id: "corr_01",
  audit_reference: audit,
  issued_at: "2026-07-02T00:00:00Z",
  expires_at: "2026-07-02T00:10:00Z",
  decision: "allow",
  fail_closed: true,
  owner_module_must_execute: true
};

export const invalidAuthorizationDecision = {
  ...validAuthorizationDecision,
  tenant_id: "",
  context_id: "",
  actor_reference: undefined,
  fail_closed: false
};

export const validEventEnvelope: InternalCoreContractV1 = {
  ...base,
  contract_id: "NODUOS.CORE.EVENT_ENVELOPE.v1",
  authorization_required: false,
  sensitivity_level: "Internal",
  event_id: "event_01",
  event_name: "InternalCoreContractValidated",
  event_type: "fact_occurred",
  event_version: "v1",
  source_module: "Core Platform",
  producer_module: "Core Platform",
  payload: { status: "validated" },
  correlation_id: "corr_01"
};

export const validSecretReference: InternalCoreContractV1 = {
  ...base,
  contract_id: "NODUOS.CORE.SECRET_REFERENCE.v1",
  sensitivity_level: "Critical",
  secret_reference_id: "secret_ref_01",
  no_domain_transfer: true
};

export const validEvidenceReference: InternalCoreContractV1 = {
  ...base,
  contract_id: "NODUOS.CORE.EVIDENCE_REFERENCE.v1",
  sensitivity_level: "Critical",
  evidence_reference_id: "evidence_ref_01",
  no_domain_transfer: true
};

export const validTenantContext: InternalCoreContractV1 = {
  ...base,
  contract_id: "NODUOS.CORE.TENANT_CONTEXT.v1",
  authorization_required: false,
  tenant_id: "tenant_01",
  context_id: "context_01",
  actor_reference: actor,
  membership_reference: "membership_01",
  does_not_authorize: true
};

export const invalidTenantContext = {
  ...validTenantContext,
  tenant_id: "",
  context_id: "",
  actor_reference: undefined
};

export const validAuditReference: InternalCoreContractV1 = {
  ...base,
  contract_id: "NODUOS.CORE.AUDIT_REFERENCE.v1",
  authorization_required: false,
  audit_reference_id: "audit_ref_01",
  immutable: true,
  does_not_authorize: true
};

export const validErrorEnvelope: InternalCoreContractV1 = {
  ...base,
  contract_id: "NODUOS.CORE.ERROR_ENVELOPE.v1",
  authorization_required: false,
  sensitivity_level: "Internal",
  error_id: "error_01",
  error_code: "CONTRACT_VALIDATION_DENIED",
  message_safe: "Contract validation denied by policy.",
  correlation_id: "corr_01",
  retryable: false,
  fail_closed: true
};

export const invalidErrorEnvelope = {
  ...validErrorEnvelope,
  message_safe: "unsafe stack detail exposed"
};

export const validIdempotencyCommand: IdempotencyCommandV1 = {
  ...base,
  contract_id: "NODUOS.CORE.IDEMPOTENCY_COMMAND.v1",
  idempotency_key: "idem_01",
  payload_fingerprint: "fingerprint_a",
  replay_policy: "return_recorded_result",
  conflict_policy: "reject_different_payload",
  does_not_authorize: true
};

export const replayIdempotencyCommand: IdempotencyCommandV1 = { ...validIdempotencyCommand };
export const conflictIdempotencyCommand: IdempotencyCommandV1 = { ...validIdempotencyCommand, payload_fingerprint: "fingerprint_b" };

export const internalCoreContractExamples = [
  validAuthorizationDecision,
  validResourceReference,
  validEventEnvelope,
  validSecretReference,
  validEvidenceReference,
  validTenantContext,
  validAuditReference,
  validErrorEnvelope,
  validIdempotencyCommand
] as const;

