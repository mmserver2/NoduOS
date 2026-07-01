# CANVA FINAL - BLUEPRINT TÉCNICO DA APLICAÇÃO NODUOS

Projeto: NoduOS
Descrição oficial: SaaS Modular de Gestão de Espaços e Segurança Unificada
Conceito técnico: Sistema Operacional Modular para Espaços Físicos Conectados
Conceito de marca: Conexão que impulsiona
Tipo de documento: Blueprint técnico da aplicação
Versão do documento: 1.0.1
Data desta consolidação: 2026-06-27
Status: Aprovado e consolidado nos documentos centrais
Última DEC consolidada na raiz: DEC-197
Próxima DEC livre: DEC-198
Documento de referência da etapa: PROMPT_BLUEPRINT_TECNICO_APLICACAO_NODUOS.txt
Arquivo técnico raiz oficial: `13_BLUEPRINT_TECNICO_APLICACAO_NODUOS.md`
DEC consolidada nesta etapa: DEC-197

Frase guia:

Contrato antes de endpoint. Domínio antes de tabela. Autorização antes de ação. Referência antes de payload. Evento antes de read model. Auditoria antes de confiança. LGPD antes de dado bruto. Teste antes de deploy.

Regra central:

Política influencia. Core decide. Módulo dono executa. Auditoria registra.

---

## 0. Natureza deste Blueprint

Este Blueprint técnico define o trilho seguro para iniciar a programação do NoduOS sem violar a raiz arquitetural consolidada até a DEC-196.

Ele transforma a governança já aprovada em uma organização técnica prática para aplicação, repositório, módulos, backend, frontend, banco, contratos, eventos, workers, storage, auditoria, LGPD, observabilidade, testes, deploy e ordem técnica inicial de programação.

Este documento não é MVP, não é fase provisória, não é simplificação da arquitetura final e não altera as decisões oficiais sem sugerir nova DEC.

Ele também não substitui os documentos raiz. Ele é a ponte técnica entre a raiz e o início da programação.

Regra curta:

A raiz governa. O Blueprint organiza. O código obedece.

---

## 1. Fontes oficiais consideradas

Este Blueprint considera como fonte oficial:

1. 00_BIBLIA_DO_PROJETO.md
2. 01_MAPA_DE_MODULOS.md
3. 02_REGRAS_DE_ARQUITETURA.md
4. 03_DECISOES_OFICIAIS.md
5. 04_PROMPTS_DE_TRABALHO.md
6. 05_CATALOGO_DE_CONTRATOS_PUBLICOS.md
7. 06_MATRIZ_TECNICA_PERMISSOES_POR_CONTRATO.md
8. 07_MATRIZ_TECNICA_DADOS_SENSIVEIS_POR_CONTRATO.md
9. 08_DETALHAMENTO_EVENTENVELOPE_V1.md
10. 09_DETALHAMENTO_EVIDENCEREFERENCE_V1.md
11. 10_DETALHAMENTO_SECRETREFERENCE_V1.md
12. 11_DETALHAMENTO_AUTHORIZATIONDECISION_V1.md
13. 12_DETALHAMENTO_RESOURCEREFERENCE_V1.md
14. IDENTIDADE_OFICIAL_NODUOS.md
15. RELATORIO_CONFORMIDADE_RAIZ_NODUOS_DEC_195_196.md
16. PROMPT_BLUEPRINT_TECNICO_APLICACAO_NODUOS.txt

Regra de governança:

O chat conversa. O documento manda.

---

## 2. Estado da raiz para esta etapa

Estado consolidado:

```text
Última DEC consolidada: DEC-196
Próxima DEC livre: DEC-198
Próxima etapa recomendada: Blueprint técnico da aplicação
```

Decisões estruturais imediatamente anteriores:

- DEC-195: AuthorizationDecision v1 como padrão oficial de decisão de autorização do Core Platform.
- DEC-196: ResourceReference v1 como padrão oficial de referência segura de recursos entre módulos.

A raiz está apta para avançar ao Blueprint técnico da aplicação, mas a programação deve obedecer este documento para evitar acoplamento, bypass de autorização, banco compartilhado, evento-comando, segredo bruto, evidência bruta, biometria bruta ou payload completo de domínio.

---

## 3. Objetivo do Blueprint técnico

O objetivo deste Blueprint é preparar a aplicação para programação eficiente, segura, modular e auditável.

Ele deve responder:

- Como organizar o repositório?
- Como separar módulos?
- Como estruturar backend?
- Como estruturar frontend?
- Como organizar banco e migrations?
- Como versionar contratos?
- Como autenticar usuários?
- Como resolver tenant e contexto?
- Como emitir AuthorizationDecision?
- Como usar ResourceReference?
- Como publicar eventos com EventEnvelope?
- Como processar filas, outbox, inbox, retry e dead-letter?
- Como proteger evidências?
- Como proteger segredos?
- Como proteger dados sensíveis e LGPD?
- Como auditar ações críticas?
- Como tratar storage?
- Como observar a plataforma?
- Como testar fronteiras e contratos?
- Como preparar deploy?
- Qual ordem técnica inicial deve guiar a programação?

Regra curta:

Blueprint não cria atalho. Blueprint cria trilho.

---

## 4. Princípios invioláveis

1. Não planejar como MVP.
2. Não criar fases como simplificação da arquitetura final.
3. Não alterar decisões oficiais sem nova DEC.
4. Não criar módulo acoplado.
5. Não criar motor paralelo ao Core Platform.
6. Não permitir módulo comercial emitir AuthorizationDecision final.
7. Não permitir Herança e Permissões decidir execução final.
8. Não permitir Auditoria decidir autorização.
9. Não permitir Segurança e LGPD executar ação operacional.
10. Não permitir módulo consumidor executar domínio alheio.
11. Não acessar banco interno de outro módulo.
12. Não importar classe interna de outro módulo.
13. Não usar read model como banco compartilhado.
14. Não usar evento como comando.
15. Não usar webhook como contrato interno substituto.
16. Não usar ResourceReference como autorização.
17. Não usar EvidenceReference como autorização.
18. Não usar SecretReference como autorização.
19. Não usar AuthorizationDecision como permissão eterna.
20. Não trafegar segredo bruto.
21. Não trafegar evidência bruta quando EvidenceReference bastar.
22. Não trafegar biometria bruta.
23. Não trafegar payload completo de domínio.
24. Não executar ação crítica sem idempotency_key quando aplicável.
25. Não executar ação crítica sem fail-closed.
26. Não retornar dados fora de tenant/contexto.
27. Não expor dados sensíveis sem finalidade, política, máscara, retenção e auditoria.
28. Não prender integração a uma única marca de hardware.
29. Não misturar identidade visual com regra de negócio.
30. Não fazer frontend decidir autorização final.

Frase operacional:

Sem contexto, sem escopo ou sem autorização, ação crítica não executa.

---

## 5. Arquitetura macro recomendada

A arquitetura recomendada para o NoduOS é:

```text
Arquitetura modular distribuível,
iniciando como modular monolith com fronteiras fortes,
preparada para separar workers, filas, gateway-agent,
serviços críticos e integrações sem reescrever domínio.
```

### 5.1 Por que modular monolith distribuível

Esta abordagem permite:

- programar com velocidade inicial controlada;
- manter fronteiras de domínio desde o primeiro commit;
- evitar complexidade prematura de microsserviços;
- permitir extração futura de módulos, workers ou adaptadores sem quebrar contratos;
- preservar o Catálogo de Contratos Públicos como camada oficial de comunicação;
- manter baixa dependência entre módulos;
- criar testes de contrato desde cedo;
- preservar multi-tenancy e autorização centralizada;
- reduzir retrabalho técnico.

### 5.2 O que esta arquitetura não permite

