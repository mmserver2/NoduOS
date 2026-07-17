# CANVA FINAL - MATRIZ TÉCNICA DE PERMISSÕES POR CONTRATO NODUOS

Projeto: NoduOS
Descrição oficial: SaaS Modular de Gestão de Espaços e Segurança Unificada
Conceito técnico: Sistema Operacional Modular para Espaços Físicos Conectados
Conceito de marca: Conexão que impulsiona
Tipo de documento: Matriz técnica conceitual de permissões por contrato público
Versão do documento: 1.6.0
Versão base dos contratos: v1
Data desta consolidação: 2026-06-27
Status: Aprovada e atualizada com Blueprint Técnico da Aplicação, DEC-198 e referência Git canônica pré-runtime
Última DEC consolidada na raiz: DEC-198
Próxima DEC livre: DEC-199

Frase guia:

Permissão limita o ator. Contrato limita o caminho. Core decide. Módulo dono executa. Auditoria registra.

Regra central:

Política influencia. Core decide. Módulo dono executa. Auditoria registra.

## 1. Objetivo da Matriz Técnica de Permissões por Contrato

Transformar o Catálogo de Contratos Públicos do NoduOS em uma visão operacional de governança técnica, definindo quem pode chamar ou consumir cada contrato, em qual escopo, com qual permissão conceitual, quais proteções são obrigatórias e quais usos são proibidos para evitar acoplamento.

Esta matriz não implementa código, banco, endpoint final, migration, schema técnico definitivo, tela ou módulo novo. Ela é o mapa de hiperespaço que impede que um contrato vire atalho para invadir domínio alheio.

## 2. Escopo desta versão

- Cobre contratos transversais e os contratos públicos dos 25 módulos oficiais.
- Usa como base 272 contratos públicos extraídos do Catálogo de Contratos Públicos, além de 20 contratos transversais, totalizando 292 contratos mapeados nesta matriz.
- Classifica permissão, perfil, escopo, AuthorizationDecision, licença/módulo ativo, Segurança e LGPD, auditoria, idempotência, sensibilidade, fail-closed e risco de acoplamento.
- Mantém cobertura conceitual e não substitui schemas técnicos futuros.

## 3. Fontes oficiais consideradas

- `00_BIBLIA_DO_PROJETO.md`
- `01_MAPA_DE_MODULOS.md`
- `02_REGRAS_DE_ARQUITETURA.md`
- `03_DECISOES_OFICIAIS.md`
- `04_PROMPTS_DE_TRABALHO.md`
- `05_CATALOGO_DE_CONTRATOS_PUBLICOS.md`
- `IDENTIDADE_OFICIAL_NODUOS.md`
- `RELATORIO_GERAL_CONSOLIDACAO_ARQUITETURA_NODUOS.txt`
- `CANVA_FINAL_PLANEJAMENTO_GERAL_NODUOS.md.txt`
- `README_PACOTE_FINAL_NODUOS_CATALOGO_CONTRATOS.md.txt`
- `CATALOGO_DE_CONTRATOS_PUBLICOS_NODUOS_CONSOLIDADO_AJUSTADO.txt`

## 4. Regras globais da matriz

- Contrato não transfere domínio.
- Read model não vira banco compartilhado.
- Evento de fato ocorrido não vira comando.
- Evento de solicitação registrada não prova execução.
- Comando solicita execução e deve ser idempotente quando crítico.
- Contrato sensível exige AuthorizationDecision do Core e política de Segurança e LGPD.
- Contrato crítico exige auditoria, fail-closed e trilha de correlação.
- Segredo bruto nunca trafega em payload, evento, comando, log, URL, read model, exportação ou configuração.
- Evidência trafega por EvidenceReference, não por bruto indevido.
- Ausência de tenant, contexto, escopo, permissão, política ou autorização nega, pausa ou degrada a ação com segurança.

## 5. Perfis oficiais considerados

1. Master Admin
2. Equipe interna Master autorizada
3. Parceiro Admin
4. Equipe técnica do Parceiro
5. Equipe comercial do Parceiro
6. Organização Admin
7. Operador/Gestor
8. Portaria/Recepção, quando aplicável
9. Cliente/Usuário Final
10. Suporte interno autorizado
11. Auditor interno autorizado
12. Integração externa autorizada
13. Serviço interno do sistema
14. Automação autorizada
15. Marketplace Connector autorizado

## 6. Dimensões oficiais de permissão

- owner_module
- contract_id
- contract_type
- perfil autorizado
- módulo consumidor autorizado
- permissão conceitual
- escopo hierárquico
- tenant_id
- context_id
- resource_reference
- AuthorizationDecision
- licença, módulo ativo, entitlement e feature flag
- política de Segurança e LGPD
- auditoria
- idempotência
- sensibilidade
- mascaramento
- retenção
- fail-closed
- observação anti-acoplamento

## 7. Padrão de nomenclatura de permissões

Formato conceitual:

```text
<dominio>.<recurso_ou_contrato>.<ação>
```

Ações principais: `read`, `manage`, `request`, `export`, `publish`, `consume`, `deliver`, `simulate`, `execute`.

Exemplos oficiais derivados desta matriz:

- `core.authorization_decision.read_or_manage`
- `master.master_partner_governance.manage`
- `partner.partner_organization_portfolio.read`
- `organization.organization_profile.read_or_manage`
- `people.person_profile.manage`
- `structure.structure_reference.read`
- `policy.policy_simulation.request`
- `gateway.gateway_command.request`
- `device.device_record.manage`
- `access.access_execution_request.request`
- `camera.camera_live_view_request.request`
- `alarm.alarm_command.request`
- `finance.invoice.manage`
- `visitor.visitor_invite.manage`
- `ticket.operational_ticket.manage`
- `mural.announcement.manage`
- `reservation.reservation_hold.request`
- `bi.bi_export_request.request`
- `white_label.white_label_theme.manage`
- `notification.notification_request.request`
- `automation.automation_action_request.request`
- `marketplace.connector_installation_request.request`
- `audit.audit_query.read`
- `security.security_policy.manage`
- `support.support_access_session.manage`

## 8. Níveis de sensibilidade

| Nível | Critério | Exemplo |
|---|---|---|
| Público | Não expõe dado privado, ação ou contexto sensível | metadado público controlado |
| Interno | Uso técnico entre módulos sem dado sensível relevante | paginação, ordenação, erro técnico mascarado |
| Restrito | Exige tenant, contexto, perfil e escopo | read model operacional, referência estrutural |
| Sensível | Envolve pessoa, financeiro, imagem, visitante, suporte, logs ou política | PersonProfile, Invoice, CameraAccess, AuditQuery |
| Crítico | Executa ou solicita ação física, exportação, segredo, evidência, suporte remoto, conector ou política crítica | OpenAccess, Export, SecretReference, RemoteSession |

## 9. Regras para AuthorizationDecision

- Obrigatório para contratos sensíveis ou críticos.
- Obrigatório para alteração de permissão, herança, licença, feature flag, política, suporte remoto, conector, segredo, evidência, exportação, financeiro, visitante, vídeo, imagem, biometria, documento, acesso físico e automação crítica.
- Eventos herdam a AuthorizationDecision da ação que os gerou; o consumidor não deve presumir permissão nova a partir do evento.
- Read models exigem AuthorizationDecision quando expõem dados restritos, sensíveis ou críticos.

## 10. Regras para Segurança e LGPD

- Obrigatória para dados pessoais, documentos, foto, biometria, vídeo, imagem, visitante, financeiro, localização, logs de acesso, evidência, suporte remoto, diagnóstico, integração externa, segredo, certificado, domínio, webhook externo, exportação, consentimento, retenção, mascaramento e tratamento de dados.
- Dados sensíveis devem ser minimizados, mascarados por perfil e retidos conforme política oficial.
- Segredos usam SecretReference. Evidências usam EvidenceReference.

## 11. Regras para auditoria

- Obrigatória em ação crítica, consulta sensível, exportação, alteração cadastral crítica, permissão, herança, licença, feature flag, módulo ativo, política, suporte remoto, diagnóstico, conector, acesso físico, vídeo, visitante, financeiro, ticket, reserva, notificação e automação.
- Auditoria registra trilha. Ela não executa regra do módulo dono e não substitui logs primários.

## 12. Regras para idempotência

- Obrigatória em comandos críticos e ações que possam duplicar abertura, bloqueio, credencial, cobrança, pagamento, reserva, convite, notificação, automação, exportação, evidência, instalação de conector, publicação de tema, alteração de política, suporte remoto, diagnóstico, suspensão ou restauração.
- Eventos e read models não usam idempotency_key como comando, mas consumidores devem usar inbox/deduplicação.

## 13. Regras para fail-closed

- Sem tenant, contexto, escopo, ResourceReference, AuthorizationDecision, licença, feature flag, permissão ou política sensível, a ação crítica não executa.
- Em leitura não crítica, pode haver degradação segura com dados mascarados ou indisponibilidade controlada.
- Falha de webhook, conector, segredo ou política de terceiro deve bloquear ou quarentenar a operação sensível.

## 14. Matriz de permissões dos contratos transversais

| Contract ID | Tipo | Owner | Quem pode chamar | Módulos consumidores | Permissão necessária | Escopo | Exige Core AuthorizationDecision? | Exige licença/módulo ativo? | Exige política Segurança/LGPD? | Exige auditoria? | Exige idempotência? | Sensibilidade | Fail-closed | Observação anti-acoplamento |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.TRANSVERSAL.EVENT_ENVELOPE.v1 | Contrato transversal | Transversal | Serviço interno; módulos donos | Todos os módulos por composição | `contract.event_envelope.read` | tenant/contexto/ator/recurso conforme contrato principal | Não isolado; herdado do contrato que o usa | Não; núcleo/base transversal | Condicional | Condicional | Condicional | Interno | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.TRANSVERSAL.ERROR.v1 | Contrato transversal | Transversal | Serviço interno; módulos donos | Todos os módulos por composição | `contract.error.read` | tenant/contexto/ator/recurso conforme contrato principal | Não isolado; herdado do contrato que o usa | Não; núcleo/base transversal | Condicional | Condicional | Condicional | Interno | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.TRANSVERSAL.PAGINATION.v1 | Contrato transversal | Transversal | Serviço interno; módulos donos | Todos os módulos por composição | `contract.pagination.read` | tenant/contexto/ator/recurso conforme contrato principal | Não isolado; herdado do contrato que o usa | Não; núcleo/base transversal | Condicional | Condicional | Condicional | Interno | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.TRANSVERSAL.FILTER.v1 | Contrato transversal | Transversal | Serviço interno; módulos donos | Todos os módulos por composição | `contract.filter.read` | tenant/contexto/ator/recurso conforme contrato principal | Não isolado; herdado do contrato que o usa | Não; núcleo/base transversal | Condicional | Condicional | Condicional | Interno | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.TRANSVERSAL.SORT.v1 | Contrato transversal | Transversal | Serviço interno; módulos donos | Todos os módulos por composição | `contract.sort.read` | tenant/contexto/ator/recurso conforme contrato principal | Não isolado; herdado do contrato que o usa | Não; núcleo/base transversal | Condicional | Condicional | Condicional | Interno | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.TRANSVERSAL.ACTOR_REFERENCE.v1 | Contrato transversal | Transversal | Serviço interno; módulos donos | Todos os módulos por composição | `contract.actor_reference.read` | tenant/contexto/ator/recurso conforme contrato principal | Sim, quando aplicado a ação sensível | Não; núcleo/base transversal | Condicional | Condicional | Condicional | Interno | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.TRANSVERSAL.TENANT_CONTEXT.v1 | Contrato transversal | Transversal | Serviço interno; módulos donos | Todos os módulos por composição | `contract.tenant_context.read` | tenant/contexto/ator/recurso conforme contrato principal | Sim, quando aplicado a ação sensível | Não; núcleo/base transversal | Condicional | Condicional | Condicional | Interno | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.TRANSVERSAL.AUTHORIZATION_DECISION.v1 | Contrato de autorização | Transversal | Serviço interno; módulos donos | Todos os módulos por composição | `contract.authorization_decision.read` | tenant/contexto/ator/recurso conforme contrato principal | Sim, quando aplicado a ação sensível | Não; núcleo/base transversal | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.TRANSVERSAL.RESOURCE_REFERENCE.v1 | Contrato de autorização | Transversal | Serviço interno; módulos donos | Todos os módulos por composição | `contract.resource_reference.read` | tenant/contexto/ator/recurso conforme contrato principal | Sim, quando aplicado a ação sensível | Não; núcleo/base transversal | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.TRANSVERSAL.SECRET_REFERENCE.v1 | Contrato de segurança e LGPD | Transversal | Serviço interno; módulos donos | Todos os módulos por composição | `contract.secret_reference.read` | tenant/contexto/ator/recurso conforme contrato principal | Sim, quando aplicado a ação sensível | Não; núcleo/base transversal | Sim | Sim | Sim, se houver mutação | Crítico | Sim | Usar referências seguras; nunca segredo bruto. |
| NODUOS.TRANSVERSAL.FILE_ATTACHMENT_REFERENCE.v1 | Contrato de autorização | Transversal | Serviço interno; módulos donos | Todos os módulos por composição | `contract.file_attachment_reference.read` | tenant/contexto/ator/recurso conforme contrato principal | Sim, quando aplicado a ação sensível | Não; núcleo/base transversal | Condicional | Condicional | Condicional | Interno | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.TRANSVERSAL.EVIDENCE_REFERENCE.v1 | Contrato de evidência | Transversal | Serviço interno; módulos donos | Todos os módulos por composição | `contract.evidence_reference.read` | tenant/contexto/ator/recurso conforme contrato principal | Sim, quando aplicado a ação sensível | Não; núcleo/base transversal | Sim | Sim | Sim, se houver mutação | Crítico | Sim | Referenciar prova; não transportar bruto indevido. |
| NODUOS.TRANSVERSAL.AUDIT_TRAIL_REFERENCE.v1 | Contrato de auditoria | Transversal | Serviço interno; módulos donos | Todos os módulos por composição | `contract.audit_trail_reference.read` | tenant/contexto/ator/recurso conforme contrato principal | Sim, quando aplicado a ação sensível | Não; núcleo/base transversal | Sim | Sim | Condicional | Sensível | Sim | Consultar trilha por contrato; não substituir logs primários. |
| NODUOS.TRANSVERSAL.DATA_SENSITIVITY.v1 | Contrato de segurança e LGPD | Transversal | Serviço interno; módulos donos | Todos os módulos por composição | `contract.data_sensitivity.read` | tenant/contexto/ator/recurso conforme contrato principal | Sim, quando aplicado a ação sensível | Não; núcleo/base transversal | Sim | Sim | Condicional | Sensível | Sim | Usar referências seguras; nunca segredo bruto. |
| NODUOS.TRANSVERSAL.RETENTION_POLICY_REFERENCE.v1 | Contrato de segurança e LGPD | Transversal | Serviço interno; módulos donos | Todos os módulos por composição | `contract.retention_policy_reference.read` | tenant/contexto/ator/recurso conforme contrato principal | Sim, quando aplicado a ação sensível | Não; núcleo/base transversal | Sim | Sim | Condicional | Sensível | Sim | Usar referências seguras; nunca segredo bruto. |
| NODUOS.TRANSVERSAL.MASKING_POLICY_REFERENCE.v1 | Contrato de segurança e LGPD | Transversal | Serviço interno; módulos donos | Todos os módulos por composição | `contract.masking_policy_reference.read` | tenant/contexto/ator/recurso conforme contrato principal | Sim, quando aplicado a ação sensível | Não; núcleo/base transversal | Sim | Sim | Condicional | Sensível | Sim | Usar referências seguras; nunca segredo bruto. |
| NODUOS.TRANSVERSAL.IDEMPOTENCY.v1 | Contrato transversal | Transversal | Serviço interno; módulos donos | Todos os módulos por composição | `contract.idempotency.read` | tenant/contexto/ator/recurso conforme contrato principal | Não isolado; herdado do contrato que o usa | Não; núcleo/base transversal | Condicional | Condicional | Condicional | Interno | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.TRANSVERSAL.CORRELATION.v1 | Contrato transversal | Transversal | Serviço interno; módulos donos | Todos os módulos por composição | `contract.correlation.read` | tenant/contexto/ator/recurso conforme contrato principal | Não isolado; herdado do contrato que o usa | Não; núcleo/base transversal | Condicional | Condicional | Condicional | Interno | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.TRANSVERSAL.DEAD_LETTER.v1 | Contrato transversal | Transversal | Serviço interno; módulos donos | Todos os módulos por composição | `contract.dead_letter.read` | tenant/contexto/ator/recurso conforme contrato principal | Não isolado; herdado do contrato que o usa | Não; núcleo/base transversal | Condicional | Condicional | Condicional | Interno | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.TRANSVERSAL.CONTRACT_DEPRECATION_POLICY.v1 | Contrato transversal | Transversal | Serviço interno; módulos donos | Todos os módulos por composição | `contract.contract_deprecation_policy.read` | tenant/contexto/ator/recurso conforme contrato principal | Sim, quando aplicado a ação sensível | Não; núcleo/base transversal | Condicional | Condicional | Condicional | Interno | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |

## 15. Matriz de permissões dos contratos de Core Platform

| Contract ID | Tipo | Owner | Quem pode chamar | Módulos consumidores | Permissão necessária | Escopo | Exige Core AuthorizationDecision? | Exige licença/módulo ativo? | Exige política Segurança/LGPD? | Exige auditoria? | Exige idempotência? | Sensibilidade | Fail-closed | Observação anti-acoplamento |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.CORE.CORE_AUTHORIZATION.v1 | API interna | Core Platform | Serviço interno; módulos donos; Master/Parceiro/Operador via fluxo indireto autorizado | Todos os módulos por contrato; serviços internos autorizados | `core.core_authorization.read_or_manage` | tenant/contexto/ator/recurso conforme AuthorizationDecision | Sim | Não; núcleo/base transversal | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.CORE.AUTHORIZATION_DECISION.v1 | API interna | Core Platform | Serviço interno; módulos donos; Master/Parceiro/Operador via fluxo indireto autorizado | Todos os módulos por contrato; serviços internos autorizados | `core.authorization_decision.read_or_manage` | tenant/contexto/ator/recurso conforme AuthorizationDecision | Sim | Não; núcleo/base transversal | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.CORE.RESOURCE_REFERENCE.v1 | Contrato de autorização | Core Platform | Serviço interno; módulos donos; Master/Parceiro/Operador via fluxo indireto autorizado | Todos os módulos por contrato; serviços internos autorizados | `core.resource_reference.read` | tenant/contexto/ator/recurso conforme AuthorizationDecision | Sim | Não; núcleo/base transversal | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.CORE.CONTEXT.v1 | API interna | Core Platform | Serviço interno; módulos donos; Master/Parceiro/Operador via fluxo indireto autorizado | Todos os módulos por contrato; serviços internos autorizados | `core.context.read_or_manage` | tenant/contexto/ator/recurso conforme AuthorizationDecision | Sim | Não; núcleo/base transversal | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.CORE.TENANT.v1 | API interna | Core Platform | Serviço interno; módulos donos; Master/Parceiro/Operador via fluxo indireto autorizado | Todos os módulos por contrato; serviços internos autorizados | `core.tenant.read_or_manage` | tenant/contexto/ator/recurso conforme AuthorizationDecision | Sim | Não; núcleo/base transversal | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.CORE.USER_ACCOUNT_REFERENCE.v1 | Contrato de autorização | Core Platform | Serviço interno; módulos donos; Master/Parceiro/Operador via fluxo indireto autorizado | Todos os módulos por contrato; serviços internos autorizados | `core.user_account_reference.read` | tenant/contexto/ator/recurso conforme AuthorizationDecision | Sim | Não; núcleo/base transversal | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.CORE.PERMISSION_GRANT.v1 | API interna | Core Platform | Serviço interno; módulos donos; Master/Parceiro/Operador via fluxo indireto autorizado | Todos os módulos por contrato; serviços internos autorizados | `core.permission_grant.read_or_manage` | tenant/contexto/ator/recurso conforme AuthorizationDecision | Sim | Não; núcleo/base transversal | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.CORE.INHERITANCE_GRANT.v1 | API interna | Core Platform | Serviço interno; módulos donos; Master/Parceiro/Operador via fluxo indireto autorizado | Todos os módulos por contrato; serviços internos autorizados | `core.inheritance_grant.read_or_manage` | tenant/contexto/ator/recurso conforme AuthorizationDecision | Sim | Não; núcleo/base transversal | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.CORE.MODULE_REGISTRY.v1 | API interna | Core Platform | Serviço interno; módulos donos; Master/Parceiro/Operador via fluxo indireto autorizado | Todos os módulos por contrato; serviços internos autorizados | `core.module_registry.read_or_manage` | tenant/contexto/ator/recurso conforme AuthorizationDecision | Sim | Não; núcleo/base transversal | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.CORE.LICENSE_ENTITLEMENT.v1 | API interna | Core Platform | Serviço interno; módulos donos; Master/Parceiro/Operador via fluxo indireto autorizado | Todos os módulos por contrato; serviços internos autorizados | `core.license_entitlement.read_or_manage` | tenant/contexto/ator/recurso conforme AuthorizationDecision | Sim | Não; núcleo/base transversal | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.CORE.FEATURE_FLAG.v1 | API interna | Core Platform | Serviço interno; módulos donos; Master/Parceiro/Operador via fluxo indireto autorizado | Todos os módulos por contrato; serviços internos autorizados | `core.feature_flag.read_or_manage` | tenant/contexto/ator/recurso conforme AuthorizationDecision | Sim | Não; núcleo/base transversal | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.CORE.EVENT_ENVELOPE.v1 | Evento de fato ocorrido | Core Platform | Serviço interno; módulos donos; Master/Parceiro/Operador via fluxo indireto autorizado | Todos os módulos por contrato; serviços internos autorizados | `core.event.consume_or_publish` | tenant/contexto/ator/recurso conforme AuthorizationDecision | Herdado da ação que gerou o evento | Não; núcleo/base transversal | Condicional | Sim, trilha do produtor | Não; consumidor usa deduplicação/inbox | Interno | Sim para escopo/autorização; degradação segura em leitura | Fato ocorrido; não transformar em comando. |
| NODUOS.CORE.CORE_AUDIT_TRAIL.v1 | Contrato de auditoria | Core Platform | Serviço interno; módulos donos; Master/Parceiro/Operador via fluxo indireto autorizado | Todos os módulos por contrato; serviços internos autorizados | `core.core_audit_trail.read` | tenant/contexto/ator/recurso conforme AuthorizationDecision | Sim | Não; núcleo/base transversal | Sim | Sim | Condicional | Sensível | Sim | Consultar trilha por contrato; não substituir logs primários. |
| NODUOS.CORE.CORE_SECURITY_LOG.v1 | Contrato de segurança e LGPD | Core Platform | Serviço interno; módulos donos; Master/Parceiro/Operador via fluxo indireto autorizado | Todos os módulos por contrato; serviços internos autorizados | `core.core_security_log.read` | tenant/contexto/ator/recurso conforme AuthorizationDecision | Sim | Não; núcleo/base transversal | Sim | Sim | Condicional | Sensível | Sim | Usar referências seguras; nunca segredo bruto. |
| NODUOS.CORE.CORE_API_CLIENT.v1 | API interna | Core Platform | Serviço interno; módulos donos; Master/Parceiro/Operador via fluxo indireto autorizado | Todos os módulos por contrato; serviços internos autorizados | `core.core_api_client.read_or_manage` | tenant/contexto/ator/recurso conforme AuthorizationDecision | Sim | Não; núcleo/base transversal | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |

## 16. Matriz de permissões dos contratos de Master

| Contract ID | Tipo | Owner | Quem pode chamar | Módulos consumidores | Permissão necessária | Escopo | Exige Core AuthorizationDecision? | Exige licença/módulo ativo? | Exige política Segurança/LGPD? | Exige auditoria? | Exige idempotência? | Sensibilidade | Fail-closed | Observação anti-acoplamento |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.MASTER.MASTER_PARTNER_GOVERNANCE.v1 | API interna | Master | Master Admin; equipe interna Master autorizada; Auditor interno em leitura autorizada | Core, Parceiros, Financeiro, BI, White-label, Marketplace, Auditoria, Segurança e Suporte | `master.master_partner_governance.read_or_manage` | global da plataforma ou parceiro autorizado; nunca banco interno | Sim | Conforme plano/escopo administrativo | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.MASTER.MASTER_MODULE_RELEASE_POLICY.v1 | Contrato de política | Master | Master Admin; equipe interna Master autorizada; Auditor interno em leitura autorizada | Core, Parceiros, Financeiro, BI, White-label, Marketplace, Auditoria, Segurança e Suporte | `master.master_module_release_policy.manage` | global da plataforma ou parceiro autorizado; nunca banco interno | Sim | Conforme plano/escopo administrativo | Sim | Sim | Sim, se houver mutação | Crítico | Sim | Política influencia; Core decide; módulo dono executa. |
| NODUOS.MASTER.MASTER_COMMERCIAL_PLAN_POLICY.v1 | Contrato de política | Master | Master Admin; equipe interna Master autorizada; Auditor interno em leitura autorizada | Core, Parceiros, Financeiro, BI, White-label, Marketplace, Auditoria, Segurança e Suporte | `master.master_commercial_plan_policy.manage` | global da plataforma ou parceiro autorizado; nunca banco interno | Sim | Conforme plano/escopo administrativo | Sim | Sim | Sim, se houver mutação | Crítico | Sim | Política influencia; Core decide; módulo dono executa. |
| NODUOS.MASTER.MASTER_LICENSE_LIMIT_POLICY.v1 | Contrato de política | Master | Master Admin; equipe interna Master autorizada; Auditor interno em leitura autorizada | Core, Parceiros, Financeiro, BI, White-label, Marketplace, Auditoria, Segurança e Suporte | `master.master_license_limit_policy.manage` | global da plataforma ou parceiro autorizado; nunca banco interno | Sim | Conforme plano/escopo administrativo | Sim | Sim | Sim, se houver mutação | Crítico | Sim | Política influencia; Core decide; módulo dono executa. |
| NODUOS.MASTER.MASTER_WHITE_LABEL_GOVERNANCE.v1 | API interna | Master | Master Admin; equipe interna Master autorizada; Auditor interno em leitura autorizada | Core, Parceiros, Financeiro, BI, White-label, Marketplace, Auditoria, Segurança e Suporte | `master.master_white_label_governance.read_or_manage` | global da plataforma ou parceiro autorizado; nunca banco interno | Sim | Conforme plano/escopo administrativo | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.MASTER.MASTER_MARKETPLACE_GOVERNANCE.v1 | API interna | Master | Master Admin; equipe interna Master autorizada; Auditor interno em leitura autorizada | Core, Parceiros, Financeiro, BI, White-label, Marketplace, Auditoria, Segurança e Suporte | `master.master_marketplace_governance.read_or_manage` | global da plataforma ou parceiro autorizado; nunca banco interno | Sim | Conforme plano/escopo administrativo | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.MASTER.MASTER_INTEGRATION_GOVERNANCE.v1 | API interna | Master | Master Admin; equipe interna Master autorizada; Auditor interno em leitura autorizada | Core, Parceiros, Financeiro, BI, White-label, Marketplace, Auditoria, Segurança e Suporte | `master.master_integration_governance.read_or_manage` | global da plataforma ou parceiro autorizado; nunca banco interno | Sim | Conforme plano/escopo administrativo | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.MASTER.MASTER_GLOBAL_OVERVIEW_READ_MODEL.v1 | Read model autorizado | Master | Master Admin; equipe interna Master autorizada; Auditor interno em leitura autorizada | Core, Parceiros, Financeiro, BI, White-label, Marketplace, Auditoria, Segurança e Suporte | `master.master_global_overview.read` | global da plataforma ou parceiro autorizado; nunca banco interno | Sim, salvo leitura técnica neutra | Conforme plano/escopo administrativo | Condicional | Sim, se consulta sensível; log técnico mínimo | Não; consumidor usa deduplicação/inbox | Restrito | Sim para escopo/autorização; degradação segura em leitura | Leitura autorizada; não usar como banco compartilhado nem fonte de domínio. |
| NODUOS.MASTER.MASTER_SENSITIVE_EXPORT_REQUEST.v1 | Comando | Master | Master Admin; equipe interna Master autorizada; Auditor interno em leitura autorizada | Core, Parceiros, Financeiro, BI, White-label, Marketplace, Auditoria, Segurança e Suporte | `master.master_sensitive_export_request.request` | global da plataforma ou parceiro autorizado; nunca banco interno | Sim | Conforme plano/escopo administrativo | Sim | Sim | Sim | Crítico | Sim | Solicita execução; execução pertence ao módulo dono e exige idempotência. |

## 17. Matriz de permissões dos contratos de Parceiros

