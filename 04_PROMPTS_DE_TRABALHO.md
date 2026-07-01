# 04_PROMPTS_DE_TRABALHO.md

# Prompts de Trabalho: NoduOS

SaaS Modular de Gestão de Espaços e Segurança Unificada

## Versão

Versão: 2.8
Status: Base oficial atualizada com Blueprint Técnico da Aplicação, DEC-197 e documentos técnicos raiz 00 a 13
Data de criação: 2026-06-22  
Data desta atualização: 2026-06-27
Tipo de documento: Prompts oficiais para uso em conversas futuras

---

# 1. Objetivo deste documento

Este documento reúne prompts padrão para trabalhar no projeto sem perder contexto, foco ou decisões já aprovadas.

Sempre que um novo chat for aberto, o prompt correto deve ser usado para forçar o assistente a obedecer os documentos centrais.

---

# 2. Regra principal de uso

Antes de iniciar qualquer conversa nova, informe que existem documentos centrais e que eles são a fonte oficial.

Regra:

**O chat conversa.  
O documento manda.**

---

# 2.1 Regra obrigatória para prompts iniciais de módulo

Todo prompt inicial de módulo deve conter, logo nas regras iniciais, as seguintes exigências:

- Quando a fronteira do módulo for aprovada e o usuário solicitar o planejamento completo, entregue o planejamento em um único **CANVA FINAL**, em Markdown limpo, pronto para copiar e colar.
- O canva deve conter o planejamento completo do módulo, sem dividir em respostas soltas e sem transformar o conteúdo em resumo reduzido.
- Toda decisão nova, regra oficial ou nomenclatura DEC sugerida deve seguir obrigatoriamente a sequência do arquivo `03_DECISOES_OFICIAIS.md`.
- Antes de sugerir novas decisões, identifique a última DEC oficial registrada e continue a partir do próximo número livre.
- Não repetir, pular, renumerar ou reaproveitar códigos DEC já usados.
- Se houver conflito de numeração, corrija a nomenclatura antes de consolidar qualquer documento raiz.

- Toda produção de módulo deve respeitar a blindagem oficial: contratos versionados, idempotência, EventEnvelope, correlation_id, causation_id, validação de tenant/contexto, AuthorizationDecision do Core e fail-closed para ações críticas.
- APIs internas, eventos, webhooks, comandos e read models precisam declarar owner_module, versão, permissões, escopo, dados sensíveis, compatibilidade e política de descontinuação.
- Nenhum prompt pode sugerir acesso direto a banco interno, segredo bruto em payload, bypass de autorização, execução de domínio alheio ou comportamento fail-open em ação crítica.
- A última decisão consolidada nesta raiz é DEC-197; a próxima decisão nova deve começar em DEC-198, salvo se o 03_DECISOES_OFICIAIS.md indicar outra última DEC.

Regra curta:

**Planejamento aprovado vira canva copiável. Decisão nova segue a próxima DEC livre.**

---

# 2.2 Identidade oficial de projeto e aplicativo

Nome oficial: NoduOS.

Descrição oficial: SaaS Modular de Gestão de Espaços e Segurança Unificada.

Conceito técnico: Sistema Operacional Modular para Espaços Físicos Conectados.

Regra obrigatória para prompts:

- Todo prompt inicial deve tratar o projeto como NoduOS.
- A descrição “SaaS Modular de Gestão de Espaços e Segurança Unificada” deve ser mantida como subtítulo funcional.
- Building OS pode ser citado como conceito técnico, mas não como nome oficial.
- A identidade visual oficial inicial usa o conceito “Conexão que impulsiona” e a paleta #1F2937, #00A37A e #F1F3F5.
- Esta identidade não altera a regra de herança, o Core Platform, as fronteiras de módulos nem a blindagem de produção.

Decisão relacionada:

- DEC-154: Nome oficial do projeto e aplicativo como NoduOS.

---

# 3. Prompt mestre para iniciar novo chat

Use este prompt no início de qualquer nova conversa do projeto:

```text
Estamos trabalhando no projeto "NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada".

Antes de responder, considere os documentos centrais do projeto como fonte oficial:

1. 00_BIBLIA_DO_PROJETO.md
2. 01_MAPA_DE_MODULOS.md
3. 02_REGRAS_DE_ARQUITETURA.md
4. 03_DECISOES_OFICIAIS.md
5. 04_PROMPTS_DE_TRABALHO.md

Regras obrigatórias:

- Não reinterprete decisões já aprovadas.
- Não sugira MVP, fases ou versão provisória no planejamento funcional.
- Quando uma fronteira de módulo for aprovada e o usuário pedir o planejamento completo, entregue em um único CANVA FINAL, em Markdown limpo, pronto para copiar e colar.
- Decisões novas devem seguir a próxima numeração livre do arquivo 03_DECISOES_OFICIAIS.md, sem repetir, pular, renumerar ou reaproveitar códigos DEC.
- Planeje sempre a versão final modular.
- Todo módulo deve ser independente.
- Nenhum módulo pode depender da lógica interna de outro.
- A comunicação entre módulos deve ocorrer por APIs públicas internas, eventos, contratos, webhooks, barramento de eventos ou read models autorizados.
- Respeite a hierarquia: Master, Parceiro, Organização, Operador/Gestor, Unidade/Bloco/Área/Ambiente e Cliente.
- Respeite a regra de herança: o Cliente usa apenas o que herdou.
- Pessoa tem login próprio.
- Unidade não é login compartilhado.
- Hardware deve ser agnóstico e multimarcas.
- Mobile first para Cliente e Operador/Gestor.
- Core Platform é o núcleo obrigatório da plataforma.
- Core Platform autentica, contextualiza, autoriza, licencia, audita, protege e conecta.
- Política influencia. Core decide. Módulo dono executa. Auditoria registra.
- Organizações representa o cadastro operacional e institucional do espaço físico conectado.
- Organizações não substitui Core Platform, Parceiros, Unidades, Pessoas e Clientes, Gateway Local, Dispositivos ou módulos comerciais.
- Parceiros representa o domínio operacional autorizado do parceiro.
- Parceiros pode cadastrar gateways e dispositivos por fluxos autorizados dos módulos donos.
- Parceiros não substitui Master, Core Platform, Organizações, Gateway, Dispositivos, White-label, Financeiro, Suporte e Operação ou módulos comerciais.
- Gateway Local / Mikrotik / Tunnel representa o domínio técnico de conectividade local.
- Gateway conecta o mundo físico, mas não executa regra operacional de Controle de Acesso, Câmeras / VMS, Alarmes ou Automações.
- GatewayDeviceDiscovery não é DeviceRecord.
- Toda ação sensível do Gateway exige CoreAuthorizationAPI e GatewayAuthorizationScope.
- Dispositivos representa o domínio técnico oficial dos equipamentos físicos.
- Dispositivos governa DeviceRecord, DeviceReference, saúde, status, diagnóstico, última comunicação e ciclo de vida técnico.
- GatewayDeviceDiscovery e DeviceDiscoveryCandidate não são DeviceRecord.
- Toda ação sensível em Dispositivos exige CoreAuthorizationAPI, AuthorizationDecision e DeviceAuthorizationScope.
- Dispositivos não executa regra operacional de Controle de Acesso, Câmeras / VMS, Alarmes ou Automações.
- Controle de Acesso representa o domínio operacional de acesso físico.
- AccessPoint não é DeviceRecord nem StructureReference.
- AccessCredential não é UserAccount, PersonProfile, ClientProfile ou BiometricConsent.
- Toda ação sensível de Controle de Acesso exige AuthorizationDecision do Core Platform e AccessAuthorizationScope.
- AccessOfflinePolicy é obrigatório para modo offline.
- Eventos de acesso podem gerar evidência, mas evidência pertence a Câmeras / VMS.
- Exportação e compartilhamento de vídeo exigem finalidade, proteção e auditoria.
- Toda ação sensível de vídeo exige AuthorizationDecision do Core e CameraAuthorizationScope.
- Gateway transporta vídeo, mas não é VMS.
- CameraResource não é DeviceRecord.
- Câmeras / VMS representa o domínio operacional de vídeo.
- Ao final, gere atualizações para os documentos centrais, se houver.

Confirme que entendeu e aguarde o módulo ou tarefa que será trabalhada.
```

---

# 4. Prompt para planejar um módulo

Use este prompt quando for criar ou detalhar um módulo:

```text
Vamos planejar o módulo: [NOME DO MÓDULO].

Siga obrigatoriamente os documentos centrais do projeto.

Crie o planejamento final deste módulo usando a estrutura abaixo:

Entregue o planejamento em um único CANVA FINAL, em Markdown limpo, pronto para copiar e colar.

1. Objetivo do módulo
2. Quem usa
3. Responsabilidades
4. O que este módulo não faz
5. Entidades principais
6. Telas necessárias
7. Regras de negócio
8. Permissões
9. Heranças
10. Eventos publicados
11. Eventos consumidos
12. APIs internas
13. Integrações externas
14. Logs e auditoria
15. Relatórios
16. Configurações por Master, Parceiro, Organização, Operador/Gestor e Cliente
17. Riscos de acoplamento
18. Dependências permitidas
19. Dependências proibidas
20. Pendências com outros módulos
21. Decisões novas sugeridas
22. Resumo aprovado do módulo
23. Atualização para o 01_MAPA_DE_MODULOS.md
24. Atualização para o 03_DECISOES_OFICIAIS.md, se houver

Importante:

- Não crie etapas de implementação.
- O planejamento completo deve sair em CANVA FINAL único, copiável e colável.
- Decisões novas sugeridas devem seguir a próxima numeração livre do 03_DECISOES_OFICIAIS.md.
- Não repetir, pular, renumerar ou reaproveitar códigos DEC já usados.
- Não sugira MVP.
- Não simplifique a arquitetura final.
- Não misture responsabilidades de outros módulos.
- Não crie motor paralelo ao Core Platform.
- Não acesse banco interno de outro módulo.
- Não execute regra comercial de outro módulo.
- Respeite a fronteira já aprovada de Organizações:
  Organizações representa o cadastro operacional e institucional do espaço físico conectado.
```

---

# 5. Prompt para revisar um módulo

Use este prompt para revisar um módulo já escrito:

```text
Revise o módulo abaixo conforme os documentos centrais do projeto.

Verifique:

1. Se respeita a Bíblia do Projeto
2. Se viola alguma Decisão Oficial
3. Se está modular e independente
4. Se existe acoplamento indevido
5. Se o módulo faz algo que deveria pertencer a outro módulo
6. Se eventos e APIs estão bem definidos
7. Se permissões e heranças estão claras
8. Se respeita LGPD, auditoria e segurança
9. Se está mobile first quando envolver Cliente ou Operador/Gestor
10. Se há contradições com o Mapa de Módulos
11. Se há decisões novas que precisam ser registradas
12. Se cria tenant, contexto, autorização ou licença fora do Core Platform
13. Se invade responsabilidades de Organizações, Unidades, Pessoas, Gateway, Dispositivos ou módulos comerciais

Ao final, entregue:

- Problemas encontrados
- Correções recomendadas
- Versão corrigida do módulo
- Atualizações necessárias nos documentos centrais
```

---

# 6. Prompt para criar decisões oficiais

Use este prompt quando uma decisão nova surgir:

```text
Com base na conversa, gere decisões oficiais para adicionar ao arquivo 03_DECISOES_OFICIAIS.md.

Use o formato:

# DEC-XXX: Título da decisão

## Tema

## Decisão

## Motivo

## Impacto

## Status

## Data

Regras:

- Antes de numerar decisões novas, identifique a última DEC oficial registrada no 03_DECISOES_OFICIAIS.md e continue a partir do próximo número livre.
- Não repita, pule, renumere ou reaproveite códigos DEC já usados.
- Se a conversa sugerir uma numeração conflitante, corrija a nomenclatura antes de consolidar.
- Não repita decisões já existentes.
- Se a decisão alterar outra decisão, indique qual DEC foi afetada.
- Se for apenas detalhe de módulo, deixe claro o escopo.
- Se impactar arquitetura, herança, permissões, LGPD, Core Platform, Organizações ou integrações, destaque o impacto.
- Não transforme rascunho em oficial sem aprovação do usuário.
```

---

# 7. Prompt para atualizar o mapa de módulos

Use este prompt ao finalizar um módulo:

```text
Com base no módulo aprovado nesta conversa, gere a atualização para o arquivo 01_MAPA_DE_MODULOS.md.

Inclua:

1. Nome do módulo
2. Status atualizado
3. Objetivo
4. Usuários que acessam
5. Responsabilidades
6. O que não faz
7. Entidades principais
8. Eventos publicados
9. Eventos consumidos
10. APIs internas
11. Integrações externas
12. Dependências permitidas
13. Dependências proibidas
14. Observações importantes

Não altere outros módulos sem necessidade.

Se houver impacto em outro módulo, registre como pendência.

Respeite a fronteira aprovada de Organizações:

- OrganizationRecord, OrganizationProfile, OrganizationSettings e OrganizationStatus pertencem a Organizações.
- Tenant, Context, UserAccount, License, FeatureFlag e AuthorizationDecision pertencem ao Core Platform.
- Estrutura física interna pertence a Unidades, Blocos, Áreas e Ambientes.
- Pessoas, clientes e vínculos pertencem a Pessoas e Clientes.
- Gateway/tunnel pertence a Gateway Local / Mikrotik / Tunnel.
- Cadastro e diagnóstico de equipamentos pertencem a Dispositivos.
- Regras comerciais pertencem aos módulos donos dos recursos.
```

---

# 8. Prompt para verificar conflito com decisões oficiais

Use quando o chat sugerir algo suspeito ou contraditório:

```text
Verifique se a sugestão abaixo viola alguma decisão oficial do arquivo 03_DECISOES_OFICIAIS.md.

Sugestão a verificar:

[COLE A SUGESTÃO]

Responda em quatro partes:

1. Existe conflito?
2. Qual decisão oficial foi afetada?
3. Por que existe ou não existe conflito?
4. Como corrigir a sugestão sem violar o projeto?

Considere obrigatoriamente:

- DEC-037: Core Platform como autoridade estrutural de autorização.
- DEC-038: Herança e Permissões como camada avançada de governança e políticas.
- DEC-039: Separação entre UserAccount, PersonProfile e ClientProfile.
- DEC-042: Separação entre estrutura física e vínculo pessoal.
- DEC-043: ResourceReference estrutural sem transferência de domínio ao Core.
- DEC-044: Estrutura física como alvo de herança, não como motor de permissão.
- DEC-045: Associação física não transfere posse operacional do recurso.
- DEC-046: Organização como cadastro operacional do espaço físico conectado.
- DEC-047: OrganizationModuleAvailability como read model autorizado.
- DEC-048: Organização não executa regra operacional de módulos comerciais.
```

---

# 9. Prompt para consolidar uma conversa

Use ao final de qualquer conversa importante:

```text
Consolide esta conversa para atualização dos documentos centrais.

Entregue:

1. Resumo do que foi decidido
2. Itens aprovados
3. Itens ainda em aberto
4. Decisões novas para 03_DECISOES_OFICIAIS.md, seguindo a próxima numeração livre e sem repetir, pular ou renumerar códigos DEC
5. Atualizações para 00_BIBLIA_DO_PROJETO.md
6. Atualizações para 01_MAPA_DE_MODULOS.md
7. Atualizações para 02_REGRAS_DE_ARQUITETURA.md
8. Riscos de acoplamento identificados
9. Pendências para outros módulos
10. Próximo módulo recomendado

Não invente decisões que não foram aprovadas.

Separe claramente rascunho de decisão oficial.

Use a regra:

ChatGPT sugeriu = rascunho.
Usuário aprovou = decisão.
Entrou nos documentos centrais = oficial.
```

---

# 10. Prompt para criar documento final de um módulo

Use quando quiser transformar o planejamento de um módulo em documento limpo:

```text
Transforme o conteúdo aprovado sobre o módulo [NOME DO MÓDULO] em um documento final.

Formato:

# Módulo: [NOME]

## 1. Visão geral
## 2. Objetivo
## 3. Perfis que usam
## 4. Responsabilidades
## 5. Limites do módulo
## 6. Entidades
## 7. Telas
## 8. Fluxos principais
## 9. Regras de negócio
## 10. Permissões
## 11. Heranças
## 12. Eventos publicados
## 13. Eventos consumidos
## 14. APIs internas
## 15. Integrações
## 16. Auditoria
## 17. LGPD e segurança
## 18. Relatórios
## 19. Configurações
## 20. Riscos de acoplamento
## 21. Dependências permitidas
## 22. Dependências proibidas
## 23. Pendências
## 24. Resumo final

Regras:

- Entregue o documento em um único CANVA FINAL quando o usuário solicitar planejamento completo ou documento copiável.
- Decisões novas devem seguir a próxima DEC livre do arquivo 03_DECISOES_OFICIAIS.md.
- Não adicione MVP.
- Não crie etapas.
- Não altere decisões oficiais.
- Use linguagem clara e estruturada.
- Não misture domínio de outro módulo.
- Não transforme Organizações em Core, Parceiros, Unidades, Pessoas, Gateway, Dispositivos ou módulo comercial.
```

---

# 11. Prompt para pesquisa de mercado de um módulo

Use quando quiser comparar um módulo com soluções globais:

```text
Faça uma pesquisa de mercado sobre o módulo [NOME DO MÓDULO] dentro de plataformas globais de Building OS, PropTech, segurança eletrônica, controle de acesso, coworking, smart buildings e gestão de espaços.

Compare com soluções como Verkada, Genetec, Rhombus, Brivo, Kisi, Genea, Nexudus, OfficeRnD, Yardi, MRI, AppFolio, Equiem, HqO e outras relevantes.

Entregue:

1. O que as melhores plataformas oferecem
2. Funcionalidades essenciais
3. Funcionalidades avançadas
4. Diferenciais competitivos
5. Integrações comuns
6. Tendências globais
7. Oportunidades para o nosso SaaS
8. O que deve entrar no módulo final
9. O que deve ficar fora do módulo
10. Riscos e armadilhas

Respeite os documentos centrais do projeto.

Não proponha MVP.

Não copie arquitetura de concorrente que viole a modularidade oficial do projeto.
```

---

# 12. Prompt para impedir regressão

Use quando uma resposta começar a desfazer algo já decidido:

```text
A resposta anterior violou decisões oficiais do projeto.

Reescreva obedecendo obrigatoriamente:

- 00_BIBLIA_DO_PROJETO.md
- 01_MAPA_DE_MODULOS.md
- 02_REGRAS_DE_ARQUITETURA.md
- 03_DECISOES_OFICIAIS.md
- 04_PROMPTS_DE_TRABALHO.md

Pontos que não podem ser violados:

1. Não existe MVP no planejamento funcional.
2. Todo módulo é independente.
3. Cliente usa apenas o que herdou.
4. Pessoa tem login próprio.
5. Unidade não é login compartilhado.
6. Hardware é agnóstico e multimarcas.
7. Módulos se comunicam por APIs, eventos e contratos.
8. Master, Parceiro, Organização, Operador/Gestor e Cliente têm responsabilidades separadas.
9. Core Platform autentica, contextualiza, autoriza, licencia, audita, protege e conecta.
10. Política influencia. Core decide. Módulo dono executa. Auditoria registra.
11. Organizações representa o cadastro operacional e institucional do espaço físico conectado.
12. Organizações não substitui Core Platform, Parceiros, Unidades, Pessoas e Clientes, Gateway Local, Dispositivos ou módulos comerciais.
13. OrganizationModuleAvailability é apenas read model autorizado.
14. Organizações não executa regra operacional de módulos comerciais.

Agora corrija a resposta.
```

---

# 13. Prompt para criar fluxo completo

Use para detalhar fluxos da plataforma:

```text
Crie o fluxo final de [NOME DO FLUXO] respeitando os documentos centrais.

Entregue:

1. Objetivo do fluxo
2. Perfis envolvidos
3. Pré-condições
4. Passo a passo completo
5. Permissões necessárias
6. Módulos envolvidos
7. Eventos gerados
8. Logs e auditoria
9. Exceções
10. Falhas possíveis
11. Como evitar acoplamento
12. Resultado final esperado
13. Atualizações necessárias nos documentos centrais

Regras:

- Não crie fluxo que acesse banco interno de outro módulo.
- Não pule a autorização estrutural do Core Platform.
- Não faça um módulo executar regra que pertence a outro.
- Não use Organizações como atalho para executar recurso comercial.
```

---

# 14. Prompt para criar matriz de permissões

Use para criar permissões de um módulo:

```text
Crie a matriz de permissões do módulo [NOME DO MÓDULO].

Perfis obrigatórios:

- Master
- Parceiro
- Organização
- Operador/Gestor
- Cliente

Considere também permissões por:

- Contexto
- Organização
- Unidade
- Bloco
- Área
- Recurso
- Horário
- Módulo ativo
- Plano
- Licença

Entregue em formato de tabela com:

1. Permissão
2. Descrição
3. Master
4. Parceiro
5. Operador/Gestor
6. Cliente
7. Herança aplicável
8. Observação

Regras:

- A decisão estrutural de autorização pertence ao Core Platform.
- Herança e Permissões pode governar políticas avançadas.
- O módulo dono executa a ação.
- Organizações não emite AuthorizationDecision final.
```

---

# 15. Prompt para eventos de módulo

Use para definir eventos:

```text
Defina os eventos do módulo [NOME DO MÓDULO].

Para cada evento, informe:

1. Nome do evento
2. Quando é disparado
3. Payload conceitual
4. Módulos que podem consumir
5. Impacto
6. Auditoria necessária
7. Risco de acoplamento
8. Versão do contrato

Respeite a arquitetura event-driven e modular do projeto.

Todo evento deve respeitar EventEnvelope v1 quando aplicável.

Eventos não devem expor dados sensíveis desnecessários.

Eventos de Organizações devem refletir ciclo de vida e referências autorizadas, sem carregar dados internos de Pessoas, Unidades, Gateway, Dispositivos ou módulos comerciais.
```

---

# 16. Prompt para APIs internas

Use para definir APIs internas:

```text
Defina as APIs internas do módulo [NOME DO MÓDULO].

Para cada API, informe:

1. Nome conceitual
2. Objetivo
3. Quem pode chamar
4. Permissões necessárias
5. Entrada
6. Saída
7. Validações
8. Eventos gerados
9. Logs
10. Erros possíveis
11. Observações de segurança

Não use APIs para burlar eventos, permissões ou herança.

Não use APIs para acessar banco interno de outro módulo.

Não use APIs de Organizações para criar Tenant, Context, UserAccount, PersonProfile, ClientProfile, Unit, Device, Gateway, cobrança, reserva, convite, ticket, alarme, stream de câmera ou abertura de porta.
```