Ela não permite:

- tabelas globais com tudo misturado;
- services genéricos com regra de todos os módulos;
- shared kernel inchado;
- módulo comercial chamando função interna de outro módulo;
- frontend chamando endpoint de módulo sem contexto e autorização;
- worker executando regra sensível sem AuthorizationDecision;
- evento disparando ação sensível sem novo comando autorizado;
- banco compartilhado como cola entre módulos.

Regra curta:

Um repositório pode ser único. O domínio não.

---

## 6. Organização recomendada do repositório

Estrutura conceitual recomendada:

```text
noduos/
  apps/
    api/
    web-master-partner/
    web-operator/
    mobile-client/
    worker-runtime/
    gateway-agent/
    admin-tools/

  packages/
    contracts/
    event-envelope/
    authorization-client/
    resource-reference/
    evidence-reference/
    secret-reference/
    idempotency/
    correlation/
    tenant-context/
    audit-client/
    observability/
    ui-system/
    white-label-theme/
    test-kit/

  modules/
    core-platform/
    master/
    partners/
    organizations/
    people-clients/
    structure/
    inheritance-permissions/
    gateway-tunnel/
    devices/
    access-control/
    cameras-vms/
    alarms/
    finance/
    visitors/
    tickets/
    mural/
    reservations/
    bi-reports/
    white-label/
    notifications/
    automations/
    marketplace/
    audit-compliance/
    security-lgpd/
    support-operations/

  infra/
    database/
    migrations/
    queues/
    storage/
    observability/
    deployment/
    environments/
    scripts/

  docs/
    architecture/
    contracts/
    decisions/
    runbooks/
    module-boundaries/
    testing/
```

### 6.1 Regras para apps

`apps/api` expõe a API de aplicação, mas não deve conter regra de domínio própria. Ele roteia, autentica, resolve tenant/contexto, chama application services do módulo dono e registra auditoria conforme contrato.

`apps/web-master-partner` atende Master e Parceiro, com dashboards desktop avançados e responsividade.

`apps/web-operator` atende Organização, Operador/Gestor, Portaria/Recepção e operação diária, com orientação mobile first quando aplicável.

`apps/mobile-client` atende Cliente/Usuário Final, dependentes, moradores, visitantes autorizados e perfis finais, sempre mobile first.

`apps/worker-runtime` executa consumidores, jobs, outbox relay, inbox processing, retry, dead-letter, notificação, automação e integrações assíncronas por contrato.

`apps/gateway-agent` representa o agente local de conexão com o mundo físico, sem assumir regra operacional dos módulos comerciais.

### 6.2 Regras para packages

Packages só podem conter:

- contratos transversais;
- tipos públicos versionados;
- clientes de autorização;
- clientes de auditoria;
- helpers de idempotência;
- envelope de evento;
- resolvedores neutros de tenant/contexto;
- instrumentação de observabilidade;
- design system;
- utilitários sem regra de negócio.

Packages não podem conter:

- regra comercial de módulos;
- query direta em banco de outro módulo;
- execução de domínio;
- decisão de autorização final;
- lógica de hardware específica;
- lógica financeira;
- lógica de acesso físico;
- lógica de vídeo;
- política LGPD operacional como execução.

Regra curta:

Shared package carrega linguagem comum. Não carrega poder.

---

## 7. Organização interna de cada módulo

Cada módulo deve seguir estrutura própria:

```text
modules/<module-name>/
  domain/
    entities/
    value-objects/
    policies/
    domain-services/
    errors/

  application/
    commands/
    queries/
    handlers/
    use-cases/
    dto/
    authorization-scopes/
    validators/

  contracts/
    api/
    commands/
    events/
    read-models/
    webhooks/
    errors/

  infrastructure/
    persistence/
    migrations/
    repositories/
    outbox/
    inbox/
    integrations/
    adapters/

  presentation/
    routes/
    controllers/
    serializers/

  tests/
    unit/
    integration/
    contract/
    authorization/
    tenant-context/
```

### 7.1 Camadas permitidas

Domain contém regra do módulo dono.

Application orquestra casos de uso do módulo dono.

Contracts declara o que outros módulos podem consumir.

Infrastructure implementa persistência, integrações e adaptadores do próprio módulo.

Presentation expõe endpoints, controllers e serializers, sem regra de negócio.

Tests validam contrato, domínio, autorização, isolamento e comportamento em falha.

### 7.2 Dependência interna correta

```text
presentation -> application -> domain
application -> contracts próprios e clientes autorizados
infrastructure -> domain/application por interfaces
outro módulo -> apenas contratos públicos/API interna/eventos/read models autorizados
```

### 7.3 Dependência proibida

```text
módulo A -> banco interno do módulo B
módulo A -> classe interna do módulo B
módulo A -> service privado do módulo B
módulo A -> migration do módulo B
módulo A -> enum interno não publicado do módulo B
módulo A -> payload bruto do módulo B
```

---

## 8. Módulos oficiais no Blueprint

O Blueprint deve preservar os módulos oficiais:

1. Core Platform
2. Master
3. Parceiros
4. Organizações
5. Pessoas e Clientes
6. Unidades, Blocos, Áreas e Ambientes
7. Herança e Permissões
8. Gateway Local / Mikrotik / Tunnel
9. Dispositivos
10. Controle de Acesso
11. Câmeras / VMS
12. Alarmes
13. Financeiro
14. Convites e Visitantes
15. Tickets
16. Mural Informativo
17. Reservas
18. Relatórios / BI
19. White-label
20. Notificações
21. Automações
22. Marketplace de Integrações
23. Auditoria e Compliance
24. Segurança e LGPD
25. Suporte e Operação

### 8.1 Core Platform

Core Platform é núcleo obrigatório e não comercial.

Responsabilidades técnicas no Blueprint:

- autenticação;
- sessões;
- MFA;
- UserAccount;
- tenants;
- contextos;
- papéis;
- permissões estruturais;
- herança contextual base;
- PermissionGrant;
- InheritanceGrant;
- AuthorizationDecision;
- ResourceReference transversal;
- ModuleRegistry;
- planos;
- licenças;
- entitlements;
- feature flags;
- auditoria base;
- logs de segurança;
- LGPD base;
- event bus;
- contratos transversais;
- API clients;
- notificações básicas;
- configurações globais.

O Core não executa regra operacional de módulos comerciais.

### 8.2 Módulos comerciais e operacionais

Cada módulo comercial ou operacional deve manter:

- seu domínio;
- seus dados;
- seus contratos;
- suas permissões específicas;
- suas regras;
- suas telas;
- seus logs primários;
- seus eventos;
- suas integrações;
- suas políticas de falha;
- seus testes.

O Core autoriza. O módulo dono executa.

---

## 9. Backend

O backend deve ser API-first, modular, orientado a contratos, auditável e multi-tenant.

### 9.1 Pipeline obrigatório de requisição

Toda requisição relevante deve passar por:

```text
1. Request received
2. CorrelationIdResolver
3. TenantContextResolver
4. AuthenticationGuard
5. SessionGuard
6. RateLimitGuard
7. ModuleAvailabilityGuard
8. LicenseEntitlementGuard
9. FeatureFlagGuard
10. AuthorizationDecisionGuard quando sensível/crítica
11. PayloadSensitivityGate
12. ApplicationService do módulo dono
13. AuditWriter quando aplicável
14. OutboxWriter quando publicar evento
15. ResponseSerializer com máscara/minimização
```

### 9.2 Serviços de aplicação

Application Services devem:

- receber comandos ou queries validados;
- não conhecer banco de outro módulo;
- chamar CoreAuthorizationAPI quando exigido;
- usar ResourceReference para recursos externos;
- acionar módulo dono por API interna quando necessário;
- publicar eventos via outbox;
- registrar auditoria;
- respeitar idempotência em ação crítica;
- aplicar fail-closed.

