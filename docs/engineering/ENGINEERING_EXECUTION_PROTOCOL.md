# ENGINEERING EXECUTION PROTOCOL - NoduOS

Projeto: NoduOS  
Descrição oficial: SaaS Modular de Gestão de Espaços e Segurança Unificada  
Conceito técnico: Sistema Operacional Modular para Espaços Físicos Conectados  
Conceito de marca: Conexão que impulsiona  
Nome do protocolo: NODUOS BLOCK-GATE PROGRAMMING  
Nome em português: PROGRAMAÇÃO POR BLOCOS COM PORTÕES DE AUDITORIA  
Versão inicial: 1.0.0  
Status: Aprovado para uso operacional após validação local  
Data: 2026-07-02  
Tipo de documento: Protocolo oficial de execução de engenharia  
Escopo: planejamento, execução, correção, validação, commit, tag, log, manifesto e auditoria de blocos operacionais  
Relação com DEC-197: complementa o Blueprint técnico da aplicação como modo operacional de programação  
Relação com o Core Platform concluído: governa os próximos blocos após o Core Platform estrutural concluído em `2d8b2eb` e tag `core-platform-complete-v1`  
DEC oficial criada nesta etapa: nenhuma  
DEC futura sugerida: avaliar, em etapa própria, se este protocolo deve ser consolidado como nova DEC após auditoria central  

---

## 1. Natureza do protocolo

Este protocolo define como o NoduOS deve ser programado a partir da fundação estrutural e do Core Platform estrutural já concluídos.

O objetivo é permitir programação eficiente, agressiva e segura, reduzindo microauditorias e mantendo portões fortes de validação.

Ele não cria módulo comercial, endpoint funcional, banco real, migration real, worker real, deploy, PM2, Nginx, firewall ou alteração em `/opt/noduos/current` e `/opt/noduos/releases`.

Regra curta:

```text
O chat conversa.
O documento manda.
A payload executa.
O checker confirma.
A auditoria decide.
```

---

## 2. Relação com a raiz oficial

A raiz governa.  
O Blueprint organiza.  
O código obedece.

Este protocolo obedece:

1. `00_BIBLIA_DO_PROJETO.md`
2. `01_MAPA_DE_MODULOS.md`
3. `02_REGRAS_DE_ARQUITETURA.md`
4. `03_DECISOES_OFICIAIS.md`
5. `04_PROMPTS_DE_TRABALHO.md`
6. `05_CATALOGO_DE_CONTRATOS_PUBLICOS.md`
7. `06_MATRIZ_TECNICA_PERMISSOES_POR_CONTRATO.md`
8. `07_MATRIZ_TECNICA_DADOS_SENSIVEIS_POR_CONTRATO.md`
9. `08_DETALHAMENTO_EVENTENVELOPE_V1.md`
10. `09_DETALHAMENTO_EVIDENCEREFERENCE_V1.md`
11. `10_DETALHAMENTO_SECRETREFERENCE_V1.md`
12. `11_DETALHAMENTO_AUTHORIZATIONDECISION_V1.md`
13. `12_DETALHAMENTO_RESOURCEREFERENCE_V1.md`
14. `13_BLUEPRINT_TECNICO_APLICACAO_NODUOS.md`
15. `IDENTIDADE_OFICIAL_NODUOS.md`
16. `RELATORIO_CONFORMIDADE_RAIZ_NODUOS_DEC_197.md`

Frase guia obrigatória:

```text
Contrato antes de endpoint.
Domínio antes de tabela.
Autorização antes de ação.
Referência antes de payload.
Evento antes de read model.
Auditoria antes de confiança.
LGPD antes de dado bruto.
Teste antes de deploy.
```

Regra central obrigatória:

```text
Política influencia.
Core decide.
Módulo dono executa.
Auditoria registra.
```

---

## 3. Definição do NODUOS BLOCK-GATE PROGRAMMING

NODUOS BLOCK-GATE PROGRAMMING é o modelo oficial de execução em que cada bloco operacional resolve um objetivo inteiro dentro de um chat operacional, com payloads completas, correções internas, validações completas, commit local, tag local, log, manifesto e relatório final.

O chat central de auditoria não deve ser acionado para cada erro simples de typecheck, import quebrado, falso positivo de checker, ajuste de payload ou pequena correção interna.

