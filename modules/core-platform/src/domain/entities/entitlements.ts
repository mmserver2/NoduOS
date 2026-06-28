export interface ModuleRegistryRecord {
  readonly moduleKey: string;
  readonly ownerModule: string;
  readonly status: 'registered' | 'active' | 'inactive';
}

export interface LicenseRecord {
  readonly licenseId: string;
  readonly tenantId: string;
  readonly contextId: string;
  readonly moduleKey: string;
  readonly status: 'active' | 'suspended' | 'expired';
}

export interface EntitlementRecord {
  readonly entitlementId: string;
  readonly tenantId: string;
  readonly contextId: string;
  readonly moduleKey: string;
  readonly featureKey: string;
  readonly status: 'active' | 'revoked';
}

export interface FeatureFlagRecord {
  readonly featureFlagId: string;
  readonly tenantId: string;
  readonly contextId: string;
  readonly featureKey: string;
  readonly enabled: boolean;
}

export function isLicenseActive(license: LicenseRecord | undefined): boolean {
  return license?.status === 'active';
}

export function isFeatureEnabled(flag: FeatureFlagRecord | undefined): boolean {
  return flag?.enabled === true;
}