| Contract ID | Tipo | Owner | Quem pode chamar | Módulos consumidores | Permissão necessária | Escopo | Exige Core AuthorizationDecision? | Exige licença/módulo ativo? | Exige política Segurança/LGPD? | Exige auditoria? | Exige idempotência? | Sensibilidade | Fail-closed | Observação anti-acoplamento |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.PARTNER.PARTNER_RECORD.v1 | API interna | Parceiros | Parceiro Admin; equipe técnica/comercial autorizada; Master em governança; Suporte autorizado | Core, Master, Organizações, Gateway, Dispositivos, White-label, Financeiro, Suporte, BI autorizado | `partner.partner_record.read_or_manage` | parceiro e organizações abaixo dele; tenant/contexto autorizado | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.PARTNER.PARTNER_PROFILE.v1 | API interna | Parceiros | Parceiro Admin; equipe técnica/comercial autorizada; Master em governança; Suporte autorizado | Core, Master, Organizações, Gateway, Dispositivos, White-label, Financeiro, Suporte, BI autorizado | `partner.partner_profile.read_or_manage` | parceiro e organizações abaixo dele; tenant/contexto autorizado | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.PARTNER.PARTNER_SCOPE.v1 | API interna | Parceiros | Parceiro Admin; equipe técnica/comercial autorizada; Master em governança; Suporte autorizado | Core, Master, Organizações, Gateway, Dispositivos, White-label, Financeiro, Suporte, BI autorizado | `partner.partner_scope.read_or_manage` | parceiro e organizações abaixo dele; tenant/contexto autorizado | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.PARTNER.PARTNER_ORGANIZATION_PORTFOLIO_READ_MODEL.v1 | Read model autorizado | Parceiros | Parceiro Admin; equipe técnica/comercial autorizada; Master em governança; Suporte autorizado | Core, Master, Organizações, Gateway, Dispositivos, White-label, Financeiro, Suporte, BI autorizado | `partner.partner_organization_portfolio.read` | parceiro e organizações abaixo dele; tenant/contexto autorizado | Sim, salvo leitura técnica neutra | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Sim, se consulta sensível; log técnico mínimo | Não; consumidor usa deduplicação/inbox | Restrito | Sim para escopo/autorização; degradação segura em leitura | Leitura autorizada; não usar como banco compartilhado nem fonte de domínio. |
| NODUOS.PARTNER.PARTNER_DEPLOYMENT_OVERVIEW_READ_MODEL.v1 | Read model autorizado | Parceiros | Parceiro Admin; equipe técnica/comercial autorizada; Master em governança; Suporte autorizado | Core, Master, Organizações, Gateway, Dispositivos, White-label, Financeiro, Suporte, BI autorizado | `partner.partner_deployment_overview.read` | parceiro e organizações abaixo dele; tenant/contexto autorizado | Sim, salvo leitura técnica neutra | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Sim, se consulta sensível; log técnico mínimo | Não; consumidor usa deduplicação/inbox | Restrito | Sim para escopo/autorização; degradação segura em leitura | Leitura autorizada; não usar como banco compartilhado nem fonte de domínio. |
| NODUOS.PARTNER.PARTNER_GATEWAY_REGISTRATION_REQUEST.v1 | Comando | Parceiros | Parceiro Admin; equipe técnica/comercial autorizada; Master em governança; Suporte autorizado | Core, Master, Organizações, Gateway, Dispositivos, White-label, Financeiro, Suporte, BI autorizado | `partner.partner_gateway_registration_request.request` | parceiro e organizações abaixo dele; tenant/contexto autorizado | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim | Crítico | Sim | Solicita execução; execução pertence ao módulo dono e exige idempotência. |
| NODUOS.PARTNER.PARTNER_DEVICE_REGISTRATION_REQUEST.v1 | Comando | Parceiros | Parceiro Admin; equipe técnica/comercial autorizada; Master em governança; Suporte autorizado | Core, Master, Organizações, Gateway, Dispositivos, White-label, Financeiro, Suporte, BI autorizado | `partner.partner_device_registration_request.request` | parceiro e organizações abaixo dele; tenant/contexto autorizado | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim | Crítico | Sim | Solicita execução; execução pertence ao módulo dono e exige idempotência. |
| NODUOS.PARTNER.PARTNER_MODULE_AVAILABILITY_READ_MODEL.v1 | Read model autorizado | Parceiros | Parceiro Admin; equipe técnica/comercial autorizada; Master em governança; Suporte autorizado | Core, Master, Organizações, Gateway, Dispositivos, White-label, Financeiro, Suporte, BI autorizado | `partner.partner_module_availability.read` | parceiro e organizações abaixo dele; tenant/contexto autorizado | Sim, salvo leitura técnica neutra | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Sim, se consulta sensível; log técnico mínimo | Não; consumidor usa deduplicação/inbox | Restrito | Sim para escopo/autorização; degradação segura em leitura | Leitura autorizada; não usar como banco compartilhado nem fonte de domínio. |
| NODUOS.PARTNER.PARTNER_PLAN_VIEW_READ_MODEL.v1 | Read model autorizado | Parceiros | Parceiro Admin; equipe técnica/comercial autorizada; Master em governança; Suporte autorizado | Core, Master, Organizações, Gateway, Dispositivos, White-label, Financeiro, Suporte, BI autorizado | `partner.partner_plan_view.read` | parceiro e organizações abaixo dele; tenant/contexto autorizado | Sim, salvo leitura técnica neutra | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Sim, se consulta sensível; log técnico mínimo | Não; consumidor usa deduplicação/inbox | Restrito | Sim para escopo/autorização; degradação segura em leitura | Leitura autorizada; não usar como banco compartilhado nem fonte de domínio. |
| NODUOS.PARTNER.PARTNER_LICENSE_VIEW_READ_MODEL.v1 | Read model autorizado | Parceiros | Parceiro Admin; equipe técnica/comercial autorizada; Master em governança; Suporte autorizado | Core, Master, Organizações, Gateway, Dispositivos, White-label, Financeiro, Suporte, BI autorizado | `partner.partner_license_view.read` | parceiro e organizações abaixo dele; tenant/contexto autorizado | Sim, salvo leitura técnica neutra | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Sim, se consulta sensível; log técnico mínimo | Não; consumidor usa deduplicação/inbox | Restrito | Sim para escopo/autorização; degradação segura em leitura | Leitura autorizada; não usar como banco compartilhado nem fonte de domínio. |
| NODUOS.PARTNER.PARTNER_WHITE_LABEL_PERMISSION_READ_MODEL.v1 | Read model autorizado | Parceiros | Parceiro Admin; equipe técnica/comercial autorizada; Master em governança; Suporte autorizado | Core, Master, Organizações, Gateway, Dispositivos, White-label, Financeiro, Suporte, BI autorizado | `partner.partner_white_label_permission.read` | parceiro e organizações abaixo dele; tenant/contexto autorizado | Sim, salvo leitura técnica neutra | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Sim, se consulta sensível; log técnico mínimo | Não; consumidor usa deduplicação/inbox | Restrito | Sim para escopo/autorização; degradação segura em leitura | Leitura autorizada; não usar como banco compartilhado nem fonte de domínio. |

## 18. Matriz de permissões dos contratos de Organizações

| Contract ID | Tipo | Owner | Quem pode chamar | Módulos consumidores | Permissão necessária | Escopo | Exige Core AuthorizationDecision? | Exige licença/módulo ativo? | Exige política Segurança/LGPD? | Exige auditoria? | Exige idempotência? | Sensibilidade | Fail-closed | Observação anti-acoplamento |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.ORG.ORGANIZATION_RECORD.v1 | API interna | Organizações | Parceiro Admin; Organização Admin; Operador/Gestor; serviço interno autorizado | Core, Parceiros, Unidades, Pessoas, Gateway, Dispositivos, BI e módulos comerciais por resumo autorizado | `organization.organization_record.read_or_manage` | organização/contexto autorizado; resumos sem transferência de domínio | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.ORG.ORGANIZATION_PROFILE.v1 | API interna | Organizações | Parceiro Admin; Organização Admin; Operador/Gestor; serviço interno autorizado | Core, Parceiros, Unidades, Pessoas, Gateway, Dispositivos, BI e módulos comerciais por resumo autorizado | `organization.organization_profile.read_or_manage` | organização/contexto autorizado; resumos sem transferência de domínio | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.ORG.ORGANIZATION_SETTINGS.v1 | API interna | Organizações | Parceiro Admin; Organização Admin; Operador/Gestor; serviço interno autorizado | Core, Parceiros, Unidades, Pessoas, Gateway, Dispositivos, BI e módulos comerciais por resumo autorizado | `organization.organization_settings.read_or_manage` | organização/contexto autorizado; resumos sem transferência de domínio | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.ORG.ORGANIZATION_STATUS.v1 | Evento de fato ocorrido ou API interna | Organizações | Parceiro Admin; Organização Admin; Operador/Gestor; serviço interno autorizado | Core, Parceiros, Unidades, Pessoas, Gateway, Dispositivos, BI e módulos comerciais por resumo autorizado | `organization.event.consume_or_publish` | organização/contexto autorizado; resumos sem transferência de domínio | Sim | Herdado do módulo produtor | Condicional | Sim, se consulta sensível; log técnico mínimo | Não; consumidor usa deduplicação/inbox | Restrito | Sim para escopo/autorização; degradação segura em leitura | Fato ocorrido; não transformar em comando. |
| NODUOS.ORG.ORGANIZATION_REFERENCE.v1 | Contrato de autorização | Organizações | Parceiro Admin; Organização Admin; Operador/Gestor; serviço interno autorizado | Core, Parceiros, Unidades, Pessoas, Gateway, Dispositivos, BI e módulos comerciais por resumo autorizado | `organization.organization_reference.read` | organização/contexto autorizado; resumos sem transferência de domínio | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.ORG.ORGANIZATION_MODULE_AVAILABILITY_READ_MODEL.v1 | Read model autorizado | Organizações | Parceiro Admin; Organização Admin; Operador/Gestor; serviço interno autorizado | Core, Parceiros, Unidades, Pessoas, Gateway, Dispositivos, BI e módulos comerciais por resumo autorizado | `organization.organization_module_availability.read` | organização/contexto autorizado; resumos sem transferência de domínio | Sim, salvo leitura técnica neutra | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Sim, se consulta sensível; log técnico mínimo | Não; consumidor usa deduplicação/inbox | Restrito | Sim para escopo/autorização; degradação segura em leitura | Leitura autorizada; não usar como banco compartilhado nem fonte de domínio. |
| NODUOS.ORG.ORGANIZATION_STRUCTURE_SUMMARY_READ_MODEL.v1 | Read model autorizado | Organizações | Parceiro Admin; Organização Admin; Operador/Gestor; serviço interno autorizado | Core, Parceiros, Unidades, Pessoas, Gateway, Dispositivos, BI e módulos comerciais por resumo autorizado | `organization.organization_structure_summary.read` | organização/contexto autorizado; resumos sem transferência de domínio | Sim, salvo leitura técnica neutra | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Sim, se consulta sensível; log técnico mínimo | Não; consumidor usa deduplicação/inbox | Restrito | Sim para escopo/autorização; degradação segura em leitura | Leitura autorizada; não usar como banco compartilhado nem fonte de domínio. |
| NODUOS.ORG.ORGANIZATION_PEOPLE_SUMMARY_READ_MODEL.v1 | Read model autorizado | Organizações | Parceiro Admin; Organização Admin; Operador/Gestor; serviço interno autorizado | Core, Parceiros, Unidades, Pessoas, Gateway, Dispositivos, BI e módulos comerciais por resumo autorizado | `organization.organization_people_summary.read` | organização/contexto autorizado; resumos sem transferência de domínio | Sim, salvo leitura técnica neutra | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Sim, se consulta sensível; log técnico mínimo | Não; consumidor usa deduplicação/inbox | Restrito | Sim para escopo/autorização; degradação segura em leitura | Leitura autorizada; não usar como banco compartilhado nem fonte de domínio. |
| NODUOS.ORG.ORGANIZATION_GATEWAY_SUMMARY_READ_MODEL.v1 | Read model autorizado | Organizações | Parceiro Admin; Organização Admin; Operador/Gestor; serviço interno autorizado | Core, Parceiros, Unidades, Pessoas, Gateway, Dispositivos, BI e módulos comerciais por resumo autorizado | `organization.organization_gateway_summary.read` | organização/contexto autorizado; resumos sem transferência de domínio | Sim, salvo leitura técnica neutra | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Sim, se consulta sensível; log técnico mínimo | Não; consumidor usa deduplicação/inbox | Restrito | Sim para escopo/autorização; degradação segura em leitura | Leitura autorizada; não usar como banco compartilhado nem fonte de domínio. |
| NODUOS.ORG.ORGANIZATION_DEVICE_SUMMARY_READ_MODEL.v1 | Read model autorizado | Organizações | Parceiro Admin; Organização Admin; Operador/Gestor; serviço interno autorizado | Core, Parceiros, Unidades, Pessoas, Gateway, Dispositivos, BI e módulos comerciais por resumo autorizado | `organization.organization_device_summary.read` | organização/contexto autorizado; resumos sem transferência de domínio | Sim, salvo leitura técnica neutra | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Sim, se consulta sensível; log técnico mínimo | Não; consumidor usa deduplicação/inbox | Restrito | Sim para escopo/autorização; degradação segura em leitura | Leitura autorizada; não usar como banco compartilhado nem fonte de domínio. |

## 19. Matriz de permissões dos contratos de Pessoas e Clientes

| Contract ID | Tipo | Owner | Quem pode chamar | Módulos consumidores | Permissão necessária | Escopo | Exige Core AuthorizationDecision? | Exige licença/módulo ativo? | Exige política Segurança/LGPD? | Exige auditoria? | Exige idempotência? | Sensibilidade | Fail-closed | Observação anti-acoplamento |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.PEOPLE.PERSON_PROFILE.v1 | API interna | Pessoas e Clientes | Organização Admin; Operador/Gestor; Cliente no próprio perfil; Parceiro/Suporte por escopo | Core, Unidades, Acesso, Convites, Financeiro, Tickets, Reservas, Segurança, Auditoria e BI autorizado | `people.person_profile.read_or_manage` | pessoa, cliente, vínculo, organização e unidade autorizados | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.PEOPLE.CLIENT_PROFILE.v1 | API interna | Pessoas e Clientes | Organização Admin; Operador/Gestor; Cliente no próprio perfil; Parceiro/Suporte por escopo | Core, Unidades, Acesso, Convites, Financeiro, Tickets, Reservas, Segurança, Auditoria e BI autorizado | `people.client_profile.read_or_manage` | pessoa, cliente, vínculo, organização e unidade autorizados | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.PEOPLE.PERSON_DOCUMENT.v1 | API interna | Pessoas e Clientes | Organização Admin; Operador/Gestor; Cliente no próprio perfil; Parceiro/Suporte por escopo | Core, Unidades, Acesso, Convites, Financeiro, Tickets, Reservas, Segurança, Auditoria e BI autorizado | `people.person_document.read_or_manage` | pessoa, cliente, vínculo, organização e unidade autorizados | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.PEOPLE.PERSON_CONTACT.v1 | API interna | Pessoas e Clientes | Organização Admin; Operador/Gestor; Cliente no próprio perfil; Parceiro/Suporte por escopo | Core, Unidades, Acesso, Convites, Financeiro, Tickets, Reservas, Segurança, Auditoria e BI autorizado | `people.person_contact.read_or_manage` | pessoa, cliente, vínculo, organização e unidade autorizados | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.PEOPLE.PERSON_CONSENT.v1 | Contrato de segurança e LGPD | Pessoas e Clientes | Organização Admin; Operador/Gestor; Cliente no próprio perfil; Parceiro/Suporte por escopo | Core, Unidades, Acesso, Convites, Financeiro, Tickets, Reservas, Segurança, Auditoria e BI autorizado | `people.person_consent.read` | pessoa, cliente, vínculo, organização e unidade autorizados | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar referências seguras; nunca segredo bruto. |
| NODUOS.PEOPLE.PERSON_UNIT_LINK.v1 | API interna | Pessoas e Clientes | Organização Admin; Operador/Gestor; Cliente no próprio perfil; Parceiro/Suporte por escopo | Core, Unidades, Acesso, Convites, Financeiro, Tickets, Reservas, Segurança, Auditoria e BI autorizado | `people.person_unit_link.read_or_manage` | pessoa, cliente, vínculo, organização e unidade autorizados | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.PEOPLE.PERSON_ORGANIZATION_LINK.v1 | API interna | Pessoas e Clientes | Organização Admin; Operador/Gestor; Cliente no próprio perfil; Parceiro/Suporte por escopo | Core, Unidades, Acesso, Convites, Financeiro, Tickets, Reservas, Segurança, Auditoria e BI autorizado | `people.person_organization_link.read_or_manage` | pessoa, cliente, vínculo, organização e unidade autorizados | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.PEOPLE.DEPENDENT_PROFILE.v1 | API interna | Pessoas e Clientes | Organização Admin; Operador/Gestor; Cliente no próprio perfil; Parceiro/Suporte por escopo | Core, Unidades, Acesso, Convites, Financeiro, Tickets, Reservas, Segurança, Auditoria e BI autorizado | `people.dependent_profile.read_or_manage` | pessoa, cliente, vínculo, organização e unidade autorizados | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.PEOPLE.SERVICE_PROVIDER_PROFILE.v1 | API interna | Pessoas e Clientes | Organização Admin; Operador/Gestor; Cliente no próprio perfil; Parceiro/Suporte por escopo | Core, Unidades, Acesso, Convites, Financeiro, Tickets, Reservas, Segurança, Auditoria e BI autorizado | `people.service_provider_profile.read_or_manage` | pessoa, cliente, vínculo, organização e unidade autorizados | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.PEOPLE.PERSON_ACCOUNT_LINK_REFERENCE.v1 | Contrato de autorização | Pessoas e Clientes | Organização Admin; Operador/Gestor; Cliente no próprio perfil; Parceiro/Suporte por escopo | Core, Unidades, Acesso, Convites, Financeiro, Tickets, Reservas, Segurança, Auditoria e BI autorizado | `people.person_account_link_reference.read` | pessoa, cliente, vínculo, organização e unidade autorizados | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.PEOPLE.PUBLIC_PERSON_IDENTITY_READ_MODEL.v1 | Read model autorizado | Pessoas e Clientes | Organização Admin; Operador/Gestor; Cliente no próprio perfil; Parceiro/Suporte por escopo | Core, Unidades, Acesso, Convites, Financeiro, Tickets, Reservas, Segurança, Auditoria e BI autorizado | `people.public_person_identity.read` | pessoa, cliente, vínculo, organização e unidade autorizados | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Não; consumidor usa deduplicação/inbox | Sensível | Sim | Leitura autorizada; não usar como banco compartilhado nem fonte de domínio. |

## 20. Matriz de permissões dos contratos de Unidades, Blocos, Áreas e Ambientes

| Contract ID | Tipo | Owner | Quem pode chamar | Módulos consumidores | Permissão necessária | Escopo | Exige Core AuthorizationDecision? | Exige licença/módulo ativo? | Exige política Segurança/LGPD? | Exige auditoria? | Exige idempotência? | Sensibilidade | Fail-closed | Observação anti-acoplamento |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.STRUCTURE.STRUCTURE_ROOT.v1 | API interna | Unidades, Blocos, Áreas e Ambientes | Organização Admin; Operador/Gestor; equipe técnica do Parceiro por escopo; serviço interno | Core, Organizações, Pessoas, Acesso, Câmeras, Reservas, Convites, Dispositivos e BI autorizado | `structure.structure_root.read_or_manage` | organização, estrutura, unidade/bloco/área/ambiente e recurso herdável | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.STRUCTURE.PHYSICAL_STRUCTURE_NODE.v1 | API interna | Unidades, Blocos, Áreas e Ambientes | Organização Admin; Operador/Gestor; equipe técnica do Parceiro por escopo; serviço interno | Core, Organizações, Pessoas, Acesso, Câmeras, Reservas, Convites, Dispositivos e BI autorizado | `structure.physical_structure_node.read_or_manage` | organização, estrutura, unidade/bloco/área/ambiente e recurso herdável | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.STRUCTURE.STRUCTURE_HIERARCHY.v1 | API interna | Unidades, Blocos, Áreas e Ambientes | Organização Admin; Operador/Gestor; equipe técnica do Parceiro por escopo; serviço interno | Core, Organizações, Pessoas, Acesso, Câmeras, Reservas, Convites, Dispositivos e BI autorizado | `structure.structure_hierarchy.read_or_manage` | organização, estrutura, unidade/bloco/área/ambiente e recurso herdável | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.STRUCTURE.STRUCTURE_REFERENCE.v1 | Contrato de autorização | Unidades, Blocos, Áreas e Ambientes | Organização Admin; Operador/Gestor; equipe técnica do Parceiro por escopo; serviço interno | Core, Organizações, Pessoas, Acesso, Câmeras, Reservas, Convites, Dispositivos e BI autorizado | `structure.structure_reference.read` | organização, estrutura, unidade/bloco/área/ambiente e recurso herdável | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.STRUCTURE.STRUCTURAL_RESOURCE_ASSIGNMENT.v1 | API interna | Unidades, Blocos, Áreas e Ambientes | Organização Admin; Operador/Gestor; equipe técnica do Parceiro por escopo; serviço interno | Core, Organizações, Pessoas, Acesso, Câmeras, Reservas, Convites, Dispositivos e BI autorizado | `structure.structural_resource_assignment.read_or_manage` | organização, estrutura, unidade/bloco/área/ambiente e recurso herdável | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.STRUCTURE.STRUCTURE_PATH_READ_MODEL.v1 | Read model autorizado | Unidades, Blocos, Áreas e Ambientes | Organização Admin; Operador/Gestor; equipe técnica do Parceiro por escopo; serviço interno | Core, Organizações, Pessoas, Acesso, Câmeras, Reservas, Convites, Dispositivos e BI autorizado | `structure.structure_path.read` | organização, estrutura, unidade/bloco/área/ambiente e recurso herdável | Sim, salvo leitura técnica neutra | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Sim, se consulta sensível; log técnico mínimo | Não; consumidor usa deduplicação/inbox | Restrito | Sim para escopo/autorização; degradação segura em leitura | Leitura autorizada; não usar como banco compartilhado nem fonte de domínio. |
| NODUOS.STRUCTURE.STRUCTURE_VISIBILITY.v1 | API interna | Unidades, Blocos, Áreas e Ambientes | Organização Admin; Operador/Gestor; equipe técnica do Parceiro por escopo; serviço interno | Core, Organizações, Pessoas, Acesso, Câmeras, Reservas, Convites, Dispositivos e BI autorizado | `structure.structure_visibility.read_or_manage` | organização, estrutura, unidade/bloco/área/ambiente e recurso herdável | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.STRUCTURE.STRUCTURE_RESERVABLE_FLAG.v1 | API interna | Unidades, Blocos, Áreas e Ambientes | Organização Admin; Operador/Gestor; equipe técnica do Parceiro por escopo; serviço interno | Core, Organizações, Pessoas, Acesso, Câmeras, Reservas, Convites, Dispositivos e BI autorizado | `structure.structure_reservable_flag.read_or_manage` | organização, estrutura, unidade/bloco/área/ambiente e recurso herdável | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |

## 21. Matriz de permissões dos contratos de Herança e Permissões

| Contract ID | Tipo | Owner | Quem pode chamar | Módulos consumidores | Permissão necessária | Escopo | Exige Core AuthorizationDecision? | Exige licença/módulo ativo? | Exige política Segurança/LGPD? | Exige auditoria? | Exige idempotência? | Sensibilidade | Fail-closed | Observação anti-acoplamento |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.POLICY.ADVANCED_POLICY.v1 | Contrato de política | Herança e Permissões | Master; Parceiro Admin; Organização Admin; Operador autorizado; Core/serviço interno | Core, módulos donos, Segurança, Auditoria, BI autorizado e Automações autorizadas | `policy.advanced_policy.manage` | política, contexto, recurso e herança dentro do escopo recebido | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, se houver mutação | Crítico | Sim | Política influencia; Core decide; módulo dono executa. |
| NODUOS.POLICY.POLICY_CONDITION.v1 | Contrato de política | Herança e Permissões | Master; Parceiro Admin; Organização Admin; Operador autorizado; Core/serviço interno | Core, módulos donos, Segurança, Auditoria, BI autorizado e Automações autorizadas | `policy.policy_condition.manage` | política, contexto, recurso e herança dentro do escopo recebido | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, se houver mutação | Crítico | Sim | Política influencia; Core decide; módulo dono executa. |
| NODUOS.POLICY.POLICY_EFFECT.v1 | Contrato de política | Herança e Permissões | Master; Parceiro Admin; Organização Admin; Operador autorizado; Core/serviço interno | Core, módulos donos, Segurança, Auditoria, BI autorizado e Automações autorizadas | `policy.policy_effect.manage` | política, contexto, recurso e herança dentro do escopo recebido | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, se houver mutação | Crítico | Sim | Política influencia; Core decide; módulo dono executa. |
| NODUOS.POLICY.POLICY_SCOPE.v1 | Contrato de política | Herança e Permissões | Master; Parceiro Admin; Organização Admin; Operador autorizado; Core/serviço interno | Core, módulos donos, Segurança, Auditoria, BI autorizado e Automações autorizadas | `policy.policy_scope.manage` | política, contexto, recurso e herança dentro do escopo recebido | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, se houver mutação | Crítico | Sim | Política influencia; Core decide; módulo dono executa. |
| NODUOS.POLICY.DELEGATION_RULE.v1 | API interna | Herança e Permissões | Master; Parceiro Admin; Organização Admin; Operador autorizado; Core/serviço interno | Core, módulos donos, Segurança, Auditoria, BI autorizado e Automações autorizadas | `policy.delegation_rule.read_or_manage` | política, contexto, recurso e herança dentro do escopo recebido | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, se houver mutação | Crítico | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.POLICY.POLICY_EXCEPTION.v1 | Contrato de política | Herança e Permissões | Master; Parceiro Admin; Organização Admin; Operador autorizado; Core/serviço interno | Core, módulos donos, Segurança, Auditoria, BI autorizado e Automações autorizadas | `policy.policy_exception.manage` | política, contexto, recurso e herança dentro do escopo recebido | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, se houver mutação | Crítico | Sim | Política influencia; Core decide; módulo dono executa. |
| NODUOS.POLICY.EFFECTIVE_PERMISSION_READ_MODEL.v1 | Read model autorizado | Herança e Permissões | Master; Parceiro Admin; Organização Admin; Operador autorizado; Core/serviço interno | Core, módulos donos, Segurança, Auditoria, BI autorizado e Automações autorizadas | `policy.effective_permission.read` | política, contexto, recurso e herança dentro do escopo recebido | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Não; consumidor usa deduplicação/inbox | Crítico | Sim | Leitura autorizada; não usar como banco compartilhado nem fonte de domínio. |
| NODUOS.POLICY.ACCESS_SIMULATION.v1 | API interna | Herança e Permissões | Master; Parceiro Admin; Organização Admin; Operador autorizado; Core/serviço interno | Core, módulos donos, Segurança, Auditoria, BI autorizado e Automações autorizadas | `policy.access_simulation.read_or_manage` | política, contexto, recurso e herança dentro do escopo recebido | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Crítico | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.POLICY.POLICY_EVALUATION.v1 | Contrato de política | Herança e Permissões | Master; Parceiro Admin; Organização Admin; Operador autorizado; Core/serviço interno | Core, módulos donos, Segurança, Auditoria, BI autorizado e Automações autorizadas | `policy.policy_evaluation.manage` | política, contexto, recurso e herança dentro do escopo recebido | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, se houver mutação | Crítico | Sim | Política influencia; Core decide; módulo dono executa. |
| NODUOS.POLICY.PERMISSION_CONFLICT.v1 | API interna | Herança e Permissões | Master; Parceiro Admin; Organização Admin; Operador autorizado; Core/serviço interno | Core, módulos donos, Segurança, Auditoria, BI autorizado e Automações autorizadas | `policy.permission_conflict.read_or_manage` | política, contexto, recurso e herança dentro do escopo recebido | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, se houver mutação | Crítico | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |

## 22. Matriz de permissões dos contratos de Gateway Local / Mikrotik / Tunnel

| Contract ID | Tipo | Owner | Quem pode chamar | Módulos consumidores | Permissão necessária | Escopo | Exige Core AuthorizationDecision? | Exige licença/módulo ativo? | Exige política Segurança/LGPD? | Exige auditoria? | Exige idempotência? | Sensibilidade | Fail-closed | Observação anti-acoplamento |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.GATEWAY.GATEWAY_RECORD.v1 | API interna | Gateway Local / Mikrotik / Tunnel | Equipe técnica do Parceiro; Suporte interno; Gateway Agent; serviço interno autorizado | Core, Parceiros, Dispositivos, Acesso, Câmeras, Alarmes, Suporte e Segurança | `gateway.gateway_record.read_or_manage` | gateway, organização, rede/tunnel autorizado e janela temporal | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.GATEWAY.GATEWAY_AGENT.v1 | API interna | Gateway Local / Mikrotik / Tunnel | Equipe técnica do Parceiro; Suporte interno; Gateway Agent; serviço interno autorizado | Core, Parceiros, Dispositivos, Acesso, Câmeras, Alarmes, Suporte e Segurança | `gateway.gateway_agent.read_or_manage` | gateway, organização, rede/tunnel autorizado e janela temporal | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.GATEWAY.GATEWAY_CREDENTIAL_REFERENCE.v1 | Contrato de segurança e LGPD | Gateway Local / Mikrotik / Tunnel | Equipe técnica do Parceiro; Suporte interno; Gateway Agent; serviço interno autorizado | Core, Parceiros, Dispositivos, Acesso, Câmeras, Alarmes, Suporte e Segurança | `gateway.gateway_credential_reference.manage` | gateway, organização, rede/tunnel autorizado e janela temporal | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Crítico | Sim | Usar referências seguras; nunca segredo bruto. |
| NODUOS.GATEWAY.TUNNEL_SESSION.v1 | API interna | Gateway Local / Mikrotik / Tunnel | Equipe técnica do Parceiro; Suporte interno; Gateway Agent; serviço interno autorizado | Core, Parceiros, Dispositivos, Acesso, Câmeras, Alarmes, Suporte e Segurança | `gateway.tunnel_session.read_or_manage` | gateway, organização, rede/tunnel autorizado e janela temporal | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.GATEWAY.GATEWAY_HEALTH_READ_MODEL.v1 | Read model autorizado | Gateway Local / Mikrotik / Tunnel | Equipe técnica do Parceiro; Suporte interno; Gateway Agent; serviço interno autorizado | Core, Parceiros, Dispositivos, Acesso, Câmeras, Alarmes, Suporte e Segurança | `gateway.gateway_health.read` | gateway, organização, rede/tunnel autorizado e janela temporal | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Não; consumidor usa deduplicação/inbox | Sensível | Sim | Leitura autorizada; não usar como banco compartilhado nem fonte de domínio. |
| NODUOS.GATEWAY.GATEWAY_DIAGNOSTIC.v1 | Contrato de diagnóstico | Gateway Local / Mikrotik / Tunnel | Equipe técnica do Parceiro; Suporte interno; Gateway Agent; serviço interno autorizado | Core, Parceiros, Dispositivos, Acesso, Câmeras, Alarmes, Suporte e Segurança | `gateway.gateway_diagnostic.read` | gateway, organização, rede/tunnel autorizado e janela temporal | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Crítico | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.GATEWAY.GATEWAY_COMMAND.v1 | Comando | Gateway Local / Mikrotik / Tunnel | Equipe técnica do Parceiro; Suporte interno; Gateway Agent; serviço interno autorizado | Core, Parceiros, Dispositivos, Acesso, Câmeras, Alarmes, Suporte e Segurança | `gateway.gateway_command.request` | gateway, organização, rede/tunnel autorizado e janela temporal | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim | Crítico | Sim | Solicita execução; execução pertence ao módulo dono e exige idempotência. |
| NODUOS.GATEWAY.GATEWAY_COMMAND_RESULT.v1 | Evento de fato ocorrido | Gateway Local / Mikrotik / Tunnel | Equipe técnica do Parceiro; Suporte interno; Gateway Agent; serviço interno autorizado | Core, Parceiros, Dispositivos, Acesso, Câmeras, Alarmes, Suporte e Segurança | `gateway.event.consume_or_publish` | gateway, organização, rede/tunnel autorizado e janela temporal | Sim | Herdado do módulo produtor | Sim | Sim | Não; consumidor usa deduplicação/inbox | Crítico | Sim | Fato ocorrido; não transformar em comando. |
| NODUOS.GATEWAY.GATEWAY_DEVICE_DISCOVERY.v1 | API interna | Gateway Local / Mikrotik / Tunnel | Equipe técnica do Parceiro; Suporte interno; Gateway Agent; serviço interno autorizado | Core, Parceiros, Dispositivos, Acesso, Câmeras, Alarmes, Suporte e Segurança | `gateway.gateway_device_discovery.read_or_manage` | gateway, organização, rede/tunnel autorizado e janela temporal | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.GATEWAY.GATEWAY_DEVICE_REACHABILITY_READ_MODEL.v1 | Read model autorizado | Gateway Local / Mikrotik / Tunnel | Equipe técnica do Parceiro; Suporte interno; Gateway Agent; serviço interno autorizado | Core, Parceiros, Dispositivos, Acesso, Câmeras, Alarmes, Suporte e Segurança | `gateway.gateway_device_reachability.read` | gateway, organização, rede/tunnel autorizado e janela temporal | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Não; consumidor usa deduplicação/inbox | Sensível | Sim | Leitura autorizada; não usar como banco compartilhado nem fonte de domínio. |
| NODUOS.GATEWAY.GATEWAY_AUTHORIZATION_SCOPE.v1 | Contrato de autorização | Gateway Local / Mikrotik / Tunnel | Equipe técnica do Parceiro; Suporte interno; Gateway Agent; serviço interno autorizado | Core, Parceiros, Dispositivos, Acesso, Câmeras, Alarmes, Suporte e Segurança | `gateway.gateway_authorization_scope.read` | gateway, organização, rede/tunnel autorizado e janela temporal | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.GATEWAY.GATEWAY_TECHNICAL_LOG.v1 | Contrato de auditoria | Gateway Local / Mikrotik / Tunnel | Equipe técnica do Parceiro; Suporte interno; Gateway Agent; serviço interno autorizado | Core, Parceiros, Dispositivos, Acesso, Câmeras, Alarmes, Suporte e Segurança | `gateway.gateway_technical_log.read` | gateway, organização, rede/tunnel autorizado e janela temporal | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Consultar trilha por contrato; não substituir logs primários. |