O chat central volta a atuar no fim do bloco ou quando houver alteração estrutural relevante.

Regra curta:

```text
Microerro fica no chat operacional.
Marco estrutural volta ao chat central.
```

---

## 4. Papéis dos chats

### 4.1 Chat central de auditoria

Responsável por:

- decidir blocos;
- aprovar prompts operacionais;
- auditar relatório final;
- consolidar parecer;
- indicar próxima etapa;
- bloquear desvios;
- preservar a raiz oficial;
- avaliar impactos estruturais.

Não deve:

- corrigir microerro operacional;
- programar cada arquivo;
- interromper chat operacional a cada falha pequena;
- substituir checker local;
- consolidar decisão sem evidência;
- aceitar relatório sem log, manifesto, commit e tag quando aplicável.

### 4.2 Chat operacional

Responsável por:

- diagnosticar;
- planejar;
- gerar payloads;
- executar correções dentro do bloco;
- validar;
- produzir commit local;
- produzir tag local;
- gerar log;
- gerar manifesto;
- produzir relatório final;
- devolver pacote ao chat central.

Não deve:

- criar DEC oficial;
- mudar raiz sem autorização;
- criar módulo fora do escopo;
- pedir retorno ao chat central em falha simples;
- esconder erro;
- fazer push;
- criar remote sem autorização;
- tocar PM2, Nginx, firewall, `/opt/noduos/current` ou `/opt/noduos/releases` fora de bloco próprio;
- reduzir escopo silenciosamente;
- forçar commit com validação quebrada.

---

## 5. Estrutura obrigatória de bloco operacional

Todo bloco operacional deve declarar:

1. Nome.
2. Objetivo.
3. Tipo do bloco.
4. Escopo permitido.
5. Escopo proibido.
6. Fontes oficiais usadas.
7. Estado inicial esperado.
8. Arquivos a criar.
9. Arquivos a alterar.
10. Scripts a alterar.
11. Contratos afetados.
12. Tenant/contexto afetado.
13. AuthorizationDecision exigida ou dispensada.
14. ResourceReference exigida ou dispensada.
15. EventEnvelope exigido ou dispensado.
16. EvidenceReference exigida ou dispensada.
17. SecretReference exigida ou dispensada.
18. Dados sensíveis envolvidos.
19. Auditoria exigida.
20. Idempotência exigida.
21. Comportamento fail-closed.
22. Testes esperados.
23. Validações obrigatórias.
24. Critérios de aceite.
25. Critérios de bloqueio.
26. Commit esperado.
27. Tag esperada.
28. Logs esperados.
29. Manifestos esperados.
30. Relatório final esperado.
31. Próxima etapa sugerida.

---

## 6. Tipos oficiais de blocos

### 6.1 DOC-BLOCK

Uso: documentação, protocolo, planejamento, relatório, checker documental ou governança técnica sem runtime.

Pode:

- criar documentação;
- criar checker estrutural;
- atualizar script npm de validação;
- criar relatório técnico;
- criar log e manifesto;
- commit local e tag local.

Não pode:

- criar endpoint funcional;
- criar banco real;
- criar migration real;
- criar módulo comercial;
- criar worker real;
- criar deploy;
- tocar PM2, Nginx, firewall, `/opt/noduos/current` ou `/opt/noduos/releases`.

Validações mínimas:

- `npm run check:engineering-protocol`, quando aplicável;
- `npm run check:all`;
- `npm run typecheck`;
- `npm run test:core`, quando existir;
- working tree limpo após commit;
- remote ausente.

Risco: baixo.

Auditoria central: obrigatória depois do bloco.

### 6.2 CONTRACT-BLOCK

Uso: contratos públicos internos, payloads, versionamento, ErrorContract, permissões e dados sensíveis.

Pode:

- criar contratos públicos versionados;
- criar schemas conceituais ou técnicos;
- criar testes de contrato;
- criar checker de contratos.

Não pode:

- criar endpoint funcional antes do contrato aprovado;
- criar banco real;
- implementar domínio operacional fora do contrato;
- expor segredo bruto, evidência bruta ou payload completo de domínio.

Validações mínimas:

- `npm run check:contracts`, quando existir;
- `npm run check:all`;
- testes de compatibilidade;
- testes de payload proibido.

