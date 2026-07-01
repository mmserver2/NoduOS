export const coreSecurityBoundary = {
  securityByDesign: true,
  rawSecretAllowed: false,
  rawTokenAllowed: false,
  privateKeyPayloadAllowed: false,
  errorMustBeMasked: true,
  failClosedForCriticalSecurityPolicyFailure: true
} as const;
