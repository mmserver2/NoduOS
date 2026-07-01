# CANVA FINAL - DETALHAMENTO DE EVENTENVELOPE V1 NODUOS

Projeto: NoduOS  
Descrição oficial: SaaS Modular de Gestão de Espaços e Segurança Unificada  
Conceito técnico: Sistema Operacional Modular para Espaços Físicos Conectados  
Conceito de marca: Conexão que impulsiona  
Tipo de documento: Padrão conceitual oficial para eventos entre módulos  
Versão do documento: 1.0.6
Versão base do envelope: v1  
Data desta consolidação: 2026-06-27  
Status: Aprovado e atualizado com Blueprint Técnico da Aplicação e DEC-197
Última DEC consolidada na raiz: DEC-197  
DEC consolidada nesta etapa: DEC-192  
Próxima DEC livre: DEC-198

Frase guia:

Evento comunica fato. Envelope protege contexto. Payload minimiza dado. Correlação preserva fluxo. Auditoria preserva prova.

Regra central:

Política influencia. Core decide. Módulo dono executa. Auditoria registra.

---

## 0. Ajustes aplicados nesta versão final

Esta versão aplica o refinamento solicitado após o primeiro canva técnico do EventEnvelope v1.

Ajustes consolidados:

- Status alterado para aprovado e consolidado nos documentos centrais.
- DEC-192 consolidada no modelo final como decisão aprovada para entrada no `03_DECISOES_OFICIAIS.md`.
- Próxima DEC livre ajustada para DEC-193.
- Atualizações dos documentos centrais convertidas de recomendações para blocos consolidados de aplicação.
- Reforçada a obrigação de EventEnvelope v1 para eventos intermodulares, webhooks autorizados, eventos externos normalizados e eventos técnicos de retry, dead-letter e quarentena.
- Reforçada a separação entre comando, evento de fato ocorrido, evento de solicitação registrada, read model e webhook.
- Reforçado que AuthorizationDecision em evento é referência da decisão original e nunca autorização nova.
- Reforçada a regra de quarentena para evento com payload proibido, tenant/contexto inválido, política ausente ou origem externa não confiável.
- Reforçado que o arquivo técnico raiz sugerido para esta consolidação é `08_DETALHAMENTO_EVENTENVELOPE_V1.md`.

Resultado:

O EventEnvelope v1 fica tratado como padrão transversal oficial dos eventos do NoduOS, preservando modularidade, contratos versionados, minimização de payload, rastreabilidade, LGPD, auditoria e fail-closed.

---

## 1. Objetivo do EventEnvelope v1

O EventEnvelope v1 é o padrão conceitual obrigatório para transportar eventos entre módulos do NoduOS sem quebrar modularidade, sem invadir domínio de outro módulo e sem expor dado sensível indevido.

Ele transforma as regras já aprovadas de contratos públicos, permissões por contrato, dados sensíveis, auditoria, LGPD, outbox, inbox, deduplicação, retry, dead-letter, quarentena, versionamento e fail-closed em uma moldura única para eventos internos, webhooks autorizados, integrações normalizadas e read models derivados.

O objetivo não é criar código, banco, fila, endpoint, migration, tela ou tecnologia. O objetivo é estabelecer o pacto técnico que todo evento deve obedecer antes da modelagem técnica futura.

## 2. Escopo desta versão

Esta versão cobre:

- eventos internos entre módulos;
- eventos de fato ocorrido;
- eventos de solicitação registrada;
- eventos de alteração de estado;
- eventos de ciclo de vida;
- eventos de auditoria, segurança, LGPD, política, diagnóstico, integração, notificação, BI, evidência, exportação, falha, retry, dead-letter e quarentena;
- eventos externos recebidos e eventos externos normalizados;
- uso conceitual de outbox no produtor;
- uso conceitual de inbox e deduplicação no consumidor;
- correlação, causalidade, autorização, auditoria, dados sensíveis, retenção, mascaramento, compatibilidade e depreciação.

Fora do escopo:

- banco de dados;
- migrations;
- filas concretas;
- broker;
- linguagem;
- framework;
- endpoint final;
- schema definitivo de implementação;
- tela;
- criação de novo módulo;
- alteração de fronteira de módulo.

## 3. Fontes oficiais consideradas

- `00_BIBLIA_DO_PROJETO.md`
- `01_MAPA_DE_MODULOS.md`
- `02_REGRAS_DE_ARQUITETURA.md`
- `03_DECISOES_OFICIAIS.md`
- `04_PROMPTS_DE_TRABALHO.md`
- `05_CATALOGO_DE_CONTRATOS_PUBLICOS.md`
- `06_MATRIZ_TECNICA_PERMISSOES_POR_CONTRATO.md`
- `07_MATRIZ_TECNICA_DADOS_SENSIVEIS_POR_CONTRATO.md`
- `IDENTIDADE_OFICIAL_NODUOS.md`
- `README_PACOTE_FINAL_NODUOS_DADOS_SENSIVEIS_RAIZ.md.txt`
- `PROMPT_DETALHAMENTO_EVENTENVELOPE_V1_NODUOS.txt`

Regra de governança: o chat conversa. O documento manda.

## 4. Estado atual da raiz

- Todos os módulos principais estão aprovados.
- A Revisão Geral foi consolidada.
- O Catálogo de Contratos Públicos foi consolidado como documento técnico raiz complementar.
- A Matriz Técnica de Permissões por Contrato foi consolidada como documento técnico raiz complementar.
- A Matriz Técnica de Dados Sensíveis por Contrato foi consolidada como documento técnico raiz complementar.
- O arquivo `07_MATRIZ_TECNICA_DADOS_SENSIVEIS_POR_CONTRATO.md` foi adicionado à raiz.
- A última DEC consolidada na raiz antes desta etapa é DEC-191.
- A DEC-192 foi consolidada neste modelo final.
- A próxima DEC livre passa a ser DEC-193 após aplicação da DEC-192 na raiz.
- Esta etapa detalha o EventEnvelope v1 sem criar implementação.

## 5. Definição oficial de EventEnvelope v1

EventEnvelope v1 é o envelope padronizado de evento do NoduOS. Ele envolve o payload mínimo do evento com metadados obrigatórios de contrato, versão, módulo dono, módulo produtor, tenant, contexto, ator, recurso, política, sensibilidade, auditoria, correlação, causalidade, compatibilidade e falha.

Ele não é o payload de domínio completo. Ele não é banco compartilhado. Ele não é comando. Ele não é autorização nova. Ele não substitui contrato público, AuthorizationDecision, ResourceReference, EvidenceReference, SecretReference, read model ou API interna.

Regra curta:

Evento comunica o que aconteceu. Envelope prova de onde veio, em qual contexto, sob qual contrato e com qual proteção.

## 6. Quando o EventEnvelope v1 é obrigatório

O EventEnvelope v1 é obrigatório em todo evento publicado entre módulos, evento consumido por read model autorizado, evento entregue por webhook autorizado, evento de integração normalizado, evento técnico de falha/retry/dead-letter/quarentena e evento que sirva de base para auditoria, BI, suporte, segurança ou compliance.

Ele também é obrigatório quando um módulo publicar evento para si mesmo com possibilidade de consumo futuro por outro módulo, porque o contrato deve nascer estável, rastreável e versionado.

Exceção limitada: eventos puramente internos e efêmeros, sem saída do limite interno de um módulo, podem existir fora do EventEnvelope v1 enquanto não forem contrato público, não alimentarem read model e não forem consumidos por outro módulo. No momento em que cruzarem fronteira, precisam ser envelopados.

## 7. Tipos oficiais de eventos

| Tipo | Definição | Exemplo | Regra de segurança |
|---|---|---|---|
| Evento de fato ocorrido | Comunica fato já ocorrido no domínio dono | `AccessGranted` | Não solicita execução |
| Evento de solicitação registrada | Comunica que uma solicitação foi registrada | `PartnerDeviceRegistrationRequestRegistered` | Não prova execução |
| Evento de alteração de estado | Comunica mudança de estado de recurso | `OrganizationStatusChanged` | Deve carregar estado mínimo e referência |
| Evento de ciclo de vida | Comunica criação, suspensão, restauração ou arquivamento | `PartnerCreated` | Não transporta cadastro completo |
| Evento de auditoria operacional | Comunica registro auditável operacional | `AuditTrailRecorded` | Não substitui trilha primária |
| Evento de segurança | Comunica fato de segurança | `SecurityPolicyChanged` | Sensível ou crítico conforme escopo |
| Evento de LGPD | Comunica tratamento, consentimento ou solicitação do titular | `ConsentRecordChanged` | Exige finalidade e política |
| Evento de política | Comunica mudança de política | `PolicyChanged` | Política influencia, Core decide |
| Evento de diagnóstico | Comunica diagnóstico solicitado ou registrado | `DeviceDiagnosticRequested` | IP/rota/técnico por máscara ou referência |
| Evento de integração | Comunica fato de conector ou provedor | `ConnectorHealthChanged` | Exige contrato de integração |
| Evento de notificação | Comunica solicitação, tentativa ou entrega | `NotificationDelivered` | Não expõe conteúdo bruto sensível |
| Evento analítico | Comunica relatório ou insight | `BIInsightGenerated` | Agregação, máscara e finalidade |
| Evento de evidência | Comunica referência de prova | `CameraEvidenceReferenceCreated` | Usa EvidenceReference |
| Evento de exportação | Comunica pedido, conclusão ou falha de exportação | `BIExportCompleted` | Exige auditoria de exportação |
| Evento de falha | Comunica falha controlada | `WebhookDeliveryFailed` | Erro mascarado |
| Evento de retry | Comunica nova tentativa técnica | `EventRetryScheduled` | Sem duplicar domínio |
| Evento de dead-letter | Comunica envio para dead-letter | `EventDeadLettered` | Auditável |
| Evento de quarentena | Comunica bloqueio por risco | `EventQuarantined` | Auditável e fail-closed |
| Evento externo recebido | Representa fato recebido de fora | `ExternalEventReceived` | Não é confiável ainda |
| Evento externo normalizado | Representa evento externo validado e normalizado | `ExternalEventNormalized` | Pode virar evento interno confiável por contrato |

## 8. Separação entre comando, evento, solicitação registrada, read model e webhook

| Elemento | O que faz | O que não faz | Proteção obrigatória |
|---|---|---|---|
| Comando | Solicita execução | Não prova execução | AuthorizationDecision, idempotency_key quando crítico, audit_requirement |
| Evento de fato ocorrido | Comunica fato consumado | Não solicita ação sensível diretamente | EventEnvelope, outbox, auditoria, payload mínimo |
| Evento de solicitação registrada | Comunica que pedido foi registrado | Não significa que execução ocorreu | Nome com `RequestRegistered`, request_reference |
| Read model | Permite leitura autorizada | Não transfere domínio e não vira banco compartilhado | escopo, máscara, retenção, no_domain_transfer |
| Webhook | Entrega evento a consumidor autorizado | Não substitui contrato interno | assinatura, SecretReference, retry controlado, política de terceiro |

Regra anti-confusão:

- `AccessExecutionCommand` solicita abertura ou bloqueio.
- `AccessExecutionResultRecorded` comunica resultado.
- `AccessGranted` comunica fato de acesso permitido.
- `AccessDenied` comunica fato de acesso negado.
- Nenhum desses autoriza outro módulo a executar nova ação sem passar pelo Core quando a ação for sensível.

## 9. Campos obrigatórios do EventEnvelope v1

Todos os campos abaixo compõem a moldura conceitual oficial. Campos marcados como “quando aplicável” continuam obrigatórios quando a condição ocorrer.


|Campo|Regra oficial|
|---|---|
|event_id|Identificador público único do evento. Base de deduplicação no consumidor. Nunca deve ser reutilizado.|
|event_name|Nome semântico do evento. Deve refletir fato, solicitação registrada, falha, retry, dead-letter ou quarentena.|
|event_type|Classificação oficial do evento. Exemplo: fato ocorrido, solicitação registrada, alteração de estado, segurança, LGPD.|
|event_version|Versão semântica do evento específico. Mudança incompatível exige nova versão.|
|contract_id|Contrato público versionado que rege o evento. Obrigatório para impedir evento solto.|
|contract_version|Versão do contrato público associado.|
|envelope_version|Versão do envelope. Nesta etapa: v1.|
|source_module|Módulo onde o fato, solicitação ou registro nasceu.|
|owner_module|Módulo dono do domínio representado pelo evento.|
|producer_module|Módulo ou serviço autorizado que publicou o evento.|
|tenant_id|Tenant do fluxo. Obrigatório salvo eventos globais internos controlados.|
|context_id|Contexto operacional ativo. Obrigatório salvo eventos globais internos controlados.|
|actor_reference|Referência minimizada ao ator que originou, solicitou ou representou a ação.|
|subject_reference|Referência ao sujeito afetado, quando diferente do ator.|
|resource_reference|Referência ao recurso principal afetado, quando aplicável.|
|related_resource_references|Lista de referências relacionadas, sem transferir domínio.|
|permission_code|Permissão conceitual aplicável, quando o evento derivar de ação, leitura ou solicitação protegida.|
|authorization_decision_reference|Referência à decisão do Core quando o evento derivar de ação sensível/crítica ou transportar dados protegidos.|
|policy_references|Lista de políticas que influenciaram o evento.|
|security_policy_reference|Política de segurança aplicável, quando houver risco ou ação protegida.|
|lgpd_policy_reference|Política LGPD aplicável quando envolver dado pessoal, imagem, biometria, visitante, financeiro, suporte, logs ou exportação.|
|retention_policy_reference|Política de retenção aplicável.|
|masking_policy_reference|Política de mascaramento aplicável.|
|export_control_policy_reference|Política de exportação quando o evento envolver saída, terceiro, relatório, evidência ou pacote exportado.|
|sensitivity_level|Nível oficial: Público, Interno, Restrito, Sensível ou Crítico.|
|data_categories|Categorias de dados presentes ou referenciadas no evento.|
|purpose|Finalidade declarada do evento e do tratamento de dados.|
|legal_basis_or_policy_reference|Base legal ou política equivalente, quando aplicável.|
|occurred_at|Quando o fato ocorreu no domínio dono.|
|recorded_at|Quando o fato foi registrado, quando diferente de occurred_at ou quando vier de origem externa/offline.|
|published_at|Quando o evento foi publicado.|
|correlation_id|Identificador do fluxo distribuído. Obrigatório em todo evento.|
|causation_id|Identificador do comando/evento anterior que causou este evento. Obrigatório em evento derivado.|
|command_reference|Referência ao comando original, quando derivado de comando.|
|request_reference|Referência à solicitação registrada, quando derivado dela.|
|trace_reference|Referência de observabilidade, quando aplicável.|
|idempotency_reference|Referência de idempotência quando derivado de comando crítico.|
|payload_schema_reference|Referência ao contrato conceitual do payload.|
|payload_minimized|Indicador obrigatório de que o payload foi minimizado.|
|payload|Conteúdo mínimo permitido do evento.|
|audit_reference|Referência à trilha auditável.|
|evidence_reference|Referência à evidência, quando aplicável.|
|error_reference|Referência de erro mascarado, quando aplicável.|
|retry_metadata|Metadados de retry, quando aplicável.|
|dead_letter_metadata|Metadados de dead-letter, quando aplicável.|
|quarantine_metadata|Metadados de quarentena, quando aplicável.|
|integrity_reference ou producer_signature|Referência de integridade/assinatura quando aplicável a evento crítico, externo ou webhook.|
|compatibility_policy|Política de compatibilidade do evento.|
|deprecation_policy|Política de depreciação do evento.|

## 10. Campos opcionais controlados

Campos opcionais só podem ampliar rastreabilidade, diagnóstico, entrega ou governança. Eles nunca podem reduzir segurança, burlar tenant/contexto, expor dado bruto indevido, transportar segredo, mudar semântica sem nova versão ou permitir acesso a domínio interno.

| Campo opcional | Quando usar | Limite obrigatório |
|---|---|---|
| locale | Exibição, notificação ou exportação dependente de idioma | Não altera regra de domínio |
| timezone | Evento com interpretação local de horário | Não substitui `occurred_at` canônico |
| source_ip_masked | Segurança, auditoria ou diagnóstico | Sempre mascarado quando IP bruto não for necessário |
| device_fingerprint_reference | Segurança, antifraude ou diagnóstico | Referência, não fingerprint bruto sensível |
| user_agent_masked | Diagnóstico e segurança | Mascarado |
| external_provider_reference | Integração externa | Sem segredo bruto |
| webhook_delivery_reference | Entrega a terceiro | Sem segredo, com assinatura e auditoria |
| integration_mapping_reference | Normalização de provedor externo | Não expõe payload bruto do provedor |
| read_model_update_reference | Atualização de leitura autorizada | Não transforma read model em banco compartilhado |
| business_process_reference | Fluxo de negócio distribuído | Não autoriza ação nova |
| support_case_reference | Suporte ou incidente | Escopo temporário e auditável |
| compliance_case_reference | Caso de compliance | Acesso restrito e auditável |
| evidence_chain_reference | Cadeia de custódia | Obrigatório quando houver prova ou evidência |

## 11. Campos proibidos

| Campo/dado proibido | Motivo | Correção oficial |
|---|---|---|
| senha | Segredo bruto | SecretReference ou nunca trafegar |
| token bruto | Segredo reutilizável | SecretReference |
| chave privada | Segredo crítico | SecretReference e política de rotação |
| certificado bruto | Segredo crítico | SecretReference/certificate_reference |
| segredo de webhook | Risco de fraude | SecretReference |
| segredo de provedor | Risco de acesso indevido | SecretReference |
| credencial de gateway bruta | Controle técnico crítico | SecretReference |
| credencial de dispositivo bruta | Controle físico crítico | SecretReference |
| biometria bruta | Dado pessoal sensível crítico | BiometricReference/ConsentReference, nunca bruto |
| template facial bruto | Biometria crítica | Referência e política LGPD |
| documento pessoal completo sem finalidade | Exposição indevida | FileAttachmentReference/DocumentReference com finalidade |
| imagem identificável sem política | Dado pessoal sensível | EvidenceReference ou máscara |
| vídeo bruto sem política | Exposição sensível | EvidenceReference/StreamReference controlado |
| stream bruto | Alto risco de exposição | StreamReference autorizado |
| payload completo de banco | Acoplamento e vazamento | Payload mínimo público |
| classe interna serializada | Acoplamento a implementação | Contrato público versionado |
| objeto ORM serializado | Acoplamento a banco/framework | Contrato público versionado |
| dados de outro tenant | Vazamento multi-tenant | Rejeição/quarentena |
| dados fora do contexto autorizado | Violação de escopo | Rejeição/quarentena |
| dados internos de módulo dono sem contrato público | Invasão de domínio | ResourceReference/read model autorizado |
| logs brutos com segredos | Vazamento operacional | ErrorReference e log mascarado |
| stack trace sensível | Exposição técnica | ErrorReference mascarado |
| IP interno quando referência ou máscara bastar | Exposição de rede | source_ip_masked ou NetworkReference |
| rota local sensível quando referência bastar | Exposição de rede | GatewayRouteReference |
| payload financeiro completo quando resumo ou referência bastar | Exposição financeira | FinanceReference/resumo mascarado |

## 12. Regras de payload mínimo

Payload mínimo é o conjunto de dados estritamente necessário para que o consumidor autorizado entenda o fato, atualize uma leitura autorizada, registre auditoria ou inicie avaliação própria por contrato público. Ele não carrega estado completo, segredo, banco, entidade interna ou domínio alheio.

| Tipo de payload | Permitido | Proibido |
|---|---|---|
| Mínimo | status público controlado, ids públicos, referências, resultado resumido, timestamps, motivo mascarado | entidade completa, before/after integral, banco interno |
| Permitido | campos previstos no contrato, referências e máscaras | campo não documentado com dado sensível |
| Sensível | só com finalidade, política, máscara, retenção, auditoria e autorização aplicável | dado pessoal bruto sem finalidade |
| Crítico | preferencialmente referência; se houver dado mínimo, exige fail-closed e auditoria | segredo, biometria, vídeo bruto, token, chave |
| Por referência | ResourceReference, EvidenceReference, SecretReference, FileAttachmentReference, AuditTrailReference | copiar conteúdo bruto do recurso |
| Mascarado | documento, e-mail, telefone, placa, IP, erro técnico, unidade, visitante, financeiro | valor bruto quando máscara bastar |
| Agregado | contagens, indicadores e totais com finalidade | identificação individual sem necessidade |
| Para BI | agregação, máscara, finalidade, retenção | alimentar BI identificável sem política |
| Para Auditoria | referência da trilha, ator, recurso, contexto, finalidade | log bruto com segredo |
| Para Segurança e LGPD | política, consentimento, retenção, máscara, incidente, categoria | dado pessoal bruto desnecessário |
| Para integração externa | mapeamento normalizado, referência de provedor, assinatura | payload original bruto sem validação |
| Para webhook externo | apenas campos autorizados ao consumidor externo | segredo, biometria, vídeo bruto, dado fora do contrato |
| Para notificação | template_reference, canal, status, destinatário mascarado | conteúdo sensível bruto no evento |

Regra absoluta: payload deve carregar apenas o necessário para o consumidor autorizado reagir ou atualizar leitura autorizada, sem transferir domínio.

## 13. Regras de dados sensíveis em eventos

- Todo evento sensível exige finalidade declarada.
- Todo evento sensível deve declarar `sensitivity_level`, `data_categories`, política LGPD, retenção e máscara aplicável.
- Todo evento crítico exige fail-closed.
- Todo evento sensível que envolver leitura, exportação, evidência, imagem, vídeo, biometria, visitante, financeiro, suporte remoto, conector externo, webhook externo, segredo, política ou ação física deve carregar `authorization_decision_reference` quando derivado de ação autorizada.
- Evento não cria autorização nova. Ele apenas referencia a decisão que existia no momento da ação original.
- Dado bruto só entra no payload quando política específica permitir e quando referência, máscara ou agregação não bastar. Na dúvida, usar referência.
- Eventos com dado pessoal devem permitir retenção, descarte, expurgo ou anonimização conforme política.
- Eventos de evidência preservam cadeia de custódia por referência, não por cópia de prova bruta.

## 14. Regras de ResourceReference em eventos

ResourceReference é obrigatório quando o evento aponta para recurso físico, lógico, institucional, pessoal, financeiro, operacional, técnico, de evidência, suporte, integração ou política sem transferir o domínio.

O ResourceReference deve preservar:

- owner_module do recurso;
- resource_type;
- resource_public_id;
- tenant_id;
- context_id;
- structure_reference quando localizado fisicamente;
- sensitivity_level;
- allowed_actions conceituais;
- lifecycle_state;
- authorization_scope;
- display_label minimizado;
- no_domain_transfer sempre verdadeiro.

O consumidor pode usar ResourceReference para localizar e solicitar leitura/ação autorizada ao módulo dono. Não pode usar a referência como banco compartilhado.

## 15. Regras de EvidenceReference em eventos

EvidenceReference é obrigatório quando o evento envolver prova, imagem, vídeo, snapshot, clip, documento probatório, anexo probatório, cadeia de custódia ou exportação de evidência.

Deve conter, por referência:

- evidence_reference_id;
- evidence_owner_module;
- custody_owner_module;
- source_event_reference;
- related_resource_reference;
- related_actor_reference;
- tenant_id;
- context_id;
- evidence_type;
- sensitivity_level;
- storage_reference segura;
- hash_reference quando integridade for exigida;
- retention_policy_reference;
- masking_policy_reference;
- access_policy_reference;
- chain_of_custody_reference;
- audit_reference;
- export_control_policy.

Vídeo, imagem, snapshot e clip não devem trafegar brutos quando EvidenceReference bastar.

## 16. Regras de SecretReference em eventos

SecretReference é obrigatório quando o evento precisar apontar para token, chave, certificado, segredo de webhook, segredo de provedor, credencial de gateway, credencial de dispositivo, assinatura, client secret, segredo de conector ou material criptográfico.

Regras:

- segredo bruto nunca entra em evento;
- segredo bruto nunca entra em log;
- segredo bruto nunca entra em URL;
- segredo bruto nunca entra em webhook;
- segredo bruto nunca entra em read model;
- evento pode comunicar criação, rotação, revogação ou falha de segredo apenas por referência e metadados minimizados.

## 17. Regras de AuthorizationDecision em eventos

Eventos derivados de ação sensível ou crítica devem carregar `authorization_decision_reference` emitida pelo Core Platform.

O evento não emite autorização. O consumidor não pode executar ação sensível apenas porque recebeu evento. Se o consumidor precisar agir, deve solicitar nova AuthorizationDecision para sua própria ação, no seu próprio escopo e módulo dono.

Regras:

- AuthorizationDecision pertence ao Core Platform.
- Eventos derivados herdam trilha de autorização original.
- Ações novas exigem nova autorização.
- Evento sensível sem autorização/política deve ser rejeitado, mascarado, quarentenado ou bloqueado conforme fail-closed.
- Uma autorização expirada não pode ser reaproveitada para ação nova.
- Evento de solicitação registrada não prova execução nem autorização final.

## 18. Regras de tenant e contexto

