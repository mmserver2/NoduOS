export type CoreBoundaryContractVersion = "v1";
export type CoreBoundaryStatus = "accepted" | "allowed" | "denied" | "failed" | "replayed" | "conflict" | "resolved";
export type CoreBoundarySensitivityLevel = "public" | "internal" | "sensitive" | "restricted";

export interface CoreBoundaryMetadata {
  request_id: string;
  contract_id: string;
  contract_version: CoreBoundaryContractVersion;
  correlation_id: string;
  causation_id?: string;
  received_at: string;
  actor_reference?: string;
  tenant_id?: string;
  context_id?: string;
  purpose?: string;
  sensitivity_level?: CoreBoundarySensitivityLevel;
}

export interface CoreBoundaryRequest<TPayload extends object = object> extends CoreBoundaryMetadata {
  payload: TPayload;
}

export interface CoreBoundaryError {
  error_contract_id: "NODUOS.CORE.ERROR_ENVELOPE.v1";
  code: string;
  message_safe: string;
  fail_closed: true;
  correlation_id: string;
  details_minimized?: Record<string, string>;
}

export interface CoreBoundarySuccess<TResult extends object = object> {
  status: Exclude<CoreBoundaryStatus, "denied" | "failed" | "conflict">;
  request_id: string;
  contract_id: string;
  contract_version: CoreBoundaryContractVersion;
  result: TResult;
  audit_reference?: string;
  correlation_id: string;
  processed_at: string;
  fail_closed: false;
}

export interface CoreBoundaryFailure {
  status: "denied" | "failed" | "conflict";
  request_id: string;
  contract_id: string;
  contract_version: CoreBoundaryContractVersion;
  error: CoreBoundaryError;
  correlation_id: string;
  processed_at: string;
  fail_closed: true;
}

export type CoreBoundaryResponse<TResult extends object = object> = CoreBoundarySuccess<TResult> | CoreBoundaryFailure;

export interface CoreAuthorizationPayload {
  tenant_id?: string;
  context_id?: string;
  actor_reference?: string;
  resource_reference?: string;
  permission_code?: string;
  authorization_scope?: string;
  purpose?: string;
  sensitivity_level?: CoreBoundarySensitivityLevel;
  audit_reference?: string;
}

export interface CoreTenantContextPayload {
  tenant_id?: string;
  context_id?: string;
  context_type?: "tenant" | "organization" | "space" | "unit";
  does_not_authorize?: true;
}

export interface CoreResourceReferencePayload {
  resource_reference?: string;
  resource_type?: string;
  owner_module?: string;
  no_domain_transfer?: boolean;
}

export interface CoreEventEnvelopePayload {
  event_id?: string;
  event_name?: string;
  event_type?: "fact" | "request_registered" | "state_changed" | "technical";
  payload_minimized?: boolean;
  payload?: Record<string, unknown>;
}

export interface CoreSecretReferencePayload {
  secret_reference?: string;
  secret_provider?: string;
  raw_secret_allowed?: "never" | "raw";
}

export interface CoreEvidenceReferencePayload {
  evidence_reference?: string;
  evidence_type?: string;
  raw_evidence_allowed?: boolean;
}

export interface CoreAuditReferencePayload {
  audit_reference?: string;
  does_not_authorize?: true;
}

export interface CoreIdempotencyPayload {
  idempotency_key?: string;
  command_fingerprint?: string;
  idempotency_required?: boolean;
}

export interface CoreContractBoundaryPayload {
  contract_id?: string;
  contract_version?: CoreBoundaryContractVersion;
  owner_module?: string;
  status?: "active" | "unknown" | "deprecated";
}