---

# 17. Prompt para análise de acoplamento

Use para testar se um módulo está perigoso:

```text
Analise o módulo [NOME DO MÓDULO] em busca de riscos de acoplamento.

Verifique:

1. Se ele está assumindo responsabilidade de outro módulo
2. Se depende de dados internos de outro módulo
3. Se executa ação que deveria apenas solicitar
4. Se deveria publicar evento em vez de chamar diretamente
5. Se existe dependência circular
6. Se alguma integração está presa a uma marca
7. Se alguma regra viola herança
8. Se há risco de quebrar outro módulo ao ser alterado
9. Se cria motor paralelo ao Core Platform
10. Se confunde Organização com Tenant ou Context
11. Se transforma Organização em cadastro de pessoas, unidades, dispositivos, gateways ou recursos comerciais

Entregue:

- Riscos encontrados
- Gravidade
- Correção recomendada
- Decisão oficial necessária, se houver
```

---

# 18. Prompt para continuar sem perder contexto

Use quando abrir novo chat e quiser continuar um assunto anterior:

```text
Estou continuando um assunto do projeto "NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada".

Considere os documentos centrais como fonte oficial.

Resumo do que já foi decidido nesta parte:

[COLE O RESUMO DA CONVERSA ANTERIOR]

Agora continue a partir desse ponto, sem reinterpretar o projeto e sem contradizer decisões oficiais.

Tarefa atual:

[ESCREVA A TAREFA]

Regras obrigatórias:

- O chat conversa. O documento manda.
- Quando a fronteira for aprovada e o usuário solicitar planejamento completo, entregue em um único CANVA FINAL, em Markdown limpo, pronto para copiar e colar.
- Decisões novas, regras oficiais e nomenclaturas DEC devem seguir a próxima numeração livre do 03_DECISOES_OFICIAIS.md, sem repetir, pular, renumerar ou reaproveitar códigos já usados.
- Não desfazer decisões aprovadas.
- Não propor MVP.
- Não simplificar a arquitetura final.
- Não misturar responsabilidades entre módulos.
```

---

# 19. Prompt para gerar resumo transferível entre chats

Use no final de um chat para levar contexto para outro:

```text
Gere um resumo transferível desta conversa para eu colar em outro chat.

O resumo deve conter:

1. Módulo ou tema trabalhado
2. Decisões aprovadas
3. Regras importantes
4. Entidades definidas
5. Eventos definidos
6. APIs definidas
7. Pendências
8. Pontos que não podem ser alterados
9. Próxima tarefa recomendada

Escreva de forma objetiva, para servir como contexto inicial de outra conversa.

Separe claramente:

- O que já foi aprovado.
- O que ainda é rascunho.
- O que deve entrar nos documentos centrais.
```

---

# 20. Prompt específico para fronteira de Organizações

Use quando for revisar, planejar ou discutir o módulo Organizações:

```text
Estamos trabalhando no módulo Organizações do projeto "NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada".

Use obrigatoriamente os documentos centrais como fonte oficial:

1. 00_BIBLIA_DO_PROJETO.md
2. 01_MAPA_DE_MODULOS.md
3. 02_REGRAS_DE_ARQUITETURA.md
4. 03_DECISOES_OFICIAIS.md
5. 04_PROMPTS_DE_TRABALHO.md

Fronteira oficial aprovada:

Organizações representa o cadastro operacional e institucional do espaço físico conectado.

Organizações é dona de:

- OrganizationRecord
- OrganizationProfile
- OrganizationSettings
- OrganizationStatus
- OrganizationType
- OrganizationAddress
- OrganizationOperationalContact
- OrganizationLifecycle
- OrganizationReference
- OrganizationModuleAvailability, apenas como read model autorizado
- OrganizationStructureSummary, apenas como resumo autorizado
- OrganizationPeopleSummary, apenas como resumo autorizado
- OrganizationGatewaySummary, apenas como resumo autorizado
- OrganizationDeviceSummary, apenas como resumo autorizado

Organizações não é dona de:

- Tenant
- Context
- UserAccount
- Role
- Permission
- PermissionGrant
- InheritanceGrant
- ResourceReference
- AuthorizationDecision
- ModuleRegistry
- Plan
- License
- FeatureFlag
- PersonProfile
- ClientProfile
- PersonUnitLink
- Unit
- Block
- Area
- Environment
- Gateway técnico
- Tunnel
- Rotas
- Dispositivos
- Saúde de dispositivo
- Diagnóstico técnico
- Regras financeiras
- Regras de acesso físico
- Stream de câmeras
- Reservas
- Convites
- Tickets
- Alarmes
- Automações operacionais
- Notificações multicanal
- BI avançado

Regras obrigatórias:

- Organizações não cria tenant.
- Organizações não cria contexto oficial.
- Organizações não cria login.
- Organizações não cadastra pessoa como fonte primária.
- Organizações não cadastra cliente como fonte primária.
- Organizações não cadastra unidade, bloco, área ou ambiente como domínio próprio.
- Organizações não cadastra dispositivo global.
- Organizações não gerencia gateway/tunnel.
- Organizações não emite AuthorizationDecision final.
- Organizações não decide licença, plano ou feature flag.
- Organizações não executa regra comercial de módulos.
- OrganizaçãoModuleAvailability é apenas read model autorizado.
- Parceiro solicita ou administra dentro do escopo autorizado.
- Core valida tenant, contexto, licença, feature flag e autorização.
- O módulo dono executa sua regra.

Frase consolidada:

Core cria contexto e autoriza. Parceiro implanta e administra dentro do escopo. Organizações representa o espaço conectado. Unidades mapeia a estrutura interna. Pessoas se vinculam ao espaço. Gateway conecta o mundo físico. Dispositivos governam equipamentos. Módulos comerciais executam recursos. Herança governa políticas. Auditoria registra.

Agora execute a tarefa solicitada sem violar essa fronteira.
```

---

# 21. Prompt anti-regressão específico de Organizações

Use quando uma resposta tentar transformar Organizações em módulo universal:

```text
A resposta anterior violou a fronteira oficial de Organizações.

Reescreva corrigindo obrigatoriamente os pontos abaixo:

1. Organizações representa apenas o cadastro operacional e institucional do espaço físico conectado.
2. Tenant e Context pertencem ao Core Platform.
3. UserAccount pertence ao Core Platform.
4. Licenças, planos, feature flags, ModuleRegistry e AuthorizationDecision pertencem ao Core Platform.
5. Parceiros vende, implanta e administra organizações dentro do escopo autorizado, mas não substitui Organizações.
6. Unidades, Blocos, Áreas e Ambientes é dono da estrutura física interna.
7. Pessoas e Clientes é dono de PersonProfile, ClientProfile e vínculos pessoais.
8. Gateway Local / Mikrotik / Tunnel é dono da conectividade local.
9. Dispositivos é dono do cadastro, saúde, diagnóstico e comunicação técnica dos equipamentos.
10. Módulos comerciais executam suas próprias regras.
11. OrganizationModuleAvailability é apenas read model autorizado.
12. Organizações não abre portas, não exibe câmeras, não cobra, não reserva, não convida, não cria ticket, não executa alarme, não envia notificações multicanal e não executa automações operacionais.

Use a frase de governança:

Política influencia. Core decide. Módulo dono executa. Auditoria registra.

Agora corrija a resposta sem criar acoplamento.
```

---

# 22. Prompt para gerar arquivos raiz atualizados em TXT

Use quando for necessário gerar um arquivo central completo para substituir na raiz do projeto:

```text
Gere o arquivo raiz completo [NOME_DO_ARQUIVO].md em formato TXT/Markdown, já com as atualizações aprovadas nesta conversa.

Regras:

- Entregar o arquivo inteiro, não apenas um adendo.
- Manter a estrutura do documento original.
- Atualizar versão, status e data desta atualização.
- Incorporar decisões aprovadas no corpo correto do documento.
- Antes de inserir decisões novas aprovadas, conferir a última DEC oficial registrada e continuar a sequência sem repetir, pular ou renumerar.
- Não inventar decisões novas.
- Não remover decisões oficiais anteriores.
- Não alterar fronteiras já aprovadas.
- Usar linguagem clara e pronta para substituir o arquivo da raiz do projeto.
- O arquivo deve ser entregue como .txt para download.

Quando a atualização envolver Organizações, incluir as DEC-046, DEC-047 e DEC-048 e preservar a frase consolidada:

Core cria contexto e autoriza. Parceiro implanta e administra dentro do escopo. Organizações representa o espaço conectado. Unidades mapeia a estrutura interna. Pessoas se vinculam ao espaço. Gateway conecta o mundo físico. Dispositivos governam equipamentos. Módulos comerciais executam recursos. Herança governa políticas. Auditoria registra.
```

---

# 23. Prompt específico para fronteira de Parceiros

Use quando for revisar, planejar ou discutir o módulo Parceiros:

```text
Estamos trabalhando no módulo Parceiros do projeto "NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada".

Use obrigatoriamente os documentos centrais como fonte oficial:

1. 00_BIBLIA_DO_PROJETO.md
2. 01_MAPA_DE_MODULOS.md
3. 02_REGRAS_DE_ARQUITETURA.md
4. 03_DECISOES_OFICIAIS.md
5. 04_PROMPTS_DE_TRABALHO.md

Fronteira oficial aprovada:

Parceiros representa o domínio operacional autorizado do parceiro.

Parceiros pode vender, implantar, configurar, cadastrar gateways e dispositivos por fluxos autorizados, administrar e acompanhar organizações abaixo dele, sempre dentro de escopo, contrato, licença, contexto, permissão e AuthorizationDecision do Core Platform.

Parceiros é dono de:

- PartnerRecord
- PartnerProfile
- PartnerStatus
- PartnerType
- PartnerLifecycle
- PartnerScope
- PartnerOperationalContact
- PartnerCommercialContact
- PartnerTechnicalContact
- PartnerTeamReference
- PartnerOrganizationPortfolio
- PartnerDeploymentOverview
- PartnerGatewayOperationRequest
- PartnerDeviceOperationRequest
- PartnerModuleAvailability, apenas como read model autorizado
- PartnerPlanView, apenas como read model autorizado
- PartnerLicenseView, apenas como read model autorizado
- PartnerWhiteLabelPermission, apenas como read model autorizado
- PartnerCommercialPolicy, limitada ao escopo autorizado
- PartnerSupportOverview, apenas como resumo autorizado
- PartnerRevenueSummary, se habilitado e autorizado

Parceiros não é dono de:

- Tenant
- Context
- UserAccount
- AuthCredential
- UserSession
- Role
- Permission
- PermissionGrant
- InheritanceGrant
- ResourceReference
- AuthorizationDecision
- ModuleRegistry
- Plan oficial
- License oficial
- Entitlement oficial
- FeatureFlag oficial
- OrganizationRecord
- OrganizationProfile
- GatewayRecord como domínio próprio
- Tunnel
- Rotas
- Latência
- Diagnóstico técnico oficial de gateway
- DeviceRecord como domínio próprio
- Saúde técnica oficial de dispositivos
- Última comunicação oficial de dispositivos
- Diagnóstico técnico oficial de dispositivos
- Motor próprio de white-label
- Motor financeiro
- Motor completo de suporte
- Regra operacional de Controle de Acesso
- Regra operacional de Câmeras / VMS
- Regra operacional de Alarmes
- Regra operacional de Reservas
- Regra operacional de Convites e Visitantes
- Regra operacional de Tickets
- Regra operacional de Notificações
- Regra operacional de Automações

Regras obrigatórias:

- Parceiros não substitui Master.
- Parceiros não substitui Core Platform.
- Parceiros não cria Tenant.
- Parceiros não cria Context oficial.
- Parceiros não cria UserAccount.
- Parceiros não cria License oficial.
- Parceiros não cria FeatureFlag oficial.
- Parceiros não emite AuthorizationDecision final.
- Parceiros não substitui Organizações.
- Parceiros não mantém OrganizationRecord ou OrganizationProfile como domínio próprio.
- Parceiros pode cadastrar gateway por meio do módulo Gateway Local / Mikrotik / Tunnel.
- Parceiros pode cadastrar dispositivos por meio do módulo Dispositivos.
- Cadastrar gateway ou dispositivo por fluxo autorizado não transfere domínio técnico para Parceiros.
- Parceiros não substitui White-label.
- Parceiros não substitui Financeiro.
- Parceiros não substitui Suporte e Operação.
- Parceiros não executa regra operacional de módulos comerciais.
- Parceiros opera dentro do escopo autorizado por Master, contrato, licença, contexto, permissão e Core Platform.
- O chat conversa. O documento manda.
- Quando a fronteira for aprovada e o usuário solicitar planejamento completo, entregue em um único CANVA FINAL, em Markdown limpo, pronto para copiar e colar.
- Decisões novas, regras oficiais e nomenclaturas DEC devem seguir a próxima numeração livre do 03_DECISOES_OFICIAIS.md, sem repetir, pular, renumerar ou reaproveitar códigos já usados.

Frase consolidada:

Master governa o limite. Core valida contexto, licença e autorização. Parceiro vende, implanta, cadastra gateways e dispositivos por fluxos autorizados, administra e acompanha organizações abaixo dele. Organizações registra o espaço conectado. Gateway governa conectividade. Dispositivos governam equipamentos. White-label personaliza. Financeiro cobra. Suporte atende. Módulos comerciais executam recursos. Auditoria registra.

Frase curta:

Parceiro instala e cadastra. Módulo dono governa. Core autoriza.

Agora execute a tarefa solicitada sem violar essa fronteira.
```

# 24. Prompt específico para fronteira de Gateway Local / Mikrotik / Tunnel

Use quando for revisar, planejar ou discutir o módulo Gateway Local / Mikrotik / Tunnel:

```text
Estamos trabalhando no módulo Gateway Local / Mikrotik / Tunnel do projeto "NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada".

Use obrigatoriamente os documentos centrais como fonte oficial:

1. 00_BIBLIA_DO_PROJETO.md
2. 01_MAPA_DE_MODULOS.md
3. 02_REGRAS_DE_ARQUITETURA.md
4. 03_DECISOES_OFICIAIS.md
5. 04_PROMPTS_DE_TRABALHO.md

Fronteira oficial aprovada:

Gateway Local / Mikrotik / Tunnel representa o domínio técnico de conectividade local entre a plataforma em nuvem e a rede física da organização.

Gateway é dono de:

- GatewayRecord
- GatewayAgent
- GatewayInstallation
- GatewayCredential
- GatewaySecret
- TunnelSession
- TunnelEndpoint
- TunnelStatus
- LocalNetwork
- LocalRoute
- RemoteRoute
- NatRuleReference
- FirewallRuleReference
- VpnProfileReference
- GatewayHealth
- GatewayDiagnostic
- GatewayCommand
- GatewayCommandResult
- GatewayLog
- GatewayEventBuffer
- GatewaySyncState
- GatewayConnectivityState
- GatewayDeviceDiscovery
- GatewayDeviceReachability
- GatewayOrganizationLink
- GatewayPartnerLink
- GatewayResourceReference
- GatewayAuthorizationScope

Gateway não é dono de:

- Tenant
- Context
- UserAccount
- AuthorizationDecision
- License
- FeatureFlag
- PartnerRecord
- OrganizationRecord
- OrganizationProfile
- DeviceRecord oficial
- Porta
- Portão
- Catraca
- Stream
- Mosaico
- Playback
- Alarme operacional
- Workflow de automação
- Regra comercial de módulos

Regras obrigatórias:

- Gateway não substitui Core Platform.
- Gateway não substitui Parceiros.
- Gateway não substitui Organizações.
- Gateway não substitui Dispositivos.
- Gateway não executa regra operacional de Controle de Acesso, Câmeras / VMS, Alarmes ou Automações.
- Gateway não abre porta por conta própria.
- Gateway não vira VMS.
- Gateway não executa alarme comercial.
- Gateway não executa automação operacional.
- Gateway não acessa banco interno de outro módulo.
- Toda ação sensível exige CoreAuthorizationAPI e GatewayAuthorizationScope.
- GatewayDeviceDiscovery não é DeviceRecord.
- Mikrotik é adaptador, não prisão arquitetural.
- Pessoa tem login próprio.
- Unidade não é login compartilhado.
- Cliente usa apenas o que herdou.
- O chat conversa. O documento manda.
- Quando a fronteira for aprovada e o usuário solicitar planejamento completo, entregue em um único CANVA FINAL, em Markdown limpo, pronto para copiar e colar.
- Decisões novas, regras oficiais e nomenclaturas DEC devem seguir a próxima numeração livre do 03_DECISOES_OFICIAIS.md, sem repetir, pular, renumerar ou reaproveitar códigos já usados.

Frase consolidada:

Gateway conecta. Core autoriza. Parceiro instala. Organização referencia. Dispositivos governam equipamentos. Módulos comerciais executam recursos. Auditoria registra.

Agora execute a tarefa solicitada sem violar essa fronteira.
```

# 25. Prompt anti-regressão específico de Gateway Local / Mikrotik / Tunnel

Use quando uma resposta tentar transformar Gateway em módulo universal:

```text
A resposta anterior violou a fronteira oficial de Gateway Local / Mikrotik / Tunnel.

Reescreva corrigindo obrigatoriamente os pontos abaixo:

1. Gateway Local / Mikrotik / Tunnel representa apenas o domínio técnico de conectividade local entre nuvem e rede física da organização.
2. Tenant, Context, UserAccount, licenças, feature flags e AuthorizationDecision pertencem ao Core Platform.
3. Parceiros instala e cadastra gateway por fluxo autorizado, mas não governa tunnel, rotas, latência, diagnóstico ou logs técnicos oficiais.
4. Organizações referencia gateway e exibe resumo autorizado, mas não governa conectividade local.
5. Dispositivos é dono de DeviceRecord, saúde, status, diagnóstico, última comunicação e ciclo de vida dos equipamentos.
6. GatewayDeviceDiscovery não é DeviceRecord.
7. Controle de Acesso é dono da regra operacional de portas, portões, catracas e credenciais.
8. Gateway não abre porta por conta própria.
9. Câmeras / VMS é dono de live view, stream, mosaico, playback, clipes e evidências.
10. Gateway não vira VMS.
11. Alarmes é dono de arme, desarme, setores, sensores, disparos e escalonamento.
12. Gateway não executa alarme comercial.
13. Automações é dono de workflows, gatilhos, condições e ações.
14. Gateway não executa automação operacional fora de contrato autorizado.
15. Toda ação sensível exige CoreAuthorizationAPI, GatewayAuthorizationScope, escopo mínimo, validade temporal e auditoria.
16. Mikrotik é adaptador suportado, não prisão arquitetural.

Use a frase de governança:

Core autoriza. Gateway conecta. Módulo dono executa. Auditoria registra.

Agora corrija a resposta sem criar acoplamento.
```

# 26. Prompt específico para fronteira de Controle de Acesso

Use quando for revisar, planejar ou discutir o módulo Controle de Acesso:

```text
Estamos trabalhando no módulo Controle de Acesso do projeto "NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada".

Use obrigatoriamente os documentos centrais como fonte oficial:

1. 00_BIBLIA_DO_PROJETO.md
2. 01_MAPA_DE_MODULOS.md
3. 02_REGRAS_DE_ARQUITETURA.md
4. 03_DECISOES_OFICIAIS.md
5. 04_PROMPTS_DE_TRABALHO.md

Fronteira oficial aprovada:

Controle de Acesso representa o domínio operacional de acesso físico da plataforma.

Controle de Acesso é dono de:

- AccessPoint
- Door
- Gate
- Turnstile
- AccessZone
- AccessCredential
- PhysicalAccessCredential
- TemporaryAccessCredential
- FaceCredential
- RfidCredential
- PinCredential
- QrCredential
- AccessRule
- AccessPolicyBinding
- AccessSchedule
- AccessWindow
- AccessPass
- AccessAttempt
- AccessEvent
- AccessGrant
- AccessDeny
- AccessBlock
- AccessUnblock
- AccessRestriction
- RemoteUnlock
- DoorForcedEvent
- DoorHeldOpenEvent
- AntipassbackState
- AccessExecutionRequest
- AccessExecutionResult
- AccessAuthorizationScope
- AccessDeviceBinding
- AccessDeviceCapabilityRequirement
- AccessSyncState
- AccessOfflinePolicy
- AccessAuditTrail operacional

Controle de Acesso não é dono de:

- Tenant
- Context
- UserAccount
- AuthorizationDecision final
- PersonProfile
- ClientProfile
- PersonUnitLink
- VisitorInvite
- Reservation
- DeviceRecord
- GatewayRecord
- CameraEvidence
- AlarmEvent
- Invoice
- Unit, Block, Area ou Environment
- OrganizationRecord
- PartnerRecord
- Auditoria avançada de compliance
- Política avançada de LGPD

Regras obrigatórias:

- Controle de Acesso não substitui Core Platform.
- Controle de Acesso não substitui Herança e Permissões.
- Controle de Acesso não substitui Pessoas e Clientes.
- Controle de Acesso não substitui Convites e Visitantes.
- Controle de Acesso não substitui Reservas.
- Controle de Acesso não substitui Financeiro.
- Controle de Acesso não substitui Gateway.
- Controle de Acesso não substitui Dispositivos.
- Controle de Acesso não substitui Câmeras / VMS.
- Controle de Acesso não substitui Alarmes.
- AccessPoint não é DeviceRecord nem StructureReference.
- AccessCredential não é UserAccount, PersonProfile, ClientProfile ou BiometricConsent.
- Toda ação sensível exige CoreAuthorizationAPI, AuthorizationDecision e AccessAuthorizationScope.
- AccessOfflinePolicy é obrigatório para modo offline.
- Eventos de acesso podem gerar evidência, mas evidência pertence a Câmeras / VMS.
- Financeiro não bloqueia porta diretamente.
- Convites cria e governa a visita; Controle executa a passagem física.
- Reservas cria e governa a agenda; Controle executa a passagem física na janela autorizada.
- Gateway transporta comando técnico autorizado, mas não decide acesso.
- Dispositivos governa o equipamento; Controle usa DeviceReference.
- Pessoa tem login próprio.
- Unidade não é login compartilhado.
- Cliente usa apenas o que herdou.
- Hardware é agnóstico e multimarcas.
- O chat conversa. O documento manda.
- Quando a fronteira for aprovada e o usuário solicitar planejamento completo, entregue em um único CANVA FINAL, em Markdown limpo, pronto para copiar e colar.
- Decisões novas, regras oficiais e nomenclaturas DEC devem seguir a próxima numeração livre do 03_DECISOES_OFICIAIS.md, sem repetir, pular, renumerar ou reaproveitar códigos já usados.

Frase consolidada:

Core autoriza. Herança governa política. Pessoas identifica. Convites temporizam visitas. Reservas temporizam recursos. Financeiro informa status. Unidades localiza. Dispositivos representam equipamentos. Gateway transporta. Controle de Acesso executa a passagem física. Auditoria registra.

Agora execute a tarefa solicitada sem violar essa fronteira.
```

