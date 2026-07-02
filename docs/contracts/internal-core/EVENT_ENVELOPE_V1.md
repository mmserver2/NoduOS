# EventEnvelope v1

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


Contract ID: NODUOS.CORE.EVENT_ENVELOPE.v1
Versão: v1
Owner module: Core Platform
Status: Active
Sensibilidade: Interno/Sensível

Objetivo:
Padronizar eventos internos e intermodulares com envelope estável, payload mínimo, correlação, causalidade, tenant, contexto, auditoria e política de dados sensíveis.

Campos obrigatórios:
event_id, event_name, event_type, event_version, contract_id, contract_version, owner_module, source_module, producer_module, tenant_id quando aplicável, context_id quando aplicável, actor_reference quando aplicável, resource_reference quando aplicável, authorization_decision_reference quando aplicável, evidence_reference quando aplicável, secret_reference quando aplicável, payload, payload_minimized, sensitivity_level, purpose, correlation_id, occurred_at, published_at e audit_reference.

Regra absoluta:
payload_minimized = true

Regras:
Evento comunica fato ocorrido ou solicitação registrada. Evento não é comando. Evento não cria autorização nova. Evento herda referência da AuthorizationDecision quando derivado de ação sensível. Consumidor deve deduplicar por event_id/correlation_id quando aplicável.

Proibido:
evento como comando, payload completo, segredo bruto, evidência bruta, biometria bruta, read model como banco e evento autorizando ação nova sozinho.

