import { SensitivityLevel } from '../../contracts/src';
import { createCorrelationId } from '../../correlation/src';
import { createResourceReference } from '../../resource-reference/src';
import { resolveTenantContext } from '../../tenant-context/src';

export function fixtureTenantContext() {
  return resolveTenantContext({
    tenantId: 'tenant_demo',
    contextId: 'context_demo',
    actorReferenceId: 'user_demo',
    actorType: 'user_account',
    displayLabelMinimized: 'Usuário Demo'
  });
}

export function fixtureCorrelationId() {
  return createCorrelationId('test');
}

export function fixtureResourceReference() {
  return createResourceReference({
    resourceReferenceId: 'rr_user_demo',
    contractId: 'NODUOS.CORE.USER_ACCOUNT_REFERENCE.v1',
    contractVersion: 'v1',
    ownerModule: 'core-platform',
    resourceType: 'UserAccount',
    resourcePublicId: 'user_demo',
    tenantId: 'tenant_demo',
    contextId: 'context_demo',
    moduleScope: 'core-platform',
    authorizationScope: 'tenant_demo/context_demo',
    allowedActionsConceptual: ['read', 'manage'],
    sensitivityLevel: SensitivityLevel.Restricted,
    dataCategories: ['Conta de usuário', 'Identidade técnica'],
    lifecycleState: 'active',
    policyReferences: ['policy.core.user_account.default']
  });
}