# 27. Prompt anti-regressão específico de Controle de Acesso

Use quando uma resposta tentar transformar Controle de Acesso em módulo universal:

```text
A resposta anterior violou a fronteira oficial de Controle de Acesso.

Reescreva corrigindo obrigatoriamente os pontos abaixo:

1. Controle de Acesso representa apenas o domínio operacional de acesso físico.
2. Tenant, Context, UserAccount, licenças, feature flags e AuthorizationDecision pertencem ao Core Platform.
3. Herança e Permissões governa políticas avançadas, mas não abre portas.
4. Pessoas e Clientes é dono de PersonProfile, ClientProfile, vínculos e consentimentos.
5. Convites e Visitantes é dono de VisitorInvite, VisitWindow, aprovação, check-in e check-out.
6. Reservas é dono de Reservation, agenda, disponibilidade e ReservationAccessWindow.
7. Financeiro informa eventos financeiros, mas não bloqueia porta diretamente.
8. Unidades, Blocos, Áreas e Ambientes é dono da estrutura física oficial.
9. Gateway transporta comando técnico autorizado, mas não decide acesso.
10. Dispositivos é dono de DeviceRecord e saúde técnica do equipamento.
11. Câmeras / VMS é dono de live view, stream, mosaico, playback, clipes e evidências.
12. Alarmes é dono de arme, desarme, disparos e escalonamento.
13. AccessPoint não é DeviceRecord nem StructureReference.
14. AccessCredential não é UserAccount, PersonProfile, ClientProfile ou BiometricConsent.
15. Toda ação sensível exige AuthorizationDecision do Core Platform e AccessAuthorizationScope válido.
16. Modo offline exige AccessOfflinePolicy.
17. Biometria, QR, RFID, PIN e logs de acesso exigem segurança, LGPD, finalidade, minimização e auditoria.
18. Fabricantes como Hikvision, Intelbras, Control iD ou ZKTeco são adaptadores, não regra estrutural.

Use a frase de governança:

Core autoriza. Herança governa política. Pessoas identifica. Convites temporizam visitas. Reservas temporizam recursos. Financeiro informa status. Unidades localiza. Dispositivos representam equipamentos. Gateway transporta. Controle de Acesso executa a passagem física. Auditoria registra.

Agora corrija a resposta sem criar acoplamento.
```

# 28. Frase guia deste documento

Use o chat como oficina. Use os documentos como mapa. Nunca construa no escuro.

A fronteira protege a plataforma. O acoplamento seduz. O documento mantém o sabre apontado para o lado certo.

# 29. Prompt específico para fronteira de Dispositivos

Use quando for revisar, planejar ou discutir o módulo Dispositivos:

```text
Estamos trabalhando no módulo Dispositivos do projeto "NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada".

Use obrigatoriamente os documentos centrais como fonte oficial:

1. 00_BIBLIA_DO_PROJETO.md
2. 01_MAPA_DE_MODULOS.md
3. 02_REGRAS_DE_ARQUITETURA.md
4. 03_DECISOES_OFICIAIS.md
5. 04_PROMPTS_DE_TRABALHO.md

Fronteira oficial aprovada:

Dispositivos representa o domínio técnico oficial dos equipamentos físicos integrados à plataforma.

Dispositivos é dono de:

- DeviceRecord
- DeviceReference
- DeviceIdentity
- DeviceType
- DeviceCategory
- DeviceBrand
- DeviceModel
- DeviceSerial
- DeviceFirmware
- DeviceProtocolProfile
- DeviceConnectivityProfile
- DeviceCredential
- DeviceSecret
- DeviceHealth
- DeviceStatus
- DeviceDiagnostic
- DeviceLifecycle
- DeviceCapability
- DeviceGatewayLink
- DeviceOrganizationLink
- DeviceStructureLocationReference
- DeviceTechnicalLog
- DeviceAlert
- DeviceMaintenanceRecord
- DeviceReplacementRecord
- DeviceIntegrationAdapterReference
- DeviceCommandRequest, apenas para comando técnico
- DeviceCommandResult
- DeviceTelemetry
- DeviceReachability
- DeviceDiscoveryCandidate
- DeviceAuthorizationScope

Dispositivos não é dono de:

- Tenant
- Context
- UserAccount
- AuthorizationDecision
- License
- FeatureFlag
- PartnerRecord
- OrganizationRecord
- OrganizationProfile
- GatewayRecord
- Tunnel
- Rotas
- VPN
- NAT
- Firewall
- Porta operacional
- Portão operacional
- Catraca operacional
- QR Code de acesso
- Facial operacional
- RFID operacional
- PIN operacional
- Live view
- Stream
- Playback
- Mosaico
- Clipes
- Evidências
- Arme
- Desarme
- Disparo operacional
- Zona operacional de alarme
- Workflow de automação
- Regra comercial de módulos

Regras obrigatórias:

- Dispositivos não substitui Core Platform.
- Dispositivos não substitui Parceiros.
- Dispositivos não substitui Organizações.
- Dispositivos não substitui Gateway Local / Mikrotik / Tunnel.
- Dispositivos não substitui Controle de Acesso.
- Dispositivos não substitui Câmeras / VMS.
- Dispositivos não substitui Alarmes.
- Dispositivos não substitui Automações.
- Dispositivos não executa regra operacional de módulos comerciais.
- Dispositivos não abre porta por conta própria.
- Dispositivos não vira VMS.
- Dispositivos não executa alarme comercial.
- Dispositivos não executa automação operacional.
- Dispositivos não acessa banco interno de outro módulo.
- Toda ação sensível exige CoreAuthorizationAPI, AuthorizationDecision e DeviceAuthorizationScope.
- GatewayDeviceDiscovery e DeviceDiscoveryCandidate não são DeviceRecord.
- DeviceCommandRequest representa comando técnico, não ação comercial.
- Parceiro instala e cadastra por fluxo autorizado, mas não governa DeviceRecord.
- Organizações exibe resumo autorizado, mas não governa equipamento.
- Gateway conecta, descobre e mede reachability, mas não cria DeviceRecord oficial.
- Hardware é agnóstico e multimarcas. Adaptador não é regra de negócio.

Frase consolidada:

Core autoriza. Parceiro instala e cadastra por fluxo autorizado. Organização referencia. Gateway conecta e descobre. Dispositivos governa equipamentos. Módulos comerciais executam recursos. Segurança protege. Auditoria registra.

Agora execute a tarefa solicitada sem violar essa fronteira.
```

# 30. Prompt anti-regressão específico de Dispositivos

Use quando uma resposta tentar transformar Dispositivos em módulo universal:

```text
A resposta anterior violou a fronteira oficial de Dispositivos.

Reescreva corrigindo obrigatoriamente os pontos abaixo:

1. Dispositivos representa apenas o domínio técnico oficial dos equipamentos físicos integrados à plataforma.
2. Tenant, Context, UserAccount, License, FeatureFlag e AuthorizationDecision pertencem ao Core Platform.
3. Parceiros instala e cadastra dispositivos por fluxo autorizado, mas não governa DeviceRecord.
4. Organizações referencia dispositivos e exibe resumo autorizado, mas não governa cadastro técnico, saúde ou diagnóstico.
5. Gateway conecta, descobre e testa reachability, mas GatewayDeviceDiscovery não é DeviceRecord.
6. Controle de Acesso governa portas, portões, catracas, credenciais físicas e abertura remota.
7. Câmeras / VMS governa live view, stream, mosaico, playback, clipes e evidências.
8. Alarmes governa arme, desarme, setores, zonas, disparos e escalonamento.
9. Automações governa workflows, gatilhos, condições e ações.
10. DeviceCommandRequest é apenas comando técnico, nunca ação comercial.
11. Toda ação sensível em dispositivo exige AuthorizationDecision do Core Platform e DeviceAuthorizationScope.
12. Dispositivos não acessa banco interno de outro módulo.
13. Eventos e DeviceReference não podem expor segredos, tokens, senhas, IPs, MACs ou seriais completos sem autorização.

Use a frase de governança:

Core autoriza. Dispositivos governa equipamento. Módulo dono executa recurso. Auditoria registra.

Agora corrija a resposta sem criar acoplamento.
```

# 31. Frase guia deste documento

Use o chat como oficina. Use os documentos como mapa. Nunca construa no escuro.

A fronteira protege a plataforma. O acoplamento seduz. O documento mantém o sabre apontado para o lado certo.

# 32. Prompt específico para fronteira de Câmeras / VMS

Use quando for revisar, planejar ou discutir o módulo Câmeras / VMS:

```text
Estamos trabalhando no módulo Câmeras / VMS do projeto "NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada".

Use obrigatoriamente os documentos centrais como fonte oficial:

1. 00_BIBLIA_DO_PROJETO.md
2. 01_MAPA_DE_MODULOS.md
3. 02_REGRAS_DE_ARQUITETURA.md
4. 03_DECISOES_OFICIAIS.md
5. 04_PROMPTS_DE_TRABALHO.md

Fronteira oficial aprovada:

Câmeras / VMS representa o domínio operacional de vídeo da plataforma.

Regra central:

Câmeras / VMS governa vídeo. Dispositivos governam equipamentos. Gateway conecta. Core autoriza. Herança governa políticas. Segurança e LGPD protege. Auditoria registra.

Câmeras / VMS é dono de:

- CameraResource
- CameraChannel
- CameraStream
- CameraLiveView
- CameraViewSession
- CameraMosaic
- CameraLayout
- CameraPlayback
- CameraTimeline
- CameraClip
- CameraSnapshot
- CameraEvidence
- VideoEvidenceRequest
- EventVideoCorrelation
- CameraRecordingPolicy
- CameraRetentionExecutionPolicy
- CameraPermissionScope
- CameraAuthorizationScope
- VideoViewExecutionResult
- VideoExportRequest
- VideoExportPackage
- VideoShareLink
- VideoWatermark
- VideoMaskingRequest
- VideoPrivacyZone
- CameraDeviceBinding
- CameraCoverageArea
- CameraAreaReference
- CameraGatewayRouteReference
- CameraStreamProxySession
- CameraAuditTrail

Câmeras / VMS não é dono de:

- Tenant
- Context
- UserAccount
- AuthorizationDecision
- License
- FeatureFlag
- PersonProfile
- ClientProfile
- Unit, Block, Area ou Environment
- OrganizationRecord
- PartnerRecord
- DeviceRecord
- GatewayRecord
- TunnelSession
- AccessEvent
- AlarmEvent
- VisitorInvite
- Reservation
- Invoice
- Notificações multicanal
- Política avançada de LGPD como fonte primária
- Auditoria avançada de compliance

Regras obrigatórias:

- CameraResource não é DeviceRecord.
- DeviceRecord pertence a Dispositivos.
- CameraResource usa DeviceReference autorizado.
- Gateway transporta vídeo, mas não é VMS.
- Toda ação sensível de vídeo exige AuthorizationDecision do Core e CameraAuthorizationScope válido.
- Eventos externos podem gerar evidência de vídeo sem transferir domínio.
- AccessEvent permanece em Controle de Acesso.
- AlarmEvent permanece em Alarmes.
- VisitorInvite permanece em Convites e Visitantes.
- Reservation permanece em Reservas.
- CameraEvidence pertence ao VMS e referencia o evento de origem por contrato autorizado.
- Exportação e compartilhamento exigem finalidade, proteção, auditoria, escopo e validade.
- Links públicos irrestritos são proibidos.
- Imagens, gravações, clipes, snapshots, evidências, rostos, placas, crianças, visitantes, funcionários e áreas sensíveis devem respeitar Segurança e LGPD.
- Câmeras / VMS não acessa banco interno de outro módulo.
- Câmeras / VMS não prende a arquitetura a Hikvision, Intelbras, Dahua, Axis, ONVIF, RTSP ou qualquer marca/protocolo único.
- Pessoa tem login próprio.
- Unidade não é login compartilhado.
- Cliente usa apenas o que herdou.
- O chat conversa. O documento manda.
- Quando a fronteira for aprovada e o usuário solicitar planejamento completo, entregue em um único CANVA FINAL, em Markdown limpo, pronto para copiar e colar.
- Decisões novas, regras oficiais e nomenclaturas DEC devem seguir a próxima numeração livre do 03_DECISOES_OFICIAIS.md, sem repetir, pular, renumerar ou reaproveitar códigos já usados.

Agora execute a tarefa solicitada sem violar essa fronteira.
```

# 33. Prompt anti-regressão específico de Câmeras / VMS

Use quando uma resposta tentar transformar Câmeras / VMS em módulo universal:

```text
A resposta anterior violou a fronteira oficial de Câmeras / VMS.

Reescreva corrigindo obrigatoriamente os pontos abaixo:

1. Câmeras / VMS representa apenas o domínio operacional de vídeo.
2. Tenant, Context, UserAccount, License, FeatureFlag e AuthorizationDecision pertencem ao Core Platform.
3. CameraResource não é DeviceRecord.
4. Câmera física, DVR, NVR, encoder e stream box pertencem a Dispositivos como DeviceRecord.
5. Gateway transporta vídeo e viabiliza rota técnica, mas não é VMS.
6. Câmeras / VMS governa live view, stream operacional, mosaico, playback, clipe, snapshot, evidência, exportação, compartilhamento, retenção operacional e auditoria de vídeo.
7. Controle de Acesso publica AccessEvent; Câmeras / VMS cria evidência de vídeo quando autorizado.
8. Alarmes publica AlarmEvent; Câmeras / VMS cria evidência ou verificação visual quando autorizado.
9. Câmeras / VMS não cria convite, reserva, fatura, alarme, acesso físico ou notificação multicanal como domínio próprio.
10. Toda ação sensível de vídeo exige AuthorizationDecision do Core e CameraAuthorizationScope.
11. Exportação e compartilhamento exigem finalidade, proteção, auditoria, expiração, revogação, watermark ou máscara quando aplicável.
12. Vídeo, imagem, evidência, rosto, placa, criança, visitante, funcionário e área sensível devem respeitar Segurança e LGPD.
13. Câmeras / VMS não acessa banco interno de outro módulo.
14. Câmeras / VMS não fica preso a marca ou protocolo único.

Use a frase de governança:

Câmeras / VMS governa vídeo. Dispositivos governam equipamentos. Gateway conecta. Core autoriza. Herança governa políticas. Segurança e LGPD protege. Auditoria registra.

Agora corrija a resposta sem criar acoplamento.
```

# 34. Regra de separação entre chat de governança e chats de módulo

Use esta regra para evitar mistura de escopo durante o trabalho com o projeto:

```text
Este chat é de governança e consolidação dos documentos centrais.
O desenvolvimento detalhado de cada módulo deve acontecer no chat específico do módulo.
Se o usuário tentar planejar módulo completo neste chat de governança, lembre antes de avançar:
"Este chat é de governança. O ideal é desenvolver o módulo no chat próprio e voltar aqui apenas para consolidar os arquivos raiz."

Exceção:
Se o usuário decidir resolver mesmo assim neste chat, avance sem perder a rastreabilidade e registre que foi exceção operacional.
```

# 35. Prompt específico para fronteira de Alarmes

Use quando for revisar, planejar ou discutir o módulo Alarmes:

```text
Estamos trabalhando no módulo Alarmes do projeto "NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada".

Use obrigatoriamente os documentos centrais como fonte oficial:

1. 00_BIBLIA_DO_PROJETO.md
2. 01_MAPA_DE_MODULOS.md
3. 02_REGRAS_DE_ARQUITETURA.md
4. 03_DECISOES_OFICIAIS.md
5. 04_PROMPTS_DE_TRABALHO.md

Fronteira oficial aprovada:

Alarmes representa o domínio operacional de alarme, segurança perimetral, detecção, resposta e histórico de eventos críticos.

Alarmes é dono de:

- AlarmResource
- AlarmPanelResource
- AlarmPanelBinding
- AlarmSector
- AlarmZone
- AlarmArea
- AlarmSensorBinding
- AlarmSensorState
- AlarmArmingState
- AlarmMode
- AlarmRule
- AlarmPolicyBinding
- AlarmSchedule
- AlarmWindow
- AlarmEvent
- AlarmTrigger
- AlarmPanicEvent
- AlarmTamperEvent
- AlarmFaultEvent
- AlarmAcknowledgement
- AlarmSilenceAction
- AlarmResetAction
- AlarmEscalation
- AlarmEscalationLevel
- AlarmEscalationTargetReference
- AlarmIncident
- AlarmResponsePlan
- AlarmHistory
- AlarmCommandRequest
- AlarmExecutionResult
- AlarmAuthorizationScope
- AlarmOfflinePolicy
- AlarmDeviceBinding
- AlarmDeviceCapabilityRequirement
- AlarmSyncState
- AlarmSignalTransportReference
- AlarmNotificationRequest
- AlarmTicketRequest
- AlarmVideoEvidenceRequest

Alarmes não é dono de:

- Tenant
- Context
- UserAccount
- AuthorizationDecision
- License
- FeatureFlag
- PersonProfile
- ClientProfile
- Unit, Block, Area ou Environment
- OrganizationRecord
- PartnerRecord
- DeviceRecord
- DeviceHealth oficial
- DeviceDiagnostic oficial
- GatewayRecord
- Tunnel, rota ou diagnóstico de rede
- AccessEvent
- CameraEvidence
- VisitorInvite
- Reservation
- Invoice
- SupportTicket como central completa de atendimento
- Templates, preferências e envio multicanal de Notificações
- Workflow genérico de Automações
- Política avançada de LGPD como fonte primária
- Auditoria avançada de compliance

Regras obrigatórias:

- Alarmes não substitui Core Platform.
- Alarmes não cria Tenant, Context, UserAccount, License, FeatureFlag ou AuthorizationDecision.
- Alarmes não substitui Herança e Permissões.
- Alarmes não substitui Pessoas e Clientes.
- Alarmes não substitui Unidades, Blocos, Áreas e Ambientes.
- Alarmes não substitui Organizações.
- Alarmes não substitui Parceiros.
- Alarmes não substitui Gateway Local / Mikrotik / Tunnel.
- Alarmes não substitui Dispositivos.
- AlarmResource não é DeviceRecord.
- Alarmes não substitui Controle de Acesso.
- Alarmes não cria AccessEvent.
- Alarmes não substitui Câmeras / VMS.
- Alarmes não cria live view, playback, mosaico, clipe ou evidência.
- Alarmes não substitui Notificações.
- Alarmes não envia multicanal como domínio próprio.
- Alarmes não substitui Tickets.
- Alarmes não mantém central completa de atendimento/SLA.
- Alarmes não substitui Automações.
- Alarmes não executa workflow genérico como domínio próprio.
- Toda ação sensível de alarme exige AuthorizationDecision do Core.
- Toda operação offline exige AlarmOfflinePolicy.
- Histórico de pânico e eventos críticos exige proteção reforçada.
- Pessoa tem login próprio.
- Unidade não é login compartilhado.
- Cliente usa apenas o que herdou.
- O chat conversa. O documento manda.
- Quando a fronteira for aprovada e o usuário solicitar planejamento completo, entregue em um único CANVA FINAL, em Markdown limpo, pronto para copiar e colar.
- Decisões novas, regras oficiais e nomenclaturas DEC devem seguir a próxima numeração livre do 03_DECISOES_OFICIAIS.md, sem repetir, pular, renumerar ou reaproveitar códigos já usados.

Frase consolidada:

Alarmes governa a operação de alarme. Dispositivos governam equipamentos. Gateway conecta. Core autoriza. Herança governa políticas. Câmeras / VMS gera evidência. Notificações comunica. Auditoria registra.

Agora execute a tarefa solicitada sem violar essa fronteira.
```

# 36. Prompt anti-regressão específico de Alarmes

Use quando uma resposta tentar transformar Alarmes em módulo universal:

```text
A resposta anterior violou a fronteira oficial de Alarmes.

Reescreva corrigindo obrigatoriamente os pontos abaixo:

1. Alarmes representa apenas o domínio operacional de alarme, segurança perimetral, detecção, resposta e histórico operacional.
2. Tenant, Context, UserAccount, licenças, feature flags e AuthorizationDecision pertencem ao Core Platform.
3. Herança e Permissões governa políticas, mas não arma, desarma, silencia ou escala alarmes.
4. Pessoas e Clientes é dono de PersonProfile, ClientProfile e vínculos pessoais.
5. Unidades, Blocos, Áreas e Ambientes é dono da estrutura física oficial.
6. Organizações referencia e exibe resumo autorizado, mas não executa alarme.
7. Parceiros instala e cadastra por fluxo autorizado, mas não governa a operação de alarme.
8. Dispositivos é dono de DeviceRecord, saúde, status, diagnóstico, credenciais técnicas e ciclo de vida dos equipamentos.
9. AlarmResource não é DeviceRecord.
10. Gateway transporta sinal e comando técnico, mas não é Alarmes.
11. Controle de Acesso publica AccessEvent, mas não vira Alarmes.
12. Câmeras / VMS cria evidência de vídeo, mas não vira Alarmes.
13. Alarmes não envia notificação multicanal como domínio próprio.
14. Alarmes não vira Tickets, Automações, Financeiro, Reservas ou Convites.
15. Toda ação sensível exige CoreAuthorizationAPI, AlarmAuthorizationScope, escopo mínimo, finalidade e auditoria.
16. Operação offline exige AlarmOfflinePolicy.
17. Histórico de pânico, áreas sensíveis, escalonamentos e pessoas acionadas exige proteção reforçada.

Use a frase de governança:

Alarmes governa a operação de alarme. Dispositivos governam equipamentos. Gateway conecta. Core autoriza. Herança governa políticas. Câmeras / VMS gera evidência. Notificações comunica. Auditoria registra.

Agora corrija a resposta sem criar acoplamento.
```

# 37. Prompt específico para fronteira de Financeiro

Use quando for revisar, planejar ou discutir o módulo Financeiro:

