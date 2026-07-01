00_BIBLIA_DO_PROJETO.md

Bíblia do Projeto: NoduOS
SaaS Modular de Gestão de Espaços e Segurança Unificada
Versão
Versão: 2.8
Status: Base oficial atualizada com Blueprint Técnico da Aplicação, DEC-197 e documentos técnicos raiz 00 a 13
Data de criação: 2026-06-22
Data desta atualização: 2026-06-27
Tipo de documento: Fonte central de verdade do projeto

1. Nome oficial do projeto e aplicativo
Nome oficial:

NoduOS

Descrição oficial:

SaaS Modular de Gestão de Espaços e Segurança Unificada

Conceito técnico:

Sistema Operacional Modular para Espaços Físicos Conectados

O termo Building OS Modular Platform pode ser usado como conceito técnico, categoria arquitetural ou descrição estratégica, mas não é mais o nome oficial do projeto nem do aplicativo.

Identidade oficial inicial:

      • Nome: NoduOS
      • Conceito: Conexão que impulsiona.
      • Paleta principal: #1F2937, #00A37A e #F1F3F5.
      • Ideia central: conectar sistemas, dados e decisões em um fluxo inteligente de automação, segurança, acesso, operação e eficiência.

Regra de nomenclatura:

      • Documentos oficiais devem usar NoduOS como nome do app e do projeto.
      • A descrição “SaaS Modular de Gestão de Espaços e Segurança Unificada” deve permanecer como subtítulo ou descrição do produto.
      • A expressão Building OS deve permanecer como conceito técnico de posicionamento, não como nome comercial.

2. Visão do produto
A plataforma será um SaaS modular, multi-tenant, multimarcas e white-label para gestão de espaços
físicos, segurança eletrônica, operação predial, cobrança, acesso, câmeras, dispositivos, clientes,
visitantes, tickets, reservas, comunicação e automações.

A plataforma deve atender diferentes tipos de espaços, incluindo:

     • Condomínios residenciais
     • Condomínios comerciais
     • Empresas
     • Clínicas
     • Coworkings
     • Escolas
     • Academias
     • Hospitais
     • Galpões

     • Prédios comerciais
     • Lojas
     • Espaços compartilhados
     • Ambientes industriais
     • Qualquer espaço físico que precise de gestão, segurança e operação centralizada

A plataforma não será apenas um sistema administrativo. Ela será planejada como um Building OS, ou
seja, um sistema operacional para espaços físicos conectados.

3. Proposta central
A proposta principal da plataforma é:

       Unificar gestão, segurança eletrônica, controle de acesso, câmeras, cobrança, operação,
       dispositivos, comunicação e experiência do usuário em uma única plataforma modular,
       personalizável, multimarcas e escalável.

A plataforma deve permitir que um parceiro instale fisicamente uma organização, conecte seus
dispositivos ao servidor por meio de gateway/tunnel, ative módulos conforme o plano contratado e
entregue ao operador e aos clientes finais uma experiência digital completa.

4. O que a plataforma é
A plataforma é:

     • Um SaaS modular
     • Um sistema multi-tenant
     • Uma plataforma white-label
     • Uma plataforma multimarcas
     • Um sistema para parceiros e integradores
     • Um painel de gestão para organizações
     • Um app mobile first para clientes finais
     • Um app mobile first para operadores/gestores
     • Um ambiente de controle para dispositivos físicos
     • Um sistema de herança de módulos, permissões e recursos
     • Um hub de integrações com câmeras, controle de acesso, alarmes, sensores, gateways e
       sistemas financeiros
     • Um sistema de auditoria e rastreabilidade
     • Um produto que une software e infraestrutura física

5. O que a plataforma não é
A plataforma não é:

     • Apenas um ERP de condomínio

      • Apenas um sistema de boletos
      • Apenas um app de morador
      • Apenas um VMS de câmeras
      • Apenas um controle de acesso
      • Apenas um CRM
      • Apenas um sistema de coworking
      • Apenas uma central de tickets
      • Apenas uma plataforma financeira
      • Um sistema preso a uma única marca de hardware
      • Um produto fechado e engessado
      • Um projeto planejado como MVP
      • Um sistema que começa simples para depois ser refeito

A plataforma deve ser planejada desde o início como uma arquitetura final modular.

6. Decisão estratégica fundamental
Este projeto não será documentado como MVP, fase 1, fase 2 ou versão temporária.

O objetivo é planejar a versão final ideal da plataforma, com todos os módulos, fluxos, regras e
responsabilidades bem definidos.

Isso não significa que tudo será desenvolvido ao mesmo tempo. Significa que o planejamento funcional
e arquitetural deve considerar a plataforma final desde o início, evitando retrabalho, retrocesso e
decisões improvisadas.

7. Hierarquia oficial da plataforma
A hierarquia oficial será:

  MASTER
  └── PARCEIRO
        └── ORGANIZAÇÃO / ESPAÇO
             ├── OPERADOR / GESTOR
             └── UNIDADE / BLOCO / ÁREA / AMBIENTE
                   └── CLIENTE / USUÁRIO FINAL

A lógica de governo será:

  Master governa a plataforma.
  Parceiro vende, instala e gerencia organizações.
  Organização representa o cadastro operacional e institucional do espaço físico conectado.
  Operador/Gestor administra o dia a dia da organização.

  Unidade/Bloco/Área recebe recursos e permissões.
  Cliente usa apenas o que herdou.

8. Fluxo oficial da plataforma
O fluxo principal será:

    1. Master vende um plano para o Parceiro.
    2. Master define quais módulos o Parceiro poderá usar.
    3. O Core Platform cria ou vincula o UserAccount do Parceiro por fluxo seguro autorizado, com convite, credencial, sessão e auditoria, sem senha compartilhada.
    4. O Parceiro acessa seu painel.
    5. O Parceiro cria uma Organização/Espaço.
    6. O Parceiro instala fisicamente a organização.
    7. O Parceiro instala uma Mikrotik ou gateway local.
    8. O gateway cria um tunnel seguro com o servidor.
    9. O Parceiro instala e integra dispositivos físicos.
   10. O Parceiro solicita ou configura a disponibilidade operacional de módulos dentro do escopo autorizado por Master, plano, licença, entitlement, feature flag e Core Platform; Organizações apenas reflete isso por read model autorizado.
   11. O Parceiro pode conduzir o cadastro inicial da estrutura física por fluxo autorizado do módulo Unidades, Blocos, Áreas e Ambientes, sem assumir domínio da estrutura.
   12. O Core Platform cria ou vincula o UserAccount do Operador/Gestor por fluxo seguro autorizado, com permissões, contexto, convite e auditoria.
   13. O Operador/Gestor acessa o painel da organização.
   14. O Operador/Gestor cadastra clientes e usuários finais.
   15. O Operador/Gestor vincula usuários a unidades, blocos ou áreas.
   16. O Operador/Gestor configura, dentro do escopo herdado, quais recursos e permissões podem descer para unidades, blocos, áreas, ambientes e clientes; Herança e Permissões governa políticas, Core decide e o módulo dono executa.
   17. Cada cliente recebe seu acesso.
   18. O cliente utiliza apenas os módulos básicos e os recursos herdados.
   19. Todas as ações geram logs, auditoria, eventos e relatórios.

9. Regras de herança
A plataforma deve funcionar por herança contextual.

A regra oficial é:

  Master libera módulos para Parceiro.
  Parceiro libera módulos para Organização.
  Organização libera permissões para Operador/Gestor.
  Operador/Gestor libera recursos para Unidade/Bloco/Área.
  Unidade/Bloco/Área libera recursos para Cliente.
  Cliente usa apenas o que herdou.

Nenhum usuário deve acessar algo fora do seu contexto, salvo permissões explícitas superiores.

10. Contexto de acesso
Todo acesso à plataforma acontece dentro de um contexto.

Uma mesma pessoa pode ter múltiplos vínculos.

Exemplo:

  Maria pode ser:
  - Moradora do Condomínio Alpha
  - Funcionária da Empresa Beta
  - Cliente do Cowork Gamma
  - Operadora da Clínica Delta

A mesma pessoa pode usar o mesmo login, mas cada contexto terá:

      • Dashboard própria
      • Permissões próprias
      • Módulos disponíveis próprios
      • Recursos herdados próprios
      • Câmeras disponíveis próprias
      • Acessos disponíveis próprios
      • Relatórios próprios
      • Notificações próprias

11. Login e identidade
Cada pessoa deve ter login próprio.

Unidade não deve ser tratada como login compartilhado.

Regra oficial:

       A unidade concentra permissões e recursos, mas o acesso deve ser individual por pessoa.

Motivos:

      • Auditoria
      • Segurança
      • LGPD
      • Rastreabilidade
      • Histórico individual
      • Controle de permissões por pessoa
      • Bloqueio seletivo
      • Evitar senha compartilhada

Exemplo correto:

  Unidade: Apartamento 302
  Pessoas vinculadas:
  - João, responsável principal
  - Maria, moradora
  - Pedro, dependente
  - Ana, prestadora autorizada

12. Perfis principais
12.1 Master
O Master é o dono da plataforma.

Responsabilidades:

     • Criar parceiros
     • Vender planos
     • Liberar módulos
     • Definir limites
     • Controlar licenças
     • Gerenciar integrações globais
     • Controlar white-label
     • Auditar a plataforma
     • Ver relatórios globais
     • Gerenciar marketplace
     • Controlar configurações superiores

12.2 Parceiro
O Parceiro é criado pelo Master.

Exemplos de parceiro:

     • Integrador de segurança eletrônica
     • Administradora de condomínios
     • Empresa de facilities
     • Revenda
     • Franquia
     • Operador regional
     • Empresa de tecnologia
     • Grupo empresarial

Responsabilidades:

     • Criar organizações
     • Instalar estrutura física
     • Instalar gateway/tunnel
     • Cadastrar dispositivos
     • Solicitar, configurar ou refletir disponibilidade de módulos nas organizações por fluxos autorizados pelo Master, Core Platform, plano, licença, entitlement e feature flag
     • Criar operadores/gestores
     • Gerenciar tudo abaixo dele
     • Acompanhar saúde da operação
     • Acompanhar receita e licenças, se habilitado
     • Aplicar white-label, se habilitado

12.3 Organização / Espaço
A Organização representa o cadastro operacional e institucional do espaço físico conectado.

Ela não substitui Tenant, Context, Parceiro, estrutura física interna, cadastro de pessoas, gateway, dispositivos, licenças, feature flags ou módulos comerciais.

Exemplos:

     • Condomínio
     • Clínica
     • Empresa
     • Coworking
     • Escola
     • Academia
     • Galpão
     • Prédio comercial
     • Loja
     • Hospital
     • Unidade operacional

A organização mantém dados próprios e referencia resumos autorizados:

     • Endereço, tipo de espaço, perfil institucional, contatos operacionais, status cadastral/operacional e configurações neutras pertencem ao módulo Organizações.
     • Blocos, unidades, áreas e ambientes pertencem ao módulo Unidades, Blocos, Áreas e Ambientes.
     • Operadores, pessoas, clientes e vínculos pertencem ao Core Platform e ao módulo Pessoas e Clientes, conforme a natureza da entidade.
     • Dispositivos pertencem ao módulo Dispositivos e aparecem na Organização apenas por resumo autorizado.
     • Módulos ativos, licenças, planos, entitlements e feature flags pertencem ao Core Platform, sob governança superior autorizada de Master e Parceiros.
     • Regras operacionais pertencem ao módulo dono do recurso; OrganizationSettings guarda apenas configurações neutras.
     • Relatórios pertencem ao módulo Relatórios / BI e logs primários pertencem ao Core Platform e aos módulos donos.

12.4 Operador / Gestor
O Operador/Gestor administra a organização.

Exemplos:

     • Síndico
     • Administrador
     • Gerente
     • Recepcionista
     • Supervisor
     • Portaria
     • Facility manager
     • Operador de segurança
     • Responsável local

Responsabilidades:

     • Cadastrar clientes
     • Cadastrar pessoas
     • Vincular pessoas a unidades
     • Escolher módulos herdados
     • Administrar tickets
     • Visualizar dispositivos
     • Ver saúde do sistema
     • Gerenciar convites
     • Gerenciar acessos
     • Ver câmeras permitidas
     • Publicar mural
     • Gerenciar rotinas da organização

12.5 Unidade / Bloco / Área / Ambiente
Unidades, blocos, áreas e ambientes representam partes internas de uma organização.

Exemplos:

     • Apartamento
     • Sala
     • Consultório
     • Mesa
     • Loja
     • Bloco
     • Torre
     • Garagem
     • Quadra
     • Academia
     • Recepção
     • Laboratório

      • Sala de reunião
      • Escritório privativo

Esses elementos podem herdar recursos e permissões.

12.6 Cliente / Usuário Final
O Cliente é o usuário final da plataforma.

Exemplos:

      • Morador
      • Funcionário
      • Paciente
      • Médico
      • Membro de coworking
      • Lojista
      • Aluno
      • Prestador autorizado
      • Responsável por unidade

O Cliente deve ter app mobile first e acessar apenas aquilo que herdou.

Funções possíveis:

      • Ver dashboard pessoal
      • Ver sua unidade
      • Ver perfil
      • Ver boletos
      • Baixar relatórios financeiros
      • Ver câmeras herdadas
      • Abrir acessos permitidos
      • Criar convites
      • Abrir tickets
      • Ler mural informativo
      • Ver documentos
      • Ver notificações
      • Gerenciar dados pessoais permitidos

13. Princípio de modularidade
A plataforma será modular.

Regra oficial:

       Todo módulo deve ser independente, ativável, desativável, auditável, integrável e
       substituível sem quebrar os demais.

Cada módulo deve possuir:

     • Objetivo próprio
     • Responsabilidades próprias
     • Permissões próprias
     • Dados próprios
     • APIs próprias
     • Eventos próprios
     • Logs próprios
     • Configurações próprias
     • Telas próprias
     • Relatórios próprios, quando aplicável
     • Integrações próprias, quando aplicável

Nenhum módulo deve depender da lógica interna de outro módulo.

14. Comunicação entre módulos
Os módulos só podem se comunicar por:

     • APIs públicas internas
     • Eventos
     • Contratos de dados
     • Webhooks internos
     • Barramento de eventos
     • Read models autorizados

É proibido que um módulo acesse diretamente a lógica interna de outro módulo.

Exemplo correto:

  Financeiro publica: InvoiceOverdue
  Herança e Permissões avalia política aplicável.
  Core Platform emite AuthorizationDecision.
  O módulo dono executa a ação, se autorizado.

Exemplo errado:

  Financeiro entra diretamente no banco do Controle de Acesso e bloqueia uma
  porta.

15. Core obrigatório da plataforma
Algumas partes não são módulos comerciais. Elas fazem parte do núcleo obrigatório.

Core Platform:

     • Autenticação
     • Usuários
     • Tenants
     • Contextos
     • Papéis
     • Permissões
     • Herança contextual
     • Auditoria
     • Logs
     • Notificações básicas
     • Planos
     • Licenças
     • Feature flags
     • Segurança
     • LGPD
     • Event bus
     • Configurações globais

Esse núcleo sempre existe.

16. Módulos comerciais oficiais
A lista inicial de módulos comerciais da plataforma será:

    1. Master
    2. Parceiros
    3. Organizações
    4. Pessoas e Clientes
    5. Unidades, Blocos, Áreas e Ambientes
    6. Herança e Permissões
    7. Gateway Local / Mikrotik / Tunnel
    8. Dispositivos
    9. Controle de Acesso
   10. Câmeras / VMS
   11. Alarmes
   12. Financeiro
   13. Convites e Visitantes
   14. Tickets
   15. Mural Informativo
   16. Reservas
   17. Relatórios / BI
   18. White-label
   19. Notificações
   20. Automações
   21. Marketplace de Integrações
   22. Auditoria e Compliance
   23. Segurança e LGPD

   24. Suporte e Operação

Esta lista poderá ser refinada, mas qualquer alteração deve ser registrada no documento de decisões
oficiais.

17. Módulos básicos do Cliente
Todo Cliente deve ter acesso a recursos básicos conforme seu contexto, mesmo que outros módulos
comerciais não estejam liberados.

Módulos básicos possíveis:

     • Perfil
     • Minha unidade
     • Notificações
     • Termos e privacidade
     • Histórico básico
     • Relatórios pessoais, se permitido
     • Suporte ou tickets, se permitido pela organização

Módulos herdáveis:

     • Financeiro
     • Acesso
     • Câmeras
     • Convites
     • Reservas
     • Mural
     • Documentos
     • Ocorrências
     • Dependentes
     • Veículos
     • Visitantes
     • Relatórios avançados

18. Gateway local e mundo físico
A plataforma deve considerar que o mundo físico é parte essencial do produto.

O Parceiro instala fisicamente a organização e conecta os dispositivos ao servidor usando uma Mikrotik
ou gateway local.

