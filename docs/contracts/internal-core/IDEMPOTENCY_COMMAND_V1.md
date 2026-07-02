# IdempotencyCommand v1

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


Contract ID: NODUOS.CORE.IDEMPOTENCY_COMMAND.v1
Versão: v1
Owner module: Core Platform
Status: Active
Sensibilidade: Interno/Sensível

Objetivo:
Padronizar comando crítico idempotente para impedir duplicação de abertura, bloqueio, exportação, convite, notificação, cobrança, suporte remoto, conector, evidência, política ou qualquer ação crítica.

Campos obrigatórios:
idempotency_key, command_name, command_version, contract_id, contract_version, owner_module, tenant_id, context_id quando aplicável, actor_reference, resource_reference quando aplicável, payload_fingerprint, correlation_id, issued_at, expires_at, replay_policy, conflict_policy e audit_reference.

Regras:
ação crítica exige idempotência; mesma chave com payload igual pode retornar replay controlado; mesma chave com payload diferente deve gerar conflito; ausência de key quando obrigatória falha fechada; idempotência não autoriza ação sozinha; comando crítico continua exigindo AuthorizationDecision.

Políticas obrigatórias:
replay_policy, conflict_policy, expiration_policy, audit_policy e fail_closed_rules.

