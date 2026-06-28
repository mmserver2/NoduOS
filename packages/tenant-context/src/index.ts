export type TenantId = string & { readonly __brand: 'TenantId' };
export type ContextId = string & { readonly __brand: 'ContextId' };
export type ActorReferenceId = string & { readonly __brand: 'ActorReferenceId' };

export interface ActorReference {
  readonly actorReferenceId: ActorReferenceId;
  readonly actorType: 'user_account' | 'api_client' | 'system_service';
  readonly displayLabelMinimized?: string;
}

export interface TenantContext {
  readonly tenantId: TenantId;
  readonly contextId: ContextId;
  readonly actorReference: ActorReference;
}

export interface TenantContextInput {
  readonly tenantId?: string | null;
  readonly contextId?: string | null;
  readonly actorReferenceId?: string | null;
  readonly actorType?: ActorReference['actorType'];
  readonly displayLabelMinimized?: string;
}

export class TenantContextError extends Error {
  public constructor(message: string) {
    super(message);
    this.name = 'TenantContextError';
  }
}

export function resolveTenantContext(input: TenantContextInput): TenantContext {
  if (!input.tenantId || !input.tenantId.trim()) {
    throw new TenantContextError('tenant_id is required.');
  }
  if (!input.contextId || !input.contextId.trim()) {
    throw new TenantContextError('context_id is required.');
  }
  if (!input.actorReferenceId || !input.actorReferenceId.trim()) {
    throw new TenantContextError('actor_reference is required.');
  }
  return Object.freeze({
    tenantId: input.tenantId as TenantId,
    contextId: input.contextId as ContextId,
    actorReference: Object.freeze({
      actorReferenceId: input.actorReferenceId as ActorReferenceId,
      actorType: input.actorType ?? 'user_account',
      ...(input.displayLabelMinimized ? { displayLabelMinimized: input.displayLabelMinimized } : {})
    })
  });
}