O Gateway Local deve permitir:

     • Tunnel seguro com o servidor
     • Comunicação com equipamentos locais
     • Monitoramento de conectividade

      • Leitura de status dos dispositivos
      • Roteamento seguro
      • Diagnóstico remoto
      • Logs técnicos
      • Alertas de queda
      • Sincronização de eventos locais
      • Base para integrações futuras

19. Hardware e integrações
A plataforma deve ser agnóstica a hardware.

Isso significa que ela não deve depender de uma única marca ou fabricante.

Integrações desejadas:

      • Mikrotik
      • Hikvision
      • Intelbras
      • Control iD
      • ZKTeco
      • Axis
      • Dahua
      • JFL
      • PPA
      • Nice
      • Grandstream
      • ONVIF
      • RTSP
      • MQTT
      • OSDP
      • Wiegand
      • APIs financeiras
      • APIs de WhatsApp
      • APIs de e-mail
      • APIs de SMS
      • Sistemas externos de RH, ERP e CRM

Cada integração deve ser plugável.

Regra oficial:

       O módulo principal fala com uma interface genérica. Cada marca ou protocolo
       implementa seu próprio adaptador.

20. Mobile first
A experiência do Cliente e do Operador/Gestor deve ser mobile first.

O Cliente deve conseguir usar o sistema de forma simples pelo celular.

O Operador/Gestor também deve conseguir administrar o essencial pelo celular.

O Parceiro e o Master podem ter experiência mais completa em desktop, mas também devem possuir
visualização responsiva.

21. Dashboard por perfil
Cada perfil deve ter uma dashboard própria.

Cliente
Deve ver:

     • Minha unidade
     • Status financeiro, se permitido
     • Convites ativos
     • Acessos disponíveis
     • Câmeras herdadas
     • Tickets
     • Comunicados
     • Notificações
     • Últimos eventos pessoais

Operador/Gestor
Deve ver:

     • Clientes
     • Unidades
     • Tickets
     • Saúde do sistema
     • Dispositivos offline
     • Câmeras offline
     • Acessos recentes
     • Alertas
     • Mural
     • Reservas
     • Financeiro, se habilitado

Parceiro
Deve ver:

     • Organizações
     • Operadores
     • Clientes abaixo dele
     • Dispositivos
     • Saúde geral
     • Tickets escalados
     • Módulos ativos
     • Receita, se habilitada
     • Licenças
     • Alertas críticos

Master
Deve ver:

     • Parceiros
     • Organizações globais
     • Módulos
     • Planos
     • Receita global
     • Licenças
     • Integrações
     • Auditoria
     • Saúde da plataforma
     • Uso geral do sistema

22. Segurança, auditoria e LGPD
Todas as ações importantes devem gerar logs.

Devem ser auditáveis:

     • Login
     • Logout
     • Criação de usuários
     • Alteração de permissões
     • Liberação de módulos
     • Abertura de portas
     • Visualização de câmeras
     • Criação de convites
     • Alterações financeiras
     • Alterações em dispositivos
     • Alterações em organizações
     • Alterações em planos

     • Acesso a dados pessoais
     • Exportação de relatórios
     • Alteração de integrações

A plataforma deve respeitar LGPD, incluindo:

     • Consentimento
     • Finalidade de uso dos dados
     • Histórico de aceite
     • Controle de acesso a dados pessoais
     • Registro de tratamento de dados
     • Possibilidade de anonimização ou remoção conforme regra aplicável
     • Proteção de dados biométricos
     • Proteção de imagens e evidências

23. Regras proibidas
Durante o planejamento, é proibido:

     • Reintroduzir a ideia de MVP como estrutura do documento funcional
     • Planejar módulos acoplados
     • Criar dependência invisível entre módulos
     • Criar login compartilhado por unidade como regra principal
     • Fazer um módulo acessar diretamente dados internos de outro
     • Tratar condomínio como único caso de uso
     • Prender o sistema a uma única marca de hardware
     • Misturar responsabilidades de Master, Parceiro, Organização, Operador e Cliente
     • Permitir que Cliente veja recurso não herdado
     • Permitir que Operador veja organização fora do seu escopo sem permissão explícita
     • Criar regras globais sem registrar decisão oficial
     • Alterar decisão aprovada sem registrar motivo e impacto

24. Regra de aprovação
Uma sugestão só vira oficial quando for aprovada e registrada nos documentos centrais.

Regra:

  ChatGPT sugeriu = rascunho
  Usuário aprovou = decisão
  Entrou nos documentos centrais = oficial

Documentos centrais previstos:

     • 00_BIBLIA_DO_PROJETO.md
     • 01_MAPA_DE_MODULOS.md

     • 02_REGRAS_DE_ARQUITETURA.md
     • 03_DECISOES_OFICIAIS.md
     • 04_PROMPTS_DE_TRABALHO.md

25. Glossário inicial
Master
Dono da plataforma e nível máximo de governo.

Parceiro
Empresa ou pessoa criada pelo Master para vender, instalar, operar e gerenciar organizações.

Organização
Cadastro operacional e institucional do espaço físico conectado dentro da plataforma. Representa o espaço, mas não substitui Tenant, Context, Parceiro, estrutura física interna, pessoas, gateway, dispositivos ou módulos comerciais.

Operador/Gestor
Usuário responsável por administrar uma organização.

Cliente
Usuário final que usa recursos herdados.

Unidade
Elemento interno da organização, como apartamento, sala, consultório, mesa, loja ou espaço.

Bloco
Agrupador físico de unidades.

Área
Ambiente comum, operacional ou restrito dentro da organização.

Módulo
Parte independente da plataforma com funções próprias.

Herança
Regra pela qual módulos, permissões e recursos descem de um nível superior para um nível inferior.

Contexto
Ambiente lógico no qual o usuário está operando naquele momento.

Gateway Local
Dispositivo ou infraestrutura local que conecta a organização física ao servidor.

Tunnel
Canal seguro de comunicação entre a rede local da organização e a plataforma.

Dispositivo
Equipamento físico integrado à plataforma.

Recurso
Elemento utilizável, como câmera, porta, relatório, boleto, convite, reserva ou ticket.

Permissão
Regra que define o que um usuário pode visualizar ou executar.

26. Frase guia do projeto
       Todo espaço físico pode virar um ambiente inteligente, seguro, conectado e gerenciável
       em tempo real.

27. Frase operacional
       O Master governa. O Parceiro instala. A Organização representa o espaço conectado. O Operador
       administra. A Unidade herda. O Cliente utiliza.

28. Frase técnica
       Tudo é módulo. Todo módulo é independente. Toda integração é plugável. Todo acesso
       depende de contexto. Todo recurso precisa ser herdado.

29. Frase comercial
       Um sistema operacional modular para condomínios, clínicas, empresas, coworkings e
       qualquer espaço físico conectado.

30. Estado atual deste documento
Este documento é a versão atualizada da Bíblia do Projeto, incorporando o nome oficial NoduOS, as fronteiras consolidadas de todos os módulos principais, a Revisão Geral de Consolidação da Arquitetura, o Catálogo de Contratos Públicos, a Matriz Técnica de Permissões por Contrato, a Matriz Técnica de Dados Sensíveis por Contrato, as decisões DEC-046 a DEC-193 e a blindagem de produção entre módulos.

Ele deve ser usado como fonte central de verdade em todos os chats futuros deste projeto.

Sempre que uma nova conversa for iniciada, o assistente deverá respeitar este documento antes de planejar qualquer módulo, regra, tela, fluxo ou arquitetura.

30.1 Atualização consolidada: identidade oficial NoduOS
Esta atualização registra NoduOS como nome oficial do app e do projeto.

A descrição funcional permanece:

  SaaS Modular de Gestão de Espaços e Segurança Unificada.

O conceito técnico permanece:

  Sistema Operacional Modular para Espaços Físicos Conectados.

A identidade visual oficial inicial registra:

     • Conceito: Conexão que impulsiona.
     • Paleta principal: #1F2937, #00A37A e #F1F3F5.
     • Direção de marca: conexão, acesso, automação, inteligência e eficiência.

Decisão aplicada nesta atualização:

     • DEC-154: Nome oficial do projeto e aplicativo como NoduOS.

Regra curta:

  NoduOS é o nome. Building OS é o conceito. SaaS Modular de Gestão de Espaços e Segurança Unificada é a descrição.

31. Atualização consolidada: fronteira de Organizações
Esta atualização consolida a fronteira oficial do módulo Organizações.

Regra central:

  Organizações representa o cadastro operacional e institucional do espaço físico conectado.

Organizações é responsável por:

     • OrganizationRecord
     • OrganizationProfile
     • OrganizationSettings
     • OrganizationStatus
     • OrganizationType
     • OrganizationAddress
     • OrganizationOperationalContact
     • OrganizationModuleAvailability, apenas como read model autorizado
     • Resumos autorizados de estrutura, pessoas, gateway, dispositivos e módulos disponíveis

Organizações não é responsável por:

     • Tenant
     • Context
     • UserAccount
     • AuthorizationDecision
     • Licenças
     • Feature flags
     • Estrutura física interna completa
     • PersonProfile
     • ClientProfile
     • PersonUnitLink
     • Cadastro global de dispositivos
     • Tunnel, rotas, latência ou diagnóstico de gateway
     • Abertura de portas
     • Visualização de câmeras
     • Cobranças
     • Reservas
     • Convites
     • Tickets
     • Alarmes
     • Automações operacionais
     • Notificações multicanal
     • Relatórios avançados de BI

Separação oficial:

     • Core Platform mantém Tenant, Context, UserAccount, permissões, licenças, feature flags, auditoria base, ResourceReference e AuthorizationDecision.
     • Parceiros vende, instala, acompanha e administra organizações dentro do escopo autorizado.
     • Organizações mantém o cadastro operacional e institucional do espaço conectado.
     • Unidades, Blocos, Áreas e Ambientes mantém a estrutura física interna oficial.
     • Pessoas e Clientes mantém pessoas, clientes contextuais e vínculos pessoais.
     • Gateway Local / Mikrotik / Tunnel mantém conectividade local, tunnel, rotas, diagnóstico e logs técnicos.
     • Dispositivos mantém cadastro, saúde, diagnóstico e comunicação técnica dos equipamentos.
     • Módulos comerciais executam suas próprias regras operacionais.

Regra operacional consolidada:

  Core cria contexto e autoriza. Parceiro implanta e administra dentro do escopo. Organizações representa o espaço conectado. Unidades mapeia a estrutura interna. Pessoas se vinculam ao espaço. Gateway conecta o mundo físico. Dispositivos governam equipamentos. Módulos comerciais executam recursos. Herança governa políticas. Auditoria registra.

32. Decisões aplicadas nesta atualização
Esta versão incorpora as decisões aprovadas no módulo Organizações:

     • DEC-046: Organização como cadastro operacional do espaço físico conectado.
     • DEC-047: OrganizationModuleAvailability como read model autorizado.
     • DEC-048: Organização não executa regra operacional de módulos comerciais.

Essas decisões devem ser lidas junto com:

     • DEC-037: Core Platform como autoridade estrutural de autorização.
     • DEC-038: Herança e Permissões como camada avançada de governança e políticas.
     • DEC-039: Separação entre UserAccount, PersonProfile e ClientProfile.
     • DEC-042: Separação entre estrutura física e vínculo pessoal.
     • DEC-043: ResourceReference estrutural sem transferência de domínio ao Core.
     • DEC-044: Estrutura física como alvo de herança, não como motor de permissão.
     • DEC-045: Associação física não transfere posse operacional do recurso.

# 33. Atualização consolidada: fronteira de Parceiros
Esta atualização consolida a fronteira oficial aprovada do módulo Parceiros.

Regra central:

  Parceiros representa o domínio operacional autorizado do parceiro.

O parceiro pode ser integrador de segurança eletrônica, empresa de tecnologia, administradora, franquia, revenda, operador regional, grupo empresarial, empresa de facilities ou equipe técnica autorizada pelo Master.

Parceiros é responsável por:

     • PartnerRecord
     • PartnerProfile
     • PartnerStatus
     • PartnerType
     • PartnerLifecycle
     • PartnerScope
     • PartnerOperationalContact
     • PartnerCommercialContact
     • PartnerTechnicalContact
     • PartnerTeamReference
     • PartnerOrganizationPortfolio
     • PartnerDeploymentOverview
     • PartnerGatewayOperationRequest
     • PartnerDeviceOperationRequest
     • PartnerModuleAvailability, apenas como read model autorizado
     • PartnerPlanView, apenas como read model autorizado
     • PartnerLicenseView, apenas como read model autorizado
     • PartnerWhiteLabelPermission, apenas como read model autorizado
     • PartnerCommercialPolicy, limitada ao escopo autorizado
     • PartnerSupportOverview, apenas como resumo autorizado
     • PartnerRevenueSummary, se habilitado e autorizado

Parceiros pode:

     • Vender e administrar organizações abaixo dele dentro do escopo autorizado.
     • Criar organizações por fluxo autorizado.
     • Conduzir implantação física.
     • Instalar e cadastrar gateway por fluxo autorizado do módulo Gateway Local / Mikrotik / Tunnel.
     • Instalar e cadastrar dispositivos por fluxo autorizado do módulo Dispositivos.
     • Associar dispositivos à organização, gateway e estrutura física por referência autorizada.
     • Solicitar criação ou vínculo de operadores/gestores por fluxo autorizado do Core Platform.
     • Acompanhar saúde geral, implantação, módulos disponíveis, suporte e operação.
     • Visualizar planos, licenças, módulos, receita e white-label apenas quando autorizado.
     • Aplicar white-label quando permitido pelo Master, plano, licença e Core Platform.

Parceiros não é responsável por:

     • Tenant
     • Context
     • UserAccount
     • AuthCredential
     • UserSession
     • Role
     • Permission
     • PermissionGrant
     • InheritanceGrant
     • ResourceReference
     • AuthorizationDecision
     • ModuleRegistry
     • Plan oficial
     • License oficial
     • Entitlement oficial
     • FeatureFlag oficial
     • OrganizationRecord
     • OrganizationProfile
     • GatewayRecord
     • Tunnel
     • Rotas
     • Latência
     • Diagnóstico técnico oficial de gateway
     • DeviceRecord como domínio técnico próprio
     • Saúde técnica oficial de dispositivos
     • Última comunicação oficial de dispositivos
     • Motor de white-label
     • Motor financeiro
     • Motor de suporte
     • Regra operacional de Controle de Acesso
     • Regra operacional de Câmeras / VMS
     • Regra operacional de Alarmes
     • Regra operacional de Reservas
     • Regra operacional de Convites e Visitantes
     • Regra operacional de Tickets
     • Regra operacional de Notificações
     • Regra operacional de Automações
     • Relatórios avançados de BI acessando bancos internos

Separação oficial:

     • Master governa o limite superior, cria parceiros, libera planos, define módulos globais, licenças superiores, marketplace, integrações globais e política superior da plataforma.
     • Core Platform mantém Tenant, Context, UserAccount, permissões, licenças, feature flags, auditoria base, ResourceReference e AuthorizationDecision.
     • Parceiros mantém o domínio operacional autorizado do parceiro.
     • Organizações mantém o cadastro operacional e institucional do espaço físico conectado.
     • Gateway Local / Mikrotik / Tunnel mantém GatewayRecord, tunnel, rotas, conectividade, latência, diagnóstico e logs técnicos.
     • Dispositivos mantém DeviceRecord, cadastro técnico, saúde, diagnóstico, última comunicação e ciclo de vida dos equipamentos.
     • White-label mantém tema, logo, cores, domínio, favicon, templates e experiência customizada.
     • Financeiro mantém cobranças, faturas, pagamentos, repasses, comissões, split e inadimplência.
     • Suporte e Operação mantém incidentes, chamados, base de conhecimento, escalonamento, histórico e diagnóstico de atendimento.
     • Módulos comerciais executam suas próprias regras operacionais.

Regra operacional consolidada:

  Master governa o limite. Core valida contexto, licença e autorização. Parceiro vende, implanta, cadastra gateways e dispositivos por fluxos autorizados, administra e acompanha organizações abaixo dele. Organizações registra o espaço conectado. Gateway governa conectividade. Dispositivos governam equipamentos. White-label personaliza. Financeiro cobra. Suporte atende. Módulos comerciais executam recursos. Auditoria registra.

Frase curta:

  Parceiro instala e cadastra. Módulo dono governa. Core autoriza.

# 34. Decisões aplicadas nesta atualização
Esta versão incorpora as decisões aprovadas na fronteira do módulo Parceiros:

     • DEC-049: Parceiro como domínio operacional autorizado.
     • DEC-050: Visões autorizadas de plano, licença, módulos e white-label em Parceiros.
     • DEC-051: Parceiros cadastra dispositivos por fluxo autorizado do módulo Dispositivos.
     • DEC-052: Parceiros cadastra gateway por fluxo autorizado do módulo Gateway.
     • DEC-053: Parceiros não executa regra operacional de módulos comerciais.

