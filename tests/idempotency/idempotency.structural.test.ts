export const idempotencyStructuralTest = {
  criticalCommandRequiresIdempotencyKey: true,
  eventIsNotCommand: true,
  consumerDeduplicationExpected: true
} as const;