### 9.3 Controllers

Controllers devem:

- validar contrato de entrada;
- resolver tenant/contexto;
- encaminhar para application service;
- serializar resposta minimizada;
- não executar regra de domínio;
- não consultar banco diretamente;
- não emitir AuthorizationDecision;
- não publicar evento direto sem application service.

### 9.4 APIs internas

Toda API interna deve declarar:

- api_contract_id;
- owner_module;
- allowed_callers;
- operation_type;
- required_permission;
- tenant_id;
- context_id;
- actor_reference;
- resource_reference quando aplicável;
- AuthorizationDecision quando sensível/crítica;
- input_contract;
- output_contract;
- ErrorContract v1;
- auditoria;
- rate limit;
- compatibilidade;
- descontinuação;
- fail_policy.

Regra curta:

API interna não é porta dos fundos. É contrato com armadura.

---

## 10. Frontend

O frontend deve ser mobile first para Cliente e Operador/Gestor, responsivo para Parceiro e Master, white-label ready e permission-aware.

### 10.1 Aplicações frontend

Recomendação:

```text
web-master-partner:
  Master Admin
  Equipe Master
  Parceiro Admin
  Equipe Parceiro

web-operator:
  Organização Admin
  Operador/Gestor
  Portaria/Recepção
  Suporte local autorizado

mobile-client:
  Cliente/Usuário Final
  Morador
  Funcionário
  Paciente
  Aluno
  Visitante autorizado quando aplicável
```

### 10.2 Camadas de frontend

```text
App Shell
Context Switcher
Module Navigation
Permission-aware Components
Feature Flag Aware UI
White-label Theme Provider
Data Fetching Client
Audit Interaction Hooks
Error Boundary
Offline/Degraded State Handler
```

### 10.3 Regras obrigatórias de frontend

O frontend pode:

- esconder menus não permitidos;
- renderizar módulos ativos;
- adaptar tema white-label;
- mostrar contexto ativo;
- enviar comandos com idempotency_key;
- exibir estados degradados;
- exibir dados mascarados conforme perfil;
- consumir read models autorizados.

O frontend não pode:

- decidir autorização final;
- executar regra de domínio;
- confiar apenas em botão escondido;
- armazenar segredo bruto;
- armazenar biometria bruta;
- transportar evidência bruta sem política;
- consultar API sem tenant/contexto;
- usar payload de outro módulo como fonte de verdade;
- exibir dado sensível sem finalidade e auditoria.

### 10.4 Design system e white-label

O Design System deve considerar:

- paleta oficial raiz: #1F2937, #00A37A e #F1F3F5;
- white-label por parceiro/organização quando autorizado;
- tema não altera regra de negócio;
- tema não altera autorização;
- tema não altera herança;
- tema não altera permissões;
- tema não carrega segredo bruto;
- tema não expõe certificado sensível;
- domínio customizado e certificados usam SecretReference quando envolverem segredo.

---

## 11. Banco de dados

O banco deve preservar separação clara por domínio.

### 11.1 Estratégia recomendada

É permitido iniciar com um banco físico único, desde que separado por schemas/domínios equivalentes:

```text
core.*
master.*
partners.*
organizations.*
people.*
structure.*
inheritance_permissions.*
gateway.*
devices.*
access.*
cameras.*
alarms.*
finance.*
visitors.*
tickets.*
mural.*
reservations.*
bi.*
white_label.*
notifications.*
automations.*
marketplace.*
audit.*
security_lgpd.*
support.*
read_models.*
outbox.*
inbox.*
```

### 11.2 Regras de banco

Cada módulo deve controlar suas próprias tabelas.

Regras:

- migrations por módulo;
- repositories por módulo;
- IDs públicos para referência externa;
- IDs internos não expostos;
- ResourceReference para apontar recursos intermodulares;
- read models para consultas compostas;
- outbox no módulo produtor;
- inbox/deduplicação no consumidor;
- audit store controlado;
- retention policies aplicáveis.

### 11.3 Proibições de banco

É proibido:

- FK direta entre domínios como regra geral;
- join operacional entre tabelas internas de módulos diferentes;
- módulo A alterar tabela do módulo B;
- módulo A depender de migration do módulo B;
- tabela global de tudo;
- tabela de permissões paralela fora do Core;
- tabela de feature flags fora do Core;
- tabela de licenças fora do Core;
- banco compartilhado usado como integração;
- read model tratado como fonte primária.

### 11.4 Read models

Read models devem:

- ser derivados de eventos, APIs internas ou processos autorizados;
- declarar owner_module;
- declarar source_contracts;
- declarar allowed_consumers;
- declarar data_freshness;
- declarar staleness_policy;
- declarar tenant/contexto;
- declarar masking_policy;
- declarar retention_policy;
- declarar no_domain_transfer;
- possuir auditoria quando sensível;
- não virar fonte primária do domínio.

Regra curta:

Read model mostra. Módulo dono sabe.

---

## 12. Contratos públicos

O Blueprint deve seguir abordagem contract-first.

Nenhum endpoint, comando, evento, webhook, read model, exportação ou integração deve ser implementado sem contrato público correspondente ou contrato transversal aprovado.

### 12.1 Tipos de contrato

- API interna.
- Comando.
- Evento de fato ocorrido.
- Evento de solicitação registrada.
- Read model autorizado.
- Webhook interno.
- Webhook externo.
- Contrato de política.
- Contrato de autorização.
- Contrato de evidência.
- Contrato de exportação.
- Contrato analítico.
- Contrato de diagnóstico.
- Contrato de integração.
- Contrato de notificação.
- Contrato de suporte.
- Contrato de auditoria.
- Contrato de Segurança e LGPD.

### 12.2 Metadados mínimos de contrato

Todo contrato deve declarar:

- contract_id;
- contract_name;
- contract_type;
- owner_module;
- producer_module quando aplicável;
- consumer_modules autorizados;
- source_module quando aplicável;
- target_module quando aplicável;
- versão;
- status;
- objetivo;
- quando usar;
- quando não usar;
- permissões necessárias;
- escopo;
- tenant_id obrigatório ou não;
- context_id obrigatório ou não;
- actor_reference obrigatório ou não;
- resource_reference obrigatório ou não;
- AuthorizationDecision obrigatório ou não;
- política Segurança/LGPD aplicável;
- dados sensíveis envolvidos;
- dados permitidos;
- dados proibidos;
- raw_payload_allowed;
- evidence_reference_required;
- secret_reference_required;
- audit_required;
- idempotency_key;
- correlation_id;
- causation_id;
- outbox;
- inbox/deduplicação;
- retry;
- dead-letter/quarentena;
- fail_policy;
- compatibilidade;
- descontinuação;
- riscos de acoplamento.

### 12.3 Convenção de contract_id

Formato:

```text
NODUOS.<DOMINIO>.<NOME_PUBLICO>.v<N>
```

Exemplos:

```text
NODUOS.CORE.AUTHORIZATION_DECISION.v1
NODUOS.CORE.RESOURCE_REFERENCE.v1
NODUOS.ACCESS.ACCESS_EXECUTION_COMMAND.v1
NODUOS.CAMERA.CAMERA_LIVE_VIEW_REQUEST.v1
NODUOS.FINANCE.INVOICE_CREATED.v1
NODUOS.TRANSVERSAL.EVENT_ENVELOPE.v1
```

Regra:

Não usar nome de tabela, framework, rota, ORM, tecnologia ou fabricante no contrato principal quando a integração for plugável.

---

## 13. Autenticação

Autenticação pertence ao Core Platform.

### 13.1 Componentes

