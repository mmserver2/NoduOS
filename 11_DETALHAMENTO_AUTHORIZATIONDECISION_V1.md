# CANVA FINAL - DETALHAMENTO DE AUTHORIZATIONDECISION V1 NODUOS

Projeto: NoduOS
Descrição oficial: SaaS Modular de Gestão de Espaços e Segurança Unificada
Conceito técnico: Sistema Operacional Modular para Espaços Físicos Conectados
Conceito de marca: Conexão que impulsiona
Tipo de documento: Padrão conceitual oficial para decisões de autorização do Core Platform
Versão do documento: 1.0.2
Versão base do padrão: v1
Data desta consolidação: 2026-06-27
Status: Aprovado e atualizado com Blueprint Técnico da Aplicação, DEC-198 e referência Git canônica pré-runtime
Última DEC consolidada declarada na etapa: DEC-194
DEC consolidada nesta etapa: DEC-195
Próxima DEC livre: DEC-199
Arquivo técnico raiz oficial: `11_DETALHAMENTO_AUTHORIZATIONDECISION_V1.md`

Frase guia:

Autorização decide o agora. Escopo limita o alcance. Política explica o motivo. Expiração evita herança infinita. Auditoria registra a decisão.

Regra central:

Política influencia. Core decide. Módulo dono executa. Auditoria registra.

---

## 0. Auditoria comparativa aplicada nesta versão final

Esta versão foi refinada a partir do parecer preliminar e corrigida para preencher as lacunas técnicas identificadas. O objetivo foi impedir que AuthorizationDecision vire permissão eterna, política executável, evento autorizador, read model autorizador, referência autorizadora ou motor paralelo fora do Core Platform.

### 0.1 Conferência por fonte oficial

| Fonte | Regra confirmada | Aplicação nesta versão |
|---|---|---|
| 00_BIBLIA_DO_PROJETO.md | NoduOS é arquitetura final modular, multi-tenant, sem MVP, com Core obrigatório e módulos independentes. | O AuthorizationDecision v1 é tratado como padrão do Core, não como módulo novo ou implementação. |
| 01_MAPA_DE_MODULOS.md | Core Platform mantém AuthorizationDecision estrutural final, PermissionGrant, InheritanceGrant, ResourceReference, contexto, licenças, feature flags e auditoria base. | A posse de AuthorizationDecision permanece no Core Platform. Nenhum módulo comercial emite decisão final. |
| 02_REGRAS_DE_ARQUITETURA.md | Comunicação entre módulos ocorre por APIs públicas internas, eventos, contratos, webhooks, barramento e read models autorizados. | AuthorizationDecision não permite acesso a banco interno, classe interna, endpoint final ou domínio alheio. |
| 03_DECISOES_OFICIAIS.md | Decisão estrutural exige registro formal e sequência DEC. | A etapa consolida DEC-195, assumindo DEC-193 EvidenceReference e DEC-194 SecretReference já aplicadas conforme estado declarado do prompt. |
| 04_PROMPTS_DE_TRABALHO.md | Antes do documento final, deve haver parecer preliminar; depois da aprovação, CANVA FINAL único. | Este documento é o CANVA FINAL pós-parecer, em Markdown limpo e copiável. |
| 05_CATALOGO_DE_CONTRATOS_PUBLICOS.md | AuthorizationDecision é emitida pelo Core Platform e deve declarar decisão, emissor, tenant, contexto, ator, recurso, ação, escopo, políticas, licença, feature flag, reason_code, expiração, correlação e auditoria. | Campos conceituais obrigatórios foram detalhados sem virar schema definitivo. |
| 06_MATRIZ_TECNICA_PERMISSOES_POR_CONTRATO.md | Contratos sensíveis ou críticos exigem AuthorizationDecision; eventos herdam decisão da ação de origem, mas não criam autorização nova. | Foi criada matriz de obrigatoriedade e regra de reuso limitado. |
| 07_MATRIZ_TECNICA_DADOS_SENSIVEIS_POR_CONTRATO.md | Dados sensíveis exigem finalidade, política, minimização, máscara, retenção, auditoria e fail-closed. | AuthorizationDecision exige finalidade/política em decisões sensíveis ou críticas. |
| 08_DETALHAMENTO_EVENTENVELOPE_V1.md | EventEnvelope v1 carrega authorization_decision_reference quando aplicável, mas evento nunca autoriza nova ação. | Foi reforçada a regra: evento comunica fato, não decide autorização. |
| 09_DETALHAMENTO_EVIDENCEREFERENCE_V1.md | EvidenceReference deve preservar prova por referência, cadeia de custódia, retenção, máscara, auditoria e controle de exportação. | EvidenceReference nunca autoriza visualização, exportação, cópia ou uso de prova sem decisão válida. |
| 10_DETALHAMENTO_SECRETREFERENCE_V1.md | SecretReference representa segredo por referência segura, com escopo, rotação, revogação, expiração e auditoria. | SecretReference nunca autoriza leitura, uso, rotação, exportação ou operação com segredo sem decisão válida. |

Observação de governança: esta consolidação considera `09_DETALHAMENTO_EVIDENCEREFERENCE_V1.md` e `10_DETALHAMENTO_SECRETREFERENCE_V1.md` já presentes na raiz anterior. A DEC-195 entra em sequência correta após a DEC-194 e antes da DEC-196.

### 0.2 Correções aplicadas sobre o parecer preliminar

- Removida a ambiguidade entre AuthorizationDecision como contrato transversal e como entidade conceitual do Core.
- Padronizado o contract_id oficial como `NODUOS.CORE.AUTHORIZATION_DECISION.v1`.
- Mantida a referência transversal `AuthorizationDecisionContract v1` apenas como padrão composto/reutilizável.
- Declarado que AuthorizationDecision não é PermissionGrant, não é InheritanceGrant e não substitui licença, feature flag, módulo ativo ou política.
- Declarado que decisão expirada falha fechado.
- Declarado que cache é exceção controlada, não regra geral.
- Declarado que evento, read model, EvidenceReference, SecretReference e ResourceReference não autorizam ação por si só.
- Declarado que decisão crítica exige audit_reference.
- Declarado que ação crítica sem decisão válida deve falhar fechado.
- Declarado que decisão do Core não executa domínio. A execução continua no módulo dono.

---

## 1. Objetivo do AuthorizationDecision v1

AuthorizationDecision v1 é o padrão conceitual oficial do Core Platform para registrar e transportar a decisão estrutural de autorização de uma ação no NoduOS.

Ele responde, em um ponto específico do tempo:

- Quem quer agir?
- Em qual tenant?
- Em qual contexto?
- Sobre qual recurso?
- Qual ação foi solicitada?
- Qual módulo é o dono do domínio?
- Qual escopo limita a ação?
- Quais permissões, heranças, políticas, licenças e feature flags foram consideradas?
- A ação é permitida, negada, condicionada ou expirada?
- Por qual motivo minimizado?
- Até quando a decisão pode ser usada?
- Qual trilha de auditoria registra a decisão?

