export const secretReferenceStructuralTest = {
  rawSecretAllowed: 'never',
  secretDoesNotTravel: true,
  secretDoesNotEnterLogs: true,
  failClosedForCriticalSecretFailure: true
} as const;