```text
Estamos trabalhando no módulo Financeiro do projeto "NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada".

Use obrigatoriamente os documentos centrais como fonte oficial:

1. 00_BIBLIA_DO_PROJETO.md
2. 01_MAPA_DE_MODULOS.md
3. 02_REGRAS_DE_ARQUITETURA.md
4. 03_DECISOES_OFICIAIS.md
5. 04_PROMPTS_DE_TRABALHO.md

Fronteira oficial aprovada:

Financeiro representa o domínio financeiro oficial da plataforma.

Financeiro é dono de:

- BillingAccount
- BillingCustomer
- PayerReference
- FiscalProfile
- PaymentResponsibility
- FinancialContract
- Subscription
- RecurringCharge
- OneTimeCharge
- ChargeItem
- ChargeAllocation
- CostCenter
- CostShareRule
- Invoice
- InvoiceItem
- Payment
- PaymentMethod
- PaymentAttempt
- PixPayment
- BoletoPayment
- CardPayment
- PaymentGatewayReference
- PaymentReconciliation
- PaymentReceipt
- Refund
- Chargeback
- CreditNote
- DebitNote
- Discount
- Interest
- Fine
- Tax
- TaxDocumentReference
- DelinquencyRecord
- FinancialRestrictionSuggestion
- FinancialRestrictionRevocation
- PartnerCommission
- PartnerSettlement
- PartnerPayout
- PartnerRevenueShare
- SplitRule
- FinancialStatement
- CashFlowView
- RevenueReport
- ConsumptionRecord
- ConsumptionCharge
- ReservationCharge
- TicketCharge
- VisitorCharge
- AccessCharge
- CameraCharge
- AlarmCharge
- BillingNotificationRequest
- FinancialAuditTrail

Financeiro não é dono de:

- Tenant
- Context
- UserAccount
- AuthorizationDecision
- Plan, License, FeatureFlag, ModuleRegistry ou Entitlement como fonte oficial
- PartnerRecord ou PartnerProfile
- OrganizationRecord ou OrganizationProfile
- PersonProfile, ClientProfile ou PersonUnitLink
- Unit, Block, Area ou Environment
- Motor de Herança e Permissões
- Bloqueio operacional direto
- AccessEvent, CameraEvidence, AlarmEvent, Reservation, VisitorInvite ou SupportTicket como domínio próprio
- Templates, preferências e envio multicanal de Notificações
- Política avançada de LGPD como fonte primária
- Auditoria avançada de compliance

Regras obrigatórias:

- Financeiro não substitui Core Platform.
- Financeiro não cria Tenant, Context, UserAccount, License, FeatureFlag ou AuthorizationDecision.
- Plan, License, FeatureFlag, ModuleRegistry e Entitlement pertencem ao Core Platform.
- FinancialContract, Subscription, BillingPolicy, PricingSnapshot, Invoice, Payment e PaymentReconciliation pertencem ao Financeiro.
- Financeiro não substitui Master, Parceiros, Organizações, Pessoas e Clientes, Unidades, Herança e Permissões ou módulos comerciais.
- Financeiro publica eventos financeiros, mas não executa bloqueio operacional.
- Eventos financeiros podem influenciar políticas, mas a restrição ou liberação só ocorre por política, AuthorizationDecision do Core e execução do módulo dono.
- Dados financeiros sensíveis exigem finalidade, minimização, criptografia, permissão granular, mascaramento e auditoria.
- Financeiro deve usar adaptadores plugáveis para Pix, boleto, cartão, conciliação, split, fiscal, antifraude, banco, ERP e contabilidade.
- Pessoa tem login próprio.
- Unidade não é login compartilhado.
- Cliente usa apenas o que herdou.
- O chat conversa. O documento manda.
- Quando a fronteira for aprovada e o usuário solicitar planejamento completo, entregue em um único CANVA FINAL, em Markdown limpo, pronto para copiar e colar.
- Decisões novas, regras oficiais e nomenclaturas DEC devem seguir a próxima numeração livre do 03_DECISOES_OFICIAIS.md, sem repetir, pular, renumerar ou reaproveitar códigos já usados.

Frase consolidada:

Financeiro cobra e informa. Herança avalia. Core decide. Módulo dono executa. Auditoria registra.

Agora execute a tarefa solicitada sem violar essa fronteira.
```

# 38. Prompt anti-regressão específico de Financeiro

Use quando uma resposta tentar transformar Financeiro em módulo universal ou em motor de bloqueio operacional:

```text
A resposta anterior violou a fronteira oficial de Financeiro.

Reescreva corrigindo obrigatoriamente os pontos abaixo:

1. Financeiro representa apenas o domínio financeiro oficial da plataforma.
2. Tenant, Context, UserAccount, licenças, feature flags e AuthorizationDecision pertencem ao Core Platform.
3. Plan, License, FeatureFlag, ModuleRegistry e Entitlement pertencem ao Core Platform, sob governança superior do Master.
4. FinancialContract, Subscription, BillingPolicy, PricingSnapshot, Invoice, Payment e PaymentReconciliation pertencem ao Financeiro.
5. Parceiros pode visualizar receita, comissão e repasse por read models autorizados, mas não vira Financeiro.
6. Organizações pode exibir resumo financeiro autorizado, mas não emite fatura nem concilia pagamento.
7. Pessoas e Clientes é dono de PersonProfile e ClientProfile. Financeiro mantém BillingCustomer, PayerReference e FiscalProfile sem substituir cadastro pessoal.
8. Unidades, Blocos, Áreas e Ambientes é dono da estrutura física. Financeiro usa StructureReference para cobrança e rateio.
9. Financeiro não bloqueia portas, câmeras, alarmes, reservas, convites ou tickets diretamente.
10. Financeiro publica eventos financeiros. Herança e Permissões avalia política. Core decide. Módulo dono executa.
11. Notificações envia cobranças, lembretes e recibos por contrato. Financeiro não envia multicanal como domínio próprio.
12. Relatórios / BI consome read models autorizados e não acessa banco interno do Financeiro.
13. Dados financeiros, fiscais, bancários, inadimplência, comprovantes, recibos e exportações exigem finalidade, minimização, mascaramento e auditoria.
14. Financeiro deve usar adaptadores plugáveis e não ficar preso a gateway financeiro único.

Use a frase de governança:

Financeiro cobra e informa. Herança avalia. Core decide. Módulo dono executa. Auditoria registra.

Agora corrija a resposta sem criar acoplamento.
```

# 39. Prompt específico para fronteira de Convites e Visitantes

Use quando for revisar, planejar ou discutir o módulo Convites e Visitantes:

```text
Estamos trabalhando no módulo Convites e Visitantes do projeto "NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada".

Use obrigatoriamente os documentos centrais como fonte oficial:

1. 00_BIBLIA_DO_PROJETO.md
2. 01_MAPA_DE_MODULOS.md
3. 02_REGRAS_DE_ARQUITETURA.md
4. 03_DECISOES_OFICIAIS.md
5. 04_PROMPTS_DE_TRABALHO.md

Fronteira oficial aprovada:

Convites e Visitantes representa o domínio operacional de visita temporária da plataforma.

Convites e Visitantes é dono de:

- VisitorInvite
- TemporaryVisitor
- VisitorProfile, apenas como perfil temporário operacional
- VisitorIdentitySnapshot
- VisitorDocumentSnapshot
- VisitorPhotoSnapshot
- VisitorVehicleSnapshot
- VisitorHostReference
- VisitorUnitReference
- VisitDestinationReference
- VisitAuthorization
- VisitWindow
- VisitPurpose
- VisitType
- VisitorApproval
- VisitorDenial
- VisitorCheckIn
- VisitorCheckOut
- VisitorVisitSession
- VisitorOverstay
- VisitorBan
- VisitorWatchlistReference
- TemporaryVisitPass, como passe lógico de visita
- VisitorQrRequest
- VisitorAccessRequest
- VisitorAccessArea
- VisitorAllowedArea
- VisitorCompanion
- DeliveryVisit
- ServiceProviderTemporaryVisit
- RecurringOperationalInvite
- EventGuestList
- ReservationGuestList, como lista de convidados
- VisitorChargeRequest
- VisitorPenaltyRequest
- VisitorNotificationRequest
- VisitorTicketRequest
- VisitorVideoEvidenceRequest
- VisitorAlarmContextEvent
- VisitorAuditTrail

Convites e Visitantes não é dono de:

- Tenant
- Context
- UserAccount
- AuthorizationDecision
- PersonProfile
- ClientProfile
- PersonUnitLink
- Unit, Block, Area ou Environment
- OrganizationRecord
- PartnerRecord
- DeviceRecord
- AccessCredential
- TemporaryAccessCredential
- QrCredential
- AccessEvent
- CameraEvidence
- AlarmEvent
- Invoice
- Reservation
- SupportTicket
- NotificationTemplate

Regras obrigatórias:

- Convites e Visitantes não substitui Core Platform.
- Convites e Visitantes não cria Tenant, Context, UserAccount ou AuthorizationDecision.
- Convites e Visitantes não substitui Pessoas e Clientes.
- VisitorIdentitySnapshot, VisitorDocumentSnapshot, VisitorPhotoSnapshot e VisitorVehicleSnapshot não são PersonProfile.
- Convites e Visitantes não substitui Controle de Acesso.
- TemporaryVisitPass é passe lógico da visita; a credencial física pertence ao Controle de Acesso.
- QR temporário é solicitado por Convites e Visitantes e criado pelo Controle de Acesso.
- Convites e Visitantes não abre porta, portão ou catraca diretamente.
- Convites e Visitantes não cria AccessEvent.
- Convites e Visitantes não substitui Financeiro.
- Taxa, multa ou serviço de visitante deve ser solicitado ao Financeiro.
- Convites e Visitantes não substitui Reservas.
- ReservationGuestList é lista de convidados, não agenda nem disponibilidade.
- Convites e Visitantes não substitui Tickets.
- Convites solicita ticket por ocorrência; Tickets atende.
- Convites e Visitantes não substitui Notificações.
- Notificações envia por canal, template e preferência.
- VisitorBan exige motivo, escopo, validade, revisão, retenção, autorização e auditoria.
- Pessoa tem login próprio.
- Unidade não é login compartilhado.
- Cliente usa apenas o que herdou.
- O chat conversa. O documento manda.
- Quando a fronteira for aprovada e o usuário solicitar planejamento completo, entregue em um único CANVA FINAL, em Markdown limpo, pronto para copiar e colar.
- Decisões novas, regras oficiais e nomenclaturas DEC devem seguir a próxima numeração livre do 03_DECISOES_OFICIAIS.md, sem repetir, pular, renumerar ou reaproveitar códigos já usados.

Frase consolidada:

Convites organiza a visita. Core autoriza. Herança governa políticas. Controle de Acesso executa passagem física. Auditoria registra.

Frase de blindagem:

Convites não abre porta, não cria pessoa permanente, não gera cobrança, não envia notificação multicanal e não cria credencial física.

Agora execute a tarefa solicitada sem violar essa fronteira.
```

# 40. Prompt anti-regressão específico de Convites e Visitantes

Use quando uma resposta tentar transformar Convites e Visitantes em módulo universal:

```text
A resposta anterior violou a fronteira oficial de Convites e Visitantes.

Reescreva corrigindo obrigatoriamente os pontos abaixo:

1. Convites e Visitantes governa convite, visitante temporário, autorização temporária, aprovação, janela de visita, check-in, check-out e histórico de visita.
2. Convites e Visitantes não cria Tenant, Context, UserAccount ou AuthorizationDecision.
3. Convites e Visitantes não substitui Pessoas e Clientes.
4. Snapshots temporários de visitante não são PersonProfile, ClientProfile ou cadastro permanente.
5. Convites e Visitantes não substitui Controle de Acesso.
6. QR temporário, credencial temporária, AccessPass, AccessEvent e abertura de porta pertencem ao Controle de Acesso.
7. Convites e Visitantes não abre porta diretamente.
8. Convites e Visitantes não substitui Financeiro.
9. Taxas, multas e cobranças de visitante pertencem ao Financeiro.
10. Convites e Visitantes não substitui Reservas.
11. Reserva, agenda, disponibilidade e no-show pertencem a Reservas.
12. Convites e Visitantes não substitui Tickets.
13. Convites e Visitantes não substitui Notificações.
14. Visitante banido exige governança LGPD, motivo, escopo, validade, revisão e auditoria.
15. Todo módulo se comunica por APIs, eventos, contratos, webhooks, barramento de eventos ou read models autorizados.

Use a frase:

Convites organiza a visita. Core autoriza. Herança governa políticas. Controle de Acesso executa passagem física. Auditoria registra.

Agora corrija a resposta sem criar acoplamento.
```

# 41. Próximo módulo recomendado

Após Convites e Visitantes, o próximo módulo recomendado é Tickets.

```text
Estamos trabalhando no projeto "NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada".

Este chat será dedicado exclusivamente ao módulo Tickets.

Use obrigatoriamente os documentos centrais como fonte oficial.

Antes de planejar o módulo completo, resolva a fronteira do módulo Tickets, especialmente a separação entre chamado, ocorrência, atendimento, SLA, comentários, anexos, resolução, escalonamento, manutenção, suporte, eventos de módulos comerciais, financeiro, auditoria e notificações.

Regra central:
Módulo dono gera a ocorrência. Tickets organiza o atendimento. Core autoriza. Auditoria registra.

Não avance para o planejamento completo antes de resolver a fronteira.
```


# 42. Prompt específico para fronteira de Tickets

Use quando for revisar, planejar ou discutir o módulo Tickets:

```text
Estamos trabalhando no módulo Tickets do projeto "NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada".

Use obrigatoriamente os documentos centrais como fonte oficial:

1. 00_BIBLIA_DO_PROJETO.md
2. 01_MAPA_DE_MODULOS.md
3. 02_REGRAS_DE_ARQUITETURA.md
4. 03_DECISOES_OFICIAIS.md
5. 04_PROMPTS_DE_TRABALHO.md

Fronteira oficial aprovada:

Tickets representa o domínio operacional de chamados, solicitações, ocorrências, atendimento, manutenção operacional, comunicação operacional, SLA, comentários, anexos, escalonamento, histórico, resolução e reabertura.

Tickets é dono de:

- Ticket
- OperationalTicket
- MaintenanceTicket
- IncidentTicket
- ComplaintTicket
- ServiceRequestTicket
- TicketCategory
- TicketPriority
- TicketStatus
- TicketType
- TicketSource
- TicketRequesterReference
- TicketAssigneeReference
- TicketWatcherReference
- TicketTeamReference
- TicketParticipantReference
- TicketComment
- TicketInternalNote
- TicketAttachment
- TicketAttachmentReference
- TicketSLA
- TicketSLAClock
- TicketSLABreach
- TicketEscalation
- TicketEscalationLevel
- TicketResolution
- TicketReopen
- TicketClosureReason
- TicketLinkedResource
- TicketModuleReference
- Referências tipadas para recursos externos autorizados
- TicketAuditTrail

Tickets não é dono de:

- Tenant
- Context
- UserAccount
- AuthorizationDecision
- PersonProfile
- ClientProfile
- Unit, Block, Area ou Environment
- OrganizationRecord
- PartnerRecord
- GatewayRecord, tunnel, rota, comando técnico ou diagnóstico oficial de gateway
- DeviceRecord, DeviceHealth ou DeviceDiagnostic oficial
- AccessCredential, AccessEvent, AccessGrant ou AccessDeny
- CameraResource, CameraStream, CameraEvidence, CameraClip ou CameraSnapshot
- AlarmEvent, AlarmIncident, arme, desarme, silêncio ou reset operacional
- Invoice, Payment, Pix, boleto, cartão, inadimplência, repasse ou comissão
- VisitorInvite, aprovação de visitante, check-in, check-out ou QR temporário
- Reservation, agenda, disponibilidade ou no-show
- Announcement, comunicado institucional ou leitura obrigatória
- NotificationTemplate, canal de envio ou log de entrega multicanal
- AutomationWorkflow, gatilho, condição ou ação genérica
- BI avançado acessando banco interno

Regras obrigatórias:

- Tickets não substitui Core Platform.
- Tickets não substitui Herança e Permissões.
- Tickets não cria pessoa, cliente, unidade, organização, parceiro, gateway, dispositivo, acesso, câmera, alarme, cobrança, convite, reserva, mural, notificação, automação ou relatório avançado como domínio próprio.
- Tickets pode vincular recursos externos por TicketLinkedResource e referências tipadas autorizadas.
- Vínculo ao ticket não transfere domínio do recurso vinculado.
- Tickets pode solicitar ações a outros módulos por contrato autorizado, mas não executa domínios externos.
- Tickets sensíveis, anexos e evidências exigem classificação, mascaramento, retenção, autorização e auditoria.
- SLA e escalonamento pertencem ao ciclo do ticket, mas não executam ações operacionais de outros módulos.
- OperationalTicket pertence a Tickets.
- PlatformSupportCase e SupportOperationCase pertencem a Suporte e Operação.
- Todo planejamento completo deve ser entregue em um único CANVA FINAL, pronto para copiar e colar.
- Toda decisão nova deve seguir a próxima numeração livre do 03_DECISOES_OFICIAIS.md, sem repetir, pular, renumerar ou reaproveitar DEC.
- O chat conversa. O documento manda.

Frase consolidada:

Tickets atende. Core autoriza. Herança e Permissões governa políticas. Módulo dono executa. Auditoria registra.

Agora execute a tarefa solicitada sem violar essa fronteira.
```


# 43. Prompt específico para fronteira de Mural Informativo

Use quando for revisar, planejar ou discutir o módulo Mural Informativo:

```text
Estamos trabalhando no módulo Mural Informativo do projeto "NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada".

Use obrigatoriamente os documentos centrais como fonte oficial:

1. 00_BIBLIA_DO_PROJETO.md
2. 01_MAPA_DE_MODULOS.md
3. 02_REGRAS_DE_ARQUITETURA.md
4. 03_DECISOES_OFICIAIS.md
5. 04_PROMPTS_DE_TRABALHO.md

Fronteira oficial aprovada:

Mural Informativo representa o domínio operacional de comunicação institucional e operacional oficial da plataforma.

Mural Informativo é dono de:

- Announcement
- AnnouncementPost
- AnnouncementDraft
- AnnouncementPublication
- AnnouncementCategory
- AnnouncementPriority
- AnnouncementStatus
- AnnouncementAudience
- AnnouncementAudienceReference
- AnnouncementTargetStructure
- AnnouncementTargetUnit
- AnnouncementTargetArea
- AnnouncementTargetBlock
- AnnouncementTargetRole
- AnnouncementAttachment
- AnnouncementDocumentReference
- AnnouncementReadReceipt
- AnnouncementAcknowledgement
- AnnouncementAcceptance
- AnnouncementMandatoryRead
- AnnouncementPinned
- AnnouncementHighlight
- AnnouncementArchive
- AnnouncementQuestion
- AnnouncementReaction
- AnnouncementPoll
- PollQuestion
- PollOption
- PollVote
- AnnouncementNotificationRequest
- AnnouncementTicketRequest
- AnnouncementAuditTrail
- AnnouncementReadModel
- AnnouncementResourceReference
- MuralAuthorizationScope
- AnnouncementExecutionResult

Mural Informativo não é dono de:

- Tenant
- Context
- UserAccount
- AuthorizationDecision
- PersonProfile
- ClientProfile
- PersonUnitLink
- Unit, Block, Area ou Environment
- OrganizationRecord
- OrganizationProfile
- NotificationTemplate
- NotificationPreference
- NotificationDeliveryLog
- Ticket
- OperationalTicket
- SLA, atendimento, resolução e reabertura
- Invoice, boleto, Pix, cartão, pagamento, inadimplência ou recibo
- VisitorInvite, QR temporário, check-in ou check-out
- Reservation, agenda, disponibilidade ou no-show
- AccessEvent, abertura de porta ou revogação de credencial
- CameraEvidence, live view, playback, clipe ou snapshot
- AlarmEvent, arme, desarme, silêncio ou disparo
- BI avançado acessando banco interno
- GED completo sem decisão oficial

Regras obrigatórias:

- Mural não substitui Core Platform.
- Mural não substitui Herança e Permissões.
- Mural não mantém cadastro primário de pessoa, cliente, unidade ou organização.
- Mural solicita notificações, mas Notificações entrega.
- Mural pode originar ticket, mas Tickets governa atendimento.
- Mural pode publicar aviso financeiro, mas Financeiro cobra.
- Mural pode publicar aviso de reserva, visita, acesso, câmera ou alarme, mas o módulo dono executa o recurso real.
- Leitura obrigatória, ciência e aceite não são motor de permissão.
- Segmentação ocorre por referências autorizadas.
- Anexos do Mural não substituem módulo Documentos/GED.
- Mural expõe read models autorizados para BI.
- Todo planejamento completo deve ser entregue em um único CANVA FINAL, pronto para copiar e colar.
- Toda decisão nova deve seguir a próxima numeração livre do 03_DECISOES_OFICIAIS.md, sem repetir, pular, renumerar ou reaproveitar DEC.
- O chat conversa. O documento manda.

Frase consolidada:

Mural publica. Core autoriza. Herança governa políticas. Notificações entrega. Tickets atende. Financeiro cobra. BI analisa por read model. Auditoria registra.

Agora execute a tarefa solicitada sem violar essa fronteira.
```

# 44. Prompt anti-regressão específico de Mural Informativo

Use quando uma resposta tentar transformar Mural Informativo em módulo universal:

```text
A resposta anterior violou a fronteira oficial de Mural Informativo.

Reescreva corrigindo obrigatoriamente os pontos abaixo:

1. Mural Informativo governa comunicados, avisos, publicações, anexos do comunicado, enquetes, leitura obrigatória, ciência, aceite, segmentação, histórico de leitura, fixação, destaque, arquivamento e relatórios próprios.
2. Mural não cria Tenant, Context, UserAccount ou AuthorizationDecision.
3. Mural não substitui Pessoas e Clientes, Unidades, Organizações ou Parceiros.
4. Mural solicita notificações, mas Notificações entrega.
5. Mural pode originar ticket, mas Tickets governa atendimento, SLA, resolução e reabertura.
6. Mural pode publicar aviso financeiro, mas Financeiro governa cobrança, fatura, pagamento, inadimplência e recibo.
7. Mural pode publicar regra de visita, reserva, acesso, câmera ou alarme, mas o módulo dono executa o recurso real.
8. Leitura obrigatória, ciência e aceite são evidências de comunicação, não permissão, bloqueio operacional ou consentimento LGPD universal.
9. Segmentação do Mural ocorre por referências autorizadas, sem cadastro paralelo de pessoas, unidades ou organizações.
10. Anexos do Mural são anexos do comunicado, não GED completo.
11. BI consome apenas AnnouncementReadModel autorizado, sem acessar banco interno.
12. Todo acesso a histórico de leitura, aceite, público-alvo, anexos e comunicados sensíveis exige finalidade, permissão e auditoria.

Use a frase:

Mural publica. Core autoriza. Herança governa políticas. Notificações entrega. Tickets atende. Financeiro cobra. BI analisa por read model. Auditoria registra.

Agora corrija a resposta sem criar acoplamento.
```

