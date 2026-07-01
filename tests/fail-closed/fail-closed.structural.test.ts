export const failClosedStructuralTest = {
  missingTenantFailsClosed: true,
  missingContextFailsClosed: true,
  missingAuthorizationDecisionFailsClosed: true,
  missingPolicyForSensitiveActionFailsClosed: true,
  missingResourceScopeFailsClosed: true
} as const;
