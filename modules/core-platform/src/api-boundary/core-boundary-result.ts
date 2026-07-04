import type {
  CoreBoundaryFailure,
  CoreBoundaryRequest,
  CoreBoundaryResponse,
  CoreBoundaryStatus,
  CoreBoundarySuccess,
} from "./core-boundary-types.js";
import { createCoreBoundaryError } from "./core-boundary-errors.js";

export function createCoreBoundarySuccess<TResult extends object>(
  request: CoreBoundaryRequest,
  result: TResult,
  status: Extract<CoreBoundaryStatus, "accepted" | "allowed" | "replayed" | "resolved"> = "resolved",
): CoreBoundarySuccess<TResult> {
  const response: CoreBoundarySuccess<TResult> = {
    status,
    request_id: request.request_id,
    contract_id: request.contract_id,
    contract_version: request.contract_version,
    result,
    correlation_id: request.correlation_id,
    processed_at: new Date().toISOString(),
    fail_closed: false,
  };

  if (request.payload && typeof request.payload === "object" && "audit_reference" in request.payload) {
    const auditReference = requireString((request.payload as { audit_reference?: unknown }).audit_reference);
    if (auditReference) {
      response.audit_reference = auditReference;
    }
  }

  return response;
}

export function denyCoreBoundaryRequest(
  request: CoreBoundaryRequest,
  code: string,
  messageSafe: string,
  detailsMinimized?: Record<string, string>,
): CoreBoundaryFailure {
  return {
    status: "denied",
    request_id: request.request_id,
    contract_id: request.contract_id,
    contract_version: request.contract_version,
    error: createCoreBoundaryError(request, code, messageSafe, detailsMinimized),
    correlation_id: request.correlation_id,
    processed_at: new Date().toISOString(),
    fail_closed: true,
  };
}

export function conflictCoreBoundaryRequest(
  request: CoreBoundaryRequest,
  code: string,
  messageSafe: string,
): CoreBoundaryFailure {
  return {
    status: "conflict",
    request_id: request.request_id,
    contract_id: request.contract_id,
    contract_version: request.contract_version,
    error: createCoreBoundaryError(request, code, messageSafe),
    correlation_id: request.correlation_id,
    processed_at: new Date().toISOString(),
    fail_closed: true,
  };
}

export function validateBaseRequest(request: CoreBoundaryRequest): CoreBoundaryFailure | undefined {
  if (!requireString(request.request_id)) {
    return denyCoreBoundaryRequest(request, "CORE_BOUNDARY_REQUEST_ID_REQUIRED", "request_id is required");
  }

  if (!requireString(request.contract_id)) {
    return denyCoreBoundaryRequest(request, "CORE_BOUNDARY_CONTRACT_ID_REQUIRED", "contract_id is required");
  }

  if (request.contract_version !== "v1") {
    return denyCoreBoundaryRequest(request, "CORE_BOUNDARY_VERSION_UNSUPPORTED", "contract_version must be v1");
  }

  if (!requireString(request.correlation_id)) {
    return denyCoreBoundaryRequest(request, "CORE_BOUNDARY_CORRELATION_REQUIRED", "correlation_id is required");
  }

  if (!requireString(request.received_at)) {
    return denyCoreBoundaryRequest(request, "CORE_BOUNDARY_RECEIVED_AT_REQUIRED", "received_at is required");
  }

  if (!request.payload || typeof request.payload !== "object") {
    return denyCoreBoundaryRequest(request, "CORE_BOUNDARY_PAYLOAD_REQUIRED", "payload is required");
  }

  return undefined;
}

export function requireString(value: unknown): string | undefined {
  if (typeof value !== "string") {
    return undefined;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

export function isFailure(response: CoreBoundaryResponse): response is CoreBoundaryFailure {
  return response.fail_closed === true;
}
