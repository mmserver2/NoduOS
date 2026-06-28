import { PermissionCode, SensitivityLevel } from '../../contracts/src';
import { CorrelationId, CausationId } from '../../correlation/src';
import { ResourceReference } from '../../resource-reference/src';
import { ActorReference } from '../../tenant-context/src';

export enum AuthorizationDecisionValue {
  Allowed = 'allowed',
  Denied = 'denied',
  Conditional = 'conditional',
  Expired = 'expired'
}

export interface AuthorizationDecisionRequest {
  readonly tenantId: string;
  readonly contextId: string;
  readonly actorReference: ActorReference;
  readonly resourceReference: ResourceReference;
  readonly action: string;
  readonly permissionCode: PermissionCode;
  readonly moduleScope: string;
  readonly authorizationScope: string;
  readonly policyReferences: readonly string[];
  readonly licenseReference?: string;
  readonly entitlementReference?: string;
  readonly featureFlagReference?: string;
  readonly purpose?: string;
  readonly sensitivityLevel: SensitivityLevel;
  readonly correlationId: CorrelationId;
  readonly causationId?: CausationId;
}

export interface AuthorizationDecision {
  readonly authorizationDecisionId: string;
  readonly decision: AuthorizationDecisionValue;
  readonly issuedBy: 'core-platform';
  readonly tenantId: string;
  readonly contextId: string;
  readonly actorReference: ActorReference;
  readonly resourceReference: ResourceReference;
  readonly action: string;
  readonly permissionCode: PermissionCode;
  readonly moduleScope: string;
  readonly authorizationScope: string;
  readonly policyReferences: readonly string[];
  readonly reasonCode: string;
  readonly reasonMessageMinimized: string;
  readonly issuedAt: string;
  readonly expiresAt?: string;
  readonly correlationId: CorrelationId;
  readonly causationId?: CausationId;
  readonly auditReference?: string;
  readonly sensitivityLevel: SensitivityLevel;
  readonly failClosed: true;
}

export interface AuthorizationClient {
  issueDecision(request: AuthorizationDecisionRequest): AuthorizationDecision;
}

export class AuthorizationError extends Error {
  public constructor(message: string) {
    super(message);
    this.name = 'AuthorizationError';
  }
}

export function assertDecisionAllowed(decision: AuthorizationDecision): void {
  if (decision.decision !== AuthorizationDecisionValue.Allowed) {
    throw new AuthorizationError(`authorization denied: ${decision.reasonCode}`);
  }
  if (decision.expiresAt && Date.parse(decision.expiresAt) <= Date.now()) {
    throw new AuthorizationError('authorization decision expired.');
  }
}
