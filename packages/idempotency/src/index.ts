export type IdempotencyKey = string & { readonly __brand: 'IdempotencyKey' };
export type CommandFingerprint = string & { readonly __brand: 'CommandFingerprint' };

export interface IdempotencyRecord<Result> {
  readonly key: IdempotencyKey;
  readonly commandName: string;
  readonly fingerprint: CommandFingerprint;
  readonly result: Result;
  readonly recordedAt: string;
}

export interface IdempotencyStore<Result> {
  reserveOrReplay(input: {
    readonly key: IdempotencyKey;
    readonly commandName: string;
    readonly fingerprint: CommandFingerprint;
    readonly execute: () => Result;
  }): Result;
}

export class IdempotencyError extends Error {
  public constructor(message: string) {
    super(message);
    this.name = 'IdempotencyError';
  }
}

export function ensureIdempotencyKey(value: string | undefined | null): IdempotencyKey {
  if (!value || !value.trim()) {
    throw new IdempotencyError('idempotency_key is required for critical commands.');
  }
  return value as IdempotencyKey;
}

export function createStableFingerprint(payload: unknown): CommandFingerprint {
  return stableStringify(payload) as CommandFingerprint;
}

function stableStringify(value: unknown): string {
  if (value === null || typeof value !== 'object') return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(stableStringify).join(',')}]`;
  const record = value as Record<string, unknown>;
  return `{${Object.keys(record).sort().map((key) => `${JSON.stringify(key)}:${stableStringify(record[key])}`).join(',')}}`;
}

export class InMemoryIdempotencyStore<Result> implements IdempotencyStore<Result> {
  private readonly records = new Map<string, IdempotencyRecord<Result>>();

  public reserveOrReplay(input: {
    readonly key: IdempotencyKey;
    readonly commandName: string;
    readonly fingerprint: CommandFingerprint;
    readonly execute: () => Result;
  }): Result {
    const existing = this.records.get(input.key);
    if (existing) {
      if (existing.fingerprint !== input.fingerprint || existing.commandName !== input.commandName) {
        throw new IdempotencyError('idempotency_key reuse with conflicting command payload is fail-closed.');
      }
      return existing.result;
    }
    const result = input.execute();
    this.records.set(input.key, {
      key: input.key,
      commandName: input.commandName,
      fingerprint: input.fingerprint,
      result,
      recordedAt: new Date().toISOString()
    });
    return result;
  }
}