## 23. Matriz de permissões dos contratos de Dispositivos

| Contract ID | Tipo | Owner | Quem pode chamar | Módulos consumidores | Permissão necessária | Escopo | Exige Core AuthorizationDecision? | Exige licença/módulo ativo? | Exige política Segurança/LGPD? | Exige auditoria? | Exige idempotência? | Sensibilidade | Fail-closed | Observação anti-acoplamento |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.DEVICE.DEVICE_RECORD.v1 | API interna | Dispositivos | Equipe técnica do Parceiro; Suporte; módulos operacionais por DeviceReference; serviço interno | Core, Parceiros, Gateway, Acesso, Câmeras, Alarmes, Suporte, BI e Auditoria | `device.device_record.read_or_manage` | device, gateway, organização, localização física e ciclo de vida técnico | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.DEVICE.DEVICE_REFERENCE.v1 | Contrato de autorização | Dispositivos | Equipe técnica do Parceiro; Suporte; módulos operacionais por DeviceReference; serviço interno | Core, Parceiros, Gateway, Acesso, Câmeras, Alarmes, Suporte, BI e Auditoria | `device.device_reference.read` | device, gateway, organização, localização física e ciclo de vida técnico | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.DEVICE.DEVICE_IDENTITY.v1 | API interna | Dispositivos | Equipe técnica do Parceiro; Suporte; módulos operacionais por DeviceReference; serviço interno | Core, Parceiros, Gateway, Acesso, Câmeras, Alarmes, Suporte, BI e Auditoria | `device.device_identity.read_or_manage` | device, gateway, organização, localização física e ciclo de vida técnico | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.DEVICE.DEVICE_CAPABILITY.v1 | API interna | Dispositivos | Equipe técnica do Parceiro; Suporte; módulos operacionais por DeviceReference; serviço interno | Core, Parceiros, Gateway, Acesso, Câmeras, Alarmes, Suporte, BI e Auditoria | `device.device_capability.read_or_manage` | device, gateway, organização, localização física e ciclo de vida técnico | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.DEVICE.DEVICE_HEALTH_READ_MODEL.v1 | Read model autorizado | Dispositivos | Equipe técnica do Parceiro; Suporte; módulos operacionais por DeviceReference; serviço interno | Core, Parceiros, Gateway, Acesso, Câmeras, Alarmes, Suporte, BI e Auditoria | `device.device_health.read` | device, gateway, organização, localização física e ciclo de vida técnico | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Não; consumidor usa deduplicação/inbox | Sensível | Sim | Leitura autorizada; não usar como banco compartilhado nem fonte de domínio. |
| NODUOS.DEVICE.DEVICE_STATUS_READ_MODEL.v1 | Read model autorizado | Dispositivos | Equipe técnica do Parceiro; Suporte; módulos operacionais por DeviceReference; serviço interno | Core, Parceiros, Gateway, Acesso, Câmeras, Alarmes, Suporte, BI e Auditoria | `device.device_status.read` | device, gateway, organização, localização física e ciclo de vida técnico | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Não; consumidor usa deduplicação/inbox | Sensível | Sim | Leitura autorizada; não usar como banco compartilhado nem fonte de domínio. |
| NODUOS.DEVICE.DEVICE_DIAGNOSTIC.v1 | Contrato de diagnóstico | Dispositivos | Equipe técnica do Parceiro; Suporte; módulos operacionais por DeviceReference; serviço interno | Core, Parceiros, Gateway, Acesso, Câmeras, Alarmes, Suporte, BI e Auditoria | `device.device_diagnostic.read` | device, gateway, organização, localização física e ciclo de vida técnico | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Crítico | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.DEVICE.DEVICE_TELEMETRY.v1 | API interna | Dispositivos | Equipe técnica do Parceiro; Suporte; módulos operacionais por DeviceReference; serviço interno | Core, Parceiros, Gateway, Acesso, Câmeras, Alarmes, Suporte, BI e Auditoria | `device.device_telemetry.read_or_manage` | device, gateway, organização, localização física e ciclo de vida técnico | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.DEVICE.DEVICE_LIFECYCLE.v1 | API interna | Dispositivos | Equipe técnica do Parceiro; Suporte; módulos operacionais por DeviceReference; serviço interno | Core, Parceiros, Gateway, Acesso, Câmeras, Alarmes, Suporte, BI e Auditoria | `device.device_lifecycle.read_or_manage` | device, gateway, organização, localização física e ciclo de vida técnico | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.DEVICE.DEVICE_CREDENTIAL_REFERENCE.v1 | Contrato de segurança e LGPD | Dispositivos | Equipe técnica do Parceiro; Suporte; módulos operacionais por DeviceReference; serviço interno | Core, Parceiros, Gateway, Acesso, Câmeras, Alarmes, Suporte, BI e Auditoria | `device.device_credential_reference.manage` | device, gateway, organização, localização física e ciclo de vida técnico | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Crítico | Sim | Usar referências seguras; nunca segredo bruto. |
| NODUOS.DEVICE.DEVICE_AUTHORIZATION_SCOPE.v1 | Contrato de autorização | Dispositivos | Equipe técnica do Parceiro; Suporte; módulos operacionais por DeviceReference; serviço interno | Core, Parceiros, Gateway, Acesso, Câmeras, Alarmes, Suporte, BI e Auditoria | `device.device_authorization_scope.read` | device, gateway, organização, localização física e ciclo de vida técnico | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.DEVICE.DEVICE_MAINTENANCE_RECORD.v1 | API interna | Dispositivos | Equipe técnica do Parceiro; Suporte; módulos operacionais por DeviceReference; serviço interno | Core, Parceiros, Gateway, Acesso, Câmeras, Alarmes, Suporte, BI e Auditoria | `device.device_maintenance_record.read_or_manage` | device, gateway, organização, localização física e ciclo de vida técnico | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |

## 24. Matriz de permissões dos contratos de Controle de Acesso

| Contract ID | Tipo | Owner | Quem pode chamar | Módulos consumidores | Permissão necessária | Escopo | Exige Core AuthorizationDecision? | Exige licença/módulo ativo? | Exige política Segurança/LGPD? | Exige auditoria? | Exige idempotência? | Sensibilidade | Fail-closed | Observação anti-acoplamento |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.ACCESS.ACCESS_POINT.v1 | API interna | Controle de Acesso | Operador/Gestor; Portaria/Recepção; Cliente herdado; Automação autorizada; serviço interno | Core, Pessoas, Unidades, Convites, Reservas, Financeiro, Câmeras para evidência, Auditoria, BI, Automações | `access.access_point.read_or_manage` | access_point, credencial, pessoa, estrutura, horário e recurso herdado | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Crítico | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.ACCESS.ACCESS_CREDENTIAL.v1 | API interna | Controle de Acesso | Operador/Gestor; Portaria/Recepção; Cliente herdado; Automação autorizada; serviço interno | Core, Pessoas, Unidades, Convites, Reservas, Financeiro, Câmeras para evidência, Auditoria, BI, Automações | `access.access_credential.manage` | access_point, credencial, pessoa, estrutura, horário e recurso herdado | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Crítico | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.ACCESS.ACCESS_RULE.v1 | API interna | Controle de Acesso | Operador/Gestor; Portaria/Recepção; Cliente herdado; Automação autorizada; serviço interno | Core, Pessoas, Unidades, Convites, Reservas, Financeiro, Câmeras para evidência, Auditoria, BI, Automações | `access.access_rule.read_or_manage` | access_point, credencial, pessoa, estrutura, horário e recurso herdado | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Crítico | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.ACCESS.ACCESS_POLICY_BINDING.v1 | Contrato de política | Controle de Acesso | Operador/Gestor; Portaria/Recepção; Cliente herdado; Automação autorizada; serviço interno | Core, Pessoas, Unidades, Convites, Reservas, Financeiro, Câmeras para evidência, Auditoria, BI, Automações | `access.access_policy_binding.manage` | access_point, credencial, pessoa, estrutura, horário e recurso herdado | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Crítico | Sim | Política influencia; Core decide; módulo dono executa. |
| NODUOS.ACCESS.ACCESS_SCHEDULE.v1 | API interna | Controle de Acesso | Operador/Gestor; Portaria/Recepção; Cliente herdado; Automação autorizada; serviço interno | Core, Pessoas, Unidades, Convites, Reservas, Financeiro, Câmeras para evidência, Auditoria, BI, Automações | `access.access_schedule.read_or_manage` | access_point, credencial, pessoa, estrutura, horário e recurso herdado | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Crítico | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.ACCESS.ACCESS_ATTEMPT_EVENT.v1 | Evento de fato ocorrido | Controle de Acesso | Operador/Gestor; Portaria/Recepção; Cliente herdado; Automação autorizada; serviço interno | Core, Pessoas, Unidades, Convites, Reservas, Financeiro, Câmeras para evidência, Auditoria, BI, Automações | `access.event.consume_or_publish` | access_point, credencial, pessoa, estrutura, horário e recurso herdado | Sim | Herdado do módulo produtor | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Crítico | Sim | Fato ocorrido; não transformar em comando. |
| NODUOS.ACCESS.ACCESS_EVENT.v1 | Evento de fato ocorrido | Controle de Acesso | Operador/Gestor; Portaria/Recepção; Cliente herdado; Automação autorizada; serviço interno | Core, Pessoas, Unidades, Convites, Reservas, Financeiro, Câmeras para evidência, Auditoria, BI, Automações | `access.event.consume_or_publish` | access_point, credencial, pessoa, estrutura, horário e recurso herdado | Sim | Herdado do módulo produtor | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Crítico | Sim | Fato ocorrido; não transformar em comando. |
| NODUOS.ACCESS.ACCESS_EXECUTION_COMMAND.v1 | Comando | Controle de Acesso | Operador/Gestor; Portaria/Recepção; Cliente herdado; Automação autorizada; serviço interno | Core, Pessoas, Unidades, Convites, Reservas, Financeiro, Câmeras para evidência, Auditoria, BI, Automações | `access.access_execution_command.request` | access_point, credencial, pessoa, estrutura, horário e recurso herdado | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim | Crítico | Sim | Solicita execução; execução pertence ao módulo dono e exige idempotência. |
| NODUOS.ACCESS.ACCESS_EXECUTION_RESULT.v1 | Evento de fato ocorrido | Controle de Acesso | Operador/Gestor; Portaria/Recepção; Cliente herdado; Automação autorizada; serviço interno | Core, Pessoas, Unidades, Convites, Reservas, Financeiro, Câmeras para evidência, Auditoria, BI, Automações | `access.event.consume_or_publish` | access_point, credencial, pessoa, estrutura, horário e recurso herdado | Sim | Herdado do módulo produtor | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Crítico | Sim | Fato ocorrido; não transformar em comando. |
| NODUOS.ACCESS.ACCESS_AUTHORIZATION_SCOPE.v1 | Contrato de autorização | Controle de Acesso | Operador/Gestor; Portaria/Recepção; Cliente herdado; Automação autorizada; serviço interno | Core, Pessoas, Unidades, Convites, Reservas, Financeiro, Câmeras para evidência, Auditoria, BI, Automações | `access.access_authorization_scope.read` | access_point, credencial, pessoa, estrutura, horário e recurso herdado | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Crítico | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.ACCESS.ACCESS_OFFLINE_POLICY.v1 | Contrato de política | Controle de Acesso | Operador/Gestor; Portaria/Recepção; Cliente herdado; Automação autorizada; serviço interno | Core, Pessoas, Unidades, Convites, Reservas, Financeiro, Câmeras para evidência, Auditoria, BI, Automações | `access.access_offline_policy.manage` | access_point, credencial, pessoa, estrutura, horário e recurso herdado | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Crítico | Sim | Política influencia; Core decide; módulo dono executa. |
| NODUOS.ACCESS.ACCESS_DEVICE_BINDING.v1 | API interna | Controle de Acesso | Operador/Gestor; Portaria/Recepção; Cliente herdado; Automação autorizada; serviço interno | Core, Pessoas, Unidades, Convites, Reservas, Financeiro, Câmeras para evidência, Auditoria, BI, Automações | `access.access_device_binding.read_or_manage` | access_point, credencial, pessoa, estrutura, horário e recurso herdado | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Crítico | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |

## 25. Matriz de permissões dos contratos de Câmeras / VMS

| Contract ID | Tipo | Owner | Quem pode chamar | Módulos consumidores | Permissão necessária | Escopo | Exige Core AuthorizationDecision? | Exige licença/módulo ativo? | Exige política Segurança/LGPD? | Exige auditoria? | Exige idempotência? | Sensibilidade | Fail-closed | Observação anti-acoplamento |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.CAMERA.CAMERA_RESOURCE.v1 | API interna | Câmeras / VMS | Operador/Gestor; Portaria; Cliente herdado; Auditor autorizado; Suporte escopado; serviço interno | Core, Dispositivos, Gateway, Acesso, Alarmes, Auditoria, Segurança, BI, Suporte e Automações | `camera.camera_resource.read_or_manage` | camera_resource, stream/playback/evidência, contexto, finalidade e retenção | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.CAMERA.CAMERA_STREAM_ACCESS.v1 | API interna | Câmeras / VMS | Operador/Gestor; Portaria; Cliente herdado; Auditor autorizado; Suporte escopado; serviço interno | Core, Dispositivos, Gateway, Acesso, Alarmes, Auditoria, Segurança, BI, Suporte e Automações | `camera.camera_stream_access.read_or_manage` | camera_resource, stream/playback/evidência, contexto, finalidade e retenção | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Crítico | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.CAMERA.CAMERA_LIVE_VIEW_REQUEST.v1 | Comando | Câmeras / VMS | Operador/Gestor; Portaria; Cliente herdado; Auditor autorizado; Suporte escopado; serviço interno | Core, Dispositivos, Gateway, Acesso, Alarmes, Auditoria, Segurança, BI, Suporte e Automações | `camera.camera_live_view_request.request` | camera_resource, stream/playback/evidência, contexto, finalidade e retenção | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim | Crítico | Sim | Solicita execução; execução pertence ao módulo dono e exige idempotência. |
| NODUOS.CAMERA.CAMERA_PLAYBACK_REQUEST.v1 | Comando | Câmeras / VMS | Operador/Gestor; Portaria; Cliente herdado; Auditor autorizado; Suporte escopado; serviço interno | Core, Dispositivos, Gateway, Acesso, Alarmes, Auditoria, Segurança, BI, Suporte e Automações | `camera.camera_playback_request.request` | camera_resource, stream/playback/evidência, contexto, finalidade e retenção | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim | Crítico | Sim | Solicita execução; execução pertence ao módulo dono e exige idempotência. |
| NODUOS.CAMERA.CAMERA_CLIP.v1 | API interna | Câmeras / VMS | Operador/Gestor; Portaria; Cliente herdado; Auditor autorizado; Suporte escopado; serviço interno | Core, Dispositivos, Gateway, Acesso, Alarmes, Auditoria, Segurança, BI, Suporte e Automações | `camera.camera_clip.read_or_manage` | camera_resource, stream/playback/evidência, contexto, finalidade e retenção | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.CAMERA.CAMERA_SNAPSHOT.v1 | API interna | Câmeras / VMS | Operador/Gestor; Portaria; Cliente herdado; Auditor autorizado; Suporte escopado; serviço interno | Core, Dispositivos, Gateway, Acesso, Alarmes, Auditoria, Segurança, BI, Suporte e Automações | `camera.camera_snapshot.read_or_manage` | camera_resource, stream/playback/evidência, contexto, finalidade e retenção | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, se houver mutação | Crítico | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.CAMERA.CAMERA_EVIDENCE_REFERENCE.v1 | Contrato de evidência | Câmeras / VMS | Operador/Gestor; Portaria; Cliente herdado; Auditor autorizado; Suporte escopado; serviço interno | Core, Dispositivos, Gateway, Acesso, Alarmes, Auditoria, Segurança, BI, Suporte e Automações | `camera.camera_evidence_reference.read` | camera_resource, stream/playback/evidência, contexto, finalidade e retenção | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, se houver mutação | Crítico | Sim | Referenciar prova; não transportar bruto indevido. |
| NODUOS.CAMERA.CAMERA_AUTHORIZATION_SCOPE.v1 | Contrato de autorização | Câmeras / VMS | Operador/Gestor; Portaria; Cliente herdado; Auditor autorizado; Suporte escopado; serviço interno | Core, Dispositivos, Gateway, Acesso, Alarmes, Auditoria, Segurança, BI, Suporte e Automações | `camera.camera_authorization_scope.read` | camera_resource, stream/playback/evidência, contexto, finalidade e retenção | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.CAMERA.CAMERA_ANALYTICS_READ_MODEL.v1 | Read model autorizado | Câmeras / VMS | Operador/Gestor; Portaria; Cliente herdado; Auditor autorizado; Suporte escopado; serviço interno | Core, Dispositivos, Gateway, Acesso, Alarmes, Auditoria, Segurança, BI, Suporte e Automações | `camera.camera_analytics.read` | camera_resource, stream/playback/evidência, contexto, finalidade e retenção | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Não; consumidor usa deduplicação/inbox | Sensível | Sim | Leitura autorizada; não usar como banco compartilhado nem fonte de domínio. |
| NODUOS.CAMERA.VIDEO_RETENTION_POLICY_BINDING.v1 | Contrato de política | Câmeras / VMS | Operador/Gestor; Portaria; Cliente herdado; Auditor autorizado; Suporte escopado; serviço interno | Core, Dispositivos, Gateway, Acesso, Alarmes, Auditoria, Segurança, BI, Suporte e Automações | `camera.video_retention_policy_binding.manage` | camera_resource, stream/playback/evidência, contexto, finalidade e retenção | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, se houver mutação | Crítico | Sim | Política influencia; Core decide; módulo dono executa. |

## 26. Matriz de permissões dos contratos de Alarmes

| Contract ID | Tipo | Owner | Quem pode chamar | Módulos consumidores | Permissão necessária | Escopo | Exige Core AuthorizationDecision? | Exige licença/módulo ativo? | Exige política Segurança/LGPD? | Exige auditoria? | Exige idempotência? | Sensibilidade | Fail-closed | Observação anti-acoplamento |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.ALARM.ALARM_PANEL.v1 | API interna | Alarmes | Operador/Gestor; Portaria; Suporte; Automação autorizada; serviço interno | Core, Dispositivos, Gateway, Acesso, Câmeras, Notificações, Auditoria, BI, Suporte e Automações | `alarm.alarm_panel.read_or_manage` | painel, zona, sensor, evento, organização e recurso alarmístico | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.ALARM.ALARM_ZONE.v1 | API interna | Alarmes | Operador/Gestor; Portaria; Suporte; Automação autorizada; serviço interno | Core, Dispositivos, Gateway, Acesso, Câmeras, Notificações, Auditoria, BI, Suporte e Automações | `alarm.alarm_zone.read_or_manage` | painel, zona, sensor, evento, organização e recurso alarmístico | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.ALARM.ALARM_SENSOR.v1 | API interna | Alarmes | Operador/Gestor; Portaria; Suporte; Automação autorizada; serviço interno | Core, Dispositivos, Gateway, Acesso, Câmeras, Notificações, Auditoria, BI, Suporte e Automações | `alarm.alarm_sensor.read_or_manage` | painel, zona, sensor, evento, organização e recurso alarmístico | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.ALARM.ALARM_ARMING_STATE.v1 | API interna | Alarmes | Operador/Gestor; Portaria; Suporte; Automação autorizada; serviço interno | Core, Dispositivos, Gateway, Acesso, Câmeras, Notificações, Auditoria, BI, Suporte e Automações | `alarm.alarm_arming_state.read_or_manage` | painel, zona, sensor, evento, organização e recurso alarmístico | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.ALARM.ALARM_EVENT.v1 | Evento de fato ocorrido | Alarmes | Operador/Gestor; Portaria; Suporte; Automação autorizada; serviço interno | Core, Dispositivos, Gateway, Acesso, Câmeras, Notificações, Auditoria, BI, Suporte e Automações | `alarm.event.consume_or_publish` | painel, zona, sensor, evento, organização e recurso alarmístico | Sim | Herdado do módulo produtor | Sim | Sim | Não; consumidor usa deduplicação/inbox | Sensível | Sim | Fato ocorrido; não transformar em comando. |
| NODUOS.ALARM.ALARM_TRIGGER_EVENT.v1 | Evento de fato ocorrido | Alarmes | Operador/Gestor; Portaria; Suporte; Automação autorizada; serviço interno | Core, Dispositivos, Gateway, Acesso, Câmeras, Notificações, Auditoria, BI, Suporte e Automações | `alarm.event.consume_or_publish` | painel, zona, sensor, evento, organização e recurso alarmístico | Sim | Herdado do módulo produtor | Sim | Sim | Não; consumidor usa deduplicação/inbox | Sensível | Sim | Fato ocorrido; não transformar em comando. |
| NODUOS.ALARM.PANIC_EVENT.v1 | Evento de fato ocorrido | Alarmes | Operador/Gestor; Portaria; Suporte; Automação autorizada; serviço interno | Core, Dispositivos, Gateway, Acesso, Câmeras, Notificações, Auditoria, BI, Suporte e Automações | `alarm.event.consume_or_publish` | painel, zona, sensor, evento, organização e recurso alarmístico | Sim | Herdado do módulo produtor | Sim | Sim | Não; consumidor usa deduplicação/inbox | Sensível | Sim | Fato ocorrido; não transformar em comando. |
| NODUOS.ALARM.ALARM_ESCALATION.v1 | API interna | Alarmes | Operador/Gestor; Portaria; Suporte; Automação autorizada; serviço interno | Core, Dispositivos, Gateway, Acesso, Câmeras, Notificações, Auditoria, BI, Suporte e Automações | `alarm.alarm_escalation.read_or_manage` | painel, zona, sensor, evento, organização e recurso alarmístico | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.ALARM.ALARM_ACKNOWLEDGEMENT.v1 | API interna | Alarmes | Operador/Gestor; Portaria; Suporte; Automação autorizada; serviço interno | Core, Dispositivos, Gateway, Acesso, Câmeras, Notificações, Auditoria, BI, Suporte e Automações | `alarm.alarm_acknowledgement.read_or_manage` | painel, zona, sensor, evento, organização e recurso alarmístico | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.ALARM.ALARM_RESOLUTION.v1 | API interna | Alarmes | Operador/Gestor; Portaria; Suporte; Automação autorizada; serviço interno | Core, Dispositivos, Gateway, Acesso, Câmeras, Notificações, Auditoria, BI, Suporte e Automações | `alarm.alarm_resolution.read_or_manage` | painel, zona, sensor, evento, organização e recurso alarmístico | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.ALARM.ALARM_AUTHORIZATION_SCOPE.v1 | Contrato de autorização | Alarmes | Operador/Gestor; Portaria; Suporte; Automação autorizada; serviço interno | Core, Dispositivos, Gateway, Acesso, Câmeras, Notificações, Auditoria, BI, Suporte e Automações | `alarm.alarm_authorization_scope.read` | painel, zona, sensor, evento, organização e recurso alarmístico | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.ALARM.ALARM_ANALYTICS_READ_MODEL.v1 | Read model autorizado | Alarmes | Operador/Gestor; Portaria; Suporte; Automação autorizada; serviço interno | Core, Dispositivos, Gateway, Acesso, Câmeras, Notificações, Auditoria, BI, Suporte e Automações | `alarm.alarm_analytics.read` | painel, zona, sensor, evento, organização e recurso alarmístico | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Não; consumidor usa deduplicação/inbox | Sensível | Sim | Leitura autorizada; não usar como banco compartilhado nem fonte de domínio. |

## 27. Matriz de permissões dos contratos de Financeiro

| Contract ID | Tipo | Owner | Quem pode chamar | Módulos consumidores | Permissão necessária | Escopo | Exige Core AuthorizationDecision? | Exige licença/módulo ativo? | Exige política Segurança/LGPD? | Exige auditoria? | Exige idempotência? | Sensibilidade | Fail-closed | Observação anti-acoplamento |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.FINANCE.INVOICE.v1 | API interna | Financeiro | Master/Parceiro/Organização autorizados; Operador financeiro; Cliente no próprio contexto; serviço interno | Core, Master, Parceiros, Organizações, Pessoas, Reservas, Acesso por política, BI, Auditoria, Notificações | `finance.invoice.manage` | fatura, cobrança, pagamento, contrato financeiro, parceiro/organização/cliente | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Crítico | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.FINANCE.CHARGE.v1 | API interna | Financeiro | Master/Parceiro/Organização autorizados; Operador financeiro; Cliente no próprio contexto; serviço interno | Core, Master, Parceiros, Organizações, Pessoas, Reservas, Acesso por política, BI, Auditoria, Notificações | `finance.charge.manage` | fatura, cobrança, pagamento, contrato financeiro, parceiro/organização/cliente | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Crítico | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.FINANCE.PAYMENT.v1 | API interna | Financeiro | Master/Parceiro/Organização autorizados; Operador financeiro; Cliente no próprio contexto; serviço interno | Core, Master, Parceiros, Organizações, Pessoas, Reservas, Acesso por política, BI, Auditoria, Notificações | `finance.payment.manage` | fatura, cobrança, pagamento, contrato financeiro, parceiro/organização/cliente | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Crítico | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.FINANCE.PAYMENT_STATUS.v1 | Evento de fato ocorrido ou API interna | Financeiro | Master/Parceiro/Organização autorizados; Operador financeiro; Cliente no próprio contexto; serviço interno | Core, Master, Parceiros, Organizações, Pessoas, Reservas, Acesso por política, BI, Auditoria, Notificações | `finance.event.consume_or_publish` | fatura, cobrança, pagamento, contrato financeiro, parceiro/organização/cliente | Sim | Herdado do módulo produtor | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Crítico | Sim | Fato ocorrido; não transformar em comando. |
| NODUOS.FINANCE.RECEIPT.v1 | API interna | Financeiro | Master/Parceiro/Organização autorizados; Operador financeiro; Cliente no próprio contexto; serviço interno | Core, Master, Parceiros, Organizações, Pessoas, Reservas, Acesso por política, BI, Auditoria, Notificações | `finance.receipt.read_or_manage` | fatura, cobrança, pagamento, contrato financeiro, parceiro/organização/cliente | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.FINANCE.OVERDUE_EVENT.v1 | Evento de fato ocorrido | Financeiro | Master/Parceiro/Organização autorizados; Operador financeiro; Cliente no próprio contexto; serviço interno | Core, Master, Parceiros, Organizações, Pessoas, Reservas, Acesso por política, BI, Auditoria, Notificações | `finance.event.consume_or_publish` | fatura, cobrança, pagamento, contrato financeiro, parceiro/organização/cliente | Sim | Herdado do módulo produtor | Sim | Sim | Não; consumidor usa deduplicação/inbox | Sensível | Sim | Fato ocorrido; não transformar em comando. |
| NODUOS.FINANCE.FINANCIAL_AGREEMENT.v1 | API interna | Financeiro | Master/Parceiro/Organização autorizados; Operador financeiro; Cliente no próprio contexto; serviço interno | Core, Master, Parceiros, Organizações, Pessoas, Reservas, Acesso por política, BI, Auditoria, Notificações | `finance.financial_agreement.read_or_manage` | fatura, cobrança, pagamento, contrato financeiro, parceiro/organização/cliente | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.FINANCE.COMMISSION.v1 | API interna | Financeiro | Master/Parceiro/Organização autorizados; Operador financeiro; Cliente no próprio contexto; serviço interno | Core, Master, Parceiros, Organizações, Pessoas, Reservas, Acesso por política, BI, Auditoria, Notificações | `finance.commission.read_or_manage` | fatura, cobrança, pagamento, contrato financeiro, parceiro/organização/cliente | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.FINANCE.SPLIT.v1 | API interna | Financeiro | Master/Parceiro/Organização autorizados; Operador financeiro; Cliente no próprio contexto; serviço interno | Core, Master, Parceiros, Organizações, Pessoas, Reservas, Acesso por política, BI, Auditoria, Notificações | `finance.split.read_or_manage` | fatura, cobrança, pagamento, contrato financeiro, parceiro/organização/cliente | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.FINANCE.TRANSFER.v1 | API interna | Financeiro | Master/Parceiro/Organização autorizados; Operador financeiro; Cliente no próprio contexto; serviço interno | Core, Master, Parceiros, Organizações, Pessoas, Reservas, Acesso por política, BI, Auditoria, Notificações | `finance.transfer.read_or_manage` | fatura, cobrança, pagamento, contrato financeiro, parceiro/organização/cliente | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.FINANCE.FINANCIAL_READ_MODEL.v1 | Read model autorizado | Financeiro | Master/Parceiro/Organização autorizados; Operador financeiro; Cliente no próprio contexto; serviço interno | Core, Master, Parceiros, Organizações, Pessoas, Reservas, Acesso por política, BI, Auditoria, Notificações | `finance.financial.read` | fatura, cobrança, pagamento, contrato financeiro, parceiro/organização/cliente | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Não; consumidor usa deduplicação/inbox | Sensível | Sim | Leitura autorizada; não usar como banco compartilhado nem fonte de domínio. |
| NODUOS.FINANCE.FINANCIAL_RESTRICTION_SIGNAL.v1 | API interna | Financeiro | Master/Parceiro/Organização autorizados; Operador financeiro; Cliente no próprio contexto; serviço interno | Core, Master, Parceiros, Organizações, Pessoas, Reservas, Acesso por política, BI, Auditoria, Notificações | `finance.financial_restriction_signal.read_or_manage` | fatura, cobrança, pagamento, contrato financeiro, parceiro/organização/cliente | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |

## 28. Matriz de permissões dos contratos de Convites e Visitantes

