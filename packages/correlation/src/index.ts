export type CorrelationId = string & { readonly __brand: 'CorrelationId' };
export type CausationId = string & { readonly __brand: 'CausationId' };

export class CorrelationError extends Error {
  public constructor(message: string) {
    super(message);
    this.name = 'CorrelationError';
  }
}

export function createCorrelationId(prefix = 'corr'): CorrelationId {
  const entropy = Math.random().toString(36).slice(2, 12);
  return `${prefix}_${Date.now()}_${entropy}` as CorrelationId;
}

export function ensureCorrelationId(value: string | undefined | null): CorrelationId {
  if (!value || !value.trim()) {
    throw new CorrelationError('correlation_id is required for traceable NoduOS flows.');
  }
  return value as CorrelationId;
}

export function optionalCausationId(value?: string | null): CausationId | undefined {
  if (!value) return undefined;
  return value as CausationId;
}
