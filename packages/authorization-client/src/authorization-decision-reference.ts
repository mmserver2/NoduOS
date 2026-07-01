export type AuthorizationDecisionValue = 'allow' | 'deny' | 'conditional' | 'expired';

export interface AuthorizationDecisionReference {
  readonly decisionId: string;
  readonly issuedBy: 'Core Platform';
  readonly tenantId: string;
  readonly contextId: string;
  readonly actorReference: string;
  readonly resourceReference: string;
  readonly permissionCode: string;
  readonly decision: AuthorizationDecisionValue;
  readonly expiresAt: string;
  readonly auditReference: string;
}

export const authorizationClientRules = {
  policyInfluences: true,
  coreDecides: true,
  ownerModuleExecutes: true,
  auditRegisters: true,
  packageDoesNotDecideFinalAuthorization: true,
  failClosedWhenMissingDecision: true
} as const;
