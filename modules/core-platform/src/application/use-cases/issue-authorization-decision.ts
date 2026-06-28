import { AuthorizationDecision, AuthorizationDecisionRequest, AuthorizationDecisionValue } from '../../../../../packages/authorization-client/src';
import { PermissionGrantRecord, hasActivePermissionGrant } from '../../domain/entities/permissions';
import { FeatureFlagRecord, LicenseRecord, isFeatureEnabled, isLicenseActive } from '../../domain/entities/entitlements';

export interface IssueAuthorizationDecisionDependencies {
  readonly permissionGrants: readonly PermissionGrantRecord[];
  readonly license?: LicenseRecord;
  readonly featureFlag?: FeatureFlagRecord;
}

export function issueAuthorizationDecision(
  request: AuthorizationDecisionRequest,
  dependencies: IssueAuthorizationDecisionDependencies
): AuthorizationDecision {
  const now = new Date().toISOString();
  const base = {
    authorizationDecisionId: `authz_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`,
    issuedBy: 'core-platform' as const,
    tenantId: request.tenantId,
    contextId: request.contextId,
    actorReference: request.actorReference,
    resourceReference: request.resourceReference,
    action: request.action,
    permissionCode: request.permissionCode,
    moduleScope: request.moduleScope,
    authorizationScope: request.authorizationScope,
    policyReferences: request.policyReferences,
    issuedAt: now,
    correlationId: request.correlationId,
    ...(request.causationId ? { causationId: request.causationId } : {}),
    sensitivityLevel: request.sensitivityLevel,
    failClosed: true as const
  };

  if (request.policyReferences.length === 0) {
    return Object.freeze({
      ...base,
      decision: AuthorizationDecisionValue.Denied,
      reasonCode: 'POLICY_REQUIRED',
      reasonMessageMinimized: 'Policy reference is required for authorization.'
    });
  }

  const hasPermission = hasActivePermissionGrant({
    grants: dependencies.permissionGrants,
    tenantId: request.tenantId,
    contextId: request.contextId,
    actorReferenceId: request.actorReference.actorReferenceId,
    permissionCode: request.permissionCode,
    resourceScope: request.authorizationScope
  });
  if (!hasPermission) {
    return Object.freeze({
      ...base,
      decision: AuthorizationDecisionValue.Denied,
      reasonCode: 'PERMISSION_NOT_GRANTED',
      reasonMessageMinimized: 'Permission is not active for the requested scope.'
    });
  }

  if (dependencies.license && !isLicenseActive(dependencies.license)) {
    return Object.freeze({
      ...base,
      decision: AuthorizationDecisionValue.Denied,
      reasonCode: 'LICENSE_NOT_ACTIVE',
      reasonMessageMinimized: 'License is not active.'
    });
  }

  if (dependencies.featureFlag && !isFeatureEnabled(dependencies.featureFlag)) {
    return Object.freeze({
      ...base,
      decision: AuthorizationDecisionValue.Denied,
      reasonCode: 'FEATURE_FLAG_DISABLED',
      reasonMessageMinimized: 'Feature flag is disabled.'
    });
  }

  return Object.freeze({
    ...base,
    decision: AuthorizationDecisionValue.Allowed,
    reasonCode: 'ALLOWED_BY_CORE',
    reasonMessageMinimized: 'Authorized by Core Platform within tenant, context, permission, license and policy scope.',
    expiresAt: new Date(Date.now() + 5 * 60 * 1000).toISOString()
  });
}