Essas decisões devem ser lidas junto com:

     • DEC-012: Parceiro instala o mundo físico.
     • DEC-037: Core Platform como autoridade estrutural de autorização.
     • DEC-038: Herança e Permissões como camada avançada de governança e políticas.
     • DEC-046: Organização como cadastro operacional do espaço físico conectado.
     • DEC-047: OrganizationModuleAvailability como read model autorizado.
     • DEC-048: Organização não executa regra operacional de módulos comerciais.

# 35. Atualização consolidada: Gateway Local / Mikrotik / Tunnel
Esta atualização consolida a fronteira oficial do módulo Gateway Local / Mikrotik / Tunnel.

Regra central:

  Gateway Local / Mikrotik / Tunnel representa o domínio técnico de conectividade local entre a plataforma em nuvem e a rede física da organização.

Gateway é parte essencial do Building OS porque conecta o software ao mundo físico. Ele cria e mantém comunicação segura entre a nuvem e a rede local das organizações, permitindo que dispositivos, controladoras, câmeras, alarmes e sistemas locais sejam alcançados por contratos autorizados.

Gateway é responsável por:

     • GatewayRecord
     • GatewayAgent
     • GatewayInstallation
     • GatewayCredential
     • GatewaySecret
     • TunnelSession
     • TunnelEndpoint
     • TunnelStatus
     • LocalNetwork
     • LocalRoute
     • RemoteRoute
     • NatRuleReference
     • FirewallRuleReference
     • VpnProfileReference
     • GatewayHealth
     • GatewayDiagnostic
     • GatewayCommand
     • GatewayCommandResult
     • GatewayLog
     • GatewayEventBuffer
     • GatewaySyncState
     • GatewayConnectivityState
     • GatewayDeviceDiscovery
     • GatewayDeviceReachability
     • GatewayOrganizationLink
     • GatewayPartnerLink
     • GatewayResourceReference
     • GatewayAuthorizationScope

Gateway pode:

     • Criar e manter tunnel seguro.
     • Viabilizar rotas autorizadas.
     • Medir conectividade, latência e reachability.
     • Executar diagnóstico remoto autorizado.
     • Executar comando técnico autorizado.
     • Publicar eventos técnicos.
     • Sincronizar eventos locais.
     • Descobrir equipamentos de forma técnica e temporária.
     • Proteger credenciais, segredos, chaves, IPs internos e rotas privadas.

Gateway não é responsável por:

     • Tenant
     • Context
     • UserAccount
     • AuthorizationDecision
     • Licenças
     • Feature flags
     • PartnerRecord
     • OrganizationRecord
     • OrganizationProfile
     • DeviceRecord oficial
     • Regra operacional de Controle de Acesso
     • Abertura de portas por decisão própria
     • Live view, mosaico, playback, clipes ou evidências de vídeo
     • Arme, desarme, pânico, disparo ou escalonamento de alarme
     • Workflows, gatilhos, condições ou ações de automação
     • Cobranças
     • Reservas
     • Convites
     • Tickets
     • Notificações multicanal como domínio próprio
     • Auditoria avançada de compliance como domínio próprio

Separação oficial:

     • Core Platform mantém Tenant, Context, UserAccount, permissões, licenças, feature flags, auditoria base, ResourceReference e AuthorizationDecision.
     • Parceiros instala e cadastra gateway por fluxo autorizado.
     • Organizações referencia gateway e exibe resumo autorizado.
     • Gateway Local / Mikrotik / Tunnel governa conectividade, tunnel, rotas, latência, diagnóstico, logs técnicos e comunicação local.
     • Dispositivos mantém DeviceRecord, cadastro técnico, saúde, diagnóstico, última comunicação e ciclo de vida dos equipamentos.
     • Controle de Acesso executa regra operacional de portas, portões, catracas e credenciais.
     • Câmeras / VMS executa live view, stream, mosaico, playback, clipes e evidências.
     • Alarmes executa regra operacional de arme, desarme, setores, sensores, disparos e escalonamento.
     • Automações executa workflows, gatilhos, condições e ações.
     • Módulos comerciais executam suas próprias regras operacionais.

Regra operacional consolidada:

  Gateway conecta o mundo físico. Core autoriza. Parceiro instala. Organização representa o espaço. Dispositivos governam equipamentos. Módulos comerciais executam recursos. Auditoria registra.

Frase curta:

  Core autoriza. Gateway conecta. Módulo dono executa. Auditoria registra.

# 36. Decisões aplicadas nesta atualização
Esta versão incorpora as decisões aprovadas no módulo Gateway Local / Mikrotik / Tunnel:

     • DEC-054: Gateway Local / Mikrotik / Tunnel como domínio técnico de conectividade local.
     • DEC-055: Gateway não executa regra operacional de módulos comerciais.
     • DEC-056: GatewayAuthorizationScope obrigatório para ações técnicas sensíveis.
     • DEC-057: GatewayDeviceDiscovery não é DeviceRecord.

Essas decisões devem ser lidas junto com:

     • DEC-011: Gateway Local / Mikrotik / Tunnel como parte essencial.
     • DEC-012: Parceiro instala o mundo físico.
     • DEC-026: Dispositivos como domínio independente.
     • DEC-037: Core Platform como autoridade estrutural de autorização.
     • DEC-046: Organização como cadastro operacional do espaço físico conectado.
     • DEC-049: Parceiro como domínio operacional autorizado.
     • DEC-051: Parceiros cadastra dispositivos por fluxo autorizado do módulo Dispositivos.
     • DEC-052: Parceiros cadastra gateway por fluxo autorizado do módulo Gateway.
     • DEC-053: Parceiros não executa regra operacional de módulos comerciais.

# 38. Atualização consolidada: fronteira de Dispositivos
Esta atualização consolida a fronteira oficial do módulo Dispositivos.

Regra central:

  Dispositivos representa o domínio técnico oficial dos equipamentos físicos integrados à plataforma.

Dispositivos é responsável por:

     • DeviceRecord
     • DeviceReference
     • DeviceIdentity
     • DeviceType
     • DeviceCategory
     • DeviceBrand
     • DeviceModel
     • DeviceSerial
     • DeviceFirmware
     • DeviceProtocolProfile
     • DeviceConnectivityProfile
     • DeviceCredential
     • DeviceSecret
     • DeviceHealth
     • DeviceStatus
     • DeviceDiagnostic
     • DeviceLifecycle
     • DeviceCapability
     • DeviceGatewayLink
     • DeviceOrganizationLink
     • DeviceStructureLocationReference
     • DeviceTechnicalLog
     • DeviceAlert
     • DeviceMaintenanceRecord
     • DeviceReplacementRecord
     • DeviceIntegrationAdapterReference
     • DeviceCommandRequest, apenas para comando técnico
     • DeviceCommandResult
     • DeviceTelemetry
     • DeviceReachability
     • DeviceDiscoveryCandidate
     • DeviceAuthorizationScope

Dispositivos não é responsável por:

     • Tenant
     • Context
     • UserAccount
     • AuthorizationDecision
     • Licenças
     • Feature flags
     • PartnerRecord
     • OrganizationRecord
     • OrganizationProfile
     • GatewayRecord
     • Tunnel
     • Rotas
     • VPN
     • NAT
     • Firewall
     • Porta operacional
     • Portão operacional
     • Catraca operacional
     • QR Code de acesso
     • Facial operacional
     • RFID operacional
     • Live view
     • Stream
     • Playback
     • Mosaico
     • Clipes
     • Evidências
     • Arme
     • Desarme
     • Disparo operacional
     • Zona operacional de alarme
     • Workflow de automação
     • Regra comercial de módulos

Separação oficial:

     • Core Platform mantém Tenant, Context, UserAccount, permissões, licenças, feature flags, auditoria base, ResourceReference e AuthorizationDecision.
     • Parceiros instala e cadastra dispositivos por fluxo autorizado.
     • Organizações referencia dispositivos e exibe resumo autorizado.
     • Gateway Local / Mikrotik / Tunnel conecta, descobre e mede reachability técnico.
     • Dispositivos governa DeviceRecord, DeviceReference, saúde, status, diagnóstico, última comunicação e ciclo de vida técnico.
     • Controle de Acesso governa portas, portões, catracas, credenciais e aberturas.
     • Câmeras / VMS governa live view, stream, mosaico, playback, clipes e evidências.
     • Alarmes governa arme, desarme, setores, zonas, sensores operacionais, disparos e escalonamento.
     • Automações governa workflows, gatilhos, condições e ações.
     • Segurança e LGPD protege dados técnicos sensíveis.
     • Auditoria e Compliance consulta, investiga, correlaciona e exporta trilhas por contrato autorizado.

Regra operacional consolidada:

  Core autoriza. Parceiro instala e cadastra por fluxo autorizado. Organização referencia. Gateway conecta e descobre. Dispositivos governa equipamentos. Módulos comerciais executam recursos. Segurança protege. Auditoria registra.

# 39. Decisões aplicadas nesta atualização
Esta versão incorpora as decisões aprovadas no módulo Dispositivos:

     • DEC-058: Dispositivos como domínio técnico oficial dos equipamentos físicos.
     • DEC-059: DeviceAuthorizationScope obrigatório para ações técnicas sensíveis.
     • DEC-060: Descoberta técnica não é cadastro oficial de dispositivo.
     • DEC-061: Dispositivos não executa regra operacional de módulos comerciais.

Essas decisões devem ser lidas junto com:

     • DEC-010: Hardware agnóstico e multimarcas.
     • DEC-011: Gateway Local / Mikrotik / Tunnel como parte essencial.
     • DEC-012: Parceiro instala o mundo físico.
     • DEC-026: Dispositivos como domínio independente.
     • DEC-037: Core Platform como autoridade estrutural de autorização.
     • DEC-052: Parceiros cadastra gateway por fluxo autorizado do módulo Gateway.
     • DEC-054: Gateway Local / Mikrotik / Tunnel como domínio técnico de conectividade local.
     • DEC-057: GatewayDeviceDiscovery não é DeviceRecord.

# 40. Atualização consolidada: Controle de Acesso
Esta atualização consolida a fronteira oficial e o planejamento final do módulo Controle de Acesso.

Regra central:

  Controle de Acesso representa o domínio operacional de acesso físico da plataforma.

Controle de Acesso governa:

     • AccessPoint
     • Door
     • Gate
     • Turnstile
     • AccessZone
     • AccessCredential
     • PhysicalAccessCredential
     • TemporaryAccessCredential
     • FaceCredential
     • RfidCredential
     • PinCredential
     • QrCredential
     • AccessRule
     • AccessPolicyBinding
     • AccessSchedule
     • AccessWindow
     • AccessPass
     • AccessAttempt
     • AccessEvent
     • AccessGrant
     • AccessDeny
     • AccessBlock
     • AccessUnblock
     • AccessRestriction
     • RemoteUnlock
     • DoorForcedEvent
     • DoorHeldOpenEvent
     • AntipassbackState
     • AccessExecutionRequest
     • AccessExecutionResult
     • AccessAuthorizationScope
     • AccessDeviceBinding
     • AccessDeviceCapabilityRequirement
     • AccessSyncState
     • AccessOfflinePolicy
     • AccessAuditTrail operacional

Controle de Acesso não governa:

     • Tenant
     • Context
     • UserAccount
     • PersonProfile
     • ClientProfile
     • PersonUnitLink
     • VisitorInvite
     • Reservation
     • DeviceRecord
     • GatewayRecord
     • CameraEvidence
     • AlarmEvent
     • Invoice
     • Estrutura física oficial
     • Organização
     • Parceiro
     • Autorização estrutural final
     • Política avançada de herança
     • LGPD avançada
     • Auditoria avançada de compliance

Separação oficial:

     • Core Platform mantém identidade técnica, contexto, licença, permissão estrutural, ResourceReference, AuthorizationDecision, auditoria base e event bus.
     • Herança e Permissões governa políticas avançadas que influenciam o acesso.
     • Pessoas e Clientes identifica pessoas, clientes, vínculos e consentimentos.
     • Convites e Visitantes governa visita, visitante, aprovação, janela, check-in e check-out.
     • Reservas governa agenda, disponibilidade, reserva, cancelamento, check-in, no-show e janela de acesso reservada.
     • Financeiro informa status financeiro por eventos ou read models autorizados, sem bloquear portas diretamente.
     • Unidades, Blocos, Áreas e Ambientes localiza o ponto de acesso por referência estrutural.
     • Dispositivos representa equipamentos como leitores, controladoras, relés, sensores, fechaduras e catracas.
     • Gateway Local / Mikrotik / Tunnel transporta comandos técnicos autorizados.
     • Câmeras / VMS cria clipes e evidências a partir de eventos de acesso quando autorizado.
     • Alarmes executa regra operacional de alarme a partir de violações quando autorizado.
     • Segurança e LGPD governa políticas avançadas de dados sensíveis, biometria, retenção e exportação.
     • Auditoria e Compliance investiga, correlaciona e exporta trilhas por contratos autorizados.

Regra operacional consolidada:

  Core autoriza. Herança governa política. Pessoas identifica. Convites temporizam visitas. Reservas temporizam recursos. Financeiro informa status. Unidades localiza. Dispositivos representam equipamentos. Gateway transporta. Controle de Acesso executa a passagem física. Auditoria registra.

# 41. Decisões aplicadas nesta atualização
Esta versão incorpora as decisões aprovadas no módulo Controle de Acesso:

     • DEC-062: Controle de Acesso como domínio operacional de acesso físico.
     • DEC-063: AccessPoint não é DeviceRecord nem StructureReference.
     • DEC-064: AccessCredential como credencial física operacional.
     • DEC-065: AccessAuthorizationScope obrigatório para ações sensíveis de acesso.
     • DEC-066: AccessOfflinePolicy obrigatório para modo offline.
     • DEC-067: Eventos de acesso podem gerar evidência, mas evidência pertence ao VMS.

Essas decisões devem ser lidas junto com:

     • DEC-004: Regra oficial de herança.
     • DEC-005: Login individual por pessoa.
     • DEC-020: LGPD e proteção de dados sensíveis.
     • DEC-024: Controle de acesso por regras.
     • DEC-025: Financeiro não executa bloqueio diretamente.
     • DEC-026: Dispositivos como domínio independente.
     • DEC-037: Core Platform como autoridade estrutural de autorização.
     • DEC-038: Herança e Permissões como camada avançada de governança e políticas.
     • DEC-039: Separação entre UserAccount, PersonProfile e ClientProfile.
     • DEC-041: Separação entre consentimento biométrico e credencial física biométrica.
     • DEC-042: Separação entre estrutura física e vínculo pessoal.
     • DEC-045: Associação física não transfere posse operacional do recurso.
     • DEC-057: GatewayDeviceDiscovery não é DeviceRecord.
     • DEC-061: Dispositivos não executa regra operacional de módulos comerciais.

# 42. Próximo foco recomendado
Após Controle de Acesso, o próximo módulo recomendado é Câmeras / VMS, porque eventos de acesso podem gerar correlação visual, clipes e evidências, mas o domínio de vídeo pertence ao módulo Câmeras / VMS.

# 43. Frase final atualizada de governança
O chat conversa. O documento manda. Cada módulo protege sua fronteira para que a plataforma evolua sem cair no lado sombrio do acoplamento invisível.

# 37. Atualização consolidada: fronteira de Câmeras / VMS
Esta atualização consolida a fronteira oficial aprovada do módulo Câmeras / VMS.

Regra central:

  Câmeras / VMS governa vídeo. Dispositivos governam equipamentos. Gateway conecta. Core autoriza. Herança governa políticas. Segurança e LGPD protege. Auditoria registra.

Câmeras / VMS representa o domínio operacional de vídeo da plataforma.

Câmeras / VMS é responsável por:

     • CameraResource
     • CameraChannel
     • CameraStream
     • CameraLiveView
     • CameraViewSession
     • CameraMosaic
     • CameraLayout
     • CameraPlayback
     • CameraTimeline
     • CameraClip
     • CameraSnapshot
     • CameraEvidence
     • VideoEvidenceRequest
     • EventVideoCorrelation
     • CameraRecordingPolicy
     • CameraRetentionExecutionPolicy
     • CameraPermissionScope
     • CameraAuthorizationScope
     • VideoViewExecutionResult
     • VideoExportRequest
     • VideoExportPackage
     • VideoShareLink
     • VideoWatermark
     • VideoMaskingRequest
     • VideoPrivacyZone
     • CameraDeviceBinding
     • CameraCoverageArea
     • CameraAreaReference
     • CameraGatewayRouteReference
     • CameraStreamProxySession
     • CameraAuditTrail

Câmeras / VMS não é responsável por:

     • Tenant
     • Context
     • UserAccount
     • AuthorizationDecision
     • License
     • FeatureFlag
     • PersonProfile
     • ClientProfile
     • Unit, Block, Area ou Environment
     • OrganizationRecord
     • PartnerRecord
     • DeviceRecord
     • DeviceHealth oficial
     • DeviceDiagnostic oficial
     • GatewayRecord
     • TunnelSession
     • Rotas técnicas
     • AccessEvent
     • AlarmEvent
     • VisitorInvite
     • Reservation
     • Invoice
     • Notificações multicanal
     • Política avançada de LGPD como fonte primária
     • Auditoria avançada de compliance

