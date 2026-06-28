import { CorrelationId } from '../../correlation/src';

export interface TraceReference {
  readonly traceId: string;
  readonly correlationId: CorrelationId;
  readonly serviceName: string;
  readonly startedAt: string;
  readonly dataSensitivity: 'metadata_only';
}

export function createTraceReference(input: Omit<TraceReference, 'startedAt' | 'dataSensitivity'>): TraceReference {
  return Object.freeze({
    ...input,
    startedAt: new Date().toISOString(),
    dataSensitivity: 'metadata_only'
  });
}