# 45. Próximo módulo recomendado

Após Mural Informativo, o próximo módulo recomendado é Notificações.

```text
Estamos trabalhando no projeto "NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada".

Este chat será dedicado exclusivamente ao módulo Notificações.

Use obrigatoriamente os documentos centrais como fonte oficial.

Antes de planejar o módulo completo, resolva a fronteira do módulo Notificações, especialmente a separação entre solicitação de notificação, template, canal, preferência, opt-in/opt-out, fila, tentativa, retry, entrega, falha, log multicanal, push, e-mail, SMS, WhatsApp, eventos de módulos comerciais, auditoria e LGPD.

Regra central:
Módulo dono solicita. Notificações entrega. Core autoriza. Segurança e LGPD protege. Auditoria registra.

Não avance para o planejamento completo antes de resolver a fronteira.
```


# 46. Prompt específico para fronteira de Notificações

Use quando for revisar, planejar ou discutir o módulo Notificações:

```text
Estamos trabalhando no módulo Notificações do projeto "NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada".

Use obrigatoriamente os documentos centrais como fonte oficial:

1. 00_BIBLIA_DO_PROJETO.md
2. 01_MAPA_DE_MODULOS.md
3. 02_REGRAS_DE_ARQUITETURA.md
4. 03_DECISOES_OFICIAIS.md
5. 04_PROMPTS_DE_TRABALHO.md

Fronteira oficial aprovada:

Notificações representa o domínio operacional de envio, entrega, preferências, templates, canais, filas, tentativas, retries, falhas, provedores, opt-in, opt-out, logs de entrega, rastreabilidade e relatórios próprios de mensagens.

Notificações é dona de:

- NotificationRequest
- Notification
- NotificationMessage
- NotificationTemplate
- NotificationTemplateVersion
- NotificationChannel
- NotificationRecipientReference
- NotificationContactReference
- NotificationEndpoint
- NotificationPreference
- NotificationOptIn
- NotificationOptOut
- NotificationQueue
- NotificationJob
- NotificationAttempt
- NotificationRetryPolicy
- NotificationDeliveryLog
- NotificationProvider
- NotificationProviderAdapter
- NotificationProviderCredentialReference
- NotificationWebhook
- NotificationWebhookDeliveryLog
- NotificationSuppressionList
- NotificationRateLimitPolicy
- NotificationPriority
- NotificationCriticalAlert
- NotificationDigest
- NotificationBatch
- NotificationSchedule
- NotificationFailureReason
- NotificationAuditTrail
- NotificationReadModel
- NotificationResourceReference
- NotificationAuthorizationScope
- NotificationExecutionResult

Notificações não é dona de:

- Tenant
- Context
- UserAccount
- Role
- Permission
- PermissionGrant
- InheritanceGrant
- License
- FeatureFlag
- AuthorizationDecision final
- PersonProfile
- ClientProfile
- PersonUnitLink
- E-mail ou telefone canônico como cadastro primário
- Unit, Block, Area ou Environment
- OrganizationRecord
- OrganizationProfile
- Announcement
- Ticket ou OperationalTicket
- Invoice ou cobrança
- VisitorInvite
- Reservation
- AccessEvent
- CameraEvidence
- AlarmEvent
- GatewayRecord
- DeviceRecord
- AutomationWorkflow
- MarketplaceConnector
- Banco interno de BI

Regras obrigatórias:

- NotificationRequest é apenas solicitação de entrega.
- NotificationRequest não transfere domínio do módulo solicitante.
- Mural publica. Notificações entrega.
- Tickets atende. Notificações entrega.
- Financeiro cobra. Notificações entrega.
- Convites governa visita. Notificações entrega.
- Reservas agenda. Notificações entrega.
- Controle de Acesso executa acesso físico. Notificações entrega.
- Câmeras / VMS governa vídeo. Notificações entrega.
- Alarmes governa alarme. Notificações entrega.
- Gateway governa conectividade. Notificações entrega.
- Dispositivos governa equipamentos. Notificações entrega.
- Automações pode solicitar notificação como ação autorizada, mas Notificações não executa workflow genérico.
- Marketplace fornece conectores. Notificações governa uso operacional dos providers.
- BI consome apenas NotificationReadModel autorizado.
- NotificationPreference e NotificationEndpoint não são cadastro primário de pessoa.
- Opt-out só pode ser ignorado em alerta crítico autorizado, com política, finalidade, AuthorizationDecision, minimização e auditoria.
- Toda ação sensível deve respeitar Core Platform, Herança e Permissões, Segurança e LGPD e Auditoria.
- Pessoa tem login próprio.
- Unidade não é login compartilhado.
- Cliente usa apenas o que herdou.
- O chat conversa. O documento manda.

Frase consolidada:

Módulo dono solicita. Notificações entrega. Core autoriza. Política influencia. Auditoria registra.

Agora execute a tarefa solicitada sem violar essa fronteira.
```

# 47. Prompt anti-regressão específico de Notificações

Use quando uma resposta tentar transformar Notificações em módulo universal:

```text
A resposta anterior violou a fronteira oficial de Notificações.

Reescreva corrigindo obrigatoriamente os pontos abaixo:

1. Notificações governa envio, entrega, preferências, templates, canais, filas, tentativas, retries, falhas, providers, opt-in, opt-out, delivery logs, webhooks de notificação e read models próprios.
2. Notificações não cria Tenant, Context, UserAccount, License, FeatureFlag ou AuthorizationDecision final.
3. Notificações não substitui Pessoas e Clientes e não mantém cadastro primário de pessoa, cliente, telefone ou e-mail canônico.
4. NotificationPreference e NotificationEndpoint são apenas configurações e endpoints operacionais de entrega.
5. NotificationRequest não transfere domínio do módulo solicitante.
6. Notificações não substitui Mural, Tickets, Financeiro, Convites, Reservas, Controle de Acesso, Câmeras, Alarmes, Gateway, Dispositivos ou Automações.
7. NotificationSchedule agenda entrega de mensagem, mas não executa workflow genérico.
8. Marketplace fornece conectores. Notificações governa uso operacional dos providers.
9. BI consome apenas NotificationReadModel autorizado, sem acesso a banco interno.
10. Opt-out só pode ser ignorado em NotificationCriticalAlert com política autorizada, finalidade legítima, AuthorizationDecision, minimização e auditoria.
11. Conteúdo sensível, logs, tracking, webhooks e exportações exigem finalidade, permissão, retenção, mascaramento e auditoria.

Use a frase:

Módulo dono solicita. Notificações entrega. Core autoriza. Política influencia. Auditoria registra.

Agora corrija a resposta sem criar acoplamento.
```

# 48. Registro do módulo recomendado anterior

Módulo anteriormente recomendado: Automações.

Status: concluído e consolidado nesta atualização.

# 49. Prompt específico para fronteira de Automações

Use quando for revisar, planejar ou discutir o módulo Automações:

```text
Estamos trabalhando no módulo Automações do projeto "NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada".

Use obrigatoriamente os documentos centrais como fonte oficial:

1. 00_BIBLIA_DO_PROJETO.md
2. 01_MAPA_DE_MODULOS.md
3. 02_REGRAS_DE_ARQUITETURA.md
4. 03_DECISOES_OFICIAIS.md
5. 04_PROMPTS_DE_TRABALHO.md

Fronteira oficial aprovada:

Automações representa o domínio operacional de workflows autorizados.

Automações é dona de:

- AutomationWorkflow
- AutomationRule
- AutomationTrigger
- AutomationCondition
- AutomationAction
- AutomationActionRequest
- AutomationExecution
- AutomationExecutionStep
- AutomationExecutionResult
- AutomationExecutionLog
- AutomationRetryPolicy
- AutomationSchedule
- AutomationDelay
- AutomationTemplate
- AutomationTemplateVersion
- AutomationScope
- AutomationAuthorizationScope operacional
- AutomationResourceReference operacional
- AutomationActorReference
- AutomationTargetReference
- AutomationWebhook
- AutomationWebhookDeliveryLog
- AutomationConnectorAction
- AutomationApprovalRequest
- AutomationHumanApproval
- AutomationReadModel
- AutomationAuditTrail operacional

Automações não é dona de:

- Tenant
- Context
- UserAccount
- Role
- Permission
- PermissionGrant
- InheritanceGrant
- AuthorizationDecision final
- PersonProfile
- ClientProfile
- PersonUnitLink
- Unit, Block, Area ou Environment
- OrganizationRecord
- PartnerRecord
- NotificationRequest como domínio próprio
- Ticket
- Invoice
- Reservation
- VisitorInvite
- AccessEvent
- AccessGrant
- CameraEvidence
- AlarmEvent operacional
- GatewayCommand como domínio próprio
- DeviceRecord
- MarketplaceConnector
- BI avançado

Regras obrigatórias:

- Automações não substitui Core Platform.
- Automações não substitui Herança e Permissões.
- Automações não substitui Notificações.
- Automações não substitui Tickets.
- Automações não substitui Financeiro.
- Automações não substitui Convites e Visitantes.
- Automações não substitui Reservas.
- Automações não substitui Controle de Acesso.
- Automações não substitui Câmeras / VMS.
- Automações não substitui Alarmes.
- Automações não substitui Gateway.
- Automações não substitui Dispositivos.
- Automações não substitui Marketplace.
- Automações não substitui Relatórios / BI.
- Automações não acessa banco interno de outro módulo.
- Automações não executa domínio externo diretamente.
- Toda ação externa deve virar AutomationActionRequest para o módulo dono.
- Toda ação sensível deve respeitar política, escopo, AuthorizationDecision do Core, validação do módulo dono, logs e auditoria.
- Ações críticas podem exigir aprovação humana.
- Retry não pode burlar negativa do Core ou do módulo dono.
- Webhooks e conectores usam Marketplace e credenciais por referência segura.
- BI consome apenas AutomationReadModel autorizado.
- O chat conversa. O documento manda.

Frase consolidada:

O fato nasce no módulo dono. Automações avalia o workflow. Política influencia. Core decide. Módulo dono executa. Automações registra. Auditoria preserva.

Frase curta:

Automações orquestra. Módulo dono executa. Core autoriza. Auditoria registra.

Agora execute a tarefa solicitada sem violar essa fronteira.
```

# 50. Prompt anti-regressão específico de Automações

Use quando uma resposta tentar transformar Automações em módulo mestre:

```text
A resposta anterior violou a fronteira oficial de Automações.

Reescreva corrigindo obrigatoriamente os pontos abaixo:

1. Automações representa apenas o domínio operacional de workflows autorizados.
2. Tenant, Context, UserAccount, licenças, feature flags e AuthorizationDecision pertencem ao Core Platform.
3. Herança e Permissões influencia políticas, mas não executa workflows.
4. Automações não envia notificações diretamente; Notificações entrega.
5. Automações não cria nem gerencia tickets; Tickets governa atendimento e SLA.
6. Automações não gera cobrança, boleto, Pix, cartão, recibo, repasse ou inadimplência; Financeiro governa finanças.
7. Automações não cria convites, reservas, acessos, vídeos, alarmes, gateways ou dispositivos como domínio próprio.
8. Automações não abre portas, não arma alarmes, não executa comandos de gateway e não manipula dispositivos diretamente.
9. Toda ação externa deve ser AutomationActionRequest enviada ao módulo dono por contrato autorizado.
10. Toda ação crítica exige política, escopo, autorização do Core, validação do módulo dono, auditoria e aprovação humana quando exigida.
11. Marketplace fornece conectores; Automações apenas usa ações autorizadas.
12. BI consome apenas AutomationReadModel autorizado, sem acessar banco interno.
13. Automações não acessa banco interno de outro módulo.
14. Automações não vira módulo mestre da plataforma.

Use a frase de governança:

Automações orquestra. Módulo dono executa. Core autoriza. Auditoria registra.

Agora corrija a resposta sem criar acoplamento.
```

# 51. Próximo módulo recomendado

Histórico: Auditoria e Compliance já foi o módulo recomendado e já está consolidado nesta raiz.

Motivo: após Automações, o próximo risco arquitetural é separar corretamente conectores, adapters, providers, credenciais, capacidades externas e catálogo de integrações, sem deixar Marketplace executar domínio operacional e sem deixar módulos comerciais virarem marketplace paralelo.

Frase guia do próximo módulo:

Marketplace disponibiliza conectores. Módulo dono usa por contrato. Core autoriza. Segurança protege credenciais. Auditoria registra.


# 52. Prompt específico para fronteira de Marketplace de Integrações

Use quando for revisar, planejar ou discutir o módulo Marketplace de Integrações:

```text
Estamos trabalhando no módulo Marketplace de Integrações do projeto "NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada".

Use obrigatoriamente os documentos centrais como fonte oficial:

1. 00_BIBLIA_DO_PROJETO.md
2. 01_MAPA_DE_MODULOS.md
3. 02_REGRAS_DE_ARQUITETURA.md
4. 03_DECISOES_OFICIAIS.md
5. 04_PROMPTS_DE_TRABALHO.md

Fronteira oficial aprovada:

Marketplace de Integrações representa o domínio oficial de catálogo, publicação, aprovação, certificação, instalação, habilitação, desabilitação, versionamento, escopo, compatibilidade, adapters, providers, pacotes, templates, credenciais por referência, webhooks externos, termos, compliance, status, logs técnicos e governança de integrações externas.

Marketplace é dono de:

- MarketplaceConnector
- MarketplaceConnectorVersion
- MarketplaceConnectorCatalog
- MarketplaceConnectorCategory
- MarketplaceConnectorCapability
- MarketplaceConnectorRequirement
- MarketplaceConnectorCompatibility
- MarketplaceConnectorInstallation
- MarketplaceConnectorActivation
- MarketplaceConnectorScope
- MarketplaceAuthorizationScope
- MarketplaceProvider
- MarketplaceProviderProfile
- MarketplaceProviderStatus
- MarketplaceConnectorAdapter
- MarketplaceIntegrationTemplate
- MarketplaceIntegrationPackage
- MarketplaceConnectorCredentialReference
- IntegrationCredentialReference
- ProviderCredentialReference
- ConnectorSecretReference
- ConnectorDataProcessingAgreement
- ConnectorPrivacyPolicyReference
- ConnectorTermsAcceptance
- ConnectorRiskAssessment
- ConnectorSecurityAssessment
- MarketplaceConnectorHealth
- MarketplaceConnectorLog
- ConnectorAuditTrail
- ConnectorReadModel

Marketplace não é dono de:

- Tenant
- Context
- UserAccount
- AuthorizationDecision
- License oficial
- FeatureFlag oficial
- Plan oficial
- ModuleRegistry oficial
- PersonProfile
- ClientProfile
- PersonUnitLink
- Unit, Block, Area ou Environment
- OrganizationRecord
- PartnerRecord
- GatewayRecord
- Tunnel
- Rotas
- Diagnóstico técnico de gateway
- DeviceRecord
- DeviceHealth
- DeviceDiagnostic
- AccessEvent
- AccessGrant
- Live view
- Playback
- Clipe
- Snapshot
- Evidência
- AlarmEvent operacional
- Invoice
- Payment
- Pix
- Boleto
- VisitorInvite
- Reservation
- Ticket
- Announcement
- NotificationRequest
- NotificationDeliveryLog
- AutomationWorkflow
- AutomationExecution
- WhiteLabelTheme
- BI Dashboard avançado

Regras obrigatórias:

- Marketplace fornece conectores. Módulo dono governa e executa.
- Marketplace não executa regra operacional de módulos donos.
- Marketplace não cria motor paralelo de autorização.
- Marketplace não decide licença, plano, entitlement ou feature flag oficial.
- MarketplaceIntegrationLicenseView, MarketplaceIntegrationFeatureFlagView e MarketplaceEntitlementView são apenas read models autorizados.
- Credenciais de integração devem ser sempre tratadas por referência segura.
- Segredo bruto não pode aparecer em tela, evento, log, exportação ou payload público.
- Conector sensível exige escopo, finalidade, LGPD, auditoria e avaliação de risco.
- MarketplaceConnectorHealth não substitui DeviceHealth, GatewayHealth, NotificationDeliveryLog ou log operacional do módulo dono.
- Marketplace não acessa banco interno de outro módulo.
- Hardware deve continuar agnóstico, multimarcas e plugável.
- O chat conversa. O documento manda.

Frase consolidada:

Marketplace cataloga e disponibiliza. Core autoriza. Herança e Permissões influencia. Segurança e LGPD protege. Módulo dono executa. Auditoria registra.

Frase curta:

Marketplace fornece conectores. Módulo dono executa.

Agora execute a tarefa solicitada sem violar essa fronteira.
```

# 53. Prompt anti-regressão específico de Marketplace de Integrações

Use quando uma resposta tentar transformar Marketplace em central operacional invisível:

```text
A resposta anterior violou a fronteira oficial de Marketplace de Integrações.

Reescreva corrigindo obrigatoriamente os pontos abaixo:

1. Marketplace de Integrações representa catálogo, conectores, adapters, providers, versões, instalações, escopos, credenciais por referência, compliance, status e logs técnicos de integração.
2. Tenant, Context, UserAccount, licenças, feature flags e AuthorizationDecision pertencem ao Core Platform.
3. Marketplace não executa regra operacional de módulos donos.
4. Marketplace não abre porta, não revoga credencial física e não cria AccessEvent.
5. Marketplace não cria live view, playback, clipe, snapshot ou evidência.
6. Marketplace não arma, desarma, silencia ou dispara alarme.
7. Marketplace não gera fatura, Pix, boleto, cartão, pagamento, inadimplência, repasse ou comissão.
8. Marketplace não cria convite, QR temporário, reserva, ticket, comunicado, notificação ou workflow como domínio próprio.
9. Marketplace não substitui Gateway, Dispositivos, Controle de Acesso, Câmeras / VMS, Alarmes, Financeiro, Convites, Reservas, Tickets, Mural, Notificações, Automações, White-label ou BI.
10. Credenciais devem ser tratadas por referência segura, nunca por segredo bruto exposto.
11. Conectores sensíveis exigem finalidade, escopo, LGPD, auditoria, avaliação de risco e políticas de segurança.
12. MarketplaceConnectorHealth não substitui saúde operacional do módulo dono.
13. O módulo dono consome o conector por contrato e executa a ação.
14. Core autoriza, Segurança e LGPD protege e Auditoria registra.

Use a frase de governança:

Marketplace cataloga e disponibiliza. Core autoriza. Herança e Permissões influencia. Segurança e LGPD protege. Módulo dono executa. Auditoria registra.

Agora corrija a resposta sem criar acoplamento.
```

# 54. Próximo módulo recomendado

Histórico: Auditoria e Compliance já foi o módulo recomendado e já está consolidado nesta raiz.

Motivo: após a consolidação do Marketplace de Integrações, o próximo ponto crítico é consolidar o módulo responsável por investigar, correlacionar, exportar, alertar e governar trilhas auditáveis da plataforma inteira.

Frase guia:

Core registra trilha base. Módulos publicam eventos auditáveis. Auditoria e Compliance investiga, correlaciona, alerta e exporta. Segurança e LGPD protege dados sensíveis.

# Prompt específico para fronteira de Auditoria e Compliance

Use quando for revisar, planejar ou discutir o módulo Auditoria e Compliance:

```text
Estamos trabalhando no módulo Auditoria e Compliance do projeto "NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada".

Use obrigatoriamente os documentos centrais como fonte oficial:

1. 00_BIBLIA_DO_PROJETO.md
2. 01_MAPA_DE_MODULOS.md
3. 02_REGRAS_DE_ARQUITETURA.md
4. 03_DECISOES_OFICIAIS.md
5. 04_PROMPTS_DE_TRABALHO.md

Fronteira oficial aprovada:

Auditoria e Compliance representa o domínio de investigação, conformidade, evidências, cadeia de custódia, exportações auditadas, alertas e trilhas avançadas da plataforma.

Auditoria e Compliance é dona de ComplianceCase, ComplianceInvestigation, ComplianceTrail, AuditEvidence, AuditEvidenceHash, AuditTimeline, AuditCorrelation, AuditQuery, AuditExport, AuditExportApproval, AuditExportLog, AuditAccessRequest, AuditAccessGrant, AuditAccessDenial, AuditSensitiveDataView, ComplianceAlert, ComplianceFinding, ComplianceReport, InvestigationNote, InvestigationAttachment, InvestigationTimeline e ChainOfCustodyRecord.

Auditoria e Compliance não é dona de Tenant, Context, UserAccount, AuthorizationDecision, CoreAuditLog, AuditLog base, SecurityLog base, logs operacionais primários dos módulos donos, política oficial de LGPD, BI genérico, Suporte operacional ou execução de qualquer módulo dono.

Regras obrigatórias:

- CoreAuditLog, AuditLog base e SecurityLog base pertencem ao Core Platform.
- ModuleAuditLog e logs operacionais pertencem aos módulos donos.
- ComplianceTrail é derivada e não substitui a origem.
- RetentionPolicy, MaskingPolicy, ConsentPolicy, PrivacyPolicy e DataProcessingRecord pertencem a Segurança e LGPD.
- Auditoria e Compliance referencia políticas e evidencia conformidade.
- Toda consulta sensível deve respeitar tenant, contexto, escopo, permissão e AuthorizationDecision do Core Platform.
- Toda exportação sensível exige motivo, autorização, aprovação quando aplicável, hash, expiração, log imutável e cadeia de custódia.
- Dados sensíveis devem ser mascarados por padrão.
- Auditoria e Compliance não acessa banco interno de outro módulo.
- Auditoria e Compliance não abre porta, não visualiza câmera como VMS, não gera fatura, não envia notificação, não executa automação, não instala conector e não resolve ticket.
- O chat conversa. O documento manda.

Frase consolidada:

Core registra e autoriza. Módulo dono executa e mantém log operacional. Segurança e LGPD protege e define políticas. Auditoria e Compliance investiga, correlaciona, evidencia, alerta e exporta com controle.

Agora execute a tarefa solicitada sem violar essa fronteira.
```

# Prompt anti-regressão específico de Auditoria e Compliance

Use quando uma resposta tentar transformar Auditoria e Compliance em Core, BI, Suporte, Segurança ou executor operacional:

