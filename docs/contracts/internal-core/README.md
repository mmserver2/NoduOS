# Contratos Públicos Internos do Core NoduOS

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


Este bloco consolida documentação, tipos TypeScript, validadores puros, exemplos, checker e testes estruturais para os contratos públicos internos do Core NoduOS.

Este bloco não cria endpoint funcional, servidor HTTP, banco, migration real, Prisma schema, driver de banco, módulo comercial, worker real, deploy, PM2, Nginx, firewall, remote Git ou push.

Contratos consolidados:
1. AuthorizationDecision v1 - NODUOS.CORE.AUTHORIZATION_DECISION.v1
2. ResourceReference v1 - NODUOS.CORE.RESOURCE_REFERENCE.v1
3. EventEnvelope v1 - NODUOS.CORE.EVENT_ENVELOPE.v1
4. SecretReference v1 - NODUOS.CORE.SECRET_REFERENCE.v1
5. EvidenceReference v1 - NODUOS.CORE.EVIDENCE_REFERENCE.v1
6. TenantContext v1 - NODUOS.CORE.TENANT_CONTEXT.v1
7. AuditReference v1 - NODUOS.CORE.AUDIT_REFERENCE.v1
8. ErrorEnvelope v1 - NODUOS.CORE.ERROR_ENVELOPE.v1
9. IdempotencyCommand v1 - NODUOS.CORE.IDEMPOTENCY_COMMAND.v1

Metadados mínimos obrigatórios: contract_id, contract_version, owner_module, status, purpose, allowed_producer, allowed_consumer, tenant_required, context_required, actor_required, authorization_required, audit_required, resource_reference_policy, evidence_reference_policy, secret_reference_policy, sensitivity_level, payload_minimized, raw_secret_allowed, raw_evidence_allowed, raw_biometric_allowed, allowed_fields, forbidden_fields, error_codes, fail_closed_rules, compatibility_policy e deprecation_policy.

Matriz geral de payload permitido e proibido:
- AuthorizationDecision: permitido decisão, escopo e reason_code minimizado; proibido segredo bruto, evidência bruta e payload completo; exige fail-closed e audit_reference.
- ResourceReference: permitido coordenada pública do recurso; proibido internal_id e domínio completo; exige no_domain_transfer.
- EventEnvelope: permitido payload minimizado e referências; proibido evento como comando; exige payload_minimized.
- SecretReference: permitido referência, escopo e política; proibido segredo bruto; exige raw_secret_allowed = never.
- EvidenceReference: permitido referência, custódia e retenção; proibido evidência bruta; exige raw_evidence_allowed = false.
- TenantContext: permitido tenant, contexto, ator e membership; proibido autorização final; falha fechado sem tenant/context/actor.
- AuditReference: permitido trilha minimizada; proibido auditoria autorizar ou executar domínio.
- ErrorEnvelope: permitido message_safe, error_code e correlation_id; proibido stack trace bruto, segredo, path sensível e variável de ambiente.
- IdempotencyCommand: permitido replay_policy e conflict_policy; proibido duplicar ação crítica sem idempotency_key.

Garantias anti-acoplamento:
ResourceReference aponta, não transfere domínio.
AuthorizationDecision decide, não executa domínio.
EventEnvelope comunica fato, não vira comando.
SecretReference aponta segredo, nunca carrega segredo.
EvidenceReference aponta prova, nunca carrega prova bruta.
TenantContext contextualiza, não autoriza sozinho.
AuditReference registra, não autoriza.
ErrorEnvelope informa erro seguro, não vaza dado sensível.
IdempotencyCommand protege replay/conflito, não autoriza sozinho.

Critério de falha fechada:
Sem tenant, contexto, ator, escopo, permissão, política, referência necessária, auditoria exigida ou decisão válida do Core, a ação sensível/crítica deve negar, pausar, mascarar ou quarentenar. Não há comportamento fail-open.