Separação oficial:

     • Dispositivos mantém o cadastro técnico de câmera, DVR, NVR, encoder, video porteiro ou stream box.
     • Câmeras / VMS transforma DeviceReference autorizado em recurso operacional de vídeo.
     • Gateway Local / Mikrotik / Tunnel viabiliza rota, tunnel ou proxy técnico quando necessário, mas não governa live view, playback, mosaico, clipe ou evidência.
     • Controle de Acesso publica AccessEvent; Câmeras / VMS pode criar evidência de vídeo associada por contrato autorizado.
     • Alarmes publica AlarmEvent; Câmeras / VMS pode criar evidência ou verificação visual associada por contrato autorizado.
     • Segurança e LGPD governa políticas avançadas de imagem, retenção, mascaramento, exportação e compartilhamento.
     • Auditoria e Compliance investiga, correlaciona e exporta trilhas avançadas por contrato autorizado.

Regra operacional consolidada:

  Câmeras / VMS governa vídeo. Dispositivos governam equipamentos. Gateway conecta. Core autoriza. Herança governa políticas. Segurança e LGPD protege. Auditoria registra.

# 38. Decisões aplicadas nesta atualização
Esta versão incorpora as decisões aprovadas no módulo Câmeras / VMS:

     • DEC-068: Câmeras / VMS como domínio operacional de vídeo.
     • DEC-069: CameraResource não é DeviceRecord.
     • DEC-070: Toda ação sensível de vídeo exige AuthorizationDecision do Core.
     • DEC-071: Gateway transporta vídeo, mas não é VMS.
     • DEC-072: Eventos externos podem gerar evidência de vídeo sem transferir domínio.
     • DEC-073: Exportação e compartilhamento de vídeo exigem finalidade, proteção e auditoria.

Após Câmeras / VMS, o próximo módulo recomendado é Alarmes, porque eventos como AlarmTriggered, PanicTriggered, ZoneViolated, AlarmEscalated e AlarmResolved podem gerar evidências de vídeo, mas o domínio de arme, desarme, setores, sensores, disparos, pânico, escalonamento e histórico operacional pertence ao módulo Alarmes.

# 44. Atualização consolidada: módulo Alarmes
Esta atualização consolida o módulo Alarmes como domínio operacional de alarme, segurança perimetral, resposta a eventos críticos e histórico operacional.

Regra central:

  Alarmes governa a operação de alarme. Dispositivos governam equipamentos. Gateway conecta. Core autoriza. Herança governa políticas. Câmeras / VMS gera evidência. Notificações comunica. Auditoria registra.

Alarmes é responsável por:

     • AlarmResource
     • AlarmPanelResource
     • AlarmPanelBinding
     • AlarmSector
     • AlarmZone
     • AlarmArea
     • AlarmSensorBinding
     • AlarmSensorState
     • AlarmArmingState
     • AlarmMode
     • AlarmRule
     • AlarmPolicyBinding
     • AlarmSchedule
     • AlarmWindow
     • AlarmEvent
     • AlarmTrigger
     • AlarmPanicEvent
     • AlarmTamperEvent
     • AlarmFaultEvent
     • AlarmAcknowledgement
     • AlarmSilenceAction
     • AlarmResetAction
     • AlarmEscalation
     • AlarmEscalationLevel
     • AlarmEscalationTargetReference
     • AlarmIncident
     • AlarmResponsePlan
     • AlarmHistory
     • AlarmCommandRequest
     • AlarmExecutionResult
     • AlarmAuthorizationScope
     • AlarmOfflinePolicy
     • AlarmDeviceBinding
     • AlarmSyncState
     • AlarmSignalTransportReference
     • AlarmNotificationRequest
     • AlarmTicketRequest
     • AlarmVideoEvidenceRequest

Alarmes não é responsável por:

     • Tenant
     • Context
     • UserAccount
     • AuthorizationDecision
     • License
     • FeatureFlag
     • PersonProfile
     • ClientProfile
     • Unit, Block, Area ou Environment
     • OrganizationRecord
     • PartnerRecord
     • DeviceRecord
     • DeviceHealth oficial
     • DeviceDiagnostic oficial
     • GatewayRecord
     • TunnelSession
     • Rotas técnicas
     • AccessEvent
     • CameraEvidence
     • VideoEvidenceRequest como domínio de vídeo
     • VisitorInvite
     • Reservation
     • Invoice
     • SupportTicket como central completa de atendimento
     • Templates, preferências e envio multicanal de Notificações
     • Workflows genéricos de Automações
     • Política avançada de LGPD como fonte primária
     • Auditoria avançada de compliance

Separação oficial:

     • Dispositivos mantém o cadastro técnico de centrais, sensores, sirenes, teclados, botões de pânico, comunicadores e módulos PGM.
     • Alarmes transforma DeviceReference autorizado em recurso operacional de alarme.
     • Gateway Local / Mikrotik / Tunnel transporta sinais e comandos técnicos autorizados, mas não arma, desarma, silencia, reconhece ou escala alarmes.
     • Controle de Acesso publica eventos como DoorForced, DoorHeldOpen e AccessDenied; Alarmes pode reagir por contrato autorizado.
     • Câmeras / VMS cria evidências de vídeo associadas a eventos de alarme, quando autorizado.
     • Notificações entrega comunicação multicanal solicitada por eventos de alarme.
     • Tickets gerencia atendimento/SLA quando Alarmes solicita abertura de chamado.
     • Automações consome eventos e solicita ações por contrato, sem substituir Alarmes.
     • Segurança e LGPD governa proteção de pânico, histórico, áreas sensíveis e dados pessoais envolvidos.
     • Auditoria e Compliance investiga, correlaciona e exporta trilhas avançadas por contrato autorizado.

Regra operacional consolidada:

  Alarmes governa a operação de alarme. Dispositivos governam equipamentos. Gateway conecta. Core autoriza. Herança governa políticas. Câmeras / VMS gera evidência. Notificações comunica. Auditoria registra.

# 45. Decisões aplicadas nesta atualização
Esta versão incorpora as decisões aprovadas no módulo Alarmes:

     • DEC-074: Alarmes como domínio operacional de alarme.
     • DEC-075: AlarmResource não é DeviceRecord.
     • DEC-076: Toda ação sensível de alarme exige AuthorizationDecision do Core.
     • DEC-077: Gateway transporta sinal e comando de alarme, mas não é Alarmes.
     • DEC-078: Eventos de acesso e vídeo podem se correlacionar com Alarmes sem transferir domínio.
     • DEC-079: AlarmOfflinePolicy obrigatório para operação offline de alarme.
     • DEC-080: Histórico de pânico e eventos críticos exige proteção reforçada.

Essas decisões devem ser lidas junto com:

     • DEC-004: Regra oficial de herança.
     • DEC-008: Comunicação entre módulos por contratos.
     • DEC-019: Auditoria obrigatória.
     • DEC-020: LGPD e proteção de dados sensíveis.
     • DEC-026: Dispositivos como domínio independente.
     • DEC-037: Core Platform como autoridade estrutural de autorização.
     • DEC-038: Herança e Permissões como camada avançada de governança e políticas.
     • DEC-045: Associação física não transfere posse operacional do recurso.
     • DEC-057: GatewayDeviceDiscovery não é DeviceRecord.
     • DEC-061: Dispositivos não executa regra operacional de módulos comerciais.
     • DEC-067: Eventos de acesso podem gerar evidência, mas evidência pertence ao VMS.
     • DEC-073: Exportação e compartilhamento de vídeo exigem finalidade, proteção e auditoria.

# 46. Atualização consolidada: fronteira de Financeiro
Esta atualização consolida a fronteira oficial aprovada do módulo Financeiro.

Regra central:

  Financeiro cobra e informa. Herança avalia. Core decide. Módulo dono executa. Auditoria registra.

Financeiro é responsável por:

     • BillingAccount
     • BillingCustomer
     • PayerReference
     • FiscalProfile
     • PaymentResponsibility
     • FinancialContract
     • Subscription
     • RecurringCharge
     • OneTimeCharge
     • ChargeItem
     • ChargeAllocation
     • CostCenter
     • CostShareRule
     • Invoice
     • InvoiceItem
     • Payment
     • PaymentMethod
     • PaymentAttempt
     • PixPayment
     • BoletoPayment
     • CardPayment
     • PaymentGatewayReference
     • PaymentReconciliation
     • PaymentReceipt
     • Refund
     • Chargeback
     • CreditNote
     • DebitNote
     • Discount
     • Interest
     • Fine
     • Tax
     • TaxDocumentReference
     • DelinquencyRecord
     • FinancialRestrictionSuggestion
     • FinancialRestrictionRevocation
     • PartnerCommission
     • PartnerSettlement
     • PartnerPayout
     • PartnerRevenueShare
     • SplitRule
     • FinancialStatement
     • CashFlowView
     • RevenueReport
     • ConsumptionRecord
     • ConsumptionCharge
     • ReservationCharge
     • TicketCharge
     • VisitorCharge
     • AccessCharge
     • CameraCharge
     • AlarmCharge
     • BillingNotificationRequest
     • FinancialAuditTrail

Financeiro não é responsável por:

     • Tenant
     • Context
     • UserAccount
     • AuthorizationDecision
     • Plan, License, FeatureFlag, ModuleRegistry ou Entitlement como fonte oficial
     • PartnerRecord ou PartnerProfile
     • OrganizationRecord ou OrganizationProfile
     • PersonProfile, ClientProfile ou PersonUnitLink
     • Unit, Block, Area ou Environment
     • Motor de Herança e Permissões
     • Bloqueio operacional direto
     • Abertura de porta ou revogação de credencial
     • Bloqueio direto de câmera
     • Arme, desarme, silenciamento ou bloqueio direto de alarme
     • Agenda, disponibilidade, check-in ou no-show de reserva
     • Convite, visitante, QR temporário, check-in ou check-out
     • Central completa de tickets e SLA
     • Envio multicanal de Notificações como domínio próprio
     • Auditoria avançada de compliance
     • Política avançada de Segurança e LGPD como domínio próprio

Separação oficial:

     • Core Platform mantém Tenant, Context, UserAccount, AuthorizationDecision, Plan, License, FeatureFlag, ModuleRegistry e Entitlement.
     • Master governa limite superior, planos comerciais globais, módulos e políticas superiores.
     • Financeiro mantém contratos financeiros, cobranças, faturas, pagamentos, inadimplência, conciliação, repasses, comissões e split.
     • Parceiros pode visualizar receita, comissão, repasse e inadimplência por read models autorizados, sem virar Financeiro.
     • Organizações pode exibir resumo financeiro autorizado, sem emitir fatura ou conciliar pagamento.
     • Pessoas e Clientes mantém PersonProfile e ClientProfile; Financeiro mantém BillingCustomer e PayerReference.
     • Unidades mapeia estrutura física; Financeiro usa StructureReference para rateio e cobrança.
     • Reservas, Tickets, Convites, Controle de Acesso, Câmeras / VMS e Alarmes solicitam cobranças por contratos, mas não viram Financeiro.
     • Notificações envia cobranças e recibos por contrato, mas Financeiro não vira motor multicanal.
     • Relatórios / BI consome read models autorizados, sem acessar banco interno do Financeiro.
     • Segurança e LGPD governa proteção de dados financeiros sensíveis.
     • Auditoria e Compliance investiga, correlaciona e exporta trilhas avançadas por contrato autorizado.

Regra operacional consolidada:

  Financeiro cobra e informa. Herança avalia. Core decide. Módulo dono executa. Auditoria registra.

# 47. Decisões aplicadas nesta atualização
Esta versão incorpora as decisões aprovadas no módulo Financeiro:

     • DEC-081: Financeiro como domínio financeiro oficial.
     • DEC-082: Separação entre plano estrutural e contrato financeiro.
     • DEC-083: Eventos financeiros não executam bloqueio operacional.
     • DEC-084: Dados financeiros sensíveis com proteção reforçada.
     • DEC-085: Financeiro com adaptadores plugáveis.

Essas decisões devem ser lidas junto com:

     • DEC-004: Regra oficial de herança.
     • DEC-008: Comunicação entre módulos por contratos.
     • DEC-019: Auditoria obrigatória.
     • DEC-020: LGPD e proteção de dados sensíveis.
     • DEC-025: Financeiro não executa bloqueio diretamente.
     • DEC-037: Core Platform como autoridade estrutural de autorização.
     • DEC-038: Herança e Permissões como camada avançada de governança e políticas.
     • DEC-048: Organização não executa regra operacional de módulos comerciais.
     • DEC-053: Parceiros não executa regra operacional de módulos comerciais.
     • DEC-067: Eventos de acesso podem gerar evidência, mas evidência pertence ao VMS.
     • DEC-080: Histórico de pânico e eventos críticos exige proteção reforçada.

# 48. Próximo foco recomendado
Após Financeiro, o próximo módulo recomendado é Convites e Visitantes, porque visitantes, QR temporário, check-in, check-out, delivery e acompanhantes podem gerar cobranças, acessos temporários, notificações e evidências sem transferir domínio entre módulos.

Frase guia:

  Convites temporizam visitas. Pessoas identifica. Controle de Acesso executa passagem física. Financeiro cobra quando autorizado. Auditoria registra.

# 49. Atualização consolidada: fronteira de Convites e Visitantes
Esta atualização consolida a fronteira oficial aprovada do módulo Convites e Visitantes.

Regra central:

  Convites organiza a visita. Core autoriza. Herança governa políticas. Controle de Acesso executa passagem física. Auditoria registra.

Convites e Visitantes é responsável por:

     • VisitorInvite
     • TemporaryVisitor
     • VisitorProfile, apenas como perfil temporário operacional
     • VisitorIdentitySnapshot
     • VisitorDocumentSnapshot
     • VisitorPhotoSnapshot
     • VisitorVehicleSnapshot
     • VisitorContactSnapshot
     • VisitorConsentSnapshot
     • VisitorHostReference
     • VisitorUnitReference
     • VisitDestinationReference
     • VisitAuthorization
     • VisitWindow
     • VisitPurpose
     • VisitType
     • VisitorApproval
     • VisitorDenial
     • VisitorCheckIn
     • VisitorCheckOut
     • VisitorVisitSession
     • VisitorExpectedArrival
     • VisitorOverstay
     • VisitorBan
     • VisitorWatchlistReference
     • TemporaryVisitPass, como passe lógico de visita
     • VisitorQrRequest
     • VisitorAccessRequest
     • VisitorAccessArea
     • VisitorAllowedArea
     • VisitorCompanion
     • DeliveryVisit
     • ServiceProviderTemporaryVisit
     • RecurringOperationalInvite
     • EventGuestList
     • ReservationGuestList, como lista de convidados
     • VisitorChargeRequest
     • VisitorPenaltyRequest
     • VisitorNotificationRequest
     • VisitorTicketRequest
     • VisitorVideoEvidenceRequest
     • VisitorAlarmContextEvent
     • VisitorAuditTrail

Convites e Visitantes não é responsável por:

     • Tenant
     • Context
     • UserAccount
     • AuthorizationDecision
     • PersonProfile, ClientProfile ou PersonUnitLink
     • Cadastro permanente de pessoas, dependentes ou prestadores recorrentes
     • Unit, Block, Area ou Environment
     • OrganizationRecord ou PartnerRecord
     • Gateway, tunnel, rota ou diagnóstico técnico
     • DeviceRecord
     • AccessCredential, TemporaryAccessCredential, QrCredential ou AccessEvent
     • Abertura direta de porta, portão ou catraca
     • Live view, playback, snapshot, clipe ou evidência de vídeo
     • Arme, desarme, disparo, pânico ou escalonamento de alarme
     • Invoice, Pix, boleto, cartão, recibo ou inadimplência
     • Reservation, agenda, disponibilidade ou no-show de reserva
     • SupportTicket, SLA ou central de atendimento
     • Envio multicanal de Notificações como domínio próprio
     • Política avançada de Segurança e LGPD como fonte primária
     • Auditoria avançada de compliance