```text
A resposta anterior violou a fronteira oficial de Auditoria e Compliance.

Reescreva corrigindo obrigatoriamente os pontos abaixo:

1. Auditoria e Compliance investiga, correlaciona, evidencia, alerta e exporta com controle.
2. CoreAuditLog, AuditLog base, SecurityLog base e AuthorizationDecision pertencem ao Core Platform.
3. ModuleAuditLog e logs operacionais pertencem aos módulos donos.
4. ComplianceTrail é derivada e não substitui a origem.
5. Segurança e LGPD define retenção, mascaramento, consentimento, finalidade, anonimização, remoção e proteção de dados sensíveis.
6. Auditoria evidencia conformidade, mas não executa LGPD como domínio próprio.
7. Auditoria e Compliance não é BI genérico.
8. Auditoria e Compliance não é Suporte e Operação.
9. Auditoria e Compliance não executa módulo dono.
10. Auditoria e Compliance não acessa banco interno de outro módulo.
11. Toda exportação sensível exige autorização, motivo, escopo, hash, aprovação quando aplicável e cadeia de custódia.
12. Dados sensíveis devem ser mascarados por padrão.

Use a frase de governança:

Core registra e autoriza. Módulo dono executa e mantém log operacional. Segurança e LGPD protege. Auditoria e Compliance evidencia.

Agora corrija a resposta sem criar acoplamento.
```

# Próximo módulo recomendado

Histórico: Segurança e LGPD já foi o próximo módulo recomendado e agora está consolidado nesta raiz.

Motivo: após a consolidação de Auditoria e Compliance, o próximo ponto crítico é consolidar o módulo que define políticas de retenção, mascaramento, minimização, consentimento, anonimização, remoção, finalidade e proteção de dados sensíveis.

# Prompt de blindagem de produção entre módulos

Use quando for revisar qualquer módulo antes de consolidar ou produzir:

```text
Revise o módulo abaixo com foco em blindagem de produção, segurança e prevenção de quebras entre módulos.

Verifique obrigatoriamente:

1. Se o módulo respeita seu domínio e não executa responsabilidade alheia.
2. Se toda comunicação externa ao módulo usa API interna pública, evento, contrato, webhook interno, barramento de eventos ou read model autorizado.
3. Se não há acesso direto a banco, classe, fila privada ou lógica interna de outro módulo.
4. Se APIs, eventos, comandos, webhooks e read models estão versionados.
5. Se comandos críticos têm idempotency_key.
6. Se eventos usam EventEnvelope com tenant_id, context_id, actor_reference, correlation_id e causation_id quando aplicável.
7. Se toda ação sensível consulta CoreAuthorizationAPI e possui AuthorizationDecision válido.
8. Se existe escopo específico do módulo para ações críticas.
9. Se falhas de contexto, autorização, licença, feature flag, política ou escopo resultam em fail-closed.
10. Se dados sensíveis estão minimizados, mascarados e protegidos.
11. Se segredos, tokens e credenciais estão por referência segura.
12. Se logs operacionais pertencem ao módulo dono.
13. Se Auditoria e Compliance apenas investiga, correlaciona, evidencia, alerta e exporta por contrato autorizado.
14. Se Segurança e LGPD permanece dona das políticas de retenção, consentimento, finalidade, anonimização, remoção, minimização e mascaramento.
15. Se o fluxo pode ser reprocessado sem duplicar efeito.
16. Se existe estratégia de compatibilidade para evolução de contratos.

Use as decisões DEC-128, DEC-129 e DEC-130 como regra oficial.

Entregue:

- Riscos de quebra em produção.
- Riscos de segurança.
- Riscos de acoplamento.
- Correções obrigatórias.
- Ajustes nos documentos centrais, se necessário.
```

# Próxima etapa recomendada atual

Histórico: Segurança e LGPD já foi o próximo módulo recomendado e agora está consolidado nesta raiz.

A próxima decisão nova deve começar em DEC-193, salvo se o arquivo 03_DECISOES_OFICIAIS.md indicar outra última DEC.


# 55. Prompt específico para fronteira de Segurança e LGPD

Use quando for revisar, planejar ou discutir o módulo Segurança e LGPD:

```text
Estamos trabalhando no módulo Segurança e LGPD do projeto "NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada".

Use obrigatoriamente os documentos centrais como fonte oficial:

1. 00_BIBLIA_DO_PROJETO.md
2. 01_MAPA_DE_MODULOS.md
3. 02_REGRAS_DE_ARQUITETURA.md
4. 03_DECISOES_OFICIAIS.md
5. 04_PROMPTS_DE_TRABALHO.md

Fronteira oficial aprovada:

Segurança e LGPD define políticas de proteção e tratamento. Core autoriza. Herança influencia. Módulo dono executa. Auditoria evidencia.

Segurança e LGPD é dono de políticas de segurança, privacidade, retenção, minimização, mascaramento, consentimento, finalidade, base legal, tratamento de dados, classificação de sensibilidade, anonimização, remoção, bloqueio de tratamento, oposição, portabilidade, segredos, credenciais, webhooks externos, exportação sensível, risco de terceiros, subprocessadores e transferência internacional.

Segurança e LGPD não cria Tenant, Context, UserAccount, PermissionGrant, AuthorizationDecision, License, FeatureFlag, ComplianceCase, AuditEvidence, BI genérico, ticket de suporte ou regra operacional de módulos donos.

Regras obrigatórias:

- Não criar motor paralelo ao Core Platform.
- Não criar motor paralelo de autorização.
- Não criar motor paralelo de permissões.
- Não criar motor paralelo de auditoria.
- Não criar BI genérico.
- Não substituir Suporte e Operação.
- Não executar domínio de módulo dono.
- Não acessar banco interno de outro módulo.
- Não permitir segredo bruto em payload, evento, log, read model, URL, exportação ou notificação.
- Toda ação sensível deve validar tenant, contexto, escopo, permissão, módulo ativo, licença, feature flag, AuthorizationDecision do Core e política de Segurança e LGPD.
- Ausência de política obrigatória deve falhar fechado.
- Módulo dono executa retenção, remoção, anonimização, expurgo, exportação ou bloqueio dentro do próprio domínio.

Agora execute a tarefa solicitada sem violar essa fronteira.
```

# 56. Prompt anti-regressão específico de Segurança e LGPD

Use quando uma resposta tentar transformar Segurança e LGPD em Core, BI, Suporte, Auditoria ou executor operacional:

```text
A resposta anterior violou a fronteira oficial de Segurança e LGPD.

Reescreva corrigindo obrigatoriamente:

1. Segurança e LGPD define políticas de proteção e tratamento.
2. Core Platform autentica, contextualiza, autoriza, licencia, audita e conecta.
3. Herança e Permissões influencia acesso, delegação e política avançada de permissões.
4. Módulo dono executa a regra operacional.
5. Auditoria e Compliance evidencia, investiga, correlaciona e exporta com controle.
6. Segurança e LGPD não cria Tenant, Context, UserAccount, AuthorizationDecision, License ou FeatureFlag.
7. Segurança e LGPD não cria ComplianceCase, AuditEvidence ou cadeia de custódia como domínio investigativo.
8. Segurança e LGPD não é BI, Suporte, VMS, Controle de Acesso, Financeiro, Notificações, Automações ou Marketplace.
9. Segurança e LGPD não acessa banco interno de outro módulo.
10. Segredo bruto é proibido em payload, evento, log, read model, URL, exportação, ticket, relatório ou notificação.
11. Ações sensíveis devem falhar fechado sem política, consentimento, finalidade, autorização ou escopo.
12. Retenção, remoção e anonimização são coordenadas por Segurança e LGPD, mas executadas pelo módulo dono.

Use a frase:

Segurança e LGPD define políticas de proteção e tratamento. Core autoriza. Herança influencia. Módulo dono executa. Auditoria evidencia.

Agora corrija sem criar acoplamento.
```



# 57. Prompt específico para fronteira de Suporte e Operação

Use quando for revisar, planejar ou discutir o módulo Suporte e Operação:

```text
Estamos trabalhando no módulo Suporte e Operação do projeto "NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada".

Use obrigatoriamente os documentos centrais como fonte oficial:

1. 00_BIBLIA_DO_PROJETO.md
2. 01_MAPA_DE_MODULOS.md
3. 02_REGRAS_DE_ARQUITETURA.md
4. 03_DECISOES_OFICIAIS.md
5. 04_PROMPTS_DE_TRABALHO.md

Fronteira oficial:

Suporte e Operação representa o domínio oficial de sustentação técnica da plataforma, suporte a parceiros, suporte a organizações, incidentes de serviço, status operacional, janelas de manutenção, diagnóstico assistido, acesso remoto assistido por referência, escalonamentos técnicos, base de conhecimento, runbooks, known issues, workarounds, root cause analysis e post-incident review.

Suporte e Operação não substitui Tickets, Auditoria e Compliance, Segurança e LGPD, Relatórios / BI, Gateway, Dispositivos, Controle de Acesso, Câmeras / VMS, Alarmes, Financeiro, Convites e Visitantes, Reservas, Mural, Notificações, Automações, Marketplace ou White-label.

Regras obrigatórias:

- OperationalTicket pertence a Tickets.
- SupportOperationCase pertence a Suporte e Operação.
- PlatformSupportCase pertence a Suporte e Operação.
- Suporte coordena, mas módulo dono executa.
- Suporte solicita diagnóstico por contrato.
- Suporte solicita ação por contrato.
- Suporte não acessa banco interno.
- Suporte não guarda segredo bruto.
- Suporte não executa domínio alheio.
- Toda ação sensível exige AuthorizationDecision do Core.
- Dados sensíveis exigem política de Segurança e LGPD.
- Evidências pertencem à Auditoria e Compliance ou ao módulo dono.
- Status operacional consolidado pertence a Suporte, mas saúde técnica original pertence ao módulo dono.

Frase:

Suporte atende. Módulo dono corrige. Segurança protege. Auditoria evidencia. Core autoriza.

Agora execute a tarefa sem violar essa fronteira.
```

# 58. Prompt anti-regressão específico de Suporte e Operação

Use quando uma resposta tentar transformar Suporte e Operação em Tickets, Core, Auditoria, Segurança, BI ou executor operacional:

```text
A resposta anterior violou a fronteira oficial de Suporte e Operação.

Reescreva corrigindo obrigatoriamente:

1. Suporte e Operação atende, coordena, diagnostica por contrato e acompanha sustentação técnica.
2. OperationalTicket pertence a Tickets.
3. SupportOperationCase e PlatformSupportCase pertencem a Suporte e Operação.
4. Core Platform autentica, contextualiza, autoriza, licencia e registra trilha base.
5. Segurança e LGPD define proteção, retenção, consentimento, finalidade, mascaramento e segredos.
6. Auditoria e Compliance evidencia, investiga e preserva cadeia de custódia.
7. O módulo dono executa correção, diagnóstico técnico oficial e regra operacional.
8. Suporte não cria Tenant, Context, UserAccount, PermissionGrant, AuthorizationDecision, License ou FeatureFlag.
9. Suporte não cria ComplianceCase nem AuditEvidence como domínio investigativo.
10. Suporte não acessa banco interno de outro módulo.
11. Suporte não abre porta, não abre câmera, não executa workflow, não envia notificação direta, não gera cobrança, não cria convite, não cria reserva e não instala conector.
12. Segredo bruto é proibido em comentário, anexo, log, payload, URL, evento, read model ou notificação.
13. Diagnóstico assistido deve ocorrer por contrato versionado.
14. Acesso remoto assistido deve ser temporário, autorizado, escopado, auditável e executado pelo módulo dono.
15. Falhas críticas devem usar fail-closed.

Use a frase:

Suporte atende. Módulo dono corrige. Segurança protege. Auditoria evidencia. Core autoriza.

Agora corrija sem criar acoplamento.
```

# 59. Próximo módulo recomendado

Histórico: Reservas já foi o próximo módulo recomendado e agora está consolidado nesta raiz.

Motivo: após consolidar Suporte e Operação, o próximo módulo funcional ainda pendente que merece blindagem é Reservas, pois ele toca estrutura física, disponibilidade, regras de uso, acesso, financeiro, notificações, automações, tickets e auditoria.

Frase guia:

Reservas agenda. Estrutura localiza. Core autoriza. Acesso executa passagem. Financeiro cobra quando aplicável. Notificações comunica. Auditoria registra.

A próxima decisão nova deve começar em DEC-193, salvo se o arquivo 03_DECISOES_OFICIAIS.md indicar outra última DEC.


# 60. Prompt específico para fronteira de Reservas

Use quando for revisar, planejar ou discutir o módulo Reservas:

```text
Estamos trabalhando no módulo Reservas do projeto "NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada".

Use obrigatoriamente os documentos centrais como fonte oficial:

1. 00_BIBLIA_DO_PROJETO.md
2. 01_MAPA_DE_MODULOS.md
3. 02_REGRAS_DE_ARQUITETURA.md
4. 03_DECISOES_OFICIAIS.md
5. 04_PROMPTS_DE_TRABALHO.md

Fronteira oficial aprovada:

Reservas representa o domínio operacional de agenda, disponibilidade e uso reservado de recursos físicos ou compartilhados.

Reservas é dona de ReservableResource, ReservationResourceReference, Reservation, ReservationRequest, ReservationApproval, ReservationDenial, ReservationAvailability, ReservationCalendar, ReservationRule, ReservationHold, ReservationBlock, ReservationConflict, ReservationCancellation, ReservationCheckIn, ReservationCheckOut, ReservationNoShow, ReservationUsageSession, ReservationParticipant, ReservationGuestReference, ReservationGuestList, ReservationAccessWindow, ReservationAccessRequest, ReservationChargeRequest, ReservationPenaltyRequest, ReservationDepositRequest, ReservationRefundRequest, ReservationNotificationRequest, ReservationTicketRequest, ReservationMaintenanceRequest, ReservationAutomationTrigger, ReservationReadModel e ReservationAuditTrail.

Reservas não cria Tenant, Context, UserAccount, PermissionGrant, AuthorizationDecision, License, FeatureFlag, Unit, Block, Area, Environment, AccessCredential, AccessGrant, AccessEvent, Invoice, Payment, VisitorInvite, OperationalTicket, NotificationRequest como domínio de entrega, AutomationWorkflow, ComplianceCase, AuditEvidence ou DataRetentionPolicy.

Regras obrigatórias:

- Reservas agenda o uso.
- Unidades, Blocos, Áreas e Ambientes localiza e classifica a estrutura física.
- ReservableResource usa referência estrutural autorizada sem transferir domínio da estrutura.
- ReservationAccessWindow não abre porta. Controle de Acesso executa passagem física.
- ReservationChargeRequest, ReservationDepositRequest, ReservationPenaltyRequest e ReservationRefundRequest solicitam ação ao Financeiro. Financeiro executa cobrança, pagamento, recibo, conciliação e reembolso.
- ReservationGuestList e ReservationGuestReference não substituem VisitorInvite, TemporaryVisitor, TemporaryVisitPass, check-in ou check-out de visitante.
- ReservationTicketRequest não substitui OperationalTicket, TicketSLA, TicketComment, TicketAttachment ou TicketResolution.
- ReservationNotificationRequest não substitui fila, template, canal, provider, tentativa, retry ou delivery log de Notificações.
- ReservationAutomationTrigger não é AutomationWorkflow.
- ReservationAuditTrail é trilha operacional, não ComplianceCase nem AuditEvidence.
- Toda ação sensível exige tenant, contexto, módulo ativo, licença, feature flag, permissão, escopo, ResourceReference e AuthorizationDecision do Core.
- Dados de participantes, convidados, histórico de uso, check-in, no-show, cobrança vinculada e acesso vinculado exigem finalidade, minimização, mascaramento, retenção e auditoria.
- Reservas não acessa banco interno de outro módulo.
- Reservas não guarda segredo bruto.
- Comandos críticos usam idempotency_key.
- Eventos usam EventEnvelope v1 quando aplicável, correlation_id, causation_id e contrato versionado.
- Falhas críticas devem usar fail-closed.

Frase consolidada:

Reservas agenda. Estrutura localiza. Core autoriza. Acesso executa passagem. Financeiro cobra quando aplicável. Notificações comunica. Auditoria registra.

Agora execute a tarefa sem violar essa fronteira.
```

# 61. Prompt anti-regressão específico de Reservas

Use quando uma resposta tentar transformar Reservas em estrutura física, controle de acesso, financeiro, visitantes, tickets, notificações, automações, BI, LGPD, auditoria ou suporte:

```text
A resposta anterior violou a fronteira oficial de Reservas.

Reescreva corrigindo obrigatoriamente:

1. Reservas governa agenda, disponibilidade, solicitação, aprovação, recusa, confirmação, cancelamento, check-in, check-out, no-show, conflitos, holds, bloqueios e regras de uso.
2. Tenant, Context, UserAccount, License, FeatureFlag, PermissionGrant e AuthorizationDecision pertencem ao Core Platform.
3. Unit, Block, Area, Environment, StructureRoot e PhysicalStructureNode pertencem a Unidades, Blocos, Áreas e Ambientes.
4. ReservableResource usa referência autorizada e não transfere domínio da estrutura.
5. Reservas não abre porta, não cria AccessCredential, não cria AccessGrant e não cria AccessEvent. Controle de Acesso executa passagem física.
6. Reservas não gera fatura, boleto, Pix, cartão, pagamento, recibo ou reembolso. Financeiro executa financeiro.
7. Reservas não cria VisitorInvite, TemporaryVisitor, TemporaryVisitPass, QR temporário ou check-in/check-out de visitante.
8. Reservas não cria OperationalTicket nem governa SLA, comentários, anexos e resolução. Tickets atende.
9. Reservas não cria PlatformSupportCase, SupportOperationCase ou ServiceIncident. Suporte e Operação atende falha técnica da plataforma.
10. Reservas não envia notificação multicanal. Notificações entrega.
11. Reservas não executa workflow. Automações orquestra.
12. Reservas não vira BI genérico e não acessa banco interno de outro módulo.
13. Reservas não cria ComplianceCase, AuditEvidence ou política oficial de LGPD.
14. Dados sensíveis de reservas exigem finalidade, minimização, mascaramento, retenção, autorização e trilha.
15. Ação crítica sem contexto, autorização, escopo, licença, política ou contrato deve falhar fechada.

Use a frase:

Reservas agenda. Estrutura localiza. Core autoriza. Acesso executa passagem. Financeiro cobra quando aplicável. Notificações comunica. Auditoria registra.

Agora corrija sem criar acoplamento.
```

# 62. Próximo módulo recomendado

Histórico: Master já foi o próximo módulo recomendado e agora está consolidado nesta raiz.

Motivo: após consolidar Reservas, o próximo ponto crítico é separar dashboards, indicadores, métricas, análises, read models, exportações e visões gerenciais, sem permitir que Relatórios / BI acesse banco interno dos módulos ou assuma domínio operacional.

Frase guia:

BI analisa. Módulo dono informa. Core autoriza. Segurança protege. Auditoria registra.

A próxima decisão nova deve começar em DEC-193, salvo se o arquivo 03_DECISOES_OFICIAIS.md indicar outra última DEC.


# 63. Atualização consolidada: identidade oficial NoduOS

Esta atualização registra NoduOS como nome oficial do app e do projeto.

Regras para próximos chats:

- Use “NoduOS” como nome oficial.
- Mantenha “SaaS Modular de Gestão de Espaços e Segurança Unificada” como descrição funcional.
- Use “Building OS” apenas como conceito técnico.
- Preserve a identidade visual inicial: “Conexão que impulsiona”, #1F2937, #00A37A e #F1F3F5.
- Não altere fronteiras, permissões, herança, Core Platform, segurança, LGPD, auditoria ou contratos por causa da mudança de nome.

A última decisão consolidada nesta raiz é DEC-162.

A próxima decisão nova deve começar em DEC-193, salvo se o arquivo 03_DECISOES_OFICIAIS.md indicar outra última DEC.

Histórico: Master já foi o próximo módulo recomendado e agora está consolidado nesta raiz.

# Prompt específico para fronteira de Relatórios / BI

Use quando for revisar, planejar ou discutir o módulo Relatórios / BI:

```text
Estamos trabalhando no módulo Relatórios / BI do projeto "NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada".

Use obrigatoriamente os documentos centrais como fonte oficial:

1. 00_BIBLIA_DO_PROJETO.md
2. 01_MAPA_DE_MODULOS.md
3. 02_REGRAS_DE_ARQUITETURA.md
4. 03_DECISOES_OFICIAIS.md
5. 04_PROMPTS_DE_TRABALHO.md

Fronteira oficial aprovada:

Relatórios / BI representa o domínio analítico oficial de dashboards, indicadores, métricas, KPIs, relatórios, consultas agregadas, visões gerenciais, visões operacionais analíticas, snapshots, filtros, widgets, insights, tendências, anomalias analíticas e exportações autorizadas por perfil, tenant, contexto e escopo.

Relatórios / BI não é dono dos dados operacionais primários.

Relatórios / BI consome apenas contratos públicos versionados, APIs internas, eventos, webhooks autorizados ou read models analíticos autorizados.

Relatórios / BI não acessa banco interno de outro módulo, não usa read model como banco compartilhado, não altera dado operacional, não executa regra de domínio alheio, não define política de Segurança e LGPD, não cria evidência investigativa, não envia notificação como domínio próprio e não executa workflow.

Toda visualização, consulta, filtro, compartilhamento, agendamento ou exportação sensível deve respeitar tenant, contexto, ator, permissão, módulo ativo, licença, feature flag, BIAuthorizationScope, AuthorizationDecision do Core Platform e política de Segurança e LGPD.

Exportações sensíveis exigem finalidade, motivo, autorização, política, mascaramento, retenção, trilha e idempotency_key.

Data marts, data warehouses e data lakes só podem existir como estruturas governadas, rastreáveis, autorizadas, minimizadas e segregadas por tenant e contexto.

Frase consolidada:

BI analisa. Módulo dono informa. Core autoriza. Segurança protege. Auditoria registra.

Agora execute a tarefa solicitada sem violar essa fronteira.
```

# Prompt anti-regressão específico de Relatórios / BI

Use quando uma resposta tentar transformar BI em banco central, auditoria, LGPD, suporte, notificação, automação ou módulo operacional:

```text
A resposta anterior violou a fronteira oficial de Relatórios / BI.

Reescreva corrigindo obrigatoriamente os pontos abaixo:

1. Relatórios / BI é domínio analítico, não domínio operacional.
2. Relatórios / BI não acessa banco interno de outro módulo.
3. Relatórios / BI consome apenas contratos, APIs, eventos ou read models autorizados.
4. Read model analítico não transfere domínio para BI.
5. Relatórios / BI não cria Tenant, Context, UserAccount, PermissionGrant ou AuthorizationDecision.
6. Relatórios / BI não define política de retenção, mascaramento, consentimento ou dados sensíveis.
7. Relatórios / BI não substitui Segurança e LGPD.
8. Relatórios / BI não cria ComplianceCase, AuditEvidence, AuditExport ou ChainOfCustodyRecord.
9. Relatórios / BI não substitui Auditoria e Compliance.
10. Relatórios / BI não cria ServiceIncident, status page ou runbook.
11. Relatórios / BI não substitui Suporte e Operação.
12. Relatórios / BI não envia notificação como domínio próprio.
13. Relatórios / BI não executa workflow.
14. Relatórios / BI não executa regra operacional de Financeiro, Controle de Acesso, Câmeras, Alarmes, Visitantes, Reservas, Tickets, Mural, Gateway, Dispositivos ou Marketplace.
15. Exportações sensíveis exigem autorização, finalidade, política, mascaramento, retenção, trilha e idempotência.
16. Falha de autorização, contexto, política, licença, contrato ou mascaramento deve falhar fechado.

Use a frase de governança:

BI analisa. Módulo dono informa. Core autoriza. Segurança protege. Auditoria registra.

Agora corrija a resposta sem criar acoplamento.
```

# Próxima etapa recomendada atual

Próxima etapa recomendada: Matriz Técnica de Dados Sensíveis por Contrato.

A próxima decisão nova deve começar em DEC-193, salvo se o arquivo 03_DECISOES_OFICIAIS.md indicar outra última DEC.

---

# 70. Prompt específico para fronteira de White-label

Estamos trabalhando no módulo White-label do projeto NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada.

Fronteira oficial aprovada:

White-label representa o domínio oficial de identidade visual autorizada.

White-label é dono de tema, marca, logo, cores, paleta, tipografia, ícones, favicon, splash screen, login screen visual, app shell, templates visuais, assets, domínio customizado, subdomínio, instruções DNS, referência segura de certificado, preview, publicação, rollback, fallback e herança visual escopada.

White-label não cria Tenant, Context, UserAccount, PermissionGrant, License, FeatureFlag ou AuthorizationDecision. White-label não altera regra de negócio, não executa módulo dono, não envia notificações, não gera cobrança, não gera BI, não define política de Segurança e LGPD, não investiga compliance, não instala conector de Marketplace e não armazena segredo bruto.

Regras obrigatórias:

- Core autoriza.
- Segurança e LGPD protege.
- Auditoria registra.
- Módulo dono executa.
- NoduOS permanece nome oficial raiz.
- Tema não concede permissão.
- Template visual não executa regra.
- Domínio customizado exige validação.
- Certificado exige referência segura.
- Upload exige validação.
- Publicação, rollback e fallback são ações críticas idempotentes.
- Falha crítica deve falhar fechada.

Frase consolidada:

White-label personaliza. Core autoriza. Módulo dono preserva regra. Segurança protege. Auditoria registra.

---

# 71. Prompt anti-regressão específico de White-label

Use quando uma resposta tentar transformar White-label em Core, Master, Parceiros, Organizações, Financeiro, Notificações, BI, Segurança e LGPD, Auditoria, Marketplace ou módulo operacional:

```text
A resposta anterior violou a fronteira oficial de White-label.

Reescreva corrigindo obrigatoriamente os pontos abaixo:

1. White-label representa apenas o domínio oficial de identidade visual autorizada.
2. NoduOS permanece o nome oficial raiz do app, do projeto, da documentação, da arquitetura e das decisões centrais.
3. White-label pode exibir marca comercial por parceiro ou organização somente dentro do contexto autorizado.
4. Tenant, Context, UserAccount, PermissionGrant, License, FeatureFlag e AuthorizationDecision pertencem ao Core Platform.
5. White-label não altera regra de negócio, herança operacional, licença, plano, módulo ativo, recurso, permissão ou dado operacional.
6. Master libera o direito superior de white-label; White-label não substitui Master.
7. Parceiros e Organizações podem ter identidade visual quando autorizados; White-label não substitui PartnerRecord nem OrganizationRecord.
8. Segurança e LGPD define políticas de upload, asset, domínio, certificado, template, preview, spoofing, phishing, segredo e retenção.
9. Auditoria e Compliance investiga e evidencia; White-label registra apenas trilha funcional.
10. Notificações entrega mensagens; White-label só define aparência visual autorizada.
11. Relatórios / BI gera dashboards e relatórios; White-label só define template visual autorizado.
12. Financeiro emite cobrança e recibo; White-label só define aparência visual autorizada.
13. Marketplace governa conectores e providers; White-label só consome conectores homologados por contrato.
14. Domínio customizado exige validação DNS, referência segura de certificado e fail-closed.
15. Certificados, chaves, credenciais e segredos nunca podem aparecer brutos em payload, evento, log, URL, read model ou template.
16. Uploads e assets exigem validação de segurança, tipo, MIME real, hash, metadados, conteúdo malicioso e política anti-phishing/anti-spoofing.
17. Templates visuais não executam regra de negócio.
18. Publicação, rollback, fallback, domínio e certificado são ações críticas idempotentes e auditáveis.
19. Falha de autorização, política, domínio, certificado, asset, template, contrato ou escopo deve negar, pausar ou degradar com segurança.
20. Tema renderiza. Ele não decide.

Use a frase de governança:

White-label personaliza. Core autoriza. Módulo dono preserva regra. Segurança protege. Auditoria registra.

Agora corrija a resposta sem criar acoplamento.
```

---

# 72. Estado atual deste documento

Este documento foi atualizado para incluir os prompts específicos do módulo White-label consolidado até DEC-170.

Próxima etapa recomendada: Matriz Técnica de Dados Sensíveis por Contrato.

A próxima decisão nova deve começar em DEC-193, salvo se o arquivo 03_DECISOES_OFICIAIS.md indicar outra última DEC.



---

# 73. Prompt específico para fronteira de Master

Use quando for revisar, planejar ou discutir o módulo Master:

```text
Estamos trabalhando no módulo Master do projeto "NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada".

Use obrigatoriamente os documentos centrais como fonte oficial:

1. 00_BIBLIA_DO_PROJETO.md
2. 01_MAPA_DE_MODULOS.md
3. 02_REGRAS_DE_ARQUITETURA.md
4. 03_DECISOES_OFICIAIS.md
5. 04_PROMPTS_DE_TRABALHO.md

Fronteira oficial aprovada:

Master representa o domínio oficial de governança superior da plataforma NoduOS.

Master governa limites superiores, políticas administrativas, parceiros, módulos, planos comerciais, licenças comerciais, white-label, marketplace, integrações globais e visões administrativas autorizadas.

Master não substitui Core Platform, Parceiros, Organizações, White-label, Marketplace de Integrações, Financeiro, Relatórios / BI, Auditoria e Compliance, Segurança e LGPD, Suporte e Operação ou módulos donos operacionais.

Master não cria Tenant, Context, UserAccount, PermissionGrant, InheritanceGrant, AuthorizationDecision, License técnica, FeatureFlag técnica, ModuleRegistry, AuditLog base ou Event bus.

Master não acessa banco interno de outro módulo, não usa read model como banco compartilhado, não guarda segredo bruto, não exporta dado sensível sem autorização, finalidade, política, mascaramento, retenção e trilha, e não executa regra operacional de módulos donos.

Regras obrigatórias:

- Master governa o limite superior.
- Core Platform autoriza estruturalmente.
- Parceiros mantém PartnerRecord e operação diária.
- Organizações mantém OrganizationRecord e cadastro operacional do espaço.
- White-label executa identidade visual.
- Marketplace executa conectores.
- Financeiro cobra.
- BI analisa.
- Auditoria e Compliance investiga.
- Segurança e LGPD protege.
- Suporte e Operação atende.
- Módulo dono executa sua própria regra.
- Suspensão, bloqueio e restauração de parceiro são ações críticas idempotentes.
- Falha de autorização, política, contexto, contrato, licença ou feature flag deve falhar fechada.
- O chat conversa. O documento manda.
- Quando a fronteira for aprovada e o usuário solicitar planejamento completo, entregue em um único CANVA FINAL, em Markdown limpo, pronto para copiar e colar.
- Decisões novas, regras oficiais e nomenclaturas DEC devem seguir a próxima numeração livre do 03_DECISOES_OFICIAIS.md, sem repetir, pular, renumerar ou reaproveitar códigos já usados.

Frase consolidada:

Master governa o limite. Core autoriza. Parceiro opera. Módulo dono executa. Auditoria registra.

Agora execute a tarefa solicitada sem violar essa fronteira.
```

# 74. Prompt anti-regressão específico de Master

Use quando uma resposta tentar transformar Master em Core, Parceiros, Organizações, White-label, Marketplace, Financeiro, BI, Auditoria, Segurança, Suporte ou módulo operacional:

```text
A resposta anterior violou a fronteira oficial de Master.

Reescreva corrigindo obrigatoriamente os pontos abaixo:

1. Master representa o domínio oficial de governança superior da plataforma NoduOS.
2. Master governa limites, políticas e liberações superiores.
3. Tenant, Context, UserAccount, PermissionGrant, InheritanceGrant, AuthorizationDecision, License técnica, FeatureFlag técnica, ModuleRegistry, AuditLog base e Event bus pertencem ao Core Platform.
4. Master não substitui Core Platform.
5. Master pode solicitar, aprovar, limitar, suspender e restaurar parceiros, mas PartnerRecord, PartnerProfile, PartnerStatus, PartnerScope e operação diária pertencem a Parceiros.
6. Master pode visualizar organizações por contratos autorizados, mas OrganizationRecord e OrganizationProfile pertencem a Organizações.
7. Master governa direito superior de White-label, mas tema, domínio, asset, template, publicação, rollback e fallback pertencem a White-label.
8. Master governa política superior de Marketplace, mas conector, adapter, provider, instalação, versionamento e credenciais por referência pertencem ao Marketplace.
9. Master define política comercial superior, mas cobrança, pagamento, fatura, comissão, split, repasse e inadimplência pertencem ao Financeiro.
10. Master consome dashboards globais, mas Relatórios / BI mantém o domínio analítico.
11. Master consulta trilhas autorizadas, mas Auditoria e Compliance investiga, evidencia, exporta e preserva cadeia de custódia.
12. Master respeita Segurança e LGPD e não define sozinho política de tratamento sensível fora do módulo especializado.
13. Master acompanha saúde global, mas Suporte e Operação atende incidentes, runbooks, janelas e status operacional.
14. Master não abre porta, não visualiza câmera operacional, não gera cobrança, não cria reserva, não cria convite, não cria ticket operacional, não envia notificação multicanal, não executa automação e não instala conector.
15. Master não acessa banco interno de outro módulo.
16. Read model não é banco compartilhado.
17. Evento não é comando crítico.
18. Suspensão, bloqueio, restauração, liberação e alteração crítica de limite exigem idempotency_key, AuthorizationDecision, contrato versionado, política aplicável e auditoria.
19. Falha de autorização, contexto, licença, feature flag, política, escopo ou contrato deve negar, pausar ou degradar com segurança.
20. Master governa. Core decide. Módulo dono executa. Auditoria registra.

Use a frase de governança:

Master governa o limite. Core autoriza. Parceiro opera. Módulo dono executa. Auditoria registra.

Agora corrija a resposta sem criar acoplamento.
```

# 75. Estado atual deste documento

Este documento foi atualizado para incluir os prompts específicos do módulo Master consolidado até DEC-178.

Próxima etapa recomendada: Matriz Técnica de Dados Sensíveis por Contrato.

A próxima decisão nova deve começar em DEC-193, salvo se o arquivo 03_DECISOES_OFICIAIS.md indicar outra última DEC.


# 76. Prompt oficial para Revisão Geral de Consolidação

Use quando a raiz do projeto precisar ser revisada, consolidada ou auditada antes de modelagem técnica:

```text
Estamos trabalhando no projeto "NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada".

Esta etapa é uma Revisão Geral de Consolidação da Arquitetura, não um novo módulo.

Use obrigatoriamente os documentos centrais como fonte oficial:

1. 00_BIBLIA_DO_PROJETO.md
2. 01_MAPA_DE_MODULOS.md
3. 02_REGRAS_DE_ARQUITETURA.md
4. 03_DECISOES_OFICIAIS.md
5. 04_PROMPTS_DE_TRABALHO.md

Regras obrigatórias:

- Não sugerir MVP.
- Não sugerir fases de implementação.
- Não replanejar módulo específico.
- Primeiro diagnosticar, depois recomendar correções.
- Validar sequência de DEC.
- Validar status dos módulos.
- Validar fronteiras entre todos os módulos.
- Validar interação entre Master, Core, Parceiros, Organizações, estrutura física, pessoas, mundo físico, módulos donos, Segurança, Auditoria, BI, Suporte, Notificações e Automações.
- Corrigir risco de acoplamento sem alterar decisão aprovada sem nova DEC.
- Eventos comunicam fatos. Comandos solicitam execução. Read models consultam dados autorizados.
- Evento com sufixo Requested só é permitido quando representar solicitação registrada, não execução operacional.
- Todo contrato deve declarar owner_module, versão, escopo, permissões, dados sensíveis, compatibilidade, retenção e descontinuação.
- Nenhum módulo acessa banco interno de outro.
- Nenhum módulo executa domínio de outro.
- Toda ação sensível exige AuthorizationDecision do Core Platform e fail-closed.

Entregue relatório e, quando aprovado, gere os arquivos raiz atualizados e um CANVA FINAL de planejamento consolidado.
```

# 77. Prompt anti-regressão para comando, evento e read model

```text
A resposta anterior confundiu comando, evento ou read model.

Corrija obedecendo:

1. Comando solicita execução.
2. Evento comunica fato ocorrido.
3. Read model permite consulta autorizada.
4. Evento com sufixo Requested só é permitido quando representar solicitação registrada.
5. Execução operacional pertence ao módulo dono.
6. Toda ação crítica exige idempotency_key, correlation_id, AuthorizationDecision, escopo específico, contrato versionado, auditoria e fail-closed.
7. Read model não é banco compartilhado.
8. Nenhum payload pode carregar segredo bruto ou dado sensível desnecessário.

Reescreva sem criar acoplamento.
```

# 78. Prompt para Matriz de Ownership antes da modelagem técnica

```text
Crie a matriz de ownership técnico para o NoduOS antes da modelagem de banco, APIs, eventos ou telas.

Para cada entidade, contrato, comando, evento, webhook, read model, evidência, credencial, política e log, informe:

1. Nome
2. Tipo
3. Owner_module
4. Consumer_modules permitidos
5. Fonte de verdade
6. Dados sensíveis
7. Permissões exigidas
8. Escopo
9. Eventos relacionados
10. APIs relacionadas
11. Retenção
12. Auditoria
13. Compatibilidade e descontinuação
14. Risco de acoplamento

Não permitir owner duplo. Read model não transfere domínio.
```

# 79. Estado atual deste documento

Este documento foi atualizado após a Revisão Geral de Consolidação da Arquitetura, incorporando DEC-179 a DEC-183, prompts de revisão geral, anti-regressão de eventos/comandos/read models e matriz de ownership antes da modelagem técnica.

Próxima etapa recomendada: Matriz Técnica de Dados Sensíveis por Contrato.

A próxima decisão nova deve começar em DEC-193, salvo se o arquivo 03_DECISOES_OFICIAIS.md indicar outra última DEC.

# 80. Prompt específico para Catálogo de Contratos Públicos

```text
Estamos trabalhando no projeto "NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada".

Este chat será dedicado exclusivamente ao Catálogo de Contratos Públicos.

Use obrigatoriamente os documentos centrais do projeto como fonte oficial:

1. 00_BIBLIA_DO_PROJETO.md
2. 01_MAPA_DE_MODULOS.md
3. 02_REGRAS_DE_ARQUITETURA.md
4. 03_DECISOES_OFICIAIS.md
5. 04_PROMPTS_DE_TRABALHO.md
6. 05_CATALOGO_DE_CONTRATOS_PUBLICOS.md

Objetivo:
Criar, revisar ou consolidar contratos públicos versionados entre módulos, sem criar banco de dados, endpoint final, código, migration, tela ou implementação.

Regras obrigatórias:

- O chat conversa. O documento manda.
- Não sugira MVP.
- Não altere fronteiras de módulos.
- Não crie módulo novo.
- Não acesse banco interno de outro módulo.
- Não use evento como comando disfarçado.
- Não use read model como banco compartilhado.
- Não permita contrato sem owner_module, versão, status, escopo, consumidores autorizados, permissões, dados sensíveis, retenção, auditoria, compatibilidade, descontinuação e comportamento de falha.
- Comando solicita execução.
- Evento de fato ocorrido comunica algo que já aconteceu.
- Evento de solicitação registrada comunica registro de pedido, não execução.
- Read model permite leitura autorizada e não transfere domínio.
- Contrato sensível exige política de Segurança e LGPD.
- Contrato crítico exige fail-closed.
- Contrato crítico com risco de duplicidade exige idempotency_key.
- Eventos críticos exigem EventEnvelope v1, correlation_id, causation_id quando derivado, outbox/inbox, retry controlado e dead-letter/quarentena.
- Segredos devem trafegar por SecretReference.
- Evidências devem trafegar por EvidenceReference.
- A próxima decisão nova deve seguir a próxima DEC livre do 03_DECISOES_OFICIAIS.md.

Entregue o resultado em Markdown limpo, com diagnóstico, correções recomendadas, contratos afetados, riscos de acoplamento e atualizações necessárias nos documentos centrais.
```

# 81. Prompt para Matriz Técnica de Permissões por Contrato

```text
Estamos trabalhando no projeto "NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada".

Este chat será dedicado exclusivamente à Matriz Técnica de Permissões por Contrato.

Use obrigatoriamente os documentos centrais e o Catálogo de Contratos Públicos como fonte oficial.

Para cada contrato público, informe:

1. Contract ID.
2. Contract name.
3. Tipo de contrato.
4. Owner_module.
5. Consumer_modules autorizados.
6. Perfis autorizados: Master, Parceiro, Organização, Operador/Gestor, Cliente, módulos internos e integrações externas.
7. Permissão conceitual exigida.
8. Escopo mínimo.
9. Tenant obrigatório.
10. Context obrigatório.
11. ResourceReference obrigatório.
12. AuthorizationDecision obrigatório.
13. Política de Segurança e LGPD obrigatória.
14. Dados sensíveis envolvidos.
15. Mascaramento por perfil.
16. Auditoria exigida.
17. Idempotência exigida.
18. Fail-closed.
19. Riscos de acoplamento.
20. Observações.

Não crie banco, endpoint final, código, tela ou schema técnico definitivo.
```

# 82. Estado atual deste documento

Este documento foi atualizado após a consolidação da Matriz Técnica de Dados Sensíveis por Contrato, incorporando DEC-191 e definindo a próxima etapa recomendada como Detalhamento de EventEnvelope v1.

A próxima decisão nova deve começar em DEC-193, salvo se o arquivo 03_DECISOES_OFICIAIS.md indicar outra última DEC.

# 83. Prompt para Matriz Técnica de Dados Sensíveis por Contrato

```text
Estamos trabalhando no projeto "NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada".

Este chat será dedicado exclusivamente à Matriz Técnica de Dados Sensíveis por Contrato.

Use obrigatoriamente os documentos centrais e técnicos como fonte oficial:

1. 00_BIBLIA_DO_PROJETO.md
2. 01_MAPA_DE_MODULOS.md
3. 02_REGRAS_DE_ARQUITETURA.md
4. 03_DECISOES_OFICIAIS.md
5. 04_PROMPTS_DE_TRABALHO.md
6. 05_CATALOGO_DE_CONTRATOS_PUBLICOS.md
7. 06_MATRIZ_TECNICA_PERMISSOES_POR_CONTRATO.md

Objetivo:
Criar a matriz oficial de dados sensíveis por contrato público, identificando quais dados cada contrato pode carregar, mascarar, referenciar, reter, exportar ou proibir, sempre preservando LGPD, minimização, finalidade, retenção, auditoria, EvidenceReference, SecretReference e fail-closed.

Estado atual da raiz:
- A Matriz Técnica de Permissões por Contrato foi consolidada.
- DEC-189 e DEC-190 estão aprovadas.
- A última DEC consolidada é DEC-190.
- A próxima DEC livre é DEC-191.

Regras obrigatórias:
- Não criar banco de dados.
- Não criar schema técnico final.
- Não criar endpoint final.
- Não criar código.
- Não criar tela.
- Não criar novo módulo.
- Não alterar fronteiras de módulo.
- Não transportar segredo bruto.
- Não transportar evidência bruta quando EvidenceReference bastar.
- Não transportar dado pessoal bruto quando referência, máscara ou minimização bastar.
- Não permitir exportação sensível sem finalidade, autorização, política, retenção, mascaramento e auditoria.
- Não permitir uso de read model como banco compartilhado.
- Não permitir evento como comando disfarçado.
- Preservar Core Platform como autoridade estrutural.
- Preservar Segurança e LGPD como dona das políticas de proteção, retenção, mascaramento, consentimento, tratamento e exportação sensível.
- Preservar Auditoria e Compliance como dona da investigação, cadeia de custódia e evidência avançada.
- Toda decisão nova deve começar em DEC-191, salvo se o 03_DECISOES_OFICIAIS.md indicar outra última DEC.

Para cada contrato, indicar:
1. Contract ID.
2. Contract name.
3. Owner_module.
4. Contract_type.
5. Permission_code associada.
6. Dados permitidos.
7. Dados proibidos.
8. Dados que devem ser apenas referência.
9. Dados que devem ser mascarados.
10. Dados que exigem consentimento.
11. Dados que exigem finalidade explícita.
12. Dados que exigem política de retenção.
13. Dados que exigem política de descarte.
14. Dados que exigem AuthorizationDecision.
15. Dados que exigem política de Segurança e LGPD.
16. Dados que exigem auditoria de visualização.
17. Dados que exigem auditoria de exportação.
18. Sensibilidade: Público, Interno, Restrito, Sensível ou Crítico.
19. Estratégia de minimização.
20. Estratégia de mascaramento.
21. Estratégia de retenção.
22. Estratégia de EvidenceReference, quando aplicável.
23. Estratégia de SecretReference, quando aplicável.
24. Comportamento fail-closed.
25. Riscos de exposição ou acoplamento.

Entregue em Markdown limpo, como CANVA FINAL, pronto para copiar e colar.
```

# 84. Estado atual deste documento

Este documento foi atualizado após a consolidação da Matriz Técnica de Dados Sensíveis por Contrato, incorporando DEC-191 e definindo a próxima etapa recomendada como Detalhamento de EventEnvelope v1.