| Contract ID | Tipo | Owner | Quem pode chamar | Módulos consumidores | Permissão necessária | Escopo | Exige Core AuthorizationDecision? | Exige licença/módulo ativo? | Exige política Segurança/LGPD? | Exige auditoria? | Exige idempotência? | Sensibilidade | Fail-closed | Observação anti-acoplamento |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.VISITOR.VISITOR_INVITE.v1 | API interna | Convites e Visitantes | Cliente autorizado; Operador/Gestor; Portaria/Recepção; Organização Admin; serviço interno | Core, Pessoas, Unidades, Acesso, Notificações, Auditoria, BI, Segurança e Automações | `visitor.visitor_invite.read_or_manage` | convite, visitante, período, acesso temporário e organização/unidade | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.VISITOR.TEMPORARY_VISITOR_PROFILE.v1 | API interna | Convites e Visitantes | Cliente autorizado; Operador/Gestor; Portaria/Recepção; Organização Admin; serviço interno | Core, Pessoas, Unidades, Acesso, Notificações, Auditoria, BI, Segurança e Automações | `visitor.temporary_visitor_profile.read_or_manage` | convite, visitante, período, acesso temporário e organização/unidade | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.VISITOR.TEMPORARY_QR_CODE.v1 | API interna | Convites e Visitantes | Cliente autorizado; Operador/Gestor; Portaria/Recepção; Organização Admin; serviço interno | Core, Pessoas, Unidades, Acesso, Notificações, Auditoria, BI, Segurança e Automações | `visitor.temporary_qr_code.read_or_manage` | convite, visitante, período, acesso temporário e organização/unidade | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, se houver mutação | Crítico | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.VISITOR.VISIT_WINDOW.v1 | API interna | Convites e Visitantes | Cliente autorizado; Operador/Gestor; Portaria/Recepção; Organização Admin; serviço interno | Core, Pessoas, Unidades, Acesso, Notificações, Auditoria, BI, Segurança e Automações | `visitor.visit_window.read_or_manage` | convite, visitante, período, acesso temporário e organização/unidade | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.VISITOR.VISIT_APPROVAL.v1 | API interna | Convites e Visitantes | Cliente autorizado; Operador/Gestor; Portaria/Recepção; Organização Admin; serviço interno | Core, Pessoas, Unidades, Acesso, Notificações, Auditoria, BI, Segurança e Automações | `visitor.visit_approval.read_or_manage` | convite, visitante, período, acesso temporário e organização/unidade | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.VISITOR.VISITOR_CHECK_IN.v1 | API interna | Convites e Visitantes | Cliente autorizado; Operador/Gestor; Portaria/Recepção; Organização Admin; serviço interno | Core, Pessoas, Unidades, Acesso, Notificações, Auditoria, BI, Segurança e Automações | `visitor.visitor_check_in.read_or_manage` | convite, visitante, período, acesso temporário e organização/unidade | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.VISITOR.VISITOR_CHECK_OUT.v1 | API interna | Convites e Visitantes | Cliente autorizado; Operador/Gestor; Portaria/Recepção; Organização Admin; serviço interno | Core, Pessoas, Unidades, Acesso, Notificações, Auditoria, BI, Segurança e Automações | `visitor.visitor_check_out.read_or_manage` | convite, visitante, período, acesso temporário e organização/unidade | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.VISITOR.VISITOR_ACCESS_REFERENCE.v1 | Contrato de autorização | Convites e Visitantes | Cliente autorizado; Operador/Gestor; Portaria/Recepção; Organização Admin; serviço interno | Core, Pessoas, Unidades, Acesso, Notificações, Auditoria, BI, Segurança e Automações | `visitor.visitor_access_reference.read` | convite, visitante, período, acesso temporário e organização/unidade | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Crítico | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.VISITOR.VISITOR_ANALYTICS_READ_MODEL.v1 | Read model autorizado | Convites e Visitantes | Cliente autorizado; Operador/Gestor; Portaria/Recepção; Organização Admin; serviço interno | Core, Pessoas, Unidades, Acesso, Notificações, Auditoria, BI, Segurança e Automações | `visitor.visitor_analytics.read` | convite, visitante, período, acesso temporário e organização/unidade | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Não; consumidor usa deduplicação/inbox | Sensível | Sim | Leitura autorizada; não usar como banco compartilhado nem fonte de domínio. |

## 29. Matriz de permissões dos contratos de Tickets

| Contract ID | Tipo | Owner | Quem pode chamar | Módulos consumidores | Permissão necessária | Escopo | Exige Core AuthorizationDecision? | Exige licença/módulo ativo? | Exige política Segurança/LGPD? | Exige auditoria? | Exige idempotência? | Sensibilidade | Fail-closed | Observação anti-acoplamento |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.TICKET.OPERATIONAL_TICKET.v1 | API interna | Tickets | Cliente; Operador/Gestor; Organização Admin; Parceiro/Suporte por escopo; serviço interno | Core, Pessoas, Organizações, Dispositivos, Gateway, Suporte, Auditoria, BI, Notificações | `ticket.operational_ticket.read_or_manage` | ticket, comentário, anexo, SLA, organização, solicitante e responsável | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.TICKET.TICKET_COMMENT.v1 | API interna | Tickets | Cliente; Operador/Gestor; Organização Admin; Parceiro/Suporte por escopo; serviço interno | Core, Pessoas, Organizações, Dispositivos, Gateway, Suporte, Auditoria, BI, Notificações | `ticket.ticket_comment.read_or_manage` | ticket, comentário, anexo, SLA, organização, solicitante e responsável | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.TICKET.TICKET_ATTACHMENT_REFERENCE.v1 | Contrato de autorização | Tickets | Cliente; Operador/Gestor; Organização Admin; Parceiro/Suporte por escopo; serviço interno | Core, Pessoas, Organizações, Dispositivos, Gateway, Suporte, Auditoria, BI, Notificações | `ticket.ticket_attachment_reference.read` | ticket, comentário, anexo, SLA, organização, solicitante e responsável | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.TICKET.TICKET_SLA.v1 | API interna | Tickets | Cliente; Operador/Gestor; Organização Admin; Parceiro/Suporte por escopo; serviço interno | Core, Pessoas, Organizações, Dispositivos, Gateway, Suporte, Auditoria, BI, Notificações | `ticket.ticket_sla.read_or_manage` | ticket, comentário, anexo, SLA, organização, solicitante e responsável | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.TICKET.TICKET_ESCALATION.v1 | API interna | Tickets | Cliente; Operador/Gestor; Organização Admin; Parceiro/Suporte por escopo; serviço interno | Core, Pessoas, Organizações, Dispositivos, Gateway, Suporte, Auditoria, BI, Notificações | `ticket.ticket_escalation.read_or_manage` | ticket, comentário, anexo, SLA, organização, solicitante e responsável | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.TICKET.TICKET_RESOLUTION.v1 | API interna | Tickets | Cliente; Operador/Gestor; Organização Admin; Parceiro/Suporte por escopo; serviço interno | Core, Pessoas, Organizações, Dispositivos, Gateway, Suporte, Auditoria, BI, Notificações | `ticket.ticket_resolution.read_or_manage` | ticket, comentário, anexo, SLA, organização, solicitante e responsável | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.TICKET.TICKET_REOPEN.v1 | API interna | Tickets | Cliente; Operador/Gestor; Organização Admin; Parceiro/Suporte por escopo; serviço interno | Core, Pessoas, Organizações, Dispositivos, Gateway, Suporte, Auditoria, BI, Notificações | `ticket.ticket_reopen.read_or_manage` | ticket, comentário, anexo, SLA, organização, solicitante e responsável | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, se houver mutação | Crítico | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.TICKET.TICKET_LINKED_RESOURCE_REFERENCE.v1 | Contrato de autorização | Tickets | Cliente; Operador/Gestor; Organização Admin; Parceiro/Suporte por escopo; serviço interno | Core, Pessoas, Organizações, Dispositivos, Gateway, Suporte, Auditoria, BI, Notificações | `ticket.ticket_linked_resource_reference.read` | ticket, comentário, anexo, SLA, organização, solicitante e responsável | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.TICKET.TICKET_ANALYTICS_READ_MODEL.v1 | Read model autorizado | Tickets | Cliente; Operador/Gestor; Organização Admin; Parceiro/Suporte por escopo; serviço interno | Core, Pessoas, Organizações, Dispositivos, Gateway, Suporte, Auditoria, BI, Notificações | `ticket.ticket_analytics.read` | ticket, comentário, anexo, SLA, organização, solicitante e responsável | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Não; consumidor usa deduplicação/inbox | Sensível | Sim | Leitura autorizada; não usar como banco compartilhado nem fonte de domínio. |

## 30. Matriz de permissões dos contratos de Mural Informativo

| Contract ID | Tipo | Owner | Quem pode chamar | Módulos consumidores | Permissão necessária | Escopo | Exige Core AuthorizationDecision? | Exige licença/módulo ativo? | Exige política Segurança/LGPD? | Exige auditoria? | Exige idempotência? | Sensibilidade | Fail-closed | Observação anti-acoplamento |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.MURAL.ANNOUNCEMENT.v1 | API interna | Mural Informativo | Organização Admin; Operador/Gestor autorizado; Cliente em leitura; serviço interno | Core, Pessoas, Organizações, Notificações, Auditoria, BI | `mural.announcement.read_or_manage` | comunicado, audiência, organização/unidade/grupo e janela de publicação | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.MURAL.ANNOUNCEMENT_AUDIENCE.v1 | API interna | Mural Informativo | Organização Admin; Operador/Gestor autorizado; Cliente em leitura; serviço interno | Core, Pessoas, Organizações, Notificações, Auditoria, BI | `mural.announcement_audience.read_or_manage` | comunicado, audiência, organização/unidade/grupo e janela de publicação | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.MURAL.ANNOUNCEMENT_ATTACHMENT_REFERENCE.v1 | Contrato de autorização | Mural Informativo | Organização Admin; Operador/Gestor autorizado; Cliente em leitura; serviço interno | Core, Pessoas, Organizações, Notificações, Auditoria, BI | `mural.announcement_attachment_reference.read` | comunicado, audiência, organização/unidade/grupo e janela de publicação | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.MURAL.ANNOUNCEMENT_ACKNOWLEDGEMENT.v1 | API interna | Mural Informativo | Organização Admin; Operador/Gestor autorizado; Cliente em leitura; serviço interno | Core, Pessoas, Organizações, Notificações, Auditoria, BI | `mural.announcement_acknowledgement.read_or_manage` | comunicado, audiência, organização/unidade/grupo e janela de publicação | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.MURAL.ANNOUNCEMENT_POLL.v1 | API interna | Mural Informativo | Organização Admin; Operador/Gestor autorizado; Cliente em leitura; serviço interno | Core, Pessoas, Organizações, Notificações, Auditoria, BI | `mural.announcement_poll.read_or_manage` | comunicado, audiência, organização/unidade/grupo e janela de publicação | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.MURAL.ANNOUNCEMENT_READ_MODEL.v1 | Read model autorizado | Mural Informativo | Organização Admin; Operador/Gestor autorizado; Cliente em leitura; serviço interno | Core, Pessoas, Organizações, Notificações, Auditoria, BI | `mural.announcement.read` | comunicado, audiência, organização/unidade/grupo e janela de publicação | Sim, salvo leitura técnica neutra | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Sim, se consulta sensível; log técnico mínimo | Não; consumidor usa deduplicação/inbox | Restrito | Sim para escopo/autorização; degradação segura em leitura | Leitura autorizada; não usar como banco compartilhado nem fonte de domínio. |
| NODUOS.MURAL.ANNOUNCEMENT_ARCHIVED_EVENT.v1 | Evento de fato ocorrido | Mural Informativo | Organização Admin; Operador/Gestor autorizado; Cliente em leitura; serviço interno | Core, Pessoas, Organizações, Notificações, Auditoria, BI | `mural.event.consume_or_publish` | comunicado, audiência, organização/unidade/grupo e janela de publicação | Herdado da ação que gerou o evento | Herdado do módulo produtor | Condicional | Sim, trilha do produtor | Não; consumidor usa deduplicação/inbox | Interno | Sim para escopo/autorização; degradação segura em leitura | Fato ocorrido; não transformar em comando. |

## 31. Matriz de permissões dos contratos de Reservas

| Contract ID | Tipo | Owner | Quem pode chamar | Módulos consumidores | Permissão necessária | Escopo | Exige Core AuthorizationDecision? | Exige licença/módulo ativo? | Exige política Segurança/LGPD? | Exige auditoria? | Exige idempotência? | Sensibilidade | Fail-closed | Observação anti-acoplamento |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.RESERVATION.RESERVABLE_RESOURCE.v1 | API interna | Reservas | Cliente autorizado; Operador/Gestor; Organização Admin; Portaria quando aplicável; serviço interno | Core, Pessoas, Unidades, Acesso, Financeiro, Convites, Notificações, Auditoria, BI e Automações | `reservation.reservable_resource.read_or_manage` | recurso reservável, reserva, janela temporal, pessoa/unidade/contexto | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.RESERVATION.RESERVATION.v1 | API interna | Reservas | Cliente autorizado; Operador/Gestor; Organização Admin; Portaria quando aplicável; serviço interno | Core, Pessoas, Unidades, Acesso, Financeiro, Convites, Notificações, Auditoria, BI e Automações | `reservation.reservation.read_or_manage` | recurso reservável, reserva, janela temporal, pessoa/unidade/contexto | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.RESERVATION.AVAILABILITY_QUERY.v1 | API interna | Reservas | Cliente autorizado; Operador/Gestor; Organização Admin; Portaria quando aplicável; serviço interno | Core, Pessoas, Unidades, Acesso, Financeiro, Convites, Notificações, Auditoria, BI e Automações | `reservation.availability_query.read` | recurso reservável, reserva, janela temporal, pessoa/unidade/contexto | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.RESERVATION.RESERVATION_HOLD.v1 | API interna | Reservas | Cliente autorizado; Operador/Gestor; Organização Admin; Portaria quando aplicável; serviço interno | Core, Pessoas, Unidades, Acesso, Financeiro, Convites, Notificações, Auditoria, BI e Automações | `reservation.reservation_hold.read_or_manage` | recurso reservável, reserva, janela temporal, pessoa/unidade/contexto | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.RESERVATION.RESERVATION_APPROVAL.v1 | API interna | Reservas | Cliente autorizado; Operador/Gestor; Organização Admin; Portaria quando aplicável; serviço interno | Core, Pessoas, Unidades, Acesso, Financeiro, Convites, Notificações, Auditoria, BI e Automações | `reservation.reservation_approval.read_or_manage` | recurso reservável, reserva, janela temporal, pessoa/unidade/contexto | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.RESERVATION.RESERVATION_CANCELLATION.v1 | API interna | Reservas | Cliente autorizado; Operador/Gestor; Organização Admin; Portaria quando aplicável; serviço interno | Core, Pessoas, Unidades, Acesso, Financeiro, Convites, Notificações, Auditoria, BI e Automações | `reservation.reservation_cancellation.read_or_manage` | recurso reservável, reserva, janela temporal, pessoa/unidade/contexto | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.RESERVATION.RESERVATION_CHECK_IN.v1 | API interna | Reservas | Cliente autorizado; Operador/Gestor; Organização Admin; Portaria quando aplicável; serviço interno | Core, Pessoas, Unidades, Acesso, Financeiro, Convites, Notificações, Auditoria, BI e Automações | `reservation.reservation_check_in.read_or_manage` | recurso reservável, reserva, janela temporal, pessoa/unidade/contexto | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.RESERVATION.RESERVATION_CHECK_OUT.v1 | API interna | Reservas | Cliente autorizado; Operador/Gestor; Organização Admin; Portaria quando aplicável; serviço interno | Core, Pessoas, Unidades, Acesso, Financeiro, Convites, Notificações, Auditoria, BI e Automações | `reservation.reservation_check_out.read_or_manage` | recurso reservável, reserva, janela temporal, pessoa/unidade/contexto | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.RESERVATION.RESERVATION_NO_SHOW.v1 | API interna | Reservas | Cliente autorizado; Operador/Gestor; Organização Admin; Portaria quando aplicável; serviço interno | Core, Pessoas, Unidades, Acesso, Financeiro, Convites, Notificações, Auditoria, BI e Automações | `reservation.reservation_no_show.read_or_manage` | recurso reservável, reserva, janela temporal, pessoa/unidade/contexto | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.RESERVATION.RESERVATION_ACCESS_WINDOW.v1 | API interna | Reservas | Cliente autorizado; Operador/Gestor; Organização Admin; Portaria quando aplicável; serviço interno | Core, Pessoas, Unidades, Acesso, Financeiro, Convites, Notificações, Auditoria, BI e Automações | `reservation.reservation_access_window.read_or_manage` | recurso reservável, reserva, janela temporal, pessoa/unidade/contexto | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Crítico | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.RESERVATION.RESERVATION_CHARGE_REQUEST.v1 | Comando | Reservas | Cliente autorizado; Operador/Gestor; Organização Admin; Portaria quando aplicável; serviço interno | Core, Pessoas, Unidades, Acesso, Financeiro, Convites, Notificações, Auditoria, BI e Automações | `reservation.reservation_charge_request.request` | recurso reservável, reserva, janela temporal, pessoa/unidade/contexto | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim | Crítico | Sim | Solicita execução; execução pertence ao módulo dono e exige idempotência. |
| NODUOS.RESERVATION.RESERVATION_GUEST_LIST_REFERENCE.v1 | Contrato de autorização | Reservas | Cliente autorizado; Operador/Gestor; Organização Admin; Portaria quando aplicável; serviço interno | Core, Pessoas, Unidades, Acesso, Financeiro, Convites, Notificações, Auditoria, BI e Automações | `reservation.reservation_guest_list_reference.read` | recurso reservável, reserva, janela temporal, pessoa/unidade/contexto | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.RESERVATION.RESERVATION_ANALYTICS_READ_MODEL.v1 | Read model autorizado | Reservas | Cliente autorizado; Operador/Gestor; Organização Admin; Portaria quando aplicável; serviço interno | Core, Pessoas, Unidades, Acesso, Financeiro, Convites, Notificações, Auditoria, BI e Automações | `reservation.reservation_analytics.read` | recurso reservável, reserva, janela temporal, pessoa/unidade/contexto | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Sensível | Sim | Leitura autorizada; não usar como banco compartilhado nem fonte de domínio. |

## 32. Matriz de permissões dos contratos de Relatórios / BI

| Contract ID | Tipo | Owner | Quem pode chamar | Módulos consumidores | Permissão necessária | Escopo | Exige Core AuthorizationDecision? | Exige licença/módulo ativo? | Exige política Segurança/LGPD? | Exige auditoria? | Exige idempotência? | Sensibilidade | Fail-closed | Observação anti-acoplamento |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.BI.BI_WORKSPACE.v1 | API interna | Relatórios / BI | Master; Parceiro; Organização Admin; Operador autorizado; Auditor; serviço interno | Core, módulos donos por read model, Master, Parceiros, Organizações, Auditoria e Segurança | `bi.bi_workspace.read_or_manage` | dataset/read model autorizado, perfil, contexto, frescor e mascaramento | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.BI.BI_DASHBOARD.v1 | API interna | Relatórios / BI | Master; Parceiro; Organização Admin; Operador autorizado; Auditor; serviço interno | Core, módulos donos por read model, Master, Parceiros, Organizações, Auditoria e Segurança | `bi.bi_dashboard.read_or_manage` | dataset/read model autorizado, perfil, contexto, frescor e mascaramento | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.BI.BI_WIDGET.v1 | API interna | Relatórios / BI | Master; Parceiro; Organização Admin; Operador autorizado; Auditor; serviço interno | Core, módulos donos por read model, Master, Parceiros, Organizações, Auditoria e Segurança | `bi.bi_widget.read_or_manage` | dataset/read model autorizado, perfil, contexto, frescor e mascaramento | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.BI.BI_REPORT.v1 | API interna | Relatórios / BI | Master; Parceiro; Organização Admin; Operador autorizado; Auditor; serviço interno | Core, módulos donos por read model, Master, Parceiros, Organizações, Auditoria e Segurança | `bi.bi_report.read_or_manage` | dataset/read model autorizado, perfil, contexto, frescor e mascaramento | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.BI.BI_REPORT_TEMPLATE.v1 | API interna | Relatórios / BI | Master; Parceiro; Organização Admin; Operador autorizado; Auditor; serviço interno | Core, módulos donos por read model, Master, Parceiros, Organizações, Auditoria e Segurança | `bi.bi_report_template.read_or_manage` | dataset/read model autorizado, perfil, contexto, frescor e mascaramento | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.BI.BI_REPORT_SCHEDULE.v1 | API interna | Relatórios / BI | Master; Parceiro; Organização Admin; Operador autorizado; Auditor; serviço interno | Core, módulos donos por read model, Master, Parceiros, Organizações, Auditoria e Segurança | `bi.bi_report_schedule.read_or_manage` | dataset/read model autorizado, perfil, contexto, frescor e mascaramento | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.BI.BI_EXPORT_REQUEST.v1 | Comando | Relatórios / BI | Master; Parceiro; Organização Admin; Operador autorizado; Auditor; serviço interno | Core, módulos donos por read model, Master, Parceiros, Organizações, Auditoria e Segurança | `bi.bi_export_request.request` | dataset/read model autorizado, perfil, contexto, frescor e mascaramento | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim | Crítico | Sim | Solicita execução; execução pertence ao módulo dono e exige idempotência. |
| NODUOS.BI.BI_EXPORT_LOG.v1 | Contrato de exportação | Relatórios / BI | Master; Parceiro; Organização Admin; Operador autorizado; Auditor; serviço interno | Core, módulos donos por read model, Master, Parceiros, Organizações, Auditoria e Segurança | `bi.bi_export_log.read` | dataset/read model autorizado, perfil, contexto, frescor e mascaramento | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Crítico | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.BI.BI_READ_MODEL_SUBSCRIPTION.v1 | Read model autorizado | Relatórios / BI | Master; Parceiro; Organização Admin; Operador autorizado; Auditor; serviço interno | Core, módulos donos por read model, Master, Parceiros, Organizações, Auditoria e Segurança | `bi.bi_read_model_subscription.read` | dataset/read model autorizado, perfil, contexto, frescor e mascaramento | Sim, salvo leitura técnica neutra | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Sim, se consulta sensível; log técnico mínimo | Não; consumidor usa deduplicação/inbox | Restrito | Sim para escopo/autorização; degradação segura em leitura | Leitura autorizada; não usar como banco compartilhado nem fonte de domínio. |
| NODUOS.BI.BI_ANALYTICS_READ_MODEL.v1 | Read model autorizado | Relatórios / BI | Master; Parceiro; Organização Admin; Operador autorizado; Auditor; serviço interno | Core, módulos donos por read model, Master, Parceiros, Organizações, Auditoria e Segurança | `bi.bi_analytics.read` | dataset/read model autorizado, perfil, contexto, frescor e mascaramento | Sim, salvo leitura técnica neutra | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Sim, se consulta sensível; log técnico mínimo | Não; consumidor usa deduplicação/inbox | Restrito | Sim para escopo/autorização; degradação segura em leitura | Leitura autorizada; não usar como banco compartilhado nem fonte de domínio. |
| NODUOS.BI.BI_KPI.v1 | API interna | Relatórios / BI | Master; Parceiro; Organização Admin; Operador autorizado; Auditor; serviço interno | Core, módulos donos por read model, Master, Parceiros, Organizações, Auditoria e Segurança | `bi.bi_kpi.read_or_manage` | dataset/read model autorizado, perfil, contexto, frescor e mascaramento | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.BI.BI_INSIGHT.v1 | API interna | Relatórios / BI | Master; Parceiro; Organização Admin; Operador autorizado; Auditor; serviço interno | Core, módulos donos por read model, Master, Parceiros, Organizações, Auditoria e Segurança | `bi.bi_insight.read_or_manage` | dataset/read model autorizado, perfil, contexto, frescor e mascaramento | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.BI.BI_ANOMALY_DETECTION.v1 | API interna | Relatórios / BI | Master; Parceiro; Organização Admin; Operador autorizado; Auditor; serviço interno | Core, módulos donos por read model, Master, Parceiros, Organizações, Auditoria e Segurança | `bi.bi_anomaly_detection.read_or_manage` | dataset/read model autorizado, perfil, contexto, frescor e mascaramento | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Condicional | Condicional | Condicional | Restrito | Sim para escopo/autorização; degradação segura em leitura | Usar somente contrato público; não acessar banco, classe ou regra interna. |

## 33. Matriz de permissões dos contratos de White-label

| Contract ID | Tipo | Owner | Quem pode chamar | Módulos consumidores | Permissão necessária | Escopo | Exige Core AuthorizationDecision? | Exige licença/módulo ativo? | Exige política Segurança/LGPD? | Exige auditoria? | Exige idempotência? | Sensibilidade | Fail-closed | Observação anti-acoplamento |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.WL.WHITE_LABEL_PROFILE.v1 | API interna | White-label | Master; Parceiro Admin; Organização Admin quando autorizado; serviço interno | Core, Master, Parceiros, Organizações, Notificações, Segurança e Auditoria | `white_label.white_label_profile.read_or_manage` | marca/tema/domínio/template no escopo Master/Parceiro/Organização | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.WL.WHITE_LABEL_THEME.v1 | API interna | White-label | Master; Parceiro Admin; Organização Admin quando autorizado; serviço interno | Core, Master, Parceiros, Organizações, Notificações, Segurança e Auditoria | `white_label.white_label_theme.read_or_manage` | marca/tema/domínio/template no escopo Master/Parceiro/Organização | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.WL.THEME_TOKEN.v1 | API interna | White-label | Master; Parceiro Admin; Organização Admin quando autorizado; serviço interno | Core, Master, Parceiros, Organizações, Notificações, Segurança e Auditoria | `white_label.theme_token.read_or_manage` | marca/tema/domínio/template no escopo Master/Parceiro/Organização | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.WL.COLOR_PALETTE.v1 | API interna | White-label | Master; Parceiro Admin; Organização Admin quando autorizado; serviço interno | Core, Master, Parceiros, Organizações, Notificações, Segurança e Auditoria | `white_label.color_palette.read_or_manage` | marca/tema/domínio/template no escopo Master/Parceiro/Organização | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.WL.BRAND_ASSET_REFERENCE.v1 | Contrato de autorização | White-label | Master; Parceiro Admin; Organização Admin quando autorizado; serviço interno | Core, Master, Parceiros, Organizações, Notificações, Segurança e Auditoria | `white_label.brand_asset_reference.read` | marca/tema/domínio/template no escopo Master/Parceiro/Organização | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.WL.CUSTOM_DOMAIN.v1 | API interna | White-label | Master; Parceiro Admin; Organização Admin quando autorizado; serviço interno | Core, Master, Parceiros, Organizações, Notificações, Segurança e Auditoria | `white_label.custom_domain.read_or_manage` | marca/tema/domínio/template no escopo Master/Parceiro/Organização | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.WL.DOMAIN_VERIFICATION.v1 | API interna | White-label | Master; Parceiro Admin; Organização Admin quando autorizado; serviço interno | Core, Master, Parceiros, Organizações, Notificações, Segurança e Auditoria | `white_label.domain_verification.read_or_manage` | marca/tema/domínio/template no escopo Master/Parceiro/Organização | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.WL.CERTIFICATE_REFERENCE.v1 | Contrato de autorização | White-label | Master; Parceiro Admin; Organização Admin quando autorizado; serviço interno | Core, Master, Parceiros, Organizações, Notificações, Segurança e Auditoria | `white_label.certificate_reference.read` | marca/tema/domínio/template no escopo Master/Parceiro/Organização | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.WL.BRAND_PUBLISHING_REQUEST.v1 | Comando | White-label | Master; Parceiro Admin; Organização Admin quando autorizado; serviço interno | Core, Master, Parceiros, Organizações, Notificações, Segurança e Auditoria | `white_label.brand_publishing_request.request` | marca/tema/domínio/template no escopo Master/Parceiro/Organização | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim | Crítico | Sim | Solicita execução; execução pertence ao módulo dono e exige idempotência. |
| NODUOS.WL.BRAND_PUBLISHING_RESULT.v1 | Evento de fato ocorrido | White-label | Master; Parceiro Admin; Organização Admin quando autorizado; serviço interno | Core, Master, Parceiros, Organizações, Notificações, Segurança e Auditoria | `white_label.event.consume_or_publish` | marca/tema/domínio/template no escopo Master/Parceiro/Organização | Sim | Herdado do módulo produtor | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Crítico | Sim | Fato ocorrido; não transformar em comando. |
| NODUOS.WL.BRAND_PREVIEW.v1 | API interna | White-label | Master; Parceiro Admin; Organização Admin quando autorizado; serviço interno | Core, Master, Parceiros, Organizações, Notificações, Segurança e Auditoria | `white_label.brand_preview.read` | marca/tema/domínio/template no escopo Master/Parceiro/Organização | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.WL.BRAND_FALLBACK_THEME.v1 | API interna | White-label | Master; Parceiro Admin; Organização Admin quando autorizado; serviço interno | Core, Master, Parceiros, Organizações, Notificações, Segurança e Auditoria | `white_label.brand_fallback_theme.read_or_manage` | marca/tema/domínio/template no escopo Master/Parceiro/Organização | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.WL.BRAND_VISUAL_TEMPLATE.v1 | API interna | White-label | Master; Parceiro Admin; Organização Admin quando autorizado; serviço interno | Core, Master, Parceiros, Organizações, Notificações, Segurança e Auditoria | `white_label.brand_visual_template.read_or_manage` | marca/tema/domínio/template no escopo Master/Parceiro/Organização | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |

## 34. Matriz de permissões dos contratos de Notificações

| Contract ID | Tipo | Owner | Quem pode chamar | Módulos consumidores | Permissão necessária | Escopo | Exige Core AuthorizationDecision? | Exige licença/módulo ativo? | Exige política Segurança/LGPD? | Exige auditoria? | Exige idempotência? | Sensibilidade | Fail-closed | Observação anti-acoplamento |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.NOTIFICATION.NOTIFICATION_REQUEST.v1 | Comando | Notificações | Módulos donos; serviço interno; Organização Admin para templates/preferências autorizadas | Core, módulos donos, Segurança, Auditoria, Automações e integrações autorizadas | `notification.notification_request.request` | mensagem/template/canal/destinatário/preferência e política de entrega | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim | Crítico | Sim | Solicita execução; execução pertence ao módulo dono e exige idempotência. |
| NODUOS.NOTIFICATION.NOTIFICATION_TEMPLATE.v1 | Contrato de notificação | Notificações | Módulos donos; serviço interno; Organização Admin para templates/preferências autorizadas | Core, módulos donos, Segurança, Auditoria, Automações e integrações autorizadas | `notification.notification_template.read` | mensagem/template/canal/destinatário/preferência e política de entrega | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.NOTIFICATION.NOTIFICATION_CHANNEL.v1 | Contrato de notificação | Notificações | Módulos donos; serviço interno; Organização Admin para templates/preferências autorizadas | Core, módulos donos, Segurança, Auditoria, Automações e integrações autorizadas | `notification.notification_channel.read` | mensagem/template/canal/destinatário/preferência e política de entrega | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.NOTIFICATION.NOTIFICATION_PROVIDER.v1 | Contrato de notificação | Notificações | Módulos donos; serviço interno; Organização Admin para templates/preferências autorizadas | Core, módulos donos, Segurança, Auditoria, Automações e integrações autorizadas | `notification.notification_provider.read` | mensagem/template/canal/destinatário/preferência e política de entrega | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.NOTIFICATION.NOTIFICATION_DELIVERY_ATTEMPT.v1 | Contrato de notificação | Notificações | Módulos donos; serviço interno; Organização Admin para templates/preferências autorizadas | Core, módulos donos, Segurança, Auditoria, Automações e integrações autorizadas | `notification.notification_delivery_attempt.read` | mensagem/template/canal/destinatário/preferência e política de entrega | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.NOTIFICATION.NOTIFICATION_DELIVERY_LOG.v1 | Contrato de notificação | Notificações | Módulos donos; serviço interno; Organização Admin para templates/preferências autorizadas | Core, módulos donos, Segurança, Auditoria, Automações e integrações autorizadas | `notification.notification_delivery_log.read` | mensagem/template/canal/destinatário/preferência e política de entrega | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.NOTIFICATION.NOTIFICATION_PREFERENCE.v1 | Contrato de notificação | Notificações | Módulos donos; serviço interno; Organização Admin para templates/preferências autorizadas | Core, módulos donos, Segurança, Auditoria, Automações e integrações autorizadas | `notification.notification_preference.read` | mensagem/template/canal/destinatário/preferência e política de entrega | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.NOTIFICATION.NOTIFICATION_OPT_IN.v1 | Contrato de notificação | Notificações | Módulos donos; serviço interno; Organização Admin para templates/preferências autorizadas | Core, módulos donos, Segurança, Auditoria, Automações e integrações autorizadas | `notification.notification_opt_in.read` | mensagem/template/canal/destinatário/preferência e política de entrega | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.NOTIFICATION.NOTIFICATION_OPT_OUT.v1 | Contrato de notificação | Notificações | Módulos donos; serviço interno; Organização Admin para templates/preferências autorizadas | Core, módulos donos, Segurança, Auditoria, Automações e integrações autorizadas | `notification.notification_opt_out.read` | mensagem/template/canal/destinatário/preferência e política de entrega | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.NOTIFICATION.NOTIFICATION_ANALYTICS_READ_MODEL.v1 | Read model autorizado | Notificações | Módulos donos; serviço interno; Organização Admin para templates/preferências autorizadas | Core, módulos donos, Segurança, Auditoria, Automações e integrações autorizadas | `notification.notification_analytics.read` | mensagem/template/canal/destinatário/preferência e política de entrega | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Sensível | Sim | Leitura autorizada; não usar como banco compartilhado nem fonte de domínio. |