Separação oficial:

     • Core Platform mantém Tenant, Context, UserAccount, ResourceReference, AuthorizationDecision, licenças, feature flags, auditoria base e event bus.
     • Herança e Permissões governa políticas de convite, aprovação, quantidade, horários, documentos, foto, placa, inadimplência, visitante banido e exceções.
     • Pessoas e Clientes mantém PersonProfile, ClientProfile, PersonUnitLink, dependentes e prestadores recorrentes com vínculo contínuo.
     • Convites e Visitantes mantém visitante temporário, convite, autorização temporária, aprovação, recusa, check-in, check-out e histórico da visita.
     • Unidades, Blocos, Áreas e Ambientes mantém StructureReference e mapeia destino físico.
     • Organizações exibe resumos autorizados, mas não cria convite nem executa check-in/check-out.
     • Parceiros acompanha implantação e uso autorizado, mas não executa visitação como domínio próprio.
     • Dispositivos mantém tablets, leitores, totens, QR readers, câmeras e controladoras como DeviceRecord.
     • Controle de Acesso cria credencial temporária, QR, AccessPass, AccessEvent e executa passagem física.
     • Gateway transporta comandos técnicos quando solicitado pelo módulo dono, sem governar visita.
     • Câmeras / VMS cria evidências de vídeo a partir de eventos de visita por contrato autorizado.
     • Alarmes consome eventos de visitante para contexto de segurança, sem governar visita.
     • Financeiro cobra taxas, multas ou serviços de visitante quando solicitado por contrato autorizado.
     • Reservas governa agenda e disponibilidade; Convites governa convidados vinculados.
     • Tickets trata ocorrências de visitante por contrato autorizado.
     • Notificações envia comunicações de convite, chegada, aprovação, recusa e saída.
     • Segurança e LGPD governa retenção, finalidade, mascaramento e proteção de dados temporários de visitante.
     • Auditoria e Compliance investiga, correlaciona e exporta trilhas avançadas por contrato autorizado.

Regra operacional consolidada:

  Convites organiza a visita. Core autoriza. Herança governa políticas. Controle de Acesso executa passagem física. Auditoria registra.

Frase de blindagem:

  Convites não abre porta, não cria pessoa permanente, não gera cobrança, não envia notificação multicanal e não cria credencial física.

# 50. Decisões aplicadas nesta atualização
Esta versão incorpora as decisões aprovadas no módulo Convites e Visitantes:

     • DEC-086: Convites e Visitantes como domínio operacional de visita temporária.
     • DEC-087: Convites e Visitantes não executa acesso físico.
     • DEC-088: Snapshot temporário de visitante não é PersonProfile.
     • DEC-089: Convite pode se vincular a reserva sem assumir agenda.
     • DEC-090: Visitante banido exige governança LGPD.

Essas decisões devem ser lidas junto com:

     • DEC-004: Regra oficial de herança.
     • DEC-005: Login individual por pessoa.
     • DEC-008: Comunicação entre módulos por contratos.
     • DEC-019: Auditoria obrigatória.
     • DEC-020: LGPD e proteção de dados sensíveis.
     • DEC-037: Core Platform como autoridade estrutural de autorização.
     • DEC-038: Herança e Permissões como camada avançada de governança e políticas.
     • DEC-039: Separação entre UserAccount, PersonProfile e ClientProfile.
     • DEC-040: Separação entre dependente, prestador recorrente e visitante temporário.
     • DEC-045: Associação física não transfere posse operacional do recurso.
     • DEC-062: Controle de Acesso como domínio operacional de acesso físico.
     • DEC-081: Financeiro como domínio financeiro oficial.
     • DEC-083: Eventos financeiros não executam bloqueio operacional.

# 51. Próximo foco recomendado
Após Convites e Visitantes, o próximo módulo recomendado é Tickets, porque ocorrências de visitante, portaria, acesso, financeiro, reserva, manutenção e suporte precisam de um domínio próprio para atendimento, SLA, comentários, anexos, resolução, escalonamento e histórico de chamados sem invadir módulos operacionais.

Frase guia:

  Módulo dono gera a ocorrência. Tickets organiza o atendimento. Core autoriza. Auditoria registra.

# 52. Frase final atualizada de governança
O chat conversa. O documento manda. Cada módulo protege sua fronteira para que a plataforma evolua sem cair no lado sombrio do acoplamento invisível.


# 41. Atualização consolidada: módulo Tickets
Esta atualização consolida a fronteira oficial aprovada do módulo Tickets.

Regra central:

  Tickets atende. Core autoriza. Herança e Permissões governa políticas. Módulo dono executa. Auditoria registra.

Tickets representa o domínio operacional de chamados, solicitações, ocorrências, manutenção operacional, comunicação operacional, atendimento, comentários, anexos, SLA, escalonamento, histórico, resolução e reabertura.

Tickets é responsável por:

     • Ticket
     • OperationalTicket
     • MaintenanceTicket
     • IncidentTicket
     • ComplaintTicket
     • ServiceRequestTicket
     • TicketCategory
     • TicketPriority
     • TicketStatus
     • TicketType
     • TicketSource
     • TicketRequesterReference
     • TicketAssigneeReference
     • TicketWatcherReference
     • TicketTeamReference
     • TicketParticipantReference
     • TicketComment
     • TicketInternalNote
     • TicketAttachment
     • TicketAttachmentReference
     • TicketSLA
     • TicketSLAClock
     • TicketSLABreach
     • TicketEscalation
     • TicketEscalationLevel
     • TicketResolution
     • TicketReopen
     • TicketClosureReason
     • TicketLinkedResource
     • TicketModuleReference
     • Referências tipadas para recursos externos autorizados
     • Eventos do ciclo de vida do ticket
     • Solicitações a outros módulos por contratos autorizados
     • Read models autorizados para Relatórios / BI
     • Logs e trilhas auditáveis

Tickets não é responsável por:

     • Tenant
     • Context
     • UserAccount
     • AuthorizationDecision
     • PersonProfile
     • ClientProfile
     • PersonUnitLink
     • Unit, Block, Area ou Environment
     • OrganizationRecord
     • PartnerRecord
     • GatewayRecord, tunnel, rotas ou diagnóstico técnico oficial de gateway
     • DeviceRecord, DeviceHealth ou DeviceDiagnostic oficial
     • AccessCredential, AccessEvent, AccessGrant ou AccessDeny
     • Live view, playback, clipe, snapshot ou CameraEvidence
     • AlarmEvent, arme, desarme, silêncio, reset ou execução operacional de alarme
     • Invoice, Payment, Pix, boleto, cartão, inadimplência, repasse ou comissão
     • VisitorInvite, aprovação de visitante, check-in/check-out ou QR temporário
     • Reservation, disponibilidade, agenda ou no-show
     • Comunicado institucional do Mural Informativo
     • Envio multicanal de Notificações
     • Workflows de Automações
     • BI avançado acessando banco interno

Separação oficial:

     • Core Platform autentica, contextualiza, autoriza, licencia, audita, protege e conecta.
     • Herança e Permissões governa políticas avançadas de quem pode abrir, ver, comentar, anexar, atribuir, escalar, resolver, reabrir e exportar tickets.
     • Pessoas e Clientes mantém PersonProfile, ClientProfile e vínculos pessoais; Tickets usa referências autorizadas.
     • Unidades, Blocos, Áreas e Ambientes mantém a estrutura física; Tickets usa StructureReference autorizada.
     • Organizações exibe resumos autorizados de tickets; Tickets governa o ciclo do chamado.
     • Parceiros atende ou acompanha tickets dentro do escopo autorizado; Tickets governa o ciclo do chamado.
     • Gateway executa diagnóstico técnico de gateway quando solicitado por contrato; Tickets acompanha o atendimento.
     • Dispositivos executa diagnóstico técnico de equipamento quando solicitado por contrato; Tickets acompanha o atendimento.
     • Controle de Acesso executa regra de acesso físico; Tickets registra ocorrências ou solicitações.
     • Câmeras / VMS mantém vídeo e evidências; Tickets usa referências autorizadas.
     • Alarmes executa operação de alarme; Tickets registra manutenção ou atendimento relacionado.
     • Financeiro executa cobrança; Tickets pode solicitar ação financeira por contrato.
     • Convites e Visitantes executa visita; Tickets registra suporte ou ocorrência relacionada.
     • Reservas executa agenda e disponibilidade; Tickets registra suporte ou ocorrência relacionada.
     • Mural Informativo publica comunicados; Tickets pode nascer de dúvida ou reclamação vinculada.
     • Notificações entrega mensagens; Tickets solicita notificações por contrato.
     • Automações executa workflows; Tickets pode ser criado ou escalado por automação autorizada.
     • Relatórios / BI consome read models autorizados.
     • Segurança e LGPD define proteção, retenção, mascaramento e finalidade.
     • Auditoria e Compliance consulta, investiga e exporta trilhas por contrato.

Regra operacional consolidada:

  Tickets registra, acompanha, organiza, escala e resolve o atendimento. O módulo dono executa o recurso real.

# 42. Decisões aplicadas nesta atualização
Esta versão incorpora as decisões aprovadas no módulo Tickets:

     • DEC-092: Tickets como domínio operacional de atendimento.
     • DEC-093: TicketLinkedResource por referência autorizada.
     • DEC-094: Tickets solicita ações, mas não executa domínios externos.
     • DEC-095: Separação entre Tickets e Suporte e Operação.
     • DEC-096: Proteção reforçada para tickets sensíveis, anexos e evidências.
     • DEC-097: SLA e escalonamento pertencem ao ciclo do ticket.

Essas decisões devem ser lidas junto com:

     • DEC-007: Modularidade obrigatória.
     • DEC-008: Comunicação entre módulos por contratos.
     • DEC-019: Auditoria obrigatória.
     • DEC-020: LGPD e proteção de dados sensíveis.
     • DEC-021: Proibição de acoplamento entre módulos.
     • DEC-037: Core Platform como autoridade estrutural de autorização.
     • DEC-038: Herança e Permissões como camada avançada de governança e políticas.
     • DEC-045: Associação física não transfere posse operacional do recurso.
     • DEC-091: Planejamento completo em canva e sequência obrigatória de nomenclatura das decisões.


# 43. Atualização consolidada: módulo Mural Informativo
Esta atualização consolida a fronteira oficial aprovada do módulo Mural Informativo.

Regra central:

  Mural publica. Core autoriza. Herança governa políticas. Notificações entrega. Tickets atende. Financeiro cobra. BI analisa por read model. Auditoria registra.

Mural Informativo representa o domínio operacional de comunicação institucional e operacional oficial da plataforma.

Mural Informativo é responsável por:

     • Avisos
     • Comunicados
     • Publicações
     • Documentos anexados ao comunicado
     • Enquetes
     • Leitura obrigatória
     • Ciência
     • Aceite
     • Segmentação de público
     • Histórico de leitura
     • Fixação
     • Destaque
     • Arquivamento
     • Relatórios próprios de comunicação
     • Announcement
     • AnnouncementAudienceReference
     • AnnouncementReadReceipt
     • AnnouncementAcknowledgement
     • AnnouncementAcceptance
     • AnnouncementNotificationRequest
     • AnnouncementTicketRequest
     • AnnouncementReadModel
     • MuralAuthorizationScope
     • AnnouncementAuditTrail

Mural Informativo não é responsável por:

     • Tenant
     • Context
     • UserAccount
     • AuthorizationDecision
     • PersonProfile, ClientProfile ou PersonUnitLink
     • Unit, Block, Area ou Environment
     • OrganizationRecord ou OrganizationProfile
     • Envio multicanal de Notificações
     • Ticket, SLA, atendimento ou resolução
     • Invoice, boleto, Pix, cartão, pagamento, inadimplência ou recibo
     • VisitorInvite, QR temporário, check-in ou check-out
     • Reservation, agenda, disponibilidade ou no-show
     • Abertura de porta, revogação de credencial ou AccessEvent
     • Live view, playback, clipe, snapshot ou evidência de vídeo
     • Arme, desarme, silêncio ou disparo de alarme
     • BI avançado acessando banco interno
     • GED completo sem decisão oficial

Separação oficial:

     • Core Platform autentica, contextualiza, autoriza, licencia, audita, protege e conecta.
     • Herança e Permissões governa políticas avançadas de criação, publicação, segmentação, leitura obrigatória, aceite, exportação e visualização sensível.
     • Pessoas e Clientes mantém PersonProfile, ClientProfile e vínculos pessoais; Mural usa referências autorizadas.
     • Unidades, Blocos, Áreas e Ambientes mantém a estrutura física; Mural segmenta por StructureReference autorizada.
     • Organizações exibe resumos autorizados de comunicados; Mural governa o ciclo do comunicado.
     • Parceiros publica ou administra comunicados dentro do escopo autorizado; Mural governa o ciclo do comunicado.
     • Notificações entrega push, e-mail, SMS, WhatsApp e registra logs de envio.
     • Tickets atende dúvidas, reclamações, solicitações e contestações originadas por comunicado.
     • Financeiro executa cobranças e pagamentos; Mural pode apenas publicar avisos financeiros.
     • Reservas executa agenda e disponibilidade; Mural pode apenas publicar avisos sobre reservas.
     • Convites e Visitantes executa visita; Mural pode apenas publicar regras ou avisos de visitação.
     • Controle de Acesso executa acesso físico; Mural pode apenas publicar normas e avisos.
     • Câmeras / VMS governa vídeo e evidências; Mural pode apenas publicar avisos de privacidade ou manutenção.
     • Alarmes governa operação de alarme; Mural pode apenas publicar orientações e avisos.
     • Relatórios / BI consome AnnouncementReadModel autorizado.
     • Segurança e LGPD define proteção, retenção, mascaramento e finalidade.
     • Auditoria e Compliance consulta, investiga e exporta trilhas por contrato.

Regra operacional consolidada:

  Mural comunica. Não entrega canal. Não atende ticket. Não cobra. Não reserva. Não abre porta. Não opera câmera. Não dispara alarme. Não decide permissão.

# 44. Decisões aplicadas nesta atualização
Esta versão incorpora as decisões aprovadas no módulo Mural Informativo:

     • DEC-098: Mural Informativo como domínio oficial de comunicação institucional.
     • DEC-099: Mural solicita notificações, mas Notificações entrega.
     • DEC-100: Mural pode originar ticket, mas Tickets governa atendimento.
     • DEC-101: Leitura obrigatória, ciência e aceite não são motor de permissão.
     • DEC-102: Segmentação do Mural ocorre por referências autorizadas.
     • DEC-103: Anexos do Mural não substituem módulo Documentos/GED.
     • DEC-104: Mural expõe read models autorizados para BI.

Essas decisões devem ser lidas junto com:

     • DEC-007: Modularidade obrigatória.
     • DEC-008: Comunicação entre módulos por contratos.
     • DEC-019: Auditoria obrigatória.
     • DEC-020: LGPD e proteção de dados sensíveis.
     • DEC-021: Proibição de acoplamento entre módulos.
     • DEC-037: Core Platform como autoridade estrutural de autorização.
     • DEC-038: Herança e Permissões como camada avançada de governança e políticas.
     • DEC-045: Associação física não transfere posse operacional do recurso.
     • DEC-091: Planejamento completo em canva e sequência obrigatória de nomenclatura das decisões.


# 45. Atualização consolidada: módulo Notificações
Esta atualização consolida a fronteira oficial aprovada do módulo Notificações.

Regra central:

  Módulo dono solicita. Notificações entrega. Core autoriza. Política influencia. Auditoria registra.

Notificações representa o domínio operacional de envio, entrega, preferências, templates, canais, filas, tentativas, retries, falhas, provedores, opt-in, opt-out, logs de entrega, rastreabilidade e relatórios próprios de mensagens da plataforma.

Notificações é responsável por:

     • NotificationRequest
     • Notification
     • NotificationMessage
     • NotificationTemplate
     • NotificationTemplateVersion
     • NotificationChannel
     • NotificationRecipientReference
     • NotificationContactReference
     • NotificationEndpoint
     • NotificationPreference
     • NotificationOptIn
     • NotificationOptOut
     • NotificationQueue
     • NotificationJob
     • NotificationAttempt
     • NotificationRetryPolicy
     • NotificationDeliveryLog
     • NotificationProvider
     • NotificationProviderAdapter
     • NotificationWebhook
     • NotificationCriticalAlert
     • NotificationDigest
     • NotificationReadModel
     • NotificationAuthorizationScope
     • NotificationExecutionResult

Notificações não é responsável por:

     • Tenant
     • Context
     • UserAccount
     • Role, Permission, PermissionGrant ou InheritanceGrant
     • License ou FeatureFlag
     • AuthorizationDecision final
     • PersonProfile, ClientProfile ou PersonUnitLink
     • Cadastro primário de pessoas, clientes, contatos, telefone ou e-mail canônico
     • Unit, Block, Area ou Environment
     • OrganizationRecord ou OrganizationProfile
     • Comunicado oficial do Mural Informativo
     • Ticket, SLA, atendimento ou resolução
     • Fatura, boleto, Pix, cartão, pagamento, inadimplência ou recibo
     • Convite, QR temporário, check-in ou check-out
     • Reserva, agenda, disponibilidade ou no-show
     • AccessEvent, abertura de porta ou revogação de credencial
     • Live view, playback, clipe, snapshot ou evidência de vídeo
     • Arme, desarme, silêncio ou disparo de alarme
     • Tunnel, rota ou diagnóstico técnico
     • DeviceRecord, DeviceHealth ou DeviceDiagnostic
     • Workflow genérico de Automações
     • Marketplace de conectores
     • BI acessando banco interno

