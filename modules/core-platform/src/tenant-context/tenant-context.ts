export interface CoreTenantContext {
  readonly tenantId: string;
  readonly contextId: string;
  readonly actorReference: string;
  readonly activeRoleReferences: readonly string[];
  readonly activePermissionReferences: readonly string[];
}

export const tenantContextBoundary = {
  tenantRequiredForRelevantData: true,
  contextRequiredForOperationalAction: true,
  noCrossTenantRead: true,
  noCrossContextRead: true,
  failClosedWhenMissing: true
} as const;