- `tenant_id` é obrigatório em eventos operacionais, sensíveis, críticos e multi-tenant.
- `context_id` é obrigatório quando houver organização, parceiro, unidade, área, cliente, recurso, dispositivo, gateway, evidência, financeiro, reserva, visitante, suporte, auditoria ou integração contextual.
- Evento global interno só pode omitir contexto se for governança superior do Master/Core e não expuser dado de tenant específico.
- Escopo Master deve ser explicitado como escopo global autorizado, nunca como ausência de tenant/contexto para dados de tenant.
- Escopo Parceiro deve limitar eventos a organizações abaixo do parceiro.
- Escopo Organização deve limitar eventos ao espaço conectado.
- Escopo Unidade/Bloco/Área/Ambiente deve usar ResourceReference ou StructureReference.
- Escopo Cliente/Usuário Final deve preservar vínculo pessoal e contexto herdado, sem expor dados de outros clientes.
- Evento fora de tenant/contexto autorizado deve ser rejeitado ou quarentenado.

## 19. Regras de actor_reference, subject_reference e resource_reference

| Referência | Definição | Não pode virar |
|---|---|---|
| actor_reference | Quem iniciou, solicitou, representou ou disparou o fato | PersonProfile bruto, UserAccount completo, credencial |
| service_actor | Serviço interno autorizado | usuário humano falso |
| system_actor | Sistema interno em ação automática controlada | bypass de autorização |
| automation_actor | Automação autorizada que solicitou ação | motor paralelo do módulo dono |
| integration_actor | Integração autorizada | provedor confiável sem normalização |
| marketplace_connector_actor | Conector instalado e autorizado | credencial do conector |
| support_actor | Suporte autorizado e escopado | acesso irrestrito |
| audit_actor | Auditor autorizado | poder operacional |
| subject_reference | Pessoa, cliente, visitante, recurso ou entidade afetada | domínio completo do módulo dono |
| resource_reference | Recurso principal afetado | banco compartilhado ou cópia do recurso |
| related_resource_references | Recursos relacionados | posse operacional transferida |

## 20. Regras de correlation_id

O `correlation_id` nasce no primeiro ponto de entrada de um fluxo distribuído: API interna, comando, evento externo recebido, solicitação do usuário, automação, webhook recebido, suporte remoto ou rotina técnica programada.

Ele deve ser propagado por comandos, eventos, APIs, webhooks, read models, logs, auditoria, retry, dead-letter e quarentena.

Usos:

- reconstruir fluxo completo;
- diagnosticar falhas;
- relacionar comando, evento, webhook, auditoria e read model;
- agrupar eventos de um mesmo processo;
- apoiar suporte e compliance;
- preservar trilha entre mundo físico e digital.

Proibições:

- não reutilizar correlation_id de tenant/contexto diferente;
- não usar correlation_id como autorização;
- não usar correlation_id para agrupar dados de tenants diferentes;
- não gerar novo correlation_id em retry do mesmo fluxo, salvo reinício administrativo explicitamente auditado.

## 21. Regras de causation_id

`causation_id` aponta o evento, comando ou registro imediatamente anterior que causou o evento atual.

Diferença:

- `correlation_id` agrupa o fluxo inteiro.
- `causation_id` liga causa imediata e consequência.

Obrigatório quando:

- evento deriva de comando;
- evento deriva de outro evento;
- evento deriva de solicitação registrada;
- evento deriva de retry, dead-letter, quarentena ou reprocessamento;
- evento externo normalizado deriva de evento externo recebido.

Evento sem causador direto deve declarar causalidade como origem primária do domínio, rotina programada autorizada ou evento externo recebido. Não deve inventar cadeia falsa.

## 22. Regras de audit_reference

`audit_reference` é a referência da trilha auditável associada ao evento. Pode apontar para trilha do produtor, trilha do consumidor, trilha de visualização, trilha de exportação, trilha de falha, trilha de quarentena ou cadeia de custódia.

Regras:

- Evento crítico deve ter auditoria de publicação.
- Consumo de evento sensível pode exigir auditoria de consumo.
- Visualização de evento sensível é auditável.
- Exportação de evento sensível é auditável.
- Falha de consumo relevante deve ser auditada.
- Dead-letter e quarentena devem ser auditados.
- Reprocessamento deve ser auditado.
- Auditoria registra; não executa regra do módulo dono.

## 23. Regras de outbox

Outbox é o registro conceitual do produtor que garante que o evento só será publicado após a decisão do domínio dono estar confirmada.

Regras:

- O produtor registra o evento em outbox.
- O evento só sai se a transação conceitual do domínio dono for confirmada.
- O evento deve ter estado de publicação.
- O evento deve ter tentativas.
- O evento deve ter controle de duplicidade.
- O evento deve preservar idempotência do produtor quando derivado de comando.
- Ordenação só é obrigação quando o domínio declarar necessidade.
- Evento não deve ser publicado antes da confirmação do fato.
- Evento que falhar publicação não deve induzir o domínio a repetir execução indevidamente.

## 24. Regras de inbox e deduplicação

Inbox é o registro conceitual do consumidor para controlar recebimento, deduplicação, versão, processamento, falha, retry, dead-letter e quarentena.

Regras:

- Consumidor registra recebimento.
- Consumidor deduplica por `event_id` e contrato.
- Consumidor valida `contract_id`, `contract_version`, `envelope_version` e `event_version`.
- Consumidor não assume estado interno do produtor.
- Consumidor deve ser idempotente.
- Consumidor deve registrar falha e retry.
- Consumidor deve rejeitar evento fora de tenant/contexto.
- Consumidor aplica permissões e políticas quando for leitura sensível ou ação derivada.
- Consumidor não usa evento como banco compartilhado.

## 25. Regras de retry

Retry é permitido para falhas transitórias de entrega, indisponibilidade temporária do consumidor, timeout controlado, falha temporária de webhook, instabilidade de integração externa ou erro técnico reversível.

Retry é proibido quando:

- erro for de autorização;
- erro for de política;
- evento violar tenant/contexto;
- payload proibido estiver presente;
- versão for incompatível sem adaptador aprovado;
- contrato estiver revogado;
- evento sensível estiver sem finalidade/política;
- segredo bruto, biometria bruta ou dados de outro tenant forem detectados.

Retry sensível deve preservar máscara, auditoria, limite de tentativas, backoff conceitual e não duplicar ação de domínio. Webhook externo e integração externa exigem assinatura, política de terceiro, dead-letter quando crítico e fail-closed.

## 26. Regras de dead-letter

Dead-letter é o destino conceitual de eventos que não puderam ser processados após tentativas controladas ou por erro permanente não perigoso.

Enviar para dead-letter quando:

- retry esgotou;
- consumidor autorizado está incompatível temporariamente;
- erro técnico permanente não indica vazamento;
- webhook externo falhou após tentativas;
- integração externa não aceitou entrega, sem suspeita de violação de segurança.

Dead-letter exige:

- metadados mascarados;
- motivo classificado;
- tentativas registradas;
- audit_reference;
- permissão de visualização restrita;
- reprocessamento autorizado;
- retenção específica.

## 27. Regras de quarentena

Quarentena é o bloqueio conceitual de evento suspeito, inseguro, fora de escopo, com payload proibido, política ausente, versão perigosa, tenant/contexto inválido, dado bruto indevido, assinatura inválida ou origem externa não confiável.

Enviar para quarentena quando:

- evento carregar segredo bruto;
- evento carregar biometria bruta;
- evento carregar vídeo/imagem sem política;
- evento cruzar tenant/contexto;
- assinatura externa falhar;
- origem externa não for confiável;
- payload violar matriz de dados sensíveis;
- contrato estiver revogado;
- autorização/política obrigatória estiver ausente;
- houver suspeita de manipulação.

Quarentena exige fail-closed, auditoria, visibilidade restrita, dados mascarados, motivo técnico e governança por Segurança e LGPD/Auditoria e Compliance quando aplicável.

## 28. Regras de reprocessamento seguro

Pode reprocessar apenas ator autorizado, serviço interno autorizado, suporte interno autorizado com escopo temporário, auditoria autorizada ou módulo dono conforme contrato.

Antes de reprocessar:

- validar tenant_id e context_id;
- validar contrato e versão;
- validar assinatura/integridade quando aplicável;
- reavaliar política de Segurança e LGPD;
- revalidar AuthorizationDecision quando a ação derivada exigir decisão nova;
- preservar `correlation_id` original;
- criar novo `causation_id` quando o reprocessamento gerar novo evento de resultado;
- deduplicar por `event_id` e referência de processamento;
- auditar a tentativa.

Bloquear reprocessamento quando houver dado proibido, política ausente, risco de duplicidade física/financeira, contrato revogado, tenant/contexto inválido ou evidência sem cadeia de custódia.

## 29. Regras de versionamento e compatibilidade

| Item | Regra |
|---|---|
| envelope_version | Versão do envelope. Nesta versão: v1 |
| event_version | Versão do evento específico |
| contract_version | Versão do contrato público |
| payload_schema_reference | Referência conceitual do payload permitido |
| Mudança aditiva | Permitida se não alterar semântica, sensibilidade, autorização ou campos obrigatórios |
| Mudança incompatível | Exige nova versão |
| Consumidor antigo | Deve tolerar campos adicionais compatíveis |
| Produtor novo | Não pode reduzir segurança para consumidor antigo |
| Produtor antigo | Pode coexistir dentro da janela de compatibilidade |
| Consumidor novo | Deve reconhecer versões suportadas e rejeitar versões revogadas |
| Semântica | Não pode mudar sem nova versão |
| Sensibilidade | Não pode ser reduzida sem decisão e política |

## 30. Regras de depreciação

Evento ou contrato depreciado deve declarar:

- data de depreciação;
- motivo;
- substituto;
- janela de suporte;
- consumidores conhecidos;
- política de retirada;
- critério de bloqueio fail-closed após retirada;
- impacto em webhooks e integrações externas;
- tratamento de read models derivados;
- auditoria da retirada.

Evento deprecated ainda deve obedecer EventEnvelope v1 enquanto estiver aceito.

## 31. Regras de nomenclatura de eventos

| Padrão | Uso | Exemplos |
|---|---|---|
| Passado simples | Fato ocorrido | `PartnerCreated`, `OrganizationCreated`, `AccessGranted` |
| `Requested` | Pedido iniciado, antes de registro definitivo ou aprovação | `PartnerCreationRequested`, `CameraLiveViewRequested` |
| `RequestRegistered` | Solicitação registrada, sem provar execução | `DataSubjectRequestRegistered`, `PartnerDeviceRegistrationRequestRegistered` |
| `ResultRecorded` | Resultado registrado por módulo dono | `AccessExecutionResultRecorded`, `BrandPublishingResultRecorded` |
| `Failed` | Falha controlada | `WebhookDeliveryFailed`, `BIExportFailed` |
| `Quarantined` | Evento bloqueado por risco | `EventQuarantined` |
| `DeadLettered` | Evento enviado a dead-letter | `EventDeadLettered` |
| `Normalized` | Evento externo validado e normalizado | `ExternalEventNormalized` |

Nomes de evento devem evitar verbo imperativo. Evento não manda. Evento relata.

## 32. Matriz de eventos mínimos por módulo


### Core Platform


|Event name|Event type|Contract ID conceitual|Sensibilidade|Regra mínima|
|---|---|---|---|---|
|AuthorizationDecisionIssued|Fato ocorrido|NODUOS.CORE.AUTHORIZATION_DECISION_ISSUED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|UserAccountCreated|Ciclo de vida / fato ocorrido|NODUOS.CORE.USER_ACCOUNT_CREATED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|UserAccountSuspended|Ciclo de vida / fato ocorrido|NODUOS.CORE.USER_ACCOUNT_SUSPENDED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|TenantCreated|Ciclo de vida / fato ocorrido|NODUOS.CORE.TENANT_CREATED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|ContextCreated|Ciclo de vida / fato ocorrido|NODUOS.CORE.CONTEXT_CREATED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|PermissionGranted|Fato ocorrido|NODUOS.CORE.PERMISSION_GRANTED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|PermissionRevoked|Fato ocorrido|NODUOS.CORE.PERMISSION_REVOKED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|ModuleActivated|Fato ocorrido|NODUOS.CORE.MODULE_ACTIVATED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|ModuleDeactivated|Fato ocorrido|NODUOS.CORE.MODULE_DEACTIVATED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|LicenseChanged|Alteração de estado|NODUOS.CORE.LICENSE_CHANGED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|FeatureFlagChanged|Alteração de estado|NODUOS.CORE.FEATURE_FLAG_CHANGED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|



### Master


|Event name|Event type|Contract ID conceitual|Sensibilidade|Regra mínima|
|---|---|---|---|---|
|MasterPartnerCreationRequestRegistered|Solicitação registrada|NODUOS.MASTER.MASTER_PARTNER_CREATION_REQUEST_REGISTERED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|MasterPartnerCreationApproved|Fato ocorrido|NODUOS.MASTER.MASTER_PARTNER_CREATION_APPROVED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|MasterPartnerCreationRejected|Fato ocorrido|NODUOS.MASTER.MASTER_PARTNER_CREATION_REJECTED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|MasterPartnerSuspensionRequestRegistered|Solicitação registrada|NODUOS.MASTER.MASTER_PARTNER_SUSPENSION_REQUEST_REGISTERED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|MasterPartnerRestorationRequestRegistered|Solicitação registrada|NODUOS.MASTER.MASTER_PARTNER_RESTORATION_REQUEST_REGISTERED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|MasterModuleReleasedToPartner|Fato ocorrido|NODUOS.MASTER.MASTER_MODULE_RELEASED_TO_PARTNER.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|MasterSensitiveExportRequestRegistered|Solicitação registrada|NODUOS.MASTER.MASTER_SENSITIVE_EXPORT_REQUEST_REGISTERED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|



### Parceiros


|Event name|Event type|Contract ID conceitual|Sensibilidade|Regra mínima|
|---|---|---|---|---|
|PartnerCreated|Ciclo de vida / fato ocorrido|NODUOS.PARTNER.PARTNER_CREATED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|PartnerProfileUpdated|Alteração de estado|NODUOS.PARTNER.PARTNER_PROFILE_UPDATED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|PartnerSuspended|Ciclo de vida / fato ocorrido|NODUOS.PARTNER.PARTNER_SUSPENDED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|PartnerRestored|Ciclo de vida / fato ocorrido|NODUOS.PARTNER.PARTNER_RESTORED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|PartnerGatewayRegistrationRequestRegistered|Solicitação registrada|NODUOS.PARTNER.PARTNER_GATEWAY_REGISTRATION_REQUEST_REGISTERED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|PartnerDeviceRegistrationRequestRegistered|Solicitação registrada|NODUOS.PARTNER.PARTNER_DEVICE_REGISTRATION_REQUEST_REGISTERED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|



### Organizações


|Event name|Event type|Contract ID conceitual|Sensibilidade|Regra mínima|
|---|---|---|---|---|
|OrganizationCreated|Ciclo de vida / fato ocorrido|NODUOS.ORG.ORGANIZATION_CREATED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|OrganizationProfileUpdated|Alteração de estado|NODUOS.ORG.ORGANIZATION_PROFILE_UPDATED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|OrganizationStatusChanged|Alteração de estado|NODUOS.ORG.ORGANIZATION_STATUS_CHANGED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|OrganizationArchived|Ciclo de vida / fato ocorrido|NODUOS.ORG.ORGANIZATION_ARCHIVED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|OrganizationRestored|Ciclo de vida / fato ocorrido|NODUOS.ORG.ORGANIZATION_RESTORED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|



### Pessoas e Clientes


|Event name|Event type|Contract ID conceitual|Sensibilidade|Regra mínima|
|---|---|---|---|---|
|PersonProfileCreated|Ciclo de vida / fato ocorrido|NODUOS.PEOPLE.PERSON_PROFILE_CREATED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|PersonProfileUpdated|Alteração de estado|NODUOS.PEOPLE.PERSON_PROFILE_UPDATED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|ClientProfileCreated|Ciclo de vida / fato ocorrido|NODUOS.PEOPLE.CLIENT_PROFILE_CREATED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|PersonUnitLinked|Fato ocorrido|NODUOS.PEOPLE.PERSON_UNIT_LINKED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|PersonConsentChanged|Alteração de estado|NODUOS.PEOPLE.PERSON_CONSENT_CHANGED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|



### Unidades, Blocos, Áreas e Ambientes


|Event name|Event type|Contract ID conceitual|Sensibilidade|Regra mínima|
|---|---|---|---|---|
|StructureRootCreated|Ciclo de vida / fato ocorrido|NODUOS.STRUCTURE.STRUCTURE_ROOT_CREATED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|PhysicalStructureNodeCreated|Ciclo de vida / fato ocorrido|NODUOS.STRUCTURE.PHYSICAL_STRUCTURE_NODE_CREATED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|StructureHierarchyChanged|Alteração de estado|NODUOS.STRUCTURE.STRUCTURE_HIERARCHY_CHANGED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|StructureVisibilityChanged|Alteração de estado|NODUOS.STRUCTURE.STRUCTURE_VISIBILITY_CHANGED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|StructureReservableFlagChanged|Alteração de estado|NODUOS.STRUCTURE.STRUCTURE_RESERVABLE_FLAG_CHANGED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|



### Herança e Permissões


|Event name|Event type|Contract ID conceitual|Sensibilidade|Regra mínima|
|---|---|---|---|---|
|AdvancedPolicyCreated|Ciclo de vida / fato ocorrido|NODUOS.POLICY.ADVANCED_POLICY_CREATED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|PolicyChanged|Alteração de estado|NODUOS.POLICY.POLICY_CHANGED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|DelegationRuleChanged|Alteração de estado|NODUOS.POLICY.DELEGATION_RULE_CHANGED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|PolicyExceptionCreated|Ciclo de vida / fato ocorrido|NODUOS.POLICY.POLICY_EXCEPTION_CREATED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|PermissionConflictDetected|Fato ocorrido|NODUOS.POLICY.PERMISSION_CONFLICT_DETECTED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|



### Gateway Local / Mikrotik / Tunnel


|Event name|Event type|Contract ID conceitual|Sensibilidade|Regra mínima|
|---|---|---|---|---|
|GatewayRegistered|Ciclo de vida / fato ocorrido|NODUOS.GATEWAY.GATEWAY_REGISTERED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|GatewayConnected|Fato ocorrido|NODUOS.GATEWAY.GATEWAY_CONNECTED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|GatewayDisconnected|Fato ocorrido|NODUOS.GATEWAY.GATEWAY_DISCONNECTED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|GatewayDiagnosticRequested|Solicitação registrada|NODUOS.GATEWAY.GATEWAY_DIAGNOSTIC_REQUESTED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|GatewayCommandResultRecorded|Fato ocorrido|NODUOS.GATEWAY.GATEWAY_COMMAND_RESULT_RECORDED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|GatewayDeviceDiscoveryCompleted|Fato ocorrido|NODUOS.GATEWAY.GATEWAY_DEVICE_DISCOVERY_COMPLETED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|



### Dispositivos


|Event name|Event type|Contract ID conceitual|Sensibilidade|Regra mínima|
|---|---|---|---|---|
|DeviceRegistered|Ciclo de vida / fato ocorrido|NODUOS.DEVICE.DEVICE_REGISTERED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|DeviceStatusChanged|Alteração de estado|NODUOS.DEVICE.DEVICE_STATUS_CHANGED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|DeviceHealthChanged|Alteração de estado|NODUOS.DEVICE.DEVICE_HEALTH_CHANGED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|DeviceDiagnosticRequested|Solicitação registrada|NODUOS.DEVICE.DEVICE_DIAGNOSTIC_REQUESTED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|DeviceLifecycleChanged|Alteração de estado|NODUOS.DEVICE.DEVICE_LIFECYCLE_CHANGED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|DeviceMaintenanceRecorded|Fato ocorrido|NODUOS.DEVICE.DEVICE_MAINTENANCE_RECORDED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|



### Controle de Acesso


|Event name|Event type|Contract ID conceitual|Sensibilidade|Regra mínima|
|---|---|---|---|---|
|AccessAttemptRecorded|Fato ocorrido|NODUOS.ACCESS.ACCESS_ATTEMPT_RECORDED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|AccessGranted|Fato ocorrido|NODUOS.ACCESS.ACCESS_GRANTED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|AccessDenied|Fato ocorrido|NODUOS.ACCESS.ACCESS_DENIED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|AccessExecutionResultRecorded|Fato ocorrido|NODUOS.ACCESS.ACCESS_EXECUTION_RESULT_RECORDED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|AccessCredentialCreated|Ciclo de vida / fato ocorrido|NODUOS.ACCESS.ACCESS_CREDENTIAL_CREATED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|AccessCredentialRevoked|Fato ocorrido|NODUOS.ACCESS.ACCESS_CREDENTIAL_REVOKED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|



### Câmeras / VMS


|Event name|Event type|Contract ID conceitual|Sensibilidade|Regra mínima|
|---|---|---|---|---|
|CameraLiveViewRequested|Solicitação registrada|NODUOS.CAMERA.CAMERA_LIVE_VIEW_REQUESTED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|CameraPlaybackRequested|Solicitação registrada|NODUOS.CAMERA.CAMERA_PLAYBACK_REQUESTED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|CameraClipCreated|Ciclo de vida / fato ocorrido|NODUOS.CAMERA.CAMERA_CLIP_CREATED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|CameraSnapshotCreated|Ciclo de vida / fato ocorrido|NODUOS.CAMERA.CAMERA_SNAPSHOT_CREATED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|CameraEvidenceReferenceCreated|Ciclo de vida / fato ocorrido|NODUOS.CAMERA.CAMERA_EVIDENCE_REFERENCE_CREATED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|VideoRetentionPolicyChanged|Alteração de estado|NODUOS.CAMERA.VIDEO_RETENTION_POLICY_CHANGED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|



### Alarmes


|Event name|Event type|Contract ID conceitual|Sensibilidade|Regra mínima|
|---|---|---|---|---|
|AlarmArmed|Fato ocorrido|NODUOS.ALARM.ALARM_ARMED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|AlarmDisarmed|Fato ocorrido|NODUOS.ALARM.ALARM_DISARMED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|AlarmTriggered|Fato ocorrido|NODUOS.ALARM.ALARM_TRIGGERED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|PanicTriggered|Fato ocorrido|NODUOS.ALARM.PANIC_TRIGGERED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|AlarmAcknowledged|Fato ocorrido|NODUOS.ALARM.ALARM_ACKNOWLEDGED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|AlarmResolved|Fato ocorrido|NODUOS.ALARM.ALARM_RESOLVED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|



### Financeiro


|Event name|Event type|Contract ID conceitual|Sensibilidade|Regra mínima|
|---|---|---|---|---|
|InvoiceCreated|Ciclo de vida / fato ocorrido|NODUOS.FINANCE.INVOICE_CREATED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|ChargeCreated|Ciclo de vida / fato ocorrido|NODUOS.FINANCE.CHARGE_CREATED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|PaymentRegistered|Ciclo de vida / fato ocorrido|NODUOS.FINANCE.PAYMENT_REGISTERED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|PaymentFailed|Falha|NODUOS.FINANCE.PAYMENT_FAILED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|ReceiptIssued|Fato ocorrido|NODUOS.FINANCE.RECEIPT_ISSUED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|OverdueDetected|Fato ocorrido|NODUOS.FINANCE.OVERDUE_DETECTED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|FinancialRestrictionSignalRegistered|Ciclo de vida / fato ocorrido|NODUOS.FINANCE.FINANCIAL_RESTRICTION_SIGNAL_REGISTERED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|



### Convites e Visitantes


|Event name|Event type|Contract ID conceitual|Sensibilidade|Regra mínima|
|---|---|---|---|---|
|VisitorInviteCreated|Ciclo de vida / fato ocorrido|NODUOS.VISITOR.VISITOR_INVITE_CREATED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|VisitApproved|Fato ocorrido|NODUOS.VISITOR.VISIT_APPROVED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|VisitDenied|Fato ocorrido|NODUOS.VISITOR.VISIT_DENIED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|VisitorCheckInRecorded|Fato ocorrido|NODUOS.VISITOR.VISITOR_CHECK_IN_RECORDED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|VisitorCheckOutRecorded|Fato ocorrido|NODUOS.VISITOR.VISITOR_CHECK_OUT_RECORDED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|TemporaryQRCodeCreated|Ciclo de vida / fato ocorrido|NODUOS.VISITOR.TEMPORARY_QR_CODE_CREATED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|



### Tickets


|Event name|Event type|Contract ID conceitual|Sensibilidade|Regra mínima|
|---|---|---|---|---|
|OperationalTicketCreated|Ciclo de vida / fato ocorrido|NODUOS.TICKET.OPERATIONAL_TICKET_CREATED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|TicketCommentAdded|Fato ocorrido|NODUOS.TICKET.TICKET_COMMENT_ADDED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|TicketEscalated|Fato ocorrido|NODUOS.TICKET.TICKET_ESCALATED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|TicketResolved|Fato ocorrido|NODUOS.TICKET.TICKET_RESOLVED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|TicketReopened|Fato ocorrido|NODUOS.TICKET.TICKET_REOPENED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|TicketAttachmentReferenceAdded|Fato ocorrido|NODUOS.TICKET.TICKET_ATTACHMENT_REFERENCE_ADDED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|



### Mural Informativo


|Event name|Event type|Contract ID conceitual|Sensibilidade|Regra mínima|
|---|---|---|---|---|
|AnnouncementPublished|Fato ocorrido|NODUOS.MURAL.ANNOUNCEMENT_PUBLISHED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|AnnouncementAcknowledged|Fato ocorrido|NODUOS.MURAL.ANNOUNCEMENT_ACKNOWLEDGED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|AnnouncementPollAnswered|Fato ocorrido|NODUOS.MURAL.ANNOUNCEMENT_POLL_ANSWERED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|AnnouncementArchived|Ciclo de vida / fato ocorrido|NODUOS.MURAL.ANNOUNCEMENT_ARCHIVED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|



