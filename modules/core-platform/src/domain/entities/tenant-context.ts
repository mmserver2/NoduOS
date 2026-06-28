import { TenantId, ContextId } from '../../../../../packages/tenant-context/src';
import { FailClosedError } from '../errors/core-platform-errors';

export type LifecycleStatus = 'active' | 'suspended' | 'archived';

export interface TenantRecord {
  readonly tenantId: TenantId;
  readonly status: LifecycleStatus;
}

export interface ContextRecord {
  readonly contextId: ContextId;
  readonly tenantId: TenantId;
  readonly status: LifecycleStatus;
}

export interface ContextMembershipRecord {
  readonly tenantId: TenantId;
  readonly contextId: ContextId;
  readonly actorReferenceId: string;
  readonly roleIds: readonly string[];
  readonly status: 'active' | 'revoked';
}

export function assertTenantContextActive(input: {
  readonly tenant: TenantRecord;
  readonly context: ContextRecord;
  readonly membership: ContextMembershipRecord;
}): void {
  if (input.tenant.status !== 'active') throw new FailClosedError('tenant is not active.');
  if (input.context.status !== 'active') throw new FailClosedError('context is not active.');
  if (input.membership.status !== 'active') throw new FailClosedError('context membership is not active.');
  if (input.context.tenantId !== input.tenant.tenantId) throw new FailClosedError('context does not belong to tenant.');
  if (input.membership.tenantId !== input.tenant.tenantId || input.membership.contextId !== input.context.contextId) {
    throw new FailClosedError('membership scope mismatch.');
  }
}
