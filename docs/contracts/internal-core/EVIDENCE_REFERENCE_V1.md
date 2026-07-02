# EvidenceReference v1

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


Contract ID: NODUOS.CORE.EVIDENCE_REFERENCE.v1
Versão: v1
Owner module: Core Platform
Status: Active
Sensibilidade: Crítico

Objetivo:
Padronizar referência segura para evidências e provas sem transportar bruto indevido, preservando custódia, retenção, máscara, integridade, autorização e auditoria.

Campos obrigatórios:
evidence_reference_id, contract_id, contract_version, owner_module, evidence_type, evidence_scope, tenant_id, context_id quando aplicável, purpose, sensitivity_level, custody_reference, chain_of_custody_reference, retention_policy_reference, masking_policy_reference, access_policy_reference, export_control_policy_reference, integrity_reference, audit_reference, raw_evidence_allowed, no_domain_transfer e created_at.

Regra absoluta:
raw_evidence_allowed = false

Regras:
Evidência referencia prova. Cadeia de custódia preserva confiança. Payload evita bruto. Segurança controla acesso. Auditoria sustenta validade. Visualização/exportação exige AuthorizationDecision própria.

Proibido:
vídeo bruto, imagem bruta, documento completo, URL pública permanente, biometria bruta, evidência como autorização e evidência como banco compartilhado.

