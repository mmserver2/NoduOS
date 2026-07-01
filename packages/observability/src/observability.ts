export interface TraceReference {
  readonly traceId: string;
  readonly spanId?: string;
  readonly correlationId: string;
}

export const observabilityRules = {
  tracesDoNotCarrySecrets: true,
  errorsMustBeMasked: true,
  observabilityDoesNotAuthorizeAction: true
} as const;
