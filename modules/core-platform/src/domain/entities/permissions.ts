import { PermissionCode } from '../../../../../packages/contracts/src';

export interface RoleRecord {
  readonly roleId: string;
  readonly tenantId: string;
  readonly contextId: string;
  readonly name: string;
  readonly status: 'active' | 'suspended';
}

export interface PermissionRecord {
  readonly permissionCode: PermissionCode;
  readonly ownerModule: string;
  readonly description: string;
  readonly status: 'active' | 'deprecated';
}

export interface PermissionGrantRecord {
  readonly permissionGrantId: string;
  readonly tenantId: string;
  readonly contextId: string;
  readonly actorReferenceId: string;
  readonly permissionCode: PermissionCode;
  readonly resourceScope: string;
  readonly status: 'active' | 'revoked';
}

export interface InheritanceGrantRecord {
  readonly inheritanceGrantId: string;
  readonly tenantId: string;
  readonly contextId: string;
  readonly sourceScope: string;
  readonly targetScope: string;
  readonly permissionCode: PermissionCode;
  readonly status: 'active' | 'revoked';
}

export function hasActivePermissionGrant(input: {
  readonly grants: readonly PermissionGrantRecord[];
  readonly tenantId: string;
  readonly contextId: string;
  readonly actorReferenceId: string;
  readonly permissionCode: PermissionCode;
  readonly resourceScope: string;
}): boolean {
  return input.grants.some((grant) =>
    grant.status === 'active' &&
    grant.tenantId === input.tenantId &&
    grant.contextId === input.contextId &&
    grant.actorReferenceId === input.actorReferenceId &&
    grant.permissionCode === input.permissionCode &&
    (grant.resourceScope === input.resourceScope || grant.resourceScope === '*')
  );
}