## 35. Matriz de permissões dos contratos de Automações

| Contract ID | Tipo | Owner | Quem pode chamar | Módulos consumidores | Permissão necessária | Escopo | Exige Core AuthorizationDecision? | Exige licença/módulo ativo? | Exige política Segurança/LGPD? | Exige auditoria? | Exige idempotência? | Sensibilidade | Fail-closed | Observação anti-acoplamento |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.AUTOMATION.AUTOMATION_WORKFLOW.v1 | API interna | Automações | Organização Admin; Operador autorizado; serviço interno; Automação autorizada | Core, Herança e Permissões, módulos donos, Auditoria, Segurança e Notificações | `automation.automation_workflow.read_or_manage` | workflow, gatilho, condição, ação solicitada, recurso e janela temporal | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.AUTOMATION.AUTOMATION_TRIGGER.v1 | API interna | Automações | Organização Admin; Operador autorizado; serviço interno; Automação autorizada | Core, Herança e Permissões, módulos donos, Auditoria, Segurança e Notificações | `automation.automation_trigger.read_or_manage` | workflow, gatilho, condição, ação solicitada, recurso e janela temporal | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.AUTOMATION.AUTOMATION_CONDITION.v1 | API interna | Automações | Organização Admin; Operador autorizado; serviço interno; Automação autorizada | Core, Herança e Permissões, módulos donos, Auditoria, Segurança e Notificações | `automation.automation_condition.read_or_manage` | workflow, gatilho, condição, ação solicitada, recurso e janela temporal | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.AUTOMATION.AUTOMATION_ACTION_REQUEST.v1 | Comando | Automações | Organização Admin; Operador autorizado; serviço interno; Automação autorizada | Core, Herança e Permissões, módulos donos, Auditoria, Segurança e Notificações | `automation.automation_action_request.request` | workflow, gatilho, condição, ação solicitada, recurso e janela temporal | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim | Crítico | Sim | Solicita execução; execução pertence ao módulo dono e exige idempotência. |
| NODUOS.AUTOMATION.AUTOMATION_EXECUTION.v1 | API interna | Automações | Organização Admin; Operador autorizado; serviço interno; Automação autorizada | Core, Herança e Permissões, módulos donos, Auditoria, Segurança e Notificações | `automation.automation_execution.read_or_manage` | workflow, gatilho, condição, ação solicitada, recurso e janela temporal | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.AUTOMATION.AUTOMATION_RETRY.v1 | API interna | Automações | Organização Admin; Operador autorizado; serviço interno; Automação autorizada | Core, Herança e Permissões, módulos donos, Auditoria, Segurança e Notificações | `automation.automation_retry.read_or_manage` | workflow, gatilho, condição, ação solicitada, recurso e janela temporal | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.AUTOMATION.AUTOMATION_PAUSE.v1 | API interna | Automações | Organização Admin; Operador autorizado; serviço interno; Automação autorizada | Core, Herança e Permissões, módulos donos, Auditoria, Segurança e Notificações | `automation.automation_pause.read_or_manage` | workflow, gatilho, condição, ação solicitada, recurso e janela temporal | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.AUTOMATION.AUTOMATION_HUMAN_APPROVAL.v1 | API interna | Automações | Organização Admin; Operador autorizado; serviço interno; Automação autorizada | Core, Herança e Permissões, módulos donos, Auditoria, Segurança e Notificações | `automation.automation_human_approval.read_or_manage` | workflow, gatilho, condição, ação solicitada, recurso e janela temporal | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.AUTOMATION.AUTOMATION_ACTION_RESULT.v1 | Evento de fato ocorrido | Automações | Organização Admin; Operador autorizado; serviço interno; Automação autorizada | Core, Herança e Permissões, módulos donos, Auditoria, Segurança e Notificações | `automation.event.consume_or_publish` | workflow, gatilho, condição, ação solicitada, recurso e janela temporal | Sim | Herdado do módulo produtor | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Crítico | Sim | Fato ocorrido; não transformar em comando. |
| NODUOS.AUTOMATION.AUTOMATION_READ_MODEL.v1 | Read model autorizado | Automações | Organização Admin; Operador autorizado; serviço interno; Automação autorizada | Core, Herança e Permissões, módulos donos, Auditoria, Segurança e Notificações | `automation.automation.read` | workflow, gatilho, condição, ação solicitada, recurso e janela temporal | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Sensível | Sim | Leitura autorizada; não usar como banco compartilhado nem fonte de domínio. |

## 36. Matriz de permissões dos contratos de Marketplace de Integrações

| Contract ID | Tipo | Owner | Quem pode chamar | Módulos consumidores | Permissão necessária | Escopo | Exige Core AuthorizationDecision? | Exige licença/módulo ativo? | Exige política Segurança/LGPD? | Exige auditoria? | Exige idempotência? | Sensibilidade | Fail-closed | Observação anti-acoplamento |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.MARKETPLACE.MARKETPLACE_CONNECTOR.v1 | API interna | Marketplace de Integrações | Master; Parceiro Admin; Marketplace Connector autorizado; integração externa autorizada | Core, Master, Parceiros, Segurança, Auditoria, Gateway, Dispositivos e módulos donos | `marketplace.marketplace_connector.read_or_manage` | conector, instalação, provider, segredo, tenant/contexto e risco de terceiro | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, se houver mutação | Crítico | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.MARKETPLACE.INTEGRATION_PROVIDER.v1 | API interna | Marketplace de Integrações | Master; Parceiro Admin; Marketplace Connector autorizado; integração externa autorizada | Core, Master, Parceiros, Segurança, Auditoria, Gateway, Dispositivos e módulos donos | `marketplace.integration_provider.read_or_manage` | conector, instalação, provider, segredo, tenant/contexto e risco de terceiro | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.MARKETPLACE.ADAPTER_PACKAGE.v1 | API interna | Marketplace de Integrações | Master; Parceiro Admin; Marketplace Connector autorizado; integração externa autorizada | Core, Master, Parceiros, Segurança, Auditoria, Gateway, Dispositivos e módulos donos | `marketplace.adapter_package.read_or_manage` | conector, instalação, provider, segredo, tenant/contexto e risco de terceiro | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION.v1 | API interna | Marketplace de Integrações | Master; Parceiro Admin; Marketplace Connector autorizado; integração externa autorizada | Core, Master, Parceiros, Segurança, Auditoria, Gateway, Dispositivos e módulos donos | `marketplace.connector_installation.manage` | conector, instalação, provider, segredo, tenant/contexto e risco de terceiro | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Crítico | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.MARKETPLACE.CONNECTOR_VERSION.v1 | API interna | Marketplace de Integrações | Master; Parceiro Admin; Marketplace Connector autorizado; integração externa autorizada | Core, Master, Parceiros, Segurança, Auditoria, Gateway, Dispositivos e módulos donos | `marketplace.connector_version.read_or_manage` | conector, instalação, provider, segredo, tenant/contexto e risco de terceiro | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, se houver mutação | Crítico | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.MARKETPLACE.CONNECTOR_COMPATIBILITY.v1 | API interna | Marketplace de Integrações | Master; Parceiro Admin; Marketplace Connector autorizado; integração externa autorizada | Core, Master, Parceiros, Segurança, Auditoria, Gateway, Dispositivos e módulos donos | `marketplace.connector_compatibility.read_or_manage` | conector, instalação, provider, segredo, tenant/contexto e risco de terceiro | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, se houver mutação | Crítico | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.MARKETPLACE.CONNECTOR_CREDENTIAL_REFERENCE.v1 | Contrato de segurança e LGPD | Marketplace de Integrações | Master; Parceiro Admin; Marketplace Connector autorizado; integração externa autorizada | Core, Master, Parceiros, Segurança, Auditoria, Gateway, Dispositivos e módulos donos | `marketplace.connector_credential_reference.manage` | conector, instalação, provider, segredo, tenant/contexto e risco de terceiro | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Crítico | Sim | Usar referências seguras; nunca segredo bruto. |
| NODUOS.MARKETPLACE.CONNECTOR_WEBHOOK_ENDPOINT.v1 | Webhook externo | Marketplace de Integrações | Master; Parceiro Admin; Marketplace Connector autorizado; integração externa autorizada | Core, Master, Parceiros, Segurança, Auditoria, Gateway, Dispositivos e módulos donos | `marketplace.webhook.deliver` | conector, instalação, provider, segredo, tenant/contexto e risco de terceiro | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Sim, se houver mutação | Crítico | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.MARKETPLACE.EXTERNAL_EVENT_MAPPING.v1 | Evento de fato ocorrido | Marketplace de Integrações | Master; Parceiro Admin; Marketplace Connector autorizado; integração externa autorizada | Core, Master, Parceiros, Segurança, Auditoria, Gateway, Dispositivos e módulos donos | `marketplace.event.consume_or_publish` | conector, instalação, provider, segredo, tenant/contexto e risco de terceiro | Sim | Herdado do módulo produtor | Sim | Sim | Não; consumidor usa deduplicação/inbox | Sensível | Sim | Fato ocorrido; não transformar em comando. |
| NODUOS.MARKETPLACE.MARKETPLACE_AUDIT_TRAIL.v1 | Contrato de auditoria | Marketplace de Integrações | Master; Parceiro Admin; Marketplace Connector autorizado; integração externa autorizada | Core, Master, Parceiros, Segurança, Auditoria, Gateway, Dispositivos e módulos donos | `marketplace.marketplace_audit_trail.read` | conector, instalação, provider, segredo, tenant/contexto e risco de terceiro | Sim | Sim, módulo ativo + licença/entitlement/feature flag quando aplicável | Sim | Sim | Condicional | Sensível | Sim | Consultar trilha por contrato; não substituir logs primários. |

## 37. Matriz de permissões dos contratos de Auditoria e Compliance

| Contract ID | Tipo | Owner | Quem pode chamar | Módulos consumidores | Permissão necessária | Escopo | Exige Core AuthorizationDecision? | Exige licença/módulo ativo? | Exige política Segurança/LGPD? | Exige auditoria? | Exige idempotência? | Sensibilidade | Fail-closed | Observação anti-acoplamento |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.AUDIT.AUDIT_TRAIL.v1 | Contrato de auditoria | Auditoria e Compliance | Auditor interno; Master autorizado; Segurança; Suporte escopado; módulo dono por trilha própria | Core, Segurança, Master, Suporte, BI autorizado e módulos donos por trilha autorizada | `audit.audit_trail.read` | trilha, caso, evidência, investigação, exportação e cadeia de custódia | Sim | Conforme plano/escopo administrativo | Sim | Sim | Condicional | Sensível | Sim | Consultar trilha por contrato; não substituir logs primários. |
| NODUOS.AUDIT.AUDIT_QUERY.v1 | Contrato de auditoria | Auditoria e Compliance | Auditor interno; Master autorizado; Segurança; Suporte escopado; módulo dono por trilha própria | Core, Segurança, Master, Suporte, BI autorizado e módulos donos por trilha autorizada | `audit.audit_query.read` | trilha, caso, evidência, investigação, exportação e cadeia de custódia | Sim | Conforme plano/escopo administrativo | Sim | Sim | Condicional | Sensível | Sim | Consultar trilha por contrato; não substituir logs primários. |
| NODUOS.AUDIT.AUDIT_EXPORT.v1 | Contrato de exportação | Auditoria e Compliance | Auditor interno; Master autorizado; Segurança; Suporte escopado; módulo dono por trilha própria | Core, Segurança, Master, Suporte, BI autorizado e módulos donos por trilha autorizada | `audit.audit_export.read` | trilha, caso, evidência, investigação, exportação e cadeia de custódia | Sim | Conforme plano/escopo administrativo | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Crítico | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.AUDIT.COMPLIANCE_CASE.v1 | API interna | Auditoria e Compliance | Auditor interno; Master autorizado; Segurança; Suporte escopado; módulo dono por trilha própria | Core, Segurança, Master, Suporte, BI autorizado e módulos donos por trilha autorizada | `audit.compliance_case.read_or_manage` | trilha, caso, evidência, investigação, exportação e cadeia de custódia | Sim | Conforme plano/escopo administrativo | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.AUDIT.COMPLIANCE_INVESTIGATION.v1 | API interna | Auditoria e Compliance | Auditor interno; Master autorizado; Segurança; Suporte escopado; módulo dono por trilha própria | Core, Segurança, Master, Suporte, BI autorizado e módulos donos por trilha autorizada | `audit.compliance_investigation.read_or_manage` | trilha, caso, evidência, investigação, exportação e cadeia de custódia | Sim | Conforme plano/escopo administrativo | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.AUDIT.EVIDENCE_REFERENCE.v1 | Contrato de evidência | Auditoria e Compliance | Auditor interno; Master autorizado; Segurança; Suporte escopado; módulo dono por trilha própria | Core, Segurança, Master, Suporte, BI autorizado e módulos donos por trilha autorizada | `audit.evidence_reference.read` | trilha, caso, evidência, investigação, exportação e cadeia de custódia | Sim | Conforme plano/escopo administrativo | Sim | Sim | Sim, se houver mutação | Crítico | Sim | Referenciar prova; não transportar bruto indevido. |
| NODUOS.AUDIT.CHAIN_OF_CUSTODY_RECORD.v1 | API interna | Auditoria e Compliance | Auditor interno; Master autorizado; Segurança; Suporte escopado; módulo dono por trilha própria | Core, Segurança, Master, Suporte, BI autorizado e módulos donos por trilha autorizada | `audit.chain_of_custody_record.read_or_manage` | trilha, caso, evidência, investigação, exportação e cadeia de custódia | Sim | Conforme plano/escopo administrativo | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.AUDIT.AUDIT_ALERT.v1 | Contrato de auditoria | Auditoria e Compliance | Auditor interno; Master autorizado; Segurança; Suporte escopado; módulo dono por trilha própria | Core, Segurança, Master, Suporte, BI autorizado e módulos donos por trilha autorizada | `audit.audit_alert.read` | trilha, caso, evidência, investigação, exportação e cadeia de custódia | Sim | Conforme plano/escopo administrativo | Sim | Sim | Condicional | Sensível | Sim | Consultar trilha por contrato; não substituir logs primários. |
| NODUOS.AUDIT.COMPLIANCE_REPORT.v1 | API interna | Auditoria e Compliance | Auditor interno; Master autorizado; Segurança; Suporte escopado; módulo dono por trilha própria | Core, Segurança, Master, Suporte, BI autorizado e módulos donos por trilha autorizada | `audit.compliance_report.read_or_manage` | trilha, caso, evidência, investigação, exportação e cadeia de custódia | Sim | Conforme plano/escopo administrativo | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |

## 38. Matriz de permissões dos contratos de Segurança e LGPD

| Contract ID | Tipo | Owner | Quem pode chamar | Módulos consumidores | Permissão necessária | Escopo | Exige Core AuthorizationDecision? | Exige licença/módulo ativo? | Exige política Segurança/LGPD? | Exige auditoria? | Exige idempotência? | Sensibilidade | Fail-closed | Observação anti-acoplamento |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.SECURITY.SECURITY_POLICY.v1 | Contrato de política | Segurança e LGPD | Segurança interna; DPO/privacidade autorizado; Master autorizado; módulo dono por política | Core, todos os módulos donos, Auditoria, Suporte, Marketplace e BI autorizado | `security.security_policy.manage` | política, dado, finalidade, consentimento, retenção, segredo e terceiro | Sim | Conforme plano/escopo administrativo | Sim | Sim | Sim, se houver mutação | Crítico | Sim | Política influencia; Core decide; módulo dono executa. |
| NODUOS.SECURITY.PRIVACY_POLICY.v1 | Contrato de política | Segurança e LGPD | Segurança interna; DPO/privacidade autorizado; Master autorizado; módulo dono por política | Core, todos os módulos donos, Auditoria, Suporte, Marketplace e BI autorizado | `security.privacy_policy.manage` | política, dado, finalidade, consentimento, retenção, segredo e terceiro | Sim | Conforme plano/escopo administrativo | Sim | Sim | Sim, se houver mutação | Crítico | Sim | Política influencia; Core decide; módulo dono executa. |
| NODUOS.SECURITY.DATA_PROTECTION_POLICY.v1 | Contrato de política | Segurança e LGPD | Segurança interna; DPO/privacidade autorizado; Master autorizado; módulo dono por política | Core, todos os módulos donos, Auditoria, Suporte, Marketplace e BI autorizado | `security.data_protection_policy.manage` | política, dado, finalidade, consentimento, retenção, segredo e terceiro | Sim | Conforme plano/escopo administrativo | Sim | Sim | Sim, se houver mutação | Crítico | Sim | Política influencia; Core decide; módulo dono executa. |
| NODUOS.SECURITY.CONSENT_POLICY.v1 | Contrato de política | Segurança e LGPD | Segurança interna; DPO/privacidade autorizado; Master autorizado; módulo dono por política | Core, todos os módulos donos, Auditoria, Suporte, Marketplace e BI autorizado | `security.consent_policy.manage` | política, dado, finalidade, consentimento, retenção, segredo e terceiro | Sim | Conforme plano/escopo administrativo | Sim | Sim | Sim, se houver mutação | Crítico | Sim | Política influencia; Core decide; módulo dono executa. |
| NODUOS.SECURITY.CONSENT_RECORD.v1 | Contrato de segurança e LGPD | Segurança e LGPD | Segurança interna; DPO/privacidade autorizado; Master autorizado; módulo dono por política | Core, todos os módulos donos, Auditoria, Suporte, Marketplace e BI autorizado | `security.consent_record.read` | política, dado, finalidade, consentimento, retenção, segredo e terceiro | Sim | Conforme plano/escopo administrativo | Sim | Sim | Condicional | Sensível | Sim | Usar referências seguras; nunca segredo bruto. |
| NODUOS.SECURITY.DATA_PROCESSING_RECORD.v1 | API interna | Segurança e LGPD | Segurança interna; DPO/privacidade autorizado; Master autorizado; módulo dono por política | Core, todos os módulos donos, Auditoria, Suporte, Marketplace e BI autorizado | `security.data_processing_record.read_or_manage` | política, dado, finalidade, consentimento, retenção, segredo e terceiro | Sim | Conforme plano/escopo administrativo | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.SECURITY.DATA_SUBJECT_REQUEST.v1 | Comando | Segurança e LGPD | Segurança interna; DPO/privacidade autorizado; Master autorizado; módulo dono por política | Core, todos os módulos donos, Auditoria, Suporte, Marketplace e BI autorizado | `security.data_subject_request.request` | política, dado, finalidade, consentimento, retenção, segredo e terceiro | Sim | Conforme plano/escopo administrativo | Sim | Sim | Sim | Crítico | Sim | Solicita execução; execução pertence ao módulo dono e exige idempotência. |
| NODUOS.SECURITY.RETENTION_POLICY.v1 | Contrato de política | Segurança e LGPD | Segurança interna; DPO/privacidade autorizado; Master autorizado; módulo dono por política | Core, todos os módulos donos, Auditoria, Suporte, Marketplace e BI autorizado | `security.retention_policy.manage` | política, dado, finalidade, consentimento, retenção, segredo e terceiro | Sim | Conforme plano/escopo administrativo | Sim | Sim | Sim, se houver mutação | Crítico | Sim | Política influencia; Core decide; módulo dono executa. |
| NODUOS.SECURITY.MASKING_POLICY.v1 | Contrato de política | Segurança e LGPD | Segurança interna; DPO/privacidade autorizado; Master autorizado; módulo dono por política | Core, todos os módulos donos, Auditoria, Suporte, Marketplace e BI autorizado | `security.masking_policy.manage` | política, dado, finalidade, consentimento, retenção, segredo e terceiro | Sim | Conforme plano/escopo administrativo | Sim | Sim | Sim, se houver mutação | Crítico | Sim | Política influencia; Core decide; módulo dono executa. |
| NODUOS.SECURITY.SENSITIVE_DATA_CLASSIFICATION.v1 | API interna | Segurança e LGPD | Segurança interna; DPO/privacidade autorizado; Master autorizado; módulo dono por política | Core, todos os módulos donos, Auditoria, Suporte, Marketplace e BI autorizado | `security.sensitive_data_classification.read_or_manage` | política, dado, finalidade, consentimento, retenção, segredo e terceiro | Sim | Conforme plano/escopo administrativo | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.SECURITY.EXPORT_CONTROL_POLICY.v1 | Contrato de política | Segurança e LGPD | Segurança interna; DPO/privacidade autorizado; Master autorizado; módulo dono por política | Core, todos os módulos donos, Auditoria, Suporte, Marketplace e BI autorizado | `security.export_control_policy.manage` | política, dado, finalidade, consentimento, retenção, segredo e terceiro | Sim | Conforme plano/escopo administrativo | Sim | Sim | Sim, quando alterar estado ou puder duplicar efeito | Crítico | Sim | Política influencia; Core decide; módulo dono executa. |
| NODUOS.SECURITY.SECRET_POLICY.v1 | Contrato de política | Segurança e LGPD | Segurança interna; DPO/privacidade autorizado; Master autorizado; módulo dono por política | Core, todos os módulos donos, Auditoria, Suporte, Marketplace e BI autorizado | `security.secret_policy.manage` | política, dado, finalidade, consentimento, retenção, segredo e terceiro | Sim | Conforme plano/escopo administrativo | Sim | Sim | Sim, se houver mutação | Crítico | Sim | Política influencia; Core decide; módulo dono executa. |
| NODUOS.SECURITY.THIRD_PARTY_RISK.v1 | API interna | Segurança e LGPD | Segurança interna; DPO/privacidade autorizado; Master autorizado; módulo dono por política | Core, todos os módulos donos, Auditoria, Suporte, Marketplace e BI autorizado | `security.third_party_risk.read_or_manage` | política, dado, finalidade, consentimento, retenção, segredo e terceiro | Sim | Conforme plano/escopo administrativo | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.SECURITY.INCIDENT_POLICY.v1 | Contrato de política | Segurança e LGPD | Segurança interna; DPO/privacidade autorizado; Master autorizado; módulo dono por política | Core, todos os módulos donos, Auditoria, Suporte, Marketplace e BI autorizado | `security.incident_policy.manage` | política, dado, finalidade, consentimento, retenção, segredo e terceiro | Sim | Conforme plano/escopo administrativo | Sim | Sim | Sim, se houver mutação | Crítico | Sim | Política influencia; Core decide; módulo dono executa. |

## 39. Matriz de permissões dos contratos de Suporte e Operação

| Contract ID | Tipo | Owner | Quem pode chamar | Módulos consumidores | Permissão necessária | Escopo | Exige Core AuthorizationDecision? | Exige licença/módulo ativo? | Exige política Segurança/LGPD? | Exige auditoria? | Exige idempotência? | Sensibilidade | Fail-closed | Observação anti-acoplamento |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NODUOS.SUPPORT.PLATFORM_SUPPORT_CASE.v1 | Contrato de suporte | Suporte e Operação | Suporte interno; Parceiro suporte; Master autorizado; módulo dono por incidente; serviço interno | Core, Segurança, Auditoria, Gateway, Dispositivos, módulos donos, Parceiros e Master | `support.platform_support_case.read` | caso, incidente, sessão de suporte, diagnóstico, runbook e janela autorizada | Sim | Conforme plano/escopo administrativo | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.SUPPORT.SUPPORT_OPERATION_CASE.v1 | Contrato de suporte | Suporte e Operação | Suporte interno; Parceiro suporte; Master autorizado; módulo dono por incidente; serviço interno | Core, Segurança, Auditoria, Gateway, Dispositivos, módulos donos, Parceiros e Master | `support.support_operation_case.read` | caso, incidente, sessão de suporte, diagnóstico, runbook e janela autorizada | Sim | Conforme plano/escopo administrativo | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.SUPPORT.SERVICE_INCIDENT.v1 | API interna | Suporte e Operação | Suporte interno; Parceiro suporte; Master autorizado; módulo dono por incidente; serviço interno | Core, Segurança, Auditoria, Gateway, Dispositivos, módulos donos, Parceiros e Master | `support.service_incident.read_or_manage` | caso, incidente, sessão de suporte, diagnóstico, runbook e janela autorizada | Sim | Conforme plano/escopo administrativo | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.SUPPORT.MAINTENANCE_WINDOW.v1 | API interna | Suporte e Operação | Suporte interno; Parceiro suporte; Master autorizado; módulo dono por incidente; serviço interno | Core, Segurança, Auditoria, Gateway, Dispositivos, módulos donos, Parceiros e Master | `support.maintenance_window.read_or_manage` | caso, incidente, sessão de suporte, diagnóstico, runbook e janela autorizada | Sim | Conforme plano/escopo administrativo | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.SUPPORT.SERVICE_STATUS.v1 | Evento de fato ocorrido ou API interna | Suporte e Operação | Suporte interno; Parceiro suporte; Master autorizado; módulo dono por incidente; serviço interno | Core, Segurança, Auditoria, Gateway, Dispositivos, módulos donos, Parceiros e Master | `support.event.consume_or_publish` | caso, incidente, sessão de suporte, diagnóstico, runbook e janela autorizada | Sim | Conforme plano/escopo administrativo | Sim | Sim | Não; consumidor usa deduplicação/inbox | Sensível | Sim | Fato ocorrido; não transformar em comando. |
| NODUOS.SUPPORT.DIAGNOSTIC_REQUEST.v1 | Comando | Suporte e Operação | Suporte interno; Parceiro suporte; Master autorizado; módulo dono por incidente; serviço interno | Core, Segurança, Auditoria, Gateway, Dispositivos, módulos donos, Parceiros e Master | `support.diagnostic_request.request` | caso, incidente, sessão de suporte, diagnóstico, runbook e janela autorizada | Sim | Conforme plano/escopo administrativo | Sim | Sim | Sim | Crítico | Sim | Solicita execução; execução pertence ao módulo dono e exige idempotência. |
| NODUOS.SUPPORT.REMOTE_SUPPORT_SESSION.v1 | Contrato de suporte | Suporte e Operação | Suporte interno; Parceiro suporte; Master autorizado; módulo dono por incidente; serviço interno | Core, Segurança, Auditoria, Gateway, Dispositivos, módulos donos, Parceiros e Master | `support.remote_support_session.read` | caso, incidente, sessão de suporte, diagnóstico, runbook e janela autorizada | Sim | Conforme plano/escopo administrativo | Sim | Sim | Sim, se houver mutação | Crítico | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.SUPPORT.RUNBOOK.v1 | API interna | Suporte e Operação | Suporte interno; Parceiro suporte; Master autorizado; módulo dono por incidente; serviço interno | Core, Segurança, Auditoria, Gateway, Dispositivos, módulos donos, Parceiros e Master | `support.runbook.read_or_manage` | caso, incidente, sessão de suporte, diagnóstico, runbook e janela autorizada | Sim | Conforme plano/escopo administrativo | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.SUPPORT.POST_INCIDENT_REVIEW.v1 | API interna | Suporte e Operação | Suporte interno; Parceiro suporte; Master autorizado; módulo dono por incidente; serviço interno | Core, Segurança, Auditoria, Gateway, Dispositivos, módulos donos, Parceiros e Master | `support.post_incident_review.read` | caso, incidente, sessão de suporte, diagnóstico, runbook e janela autorizada | Sim | Conforme plano/escopo administrativo | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.SUPPORT.SUPPORT_KNOWLEDGE_BASE_REFERENCE.v1 | Contrato de suporte | Suporte e Operação | Suporte interno; Parceiro suporte; Master autorizado; módulo dono por incidente; serviço interno | Core, Segurança, Auditoria, Gateway, Dispositivos, módulos donos, Parceiros e Master | `support.support_knowledge_base_reference.read` | caso, incidente, sessão de suporte, diagnóstico, runbook e janela autorizada | Sim | Conforme plano/escopo administrativo | Sim | Sim | Condicional | Sensível | Sim | Usar somente contrato público; não acessar banco, classe ou regra interna. |
| NODUOS.SUPPORT.SUPPORT_ANALYTICS_READ_MODEL.v1 | Read model autorizado | Suporte e Operação | Suporte interno; Parceiro suporte; Master autorizado; módulo dono por incidente; serviço interno | Core, Segurança, Auditoria, Gateway, Dispositivos, módulos donos, Parceiros e Master | `support.support_analytics.read` | caso, incidente, sessão de suporte, diagnóstico, runbook e janela autorizada | Sim | Conforme plano/escopo administrativo | Sim | Sim | Não; consumidor usa deduplicação/inbox | Sensível | Sim | Leitura autorizada; não usar como banco compartilhado nem fonte de domínio. |

## 40. Matriz de contratos que exigem AuthorizationDecision

Todo contrato sensível ou crítico exige AuthorizationDecision. Eventos herdam a decisão da ação de origem.

