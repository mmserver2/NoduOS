import type { NoduosSensitivityLevel } from '../../contracts/src/index.js';

export type AuthorizationDecisionValue = 'allow' | 'deny' | 'conditional' | 'expired';
export type AuthorizationDecisionReasonCode =
  | 'allowed_by_permission_grant'
  | 'allowed_by_inheritance'
  | 'denied_missing_tenant'
  | 'denied_missing_context'
  | 'denied_missing_actor'
  | 'denied_missing_resource'
  | 'denied_missing_permission'
  | 'denied_missing_license'
  | 'denied_missing_feature_flag'
  | 'denied_missing_policy'
  | 'denied_expired_decision'
  | 'denied_invalid_resource_reference'
  | 'denied_idempotency_conflict'
  | 'denied_fail_closed';

export interface AuthorizationDecisionReference {
  readonly authorizationDecisionId: string;
  readonly issuedBy: 'Core Platform';
  readonly decision: AuthorizationDecisionValue;
  readonly tenantId: string;
  readonly contextId: string;
  readonly actorReferenceId: string;
  readonly resourceReferenceId?: string | undefined;
  readonly permissionCode: string;
  readonly reasonCode: AuthorizationDecisionReasonCode;
  readonly issuedAt: string;
  readonly expiresAt: string;
  readonly correlationId: string;
  readonly auditReferenceId: string;
  readonly sensitivityLevel: NoduosSensitivityLevel;
  readonly noDomainTransfer: true;
}

export interface AuthorizationDecisionSnapshot extends AuthorizationDecisionReference {
  readonly policyReferences: readonly string[];
  readonly purpose: string;
  readonly failClosed: true;
}

export function isAuthorizationDecisionUsable(decision: AuthorizationDecisionReference, nowIso: string): boolean {
  const nowTime = Date.parse(nowIso);
  const expiresTime = Date.parse(decision.expiresAt);
  return (decision.decision === 'allow' || decision.decision === 'conditional') && Number.isFinite(nowTime) && Number.isFinite(expiresTime) && expiresTime > nowTime;
}