Separação oficial:

     • Core Platform autentica, contextualiza, autoriza, licencia, audita, protege e conecta.
     • Herança e Permissões governa políticas avançadas que influenciam envio, canal, preferência, opt-out, alerta crítico, template, logs e webhooks.
     • Pessoas e Clientes mantém PersonProfile, ClientProfile, vínculos pessoais, e-mail e telefone canônicos; Notificações usa referências autorizadas e endpoints operacionais mínimos.
     • Mural Informativo publica comunicado e cria AnnouncementNotificationRequest; Notificações entrega.
     • Tickets governa atendimento e SLA; Notificações entrega alertas.
     • Financeiro governa cobrança e pagamento; Notificações entrega avisos.
     • Convites e Visitantes governa visita; Notificações entrega mensagens.
     • Reservas governa agenda e disponibilidade; Notificações entrega lembretes.
     • Controle de Acesso governa acesso físico; Notificações entrega alertas.
     • Câmeras / VMS governa vídeo e evidências; Notificações entrega alertas.
     • Alarmes governa operação de alarme; Notificações entrega alertas críticos.
     • Gateway governa conectividade local; Notificações entrega alertas técnicos.
     • Dispositivos governa cadastro e saúde técnica; Notificações entrega alertas.
     • Automações pode solicitar notificação como ação autorizada, sem transferir workflow.
     • Marketplace fornece conectores externos; Notificações governa o uso operacional dos providers.
     • Relatórios / BI consome NotificationReadModel autorizado.
     • Segurança e LGPD define proteção, retenção, mascaramento, tracking, consentimento, segredos e finalidade.
     • Auditoria e Compliance investiga trilhas por contrato autorizado.

Regra operacional consolidada:

  Notificações entrega a mensagem. O módulo solicitante continua dono do fato original. NotificationRequest não transfere domínio.

# 46. Decisões aplicadas nesta atualização
Esta versão incorpora as decisões aprovadas no módulo Notificações:

     • DEC-105: Notificações como domínio operacional de envio e entrega multicanal.
     • DEC-106: NotificationRequest não transfere domínio do módulo solicitante.
     • DEC-107: NotificationPreference e NotificationEndpoint não são cadastro primário de pessoa.
     • DEC-108: Opt-out pode ser ignorado apenas em alerta crítico autorizado.
     • DEC-109: Marketplace fornece conectores, Notificações governa uso operacional dos providers.
     • DEC-110: BI consome apenas read models autorizados de Notificações.

Essas decisões devem ser lidas junto com:

     • DEC-007: Modularidade obrigatória.
     • DEC-008: Comunicação entre módulos por contratos.
     • DEC-019: Auditoria obrigatória.
     • DEC-020: LGPD e proteção de dados sensíveis.
     • DEC-021: Proibição de acoplamento entre módulos.
     • DEC-037: Core Platform como autoridade estrutural de autorização.
     • DEC-038: Herança e Permissões como camada avançada de governança e políticas.
     • DEC-039: Separação entre UserAccount, PersonProfile e ClientProfile.
     • DEC-091: Planejamento completo em canva e sequência obrigatória de nomenclatura das decisões.

# 47. Atualização consolidada: módulo Automações

Esta atualização consolida a fronteira oficial do módulo Automações.

Regra central:

  Automações representa o domínio operacional de workflows autorizados.

Automações permite criar regras do tipo evento, condição e ação, sempre respeitando tenant, contexto, plano, licença, módulo ativo, escopo, permissão, herança, política, autorização estrutural do Core Platform, segurança, LGPD, auditoria e domínio do módulo dono do recurso.

Automações é responsável por:

     • AutomationWorkflow
     • AutomationRule
     • AutomationTrigger
     • AutomationCondition
     • AutomationAction
     • AutomationActionRequest
     • AutomationExecution
     • AutomationExecutionStep
     • AutomationExecutionResult
     • AutomationExecutionLog
     • AutomationRetryPolicy
     • AutomationSchedule
     • AutomationDelay
     • AutomationTemplate
     • AutomationTemplateVersion
     • AutomationScope
     • AutomationAuthorizationScope operacional
     • AutomationResourceReference operacional
     • AutomationActorReference
     • AutomationTargetReference
     • AutomationWebhook
     • AutomationWebhookDeliveryLog
     • AutomationConnectorAction
     • AutomationApprovalRequest
     • AutomationHumanApproval
     • AutomationReadModel
     • AutomationAuditTrail operacional

Automações não é responsável por:

     • Tenant
     • Context
     • UserAccount
     • AuthorizationDecision final
     • PersonProfile
     • ClientProfile
     • PersonUnitLink
     • Unit, Block, Area ou Environment
     • OrganizationRecord
     • PartnerRecord
     • NotificationRequest como domínio próprio
     • NotificationTemplate
     • NotificationDeliveryLog
     • Ticket, SLA, atendimento ou resolução
     • Fatura, boleto, Pix, cartão, recibo, repasse ou inadimplência
     • Convite, QR temporário, check-in ou check-out de visitante
     • Agenda, disponibilidade, reserva ou no-show
     • Abertura de porta, AccessEvent, AccessGrant ou revogação de credencial
     • Live view, playback, mosaico, clipe, snapshot ou evidência
     • Arme, desarme, pânico, disparo ou resolução de alarme
     • Tunnel, rota, diagnóstico técnico ou manipulação de gateway
     • DeviceRecord, DeviceHealth oficial ou DeviceDiagnostic
     • MarketplaceConnector, catálogo de integrações, adapters ou providers
     • BI avançado acessando bancos internos

Separação oficial:

     • Core Platform mantém Tenant, Context, UserAccount, permissões, licenças, feature flags, auditoria base, ResourceReference e AuthorizationDecision.
     • Herança e Permissões governa políticas avançadas que influenciam criação, ativação, execução, escopo, ações críticas e logs.
     • Automações mantém workflows, gatilhos, condições, ações solicitadas, execuções, retries, aprovações humanas, webhooks, histórico e read models próprios.
     • Notificações entrega mensagens solicitadas por Automações.
     • O módulo dono executa a ação real solicitada por Automações.
     • Marketplace disponibiliza conectores e capacidades externas autorizadas.
     • Segurança e LGPD governa proteção, retenção, mascaramento, minimização e segredos.
     • Auditoria e Compliance investiga trilhas autorizadas.
     • Relatórios / BI consome apenas AutomationReadModel autorizado.

Regra operacional consolidada:

  O fato nasce no módulo dono. Automações avalia o workflow. Política influencia. Core decide. Módulo dono executa. Automações registra. Auditoria preserva.

Frase curta:

  Automações orquestra. Módulo dono executa. Core autoriza. Auditoria registra.

# 48. Decisões aplicadas nesta atualização

Esta versão incorpora as decisões aprovadas no módulo Automações:

     • DEC-111: Automações como domínio operacional de workflows autorizados.
     • DEC-112: Automações não executa domínio de módulos donos.
     • DEC-113: Ações críticas em Automações exigem política, escopo, autorização e auditoria.
     • DEC-114: AutomationReadModel como fonte autorizada para BI.
     • DEC-115: Webhooks e conectores de Automações não substituem Marketplace.

Essas decisões devem ser lidas junto com:

     • DEC-007: Modularidade obrigatória.
     • DEC-008: Comunicação entre módulos por contratos.
     • DEC-019: Auditoria obrigatória.
     • DEC-020: LGPD e proteção de dados sensíveis.
     • DEC-021: Proibição de acoplamento entre módulos.
     • DEC-037: Core Platform como autoridade estrutural de autorização.
     • DEC-038: Herança e Permissões como camada avançada de governança e políticas.
     • DEC-105: Notificações como domínio operacional de envio e entrega multicanal.
     • DEC-109: Marketplace fornece conectores, Notificações governa uso operacional dos providers.
     • DEC-110: BI consome apenas read models autorizados de Notificações.

# 42. Atualização consolidada: Marketplace de Integrações
Esta atualização consolida a fronteira oficial do módulo Marketplace de Integrações.

Regra central:

  Marketplace cataloga e disponibiliza. Core autoriza. Herança e Permissões influencia. Segurança e LGPD protege. Módulo dono executa. Auditoria registra.

Marketplace de Integrações é responsável por:

     • Catálogo de conectores
     • Publicação e aprovação de conectores
     • Certificação
     • Versionamento
     • Compatibilidade
     • Instalação lógica
     • Habilitação e desabilitação
     • Escopos de integração
     • Adapters
     • Providers
     • Pacotes e templates de integração
     • Credenciais por referência
     • Termos de uso
     • Políticas de privacidade de conectores
     • DPA
     • Avaliação de risco
     • Avaliação de segurança
     • Status técnico de conector
     • Logs técnicos de integração
     • Webhooks externos vinculados a conectores
     • Depreciação, rollback e bloqueio por segurança

Marketplace de Integrações não é responsável por:

     • Tenant
     • Context
     • UserAccount
     • AuthorizationDecision
     • License oficial
     • FeatureFlag oficial
     • PersonProfile
     • ClientProfile
     • Unit, Block, Area ou Environment
     • OrganizationRecord
     • GatewayRecord, tunnel, rotas ou diagnóstico técnico
     • DeviceRecord, DeviceHealth ou DeviceDiagnostic
     • Regra operacional de Controle de Acesso
     • Live view, playback, clipes, snapshots ou evidências
     • Arme, desarme, pânico, disparo ou incidente de alarme
     • Fatura, boleto, Pix, cartão, pagamento, inadimplência, repasse ou comissão
     • Convites, QR temporário, check-in ou check-out
     • Agenda, disponibilidade, reserva ou no-show
     • Tickets, SLA, atendimento ou resolução
     • Comunicados oficiais, leitura obrigatória, ciência ou aceite
     • NotificationRequest, NotificationTemplate ou NotificationDeliveryLog
     • AutomationWorkflow, condição, execução ou ação operacional
     • Marca, domínio, logo, tema ou experiência visual como domínio próprio
     • BI avançado ou acesso a bancos internos

Separação oficial:

     • Core Platform mantém Tenant, Context, UserAccount, permissões, licenças, feature flags, auditoria base, ResourceReference e AuthorizationDecision.
     • Marketplace mantém catálogo, conectores, versões, instalações, escopos, adapters, providers, credential references, compliance, status e logs técnicos de integração.
     • Segurança e LGPD governa finalidade, base legal, risco, tratamento de dados, transferência internacional, retenção, mascaramento e bloqueios de segurança.
     • O módulo dono consome o conector por contrato autorizado e executa sua regra operacional.
     • Auditoria e Compliance investiga e exporta trilhas autorizadas.

# 43. Decisões aplicadas nesta atualização
Esta versão incorpora as decisões aprovadas no módulo Marketplace de Integrações:

     • DEC-116: Marketplace de Integrações como domínio oficial de conectores plugáveis.
     • DEC-117: Marketplace não executa regra operacional de módulos donos.
     • DEC-118: Credenciais de integração devem ser sempre tratadas por referência segura.
     • DEC-119: Conector sensível exige escopo, finalidade, LGPD, auditoria e avaliação de risco.
     • DEC-120: Marketplace pode expor views de licença e feature flag, mas Core permanece fonte oficial.
     • DEC-121: Saúde de conector não substitui saúde de dispositivo, gateway ou módulo consumidor.

Essas decisões devem ser lidas junto com:

     • DEC-027: Marketplace de integrações.
     • DEC-037: Core Platform como autoridade estrutural de autorização.
     • DEC-038: Herança e Permissões como camada avançada de governança e políticas.
     • DEC-105: Notificações como domínio operacional de envio e entrega multicanal.
     • DEC-109: Marketplace fornece conectores, Notificações governa uso operacional dos providers.
     • DEC-111: Automações como domínio operacional de workflows autorizados.
     • DEC-115: Webhooks e conectores de Automações não substituem Marketplace.

Histórico: Auditoria e Compliance já foi o próximo módulo recomendado e já está consolidado nesta raiz.


# Atualização consolidada: Auditoria e Compliance
Esta atualização consolida o módulo Auditoria e Compliance como domínio oficial de investigação, conformidade, evidências, cadeia de custódia, exportações auditadas, alertas e trilhas avançadas da plataforma.

Regra central:
Core registra e autoriza. Módulo dono executa e mantém log operacional. Segurança e LGPD protege e define políticas. Herança e Permissões governa políticas avançadas. BI analisa indicadores de negócio. Suporte atende incidentes. Auditoria e Compliance investiga, correlaciona, evidencia, alerta e exporta com controle.

Pontos consolidados:
- Auditoria e Compliance não substitui CoreAuditLog, AuditLog base ou SecurityLog base.
- ComplianceTrail é trilha derivada, correlacionada e investigativa.
- Módulos donos preservam seus logs operacionais próprios.
- Segurança e LGPD define políticas de proteção, retenção, consentimento, anonimização, remoção, finalidade e mascaramento.
- Auditoria referencia essas políticas e evidencia conformidade.
- Toda exportação sensível exige autorização, motivo, escopo, hash, aprovação quando aplicável e cadeia de custódia.
- Auditoria e Compliance não é BI, Suporte, Segurança, VMS, Controle de Acesso, Financeiro, Notificações, Automações, Marketplace ou executor de módulos donos.

Decisões aplicadas nesta atualização:
- DEC-122: Auditoria e Compliance como domínio de investigação e conformidade.
- DEC-123: CoreAuditLog permanece como fonte imutável da trilha base.
- DEC-124: Segurança e LGPD governa políticas, Auditoria evidencia conformidade.
- DEC-125: Exportação de evidência exige autorização, motivo e cadeia de custódia.
- DEC-126: Auditoria e Compliance não é BI, Suporte, Segurança nem executor de módulos donos.
- DEC-127: Consolidação da separação entre Core Audit e Auditoria e Compliance.

Histórico: Segurança e LGPD já foi o próximo módulo recomendado e agora está consolidado nesta raiz.
Motivo: Auditoria e Compliance agora referencia políticas de retenção, mascaramento, minimização, consentimento, anonimização, remoção, finalidade e proteção de dados sensíveis. O próximo módulo deve consolidar quem define essas políticas.

# Atualização consolidada: Blindagem de Produção e Interação Segura entre Módulos
Esta atualização adiciona uma camada oficial de segurança arquitetural para reduzir risco de quebra quando os módulos forem produzidos e integrados.

Regra central:
Contrato protege módulo. Contexto protege tenant. Core protege autorização. Segurança protege dado. Auditoria preserva prova.

Parâmetros obrigatórios do aplicativo para produção segura:

     • Todo módulo é dono apenas do seu domínio.
     • Nenhum módulo acessa banco, classe, fila interna ou lógica privada de outro módulo.
     • Toda integração entre módulos usa API interna pública, evento, contrato, webhook interno, barramento de eventos ou read model autorizado.
     • Toda ação sensível exige tenant, contexto, ator, recurso, escopo, permissão e AuthorizationDecision do Core Platform.
     • Toda chamada entre módulos deve carregar correlation_id, causation_id, actor_reference, tenant_id e context_id quando aplicável.
     • Todo comando crítico deve ser idempotente e possuir chave de idempotência.
     • Todo evento deve ser publicado com contrato versionado e envelope padronizado.
     • Mudança incompatível de contrato exige nova versão, período de compatibilidade e plano de migração.
     • Falha de autorização, contexto, licença, escopo ou política deve falhar fechada em ações críticas.
     • Read model é leitura autorizada, nunca transferência de domínio.
     • Segredos, chaves, tokens e credenciais externas devem ser tratados por referência segura, nunca como segredo bruto exposto.
     • Dados pessoais, biometria, imagens, vídeo, dados financeiros, credenciais, IPs internos e logs sensíveis exigem finalidade, minimização, mascaramento, retenção e auditoria.
     • Execução física, financeira, operacional ou sensível pertence sempre ao módulo dono.
     • Auditoria e Compliance investiga e evidencia, mas não substitui logs primários, Core, Segurança e LGPD, BI, Suporte ou módulos donos.

Fluxo seguro obrigatório entre módulos:

     1. O módulo de origem publica evento, solicita ação ou consulta read model autorizado.
     2. Core Platform valida tenant, contexto, licença, feature flag, permissão e AuthorizationDecision quando houver ação sensível.
     3. Herança e Permissões influencia políticas quando aplicável.
     4. Segurança e LGPD define políticas de proteção, retenção, minimização, mascaramento, consentimento e finalidade quando houver dado sensível.
     5. O módulo dono valida sua própria regra operacional.
     6. O módulo dono executa a ação.
     7. O módulo dono registra log operacional.
     8. Core registra trilha base quando aplicável.
     9. Auditoria e Compliance correlaciona, evidencia, alerta e exporta apenas por contrato autorizado.

Decisões aplicadas nesta atualização:

     • DEC-128: Blindagem de produção entre módulos como regra oficial.
     • DEC-129: Contratos versionados e compatibilidade obrigatória entre módulos.
     • DEC-130: Fail-closed obrigatório para ações críticas e dados sensíveis.

Histórico: Segurança e LGPD já foi o próximo módulo recomendado e agora está consolidado nesta raiz.

A próxima decisão nova deve começar em DEC-193, salvo se o arquivo 03_DECISOES_OFICIAIS.md indicar outra última DEC.


