import type {
  IdempotencyCommandV1,
  InternalCoreContractV1
} from "./internal-core-contracts.js";

export interface ValidationResult {
  ok: boolean;
  errors: readonly string[];
}

const result = (errors: readonly string[]): ValidationResult => ({
  ok: errors.length === 0,
  errors
});

const isRecord = (value: unknown): value is Record<string, unknown> => {
  return typeof value === "object" && value !== null && !Array.isArray(value);
};

const hasText = (value: unknown): value is string => {
  return typeof value === "string" && value.trim().length > 0;
};

const hasArray = (value: unknown): value is readonly unknown[] => {
  return Array.isArray(value);
};

const requireText = (source: Record<string, unknown>, key: string, errors: string[]): void => {
  if (!hasText(source[key])) errors.push(`${key} is required`);
};

const requireArray = (source: Record<string, unknown>, key: string, errors: string[]): void => {
  if (!hasArray(source[key])) errors.push(`${key} array is required`);
};

const validateBase = (source: Record<string, unknown>, contractId: string): string[] => {
  const errors: string[] = [];

  if (source.contract_id !== contractId) errors.push(`contract_id must be ${contractId}`);
  if (source.contract_version !== "v1") errors.push("contract_version must be v1");
  if (source.owner_module !== "Core Platform") errors.push("owner_module must be Core Platform");
  if (source.status !== "Active") errors.push("status must be Active");
  requireText(source, "purpose", errors);
  requireArray(source, "allowed_producer", errors);
  requireArray(source, "allowed_consumer", errors);
  requireText(source, "sensitivity_level", errors);
  if (source.payload_minimized !== true) errors.push("payload_minimized must be true");
  if (source.raw_secret_allowed !== "never") errors.push("raw_secret_allowed must be never");
  if (source.raw_evidence_allowed !== false) errors.push("raw_evidence_allowed must be false");
  if (source.raw_biometric_allowed !== false) errors.push("raw_biometric_allowed must be false");
  requireArray(source, "allowed_fields", errors);
  requireArray(source, "forbidden_fields", errors);
  requireArray(source, "error_codes", errors);
  requireArray(source, "fail_closed_rules", errors);
  requireText(source, "compatibility_policy", errors);
  requireText(source, "deprecation_policy", errors);

  return errors;
};

export const validateResourceReference = (value: unknown): ValidationResult => {
  if (!isRecord(value)) return result(["ResourceReference must be an object"]);
  const errors = validateBase(value, "NODUOS.CORE.RESOURCE_REFERENCE.v1");

  requireText(value, "resource_reference_id", errors);
  requireText(value, "resource_type", errors);
  requireText(value, "public_resource_id", errors);
  requireText(value, "tenant_id", errors);
  requireArray(value, "scope", errors);
  requireText(value, "lifecycle_state", errors);
  requireText(value, "availability_state", errors);
  requireArray(value, "allowed_actions", errors);
  if (value.no_domain_transfer !== true) errors.push("no_domain_transfer must be true");
  if (value.no_shared_database_access !== true) errors.push("no_shared_database_access must be true");

  return result(errors);
};

export const validateAuthorizationDecision = (value: unknown): ValidationResult => {
  if (!isRecord(value)) return result(["AuthorizationDecision must be an object"]);
  const errors = validateBase(value, "NODUOS.CORE.AUTHORIZATION_DECISION.v1");

  requireText(value, "decision_id", errors);
  if (value.decision_version !== "v1") errors.push("decision_version must be v1");
  requireText(value, "tenant_id", errors);
  requireText(value, "context_id", errors);
  if (!isRecord(value.actor_reference)) errors.push("actor_reference is required");
  requireText(value, "permission_code", errors);
  requireText(value, "action_code", errors);
  requireArray(value, "scope", errors);
  requireText(value, "policy_result", errors);
  requireText(value, "permission_result", errors);
  requireText(value, "license_result", errors);
  requireText(value, "feature_flag_result", errors);
  requireText(value, "privacy_result", errors);
  requireText(value, "correlation_id", errors);
  if (!isRecord(value.audit_reference)) errors.push("audit_reference is required");
  requireText(value, "issued_at", errors);
  requireText(value, "expires_at", errors);
  requireText(value, "decision", errors);
  requireText(value, "reason_code", errors);
  if (value.fail_closed !== true) errors.push("fail_closed must be true");
  if (value.owner_module_must_execute !== true) errors.push("owner_module_must_execute must be true");

  return result(errors);
};