| Módulo | Quantidade | Contratos principais |
|---|---:|---|
| Core Platform | 14 | NODUOS.CORE.CORE_AUTHORIZATION.v1, NODUOS.CORE.AUTHORIZATION_DECISION.v1, NODUOS.CORE.RESOURCE_REFERENCE.v1, NODUOS.CORE.CONTEXT.v1, NODUOS.CORE.TENANT.v1, NODUOS.CORE.USER_ACCOUNT_REFERENCE.v1, NODUOS.CORE.PERMISSION_GRANT.v1, NODUOS.CORE.INHERITANCE_GRANT.v1 +6 outros |
| Master | 9 | NODUOS.MASTER.MASTER_PARTNER_GOVERNANCE.v1, NODUOS.MASTER.MASTER_MODULE_RELEASE_POLICY.v1, NODUOS.MASTER.MASTER_COMMERCIAL_PLAN_POLICY.v1, NODUOS.MASTER.MASTER_LICENSE_LIMIT_POLICY.v1, NODUOS.MASTER.MASTER_WHITE_LABEL_GOVERNANCE.v1, NODUOS.MASTER.MASTER_MARKETPLACE_GOVERNANCE.v1, NODUOS.MASTER.MASTER_INTEGRATION_GOVERNANCE.v1, NODUOS.MASTER.MASTER_GLOBAL_OVERVIEW_READ_MODEL.v1 +1 outros |
| Parceiros | 11 | NODUOS.PARTNER.PARTNER_RECORD.v1, NODUOS.PARTNER.PARTNER_PROFILE.v1, NODUOS.PARTNER.PARTNER_SCOPE.v1, NODUOS.PARTNER.PARTNER_ORGANIZATION_PORTFOLIO_READ_MODEL.v1, NODUOS.PARTNER.PARTNER_DEPLOYMENT_OVERVIEW_READ_MODEL.v1, NODUOS.PARTNER.PARTNER_GATEWAY_REGISTRATION_REQUEST.v1, NODUOS.PARTNER.PARTNER_DEVICE_REGISTRATION_REQUEST.v1, NODUOS.PARTNER.PARTNER_MODULE_AVAILABILITY_READ_MODEL.v1 +3 outros |
| Organizações | 10 | NODUOS.ORG.ORGANIZATION_RECORD.v1, NODUOS.ORG.ORGANIZATION_PROFILE.v1, NODUOS.ORG.ORGANIZATION_SETTINGS.v1, NODUOS.ORG.ORGANIZATION_STATUS.v1, NODUOS.ORG.ORGANIZATION_REFERENCE.v1, NODUOS.ORG.ORGANIZATION_MODULE_AVAILABILITY_READ_MODEL.v1, NODUOS.ORG.ORGANIZATION_STRUCTURE_SUMMARY_READ_MODEL.v1, NODUOS.ORG.ORGANIZATION_PEOPLE_SUMMARY_READ_MODEL.v1 +2 outros |
| Pessoas e Clientes | 11 | NODUOS.PEOPLE.PERSON_PROFILE.v1, NODUOS.PEOPLE.CLIENT_PROFILE.v1, NODUOS.PEOPLE.PERSON_DOCUMENT.v1, NODUOS.PEOPLE.PERSON_CONTACT.v1, NODUOS.PEOPLE.PERSON_CONSENT.v1, NODUOS.PEOPLE.PERSON_UNIT_LINK.v1, NODUOS.PEOPLE.PERSON_ORGANIZATION_LINK.v1, NODUOS.PEOPLE.DEPENDENT_PROFILE.v1 +3 outros |
| Unidades, Blocos, Áreas e Ambientes | 8 | NODUOS.STRUCTURE.STRUCTURE_ROOT.v1, NODUOS.STRUCTURE.PHYSICAL_STRUCTURE_NODE.v1, NODUOS.STRUCTURE.STRUCTURE_HIERARCHY.v1, NODUOS.STRUCTURE.STRUCTURE_REFERENCE.v1, NODUOS.STRUCTURE.STRUCTURAL_RESOURCE_ASSIGNMENT.v1, NODUOS.STRUCTURE.STRUCTURE_PATH_READ_MODEL.v1, NODUOS.STRUCTURE.STRUCTURE_VISIBILITY.v1, NODUOS.STRUCTURE.STRUCTURE_RESERVABLE_FLAG.v1 |
| Herança e Permissões | 10 | NODUOS.POLICY.ADVANCED_POLICY.v1, NODUOS.POLICY.POLICY_CONDITION.v1, NODUOS.POLICY.POLICY_EFFECT.v1, NODUOS.POLICY.POLICY_SCOPE.v1, NODUOS.POLICY.DELEGATION_RULE.v1, NODUOS.POLICY.POLICY_EXCEPTION.v1, NODUOS.POLICY.EFFECTIVE_PERMISSION_READ_MODEL.v1, NODUOS.POLICY.ACCESS_SIMULATION.v1 +2 outros |
| Gateway Local / Mikrotik / Tunnel | 12 | NODUOS.GATEWAY.GATEWAY_RECORD.v1, NODUOS.GATEWAY.GATEWAY_AGENT.v1, NODUOS.GATEWAY.GATEWAY_CREDENTIAL_REFERENCE.v1, NODUOS.GATEWAY.TUNNEL_SESSION.v1, NODUOS.GATEWAY.GATEWAY_HEALTH_READ_MODEL.v1, NODUOS.GATEWAY.GATEWAY_DIAGNOSTIC.v1, NODUOS.GATEWAY.GATEWAY_COMMAND.v1, NODUOS.GATEWAY.GATEWAY_COMMAND_RESULT.v1 +4 outros |
| Dispositivos | 12 | NODUOS.DEVICE.DEVICE_RECORD.v1, NODUOS.DEVICE.DEVICE_REFERENCE.v1, NODUOS.DEVICE.DEVICE_IDENTITY.v1, NODUOS.DEVICE.DEVICE_CAPABILITY.v1, NODUOS.DEVICE.DEVICE_HEALTH_READ_MODEL.v1, NODUOS.DEVICE.DEVICE_STATUS_READ_MODEL.v1, NODUOS.DEVICE.DEVICE_DIAGNOSTIC.v1, NODUOS.DEVICE.DEVICE_TELEMETRY.v1 +4 outros |
| Controle de Acesso | 12 | NODUOS.ACCESS.ACCESS_POINT.v1, NODUOS.ACCESS.ACCESS_CREDENTIAL.v1, NODUOS.ACCESS.ACCESS_RULE.v1, NODUOS.ACCESS.ACCESS_POLICY_BINDING.v1, NODUOS.ACCESS.ACCESS_SCHEDULE.v1, NODUOS.ACCESS.ACCESS_ATTEMPT_EVENT.v1, NODUOS.ACCESS.ACCESS_EVENT.v1, NODUOS.ACCESS.ACCESS_EXECUTION_COMMAND.v1 +4 outros |
| Câmeras / VMS | 10 | NODUOS.CAMERA.CAMERA_RESOURCE.v1, NODUOS.CAMERA.CAMERA_STREAM_ACCESS.v1, NODUOS.CAMERA.CAMERA_LIVE_VIEW_REQUEST.v1, NODUOS.CAMERA.CAMERA_PLAYBACK_REQUEST.v1, NODUOS.CAMERA.CAMERA_CLIP.v1, NODUOS.CAMERA.CAMERA_SNAPSHOT.v1, NODUOS.CAMERA.CAMERA_EVIDENCE_REFERENCE.v1, NODUOS.CAMERA.CAMERA_AUTHORIZATION_SCOPE.v1 +2 outros |
| Alarmes | 12 | NODUOS.ALARM.ALARM_PANEL.v1, NODUOS.ALARM.ALARM_ZONE.v1, NODUOS.ALARM.ALARM_SENSOR.v1, NODUOS.ALARM.ALARM_ARMING_STATE.v1, NODUOS.ALARM.ALARM_EVENT.v1, NODUOS.ALARM.ALARM_TRIGGER_EVENT.v1, NODUOS.ALARM.PANIC_EVENT.v1, NODUOS.ALARM.ALARM_ESCALATION.v1 +4 outros |
| Financeiro | 12 | NODUOS.FINANCE.INVOICE.v1, NODUOS.FINANCE.CHARGE.v1, NODUOS.FINANCE.PAYMENT.v1, NODUOS.FINANCE.PAYMENT_STATUS.v1, NODUOS.FINANCE.RECEIPT.v1, NODUOS.FINANCE.OVERDUE_EVENT.v1, NODUOS.FINANCE.FINANCIAL_AGREEMENT.v1, NODUOS.FINANCE.COMMISSION.v1 +4 outros |
| Convites e Visitantes | 9 | NODUOS.VISITOR.VISITOR_INVITE.v1, NODUOS.VISITOR.TEMPORARY_VISITOR_PROFILE.v1, NODUOS.VISITOR.TEMPORARY_QR_CODE.v1, NODUOS.VISITOR.VISIT_WINDOW.v1, NODUOS.VISITOR.VISIT_APPROVAL.v1, NODUOS.VISITOR.VISITOR_CHECK_IN.v1, NODUOS.VISITOR.VISITOR_CHECK_OUT.v1, NODUOS.VISITOR.VISITOR_ACCESS_REFERENCE.v1 +1 outros |
| Tickets | 9 | NODUOS.TICKET.OPERATIONAL_TICKET.v1, NODUOS.TICKET.TICKET_COMMENT.v1, NODUOS.TICKET.TICKET_ATTACHMENT_REFERENCE.v1, NODUOS.TICKET.TICKET_SLA.v1, NODUOS.TICKET.TICKET_ESCALATION.v1, NODUOS.TICKET.TICKET_RESOLUTION.v1, NODUOS.TICKET.TICKET_REOPEN.v1, NODUOS.TICKET.TICKET_LINKED_RESOURCE_REFERENCE.v1 +1 outros |
| Mural Informativo | 6 | NODUOS.MURAL.ANNOUNCEMENT.v1, NODUOS.MURAL.ANNOUNCEMENT_AUDIENCE.v1, NODUOS.MURAL.ANNOUNCEMENT_ATTACHMENT_REFERENCE.v1, NODUOS.MURAL.ANNOUNCEMENT_ACKNOWLEDGEMENT.v1, NODUOS.MURAL.ANNOUNCEMENT_POLL.v1, NODUOS.MURAL.ANNOUNCEMENT_READ_MODEL.v1 |
| Reservas | 13 | NODUOS.RESERVATION.RESERVABLE_RESOURCE.v1, NODUOS.RESERVATION.RESERVATION.v1, NODUOS.RESERVATION.AVAILABILITY_QUERY.v1, NODUOS.RESERVATION.RESERVATION_HOLD.v1, NODUOS.RESERVATION.RESERVATION_APPROVAL.v1, NODUOS.RESERVATION.RESERVATION_CANCELLATION.v1, NODUOS.RESERVATION.RESERVATION_CHECK_IN.v1, NODUOS.RESERVATION.RESERVATION_CHECK_OUT.v1 +5 outros |
| Relatórios / BI | 13 | NODUOS.BI.BI_WORKSPACE.v1, NODUOS.BI.BI_DASHBOARD.v1, NODUOS.BI.BI_WIDGET.v1, NODUOS.BI.BI_REPORT.v1, NODUOS.BI.BI_REPORT_TEMPLATE.v1, NODUOS.BI.BI_REPORT_SCHEDULE.v1, NODUOS.BI.BI_EXPORT_REQUEST.v1, NODUOS.BI.BI_EXPORT_LOG.v1 +5 outros |
| White-label | 13 | NODUOS.WL.WHITE_LABEL_PROFILE.v1, NODUOS.WL.WHITE_LABEL_THEME.v1, NODUOS.WL.THEME_TOKEN.v1, NODUOS.WL.COLOR_PALETTE.v1, NODUOS.WL.BRAND_ASSET_REFERENCE.v1, NODUOS.WL.CUSTOM_DOMAIN.v1, NODUOS.WL.DOMAIN_VERIFICATION.v1, NODUOS.WL.CERTIFICATE_REFERENCE.v1 +5 outros |
| Notificações | 10 | NODUOS.NOTIFICATION.NOTIFICATION_REQUEST.v1, NODUOS.NOTIFICATION.NOTIFICATION_TEMPLATE.v1, NODUOS.NOTIFICATION.NOTIFICATION_CHANNEL.v1, NODUOS.NOTIFICATION.NOTIFICATION_PROVIDER.v1, NODUOS.NOTIFICATION.NOTIFICATION_DELIVERY_ATTEMPT.v1, NODUOS.NOTIFICATION.NOTIFICATION_DELIVERY_LOG.v1, NODUOS.NOTIFICATION.NOTIFICATION_PREFERENCE.v1, NODUOS.NOTIFICATION.NOTIFICATION_OPT_IN.v1 +2 outros |
| Automações | 10 | NODUOS.AUTOMATION.AUTOMATION_WORKFLOW.v1, NODUOS.AUTOMATION.AUTOMATION_TRIGGER.v1, NODUOS.AUTOMATION.AUTOMATION_CONDITION.v1, NODUOS.AUTOMATION.AUTOMATION_ACTION_REQUEST.v1, NODUOS.AUTOMATION.AUTOMATION_EXECUTION.v1, NODUOS.AUTOMATION.AUTOMATION_RETRY.v1, NODUOS.AUTOMATION.AUTOMATION_PAUSE.v1, NODUOS.AUTOMATION.AUTOMATION_HUMAN_APPROVAL.v1 +2 outros |
| Marketplace de Integrações | 10 | NODUOS.MARKETPLACE.MARKETPLACE_CONNECTOR.v1, NODUOS.MARKETPLACE.INTEGRATION_PROVIDER.v1, NODUOS.MARKETPLACE.ADAPTER_PACKAGE.v1, NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION.v1, NODUOS.MARKETPLACE.CONNECTOR_VERSION.v1, NODUOS.MARKETPLACE.CONNECTOR_COMPATIBILITY.v1, NODUOS.MARKETPLACE.CONNECTOR_CREDENTIAL_REFERENCE.v1, NODUOS.MARKETPLACE.CONNECTOR_WEBHOOK_ENDPOINT.v1 +2 outros |
| Auditoria e Compliance | 9 | NODUOS.AUDIT.AUDIT_TRAIL.v1, NODUOS.AUDIT.AUDIT_QUERY.v1, NODUOS.AUDIT.AUDIT_EXPORT.v1, NODUOS.AUDIT.COMPLIANCE_CASE.v1, NODUOS.AUDIT.COMPLIANCE_INVESTIGATION.v1, NODUOS.AUDIT.EVIDENCE_REFERENCE.v1, NODUOS.AUDIT.CHAIN_OF_CUSTODY_RECORD.v1, NODUOS.AUDIT.AUDIT_ALERT.v1 +1 outros |
| Segurança e LGPD | 14 | NODUOS.SECURITY.SECURITY_POLICY.v1, NODUOS.SECURITY.PRIVACY_POLICY.v1, NODUOS.SECURITY.DATA_PROTECTION_POLICY.v1, NODUOS.SECURITY.CONSENT_POLICY.v1, NODUOS.SECURITY.CONSENT_RECORD.v1, NODUOS.SECURITY.DATA_PROCESSING_RECORD.v1, NODUOS.SECURITY.DATA_SUBJECT_REQUEST.v1, NODUOS.SECURITY.RETENTION_POLICY.v1 +6 outros |
| Suporte e Operação | 11 | NODUOS.SUPPORT.PLATFORM_SUPPORT_CASE.v1, NODUOS.SUPPORT.SUPPORT_OPERATION_CASE.v1, NODUOS.SUPPORT.SERVICE_INCIDENT.v1, NODUOS.SUPPORT.MAINTENANCE_WINDOW.v1, NODUOS.SUPPORT.SERVICE_STATUS.v1, NODUOS.SUPPORT.DIAGNOSTIC_REQUEST.v1, NODUOS.SUPPORT.REMOTE_SUPPORT_SESSION.v1, NODUOS.SUPPORT.RUNBOOK.v1 +3 outros |

## 41. Matriz de contratos que exigem política de Segurança e LGPD

Todo contrato com dado pessoal, imagem, vídeo, financeiro, visitante, evidência, segredo, suporte, diagnóstico, terceiro ou exportação exige política aplicável.

| Módulo | Quantidade | Contratos principais |
|---|---:|---|
| Core Platform | 2 | NODUOS.CORE.CORE_AUDIT_TRAIL.v1, NODUOS.CORE.CORE_SECURITY_LOG.v1 |
| Master | 4 | NODUOS.MASTER.MASTER_MODULE_RELEASE_POLICY.v1, NODUOS.MASTER.MASTER_COMMERCIAL_PLAN_POLICY.v1, NODUOS.MASTER.MASTER_LICENSE_LIMIT_POLICY.v1, NODUOS.MASTER.MASTER_SENSITIVE_EXPORT_REQUEST.v1 |
| Parceiros | 2 | NODUOS.PARTNER.PARTNER_GATEWAY_REGISTRATION_REQUEST.v1, NODUOS.PARTNER.PARTNER_DEVICE_REGISTRATION_REQUEST.v1 |
| Organizações | 0 | Nenhum por regra desta versão |
| Pessoas e Clientes | 11 | NODUOS.PEOPLE.PERSON_PROFILE.v1, NODUOS.PEOPLE.CLIENT_PROFILE.v1, NODUOS.PEOPLE.PERSON_DOCUMENT.v1, NODUOS.PEOPLE.PERSON_CONTACT.v1, NODUOS.PEOPLE.PERSON_CONSENT.v1, NODUOS.PEOPLE.PERSON_UNIT_LINK.v1, NODUOS.PEOPLE.PERSON_ORGANIZATION_LINK.v1, NODUOS.PEOPLE.DEPENDENT_PROFILE.v1 +3 outros |
| Unidades, Blocos, Áreas e Ambientes | 0 | Nenhum por regra desta versão |
| Herança e Permissões | 10 | NODUOS.POLICY.ADVANCED_POLICY.v1, NODUOS.POLICY.POLICY_CONDITION.v1, NODUOS.POLICY.POLICY_EFFECT.v1, NODUOS.POLICY.POLICY_SCOPE.v1, NODUOS.POLICY.DELEGATION_RULE.v1, NODUOS.POLICY.POLICY_EXCEPTION.v1, NODUOS.POLICY.EFFECTIVE_PERMISSION_READ_MODEL.v1, NODUOS.POLICY.ACCESS_SIMULATION.v1 +2 outros |
| Gateway Local / Mikrotik / Tunnel | 12 | NODUOS.GATEWAY.GATEWAY_RECORD.v1, NODUOS.GATEWAY.GATEWAY_AGENT.v1, NODUOS.GATEWAY.GATEWAY_CREDENTIAL_REFERENCE.v1, NODUOS.GATEWAY.TUNNEL_SESSION.v1, NODUOS.GATEWAY.GATEWAY_HEALTH_READ_MODEL.v1, NODUOS.GATEWAY.GATEWAY_DIAGNOSTIC.v1, NODUOS.GATEWAY.GATEWAY_COMMAND.v1, NODUOS.GATEWAY.GATEWAY_COMMAND_RESULT.v1 +4 outros |
| Dispositivos | 12 | NODUOS.DEVICE.DEVICE_RECORD.v1, NODUOS.DEVICE.DEVICE_REFERENCE.v1, NODUOS.DEVICE.DEVICE_IDENTITY.v1, NODUOS.DEVICE.DEVICE_CAPABILITY.v1, NODUOS.DEVICE.DEVICE_HEALTH_READ_MODEL.v1, NODUOS.DEVICE.DEVICE_STATUS_READ_MODEL.v1, NODUOS.DEVICE.DEVICE_DIAGNOSTIC.v1, NODUOS.DEVICE.DEVICE_TELEMETRY.v1 +4 outros |
| Controle de Acesso | 12 | NODUOS.ACCESS.ACCESS_POINT.v1, NODUOS.ACCESS.ACCESS_CREDENTIAL.v1, NODUOS.ACCESS.ACCESS_RULE.v1, NODUOS.ACCESS.ACCESS_POLICY_BINDING.v1, NODUOS.ACCESS.ACCESS_SCHEDULE.v1, NODUOS.ACCESS.ACCESS_ATTEMPT_EVENT.v1, NODUOS.ACCESS.ACCESS_EVENT.v1, NODUOS.ACCESS.ACCESS_EXECUTION_COMMAND.v1 +4 outros |
| Câmeras / VMS | 10 | NODUOS.CAMERA.CAMERA_RESOURCE.v1, NODUOS.CAMERA.CAMERA_STREAM_ACCESS.v1, NODUOS.CAMERA.CAMERA_LIVE_VIEW_REQUEST.v1, NODUOS.CAMERA.CAMERA_PLAYBACK_REQUEST.v1, NODUOS.CAMERA.CAMERA_CLIP.v1, NODUOS.CAMERA.CAMERA_SNAPSHOT.v1, NODUOS.CAMERA.CAMERA_EVIDENCE_REFERENCE.v1, NODUOS.CAMERA.CAMERA_AUTHORIZATION_SCOPE.v1 +2 outros |
| Alarmes | 12 | NODUOS.ALARM.ALARM_PANEL.v1, NODUOS.ALARM.ALARM_ZONE.v1, NODUOS.ALARM.ALARM_SENSOR.v1, NODUOS.ALARM.ALARM_ARMING_STATE.v1, NODUOS.ALARM.ALARM_EVENT.v1, NODUOS.ALARM.ALARM_TRIGGER_EVENT.v1, NODUOS.ALARM.PANIC_EVENT.v1, NODUOS.ALARM.ALARM_ESCALATION.v1 +4 outros |
| Financeiro | 12 | NODUOS.FINANCE.INVOICE.v1, NODUOS.FINANCE.CHARGE.v1, NODUOS.FINANCE.PAYMENT.v1, NODUOS.FINANCE.PAYMENT_STATUS.v1, NODUOS.FINANCE.RECEIPT.v1, NODUOS.FINANCE.OVERDUE_EVENT.v1, NODUOS.FINANCE.FINANCIAL_AGREEMENT.v1, NODUOS.FINANCE.COMMISSION.v1 +4 outros |
| Convites e Visitantes | 9 | NODUOS.VISITOR.VISITOR_INVITE.v1, NODUOS.VISITOR.TEMPORARY_VISITOR_PROFILE.v1, NODUOS.VISITOR.TEMPORARY_QR_CODE.v1, NODUOS.VISITOR.VISIT_WINDOW.v1, NODUOS.VISITOR.VISIT_APPROVAL.v1, NODUOS.VISITOR.VISITOR_CHECK_IN.v1, NODUOS.VISITOR.VISITOR_CHECK_OUT.v1, NODUOS.VISITOR.VISITOR_ACCESS_REFERENCE.v1 +1 outros |
| Tickets | 9 | NODUOS.TICKET.OPERATIONAL_TICKET.v1, NODUOS.TICKET.TICKET_COMMENT.v1, NODUOS.TICKET.TICKET_ATTACHMENT_REFERENCE.v1, NODUOS.TICKET.TICKET_SLA.v1, NODUOS.TICKET.TICKET_ESCALATION.v1, NODUOS.TICKET.TICKET_RESOLUTION.v1, NODUOS.TICKET.TICKET_REOPEN.v1, NODUOS.TICKET.TICKET_LINKED_RESOURCE_REFERENCE.v1 +1 outros |
| Mural Informativo | 0 | Nenhum por regra desta versão |
| Reservas | 13 | NODUOS.RESERVATION.RESERVABLE_RESOURCE.v1, NODUOS.RESERVATION.RESERVATION.v1, NODUOS.RESERVATION.AVAILABILITY_QUERY.v1, NODUOS.RESERVATION.RESERVATION_HOLD.v1, NODUOS.RESERVATION.RESERVATION_APPROVAL.v1, NODUOS.RESERVATION.RESERVATION_CANCELLATION.v1, NODUOS.RESERVATION.RESERVATION_CHECK_IN.v1, NODUOS.RESERVATION.RESERVATION_CHECK_OUT.v1 +5 outros |
| Relatórios / BI | 2 | NODUOS.BI.BI_EXPORT_REQUEST.v1, NODUOS.BI.BI_EXPORT_LOG.v1 |
| White-label | 13 | NODUOS.WL.WHITE_LABEL_PROFILE.v1, NODUOS.WL.WHITE_LABEL_THEME.v1, NODUOS.WL.THEME_TOKEN.v1, NODUOS.WL.COLOR_PALETTE.v1, NODUOS.WL.BRAND_ASSET_REFERENCE.v1, NODUOS.WL.CUSTOM_DOMAIN.v1, NODUOS.WL.DOMAIN_VERIFICATION.v1, NODUOS.WL.CERTIFICATE_REFERENCE.v1 +5 outros |
| Notificações | 10 | NODUOS.NOTIFICATION.NOTIFICATION_REQUEST.v1, NODUOS.NOTIFICATION.NOTIFICATION_TEMPLATE.v1, NODUOS.NOTIFICATION.NOTIFICATION_CHANNEL.v1, NODUOS.NOTIFICATION.NOTIFICATION_PROVIDER.v1, NODUOS.NOTIFICATION.NOTIFICATION_DELIVERY_ATTEMPT.v1, NODUOS.NOTIFICATION.NOTIFICATION_DELIVERY_LOG.v1, NODUOS.NOTIFICATION.NOTIFICATION_PREFERENCE.v1, NODUOS.NOTIFICATION.NOTIFICATION_OPT_IN.v1 +2 outros |
| Automações | 10 | NODUOS.AUTOMATION.AUTOMATION_WORKFLOW.v1, NODUOS.AUTOMATION.AUTOMATION_TRIGGER.v1, NODUOS.AUTOMATION.AUTOMATION_CONDITION.v1, NODUOS.AUTOMATION.AUTOMATION_ACTION_REQUEST.v1, NODUOS.AUTOMATION.AUTOMATION_EXECUTION.v1, NODUOS.AUTOMATION.AUTOMATION_RETRY.v1, NODUOS.AUTOMATION.AUTOMATION_PAUSE.v1, NODUOS.AUTOMATION.AUTOMATION_HUMAN_APPROVAL.v1 +2 outros |
| Marketplace de Integrações | 10 | NODUOS.MARKETPLACE.MARKETPLACE_CONNECTOR.v1, NODUOS.MARKETPLACE.INTEGRATION_PROVIDER.v1, NODUOS.MARKETPLACE.ADAPTER_PACKAGE.v1, NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION.v1, NODUOS.MARKETPLACE.CONNECTOR_VERSION.v1, NODUOS.MARKETPLACE.CONNECTOR_COMPATIBILITY.v1, NODUOS.MARKETPLACE.CONNECTOR_CREDENTIAL_REFERENCE.v1, NODUOS.MARKETPLACE.CONNECTOR_WEBHOOK_ENDPOINT.v1 +2 outros |
| Auditoria e Compliance | 9 | NODUOS.AUDIT.AUDIT_TRAIL.v1, NODUOS.AUDIT.AUDIT_QUERY.v1, NODUOS.AUDIT.AUDIT_EXPORT.v1, NODUOS.AUDIT.COMPLIANCE_CASE.v1, NODUOS.AUDIT.COMPLIANCE_INVESTIGATION.v1, NODUOS.AUDIT.EVIDENCE_REFERENCE.v1, NODUOS.AUDIT.CHAIN_OF_CUSTODY_RECORD.v1, NODUOS.AUDIT.AUDIT_ALERT.v1 +1 outros |
| Segurança e LGPD | 14 | NODUOS.SECURITY.SECURITY_POLICY.v1, NODUOS.SECURITY.PRIVACY_POLICY.v1, NODUOS.SECURITY.DATA_PROTECTION_POLICY.v1, NODUOS.SECURITY.CONSENT_POLICY.v1, NODUOS.SECURITY.CONSENT_RECORD.v1, NODUOS.SECURITY.DATA_PROCESSING_RECORD.v1, NODUOS.SECURITY.DATA_SUBJECT_REQUEST.v1, NODUOS.SECURITY.RETENTION_POLICY.v1 +6 outros |
| Suporte e Operação | 11 | NODUOS.SUPPORT.PLATFORM_SUPPORT_CASE.v1, NODUOS.SUPPORT.SUPPORT_OPERATION_CASE.v1, NODUOS.SUPPORT.SERVICE_INCIDENT.v1, NODUOS.SUPPORT.MAINTENANCE_WINDOW.v1, NODUOS.SUPPORT.SERVICE_STATUS.v1, NODUOS.SUPPORT.DIAGNOSTIC_REQUEST.v1, NODUOS.SUPPORT.REMOTE_SUPPORT_SESSION.v1, NODUOS.SUPPORT.RUNBOOK.v1 +3 outros |

## 42. Matriz de contratos que exigem auditoria

Todo contrato crítico, sensível ou de consulta sensível exige auditoria.

