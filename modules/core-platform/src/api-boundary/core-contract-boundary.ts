import type {
  CoreBoundaryRequest,
  CoreBoundaryResponse,
  CoreContractBoundaryPayload,
} from "./core-boundary-types.js";
import { createCoreBoundarySuccess, denyCoreBoundaryRequest, requireString, validateBaseRequest } from "./core-boundary-result.js";

const KNOWN_CORE_CONTRACTS = new Set<string>([
  "NODUOS.CORE.AUTHORIZATION_DECISION.v1",
  "NODUOS.CORE.TENANT_CONTEXT.v1",
  "NODUOS.CORE.RESOURCE_REFERENCE.v1",
  "NODUOS.CORE.EVENT_ENVELOPE.v1",
  "NODUOS.CORE.SECRET_REFERENCE.v1",
  "NODUOS.CORE.EVIDENCE_REFERENCE.v1",
  "NODUOS.CORE.AUDIT_REFERENCE.v1",
  "NODUOS.CORE.ERROR_ENVELOPE.v1",
  "NODUOS.CORE.IDEMPOTENCY_COMMAND.v1",
]);

export function validateCoreContractBoundary(
  request: CoreBoundaryRequest<CoreContractBoundaryPayload>,
): CoreBoundaryResponse<{ contract_valid: true; status: "active" }> {
  const baseFailure = validateBaseRequest(request);
  if (baseFailure) {
    return baseFailure;
  }

  const contractId = requireString(request.payload.contract_id);
  if (!contractId) {
    return denyCoreBoundaryRequest(request, "CORE_CONTRACT_ID_REQUIRED", "contract_id is required");
  }

  if (!KNOWN_CORE_CONTRACTS.has(contractId)) {
    return denyCoreBoundaryRequest(request, "CORE_CONTRACT_UNKNOWN", "contract is unknown");
  }

  if (request.payload.contract_version !== "v1") {
    return denyCoreBoundaryRequest(request, "CORE_CONTRACT_VERSION_REQUIRED", "contract_version must be v1");
  }

  if (request.payload.status !== "active") {
    return denyCoreBoundaryRequest(request, "CORE_CONTRACT_INACTIVE", "contract must be active");
  }

  return createCoreBoundarySuccess(request, { contract_valid: true, status: "active" }, "resolved");
}