Regra curta:

AuthorizationDecision não concede poder eterno. Ela registra uma decisão contextual para uma ação delimitada.

---

## 2. Natureza oficial

AuthorizationDecision v1 é:

- padrão conceitual oficial do Core Platform;
- contrato de autorização estrutural;
- decisão temporal, contextual e escopada;
- resultado de avaliação de identidade, contexto, permissão, herança, política, licença, feature flag, recurso, sensibilidade e finalidade;
- referência auditável para módulos donos executarem, negarem ou degradarem uma ação;
- peça de rastreabilidade para EventEnvelope, auditoria, suporte, segurança e compliance.

AuthorizationDecision v1 não é:

- módulo comercial;
- endpoint final;
- banco de dados;
- schema técnico definitivo;
- tela;
- código;
- migration;
- fila;
- framework;
- permission grant permanente;
- herança contextual permanente;
- política operacional;
- autorização offline universal;
- prova de execução;
- evento;
- read model;
- segredo;
- evidência;
- ResourceReference;
- substituto do módulo dono.

---

## 3. Escopo desta versão

Esta versão cobre:

- decisões de autorização estruturais;
- decisões contextuais por tenant e contexto;
- decisões temporais com expiração;
- decisões sensíveis e críticas;
- decisões para leitura, gestão, solicitação, execução, exportação, visualização, publicação e consumo de contratos;
- relação com PermissionGrant, InheritanceGrant, ResourceReference, EventEnvelope, EvidenceReference, SecretReference, dados sensíveis, licenças, feature flags, políticas e auditoria;
- cache permitido e proibido;
- reuso permitido e proibido;
- fail-closed;
- auditoria da emissão, uso, negação, expiração, reuso indevido e divergência de escopo.

Fora do escopo:

- implementação técnica;
- escolha de linguagem;
- banco de dados;
- migrations;
- endpoints finais;
- DTO final;
- tela;
- fila;
- broker;
- algoritmo criptográfico;
- engine concreta de política;
- criação de módulo novo;
- alteração de fronteira de módulos.

---

## 4. Princípios oficiais

### 4.1 Core decide

A decisão final de autorização estrutural pertence ao Core Platform.

Nenhum módulo comercial pode emitir AuthorizationDecision final.

### 4.2 Política influencia

Políticas de Herança e Permissões, Segurança e LGPD, Master, Organização, módulo dono, contrato ou automação podem influenciar a decisão.

Política não executa ação e não autoriza sozinha.

### 4.3 Módulo dono executa

O módulo dono do recurso é o único responsável por executar a ação operacional, respeitando a AuthorizationDecision válida e o próprio estado do domínio.

### 4.4 Auditoria registra

A decisão, a tentativa de uso e o resultado operacional devem ser auditáveis.

Auditoria registra. Auditoria não decide nem executa.

### 4.5 Fail-closed em ação crítica

Ação crítica sem AuthorizationDecision válida deve negar, pausar, quarentenar ou degradar de forma segura.

Nunca deve executar por ausência de confirmação.

---

## 5. Responsabilidades por domínio

| Domínio | Responsabilidade | Limite obrigatório |
|---|---|---|
| Core Platform | Emitir AuthorizationDecision final. | Não executa regra operacional do módulo dono. |
| Herança e Permissões | Avaliar políticas avançadas, simulações, delegações e conflitos. | Não emite decisão final e não executa ação. |
| Segurança e LGPD | Definir política de proteção, finalidade, retenção, máscara, consentimento e tratamento. | Não executa domínio operacional. |
| Auditoria e Compliance | Registrar, consultar e analisar trilhas autorizadas. | Não autoriza e não executa. |
| Módulo dono | Executar, negar ou degradar ação dentro do próprio domínio. | Não emite AuthorizationDecision final. |
| Relatórios / BI | Consultar agregados e read models autorizados. | Não usa read model como autorização. |
| Automações | Solicitar ações por contrato, gatilho e condição. | Não executa domínio alheio sem Core e módulo dono. |
| Marketplace / Integrações | Solicitar uso de conectores autorizados. | Não usa credencial, segredo ou conector sem decisão válida. |

---

## 6. Quando AuthorizationDecision v1 é obrigatório

AuthorizationDecision v1 é obrigatório quando a ação for sensível, crítica, contextualmente restrita ou capaz de alterar estado relevante.

### 6.1 Obrigatório por tipo de ação

| Ação | Exigência |
|---|---|
| Acesso físico | Sempre obrigatório. |
| Abertura, bloqueio ou revogação de acesso | Sempre obrigatório e fail-closed. |
| Visualização de câmera ao vivo | Obrigatório. |
| Playback, snapshot, clip ou exportação de vídeo | Obrigatório. |
| Uso, criação, rotação ou revogação de SecretReference | Obrigatório. |
| Visualização, exportação ou cadeia de custódia de EvidenceReference | Obrigatório. |
| Alteração de PermissionGrant | Obrigatório. |
| Alteração de InheritanceGrant | Obrigatório. |
| Alteração de papel, contexto, vínculo ou escopo | Obrigatório. |
| Alteração de licença, entitlement ou feature flag | Obrigatório. |
| Alteração de política de segurança, privacidade, retenção ou máscara | Obrigatório. |
| Exportação sensível | Obrigatório, auditável e com finalidade. |
| Consulta de auditoria sensível | Obrigatório. |
| BI identificável ou sensível | Obrigatório. |
| Suporte remoto ou sessão privilegiada | Obrigatório e temporário. |
| Conector externo, webhook externo ou integração crítica | Obrigatório. |
| Operação financeira sensível | Obrigatório. |
| Visitante, convite, QR temporário ou credencial temporária | Obrigatório quando sensível ou operacional. |
| Automação crítica | Obrigatório antes da ação. |

### 6.2 Obrigatório por tipo de contrato

- contrato sensível;
- contrato crítico;
- comando crítico;
- webhook externo sensível;
- read model restrito, sensível ou crítico;
- evento derivado de ação sensível ou crítica, por referência da decisão original;
- contrato que envolva SecretReference, EvidenceReference, ResourceReference sensível, exportação, auditoria, política ou dado pessoal.

---

## 7. Quando AuthorizationDecision pode não ser obrigatório

A decisão pode ser dispensada apenas quando todos os critérios abaixo forem verdadeiros:

- ação não sensível;
- ação não crítica;
- leitura pública ou interna controlada;
- nenhum dado pessoal ou identificável;
- nenhum segredo;
- nenhuma evidência;
- nenhuma ação física;
- nenhuma alteração de permissão, herança, licença, feature flag ou política;
- nenhum dado fora de contexto;
- nenhum recurso de outro módulo sem contrato;
- contrato permitir explicitamente degradação segura sem decisão isolada.

Mesmo nesses casos, tenant, contexto, contrato, escopo, rate limit, logs e auditoria básica podem continuar obrigatórios conforme contrato.

---

## 8. Estados oficiais da decisão