| Módulo | Quantidade | Contratos principais |
|---|---:|---|
| Core Platform | 3 | NODUOS.CORE.EVENT_ENVELOPE.v1, NODUOS.CORE.CORE_AUDIT_TRAIL.v1, NODUOS.CORE.CORE_SECURITY_LOG.v1 |
| Master | 5 | NODUOS.MASTER.MASTER_MODULE_RELEASE_POLICY.v1, NODUOS.MASTER.MASTER_COMMERCIAL_PLAN_POLICY.v1, NODUOS.MASTER.MASTER_LICENSE_LIMIT_POLICY.v1, NODUOS.MASTER.MASTER_GLOBAL_OVERVIEW_READ_MODEL.v1, NODUOS.MASTER.MASTER_SENSITIVE_EXPORT_REQUEST.v1 |
| Parceiros | 8 | NODUOS.PARTNER.PARTNER_ORGANIZATION_PORTFOLIO_READ_MODEL.v1, NODUOS.PARTNER.PARTNER_DEPLOYMENT_OVERVIEW_READ_MODEL.v1, NODUOS.PARTNER.PARTNER_GATEWAY_REGISTRATION_REQUEST.v1, NODUOS.PARTNER.PARTNER_DEVICE_REGISTRATION_REQUEST.v1, NODUOS.PARTNER.PARTNER_MODULE_AVAILABILITY_READ_MODEL.v1, NODUOS.PARTNER.PARTNER_PLAN_VIEW_READ_MODEL.v1, NODUOS.PARTNER.PARTNER_LICENSE_VIEW_READ_MODEL.v1, NODUOS.PARTNER.PARTNER_WHITE_LABEL_PERMISSION_READ_MODEL.v1 |
| Organizações | 6 | NODUOS.ORG.ORGANIZATION_STATUS.v1, NODUOS.ORG.ORGANIZATION_MODULE_AVAILABILITY_READ_MODEL.v1, NODUOS.ORG.ORGANIZATION_STRUCTURE_SUMMARY_READ_MODEL.v1, NODUOS.ORG.ORGANIZATION_PEOPLE_SUMMARY_READ_MODEL.v1, NODUOS.ORG.ORGANIZATION_GATEWAY_SUMMARY_READ_MODEL.v1, NODUOS.ORG.ORGANIZATION_DEVICE_SUMMARY_READ_MODEL.v1 |
| Pessoas e Clientes | 11 | NODUOS.PEOPLE.PERSON_PROFILE.v1, NODUOS.PEOPLE.CLIENT_PROFILE.v1, NODUOS.PEOPLE.PERSON_DOCUMENT.v1, NODUOS.PEOPLE.PERSON_CONTACT.v1, NODUOS.PEOPLE.PERSON_CONSENT.v1, NODUOS.PEOPLE.PERSON_UNIT_LINK.v1, NODUOS.PEOPLE.PERSON_ORGANIZATION_LINK.v1, NODUOS.PEOPLE.DEPENDENT_PROFILE.v1 +3 outros |
| Unidades, Blocos, Áreas e Ambientes | 1 | NODUOS.STRUCTURE.STRUCTURE_PATH_READ_MODEL.v1 |
| Herança e Permissões | 10 | NODUOS.POLICY.ADVANCED_POLICY.v1, NODUOS.POLICY.POLICY_CONDITION.v1, NODUOS.POLICY.POLICY_EFFECT.v1, NODUOS.POLICY.POLICY_SCOPE.v1, NODUOS.POLICY.DELEGATION_RULE.v1, NODUOS.POLICY.POLICY_EXCEPTION.v1, NODUOS.POLICY.EFFECTIVE_PERMISSION_READ_MODEL.v1, NODUOS.POLICY.ACCESS_SIMULATION.v1 +2 outros |
| Gateway Local / Mikrotik / Tunnel | 12 | NODUOS.GATEWAY.GATEWAY_RECORD.v1, NODUOS.GATEWAY.GATEWAY_AGENT.v1, NODUOS.GATEWAY.GATEWAY_CREDENTIAL_REFERENCE.v1, NODUOS.GATEWAY.TUNNEL_SESSION.v1, NODUOS.GATEWAY.GATEWAY_HEALTH_READ_MODEL.v1, NODUOS.GATEWAY.GATEWAY_DIAGNOSTIC.v1, NODUOS.GATEWAY.GATEWAY_COMMAND.v1, NODUOS.GATEWAY.GATEWAY_COMMAND_RESULT.v1 +4 outros |
| Dispositivos | 12 | NODUOS.DEVICE.DEVICE_RECORD.v1, NODUOS.DEVICE.DEVICE_REFERENCE.v1, NODUOS.DEVICE.DEVICE_IDENTITY.v1, NODUOS.DEVICE.DEVICE_CAPABILITY.v1, NODUOS.DEVICE.DEVICE_HEALTH_READ_MODEL.v1, NODUOS.DEVICE.DEVICE_STATUS_READ_MODEL.v1, NODUOS.DEVICE.DEVICE_DIAGNOSTIC.v1, NODUOS.DEVICE.DEVICE_TELEMETRY.v1 +4 outros |
| Controle de Acesso | 12 | NODUOS.ACCESS.ACCESS_POINT.v1, NODUOS.ACCESS.ACCESS_CREDENTIAL.v1, NODUOS.ACCESS.ACCESS_RULE.v1, NODUOS.ACCESS.ACCESS_POLICY_BINDING.v1, NODUOS.ACCESS.ACCESS_SCHEDULE.v1, NODUOS.ACCESS.ACCESS_ATTEMPT_EVENT.v1, NODUOS.ACCESS.ACCESS_EVENT.v1, NODUOS.ACCESS.ACCESS_EXECUTION_COMMAND.v1 +4 outros |
| Câmeras / VMS | 10 | NODUOS.CAMERA.CAMERA_RESOURCE.v1, NODUOS.CAMERA.CAMERA_STREAM_ACCESS.v1, NODUOS.CAMERA.CAMERA_LIVE_VIEW_REQUEST.v1, NODUOS.CAMERA.CAMERA_PLAYBACK_REQUEST.v1, NODUOS.CAMERA.CAMERA_CLIP.v1, NODUOS.CAMERA.CAMERA_SNAPSHOT.v1, NODUOS.CAMERA.CAMERA_EVIDENCE_REFERENCE.v1, NODUOS.CAMERA.CAMERA_AUTHORIZATION_SCOPE.v1 +2 outros |
| Alarmes | 12 | NODUOS.ALARM.ALARM_PANEL.v1, NODUOS.ALARM.ALARM_ZONE.v1, NODUOS.ALARM.ALARM_SENSOR.v1, NODUOS.ALARM.ALARM_ARMING_STATE.v1, NODUOS.ALARM.ALARM_EVENT.v1, NODUOS.ALARM.ALARM_TRIGGER_EVENT.v1, NODUOS.ALARM.PANIC_EVENT.v1, NODUOS.ALARM.ALARM_ESCALATION.v1 +4 outros |
| Financeiro | 12 | NODUOS.FINANCE.INVOICE.v1, NODUOS.FINANCE.CHARGE.v1, NODUOS.FINANCE.PAYMENT.v1, NODUOS.FINANCE.PAYMENT_STATUS.v1, NODUOS.FINANCE.RECEIPT.v1, NODUOS.FINANCE.OVERDUE_EVENT.v1, NODUOS.FINANCE.FINANCIAL_AGREEMENT.v1, NODUOS.FINANCE.COMMISSION.v1 +4 outros |
| Convites e Visitantes | 9 | NODUOS.VISITOR.VISITOR_INVITE.v1, NODUOS.VISITOR.TEMPORARY_VISITOR_PROFILE.v1, NODUOS.VISITOR.TEMPORARY_QR_CODE.v1, NODUOS.VISITOR.VISIT_WINDOW.v1, NODUOS.VISITOR.VISIT_APPROVAL.v1, NODUOS.VISITOR.VISITOR_CHECK_IN.v1, NODUOS.VISITOR.VISITOR_CHECK_OUT.v1, NODUOS.VISITOR.VISITOR_ACCESS_REFERENCE.v1 +1 outros |
| Tickets | 9 | NODUOS.TICKET.OPERATIONAL_TICKET.v1, NODUOS.TICKET.TICKET_COMMENT.v1, NODUOS.TICKET.TICKET_ATTACHMENT_REFERENCE.v1, NODUOS.TICKET.TICKET_SLA.v1, NODUOS.TICKET.TICKET_ESCALATION.v1, NODUOS.TICKET.TICKET_RESOLUTION.v1, NODUOS.TICKET.TICKET_REOPEN.v1, NODUOS.TICKET.TICKET_LINKED_RESOURCE_REFERENCE.v1 +1 outros |
| Mural Informativo | 2 | NODUOS.MURAL.ANNOUNCEMENT_READ_MODEL.v1, NODUOS.MURAL.ANNOUNCEMENT_ARCHIVED_EVENT.v1 |
| Reservas | 13 | NODUOS.RESERVATION.RESERVABLE_RESOURCE.v1, NODUOS.RESERVATION.RESERVATION.v1, NODUOS.RESERVATION.AVAILABILITY_QUERY.v1, NODUOS.RESERVATION.RESERVATION_HOLD.v1, NODUOS.RESERVATION.RESERVATION_APPROVAL.v1, NODUOS.RESERVATION.RESERVATION_CANCELLATION.v1, NODUOS.RESERVATION.RESERVATION_CHECK_IN.v1, NODUOS.RESERVATION.RESERVATION_CHECK_OUT.v1 +5 outros |
| Relatórios / BI | 4 | NODUOS.BI.BI_EXPORT_REQUEST.v1, NODUOS.BI.BI_EXPORT_LOG.v1, NODUOS.BI.BI_READ_MODEL_SUBSCRIPTION.v1, NODUOS.BI.BI_ANALYTICS_READ_MODEL.v1 |
| White-label | 13 | NODUOS.WL.WHITE_LABEL_PROFILE.v1, NODUOS.WL.WHITE_LABEL_THEME.v1, NODUOS.WL.THEME_TOKEN.v1, NODUOS.WL.COLOR_PALETTE.v1, NODUOS.WL.BRAND_ASSET_REFERENCE.v1, NODUOS.WL.CUSTOM_DOMAIN.v1, NODUOS.WL.DOMAIN_VERIFICATION.v1, NODUOS.WL.CERTIFICATE_REFERENCE.v1 +5 outros |
| Notificações | 10 | NODUOS.NOTIFICATION.NOTIFICATION_REQUEST.v1, NODUOS.NOTIFICATION.NOTIFICATION_TEMPLATE.v1, NODUOS.NOTIFICATION.NOTIFICATION_CHANNEL.v1, NODUOS.NOTIFICATION.NOTIFICATION_PROVIDER.v1, NODUOS.NOTIFICATION.NOTIFICATION_DELIVERY_ATTEMPT.v1, NODUOS.NOTIFICATION.NOTIFICATION_DELIVERY_LOG.v1, NODUOS.NOTIFICATION.NOTIFICATION_PREFERENCE.v1, NODUOS.NOTIFICATION.NOTIFICATION_OPT_IN.v1 +2 outros |
| Automações | 10 | NODUOS.AUTOMATION.AUTOMATION_WORKFLOW.v1, NODUOS.AUTOMATION.AUTOMATION_TRIGGER.v1, NODUOS.AUTOMATION.AUTOMATION_CONDITION.v1, NODUOS.AUTOMATION.AUTOMATION_ACTION_REQUEST.v1, NODUOS.AUTOMATION.AUTOMATION_EXECUTION.v1, NODUOS.AUTOMATION.AUTOMATION_RETRY.v1, NODUOS.AUTOMATION.AUTOMATION_PAUSE.v1, NODUOS.AUTOMATION.AUTOMATION_HUMAN_APPROVAL.v1 +2 outros |
| Marketplace de Integrações | 10 | NODUOS.MARKETPLACE.MARKETPLACE_CONNECTOR.v1, NODUOS.MARKETPLACE.INTEGRATION_PROVIDER.v1, NODUOS.MARKETPLACE.ADAPTER_PACKAGE.v1, NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION.v1, NODUOS.MARKETPLACE.CONNECTOR_VERSION.v1, NODUOS.MARKETPLACE.CONNECTOR_COMPATIBILITY.v1, NODUOS.MARKETPLACE.CONNECTOR_CREDENTIAL_REFERENCE.v1, NODUOS.MARKETPLACE.CONNECTOR_WEBHOOK_ENDPOINT.v1 +2 outros |
| Auditoria e Compliance | 9 | NODUOS.AUDIT.AUDIT_TRAIL.v1, NODUOS.AUDIT.AUDIT_QUERY.v1, NODUOS.AUDIT.AUDIT_EXPORT.v1, NODUOS.AUDIT.COMPLIANCE_CASE.v1, NODUOS.AUDIT.COMPLIANCE_INVESTIGATION.v1, NODUOS.AUDIT.EVIDENCE_REFERENCE.v1, NODUOS.AUDIT.CHAIN_OF_CUSTODY_RECORD.v1, NODUOS.AUDIT.AUDIT_ALERT.v1 +1 outros |
| Segurança e LGPD | 14 | NODUOS.SECURITY.SECURITY_POLICY.v1, NODUOS.SECURITY.PRIVACY_POLICY.v1, NODUOS.SECURITY.DATA_PROTECTION_POLICY.v1, NODUOS.SECURITY.CONSENT_POLICY.v1, NODUOS.SECURITY.CONSENT_RECORD.v1, NODUOS.SECURITY.DATA_PROCESSING_RECORD.v1, NODUOS.SECURITY.DATA_SUBJECT_REQUEST.v1, NODUOS.SECURITY.RETENTION_POLICY.v1 +6 outros |
| Suporte e Operação | 11 | NODUOS.SUPPORT.PLATFORM_SUPPORT_CASE.v1, NODUOS.SUPPORT.SUPPORT_OPERATION_CASE.v1, NODUOS.SUPPORT.SERVICE_INCIDENT.v1, NODUOS.SUPPORT.MAINTENANCE_WINDOW.v1, NODUOS.SUPPORT.SERVICE_STATUS.v1, NODUOS.SUPPORT.DIAGNOSTIC_REQUEST.v1, NODUOS.SUPPORT.REMOTE_SUPPORT_SESSION.v1, NODUOS.SUPPORT.RUNBOOK.v1 +3 outros |

## 43. Matriz de contratos que exigem idempotência

Todo comando crítico e toda mutação com risco de duplicidade exige idempotency_key ou mecanismo equivalente.

| Módulo | Quantidade | Contratos principais |
|---|---:|---|
| Core Platform | 0 | Nenhum por regra desta versão |
| Master | 4 | NODUOS.MASTER.MASTER_MODULE_RELEASE_POLICY.v1, NODUOS.MASTER.MASTER_COMMERCIAL_PLAN_POLICY.v1, NODUOS.MASTER.MASTER_LICENSE_LIMIT_POLICY.v1, NODUOS.MASTER.MASTER_SENSITIVE_EXPORT_REQUEST.v1 |
| Parceiros | 2 | NODUOS.PARTNER.PARTNER_GATEWAY_REGISTRATION_REQUEST.v1, NODUOS.PARTNER.PARTNER_DEVICE_REGISTRATION_REQUEST.v1 |
| Organizações | 0 | Nenhum por regra desta versão |
| Pessoas e Clientes | 0 | Nenhum por regra desta versão |
| Unidades, Blocos, Áreas e Ambientes | 0 | Nenhum por regra desta versão |
| Herança e Permissões | 9 | NODUOS.POLICY.ADVANCED_POLICY.v1, NODUOS.POLICY.POLICY_CONDITION.v1, NODUOS.POLICY.POLICY_EFFECT.v1, NODUOS.POLICY.POLICY_SCOPE.v1, NODUOS.POLICY.DELEGATION_RULE.v1, NODUOS.POLICY.POLICY_EXCEPTION.v1, NODUOS.POLICY.ACCESS_SIMULATION.v1, NODUOS.POLICY.POLICY_EVALUATION.v1 +1 outros |
| Gateway Local / Mikrotik / Tunnel | 3 | NODUOS.GATEWAY.GATEWAY_CREDENTIAL_REFERENCE.v1, NODUOS.GATEWAY.GATEWAY_DIAGNOSTIC.v1, NODUOS.GATEWAY.GATEWAY_COMMAND.v1 |
| Dispositivos | 2 | NODUOS.DEVICE.DEVICE_DIAGNOSTIC.v1, NODUOS.DEVICE.DEVICE_CREDENTIAL_REFERENCE.v1 |
| Controle de Acesso | 12 | NODUOS.ACCESS.ACCESS_POINT.v1, NODUOS.ACCESS.ACCESS_CREDENTIAL.v1, NODUOS.ACCESS.ACCESS_RULE.v1, NODUOS.ACCESS.ACCESS_POLICY_BINDING.v1, NODUOS.ACCESS.ACCESS_SCHEDULE.v1, NODUOS.ACCESS.ACCESS_ATTEMPT_EVENT.v1, NODUOS.ACCESS.ACCESS_EVENT.v1, NODUOS.ACCESS.ACCESS_EXECUTION_COMMAND.v1 +4 outros |
| Câmeras / VMS | 6 | NODUOS.CAMERA.CAMERA_STREAM_ACCESS.v1, NODUOS.CAMERA.CAMERA_LIVE_VIEW_REQUEST.v1, NODUOS.CAMERA.CAMERA_PLAYBACK_REQUEST.v1, NODUOS.CAMERA.CAMERA_SNAPSHOT.v1, NODUOS.CAMERA.CAMERA_EVIDENCE_REFERENCE.v1, NODUOS.CAMERA.VIDEO_RETENTION_POLICY_BINDING.v1 |
| Alarmes | 0 | Nenhum por regra desta versão |
| Financeiro | 4 | NODUOS.FINANCE.INVOICE.v1, NODUOS.FINANCE.CHARGE.v1, NODUOS.FINANCE.PAYMENT.v1, NODUOS.FINANCE.PAYMENT_STATUS.v1 |
| Convites e Visitantes | 3 | NODUOS.VISITOR.VISITOR_INVITE.v1, NODUOS.VISITOR.TEMPORARY_QR_CODE.v1, NODUOS.VISITOR.VISITOR_ACCESS_REFERENCE.v1 |
| Tickets | 1 | NODUOS.TICKET.TICKET_REOPEN.v1 |
| Mural Informativo | 0 | Nenhum por regra desta versão |
| Reservas | 13 | NODUOS.RESERVATION.RESERVABLE_RESOURCE.v1, NODUOS.RESERVATION.RESERVATION.v1, NODUOS.RESERVATION.AVAILABILITY_QUERY.v1, NODUOS.RESERVATION.RESERVATION_HOLD.v1, NODUOS.RESERVATION.RESERVATION_APPROVAL.v1, NODUOS.RESERVATION.RESERVATION_CANCELLATION.v1, NODUOS.RESERVATION.RESERVATION_CHECK_IN.v1, NODUOS.RESERVATION.RESERVATION_CHECK_OUT.v1 +5 outros |
| Relatórios / BI | 2 | NODUOS.BI.BI_EXPORT_REQUEST.v1, NODUOS.BI.BI_EXPORT_LOG.v1 |
| White-label | 2 | NODUOS.WL.BRAND_PUBLISHING_REQUEST.v1, NODUOS.WL.BRAND_PUBLISHING_RESULT.v1 |
| Notificações | 10 | NODUOS.NOTIFICATION.NOTIFICATION_REQUEST.v1, NODUOS.NOTIFICATION.NOTIFICATION_TEMPLATE.v1, NODUOS.NOTIFICATION.NOTIFICATION_CHANNEL.v1, NODUOS.NOTIFICATION.NOTIFICATION_PROVIDER.v1, NODUOS.NOTIFICATION.NOTIFICATION_DELIVERY_ATTEMPT.v1, NODUOS.NOTIFICATION.NOTIFICATION_DELIVERY_LOG.v1, NODUOS.NOTIFICATION.NOTIFICATION_PREFERENCE.v1, NODUOS.NOTIFICATION.NOTIFICATION_OPT_IN.v1 +2 outros |
| Automações | 10 | NODUOS.AUTOMATION.AUTOMATION_WORKFLOW.v1, NODUOS.AUTOMATION.AUTOMATION_TRIGGER.v1, NODUOS.AUTOMATION.AUTOMATION_CONDITION.v1, NODUOS.AUTOMATION.AUTOMATION_ACTION_REQUEST.v1, NODUOS.AUTOMATION.AUTOMATION_EXECUTION.v1, NODUOS.AUTOMATION.AUTOMATION_RETRY.v1, NODUOS.AUTOMATION.AUTOMATION_PAUSE.v1, NODUOS.AUTOMATION.AUTOMATION_HUMAN_APPROVAL.v1 +2 outros |
| Marketplace de Integrações | 6 | NODUOS.MARKETPLACE.MARKETPLACE_CONNECTOR.v1, NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION.v1, NODUOS.MARKETPLACE.CONNECTOR_VERSION.v1, NODUOS.MARKETPLACE.CONNECTOR_COMPATIBILITY.v1, NODUOS.MARKETPLACE.CONNECTOR_CREDENTIAL_REFERENCE.v1, NODUOS.MARKETPLACE.CONNECTOR_WEBHOOK_ENDPOINT.v1 |
| Auditoria e Compliance | 2 | NODUOS.AUDIT.AUDIT_EXPORT.v1, NODUOS.AUDIT.EVIDENCE_REFERENCE.v1 |
| Segurança e LGPD | 10 | NODUOS.SECURITY.SECURITY_POLICY.v1, NODUOS.SECURITY.PRIVACY_POLICY.v1, NODUOS.SECURITY.DATA_PROTECTION_POLICY.v1, NODUOS.SECURITY.CONSENT_POLICY.v1, NODUOS.SECURITY.DATA_SUBJECT_REQUEST.v1, NODUOS.SECURITY.RETENTION_POLICY.v1, NODUOS.SECURITY.MASKING_POLICY.v1, NODUOS.SECURITY.EXPORT_CONTROL_POLICY.v1 +2 outros |
| Suporte e Operação | 2 | NODUOS.SUPPORT.DIAGNOSTIC_REQUEST.v1, NODUOS.SUPPORT.REMOTE_SUPPORT_SESSION.v1 |

## 44. Matriz de contratos críticos

Contratos críticos envolvem execução, solicitação de ação sensível, exportação, segredo, evidência, suporte remoto, política crítica, instalação de conector ou ação física.

| Módulo | Quantidade | Contratos principais |
|---|---:|---|
| Core Platform | 0 | Nenhum por regra desta versão |
| Master | 4 | NODUOS.MASTER.MASTER_MODULE_RELEASE_POLICY.v1, NODUOS.MASTER.MASTER_COMMERCIAL_PLAN_POLICY.v1, NODUOS.MASTER.MASTER_LICENSE_LIMIT_POLICY.v1, NODUOS.MASTER.MASTER_SENSITIVE_EXPORT_REQUEST.v1 |
| Parceiros | 2 | NODUOS.PARTNER.PARTNER_GATEWAY_REGISTRATION_REQUEST.v1, NODUOS.PARTNER.PARTNER_DEVICE_REGISTRATION_REQUEST.v1 |
| Organizações | 0 | Nenhum por regra desta versão |
| Pessoas e Clientes | 0 | Nenhum por regra desta versão |
| Unidades, Blocos, Áreas e Ambientes | 0 | Nenhum por regra desta versão |
| Herança e Permissões | 10 | NODUOS.POLICY.ADVANCED_POLICY.v1, NODUOS.POLICY.POLICY_CONDITION.v1, NODUOS.POLICY.POLICY_EFFECT.v1, NODUOS.POLICY.POLICY_SCOPE.v1, NODUOS.POLICY.DELEGATION_RULE.v1, NODUOS.POLICY.POLICY_EXCEPTION.v1, NODUOS.POLICY.EFFECTIVE_PERMISSION_READ_MODEL.v1, NODUOS.POLICY.ACCESS_SIMULATION.v1 +2 outros |
| Gateway Local / Mikrotik / Tunnel | 4 | NODUOS.GATEWAY.GATEWAY_CREDENTIAL_REFERENCE.v1, NODUOS.GATEWAY.GATEWAY_DIAGNOSTIC.v1, NODUOS.GATEWAY.GATEWAY_COMMAND.v1, NODUOS.GATEWAY.GATEWAY_COMMAND_RESULT.v1 |
| Dispositivos | 2 | NODUOS.DEVICE.DEVICE_DIAGNOSTIC.v1, NODUOS.DEVICE.DEVICE_CREDENTIAL_REFERENCE.v1 |
| Controle de Acesso | 12 | NODUOS.ACCESS.ACCESS_POINT.v1, NODUOS.ACCESS.ACCESS_CREDENTIAL.v1, NODUOS.ACCESS.ACCESS_RULE.v1, NODUOS.ACCESS.ACCESS_POLICY_BINDING.v1, NODUOS.ACCESS.ACCESS_SCHEDULE.v1, NODUOS.ACCESS.ACCESS_ATTEMPT_EVENT.v1, NODUOS.ACCESS.ACCESS_EVENT.v1, NODUOS.ACCESS.ACCESS_EXECUTION_COMMAND.v1 +4 outros |
| Câmeras / VMS | 6 | NODUOS.CAMERA.CAMERA_STREAM_ACCESS.v1, NODUOS.CAMERA.CAMERA_LIVE_VIEW_REQUEST.v1, NODUOS.CAMERA.CAMERA_PLAYBACK_REQUEST.v1, NODUOS.CAMERA.CAMERA_SNAPSHOT.v1, NODUOS.CAMERA.CAMERA_EVIDENCE_REFERENCE.v1, NODUOS.CAMERA.VIDEO_RETENTION_POLICY_BINDING.v1 |
| Alarmes | 0 | Nenhum por regra desta versão |
| Financeiro | 4 | NODUOS.FINANCE.INVOICE.v1, NODUOS.FINANCE.CHARGE.v1, NODUOS.FINANCE.PAYMENT.v1, NODUOS.FINANCE.PAYMENT_STATUS.v1 |
| Convites e Visitantes | 2 | NODUOS.VISITOR.TEMPORARY_QR_CODE.v1, NODUOS.VISITOR.VISITOR_ACCESS_REFERENCE.v1 |
| Tickets | 1 | NODUOS.TICKET.TICKET_REOPEN.v1 |
| Mural Informativo | 0 | Nenhum por regra desta versão |
| Reservas | 2 | NODUOS.RESERVATION.RESERVATION_ACCESS_WINDOW.v1, NODUOS.RESERVATION.RESERVATION_CHARGE_REQUEST.v1 |
| Relatórios / BI | 2 | NODUOS.BI.BI_EXPORT_REQUEST.v1, NODUOS.BI.BI_EXPORT_LOG.v1 |
| White-label | 2 | NODUOS.WL.BRAND_PUBLISHING_REQUEST.v1, NODUOS.WL.BRAND_PUBLISHING_RESULT.v1 |
| Notificações | 1 | NODUOS.NOTIFICATION.NOTIFICATION_REQUEST.v1 |
| Automações | 2 | NODUOS.AUTOMATION.AUTOMATION_ACTION_REQUEST.v1, NODUOS.AUTOMATION.AUTOMATION_ACTION_RESULT.v1 |
| Marketplace de Integrações | 6 | NODUOS.MARKETPLACE.MARKETPLACE_CONNECTOR.v1, NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION.v1, NODUOS.MARKETPLACE.CONNECTOR_VERSION.v1, NODUOS.MARKETPLACE.CONNECTOR_COMPATIBILITY.v1, NODUOS.MARKETPLACE.CONNECTOR_CREDENTIAL_REFERENCE.v1, NODUOS.MARKETPLACE.CONNECTOR_WEBHOOK_ENDPOINT.v1 |
| Auditoria e Compliance | 2 | NODUOS.AUDIT.AUDIT_EXPORT.v1, NODUOS.AUDIT.EVIDENCE_REFERENCE.v1 |
| Segurança e LGPD | 10 | NODUOS.SECURITY.SECURITY_POLICY.v1, NODUOS.SECURITY.PRIVACY_POLICY.v1, NODUOS.SECURITY.DATA_PROTECTION_POLICY.v1, NODUOS.SECURITY.CONSENT_POLICY.v1, NODUOS.SECURITY.DATA_SUBJECT_REQUEST.v1, NODUOS.SECURITY.RETENTION_POLICY.v1, NODUOS.SECURITY.MASKING_POLICY.v1, NODUOS.SECURITY.EXPORT_CONTROL_POLICY.v1 +2 outros |
| Suporte e Operação | 2 | NODUOS.SUPPORT.DIAGNOSTIC_REQUEST.v1, NODUOS.SUPPORT.REMOTE_SUPPORT_SESSION.v1 |

## 45. Matriz de contratos sensíveis

Contratos sensíveis expõem ou processam dados pessoais, operacionais restritos, financeiro, visitante, vídeo, logs, suporte, auditoria ou políticas.

| Módulo | Quantidade | Contratos principais |
|---|---:|---|
| Core Platform | 2 | NODUOS.CORE.CORE_AUDIT_TRAIL.v1, NODUOS.CORE.CORE_SECURITY_LOG.v1 |
| Master | 0 | Nenhum por regra desta versão |
| Parceiros | 0 | Nenhum por regra desta versão |
| Organizações | 0 | Nenhum por regra desta versão |
| Pessoas e Clientes | 11 | NODUOS.PEOPLE.PERSON_PROFILE.v1, NODUOS.PEOPLE.CLIENT_PROFILE.v1, NODUOS.PEOPLE.PERSON_DOCUMENT.v1, NODUOS.PEOPLE.PERSON_CONTACT.v1, NODUOS.PEOPLE.PERSON_CONSENT.v1, NODUOS.PEOPLE.PERSON_UNIT_LINK.v1, NODUOS.PEOPLE.PERSON_ORGANIZATION_LINK.v1, NODUOS.PEOPLE.DEPENDENT_PROFILE.v1 +3 outros |
| Unidades, Blocos, Áreas e Ambientes | 0 | Nenhum por regra desta versão |
| Herança e Permissões | 0 | Nenhum por regra desta versão |
| Gateway Local / Mikrotik / Tunnel | 8 | NODUOS.GATEWAY.GATEWAY_RECORD.v1, NODUOS.GATEWAY.GATEWAY_AGENT.v1, NODUOS.GATEWAY.TUNNEL_SESSION.v1, NODUOS.GATEWAY.GATEWAY_HEALTH_READ_MODEL.v1, NODUOS.GATEWAY.GATEWAY_DEVICE_DISCOVERY.v1, NODUOS.GATEWAY.GATEWAY_DEVICE_REACHABILITY_READ_MODEL.v1, NODUOS.GATEWAY.GATEWAY_AUTHORIZATION_SCOPE.v1, NODUOS.GATEWAY.GATEWAY_TECHNICAL_LOG.v1 |
| Dispositivos | 10 | NODUOS.DEVICE.DEVICE_RECORD.v1, NODUOS.DEVICE.DEVICE_REFERENCE.v1, NODUOS.DEVICE.DEVICE_IDENTITY.v1, NODUOS.DEVICE.DEVICE_CAPABILITY.v1, NODUOS.DEVICE.DEVICE_HEALTH_READ_MODEL.v1, NODUOS.DEVICE.DEVICE_STATUS_READ_MODEL.v1, NODUOS.DEVICE.DEVICE_TELEMETRY.v1, NODUOS.DEVICE.DEVICE_LIFECYCLE.v1 +2 outros |
| Controle de Acesso | 0 | Nenhum por regra desta versão |
| Câmeras / VMS | 4 | NODUOS.CAMERA.CAMERA_RESOURCE.v1, NODUOS.CAMERA.CAMERA_CLIP.v1, NODUOS.CAMERA.CAMERA_AUTHORIZATION_SCOPE.v1, NODUOS.CAMERA.CAMERA_ANALYTICS_READ_MODEL.v1 |
| Alarmes | 12 | NODUOS.ALARM.ALARM_PANEL.v1, NODUOS.ALARM.ALARM_ZONE.v1, NODUOS.ALARM.ALARM_SENSOR.v1, NODUOS.ALARM.ALARM_ARMING_STATE.v1, NODUOS.ALARM.ALARM_EVENT.v1, NODUOS.ALARM.ALARM_TRIGGER_EVENT.v1, NODUOS.ALARM.PANIC_EVENT.v1, NODUOS.ALARM.ALARM_ESCALATION.v1 +4 outros |
| Financeiro | 8 | NODUOS.FINANCE.RECEIPT.v1, NODUOS.FINANCE.OVERDUE_EVENT.v1, NODUOS.FINANCE.FINANCIAL_AGREEMENT.v1, NODUOS.FINANCE.COMMISSION.v1, NODUOS.FINANCE.SPLIT.v1, NODUOS.FINANCE.TRANSFER.v1, NODUOS.FINANCE.FINANCIAL_READ_MODEL.v1, NODUOS.FINANCE.FINANCIAL_RESTRICTION_SIGNAL.v1 |
| Convites e Visitantes | 7 | NODUOS.VISITOR.VISITOR_INVITE.v1, NODUOS.VISITOR.TEMPORARY_VISITOR_PROFILE.v1, NODUOS.VISITOR.VISIT_WINDOW.v1, NODUOS.VISITOR.VISIT_APPROVAL.v1, NODUOS.VISITOR.VISITOR_CHECK_IN.v1, NODUOS.VISITOR.VISITOR_CHECK_OUT.v1, NODUOS.VISITOR.VISITOR_ANALYTICS_READ_MODEL.v1 |
| Tickets | 8 | NODUOS.TICKET.OPERATIONAL_TICKET.v1, NODUOS.TICKET.TICKET_COMMENT.v1, NODUOS.TICKET.TICKET_ATTACHMENT_REFERENCE.v1, NODUOS.TICKET.TICKET_SLA.v1, NODUOS.TICKET.TICKET_ESCALATION.v1, NODUOS.TICKET.TICKET_RESOLUTION.v1, NODUOS.TICKET.TICKET_LINKED_RESOURCE_REFERENCE.v1, NODUOS.TICKET.TICKET_ANALYTICS_READ_MODEL.v1 |
| Mural Informativo | 0 | Nenhum por regra desta versão |
| Reservas | 11 | NODUOS.RESERVATION.RESERVABLE_RESOURCE.v1, NODUOS.RESERVATION.RESERVATION.v1, NODUOS.RESERVATION.AVAILABILITY_QUERY.v1, NODUOS.RESERVATION.RESERVATION_HOLD.v1, NODUOS.RESERVATION.RESERVATION_APPROVAL.v1, NODUOS.RESERVATION.RESERVATION_CANCELLATION.v1, NODUOS.RESERVATION.RESERVATION_CHECK_IN.v1, NODUOS.RESERVATION.RESERVATION_CHECK_OUT.v1 +3 outros |
| Relatórios / BI | 0 | Nenhum por regra desta versão |
| White-label | 11 | NODUOS.WL.WHITE_LABEL_PROFILE.v1, NODUOS.WL.WHITE_LABEL_THEME.v1, NODUOS.WL.THEME_TOKEN.v1, NODUOS.WL.COLOR_PALETTE.v1, NODUOS.WL.BRAND_ASSET_REFERENCE.v1, NODUOS.WL.CUSTOM_DOMAIN.v1, NODUOS.WL.DOMAIN_VERIFICATION.v1, NODUOS.WL.CERTIFICATE_REFERENCE.v1 +3 outros |
| Notificações | 9 | NODUOS.NOTIFICATION.NOTIFICATION_TEMPLATE.v1, NODUOS.NOTIFICATION.NOTIFICATION_CHANNEL.v1, NODUOS.NOTIFICATION.NOTIFICATION_PROVIDER.v1, NODUOS.NOTIFICATION.NOTIFICATION_DELIVERY_ATTEMPT.v1, NODUOS.NOTIFICATION.NOTIFICATION_DELIVERY_LOG.v1, NODUOS.NOTIFICATION.NOTIFICATION_PREFERENCE.v1, NODUOS.NOTIFICATION.NOTIFICATION_OPT_IN.v1, NODUOS.NOTIFICATION.NOTIFICATION_OPT_OUT.v1 +1 outros |
| Automações | 8 | NODUOS.AUTOMATION.AUTOMATION_WORKFLOW.v1, NODUOS.AUTOMATION.AUTOMATION_TRIGGER.v1, NODUOS.AUTOMATION.AUTOMATION_CONDITION.v1, NODUOS.AUTOMATION.AUTOMATION_EXECUTION.v1, NODUOS.AUTOMATION.AUTOMATION_RETRY.v1, NODUOS.AUTOMATION.AUTOMATION_PAUSE.v1, NODUOS.AUTOMATION.AUTOMATION_HUMAN_APPROVAL.v1, NODUOS.AUTOMATION.AUTOMATION_READ_MODEL.v1 |
| Marketplace de Integrações | 4 | NODUOS.MARKETPLACE.INTEGRATION_PROVIDER.v1, NODUOS.MARKETPLACE.ADAPTER_PACKAGE.v1, NODUOS.MARKETPLACE.EXTERNAL_EVENT_MAPPING.v1, NODUOS.MARKETPLACE.MARKETPLACE_AUDIT_TRAIL.v1 |
| Auditoria e Compliance | 7 | NODUOS.AUDIT.AUDIT_TRAIL.v1, NODUOS.AUDIT.AUDIT_QUERY.v1, NODUOS.AUDIT.COMPLIANCE_CASE.v1, NODUOS.AUDIT.COMPLIANCE_INVESTIGATION.v1, NODUOS.AUDIT.CHAIN_OF_CUSTODY_RECORD.v1, NODUOS.AUDIT.AUDIT_ALERT.v1, NODUOS.AUDIT.COMPLIANCE_REPORT.v1 |
| Segurança e LGPD | 4 | NODUOS.SECURITY.CONSENT_RECORD.v1, NODUOS.SECURITY.DATA_PROCESSING_RECORD.v1, NODUOS.SECURITY.SENSITIVE_DATA_CLASSIFICATION.v1, NODUOS.SECURITY.THIRD_PARTY_RISK.v1 |
| Suporte e Operação | 9 | NODUOS.SUPPORT.PLATFORM_SUPPORT_CASE.v1, NODUOS.SUPPORT.SUPPORT_OPERATION_CASE.v1, NODUOS.SUPPORT.SERVICE_INCIDENT.v1, NODUOS.SUPPORT.MAINTENANCE_WINDOW.v1, NODUOS.SUPPORT.SERVICE_STATUS.v1, NODUOS.SUPPORT.RUNBOOK.v1, NODUOS.SUPPORT.POST_INCIDENT_REVIEW.v1, NODUOS.SUPPORT.SUPPORT_KNOWLEDGE_BASE_REFERENCE.v1 +1 outros |

