export const authorizationDecisionStructuralTest = {
  coreDecides: true,
  moduleOwnerExecutes: true,
  expiredDecisionFailsClosed: true,
  eventDoesNotAuthorizeNewAction: true
} as const;
