export const eventEnvelopeStructuralTest = {
  eventIsNotCommand: true,
  payloadMinimized: true,
  correlationRequired: true,
  rawSecretForbidden: true,
  rawEvidenceForbiddenByDefault: true
} as const;
