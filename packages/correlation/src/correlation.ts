export interface CorrelationReference {
  readonly correlationId: string;
  readonly causationId?: string;
  readonly traceReference?: string;
}

export const correlationRules = {
  correlationRequiredInEvents: true,
  causationRequiredWhenDerived: true,
  traceDoesNotAuthorizeAction: true
} as const;
