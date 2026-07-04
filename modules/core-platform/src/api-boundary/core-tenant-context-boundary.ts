import type { CoreBoundaryRequest, CoreBoundaryResponse, CoreTenantContextPayload } from "./core-boundary-types.js";
import { createCoreBoundarySuccess, denyCoreBoundaryRequest, requireString, validateBaseRequest } from "./core-boundary-result.js";

export function validateCoreTenantContextBoundary(
  request: CoreBoundaryRequest<CoreTenantContextPayload>,
): CoreBoundaryResponse<{ tenant_context_valid: true; does_not_authorize: true }> {
  const baseFailure = validateBaseRequest(request);
  if (baseFailure) {
    return baseFailure;
  }

  if (!requireString(request.payload.tenant_id)) {
    return denyCoreBoundaryRequest(request, "CORE_TENANT_REQUIRED", "tenant id is required");
  }

  if (!requireString(request.payload.context_id)) {
    return denyCoreBoundaryRequest(request, "CORE_CONTEXT_REQUIRED", "context id is required");
  }

  return createCoreBoundarySuccess(
    request,
    { tenant_context_valid: true, does_not_authorize: true },
    "resolved",
  );
}
