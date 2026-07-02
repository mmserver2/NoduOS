# SecretReference v1

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


Contract ID: NODUOS.CORE.SECRET_REFERENCE.v1
Versão: v1
Owner module: Core Platform
Status: Active
Sensibilidade: Crítico

Objetivo:
Padronizar referência segura a segredos sem transportar segredo bruto em payload, evento, comando, read model, relatório, log, erro ou URL.

Campos obrigatórios:
secret_reference_id, contract_id, contract_version, owner_module, secret_type, secret_scope, purpose, tenant_id quando aplicável, context_id quando aplicável, access_policy_reference, rotation_policy_reference, revocation_policy_reference, audit_policy_reference, raw_secret_allowed, no_domain_transfer e created_at.

Regra absoluta:
raw_secret_allowed = never

Regras:
Segredo não viaja. Referência aponta. Política limita. Core autoriza quando a ação for sensível. Módulo dono usa internamente. Auditoria registra.

Proibido:
segredo bruto, token bruto, password bruto, private key, segredo em URL, segredo em log, segredo em evento, segredo em read model, segredo em relatório e segredo em payload.