Risco: baixo a médio. Alto quando alterar contrato transversal.

Auditoria central: obrigatória depois. Obrigatória antes se alterar contrato público raiz ou transversal.

### 6.3 CORE-BLOCK

Uso: Core Platform, autorização, tenant, contexto, usuários, permissões, licenças, auditoria, segurança, LGPD e event bus.

Pode:

- criar domínio puro do Core;
- criar application services do Core;
- criar contratos internos do Core;
- criar testes de autorização, tenant/contexto, idempotência e fail-closed.

Não pode:

- executar domínio de módulo comercial;
- abrir porta, visualizar câmera, gerar cobrança, criar reserva, criar convite ou executar regra operacional alheia;
- emitir autorização sem contexto, escopo, ator, recurso, política e auditoria.

Validações mínimas:

- `npm run check:core`;
- `npm run test:core`;
- `npm run check:all`;
- testes negativos.

Risco: médio a alto.

Auditoria central: obrigatória depois. Obrigatória antes se alterar AuthorizationDecision, ResourceReference, EventEnvelope, EvidenceReference ou SecretReference.

### 6.4 API-BOUNDARY-BLOCK

Uso: boundary interna, DTO, command handler, query handler, error envelope e interface técnica sem endpoint público funcional, salvo autorização explícita.

Pode:

- criar command handlers;
- criar query handlers;
- criar DTOs;
- criar error envelopes;
- declarar tenant context;
- declarar authorization gate;
- declarar audit requirement.

Não pode:

- criar endpoint funcional sem Gate 6;
- permitir frontend decidir autorização;
- expor payload sensível sem política;
- acessar banco interno de outro módulo.

Validações mínimas:

- `npm run check:api`, quando existir;
- testes de autorização;
- testes de tenant/contexto;
- testes de erro;
- `npm run check:all`.

Risco: médio.

Auditoria central: obrigatória depois.

### 6.5 RUNTIME-BLOCK

Uso: servidor técnico mínimo, healthcheck, readiness, request context, correlation e error envelope.

Pode:

- criar runtime mínimo;
- criar healthcheck;
- criar readiness;
- criar correlation id;
- criar request context;
- criar security headers;
- criar erro padronizado.

Não pode:

- criar endpoint de negócio;
- criar domínio comercial;
- criar banco;
- criar deploy;
- tocar PM2, Nginx, firewall, `/opt/noduos/current` ou `/opt/noduos/releases`.

Validações mínimas:

- testes de runtime;
- testes de health/readiness;
- testes de erro;
- `npm run check:all`.

Risco: médio.

Auditoria central: obrigatória depois.

### 6.6 PERSISTENCE-BLOCK

Uso: banco real, migrations, repositories, rollback, backup, audit store e idempotency store.

Pode:

- criar schema por domínio;
- criar migrations versionadas;
- criar repository do módulo dono;
- criar rollback planejado;
- criar backup planejado;
- criar stores técnicos autorizados.

Não pode:

- criar banco compartilhado;
- permitir módulo acessar tabela interna de outro;
- usar read model como fonte primária;
- criar migration sem rollback;
- criar tabela sem domínio e contrato.

Validações mínimas:

- `npm run check:migrations`, quando existir;
- `npm run test:persistence`, quando existir;
- backup/rollback documentado;
- `npm run check:all`.

Risco: alto.

Auditoria central: obrigatória antes e depois.

### 6.7 AUTH-BLOCK

Uso: autenticação real, sessão, MFA, credenciais, tokens e fluxos sensíveis de login.

Pode:

- implementar autenticação;
- implementar sessão;
- implementar MFA;
- implementar política de credenciais;
- implementar trilha de segurança.

Não pode:

- logar segredo bruto;
- trafegar token bruto em evento;
- criar autorização paralela ao Core;
- permitir fail-open em autenticação;
- expor credencial em erro, log, relatório ou read model.

Validações mínimas:

- testes de autenticação;
- testes negativos;
- testes de expiração;
- testes de segredo;
- `npm run check:all`.

Risco: alto.

Auditoria central: obrigatória antes e depois.

### 6.8 MODULE-BLOCK

Uso: módulo comercial ou operacional.

Pode:

- implementar domínio do módulo dono;
- implementar contratos aprovados;
- implementar eventos aprovados;
- implementar read models autorizados;
- implementar testes de isolamento.

