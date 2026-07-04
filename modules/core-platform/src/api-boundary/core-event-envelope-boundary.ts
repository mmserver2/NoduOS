import type { CoreBoundaryRequest, CoreBoundaryResponse, CoreEventEnvelopePayload } from "./core-boundary-types.js";
import { hasRawEvidenceMarker, hasRawSecretMarker } from "./core-boundary-errors.js";
import { createCoreBoundarySuccess, denyCoreBoundaryRequest, requireString, validateBaseRequest } from "./core-boundary-result.js";

export function validateCoreEventEnvelopeBoundary(
  request: CoreBoundaryRequest<CoreEventEnvelopePayload>,
): CoreBoundaryResponse<{ event_envelope_valid: true; payload_minimized: true }> {
  const baseFailure = validateBaseRequest(request);
  if (baseFailure) {
    return baseFailure;
  }

  if (!requireString(request.payload.event_id)) {
    return denyCoreBoundaryRequest(request, "CORE_EVENT_ID_REQUIRED", "event id is required");
  }

  const eventName = requireString(request.payload.event_name);

  if (!eventName) {
    return denyCoreBoundaryRequest(request, "CORE_EVENT_NAME_REQUIRED", "event name is required");
  }

  if (request.payload.event_type === "technical" && eventName.toLowerCase().includes("command")) {
    return denyCoreBoundaryRequest(request, "CORE_EVENT_COMMAND_REJECTED", "event envelope cannot carry command execution");
  }

  if (request.payload.payload_minimized !== true) {
    return denyCoreBoundaryRequest(request, "CORE_EVENT_PAYLOAD_MINIMIZED_REQUIRED", "payload_minimized must be true");
  }

  if (hasRawSecretMarker(request.payload.payload)) {
    return denyCoreBoundaryRequest(request, "CORE_EVENT_RAW_SECRET_FORBIDDEN", "event payload cannot contain raw secret value");
  }

  if (hasRawEvidenceMarker(request.payload.payload)) {
    return denyCoreBoundaryRequest(request, "CORE_EVENT_RAW_EVIDENCE_FORBIDDEN", "event payload cannot contain raw evidence value");
  }

  return createCoreBoundarySuccess(
    request,
    { event_envelope_valid: true, payload_minimized: true },
    "accepted",
  );
}
