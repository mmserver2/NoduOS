export interface TenantContextReference {
  readonly tenantId: string;
  readonly contextId: string;
  readonly actorReference: string;
  readonly scope: string;
}

export const tenantContextRules = {
  noTenantLeakage: true,
  noContextLeakage: true,
  criticalActionWithoutTenantFailsClosed: true,
  criticalActionWithoutContextFailsClosed: true
} as const;
