export const corePlatformStructuralExpectations = {
  userAccountBelongsToCore: true,
  tenantBelongsToCore: true,
  contextBelongsToCore: true,
  authorizationDecisionBelongsToCore: true,
  moduleOwnerExecutesDomain: true,
  commercialModulesNotCreated: true
} as const;