| Estado | Significado | Uso permitido |
|---|---|---|
| Allowed | Ação autorizada no escopo e janela definidos. | Pode ser usada pelo módulo dono somente para a ação, recurso e contexto definidos. |
| Denied | Ação negada. | Não pode ser convertida em autorização por módulo consumidor. |
| Conditional | Ação depende de condição explícita. | Só pode ser usada se a condição estiver cumprida e auditada. |
| Expired | Janela de validade encerrada. | Deve falhar fechado. |
| Revoked | Decisão invalidada por alteração de contexto, política, risco ou administração autorizada. | Deve falhar fechado. |
| Superseded | Decisão substituída por nova decisão. | Não pode ser usada para ação nova. |
| Quarantined | Decisão ou uso bloqueado por inconsistência, risco ou payload proibido. | Exige análise e nova decisão. |

---

## 9. Campos conceituais obrigatórios

Os campos abaixo são conceituais e não representam schema técnico definitivo.

| Campo | Regra oficial |
|---|---|
| authorization_decision_id | Identificador público único da decisão. Não deve ser reutilizado. |
| contract_id | Contrato público associado. Preferencial: `NODUOS.CORE.AUTHORIZATION_DECISION.v1`. |
| contract_version | Versão do contrato de autorização. Nesta etapa: v1. |
| decision | Resultado: allowed, denied, conditional, expired, revoked, superseded ou quarantined. |
| issued_by | Sempre Core Platform ou serviço interno autorizado do Core. |
| issued_at | Momento da emissão. |
| expires_at | Obrigatório para ações sensíveis e críticas; recomendado para decisões restritas. |
| tenant_id | Obrigatório em ações multi-tenant, operacionais, sensíveis ou críticas. |
| context_id | Obrigatório quando houver organização, parceiro, unidade, área, recurso, pessoa, gateway, dispositivo, módulo ou operação contextual. |
| actor_reference | Referência minimizada ao ator humano, serviço, integração, automação ou suporte. |
| subject_reference | Quando o sujeito afetado for diferente do ator. |
| resource_reference | Referência ao recurso alvo, com owner_module e no_domain_transfer. |
| action | Ação exata solicitada. Exemplo: read, manage, request, export, publish, consume, execute. |
| module_scope | Módulo ou domínio em que a decisão vale. |
| decision_scope | Escopo hierárquico, contextual, temporal, modular e operacional da decisão. |
| permission_reference | PermissionGrant ou permissão estrutural considerada, quando aplicável. |
| inheritance_reference | InheritanceGrant ou herança contextual considerada, quando aplicável. |
| role_reference | Papel ou vínculo contextual considerado. |
| policy_references | Políticas que influenciaram a decisão. |
| security_policy_reference | Obrigatório quando houver proteção de segurança. |
| lgpd_policy_reference | Obrigatório quando envolver dado pessoal, imagem, vídeo, biometria, visitante, suporte, financeiro ou exportação. |
| retention_policy_reference | Obrigatório quando houver dado sensível, auditoria, evidência, exportação ou segredo. |
| masking_policy_reference | Obrigatório quando houver dado exibível sensível. |
| purpose | Finalidade da decisão quando envolver dado sensível ou crítico. |
| legal_basis_or_policy_reference | Base legal ou política equivalente quando aplicável. |
| license_reference | Licença considerada quando a ação depender de plano, pacote ou entitlement. |
| feature_flag_reference | Feature flag considerada quando a ação depender de habilitação dinâmica. |
| module_activation_reference | Referência de módulo ativo quando aplicável. |
| sensitivity_level | Público, Interno, Restrito, Sensível ou Crítico. |
| reason_code | Motivo minimizado e padronizado, sem vazar regra sensível indevida. |
| denial_reason_code | Obrigatório quando decision for denied, minimizado. |
| conditional_requirements | Obrigatório quando decision for conditional. |
| correlation_id | Obrigatório para rastrear fluxo distribuído. |
| causation_id | Obrigatório quando derivar de comando, evento, solicitação, automação ou decisão anterior. |
| request_reference | Referência ao pedido original, quando aplicável. |
| command_reference | Referência ao comando original, quando aplicável. |
| event_reference | Referência ao evento original quando a decisão foi provocada por evento. |
| audit_reference | Obrigatório para decisões críticas e recomendado para decisões sensíveis. |
| evidence_reference | Quando a decisão envolver prova. Não autoriza uso por si só. |
| secret_reference | Quando a decisão envolver segredo. Não expõe segredo bruto. |
| cache_policy | Define se a decisão pode ou não ser cacheada. |
| reuse_policy | Define se a decisão pode ser reaproveitada dentro do mesmo escopo. |
| fail_policy | Define comportamento em falha, com fail-closed para crítico. |
| compatibility_policy | Política de compatibilidade do contrato. |
| deprecation_policy | Política de depreciação quando aplicável. |

---

## 10. Campos e conteúdos proibidos

| Proibido | Motivo | Correção oficial |
|---|---|---|
| senha | Segredo bruto | SecretReference ou não trafegar. |
| token bruto | Risco de reuso | SecretReference. |
| chave privada | Segredo crítico | SecretReference. |
| certificado bruto | Segredo crítico | CertificateReference ou SecretReference. |
| segredo de webhook | Fraude e vazamento | SecretReference. |
| segredo de conector | Acesso indevido | SecretReference. |
| biometria bruta | Dado pessoal crítico | Referência e política LGPD. |
| template facial bruto | Biometria crítica | Referência e consentimento/política. |
| vídeo bruto | Exposição sensível | EvidenceReference ou StreamReference autorizado. |
| imagem identificável sem política | Dado pessoal | EvidenceReference, máscara ou política. |
| documento completo sem finalidade | Exposição indevida | DocumentReference ou FileAttachmentReference. |
| payload completo de banco | Acoplamento | Payload mínimo e referências. |
| objeto interno de módulo | Acoplamento | Contrato público versionado. |
| stack trace sensível | Exposição técnica | ErrorReference mascarado. |
| dados de outro tenant | Vazamento multi-tenant | Rejeição ou quarentena. |
| contexto ausente em ação contextual | Bypass de escopo | Negar ou falhar fechado. |
| decisão sem ator | Sem rastreabilidade | Negar. |
| decisão sem recurso quando aplicável | Escopo indefinido | Negar. |
| decisão crítica sem audit_reference | Sem prova | Negar. |
| expiração infinita para sensível/crítico | Permissão eterna disfarçada | expires_at obrigatório. |
| reason_code com dado sensível bruto | Vazamento | reason_code minimizado. |

---

## 11. Relação com PermissionGrant

PermissionGrant representa uma concessão estrutural de permissão dentro do Core Platform.

AuthorizationDecision usa PermissionGrant como uma das entradas possíveis de avaliação, mas não é PermissionGrant.

Regras:

- PermissionGrant pode existir por período maior.
- AuthorizationDecision é pontual, contextual e escopada.
- PermissionGrant não autoriza ação crítica sozinho.
- AuthorizationDecision não cria PermissionGrant.
- AuthorizationDecision não altera PermissionGrant.
- Alterar PermissionGrant exige nova AuthorizationDecision própria.
- Revogar PermissionGrant invalida decisões futuras e pode revogar decisões ainda não usadas conforme política.

Exemplo correto:

Operador possui PermissionGrant para solicitar abertura de acesso em determinada organização. Ao solicitar abertura de portão específico, o Core avalia PermissionGrant, contexto, recurso, política, licença, horário e risco. Só então emite AuthorizationDecision para aquela ação.

---

## 12. Relação com InheritanceGrant

InheritanceGrant representa herança contextual de módulos, recursos e permissões.

AuthorizationDecision usa InheritanceGrant como entrada de avaliação, mas não é herança.

Regras:

- InheritanceGrant define alcance herdado.
- AuthorizationDecision decide uso atual dentro desse alcance.
- Cliente usa apenas o que herdou, mas herança sozinha não executa ação.
- Mudança na árvore de herança exige nova decisão para ações futuras.
- Decisão emitida antes de alteração de herança não deve ser usada fora da janela e escopo originais.

Exemplo correto:

Cliente herdou câmera da área comum por vínculo com unidade. Para visualizar a câmera, ainda precisa de AuthorizationDecision válida considerando contexto, finalidade, horário, política de câmera, sensibilidade e auditoria.

---

## 13. Relação com ResourceReference

ResourceReference aponta para recurso sem transferir domínio.

AuthorizationDecision usa ResourceReference para saber qual recurso está sendo solicitado.

Regras:

- ResourceReference não autoriza ação.
- ResourceReference não transfere domínio para o Core.
- ResourceReference não vira banco compartilhado.
- ResourceReference deve conter owner_module, resource_type, resource_public_id, tenant_id, context_id, sensitivity_level, lifecycle_state, authorization_scope e no_domain_transfer.
- Se o recurso mudar de estado, escopo, owner, sensibilidade ou ciclo de vida, decisão anterior não deve ser reaproveitada para ação nova.

Exemplo correto:

Core decide se o ator pode solicitar abertura de um AccessPoint referenciado. O módulo Controle de Acesso continua dono do AccessPoint e executa ou nega conforme seu estado operacional.

---

## 14. Relação com EventEnvelope v1

EventEnvelope v1 pode transportar `authorization_decision_reference` quando o evento derivar de ação sensível ou crítica.

Regras:

- Evento não emite AuthorizationDecision.
- Evento não renova decisão.
- Evento não amplia escopo.
- Evento não autoriza ação nova.
- Evento carrega referência da decisão original apenas para rastreabilidade.
- Consumidor que precisar executar nova ação deve solicitar nova AuthorizationDecision ao Core.
- Evento com referência de decisão expirada não vira autorização nova.
- Evento sensível sem referência de decisão aplicável deve ser rejeitado, mascarado, quarentenado ou degradado conforme política.

Regra curta:

Evento comunica fato. AuthorizationDecision decide ação.

---

## 15. Relação com EvidenceReference v1

EvidenceReference preserva prova por referência e cadeia de custódia.

AuthorizationDecision decide se um ator pode visualizar, consultar, anexar, exportar, compartilhar ou usar uma evidência em determinado contexto.

Regras:

- EvidenceReference não autoriza visualização.
- EvidenceReference não autoriza exportação.
- EvidenceReference não autoriza cópia de prova.
- EvidenceReference não autoriza uso em BI ou relatório identificável.
- Cadeia de custódia deve permanecer íntegra.
- Exportação de evidência exige finalidade, política, escopo, audit_reference, retenção e, quando aplicável, aprovação.
- Evidência crítica exige fail-closed.

Exemplo correto:

Um evento de câmera pode referenciar uma evidência. Para abrir o clip, exportar snapshot ou anexar ao ticket, o ator precisa de nova AuthorizationDecision compatível com a finalidade e escopo.

---

## 16. Relação com SecretReference v1

SecretReference representa segredo por referência segura.

AuthorizationDecision decide se um ator, serviço ou módulo pode usar, rotacionar, revogar, consultar metadados ou vincular um segredo dentro de um escopo autorizado.

Regras:

- SecretReference não expõe segredo bruto.
- SecretReference não autoriza uso por si só.
- Uso de segredo exige escopo, finalidade, política, rotação, revogação, expiração e auditoria.
- Segredo nunca entra em evento, log, URL, payload bruto, read model ou exportação.
- Decisão para uso de segredo deve ter janela curta.
- Falha de política de segredo bloqueia operação sensível.

Exemplo correto:

Webhook externo usa segredo de assinatura por SecretReference. Antes de assinar, rotacionar ou revogar, o Core emite decisão válida para o escopo do webhook e o módulo dono executa.

---

## 17. Relação com dados sensíveis

AuthorizationDecision é obrigatória para:

- visualização sensível;
- exportação sensível;
- alteração crítica;
- ação física;
- vídeo;
- evidência;
- biometria;
- documento;
- financeiro;
- visitante;
- suporte remoto;
- conector;
- webhook externo;
- segredo;
- política de segurança;
- auditoria sensível;
- BI identificável.

Regras:

- Dado sensível exige finalidade.
- Finalidade genérica não autoriza exportação, evidência, suporte remoto, BI identificável ou webhook externo.
- Ausência de tenant, contexto, ator, recurso, política, finalidade, retenção, máscara ou decisão válida deve negar, pausar, quarentenar ou degradar com segurança.
- Dados devem ser minimizados, mascarados ou referenciados quando possível.

---

## 18. Relação com módulos, licenças, feature flags e contexto

AuthorizationDecision deve considerar:

- tenant ativo;
- contexto ativo;
- vínculo do ator;
- papel do ator;
- PermissionGrant;
- InheritanceGrant;
- módulo ativo;
- licença vigente;
- entitlement;
- feature flag;
- política de segurança;
- política LGPD;
- estado do recurso;
- sensibilidade;
- finalidade;
- janela temporal;
- limite de uso;
- risco operacional.

Regras:

- Módulo ativo não autoriza ação sozinho.
- Licença vigente não autoriza ação sozinha.
- Feature flag habilitada não autoriza ação sozinha.
- Contexto ativo não autoriza ação sozinho.
- Todas essas entradas influenciam a decisão do Core.

---

## 19. Escopo oficial da decisão

A decisão deve declarar o escopo exato em que vale.

Dimensões mínimas de escopo:

- tenant_scope;
- context_scope;
- actor_scope;
- role_scope;
- module_scope;
- resource_scope;
- action_scope;
- policy_scope;
- data_scope;
- time_scope;
- location_or_structure_scope quando aplicável;
- integration_scope quando aplicável;
- support_scope quando aplicável;
- export_scope quando aplicável;
- evidence_scope quando aplicável;
- secret_scope quando aplicável.

Regra de escopo:

A decisão só vale quando todas as dimensões relevantes permanecem iguais.

Se qualquer dimensão sensível mudar, deve haver nova decisão.

---

## 20. Expiração

