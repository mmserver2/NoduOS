export interface UserAccount {
  readonly userAccountId: string;
  readonly status: 'active' | 'suspended' | 'archived';
}

export interface Tenant {
  readonly tenantId: string;
  readonly status: 'active' | 'suspended' | 'archived';
}

export interface Context {
  readonly contextId: string;
  readonly tenantId: string;
  readonly contextType: 'master' | 'partner' | 'organization' | 'unit' | 'area' | 'client';
}

export interface ContextMembership {
  readonly membershipId: string;
  readonly userAccountId: string;
  readonly tenantId: string;
  readonly contextId: string;
  readonly roleIds: readonly string[];
}

export interface Role {
  readonly roleId: string;
  readonly name: string;
}

export interface Permission {
  readonly permissionCode: string;
  readonly description: string;
}

export interface PermissionGrant {
  readonly grantId: string;
  readonly permissionCode: string;
  readonly tenantId: string;
  readonly contextId: string;
  readonly resourceReference?: string | undefined;
}

export interface InheritanceGrant {
  readonly inheritanceGrantId: string;
  readonly sourceContextId: string;
  readonly targetContextId: string;
  readonly scope: string;
}

export interface ModuleRegistry {
  readonly moduleId: string;
  readonly moduleName: string;
  readonly commercial: boolean;
}

export interface Plan {
  readonly planId: string;
  readonly status: 'draft' | 'active' | 'retired';
}

export interface License {
  readonly licenseId: string;
  readonly tenantId: string;
  readonly contextId: string;
  readonly planId: string;
}

export interface FeatureFlag {
  readonly featureFlagId: string;
  readonly key: string;
  readonly enabled: boolean;
}

export interface AuditLog {
  readonly auditId: string;
  readonly tenantId: string;
  readonly contextId: string;
  readonly actorReference: string;
  readonly action: string;
  readonly correlationId: string;
}

export interface SecurityLog {
  readonly securityLogId: string;
  readonly tenantId: string;
  readonly contextId: string;
  readonly event: string;
}

export interface PrivacyConsent {
  readonly privacyConsentId: string;
  readonly subjectReference: string;
  readonly purpose: string;
  readonly policyReference: string;
}

export interface PrivacyRequest {
  readonly privacyRequestId: string;
  readonly subjectReference: string;
  readonly requestType: string;
  readonly status: string;
}

export interface EventContract {
  readonly contractId: string;
  readonly version: 'v1';
  readonly ownerModule: string;
}

export interface ApiClient {
  readonly apiClientId: string;
  readonly ownerModule: string;
  readonly secretReference?: string | undefined;
}

export interface WebhookEndpoint {
  readonly webhookEndpointId: string;
  readonly ownerModule: string;
  readonly secretReference: string;
}

export interface BasicNotification {
  readonly basicNotificationId: string;
  readonly tenantId: string;
  readonly contextId: string;
}

export interface GlobalConfig {
  readonly configId: string;
  readonly key: string;
  readonly valueReference?: string | undefined;
}
