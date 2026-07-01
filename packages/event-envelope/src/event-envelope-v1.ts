import type { AuthorizationDecisionReference } from '../../authorization-client/src/index.js';
import type { AuditReference } from '../../audit-client/src/index.js';
import type { NoduosSensitivityLevel } from '../../contracts/src/index.js';
import type { EvidenceReferenceV1 } from '../../evidence-reference/src/index.js';
import type { ResourceReferenceV1 } from '../../resource-reference/src/index.js';
import type { SecretReferenceV1 } from '../../secret-reference/src/index.js';

export type EventEnvelopeType = 'fact_occurred' | 'request_registered' | 'state_changed' | 'lifecycle' | 'audit' | 'security' | 'privacy' | 'policy' | 'diagnostic' | 'integration' | 'notification' | 'analytics' | 'evidence' | 'export' | 'failure' | 'retry' | 'dead_letter' | 'quarantine';

export interface EventEnvelopeV1<TPayload extends Record<string, unknown> = Record<string, unknown>> {
  readonly eventId: string;
  readonly eventName: string;
  readonly eventType: EventEnvelopeType;
  readonly eventVersion: 'v1';
  readonly contractId: string;
  readonly contractVersion: 'v1';
  readonly envelopeVersion: 'v1';
  readonly sourceModule: string;
  readonly ownerModule: string;
  readonly producerModule: string;
  readonly tenantId: string;
  readonly contextId: string;
  readonly actorReferenceId: string;
  readonly resourceReference?: ResourceReferenceV1 | undefined;
  readonly authorizationDecisionReference?: AuthorizationDecisionReference | undefined;
  readonly policyReferences: readonly string[];
  readonly sensitivityLevel: NoduosSensitivityLevel;
  readonly purpose: string;
  readonly occurredAt: string;
  readonly recordedAt: string;
  readonly publishedAt: string;
  readonly correlationId: string;
  readonly causationId?: string | undefined;
  readonly payloadSchemaReference: string;
  readonly payloadMinimized: true;
  readonly payload: TPayload;
  readonly auditReference: AuditReference;
  readonly evidenceReference?: EvidenceReferenceV1 | undefined;
  readonly secretReference?: SecretReferenceV1 | undefined;
  readonly compatibilityPolicy: string;
  readonly deprecationPolicy: string;
}

export function validateEventEnvelopeV1(envelope: EventEnvelopeV1): readonly string[] {
  const errors: string[] = [];
  if (!envelope.eventId) errors.push('event_id_required');
  if (!envelope.eventName) errors.push('event_name_required');
  if (!envelope.contractId.startsWith('NODUOS.')) errors.push('contract_id_invalid');
  if (envelope.envelopeVersion !== 'v1') errors.push('envelope_version_invalid');
  if (!envelope.sourceModule || !envelope.ownerModule || !envelope.producerModule) errors.push('module_references_required');
  if (!envelope.tenantId || !envelope.contextId) errors.push('tenant_context_required');
  if (!envelope.actorReferenceId) errors.push('actor_reference_required');
  if (!envelope.correlationId) errors.push('correlation_id_required');
  if (!envelope.purpose) errors.push('purpose_required');
  if (envelope.payloadMinimized !== true) errors.push('payload_minimized_required');
  if (!envelope.auditReference.auditReferenceId) errors.push('audit_reference_required');
  if (envelope.secretReference && envelope.secretReference.rawSecretAllowed !== 'never') errors.push('raw_secret_forbidden');
  if (envelope.evidenceReference && envelope.evidenceReference.rawEvidenceAllowed !== false) errors.push('raw_evidence_forbidden');
  return errors;
}

export function assertEventEnvelopeV1<TPayload extends Record<string, unknown>>(envelope: EventEnvelopeV1<TPayload>): EventEnvelopeV1<TPayload> {
  const errors = validateEventEnvelopeV1(envelope);
  if (errors.length > 0) throw new Error('invalid_event_envelope:' + errors.join(','));
  return envelope;
}

