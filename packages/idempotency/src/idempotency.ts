export interface IdempotencyCommandIdentity {
  readonly idempotencyKey: string;
  readonly commandName: string;
  readonly tenantId: string;
  readonly contextId: string;
  readonly actorReferenceId: string;
  readonly resourceReferenceId?: string | undefined;
  readonly payloadFingerprint: string;
}

export interface IdempotencyResult<TValue> {
  readonly status: 'stored' | 'replayed' | 'conflict';
  readonly value?: TValue | undefined;
  readonly reasonCode?: 'idempotency_key_required' | 'idempotency_payload_conflict' | undefined;
}

export function buildIdempotencyScope(identity: IdempotencyCommandIdentity): string {
  return [identity.tenantId, identity.contextId, identity.actorReferenceId, identity.commandName, identity.resourceReferenceId ?? 'no-resource', identity.idempotencyKey].join(':');
}