### Reservas


|Event name|Event type|Contract ID conceitual|Sensibilidade|Regra mínima|
|---|---|---|---|---|
|ReservationCreated|Ciclo de vida / fato ocorrido|NODUOS.RESERVATION.RESERVATION_CREATED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|ReservationHoldCreated|Ciclo de vida / fato ocorrido|NODUOS.RESERVATION.RESERVATION_HOLD_CREATED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|ReservationApproved|Fato ocorrido|NODUOS.RESERVATION.RESERVATION_APPROVED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|ReservationCancelled|Fato ocorrido|NODUOS.RESERVATION.RESERVATION_CANCELLED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|ReservationCheckInRecorded|Fato ocorrido|NODUOS.RESERVATION.RESERVATION_CHECK_IN_RECORDED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|ReservationNoShowRecorded|Fato ocorrido|NODUOS.RESERVATION.RESERVATION_NO_SHOW_RECORDED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|ReservationChargeRequestRegistered|Solicitação registrada|NODUOS.RESERVATION.RESERVATION_CHARGE_REQUEST_REGISTERED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|



### Relatórios / BI


|Event name|Event type|Contract ID conceitual|Sensibilidade|Regra mínima|
|---|---|---|---|---|
|BIReportCreated|Ciclo de vida / fato ocorrido|NODUOS.BI.BI_REPORT_CREATED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|BIExportRequested|Solicitação registrada|NODUOS.BI.BI_EXPORT_REQUESTED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|BIExportCompleted|Fato ocorrido|NODUOS.BI.BI_EXPORT_COMPLETED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|BIExportFailed|Falha|NODUOS.BI.BI_EXPORT_FAILED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|BIInsightGenerated|Fato ocorrido|NODUOS.BI.BI_INSIGHT_GENERATED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|BIAnomalyDetected|Fato ocorrido|NODUOS.BI.BI_ANOMALY_DETECTED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|



### White-label


|Event name|Event type|Contract ID conceitual|Sensibilidade|Regra mínima|
|---|---|---|---|---|
|WhiteLabelThemeCreated|Ciclo de vida / fato ocorrido|NODUOS.WHITE_LABEL.WHITE_LABEL_THEME_CREATED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|BrandPublishingRequestRegistered|Solicitação registrada|NODUOS.WHITE_LABEL.BRAND_PUBLISHING_REQUEST_REGISTERED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|BrandPublishingResultRecorded|Fato ocorrido|NODUOS.WHITE_LABEL.BRAND_PUBLISHING_RESULT_RECORDED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|WhiteLabelThemeRollbackExecuted|Fato ocorrido|NODUOS.WHITE_LABEL.WHITE_LABEL_THEME_ROLLBACK_EXECUTED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|BrandFallbackApplied|Fato ocorrido|NODUOS.WHITE_LABEL.BRAND_FALLBACK_APPLIED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|



### Notificações


|Event name|Event type|Contract ID conceitual|Sensibilidade|Regra mínima|
|---|---|---|---|---|
|NotificationRequestRegistered|Solicitação registrada|NODUOS.NOTIFICATION.NOTIFICATION_REQUEST_REGISTERED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|NotificationDeliveryAttempted|Notificação|NODUOS.NOTIFICATION.NOTIFICATION_DELIVERY_ATTEMPTED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|NotificationDelivered|Notificação|NODUOS.NOTIFICATION.NOTIFICATION_DELIVERED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|NotificationFailed|Falha|NODUOS.NOTIFICATION.NOTIFICATION_FAILED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|NotificationPreferenceChanged|Alteração de estado|NODUOS.NOTIFICATION.NOTIFICATION_PREFERENCE_CHANGED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|NotificationOptOutChanged|Alteração de estado|NODUOS.NOTIFICATION.NOTIFICATION_OPT_OUT_CHANGED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|



### Automações


|Event name|Event type|Contract ID conceitual|Sensibilidade|Regra mínima|
|---|---|---|---|---|
|AutomationWorkflowCreated|Ciclo de vida / fato ocorrido|NODUOS.AUTOMATION.AUTOMATION_WORKFLOW_CREATED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|AutomationExecutionStarted|Fato ocorrido|NODUOS.AUTOMATION.AUTOMATION_EXECUTION_STARTED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|AutomationActionRequestRegistered|Solicitação registrada|NODUOS.AUTOMATION.AUTOMATION_ACTION_REQUEST_REGISTERED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|AutomationActionResultRecorded|Fato ocorrido|NODUOS.AUTOMATION.AUTOMATION_ACTION_RESULT_RECORDED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|AutomationExecutionFinished|Fato ocorrido|NODUOS.AUTOMATION.AUTOMATION_EXECUTION_FINISHED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|AutomationExecutionFailed|Falha|NODUOS.AUTOMATION.AUTOMATION_EXECUTION_FAILED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|



### Marketplace de Integrações


|Event name|Event type|Contract ID conceitual|Sensibilidade|Regra mínima|
|---|---|---|---|---|
|MarketplaceConnectorPublished|Fato ocorrido|NODUOS.MARKETPLACE.MARKETPLACE_CONNECTOR_PUBLISHED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|ConnectorInstallationRequested|Solicitação registrada|NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION_REQUESTED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|ConnectorInstallationCompleted|Fato ocorrido|NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION_COMPLETED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|ConnectorInstallationFailed|Falha|NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION_FAILED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|ConnectorHealthChanged|Alteração de estado|NODUOS.MARKETPLACE.CONNECTOR_HEALTH_CHANGED.v1|Restrito|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|ExternalEventReceived|Evento externo recebido|NODUOS.MARKETPLACE.EXTERNAL_EVENT_RECEIVED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|ExternalEventNormalized|Evento externo normalizado|NODUOS.MARKETPLACE.EXTERNAL_EVENT_NORMALIZED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|



### Auditoria e Compliance


|Event name|Event type|Contract ID conceitual|Sensibilidade|Regra mínima|
|---|---|---|---|---|
|AuditTrailRecorded|Auditoria / compliance|NODUOS.AUDIT.AUDIT_TRAIL_RECORDED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|AuditQueryExecuted|Auditoria / compliance|NODUOS.AUDIT.AUDIT_QUERY_EXECUTED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|AuditExportRequested|Solicitação registrada|NODUOS.AUDIT.AUDIT_EXPORT_REQUESTED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|ComplianceCaseOpened|Auditoria / compliance|NODUOS.AUDIT.COMPLIANCE_CASE_OPENED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|EvidenceChainOfCustodyUpdated|Alteração de estado|NODUOS.AUDIT.EVIDENCE_CHAIN_OF_CUSTODY_UPDATED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|ComplianceReportGenerated|Auditoria / compliance|NODUOS.AUDIT.COMPLIANCE_REPORT_GENERATED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|



### Segurança e LGPD


|Event name|Event type|Contract ID conceitual|Sensibilidade|Regra mínima|
|---|---|---|---|---|
|SecurityPolicyChanged|Alteração de estado|NODUOS.SECURITY.SECURITY_POLICY_CHANGED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|PrivacyPolicyChanged|Alteração de estado|NODUOS.SECURITY.PRIVACY_POLICY_CHANGED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|DataSubjectRequestRegistered|Solicitação registrada|NODUOS.SECURITY.DATA_SUBJECT_REQUEST_REGISTERED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|ConsentRecordChanged|Alteração de estado|NODUOS.SECURITY.CONSENT_RECORD_CHANGED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|RetentionPolicyChanged|Alteração de estado|NODUOS.SECURITY.RETENTION_POLICY_CHANGED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|MaskingPolicyChanged|Alteração de estado|NODUOS.SECURITY.MASKING_POLICY_CHANGED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|IncidentPolicyChanged|Alteração de estado|NODUOS.SECURITY.INCIDENT_POLICY_CHANGED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|



### Suporte e Operação


|Event name|Event type|Contract ID conceitual|Sensibilidade|Regra mínima|
|---|---|---|---|---|
|PlatformSupportCaseCreated|Ciclo de vida / fato ocorrido|NODUOS.SUPPORT.PLATFORM_SUPPORT_CASE_CREATED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|ServiceIncidentOpened|Fato ocorrido|NODUOS.SUPPORT.SERVICE_INCIDENT_OPENED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|ServiceIncidentResolved|Fato ocorrido|NODUOS.SUPPORT.SERVICE_INCIDENT_RESOLVED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|MaintenanceWindowScheduled|Fato ocorrido|NODUOS.SUPPORT.MAINTENANCE_WINDOW_SCHEDULED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|RemoteSupportSessionRequested|Solicitação registrada|NODUOS.SUPPORT.REMOTE_SUPPORT_SESSION_REQUESTED.v1|Crítico|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|
|PostIncidentReviewCreated|Ciclo de vida / fato ocorrido|NODUOS.SUPPORT.POST_INCIDENT_REVIEW_CREATED.v1|Sensível|EventEnvelope v1 obrigatório; payload minimizado; tenant/contexto; correlation_id; audit_reference conforme sensibilidade.|





## 32.1 Nota de consolidação sobre Event Contract IDs conceituais

Os `Contract ID conceituais` listados na matriz de eventos mínimos servem para padronizar nomes, versões e rastreabilidade dos eventos sob o `EventEnvelope v1`. Eles não transformam automaticamente cada evento mínimo em contrato público independente no Catálogo de Contratos Públicos.

A criação de contratos públicos independentes para eventos específicos deve ocorrer apenas em detalhamento técnico posterior ou por decisão oficial futura. Até lá, esses IDs devem ser lidos como identificadores conceituais de evento envelopado, subordinados ao padrão transversal `EventEnvelope v1`, ao Catálogo de Contratos Públicos, à Matriz Técnica de Permissões por Contrato e à Matriz Técnica de Dados Sensíveis por Contrato.

Regra curta: evento mínimo nasce rastreável, mas só vira contrato público próprio quando o documento central mandar.

## 33. Matriz de eventos críticos


|Event name|Event type|Owner module|Source module|Contract ID|Payload permitido|Payload proibido|Sensibilidade|AuthorizationDecision|Audit reference|Outbox|Inbox/Dedup|Retry|Dead-letter/Quarentena|Observação anti-acoplamento|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|AuthorizationDecisionIssued|Fato ocorrido|Core Platform|Core Platform|NODUOS.CORE.AUTHORIZATION_DECISION_ISSUED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|
|PermissionGranted|Fato ocorrido|Core Platform|Core Platform|NODUOS.CORE.PERMISSION_GRANTED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|
|PermissionRevoked|Fato ocorrido|Core Platform|Core Platform|NODUOS.CORE.PERMISSION_REVOKED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|
|LicenseChanged|Alteração de estado|Core Platform|Core Platform|NODUOS.CORE.LICENSE_CHANGED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|
|FeatureFlagChanged|Alteração de estado|Core Platform|Core Platform|NODUOS.CORE.FEATURE_FLAG_CHANGED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|
|MasterSensitiveExportRequestRegistered|Solicitação registrada|Master|Master|NODUOS.MASTER.MASTER_SENSITIVE_EXPORT_REQUEST_REGISTERED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|
|PermissionConflictDetected|Fato ocorrido|Herança e Permissões|Herança e Permissões|NODUOS.POLICY.PERMISSION_CONFLICT_DETECTED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|
|GatewayCommandResultRecorded|Fato ocorrido|Gateway Local / Mikrotik / Tunnel|Gateway Local / Mikrotik / Tunnel|NODUOS.GATEWAY.GATEWAY_COMMAND_RESULT_RECORDED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|
|AccessGranted|Fato ocorrido|Controle de Acesso|Controle de Acesso|NODUOS.ACCESS.ACCESS_GRANTED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|
|AccessDenied|Fato ocorrido|Controle de Acesso|Controle de Acesso|NODUOS.ACCESS.ACCESS_DENIED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|
|AccessExecutionResultRecorded|Fato ocorrido|Controle de Acesso|Controle de Acesso|NODUOS.ACCESS.ACCESS_EXECUTION_RESULT_RECORDED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|
|CameraEvidenceReferenceCreated|Ciclo de vida / fato ocorrido|Câmeras / VMS|Câmeras / VMS|NODUOS.CAMERA.CAMERA_EVIDENCE_REFERENCE_CREATED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|
|VideoRetentionPolicyChanged|Alteração de estado|Câmeras / VMS|Câmeras / VMS|NODUOS.CAMERA.VIDEO_RETENTION_POLICY_CHANGED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|
|AlarmTriggered|Fato ocorrido|Alarmes|Alarmes|NODUOS.ALARM.ALARM_TRIGGERED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|
|PanicTriggered|Fato ocorrido|Alarmes|Alarmes|NODUOS.ALARM.PANIC_TRIGGERED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|
|FinancialRestrictionSignalRegistered|Ciclo de vida / fato ocorrido|Financeiro|Financeiro|NODUOS.FINANCE.FINANCIAL_RESTRICTION_SIGNAL_REGISTERED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|
|BIExportRequested|Solicitação registrada|Relatórios / BI|Relatórios / BI|NODUOS.BI.BI_EXPORT_REQUESTED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|
|BIExportCompleted|Fato ocorrido|Relatórios / BI|Relatórios / BI|NODUOS.BI.BI_EXPORT_COMPLETED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|
|BIExportFailed|Falha|Relatórios / BI|Relatórios / BI|NODUOS.BI.BI_EXPORT_FAILED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|
|BrandPublishingRequestRegistered|Solicitação registrada|White-label|White-label|NODUOS.WHITE_LABEL.BRAND_PUBLISHING_REQUEST_REGISTERED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|
|BrandPublishingResultRecorded|Fato ocorrido|White-label|White-label|NODUOS.WHITE_LABEL.BRAND_PUBLISHING_RESULT_RECORDED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|
|AutomationActionRequestRegistered|Solicitação registrada|Automações|Automações|NODUOS.AUTOMATION.AUTOMATION_ACTION_REQUEST_REGISTERED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|
|AutomationActionResultRecorded|Fato ocorrido|Automações|Automações|NODUOS.AUTOMATION.AUTOMATION_ACTION_RESULT_RECORDED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|
|ConnectorInstallationRequested|Solicitação registrada|Marketplace de Integrações|Marketplace de Integrações|NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION_REQUESTED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|
|ConnectorInstallationCompleted|Fato ocorrido|Marketplace de Integrações|Marketplace de Integrações|NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION_COMPLETED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|
|ConnectorInstallationFailed|Falha|Marketplace de Integrações|Marketplace de Integrações|NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION_FAILED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|
|ExternalEventReceived|Evento externo recebido|Marketplace de Integrações|Marketplace de Integrações|NODUOS.MARKETPLACE.EXTERNAL_EVENT_RECEIVED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|
|ExternalEventNormalized|Evento externo normalizado|Marketplace de Integrações|Marketplace de Integrações|NODUOS.MARKETPLACE.EXTERNAL_EVENT_NORMALIZED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|
|AuditExportRequested|Solicitação registrada|Auditoria e Compliance|Auditoria e Compliance|NODUOS.AUDIT.AUDIT_EXPORT_REQUESTED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|
|EvidenceChainOfCustodyUpdated|Alteração de estado|Auditoria e Compliance|Auditoria e Compliance|NODUOS.AUDIT.EVIDENCE_CHAIN_OF_CUSTODY_UPDATED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|
|SecurityPolicyChanged|Alteração de estado|Segurança e LGPD|Segurança e LGPD|NODUOS.SECURITY.SECURITY_POLICY_CHANGED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|
|PrivacyPolicyChanged|Alteração de estado|Segurança e LGPD|Segurança e LGPD|NODUOS.SECURITY.PRIVACY_POLICY_CHANGED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|
|DataSubjectRequestRegistered|Solicitação registrada|Segurança e LGPD|Segurança e LGPD|NODUOS.SECURITY.DATA_SUBJECT_REQUEST_REGISTERED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|
|RetentionPolicyChanged|Alteração de estado|Segurança e LGPD|Segurança e LGPD|NODUOS.SECURITY.RETENTION_POLICY_CHANGED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|
|MaskingPolicyChanged|Alteração de estado|Segurança e LGPD|Segurança e LGPD|NODUOS.SECURITY.MASKING_POLICY_CHANGED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|
|RemoteSupportSessionRequested|Solicitação registrada|Suporte e Operação|Suporte e Operação|NODUOS.SUPPORT.REMOTE_SUPPORT_SESSION_REQUESTED.v1|status/resultado mínimo; referências; motivo mascarado; política; timestamps; ids públicos|segredo bruto; biometria bruta; vídeo/imagem bruta sem política; banco interno; dado fora do tenant/contexto|Crítico|Sim, quando derivado de ação sensível/crítica; nova ação exige nova decisão|Obrigatório|Sim|Sim|Controlado|Sim|Não executar domínio alheio; consumidor deve usar contrato/API do módulo dono para ação nova.|


## 34. Matriz de eventos sensíveis


