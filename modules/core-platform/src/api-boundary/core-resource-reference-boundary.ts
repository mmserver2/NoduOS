import type { CoreBoundaryRequest, CoreBoundaryResponse, CoreResourceReferencePayload } from "./core-boundary-types.js";
import { createCoreBoundarySuccess, denyCoreBoundaryRequest, requireString, validateBaseRequest } from "./core-boundary-result.js";

export function validateCoreResourceReferenceBoundary(
  request: CoreBoundaryRequest<CoreResourceReferencePayload>,
): CoreBoundaryResponse<{ resource_reference_valid: true; no_domain_transfer: true }> {
  const baseFailure = validateBaseRequest(request);
  if (baseFailure) {
    return baseFailure;
  }

  if (!requireString(request.payload.resource_reference)) {
    return denyCoreBoundaryRequest(request, "CORE_RESOURCE_REFERENCE_REQUIRED", "resource reference is required");
  }

  if (request.payload.no_domain_transfer !== true) {
    return denyCoreBoundaryRequest(request, "CORE_RESOURCE_NO_DOMAIN_TRANSFER_REQUIRED", "no_domain_transfer must be true");
  }

  return createCoreBoundarySuccess(
    request,
    { resource_reference_valid: true, no_domain_transfer: true },
    "resolved",
  );
}
