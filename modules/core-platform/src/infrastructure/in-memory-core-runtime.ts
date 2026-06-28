import { InMemoryAuditClient } from '../../../../packages/audit-client/src';
import { InMemoryIdempotencyStore } from '../../../../packages/idempotency/src';
import { PermissionGrantRecord } from '../domain/entities/permissions';
import { FeatureFlagRecord, LicenseRecord } from '../domain/entities/entitlements';

export interface InMemoryCoreRuntimeState {
  readonly permissionGrants: PermissionGrantRecord[];
  readonly licenses: LicenseRecord[];
  readonly featureFlags: FeatureFlagRecord[];
}

export class InMemoryCoreRuntime {
  public readonly audit = new InMemoryAuditClient();
  public readonly idempotency = new InMemoryIdempotencyStore<unknown>();
  public readonly state: InMemoryCoreRuntimeState = {
    permissionGrants: [],
    licenses: [],
    featureFlags: []
  };
}