export const validateEventEnvelope = (value: unknown): ValidationResult => {
  if (!isRecord(value)) return result(["EventEnvelope must be an object"]);
  const errors = validateBase(value, "NODUOS.CORE.EVENT_ENVELOPE.v1");

  requireText(value, "event_id", errors);
  requireText(value, "event_name", errors);
  requireText(value, "event_type", errors);
  if (value.event_version !== "v1") errors.push("event_version must be v1");
  requireText(value, "source_module", errors);
  requireText(value, "producer_module", errors);
  if (!isRecord(value.payload)) errors.push("payload object is required");
  requireText(value, "correlation_id", errors);
  requireText(value, "occurred_at", errors);
  requireText(value, "published_at", errors);

  return result(errors);
};

export const validateSecretReference = (value: unknown): ValidationResult => {
  if (!isRecord(value)) return result(["SecretReference must be an object"]);
  const errors = validateBase(value, "NODUOS.CORE.SECRET_REFERENCE.v1");

  requireText(value, "secret_reference_id", errors);
  requireText(value, "secret_type", errors);
  requireArray(value, "secret_scope", errors);
  requireText(value, "access_policy_reference", errors);
  requireText(value, "rotation_policy_reference", errors);
  requireText(value, "revocation_policy_reference", errors);
  requireText(value, "audit_policy_reference", errors);
  if (value.raw_secret_allowed !== "never") errors.push("raw_secret_allowed must be never");
  if (value.no_domain_transfer !== true) errors.push("no_domain_transfer must be true");

  return result(errors);
};

export const validateEvidenceReference = (value: unknown): ValidationResult => {
  if (!isRecord(value)) return result(["EvidenceReference must be an object"]);
  const errors = validateBase(value, "NODUOS.CORE.EVIDENCE_REFERENCE.v1");

  requireText(value, "evidence_reference_id", errors);
  requireText(value, "evidence_type", errors);
  requireArray(value, "evidence_scope", errors);
  requireText(value, "tenant_id", errors);
  requireText(value, "custody_reference", errors);
  requireText(value, "chain_of_custody_reference", errors);
  requireText(value, "retention_policy_reference", errors);
  requireText(value, "masking_policy_reference", errors);
  requireText(value, "access_policy_reference", errors);
  requireText(value, "export_control_policy_reference", errors);
  requireText(value, "integrity_reference", errors);
  if (!isRecord(value.audit_reference)) errors.push("audit_reference is required");
  if (value.raw_evidence_allowed !== false) errors.push("raw_evidence_allowed must be false");
  if (value.no_domain_transfer !== true) errors.push("no_domain_transfer must be true");

  return result(errors);
};

export const validateTenantContext = (value: unknown): ValidationResult => {
  if (!isRecord(value)) return result(["TenantContext must be an object"]);
  const errors = validateBase(value, "NODUOS.CORE.TENANT_CONTEXT.v1");

  requireText(value, "tenant_id", errors);
  requireText(value, "context_id", errors);
  requireText(value, "context_type", errors);
  if (!isRecord(value.actor_reference)) errors.push("actor_reference is required");
  requireText(value, "membership_reference", errors);
  requireArray(value, "scope", errors);
  requireArray(value, "active_role_references", errors);
  requireArray(value, "active_permission_references", errors);
  requireText(value, "selected_at", errors);
  requireText(value, "correlation_id", errors);
  if (value.does_not_authorize !== true) errors.push("TenantContext does not authorize alone");

  return result(errors);
};

