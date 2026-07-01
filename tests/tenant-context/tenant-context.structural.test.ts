export const tenantContextStructuralTest = {
  tenantRequired: true,
  contextRequired: true,
  noCrossTenantRead: true,
  noCrossContextRead: true
} as const;
