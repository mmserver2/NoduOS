export interface ApiApplicationMetadata {
  readonly appName: 'noduos-api';
  readonly status: 'shell-only';
  readonly exposesCommercialEndpoints: false;
  readonly contractFirstRequired: true;
}

export function createApiApplicationMetadata(): ApiApplicationMetadata {
  return {
    appName: 'noduos-api',
    status: 'shell-only',
    exposesCommercialEndpoints: false,
    contractFirstRequired: true
  };
}

// Intencionalmente não há endpoints nesta primeira leva.
// A API só deve receber rotas após contrato público, validação tenant/contexto,
// AuthorizationDecision, auditoria e testes mínimos.
