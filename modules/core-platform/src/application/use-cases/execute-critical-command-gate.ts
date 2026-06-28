import { AuthorizationDecision, assertDecisionAllowed } from '../../../../../packages/authorization-client/src';
import { createStableFingerprint, IdempotencyStore, ensureIdempotencyKey } from '../../../../../packages/idempotency/src';
import { TenantContext } from '../../../../../packages/tenant-context/src';

export interface CriticalCommandInput<Result> {
  readonly commandName: string;
  readonly idempotencyKey: string;
  readonly tenantContext: TenantContext;
  readonly authorizationDecision: AuthorizationDecision;
  readonly payloadMinimized: Record<string, unknown>;
  readonly execute: () => Result;
}

export function executeCriticalCommand<Result>(
  input: CriticalCommandInput<Result>,
  idempotencyStore: IdempotencyStore<Result>
): Result {
  if (input.authorizationDecision.tenantId !== input.tenantContext.tenantId) {
    throw new Error('authorization tenant mismatch.');
  }
  if (input.authorizationDecision.contextId !== input.tenantContext.contextId) {
    throw new Error('authorization context mismatch.');
  }
  assertDecisionAllowed(input.authorizationDecision);
  return idempotencyStore.reserveOrReplay({
    key: ensureIdempotencyKey(input.idempotencyKey),
    commandName: input.commandName,
    fingerprint: createStableFingerprint(input.payloadMinimized),
    execute: input.execute
  });
}