Expiration evita que decisão vire herança infinita.

### 20.1 Expiração obrigatória

`expires_at` é obrigatório para:

- ações físicas;
- vídeo;
- evidência;
- segredo;
- exportação;
- suporte remoto;
- automação crítica;
- conector externo;
- webhook externo;
- alteração de política;
- alteração de permissão;
- alteração de herança;
- alteração de licença ou feature flag;
- consulta sensível;
- BI identificável.

### 20.2 Expiração por criticidade

| Criticidade | Regra conceitual |
|---|---|
| Público | Pode não exigir expiração isolada, conforme contrato. |
| Interno | Pode expirar por sessão, contrato ou política. |
| Restrito | Deve ter validade limitada quando houver recurso contextual. |
| Sensível | Deve ter expiração explícita. |
| Crítico | Deve ter expiração curta e fail-closed. |

### 20.3 Decisão expirada

Decisão expirada:

- não autoriza ação;
- não pode ser renovada pelo módulo consumidor;
- não pode ser reativada por evento;
- não pode ser usada para exportação tardia;
- não pode ser usada offline sem política específica;
- deve gerar auditoria se houver tentativa de uso.

---

## 21. reason_code

`reason_code` explica o motivo da decisão de forma minimizada, padronizada e segura.

Objetivos:

- explicar autorização ou negação;
- apoiar suporte;
- permitir auditoria;
- evitar vazamento de regra sensível;
- evitar exposição de dados pessoais;
- evitar engenharia reversa de política crítica.

Exemplos conceituais permitidos:

- `allowed.permission_and_scope_valid`
- `allowed.inherited_resource_valid`
- `denied.missing_permission`
- `denied.out_of_context`
- `denied.resource_not_in_scope`
- `denied.license_inactive`
- `denied.feature_flag_disabled`
- `denied.policy_restriction`
- `denied.expired_decision`
- `denied.sensitive_policy_missing`
- `denied.audit_required`
- `denied.fail_closed_required`
- `conditional.requires_secondary_approval`
- `conditional.requires_fresh_decision`

Proibido em reason_code:

- CPF, documento ou identificador bruto;
- nome completo desnecessário;
- segredo;
- token;
- biometria;
- regra interna sensível completa;
- stack trace;
- payload bruto;
- dado de outro tenant;
- informação que facilite bypass.

---

## 22. Cache permitido e proibido

### 22.1 Regra geral

AuthorizationDecision não deve ser cacheada por padrão para ação sensível ou crítica.

Cache é exceção controlada.

### 22.2 Cache permitido

Pode haver cache apenas quando:

- o contrato permitir;
- a ação não for crítica;
- a decisão tiver expires_at curto;
- tenant_id for idêntico;
- context_id for idêntico;
- actor_reference for idêntico;
- resource_reference for idêntico;
- action for idêntica;
- module_scope for idêntico;
- policy_references forem idênticas;
- PermissionGrant e InheritanceGrant não mudaram;
- licença, entitlement e feature flag não mudaram;
- sensitivity_level não aumentou;
- auditoria permitir;
- cache_policy estiver explícita.

### 22.3 Cache proibido

Cache é proibido para:

- abertura de porta;
- bloqueio ou desbloqueio de acesso;
- revogação de credencial;
- exportação;
- evidência crítica;
- vídeo sensível;
- segredo;
- rotação de segredo;
- suporte remoto;
- alteração de política;
- alteração de permissão;
- alteração de herança;
- conector externo crítico;
- webhook externo sensível;
- ação financeira crítica;
- automação crítica;
- qualquer ação com risco físico;
- qualquer decisão expirada, revogada, superseded ou quarantined.

---

## 23. Quando exige nova decisão

Nova AuthorizationDecision é obrigatória quando houver:

- nova ação;
- novo recurso;
- novo ator;
- novo sujeito afetado;
- novo tenant;
- novo contexto;
- novo módulo;
- novo escopo;
- nova finalidade;
- nova política;
- nova licença;
- nova feature flag;
- nova permissão;
- nova herança;
- mudança no estado do recurso;
- mudança no nível de sensibilidade;
- mudança no destino de exportação;
- mudança em EvidenceReference;
- mudança em SecretReference;
- mudança em ResourceReference;
- expiração da decisão anterior;
- tentativa de uso fora do escopo;
- reprocessamento de evento sensível;
- retry que possa executar ação crítica novamente;
- fluxo offline que retorna online;
- suspeita de fraude, risco, abuso, conflito ou inconsistência.

---

## 24. Quando pode usar decisão existente

Uma decisão existente só pode ser usada quando todos os critérios forem verdadeiros:

- a decisão está allowed ou conditional com condição cumprida;
- não está expirada;
- não foi revogada;
- não foi substituída;
- não foi quarentenada;
- tenant é o mesmo;
- contexto é o mesmo;
- ator é o mesmo;
- recurso é o mesmo;
- ação é a mesma;
- escopo é o mesmo;
- política é a mesma;
- licença, entitlement e feature flag permanecem válidos;
- finalidade é a mesma;
- sensibilidade não aumentou;
- módulo dono é o mesmo;
- cache_policy ou reuse_policy permite;
- auditoria de uso é registrada quando exigida.

Regra curta:

Mesmo ator, mesmo contexto, mesmo recurso, mesma ação, mesma política, mesma janela. Fora disso, nova decisão.

---

## 25. Fail-closed

Fail-closed é obrigatório para ações críticas.

Ação crítica deve negar, pausar ou quarentenar quando faltar:

- tenant;
- contexto;
- ator;
- recurso;
- ação;
- escopo;
- política;
- finalidade quando sensível;
- AuthorizationDecision válida;
- audit_reference quando crítica;
- licença ou feature flag exigida;
- SecretReference válido quando segredo estiver envolvido;
- EvidenceReference válido quando evidência estiver envolvida;
- ResourceReference válido quando recurso estiver envolvido.

Nunca executar ação crítica em modo fail-open.

---

## 26. Auditoria da decisão

### 26.1 Auditoria obrigatória

Deve haver auditoria para:

- decisão emitida;
- decisão negada;
- decisão condicional;
- decisão expirada;
- decisão revogada;
- decisão substituída;
- decisão usada;
- tentativa de uso fora do escopo;
- tentativa de uso expirada;
- tentativa de cache proibido;
- tentativa de reuso indevido;
- ação crítica executada pelo módulo dono;
- divergência entre decisão e execução;
- falha operacional após decisão allowed;
- bloqueio fail-closed;
- quarentena.

### 26.2 Campos mínimos de auditoria conceitual

- audit_reference;
- authorization_decision_id;
- tenant_id;
- context_id;
- actor_reference;
- subject_reference quando aplicável;
- resource_reference;
- action;
- decision;
- reason_code;
- policy_references;
- sensitivity_level;
- issued_at;
- expires_at;
- used_at quando aplicável;
- outcome_reference quando houver execução;
- correlation_id;
- causation_id quando aplicável;
- requester_module;
- owner_module;
- executing_module quando aplicável;
- fail_policy;
- cache_policy;
- reuse_policy.

