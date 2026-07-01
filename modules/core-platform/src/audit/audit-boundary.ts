export const coreAuditBoundary = {
  auditIsRequiredForCriticalAction: true,
  auditDoesNotAuthorize: true,
  auditDoesNotExecuteDomain: true,
  auditReferenceRequiredWhenSensitive: true
} as const;