## 46. Matriz de contratos permitidos por perfil

| Perfil | Pode usar diretamente | Pode usar indiretamente | Restrições obrigatórias |
|---|---|---|---|
| Master Admin | Contratos Master, governança superior, BI global autorizado, auditoria autorizada | Contratos de módulos donos via read model/API autorizada | Não executa operação de módulo dono nem acessa banco interno |
| Equipe interna Master autorizada | Leituras e ações administrativas concedidas por política | Exportações, suporte e auditoria conforme função | Escopo mínimo, trilha e mascaramento |
| Parceiro Admin | Contratos Parceiros, organizações abaixo dele, white-label permitido, implantação autorizada | Gateway, Dispositivos, Financeiro, Suporte e BI por contrato | Não cria Tenant/Context/UserAccount nem executa módulo comercial |
| Equipe técnica do Parceiro | Gateway, Dispositivos, diagnóstico e implantação autorizada | Suporte e módulos técnicos via solicitação | Sem segredo bruto, com janela temporal e auditoria |
| Equipe comercial do Parceiro | Portfólio, plano, licença e resumos comerciais autorizados | Financeiro por read model | Não manipula credenciais, acesso físico, vídeo ou políticas sensíveis |
| Organização Admin | Organização, Pessoas, Estrutura, Mural, Reservas, Tickets e configurações permitidas | Acesso, Câmeras, Financeiro e Notificações conforme licença | Não emite AuthorizationDecision nem altera licença/feature flag |
| Operador/Gestor | Operação diária no contexto da organização | Ações de módulos donos por contrato | Somente recursos herdados e escopo autorizado |
| Portaria/Recepção | Acesso operacional, visitantes, alarmes e tickets permitidos | Câmeras permitidas e reservas conforme regra | Sem exportação sensível, sem política, sem configuração estrutural |
| Cliente/Usuário Final | Próprio perfil, convites, reservas, tickets, financeiro próprio, acesso herdado | Câmeras e mural herdados | Somente próprio contexto e recursos herdados |
| Suporte interno autorizado | Suporte, incidentes, diagnóstico assistido, sessão temporária | Gateway, Dispositivos e módulos donos por autorização | Temporário, escopado, auditável, mascarado e fail-closed |
| Auditor interno autorizado | Auditoria, evidência, cadeia de custódia, relatórios de compliance | Módulos donos por trilha autorizada | Não altera domínio; consulta mascarada e com finalidade |
| Integração externa autorizada | Webhooks externos e APIs públicas autorizadas pelo Marketplace/Core | Contratos de módulos donos via conector permitido | Assinatura, rate limit, SecretReference, terceiro avaliado e escopo mínimo |
| Serviço interno do sistema | Contratos técnicos, eventos, comandos e read models internos | Todos conforme allowlist | Sem bypass de Core, sem banco compartilhado |
| Automação autorizada | AutomationActionRequest e comandos permitidos dos módulos donos | Notificações, Acesso, Reservas, Financeiro, Alarmes conforme política | Automação solicita; módulo dono executa; idempotência obrigatória |
| Marketplace Connector autorizado | Contratos de integração instalados e escopados | Gateway, Dispositivos, Notificações, Financeiro ou outros módulos conforme instalação | Nunca segredo bruto; avaliação de terceiro; revogação e auditoria |

## 47. Matriz de contratos proibidos por perfil

| Perfil | Contratos proibidos | Motivo |
|---|---|---|
| Master Admin | Execução operacional direta de Acesso, Câmeras, Alarmes, Financeiro, Reservas, Convites, Tickets, Notificações e Automações | Master governa limite, mas módulo dono executa |
| Parceiro Admin | Tenant, Context, UserAccount, AuthorizationDecision, License técnica, FeatureFlag técnica, bancos internos e execução comercial direta | Parceiro opera dentro do escopo autorizado |
| Equipe técnica do Parceiro | Exportações sensíveis, financeiro completo, auditoria ampla, políticas LGPD e visualização indiscriminada de vídeo | Equipe técnica instala e diagnostica, não governa dados |
| Equipe comercial do Parceiro | GatewayCommand, DeviceDiagnostic sensível, AccessExecution, CameraPlayback, SecretReference e EvidenceReference | Equipe comercial não executa ação técnica/sensível |
| Organização Admin | CoreAuthorizationDecision, License/FeatureFlag oficial, MasterGovernance, PartnerScope oficial, banco interno de módulos | Organização representa espaço, não Core nem Master |
| Operador/Gestor | Contratos fora da organização/contexto, exportação sensível sem finalidade, política global e segredos | Operação diária é escopada |
| Portaria/Recepção | Exportação, playback amplo, política, conector, segredo, cobrança avançada e auditoria global | Função operacional local limitada |
| Cliente/Usuário Final | Contratos administrativos, dados de terceiros, câmera não herdada, financeiro alheio, auditoria, suporte remoto e políticas | Cliente usa apenas o que herdou |
| Suporte interno autorizado | Alteração direta de domínio, abertura de porta, cobrança, reserva, alarme ou workflow sem módulo dono | Suporte coordena; módulo dono executa |
| Auditor interno autorizado | Mutação operacional, alteração de política fora do escopo, comandos físicos e credenciais | Auditoria evidencia, não executa |
| Integração externa autorizada | Banco interno, segredo bruto, contratos não instalados, escopo de outro tenant, ações sem assinatura/autorização | Integração é plugável, escopada e revogável |
| Automação autorizada | Ação sem política, sem AuthorizationDecision, sem idempotência ou fora do recurso autorizado | Automação não é bypass |
| Marketplace Connector autorizado | Contratos de módulos não instalados, segredo bruto, dados fora do consentimento ou tenant alheio | Conector deve ser avaliado e escopado |

## 48. Riscos de acoplamento encontrados

| Risco | Gravidade | Correção recomendada |
|---|---|---|
| Read model usado como banco compartilhado | Alto | Marcar todo read model com `no_domain_transfer`, `source_contracts`, `data_freshness`, `staleness_policy` e consumidor autorizado. |
| Evento `Requested` usado como comando disfarçado | Alto | Separar comando de evento de solicitação registrada. Pedido registrado não prova execução. |
| Comando usado como evidência de execução | Alto | Prova de execução deve vir de evento de fato ocorrido e/ou EvidenceReference. |
| Contrato sensível sem política Segurança/LGPD | Crítico | Fail-closed obrigatório quando política, finalidade, retenção ou mascaramento estiver ausente. |
| Perfil administrativo consumindo contrato de módulo dono sem escopo | Alto | Exigir AuthorizationDecision, módulo ativo, licença/entitlement e ResourceReference. |
| Integração externa virando acesso direto ao domínio | Crítico | Marketplace/Core/Security devem validar instalação, escopo, segredo, assinatura e terceiro. |
| Suporte remoto virando bypass operacional | Crítico | Sessão temporária, escopada, justificada, auditada e com dados mascarados. |
| BI usando dados internos como fonte de verdade | Alto | BI consome contratos analíticos/read models autorizados, nunca banco interno. |
| Automações executando domínio alheio | Alto | Automações solicita ação; módulo dono executa após Core AuthorizationDecision. |

## 49. Correções recomendadas no Catálogo de Contratos Públicos

Não há bloqueio estrutural no catálogo. A matriz recomenda apenas reforços de metadados para a próxima versão menor do documento:
- Adicionar campo `permission_code` em cada contrato.
- Adicionar campo `allowed_profiles` em cada contrato.
- Adicionar campo `authorization_decision_required` com valores `Sim`, `Não`, `Condicional` ou `Herdado`.
- Adicionar campo `security_lgpd_policy_required`.
- Adicionar campo `idempotency_required`.
- Adicionar campo `profile_masking_policy` para contratos sensíveis.
- Adicionar campo `forbidden_usage` com regra anti-acoplamento.
- Adicionar campo `automation_allowed` e `external_integration_allowed`, quando aplicável.

## 50. Lacunas para detalhamento posterior

- Matriz técnica de dados sensíveis por contrato e campo.
- Detalhamento de EvidenceReference.
- Detalhamento de EvidenceReference.
- Detalhamento de SecretReference.
- Detalhamento de AuthorizationDecision.
- Taxonomia oficial de Veículos, Documentos e Ocorrências antes da modelagem técnica.
- Máscara por perfil em contratos de vídeo, financeiro, pessoas, visitantes, auditoria e suporte.
- Régua de retenção por tipo de evidência, log, imagem, convite, ticket, financeiro e suporte.

## 51. Decisões oficiais consolidadas nesta etapa

As decisões abaixo foram aprovadas pelo usuário e ficam consolidadas nesta versão final da Matriz Técnica de Permissões por Contrato. Devem ser adicionadas ao arquivo `03_DECISOES_OFICIAIS.md` após a DEC-188, mantendo a sequência oficial e definindo a próxima DEC livre como DEC-191.

# DEC-189: Matriz Técnica de Permissões por Contrato como artefato técnico oficial complementar

## Tema

Governança técnica de permissões por contrato público.

## Decisão

O NoduOS passa a adotar a Matriz Técnica de Permissões por Contrato como artefato técnico oficial complementar ao Catálogo de Contratos Públicos.

A matriz define, por contrato público, os perfis autorizados, módulos consumidores permitidos, permissão conceitual, escopo mínimo, exigência de tenant, context, ResourceReference, AuthorizationDecision, licença, módulo ativo, entitlement, feature flag, política de Segurança e LGPD, auditoria, idempotência, sensibilidade, mascaramento, retenção, fail-closed e uso proibido.

A matriz não substitui o Core Platform, não substitui PermissionGrant, não substitui InheritanceGrant, não emite AuthorizationDecision e não transfere domínio entre módulos. Ela limita o uso técnico dos contratos antes de banco, endpoints finais, telas, filas, integrações e implementação.

## Motivo

Impedir que contratos públicos sejam usados fora de escopo, como banco compartilhado, comando disfarçado, bypass de autorização, exposição sensível, execução de domínio alheio, acesso direto a banco interno ou dependência invisível entre módulos.

## Impacto

Todo contrato público deverá ser validado contra a Matriz Técnica de Permissões por Contrato antes da modelagem técnica. APIs internas, comandos, eventos, webhooks, read models, contratos de política, autorização, evidência, exportação, integração, auditoria, segurança e LGPD deverão declarar permissões, perfis autorizados, escopo, sensibilidade, auditoria, LGPD, fail-closed e restrições anti-acoplamento.

Módulos consumidores só poderão chamar, consumir ou expor contratos conforme o perfil, contexto, permissão e escopo declarados na matriz.

## Status

Aprovada

## Data

2026-06-25

# DEC-190: Permissão conceitual obrigatória em contrato público

## Tema

Padronização de permissões técnicas por contrato público.

## Decisão

Todo contrato público do NoduOS deve possuir ao menos uma permissão conceitual no formato `<dominio>.<recurso_ou_contrato>.<ação>`.

A permissão conceitual serve para classificar o uso técnico do contrato, orientar perfis autorizados, facilitar revisão de segurança e impedir chamadas ambíguas. Ela não substitui PermissionGrant, InheritanceGrant, Role, ResourceReference, AuthorizationDecision ou qualquer decisão estrutural do Core Platform.

A permissão conceitual deve ser validada junto com tenant, context, actor_reference, resource_reference, módulo ativo, licença, entitlement, feature flag, política de Segurança e LGPD e AuthorizationDecision quando o contrato for sensível ou crítico.

## Motivo

Garantir leitura consistente por perfil, impedir permissões soltas ou acopladas à implementação, evitar ambiguidade entre leitura, gestão, solicitação, execução, exportação, publicação, consumo, entrega, simulação e diagnóstico, e preservar a separação entre governança técnica e autorização estrutural do Core Platform.

## Impacto

O Catálogo de Contratos Públicos deverá passar a carregar `permission_code` nos metadados mínimos dos contratos.

Os módulos deverão validar chamadas, consumo de eventos, comandos, read models, webhooks, exportações e integrações com base no contrato público, no perfil autorizado e na permissão conceitual associada.

Permissões conceituais não autorizam ação sozinhas. Elas apenas classificam o contrato e orientam a decisão estrutural do Core Platform e as regras do módulo dono.

## Status

Aprovada

## Data

2026-06-25


## 52. Atualizações recomendadas para `00_BIBLIA_DO_PROJETO.md`

- Adicionar que, após o Catálogo de Contratos Públicos, toda modelagem técnica deve consultar a Matriz Técnica de Permissões por Contrato antes de banco, endpoints, eventos finais, telas ou integrações.
- Adicionar frase: Permissão limita o ator. Contrato limita o caminho. Core decide. Módulo dono executa. Auditoria registra.

## 53. Atualizações recomendadas para `01_MAPA_DE_MODULOS.md`

- Adicionar em cada módulo a obrigação de listar contratos permitidos por perfil e contratos proibidos por perfil.
- Adicionar que read models, comandos, eventos e APIs só podem ser consumidos conforme matriz de permissões por contrato.

## 54. Atualizações recomendadas para `02_REGRAS_DE_ARQUITETURA.md`

- Adicionar seção “Matriz Técnica de Permissões por Contrato”.
- Tornar obrigatório `permission_code`, perfis autorizados, escopo mínimo, AuthorizationDecision, LGPD, auditoria, idempotência e fail-closed por contrato público.

## 55. Atualizações consolidadas para `03_DECISOES_OFICIAIS.md`

- Inserir DEC-189 como decisão aprovada: Matriz Técnica de Permissões por Contrato como artefato técnico oficial complementar.
- Inserir DEC-190 como decisão aprovada: Permissão conceitual obrigatória em contrato público.
- Atualizar a última DEC oficial registrada para DEC-190.
- Atualizar a próxima DEC livre para DEC-191.

## 56. Atualizações recomendadas para `04_PROMPTS_DE_TRABALHO.md`

- Adicionar prompt de revisão da Matriz Técnica de Permissões por Contrato.
- Adicionar prompt para checar se uma permissão conceitual viola Core, Herança, Segurança, Auditoria ou módulo dono.

## 57. Atualizações recomendadas para `05_CATALOGO_DE_CONTRATOS_PUBLICOS.md`

- Adicionar `permission_code`, `allowed_profiles`, `forbidden_profiles`, `authorization_decision_required`, `security_lgpd_policy_required`, `audit_required`, `idempotency_required`, `sensitivity_level`, `fail_closed_rule` e `anti_coupling_note` aos metadados mínimos.
- Marcar explicitamente em cada contrato se Automação, Integração Externa ou Marketplace Connector podem consumir.

## 58. Checklist final de consistência e segunda checagem

| Item | Status |
|---|---|
| Segunda checagem confirmou 272 contratos do catálogo | OK |
| Segunda checagem confirmou 20 contratos transversais | OK |
| Segunda checagem confirmou 292 contratos totais na matriz | OK |
| Não há contract_id duplicado na matriz | OK |
| Não há contrato do catálogo ausente na matriz | OK |
| Status atualizado para aprovada e consolidada | OK |
| DEC-189 e DEC-190 consolidadas como aprovadas | OK |
| Próxima DEC livre atualizada para DEC-191 | OK |
| Todos os contratos possuem owner_module na matriz | OK |
| Todos os contratos possuem versão v1 | OK |
| Todos os contratos possuem permissão conceitual | OK, por derivação nesta matriz |
| Contratos sensíveis exigem Segurança e LGPD | OK |
| Contratos críticos exigem fail-closed | OK |
| Comandos críticos exigem idempotência | OK |
| Eventos não são tratados como comandos | OK |
| Eventos de solicitação registrada não provam execução | OK |
| Read models não transferem domínio | OK |
| Segredos usam SecretReference | OK |
| Evidências usam EvidenceReference | OK |
| Core permanece autoridade de AuthorizationDecision | OK |
| Módulo dono permanece executor do domínio | OK |
| Auditoria preserva prova sem executar domínio | OK |
| Não foram criados banco, migration, endpoint final, tela ou código | OK |

## 59. Próxima etapa recomendada

A matriz está aprovada e consolidada como artefato técnico oficial complementar da raiz do NoduOS.

Próximo passo recomendado: gerar a Matriz Técnica de Dados Sensíveis por Contrato, porque ela detalhará campo, máscara, retenção, finalidade, consentimento, exportação e evidência antes de qualquer schema técnico, banco, endpoint ou tela.

Ordem segura:

1. Aplicar DEC-189 e DEC-190 no arquivo `03_DECISOES_OFICIAIS.md`.
2. Criar Matriz Técnica de Dados Sensíveis por Contrato.
3. Detalhar EventEnvelope v1.
4. Detalhar EvidenceReference.
5. Detalhar SecretReference.
6. Detalhar AuthorizationDecision.
7. Avançar para modelagem técnica inicial por contratos, não por banco isolado.

Frase final:

Contrato é a trilha. Permissão é o portão. Core é o Conselho Jedi. Módulo dono segura o sabre. Auditoria guarda o holocron.


## Atualização complementar: vínculo obrigatório com a Matriz Técnica de Dados Sensíveis por Contrato

A partir da DEC-191, a Matriz Técnica de Permissões por Contrato deve ser aplicada em conjunto com a Matriz Técnica de Dados Sensíveis por Contrato.

Uma chamada pode estar correta por perfil, escopo e permission_code, mas ainda deve ser bloqueada, mascarada, minimizada, referenciada ou auditada conforme o arquivo `07_MATRIZ_TECNICA_DADOS_SENSIVEIS_POR_CONTRATO.md`.

Regras de composição:

- Permissão define quem pode chamar ou consumir.
- Dados sensíveis definem o que pode trafegar.
- Catálogo define o contrato público.
- Core decide autorização estrutural.
- Segurança e LGPD define política de proteção.
- Auditoria evidencia visualização, exportação, cadeia de custódia e ações críticas.

Contrato autorizado sem compatibilidade com a matriz de dados sensíveis deve falhar fechado quando envolver dado sensível ou crítico.

Próxima etapa recomendada: Detalhamento de SecretReference.

# Atualização complementar - Uso da Matriz de Permissões com EventEnvelope v1

A Matriz Técnica de Permissões por Contrato passa a ser aplicada em conjunto com o `08_DETALHAMENTO_EVENTENVELOPE_V1.md` para qualquer evento público intermodular.

Regras:

- Consumir evento não concede permissão operacional nova.
- Publicar evento sensível exige contrato, escopo, permissão conceitual, tenant/contexto, política e auditoria conforme matriz.
- Consumidor que precisar executar ação sensível a partir de evento deve chamar o módulo dono por contrato autorizado e solicitar nova AuthorizationDecision ao Core Platform quando aplicável.
- Eventos de solicitação registrada não provam execução.
- Eventos de fato ocorrido não devem virar comando disfarçado.
- Eventos críticos exigem outbox, inbox/deduplicação, retry controlado, dead-letter/quarentena e fail-closed.

Estado da raiz após esta atualização:

- Última DEC consolidada: DEC-198.
- Próxima DEC livre: DEC-195.
- Próxima etapa recomendada: Detalhamento de SecretReference.


---

# Atualização - Detalhamento de EvidenceReference v1

Data da atualização: 2026-06-27.

Decisão aplicada: DEC-193.

Arquivo técnico raiz consolidado: `09_DETALHAMENTO_EVIDENCEREFERENCE_V1.md`.

Última DEC consolidada: DEC-193.

Próxima DEC livre: DEC-195.

Próxima etapa recomendada: Detalhamento de SecretReference.

Frase guia da etapa:

Evidência referencia prova. Cadeia de custódia preserva confiança. Payload evita bruto. Segurança controla acesso. Auditoria sustenta validade.

Regras consolidadas:

1. EvidenceReference v1 é o padrão transversal oficial para referenciar evidências, provas, vídeos, imagens, snapshots, clips, documentos probatórios, anexos probatórios, eventos de acesso, alarmes, suporte, auditoria, exportações, diagnósticos, incidentes, solicitações LGPD e evidências externas normalizadas.
2. EvidenceReference aponta para a prova, mas não transporta a prova bruta por padrão.
3. Evidência crítica exige `AuthorizationDecision`, cadeia de custódia, política de retenção, política de acesso, política de exportação, `audit_reference`, tenant, contexto, escopo, finalidade e fail-closed.
4. Evidência sensível exige finalidade, classificação, política de Segurança e LGPD, retenção, mascaramento, auditoria e controle de visualização/exportação.
5. `storage_reference` é referência segura. É proibido expor URL pública permanente, path bruto, bucket sensível, segredo, token ou credencial de storage.
6. `FileAttachmentReference` só se torna `EvidenceReference` quando possuir valor probatório, cadeia de custódia ou política formal de evidência.
7. `EventEnvelope v1` pode transportar `evidence_reference`, mas não deve transportar prova bruta quando EvidenceReference bastar.
8. A existência de EvidenceReference em evento não autoriza visualização da prova. Visualização, exportação, compartilhamento, reprocessamento, liberação de quarentena ou acesso ao bruto exigem autorização própria, finalidade, política, auditoria e escopo.
9. Auditoria e Compliance preserva trilha, cadeia de custódia, consulta auditável e exportação probatória, sem assumir execução operacional dos módulos donos.
10. Segurança e LGPD governa políticas de tratamento, retenção, máscara, descarte, expurgo, anonimização e incidentes, sem virar storage de evidências brutas.
11. DEC-182 permanece como decisão base que reconhece EvidenceReference como contrato oficial de evidência e cadeia de custódia. DEC-193 apenas detalha o EvidenceReference v1 como padrão técnico raiz complementar.

Resultado:

A raiz passa a estar atualizada com o Detalhamento de EvidenceReference v1 e pronta para avançar para Detalhamento de SecretReference, sem pular as etapas de governança necessárias antes da programação.


## Regra global de permissões para EvidenceReference v1

Visualizar metadados de EvidenceReference, visualizar prova bruta, exportar, compartilhar, reprocessar, liberar quarentena e descartar evidência são ações distintas.

Cada uma exige permissão conceitual própria, tenant, contexto, escopo, finalidade, política, AuthorizationDecision quando aplicável e auditoria própria.

A permissão para consumir evento com `evidence_reference` não concede permissão automática para abrir a evidência, exportar prova, compartilhar com terceiro ou acessar storage bruto.


---

# Atualização - Detalhamento de SecretReference v1

Data da atualização: 2026-06-27.

Decisão aplicada: DEC-194.

Arquivo técnico raiz consolidado: `10_DETALHAMENTO_SECRETREFERENCE_V1.md`.

Última DEC consolidada: DEC-194.

Próxima DEC livre: DEC-195.

Próxima etapa recomendada: Detalhamento de AuthorizationDecision v1.

Frase guia da etapa:

Segredo não viaja. Referência aponta. Política limita. Core autoriza. Módulo dono usa. Auditoria registra.

Regras consolidadas:

1. SecretReference v1 é o padrão transversal oficial para referência segura de segredos, tokens, chaves, certificados privados, credenciais, client secrets, assinaturas, segredos de webhook, credenciais de gateway, credenciais de dispositivo, credenciais de conector, credenciais de provedor externo e material criptográfico.
2. Segredo bruto é proibido em payload, evento, comando, webhook, read model, log, URL, BI, relatório, auditoria, exportação, configuração e tela.
3. `raw_secret_allowed` deve ser sempre `never` em contratos públicos e artefatos transversais.
4. Todo SecretReference deve declarar owner_module, finalidade, escopo, tipo de segredo, sensibilidade crítica, política de acesso, política de resolução interna, política de rotação, política de revogação, política de expiração quando aplicável, política de auditoria, tenant/contexto quando aplicável, ResourceReference quando aplicável e comportamento fail-closed.
5. SecretReference não é cofre concreto, banco compartilhado, endpoint para leitura de segredo, autorização operacional, permissão nova ou atalho para módulo consumidor acessar segredo bruto.
6. Módulo dono usa o segredo dentro de seu próprio limite autorizado. Módulos consumidores recebem referência, status, resultado ou erro minimizado, nunca segredo bruto.
7. Eventos de ciclo de vida de segredo devem usar EventEnvelope v1 com payload minimizado e podem transportar apenas `secret_reference`, políticas, status, reason_code minimizado, correlation_id, causation_id, AuthorizationDecision quando aplicável e audit_reference.
8. Evidências criptografadas, assinadas, lacradas, exportadas ou verificadas por material criptográfico devem usar EvidenceReference + SecretReference sem misturar prova e segredo.
9. Webhooks externos exigem assinatura, rotação, revogação, auditoria e SecretReference para segredo de assinatura.
10. Falha, ausência de política, ausência de owner_module, ausência de finalidade, ausência de escopo, expiração, revogação, suspeita de vazamento ou tentativa de uso fora do tenant/contexto deve negar, bloquear ou quarentenar conforme fail-closed.
11. Quarentena de segredo deve gerar evidência por EvidenceReference e incidente conforme Segurança e LGPD e Auditoria e Compliance quando aplicável.

Resultado:

A raiz passa a estar atualizada com o Detalhamento de SecretReference v1 e pronta para avançar ao Detalhamento de AuthorizationDecision v1, mantendo a blindagem de segredos antes da modelagem técnica e programação.


## Atualização consolidada da matriz de permissões - SecretReference v1

Contratos que envolvam segredo, token, chave, certificado privado, credencial, segredo de webhook, client secret, assinatura, URL assinada com material sensível ou material criptográfico exigem:

- SecretReference v1;
- AuthorizationDecision para ações críticas;
- auditoria;
- política de Segurança e LGPD;
- política de acesso;
- política de rotação;
- política de revogação;
- política de expiração quando aplicável;
- fail-closed.

Permissão para consumir referência não autoriza leitura de segredo bruto.

Campos conceituais de apoio para etapas futuras:

- `secret_reference_required`: yes/no/conditional
- `secret_operation_type`: create/use/rotate/revoke/expire/audit/quarantine/reprocess

## Atualização transversal: AuthorizationDecision v1 e ResourceReference v1

AuthorizationDecision v1 é obrigatória para contratos sensíveis ou críticos e para qualquer ação que envolva acesso físico, vídeo, evidência, segredo, exportação, suporte remoto, conector externo, webhook externo, alteração de permissão, herança, licença, feature flag, política, auditoria sensível, BI identificável, visitante, financeiro ou dado pessoal sensível.

Eventos herdam a decisão original apenas como referência. Read models não substituem AuthorizationDecision. Contrato sensível sem decisão válida deve negar, pausar, quarentenar ou degradar de forma segura conforme fail_policy.

Contratos que apontem recurso intermodular devem exigir ResourceReference v1.

ResourceReference não concede permissão. A permissão continua sendo definida por PermissionGrant, InheritanceGrant, política, licença, feature flag e AuthorizationDecision do Core Platform quando aplicável.

Contratos sensíveis ou críticos que usem ResourceReference devem falhar fechado sem tenant, contexto, owner_module, resource_type, resource_public_id, política aplicável, autorização exigida ou auditoria.


---

# Atualização consolidada conjunta: AuthorizationDecision v1 e ResourceReference v1

Data da consolidação: 2026-06-27.

Decisões aplicadas:

- DEC-195: AuthorizationDecision v1 como padrão oficial de decisão de autorização do Core Platform.
- DEC-196: ResourceReference v1 como padrão oficial de referência segura de recursos entre módulos.

Arquivos técnicos raiz adicionados:

- `11_DETALHAMENTO_AUTHORIZATIONDECISION_V1.md`
- `12_DETALHAMENTO_RESOURCEREFERENCE_V1.md`

Estado final da raiz:

```text
Última DEC consolidada: DEC-196.
Próxima DEC livre: DEC-197.
Próxima etapa recomendada: Blueprint técnico da aplicação.
```

Síntese da consolidação:

AuthorizationDecision v1 fecha a autoridade estrutural de autorização do Core Platform, definindo decisão temporal, contextual, escopada, auditável e fail-closed para ações sensíveis e críticas.

ResourceReference v1 fecha a referência segura de recursos entre módulos, preservando owner_module, tenant, contexto, escopo, sensibilidade, lifecycle, políticas e `no_domain_transfer = true`.

Regra consolidada:

```text
ResourceReference aponta o recurso.
AuthorizationDecision decide a ação.
EventEnvelope comunica o fato.
EvidenceReference referencia a prova.
SecretReference referencia o segredo.
Módulo dono executa.
Auditoria registra.
```

A raiz passa a estar atualizada com a blindagem conceitual principal necessária antes do Blueprint técnico da aplicação e da programação.

## Atualização transversal: Blueprint técnico da aplicação

Data: 2026-06-27.
Decisão aplicada: DEC-197.
Arquivo técnico raiz: `13_BLUEPRINT_TECNICO_APLICACAO_NODUOS.md`.

Toda implementação deve consultar esta matriz antes de criar endpoint, comando, evento, read model, webhook, worker, integração ou tela que envolva permissão, ação sensível, dado sensível ou recurso intermodular.

A programação deve validar:

- quem pode chamar;
- qual módulo é dono;
- qual contrato está sendo usado;
- tenant/contexto;
- permissão conceitual;
- AuthorizationDecision v1;
- ResourceReference v1;
- licença, módulo ativo, entitlement e feature flag;
- política Segurança/LGPD;
- auditoria;
- idempotência;
- fail-closed.

Nenhum teste de autorização deve considerar frontend, read model, evento ou referência como decisão final.


---

# Atualização transversal de raiz - DEC-198

Data: 2026-07-17

Este documento incorpora a decisão oficial DEC-198 como regra de governança Git pré-runtime.

## Branch Git oficial

```text
official/pre-runtime-foundation-v1
```

## Regra operacional

Enquanto `origin/main` permanecer divergente, a branch oficial do NoduOS é `official/pre-runtime-foundation-v1`.

`origin/main` é histórico remoto preservado, não trilho canônico de programação. Nenhum pull, merge, rebase ou force push sobre `origin/main` deve ser feito sem decisão e bloco próprios de reconciliação.

## Estado técnico vinculado

```text
Commit base pré-runtime: 388c96e
Commit completo base: 388c96e41ae2bffc5e9eee2e0a2af162cf5c3025
Commit DEC-198: e87b8c0
Commit completo DEC-198: e87b8c060e455bcaebd337ac6f781cf6af58d8d8
Tag DEC-198: root-git-canonical-branch-dec-198-v1
Tag marco pré-runtime: pre-runtime-foundation-v1
Remote: git@github.com:mmserver2/NoduOS.git
origin/main preservado: 73456a10720852456d074931d964361a3cdcb83a
```

## Estado da raiz

```text
Última DEC consolidada: DEC-198.
Próxima DEC livre: DEC-199.
Próxima etapa recomendada: Runtime-BLOCK técnico mínimo da API, usando official/pre-runtime-foundation-v1 como branch Git oficial.
```