Não pode:

- recriar Core Platform;
- emitir AuthorizationDecision final;
- acessar banco interno de outro módulo;
- executar domínio alheio;
- criar módulo fora do Mapa Oficial;
- usar frontend como decisor final.

Validações mínimas:

- testes de isolamento;
- testes de contratos;
- testes de autorização;
- testes de tenant/contexto;
- `npm run check:all`.

Risco: alto.

Auditoria central: obrigatória antes e depois.

### 6.9 INTEGRATION-BLOCK

Uso: integração externa, hardware, gateway, webhook, conector, adaptador e provider.

Pode:

- criar adaptador plugável;
- criar conector;
- criar webhook assinado;
- criar integração por contrato;
- criar retry/dead-letter/quarentena.

Não pode:

- prender contrato principal a uma marca;
- trafegar segredo bruto;
- executar ação física sem AuthorizationDecision;
- expor IP, rota, credencial, vídeo, biometria ou evidência bruta sem política;
- ignorar fail-closed.

Validações mínimas:

- testes de assinatura;
- testes de segredo por referência;
- testes de retry/dead-letter;
- testes de autorização;
- `npm run check:all`.

Risco: alto a crítico.

Auditoria central: obrigatória antes e depois.

### 6.10 DEPLOY-BLOCK

Uso: release, PM2, Nginx, firewall, `/opt/noduos/current`, `/opt/noduos/releases`, produção e rollback.

Pode:

- preparar release;
- tocar `/opt/noduos/current` e `/opt/noduos/releases` quando explicitamente autorizado;
- configurar PM2, Nginx ou firewall quando explicitamente autorizado;
- criar healthcheck de release;
- criar rollback;
- criar manifesto de release.

Não pode:

- rodar sem backup;
- rodar sem rollback;
- rodar sem check:all;
- fazer push;
- ocultar falha;
- alterar produção fora de janela aprovada.

Validações mínimas:

- `npm run check:all`;
- smoke test;
- healthcheck;
- backup validado;
- rollback validado;
- manifesto de release.

Risco: crítico.

Auditoria central: obrigatória antes e depois.

---

## 7. Portões de liberação

### Gate 0 - Fundação

Obrigatório antes de qualquer programação:

- `npm run verify:foundation` OK;
- `npm run check:invariants` OK;
- `npm run typecheck` OK;
- working tree limpo;
- remote ausente, salvo autorização futura;
- `/opt/noduos/current` preservado;
- `/opt/noduos/releases` preservado.

### Gate 1 - Contrato

Antes de endpoint, banco, evento, fila, read model, webhook ou integração:

- contrato público definido;
- versão definida;
- owner_module definido;
- campos obrigatórios definidos;
- payload permitido definido;
- payload proibido definido;
- dados sensíveis classificados;
- permissões mapeadas;
- AuthorizationDecision aplicável;
- ResourceReference aplicável;
- EventEnvelope aplicável;
- SecretReference aplicável;
- EvidenceReference aplicável;
- erro/fail-closed definido;
- compatibilidade definida.

### Gate 2 - Domínio puro

Antes de adapter externo:

- entidades definidas;
- value objects definidos;
- policies definidas;
- validators definidos;
- services puros definidos;
- testes unitários definidos;
- sem banco;
- sem HTTP;
- sem integração real;
- sem regra de módulo alheio.

### Gate 3 - Application Boundary

Antes de runtime:

- command handlers;
- query handlers;
- DTOs;
- error envelope;
- tenant context;
- authorization gate;
- audit requirement;
- idempotency quando aplicável;
- correlation id.

### Gate 4 - Runtime mínimo

Antes de endpoint de negócio:

- servidor mínimo;
- healthcheck;
- readiness;
- correlation;
- request context;
- error envelope;
- security headers;
- sem domínio comercial;
- sem persistência obrigatória.

### Gate 5 - Persistência

Antes de banco real:

- domínio aprovado;
- migration planejada;
- schema por domínio;
- repository;
- rollback;
- backup;
- idempotency store;
- audit store;
- sem banco compartilhado;
- sem tabela de domínio alheio.

### Gate 6 - Endpoint de negócio

Antes de expor endpoint funcional:

- contrato aprovado;
- AuthorizationDecision integrado;
- tenant/context integrado;
- audit integrado;
- LGPD integrada;
- testes negativos;
- rate/abuse policy quando aplicável;
- error envelope;
- payload mínimo;
- dados sensíveis mascarados.

### Gate 7 - Módulo comercial

Antes de módulo comercial:

- módulo registrado no Mapa Oficial;
- fronteira declarada;
- contratos declarados;
- permissões declaradas;
- dados sensíveis declarados;
- eventos declarados;
- read models declarados;
- dependências permitidas/proibidas;
- testes de isolamento;
- autorização central preservada.

### Gate 8 - Deploy

Antes de produção/deploy:

- `npm run check:all` OK;
- testes OK;
- migrations OK, quando existirem;
- backup/restore definido;
- rollback definido;
- PM2/Nginx/firewall revisados;
- `/opt/noduos/current` e `/opt/noduos/releases` protegidos;
- manifesto de release;
- smoke test.

---

## 8. Política de payload

Toda payload deve ser enviada no formato:

```bash
bash <<'EOF'
set -Eeuo pipefail
...
EOF
```

O usuário estará logado no SSH como `nodeos`.

Proibido:

- wrapper SSH;
- `ssh usuario@ip`;
- PowerShell;
- comandos soltos;
- edição manual;
- push;
- remote;
- tocar `/opt/noduos/current` ou `/opt/noduos/releases` sem bloco próprio autorizado;
- `sudo` sem justificativa;
- PM2, Nginx ou firewall fora de DEPLOY-BLOCK;
- criar endpoint fora de bloco autorizado;
- criar banco fora de bloco autorizado;
- criar migration real fora de PERSISTENCE-BLOCK.

Toda payload deve:

- ser idempotente quando possível;
- validar pré-condições;
- criar backup dos arquivos alterados;
- criar log em `/opt/noduos/shared/audits`;
- criar manifesto em `/opt/noduos/shared/manifests`;
- snapshotar `/opt/noduos/current`;
- snapshotar `/opt/noduos/releases`;
- validar `/opt/noduos/current` e `/opt/noduos/releases` ao final;
- rodar validações antes e depois;
- falhar fechado;
- imprimir resultado claro.

---

## 9. Política de correção

Se a payload falhar, o chat operacional deve:

1. Diagnosticar.
2. Classificar:
   - erro real;
   - falso positivo;
   - erro de script;
   - divergência arquitetural;
   - dependência ausente;
   - type error;
   - teste mal desenhado.
3. Corrigir com nova payload.
4. Validar novamente.
5. Só retornar ao chat central no fim do bloco ou quando houver bloqueio estrutural real.

Proibido:

- esconder erro;
- marcar OK com erro no log;
- reduzir escopo silenciosamente;
- apagar evidência;
- forçar commit com teste quebrado;
- fazer bypass de `check:all`;
- alterar raiz sem registro;
- transformar erro em exceção permanente sem justificativa.

---

## 10. Política de Git

Regras:

- trabalhar em `main` local enquanto não houver política formal de branches;
- remote deve permanecer ausente até autorização futura;
- push proibido;
- cada bloco aprovado deve terminar com commit local;
- cada bloco aprovado deve terminar com tag local;
- tag deve ser semanticamente clara;
- working tree deve ficar limpo ao final;
- `node_modules` não deve ser commitado;
- `package-lock.json` deve ser commitado quando `npm install` alterar dependências;
- logs e manifestos centrais em `/opt/noduos/shared` não precisam entrar no Git;
- relatórios técnicos em `docs/tooling` ou `docs/engineering` podem entrar no Git quando fizerem parte da documentação do projeto;
- tag não deve ser sobrescrita;
- commit não deve ocorrer com validação quebrada.

---

## 11. Política de validação

Base atual obrigatória:

- `npm run verify:foundation`
- `npm run check:invariants`
- `npm run typecheck`
- `npm run check:all`

Quando existir Core:

- `npm run check:core`
- `npm run test:core`

Quando existir protocolo:

- `npm run check:engineering-protocol`

Quando existir contrato:

- `npm run check:contracts`

Quando existir API:

- `npm run check:api`
- `npm run test:api`

Quando existir banco:

- `npm run check:migrations`
- `npm run test:persistence`

Quando existir deploy:

- smoke test;
- healthcheck;
- rollback check;
- manifesto de release.