|Event name|Owner module|Event type|Sensibilidade|Contract ID|Referências obrigatórias|Máscara/retenção|Fail-closed|
|---|---|---|---|---|---|---|---|
|AuthorizationDecisionIssued|Core Platform|Fato ocorrido|Crítico|NODUOS.CORE.AUTHORIZATION_DECISION_ISSUED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|UserAccountCreated|Core Platform|Ciclo de vida / fato ocorrido|Sensível|NODUOS.CORE.USER_ACCOUNT_CREATED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|UserAccountSuspended|Core Platform|Ciclo de vida / fato ocorrido|Sensível|NODUOS.CORE.USER_ACCOUNT_SUSPENDED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|PermissionGranted|Core Platform|Fato ocorrido|Crítico|NODUOS.CORE.PERMISSION_GRANTED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|PermissionRevoked|Core Platform|Fato ocorrido|Crítico|NODUOS.CORE.PERMISSION_REVOKED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|LicenseChanged|Core Platform|Alteração de estado|Crítico|NODUOS.CORE.LICENSE_CHANGED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|FeatureFlagChanged|Core Platform|Alteração de estado|Crítico|NODUOS.CORE.FEATURE_FLAG_CHANGED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|MasterSensitiveExportRequestRegistered|Master|Solicitação registrada|Crítico|NODUOS.MASTER.MASTER_SENSITIVE_EXPORT_REQUEST_REGISTERED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|PartnerProfileUpdated|Parceiros|Alteração de estado|Sensível|NODUOS.PARTNER.PARTNER_PROFILE_UPDATED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|PartnerGatewayRegistrationRequestRegistered|Parceiros|Solicitação registrada|Sensível|NODUOS.PARTNER.PARTNER_GATEWAY_REGISTRATION_REQUEST_REGISTERED.v1|SecretReference quando segredo estiver envolvido; ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|PartnerDeviceRegistrationRequestRegistered|Parceiros|Solicitação registrada|Sensível|NODUOS.PARTNER.PARTNER_DEVICE_REGISTRATION_REQUEST_REGISTERED.v1|SecretReference quando segredo estiver envolvido; ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|OrganizationProfileUpdated|Organizações|Alteração de estado|Sensível|NODUOS.ORG.ORGANIZATION_PROFILE_UPDATED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|PersonProfileCreated|Pessoas e Clientes|Ciclo de vida / fato ocorrido|Sensível|NODUOS.PEOPLE.PERSON_PROFILE_CREATED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|PersonProfileUpdated|Pessoas e Clientes|Alteração de estado|Sensível|NODUOS.PEOPLE.PERSON_PROFILE_UPDATED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|ClientProfileCreated|Pessoas e Clientes|Ciclo de vida / fato ocorrido|Sensível|NODUOS.PEOPLE.CLIENT_PROFILE_CREATED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|PersonUnitLinked|Pessoas e Clientes|Fato ocorrido|Sensível|NODUOS.PEOPLE.PERSON_UNIT_LINKED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|PersonConsentChanged|Pessoas e Clientes|Alteração de estado|Sensível|NODUOS.PEOPLE.PERSON_CONSENT_CHANGED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|PermissionConflictDetected|Herança e Permissões|Fato ocorrido|Crítico|NODUOS.POLICY.PERMISSION_CONFLICT_DETECTED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|GatewayRegistered|Gateway Local / Mikrotik / Tunnel|Ciclo de vida / fato ocorrido|Sensível|NODUOS.GATEWAY.GATEWAY_REGISTERED.v1|SecretReference quando segredo estiver envolvido; ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|GatewayConnected|Gateway Local / Mikrotik / Tunnel|Fato ocorrido|Sensível|NODUOS.GATEWAY.GATEWAY_CONNECTED.v1|SecretReference quando segredo estiver envolvido; ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|GatewayDisconnected|Gateway Local / Mikrotik / Tunnel|Fato ocorrido|Sensível|NODUOS.GATEWAY.GATEWAY_DISCONNECTED.v1|SecretReference quando segredo estiver envolvido; ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|GatewayDiagnosticRequested|Gateway Local / Mikrotik / Tunnel|Solicitação registrada|Sensível|NODUOS.GATEWAY.GATEWAY_DIAGNOSTIC_REQUESTED.v1|SecretReference quando segredo estiver envolvido; ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|GatewayCommandResultRecorded|Gateway Local / Mikrotik / Tunnel|Fato ocorrido|Crítico|NODUOS.GATEWAY.GATEWAY_COMMAND_RESULT_RECORDED.v1|SecretReference quando segredo estiver envolvido; ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|GatewayDeviceDiscoveryCompleted|Gateway Local / Mikrotik / Tunnel|Fato ocorrido|Sensível|NODUOS.GATEWAY.GATEWAY_DEVICE_DISCOVERY_COMPLETED.v1|SecretReference quando segredo estiver envolvido; ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|DeviceRegistered|Dispositivos|Ciclo de vida / fato ocorrido|Sensível|NODUOS.DEVICE.DEVICE_REGISTERED.v1|SecretReference quando segredo estiver envolvido; ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|DeviceStatusChanged|Dispositivos|Alteração de estado|Sensível|NODUOS.DEVICE.DEVICE_STATUS_CHANGED.v1|SecretReference quando segredo estiver envolvido; ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|DeviceHealthChanged|Dispositivos|Alteração de estado|Sensível|NODUOS.DEVICE.DEVICE_HEALTH_CHANGED.v1|SecretReference quando segredo estiver envolvido; ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|DeviceDiagnosticRequested|Dispositivos|Solicitação registrada|Sensível|NODUOS.DEVICE.DEVICE_DIAGNOSTIC_REQUESTED.v1|SecretReference quando segredo estiver envolvido; ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|DeviceLifecycleChanged|Dispositivos|Alteração de estado|Sensível|NODUOS.DEVICE.DEVICE_LIFECYCLE_CHANGED.v1|SecretReference quando segredo estiver envolvido; ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|DeviceMaintenanceRecorded|Dispositivos|Fato ocorrido|Sensível|NODUOS.DEVICE.DEVICE_MAINTENANCE_RECORDED.v1|SecretReference quando segredo estiver envolvido; ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|AccessAttemptRecorded|Controle de Acesso|Fato ocorrido|Sensível|NODUOS.ACCESS.ACCESS_ATTEMPT_RECORDED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|AccessGranted|Controle de Acesso|Fato ocorrido|Crítico|NODUOS.ACCESS.ACCESS_GRANTED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|AccessDenied|Controle de Acesso|Fato ocorrido|Crítico|NODUOS.ACCESS.ACCESS_DENIED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|AccessExecutionResultRecorded|Controle de Acesso|Fato ocorrido|Crítico|NODUOS.ACCESS.ACCESS_EXECUTION_RESULT_RECORDED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|AccessCredentialCreated|Controle de Acesso|Ciclo de vida / fato ocorrido|Sensível|NODUOS.ACCESS.ACCESS_CREDENTIAL_CREATED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|AccessCredentialRevoked|Controle de Acesso|Fato ocorrido|Sensível|NODUOS.ACCESS.ACCESS_CREDENTIAL_REVOKED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|CameraLiveViewRequested|Câmeras / VMS|Solicitação registrada|Sensível|NODUOS.CAMERA.CAMERA_LIVE_VIEW_REQUESTED.v1|EvidenceReference quando aplicável; ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|CameraPlaybackRequested|Câmeras / VMS|Solicitação registrada|Sensível|NODUOS.CAMERA.CAMERA_PLAYBACK_REQUESTED.v1|EvidenceReference quando aplicável; ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|CameraClipCreated|Câmeras / VMS|Ciclo de vida / fato ocorrido|Sensível|NODUOS.CAMERA.CAMERA_CLIP_CREATED.v1|EvidenceReference quando aplicável; ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|CameraSnapshotCreated|Câmeras / VMS|Ciclo de vida / fato ocorrido|Sensível|NODUOS.CAMERA.CAMERA_SNAPSHOT_CREATED.v1|EvidenceReference quando aplicável; ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|CameraEvidenceReferenceCreated|Câmeras / VMS|Ciclo de vida / fato ocorrido|Crítico|NODUOS.CAMERA.CAMERA_EVIDENCE_REFERENCE_CREATED.v1|EvidenceReference quando aplicável; ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|VideoRetentionPolicyChanged|Câmeras / VMS|Alteração de estado|Crítico|NODUOS.CAMERA.VIDEO_RETENTION_POLICY_CHANGED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|AlarmArmed|Alarmes|Fato ocorrido|Sensível|NODUOS.ALARM.ALARM_ARMED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|AlarmDisarmed|Alarmes|Fato ocorrido|Sensível|NODUOS.ALARM.ALARM_DISARMED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|AlarmTriggered|Alarmes|Fato ocorrido|Crítico|NODUOS.ALARM.ALARM_TRIGGERED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|PanicTriggered|Alarmes|Fato ocorrido|Crítico|NODUOS.ALARM.PANIC_TRIGGERED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|AlarmAcknowledged|Alarmes|Fato ocorrido|Sensível|NODUOS.ALARM.ALARM_ACKNOWLEDGED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|AlarmResolved|Alarmes|Fato ocorrido|Sensível|NODUOS.ALARM.ALARM_RESOLVED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|InvoiceCreated|Financeiro|Ciclo de vida / fato ocorrido|Sensível|NODUOS.FINANCE.INVOICE_CREATED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|ChargeCreated|Financeiro|Ciclo de vida / fato ocorrido|Sensível|NODUOS.FINANCE.CHARGE_CREATED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|PaymentRegistered|Financeiro|Ciclo de vida / fato ocorrido|Sensível|NODUOS.FINANCE.PAYMENT_REGISTERED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|PaymentFailed|Financeiro|Falha|Sensível|NODUOS.FINANCE.PAYMENT_FAILED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|ReceiptIssued|Financeiro|Fato ocorrido|Sensível|NODUOS.FINANCE.RECEIPT_ISSUED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|OverdueDetected|Financeiro|Fato ocorrido|Sensível|NODUOS.FINANCE.OVERDUE_DETECTED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|FinancialRestrictionSignalRegistered|Financeiro|Ciclo de vida / fato ocorrido|Crítico|NODUOS.FINANCE.FINANCIAL_RESTRICTION_SIGNAL_REGISTERED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|VisitorInviteCreated|Convites e Visitantes|Ciclo de vida / fato ocorrido|Sensível|NODUOS.VISITOR.VISITOR_INVITE_CREATED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|VisitApproved|Convites e Visitantes|Fato ocorrido|Sensível|NODUOS.VISITOR.VISIT_APPROVED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|VisitDenied|Convites e Visitantes|Fato ocorrido|Sensível|NODUOS.VISITOR.VISIT_DENIED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|VisitorCheckInRecorded|Convites e Visitantes|Fato ocorrido|Sensível|NODUOS.VISITOR.VISITOR_CHECK_IN_RECORDED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|VisitorCheckOutRecorded|Convites e Visitantes|Fato ocorrido|Sensível|NODUOS.VISITOR.VISITOR_CHECK_OUT_RECORDED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|TemporaryQRCodeCreated|Convites e Visitantes|Ciclo de vida / fato ocorrido|Sensível|NODUOS.VISITOR.TEMPORARY_QR_CODE_CREATED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|OperationalTicketCreated|Tickets|Ciclo de vida / fato ocorrido|Sensível|NODUOS.TICKET.OPERATIONAL_TICKET_CREATED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|TicketCommentAdded|Tickets|Fato ocorrido|Sensível|NODUOS.TICKET.TICKET_COMMENT_ADDED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|TicketEscalated|Tickets|Fato ocorrido|Sensível|NODUOS.TICKET.TICKET_ESCALATED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|TicketResolved|Tickets|Fato ocorrido|Sensível|NODUOS.TICKET.TICKET_RESOLVED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|TicketReopened|Tickets|Fato ocorrido|Sensível|NODUOS.TICKET.TICKET_REOPENED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|TicketAttachmentReferenceAdded|Tickets|Fato ocorrido|Sensível|NODUOS.TICKET.TICKET_ATTACHMENT_REFERENCE_ADDED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|ReservationCreated|Reservas|Ciclo de vida / fato ocorrido|Sensível|NODUOS.RESERVATION.RESERVATION_CREATED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|ReservationHoldCreated|Reservas|Ciclo de vida / fato ocorrido|Sensível|NODUOS.RESERVATION.RESERVATION_HOLD_CREATED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|ReservationApproved|Reservas|Fato ocorrido|Sensível|NODUOS.RESERVATION.RESERVATION_APPROVED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|ReservationCancelled|Reservas|Fato ocorrido|Sensível|NODUOS.RESERVATION.RESERVATION_CANCELLED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|ReservationCheckInRecorded|Reservas|Fato ocorrido|Sensível|NODUOS.RESERVATION.RESERVATION_CHECK_IN_RECORDED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|ReservationNoShowRecorded|Reservas|Fato ocorrido|Sensível|NODUOS.RESERVATION.RESERVATION_NO_SHOW_RECORDED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|ReservationChargeRequestRegistered|Reservas|Solicitação registrada|Sensível|NODUOS.RESERVATION.RESERVATION_CHARGE_REQUEST_REGISTERED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|BIReportCreated|Relatórios / BI|Ciclo de vida / fato ocorrido|Sensível|NODUOS.BI.BI_REPORT_CREATED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|BIExportRequested|Relatórios / BI|Solicitação registrada|Crítico|NODUOS.BI.BI_EXPORT_REQUESTED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|BIExportCompleted|Relatórios / BI|Fato ocorrido|Crítico|NODUOS.BI.BI_EXPORT_COMPLETED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|BIExportFailed|Relatórios / BI|Falha|Crítico|NODUOS.BI.BI_EXPORT_FAILED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|BIInsightGenerated|Relatórios / BI|Fato ocorrido|Sensível|NODUOS.BI.BI_INSIGHT_GENERATED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|BrandPublishingRequestRegistered|White-label|Solicitação registrada|Crítico|NODUOS.WHITE_LABEL.BRAND_PUBLISHING_REQUEST_REGISTERED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|BrandPublishingResultRecorded|White-label|Fato ocorrido|Crítico|NODUOS.WHITE_LABEL.BRAND_PUBLISHING_RESULT_RECORDED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|NotificationPreferenceChanged|Notificações|Alteração de estado|Sensível|NODUOS.NOTIFICATION.NOTIFICATION_PREFERENCE_CHANGED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|NotificationOptOutChanged|Notificações|Alteração de estado|Sensível|NODUOS.NOTIFICATION.NOTIFICATION_OPT_OUT_CHANGED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|AutomationActionRequestRegistered|Automações|Solicitação registrada|Crítico|NODUOS.AUTOMATION.AUTOMATION_ACTION_REQUEST_REGISTERED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|AutomationActionResultRecorded|Automações|Fato ocorrido|Crítico|NODUOS.AUTOMATION.AUTOMATION_ACTION_RESULT_RECORDED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|ConnectorInstallationRequested|Marketplace de Integrações|Solicitação registrada|Crítico|NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION_REQUESTED.v1|SecretReference quando segredo estiver envolvido; ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|ConnectorInstallationCompleted|Marketplace de Integrações|Fato ocorrido|Crítico|NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION_COMPLETED.v1|SecretReference quando segredo estiver envolvido; ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|ConnectorInstallationFailed|Marketplace de Integrações|Falha|Crítico|NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION_FAILED.v1|SecretReference quando segredo estiver envolvido; ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|ExternalEventReceived|Marketplace de Integrações|Evento externo recebido|Crítico|NODUOS.MARKETPLACE.EXTERNAL_EVENT_RECEIVED.v1|SecretReference quando segredo estiver envolvido; ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|ExternalEventNormalized|Marketplace de Integrações|Evento externo normalizado|Crítico|NODUOS.MARKETPLACE.EXTERNAL_EVENT_NORMALIZED.v1|SecretReference quando segredo estiver envolvido; ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|AuditTrailRecorded|Auditoria e Compliance|Auditoria / compliance|Sensível|NODUOS.AUDIT.AUDIT_TRAIL_RECORDED.v1|EvidenceReference quando aplicável; ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|AuditQueryExecuted|Auditoria e Compliance|Auditoria / compliance|Sensível|NODUOS.AUDIT.AUDIT_QUERY_EXECUTED.v1|EvidenceReference quando aplicável; ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|AuditExportRequested|Auditoria e Compliance|Solicitação registrada|Crítico|NODUOS.AUDIT.AUDIT_EXPORT_REQUESTED.v1|EvidenceReference quando aplicável; ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|ComplianceCaseOpened|Auditoria e Compliance|Auditoria / compliance|Sensível|NODUOS.AUDIT.COMPLIANCE_CASE_OPENED.v1|EvidenceReference quando aplicável; ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|EvidenceChainOfCustodyUpdated|Auditoria e Compliance|Alteração de estado|Crítico|NODUOS.AUDIT.EVIDENCE_CHAIN_OF_CUSTODY_UPDATED.v1|EvidenceReference quando aplicável; ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|ComplianceReportGenerated|Auditoria e Compliance|Auditoria / compliance|Sensível|NODUOS.AUDIT.COMPLIANCE_REPORT_GENERATED.v1|EvidenceReference quando aplicável; ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|SecurityPolicyChanged|Segurança e LGPD|Alteração de estado|Crítico|NODUOS.SECURITY.SECURITY_POLICY_CHANGED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|PrivacyPolicyChanged|Segurança e LGPD|Alteração de estado|Crítico|NODUOS.SECURITY.PRIVACY_POLICY_CHANGED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|DataSubjectRequestRegistered|Segurança e LGPD|Solicitação registrada|Crítico|NODUOS.SECURITY.DATA_SUBJECT_REQUEST_REGISTERED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|ConsentRecordChanged|Segurança e LGPD|Alteração de estado|Sensível|NODUOS.SECURITY.CONSENT_RECORD_CHANGED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|RetentionPolicyChanged|Segurança e LGPD|Alteração de estado|Crítico|NODUOS.SECURITY.RETENTION_POLICY_CHANGED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|MaskingPolicyChanged|Segurança e LGPD|Alteração de estado|Crítico|NODUOS.SECURITY.MASKING_POLICY_CHANGED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|IncidentPolicyChanged|Segurança e LGPD|Alteração de estado|Sensível|NODUOS.SECURITY.INCIDENT_POLICY_CHANGED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|PlatformSupportCaseCreated|Suporte e Operação|Ciclo de vida / fato ocorrido|Sensível|NODUOS.SUPPORT.PLATFORM_SUPPORT_CASE_CREATED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|ServiceIncidentOpened|Suporte e Operação|Fato ocorrido|Sensível|NODUOS.SUPPORT.SERVICE_INCIDENT_OPENED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|ServiceIncidentResolved|Suporte e Operação|Fato ocorrido|Sensível|NODUOS.SUPPORT.SERVICE_INCIDENT_RESOLVED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|MaintenanceWindowScheduled|Suporte e Operação|Fato ocorrido|Sensível|NODUOS.SUPPORT.MAINTENANCE_WINDOW_SCHEDULED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|RemoteSupportSessionRequested|Suporte e Operação|Solicitação registrada|Crítico|NODUOS.SUPPORT.REMOTE_SUPPORT_SESSION_REQUESTED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|
|PostIncidentReviewCreated|Suporte e Operação|Ciclo de vida / fato ocorrido|Sensível|NODUOS.SUPPORT.POST_INCIDENT_REVIEW_CREATED.v1|ResourceReference|Máscara por perfil/finalidade; retenção específica quando aplicável|Fail-closed para autorização, política, tenant/contexto ou payload proibido|


## 35. Matriz de eventos com dados pessoais


|Event name|Owner module|Sensibilidade|Contract ID|Regra|
|---|---|---|---|---|
|UserAccountCreated|Core Platform|Sensível|NODUOS.CORE.USER_ACCOUNT_CREATED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|
|UserAccountSuspended|Core Platform|Sensível|NODUOS.CORE.USER_ACCOUNT_SUSPENDED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|
|PersonProfileCreated|Pessoas e Clientes|Sensível|NODUOS.PEOPLE.PERSON_PROFILE_CREATED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|
|PersonProfileUpdated|Pessoas e Clientes|Sensível|NODUOS.PEOPLE.PERSON_PROFILE_UPDATED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|
|ClientProfileCreated|Pessoas e Clientes|Sensível|NODUOS.PEOPLE.CLIENT_PROFILE_CREATED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|
|PersonUnitLinked|Pessoas e Clientes|Sensível|NODUOS.PEOPLE.PERSON_UNIT_LINKED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|
|PersonConsentChanged|Pessoas e Clientes|Sensível|NODUOS.PEOPLE.PERSON_CONSENT_CHANGED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|
|VisitorInviteCreated|Convites e Visitantes|Sensível|NODUOS.VISITOR.VISITOR_INVITE_CREATED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|
|VisitApproved|Convites e Visitantes|Sensível|NODUOS.VISITOR.VISIT_APPROVED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|
|VisitDenied|Convites e Visitantes|Sensível|NODUOS.VISITOR.VISIT_DENIED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|
|VisitorCheckInRecorded|Convites e Visitantes|Sensível|NODUOS.VISITOR.VISITOR_CHECK_IN_RECORDED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|
|VisitorCheckOutRecorded|Convites e Visitantes|Sensível|NODUOS.VISITOR.VISITOR_CHECK_OUT_RECORDED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|
|OperationalTicketCreated|Tickets|Sensível|NODUOS.TICKET.OPERATIONAL_TICKET_CREATED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|
|TicketCommentAdded|Tickets|Sensível|NODUOS.TICKET.TICKET_COMMENT_ADDED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|
|TicketEscalated|Tickets|Sensível|NODUOS.TICKET.TICKET_ESCALATED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|
|TicketResolved|Tickets|Sensível|NODUOS.TICKET.TICKET_RESOLVED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|
|TicketReopened|Tickets|Sensível|NODUOS.TICKET.TICKET_REOPENED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|
|TicketAttachmentReferenceAdded|Tickets|Sensível|NODUOS.TICKET.TICKET_ATTACHMENT_REFERENCE_ADDED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|
|ReservationCreated|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_CREATED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|
|ReservationHoldCreated|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_HOLD_CREATED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|
|ReservationApproved|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_APPROVED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|
|ReservationCancelled|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_CANCELLED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|
|ReservationCheckInRecorded|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_CHECK_IN_RECORDED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|
|ReservationNoShowRecorded|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_NO_SHOW_RECORDED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|
|ReservationChargeRequestRegistered|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_CHARGE_REQUEST_REGISTERED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|
|NotificationRequestRegistered|Notificações|Restrito|NODUOS.NOTIFICATION.NOTIFICATION_REQUEST_REGISTERED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|
|NotificationDeliveryAttempted|Notificações|Restrito|NODUOS.NOTIFICATION.NOTIFICATION_DELIVERY_ATTEMPTED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|
|NotificationDelivered|Notificações|Restrito|NODUOS.NOTIFICATION.NOTIFICATION_DELIVERED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|
|NotificationFailed|Notificações|Restrito|NODUOS.NOTIFICATION.NOTIFICATION_FAILED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|
|NotificationPreferenceChanged|Notificações|Sensível|NODUOS.NOTIFICATION.NOTIFICATION_PREFERENCE_CHANGED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|
|NotificationOptOutChanged|Notificações|Sensível|NODUOS.NOTIFICATION.NOTIFICATION_OPT_OUT_CHANGED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|
|AuditQueryExecuted|Auditoria e Compliance|Sensível|NODUOS.AUDIT.AUDIT_QUERY_EXECUTED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|
|DataSubjectRequestRegistered|Segurança e LGPD|Crítico|NODUOS.SECURITY.DATA_SUBJECT_REQUEST_REGISTERED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|
|ConsentRecordChanged|Segurança e LGPD|Sensível|NODUOS.SECURITY.CONSENT_RECORD_CHANGED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|
|PlatformSupportCaseCreated|Suporte e Operação|Sensível|NODUOS.SUPPORT.PLATFORM_SUPPORT_CASE_CREATED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|
|RemoteSupportSessionRequested|Suporte e Operação|Crítico|NODUOS.SUPPORT.REMOTE_SUPPORT_SESSION_REQUESTED.v1|Exige finalidade, LGPD, actor/subject/resource references, máscara e auditoria quando houver visualização/consumo sensível.|


## 36. Matriz de eventos com financeiro


|Event name|Owner module|Sensibilidade|Contract ID|Regra|
|---|---|---|---|---|
|InvoiceCreated|Financeiro|Sensível|NODUOS.FINANCE.INVOICE_CREATED.v1|Exige resumo ou referência financeira; payload financeiro completo é proibido quando resumo/referência bastar.|
|ChargeCreated|Financeiro|Sensível|NODUOS.FINANCE.CHARGE_CREATED.v1|Exige resumo ou referência financeira; payload financeiro completo é proibido quando resumo/referência bastar.|
|PaymentRegistered|Financeiro|Sensível|NODUOS.FINANCE.PAYMENT_REGISTERED.v1|Exige resumo ou referência financeira; payload financeiro completo é proibido quando resumo/referência bastar.|
|PaymentFailed|Financeiro|Sensível|NODUOS.FINANCE.PAYMENT_FAILED.v1|Exige resumo ou referência financeira; payload financeiro completo é proibido quando resumo/referência bastar.|
|ReceiptIssued|Financeiro|Sensível|NODUOS.FINANCE.RECEIPT_ISSUED.v1|Exige resumo ou referência financeira; payload financeiro completo é proibido quando resumo/referência bastar.|
|OverdueDetected|Financeiro|Sensível|NODUOS.FINANCE.OVERDUE_DETECTED.v1|Exige resumo ou referência financeira; payload financeiro completo é proibido quando resumo/referência bastar.|
|FinancialRestrictionSignalRegistered|Financeiro|Crítico|NODUOS.FINANCE.FINANCIAL_RESTRICTION_SIGNAL_REGISTERED.v1|Exige resumo ou referência financeira; payload financeiro completo é proibido quando resumo/referência bastar.|
|ReservationChargeRequestRegistered|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_CHARGE_REQUEST_REGISTERED.v1|Exige resumo ou referência financeira; payload financeiro completo é proibido quando resumo/referência bastar.|
|BIExportRequested|Relatórios / BI|Crítico|NODUOS.BI.BI_EXPORT_REQUESTED.v1|Exige resumo ou referência financeira; payload financeiro completo é proibido quando resumo/referência bastar.|
|BIExportCompleted|Relatórios / BI|Crítico|NODUOS.BI.BI_EXPORT_COMPLETED.v1|Exige resumo ou referência financeira; payload financeiro completo é proibido quando resumo/referência bastar.|
|BIExportFailed|Relatórios / BI|Crítico|NODUOS.BI.BI_EXPORT_FAILED.v1|Exige resumo ou referência financeira; payload financeiro completo é proibido quando resumo/referência bastar.|


## 37. Matriz de eventos com imagem, vídeo ou evidência


|Event name|Owner module|Sensibilidade|Contract ID|Regra|
|---|---|---|---|---|
|CameraLiveViewRequested|Câmeras / VMS|Sensível|NODUOS.CAMERA.CAMERA_LIVE_VIEW_REQUESTED.v1|Exige EvidenceReference, retenção, máscara, política de exportação e auditoria.|
|CameraPlaybackRequested|Câmeras / VMS|Sensível|NODUOS.CAMERA.CAMERA_PLAYBACK_REQUESTED.v1|Exige EvidenceReference, retenção, máscara, política de exportação e auditoria.|
|CameraClipCreated|Câmeras / VMS|Sensível|NODUOS.CAMERA.CAMERA_CLIP_CREATED.v1|Exige EvidenceReference, retenção, máscara, política de exportação e auditoria.|
|CameraSnapshotCreated|Câmeras / VMS|Sensível|NODUOS.CAMERA.CAMERA_SNAPSHOT_CREATED.v1|Exige EvidenceReference, retenção, máscara, política de exportação e auditoria.|
|CameraEvidenceReferenceCreated|Câmeras / VMS|Crítico|NODUOS.CAMERA.CAMERA_EVIDENCE_REFERENCE_CREATED.v1|Exige EvidenceReference, retenção, máscara, política de exportação e auditoria.|
|VideoRetentionPolicyChanged|Câmeras / VMS|Crítico|NODUOS.CAMERA.VIDEO_RETENTION_POLICY_CHANGED.v1|Exige EvidenceReference, retenção, máscara, política de exportação e auditoria.|
|EvidenceChainOfCustodyUpdated|Auditoria e Compliance|Crítico|NODUOS.AUDIT.EVIDENCE_CHAIN_OF_CUSTODY_UPDATED.v1|Exige EvidenceReference, retenção, máscara, política de exportação e auditoria.|


## 38. Matriz de eventos com biometria ou credencial física


|Event name|Owner module|Sensibilidade|Contract ID|Regra|
|---|---|---|---|---|
|PersonConsentChanged|Pessoas e Clientes|Sensível|NODUOS.PEOPLE.PERSON_CONSENT_CHANGED.v1|Biometria bruta e template facial bruto são proibidos; usar referência e consentimento/política.|
|AccessAttemptRecorded|Controle de Acesso|Sensível|NODUOS.ACCESS.ACCESS_ATTEMPT_RECORDED.v1|Biometria bruta e template facial bruto são proibidos; usar referência e consentimento/política.|
|AccessGranted|Controle de Acesso|Crítico|NODUOS.ACCESS.ACCESS_GRANTED.v1|Biometria bruta e template facial bruto são proibidos; usar referência e consentimento/política.|
|AccessDenied|Controle de Acesso|Crítico|NODUOS.ACCESS.ACCESS_DENIED.v1|Biometria bruta e template facial bruto são proibidos; usar referência e consentimento/política.|
|AccessCredentialCreated|Controle de Acesso|Sensível|NODUOS.ACCESS.ACCESS_CREDENTIAL_CREATED.v1|Biometria bruta e template facial bruto são proibidos; usar referência e consentimento/política.|
|AccessCredentialRevoked|Controle de Acesso|Sensível|NODUOS.ACCESS.ACCESS_CREDENTIAL_REVOKED.v1|Biometria bruta e template facial bruto são proibidos; usar referência e consentimento/política.|
|ConsentRecordChanged|Segurança e LGPD|Sensível|NODUOS.SECURITY.CONSENT_RECORD_CHANGED.v1|Biometria bruta e template facial bruto são proibidos; usar referência e consentimento/política.|


## 39. Matriz de eventos com visitantes


|Event name|Owner module|Sensibilidade|Contract ID|Regra|
|---|---|---|---|---|
|VisitorInviteCreated|Convites e Visitantes|Sensível|NODUOS.VISITOR.VISITOR_INVITE_CREATED.v1|Exige finalidade, expiração, máscara, retenção curta e ResourceReference.|
|VisitApproved|Convites e Visitantes|Sensível|NODUOS.VISITOR.VISIT_APPROVED.v1|Exige finalidade, expiração, máscara, retenção curta e ResourceReference.|
|VisitDenied|Convites e Visitantes|Sensível|NODUOS.VISITOR.VISIT_DENIED.v1|Exige finalidade, expiração, máscara, retenção curta e ResourceReference.|
|VisitorCheckInRecorded|Convites e Visitantes|Sensível|NODUOS.VISITOR.VISITOR_CHECK_IN_RECORDED.v1|Exige finalidade, expiração, máscara, retenção curta e ResourceReference.|
|VisitorCheckOutRecorded|Convites e Visitantes|Sensível|NODUOS.VISITOR.VISITOR_CHECK_OUT_RECORDED.v1|Exige finalidade, expiração, máscara, retenção curta e ResourceReference.|
|TemporaryQRCodeCreated|Convites e Visitantes|Sensível|NODUOS.VISITOR.TEMPORARY_QR_CODE_CREATED.v1|Exige finalidade, expiração, máscara, retenção curta e ResourceReference.|


## 40. Matriz de eventos com segredos, certificados, chaves ou tokens


