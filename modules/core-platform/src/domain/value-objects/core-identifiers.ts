export type UserAccountId = string & { readonly __brand: 'UserAccountId' };
export type RoleId = string & { readonly __brand: 'RoleId' };
export type PermissionGrantId = string & { readonly __brand: 'PermissionGrantId' };
export type InheritanceGrantId = string & { readonly __brand: 'InheritanceGrantId' };
export type LicenseId = string & { readonly __brand: 'LicenseId' };
export type FeatureFlagId = string & { readonly __brand: 'FeatureFlagId' };

export function ensurePublicId<T extends string>(value: string | undefined | null, label: string): T {
  if (!value || !value.trim()) {
    throw new Error(`${label} is required.`);
  }
  if (value.includes(' ') || value.includes('/')) {
    throw new Error(`${label} must be a public opaque identifier, not a path or display label.`);
  }
  return value as T;
}
