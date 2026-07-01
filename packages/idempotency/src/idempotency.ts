export interface IdempotencyRequirement {
  readonly idempotencyKey: string;
  readonly commandName: string;
  readonly tenantId: string;
  readonly contextId: string;
  readonly critical: boolean;
}

export const idempotencyRules = {
  requiredForCriticalCommands: true,
  eventIsNotCommand: true,
  consumerUsesInboxDeduplication: true
} as const;
