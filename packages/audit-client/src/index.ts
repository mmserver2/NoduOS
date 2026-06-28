import { PermissionCode, SensitivityLevel } from '../../contracts/src';
import { CorrelationId, CausationId } from '../../correlation/src';
import { ResourceReference } from '../../resource-reference/src';
import { ActorReference } from '../../tenant-context/src';
import { assertNoRawSecretFields } from '../../secret-reference/src';

export interface AuditRecord {
  readonly auditId: string;
  readonly tenantId: string;
  readonly contextId: string;
  readonly actorReference: ActorReference;
  readonly action: string;
  readonly permissionCode: PermissionCode;
  readonly resourceReference?: ResourceReference;
  readonly authorizationDecisionReference?: string;
  readonly policyReferences: readonly string[];
  readonly result: 'allowed' | 'denied' | 'failed' | 'quarantined';
  readonly reasonCode: string;
  readonly beforeMinimized?: Record<string, unknown>;
  readonly afterMinimized?: Record<string, unknown>;
  readonly occurredAt: string;
  readonly correlationId: CorrelationId;
  readonly causationId?: CausationId;
  readonly sensitivityLevel: SensitivityLevel;
}

export interface AuditClient {
  record(record: AuditRecord): AuditRecord;
  list(): readonly AuditRecord[];
}

export class AuditError extends Error {
  public constructor(message: string) {
    super(message);
    this.name = 'AuditError';
  }
}

export class InMemoryAuditClient implements AuditClient {
  private readonly records: AuditRecord[] = [];

  public record(record: AuditRecord): AuditRecord {
    assertNoRawSecretFields(record.beforeMinimized);
    assertNoRawSecretFields(record.afterMinimized);
    this.records.push(Object.freeze({ ...record }));
    return record;
  }

  public list(): readonly AuditRecord[] {
    return [...this.records];
  }
}