export const validateAuditReference = (value: unknown): ValidationResult => {
  if (!isRecord(value)) return result(["AuditReference must be an object"]);
  const errors = validateBase(value, "NODUOS.CORE.AUDIT_REFERENCE.v1");

  requireText(value, "audit_reference_id", errors);
  requireText(value, "audit_type", errors);
  if (!isRecord(value.actor_reference)) errors.push("actor_reference is required");
  requireText(value, "tenant_id", errors);
  requireText(value, "action_code", errors);
  requireText(value, "correlation_id", errors);
  requireText(value, "occurred_at", errors);
  requireText(value, "retention_policy_reference", errors);
  if (value.immutable !== true) errors.push("immutable must be true");
  if (value.does_not_authorize !== true) errors.push("AuditReference does not authorize");

  return result(errors);
};

export const validateErrorEnvelope = (value: unknown): ValidationResult => {
  if (!isRecord(value)) return result(["ErrorEnvelope must be an object"]);
  const errors = validateBase(value, "NODUOS.CORE.ERROR_ENVELOPE.v1");

  requireText(value, "error_id", errors);
  requireText(value, "error_code", errors);
  requireText(value, "message_safe", errors);
  requireText(value, "correlation_id", errors);
  requireText(value, "occurred_at", errors);
  if (typeof value.retryable !== "boolean") errors.push("retryable boolean is required");
  if (typeof value.fail_closed !== "boolean") errors.push("fail_closed boolean is required");
  requireArray(value, "prohibited_sensitive_leakage", errors);

  const unsafeMarkers = ["stack", "secret", "token", "password", "private", "env", "/"];
  const message = String(value.message_safe ?? "").toLowerCase();
  for (const marker of unsafeMarkers) {
    if (message.includes(marker)) errors.push(`message_safe contains unsafe marker: ${marker}`);
  }

  return result(errors);
};

export const validateIdempotencyCommand = (value: unknown): ValidationResult => {
  if (!isRecord(value)) return result(["IdempotencyCommand must be an object"]);
  const errors = validateBase(value, "NODUOS.CORE.IDEMPOTENCY_COMMAND.v1");

  requireText(value, "idempotency_key", errors);
  requireText(value, "command_name", errors);
  if (value.command_version !== "v1") errors.push("command_version must be v1");
  requireText(value, "tenant_id", errors);
  if (!isRecord(value.actor_reference)) errors.push("actor_reference is required");
  requireText(value, "payload_fingerprint", errors);
  requireText(value, "correlation_id", errors);
  requireText(value, "issued_at", errors);
  requireText(value, "expires_at", errors);
  requireText(value, "replay_policy", errors);
  requireText(value, "conflict_policy", errors);
  if (!isRecord(value.audit_reference)) errors.push("audit_reference is required");
  if (value.does_not_authorize !== true) errors.push("IdempotencyCommand does not authorize alone");

  return result(errors);
};

export const resolveIdempotencyReplayOrConflict = (
  previous: IdempotencyCommandV1,
  current: IdempotencyCommandV1
): "new" | "replay" | "conflict" => {
  if (previous.idempotency_key !== current.idempotency_key) return "new";
  if (previous.payload_fingerprint === current.payload_fingerprint) return "replay";
  return "conflict";
};

export const validateInternalCoreContract = (value: InternalCoreContractV1): ValidationResult => {
  if (!isRecord(value)) return result(["InternalCoreContract must be an object"]);

  switch (value.contract_id) {
    case "NODUOS.CORE.AUTHORIZATION_DECISION.v1":
      return validateAuthorizationDecision(value);
    case "NODUOS.CORE.RESOURCE_REFERENCE.v1":
      return validateResourceReference(value);
    case "NODUOS.CORE.EVENT_ENVELOPE.v1":
      return validateEventEnvelope(value);
    case "NODUOS.CORE.SECRET_REFERENCE.v1":
      return validateSecretReference(value);
    case "NODUOS.CORE.EVIDENCE_REFERENCE.v1":
      return validateEvidenceReference(value);
    case "NODUOS.CORE.TENANT_CONTEXT.v1":
      return validateTenantContext(value);
    case "NODUOS.CORE.AUDIT_REFERENCE.v1":
      return validateAuditReference(value);
    case "NODUOS.CORE.ERROR_ENVELOPE.v1":
      return validateErrorEnvelope(value);
    case "NODUOS.CORE.IDEMPOTENCY_COMMAND.v1":
      return validateIdempotencyCommand(value);
    default:
      return result(["unsupported internal core contract_id"]);
  }
};
