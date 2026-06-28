import { AuditClient, AuditRecord } from '../../../../../packages/audit-client/src';

export function recordCoreAuditLog(record: AuditRecord, auditClient: AuditClient): AuditRecord {
  return auditClient.record(record);
}
