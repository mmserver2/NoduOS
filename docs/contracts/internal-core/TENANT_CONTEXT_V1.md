# TenantContext v1

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


Contract ID: NODUOS.CORE.TENANT_CONTEXT.v1
Versão: v1
Owner module: Core Platform
Status: Active
Sensibilidade: Restrito

Objetivo:
Padronizar o contexto ativo de tenant, ator, membership, papéis e permissões selecionadas para que módulos consumidores avaliem escopo sem transformar contexto em autorização final.

Campos obrigatórios:
tenant_id, context_id, context_type, actor_reference, membership_reference, scope, active_role_references, active_permission_references, selected_at, correlation_id e audit_reference quando aplicável.

Regras:
ausência de tenant falha fechada; ausência de contexto falha fechada; ausência de ator falha fechada; membership inválido falha fechada; contexto não autoriza sozinho; contexto não substitui AuthorizationDecision; contexto expirado falha fechada em ação sensível.

Proibido:
contexto como autorização final, contexto fora do tenant, membership inválido, permissão herdada como execução automática, payload de usuário completo e dado sensível desnecessário.