- UserAccount.
- AuthCredential.
- UserSession.
- MfaMethod.
- SessionPolicy.
- TokenPolicy.
- ApiClient.
- ServiceAccount.
- LoginAudit.
- SecurityLog.

### 13.2 Regras obrigatórias

- Pessoa tem login próprio.
- Unidade não é login compartilhado.
- Uma pessoa pode ter múltiplos contextos.
- Cada sessão deve ter tenant/contexto ativo ou escopo permitido.
- MFA deve existir quando aplicável.
- Sessões técnicas devem ter escopo e expiração.
- API clients devem ter escopo, rotação, revogação e auditoria.
- Segredos técnicos devem usar SecretReference.
- Login, logout, falha, MFA e troca de contexto devem gerar logs.

### 13.3 Fluxo de login conceitual

```text
1. Usuário informa credencial.
2. Core valida AuthCredential.
3. Core avalia MFA quando aplicável.
4. Core cria UserSession.
5. Core lista contextos disponíveis.
6. Usuário escolhe contexto ativo.
7. Core resolve permissões, heranças, módulos, licenças e feature flags.
8. Frontend renderiza dashboard conforme contexto.
9. Ações sensíveis ainda exigem AuthorizationDecision própria.
```

---

## 14. Tenant e contexto

Tenant e Context pertencem ao Core Platform.

### 14.1 Regra central

Todo dado relevante deve estar vinculado a tenant e contexto quando aplicável.

Nenhuma consulta deve retornar dados fora do tenant/contexto permitido.

### 14.2 TenantContextResolver

O Blueprint deve prever um resolvedor obrigatório:

```text
TenantContextResolver
```

Ele deve validar:

- tenant_id;
- context_id;
- actor_reference;
- role;
- context membership;
- nível hierárquico;
- módulo ativo;
- licença;
- feature flag;
- escopo de recurso;
- escopo de módulo;
- escopo de perfil.

### 14.3 Troca de contexto

Troca de contexto deve:

- ser explícita;
- ser auditável;
- invalidar caches sensíveis anteriores;
- recalcular permissões e módulos visíveis;
- preservar sessão sem misturar dados;
- impedir vazamento entre organizações, unidades ou perfis.

---

## 15. Autorização com AuthorizationDecision v1

AuthorizationDecision v1 é o padrão oficial de decisão do Core Platform.

### 15.1 Quando é obrigatório

Obrigatório para:

- ações sensíveis;
- ações críticas;
- acesso físico;
- vídeo ao vivo sensível;
- playback;
- exportação;
- evidência;
- segredo;
- suporte remoto;
- conector externo;
- webhook externo;
- alteração de permissão;
- alteração de herança;
- alteração de licença;
- alteração de feature flag;
- política de segurança;
- política LGPD;
- BI identificável;
- financeiro;
- visitante;
- documento sensível;
- automação crítica;
- comando crítico.

### 15.2 Campos mínimos conceituais

```text
authorization_decision_id
decision
issued_by = Core Platform
tenant_id
context_id
actor_reference
resource_reference
action
module_scope
policy_references
permission_references
inheritance_references
license_reference
feature_flag_reference
purpose
sensitivity_level
reason_code minimizado
issued_at
expires_at quando aplicável
correlation_id
audit_reference
```

### 15.3 Decisões possíveis

```text
allow
deny
conditional
expired
revoked
quarantined
```

### 15.4 Regras obrigatórias

- Nenhum módulo comercial emite AuthorizationDecision final.
- AuthorizationDecision não substitui PermissionGrant.
- AuthorizationDecision não substitui InheritanceGrant.
- AuthorizationDecision não substitui ResourceReference.
- AuthorizationDecision não substitui EvidenceReference.
- AuthorizationDecision não substitui SecretReference.
- AuthorizationDecision não substitui EventEnvelope.
- AuthorizationDecision não substitui read model.
- AuthorizationDecision não executa domínio.
- AuthorizationDecision expirada falha fechado.
- AuthorizationDecision fora de escopo falha fechado.
- Ação crítica sem audit_reference falha fechado.
- Reuso de decisão só é permitido dentro do mesmo escopo, janela e ação previstos.
- Ação nova sensível exige nova decisão.

Frase curta:

AuthorizationDecision decide o agora. Não concede poder eterno.

---

## 16. ResourceReference v1

ResourceReference v1 é o padrão transversal para apontar recursos sem transferir domínio.

### 16.1 Quando é obrigatório

Obrigatório quando contrato, comando, evento, API, auditoria, evidência, notificação, suporte, exportação, integração ou read model precisar apontar para recurso que:

- pertence a outro módulo;
- representa recurso físico;
- representa recurso estrutural;
- representa pessoa, cliente, usuário, visitante ou vínculo;
- envolve dispositivo, gateway, câmera, acesso, alarme ou automação;
- envolve cobrança, pagamento, fatura, reserva, ticket, mural ou notificação;
- envolve evidência, documento, anexo, arquivo, snapshot, clip, vídeo ou imagem;
- envolve segredo, credencial, token, certificado ou conector;
- envolve política, permissão, herança, decisão de autorização ou licença;
- envolve auditoria, compliance, suporte, exportação, BI identificável ou incidente.

### 16.2 Campos mínimos conceituais

```text
resource_reference_id
contract_id
contract_version
reference_version
owner_module
resource_type
resource_public_id
tenant_id quando aplicável
context_id quando aplicável
module_scope
authorization_scope
allowed_actions_conceptual
sensitivity_level
data_categories
lifecycle_state
availability_state quando aplicável
policy_references
display_label_minimized
audit_reference quando aplicável
no_domain_transfer = true
```

### 16.3 Proibições

ResourceReference não pode:

- executar ação;
- autorizar ação;
- conceder permissão;
- criar herança;
- substituir AuthorizationDecision;
- substituir PermissionGrant;
- substituir InheritanceGrant;
- substituir EvidenceReference;
- substituir SecretReference;
- substituir EventEnvelope;
- substituir read model autorizado;
- carregar entidade completa;
- expor chave primária interna;
- expor segredo bruto;
- expor evidência bruta;
- expor biometria bruta;
- expor vídeo bruto;
- virar banco compartilhado;
- transferir domínio.

Regra curta:

ResourceReference aponta. AuthorizationDecision decide. Módulo dono executa. Auditoria registra.

---

## 17. EventEnvelope v1

EventEnvelope v1 é obrigatório para eventos intermodulares, webhooks autorizados, eventos externos normalizados, eventos técnicos de retry, dead-letter e quarentena, e eventos que alimentem auditoria, BI, suporte, segurança ou compliance.

### 17.1 Tipos oficiais de evento

- Evento de fato ocorrido.
- Evento de solicitação registrada.
- Evento de alteração de estado.
- Evento de ciclo de vida.
- Evento de auditoria operacional.
- Evento de segurança.
- Evento de LGPD.
- Evento de política.
- Evento de diagnóstico.
- Evento de integração.
- Evento de notificação.
- Evento analítico.
- Evento de evidência.
- Evento de exportação.
- Evento de falha.
- Evento de retry.
- Evento de dead-letter.
- Evento de quarentena.
- Evento externo recebido.
- Evento externo normalizado.

### 17.2 Campos mínimos do envelope

