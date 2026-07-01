import type { NoduosSensitivityLevel } from '../../contracts/src/index.js';

export interface AuditReference {
  readonly auditReferenceId: string;
  readonly ownerModule: 'Core Platform';
  readonly tenantId: string;
  readonly contextId: string;
  readonly actorReferenceId: string;
  readonly action: string;
  readonly resourceReferenceId?: string | undefined;
  readonly authorizationDecisionId?: string | undefined;
  readonly purpose: string;
  readonly policyReferences: readonly string[];
  readonly sensitivityLevel: NoduosSensitivityLevel;
  readonly correlationId: string;
  readonly recordedAt: string;
  readonly payloadMinimized: true;
  readonly noDomainTransfer: true;
}

export interface AuditRecord extends AuditReference {
  readonly outcome: 'allowed' | 'denied' | 'failed_closed' | 'quarantined' | 'recorded';
  readonly reasonCode: string;
}

export function createAuditReference(input: {
  readonly auditReferenceId: string;
  readonly tenantId: string;
  readonly contextId: string;
  readonly actorReferenceId: string;
  readonly action: string;
  readonly purpose: string;
  readonly correlationId: string;
  readonly policyReferences?: readonly string[] | undefined;
  readonly resourceReferenceId?: string | undefined;
  readonly authorizationDecisionId?: string | undefined;
  readonly sensitivityLevel?: NoduosSensitivityLevel | undefined;
}): AuditReference {
  return {
    auditReferenceId: input.auditReferenceId,
    ownerModule: 'Core Platform',
    tenantId: input.tenantId,
    contextId: input.contextId,
    actorReferenceId: input.actorReferenceId,
    action: input.action,
    ...(input.resourceReferenceId ? { resourceReferenceId: input.resourceReferenceId } : {}),
    ...(input.authorizationDecisionId ? { authorizationDecisionId: input.authorizationDecisionId } : {}),
    purpose: input.purpose,
    policyReferences: input.policyReferences ?? [],
    sensitivityLevel: input.sensitivityLevel ?? 'restricted',
    correlationId: input.correlationId,
    recordedAt: new Date(0).toISOString(),
    payloadMinimized: true,
    noDomainTransfer: true
  };
}

