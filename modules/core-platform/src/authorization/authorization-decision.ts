export type AuthorizationDecisionResult = 'allow' | 'deny' | 'conditional' | 'expired';

export interface AuthorizationDecision {
  readonly authorizationDecisionId: string;
  readonly issuedBy: 'Core Platform';
  readonly tenantId: string;
  readonly contextId: string;
  readonly actorReference: string;
  readonly resourceReference: string;
  readonly permissionCode: string;
  readonly decision: AuthorizationDecisionResult;
  readonly reasonCode: string;
  readonly policyReferences: readonly string[];
  readonly licenseReference?: string;
  readonly featureFlagReferences?: readonly string[];
  readonly expiresAt: string;
  readonly auditReference: string;
}

export const authorizationDecisionBoundary = {
  coreDecides: true,
  policyInfluences: true,
  ownerModuleExecutes: true,
  auditRegisters: true,
  notPermissionGrant: true,
  notInheritanceGrant: true,
  notEternalPermission: true,
  expiredDecisionFailsClosed: true
} as const;