```text
event_id
event_name
event_type
event_version
contract_id
contract_version
envelope_version
source_module
owner_module
producer_module
tenant_id
context_id
actor_reference
subject_reference quando aplicável
resource_reference quando aplicável
related_resource_references quando aplicável
permission_code quando aplicável
authorization_decision_reference quando aplicável
policy_references
security_policy_reference quando aplicável
lgpd_policy_reference quando aplicável
retention_policy_reference quando aplicável
masking_policy_reference quando aplicável
sensitivity_level
data_categories
purpose
occurred_at
recorded_at quando aplicável
published_at
correlation_id
causation_id quando derivado
command_reference quando aplicável
request_reference quando aplicável
idempotency_reference quando aplicável
payload_schema_reference
payload_minimized
payload
audit_reference quando aplicável
evidence_reference quando aplicável
secret_reference quando aplicável
error_reference quando aplicável
retry_metadata quando aplicável
dead_letter_metadata quando aplicável
quarantine_metadata quando aplicável
integrity_reference quando aplicável
compatibility_policy
deprecation_policy
```

### 17.3 Separação obrigatória

```text
Comando solicita execução.
Evento comunica fato ocorrido.
Evento de solicitação registrada comunica pedido registrado.
Read model permite leitura autorizada.
Webhook entrega evento a consumidor autorizado.
```

### 17.4 Proibições em eventos

Evento não pode carregar:

- segredo bruto;
- token bruto;
- chave privada;
- credencial bruta;
- biometria bruta;
- vídeo bruto;
- imagem identificável sem política;
- documento completo sem finalidade;
- payload completo de banco;
- entidade interna serializada;
- objeto ORM;
- dado de outro tenant;
- stack trace sensível;
- log com segredo;
- autorização nova.

Regra curta:

Evento comunica fato. Não dá ordem secreta.

---

## 18. Comandos, idempotência e fail-closed

### 18.1 Comando crítico

Todo comando crítico deve conter:

```text
command_id
command_name
command_version
source_module
target_module
tenant_id
context_id
actor_reference
resource_reference
AuthorizationDecision
module_authorization_scope
idempotency_key
correlation_id
requested_at
expires_at quando aplicável
payload minimizado
expected_result_contract
failure_policy
audit_requirement
```

### 18.2 Idempotência obrigatória

Obrigatória para ações que possam duplicar:

- abertura de acesso;
- bloqueio de acesso;
- criação de credencial;
- revogação de credencial;
- cobrança;
- pagamento;
- reserva;
- convite;
- notificação;
- automação;
- exportação;
- evidência;
- conector;
- tema white-label;
- política;
- suporte remoto;
- diagnóstico;
- suspensão;
- restauração.

### 18.3 Fail-closed

Ação crítica deve negar, pausar, quarentenar ou degradar com segurança quando faltar:

- tenant;
- contexto;
- ator;
- recurso;
- owner_module;
- permissão;
- herança;
- licença;
- feature flag;
- AuthorizationDecision válida;
- política Segurança/LGPD;
- audit_reference;
- idempotency_key quando obrigatório;
- escopo do módulo dono.

Regra curta:

Na dúvida, não executa. Registra, nega ou quarentena.

---

## 19. Filas, outbox, inbox e workers

### 19.1 Arquitetura de eventos confiáveis

Todo módulo produtor deve usar outbox ou mecanismo equivalente para eventos publicados.

Todo módulo consumidor deve usar inbox/deduplicação ou mecanismo equivalente para eventos consumidos.

### 19.2 Componentes conceituais

```text
OutboxWriter
OutboxRelay
EventEnvelopePublisher
EventRouter
InboxConsumer
DeduplicationStore
RetryScheduler
DeadLetterHandler
QuarantineHandler
Reprocessor
AuditEventWriter
```

### 19.3 Workers por tipo

```text
contract-worker
notification-worker
automation-worker
integration-worker
gateway-sync-worker
device-health-worker
camera-processing-worker
audit-worker
bi-projection-worker
security-lgpd-worker
support-worker
export-worker
```

### 19.4 Regras dos workers

Workers podem:

- consumir eventos envelopados;
- atualizar read models autorizados;
- processar retry;
- mover para dead-letter;
- abrir quarentena;
- chamar API interna do módulo dono;
- solicitar AuthorizationDecision para ação sensível;
- registrar auditoria;
- mascarar dados;
- emitir eventos derivados.

Workers não podem:

- executar ação sensível sem AuthorizationDecision;
- acessar banco interno de outro módulo;
- transformar evento em comando sem contrato;
- vazar payload bruto;
- reaproveitar decisão expirada;
- ignorar tenant/contexto;
- processar duplicidade sem idempotência/dedup.

---

## 20. EvidenceReference v1

EvidenceReference v1 protege provas.

### 20.1 Quando usar

Usar EvidenceReference quando houver:

- vídeo probatório;
- snapshot;
- clip;
- imagem com valor probatório;
- evento de acesso físico;
- acesso negado;
- acesso concedido;
- pânico;
- alarme;
- documento probatório;
- anexo probatório;
- suporte remoto com valor probatório;
- exportação sensível;
- caso de compliance;
- incidente de segurança;
- cadeia de custódia.

### 20.2 Campos conceituais mínimos

```text
evidence_reference_id
evidence_owner_module
custody_owner_module
source_event_reference quando aplicável
related_resource_reference
related_actor_reference
tenant_id
context_id
evidence_type
sensitivity_level
storage_reference segura
hash_reference quando integridade exigir
retention_policy_reference
masking_policy_reference
access_policy_reference
chain_of_custody_reference
audit_reference
export_control_policy
```

### 20.3 Regras

- EvidenceReference não é a prova bruta.
- EvidenceReference não autoriza visualização.
- Visualização do metadado e visualização do bruto são permissões diferentes.
- Exportação de evidência é crítica.
- Evidência crítica exige AuthorizationDecision.
- Evidência crítica exige cadeia de custódia.
- Evidência crítica exige audit_reference.
- Evidência crítica sem política deve falhar fechado.
- Evento pode carregar evidence_reference, não prova bruta quando referência bastar.

---

## 21. SecretReference v1

SecretReference v1 protege segredos.

### 21.1 Quando usar

Usar SecretReference para:

- senha técnica;
- token de API;
- refresh token;
- client secret;
- segredo de webhook;
- chave privada;
- chave simétrica;
- material criptográfico;
- certificado sensível;
- credencial de gateway;
- credencial de dispositivo;
- segredo de pareamento;
- credencial de conector;
- credencial de provedor externo;
- assinatura de webhook;
- segredo de domínio customizado;
- token de suporte remoto.

### 21.2 Campos conceituais mínimos

```text
secret_reference_id
contract_id
contract_version
reference_version
owner_module
custody_module
requesting_module quando aplicável
allowed_consumer_modules
tenant_id quando aplicável
context_id quando aplicável
purpose
scope
rotation_policy_reference
revocation_policy_reference
expiration_policy_reference quando aplicável
access_policy_reference
audit_policy_reference
sensitivity_level = Crítico
raw_secret_allowed = never
```

### 21.3 Regras

- Segredo bruto nunca trafega.
- Segredo bruto nunca entra em evento.
- Segredo bruto nunca entra em log.
- Segredo bruto nunca entra em URL.
- Segredo bruto nunca entra em read model.
- Segredo bruto nunca entra em exportação.
- SecretReference não autoriza uso por si só.
- Toda ação envolvendo segredo exige AuthorizationDecision válida.
- Falha de segredo crítico é fail-closed.
- Rotação, revogação, expiração e suspeita de vazamento devem gerar auditoria.

Frase curta:

Segredo não viaja. Referência aponta.

---

## 22. Dados sensíveis e LGPD

O NoduOS deve nascer privacy by design.

### 22.1 Categorias protegidas

- dados pessoais;
- documento pessoal;
- telefone;
- e-mail;
- endereço;
- placa;
- dados financeiros;
- dados de visitante;
- imagem;
- vídeo;
- biometria;
- logs de acesso físico;
- evidências;
- suporte remoto;
- diagnóstico técnico sensível;
- IP interno;
- rota local;
- credenciais;
- segredos;
- dados de conector externo;
- dados de exportação;
- dados de auditoria;
- dados de segurança.