---

## 27. Relação com comandos, eventos, read models e webhooks

| Elemento | Relação com AuthorizationDecision | Proibição |
|---|---|---|
| Comando | Comando crítico deve carregar ou solicitar AuthorizationDecision válida antes da execução. | Comando não prova execução. |
| Evento de fato ocorrido | Pode referenciar decisão original. | Evento não autoriza nova ação. |
| Evento de solicitação registrada | Pode indicar que uma decisão será solicitada. | Não prova decisão final. |
| Read model | Pode exibir estado autorizado conforme escopo. | Não substitui AuthorizationDecision. |
| Webhook interno | Deve respeitar contrato, escopo e decisão quando sensível. | Não executa domínio alheio. |
| Webhook externo | Exige assinatura, SecretReference, escopo, política e decisão quando sensível. | Não transporta segredo bruto nem dado fora do contrato. |

---

## 28. Decisão offline, degradada ou local

O NoduOS pode operar com mundo físico conectado por gateway, mas isso não permite autorização infinita.

Regras:

- Offline não cria permissão nova.
- Offline não renova decisão expirada.
- Offline não permite ação crítica sem política offline específica.
- Política offline deve ser pré-autorizada pelo Core e auditável quando sincronizar.
- Gateway transporta e aplica rotas técnicas autorizadas, mas não decide regra operacional final.
- Módulo dono continua responsável pela execução e reconciliação.
- Ao voltar online, decisões e ações offline devem ser reconciliadas por eventos, auditoria e verificação de escopo.
- Divergência crítica deve gerar quarentena, alerta e trilha de auditoria.

---

## 29. Matriz resumida de decisão por criticidade

| Nível | AuthorizationDecision | Expiração | Auditoria | Reuso | Fail-closed |
|---|---|---|---|---|---|
| Público | Condicional ao contrato | Opcional | Básica | Permitido conforme contrato | Não obrigatório, salvo contexto |
| Interno | Condicional | Conforme contrato | Técnica | Limitado | Degradação segura |
| Restrito | Recomendado ou obrigatório conforme recurso | Recomendada | Sim | Limitado | Sim para escopo |
| Sensível | Obrigatório | Obrigatória | Obrigatória | Muito limitado | Sim |
| Crítico | Obrigatório | Curta e explícita | Obrigatória com audit_reference | Proibido ou excepcional | Sempre |

---

## 30. Matriz de erros oficiais

| Situação | Resultado esperado |
|---|---|
| Falta tenant em ação contextual | Denied ou fail-closed. |
| Falta context em recurso contextual | Denied ou fail-closed. |
| Ator ausente | Denied. |
| Recurso ausente quando aplicável | Denied. |
| PolicyReference obrigatória ausente | Denied ou quarantine. |
| Finalidade sensível ausente | Denied. |
| SecretReference usado sem decisão | Denied e auditado. |
| EvidenceReference usado sem decisão | Denied e auditado. |
| ResourceReference fora de escopo | Denied. |
| Decisão expirada | Denied com reason_code `denied.expired_decision`. |
| Cache proibido | Denied e auditado. |
| Evento tentando autorizar ação nova | Denied e auditado. |
| Read model usado como autorização | Denied e auditado. |
| Módulo comercial tentando emitir decisão final | Rejeição, auditoria e alerta de arquitetura. |
| Auditoria tentando decidir autorização | Rejeição de responsabilidade. |
| Segurança/LGPD tentando executar ação operacional | Rejeição de responsabilidade. |
| Política tentando executar ação | Rejeição de responsabilidade. |

---

## 31. Riscos tratados

| Risco | Tratamento final |
|---|---|
| Acoplamento por decisão reutilizada | Escopo exato, expiração e no_domain_transfer. |
| Autorização duplicada fora do Core | Emissão final exclusiva do Core Platform. |
| Política virar decisão operacional | Política influencia, mas não executa. |
| Módulo dono executar sem decisão | Fail-closed obrigatório para sensível/crítico. |
| Decisão virar permissão eterna | expires_at, reuse_policy e cache_policy limitados. |
| Cache indevido | Cache proibido para crítico e limitado para restrito/sensível. |
| Reaproveitamento expirado | Decisão expirada sempre falha fechado. |
| Evento virar autorização | Evento só carrega referência da decisão original. |
| SecretReference autorizar segredo | SecretReference só referencia; decisão válida é obrigatória. |
| EvidenceReference autorizar prova | EvidenceReference só referencia; decisão válida é obrigatória. |
| ResourceReference autorizar domínio | ResourceReference só aponta recurso; não transfere domínio. |
| Read model substituir autorização | Read model é leitura autorizada, não motor decisório. |

---

## 32. Contract ID oficial

Contrato oficial preferencial:

```text
NODUOS.CORE.AUTHORIZATION_DECISION.v1
```

Nome conceitual:

```text
AuthorizationDecisionContract v1
```

Permission code conceitual:

```text
core.authorization_decision.read_or_manage
```

Owner module:

```text
Core Platform
```

Observação:

A forma abreviada `NODUOS.CORE.AUTH_DECISION.v1` pode aparecer em exemplos antigos, mas não deve ser usada como contract_id oficial desta consolidação.

---

## 33. Eventos relacionados

Eventos devem usar EventEnvelope v1.

Eventos conceituais possíveis, sem criar obrigação de implementação nesta etapa:

- AuthorizationDecisionRequested
- AuthorizationDecisionIssued
- AuthorizationDecisionDenied
- AuthorizationDecisionExpired
- AuthorizationDecisionRevoked
- AuthorizationDecisionSuperseded
- AuthorizationDecisionUsed
- AuthorizationDecisionUseDenied
- AuthorizationDecisionScopeViolationDetected
- AuthorizationDecisionCacheRejected
- AuthorizationDecisionReuseRejected
- AuthorizationDecisionQuarantined

Regras:

- Esses eventos não autorizam novas ações.
- Eles apenas comunicam fatos de decisão, uso, falha, violação ou quarentena.
- Qualquer ação derivada exige nova decisão quando sensível ou crítica.

---

## 34. APIs internas conceituais relacionadas

Esta seção não cria endpoint final. Apenas nomeia contratos conceituais para futura modelagem.

- CoreAuthorizationAPI
- CoreAuthorizationDecisionAPI
- CorePermissionGrantAPI
- CoreInheritanceGrantAPI
- CoreResourceReferenceAPI
- CoreEntitlementAPI
- CoreFeatureFlagAPI
- CoreAuditAPI
- CoreContractRegistryAPI

Regras:

- APIs internas devem validar tenant, contexto, permissão, escopo, política e auditoria.
- Nenhuma API interna deve expor segredo bruto, evidência bruta ou payload completo de domínio.
- Nenhuma API interna deve permitir módulo comercial emitir decisão final.

---

## 35. Atualização consolidada para 00_BIBLIA_DO_PROJETO.md

Adicionar seção transversal:

```text
# Regra transversal: AuthorizationDecision v1

O NoduOS adota AuthorizationDecision v1 como padrão conceitual oficial do Core Platform para decisões de autorização estrutural, contextual, temporal, modular, sensível e crítica.

AuthorizationDecision decide se uma ação específica pode ocorrer agora, dentro de tenant, contexto, ator, recurso, ação, escopo, política, licença, feature flag, finalidade, sensibilidade e janela temporal definidos.

Nenhum módulo comercial emite AuthorizationDecision final.

Política influencia. Core decide. Módulo dono executa. Auditoria registra.

AuthorizationDecision não substitui PermissionGrant, InheritanceGrant, ResourceReference, EvidenceReference, SecretReference, EventEnvelope, read model, política, licença, feature flag ou execução do módulo dono.

Ação crítica sem AuthorizationDecision válida deve falhar fechado.
```

---

## 36. Atualização consolidada para 01_MAPA_DE_MODULOS.md

Adicionar em Core Platform:

```text
Responsabilidade complementar:
- Emitir AuthorizationDecision v1 como decisão estrutural final para ações sensíveis, críticas, contextuais, modulares, temporais ou protegidas por política.

O que não faz:
- AuthorizationDecision do Core não executa regra operacional do módulo dono.
- AuthorizationDecision não substitui PermissionGrant, InheritanceGrant, política, licença, feature flag ou módulo dono.
- Core não usa ResourceReference para assumir domínio completo do recurso.

Regra importante:
AuthorizationDecision decide o agora. Escopo limita o alcance. Política explica o motivo. Expiração evita herança infinita. Auditoria registra a decisão.
```

Adicionar observação transversal aos módulos comerciais:

```text
Nenhum módulo comercial pode emitir AuthorizationDecision final. Módulos comerciais devem solicitar decisão ao Core Platform quando ação, leitura, exportação, evidência, segredo, suporte, automação ou integração exigir autorização sensível ou crítica.
```

---

## 37. Atualização consolidada para 02_REGRAS_DE_ARQUITETURA.md

Adicionar regra arquitetural:

```text
# Regra arquitetural: AuthorizationDecision v1

AuthorizationDecision v1 é obrigatório para ações sensíveis, críticas ou contextuais que envolvam acesso físico, vídeo, evidência, segredo, exportação, suporte remoto, conector externo, webhook externo, alteração de permissão, herança, licença, feature flag, política, dados pessoais, financeiro, visitante, auditoria sensível ou BI identificável.

AuthorizationDecision deve conter tenant, contexto, ator, recurso, ação, escopo, políticas aplicáveis, reason_code minimizado, expiração quando aplicável, correlation_id e audit_reference em decisões críticas.

AuthorizationDecision expirada, revogada, fora do escopo ou sem política obrigatória deve falhar fechado.

Eventos, read models, ResourceReference, EvidenceReference e SecretReference não autorizam ação por si só.
```

---

## 38. Atualização consolidada para 03_DECISOES_OFICIAIS.md

Inserir após DEC-194:

```text
# DEC-195: AuthorizationDecision v1 como padrão oficial de decisão de autorização do Core Platform

## Tema

Decisão estrutural, contextual, temporal, modular, sensível e crítica de autorização.

## Decisão

O NoduOS adota AuthorizationDecision v1 como padrão conceitual oficial do Core Platform para decisões de autorização.

AuthorizationDecision v1 é emitida exclusivamente pelo Core Platform e deve declarar, quando aplicável, authorization_decision_id, decision, issued_by, tenant_id, context_id, actor_reference, resource_reference, action, module_scope, decision_scope, policy_references, permission_reference, inheritance_reference, license_reference, feature_flag_reference, purpose, sensitivity_level, reason_code minimizado, issued_at, expires_at, correlation_id e audit_reference.

Nenhum módulo comercial, política, evento, read model, ResourceReference, EvidenceReference ou SecretReference pode emitir, renovar, ampliar ou substituir AuthorizationDecision final.

Ação crítica sem AuthorizationDecision válida deve falhar fechado.

## Motivo

Impedir autorização duplicada fora do Core, bypass de escopo, política virando executor, evento virando autorização, read model virando motor decisório, referência virando permissão e decisão expirada sendo reaproveitada como permissão eterna.

## Impacto

Todos os contratos sensíveis ou críticos devem respeitar AuthorizationDecision v1 antes da modelagem técnica. Módulos donos devem executar ações apenas com decisão válida quando exigida, mantendo domínio próprio e auditoria. EventEnvelope v1 deve carregar apenas authorization_decision_reference quando aplicável, sem criar autorização nova.

## Status

Aprovada

## Data

2026-06-27
```

Atualizar rodapé decisório:

```text
A última decisão oficial registrada é DEC-195.
As próximas decisões novas devem começar em DEC-196, salvo alteração formal posterior neste documento.
```

---

## 39. Atualização consolidada para 04_PROMPTS_DE_TRABALHO.md

Adicionar regra aos prompts técnicos:

```text
Todo detalhamento de contrato, módulo, evento, comando, webhook, read model, evidência, segredo, exportação, suporte, integração ou automação deve verificar se a ação exige AuthorizationDecision v1.

AuthorizationDecision v1 pertence ao Core Platform, deve ser temporal, escopada e auditável, e não pode ser emitida por módulo comercial.

Não permitir que evento, read model, ResourceReference, EvidenceReference ou SecretReference substitua decisão válida do Core.

Ação crítica sem AuthorizationDecision válida deve falhar fechado.
```

---

## 40. Atualização consolidada para 05_CATALOGO_DE_CONTRATOS_PUBLICOS.md

Atualizar seção 9.9:

```text
### 9.9 AuthorizationDecision v1

AuthorizationDecision v1 é emitida exclusivamente pelo Core Platform e representa a decisão estrutural, contextual, temporal, modular, sensível ou crítica para uma ação específica.

Deve declarar authorization_decision_id, decision, issued_by, tenant_id, context_id, actor_reference, subject_reference quando aplicável, resource_reference, action, module_scope, decision_scope, permission_reference quando aplicável, inheritance_reference quando aplicável, policy_references, security_policy_reference quando aplicável, lgpd_policy_reference quando aplicável, license_reference quando aplicável, feature_flag_reference quando aplicável, purpose quando aplicável, sensitivity_level, reason_code minimizado, issued_at, expires_at quando aplicável, correlation_id, causation_id quando aplicável, audit_reference, cache_policy, reuse_policy e fail_policy.

Nenhum módulo comercial emite AuthorizationDecision final.

AuthorizationDecision não substitui PermissionGrant, InheritanceGrant, ResourceReference, EvidenceReference, SecretReference, EventEnvelope, read model, política, licença, feature flag ou execução do módulo dono.
```

Adicionar ou confirmar contrato:

```text
| NODUOS.CORE.AUTHORIZATION_DECISION.v1 | AuthorizationDecisionContract v1 | API interna / contrato de autorização | Decisão oficial do Core Platform para ações sensíveis, críticas ou contextuais. |
```

