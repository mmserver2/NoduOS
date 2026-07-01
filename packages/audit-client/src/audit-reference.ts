export interface AuditReference {
  readonly auditId: string;
  readonly tenantId: string;
  readonly contextId: string;
  readonly actorReference: string;
  readonly action: string;
  readonly resourceReference?: string;
  readonly correlationId: string;
  readonly recordedAt: string;
}

export const auditRules = {
  auditRegisters: true,
  auditDoesNotAuthorize: true,
  auditDoesNotExecuteOwnerDomain: true,
  criticalActionRequiresAudit: true
} as const;