### 22.2 PayloadSensitivityGate

O Blueprint recomenda uma camada conceitual chamada:

```text
PayloadSensitivityGate
```

Ela não é módulo novo. É uma regra arquitetural aplicada antes de:

- responder API;
- publicar evento;
- gerar read model;
- enviar webhook;
- criar exportação;
- gravar log;
- renderizar tela;
- enviar notificação;
- entregar dados a integração externa.

Ela deve validar:

- finalidade;
- categoria de dado;
- sensibilidade;
- máscara;
- retenção;
- consentimento quando aplicável;
- política LGPD;
- AuthorizationDecision quando aplicável;
- audit_reference;
- minimização;
- proibição de bruto.

### 22.3 Regra de minimização

Na dúvida:

```text
usar referência;
aplicar máscara;
reduzir payload;
exigir finalidade;
registrar auditoria;
falhar fechado quando crítico.
```

---

## 23. Auditoria

Auditoria é obrigatória para ações importantes, sensíveis e críticas.

### 23.1 Eventos auditáveis obrigatórios

- login;
- logout;
- troca de contexto;
- MFA;
- criação de usuário;
- alteração de permissão;
- alteração de herança;
- alteração de módulo ativo;
- alteração de licença;
- alteração de feature flag;
- abertura de acesso;
- negação de acesso;
- visualização de câmera;
- exportação de vídeo;
- criação de convite;
- uso de convite;
- alteração financeira;
- pagamento;
- inadimplência;
- alteração de dispositivo;
- alteração de gateway;
- alteração de organização;
- alteração de plano;
- acesso a dado pessoal;
- exportação de relatório;
- alteração de integração;
- instalação de conector;
- alteração de white-label sensível;
- suporte remoto;
- consulta sensível;
- política de segurança;
- política LGPD;
- evento de quarentena;
- dead-letter crítica.

### 23.2 Campos mínimos

```text
audit_id
tenant_id
context_id
actor_reference
actor_role
action
resource_reference
module_scope
authorization_decision_reference quando aplicável
before_reference ou before_minimized quando aplicável
after_reference ou after_minimized quando aplicável
ip_masked quando aplicável
device_info_reference quando aplicável
user_agent_masked quando aplicável
correlation_id
causation_id quando aplicável
timestamp
sensitivity_level
policy_references
result
reason_code minimizado
```

### 23.3 Separação obrigatória

Auditoria registra.
Auditoria não decide.
Auditoria não executa.
Auditoria não vira banco compartilhado.
Auditoria não substitui logs primários do módulo dono.

---

## 24. Storage

Storage deve ser tratado por tipo e sensibilidade.

### 24.1 Tipos de storage

```text
public-brand-assets
white-label-assets
private-documents
private-attachments
evidence-storage
video-evidence-storage
export-packages
secret-custody-reference
backup-storage
audit-archive
```

### 24.2 Regras por tipo

Ativos públicos de marca podem ser servidos por URL controlada, desde que não contenham segredo.

Arquivos privados devem usar FileAttachmentReference.

Evidências devem usar EvidenceReference.

Segredos devem usar SecretReference.

Exportações sensíveis devem ter expiração, retenção, política de exportação e auditoria.

Vídeos, snapshots e clips com valor probatório devem usar EvidenceReference.

Certificados, chaves privadas e credenciais devem usar SecretReference.

### 24.3 Proibições

É proibido:

- URL pública permanente para evidência sensível;
- path bruto em evento;
- bucket sensível em payload;
- segredo em storage de arquivo comum;
- credencial em variável exposta;
- certificado privado em tema white-label;
- exportação sem retenção;
- arquivo sensível sem auditabilidade;
- storage como autorização.

---

## 25. Observabilidade

A plataforma deve prever observabilidade técnica e operacional desde o início.

### 25.1 Itens obrigatórios

- logs estruturados;
- métricas;
- tracing distribuído;
- correlation_id;
- causation_id;
- status de serviços;
- health check por módulo;
- health check de workers;
- status de filas;
- status de outbox;
- status de inbox;
- status de dead-letter;
- status de quarentena;
- status de gateways;
- status de dispositivos;
- alertas;
- painel de saúde;
- histórico de falhas;
- diagnóstico técnico autorizado.

### 25.2 Regras

- Log não deve carregar segredo bruto.
- Log não deve carregar biometria bruta.
- Log não deve carregar evidência bruta.
- Erro técnico deve ser mascarado para usuário.
- Stack trace sensível não deve ir para frontend.
- Correlation ID deve acompanhar fluxos distribuídos.
- Eventos críticos devem ser rastreáveis.
- Falhas persistentes devem ir para dead-letter ou quarentena.

---

## 26. Testes obrigatórios

O Blueprint exige bateria de testes antes de produção.

### 26.1 Tipos de teste

- testes unitários de domínio;
- testes de application service;
- testes de contrato;
- testes de API interna;
- testes de EventEnvelope;
- testes de comando crítico;
- testes de idempotência;
- testes de outbox;
- testes de inbox/deduplicação;
- testes de retry;
- testes de dead-letter;
- testes de quarentena;
- testes de AuthorizationDecision;
- testes de ResourceReference;
- testes de EvidenceReference;
- testes de SecretReference;
- testes de tenant/context isolation;
- testes de LGPD e máscara;
- testes de auditoria;
- testes de feature flag;
- testes de licença;
- testes de frontend permission-aware;
- testes de white-label;
- testes de gateway-agent;
- testes de adaptadores de hardware;
- testes de observabilidade;
- testes de deploy;
- testes de rollback;
- testes anti-acoplamento.

### 26.2 Checklist anti-quebra

Antes de aprovar alteração:

```text
O módulo alterado mantém seu domínio?
Nenhum outro módulo acessa seu banco interno?
Os contratos seguem versão compatível?
Eventos toleram campos adicionais?
Comandos críticos têm idempotency_key?
Ações sensíveis exigem AuthorizationDecision?
ResourceReference preserva no_domain_transfer?
Payload sensível foi minimizado?
Segredos estão por SecretReference?
Evidências estão por EvidenceReference?
Read model continua sem transferência de domínio?
Auditoria foi registrada?
Tenant/contexto foram validados?
Falha crítica é fail-closed?
```

---

## 27. Deploy e ambientes

### 27.1 Ambientes recomendados

```text
local
dev
staging
production
sandbox-integration
```

### 27.2 Componentes de deploy

- API;
- frontends;
- mobile build;
- worker runtime;
- gateway-agent;
- banco;
- storage;
- fila/broker;
- observabilidade;
- job scheduler;
- backup;
- restore;
- secrets custody;
- CDN/assets quando aplicável.

### 27.3 Regras de deploy

- migrations devem ser reversíveis quando possível;
- contratos incompatíveis exigem versionamento;
- feature flags devem controlar ativação;
- secrets devem usar SecretReference;
- logs e métricas devem estar ativos antes de produção;
- deploy deve validar health checks;
- rollback deve preservar dados;
- workers devem ser drenados com segurança;
- outbox não pode perder evento;
- inbox não pode duplicar efeito;
- backup e restore devem ser testados;
- falha de um módulo não deve derrubar a plataforma inteira.

---

## 28. Gateway-agent e mundo físico

Gateway Local / Mikrotik / Tunnel é parte central do produto.

### 28.1 Gateway-agent

O gateway-agent deve:

- estabelecer tunnel seguro;
- identificar organização/contexto autorizado;
- comunicar status;
- reportar conectividade;
- reportar latência;
- sincronizar eventos locais;
- executar comandos técnicos autorizados;
- manter buffer local quando aplicável;
- publicar eventos envelopados;
- proteger credenciais por SecretReference;
- registrar logs técnicos;
- operar com fail-closed em ação crítica.

