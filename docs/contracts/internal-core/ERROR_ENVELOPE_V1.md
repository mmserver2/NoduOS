# ErrorEnvelope v1

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


Contract ID: NODUOS.CORE.ERROR_ENVELOPE.v1
Versão: v1
Owner module: Core Platform
Status: Active
Sensibilidade: Interno/Sensível

Objetivo:
Padronizar erros seguros, auditáveis e correlacionáveis sem vazar dado sensível, segredo, evidência, stack trace, path interno, internal database id ou variável de ambiente.

Campos obrigatórios:
error_id, contract_id, contract_version, owner_module, error_code, message_safe, tenant_id quando aplicável, context_id quando aplicável, correlation_id, audit_reference quando aplicável, sensitivity_level, retryable, fail_closed e occurred_at.

Regras:
mensagem para consumidor deve ser segura; dica técnica opcional deve ser minimizada; erro sensível deve falhar fechado; erro não pode expor segredo ou path sensível; erro deve preservar correlation_id.

Proibido:
stack trace bruto, segredo, token, senha, evidência bruta, dado sensível sem máscara, internal database id, path de arquivo sensível e variável de ambiente.