A próxima decisão nova deve começar em DEC-193, salvo se o arquivo 03_DECISOES_OFICIAIS.md indicar outra última DEC.


# 85. Prompt para Detalhamento de EventEnvelope v1

```text
Estamos trabalhando no projeto "NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada".

Este chat será dedicado exclusivamente à etapa:

# Detalhamento de EventEnvelope v1

Use obrigatoriamente os documentos centrais e técnicos do projeto como fonte oficial:

1. 00_BIBLIA_DO_PROJETO.md
2. 01_MAPA_DE_MODULOS.md
3. 02_REGRAS_DE_ARQUITETURA.md
4. 03_DECISOES_OFICIAIS.md
5. 04_PROMPTS_DE_TRABALHO.md
6. 05_CATALOGO_DE_CONTRATOS_PUBLICOS.md
7. 06_MATRIZ_TECNICA_PERMISSOES_POR_CONTRATO.md
8. 07_MATRIZ_TECNICA_DADOS_SENSIVEIS_POR_CONTRATO.md

Objetivo:
Detalhar o padrão oficial EventEnvelope v1 do NoduOS para eventos internos, eventos de fato ocorrido, eventos de solicitação registrada, integração com outbox/inbox, deduplicação, retry, dead-letter, correlação, causalidade, auditoria, sensibilidade, LGPD e compatibilidade.

Estado atual da raiz:
- O Catálogo de Contratos Públicos foi consolidado.
- A Matriz Técnica de Permissões por Contrato foi consolidada.
- A Matriz Técnica de Dados Sensíveis por Contrato foi consolidada.
- A última DEC consolidada é DEC-191.
- A próxima DEC livre é DEC-192.

Regras obrigatórias:
- Não criar banco de dados.
- Não criar migration.
- Não criar endpoint final.
- Não criar código.
- Não criar tela.
- Não criar módulo novo.
- Não alterar fronteiras de módulo.
- Não usar evento como comando.
- Não usar evento como prova de autorização nova.
- Não transportar segredo bruto.
- Não transportar biometria bruta.
- Não transportar evidência bruta quando EvidenceReference bastar.
- Não transportar dado pessoal bruto quando referência, máscara ou minimização bastar.
- Evento deve usar payload minimizado.
- Evento deve declarar owner_module, source_module, contract_id, contract_version, tenant_id, context_id, actor_reference, resource_reference, occurred_at, published_at, correlation_id, causation_id quando derivado, sensitivity_level, policy references e audit_reference quando aplicável.
- Evento crítico deve prever outbox, inbox/deduplicação, retry controlado, dead-letter/quarentena e reprocessamento seguro.
- Toda decisão nova realmente necessária deve começar em DEC-192, salvo se o 03_DECISOES_OFICIAIS.md indicar outra última DEC.

Entregue em Markdown limpo, como CANVA FINAL, pronto para copiar e colar, incluindo:

1. Objetivo do EventEnvelope v1.
2. Escopo.
3. Regras globais.
4. Diferença entre evento de fato ocorrido e evento de solicitação registrada.
5. Campos obrigatórios.
6. Campos opcionais controlados.
7. Campos proibidos.
8. Regras de payload minimizado.
9. Regras de tenant e contexto.
10. Regras de actor_reference e resource_reference.
11. Regras de correlation_id e causation_id.
12. Regras de sensibilidade e LGPD.
13. Regras de auditoria.
14. Regras de outbox.
15. Regras de inbox e deduplicação.
16. Regras de retry controlado.
17. Regras de dead-letter e quarentena.
18. Regras de reprocessamento seguro.
19. Regras de compatibilidade e versionamento.
20. Regras de descontinuação.
21. Exemplos conceituais por tipo de evento.
22. Anti-padrões proibidos.
23. Atualizações recomendadas para documentos centrais.
24. Decisões novas sugeridas, apenas se realmente necessárias, começando em DEC-192.
25. Próxima etapa recomendada.
```

# 86. Estado atual deste documento

Este documento foi atualizado após a consolidação da Matriz Técnica de Dados Sensíveis por Contrato, incorporando DEC-191 e definindo a próxima etapa recomendada como Detalhamento de EventEnvelope v1.

A próxima decisão nova deve começar em DEC-193, salvo se o arquivo 03_DECISOES_OFICIAIS.md indicar outra última DEC.

# Prompt oficial - próxima etapa: Detalhamento de EvidenceReference

Use este prompt em novo chat quando for detalhar EvidenceReference:

```text
Estamos trabalhando no projeto "NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada".

Este chat será dedicado exclusivamente à etapa:

# Detalhamento de EvidenceReference

Use obrigatoriamente os documentos centrais e técnicos do projeto como fonte oficial:

1. 00_BIBLIA_DO_PROJETO.md
2. 01_MAPA_DE_MODULOS.md
3. 02_REGRAS_DE_ARQUITETURA.md
4. 03_DECISOES_OFICIAIS.md
5. 04_PROMPTS_DE_TRABALHO.md
6. 05_CATALOGO_DE_CONTRATOS_PUBLICOS.md
7. 06_MATRIZ_TECNICA_PERMISSOES_POR_CONTRATO.md
8. 07_MATRIZ_TECNICA_DADOS_SENSIVEIS_POR_CONTRATO.md
9. 08_DETALHAMENTO_EVENTENVELOPE_V1.md

Estado atual da raiz:

- A última DEC consolidada é DEC-192.
- A próxima DEC livre é DEC-193.
- O EventEnvelope v1 foi consolidado como padrão oficial obrigatório para eventos públicos intermodulares.
- A próxima etapa técnica recomendada é Detalhamento de EvidenceReference.

Objetivo:

Criar o detalhamento oficial do EvidenceReference do NoduOS, definindo como evidências, vídeos, imagens, snapshots, clips, anexos probatórios, documentos probatórios, eventos de acesso, alarmes, tickets, suporte, auditoria, cadeia de custódia e exportações devem ser referenciados sem transportar bruto indevido.

Regras obrigatórias:

- Não sugerir MVP.
- Não sugerir fases de implementação.
- Não criar código, banco, migration, endpoint final, fila, tela ou tecnologia específica.
- Não alterar fronteiras de módulos.
- Não transportar evidência bruta quando referência segura bastar.
- Não transportar vídeo, imagem, snapshot, clip, documento ou anexo probatório sem finalidade, política, retenção, mascaramento, AuthorizationDecision, auditoria e cadeia de custódia.
- Não permitir evidência sem owner_module, custody_owner_module, source_event_reference, tenant_id, context_id, related_resource_reference, sensitivity_level, retention_policy_reference, masking_policy_reference, access_policy_reference, chain_of_custody_reference, audit_reference e export_control_policy quando aplicável.
- Não permitir EvidenceReference como banco compartilhado ou atalho para acessar storage bruto.
- Toda decisão nova realmente necessária deve começar em DEC-193, salvo se o 03_DECISOES_OFICIAIS.md indicar outra última DEC.
- O chat conversa. O documento manda.

Entregue um CANVA FINAL em Markdown limpo, pronto para copiar e colar, com objetivo, escopo, campos obrigatórios, campos proibidos, relação com EventEnvelope v1, relação com ResourceReference, relação com SecretReference, cadeia de custódia, retenção, mascaramento, auditoria, exportação, visualização, quarentena, reprocessamento, falhas, matrizes por módulo, riscos, decisões sugeridas e atualizações recomendadas para a raiz.
```

Estado atual após esta atualização:

- DEC aplicada: DEC-192.
- Próxima DEC livre: DEC-198.
- Próxima etapa recomendada: Detalhamento de SecretReference.


---

# Atualização - Detalhamento de EvidenceReference v1

Este documento foi atualizado após a consolidação do Detalhamento de EvidenceReference v1, incorporando DEC-193 e definindo a próxima etapa recomendada como Detalhamento de SecretReference.

A próxima decisão nova deve começar em DEC-195, salvo se o arquivo `03_DECISOES_OFICIAIS.md` indicar outra última DEC.

# Prompt oficial - próxima etapa: Detalhamento de SecretReference

Use este prompt em novo chat quando for detalhar SecretReference:

```text
Estamos trabalhando no projeto "NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada".

Este chat será dedicado exclusivamente à etapa:

# Detalhamento de SecretReference v1

Use obrigatoriamente os documentos centrais e técnicos do projeto como fonte oficial:

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

Contexto oficial atual:

- Nome oficial: NoduOS.
- Descrição oficial: SaaS Modular de Gestão de Espaços e Segurança Unificada.
- Conceito técnico: Sistema Operacional Modular para Espaços Físicos Conectados.
- Regra central: Política influencia. Core decide. Módulo dono executa. Auditoria registra.
- A última DEC consolidada é DEC-193.
- A próxima DEC livre é DEC-195.
- O EventEnvelope v1 foi consolidado como padrão oficial obrigatório de eventos intermodulares.
- O EvidenceReference v1 foi consolidado como padrão oficial de referência segura de evidências.
- A próxima etapa técnica recomendada é Detalhamento de SecretReference.

Objetivo:

Criar o detalhamento oficial do SecretReference v1 do NoduOS, definindo como segredos, tokens, chaves, certificados, credenciais de gateway, credenciais de dispositivo, credenciais de conector, segredo de webhook, assinatura, client secret, material criptográfico e credenciais de provedor devem ser referenciados sem transportar segredo bruto.

Regras obrigatórias:

- Não sugerir MVP.
- Não sugerir fases de implementação.
- Não criar banco, migration, endpoint final, tela, código, linguagem, framework, vault concreto ou provedor definitivo.
- Não transportar segredo bruto em payload, evento, comando, webhook, read model, log, URL, exportação, BI, auditoria, relatório ou configuração.
- Não permitir SecretReference como banco compartilhado ou atalho para acessar segredo bruto.
- Não permitir segredo sem owner_module, finalidade, escopo, política de acesso, rotação, revogação, auditoria e fail-closed.
- Toda decisão nova realmente necessária deve começar em DEC-195, salvo se o `03_DECISOES_OFICIAIS.md` indicar outra última DEC.
- O chat conversa. O documento manda.

Entregue um CANVA FINAL em Markdown limpo, pronto para copiar e colar, com objetivo, escopo, campos obrigatórios, campos proibidos, relação com EventEnvelope v1, EvidenceReference, ResourceReference, AuthorizationDecision, rotação, revogação, expiração, auditoria, acesso, segredo de webhook, credenciais de gateway/dispositivo/conector, integrações externas, quarentena, reprocessamento, falhas, matrizes por módulo, riscos, decisões sugeridas e atualizações recomendadas para a raiz.
```

Status da raiz após esta atualização:

- DEC aplicada: DEC-193.
- Próxima DEC livre: DEC-195.
- Próxima etapa recomendada: Detalhamento de SecretReference.


---

# Regra obrigatória para próximas etapas técnicas antes da programação

A partir da consolidação do SecretReference v1, os prompts das próximas etapas técnicas devem usar fluxo em duas respostas:

1. Primeiro gerar um RELATÓRIO DE CONFORMIDADE E PARECER PRELIMINAR.
2. Aguardar aprovação explícita do usuário.
3. Somente depois gerar o CANVA FINAL consolidado.

O primeiro relatório deve conter:

- conformidade com os arquivos raiz;
- riscos de acoplamento;
- divergências com decisões oficiais;
- lacunas;
- ajustes obrigatórios;
- decisões sugeridas, começando na próxima DEC livre;
- parecer: aprovado, aprovado com ajustes ou reprovado.

É proibido gerar CANVA FINAL na primeira resposta da etapa técnica, salvo se o usuário pedir expressamente para pular o relatório preliminar.

Regra curta:

Relatório primeiro. Parecer depois. Canva final só com aprovação.


---

# Atualização - Detalhamento de SecretReference v1

Data da atualização: 2026-06-27.

Decisão aplicada: DEC-194.

Arquivo técnico raiz consolidado: `10_DETALHAMENTO_SECRETREFERENCE_V1.md`.

Última DEC consolidada: DEC-197.

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


---

# Prompt oficial - Detalhamento de AuthorizationDecision v1

Use este prompt em novo chat exclusivo para a próxima etapa:

```text
Estamos trabalhando no projeto "NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada".

Este chat será dedicado exclusivamente à etapa:

# Detalhamento de AuthorizationDecision v1

Use obrigatoriamente os documentos centrais e técnicos do projeto como fonte oficial:

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

Estado atual da raiz:

- Última DEC consolidada: DEC-197.
- Próxima DEC livre: DEC-198.
- Próxima etapa técnica recomendada: Detalhamento de AuthorizationDecision v1.

Regra central:

Política influencia. Core decide. Módulo dono executa. Auditoria registra.

Frase guia desta etapa:

Autorização decide o agora. Escopo limita o alcance. Política explica o motivo. Expiração evita herança infinita. Auditoria registra a decisão.

## Regra obrigatória desta conversa

Não gere CANVA FINAL na primeira resposta.

Primeiro gere apenas um RELATÓRIO DE CONFORMIDADE E PARECER PRELIMINAR contendo:

1. Conformidade com os arquivos raiz 00 a 10.
2. Conferência da sequência decisória DEC-194 -> DEC-195.
3. Riscos de acoplamento.
4. Riscos de autorização duplicada fora do Core.
5. Riscos de política virar decisão operacional.
6. Riscos de módulo dono executar sem AuthorizationDecision.
7. Riscos de AuthorizationDecision virar permissão eterna.
8. Riscos de cache indevido.
9. Riscos de reaproveitamento indevido de decisão expirada.
10. Riscos de evento ser interpretado como autorização nova.
11. Riscos de SecretReference, EvidenceReference ou ResourceReference serem usados sem decisão válida.
12. Lacunas técnicas.
13. Ajustes obrigatórios.
14. Decisões novas sugeridas, começando em DEC-195 se realmente necessárias.
15. Parecer final: aprovado, aprovado com ajustes ou reprovado para CANVA FINAL.

Depois, aguarde minha aprovação.

Somente após minha aprovação, gere o CANVA FINAL do Detalhamento de AuthorizationDecision v1.

## Objetivo da etapa

Detalhar o AuthorizationDecision v1 como padrão conceitual oficial do Core Platform para decisões de autorização estrutural, contextual, temporal, modular, sensível e crítica.

O documento final, quando aprovado, deve definir:

- o que é AuthorizationDecision v1;
- quando é obrigatório;
- quais campos carrega;
- quais campos são proibidos;
- como se relaciona com PermissionGrant;
- como se relaciona com InheritanceGrant;
- como se relaciona com ResourceReference;
- como se relaciona com EventEnvelope v1;
- como se relaciona com EvidenceReference v1;
- como se relaciona com SecretReference v1;
- como se relaciona com dados sensíveis;
- como se relaciona com módulos, licenças, feature flags e contexto;
- como funciona escopo;
- como funciona expiração;
- como funciona reason_code;
- como funciona cache permitido e proibido;
- quando exige nova decisão;
- quando pode usar decisão existente;
- quando decisão expirada deve falhar fechado;
- como auditar decisão;
- como impedir autorização fora do Core;
- como impedir política virar executor;
- como impedir evento virar autorização;
- como impedir módulo consumidor usar decisão fora do escopo.

## Regras obrigatórias

- Não sugerir MVP.
- Não sugerir fases de implementação.
- Não criar código.
- Não criar banco.
- Não criar endpoint final.
- Não criar tela.
- Não criar schema técnico definitivo.
- Não escolher framework, linguagem, fila, banco ou tecnologia.
- Não criar módulo novo.
- Não alterar fronteiras de módulos.
- Não permitir módulo comercial emitir AuthorizationDecision final.
- Não permitir Herança e Permissões decidir execução final.
- Não permitir Auditoria decidir autorização.
- Não permitir Segurança e LGPD executar ação operacional.
- Não permitir evento gerar autorização nova.
- Não permitir read model substituir autorização.
- Não permitir SecretReference, EvidenceReference ou ResourceReference autorizar ação por si só.
- Não permitir AuthorizationDecision sem tenant, contexto, ator, recurso, ação, escopo, política e expiração quando aplicável.
- Não permitir decisão crítica sem audit_reference.
- Não permitir ação crítica sem fail-closed.

## Saída esperada da primeira resposta

A primeira resposta deve ser somente:

# RELATÓRIO DE CONFORMIDADE E PARECER PRELIMINAR - AUTHORIZATIONDECISION V1 NODUOS

Com análise, riscos, ajustes e parecer.

Não gere CANVA FINAL ainda.
```

# Atualização - AuthorizationDecision v1 e ResourceReference v1

Este documento foi atualizado após a consolidação conjunta de AuthorizationDecision v1 e ResourceReference v1, incorporando DEC-195 e DEC-196.

Estado atual:

- Última DEC consolidada: DEC-197.
- Próxima DEC livre: DEC-198.
- Próxima etapa recomendada: Blueprint técnico da aplicação.

Regras obrigatórias para próximos prompts técnicos:

- Antes de CANVA FINAL, gerar RELATÓRIO DE CONFORMIDADE E PARECER PRELIMINAR.
- Aguardar aprovação do usuário antes de gerar CANVA FINAL.
- Todo detalhamento de contrato, módulo, evento, comando, webhook, read model, evidência, segredo, exportação, suporte, integração ou automação deve verificar se a ação exige AuthorizationDecision v1.
- AuthorizationDecision v1 pertence ao Core Platform, deve ser temporal, escopada e auditável, e não pode ser emitida por módulo comercial.
- Não permitir que evento, read model, ResourceReference, EvidenceReference ou SecretReference substitua decisão válida do Core.
- Ação crítica sem AuthorizationDecision válida deve falhar fechado.
- Ao definir contratos, APIs internas, eventos, comandos, read models, auditorias, integrações, suporte, exportações ou fluxos que apontem recursos entre módulos, usar obrigatoriamente ResourceReference v1.
- ResourceReference v1 deve declarar owner_module, resource_type, resource_public_id, tenant_id/context_id quando aplicável, module_scope, authorization_scope, sensitivity_level, lifecycle_state, políticas aplicáveis, display_label minimizado, audit_reference quando aplicável e `no_domain_transfer = true`.
- Não permitir ResourceReference como banco compartilhado, autorização, permissão, evidência, segredo, evento, read model, payload completo, chave interna vazada ou atalho para banco interno.

# Prompt oficial - próxima etapa: Blueprint técnico da aplicação

```text
Estamos trabalhando no projeto NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada.

Use obrigatoriamente os documentos centrais atualizados como fonte oficial:

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

Estado da raiz:

- Última DEC consolidada: DEC-197.
- Próxima DEC livre: DEC-198.
- Próxima etapa: Blueprint técnico da aplicação.

Regras obrigatórias:

- Não gere CANVA FINAL na primeira resposta.
- Primeiro gere um RELATÓRIO DE CONFORMIDADE E PARECER PRELIMINAR para o Blueprint técnico da aplicação.
- O relatório deve apontar riscos, lacunas, divergências, decisões necessárias, sequência segura e prontidão para programação.
- Aguarde minha aprovação antes de gerar o CANVA FINAL.
- Não sugerir MVP.
- Não sugerir fases de implementação como simplificação da arquitetura final.
- Não alterar decisões oficiais sem sugerir nova DEC.
- Não criar atalhos que violem modularidade.
- Core Platform continua obrigatório.
- Política influencia. Core decide. Módulo dono executa. Auditoria registra.
- EventEnvelope v1 é obrigatório para eventos intermodulares.
- EvidenceReference v1 protege provas.
- SecretReference v1 protege segredos.
- AuthorizationDecision v1 decide ações sensíveis/críticas pelo Core.
- ResourceReference v1 aponta recursos sem transferência de domínio.
- Comandos críticos exigem idempotency_key.
- Ações críticas exigem fail-closed.
- Segredo bruto, evidência bruta, biometria bruta e payload completo de domínio não podem trafegar.
- Read model não é banco compartilhado.
- Evento não é comando.
- ResourceReference não é autorização.
- AuthorizationDecision não é permissão eterna.

Objetivo do relatório preliminar:

Preparar o Blueprint técnico da aplicação para permitir o início da programação com trilho seguro, cobrindo arquitetura de aplicação, organização de módulos, backend, frontend, banco, filas/eventos, workers, contratos, autenticação, autorização, auditoria, LGPD, storage, observabilidade, testes, deploy e ordem técnica inicial sem contradizer a raiz.

Entregue primeiro apenas o RELATÓRIO DE CONFORMIDADE E PARECER PRELIMINAR.
```


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

# Atualização consolidada: Blueprint técnico da aplicação

Data: 2026-06-27.
Decisão aplicada: DEC-197.
Arquivo técnico raiz: `13_BLUEPRINT_TECNICO_APLICACAO_NODUOS.md`.

Estado atual da raiz:

```text
Última DEC consolidada: DEC-197.
Próxima DEC livre: DEC-198.
Próxima etapa recomendada: Programação inicial do Core Platform orientada pelo Blueprint técnico.
```

## Prompt oficial - programação orientada pelo Blueprint técnico

```text
Estamos trabalhando no projeto NoduOS - SaaS Modular de Gestão de Espaços e Segurança Unificada.

Use obrigatoriamente os documentos centrais atualizados como fonte oficial, especialmente:

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
14. 13_BLUEPRINT_TECNICO_APLICACAO_NODUOS.md

Estado da raiz:

- Última DEC consolidada: DEC-197.
- Próxima DEC livre: DEC-198.

Objetivo da conversa:
Iniciar a programação do Core Platform obedecendo o Blueprint técnico, sem violar modularidade, contratos, tenant/contexto, autorização, auditoria, LGPD, EventEnvelope, EvidenceReference, SecretReference, AuthorizationDecision ou ResourceReference.

Antes de escrever código, entregue um RELATÓRIO DE PRONTIDÃO TÉCNICA E PLANO DE EXECUÇÃO DO CORE PLATFORM contendo:

1. módulo dono;
2. contratos afetados;
3. estrutura de repositório a criar;
4. ordem dos arquivos;
5. entidades de domínio iniciais;
6. limites de banco por domínio;
7. APIs internas conceituais;
8. eventos EventEnvelope v1 envolvidos;
9. AuthorizationDecision exigida;
10. ResourceReference exigida;
11. dados sensíveis envolvidos;
12. auditoria exigida;
13. idempotência exigida;
14. comportamento fail-closed;
15. testes obrigatórios;
16. riscos de acoplamento;
17. confirmação do que será codado primeiro.

Não escreva código na primeira resposta. Aguarde minha aprovação do plano técnico. Depois da aprovação, gere os arquivos de código em blocos completos, copiáveis e com comandos de criação quando necessário.

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

Comece pelo Core Platform, pois ele autentica, contextualiza, autoriza, licencia, audita, protege e conecta.
```
