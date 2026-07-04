import {
  createCoreBoundaryFacade,
  type CoreAuthorizationPayload,
  type CoreBoundaryRequest,
  type CoreContractBoundaryPayload,
  type CoreEventEnvelopePayload,
  type CoreEvidenceReferencePayload,
  type CoreIdempotencyPayload,
  type CoreSecretReferencePayload,
} from "../../modules/core-platform/src/api-boundary/index.js";

function assert(condition: boolean, message: string): void {
  if (!condition) {
    throw new Error(message);
  }
}

function buildRequest<TPayload extends object>(
  payload: TPayload,
  contractId = "NODUOS.CORE.TEST_BOUNDARY.v1",
): CoreBoundaryRequest<TPayload> {
  return {
    request_id: `req_${Math.random().toString(16).slice(2)}`,
    contract_id: contractId,
    contract_version: "v1",
    correlation_id: "corr_core_api_boundary",
    received_at: new Date().toISOString(),
    payload,
  };
}

const facade = createCoreBoundaryFacade();

const validAuthorization: CoreAuthorizationPayload = {
  tenant_id: "tenant_1",
  context_id: "ctx_1",
  actor_reference: "actor:user_1",
  resource_reference: "resource:unit_1",
  permission_code: "core.permission.test",
  authorization_scope: "structural",
  purpose: "structural_test",
  sensitivity_level: "internal",
  audit_reference: "audit:ref_1",
};

const authorizationAllowed = facade.validateAuthorization(buildRequest(validAuthorization));
assert(authorizationAllowed.status === "allowed", "AuthorizationBoundary deve permitir payload valido");

const authorizationWithoutTenant: CoreAuthorizationPayload = {
  context_id: "ctx_1",
  actor_reference: "actor:user_1",
  permission_code: "core.permission.test",
  audit_reference: "audit:ref_1",
};
assert(facade.validateAuthorization(buildRequest(authorizationWithoutTenant)).fail_closed === true, "AuthorizationBoundary deve falhar fechado sem tenant");

const authorizationWithoutContext: CoreAuthorizationPayload = {
  tenant_id: "tenant_1",
  actor_reference: "actor:user_1",
  permission_code: "core.permission.test",
  audit_reference: "audit:ref_1",
};
assert(facade.validateAuthorization(buildRequest(authorizationWithoutContext)).fail_closed === true, "AuthorizationBoundary deve falhar fechado sem context");

const authorizationWithoutActor: CoreAuthorizationPayload = {
  tenant_id: "tenant_1",
  context_id: "ctx_1",
  permission_code: "core.permission.test",
  audit_reference: "audit:ref_1",
};
assert(facade.validateAuthorization(buildRequest(authorizationWithoutActor)).fail_closed === true, "AuthorizationBoundary deve falhar fechado sem actor");

const authorizationWithoutPermission: CoreAuthorizationPayload = {
  tenant_id: "tenant_1",
  context_id: "ctx_1",
  actor_reference: "actor:user_1",
  audit_reference: "audit:ref_1",
};
assert(facade.validateAuthorization(buildRequest(authorizationWithoutPermission)).fail_closed === true, "AuthorizationBoundary deve falhar fechado sem permission");

const authorizationWithoutAudit: CoreAuthorizationPayload = {
  tenant_id: "tenant_1",
  context_id: "ctx_1",
  actor_reference: "actor:user_1",
  permission_code: "core.permission.test",
};
assert(facade.validateAuthorization(buildRequest(authorizationWithoutAudit)).fail_closed === true, "AuthorizationBoundary deve falhar fechado sem audit_reference");

const tenantContext = facade.validateTenantContext(buildRequest({ tenant_id: "tenant_1", context_id: "ctx_1" }));
assert(tenantContext.status === "resolved" && tenantContext.result.does_not_authorize === true, "TenantContextBoundary nao autoriza sozinho");

