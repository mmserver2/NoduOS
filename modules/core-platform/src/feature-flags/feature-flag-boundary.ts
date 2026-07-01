export const coreFeatureFlagBoundary = {
  featureFlagInfluencesAuthorization: true,
  featureFlagDoesNotExecuteOwnerDomain: true,
  missingRequiredFeatureFlagFailsClosed: true
} as const;
