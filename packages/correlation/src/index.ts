export const noduosTransversalPackage = {
  name: '@noduos/correlation',
  stage: 'foundation-only',
  project: 'NoduOS',
  description: 'SaaS Modular de Gestão de Espaços e Segurança Unificada',
  concept: 'Sistema Operacional Modular para Espaços Físicos Conectados',
  allowsCommercialRule: false,
  decidesFinalAuthorization: false,
  accessesDatabase: false,
  carriesRawSecret: false,
  carriesRawEvidence: false,
  startsService: false,
  exposesFunctionalEndpoint: false
} as const;

export type NoduosFoundationStage = typeof noduosTransversalPackage;
