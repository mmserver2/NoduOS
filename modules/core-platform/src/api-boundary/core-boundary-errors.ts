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
    error.details_minimized = Object.fromEntries(
      Object.entries(detailsMinimized).map(([key, value]) => [sanitizeSafeMessage(key), sanitizeSafeMessage(value)]),
    );
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

  let sanitized = message.replace(/[\r\n\t]/g, " ");
  for (const fragment of forbiddenFragments) {
    sanitized = sanitized.replaceAll(new RegExp(fragment, "gi"), "[redacted]");
  }

  return sanitized.slice(0, 240);
}

export function hasRawSecretMarker(value: unknown): boolean {
  const serialized = safeSerialize(value);
  return serialized.includes("raw_secret_value") || serialized.includes("secret_value_plain") || serialized.includes("plain_credential");
}

export function hasRawEvidenceMarker(value: unknown): boolean {
  const serialized = safeSerialize(value);
  return serialized.includes("raw_evidence_value") || serialized.includes("evidence_blob_plain") || serialized.includes("plain_evidence");
}

function safeSerialize(value: unknown): string {
  try {
    return JSON.stringify(value ?? {}, (_key, item: unknown) => typeof item === "bigint" ? item.toString() : item).toLowerCase();
  } catch {
    return "raw_secret_value raw_evidence_value";
  }
}