---

## 41. Atualização consolidada para 06_MATRIZ_TECNICA_PERMISSOES_POR_CONTRATO.md

Adicionar observação transversal:

```text
AuthorizationDecision v1 é obrigatória para contratos sensíveis ou críticos e para qualquer ação que envolva acesso físico, vídeo, evidência, segredo, exportação, suporte remoto, conector externo, webhook externo, alteração de permissão, herança, licença, feature flag, política, auditoria sensível, BI identificável, visitante, financeiro ou dado pessoal sensível.

Eventos herdam a decisão original apenas como referência. Read models não substituem AuthorizationDecision. Contrato sensível sem decisão válida deve negar, pausar, quarentenar ou degradar de forma segura conforme fail_policy.
```

---

## 42. Atualização consolidada para 07_MATRIZ_TECNICA_DADOS_SENSIVEIS_POR_CONTRATO.md

Adicionar seção:

```text
# Uso de AuthorizationDecision v1 em dados sensíveis

Todo contrato com dado sensível ou crítico deve declarar se exige AuthorizationDecision v1, qual finalidade autoriza o tratamento, qual política de Segurança/LGPD se aplica, qual máscara deve ser usada, qual retenção vale, qual audit_reference registra a visualização ou exportação e qual fail_policy será aplicada.

AuthorizationDecision não permite payload bruto indevido. Segredo bruto, biometria bruta, vídeo bruto sem política, imagem bruta sem finalidade, documento completo sem necessidade e dado fora de tenant/contexto continuam proibidos mesmo quando houver decisão allowed.
```

---

## 43. Atualização consolidada para 08_DETALHAMENTO_EVENTENVELOPE_V1.md

Adicionar seção:

```text
# Relação com AuthorizationDecision v1

Eventos derivados de ação sensível ou crítica devem carregar authorization_decision_reference emitida pelo Core Platform.

Essa referência preserva rastreabilidade da decisão original, mas não autoriza nova ação.

Consumidor que precisar agir deve solicitar nova AuthorizationDecision no próprio escopo, recurso, ação, tenant, contexto, política e finalidade.

Evento com decisão expirada, ausente ou fora de escopo deve ser rejeitado, mascarado, quarentenado ou degradado conforme fail_policy.
```

---

## 44. Atualização consolidada para 09_DETALHAMENTO_EVIDENCEREFERENCE_V1.md

Adicionar seção:

```text
# Relação com AuthorizationDecision v1

EvidenceReference não autoriza visualização, exportação, cópia, anexação, compartilhamento, BI identificável ou uso probatório por si só.

Toda ação sobre evidência sensível ou crítica exige AuthorizationDecision v1 válida, emitida pelo Core Platform, com tenant, contexto, ator, recurso, finalidade, escopo, política de retenção, política de máscara, política de exportação quando aplicável e audit_reference.

Decisão expirada ou fora do escopo deve falhar fechado.
```

---

## 45. Atualização consolidada para 10_DETALHAMENTO_SECRETREFERENCE_V1.md

Adicionar seção:

```text
# Relação com AuthorizationDecision v1

SecretReference não autoriza leitura, uso, rotação, revogação, assinatura, vinculação, teste, exportação ou repasse de segredo por si só.

Toda ação envolvendo segredo, credencial, certificado, token, webhook secret, credencial de conector, credencial de gateway ou material criptográfico exige AuthorizationDecision v1 válida, emitida pelo Core Platform, com escopo, finalidade, política de rotação, política de revogação, expiração, auditoria e fail-closed.

Segredo bruto nunca deve trafegar em evento, log, URL, payload, read model ou exportação.
```

---

## 46. Checklist final de conformidade

| Item | Status |
|---|---|
| Não sugere MVP | OK |
| Não sugere fases de implementação | OK |
| Não cria código | OK |
| Não cria banco | OK |
| Não cria endpoint final | OK |
| Não cria tela | OK |
| Não cria schema técnico definitivo | OK |
| Não cria módulo novo | OK |
| Mantém Core como emissor final | OK |
| Não permite módulo comercial emitir decisão final | OK |
| Não permite Herança e Permissões decidir execução final | OK |
| Não permite Auditoria decidir autorização | OK |
| Não permite Segurança e LGPD executar ação operacional | OK |
| Não permite evento gerar autorização nova | OK |
| Não permite read model substituir autorização | OK |
| Não permite SecretReference autorizar ação sozinho | OK |
| Não permite EvidenceReference autorizar ação sozinho | OK |
| Não permite ResourceReference autorizar ação sozinho | OK |
| Exige tenant, contexto, ator, recurso, ação, escopo e política | OK |
| Exige expiração quando aplicável | OK |
| Exige audit_reference para decisão crítica | OK |
| Exige fail-closed para ação crítica | OK |
| Preserva módulo dono como executor | OK |
| Preserva política como influência, não execução | OK |
| Preserva EventEnvelope como fato, não comando | OK |
| Preserva dados sensíveis com finalidade, máscara, retenção e auditoria | OK |

---

## 47. Parecer final

O Detalhamento de AuthorizationDecision v1 está aprovado para consolidação como documento técnico raiz do NoduOS.

A etapa fecha a cadeia de blindagem conceitual entre contratos, permissões, dados sensíveis, EventEnvelope, EvidenceReference, SecretReference, ResourceReference, políticas, licenças, feature flags, contexto, escopo, expiração e auditoria.

A decisão não é um sabre jogado no chão para qualquer módulo pegar. Ela é uma ordem do Conselho do Core, com contexto, escopo, tempo e trilha. O módulo dono ainda segura o sabre da execução. 🛰️

Frase final:

Autorização decide o agora. Escopo limita o alcance. Política explica o motivo. Expiração evita herança infinita. Auditoria registra a decisão.


---

## 48. Consolidação física na raiz

Este documento foi aplicado como arquivo técnico raiz oficial `11_DETALHAMENTO_AUTHORIZATIONDECISION_V1.md`.

Estado após aplicação conjunta com ResourceReference v1:

```text
DEC-195 consolidada: AuthorizationDecision v1.
DEC-196 consolidada: ResourceReference v1.
Última DEC consolidada na raiz: DEC-198.
Próxima DEC livre: DEC-197.
Próxima etapa recomendada: Blueprint técnico da aplicação.
```

## Relação complementar com o Blueprint técnico da aplicação

Data: 2026-06-27.
Decisão aplicada: DEC-197.
Arquivo técnico raiz: `13_BLUEPRINT_TECNICO_APLICACAO_NODUOS.md`.

O Blueprint técnico da aplicação define como este padrão transversal deve ser aplicado na programação.

Nenhum código deve implementar este padrão como atalho para domínio alheio, banco compartilhado, autorização paralela, payload bruto, evento-comando, read model como fonte primária ou frontend como decisor de autorização.

A aplicação deve ser contract-first, modular-first e authorization-first, sempre validando tenant/contexto, escopo, política, auditoria, idempotência quando aplicável e fail-closed em ações críticas.


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