# Atualização consolidada: Segurança e LGPD
Segurança e LGPD é o módulo oficial de políticas de proteção, privacidade, retenção, minimização, mascaramento, consentimento, finalidade, base legal, tratamento de dados, anonimização, remoção, bloqueio, oposição, portabilidade, classificação de sensibilidade, segredos, credenciais, webhooks externos, risco de terceiros, subprocessadores, transferência internacional e exportação sensível.

Ele protege dados pessoais, biometria, imagens, vídeos, dados financeiros, dados de acesso, visitantes, tickets, documentos, logs técnicos, IPs internos, credenciais e segredos.

Ele não substitui o Core Platform, Herança e Permissões, Auditoria e Compliance, Relatórios / BI, Suporte e Operação ou módulos donos.

Regra central:

Segurança e LGPD define políticas de proteção e tratamento. Core autoriza. Herança influencia. Módulo dono executa. Auditoria evidencia.

Decisões aplicadas nesta atualização:

     • DEC-131: Segurança e LGPD como domínio oficial de políticas de proteção e privacidade.
     • DEC-132: Segurança e LGPD não substitui Core Platform, Auditoria, Herança, BI, Suporte ou módulos donos.
     • DEC-133: Políticas de retenção, mascaramento, minimização, finalidade e consentimento são referências oficiais.
     • DEC-134: Solicitações do titular pertencem a Segurança e LGPD, execução ocorre no módulo dono.
     • DEC-135: Segredos e credenciais devem usar referência segura.
     • DEC-136: Incidentes de segurança e privacidade exigem política, escopo, trilha e separação de domínio.
     • DEC-137: Terceiros, conectores e transferência internacional exigem avaliação de risco.
     • DEC-138: Ausência de política de Segurança e LGPD deve falhar fechado em ação sensível.

Histórico: Reservas já foi o próximo módulo recomendado e agora está consolidado nesta raiz.

Motivo: após Segurança e LGPD, Suporte e Operação foi consolidado nesta raiz. O próximo ponto crítico é consolidar Reservas, por depender de estrutura física, acesso, financeiro, notificações, automações, tickets e auditoria.

A próxima decisão nova deve começar em DEC-193, salvo se o arquivo 03_DECISOES_OFICIAIS.md indicar outra última DEC.



# Atualização consolidada: Suporte e Operação

Suporte e Operação é o módulo oficial de sustentação técnica da plataforma, suporte a parceiros, suporte a organizações, incidentes de serviço, status operacional, janelas de manutenção, diagnóstico assistido, acesso remoto assistido por referência, escalonamentos técnicos, base de conhecimento, runbooks, known issues, workarounds, root cause analysis e post-incident review.

Ele atende e coordena, mas não executa o domínio operacional dos módulos donos.

Ele não substitui Core Platform, Tickets, Auditoria e Compliance, Segurança e LGPD, Relatórios / BI, Gateway, Dispositivos, Controle de Acesso, Câmeras / VMS, Alarmes, Financeiro, Convites e Visitantes, Reservas, Mural Informativo, Notificações, Automações, Marketplace de Integrações ou White-label.

Regra central:

Suporte atende. Módulo dono corrige. Segurança protege. Auditoria evidencia. Core autoriza.

Decisões aplicadas nesta atualização:

     • DEC-139: Suporte e Operação como domínio oficial de sustentação da plataforma.
     • DEC-140: Separação oficial entre Tickets e Suporte e Operação.
     • DEC-141: Suporte coordena, mas módulo dono executa.
     • DEC-142: Diagnóstico assistido por contrato versionado.
     • DEC-143: Acesso remoto assistido deve ser temporário, autorizado e auditável.
     • DEC-144: Status operacional e incidentes de serviço pertencem a Suporte e Operação.
     • DEC-145: Dados sensíveis em suporte exigem minimização, mascaramento e referência segura.

Histórico: Reservas já foi o próximo módulo recomendado e agora está consolidado nesta raiz.

Motivo: após consolidar a sustentação técnica, o próximo ponto crítico é blindar reservas de recursos físicos, disponibilidade, check-in, no-show, integração com acesso, financeiro, notificações, automações e auditoria.

Frase guia do próximo módulo:
Reservas agenda. Estrutura localiza. Core autoriza. Acesso executa passagem. Financeiro cobra quando aplicável. Notificações comunica. Auditoria registra.

A próxima decisão nova deve começar em DEC-193, salvo se o arquivo 03_DECISOES_OFICIAIS.md indicar outra última DEC.


# Atualização consolidada: Reservas

Reservas representa o domínio operacional de agenda, disponibilidade e uso reservado de recursos físicos ou compartilhados.

Reservas é responsável por Reservation, ReservationRequest, ReservationAvailability, ReservationCalendar, ReservationRule, ReservationHold, ReservationBlock, ReservationCheckIn, ReservationCheckOut, ReservationNoShow, ReservationAccessWindow, ReservationChargeRequest, ReservationNotificationRequest, ReservationTicketRequest, ReservationReadModel e ReservationAuditTrail.

Reservas não substitui Core Platform, Unidades, Blocos, Áreas e Ambientes, Controle de Acesso, Financeiro, Convites e Visitantes, Tickets, Suporte e Operação, Notificações, Automações, Segurança e LGPD, Auditoria e Compliance, Relatórios / BI, Marketplace de Integrações ou White-label.

Regra operacional consolidada:

Reservas agenda. Estrutura localiza. Core autoriza. Acesso executa passagem. Financeiro cobra quando aplicável. Notificações comunica. Auditoria registra.

Decisões aplicadas nesta atualização:

     • DEC-146: Reservas como domínio operacional de agenda e uso de recursos reserváveis.
     • DEC-147: ReservableResource não transfere domínio da estrutura física.
     • DEC-148: ReservationAccessWindow não executa passagem física.
     • DEC-149: Reservas solicita cobranças, mas não executa financeiro.
     • DEC-150: Lista de convidados de reserva não substitui Convites e Visitantes.
     • DEC-151: ReservationTicketRequest não substitui Tickets.
     • DEC-152: Eventos de Reservas podem acionar Automações sem criar workflow interno.
     • DEC-153: Dados sensíveis de Reservas exigem finalidade, minimização, mascaramento, retenção e trilha.

Histórico: White-label já foi o próximo módulo recomendado e agora está consolidado nesta raiz.

Motivo: após consolidar Relatórios / BI, o próximo ponto crítico é separar identidade visual, tema, logo, cores, domínio, favicon, templates visuais, nome comercial e experiência customizada, sem permitir que White-label altere regra de negócio, autorização, licenças, tenants, contextos ou dados operacionais.

Frase guia do próximo módulo:
White-label personaliza. Core autoriza. Módulo dono preserva regra. Segurança protege. Auditoria registra.

A próxima decisão nova deve começar em DEC-193, salvo se o arquivo 03_DECISOES_OFICIAIS.md indicar outra última DEC.


# Atualização consolidada: Relatórios / BI

Relatórios / BI é o domínio analítico oficial do NoduOS.

Ele cria e gerencia dashboards, widgets, indicadores, KPIs, relatórios, templates, filtros, consultas agregadas, snapshots, exportações autorizadas, agendamentos de relatório, compartilhamentos, logs de visualização, logs de exportação, insights e anomalias analíticas.

Relatórios / BI não é fonte primária de dados operacionais. Cada módulo dono continua responsável por seu domínio, regras, eventos, estados, logs e read models.

A comunicação com outros módulos deve ocorrer apenas por contratos públicos versionados, eventos, APIs internas, webhooks autorizados ou read models analíticos autorizados.

Relatórios / BI sempre deve validar tenant, contexto, escopo, ator, permissão, módulo ativo, licença, feature flag, AuthorizationDecision do Core Platform e políticas de Segurança e LGPD.

Dados sensíveis devem ser minimizados e mascarados por padrão. Exportações sensíveis exigem finalidade, motivo, autorização, política, retenção, trilha e idempotência.

Relatórios / BI não substitui Core Platform, Herança e Permissões, Segurança e LGPD, Auditoria e Compliance, Suporte e Operação, Financeiro, Controle de Acesso, Câmeras / VMS, Alarmes, Convites e Visitantes, Reservas, Tickets, Mural Informativo, Notificações, Automações, Marketplace de Integrações, Gateway Local / Mikrotik / Tunnel, Dispositivos ou White-label.

Decisões aplicadas nesta atualização:

     • DEC-155: Relatórios / BI como domínio analítico oficial.
     • DEC-156: Relatórios / BI consome apenas read models, eventos e contratos autorizados.
     • DEC-157: Read model analítico não transfere domínio operacional para BI.
     • DEC-158: Exportações sensíveis em BI exigem autorização, finalidade, política e trilha.
     • DEC-159: BI não substitui Auditoria e Compliance.
     • DEC-160: BI não define políticas de Segurança e LGPD.
     • DEC-161: Relatórios agendados pertencem ao BI, entrega multicanal pertence a Notificações.
     • DEC-162: Data mart, data warehouse e data lake em BI exigem governança explícita.

Histórico: White-label já foi o próximo módulo recomendado e agora está consolidado nesta raiz.

Motivo: após consolidar Relatórios / BI, o próximo ponto crítico é separar corretamente identidade visual, tema, logo, cores, domínio, favicon, templates visuais, nome comercial e experiência customizada, sem permitir que White-label altere regras de negócio, permissões, módulos, licenças, tenant, contexto, dados operacionais ou segurança.

Frase guia do próximo módulo:
White-label personaliza. Core autoriza. Módulo dono preserva regra. Segurança protege. Auditoria registra.

A próxima decisão nova deve começar em DEC-193, salvo se o arquivo 03_DECISOES_OFICIAIS.md indicar outra última DEC.

# Atualização consolidada: White-label

White-label é o domínio oficial de identidade visual autorizada do NoduOS.

Ele permite personalização de tema, marca, logo, cores, domínio, favicon, assets, templates visuais, preview, publicação, rollback, fallback e experiência visual por Master, Parceiro ou Organização, quando autorizado por Core Platform, licença, feature flag, permissão, escopo e política aplicável.

White-label não altera regra de negócio, herança operacional, autorização, tenant, contexto, licença, plano, feature flag, módulo ativo, dados operacionais, segurança, LGPD, auditoria, financeiro, notificações, BI, marketplace ou execução de módulos donos.

NoduOS permanece o nome oficial do app e do projeto. Marcas customizadas podem ser exibidas em contexto autorizado, mas não sobrescrevem a identidade raiz do projeto nem as decisões centrais.

Domínios customizados exigem validação. Certificados e segredos usam referência segura. Assets e templates visuais exigem validação de Segurança e LGPD. Publicação, rollback e fallback são ações críticas, idempotentes, auditáveis e fail-closed.

Frase consolidada:

White-label personaliza. Core autoriza. Módulo dono preserva regra. Segurança protege. Auditoria registra.

Decisões aplicadas nesta atualização:

     • DEC-163: White-label como domínio oficial de identidade visual autorizada.
     • DEC-164: White-label não altera regra de negócio, autorização, licença, tenant ou contexto.
     • DEC-165: NoduOS permanece nome oficial raiz mesmo com marcas customizadas.
     • DEC-166: Domínio customizado e certificados exigem validação, referência segura e fail-closed.
     • DEC-167: Assets, uploads e templates visuais exigem validação de segurança e LGPD.
     • DEC-168: Templates visuais pertencem ao White-label, execução pertence ao módulo dono.
     • DEC-169: Publicação, rollback e fallback de tema são ações críticas idempotentes.
     • DEC-170: Herança visual é escopada e não concede permissão operacional.

Próxima etapa recomendada: Matriz Técnica de Dados Sensíveis por Contrato.

Motivo: após consolidar Master, todos os módulos principais do NoduOS ficam planejados e registrados na raiz. O próximo trabalho deve ser uma revisão cruzada dos documentos centrais para remover duplicidades, alinhar versões, revisar sequência de DEC, validar fronteiras entre módulos e preparar uma base final limpa para futura modelagem técnica, banco de dados, APIs, contratos, eventos e telas.

Frase guia da próxima etapa:

Raiz consolida. Contrato estabiliza. Módulo preserva fronteira. Produção agradece.

A próxima decisão nova deve começar em DEC-193, salvo se o arquivo 03_DECISOES_OFICIAIS.md indicar outra última DEC.



# Atualização consolidada: Master

Master representa o domínio oficial de governança superior da plataforma NoduOS.

Ele permite ao dono da plataforma governar limites superiores, políticas administrativas, parceiros, módulos, planos comerciais, licenças comerciais, white-label, marketplace, integrações globais e visões administrativas autorizadas, sem substituir o Core Platform e sem executar regra operacional de módulos donos.

Master não cria Tenant, Context, UserAccount, PermissionGrant, InheritanceGrant, AuthorizationDecision, License técnica, FeatureFlag técnica, ModuleRegistry, AuditLog base ou Event bus.

Master não substitui Parceiros, Organizações, White-label, Marketplace de Integrações, Financeiro, Relatórios / BI, Auditoria e Compliance, Segurança e LGPD, Suporte e Operação ou módulos donos operacionais.

Master não acessa banco interno de outro módulo, não usa read model como banco compartilhado, não guarda segredo bruto, não exporta dado sensível sem autorização, finalidade, política, mascaramento, retenção e trilha, e não executa regra operacional dos módulos donos.

Suspensão, bloqueio, restauração, liberação ou alteração crítica de limite de parceiro são ações críticas idempotentes, auditáveis e fail-closed.

Frase consolidada:

Master governa o limite. Core autoriza. Parceiro opera. Módulo dono executa. Auditoria registra.

Decisões aplicadas nesta atualização:

     • DEC-171: Master como domínio oficial de governança superior.
     • DEC-172: Master não substitui Core Platform.
     • DEC-173: Master governa parceiros sem substituir Parceiros.
     • DEC-174: Master governa módulos, planos e licenças por política superior.
     • DEC-175: Master consome visões globais sem acessar bancos internos.
     • DEC-176: Master governa White-label e Marketplace sem executar seus domínios.
     • DEC-177: Suspensão, bloqueio e restauração de parceiro são ações críticas idempotentes.
     • DEC-178: Master não executa regra operacional de módulos donos.

Próxima etapa recomendada: Matriz Técnica de Dados Sensíveis por Contrato.

Frase guia da próxima etapa:
Raiz consolida. Contrato estabiliza. Módulo preserva fronteira. Produção agradece.

A próxima decisão nova deve começar em DEC-193, salvo se o arquivo 03_DECISOES_OFICIAIS.md indicar outra última DEC.


# Atualização consolidada: Revisão Geral de Consolidação da Arquitetura

Status: Aprovado para uso como raiz consolidada.
Data: 2026-06-25
Decisões aplicadas: DEC-179 a DEC-183.

Esta atualização encerra a etapa de revisão geral da raiz do NoduOS e consolida os ajustes necessários para que a plataforma avance para contratos, eventos, APIs, telas, banco de dados e modelagem técnica sem perder modularidade.

Regra central preservada:

Política influencia. Core decide. Módulo dono executa. Auditoria registra.

## Diretrizes de interação entre módulos

1. Nenhum módulo executa domínio de outro módulo.
2. Nenhum módulo acessa banco interno de outro módulo.
3. Toda comunicação entre módulos deve ocorrer por contratos públicos versionados, APIs internas, eventos, webhooks, comandos autorizados ou read models autorizados.
4. Todo contrato, evento, API, webhook, comando e read model deve declarar owner_module, versão, escopo, permissões, dados sensíveis, política de retenção, compatibilidade e descontinuação.
5. Toda ação sensível exige tenant, context, ator, módulo ativo, licença, feature flag, ResourceReference, escopo específico, AuthorizationDecision do Core Platform e política aplicável de Segurança e LGPD.
6. A ausência de autorização, contexto, escopo, licença, feature flag, política, contrato ou módulo dono deve negar, pausar ou degradar com segurança.
7. Eventos comunicam fatos ocorridos. Comandos solicitam execução. Read models permitem consulta autorizada, mas não transferem domínio.
8. Eventos com sufixo Requested só são permitidos quando representarem o fato de que uma solicitação foi registrada. A execução real deve ocorrer por comando versionado, API interna autorizada ou workflow aprovado.
9. Read models não podem ser usados como banco compartilhado, fonte operacional primária ou atalho para escrita.
10. Evidências devem trafegar por EvidenceReference seguro, com finalidade, retenção, autorização, cadeia de custódia e proteção de dados sensíveis.

## Mapa de interação oficial

