import type { CoreBoundaryRequest, CoreBoundaryResponse, CoreSecretReferencePayload } from "./core-boundary-types.js";
import { hasRawSecretMarker } from "./core-boundary-errors.js";
import { createCoreBoundarySuccess, denyCoreBoundaryRequest, requireString, validateBaseRequest } from "./core-boundary-result.js";

export function validateCoreSecretReferenceBoundary(
  request: CoreBoundaryRequest<CoreSecretReferencePayload>,
): CoreBoundaryResponse<{ secret_reference_valid: true; raw_secret_allowed: "never" }> {
  const baseFailure = validateBaseRequest(request);
  if (baseFailure) {
    return baseFailure;
  }

  if (!requireString(request.payload.secret_reference)) {
    return denyCoreBoundaryRequest(request, "CORE_SECRET_REFERENCE_REQUIRED", "secret reference is required");
  }

  if (request.payload.raw_secret_allowed !== "never") {
    return denyCoreBoundaryRequest(request, "CORE_SECRET_RAW_FORBIDDEN", "raw_secret_allowed must be never");
  }

  if (hasRawSecretMarker(request.payload)) {
    return denyCoreBoundaryRequest(request, "CORE_SECRET_RAW_MARKER_FORBIDDEN", "secret must be represented by reference only");
  }

  return createCoreBoundarySuccess(
    request,
    { secret_reference_valid: true, raw_secret_allowed: "never" },
    "resolved",
  );
}