### 28.2 O que o gateway-agent não faz

O gateway-agent não:

- decide autorização final;
- abre porta por regra própria;
- visualiza câmera como VMS;
- executa automação comercial;
- substitui Dispositivos;
- substitui Controle de Acesso;
- substitui Câmeras / VMS;
- substitui Alarmes;
- substitui Segurança e LGPD;
- substitui Auditoria;
- vaza credencial bruta;
- transporta payload completo sem contrato.

### 28.3 Adaptadores de hardware

A plataforma deve ser hardware agnostic.

Adaptadores possíveis:

- Mikrotik;
- Hikvision;
- Intelbras;
- Control iD;
- ZKTeco;
- Dahua;
- Axis;
- JFL;
- PPA;
- ONVIF;
- RTSP;
- MQTT;
- SIP quando aplicável;
- provedores externos plugáveis.

Regra:

Módulo principal fala com interface genérica. Marca/protocolo entra por adaptador.

---

## 29. Integrações externas e Marketplace

Marketplace de Integrações governa conectores.

### 29.1 Regras de integração

Toda integração externa deve declarar:

- connector_id;
- owner_module;
- provider_reference;
- tenant/contexto;
- escopo;
- permissões;
- AuthorizationDecision quando sensível;
- SecretReference para credenciais;
- EventEnvelope para eventos normalizados;
- ResourceReference para recursos vinculados;
- EvidenceReference quando houver prova;
- política de retry;
- política de dead-letter;
- política de revogação;
- rate limit;
- auditoria;
- LGPD quando aplicável.

### 29.2 Webhooks externos

Webhooks externos exigem:

- assinatura;
- segredo por SecretReference;
- rotação;
- revogação;
- tenant/contexto quando aplicável;
- escopo;
- payload minimizado;
- retry controlado;
- dead-letter;
- auditoria;
- política de terceiro;
- avaliação de Segurança e LGPD.

Evento externo recebido não é confiável até ser validado, normalizado e envelopado.

---

## 30. Ordem técnica inicial de programação

Esta seção define ordem técnica inicial, não MVP e não fase de simplificação.

A arquitetura final continua considerada desde o início. A ordem abaixo apenas organiza o acendimento seguro dos sistemas.

### 30.1 Ordem recomendada

```text
1. Criar workspace/repositório com estrutura modular.
2. Criar padrões globais de lint, testes, build, env e documentação.
3. Criar packages transversais mínimos: contracts, correlation, idempotency, tenant-context, observability.
4. Criar Core Platform estrutural: UserAccount, Session, Tenant, Context, Role, Permission, PermissionGrant, InheritanceGrant.
5. Criar Contract Registry inicial.
6. Criar TenantContextResolver.
7. Criar autenticação, sessão e MFA base.
8. Criar ModuleRegistry, License, Entitlement e FeatureFlag.
9. Criar AuthorizationDecision v1 no Core.
10. Criar ResourceReference v1 no Core/contratos transversais.
11. Criar Audit base e SecurityLog.
12. Criar EventEnvelope v1.
13. Criar outbox/inbox/deduplicação.
14. Criar worker-runtime básico com retry, dead-letter e quarentena.
15. Criar PayloadSensitivityGate conceitual aplicado a API/eventos/read models.
16. Criar SecretReference v1 como contrato e integração com custódia de segredos.
17. Criar EvidenceReference v1 como contrato e storage seguro conceitual.
18. Criar módulos de base: Master, Parceiros, Organizações, Pessoas e Clientes, Estrutura.
19. Criar Gateway Local / Mikrotik / Tunnel e gateway-agent.
20. Criar Dispositivos.
21. Criar Controle de Acesso.
22. Criar Câmeras / VMS.
23. Criar Alarmes.
24. Criar Financeiro.
25. Criar Convites e Visitantes.
26. Criar Tickets.
27. Criar Mural Informativo.
28. Criar Reservas.
29. Criar White-label.
30. Criar Notificações.
31. Criar Automações.
32. Criar Marketplace de Integrações.
33. Criar Relatórios / BI por read models autorizados.
34. Criar Auditoria e Compliance avançado.
35. Criar Segurança e LGPD avançado.
36. Criar Suporte e Operação.
37. Consolidar observabilidade, testes, deploy, backup, restore e hardening.
```

### 30.2 Regras da ordem técnica

- A ordem não reduz escopo final.
- A ordem não autoriza atalhos.
- A ordem não transforma módulos futuros em improviso.
- Contratos devem nascer antes dos endpoints finais.
- Domínio deve nascer antes das telas.
- Autorização deve nascer antes de ações críticas.
- EventEnvelope deve nascer antes de eventos intermodulares.
- Auditabilidade deve nascer antes de produção.

Frase curta:

Não é fase. É sequência segura de ignição.

---

## 31. Riscos técnicos e mitigação

| Risco | Impacto | Mitigação obrigatória |
|---|---|---|
| Monólito acoplado | Quebra de módulos e retrabalho | Modular monolith distribuível com fronteiras fortes |
| Banco compartilhado | Acoplamento invisível | Schemas por domínio e ResourceReference |
| Core Deus operacional | Centralização indevida | Core autoriza; módulo dono executa |
| Autorização paralela | Bypass de segurança | AuthorizationDecision v1 no Core |
| Evento virar comando | Execução indevida | Separar Command/Event/RequestRegistered |
| Read model virar banco | Transferência de domínio | no_domain_transfer e staleness_policy |
| Frontend decidir permissão | Bypass | Backend valida tudo de novo |
| Segredo em payload | Vazamento crítico | SecretReference v1 |
| Evidência bruta em evento | Violação LGPD/custódia | EvidenceReference v1 |
| Biometria bruta trafegando | Alto risco LGPD | Referência, consentimento e política |
| Worker executando sem autorização | Ação indevida | AuthorizationDecision por ação sensível |
| Gateway executando domínio | Violação modular | Gateway transporta/conecta, módulo dono executa |
| Integração presa a fabricante | Baixa extensibilidade | Adaptadores plugáveis |
| Falha sem dead-letter | Perda ou loop | Retry, dead-letter, quarentena |
| Exportação sem auditoria | Risco compliance | Audit/export policy |
| Testes sem contratos | Regressão | Contract tests obrigatórios |

---

## 32. Checklist de prontidão para programação

A programação pode iniciar quando estes itens estiverem aceitos:

```text
[ ] Repositório modular definido.
[ ] Padrão de módulos definido.
[ ] Contract-first aceito.
[ ] Core Platform priorizado como núcleo obrigatório.
[ ] TenantContextResolver definido.
[ ] AuthorizationDecision v1 definido como gate obrigatório.
[ ] ResourceReference v1 definido como referência intermodular.
[ ] EventEnvelope v1 definido como envelope obrigatório.
[ ] Outbox/inbox/deduplicação definidos.
[ ] Idempotência obrigatória para comandos críticos.
[ ] Fail-closed obrigatório para ações críticas.
[ ] SecretReference v1 aplicado a segredos.
[ ] EvidenceReference v1 aplicado a provas.
[ ] PayloadSensitivityGate definido.
[ ] Banco por domínio definido.
[ ] Read models sem transferência de domínio definidos.
[ ] Auditoria mínima definida.
[ ] Observabilidade mínima definida.
[ ] Testes de contrato e autorização definidos.
[ ] Deploy com ambientes, rollback, backup e restore definido.
[ ] Gateway-agent delimitado.
[ ] Ordem técnica inicial aceita como sequência segura, não MVP.
```

---

## 33. Atualização sugerida para 03_DECISOES_OFICIAIS.md

Status desta seção: decisão aprovada e consolidada nos documentos centrais.

# DEC-197: Blueprint técnico da aplicação como trilho oficial de programação do NoduOS