- Master governa limites superiores, políticas comerciais e direitos administrativos, sem executar operação.
- Core Platform autentica, contextualiza, licencia, autoriza, audita, protege e conecta.
- Parceiros vende, implanta, cadastra gateways e dispositivos por fluxos autorizados, administra e acompanha organizações abaixo dele.
- Organizações representa o cadastro operacional e institucional do espaço físico conectado.
- Unidades, Blocos, Áreas e Ambientes estrutura o interior do espaço físico.
- Pessoas e Clientes mantém PersonProfile, ClientProfile, vínculos, dependentes, prestadores recorrentes e consentimentos pessoais.
- Herança e Permissões governa políticas avançadas, simulações, delegações e exceções, sem emitir AuthorizationDecision final.
- Gateway Local / Mikrotik / Tunnel conecta rede local e nuvem, transportando comunicação técnica autorizada.
- Dispositivos governa DeviceRecord, DeviceReference, saúde, status, diagnóstico, comunicação técnica e ciclo de vida de equipamentos.
- Controle de Acesso executa passagem física, credenciais operacionais e regras de acesso autorizadas.
- Câmeras / VMS governa vídeo, live view, playback, clipes, mosaicos e evidências de vídeo.
- Alarmes interpreta eventos de alarme, setores, arme/desarme, disparos e escalonamentos próprios.
- Financeiro cobra, concilia, fatura, registra pagamentos e publica eventos financeiros, sem bloquear diretamente recursos.
- Convites e Visitantes governa visita temporária, convite, QR temporário, check-in e check-out.
- Tickets governa chamados operacionais da organização.
- Mural Informativo publica comunicados e conteúdos, usando Notificações apenas para entrega multicanal.
- Reservas agenda recursos, disponibilidade, check-in, cancelamento e no-show, sem abrir acesso físico ou cobrar diretamente.
- Relatórios / BI analisa dados por eventos, snapshots e read models autorizados, sem virar banco central.
- White-label personaliza identidade visual autorizada, sem alterar regra de negócio, autorização, licença ou contexto.
- Notificações entrega mensagens multicanal solicitadas pelo módulo dono, sem decidir domínio.
- Automações orquestra gatilhos, condições e ações, mas a execução final pertence ao módulo dono.
- Marketplace cataloga, instala e versiona conectores, sem assumir regra operacional dos módulos.
- Auditoria e Compliance investiga, correlaciona, evidencia, exporta e preserva cadeia de custódia, sem corrigir domínio operacional.
- Segurança e LGPD define políticas de proteção, finalidade, consentimento, retenção, mascaramento, anonimização, remoção, segredos e terceiros.
- Suporte e Operação atende incidentes e sustentação da plataforma, sem virar Tickets operacional.

## Matriz resumida de ownership crítico

- UserAccount, AuthCredential, UserSession, Tenant, Context, PermissionGrant, InheritanceGrant, ResourceReference, AuthorizationDecision, ModuleRegistry, Plan, License, Entitlement, FeatureFlag, EventEnvelope e auditoria base: Core Platform.
- PartnerRecord e PartnerProfile: Parceiros.
- OrganizationRecord, OrganizationProfile, OrganizationSettings e OrganizationStatus: Organizações.
- Unit, Block, Area, Environment e StructureReference: Unidades, Blocos, Áreas e Ambientes.
- PersonProfile, ClientProfile, PersonUnitLink, PersonConsent, dependentes e prestadores recorrentes: Pessoas e Clientes.
- GatewayRecord, TunnelSession, rotas, GatewaySecret, GatewayHealth, GatewayDiagnostic e GatewayAuthorizationScope: Gateway Local / Mikrotik / Tunnel.
- DeviceRecord, DeviceReference, DeviceHealth, DeviceDiagnostic, DeviceCredential e DeviceAuthorizationScope: Dispositivos.
- AccessPoint, AccessCredential, AccessRule, AccessAuthorizationScope e AccessOfflinePolicy: Controle de Acesso.
- CameraResource, VideoStream, Playback, Clip, CameraAuthorizationScope e VideoEvidenceReference: Câmeras / VMS.
- AlarmEvent, AlarmSector, AlarmArmingState, AlarmDispatch e AlarmAuthorizationScope: Alarmes.
- Invoice, Payment, BillingPolicy, FinancialContract, Subscription, PaymentReconciliation, Commission e Split: Financeiro.
- VisitorInvite, TemporaryVisitor, VisitorCheckIn, VisitorCheckOut e TemporaryQRCode: Convites e Visitantes.
- OperationalTicket, SLA, TicketComment, TicketAttachment, TicketResolution e TicketReopen: Tickets.
- Announcement, AnnouncementAudience, AnnouncementPublication e MuralContent: Mural Informativo.
- ReservableResource, Reservation, AvailabilityCalendar, ReservationCheckIn e NoShow: Reservas.
- BIReport, Dashboard, KPI, Snapshot, DataMart governado, ExportJob e AnalyticsReadModel: Relatórios / BI.
- WhiteLabelTheme, BrandAsset, CustomDomain, TemplateVisual, ThemeVersion e BrandFallbackTheme: White-label.
- NotificationMessage, NotificationTemplate, DeliveryChannel, DeliveryAttempt e NotificationPreference: Notificações.
- Workflow, Trigger, Condition, ActionRequest, AutomationRun e AutomationRetryPolicy: Automações.
- MarketplaceConnector, AdapterPackage, ConnectorInstallation, ProviderReference e ConnectorSecretReference: Marketplace de Integrações.
- ComplianceCase, AuditEvidence, ChainOfCustodyRecord, AuditExport e InvestigationTrail: Auditoria e Compliance.
- SecurityPolicy, PrivacyPolicy, ConsentPolicy, RetentionPolicy, DataClassification, SecretPolicy e ThirdPartyRiskPolicy: Segurança e LGPD.
- SupportOperationCase, ServiceIncident, Runbook, StatusPage, MaintenanceWindow e SupportAccessSession: Suporte e Operação.

## Itens de domínio que exigem taxonomia antes da modelagem técnica

- Veículos: devem ser classificados antes da modelagem como vínculo de pessoa/unidade, recurso de acesso, recurso de estacionamento ou entidade operacional própria.
- Documentos: devem ser separados por tipo: documento pessoal, documento institucional, documento financeiro, documento operacional, documento de evidência e documento publicado.
- Ocorrências: devem ser classificadas por origem: ticket operacional, evento de alarme, incidente de segurança, ocorrência de acesso, incidente de suporte ou evidência de auditoria.

## Resultado da revisão

A raiz fica consolidada para avançar. O próximo trabalho recomendado não é novo módulo, mas Matriz Técnica de Permissões por Contrato, seguida da matriz de dados sensíveis por campo e do detalhamento de EventEnvelope v1, EvidenceReference v1, SecretReference e AuthorizationDecision.

# Atualização consolidada: Catálogo de Contratos Públicos

Esta atualização consolida o Catálogo de Contratos Públicos como documento técnico oficial complementar da raiz do NoduOS.

O catálogo não é implementação, banco de dados, migration, endpoint final de framework, DTO técnico, tela ou criação de novo módulo. Ele define a fronteira pública de comunicação entre módulos antes da modelagem técnica detalhada.

Regra central dos contratos:

  Contrato protege módulo. Contexto protege tenant. Core protege autorização. Segurança e LGPD protege dados. Auditoria preserva prova.

O catálogo oficializa:

- APIs internas versionadas.
- Comandos intermodulares.
- Eventos de fato ocorrido.
- Eventos de solicitação registrada.
- Webhooks internos e externos.
- Read models autorizados.
- Contratos de política.
- Contratos de autorização.
- Contratos de evidência.
- Contratos de exportação.
- Contratos analíticos.
- Contratos de diagnóstico.
- Contratos de integração.
- Contratos de notificação.
- Contratos de suporte.
- Contratos de auditoria.
- Contratos de Segurança e LGPD.

Separação obrigatória:

- Comando solicita execução.
- Evento de fato ocorrido comunica algo que já aconteceu.
- Evento de solicitação registrada comunica que um pedido foi registrado, não que foi executado.
- Read model permite leitura autorizada, sem transferir domínio e sem virar banco compartilhado.
- API interna expõe ação ou consulta pública do módulo dono.
- Contrato de evidência referencia prova sem expor bruto indevido.
- Contrato de política influencia decisão, mas não executa recurso.
- Contrato analítico alimenta BI, mas não vira banco central.

Documento técnico raiz adicionado:

  05_CATALOGO_DE_CONTRATOS_PUBLICOS.md

Decisões aplicadas nesta atualização:

- DEC-184: Catálogo de Contratos Públicos como artefato técnico oficial.
- DEC-185: Tipos oficiais de contrato público.
- DEC-186: Metadados mínimos obrigatórios de contrato.
- DEC-187: Separação oficial entre contrato, schema técnico e implementação.
- DEC-188: Política oficial de versionamento e ciclo de vida de contratos públicos.

Próxima DEC livre: DEC-198.

Próxima etapa recomendada: Matriz Técnica de Dados Sensíveis por Contrato.

30.3 Atualização consolidada: Matriz Técnica de Permissões por Contrato

Esta atualização consolida a Matriz Técnica de Permissões por Contrato como artefato técnico oficial complementar ao Catálogo de Contratos Públicos.

Documento técnico raiz adicionado:

  06_MATRIZ_TECNICA_PERMISSOES_POR_CONTRATO.md

A matriz define, para cada contrato público, quem pode chamar ou consumir, em qual escopo, com qual permissão conceitual, quais módulos consumidores são autorizados e quais proteções são obrigatórias.

A matriz oficializa:

- Perfis autorizados por contrato.
- Módulos consumidores permitidos.
- Permissão conceitual por contrato.
- Escopo mínimo por tenant, contexto, parceiro, organização, unidade, área, ambiente ou recurso.
- Exigência de AuthorizationDecision do Core Platform.
- Exigência de módulo ativo, licença, entitlement e feature flag.
- Exigência de política de Segurança e LGPD.
- Exigência de auditoria.
- Exigência de idempotência para comandos críticos.
- Classificação de sensibilidade.
- Mascaramento, retenção e fail-closed.
- Restrições anti-acoplamento.

Regra curta da matriz:

  Permissão limita o ator. Contrato limita o caminho. Core decide. Módulo dono executa. Auditoria registra.

A Matriz Técnica de Permissões por Contrato não substitui:

- Core Platform.
- PermissionGrant.
- InheritanceGrant.
- Role.
- ResourceReference.
- AuthorizationDecision.
- Segurança e LGPD.
- Auditoria e Compliance.
- O módulo dono do recurso.

Permissões conceituais não autorizam ação sozinhas. Elas classificam o uso técnico do contrato e orientam a decisão estrutural do Core Platform, sempre junto com tenant, contexto, ator, recurso, módulo ativo, licença, entitlement, feature flag, política de Segurança e LGPD e AuthorizationDecision quando aplicável.

Decisões aplicadas nesta atualização:

- DEC-189: Matriz Técnica de Permissões por Contrato como artefato técnico oficial complementar.
- DEC-190: Permissão conceitual obrigatória em contrato público.

Última DEC consolidada: DEC-197.

Próxima DEC livre: DEC-191.

Próxima etapa recomendada: Matriz Técnica de Dados Sensíveis por Contrato.


# Atualização consolidada: Matriz Técnica de Dados Sensíveis por Contrato

Esta atualização consolida a Matriz Técnica de Dados Sensíveis por Contrato como documento técnico raiz complementar do NoduOS.

Arquivo oficial adicionado:

     • 07_MATRIZ_TECNICA_DADOS_SENSIVEIS_POR_CONTRATO.md

Regra central desta atualização:

  Dado sensível exige finalidade. Contrato limita payload. Segurança protege. Core autoriza. Auditoria evidencia.

A matriz define, por contrato público, quais dados podem trafegar, quais devem ser proibidos, quais exigem máscara, finalidade, consentimento, retenção, descarte, anonimização, ResourceReference, EvidenceReference, SecretReference, AuthorizationDecision, auditoria de visualização, auditoria de exportação e comportamento fail-closed.

A matriz não cria banco, schema, endpoint, tela, implementação ou módulo novo. Ela funciona como filtro obrigatório antes da modelagem técnica para impedir exposição indevida de dados pessoais, financeiros, biométricos, vídeo, imagem, evidência, visitante, suporte, segredo, webhook, conector externo, IP interno, rota local, túnel, logs técnicos e exportações sensíveis.

Decisão aplicada nesta atualização:

     • DEC-191: Matriz Técnica de Dados Sensíveis por Contrato como artefato técnico oficial complementar.

A última decisão oficial consolidada passa a ser DEC-191.
A próxima decisão nova deve começar em DEC-193, salvo se o arquivo 03_DECISOES_OFICIAIS.md indicar outra última DEC.

Próxima etapa recomendada:

  Detalhamento de EventEnvelope v1.

# Atualização - Detalhamento de EventEnvelope v1

Status desta atualização: consolidada na raiz.

Decisão aplicada: DEC-192.

Arquivo técnico raiz adicionado: `08_DETALHAMENTO_EVENTENVELOPE_V1.md`.

Última DEC consolidada: DEC-194.

Próxima DEC livre: DEC-195.

Próxima etapa recomendada: Detalhamento de SecretReference.

Resumo da atualização:

- O EventEnvelope v1 passa a ser o padrão transversal obrigatório para eventos públicos intermodulares do NoduOS.
- Todo evento entre módulos, evento entregue por webhook autorizado, evento externo normalizado, evento técnico de retry, evento de dead-letter, evento de quarentena e evento usado por auditoria, BI, segurança, LGPD ou suporte deve respeitar o EventEnvelope v1.
- Evento não é comando, não é banco compartilhado, não transporta domínio completo e não cria autorização nova.
- `authorization_decision_reference`, quando presente, referencia decisão original do Core Platform e nunca autoriza nova ação por conta própria.
- Eventos sensíveis e críticos devem respeitar minimização de payload, tenant, contexto, ator, recurso, política, auditoria, correlação, causalidade, outbox, inbox/deduplicação, retry controlado, dead-letter/quarentena e fail-closed.

Frase guia consolidada:

Evento comunica fato. Envelope protege contexto. Payload minimiza dado. Correlação preserva fluxo. Auditoria preserva prova.


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


## Impacto na visão do produto

O NoduOS preserva seu objetivo de ser um SaaS modular para espaços físicos conectados porque segredos passam a ser tratados como infraestrutura crítica transversal, sem quebrar a modularidade entre Core, Gateway, Dispositivos, Controle de Acesso, Câmeras, Alarmes, Financeiro, White-label, Marketplace, Notificações, Suporte, Segurança e Auditoria.

O segredo permanece sob o módulo dono e sob política. A plataforma continua API-first, event-driven, multi-tenant, auditável, white-label e preparada para integrações físicas sem transformar contratos públicos em cofres improvisados.

## Regra transversal: AuthorizationDecision v1

O NoduOS adota AuthorizationDecision v1 como padrão conceitual oficial do Core Platform para decisões de autorização estrutural, contextual, temporal, modular, sensível e crítica.

AuthorizationDecision decide se uma ação específica pode ocorrer agora, dentro de tenant, contexto, ator, recurso, ação, escopo, política, licença, feature flag, finalidade, sensibilidade e janela temporal definidos.

Nenhum módulo comercial emite AuthorizationDecision final.

AuthorizationDecision não substitui PermissionGrant, InheritanceGrant, ResourceReference, EvidenceReference, SecretReference, EventEnvelope, read model, política, licença, feature flag ou execução do módulo dono.

Ação crítica sem AuthorizationDecision válida deve falhar fechado.

## Regra transversal: ResourceReference v1

O NoduOS adota ResourceReference v1 como padrão transversal oficial para apontar recursos entre módulos sem transferir domínio.

Todo recurso pertence ao módulo dono. Outros módulos podem apontar, solicitar autorização, solicitar leitura autorizada ou solicitar ação por contrato/API interna, mas não podem copiar entidade completa, acessar banco interno, usar payload bruto, vazar chave interna ou executar regra de domínio alheia.

Todo ResourceReference deve preservar owner_module, resource_type, resource_public_id, tenant/contexto quando aplicável, sensitivity_level, lifecycle_state, políticas aplicáveis, display_label minimizado e `no_domain_transfer = true`.

Regra curta:

Recurso pertence ao dono. Referência aponta sem tomar posse. Escopo limita. Core autoriza. Módulo dono executa. Auditoria registra.


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

O NoduOS adota o Blueprint técnico da aplicação como trilho oficial de transição entre governança arquitetural e programação.

O Blueprint não substitui a Bíblia, o Mapa de Módulos, as Regras de Arquitetura, as Decisões Oficiais, o Catálogo de Contratos, as Matrizes Técnicas ou os detalhamentos transversais. Ele organiza a implementação técnica preservando Core Platform obrigatório, modularidade final, contratos públicos versionados, tenant/contexto, AuthorizationDecision v1, ResourceReference v1, EventEnvelope v1, EvidenceReference v1, SecretReference v1, idempotência, fail-closed, auditoria, LGPD, baixa dependência entre módulos, hardware agnostic, white-label e mobile first.

A programação deve seguir abordagem contract-first, modular-first e authorization-first:

- contrato antes de endpoint;
- domínio antes de tabela;
- autorização antes de ação;
- referência antes de payload;
- evento antes de read model;
- auditoria antes de confiança;
- LGPD antes de dado bruto;
- teste antes de deploy.

Estado após esta consolidação:

```text
Última DEC consolidada: DEC-197.
Próxima DEC livre: DEC-198.
Próxima etapa recomendada: Programação inicial do Core Platform orientada pelo Blueprint técnico.
```
