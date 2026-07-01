export const corePrivacyBoundary = {
  privacyByDesign: true,
  purposeRequiredForSensitiveData: true,
  maskingRequiredWhenApplicable: true,
  retentionPolicyRequiredWhenApplicable: true,
  rawBiometryAllowed: false,
  rawEvidenceAllowedByDefault: false
} as const;
