const test = require('node:test');
const assert = require('node:assert/strict');

const { SensitivityLevel } = require('../../../dist/packages/contracts/src');
const { resolveTenantContext } = require('../../../dist/packages/tenant-context/src');
const { createCorrelationId } = require('../../../dist/packages/correlation/src');
const { createResourceReference } = require('../../../dist/packages/resource-reference/src');
const { createEventEnvelope } = require('../../../dist/packages/event-envelope/src');
const { InMemoryIdempotencyStore, createStableFingerprint } = require('../../../dist/packages/idempotency/src');
const { AuthorizationDecisionValue } = require('../../../dist/packages/authorization-client/src');
const { issueAuthorizationDecision } = require('../../../dist/modules/core-platform/src/application/use-cases/issue-authorization-decision');

test('tenant/context resolver fails closed when context is missing', () => {
  assert.throws(() => resolveTenantContext({
    tenantId: 'tenant_1',
    actorReferenceId: 'user_1'
  }), /context_id is required/);
});

test('ResourceReference enforces no_domain_transfer', () => {
  assert.throws(() => createResourceReference({
    resourceReferenceId: 'rr_bad',
    contractId: 'NODUOS.CORE.USER_ACCOUNT_REFERENCE.v1',
    contractVersion: 'v1',
    ownerModule: 'core-platform',
    resourceType: 'UserAccount',
    resourcePublicId: 'user_1',
    moduleScope: 'core-platform',
    authorizationScope: 'tenant_1/context_1',
    allowedActionsConceptual: ['read'],
    sensitivityLevel: SensitivityLevel.Restricted,
    dataCategories: ['Conta de usuário'],
    lifecycleState: 'active',
    policyReferences: ['policy.core.default'],
    noDomainTransfer: false
  }), /no_domain_transfer must be true/);
});

test('Core authorization denies without PermissionGrant', () => {
  const tenantContext = resolveTenantContext({ tenantId: 'tenant_1', contextId: 'context_1', actorReferenceId: 'user_1' });
  const resourceReference = createResourceReference({
    resourceReferenceId: 'rr_user_1',
    contractId: 'NODUOS.CORE.USER_ACCOUNT_REFERENCE.v1',
    contractVersion: 'v1',
    ownerModule: 'core-platform',
    resourceType: 'UserAccount',
    resourcePublicId: 'user_1',
    tenantId: 'tenant_1',
    contextId: 'context_1',
    moduleScope: 'core-platform',
    authorizationScope: 'tenant_1/context_1',
    allowedActionsConceptual: ['manage'],
    sensitivityLevel: SensitivityLevel.Restricted,
    dataCategories: ['Conta de usuário'],
    lifecycleState: 'active',
    policyReferences: ['policy.core.default']
  });

  const decision = issueAuthorizationDecision({
    tenantId: 'tenant_1',
    contextId: 'context_1',
    actorReference: tenantContext.actorReference,
    resourceReference,
    action: 'manage',
    permissionCode: 'core.user_account.manage',
    moduleScope: 'core-platform',
    authorizationScope: 'tenant_1/context_1',
    policyReferences: ['policy.core.default'],
    sensitivityLevel: SensitivityLevel.Restricted,
    correlationId: createCorrelationId('test')
  }, { permissionGrants: [] });

  assert.equal(decision.decision, AuthorizationDecisionValue.Denied);
  assert.equal(decision.reasonCode, 'PERMISSION_NOT_GRANTED');
});

test('Core authorization allows with PermissionGrant, active license and enabled feature flag', () => {
  const tenantContext = resolveTenantContext({ tenantId: 'tenant_1', contextId: 'context_1', actorReferenceId: 'user_1' });
  const resourceReference = createResourceReference({
    resourceReferenceId: 'rr_user_1',
    contractId: 'NODUOS.CORE.USER_ACCOUNT_REFERENCE.v1',
    contractVersion: 'v1',
    ownerModule: 'core-platform',
    resourceType: 'UserAccount',
    resourcePublicId: 'user_1',
    tenantId: 'tenant_1',
    contextId: 'context_1',
    moduleScope: 'core-platform',
    authorizationScope: 'tenant_1/context_1',
    allowedActionsConceptual: ['manage'],
    sensitivityLevel: SensitivityLevel.Restricted,
    dataCategories: ['Conta de usuário'],
    lifecycleState: 'active',
    policyReferences: ['policy.core.default']
  });

  const decision = issueAuthorizationDecision({
    tenantId: 'tenant_1',
    contextId: 'context_1',
    actorReference: tenantContext.actorReference,
    resourceReference,
    action: 'manage',
    permissionCode: 'core.user_account.manage',
    moduleScope: 'core-platform',
    authorizationScope: 'tenant_1/context_1',
    policyReferences: ['policy.core.default'],
    sensitivityLevel: SensitivityLevel.Restricted,
    correlationId: createCorrelationId('test')
  }, {
    permissionGrants: [{
      permissionGrantId: 'pg_1',
      tenantId: 'tenant_1',
      contextId: 'context_1',
      actorReferenceId: 'user_1',
      permissionCode: 'core.user_account.manage',
      resourceScope: 'tenant_1/context_1',
      status: 'active'
    }],
    license: { licenseId: 'lic_1', tenantId: 'tenant_1', contextId: 'context_1', moduleKey: 'core-platform', status: 'active' },
    featureFlag: { featureFlagId: 'ff_1', tenantId: 'tenant_1', contextId: 'context_1', featureKey: 'core.user_account.manage', enabled: true }
  });

  assert.equal(decision.decision, AuthorizationDecisionValue.Allowed);
  assert.equal(decision.failClosed, true);
});

test('idempotency fails closed on conflicting key reuse', () => {
  const store = new InMemoryIdempotencyStore();
  const key = 'idem_1';
  const first = store.reserveOrReplay({
    key,
    commandName: 'CreateUserAccount',
    fingerprint: createStableFingerprint({ user: 'a' }),
    execute: () => ({ ok: true })
  });
  assert.deepEqual(first, { ok: true });
  assert.throws(() => store.reserveOrReplay({
    key,
    commandName: 'CreateUserAccount',
    fingerprint: createStableFingerprint({ user: 'b' }),
    execute: () => ({ ok: true })
  }), /conflicting command payload/);
});

test('EventEnvelope rejects raw secret fields', () => {
  const tenantContext = resolveTenantContext({ tenantId: 'tenant_1', contextId: 'context_1', actorReferenceId: 'user_1' });
  assert.throws(() => createEventEnvelope({
    eventId: 'evt_1',
    eventName: 'UserAccountCreated',
    eventType: 'fact_occurred',
    eventVersion: 'v1',
    contractId: 'NODUOS.TRANSVERSAL.EVENT_ENVELOPE.v1',
    contractVersion: 'v1',
    sourceModule: 'core-platform',
    ownerModule: 'core-platform',
    producerModule: 'core-platform',
    tenantId: 'tenant_1',
    contextId: 'context_1',
    actorReference: tenantContext.actorReference,
    policyReferences: ['policy.core.default'],
    sensitivityLevel: SensitivityLevel.Restricted,
    dataCategories: ['Conta de usuário'],
    purpose: 'auditability',
    occurredAt: new Date().toISOString(),
    correlationId: createCorrelationId('test'),
    payloadSchemaReference: 'NODUOS.CORE.USER_ACCOUNT_REFERENCE.v1',
    payload: { token: 'raw-token-forbidden' },
    compatibilityPolicy: 'v1 additive only',
    deprecationPolicy: 'none'
  }), /raw secret field is forbidden/);
});
