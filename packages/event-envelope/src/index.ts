import { ContractId, SensitivityLevel } from '../../contracts/src';
import { CorrelationId, CausationId } from '../../correlation/src';
import { ResourceReference } from '../../resource-reference/src';
import { ActorReference } from '../../tenant-context/src';
import { assertNoRawSecretFields } from '../../secret-reference/src';

export type EventType = 'fact_occurred' | 'request_registered' | 'state_changed' | 'lifecycle' | 'security' | 'lgpd' | 'retry' | 'dead_letter' | 'quarantine';

export interface EventEnvelope<Payload extends Record<string, unknown>> {
  readonly eventId: string;
  readonly eventName: string;
  readonly eventType: EventType;
  readonly eventVersion: `v${number}`;
  readonly contractId: ContractId;
  readonly contractVersion: `v${number}`;
  readonly envelopeVersion: 'v1';
  readonly sourceModule: string;
  readonly ownerModule: string;
  readonly producerModule: string;
  readonly tenantId: string;
  readonly contextId: string;
  readonly actorReference: ActorReference;
  readonly resourceReference?: ResourceReference;
  readonly authorizationDecisionReference?: string;
  readonly policyReferences: readonly string[];
  readonly sensitivityLevel: SensitivityLevel;
  readonly dataCategories: readonly string[];
  readonly purpose: string;
  readonly occurredAt: string;
  readonly recordedAt?: string;
  readonly publishedAt: string;
  readonly correlationId: CorrelationId;
  readonly causationId?: CausationId;
  readonly commandReference?: string;
  readonly requestReference?: string;
  readonly idempotencyReference?: string;
  readonly payloadSchemaReference: string;
  readonly payloadMinimized: true;
  readonly payload: Payload;
  readonly auditReference?: string;
  readonly evidenceReference?: string;
  readonly errorReference?: string;
  readonly compatibilityPolicy: string;
  readonly deprecationPolicy: string;
}

export class EventEnvelopeError extends Error {
  public constructor(message: string) {
    super(message);
    this.name = 'EventEnvelopeError';
  }
}

export function createEventEnvelope<Payload extends Record<string, unknown>>(input: Omit<EventEnvelope<Payload>, 'envelopeVersion' | 'publishedAt' | 'payloadMinimized'>): EventEnvelope<Payload> {
  if (!input.eventId.trim()) throw new EventEnvelopeError('event_id is required.');
  if (!input.contractId.startsWith('NODUOS.')) throw new EventEnvelopeError('contract_id is required.');
  if (!input.tenantId.trim()) throw new EventEnvelopeError('tenant_id is required.');
  if (!input.contextId.trim()) throw new EventEnvelopeError('context_id is required.');
  if (!input.correlationId) throw new EventEnvelopeError('correlation_id is required.');
  if (input.policyReferences.length === 0 && input.sensitivityLevel !== SensitivityLevel.Public) {
    throw new EventEnvelopeError('policy_references are required for non-public events.');
  }
  assertNoRawSecretFields(input.payload);
  return Object.freeze({
    ...input,
    envelopeVersion: 'v1',
    publishedAt: new Date().toISOString(),
    payloadMinimized: true
  });
}