|Event name|Owner module|Sensibilidade|Contract ID|Regra|
|---|---|---|---|---|
|FeatureFlagChanged|Core Platform|Crítico|NODUOS.CORE.FEATURE_FLAG_CHANGED.v1|Segredo bruto proibido; usar SecretReference quando houver segredo ou material criptográfico.|
|PartnerGatewayRegistrationRequestRegistered|Parceiros|Sensível|NODUOS.PARTNER.PARTNER_GATEWAY_REGISTRATION_REQUEST_REGISTERED.v1|Segredo bruto proibido; usar SecretReference quando houver segredo ou material criptográfico.|
|PartnerDeviceRegistrationRequestRegistered|Parceiros|Sensível|NODUOS.PARTNER.PARTNER_DEVICE_REGISTRATION_REQUEST_REGISTERED.v1|Segredo bruto proibido; usar SecretReference quando houver segredo ou material criptográfico.|
|GatewayRegistered|Gateway Local / Mikrotik / Tunnel|Sensível|NODUOS.GATEWAY.GATEWAY_REGISTERED.v1|Segredo bruto proibido; usar SecretReference quando houver segredo ou material criptográfico.|
|GatewayConnected|Gateway Local / Mikrotik / Tunnel|Sensível|NODUOS.GATEWAY.GATEWAY_CONNECTED.v1|Segredo bruto proibido; usar SecretReference quando houver segredo ou material criptográfico.|
|GatewayDisconnected|Gateway Local / Mikrotik / Tunnel|Sensível|NODUOS.GATEWAY.GATEWAY_DISCONNECTED.v1|Segredo bruto proibido; usar SecretReference quando houver segredo ou material criptográfico.|
|GatewayDiagnosticRequested|Gateway Local / Mikrotik / Tunnel|Sensível|NODUOS.GATEWAY.GATEWAY_DIAGNOSTIC_REQUESTED.v1|Segredo bruto proibido; usar SecretReference quando houver segredo ou material criptográfico.|
|GatewayCommandResultRecorded|Gateway Local / Mikrotik / Tunnel|Crítico|NODUOS.GATEWAY.GATEWAY_COMMAND_RESULT_RECORDED.v1|Segredo bruto proibido; usar SecretReference quando houver segredo ou material criptográfico.|
|GatewayDeviceDiscoveryCompleted|Gateway Local / Mikrotik / Tunnel|Sensível|NODUOS.GATEWAY.GATEWAY_DEVICE_DISCOVERY_COMPLETED.v1|Segredo bruto proibido; usar SecretReference quando houver segredo ou material criptográfico.|
|DeviceRegistered|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_REGISTERED.v1|Segredo bruto proibido; usar SecretReference quando houver segredo ou material criptográfico.|
|DeviceStatusChanged|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_STATUS_CHANGED.v1|Segredo bruto proibido; usar SecretReference quando houver segredo ou material criptográfico.|
|DeviceHealthChanged|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_HEALTH_CHANGED.v1|Segredo bruto proibido; usar SecretReference quando houver segredo ou material criptográfico.|
|DeviceDiagnosticRequested|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_DIAGNOSTIC_REQUESTED.v1|Segredo bruto proibido; usar SecretReference quando houver segredo ou material criptográfico.|
|DeviceLifecycleChanged|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_LIFECYCLE_CHANGED.v1|Segredo bruto proibido; usar SecretReference quando houver segredo ou material criptográfico.|
|DeviceMaintenanceRecorded|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_MAINTENANCE_RECORDED.v1|Segredo bruto proibido; usar SecretReference quando houver segredo ou material criptográfico.|
|WhiteLabelThemeCreated|White-label|Restrito|NODUOS.WHITE_LABEL.WHITE_LABEL_THEME_CREATED.v1|Segredo bruto proibido; usar SecretReference quando houver segredo ou material criptográfico.|
|BrandPublishingRequestRegistered|White-label|Crítico|NODUOS.WHITE_LABEL.BRAND_PUBLISHING_REQUEST_REGISTERED.v1|Segredo bruto proibido; usar SecretReference quando houver segredo ou material criptográfico.|
|BrandPublishingResultRecorded|White-label|Crítico|NODUOS.WHITE_LABEL.BRAND_PUBLISHING_RESULT_RECORDED.v1|Segredo bruto proibido; usar SecretReference quando houver segredo ou material criptográfico.|
|WhiteLabelThemeRollbackExecuted|White-label|Restrito|NODUOS.WHITE_LABEL.WHITE_LABEL_THEME_ROLLBACK_EXECUTED.v1|Segredo bruto proibido; usar SecretReference quando houver segredo ou material criptográfico.|
|MarketplaceConnectorPublished|Marketplace de Integrações|Restrito|NODUOS.MARKETPLACE.MARKETPLACE_CONNECTOR_PUBLISHED.v1|Segredo bruto proibido; usar SecretReference quando houver segredo ou material criptográfico.|
|ConnectorInstallationRequested|Marketplace de Integrações|Crítico|NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION_REQUESTED.v1|Segredo bruto proibido; usar SecretReference quando houver segredo ou material criptográfico.|
|ConnectorInstallationCompleted|Marketplace de Integrações|Crítico|NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION_COMPLETED.v1|Segredo bruto proibido; usar SecretReference quando houver segredo ou material criptográfico.|
|ConnectorInstallationFailed|Marketplace de Integrações|Crítico|NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION_FAILED.v1|Segredo bruto proibido; usar SecretReference quando houver segredo ou material criptográfico.|
|ConnectorHealthChanged|Marketplace de Integrações|Restrito|NODUOS.MARKETPLACE.CONNECTOR_HEALTH_CHANGED.v1|Segredo bruto proibido; usar SecretReference quando houver segredo ou material criptográfico.|
|ExternalEventReceived|Marketplace de Integrações|Crítico|NODUOS.MARKETPLACE.EXTERNAL_EVENT_RECEIVED.v1|Segredo bruto proibido; usar SecretReference quando houver segredo ou material criptográfico.|
|ExternalEventNormalized|Marketplace de Integrações|Crítico|NODUOS.MARKETPLACE.EXTERNAL_EVENT_NORMALIZED.v1|Segredo bruto proibido; usar SecretReference quando houver segredo ou material criptográfico.|


## 41. Matriz de eventos com IP interno, rota, túnel ou diagnóstico


|Event name|Owner module|Sensibilidade|Contract ID|Regra|
|---|---|---|---|---|
|PartnerGatewayRegistrationRequestRegistered|Parceiros|Sensível|NODUOS.PARTNER.PARTNER_GATEWAY_REGISTRATION_REQUEST_REGISTERED.v1|IP interno, rota local e diagnóstico sensível devem ser mascarados ou referenciados.|
|GatewayRegistered|Gateway Local / Mikrotik / Tunnel|Sensível|NODUOS.GATEWAY.GATEWAY_REGISTERED.v1|IP interno, rota local e diagnóstico sensível devem ser mascarados ou referenciados.|
|GatewayConnected|Gateway Local / Mikrotik / Tunnel|Sensível|NODUOS.GATEWAY.GATEWAY_CONNECTED.v1|IP interno, rota local e diagnóstico sensível devem ser mascarados ou referenciados.|
|GatewayDisconnected|Gateway Local / Mikrotik / Tunnel|Sensível|NODUOS.GATEWAY.GATEWAY_DISCONNECTED.v1|IP interno, rota local e diagnóstico sensível devem ser mascarados ou referenciados.|
|GatewayDiagnosticRequested|Gateway Local / Mikrotik / Tunnel|Sensível|NODUOS.GATEWAY.GATEWAY_DIAGNOSTIC_REQUESTED.v1|IP interno, rota local e diagnóstico sensível devem ser mascarados ou referenciados.|
|GatewayCommandResultRecorded|Gateway Local / Mikrotik / Tunnel|Crítico|NODUOS.GATEWAY.GATEWAY_COMMAND_RESULT_RECORDED.v1|IP interno, rota local e diagnóstico sensível devem ser mascarados ou referenciados.|
|GatewayDeviceDiscoveryCompleted|Gateway Local / Mikrotik / Tunnel|Sensível|NODUOS.GATEWAY.GATEWAY_DEVICE_DISCOVERY_COMPLETED.v1|IP interno, rota local e diagnóstico sensível devem ser mascarados ou referenciados.|
|DeviceRegistered|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_REGISTERED.v1|IP interno, rota local e diagnóstico sensível devem ser mascarados ou referenciados.|
|DeviceStatusChanged|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_STATUS_CHANGED.v1|IP interno, rota local e diagnóstico sensível devem ser mascarados ou referenciados.|
|DeviceHealthChanged|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_HEALTH_CHANGED.v1|IP interno, rota local e diagnóstico sensível devem ser mascarados ou referenciados.|
|DeviceDiagnosticRequested|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_DIAGNOSTIC_REQUESTED.v1|IP interno, rota local e diagnóstico sensível devem ser mascarados ou referenciados.|
|DeviceLifecycleChanged|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_LIFECYCLE_CHANGED.v1|IP interno, rota local e diagnóstico sensível devem ser mascarados ou referenciados.|
|DeviceMaintenanceRecorded|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_MAINTENANCE_RECORDED.v1|IP interno, rota local e diagnóstico sensível devem ser mascarados ou referenciados.|


## 42. Matriz de eventos com suporte remoto


|Event name|Owner module|Sensibilidade|Contract ID|Regra|
|---|---|---|---|---|
|PlatformSupportCaseCreated|Suporte e Operação|Sensível|NODUOS.SUPPORT.PLATFORM_SUPPORT_CASE_CREATED.v1|Exige escopo temporário, auditoria, finalidade e fail-closed.|
|ServiceIncidentOpened|Suporte e Operação|Sensível|NODUOS.SUPPORT.SERVICE_INCIDENT_OPENED.v1|Exige escopo temporário, auditoria, finalidade e fail-closed.|
|ServiceIncidentResolved|Suporte e Operação|Sensível|NODUOS.SUPPORT.SERVICE_INCIDENT_RESOLVED.v1|Exige escopo temporário, auditoria, finalidade e fail-closed.|
|MaintenanceWindowScheduled|Suporte e Operação|Sensível|NODUOS.SUPPORT.MAINTENANCE_WINDOW_SCHEDULED.v1|Exige escopo temporário, auditoria, finalidade e fail-closed.|
|RemoteSupportSessionRequested|Suporte e Operação|Crítico|NODUOS.SUPPORT.REMOTE_SUPPORT_SESSION_REQUESTED.v1|Exige escopo temporário, auditoria, finalidade e fail-closed.|
|PostIncidentReviewCreated|Suporte e Operação|Sensível|NODUOS.SUPPORT.POST_INCIDENT_REVIEW_CREATED.v1|Exige escopo temporário, auditoria, finalidade e fail-closed.|


## 43. Matriz de eventos com integrações externas e webhooks externos


|Event name|Owner module|Sensibilidade|Contract ID|Regra|
|---|---|---|---|---|
|NotificationDeliveryAttempted|Notificações|Restrito|NODUOS.NOTIFICATION.NOTIFICATION_DELIVERY_ATTEMPTED.v1|Exige assinatura, SecretReference, contrato de integração, política de terceiro e auditoria.|
|MarketplaceConnectorPublished|Marketplace de Integrações|Restrito|NODUOS.MARKETPLACE.MARKETPLACE_CONNECTOR_PUBLISHED.v1|Exige assinatura, SecretReference, contrato de integração, política de terceiro e auditoria.|
|ConnectorInstallationRequested|Marketplace de Integrações|Crítico|NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION_REQUESTED.v1|Exige assinatura, SecretReference, contrato de integração, política de terceiro e auditoria.|
|ConnectorInstallationCompleted|Marketplace de Integrações|Crítico|NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION_COMPLETED.v1|Exige assinatura, SecretReference, contrato de integração, política de terceiro e auditoria.|
|ConnectorInstallationFailed|Marketplace de Integrações|Crítico|NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION_FAILED.v1|Exige assinatura, SecretReference, contrato de integração, política de terceiro e auditoria.|
|ConnectorHealthChanged|Marketplace de Integrações|Restrito|NODUOS.MARKETPLACE.CONNECTOR_HEALTH_CHANGED.v1|Exige assinatura, SecretReference, contrato de integração, política de terceiro e auditoria.|
|ExternalEventReceived|Marketplace de Integrações|Crítico|NODUOS.MARKETPLACE.EXTERNAL_EVENT_RECEIVED.v1|Exige assinatura, SecretReference, contrato de integração, política de terceiro e auditoria.|
|ExternalEventNormalized|Marketplace de Integrações|Crítico|NODUOS.MARKETPLACE.EXTERNAL_EVENT_NORMALIZED.v1|Exige assinatura, SecretReference, contrato de integração, política de terceiro e auditoria.|


## 44. Matriz de eventos com exportação sensível


|Event name|Owner module|Sensibilidade|Contract ID|Regra|
|---|---|---|---|---|
|MasterSensitiveExportRequestRegistered|Master|Crítico|NODUOS.MASTER.MASTER_SENSITIVE_EXPORT_REQUEST_REGISTERED.v1|Exige finalidade, aprovador quando aplicável, máscara, retenção, hash do pacote e auditoria de exportação.|
|BIReportCreated|Relatórios / BI|Sensível|NODUOS.BI.BI_REPORT_CREATED.v1|Exige finalidade, aprovador quando aplicável, máscara, retenção, hash do pacote e auditoria de exportação.|
|BIExportRequested|Relatórios / BI|Crítico|NODUOS.BI.BI_EXPORT_REQUESTED.v1|Exige finalidade, aprovador quando aplicável, máscara, retenção, hash do pacote e auditoria de exportação.|
|BIExportCompleted|Relatórios / BI|Crítico|NODUOS.BI.BI_EXPORT_COMPLETED.v1|Exige finalidade, aprovador quando aplicável, máscara, retenção, hash do pacote e auditoria de exportação.|
|BIExportFailed|Relatórios / BI|Crítico|NODUOS.BI.BI_EXPORT_FAILED.v1|Exige finalidade, aprovador quando aplicável, máscara, retenção, hash do pacote e auditoria de exportação.|
|AuditExportRequested|Auditoria e Compliance|Crítico|NODUOS.AUDIT.AUDIT_EXPORT_REQUESTED.v1|Exige finalidade, aprovador quando aplicável, máscara, retenção, hash do pacote e auditoria de exportação.|
|ComplianceReportGenerated|Auditoria e Compliance|Sensível|NODUOS.AUDIT.COMPLIANCE_REPORT_GENERATED.v1|Exige finalidade, aprovador quando aplicável, máscara, retenção, hash do pacote e auditoria de exportação.|


## 45. Matriz de eventos que exigem EvidenceReference


|Event name|Owner module|Sensibilidade|Contract ID|Regra|
|---|---|---|---|---|
|CameraClipCreated|Câmeras / VMS|Sensível|NODUOS.CAMERA.CAMERA_CLIP_CREATED.v1|EvidenceReference obrigatório; bruto proibido quando referência bastar.|
|CameraSnapshotCreated|Câmeras / VMS|Sensível|NODUOS.CAMERA.CAMERA_SNAPSHOT_CREATED.v1|EvidenceReference obrigatório; bruto proibido quando referência bastar.|
|CameraEvidenceReferenceCreated|Câmeras / VMS|Crítico|NODUOS.CAMERA.CAMERA_EVIDENCE_REFERENCE_CREATED.v1|EvidenceReference obrigatório; bruto proibido quando referência bastar.|
|AuditExportRequested|Auditoria e Compliance|Crítico|NODUOS.AUDIT.AUDIT_EXPORT_REQUESTED.v1|EvidenceReference obrigatório; bruto proibido quando referência bastar.|
|ComplianceCaseOpened|Auditoria e Compliance|Sensível|NODUOS.AUDIT.COMPLIANCE_CASE_OPENED.v1|EvidenceReference obrigatório; bruto proibido quando referência bastar.|
|EvidenceChainOfCustodyUpdated|Auditoria e Compliance|Crítico|NODUOS.AUDIT.EVIDENCE_CHAIN_OF_CUSTODY_UPDATED.v1|EvidenceReference obrigatório; bruto proibido quando referência bastar.|


## 46. Matriz de eventos que exigem SecretReference


|Event name|Owner module|Sensibilidade|Contract ID|Regra|
|---|---|---|---|---|
|PartnerGatewayRegistrationRequestRegistered|Parceiros|Sensível|NODUOS.PARTNER.PARTNER_GATEWAY_REGISTRATION_REQUEST_REGISTERED.v1|SecretReference obrigatório quando houver segredo, certificado, token, chave ou credencial.|
|PartnerDeviceRegistrationRequestRegistered|Parceiros|Sensível|NODUOS.PARTNER.PARTNER_DEVICE_REGISTRATION_REQUEST_REGISTERED.v1|SecretReference obrigatório quando houver segredo, certificado, token, chave ou credencial.|
|GatewayRegistered|Gateway Local / Mikrotik / Tunnel|Sensível|NODUOS.GATEWAY.GATEWAY_REGISTERED.v1|SecretReference obrigatório quando houver segredo, certificado, token, chave ou credencial.|
|GatewayConnected|Gateway Local / Mikrotik / Tunnel|Sensível|NODUOS.GATEWAY.GATEWAY_CONNECTED.v1|SecretReference obrigatório quando houver segredo, certificado, token, chave ou credencial.|
|GatewayDisconnected|Gateway Local / Mikrotik / Tunnel|Sensível|NODUOS.GATEWAY.GATEWAY_DISCONNECTED.v1|SecretReference obrigatório quando houver segredo, certificado, token, chave ou credencial.|
|GatewayDiagnosticRequested|Gateway Local / Mikrotik / Tunnel|Sensível|NODUOS.GATEWAY.GATEWAY_DIAGNOSTIC_REQUESTED.v1|SecretReference obrigatório quando houver segredo, certificado, token, chave ou credencial.|
|GatewayCommandResultRecorded|Gateway Local / Mikrotik / Tunnel|Crítico|NODUOS.GATEWAY.GATEWAY_COMMAND_RESULT_RECORDED.v1|SecretReference obrigatório quando houver segredo, certificado, token, chave ou credencial.|
|GatewayDeviceDiscoveryCompleted|Gateway Local / Mikrotik / Tunnel|Sensível|NODUOS.GATEWAY.GATEWAY_DEVICE_DISCOVERY_COMPLETED.v1|SecretReference obrigatório quando houver segredo, certificado, token, chave ou credencial.|
|DeviceRegistered|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_REGISTERED.v1|SecretReference obrigatório quando houver segredo, certificado, token, chave ou credencial.|
|DeviceStatusChanged|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_STATUS_CHANGED.v1|SecretReference obrigatório quando houver segredo, certificado, token, chave ou credencial.|
|DeviceHealthChanged|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_HEALTH_CHANGED.v1|SecretReference obrigatório quando houver segredo, certificado, token, chave ou credencial.|
|DeviceDiagnosticRequested|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_DIAGNOSTIC_REQUESTED.v1|SecretReference obrigatório quando houver segredo, certificado, token, chave ou credencial.|
|DeviceLifecycleChanged|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_LIFECYCLE_CHANGED.v1|SecretReference obrigatório quando houver segredo, certificado, token, chave ou credencial.|
|DeviceMaintenanceRecorded|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_MAINTENANCE_RECORDED.v1|SecretReference obrigatório quando houver segredo, certificado, token, chave ou credencial.|
|WhiteLabelThemeCreated|White-label|Restrito|NODUOS.WHITE_LABEL.WHITE_LABEL_THEME_CREATED.v1|SecretReference obrigatório quando houver segredo, certificado, token, chave ou credencial.|
|BrandPublishingRequestRegistered|White-label|Crítico|NODUOS.WHITE_LABEL.BRAND_PUBLISHING_REQUEST_REGISTERED.v1|SecretReference obrigatório quando houver segredo, certificado, token, chave ou credencial.|
|BrandPublishingResultRecorded|White-label|Crítico|NODUOS.WHITE_LABEL.BRAND_PUBLISHING_RESULT_RECORDED.v1|SecretReference obrigatório quando houver segredo, certificado, token, chave ou credencial.|
|WhiteLabelThemeRollbackExecuted|White-label|Restrito|NODUOS.WHITE_LABEL.WHITE_LABEL_THEME_ROLLBACK_EXECUTED.v1|SecretReference obrigatório quando houver segredo, certificado, token, chave ou credencial.|
|MarketplaceConnectorPublished|Marketplace de Integrações|Restrito|NODUOS.MARKETPLACE.MARKETPLACE_CONNECTOR_PUBLISHED.v1|SecretReference obrigatório quando houver segredo, certificado, token, chave ou credencial.|
|ConnectorInstallationRequested|Marketplace de Integrações|Crítico|NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION_REQUESTED.v1|SecretReference obrigatório quando houver segredo, certificado, token, chave ou credencial.|
|ConnectorInstallationCompleted|Marketplace de Integrações|Crítico|NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION_COMPLETED.v1|SecretReference obrigatório quando houver segredo, certificado, token, chave ou credencial.|
|ConnectorInstallationFailed|Marketplace de Integrações|Crítico|NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION_FAILED.v1|SecretReference obrigatório quando houver segredo, certificado, token, chave ou credencial.|
|ConnectorHealthChanged|Marketplace de Integrações|Restrito|NODUOS.MARKETPLACE.CONNECTOR_HEALTH_CHANGED.v1|SecretReference obrigatório quando houver segredo, certificado, token, chave ou credencial.|
|ExternalEventReceived|Marketplace de Integrações|Crítico|NODUOS.MARKETPLACE.EXTERNAL_EVENT_RECEIVED.v1|SecretReference obrigatório quando houver segredo, certificado, token, chave ou credencial.|
|ExternalEventNormalized|Marketplace de Integrações|Crítico|NODUOS.MARKETPLACE.EXTERNAL_EVENT_NORMALIZED.v1|SecretReference obrigatório quando houver segredo, certificado, token, chave ou credencial.|


## 47. Matriz de eventos que exigem ResourceReference


