export interface EventEnvelopeV1 {
  readonly envelopeVersion: 'v1';
  readonly eventId: string;
  readonly eventName: string;
  readonly eventType: string;
  readonly eventVersion: string;
  readonly contractId: string;
  readonly contractVersion: 'v1';
  readonly sourceModule: string;
  readonly ownerModule: string;
  readonly producerModule: string;
  readonly tenantId?: string;
  readonly contextId?: string;
  readonly actorReference?: string;
  readonly resourceReference?: string;
  readonly authorizationDecisionReference?: string;
  readonly sensitivityLevel: 'Publico' | 'Interno' | 'Restrito' | 'Sensivel' | 'Critico';
  readonly payloadMinimized: true;
  readonly correlationId: string;
  readonly causationId?: string;
  readonly auditReference?: string;
  readonly occurredAt: string;
  readonly publishedAt: string;
}

export const eventEnvelopeRules = {
  eventIsNotCommand: true,
  eventDoesNotAuthorizeNewAction: true,
  payloadMustBeMinimized: true,
  rawSecretAllowed: false,
  rawEvidenceAllowedByDefault: false
} as const;
