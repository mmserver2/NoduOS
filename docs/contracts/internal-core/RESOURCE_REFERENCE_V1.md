# ResourceReference v1

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


Contract ID: NODUOS.CORE.RESOURCE_REFERENCE.v1
Versão: v1
Owner module: Core Platform
Status: Active
Sensibilidade: Restrito/Sensível

Objetivo:
Padronizar referência segura para recursos sem transferência de domínio, sem banco compartilhado, sem payload completo e sem autorização automática.

Campos obrigatórios:
resource_reference_id, contract_id, contract_version, owner_module, resource_type, public_resource_id, tenant_id, context_id quando aplicável, scope, sensitivity_level, lifecycle_state, availability_state, allowed_actions, no_domain_transfer, no_shared_database_access, created_at e audit_reference quando aplicável.

Regra absoluta:
no_domain_transfer = true

Regras:
ResourceReference aponta, não executa; ResourceReference não autoriza; o módulo dono preserva domínio, ciclo de vida, validação e execução; consumidor não acessa banco interno do owner_module; revalidação é obrigatória para ação sensível; recurso expirado, indisponível, fora de tenant/contexto ou sem escopo falha fechada.

Proibido:
internal_id, payload completo, segredo bruto, evidência bruta, dado biométrico bruto, autorização automática, execução de domínio, banco compartilhado e classe interna de módulo dono.