## Tema

Blueprint técnico, transição para programação, organização da aplicação, modularidade, contratos, autorização, eventos, dados sensíveis, auditoria, testes e deploy.

## Decisão

O NoduOS passa a adotar o Blueprint técnico da aplicação como documento oficial de transição entre governança arquitetural e programação.

O Blueprint técnico deve preservar a raiz DEC-196, a modularidade oficial, o Core Platform como núcleo obrigatório, os módulos donos como executores de seus domínios, os contratos públicos versionados, o EventEnvelope v1, o EvidenceReference v1, o SecretReference v1, o AuthorizationDecision v1 e o ResourceReference v1.

O Blueprint técnico define a arquitetura recomendada como modular distribuível, iniciando como modular monolith com fronteiras fortes, preparado para separação futura de workers, filas, gateway-agent, serviços críticos e integrações sem reescrever domínio.

A programação deve seguir abordagem contract-first, modular-first e authorization-first:

- contrato antes de endpoint;
- domínio antes de tabela;
- autorização antes de ação;
- referência antes de payload;
- evento antes de read model;
- auditoria antes de confiança;
- LGPD antes de dado bruto;
- teste antes de deploy.

A ordem técnica inicial definida no Blueprint não é MVP, não é fase provisória e não reduz a arquitetura final. Ela apenas organiza a sequência segura de programação.

## Motivo

Evitar que a programação comece com acoplamento, banco compartilhado, autorização paralela, eventos ambíguos, payloads brutos, ausência de auditoria, violação de LGPD, workers sem idempotência, integrações improvisadas ou frontend decidindo autorização final.

Garantir que o início da construção técnica obedeça a raiz oficial e preserve escalabilidade, segurança, modularidade, multi-tenancy, auditabilidade, white-label, hardware agnostic e integração com espaços físicos conectados.

## Impacto

Todos os próximos passos de programação devem obedecer este Blueprint.

Nenhum módulo deve iniciar implementação sem fronteira, contrato, tenant/contexto, autorização, dados sensíveis, eventos, auditoria e testes definidos.

Endpoints, tabelas, workers, eventos, read models, webhooks, integrações, telas e deploys devem respeitar a abordagem contract-first, modular-first e authorization-first.

A arquitetura final continua sendo considerada desde o início, sem MVP e sem fases de simplificação.

## Status

Aprovada

## Data

2026-06-27

---

## 34. Atualizações consolidadas para 00_BIBLIA_DO_PROJETO.md

Adicionar seção:

```text
## Regra transversal: Blueprint técnico da aplicação

O NoduOS adota o Blueprint técnico da aplicação como trilho oficial de transição entre governança arquitetural e programação.

O Blueprint não substitui a Bíblia, o Mapa de Módulos, as Regras de Arquitetura, as Decisões Oficiais, o Catálogo de Contratos, as Matrizes Técnicas ou os detalhamentos transversais.

Ele organiza a implementação técnica preservando:

- Core Platform obrigatório;
- modularidade final;
- contratos públicos versionados;
- tenant/contexto;
- AuthorizationDecision v1;
- ResourceReference v1;
- EventEnvelope v1;
- EvidenceReference v1;
- SecretReference v1;
- idempotência;
- fail-closed;
- auditoria;
- LGPD;
- baixa dependência entre módulos;
- hardware agnostic;
- white-label;
- mobile first.

A programação deve seguir abordagem contract-first, modular-first e authorization-first.
```

---

## 35. Atualizações consolidadas para 02_REGRAS_DE_ARQUITETURA.md

Adicionar seção:

```text
## Regra arquitetural: Blueprint técnico da aplicação

A aplicação deve ser organizada como arquitetura modular distribuível, podendo iniciar como modular monolith com fronteiras fortes, desde que preserve separação por domínio, contratos públicos, dados próprios por módulo, APIs internas, eventos, read models autorizados e proibição de acesso direto ao banco ou lógica interna de outro módulo.

Toda implementação deve seguir:

- contrato antes de endpoint;
- domínio antes de tabela;
- autorização antes de ação;
- referência antes de payload;
- evento antes de read model;
- auditoria antes de confiança;
- LGPD antes de dado bruto;
- teste antes de deploy.

A ordem técnica inicial de programação não é MVP e não reduz a arquitetura final.
```

---

## 36. Atualizações consolidadas para 04_PROMPTS_DE_TRABALHO.md

Adicionar prompt oficial:

```text
# Prompt oficial - programação orientada pelo Blueprint técnico

Estamos trabalhando no projeto NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada.

Use obrigatoriamente a raiz DEC-197 e o Blueprint técnico da aplicação como trilho de programação.

Regras obrigatórias:

- Não programar fora da fronteira do módulo dono.
- Não criar endpoint sem contrato público.
- Não criar tabela sem domínio do módulo.
- Não criar ação sensível sem AuthorizationDecision v1.
- Não apontar recurso intermodular sem ResourceReference v1.
- Não publicar evento intermodular sem EventEnvelope v1.
- Não trafegar segredo bruto; usar SecretReference v1.
- Não trafegar evidência bruta quando EvidenceReference bastar.
- Não usar read model como banco compartilhado.
- Não usar evento como comando.
- Não permitir frontend decidir autorização final.
- Não criar MVP ou fase provisória.
- Usar idempotency_key em comandos críticos.
- Usar fail-closed em ações críticas.
- Validar tenant, contexto, ator, recurso, permissão, licença, feature flag e política.
- Gerar testes de contrato, autorização, tenant/contexto, idempotência e fail-closed.

Antes de gerar código, indique:

1. módulo dono;
2. contrato afetado;
3. tenant/contexto;
4. AuthorizationDecision exigida ou não;
5. ResourceReference exigida ou não;
6. EventEnvelope exigido ou não;
7. dados sensíveis envolvidos;
8. auditoria exigida;
9. comportamento de falha;
10. testes obrigatórios.
```

---

## 37. Resumo final aprovado do Blueprint

O Blueprint técnico da aplicação NoduOS fica consolidado como o mapa de hiperespaço entre a raiz arquitetural e a programação.

Ele determina que a construção técnica deve nascer:

- modular;
- contract-first;
- authorization-first;
- event-driven;
- multi-tenant;
- API-first;
- privacy by design;
- security by design;
- auditável;
- idempotente em ações críticas;
- fail-closed em ações críticas;
- white-label ready;
- hardware agnostic;
- preparada para gateway local e mundo físico;
- preparada para workers, filas, outbox, inbox, retry, dead-letter e quarentena;
- preparada para testes de contrato, autorização, tenant/contexto e anti-acoplamento;
- preparada para deploy observável e reversível.

Frase final:

O Blueprint organiza o templo. O Core guarda a autorização. Os módulos preservam seus domínios. Eventos contam o que aconteceu. Referências apontam sem tomar posse. Segredos não viajam. Evidências não vazam. Auditoria registra a trilha. E a programação segue pela rota segura, sem cair no Lado Sombrio do acoplamento.



---

## 38. Consolidação física na raiz

Este Blueprint foi aplicado como documento técnico raiz oficial:

```text
13_BLUEPRINT_TECNICO_APLICACAO_NODUOS.md
```

Estado após aplicação:

```text
DEC-197 consolidada: Blueprint técnico da aplicação como trilho oficial de programação do NoduOS.
Última DEC consolidada na raiz: DEC-197.
Próxima DEC livre: DEC-198.
Próxima etapa recomendada: Programação inicial do Core Platform orientada pelo Blueprint técnico.
```

A partir desta consolidação, qualquer código, endpoint, tabela, worker, evento, integração, tela ou deploy deve obedecer ao Blueprint técnico, sem substituir os documentos centrais da raiz.