|Event name|Owner module|Sensibilidade|Contract ID|Regra|
|---|---|---|---|---|
|AuthorizationDecisionIssued|Core Platform|Crítico|NODUOS.CORE.AUTHORIZATION_DECISION_ISSUED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|UserAccountCreated|Core Platform|Sensível|NODUOS.CORE.USER_ACCOUNT_CREATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|UserAccountSuspended|Core Platform|Sensível|NODUOS.CORE.USER_ACCOUNT_SUSPENDED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|TenantCreated|Core Platform|Restrito|NODUOS.CORE.TENANT_CREATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|ContextCreated|Core Platform|Restrito|NODUOS.CORE.CONTEXT_CREATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|PermissionGranted|Core Platform|Crítico|NODUOS.CORE.PERMISSION_GRANTED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|PermissionRevoked|Core Platform|Crítico|NODUOS.CORE.PERMISSION_REVOKED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|ModuleActivated|Core Platform|Restrito|NODUOS.CORE.MODULE_ACTIVATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|ModuleDeactivated|Core Platform|Restrito|NODUOS.CORE.MODULE_DEACTIVATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|LicenseChanged|Core Platform|Crítico|NODUOS.CORE.LICENSE_CHANGED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|FeatureFlagChanged|Core Platform|Crítico|NODUOS.CORE.FEATURE_FLAG_CHANGED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|MasterPartnerCreationRequestRegistered|Master|Restrito|NODUOS.MASTER.MASTER_PARTNER_CREATION_REQUEST_REGISTERED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|MasterPartnerCreationApproved|Master|Restrito|NODUOS.MASTER.MASTER_PARTNER_CREATION_APPROVED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|MasterPartnerCreationRejected|Master|Restrito|NODUOS.MASTER.MASTER_PARTNER_CREATION_REJECTED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|MasterPartnerSuspensionRequestRegistered|Master|Restrito|NODUOS.MASTER.MASTER_PARTNER_SUSPENSION_REQUEST_REGISTERED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|MasterPartnerRestorationRequestRegistered|Master|Restrito|NODUOS.MASTER.MASTER_PARTNER_RESTORATION_REQUEST_REGISTERED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|MasterModuleReleasedToPartner|Master|Restrito|NODUOS.MASTER.MASTER_MODULE_RELEASED_TO_PARTNER.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|MasterSensitiveExportRequestRegistered|Master|Crítico|NODUOS.MASTER.MASTER_SENSITIVE_EXPORT_REQUEST_REGISTERED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|PartnerCreated|Parceiros|Restrito|NODUOS.PARTNER.PARTNER_CREATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|PartnerProfileUpdated|Parceiros|Sensível|NODUOS.PARTNER.PARTNER_PROFILE_UPDATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|PartnerSuspended|Parceiros|Restrito|NODUOS.PARTNER.PARTNER_SUSPENDED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|PartnerRestored|Parceiros|Restrito|NODUOS.PARTNER.PARTNER_RESTORED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|PartnerGatewayRegistrationRequestRegistered|Parceiros|Sensível|NODUOS.PARTNER.PARTNER_GATEWAY_REGISTRATION_REQUEST_REGISTERED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|PartnerDeviceRegistrationRequestRegistered|Parceiros|Sensível|NODUOS.PARTNER.PARTNER_DEVICE_REGISTRATION_REQUEST_REGISTERED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|OrganizationCreated|Organizações|Restrito|NODUOS.ORG.ORGANIZATION_CREATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|OrganizationProfileUpdated|Organizações|Sensível|NODUOS.ORG.ORGANIZATION_PROFILE_UPDATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|OrganizationStatusChanged|Organizações|Restrito|NODUOS.ORG.ORGANIZATION_STATUS_CHANGED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|OrganizationArchived|Organizações|Restrito|NODUOS.ORG.ORGANIZATION_ARCHIVED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|OrganizationRestored|Organizações|Restrito|NODUOS.ORG.ORGANIZATION_RESTORED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|PersonProfileCreated|Pessoas e Clientes|Sensível|NODUOS.PEOPLE.PERSON_PROFILE_CREATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|PersonProfileUpdated|Pessoas e Clientes|Sensível|NODUOS.PEOPLE.PERSON_PROFILE_UPDATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|ClientProfileCreated|Pessoas e Clientes|Sensível|NODUOS.PEOPLE.CLIENT_PROFILE_CREATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|PersonUnitLinked|Pessoas e Clientes|Sensível|NODUOS.PEOPLE.PERSON_UNIT_LINKED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|PersonConsentChanged|Pessoas e Clientes|Sensível|NODUOS.PEOPLE.PERSON_CONSENT_CHANGED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|StructureRootCreated|Unidades, Blocos, Áreas e Ambientes|Restrito|NODUOS.STRUCTURE.STRUCTURE_ROOT_CREATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|PhysicalStructureNodeCreated|Unidades, Blocos, Áreas e Ambientes|Restrito|NODUOS.STRUCTURE.PHYSICAL_STRUCTURE_NODE_CREATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|StructureHierarchyChanged|Unidades, Blocos, Áreas e Ambientes|Restrito|NODUOS.STRUCTURE.STRUCTURE_HIERARCHY_CHANGED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|StructureVisibilityChanged|Unidades, Blocos, Áreas e Ambientes|Restrito|NODUOS.STRUCTURE.STRUCTURE_VISIBILITY_CHANGED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|StructureReservableFlagChanged|Unidades, Blocos, Áreas e Ambientes|Restrito|NODUOS.STRUCTURE.STRUCTURE_RESERVABLE_FLAG_CHANGED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|AdvancedPolicyCreated|Herança e Permissões|Restrito|NODUOS.POLICY.ADVANCED_POLICY_CREATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|PolicyChanged|Herança e Permissões|Restrito|NODUOS.POLICY.POLICY_CHANGED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|DelegationRuleChanged|Herança e Permissões|Restrito|NODUOS.POLICY.DELEGATION_RULE_CHANGED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|PolicyExceptionCreated|Herança e Permissões|Restrito|NODUOS.POLICY.POLICY_EXCEPTION_CREATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|PermissionConflictDetected|Herança e Permissões|Crítico|NODUOS.POLICY.PERMISSION_CONFLICT_DETECTED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|GatewayRegistered|Gateway Local / Mikrotik / Tunnel|Sensível|NODUOS.GATEWAY.GATEWAY_REGISTERED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|GatewayConnected|Gateway Local / Mikrotik / Tunnel|Sensível|NODUOS.GATEWAY.GATEWAY_CONNECTED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|GatewayDisconnected|Gateway Local / Mikrotik / Tunnel|Sensível|NODUOS.GATEWAY.GATEWAY_DISCONNECTED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|GatewayDiagnosticRequested|Gateway Local / Mikrotik / Tunnel|Sensível|NODUOS.GATEWAY.GATEWAY_DIAGNOSTIC_REQUESTED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|GatewayCommandResultRecorded|Gateway Local / Mikrotik / Tunnel|Crítico|NODUOS.GATEWAY.GATEWAY_COMMAND_RESULT_RECORDED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|GatewayDeviceDiscoveryCompleted|Gateway Local / Mikrotik / Tunnel|Sensível|NODUOS.GATEWAY.GATEWAY_DEVICE_DISCOVERY_COMPLETED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|DeviceRegistered|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_REGISTERED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|DeviceStatusChanged|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_STATUS_CHANGED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|DeviceHealthChanged|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_HEALTH_CHANGED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|DeviceDiagnosticRequested|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_DIAGNOSTIC_REQUESTED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|DeviceLifecycleChanged|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_LIFECYCLE_CHANGED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|DeviceMaintenanceRecorded|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_MAINTENANCE_RECORDED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|AccessAttemptRecorded|Controle de Acesso|Sensível|NODUOS.ACCESS.ACCESS_ATTEMPT_RECORDED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|AccessGranted|Controle de Acesso|Crítico|NODUOS.ACCESS.ACCESS_GRANTED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|AccessDenied|Controle de Acesso|Crítico|NODUOS.ACCESS.ACCESS_DENIED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|AccessExecutionResultRecorded|Controle de Acesso|Crítico|NODUOS.ACCESS.ACCESS_EXECUTION_RESULT_RECORDED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|AccessCredentialCreated|Controle de Acesso|Sensível|NODUOS.ACCESS.ACCESS_CREDENTIAL_CREATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|AccessCredentialRevoked|Controle de Acesso|Sensível|NODUOS.ACCESS.ACCESS_CREDENTIAL_REVOKED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|CameraLiveViewRequested|Câmeras / VMS|Sensível|NODUOS.CAMERA.CAMERA_LIVE_VIEW_REQUESTED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|CameraPlaybackRequested|Câmeras / VMS|Sensível|NODUOS.CAMERA.CAMERA_PLAYBACK_REQUESTED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|CameraClipCreated|Câmeras / VMS|Sensível|NODUOS.CAMERA.CAMERA_CLIP_CREATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|CameraSnapshotCreated|Câmeras / VMS|Sensível|NODUOS.CAMERA.CAMERA_SNAPSHOT_CREATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|CameraEvidenceReferenceCreated|Câmeras / VMS|Crítico|NODUOS.CAMERA.CAMERA_EVIDENCE_REFERENCE_CREATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|VideoRetentionPolicyChanged|Câmeras / VMS|Crítico|NODUOS.CAMERA.VIDEO_RETENTION_POLICY_CHANGED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|AlarmArmed|Alarmes|Sensível|NODUOS.ALARM.ALARM_ARMED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|AlarmDisarmed|Alarmes|Sensível|NODUOS.ALARM.ALARM_DISARMED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|AlarmTriggered|Alarmes|Crítico|NODUOS.ALARM.ALARM_TRIGGERED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|PanicTriggered|Alarmes|Crítico|NODUOS.ALARM.PANIC_TRIGGERED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|AlarmAcknowledged|Alarmes|Sensível|NODUOS.ALARM.ALARM_ACKNOWLEDGED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|AlarmResolved|Alarmes|Sensível|NODUOS.ALARM.ALARM_RESOLVED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|InvoiceCreated|Financeiro|Sensível|NODUOS.FINANCE.INVOICE_CREATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|ChargeCreated|Financeiro|Sensível|NODUOS.FINANCE.CHARGE_CREATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|PaymentRegistered|Financeiro|Sensível|NODUOS.FINANCE.PAYMENT_REGISTERED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|PaymentFailed|Financeiro|Sensível|NODUOS.FINANCE.PAYMENT_FAILED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|ReceiptIssued|Financeiro|Sensível|NODUOS.FINANCE.RECEIPT_ISSUED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|OverdueDetected|Financeiro|Sensível|NODUOS.FINANCE.OVERDUE_DETECTED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|FinancialRestrictionSignalRegistered|Financeiro|Crítico|NODUOS.FINANCE.FINANCIAL_RESTRICTION_SIGNAL_REGISTERED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|VisitorInviteCreated|Convites e Visitantes|Sensível|NODUOS.VISITOR.VISITOR_INVITE_CREATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|VisitApproved|Convites e Visitantes|Sensível|NODUOS.VISITOR.VISIT_APPROVED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|VisitDenied|Convites e Visitantes|Sensível|NODUOS.VISITOR.VISIT_DENIED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|VisitorCheckInRecorded|Convites e Visitantes|Sensível|NODUOS.VISITOR.VISITOR_CHECK_IN_RECORDED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|VisitorCheckOutRecorded|Convites e Visitantes|Sensível|NODUOS.VISITOR.VISITOR_CHECK_OUT_RECORDED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|TemporaryQRCodeCreated|Convites e Visitantes|Sensível|NODUOS.VISITOR.TEMPORARY_QR_CODE_CREATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|OperationalTicketCreated|Tickets|Sensível|NODUOS.TICKET.OPERATIONAL_TICKET_CREATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|TicketCommentAdded|Tickets|Sensível|NODUOS.TICKET.TICKET_COMMENT_ADDED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|TicketEscalated|Tickets|Sensível|NODUOS.TICKET.TICKET_ESCALATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|TicketResolved|Tickets|Sensível|NODUOS.TICKET.TICKET_RESOLVED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|TicketReopened|Tickets|Sensível|NODUOS.TICKET.TICKET_REOPENED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|TicketAttachmentReferenceAdded|Tickets|Sensível|NODUOS.TICKET.TICKET_ATTACHMENT_REFERENCE_ADDED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|AnnouncementPublished|Mural Informativo|Restrito|NODUOS.MURAL.ANNOUNCEMENT_PUBLISHED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|AnnouncementAcknowledged|Mural Informativo|Restrito|NODUOS.MURAL.ANNOUNCEMENT_ACKNOWLEDGED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|AnnouncementPollAnswered|Mural Informativo|Restrito|NODUOS.MURAL.ANNOUNCEMENT_POLL_ANSWERED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|AnnouncementArchived|Mural Informativo|Restrito|NODUOS.MURAL.ANNOUNCEMENT_ARCHIVED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|ReservationCreated|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_CREATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|ReservationHoldCreated|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_HOLD_CREATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|ReservationApproved|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_APPROVED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|ReservationCancelled|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_CANCELLED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|ReservationCheckInRecorded|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_CHECK_IN_RECORDED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|ReservationNoShowRecorded|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_NO_SHOW_RECORDED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|ReservationChargeRequestRegistered|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_CHARGE_REQUEST_REGISTERED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|BIReportCreated|Relatórios / BI|Sensível|NODUOS.BI.BI_REPORT_CREATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|BIExportRequested|Relatórios / BI|Crítico|NODUOS.BI.BI_EXPORT_REQUESTED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|BIExportCompleted|Relatórios / BI|Crítico|NODUOS.BI.BI_EXPORT_COMPLETED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|BIExportFailed|Relatórios / BI|Crítico|NODUOS.BI.BI_EXPORT_FAILED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|BIInsightGenerated|Relatórios / BI|Sensível|NODUOS.BI.BI_INSIGHT_GENERATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|BIAnomalyDetected|Relatórios / BI|Restrito|NODUOS.BI.BI_ANOMALY_DETECTED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|WhiteLabelThemeCreated|White-label|Restrito|NODUOS.WHITE_LABEL.WHITE_LABEL_THEME_CREATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|BrandPublishingRequestRegistered|White-label|Crítico|NODUOS.WHITE_LABEL.BRAND_PUBLISHING_REQUEST_REGISTERED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|BrandPublishingResultRecorded|White-label|Crítico|NODUOS.WHITE_LABEL.BRAND_PUBLISHING_RESULT_RECORDED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|WhiteLabelThemeRollbackExecuted|White-label|Restrito|NODUOS.WHITE_LABEL.WHITE_LABEL_THEME_ROLLBACK_EXECUTED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|BrandFallbackApplied|White-label|Restrito|NODUOS.WHITE_LABEL.BRAND_FALLBACK_APPLIED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|NotificationRequestRegistered|Notificações|Restrito|NODUOS.NOTIFICATION.NOTIFICATION_REQUEST_REGISTERED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|NotificationDeliveryAttempted|Notificações|Restrito|NODUOS.NOTIFICATION.NOTIFICATION_DELIVERY_ATTEMPTED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|NotificationDelivered|Notificações|Restrito|NODUOS.NOTIFICATION.NOTIFICATION_DELIVERED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|NotificationFailed|Notificações|Restrito|NODUOS.NOTIFICATION.NOTIFICATION_FAILED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|NotificationPreferenceChanged|Notificações|Sensível|NODUOS.NOTIFICATION.NOTIFICATION_PREFERENCE_CHANGED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|NotificationOptOutChanged|Notificações|Sensível|NODUOS.NOTIFICATION.NOTIFICATION_OPT_OUT_CHANGED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|AutomationWorkflowCreated|Automações|Restrito|NODUOS.AUTOMATION.AUTOMATION_WORKFLOW_CREATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|AutomationExecutionStarted|Automações|Restrito|NODUOS.AUTOMATION.AUTOMATION_EXECUTION_STARTED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|AutomationActionRequestRegistered|Automações|Crítico|NODUOS.AUTOMATION.AUTOMATION_ACTION_REQUEST_REGISTERED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|AutomationActionResultRecorded|Automações|Crítico|NODUOS.AUTOMATION.AUTOMATION_ACTION_RESULT_RECORDED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|AutomationExecutionFinished|Automações|Restrito|NODUOS.AUTOMATION.AUTOMATION_EXECUTION_FINISHED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|AutomationExecutionFailed|Automações|Restrito|NODUOS.AUTOMATION.AUTOMATION_EXECUTION_FAILED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|MarketplaceConnectorPublished|Marketplace de Integrações|Restrito|NODUOS.MARKETPLACE.MARKETPLACE_CONNECTOR_PUBLISHED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|ConnectorInstallationRequested|Marketplace de Integrações|Crítico|NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION_REQUESTED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|ConnectorInstallationCompleted|Marketplace de Integrações|Crítico|NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION_COMPLETED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|ConnectorInstallationFailed|Marketplace de Integrações|Crítico|NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION_FAILED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|ConnectorHealthChanged|Marketplace de Integrações|Restrito|NODUOS.MARKETPLACE.CONNECTOR_HEALTH_CHANGED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|ExternalEventReceived|Marketplace de Integrações|Crítico|NODUOS.MARKETPLACE.EXTERNAL_EVENT_RECEIVED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|ExternalEventNormalized|Marketplace de Integrações|Crítico|NODUOS.MARKETPLACE.EXTERNAL_EVENT_NORMALIZED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|AuditTrailRecorded|Auditoria e Compliance|Sensível|NODUOS.AUDIT.AUDIT_TRAIL_RECORDED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|AuditQueryExecuted|Auditoria e Compliance|Sensível|NODUOS.AUDIT.AUDIT_QUERY_EXECUTED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|AuditExportRequested|Auditoria e Compliance|Crítico|NODUOS.AUDIT.AUDIT_EXPORT_REQUESTED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|ComplianceCaseOpened|Auditoria e Compliance|Sensível|NODUOS.AUDIT.COMPLIANCE_CASE_OPENED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|EvidenceChainOfCustodyUpdated|Auditoria e Compliance|Crítico|NODUOS.AUDIT.EVIDENCE_CHAIN_OF_CUSTODY_UPDATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|ComplianceReportGenerated|Auditoria e Compliance|Sensível|NODUOS.AUDIT.COMPLIANCE_REPORT_GENERATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|SecurityPolicyChanged|Segurança e LGPD|Crítico|NODUOS.SECURITY.SECURITY_POLICY_CHANGED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|PrivacyPolicyChanged|Segurança e LGPD|Crítico|NODUOS.SECURITY.PRIVACY_POLICY_CHANGED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|DataSubjectRequestRegistered|Segurança e LGPD|Crítico|NODUOS.SECURITY.DATA_SUBJECT_REQUEST_REGISTERED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|ConsentRecordChanged|Segurança e LGPD|Sensível|NODUOS.SECURITY.CONSENT_RECORD_CHANGED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|RetentionPolicyChanged|Segurança e LGPD|Crítico|NODUOS.SECURITY.RETENTION_POLICY_CHANGED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|MaskingPolicyChanged|Segurança e LGPD|Crítico|NODUOS.SECURITY.MASKING_POLICY_CHANGED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|IncidentPolicyChanged|Segurança e LGPD|Sensível|NODUOS.SECURITY.INCIDENT_POLICY_CHANGED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|PlatformSupportCaseCreated|Suporte e Operação|Sensível|NODUOS.SUPPORT.PLATFORM_SUPPORT_CASE_CREATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|ServiceIncidentOpened|Suporte e Operação|Sensível|NODUOS.SUPPORT.SERVICE_INCIDENT_OPENED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|ServiceIncidentResolved|Suporte e Operação|Sensível|NODUOS.SUPPORT.SERVICE_INCIDENT_RESOLVED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|MaintenanceWindowScheduled|Suporte e Operação|Sensível|NODUOS.SUPPORT.MAINTENANCE_WINDOW_SCHEDULED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|RemoteSupportSessionRequested|Suporte e Operação|Crítico|NODUOS.SUPPORT.REMOTE_SUPPORT_SESSION_REQUESTED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|
|PostIncidentReviewCreated|Suporte e Operação|Sensível|NODUOS.SUPPORT.POST_INCIDENT_REVIEW_CREATED.v1|ResourceReference obrigatório quando houver recurso, ator, sujeito, organização, dispositivo, gateway, câmera, acesso, ticket, reserva, visitante, política ou evidência.|


## 48. Matriz de eventos que exigem mascaramento


|Event name|Owner module|Sensibilidade|Contract ID|Regra|
|---|---|---|---|---|
|AuthorizationDecisionIssued|Core Platform|Crítico|NODUOS.CORE.AUTHORIZATION_DECISION_ISSUED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|UserAccountCreated|Core Platform|Sensível|NODUOS.CORE.USER_ACCOUNT_CREATED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|UserAccountSuspended|Core Platform|Sensível|NODUOS.CORE.USER_ACCOUNT_SUSPENDED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|PermissionGranted|Core Platform|Crítico|NODUOS.CORE.PERMISSION_GRANTED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|PermissionRevoked|Core Platform|Crítico|NODUOS.CORE.PERMISSION_REVOKED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|LicenseChanged|Core Platform|Crítico|NODUOS.CORE.LICENSE_CHANGED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|FeatureFlagChanged|Core Platform|Crítico|NODUOS.CORE.FEATURE_FLAG_CHANGED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|MasterSensitiveExportRequestRegistered|Master|Crítico|NODUOS.MASTER.MASTER_SENSITIVE_EXPORT_REQUEST_REGISTERED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|PartnerProfileUpdated|Parceiros|Sensível|NODUOS.PARTNER.PARTNER_PROFILE_UPDATED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|PartnerGatewayRegistrationRequestRegistered|Parceiros|Sensível|NODUOS.PARTNER.PARTNER_GATEWAY_REGISTRATION_REQUEST_REGISTERED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|PartnerDeviceRegistrationRequestRegistered|Parceiros|Sensível|NODUOS.PARTNER.PARTNER_DEVICE_REGISTRATION_REQUEST_REGISTERED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|OrganizationProfileUpdated|Organizações|Sensível|NODUOS.ORG.ORGANIZATION_PROFILE_UPDATED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|PersonProfileCreated|Pessoas e Clientes|Sensível|NODUOS.PEOPLE.PERSON_PROFILE_CREATED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|PersonProfileUpdated|Pessoas e Clientes|Sensível|NODUOS.PEOPLE.PERSON_PROFILE_UPDATED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|ClientProfileCreated|Pessoas e Clientes|Sensível|NODUOS.PEOPLE.CLIENT_PROFILE_CREATED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|PersonUnitLinked|Pessoas e Clientes|Sensível|NODUOS.PEOPLE.PERSON_UNIT_LINKED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|PersonConsentChanged|Pessoas e Clientes|Sensível|NODUOS.PEOPLE.PERSON_CONSENT_CHANGED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|PermissionConflictDetected|Herança e Permissões|Crítico|NODUOS.POLICY.PERMISSION_CONFLICT_DETECTED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|GatewayRegistered|Gateway Local / Mikrotik / Tunnel|Sensível|NODUOS.GATEWAY.GATEWAY_REGISTERED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|GatewayConnected|Gateway Local / Mikrotik / Tunnel|Sensível|NODUOS.GATEWAY.GATEWAY_CONNECTED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|GatewayDisconnected|Gateway Local / Mikrotik / Tunnel|Sensível|NODUOS.GATEWAY.GATEWAY_DISCONNECTED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|GatewayDiagnosticRequested|Gateway Local / Mikrotik / Tunnel|Sensível|NODUOS.GATEWAY.GATEWAY_DIAGNOSTIC_REQUESTED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|GatewayCommandResultRecorded|Gateway Local / Mikrotik / Tunnel|Crítico|NODUOS.GATEWAY.GATEWAY_COMMAND_RESULT_RECORDED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|GatewayDeviceDiscoveryCompleted|Gateway Local / Mikrotik / Tunnel|Sensível|NODUOS.GATEWAY.GATEWAY_DEVICE_DISCOVERY_COMPLETED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|DeviceRegistered|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_REGISTERED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|DeviceStatusChanged|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_STATUS_CHANGED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|DeviceHealthChanged|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_HEALTH_CHANGED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|DeviceDiagnosticRequested|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_DIAGNOSTIC_REQUESTED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|DeviceLifecycleChanged|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_LIFECYCLE_CHANGED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|DeviceMaintenanceRecorded|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_MAINTENANCE_RECORDED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|AccessAttemptRecorded|Controle de Acesso|Sensível|NODUOS.ACCESS.ACCESS_ATTEMPT_RECORDED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|AccessGranted|Controle de Acesso|Crítico|NODUOS.ACCESS.ACCESS_GRANTED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|AccessDenied|Controle de Acesso|Crítico|NODUOS.ACCESS.ACCESS_DENIED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|AccessExecutionResultRecorded|Controle de Acesso|Crítico|NODUOS.ACCESS.ACCESS_EXECUTION_RESULT_RECORDED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|AccessCredentialCreated|Controle de Acesso|Sensível|NODUOS.ACCESS.ACCESS_CREDENTIAL_CREATED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|AccessCredentialRevoked|Controle de Acesso|Sensível|NODUOS.ACCESS.ACCESS_CREDENTIAL_REVOKED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|CameraLiveViewRequested|Câmeras / VMS|Sensível|NODUOS.CAMERA.CAMERA_LIVE_VIEW_REQUESTED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|CameraPlaybackRequested|Câmeras / VMS|Sensível|NODUOS.CAMERA.CAMERA_PLAYBACK_REQUESTED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|CameraClipCreated|Câmeras / VMS|Sensível|NODUOS.CAMERA.CAMERA_CLIP_CREATED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|CameraSnapshotCreated|Câmeras / VMS|Sensível|NODUOS.CAMERA.CAMERA_SNAPSHOT_CREATED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|CameraEvidenceReferenceCreated|Câmeras / VMS|Crítico|NODUOS.CAMERA.CAMERA_EVIDENCE_REFERENCE_CREATED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|VideoRetentionPolicyChanged|Câmeras / VMS|Crítico|NODUOS.CAMERA.VIDEO_RETENTION_POLICY_CHANGED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|AlarmArmed|Alarmes|Sensível|NODUOS.ALARM.ALARM_ARMED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|AlarmDisarmed|Alarmes|Sensível|NODUOS.ALARM.ALARM_DISARMED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|AlarmTriggered|Alarmes|Crítico|NODUOS.ALARM.ALARM_TRIGGERED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|PanicTriggered|Alarmes|Crítico|NODUOS.ALARM.PANIC_TRIGGERED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|AlarmAcknowledged|Alarmes|Sensível|NODUOS.ALARM.ALARM_ACKNOWLEDGED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|AlarmResolved|Alarmes|Sensível|NODUOS.ALARM.ALARM_RESOLVED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|InvoiceCreated|Financeiro|Sensível|NODUOS.FINANCE.INVOICE_CREATED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|ChargeCreated|Financeiro|Sensível|NODUOS.FINANCE.CHARGE_CREATED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|PaymentRegistered|Financeiro|Sensível|NODUOS.FINANCE.PAYMENT_REGISTERED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|PaymentFailed|Financeiro|Sensível|NODUOS.FINANCE.PAYMENT_FAILED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|ReceiptIssued|Financeiro|Sensível|NODUOS.FINANCE.RECEIPT_ISSUED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|OverdueDetected|Financeiro|Sensível|NODUOS.FINANCE.OVERDUE_DETECTED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|FinancialRestrictionSignalRegistered|Financeiro|Crítico|NODUOS.FINANCE.FINANCIAL_RESTRICTION_SIGNAL_REGISTERED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|VisitorInviteCreated|Convites e Visitantes|Sensível|NODUOS.VISITOR.VISITOR_INVITE_CREATED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|VisitApproved|Convites e Visitantes|Sensível|NODUOS.VISITOR.VISIT_APPROVED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|VisitDenied|Convites e Visitantes|Sensível|NODUOS.VISITOR.VISIT_DENIED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|VisitorCheckInRecorded|Convites e Visitantes|Sensível|NODUOS.VISITOR.VISITOR_CHECK_IN_RECORDED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|VisitorCheckOutRecorded|Convites e Visitantes|Sensível|NODUOS.VISITOR.VISITOR_CHECK_OUT_RECORDED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|TemporaryQRCodeCreated|Convites e Visitantes|Sensível|NODUOS.VISITOR.TEMPORARY_QR_CODE_CREATED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|OperationalTicketCreated|Tickets|Sensível|NODUOS.TICKET.OPERATIONAL_TICKET_CREATED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|TicketCommentAdded|Tickets|Sensível|NODUOS.TICKET.TICKET_COMMENT_ADDED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|TicketEscalated|Tickets|Sensível|NODUOS.TICKET.TICKET_ESCALATED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|TicketResolved|Tickets|Sensível|NODUOS.TICKET.TICKET_RESOLVED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|TicketReopened|Tickets|Sensível|NODUOS.TICKET.TICKET_REOPENED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|TicketAttachmentReferenceAdded|Tickets|Sensível|NODUOS.TICKET.TICKET_ATTACHMENT_REFERENCE_ADDED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|ReservationCreated|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_CREATED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|ReservationHoldCreated|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_HOLD_CREATED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|ReservationApproved|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_APPROVED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|ReservationCancelled|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_CANCELLED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|ReservationCheckInRecorded|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_CHECK_IN_RECORDED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|ReservationNoShowRecorded|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_NO_SHOW_RECORDED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|ReservationChargeRequestRegistered|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_CHARGE_REQUEST_REGISTERED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|BIReportCreated|Relatórios / BI|Sensível|NODUOS.BI.BI_REPORT_CREATED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|BIExportRequested|Relatórios / BI|Crítico|NODUOS.BI.BI_EXPORT_REQUESTED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|BIExportCompleted|Relatórios / BI|Crítico|NODUOS.BI.BI_EXPORT_COMPLETED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|BIExportFailed|Relatórios / BI|Crítico|NODUOS.BI.BI_EXPORT_FAILED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|BIInsightGenerated|Relatórios / BI|Sensível|NODUOS.BI.BI_INSIGHT_GENERATED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|BrandPublishingRequestRegistered|White-label|Crítico|NODUOS.WHITE_LABEL.BRAND_PUBLISHING_REQUEST_REGISTERED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|BrandPublishingResultRecorded|White-label|Crítico|NODUOS.WHITE_LABEL.BRAND_PUBLISHING_RESULT_RECORDED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|NotificationPreferenceChanged|Notificações|Sensível|NODUOS.NOTIFICATION.NOTIFICATION_PREFERENCE_CHANGED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|NotificationOptOutChanged|Notificações|Sensível|NODUOS.NOTIFICATION.NOTIFICATION_OPT_OUT_CHANGED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|AutomationActionRequestRegistered|Automações|Crítico|NODUOS.AUTOMATION.AUTOMATION_ACTION_REQUEST_REGISTERED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|AutomationActionResultRecorded|Automações|Crítico|NODUOS.AUTOMATION.AUTOMATION_ACTION_RESULT_RECORDED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|ConnectorInstallationRequested|Marketplace de Integrações|Crítico|NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION_REQUESTED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|ConnectorInstallationCompleted|Marketplace de Integrações|Crítico|NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION_COMPLETED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|ConnectorInstallationFailed|Marketplace de Integrações|Crítico|NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION_FAILED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|ExternalEventReceived|Marketplace de Integrações|Crítico|NODUOS.MARKETPLACE.EXTERNAL_EVENT_RECEIVED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|ExternalEventNormalized|Marketplace de Integrações|Crítico|NODUOS.MARKETPLACE.EXTERNAL_EVENT_NORMALIZED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|AuditTrailRecorded|Auditoria e Compliance|Sensível|NODUOS.AUDIT.AUDIT_TRAIL_RECORDED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|AuditQueryExecuted|Auditoria e Compliance|Sensível|NODUOS.AUDIT.AUDIT_QUERY_EXECUTED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|AuditExportRequested|Auditoria e Compliance|Crítico|NODUOS.AUDIT.AUDIT_EXPORT_REQUESTED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|ComplianceCaseOpened|Auditoria e Compliance|Sensível|NODUOS.AUDIT.COMPLIANCE_CASE_OPENED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|EvidenceChainOfCustodyUpdated|Auditoria e Compliance|Crítico|NODUOS.AUDIT.EVIDENCE_CHAIN_OF_CUSTODY_UPDATED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|ComplianceReportGenerated|Auditoria e Compliance|Sensível|NODUOS.AUDIT.COMPLIANCE_REPORT_GENERATED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|SecurityPolicyChanged|Segurança e LGPD|Crítico|NODUOS.SECURITY.SECURITY_POLICY_CHANGED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|PrivacyPolicyChanged|Segurança e LGPD|Crítico|NODUOS.SECURITY.PRIVACY_POLICY_CHANGED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|DataSubjectRequestRegistered|Segurança e LGPD|Crítico|NODUOS.SECURITY.DATA_SUBJECT_REQUEST_REGISTERED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|ConsentRecordChanged|Segurança e LGPD|Sensível|NODUOS.SECURITY.CONSENT_RECORD_CHANGED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|RetentionPolicyChanged|Segurança e LGPD|Crítico|NODUOS.SECURITY.RETENTION_POLICY_CHANGED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|MaskingPolicyChanged|Segurança e LGPD|Crítico|NODUOS.SECURITY.MASKING_POLICY_CHANGED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|IncidentPolicyChanged|Segurança e LGPD|Sensível|NODUOS.SECURITY.INCIDENT_POLICY_CHANGED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|PlatformSupportCaseCreated|Suporte e Operação|Sensível|NODUOS.SUPPORT.PLATFORM_SUPPORT_CASE_CREATED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|ServiceIncidentOpened|Suporte e Operação|Sensível|NODUOS.SUPPORT.SERVICE_INCIDENT_OPENED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|ServiceIncidentResolved|Suporte e Operação|Sensível|NODUOS.SUPPORT.SERVICE_INCIDENT_RESOLVED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|MaintenanceWindowScheduled|Suporte e Operação|Sensível|NODUOS.SUPPORT.MAINTENANCE_WINDOW_SCHEDULED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|RemoteSupportSessionRequested|Suporte e Operação|Crítico|NODUOS.SUPPORT.REMOTE_SUPPORT_SESSION_REQUESTED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|
|PostIncidentReviewCreated|Suporte e Operação|Sensível|NODUOS.SUPPORT.POST_INCIDENT_REVIEW_CREATED.v1|Máscara por perfil, finalidade e contrato. Dado bruto apenas com política explícita.|


