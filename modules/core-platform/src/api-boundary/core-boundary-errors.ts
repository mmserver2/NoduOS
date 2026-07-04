import type { CoreBoundaryError, CoreBoundaryRequest } from "./core-boundary-types.js";

export function createCoreBoundaryError(
  request: CoreBoundaryRequest,
  code: string,
  messageSafe: string,
  detailsMinimized?: Record<string, string>,
): CoreBoundaryError {
  const error: CoreBoundaryError = {
    error_contract_id: "NODUOS.CORE.ERROR_ENVELOPE.v1",
    code,
    message_safe: sanitizeSafeMessage(messageSafe),
    fail_closed: true,
    correlation_id: request.correlation_id,
  };

  if (detailsMinimized && Object.keys(detailsMinimized).length > 0) {
    error.details_minimized = detailsMinimized;
  }

  return error;
}

export function sanitizeSafeMessage(message: string): string {
  const forbiddenFragments = [
    "stack trace",
    "database id",
    "internal id",
    "raw credential",
    "raw evidence value",
    "raw secret value",
    "arquivo de ambiente",
  ];

  let sanitized = message;
  for (const fragment of forbiddenFragments) {
    sanitized = sanitized.replaceAll(fragment, "[redacted]");
  }

  return sanitized.slice(0, 240);
}

export function hasRawSecretMarker(value: unknown): boolean {
  const serialized = JSON.stringify(value ?? {}).toLowerCase();
  return serialized.includes("raw_secret_value") || serialized.includes("secret_value_plain") || serialized.includes("plain_credential");
}

export function hasRawEvidenceMarker(value: unknown): boolean {
  const serialized = JSON.stringify(value ?? {}).toLowerCase();
  return serialized.includes("raw_evidence_value") || serialized.includes("evidence_blob_plain") || serialized.includes("plain_evidence");
}
