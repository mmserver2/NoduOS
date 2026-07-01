export const coreApplicationBoundary = {
  noCommercialDomainExecution: true,
  noDatabaseCreatedInThisStage: true,
  noFunctionalEndpointInThisStage: true,
  noRealAuthenticationInThisStage: true,
  noRealSessionInThisStage: true
} as const;