## 49. Matriz de eventos que exigem retenção específica


|Event name|Owner module|Sensibilidade|Contract ID|Regra|
|---|---|---|---|---|
|AuthorizationDecisionIssued|Core Platform|Crítico|NODUOS.CORE.AUTHORIZATION_DECISION_ISSUED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|PermissionGranted|Core Platform|Crítico|NODUOS.CORE.PERMISSION_GRANTED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|PermissionRevoked|Core Platform|Crítico|NODUOS.CORE.PERMISSION_REVOKED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|LicenseChanged|Core Platform|Crítico|NODUOS.CORE.LICENSE_CHANGED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|FeatureFlagChanged|Core Platform|Crítico|NODUOS.CORE.FEATURE_FLAG_CHANGED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|MasterSensitiveExportRequestRegistered|Master|Crítico|NODUOS.MASTER.MASTER_SENSITIVE_EXPORT_REQUEST_REGISTERED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|PermissionConflictDetected|Herança e Permissões|Crítico|NODUOS.POLICY.PERMISSION_CONFLICT_DETECTED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|GatewayDiagnosticRequested|Gateway Local / Mikrotik / Tunnel|Sensível|NODUOS.GATEWAY.GATEWAY_DIAGNOSTIC_REQUESTED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|GatewayCommandResultRecorded|Gateway Local / Mikrotik / Tunnel|Crítico|NODUOS.GATEWAY.GATEWAY_COMMAND_RESULT_RECORDED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|DeviceDiagnosticRequested|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_DIAGNOSTIC_REQUESTED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|AccessGranted|Controle de Acesso|Crítico|NODUOS.ACCESS.ACCESS_GRANTED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|AccessDenied|Controle de Acesso|Crítico|NODUOS.ACCESS.ACCESS_DENIED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|AccessExecutionResultRecorded|Controle de Acesso|Crítico|NODUOS.ACCESS.ACCESS_EXECUTION_RESULT_RECORDED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|CameraEvidenceReferenceCreated|Câmeras / VMS|Crítico|NODUOS.CAMERA.CAMERA_EVIDENCE_REFERENCE_CREATED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|VideoRetentionPolicyChanged|Câmeras / VMS|Crítico|NODUOS.CAMERA.VIDEO_RETENTION_POLICY_CHANGED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|AlarmTriggered|Alarmes|Crítico|NODUOS.ALARM.ALARM_TRIGGERED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|PanicTriggered|Alarmes|Crítico|NODUOS.ALARM.PANIC_TRIGGERED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|InvoiceCreated|Financeiro|Sensível|NODUOS.FINANCE.INVOICE_CREATED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|PaymentRegistered|Financeiro|Sensível|NODUOS.FINANCE.PAYMENT_REGISTERED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|PaymentFailed|Financeiro|Sensível|NODUOS.FINANCE.PAYMENT_FAILED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|FinancialRestrictionSignalRegistered|Financeiro|Crítico|NODUOS.FINANCE.FINANCIAL_RESTRICTION_SIGNAL_REGISTERED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|VisitorInviteCreated|Convites e Visitantes|Sensível|NODUOS.VISITOR.VISITOR_INVITE_CREATED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|VisitorCheckInRecorded|Convites e Visitantes|Sensível|NODUOS.VISITOR.VISITOR_CHECK_IN_RECORDED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|VisitorCheckOutRecorded|Convites e Visitantes|Sensível|NODUOS.VISITOR.VISITOR_CHECK_OUT_RECORDED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|TemporaryQRCodeCreated|Convites e Visitantes|Sensível|NODUOS.VISITOR.TEMPORARY_QR_CODE_CREATED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|BIExportRequested|Relatórios / BI|Crítico|NODUOS.BI.BI_EXPORT_REQUESTED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|BIExportCompleted|Relatórios / BI|Crítico|NODUOS.BI.BI_EXPORT_COMPLETED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|BIExportFailed|Relatórios / BI|Crítico|NODUOS.BI.BI_EXPORT_FAILED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|BrandPublishingRequestRegistered|White-label|Crítico|NODUOS.WHITE_LABEL.BRAND_PUBLISHING_REQUEST_REGISTERED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|BrandPublishingResultRecorded|White-label|Crítico|NODUOS.WHITE_LABEL.BRAND_PUBLISHING_RESULT_RECORDED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|AutomationActionRequestRegistered|Automações|Crítico|NODUOS.AUTOMATION.AUTOMATION_ACTION_REQUEST_REGISTERED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|AutomationActionResultRecorded|Automações|Crítico|NODUOS.AUTOMATION.AUTOMATION_ACTION_RESULT_RECORDED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|ConnectorInstallationRequested|Marketplace de Integrações|Crítico|NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION_REQUESTED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|ConnectorInstallationCompleted|Marketplace de Integrações|Crítico|NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION_COMPLETED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|ConnectorInstallationFailed|Marketplace de Integrações|Crítico|NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION_FAILED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|ExternalEventReceived|Marketplace de Integrações|Crítico|NODUOS.MARKETPLACE.EXTERNAL_EVENT_RECEIVED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|ExternalEventNormalized|Marketplace de Integrações|Crítico|NODUOS.MARKETPLACE.EXTERNAL_EVENT_NORMALIZED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|AuditTrailRecorded|Auditoria e Compliance|Sensível|NODUOS.AUDIT.AUDIT_TRAIL_RECORDED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|AuditQueryExecuted|Auditoria e Compliance|Sensível|NODUOS.AUDIT.AUDIT_QUERY_EXECUTED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|AuditExportRequested|Auditoria e Compliance|Crítico|NODUOS.AUDIT.AUDIT_EXPORT_REQUESTED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|EvidenceChainOfCustodyUpdated|Auditoria e Compliance|Crítico|NODUOS.AUDIT.EVIDENCE_CHAIN_OF_CUSTODY_UPDATED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|SecurityPolicyChanged|Segurança e LGPD|Crítico|NODUOS.SECURITY.SECURITY_POLICY_CHANGED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|PrivacyPolicyChanged|Segurança e LGPD|Crítico|NODUOS.SECURITY.PRIVACY_POLICY_CHANGED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|DataSubjectRequestRegistered|Segurança e LGPD|Crítico|NODUOS.SECURITY.DATA_SUBJECT_REQUEST_REGISTERED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|RetentionPolicyChanged|Segurança e LGPD|Crítico|NODUOS.SECURITY.RETENTION_POLICY_CHANGED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|MaskingPolicyChanged|Segurança e LGPD|Crítico|NODUOS.SECURITY.MASKING_POLICY_CHANGED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|IncidentPolicyChanged|Segurança e LGPD|Sensível|NODUOS.SECURITY.INCIDENT_POLICY_CHANGED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|ServiceIncidentOpened|Suporte e Operação|Sensível|NODUOS.SUPPORT.SERVICE_INCIDENT_OPENED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|ServiceIncidentResolved|Suporte e Operação|Sensível|NODUOS.SUPPORT.SERVICE_INCIDENT_RESOLVED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|RemoteSupportSessionRequested|Suporte e Operação|Crítico|NODUOS.SUPPORT.REMOTE_SUPPORT_SESSION_REQUESTED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|
|PostIncidentReviewCreated|Suporte e Operação|Sensível|NODUOS.SUPPORT.POST_INCIDENT_REVIEW_CREATED.v1|Retenção mínima vinculada à finalidade; expurgo/anonimização quando aplicável.|


## 50. Matriz de eventos proibidos de transportar payload bruto


|Event name|Owner module|Sensibilidade|Contract ID|Regra|
|---|---|---|---|---|
|AuthorizationDecisionIssued|Core Platform|Crítico|NODUOS.CORE.AUTHORIZATION_DECISION_ISSUED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|UserAccountCreated|Core Platform|Sensível|NODUOS.CORE.USER_ACCOUNT_CREATED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|UserAccountSuspended|Core Platform|Sensível|NODUOS.CORE.USER_ACCOUNT_SUSPENDED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|PermissionGranted|Core Platform|Crítico|NODUOS.CORE.PERMISSION_GRANTED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|PermissionRevoked|Core Platform|Crítico|NODUOS.CORE.PERMISSION_REVOKED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|LicenseChanged|Core Platform|Crítico|NODUOS.CORE.LICENSE_CHANGED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|FeatureFlagChanged|Core Platform|Crítico|NODUOS.CORE.FEATURE_FLAG_CHANGED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|MasterSensitiveExportRequestRegistered|Master|Crítico|NODUOS.MASTER.MASTER_SENSITIVE_EXPORT_REQUEST_REGISTERED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|PartnerProfileUpdated|Parceiros|Sensível|NODUOS.PARTNER.PARTNER_PROFILE_UPDATED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|PartnerGatewayRegistrationRequestRegistered|Parceiros|Sensível|NODUOS.PARTNER.PARTNER_GATEWAY_REGISTRATION_REQUEST_REGISTERED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|PartnerDeviceRegistrationRequestRegistered|Parceiros|Sensível|NODUOS.PARTNER.PARTNER_DEVICE_REGISTRATION_REQUEST_REGISTERED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|OrganizationProfileUpdated|Organizações|Sensível|NODUOS.ORG.ORGANIZATION_PROFILE_UPDATED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|PersonProfileCreated|Pessoas e Clientes|Sensível|NODUOS.PEOPLE.PERSON_PROFILE_CREATED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|PersonProfileUpdated|Pessoas e Clientes|Sensível|NODUOS.PEOPLE.PERSON_PROFILE_UPDATED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|ClientProfileCreated|Pessoas e Clientes|Sensível|NODUOS.PEOPLE.CLIENT_PROFILE_CREATED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|PersonUnitLinked|Pessoas e Clientes|Sensível|NODUOS.PEOPLE.PERSON_UNIT_LINKED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|PersonConsentChanged|Pessoas e Clientes|Sensível|NODUOS.PEOPLE.PERSON_CONSENT_CHANGED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|PermissionConflictDetected|Herança e Permissões|Crítico|NODUOS.POLICY.PERMISSION_CONFLICT_DETECTED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|GatewayRegistered|Gateway Local / Mikrotik / Tunnel|Sensível|NODUOS.GATEWAY.GATEWAY_REGISTERED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|GatewayConnected|Gateway Local / Mikrotik / Tunnel|Sensível|NODUOS.GATEWAY.GATEWAY_CONNECTED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|GatewayDisconnected|Gateway Local / Mikrotik / Tunnel|Sensível|NODUOS.GATEWAY.GATEWAY_DISCONNECTED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|GatewayDiagnosticRequested|Gateway Local / Mikrotik / Tunnel|Sensível|NODUOS.GATEWAY.GATEWAY_DIAGNOSTIC_REQUESTED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|GatewayCommandResultRecorded|Gateway Local / Mikrotik / Tunnel|Crítico|NODUOS.GATEWAY.GATEWAY_COMMAND_RESULT_RECORDED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|GatewayDeviceDiscoveryCompleted|Gateway Local / Mikrotik / Tunnel|Sensível|NODUOS.GATEWAY.GATEWAY_DEVICE_DISCOVERY_COMPLETED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|DeviceRegistered|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_REGISTERED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|DeviceStatusChanged|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_STATUS_CHANGED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|DeviceHealthChanged|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_HEALTH_CHANGED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|DeviceDiagnosticRequested|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_DIAGNOSTIC_REQUESTED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|DeviceLifecycleChanged|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_LIFECYCLE_CHANGED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|DeviceMaintenanceRecorded|Dispositivos|Sensível|NODUOS.DEVICE.DEVICE_MAINTENANCE_RECORDED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|AccessAttemptRecorded|Controle de Acesso|Sensível|NODUOS.ACCESS.ACCESS_ATTEMPT_RECORDED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|AccessGranted|Controle de Acesso|Crítico|NODUOS.ACCESS.ACCESS_GRANTED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|AccessDenied|Controle de Acesso|Crítico|NODUOS.ACCESS.ACCESS_DENIED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|AccessExecutionResultRecorded|Controle de Acesso|Crítico|NODUOS.ACCESS.ACCESS_EXECUTION_RESULT_RECORDED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|AccessCredentialCreated|Controle de Acesso|Sensível|NODUOS.ACCESS.ACCESS_CREDENTIAL_CREATED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|AccessCredentialRevoked|Controle de Acesso|Sensível|NODUOS.ACCESS.ACCESS_CREDENTIAL_REVOKED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|CameraLiveViewRequested|Câmeras / VMS|Sensível|NODUOS.CAMERA.CAMERA_LIVE_VIEW_REQUESTED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|CameraPlaybackRequested|Câmeras / VMS|Sensível|NODUOS.CAMERA.CAMERA_PLAYBACK_REQUESTED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|CameraClipCreated|Câmeras / VMS|Sensível|NODUOS.CAMERA.CAMERA_CLIP_CREATED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|CameraSnapshotCreated|Câmeras / VMS|Sensível|NODUOS.CAMERA.CAMERA_SNAPSHOT_CREATED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|CameraEvidenceReferenceCreated|Câmeras / VMS|Crítico|NODUOS.CAMERA.CAMERA_EVIDENCE_REFERENCE_CREATED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|VideoRetentionPolicyChanged|Câmeras / VMS|Crítico|NODUOS.CAMERA.VIDEO_RETENTION_POLICY_CHANGED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|AlarmArmed|Alarmes|Sensível|NODUOS.ALARM.ALARM_ARMED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|AlarmDisarmed|Alarmes|Sensível|NODUOS.ALARM.ALARM_DISARMED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|AlarmTriggered|Alarmes|Crítico|NODUOS.ALARM.ALARM_TRIGGERED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|PanicTriggered|Alarmes|Crítico|NODUOS.ALARM.PANIC_TRIGGERED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|AlarmAcknowledged|Alarmes|Sensível|NODUOS.ALARM.ALARM_ACKNOWLEDGED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|AlarmResolved|Alarmes|Sensível|NODUOS.ALARM.ALARM_RESOLVED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|InvoiceCreated|Financeiro|Sensível|NODUOS.FINANCE.INVOICE_CREATED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|ChargeCreated|Financeiro|Sensível|NODUOS.FINANCE.CHARGE_CREATED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|PaymentRegistered|Financeiro|Sensível|NODUOS.FINANCE.PAYMENT_REGISTERED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|PaymentFailed|Financeiro|Sensível|NODUOS.FINANCE.PAYMENT_FAILED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|ReceiptIssued|Financeiro|Sensível|NODUOS.FINANCE.RECEIPT_ISSUED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|OverdueDetected|Financeiro|Sensível|NODUOS.FINANCE.OVERDUE_DETECTED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|FinancialRestrictionSignalRegistered|Financeiro|Crítico|NODUOS.FINANCE.FINANCIAL_RESTRICTION_SIGNAL_REGISTERED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|VisitorInviteCreated|Convites e Visitantes|Sensível|NODUOS.VISITOR.VISITOR_INVITE_CREATED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|VisitApproved|Convites e Visitantes|Sensível|NODUOS.VISITOR.VISIT_APPROVED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|VisitDenied|Convites e Visitantes|Sensível|NODUOS.VISITOR.VISIT_DENIED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|VisitorCheckInRecorded|Convites e Visitantes|Sensível|NODUOS.VISITOR.VISITOR_CHECK_IN_RECORDED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|VisitorCheckOutRecorded|Convites e Visitantes|Sensível|NODUOS.VISITOR.VISITOR_CHECK_OUT_RECORDED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|TemporaryQRCodeCreated|Convites e Visitantes|Sensível|NODUOS.VISITOR.TEMPORARY_QR_CODE_CREATED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|OperationalTicketCreated|Tickets|Sensível|NODUOS.TICKET.OPERATIONAL_TICKET_CREATED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|TicketCommentAdded|Tickets|Sensível|NODUOS.TICKET.TICKET_COMMENT_ADDED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|TicketEscalated|Tickets|Sensível|NODUOS.TICKET.TICKET_ESCALATED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|TicketResolved|Tickets|Sensível|NODUOS.TICKET.TICKET_RESOLVED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|TicketReopened|Tickets|Sensível|NODUOS.TICKET.TICKET_REOPENED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|TicketAttachmentReferenceAdded|Tickets|Sensível|NODUOS.TICKET.TICKET_ATTACHMENT_REFERENCE_ADDED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|ReservationCreated|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_CREATED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|ReservationHoldCreated|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_HOLD_CREATED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|ReservationApproved|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_APPROVED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|ReservationCancelled|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_CANCELLED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|ReservationCheckInRecorded|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_CHECK_IN_RECORDED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|ReservationNoShowRecorded|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_NO_SHOW_RECORDED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|ReservationChargeRequestRegistered|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_CHARGE_REQUEST_REGISTERED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|BIReportCreated|Relatórios / BI|Sensível|NODUOS.BI.BI_REPORT_CREATED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|BIExportRequested|Relatórios / BI|Crítico|NODUOS.BI.BI_EXPORT_REQUESTED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|BIExportCompleted|Relatórios / BI|Crítico|NODUOS.BI.BI_EXPORT_COMPLETED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|BIExportFailed|Relatórios / BI|Crítico|NODUOS.BI.BI_EXPORT_FAILED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|BIInsightGenerated|Relatórios / BI|Sensível|NODUOS.BI.BI_INSIGHT_GENERATED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|BrandPublishingRequestRegistered|White-label|Crítico|NODUOS.WHITE_LABEL.BRAND_PUBLISHING_REQUEST_REGISTERED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|BrandPublishingResultRecorded|White-label|Crítico|NODUOS.WHITE_LABEL.BRAND_PUBLISHING_RESULT_RECORDED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|NotificationPreferenceChanged|Notificações|Sensível|NODUOS.NOTIFICATION.NOTIFICATION_PREFERENCE_CHANGED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|NotificationOptOutChanged|Notificações|Sensível|NODUOS.NOTIFICATION.NOTIFICATION_OPT_OUT_CHANGED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|AutomationActionRequestRegistered|Automações|Crítico|NODUOS.AUTOMATION.AUTOMATION_ACTION_REQUEST_REGISTERED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|AutomationActionResultRecorded|Automações|Crítico|NODUOS.AUTOMATION.AUTOMATION_ACTION_RESULT_RECORDED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|ConnectorInstallationRequested|Marketplace de Integrações|Crítico|NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION_REQUESTED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|ConnectorInstallationCompleted|Marketplace de Integrações|Crítico|NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION_COMPLETED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|ConnectorInstallationFailed|Marketplace de Integrações|Crítico|NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION_FAILED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|ExternalEventReceived|Marketplace de Integrações|Crítico|NODUOS.MARKETPLACE.EXTERNAL_EVENT_RECEIVED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|ExternalEventNormalized|Marketplace de Integrações|Crítico|NODUOS.MARKETPLACE.EXTERNAL_EVENT_NORMALIZED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|AuditTrailRecorded|Auditoria e Compliance|Sensível|NODUOS.AUDIT.AUDIT_TRAIL_RECORDED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|AuditQueryExecuted|Auditoria e Compliance|Sensível|NODUOS.AUDIT.AUDIT_QUERY_EXECUTED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|AuditExportRequested|Auditoria e Compliance|Crítico|NODUOS.AUDIT.AUDIT_EXPORT_REQUESTED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|ComplianceCaseOpened|Auditoria e Compliance|Sensível|NODUOS.AUDIT.COMPLIANCE_CASE_OPENED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|EvidenceChainOfCustodyUpdated|Auditoria e Compliance|Crítico|NODUOS.AUDIT.EVIDENCE_CHAIN_OF_CUSTODY_UPDATED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|ComplianceReportGenerated|Auditoria e Compliance|Sensível|NODUOS.AUDIT.COMPLIANCE_REPORT_GENERATED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|SecurityPolicyChanged|Segurança e LGPD|Crítico|NODUOS.SECURITY.SECURITY_POLICY_CHANGED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|PrivacyPolicyChanged|Segurança e LGPD|Crítico|NODUOS.SECURITY.PRIVACY_POLICY_CHANGED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|DataSubjectRequestRegistered|Segurança e LGPD|Crítico|NODUOS.SECURITY.DATA_SUBJECT_REQUEST_REGISTERED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|ConsentRecordChanged|Segurança e LGPD|Sensível|NODUOS.SECURITY.CONSENT_RECORD_CHANGED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|RetentionPolicyChanged|Segurança e LGPD|Crítico|NODUOS.SECURITY.RETENTION_POLICY_CHANGED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|MaskingPolicyChanged|Segurança e LGPD|Crítico|NODUOS.SECURITY.MASKING_POLICY_CHANGED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|IncidentPolicyChanged|Segurança e LGPD|Sensível|NODUOS.SECURITY.INCIDENT_POLICY_CHANGED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|PlatformSupportCaseCreated|Suporte e Operação|Sensível|NODUOS.SUPPORT.PLATFORM_SUPPORT_CASE_CREATED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|ServiceIncidentOpened|Suporte e Operação|Sensível|NODUOS.SUPPORT.SERVICE_INCIDENT_OPENED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|ServiceIncidentResolved|Suporte e Operação|Sensível|NODUOS.SUPPORT.SERVICE_INCIDENT_RESOLVED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|MaintenanceWindowScheduled|Suporte e Operação|Sensível|NODUOS.SUPPORT.MAINTENANCE_WINDOW_SCHEDULED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|RemoteSupportSessionRequested|Suporte e Operação|Crítico|NODUOS.SUPPORT.REMOTE_SUPPORT_SESSION_REQUESTED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|
|PostIncidentReviewCreated|Suporte e Operação|Sensível|NODUOS.SUPPORT.POST_INCIDENT_REVIEW_CREATED.v1|Proibido transportar estado interno completo, banco, segredo, biometria, vídeo/imagem/documento sem política.|


## 51. Matriz de eventos proibidos em BI sem agregação, máscara ou finalidade


