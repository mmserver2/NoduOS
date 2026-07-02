# AuthorizationDecision v1

Projeto: NoduOS
Descrição oficial: SaaS Modular de Gestão de Espaços e Segurança Unificada
Conceito técnico: Sistema Operacional Modular para Espaços Físicos Conectados
Conceito de marca: Conexão que impulsiona
DEC oficial criada nesta etapa: não
Próxima DEC livre preservada: DEC-198

Frase guia:
Contrato antes de endpoint. Domínio antes de tabela. Autorização antes de ação. Referência antes de payload. Evento antes de read model. Auditoria antes de confiança. LGPD antes de dado bruto. Teste antes de deploy.

Regra central:
Política influencia. Core decide. Módulo dono executa. Auditoria registra.


Contract ID: NODUOS.CORE.AUTHORIZATION_DECISION.v1
Versão: v1
Owner module: Core Platform
Status: Active
Sensibilidade: Sensível

Objetivo:
Padronizar a decisão estrutural de autorização emitida pelo Core Platform para uma ação delimitada por tenant, contexto, ator, recurso, permissão, política, licença, feature flag, finalidade e auditoria.

Campos obrigatórios:
decision_id, decision_version, contract_id, contract_version, owner_module, tenant_id, context_id, actor_reference, resource_reference quando aplicável, permission_code, action_code, scope, purpose, sensitivity_level, policy_result, permission_result, license_result, feature_flag_result, privacy_result, correlation_id, audit_reference, issued_at, expires_at, decision, reason_code, fail_closed, owner_module_must_execute e audit_required.

Regras:
só o Core emite decisão final; política influencia; Core decide; módulo dono executa; auditoria registra; decisão expirada falha fechada; ausência de tenant falha fechada; ausência de contexto falha fechada; ausência de ator falha fechada; ausência de política falha fechada; decisão não é permissão eterna; frontend nunca decide autorização final; evento não cria autorização nova sozinho; ResourceReference não autoriza; EvidenceReference não autoriza; SecretReference não autoriza.

Payload proibido:
segredo bruto, evidência bruta, biometria bruta, payload completo de domínio, internal database id, decisão sem expiração, autorização emitida por módulo comercial e autorização emitida pelo frontend.

Erros esperados:
AUTHZ_DENIED, AUTHZ_EXPIRED, AUTHZ_MISSING_TENANT, AUTHZ_MISSING_CONTEXT, AUTHZ_MISSING_ACTOR, AUTHZ_MISSING_POLICY, AUTHZ_MISSING_AUDIT, AUTHZ_FAIL_CLOSED.