const resourceReference = facade.validateResourceReference(buildRequest({ resource_reference: "resource:1", no_domain_transfer: true }));
assert(resourceReference.status === "resolved" && resourceReference.result.no_domain_transfer === true, "ResourceReferenceBoundary exige no_domain_transfer");

const eventPayload: CoreEventEnvelopePayload = {
  event_id: "event_1",
  event_name: "CoreFactRegistered",
  event_type: "fact",
  payload_minimized: true,
  payload: { ok: true },
};
const eventEnvelope = facade.validateEventEnvelope(buildRequest(eventPayload));
assert(eventEnvelope.status === "accepted" && eventEnvelope.result.payload_minimized === true, "EventEnvelopeBoundary exige payload_minimized");

const commandEventPayload: CoreEventEnvelopePayload = {
  event_id: "event_2",
  event_name: "ExecuteCommand",
  event_type: "technical",
  payload_minimized: true,
};
assert(facade.validateEventEnvelope(buildRequest(commandEventPayload)).fail_closed === true, "EventEnvelopeBoundary rejeita evento-comando");

const secretPayload: CoreSecretReferencePayload = { secret_reference: "secret:ref_1", raw_secret_allowed: "never" };
assert(facade.validateSecretReference(buildRequest(secretPayload)).status === "resolved", "SecretReferenceBoundary aceita referencia segura");

const rawSecretPayload: CoreSecretReferencePayload = { secret_reference: "secret:ref_1", raw_secret_allowed: "raw" };
assert(facade.validateSecretReference(buildRequest(rawSecretPayload)).fail_closed === true, "SecretReferenceBoundary rejeita segredo bruto");

const evidencePayload: CoreEvidenceReferencePayload = { evidence_reference: "evidence:ref_1", raw_evidence_allowed: false };
assert(facade.validateEvidenceReference(buildRequest(evidencePayload)).status === "resolved", "EvidenceReferenceBoundary aceita referencia segura");

const rawEvidencePayload: CoreEvidenceReferencePayload = { evidence_reference: "evidence:ref_1", raw_evidence_allowed: true };
assert(facade.validateEvidenceReference(buildRequest(rawEvidencePayload)).fail_closed === true, "EvidenceReferenceBoundary rejeita evidencia bruta");

const auditReference = facade.validateAuditReference(buildRequest({ audit_reference: "audit:ref_1" }));
assert(auditReference.status === "resolved" && auditReference.result.does_not_authorize === true, "AuditBoundary nao autoriza");

const idem1: CoreIdempotencyPayload = { idempotency_key: "idem_1", command_fingerprint: "fp_1", idempotency_required: true };
const idem2: CoreIdempotencyPayload = { idempotency_key: "idem_1", command_fingerprint: "fp_1", idempotency_required: true };
const idem3: CoreIdempotencyPayload = { idempotency_key: "idem_1", command_fingerprint: "fp_2", idempotency_required: true };
assert(facade.validateIdempotency(buildRequest(idem1)).status === "accepted", "IdempotencyBoundary aceita primeira execucao");
assert(facade.validateIdempotency(buildRequest(idem2)).status === "replayed", "IdempotencyBoundary detecta replay");
assert(facade.validateIdempotency(buildRequest(idem3)).status === "conflict", "IdempotencyBoundary detecta conflito");

const validContract: CoreContractBoundaryPayload = {
  contract_id: "NODUOS.CORE.AUTHORIZATION_DECISION.v1",
  contract_version: "v1",
  owner_module: "core-platform",
  status: "active",
};
assert(facade.validateContract(buildRequest(validContract)).status === "resolved", "ContractBoundary aceita contrato conhecido");

const unknownContract: CoreContractBoundaryPayload = {
  contract_id: "NODUOS.CORE.UNKNOWN.v1",
  contract_version: "v1",
  owner_module: "core-platform",
  status: "active",
};
assert(facade.validateContract(buildRequest(unknownContract)).fail_closed === true, "ContractBoundary falha fechado para contrato desconhecido");

console.log("OK: Core API Boundary structural test passed");
