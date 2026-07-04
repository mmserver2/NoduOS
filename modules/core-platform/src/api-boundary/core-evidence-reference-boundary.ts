import type { CoreBoundaryRequest, CoreBoundaryResponse, CoreEvidenceReferencePayload } from "./core-boundary-types.js";
import { hasRawEvidenceMarker } from "./core-boundary-errors.js";
import { createCoreBoundarySuccess, denyCoreBoundaryRequest, requireString, validateBaseRequest } from "./core-boundary-result.js";

export function validateCoreEvidenceReferenceBoundary(
  request: CoreBoundaryRequest<CoreEvidenceReferencePayload>,
): CoreBoundaryResponse<{ evidence_reference_valid: true; raw_evidence_allowed: false }> {
  const baseFailure = validateBaseRequest(request);
  if (baseFailure) {
    return baseFailure;
  }

  if (!requireString(request.payload.evidence_reference)) {
    return denyCoreBoundaryRequest(request, "CORE_EVIDENCE_REFERENCE_REQUIRED", "evidence reference is required");
  }

  if (request.payload.raw_evidence_allowed !== false) {
    return denyCoreBoundaryRequest(request, "CORE_EVIDENCE_RAW_FORBIDDEN", "raw_evidence_allowed must be false");
  }

  if (hasRawEvidenceMarker(request.payload)) {
    return denyCoreBoundaryRequest(request, "CORE_EVIDENCE_RAW_MARKER_FORBIDDEN", "evidence must be represented by reference only");
  }

  return createCoreBoundarySuccess(
    request,
    { evidence_reference_valid: true, raw_evidence_allowed: false },
    "resolved",
  );
}
