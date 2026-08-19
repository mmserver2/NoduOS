import type { CoreBoundaryRequest, CoreBoundaryResponse, CoreIdempotencyPayload } from "./core-boundary-types.js";
import { conflictCoreBoundaryRequest, createCoreBoundarySuccess, denyCoreBoundaryRequest, requireString, validateBaseRequest } from "./core-boundary-result.js";

export interface CoreIdempotencyStore {
  read(idempotencyKey: string): string | undefined;
  write(idempotencyKey: string, commandFingerprint: string): void;
}

export function createCoreInMemoryIdempotencyStore(): CoreIdempotencyStore {
  const records: Record<string, string> = Object.create(null) as Record<string, string>;

  return {
    read(idempotencyKey: string): string | undefined {
      return records[idempotencyKey];
    },
    write(idempotencyKey: string, commandFingerprint: string): void {
      records[idempotencyKey] = commandFingerprint;
    },
  };
}

export function validateCoreIdempotencyBoundary(
  request: CoreBoundaryRequest<CoreIdempotencyPayload>,
  store: CoreIdempotencyStore = createCoreInMemoryIdempotencyStore(),
): CoreBoundaryResponse<{ idempotency_state: "accepted" | "replayed" }> {
  const baseFailure = validateBaseRequest(request);
  if (baseFailure) {
    return baseFailure;
  }

  const idempotencyKey = requireString(request.payload.idempotency_key);

  if (request.payload.idempotency_required === true && !idempotencyKey) {
    return denyCoreBoundaryRequest(request, "CORE_IDEMPOTENCY_KEY_REQUIRED", "idempotency_key is required");
  }

  if (!idempotencyKey) {
    return createCoreBoundarySuccess(request, { idempotency_state: "accepted" }, "accepted");
  }

  const fingerprint = requireString(request.payload.command_fingerprint);
  if (!fingerprint) {
    return denyCoreBoundaryRequest(request, "CORE_IDEMPOTENCY_FINGERPRINT_REQUIRED", "command fingerprint is required when idempotency_key is present");
  }
  const existingFingerprint = store.read(idempotencyKey);

  if (existingFingerprint === undefined) {
    store.write(idempotencyKey, fingerprint);
    return createCoreBoundarySuccess(request, { idempotency_state: "accepted" }, "accepted");
  }

  if (existingFingerprint === fingerprint) {
    return createCoreBoundarySuccess(request, { idempotency_state: "replayed" }, "replayed");
  }

  return conflictCoreBoundaryRequest(
    request,
    "CORE_IDEMPOTENCY_CONFLICT",
    "idempotency_key already used with different fingerprint",
  );
}
