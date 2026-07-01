export type TenantId = string;
export type ContextId = string;
export type ActorReferenceId = string;

export type ActorType =
  | 'master_admin'
  | 'partner_admin'
  | 'organization_admin'
  | 'operator'
  | 'client'
  | 'service'
  | 'automation'
  | 'external_integration'
  | 'support'
  | 'auditor';

export interface TenantReference {
  readonly tenantId: TenantId;
  readonly tenantType: 'master' | 'partner' | 'organization' | 'unit' | 'person' | 'system';
  readonly status: 'active' | 'suspended' | 'archived';
}

export interface ContextReference {
  readonly contextId: ContextId;
  readonly tenantId: TenantId;
  readonly contextType: 'platform' | 'partner' | 'organization' | 'unit' | 'area' | 'system';
  readonly status: 'active' | 'suspended' | 'archived';
}

export interface ActorReference {
  readonly actorReferenceId: ActorReferenceId;
  readonly actorType: ActorType;
  readonly tenantId: TenantId;
  readonly contextId: ContextId;
  readonly displayLabelMinimized: string;
  readonly noDomainTransfer: true;
}

export interface TenantContext {
  readonly tenant: TenantReference;
  readonly context: ContextReference;
  readonly actor: ActorReference;
  readonly correlationId: string;
  readonly resolvedAt: string;
}

export function createTenantContext(input: {
  readonly tenantId: string;
  readonly contextId: string;
  readonly actorReferenceId: string;
  readonly actorType: ActorType;
  readonly correlationId: string;
}): TenantContext {
  return {
    tenant: { tenantId: input.tenantId, tenantType: 'organization', status: 'active' },
    context: { contextId: input.contextId, tenantId: input.tenantId, contextType: 'organization', status: 'active' },
    actor: {
      actorReferenceId: input.actorReferenceId,
      actorType: input.actorType,
      tenantId: input.tenantId,
      contextId: input.contextId,
      displayLabelMinimized: input.actorType,
      noDomainTransfer: true
    },
    correlationId: input.correlationId,
    resolvedAt: new Date(0).toISOString()
  };
}

export function validateTenantContext(context: TenantContext): readonly string[] {
  const errors: string[] = [];
  if (!context.tenant.tenantId) errors.push('tenant_id_required');
  if (!context.context.contextId) errors.push('context_id_required');
  if (context.context.tenantId !== context.tenant.tenantId) errors.push('context_tenant_mismatch');
  if (!context.actor.actorReferenceId) errors.push('actor_reference_required');
  if (context.actor.tenantId !== context.tenant.tenantId) errors.push('actor_tenant_mismatch');
  if (context.actor.contextId !== context.context.contextId) errors.push('actor_context_mismatch');
  if (!context.correlationId) errors.push('correlation_id_required');
  if (context.tenant.status !== 'active' || context.context.status !== 'active') errors.push('tenant_or_context_not_active');
  return errors;
}

export function assertTenantContext(context: TenantContext): TenantContext {
  const errors = validateTenantContext(context);
  if (errors.length > 0) throw new Error('invalid_tenant_context:' + errors.join(','));
  return context;
}