Regra:

```text
Validação quebrada bloqueia commit.
```

---

## 12. Política de Segurança e LGPD

Todo bloco que tocar dados sensíveis deve declarar:

- dado permitido;
- dado proibido;
- finalidade;
- base legal ou política equivalente, se aplicável;
- máscara;
- retenção;
- expurgo;
- audit reference;
- export policy;
- AuthorizationDecision;
- ResourceReference;
- EvidenceReference;
- SecretReference;
- fail-closed.

Regras absolutas:

- segredo bruto nunca trafega;
- biometria bruta nunca trafega;
- vídeo bruto não trafega quando EvidenceReference bastar;
- evidência bruta não trafega quando EvidenceReference bastar;
- payload completo de domínio não trafega entre módulos;
- dado sensível sem finalidade, política, escopo e auditoria falha fechado.

---

## 13. Política de contratos

Antes de endpoint, banco, evento, fila, read model ou webhook:

- contrato precisa existir;
- versionamento precisa existir;
- owner_module precisa existir;
- permissões precisam existir;
- dados sensíveis precisam estar classificados;
- payload mínimo precisa estar definido;
- erros precisam estar definidos;
- compatibilidade precisa estar definida;
- descontinuação precisa ser planejada quando aplicável;
- fail-closed precisa estar definido.

Contrato não é atalho para banco, classe interna ou domínio alheio.

---

## 14. Política de eventos

Eventos comunicam fatos.  
Eventos não comandam execução crítica sozinhos.

Todo evento intermodular deve:

- usar EventEnvelope;
- ter contract_id;
- ter contract_version;
- ter owner_module;
- ter source_module;
- ter correlation_id;
- ter causation_id quando aplicável;
- ter tenant/context quando aplicável;
- ter payload minimizado;
- usar ResourceReference quando apontar recurso;
- usar EvidenceReference quando apontar prova;
- usar SecretReference quando apontar segredo;
- exigir auditoria quando sensível;
- entrar em quarentena quando origem, payload, tenant, contexto ou política forem inválidos.

Evento não cria autorização nova. O consumidor deve pedir nova AuthorizationDecision quando for executar ação sensível ou crítica.

---

## 15. Política de banco

Banco só entra em PERSISTENCE-BLOCK.

Regras:

- banco por domínio;
- migration versionada;
- rollback planejado;
- backup planejado;
- nenhum módulo acessa tabela interna de outro;
- read model não vira fonte primária;
- idempotency store para comandos críticos;
- audit store para ações críticas;
- dados sensíveis com retenção, máscara e expurgo definidos;
- migration quebrada bloqueia commit.

---

## 16. Política de endpoint

Endpoint só entra após Gate 6.

Regras:

- endpoint não decide autorização final sozinho;
- frontend não decide autorização final;
- tenant/context obrigatório;
- AuthorizationDecision obrigatório quando sensível ou crítico;
- audit obrigatório;
- error envelope obrigatório;
- payload mínimo;
- dados sensíveis mascarados;
- testes negativos obrigatórios;
- rate/abuse policy quando aplicável;
- sem endpoint fora de contrato.

Sem frontend decidindo autorização.

---

## 17. Política de deploy

Deploy só entra em DEPLOY-BLOCK.

Regras:

- não tocar `/opt/noduos/current` ou `/opt/noduos/releases` fora do bloco de release/deploy;
- PM2, Nginx e firewall só em bloco específico;
- backup antes;
- rollback claro;
- healthcheck;
- smoke test;
- log;
- manifesto;
- tag de release;
- sem deploy com `check:all` quebrado.

---

## 18. Blindagens contra autorização falsa

Sem ResourceReference como autorização.  
Sem EvidenceReference como autorização.  
Sem SecretReference como autorização.  

ResourceReference aponta.  
AuthorizationDecision decide.  
Módulo dono executa.  
Auditoria registra.

EventEnvelope comunica fato.  
EventEnvelope não executa comando sensível.  
EventEnvelope não cria autorização nova.

---

## 19. Matriz de risco por alteração

