# AuditReference v1

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


Contract ID: NODUOS.CORE.AUDIT_REFERENCE.v1
Versão: v1
Owner module: Core Platform
Status: Active
Sensibilidade: Sensível

Objetivo:
Padronizar referência de trilha auditável para registrar ação, decisão, evento, erro, visualização, exportação ou mudança sensível sem transformar auditoria em autorização ou executor de domínio.

Campos obrigatórios:
audit_reference_id, contract_id, contract_version, owner_module, audit_type, actor_reference, tenant_id, context_id quando aplicável, action_code, purpose, sensitivity_level, correlation_id, occurred_at, retention_policy_reference, immutable e payload_minimized.

Regras:
auditoria registra; auditoria não autoriza; auditoria não executa domínio; auditoria não carrega segredo bruto; auditoria não carrega evidência bruta; auditoria crítica deve ser imutável e minimizada.

Proibido:
auditoria como autorização, auditoria como comando, segredo bruto, evidência bruta, payload completo de domínio e stack trace bruto.

