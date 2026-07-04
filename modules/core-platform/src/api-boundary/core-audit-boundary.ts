import type { CoreAuditReferencePayload, CoreBoundaryRequest, CoreBoundaryResponse } from "./core-boundary-types.js";
import { createCoreBoundarySuccess, denyCoreBoundaryRequest, requireString, validateBaseRequest } from "./core-boundary-result.js";

export function validateCoreAuditBoundary(
  request: CoreBoundaryRequest<CoreAuditReferencePayload>,
): CoreBoundaryResponse<{ audit_reference_valid: true; does_not_authorize: true }> {
  const baseFailure = validateBaseRequest(request);
  if (baseFailure) {
    return baseFailure;
  }

  if (!requireString(request.payload.audit_reference)) {
    return denyCoreBoundaryRequest(request, "CORE_AUDIT_REFERENCE_REQUIRED", "audit reference is required");
  }

  return createCoreBoundarySuccess(
    request,
    { audit_reference_valid: true, does_not_authorize: true },
    "resolved",
  );
}
