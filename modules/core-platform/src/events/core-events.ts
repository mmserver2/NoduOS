export const coreEventBoundary = {
  eventEnvelopeRequiredForIntermoduleEvents: true,
  eventDoesNotActAsCommand: true,
  eventDoesNotAuthorizeNewAction: true,
  outboxInboxDeduplicationExpected: true,
  deadLetterAndQuarantineExpectedForFailure: true
} as const;