| Risco | Exemplos | Auditoria central |
|---|---|---|
| Baixo | documentação local, script check-only, teste estrutural, type-only, contrato sem runtime | Depois |
| Médio | serviço puro, application boundary, mudança em check:all, dependência dev, package script | Depois |
| Alto | AuthorizationDecision, ResourceReference, EventEnvelope, SecretReference, EvidenceReference, dados sensíveis, autenticação, sessão, endpoint, banco, worker | Antes e depois quando estrutural |
| Crítico | deploy, PM2, Nginx, firewall, current/releases, integração com hardware real, credenciais, biometria, vídeo/evidência bruta, exportação de dados | Antes e depois sempre |

---

## 20. Retorno obrigatório ao chat central

O retorno ao chat central é obrigatório quando houver:

- fim de bloco operacional;
- criação de contrato público;
- alteração de AuthorizationDecision;
- alteração de ResourceReference;
- alteração de EventEnvelope;
- alteração de SecretReference;
- alteração de EvidenceReference;
- criação de endpoint funcional;
- criação de banco ou migration real;
- criação de módulo comercial;
- criação de worker real;
- criação de deploy;
- alteração de PM2, Nginx ou firewall;
- alteração de `/opt/noduos/current` ou `/opt/noduos/releases`;
- nova DEC;
- mudança de fronteira entre módulos;
- mudança em dados sensíveis, LGPD, auditoria ou segurança;
- falha estrutural sem correção segura dentro do bloco.

---

## 21. Critérios de aceite de bloco

Um bloco só pode ser considerado concluído quando:

- escopo permitido foi respeitado;
- escopo proibido não foi violado;
- arquivos esperados foram criados/alterados;
- scripts esperados foram criados/alterados;
- validações obrigatórias passaram;
- endpoint proibido não foi criado;
- banco proibido não foi criado;
- migration proibida não foi criada;
- módulo comercial proibido não foi criado;
- deploy proibido não foi criado;
- PM2, Nginx e firewall não foram tocados fora de bloco autorizado;
- `/opt/noduos/current` foi preservado quando fora de deploy;
- `/opt/noduos/releases` foi preservado quando fora de deploy;
- remote permaneceu ausente, salvo autorização futura;
- push não foi executado;
- log foi gerado;
- manifesto foi gerado;
- commit local foi criado;
- tag local foi criada;
- working tree ficou limpo;
- relatório final foi entregue ao chat central.

---

## 22. Critérios de bloqueio

Bloqueia o bloco:

- falha em `npm run check:all`;
- falha em `npm run typecheck`;
- falha em teste obrigatório;
- working tree sujo ao final;
- remote inesperado;
- endpoint criado fora de contrato;
- banco criado fora de PERSISTENCE-BLOCK;
- migration criada fora de PERSISTENCE-BLOCK;
- módulo comercial criado fora de MODULE-BLOCK;
- worker real criado fora de bloco autorizado;
- segredo bruto em payload, log, evento, config, URL, relatório ou read model;
- evidência bruta quando EvidenceReference bastar;
- AuthorizationDecision ausente em ação sensível ou crítica;
- ResourceReference usada como autorização;
- EventEnvelope usado como comando;
- frontend decidindo autorização final;
- acesso direto a banco, classe ou regra interna de outro módulo;
- alteração em `/opt/noduos/current` ou `/opt/noduos/releases` fora de DEPLOY-BLOCK;
- ausência de log ou manifesto.

---

## 23. Sequência recomendada após aprovação deste protocolo

1. Contratos públicos internos do Core.
2. API Boundary interna do Core.
3. Runtime técnico mínimo da API.
4. Persistência real do Core.
5. Autenticação real, sessão e MFA.
6. Tenant/context/membership/permissões reais.
7. Master.
8. Parceiros.
9. Organizações.
10. Demais módulos conforme Mapa Oficial.

Esta sequência é técnica, não é MVP, não é fase provisória e não reduz a arquitetura final.

---

## 24. Regra final

```text
Contrato antes de endpoint.
Domínio antes de tabela.
Autorização antes de ação.
Referência antes de payload.
Evento antes de read model.
Auditoria antes de confiança.
LGPD antes de dado bruto.
Teste antes de deploy.
```

```text
Política influencia.
Core decide.
Módulo dono executa.
Auditoria registra.
```

O protocolo existe para acelerar sem quebrar. O NoduOS deve programar como quem constrói uma estação orbital: bloco por bloco, selo por selo, sem deixar parafusos flutuando no vácuo.