|Event name|Owner module|Sensibilidade|Contract ID|Regra|
|---|---|---|---|---|
|PersonProfileCreated|Pessoas e Clientes|Sensível|NODUOS.PEOPLE.PERSON_PROFILE_CREATED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|PersonProfileUpdated|Pessoas e Clientes|Sensível|NODUOS.PEOPLE.PERSON_PROFILE_UPDATED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|ClientProfileCreated|Pessoas e Clientes|Sensível|NODUOS.PEOPLE.CLIENT_PROFILE_CREATED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|PersonUnitLinked|Pessoas e Clientes|Sensível|NODUOS.PEOPLE.PERSON_UNIT_LINKED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|PersonConsentChanged|Pessoas e Clientes|Sensível|NODUOS.PEOPLE.PERSON_CONSENT_CHANGED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|AccessAttemptRecorded|Controle de Acesso|Sensível|NODUOS.ACCESS.ACCESS_ATTEMPT_RECORDED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|AccessGranted|Controle de Acesso|Crítico|NODUOS.ACCESS.ACCESS_GRANTED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|AccessDenied|Controle de Acesso|Crítico|NODUOS.ACCESS.ACCESS_DENIED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|AccessExecutionResultRecorded|Controle de Acesso|Crítico|NODUOS.ACCESS.ACCESS_EXECUTION_RESULT_RECORDED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|AccessCredentialCreated|Controle de Acesso|Sensível|NODUOS.ACCESS.ACCESS_CREDENTIAL_CREATED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|AccessCredentialRevoked|Controle de Acesso|Sensível|NODUOS.ACCESS.ACCESS_CREDENTIAL_REVOKED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|CameraLiveViewRequested|Câmeras / VMS|Sensível|NODUOS.CAMERA.CAMERA_LIVE_VIEW_REQUESTED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|CameraPlaybackRequested|Câmeras / VMS|Sensível|NODUOS.CAMERA.CAMERA_PLAYBACK_REQUESTED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|CameraClipCreated|Câmeras / VMS|Sensível|NODUOS.CAMERA.CAMERA_CLIP_CREATED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|CameraSnapshotCreated|Câmeras / VMS|Sensível|NODUOS.CAMERA.CAMERA_SNAPSHOT_CREATED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|CameraEvidenceReferenceCreated|Câmeras / VMS|Crítico|NODUOS.CAMERA.CAMERA_EVIDENCE_REFERENCE_CREATED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|InvoiceCreated|Financeiro|Sensível|NODUOS.FINANCE.INVOICE_CREATED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|PaymentRegistered|Financeiro|Sensível|NODUOS.FINANCE.PAYMENT_REGISTERED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|PaymentFailed|Financeiro|Sensível|NODUOS.FINANCE.PAYMENT_FAILED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|VisitorInviteCreated|Convites e Visitantes|Sensível|NODUOS.VISITOR.VISITOR_INVITE_CREATED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|VisitApproved|Convites e Visitantes|Sensível|NODUOS.VISITOR.VISIT_APPROVED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|VisitDenied|Convites e Visitantes|Sensível|NODUOS.VISITOR.VISIT_DENIED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|VisitorCheckInRecorded|Convites e Visitantes|Sensível|NODUOS.VISITOR.VISITOR_CHECK_IN_RECORDED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|VisitorCheckOutRecorded|Convites e Visitantes|Sensível|NODUOS.VISITOR.VISITOR_CHECK_OUT_RECORDED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|OperationalTicketCreated|Tickets|Sensível|NODUOS.TICKET.OPERATIONAL_TICKET_CREATED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|TicketCommentAdded|Tickets|Sensível|NODUOS.TICKET.TICKET_COMMENT_ADDED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|TicketEscalated|Tickets|Sensível|NODUOS.TICKET.TICKET_ESCALATED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|TicketResolved|Tickets|Sensível|NODUOS.TICKET.TICKET_RESOLVED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|TicketReopened|Tickets|Sensível|NODUOS.TICKET.TICKET_REOPENED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|TicketAttachmentReferenceAdded|Tickets|Sensível|NODUOS.TICKET.TICKET_ATTACHMENT_REFERENCE_ADDED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|ReservationCreated|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_CREATED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|ReservationHoldCreated|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_HOLD_CREATED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|ReservationApproved|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_APPROVED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|ReservationCancelled|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_CANCELLED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|ReservationCheckInRecorded|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_CHECK_IN_RECORDED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|ReservationNoShowRecorded|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_NO_SHOW_RECORDED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|ReservationChargeRequestRegistered|Reservas|Sensível|NODUOS.RESERVATION.RESERVATION_CHARGE_REQUEST_REGISTERED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|AuditTrailRecorded|Auditoria e Compliance|Sensível|NODUOS.AUDIT.AUDIT_TRAIL_RECORDED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|AuditQueryExecuted|Auditoria e Compliance|Sensível|NODUOS.AUDIT.AUDIT_QUERY_EXECUTED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|AuditExportRequested|Auditoria e Compliance|Crítico|NODUOS.AUDIT.AUDIT_EXPORT_REQUESTED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|ComplianceCaseOpened|Auditoria e Compliance|Sensível|NODUOS.AUDIT.COMPLIANCE_CASE_OPENED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|ComplianceReportGenerated|Auditoria e Compliance|Sensível|NODUOS.AUDIT.COMPLIANCE_REPORT_GENERATED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|SecurityPolicyChanged|Segurança e LGPD|Crítico|NODUOS.SECURITY.SECURITY_POLICY_CHANGED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|DataSubjectRequestRegistered|Segurança e LGPD|Crítico|NODUOS.SECURITY.DATA_SUBJECT_REQUEST_REGISTERED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|ConsentRecordChanged|Segurança e LGPD|Sensível|NODUOS.SECURITY.CONSENT_RECORD_CHANGED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|PlatformSupportCaseCreated|Suporte e Operação|Sensível|NODUOS.SUPPORT.PLATFORM_SUPPORT_CASE_CREATED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|
|RemoteSupportSessionRequested|Suporte e Operação|Crítico|NODUOS.SUPPORT.REMOTE_SUPPORT_SESSION_REQUESTED.v1|BI deve usar agregação, máscara, finalidade, retenção e AuthorizationDecision quando sensível.|


## 52. Exemplos conceituais de EventEnvelope v1

### 52.1 Exemplo conceitual: AccessGranted

| Campo | Valor conceitual esperado |
|---|---|
| event_name | AccessGranted |
| event_type | Evento de fato ocorrido |
| owner_module | Controle de Acesso |
| source_module | Controle de Acesso |
| producer_module | Controle de Acesso |
| contract_id | NODUOS.ACCESS.ACCESS_GRANTED.v1 |
| sensitivity_level | Crítico |
| payload | resultado mínimo do acesso, access_point_reference, credential_reference mascarada, decision_result |
| proibido | biometria bruta, template facial bruto, banco interno, vídeo bruto, segredo de dispositivo |
| authorization_decision_reference | Obrigatória quando derivado de ação sensível autorizada |
| evidence_reference | Opcional quando houver prova vinculada, pertencente a Câmeras / VMS ou Auditoria conforme caso |
| audit_reference | Obrigatória |

### 52.2 Exemplo conceitual: PartnerDeviceRegistrationRequestRegistered

| Campo | Valor conceitual esperado |
|---|---|
| event_name | PartnerDeviceRegistrationRequestRegistered |
| event_type | Evento de solicitação registrada |
| owner_module | Parceiros |
| source_module | Parceiros |
| contract_id | NODUOS.PARTNER.PARTNER_DEVICE_REGISTRATION_REQUEST_REGISTERED.v1 |
| payload | request_reference, partner_reference, organization_reference, device_candidate_reference |
| proibido | DeviceRecord completo, credencial bruta de dispositivo, acesso direto ao Gateway/Dispositivos |
| regra | Registra solicitação, não prova que Dispositivos cadastrou o equipamento |

### 52.3 Exemplo conceitual: ExternalEventReceived e ExternalEventNormalized

| Evento | Definição | Confiança |
|---|---|---|
| ExternalEventReceived | Fato chegou de provedor externo | Não confiável para domínio interno |
| ExternalEventNormalized | Evento externo foi validado, minimizado, mapeado e associado a contrato | Pode ser consumido conforme contrato e política |

## 53. Exemplos de eventos inválidos e correções

| Evento inválido | Problema | Correção |
|---|---|---|
| `OpenDoorNow` | Nome de comando disfarçado | Usar comando `AccessExecutionCommand`; resultado vira `AccessExecutionResultRecorded` |
| `UserFullProfileUpdated` com CPF, telefone e documento completos | Payload pessoal bruto | Usar `PersonProfileUpdated` com PersonReference, categorias e máscara |
| `CameraClipCreated` com vídeo bruto | Vídeo bruto sem política | Usar `CameraEvidenceReferenceCreated` ou ClipReference |
| `WebhookSent` com segredo no payload | Segredo bruto | Usar SecretReference e webhook_delivery_reference |
| `InvoiceOverdue` com fatura completa | Payload financeiro excessivo | Usar resumo e InvoiceReference |
| `ExternalAccessGranted` vindo de provedor direto para módulos | Evento externo não normalizado | Primeiro `ExternalEventReceived`, depois `ExternalEventNormalized` |
| `PermissionGranted` sem tenant/contexto | Sem escopo | Rejeitar/quarentenar até contexto válido |
| `EventRetried` com novo event_id para mesma entrega sem regra | Duplicidade | Preservar event_id original e registrar retry_metadata |

## 54. Riscos de acoplamento encontrados

| Risco | Impacto | Correção oficial |
|---|---|---|
| Evento como comando | Consumidor executa regra sem autorização própria | Separar comando, solicitação registrada e fato ocorrido |
| Evento como banco compartilhado | Módulo passa a depender do estado interno do produtor | Payload mínimo + ResourceReference + read model autorizado |
| Evento com payload completo | Vazamento de dados e acoplamento | Minimização obrigatória |
| Evento sem owner_module | Domínio fica ambíguo | owner_module obrigatório |
| Evento sem producer_module | Publicação sem responsabilidade | producer_module obrigatório |
| Evento sem contract_id | Contrato invisível | contract_id obrigatório |
| Evento sem tenant/contexto | Vazamento multi-tenant | Rejeição/quarentena |
| Evento sensível sem política | Violação LGPD | Fail-closed |
| Evento externo como confiável | Entrada insegura | ExternalEventReceived + validação + ExternalEventNormalized |
| Retry sem deduplicação | Duplicidade operacional | Inbox/dedup obrigatório |

## 55. Correções consolidadas para o Catálogo de Contratos Públicos

Atualização consolidada para aplicação textual:

- Atualizar a seção de EventEnvelope v1 para refletir este detalhamento completo.
- Trocar exemplos ambíguos por nomenclaturas consolidadas quando necessário.
- Declarar que `producer_module`, `envelope_version`, `event_type`, `event_version`, `payload_schema_reference`, `compatibility_policy` e `deprecation_policy` fazem parte do padrão detalhado do envelope.
- Reforçar a diferença entre evento externo recebido e evento externo normalizado.

## 56. Correções consolidadas para a Matriz Técnica de Permissões por Contrato

Atualização consolidada para aplicação textual:

- Adicionar referência cruzada explícita para este documento no contrato transversal EventEnvelope v1.
- Reforçar que eventos críticos exigem outbox no produtor, inbox/dedup no consumidor, retry controlado, dead-letter/quarentena e reprocessamento seguro.
- Reforçar que `AuthorizationDecision` em evento é referência da ação original, não autorização nova.

## 57. Correções consolidadas para a Matriz Técnica de Dados Sensíveis por Contrato

Atualização consolidada para aplicação textual:

- Adicionar seção específica de eventos sensíveis e críticos conforme as matrizes deste documento.
- Reforçar que payload sensível deve preferir ResourceReference, EvidenceReference e SecretReference.
- Reforçar que eventos enviados para BI exigem agregação, máscara, finalidade e retenção.

## 58. Lacunas para detalhamento posterior

- Detalhamento próprio de EvidenceReference v1.
- Detalhamento próprio de SecretReference v1.
- Detalhamento próprio de AuthorizationDecision v1.
- Mapa de eventos por fluxo real, como acesso físico, visitante, reserva, cobrança, notificação, vídeo e suporte remoto.
- Catálogo de payload mínimo por evento crítico.
- Política de retenção por categoria de evento.
- Política de webhooks externos por consumidor autorizado.
- Política de assinatura e integridade de eventos externos.

## 59. Decisão oficial consolidada neste modelo final

A decisão abaixo fica consolidada neste modelo final para entrada no `03_DECISOES_OFICIAIS.md`, mantendo a sequência decisória da raiz.

### DEC-192: Detalhamento oficial do EventEnvelope v1

Tema: Governança técnica de eventos entre módulos.

Decisão: O EventEnvelope v1 passa a ser o padrão conceitual detalhado para todos os eventos intermodulares, eventos críticos, eventos sensíveis, eventos externos normalizados, webhooks autorizados e eventos técnicos de retry, dead-letter e quarentena. Todo evento deve declarar contrato, versão, módulos, tenant, contexto, ator, recurso quando aplicável, sensibilidade, finalidade, políticas, correlação, causalidade, payload minimizado, auditoria, compatibilidade e depreciação conforme este documento.

Motivo: Impedir evento como comando disfarçado, banco compartilhado, payload bruto indevido, bypass de autorização, vazamento multi-tenant e perda de rastreabilidade.

Impacto: Atualiza `00_BIBLIA_DO_PROJETO.md`, `01_MAPA_DE_MODULOS.md`, `02_REGRAS_DE_ARQUITETURA.md`, `03_DECISOES_OFICIAIS.md`, `04_PROMPTS_DE_TRABALHO.md`, `05_CATALOGO_DE_CONTRATOS_PUBLICOS.md`, `06_MATRIZ_TECNICA_PERMISSOES_POR_CONTRATO.md` e `07_MATRIZ_TECNICA_DADOS_SENSIVEIS_POR_CONTRATO.md` com referência ao detalhamento completo e ao arquivo técnico raiz `08_DETALHAMENTO_EVENTENVELOPE_V1.md`.

Status: Aprovada para consolidação.

Data: 2026-06-27.

## 60. Atualização consolidada para 00_BIBLIA_DO_PROJETO.md

Adicionar em seção de comunicação entre módulos:

> Todo evento intermodular do NoduOS deve usar EventEnvelope v1. Evento comunica fato ou solicitação registrada, não executa comando, não cria autorização nova, não transfere domínio e não transporta payload bruto quando referência, máscara ou minimização bastar.

## 61. Atualização consolidada para 01_MAPA_DE_MODULOS.md

Adicionar ao Core Platform, em responsabilidades:

> Governar o padrão transversal EventEnvelope v1 por meio do Event bus, Contract Registry, auditoria base, segurança, LGPD, correlação e compatibilidade, sem assumir domínio operacional dos módulos donos.

Adicionar observação transversal aos módulos:

> Eventos publicados por qualquer módulo devem obedecer EventEnvelope v1, declarar owner_module, source_module, producer_module, contract_id, versão, tenant, contexto, correlation_id, causation_id quando derivado, payload minimizado, sensibilidade, políticas e auditoria conforme o contrato.

## 62. Atualização consolidada para 02_REGRAS_DE_ARQUITETURA.md

Adicionar seção específica:

> EventEnvelope v1 é obrigatório para eventos intermodulares, webhooks autorizados, eventos externos normalizados e eventos técnicos de retry, dead-letter e quarentena. Eventos críticos exigem outbox, inbox/deduplicação, retry controlado, dead-letter/quarentena, reprocessamento seguro e fail-closed. Eventos sensíveis exigem finalidade, minimização, política LGPD, retenção, máscara, ResourceReference/EvidenceReference/SecretReference quando aplicável e auditoria.

## 63. Atualização consolidada para 03_DECISOES_OFICIAIS.md

Inserir a DEC-192 consolidada da seção 59 no `03_DECISOES_OFICIAIS.md`. Após a aplicação, a última DEC consolidada passa a ser DEC-192 e a próxima DEC livre passa a ser DEC-193.

## 64. Atualização consolidada para 04_PROMPTS_DE_TRABALHO.md

Adicionar prompt de uso futuro:

> Ao definir eventos de módulo, usar obrigatoriamente o EventEnvelope v1 detalhado, incluindo campos obrigatórios, campos proibidos, payload mínimo, classificação de sensibilidade, ResourceReference, EvidenceReference, SecretReference, AuthorizationDecision quando aplicável, outbox, inbox/dedup, retry, dead-letter, quarentena, versionamento e auditoria.

## 65. Atualização consolidada para 05_CATALOGO_DE_CONTRATOS_PUBLICOS.md

Atualizar a seção `9.1 EventEnvelope v1` com o detalhamento deste documento e adicionar referência para o documento técnico raiz `08_DETALHAMENTO_EVENTENVELOPE_V1.md`.

## 66. Atualização consolidada para 06_MATRIZ_TECNICA_PERMISSOES_POR_CONTRATO.md

Adicionar coluna ou observação transversal:

> Eventos críticos: exigem outbox, inbox/dedup, retry controlado, dead-letter/quarentena, reprocessamento seguro e auditoria. Eventos sensíveis: exigem finalidade, política de Segurança/LGPD, máscara, retenção e fail-closed.

## 67. Atualização consolidada para 07_MATRIZ_TECNICA_DADOS_SENSIVEIS_POR_CONTRATO.md

Adicionar seção de eventos:

> Payload de evento sensível deve ser minimizado. Dados pessoais, financeiros, imagem, vídeo, biometria, visitante, suporte remoto, integração externa, webhook externo, evidência, segredo e exportação devem usar referência, máscara, agregação ou política específica. Evento com dado proibido deve ser quarentenado ou rejeitado.

## 67.1 README consolidado para o pacote final desta etapa

```text
# PACOTE FINAL - RAIZ NODUOS ATUALIZADA COM DETALHAMENTO DE EVENTENVELOPE V1

Status: Base oficial atualizada com EventEnvelope v1, DEC-192 e documento técnico raiz 08_DETALHAMENTO_EVENTENVELOPE_V1.md.
Data: 2026-06-27

Inclui:

- CANVA_FINAL_DETALHAMENTO_EVENTENVELOPE_V1_NODUOS_FINAL.txt
- 08_DETALHAMENTO_EVENTENVELOPE_V1.md
- DEC-192 aplicada ao 03_DECISOES_OFICIAIS.md
- Atualizações cruzadas para 00, 01, 02, 04, 05, 06 e 07

Última DEC consolidada após aplicação: DEC-192.
Próxima DEC livre após aplicação: DEC-193.

Atualizações principais:

- EventEnvelope v1 consolidado como padrão transversal oficial para eventos intermodulares.
- Obrigatoriedade de event_id, contract_id, versão, owner_module, source_module, producer_module, tenant_id, context_id, actor_reference, correlation_id, payload minimizado, sensibilidade, políticas e auditoria conforme escopo.
- Separação formal entre comando, evento de fato ocorrido, evento de solicitação registrada, read model e webhook.
- Regras consolidadas de outbox, inbox/deduplicação, retry controlado, dead-letter, quarentena e reprocessamento seguro.
- Reforço de ResourceReference, EvidenceReference, SecretReference e AuthorizationDecision como referências, nunca como payload bruto ou autorização nova.
- Reforço de fail-closed para evento crítico, sensível, externo ou fora de tenant/contexto autorizado.
- Próxima etapa recomendada: detalhamento conceitual de EvidenceReference v1.

Frase guia:
Evento comunica fato. Envelope protege contexto. Payload minimiza dado. Correlação preserva fluxo. Auditoria preserva prova.
```

## 68. Checklist final de consistência

| Verificação | Resultado |
|---|---|
| Não criou módulo novo | OK |
| Não criou banco | OK |
| Não criou migration | OK |
| Não criou endpoint final | OK |
| Não escolheu tecnologia de fila/broker | OK |
| Não criou tela | OK |
| Preservou Core como autoridade de autorização | OK |
| Preservou módulo dono como executor | OK |
| Preservou Auditoria como registro | OK |
| Preservou Segurança e LGPD para dados sensíveis | OK |
| Impediu evento como comando | OK |
| Impediu evento como banco compartilhado | OK |
| Impediu segredo bruto | OK |
| Impediu biometria bruta | OK |
| Impediu vídeo/imagem bruta sem política | OK |
| Exigiu correlation_id | OK |
| Exigiu causation_id em derivados | OK |
| Exigiu outbox/inbox em críticos | OK |
| Exigiu dead-letter/quarentena | OK |
| Exigiu reprocessamento seguro | OK |
| Consolidou DEC-192 como decisão aprovada para entrada na raiz | OK |

## 69. Próxima etapa recomendada

Parecer técnico:

**O EventEnvelope v1 está refinado, aprovado no modelo final e consolidado para atualização da raiz.**

Aplicações para atualização da raiz:

- aplicar o arquivo raiz `08_DETALHAMENTO_EVENTENVELOPE_V1.md`;
- inserir a DEC-192 no `03_DECISOES_OFICIAIS.md`;
- atualizar os documentos centrais com os blocos consolidados deste canva;
- depois avançar para um destes detalhamentos técnicos conceituais:
  - EvidenceReference v1 como próxima etapa principal;
  - SecretReference v1;
  - AuthorizationDecision v1;
  - mapa de eventos por fluxo real;
  - catálogo de payload mínimo por evento crítico;
  - modelagem técnica inicial apenas depois das referências transversais.

Resumo final:

EventEnvelope v1 fica definido como o sabre de contenção dos eventos do NoduOS: cada evento atravessa a plataforma com identidade, contrato, contexto, finalidade, rastreabilidade e carga mínima, sem virar comando, sem virar banco compartilhado e sem carregar segredos da Estrela da Morte no bolso. ✨


---

## Consolidação final para a raiz

Arquivo raiz oficial: `08_DETALHAMENTO_EVENTENVELOPE_V1.md`.

DEC aplicada: `DEC-192`.

Última DEC consolidada após aplicação: `DEC-192`.

Próxima DEC livre: `DEC-193`.

Próxima etapa recomendada: `Detalhamento de EvidenceReference`.

Status final: aprovado e consolidado nos documentos centrais.


---

# Atualização - Detalhamento de EvidenceReference v1

Data da atualização: 2026-06-27.

Decisão aplicada: DEC-193.

Arquivo técnico raiz consolidado: `09_DETALHAMENTO_EVIDENCEREFERENCE_V1.md`.

Última DEC consolidada: DEC-197.

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


## Atualização nas regras de EvidenceReference em eventos

Eventos de evidência podem carregar `evidence_reference`, `evidence_reference_id` ou referência equivalente definida em contrato, mas não devem carregar prova bruta quando EvidenceReference bastar.

A existência de EvidenceReference em evento não autoriza visualização da prova. Visualização, exportação, compartilhamento, reprocessamento, liberação de quarentena, descarte ou acesso ao bruto exigem autorização própria, finalidade, política, `audit_reference` e escopo.

Evento com `evidence_reference` ausente quando obrigatório, storage bruto exposto, URL pública permanente, segredo, payload fora de tenant/contexto ou prova bruta indevida deve ser rejeitado, mascarado ou quarentenado conforme fail-closed.


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


## Atualização consolidada do EventEnvelope v1 - Uso de SecretReference em eventos

Evento relacionado a segredo deve transportar apenas:

- `secret_reference`;
- status;
- `reason_code` minimizado;
- políticas aplicáveis;
- `correlation_id`;
- `causation_id`, quando derivado;
- `authorization_decision_reference`, quando aplicável;
- `audit_reference`.

Eventos não podem transportar segredo bruto, token, chave, certificado privado, client secret, segredo de webhook, credencial de gateway, credencial de dispositivo, credencial de conector, URL assinada ou payload de provedor contendo segredo.

Evento que contiver segredo bruto deve ser rejeitado ou quarentenado, com abertura de incidente quando aplicável.

## Relação complementar com AuthorizationDecision v1 e ResourceReference v1

Eventos derivados de ação sensível ou crítica devem carregar `authorization_decision_reference` emitida pelo Core Platform.

Essa referência preserva rastreabilidade da decisão original, mas não autoriza nova ação.

Consumidor que precisar agir deve solicitar nova AuthorizationDecision no próprio escopo, recurso, ação, tenant, contexto, política e finalidade.

Evento com decisão expirada, ausente ou fora de escopo deve ser rejeitado, mascarado, quarentenado ou degradado conforme fail_policy.

Eventos que apontem recursos devem usar ResourceReference v1 no campo `resource_reference` ou `related_resource_references`.

O EventEnvelope v1 não deve transportar recurso completo. ResourceReference deve preservar owner_module, resource_type, resource_public_id, tenant, contexto, sensitivity_level, lifecycle_state, políticas aplicáveis, display_label minimizado e `no_domain_transfer = true`.


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

## Relação complementar com o Blueprint técnico da aplicação

Data: 2026-06-27.
Decisão aplicada: DEC-197.
Arquivo técnico raiz: `13_BLUEPRINT_TECNICO_APLICACAO_NODUOS.md`.

O Blueprint técnico da aplicação define como este padrão transversal deve ser aplicado na programação.

Nenhum código deve implementar este padrão como atalho para domínio alheio, banco compartilhado, autorização paralela, payload bruto, evento-comando, read model como fonte primária ou frontend como decisor de autorização.

A aplicação deve ser contract-first, modular-first e authorization-first, sempre validando tenant/contexto, escopo, política, auditoria, idempotência quando aplicável e fail-closed em ações críticas.
