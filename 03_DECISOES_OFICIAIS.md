Decisões Oficiais do Projeto
              NoduOS
              SaaS Modular de Gestão de Espaços e Segurança Unificada

                           Chat 00 - Governança e Consolidação

                                           2026-06-22

Decisões Oficiais do Projeto: NoduOS
SaaS Modular de Gestão de Espaços e Segurança Unificada
Versão
Versão: 3.0
Status: Base oficial atualizada com Blueprint Técnico da Aplicação, DEC-197 e documentos técnicos raiz 00 a 13
Data de criação: 2026-06-22
Data desta atualização: 2026-06-27
Tipo de documento: Registro oficial de decisões aprovadas e controle de decisões em revisão

1. Objetivo deste documento
Este documento registra todas as decisões oficiais do projeto.
Ele existe para impedir retrocessos, contradições, mudanças invisíveis e perda de foco ao longo das
conversas, planejamentos e futuras implementações.
Regra principal:
     Nenhuma decisão estrutural deve ser alterada sem registro formal neste documento.

2. Regra de validade
Uma ideia só vira decisão oficial quando passar por este fluxo:
ChatGPT sugeriu = rascunho
Usuário aprovou = decisão
Entrou neste documento = oficial
Toda decisão oficial deve conter:
  • Código da decisão
  • Tema
  • Decisão
  • Motivo
  • Impacto
  • Status
  • Data

3. Estados possíveis de uma decisão
Cada decisão pode ter um dos seguintes estados:
  • Aprovada

  • Em revisão
  • Substituída
  • Revogada
Uma decisão aprovada só pode ser alterada por uma nova decisão oficial que explique:
  • O que está sendo alterado
  • Por que está sendo alterado
  • Qual impacto isso gera nos módulos existentes
  • Quais documentos precisam ser atualizados

DEC-001: Planejamento da versão final
Tema
Planejamento funcional e arquitetural da plataforma.

Decisão
O projeto não será planejado como MVP, fase 1, fase 2 ou versão provisória.
A plataforma será planejada como a versão final ideal, com módulos, fluxos, regras, responsabilidades, permissões, integrações e limites bem definidos desde o início.

Motivo
Evitar retrabalho, perda de foco, decisões improvisadas e mudanças estruturais futuras que possam
quebrar módulos ou contradizer a visão principal.

Impacto
Todos os documentos, módulos e conversas futuras devem tratar a plataforma como arquitetura final
modular.
Pode existir uma ordem futura de implementação, mas ela não deve alterar o planejamento funcional
final.

Status
Aprovada

Data
2026-06-22

DEC-002: Plataforma como Building OS
Tema
Posicionamento do produto.

Decisão
A plataforma será posicionada como um Sistema Operacional Modular para Espaços Físicos Conectados, ou seja, um Building OS.
Ela não será tratada como apenas um ERP de condomínio, sistema financeiro, app de morador, VMS
ou controle de acesso.

Motivo
O objetivo é atender múltiplos tipos de espaços, como condomínios, clínicas, empresas, coworkings,
escolas, academias, hospitais, galpões e prédios comerciais.

Impacto
Todas as decisões devem considerar a plataforma como um produto amplo, multiespaço, modular,
multimarcas e orientado a operação física e digital.

Status
Aprovada

Data
2026-06-22

DEC-003: Hierarquia oficial da plataforma
Tema
Estrutura de governo e relacionamento entre perfis.

Decisão
A hierarquia oficial da plataforma será:
MASTER
  PARCEIRO
    ORGANIZAÇÃO / ESPAÇO
       OPERADOR / GESTOR
       UNIDADE / BLOCO / ÁREA / AMBIENTE
         CLIENTE / USUÁRIO FINAL

Motivo
Essa estrutura permite escalar a plataforma para múltiplos parceiros, organizações e usuários finais,
mantendo separação clara de responsabilidades.

Impacto
Todos os módulos devem respeitar essa hierarquia.
Nenhum usuário deve acessar informações acima, abaixo ou fora do seu contexto sem permissão
explícita.

Status
Aprovada

Data
2026-06-22

DEC-004: Regra oficial de herança
Tema
Herança de módulos, permissões e recursos.

Decisão
A plataforma funcionará por herança contextual.
A regra oficial será:
Master libera módulos para Parceiro.
Parceiro libera módulos para Organização.
Organização libera permissões para Operador/Gestor.
Operador/Gestor libera recursos para Unidade/Bloco/Área.
Unidade/Bloco/Área libera recursos para Cliente.
Cliente usa apenas o que herdou.

Motivo
Garantir controle, segurança, modularidade, isolamento entre contextos e flexibilidade comercial.

Impacto
Todo módulo deve consultar permissões e heranças antes de permitir acesso, visualização ou ação.

Status
Aprovada

Data
2026-06-22

DEC-005: Login individual por pessoa
Tema
Identidade, acesso e rastreabilidade.

Decisão
Cada pessoa deve ter login próprio.
A unidade não deve ser tratada como login compartilhado.
A unidade concentra permissões e recursos, mas o acesso deve ser individual por pessoa.

Motivo
Evitar senha compartilhada, melhorar auditoria, proteger dados pessoais, permitir rastreabilidade
individual e cumprir boas práticas de segurança e LGPD.

Impacto
O sistema deve separar claramente:
  • Pessoa
  • Usuário
  • Cliente
  • Unidade
  • Vínculo
  • Credencial
  • Permissão
  • Contexto
Uma unidade pode ter várias pessoas vinculadas, mas cada pessoa acessa com sua própria conta.

Status
Aprovada

Data
2026-06-22

DEC-006: Uma pessoa pode ter múltiplos contextos
Tema
Contexto de acesso.

Decisão
Uma mesma pessoa poderá ter múltiplos vínculos dentro da plataforma.
Exemplo:
  • Maria pode ser moradora do Condomínio Alpha.
  • Maria pode ser funcionária da Empresa Beta.
  • Maria pode ser cliente do Cowork Gamma.
  • Maria pode ser operadora da Clínica Delta.
Cada contexto terá módulos, permissões, dashboard, recursos, câmeras, acessos e notificações próprios.

Motivo
Permitir que a plataforma atenda múltiplos tipos de espaços sem duplicar identidade de usuário.

Impacto
O login identifica a pessoa.
O contexto define o que ela pode ver e fazer.

Status
Aprovada

Data
2026-06-22

DEC-007: Modularidade obrigatória
Tema
Arquitetura funcional da plataforma.

Decisão
Todo módulo deve ser independente, ativável, desativável, auditável, integrável e substituível sem
quebrar os demais.
Nenhum módulo pode depender da lógica interna de outro módulo.

Motivo
Evitar acoplamento, facilitar evolução, permitir personalização por plano e impedir que alterações
em um módulo quebrem outros.

Impacto
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

Status
Aprovada

Data
2026-06-22

DEC-008: Comunicação entre módulos por contratos
Tema
Integração interna entre módulos.

Decisão
Os módulos só poderão se comunicar por:
  • APIs públicas internas
  • Eventos
  • Contratos de dados
  • Webhooks internos
  • Barramento de eventos
  • Read models autorizados
É proibido que um módulo acesse diretamente a lógica interna de outro módulo.

Motivo
Garantir independência, previsibilidade e segurança entre os módulos.

Impacto
Exemplo correto original:
Financeiro publica: InvoiceOverdue
Permissões avalia política aplicável.
Core Platform emite AuthorizationDecision.
Controle de Acesso executa: revogar acesso, se autorizado.
Exemplo proibido:
Financeiro acessa diretamente o banco interno do Controle de Acesso e bloqueia uma porta.
Observação de atualização: qualquer formulação anterior do tipo “Permissões decide” deve ser interpretada como “Herança e Permissões avalia política; Core Platform decide estruturalmente; módulo
dono executa”.

Status
Aprovada

Data
2026-06-22

DEC-009: Core Platform obrigatório
Tema
Núcleo permanente da plataforma.

Decisão
A plataforma terá um núcleo obrigatório, chamado Core Platform.
Esse núcleo não será tratado como módulo comercial opcional.
Componentes do Core Platform:
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

Motivo
Esses recursos sustentam todos os módulos e precisam existir sempre.

Impacto
Nenhum módulo comercial deve recriar autenticação, permissões, auditoria, tenancy ou regras globais por conta própria.

Status
Aprovada

Data
2026-06-22

DEC-010: Hardware agnóstico e multimarcas
Tema
Integrações com equipamentos físicos.

Decisão
A plataforma será agnóstica a hardware e multimarcas.
Ela não deve depender de uma única marca ou fabricante.

Motivo
O mercado brasileiro utiliza equipamentos variados, incluindo Intelbras, Hikvision, Control iD, ZKTeco,
JFL, PPA, Dahua, Axis, Grandstream, Mikrotik e outros.

Impacto
As integrações devem ser plugáveis.
O módulo principal deve falar com uma interface genérica.
Cada marca, protocolo ou fabricante deve implementar seu próprio adaptador.

Status
Aprovada

Data
2026-06-22

DEC-011: Gateway Local / Mikrotik / Tunnel como parte essencial
Tema
Conexão entre mundo físico e servidor.

Decisão
A plataforma deverá considerar a instalação física como parte central do produto.
O Parceiro instala uma Mikrotik ou gateway local na organização, criando um tunnel seguro com o
servidor.

Motivo
Permitir comunicação segura com dispositivos locais, câmeras, controladoras, alarmes, sensores e
demais equipamentos da organização.

Impacto
Deve existir um módulo ou domínio específico para:
  • Gateway local
  • Tunnel seguro
  • Monitoramento de conectividade
  • Rotas
  • Status da rede local
  • Dispositivos conectados
  • Diagnóstico remoto
  • Logs técnicos
  • Alertas de queda
  • Sincronização de eventos locais

Status
Aprovada

Data
2026-06-22

DEC-012: Parceiro instala o mundo físico
Tema
Papel operacional do Parceiro.

Decisão
O Parceiro será responsável por instalar fisicamente a organização, cadastrar dispositivos, configurar
o gateway local e ativar módulos disponíveis para aquela organização.

Motivo
A plataforma será vendida também como base operacional para integradores, empresas de segurança, administradoras e operadores regionais.

Impacto
O painel do Parceiro deve permitir:
  • Criar organizações
  • Cadastrar gateways
  • Cadastrar dispositivos
  • Configurar módulos por organização
  • Criar operador/gestor principal
  • Acompanhar saúde da instalação
  • Gerenciar tudo abaixo dele

Status
Aprovada

Data
2026-06-22

DEC-013: Operador/Gestor administra o dia a dia
Tema
Responsabilidade do Operador/Gestor.

Decisão
O Operador/Gestor será responsável por administrar a organização no dia a dia.
Ele cadastra clientes, vincula pessoas às unidades, escolhe módulos herdados, administra tickets,
acessos, câmeras permitidas, mural, convites e rotinas operacionais.

Motivo
Separar a operação diária da função comercial e técnica do Parceiro.

Impacto
O Operador/Gestor não deve ter visão global da plataforma.
Ele só acessa a organização ou organizações explicitamente permitidas.

Status
Aprovada

Data
2026-06-22

DEC-014: Cliente usa apenas o que herdou
Tema
Experiência e permissões do Cliente.

Decisão
O Cliente acessará apenas os módulos básicos e os recursos herdados da sua unidade, bloco, área,
organização ou contexto.

Motivo
Garantir privacidade, segurança e personalização por organização.

Impacto
O app do Cliente deve exibir apenas:
  • Módulos liberados
  • Câmeras herdadas
  • Acessos herdados
  • Financeiro herdado, se permitido
  • Convites permitidos
  • Tickets permitidos
  • Mural permitido
  • Relatórios permitidos
  • Dados do próprio contexto

Status
Aprovada

Data
2026-06-22

DEC-015: Mobile first para Cliente e Operador/Gestor
Tema
Experiência de uso.

Decisão
A experiência do Cliente e do Operador/Gestor será mobile first.
O Parceiro e o Master poderão ter interfaces mais completas em desktop, mas também devem possuir
visualização responsiva.

Motivo
Clientes e operadores utilizam o sistema principalmente em campo, portaria, recepção, administração local e celular pessoal.

Impacto
Todas as telas desses perfis devem ser planejadas primeiro para celular e depois expandidas para
desktop.

Status
Aprovada

Data
2026-06-22

DEC-016: Dashboard por perfil
Tema
Interface e experiência por nível.

Decisão
Cada perfil terá uma dashboard própria, adequada ao seu papel.
Regras:
  • Cliente vê sua vida operacional.
  • Operador/Gestor vê a operação da organização.
  • Parceiro vê tudo abaixo dele.
  • Master vê a plataforma inteira.

Motivo
Evitar poluição visual e garantir que cada perfil veja apenas o necessário para agir.

Impacto
Não haverá uma dashboard única genérica para todos os usuários.

Status
Aprovada

Data
2026-06-22

DEC-017: Lista inicial oficial de módulos comerciais
Tema
Mapa inicial de módulos.

Decisão
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

Motivo
Criar um mapa inicial para evitar que os módulos sejam criados de forma solta ou contraditória.

Impacto
Qualquer inclusão, remoção ou fusão de módulos deve ser registrada neste documento.

Status
Aprovada

Data
2026-06-22

DEC-018: Módulos básicos e módulos herdáveis do Cliente
Tema
Experiência do Cliente.

Decisão
O Cliente terá módulos básicos e módulos herdáveis.
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

Motivo
Garantir uma experiência mínima coerente ao Cliente, sem violar a regra de herança.

Impacto
O app do Cliente deve ser renderizado dinamicamente conforme o contexto e os recursos herdados.

Status
Aprovada

Data
2026-06-22

DEC-019: Auditoria obrigatória
Tema
Segurança e rastreabilidade.

Decisão
Todas as ações importantes devem gerar logs e trilhas de auditoria.
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

Motivo
Garantir segurança, rastreabilidade, compliance, suporte técnico e confiança operacional.

Impacto
Cada módulo deve declarar quais eventos serão auditados.

Status
Aprovada

Data
2026-06-22

DEC-020: LGPD e proteção de dados sensíveis
Tema
Privacidade, dados pessoais e biometria.

Decisão
A plataforma deve respeitar LGPD desde o planejamento.
Dados pessoais, imagens, biometria facial, registros de acesso, documentos e evidências devem ser
tratados como dados sensíveis ou críticos conforme o caso.

Motivo
O sistema lidará com dados pessoais, imagens de câmeras, biometria facial, histórico de acessos e
informações financeiras.

Impacto
Devem existir regras para:
  • Consentimento
  • Finalidade de uso
  • Histórico de aceite
  • Controle de acesso a dados pessoais
  • Registro de tratamento de dados
  • Proteção de dados biométricos
  • Proteção de imagens e evidências
  • Anonimização
  • Remoção quando aplicável
  • Auditoria de visualização e exportação

Status
Aprovada

Data
2026-06-22

DEC-021: Proibição de acoplamento entre módulos
Tema
Riscos estruturais.

Decisão
É proibido criar dependência invisível entre módulos.
Um módulo não pode quebrar outro quando for alterado.

Motivo
Essa é uma das principais exigências do projeto.

Impacto
Todo módulo deverá declarar:
  • O que faz
  • O que não faz
  • Quais eventos publica
  • Quais eventos consome
  • Quais APIs expõe
  • Quais permissões usa
  • Quais dependências possui
  • Quais dependências são proibidas

Status
Aprovada

Data
2026-06-22

DEC-022: White-label e multimarca
Tema
Personalização comercial.

Decisão
A plataforma deve suportar white-label e multimarca.
O Master poderá liberar ou não recursos de white-label para Parceiros.
O Parceiro poderá aplicar marca própria conforme seu plano e permissão.

Motivo
Permitir venda para integradores, administradoras, franquias, grupos empresariais e operadores regionais.

Impacto
A plataforma deve prever:
  • Logo
  • Cores
  • Domínio
  • Nome comercial
  • Identidade visual
  • Configuração por parceiro
  • Configuração por organização
  • Experiência customizada no app

Status
Aprovada

Data
2026-06-22

DEC-023: Acesso a câmeras por herança
Tema
Privacidade e visualização de câmeras.

Decisão
O Cliente só poderá visualizar câmeras herdadas do seu contexto.
As câmeras devem estar vinculadas a organização, área, bloco, unidade ou regra específica.

Motivo
Evitar exposição indevida de imagens e proteger privacidade.

Impacto
A visualização de câmeras deve respeitar:
   • Organização
   • Área
   • Bloco
   • Unidade
   • Perfil
   • Contexto
   • Permissão
   • Regra de herança
   • Auditoria

Status
Aprovada

Data
2026-06-22

DEC-024: Controle de acesso por regras
Tema
Acesso físico.

Decisão
O controle de acesso deve ser baseado em regras, permissões, contexto, horário, recurso e herança.

Motivo
Permitir cenários diferentes para condomínios, clínicas, coworkings, empresas e demais espaços.

Impacto
A plataforma deve suportar regras como:
   • Acesso por horário
   • Acesso por área
   • Acesso por unidade
   • Acesso por perfil
   • Acesso por status financeiro
   • Acesso por reserva
   • Acesso por convite
   • Acesso por vínculo ativo
   • Acesso por dispositivo
A decisão final sobre bloqueio ou liberação deve ser feita pelo Core Platform, considerando políticas
registradas, e executada pelo módulo dono do recurso. Não deve haver intervenção direta de outro
módulo.

Status
Aprovada

Data
2026-06-22

DEC-025: Financeiro não executa bloqueio diretamente
Tema
Separação entre Financeiro e Controle de Acesso.

Decisão
O módulo Financeiro não deve bloquear diretamente portas, acessos, reservas ou recursos.
Ele deve publicar eventos financeiros.
A decisão de restringir recursos deve passar por políticas autorizadas, autorização estrutural do Core
Platform e execução pelo módulo dono do recurso.

Motivo
Evitar acoplamento entre Financeiro, Controle de Acesso, Reservas, Câmeras ou qualquer outro módulo operacional.

Impacto
Exemplo correto:
Financeiro publica: InvoiceOverdue.
Herança e Permissões avalia política configurada.
Core Platform emite AuthorizationDecision.
Controle de Acesso executa revogação, se autorizado.
Reservas executa bloqueio de reserva, se autorizado.

Status
Aprovada

Data
2026-06-22

DEC-026: Dispositivos como domínio independente
Tema
Equipamentos físicos.

Decisão
Câmeras, leitores, controladoras, alarmes, sensores, relés, portões e demais equipamentos devem
ser tratados em um módulo/domínio próprio de Dispositivos.

Motivo
Evitar que cada módulo recrie cadastro e saúde de dispositivo de forma isolada.

Impacto
O módulo de Dispositivos deve controlar:
  • Cadastro
  • Marca
  • Modelo
  • Tipo
  • Status
  • Saúde
  • Última comunicação
  • Gateway vinculado
  • Organização vinculada
  • Área vinculada por referência estrutural
  • Localização física por referência ao módulo Unidades, Blocos, Áreas e Ambientes
  • Logs técnicos
  • Alertas
  • Diagnóstico
Módulos como Câmeras, Alarmes e Controle de Acesso usam dispositivos, mas não devem ser donos
isolados do cadastro global.

Status
Aprovada

Data
2026-06-22

DEC-027: Marketplace de integrações
Tema
Extensibilidade futura.

Decisão
A plataforma deve prever um Marketplace de Integrações.

Motivo
Permitir crescimento do ecossistema, novas marcas, novos módulos, integrações externas e possibilidades comerciais.

Impacto
O Marketplace poderá futuramente conter:
  • Integrações de hardware
  • Integrações financeiras
  • Integrações de WhatsApp
  • Integrações de e-mail
  • Integrações de SMS
  • Integrações de ERP
  • Integrações de RH
  • Integrações de CRM
  • Automações prontas
  • Templates de módulos
  • Conectores externos

Status
Aprovada

Data
2026-06-22

DEC-028: Documentos centrais obrigatórios
Tema
Organização do projeto.

Decisão
O projeto será mantido com documentos centrais para evitar perda de contexto.
Documentos oficiais previstos:
  • 00_BIBLIA_DO_PROJETO.md
  • 01_MAPA_DE_MODULOS.md
  • 02_REGRAS_DE_ARQUITETURA.md
  • 03_DECISOES_OFICIAIS.md
  • 04_PROMPTS_DE_TRABALHO.md

Motivo
O contexto do chat é limitado. Os documentos centrais serão a fonte de verdade para conversas
futuras.

Impacto
Todo novo chat deve começar obedecendo os documentos centrais.
Nenhum chat deve reinterpretar decisões já registradas.

Status
Aprovada

Data
2026-06-22

DEC-029: Um chat por módulo
Tema
Método de trabalho com ChatGPT.

Decisão
O planejamento detalhado será feito preferencialmente em uma conversa por módulo.

Motivo
Evitar mistura de assuntos, perda de contexto e regressões.

Impacto
Cada chat de módulo deve gerar ao final:
  • Resumo aprovado do módulo
  • Decisões novas
  • Atualizações para o mapa de módulos
  • Pendências para outros módulos
  • Riscos de acoplamento
Essas informações devem ser copiadas para os documentos centrais.

Status
Aprovada

Data
2026-06-22

DEC-030: Chat conversa, documento manda
Tema
Regra de governança do conhecimento.

Decisão
O ChatGPT será usado como ferramenta de raciocínio, redação e organização.
A verdade oficial do projeto estará nos documentos centrais.

Motivo
Evitar perda de decisões quando o contexto da conversa acabar ou quando outro chat for iniciado.

Impacto
A regra oficial será:
O chat conversa.
O documento manda.

Status
Aprovada

Data
2026-06-22

DEC-031: Core como fonte única de identidade técnica, contexto e autorização estrutural
Tema
Core Platform.

Decisão
O Core Platform será a fonte única de identidade técnica, autenticação, conta de usuário, tenant, contexto, autorização estrutural, permissões base, herança contextual, licenças, feature flags, auditoria
base e event bus.

Motivo
Evitar que módulos comerciais recriem funções centrais, permissões paralelas, identidade duplicada
ou auditoria estrutural fora do núcleo obrigatório.

Impacto
Todo módulo comercial deve consultar o Core Platform por APIs internas, eventos, contratos ou read
models autorizados antes de permitir ações sensíveis.
Esta decisão complementa a DEC-009 e deve ser lida junto com a DEC-037.

Status
Substituída pela DEC-037

Data
2026-06-22

DEC-032: Separação entre UserAccount e Pessoa/Cliente
Tema
Identidade técnica versus cadastro humano.

Decisão
O Core Platform será dono de UserAccount, credenciais, sessão e autenticação.
O módulo Pessoas e Clientes será dono de PersonProfile, ClientProfile, documentos, contatos, dependentes, biometria, vínculos pessoais e histórico individual.

Motivo
Evitar duplicidade entre conta técnica, pessoa real e cliente contextual.

Impacto
A integração entre Core Platform e Pessoas e Clientes deve ocorrer por IDs públicos, eventos e APIs
internas.
Observação: esta decisão foi ampliada e consolidada pela DEC-039, que separa formalmente UserAccount, PersonProfile e ClientProfile.

Status
Substituída pela DEC-039

Data
2026-06-22

DEC-033: EventEnvelope v1 obrigatório
Tema
Eventos e contratos.

Decisão
Todo evento da plataforma deve usar envelope padrão com, no mínimo:
  • event_id
  • event_name
  • contract_version
  • source_module

  • tenant_id
  • context_id, quando aplicável
  • actor_id, quando aplicável
  • occurred_at
  • correlation_id
  • causation_id, quando aplicável
  • payload

Motivo
Garantir rastreabilidade, compatibilidade, auditoria, segurança e interoperabilidade entre módulos.

Impacto
Nenhum módulo deve publicar evento fora do padrão definido para a plataforma.
Eventos não devem carregar dados sensíveis desnecessários.

Status
Aprovada

Data
2026-06-22

DEC-034: Authorization Decision API obrigatória
Tema
Autorização estrutural.

Decisão
Todo módulo deve consultar a CoreAuthorizationAPI antes de ações sensíveis.
A resposta oficial da autorização estrutural deve ser uma AuthorizationDecision emitida pelo Core
Platform.

Motivo
Impedir permissões paralelas, bypass de contexto, acessos fora de escopo e decisões de autorização
distribuídas sem controle.

Impacto
Módulos continuam donos das regras comerciais, mas a autorização estrutural passa pelo Core Platform.

Status
Substituída pela DEC-037

Data
2026-06-22

DEC-035: ResourceReference como contrato entre Core e módulos
Tema
Recursos herdáveis e referência entre módulos.

Decisão
Módulos comerciais devem registrar no Core Platform apenas referências genéricas de recursos herdáveis, sem transferir domínio interno.

Motivo
Permitir herança, autorização e auditoria sem acoplar o Core Platform a câmeras, portas, reservas,
tickets, dispositivos, convites ou recursos comerciais.

Impacto
O Core Platform autoriza pelo recurso referenciado. O módulo dono mantém dados completos e
executa a regra real.

Status
Aprovada

Data
2026-06-22

DEC-036: Separação entre Core Audit e Auditoria/Compliance
Tema
Auditoria base versus análise avançada.

Decisão
O Core Platform registra trilhas imutáveis de auditoria base.
O módulo Auditoria e Compliance consulta, investiga, alerta, exporta, consolida e gera relatórios
avançados de compliance.

Motivo
Evitar duplicação de auditoria e manter separação clara entre trilha base e inteligência de análise.

Impacto
A trilha nasce no Core Platform, mas a investigação, filtros, alertas, exportações e relatórios avançados ficam no módulo especializado.

Status
Substituída pela DEC-127

Data
2026-06-22

DEC-037: Core Platform como autoridade estrutural de autorização
Tema
Autorização estrutural, contexto, permissões e herança.

Decisão
O Core Platform será a autoridade estrutural única para autenticação, tenant, contexto, papéis, permissões, PermissionGrant, InheritanceGrant, ResourceReference, licenças, feature flags e emissão
de AuthorizationDecision.
Nenhum módulo comercial, incluindo Herança e Permissões, poderá criar motor paralelo de autorização estrutural.

Motivo
Evitar duplicidade de autorização, conflito entre permissões, acoplamento invisível, quebra da regra
oficial de herança e risco de acesso indevido.

Impacto
Todo módulo comercial deve consultar o Core Platform antes de permitir acesso, visualização, alteração, exportação ou execução de ação sensível.
Herança e Permissões pode configurar políticas avançadas, mas a decisão estrutural oficial deve
passar pelo Core Platform.

Status
Aprovada

Data
2026-06-22

DEC-038: Herança e Permissões como camada avançada de
governança e políticas
Tema
Governança avançada de permissões, herança, delegação e políticas.

Decisão
O módulo Herança e Permissões será responsável por governança avançada de permissões, administração de heranças, delegação, visualização, simulação, diagnóstico, políticas condicionais, políticas
de bloqueio e políticas de liberação.
Esse módulo não substitui o Core Platform, não autentica usuários, não cria tenant, não cria contexto
oficial, não emite AuthorizationDecision final fora do Core Platform e não executa regra comercial de
módulos.

Motivo
Permitir regras avançadas sem quebrar o núcleo obrigatório da plataforma.

Impacto
Políticas avançadas podem influenciar a autorização estrutural, desde que sejam registradas ou consumidas por contrato oficial pelo Core Platform.
A execução final continua pertencendo ao módulo comercial dono do recurso.
Regra operacional:
Política influencia.
Core decide.
Módulo dono executa.
Auditoria registra.

Status
Aprovada

Data
2026-06-22

DEC-039: Separação entre UserAccount, PersonProfile e ClientProfile
Tema
Fronteira entre Core Platform e Pessoas e Clientes.

Decisão
UserAccount pertence ao Core Platform e representa a conta técnica de acesso, autenticação, sessão,
segurança e vínculo técnico com contextos.
PersonProfile pertence ao módulo Pessoas e Clientes e representa a pessoa real, seus dados pessoais,
documentos, contatos, foto, consentimentos e histórico cadastral.
ClientProfile pertence ao módulo Pessoas e Clientes e representa a pessoa como cliente, usuário final
ou pessoa vinculada dentro de uma organização, unidade, bloco, área, ambiente ou contexto.

Motivo
Evitar acoplamento entre autenticação, cadastro pessoal e papel operacional de cliente.
Garantir login individual por pessoa, múltiplos contextos, LGPD, auditoria e modularidade.

Impacto
O Core Platform não poderá assumir cadastro completo de pessoa ou cliente.
Pessoas e Clientes não poderá recriar autenticação, sessão, senha, MFA ou permissões globais.
Módulos comerciais deverão consumir dados por APIs públicas internas, eventos, contratos ou read
models autorizados.
Credenciais deverão ser separadas entre:
  • Credencial de login: Core Platform.
  • Credencial de identidade pessoal: Pessoas e Clientes.
  • Credencial de acesso físico: Controle de Acesso.

Status
Aprovada

Data
2026-06-22

DEC-040: Separação entre dependente, prestador recorrente
e visitante temporário
Tema
Fronteira entre Pessoas e Clientes e Convites e Visitantes.

Decisão
Dependentes e prestadores recorrentes autorizados pertencem ao módulo Pessoas e Clientes quando
forem pessoas cadastradas com vínculo contínuo a uma pessoa, unidade, organização ou contexto.
Visitantes temporários, delivery, acompanhantes eventuais, convite único, convite recorrente operacional, check-in e check-out pertencem ao módulo Convites e Visitantes.

Motivo
Evitar duplicidade entre cadastro permanente de pessoas e fluxo temporário de visitação.

Impacto
Convites e Visitantes não deve virar cadastro primário de pessoa.
Pessoas e Clientes não deve assumir check-in/check-out, QR temporário ou fluxo completo de visitação.

Status
Aprovada

Data
2026-06-22

DEC-041: Separação entre consentimento biométrico e credencial física biométrica
Tema
Fronteira entre Pessoas e Clientes, Segurança e LGPD e Controle de Acesso.

Decisão
Pessoas e Clientes gerencia consentimento, finalidade e referência cadastral ligada à pessoa.
Controle de Acesso gerencia credencial física operacional, como facial, RFID, PIN ou QR.
Segurança e LGPD define políticas de tratamento, retenção, anonimização e auditoria.

Motivo
Evitar que biometria fique espalhada entre módulos sem dono claro.

Impacto
Nenhum módulo deve usar biometria sem consentimento, finalidade, política e auditoria.

Status
Aprovada

Data
2026-06-22

DEC-042: Separação entre estrutura física e vínculo pessoal
Tema
Fronteira entre Unidades, Blocos, Áreas e Ambientes e Pessoas e Clientes.

Decisão
Unidades, Blocos, Áreas e Ambientes é dono da estrutura física oficial.
Pessoas e Clientes é dono das pessoas, clientes contextuais e vínculos pessoais com a estrutura,
incluindo PersonUnitLink.

Motivo
Evitar que unidade vire cadastro de pessoa, login compartilhado ou perfil de cliente.

Impacto
Unit, Block, Area e Environment permanecem no módulo de estrutura física.
PersonProfile, ClientProfile, ResponsiblePerson, Dependente, Prestador autorizado e PersonUnitLink
permanecem em Pessoas e Clientes.

Status
Aprovada

Data
2026-06-22

DEC-043: ResourceReference estrutural sem transferência de
domínio ao Core
Tema
Fronteira entre Core Platform e módulos donos de domínio.

Decisão
O Core Platform pode manter ResourceReference de unidades, blocos, áreas, ambientes e recursos
associados para fins de contexto, autorização, herança e auditoria, sem assumir o cadastro completo
desses domínios.

Motivo
Permitir autorização central sem transformar o Core Platform em cadastro universal.

Impacto
O Core Platform guarda referência mínima. O módulo dono mantém dados completos, regras e ciclo
de vida do recurso.

Status
Aprovada

Data
2026-06-22

DEC-044: Estrutura física como alvo de herança, não como motor de permissão
Tema
Fronteira entre Unidades, Herança e Permissões e Core Platform.

Decisão
Unidades, blocos, áreas e ambientes podem receber recursos herdáveis, mas não executam motor
de permissão, política avançada ou AuthorizationDecision final.

Motivo
Evitar motor paralelo ao Core Platform e evitar sobreposição com Herança e Permissões.

Impacto
O módulo de estrutura física publica e expõe estruturas.
Herança e Permissões governa políticas avançadas.
Core Platform decide autorização estrutural.
Módulo dono executa a ação.

Status
Aprovada

Data
2026-06-22

DEC-045: Associação física não transfere posse operacional
do recurso
Tema
Fronteira entre estrutura física e módulos comerciais.

Decisão
Associar câmera, porta, dispositivo, recurso reservável ou convite a uma unidade, bloco, área ou
ambiente não transfere o domínio operacional para o módulo de Unidades.

Motivo
Evitar que Unidades execute stream, abertura de porta, diagnóstico de dispositivo, reserva ou fluxo
de visitação.

Impacto
Câmeras/VMS, Controle de Acesso, Dispositivos, Reservas e Convites continuam donos de suas regras
operacionais.

Status
Aprovada

Data
2026-06-22

DEC-046: Organização como cadastro operacional do espaço físico conectado
Tema
Fronteira entre Organizações, Core Platform e Parceiros.

Decisão
OrganizationRecord e OrganizationProfile pertencem ao módulo Organizações e representam o cadastro operacional e institucional do espaço físico conectado.

Tenant e Context pertencem ao Core Platform.

Parceiro pode criar e administrar organizações apenas por fluxo autorizado, respeitando escopo, licença, contexto e autorização do Core Platform.

Organizações sempre referencia tenant_id, context_id e partner_id, mas não assume o domínio dessas entidades.

Motivo
Evitar que Organizações substitua tenancy, contexto, identidade técnica, autorização estrutural ou governança do Parceiro.

Impacto
O módulo Organizações passa a ser reconhecido como dono do cadastro operacional e institucional do espaço físico conectado.

O Core Platform permanece como fonte única de Tenant, Context, UserAccount, autorização estrutural, licenças, feature flags, auditoria base e event bus.

O módulo Parceiros continua responsável por vender, implantar, acompanhar e administrar organizações dentro do escopo autorizado.

Status
Aprovada

Data
2026-06-22

DEC-047: OrganizationModuleAvailability como read model autorizado
Tema
Fronteira entre Organizações, licenças, módulos, entitlements e feature flags.

Decisão
OrganizationModuleAvailability pertence ao módulo Organizações apenas como read model autorizado.

A fonte oficial de módulos, planos, licenças, entitlements, feature flags e autorização estrutural permanece no Core Platform e na governança Master/Parceiro conforme contrato.

Organizações pode exibir módulos disponíveis por organização, mas não decide ativação, desativação, licença, plano, feature flag, entitlement ou permissão final.

Motivo
Evitar que Organizações vire catálogo de módulos, motor de licenciamento, central de feature flags ou camada paralela de autorização.

Impacto
A interface de Organização pode refletir a disponibilidade operacional de módulos, mas sempre baseada em dados autorizados pelo Core Platform.

Qualquer ativação, desativação, bloqueio, liberação ou alteração de disponibilidade deve respeitar Core Platform, contrato, licença, permissões, escopo de Parceiro e governança Master.

Status
Aprovada

Data
2026-06-22

DEC-048: Organização não executa regra operacional de módulos comerciais
Tema
Separação entre Organizações e módulos donos de recursos.

Decisão
Organizações não executa cobranças, bloqueios financeiros, abertura de portas, revogação de credenciais, visualização de câmeras, stream, mosaico, playback, reservas, convites, tickets, alarmes, automações operacionais, notificações multicanal ou relatórios avançados de BI.

Cada módulo dono executa sua própria regra por contrato, evento, API interna, webhook ou read model autorizado.

Organizações atua como cadastro operacional e institucional do espaço físico conectado, exibindo referências e resumos autorizados sem assumir a operação dos recursos.

Motivo
Preservar modularidade, evitar acoplamento e impedir que Organizações se transforme em módulo universal.

Impacto
Financeiro continua dono de cobranças.
Controle de Acesso continua dono de portas, portões, credenciais e abertura remota.
Câmeras / VMS continua dono de live view, mosaico, playback, clipes e evidências.
Reservas continua dono de agenda, disponibilidade, reserva, cancelamento, check-in e no-show.
Convites e Visitantes continua dono de convites, QR temporário, visitantes, check-in e check-out.
Tickets continua dono de chamados, SLA, atendimento e resolução.
Alarmes continua dono de arme, desarme, sensores, setores, disparos e alertas.
Notificações continua dono de push, e-mail, SMS, WhatsApp, templates e logs de envio.
Relatórios / BI continua dono de dashboards avançados, indicadores, análises e exportações.
Automações continua dono de workflows, gatilhos, condições e ações autorizadas.

Status
Aprovada

Data
2026-06-22

DEC-049: Parceiro como domínio operacional autorizado
Tema
Fronteira do módulo Parceiros.

Decisão
O módulo Parceiros representa o domínio operacional do parceiro autorizado pelo Master para vender, implantar, configurar, cadastrar gateways e dispositivos por fluxos autorizados, administrar e acompanhar organizações abaixo dele, sempre dentro de escopo, contrato, licença, contexto, permissão e AuthorizationDecision do Core Platform.

Parceiros não substitui Master, Core Platform, Organizações, Gateway Local / Mikrotik / Tunnel, Dispositivos, White-label, Financeiro, Suporte e Operação ou módulos comerciais.

Motivo
Evitar que Parceiros se transforme em centro universal de governança, licenciamento, suporte, cobrança, identidade, dispositivo, gateway e execução operacional.

Impacto
PartnerRecord e PartnerProfile passam a ser reconhecidos como entidades próprias de Parceiros, mas Tenant, Context, UserAccount, License, FeatureFlag e AuthorizationDecision permanecem no Core Platform.

Status
Aprovada

Data
2026-06-22

DEC-050: Visões autorizadas de plano, licença, módulos e white-label em Parceiros
Tema
Fronteira entre Parceiros, Core Platform, Master, licenciamento e White-label.

Decisão
PartnerModuleAvailability, PartnerLicenseView, PartnerPlanView e PartnerWhiteLabelPermission pertencem ao módulo Parceiros apenas como read models autorizados.

A fonte oficial de módulos, planos, licenças, entitlements, feature flags e autorização estrutural permanece no Core Platform, sob governança superior do Master.

Motivo
Evitar motor paralelo de licença, módulo, plano, entitlement, feature flag e white-label dentro de Parceiros.

Impacto
Parceiros pode exibir e operar disponibilidade dentro do escopo, mas não decide licença, plano, feature flag ou autorização final como fonte oficial.

Status
Aprovada

Data
2026-06-22

DEC-051: Parceiros cadastra dispositivos por fluxo autorizado do módulo Dispositivos
Tema
Fronteira entre Parceiros e Dispositivos.

Decisão
O Parceiro pode criar, cadastrar, instalar, associar, configurar inicialmente, substituir, remover por fluxo autorizado e acompanhar dispositivos das organizações abaixo dele, pois é o integrador responsável pela implantação física.

O módulo Dispositivos permanece como domínio técnico oficial de DeviceRecord, marca, modelo, tipo, saúde, status, diagnóstico, última comunicação, associação com gateway, associação com organização e localização técnica por referência.

Motivo
Permitir que o Parceiro execute sua função real de integrador sem criar cadastro paralelo de equipamentos.

Impacto
Parceiros terá telas e permissões para cadastro operacional de dispositivos, usando contratos, APIs e eventos do módulo Dispositivos. Dispositivos continua sendo a fonte oficial do equipamento.

Status
Aprovada

Data
2026-06-22

DEC-052: Parceiros cadastra gateway por fluxo autorizado do módulo Gateway
Tema
Fronteira entre Parceiros e Gateway Local / Mikrotik / Tunnel.

Decisão
O Parceiro pode instalar, cadastrar, configurar inicialmente e acompanhar gateways locais das organizações abaixo dele por fluxo autorizado.

O módulo Gateway Local / Mikrotik / Tunnel permanece como domínio técnico oficial de GatewayRecord, tunnel, rotas, conectividade, latência, diagnóstico remoto e logs técnicos.

Motivo
Separar a função operacional de campo do Parceiro da posse técnica do domínio Gateway.

Impacto
Parceiros pode conduzir implantação de gateway, mas não cria motor paralelo de tunnel, rotas ou diagnóstico.

Status
Aprovada

Data
2026-06-22

DEC-053: Parceiros não executa regra operacional de módulos comerciais
Tema
Separação entre Parceiros e módulos donos de recursos.

Decisão
Parceiros não executa regra operacional de Controle de Acesso, Câmeras / VMS, Alarmes, Financeiro, Convites e Visitantes, Tickets, Reservas, Mural Informativo, Relatórios / BI, Notificações ou Automações.

Parceiros pode visualizar, solicitar, configurar dentro do escopo permitido, acompanhar ou navegar para os módulos especialistas.

Motivo
Preservar modularidade e impedir acoplamento operacional.

Impacto
Cada módulo dono continua executando sua própria regra por API interna, evento, contrato, webhook ou read model autorizado.

Status
Aprovada

Data
2026-06-22

DEC-054: Gateway Local / Mikrotik / Tunnel como domínio técnico de conectividade local
Tema
Fronteira do módulo Gateway Local / Mikrotik / Tunnel.

Decisão
Gateway Local / Mikrotik / Tunnel é o domínio técnico oficial de GatewayRecord, GatewayAgent, GatewayCredential, GatewaySecret, TunnelSession, TunnelEndpoint, LocalRoute, RemoteRoute, GatewayHealth, GatewayDiagnostic, GatewayCommand, GatewayLog, GatewayConnectivityState e GatewaySyncState.

Motivo
Evitar que Core Platform, Parceiros, Organizações, Dispositivos ou módulos comerciais assumam conectividade local, tunnel, rotas, comunicação técnica e diagnóstico remoto.

Impacto
Parceiros pode instalar e cadastrar gateway por fluxo autorizado.
Organizações pode exibir resumo autorizado.
Dispositivos pode associar equipamentos por referência e consumir reachability.
Módulos comerciais podem usar o Gateway por contrato, API interna, evento ou read model autorizado.
O Gateway permanece dono da conectividade técnica.

Status
Aprovada

Data
2026-06-23

DEC-055: Gateway não executa regra operacional de módulos comerciais
Tema
Separação entre Gateway e módulos donos de recursos.

Decisão
Gateway não abre portas por conta própria, não decide acesso, não vira VMS, não executa alarme comercial, não executa automação operacional e não substitui módulos comerciais.

Motivo
Preservar modularidade e impedir acoplamento operacional entre conectividade técnica e regra de negócio dos módulos donos dos recursos.

Impacto
Controle de Acesso, Câmeras / VMS, Alarmes, Automações e demais módulos comerciais continuam donos de suas regras operacionais.
Gateway apenas transporta comunicação técnica autorizada, publica eventos técnicos e executa comandos técnicos dentro de escopo autorizado.

Status
Aprovada

Data
2026-06-23

DEC-056: GatewayAuthorizationScope obrigatório para ações técnicas sensíveis
Tema
Autorização técnica de tunnel, rotas, diagnóstico e comandos.

Decisão
Toda ação sensível do Gateway deve respeitar GatewayAuthorizationScope vinculado a tenant, contexto, organização, parceiro, recurso, rota, comando, tempo de validade e AuthorizationDecision do Core Platform.

Motivo
Evitar acesso remoto indevido, exposição de rede local, comandos fora de escopo, violação de tenant/contexto e uso invisível de conectividade técnica.

Impacto
Diagnóstico remoto, comandos técnicos, abertura de sessão, alteração de rota, rotação de credencial, revogação de credencial, acesso remoto e leitura sensível da rede local exigem autorização estrutural, escopo mínimo, validade temporal e auditoria.

Status
Aprovada

Data
2026-06-23

DEC-057: GatewayDeviceDiscovery não é DeviceRecord
Tema
Fronteira entre Gateway e Dispositivos.

Decisão
GatewayDeviceDiscovery representa descoberta técnica temporária, confirmável ou expirada.
DeviceRecord permanece no módulo Dispositivos como fonte oficial do equipamento.

Motivo
Evitar cadastro paralelo de equipamentos dentro do Gateway e preservar o módulo Dispositivos como domínio técnico oficial de equipamentos físicos.

Impacto
Gateway pode descobrir equipamentos, testar reachability e publicar achados técnicos.
Dispositivos cadastra, governa saúde, status, diagnóstico, última comunicação, localização técnica e ciclo de vida do equipamento.

Status
Aprovada

Data
2026-06-23

DEC-058: Dispositivos como domínio técnico oficial dos equipamentos físicos
Tema
Fronteira do módulo Dispositivos.

Decisão
Dispositivos é o domínio técnico oficial dos equipamentos físicos integrados à plataforma.

Dispositivos governa DeviceRecord, DeviceReference, identidade técnica, tipo, categoria, marca, modelo, serial, firmware, protocolo, conectividade, credenciais técnicas, segredos, saúde, status, diagnóstico, última comunicação, telemetria, ciclo de vida, vínculos com organização, gateway e estrutura física, manutenção, substituição, alertas, logs técnicos e adaptadores de integração.

Motivo
Evitar que Parceiros, Organizações, Gateway Local / Mikrotik / Tunnel, Controle de Acesso, Câmeras / VMS, Alarmes ou Automações mantenham cadastro técnico paralelo de equipamentos.

Impacto
Módulos comerciais usam DeviceReference, mas não assumem DeviceRecord.

Gateway descobre e conecta, mas não cria cadastro oficial do equipamento.

Parceiros instala e cadastra por fluxo autorizado, mas não governa o domínio técnico do equipamento.

Organizações exibe apenas resumo autorizado.

Status
Aprovada

Data
2026-06-23

DEC-059: DeviceAuthorizationScope obrigatório para ações técnicas sensíveis
Tema
Segurança, autorização e ações técnicas em dispositivos.

Decisão
Toda ação técnica sensível em dispositivo deve exigir DeviceAuthorizationScope e AuthorizationDecision do Core Platform.

Isso inclui cadastro, alteração, diagnóstico, comando técnico, atualização de firmware, rotação de credencial, alteração de segredo, associação com organização, associação com gateway, associação com estrutura física, remoção, substituição, exportação de logs técnicos e acesso a IPs, MACs, seriais, credenciais ou metadados sensíveis.

Motivo
Proteger equipamentos, credenciais técnicas, segredos, identificadores únicos, redes locais, dados sensíveis e ações críticas contra uso fora de contexto.

Impacto
Dispositivos não decide autorização final.

Core Platform emite AuthorizationDecision.

Dispositivos executa apenas a ação técnica autorizada.

Auditoria registra a trilha crítica.

Status
Aprovada

Data
2026-06-23

DEC-060: Descoberta técnica não é cadastro oficial de dispositivo
Tema
Fronteira entre Gateway Local / Mikrotik / Tunnel e Dispositivos.

Decisão
GatewayDeviceDiscovery e DeviceDiscoveryCandidate não são DeviceRecord.

Uma descoberta técnica só vira DeviceRecord após validação, autorização, avaliação de duplicidade, vínculo correto e promoção pelo módulo Dispositivos.

Motivo
Evitar que varreduras de rede, descobertas automáticas ou reachability técnico criem dispositivos oficiais sem escopo, licença, autorização ou revisão.

Impacto
Gateway pode descobrir equipamentos e testar reachability.

Dispositivos avalia candidatos e cria DeviceRecord oficial.

Parceiro valida quando necessário por fluxo autorizado.

Core Platform autoriza.

Auditoria registra.

Status
Aprovada

Data
2026-06-23

DEC-061: Dispositivos não executa regra operacional de módulos comerciais
Tema
Separação entre equipamento técnico e recurso operacional.

Decisão
Dispositivos não abre portas, não libera catracas, não gera QR Code de acesso, não executa facial operacional, não exibe live view, não executa playback, não monta mosaico, não cria clipes ou evidências, não arma ou desarma alarmes, não processa evento operacional de alarme e não executa workflows de automação.

Motivo
Preservar a modularidade e impedir que Dispositivos substitua Controle de Acesso, Câmeras / VMS, Alarmes ou Automações.

Impacto
Controle de Acesso, Câmeras / VMS, Alarmes e Automações usam DeviceReference, eventos e contratos autorizados, mantendo seus próprios domínios.

DeviceCommandRequest fica limitado a comandos técnicos.

Ação operacional pertence ao módulo dono do recurso.

Status
Aprovada

Data
2026-06-23

DEC-062: Controle de Acesso como domínio operacional de acesso físico
Tema
Fronteira do módulo Controle de Acesso.

Decisão
Controle de Acesso representa o domínio operacional de acesso físico. Ele é dono de AccessPoint, Door, Gate, Turnstile, AccessZone, AccessCredential, PhysicalAccessCredential, TemporaryAccessCredential, AccessRule, AccessPolicyBinding, AccessSchedule, AccessPass, AccessAttempt, AccessEvent, AccessGrant, AccessDeny, AccessBlock, AccessUnblock, AccessRestriction, RemoteUnlock, AntipassbackState, AccessAuthorizationScope, AccessExecutionRequest, AccessExecutionResult, AccessDeviceBinding, AccessSyncState e AccessOfflinePolicy.

Motivo
Evitar que Controle de Acesso invada Core Platform, Pessoas e Clientes, Convites e Visitantes, Unidades, Gateway, Dispositivos, Câmeras, Alarmes, Financeiro, Reservas, Segurança e LGPD ou Auditoria e Compliance.

Impacto
O módulo passa a ser reconhecido como dono da operação física de acesso, sem assumir identidade, estrutura, pessoa, dispositivo, gateway, visita, reserva, financeiro ou autorização estrutural.

Status
Aprovada

Data
2026-06-23

DEC-063: AccessPoint não é DeviceRecord nem StructureReference
Tema
Separação entre ponto de acesso, equipamento e localização física.

Decisão
AccessPoint pertence ao Controle de Acesso e representa o recurso operacional de acesso físico. DeviceRecord pertence a Dispositivos e representa o equipamento técnico. Unit, Block, Area e Environment pertencem a Unidades, Blocos, Áreas e Ambientes e representam a estrutura física oficial.

Motivo
Evitar que Controle de Acesso vire cadastro técnico de hardware ou cadastro de estrutura física.

Impacto
AccessPoint pode referenciar DeviceReference e StructureReference, mas não assume domínio desses módulos.

Status
Aprovada

Data
2026-06-23

DEC-064: AccessCredential como credencial física operacional
Tema
Separação entre login, pessoa, consentimento e credencial física.

Decisão
AccessCredential pertence ao Controle de Acesso e representa credenciais físicas operacionais, incluindo FaceCredential, RfidCredential, PinCredential, QrCredential e TemporaryAccessCredential. UserAccount permanece no Core Platform. PersonProfile e ClientProfile permanecem em Pessoas e Clientes. BiometricConsent permanece sob Pessoas e Clientes e Segurança e LGPD conforme política.

Motivo
Evitar duplicidade entre identidade técnica, cadastro humano, consentimento e execução física de acesso.

Impacto
Controle de Acesso pode consumir referências autorizadas de pessoa, cliente, vínculo e consentimento, mas não assume esses domínios.

Status
Aprovada

Data
2026-06-23

DEC-065: AccessAuthorizationScope obrigatório para ações sensíveis de acesso
Tema
Segurança operacional do acesso físico.

Decisão
Toda ação sensível de Controle de Acesso deve possuir AuthorizationDecision do Core Platform e AccessAuthorizationScope válido, limitando tenant, contexto, organização, ator, sujeito, ponto de acesso, credencial, ação, motivo, validade temporal, risco e auditoria.

Motivo
Evitar abertura de porta, revogação de credencial, bloqueio, liberação, exportação de logs ou remoção biométrica fora de escopo.

Impacto
Ações sensíveis de acesso físico ficam rastreáveis, autorizadas e limitadas.

Status
Aprovada

Data
2026-06-23

DEC-066: AccessOfflinePolicy obrigatório para modo offline
Tema
Acesso físico em falha de cloud, gateway ou dispositivo.

Decisão
Qualquer funcionamento offline do Controle de Acesso deve ser governado por AccessOfflinePolicy, com escopo, validade, tipos de credenciais permitidas, nível de risco, sincronização posterior e auditoria.

Motivo
Evitar que o modo offline vire bypass de segurança ou acesso fora de contexto.

Impacto
Acesso offline passa a ser controlado, auditável e limitado.

Status
Aprovada

Data
2026-06-23

DEC-067: Eventos de acesso podem gerar evidência, mas evidência pertence ao VMS
Tema
Fronteira entre Controle de Acesso e Câmeras / VMS.

Decisão
Controle de Acesso publica eventos como AccessGranted, AccessDenied, DoorForced e DoorHeldOpen. Câmeras / VMS consome esses eventos por contrato autorizado e cria CameraClip ou CameraEvidence. Controle de Acesso não cria live view, stream, playback, mosaico, clipe ou evidência como domínio próprio.

Motivo
Evitar que Controle de Acesso substitua Câmeras / VMS.

Impacto
A correlação entre acesso e vídeo fica modular e auditável.

Status
Aprovada

Data
2026-06-23

Fronteira de Controle de Acesso consolidada nesta versão:
Controle de Acesso representa o domínio operacional de acesso físico da plataforma.

Controle de Acesso governa AccessPoint, Door, Gate, Turnstile, AccessZone, AccessCredential, PhysicalAccessCredential, TemporaryAccessCredential, AccessRule, AccessPolicyBinding, AccessSchedule, AccessPass, AccessAttempt, AccessEvent, AccessGrant, AccessDeny, AccessBlock, AccessUnblock, AccessRestriction, RemoteUnlock, AntipassbackState, AccessAuthorizationScope, AccessExecutionRequest, AccessExecutionResult, AccessDeviceBinding, AccessSyncState e AccessOfflinePolicy.

Controle de Acesso não substitui Core Platform, Herança e Permissões, Pessoas e Clientes, Convites e Visitantes, Unidades, Organizações, Parceiros, Gateway Local / Mikrotik / Tunnel, Dispositivos, Câmeras / VMS, Alarmes, Financeiro, Reservas, Segurança e LGPD, Auditoria e Compliance ou módulos comerciais.

AccessPoint não é DeviceRecord nem StructureReference. AccessCredential não é UserAccount, PersonProfile, ClientProfile ou BiometricConsent. Toda ação sensível exige AuthorizationDecision do Core Platform e AccessAuthorizationScope. Modo offline exige AccessOfflinePolicy. Eventos de acesso podem gerar evidência, mas evidência pertence ao VMS.

Frase operacional consolidada de Controle de Acesso:
Core autoriza. Herança governa política. Pessoas identifica. Convites temporizam visitas. Reservas temporizam recursos. Financeiro informa status. Unidades localiza. Dispositivos representam equipamentos. Gateway transporta. Controle de Acesso executa a passagem física. Auditoria registra.

DEC-068: Câmeras / VMS como domínio operacional de vídeo
Tema
Fronteira do módulo Câmeras / VMS.

Decisão
Câmeras / VMS representa o domínio operacional de vídeo da plataforma. O módulo é dono de CameraResource, CameraChannel, CameraStream, CameraLiveView, CameraViewSession, CameraMosaic, CameraLayout, CameraPlayback, CameraTimeline, CameraClip, CameraSnapshot, CameraEvidence, VideoEvidenceRequest, EventVideoCorrelation, CameraRecordingPolicy, CameraRetentionExecutionPolicy, CameraPermissionScope, CameraAuthorizationScope, VideoViewExecutionResult, VideoExportRequest, VideoExportPackage, VideoShareLink, VideoWatermark, VideoMaskingRequest, VideoPrivacyZone, CameraDeviceBinding, CameraCoverageArea, CameraAreaReference, CameraGatewayRouteReference, CameraStreamProxySession e CameraAuditTrail.

Motivo
Evitar que Câmeras / VMS seja tratado como simples detalhe de Dispositivos, Gateway, Controle de Acesso ou Organizações. O vídeo possui domínio operacional próprio, com visualização, playback, evidência, exportação, retenção, privacidade e auditoria.

Impacto
O módulo Câmeras / VMS passa a ser reconhecido como dono da experiência operacional de vídeo, mantendo Dispositivos como dono do equipamento, Gateway como dono da conectividade técnica, Core como autoridade de autorização estrutural e Segurança e LGPD como camada de políticas avançadas de privacidade.

Status
Aprovada

Data
2026-06-23

DEC-069: CameraResource não é DeviceRecord
Tema
Separação entre recurso operacional de vídeo e equipamento técnico.

Decisão
CameraResource pertence ao módulo Câmeras / VMS e representa o recurso operacional de vídeo. DeviceRecord pertence ao módulo Dispositivos e representa o equipamento físico técnico, como câmera, DVR, NVR, encoder, video porteiro ou stream box.

Motivo
Evitar cadastro técnico paralelo de câmeras dentro do VMS e impedir que Dispositivos assuma live view, playback, mosaico, clipes ou evidências.

Impacto
Câmeras / VMS usa DeviceReference e CameraDeviceBinding para transformar equipamento autorizado em recurso operacional de vídeo, sem assumir marca, modelo, firmware, saúde, diagnóstico ou credenciais técnicas oficiais.

Status
Aprovada

Data
2026-06-23

DEC-070: Toda ação sensível de vídeo exige AuthorizationDecision do Core
Tema
Autorização estrutural em ações de vídeo.

Decisão
Toda ação sensível de Câmeras / VMS deve possuir AuthorizationDecision do Core Platform e CameraAuthorizationScope válido. Isso inclui live view, playback, visualização de câmera sensível, criação de clipe, snapshot, evidência, exportação, download, compartilhamento, link, alteração de retenção, máscara, zona de privacidade e correlação de vídeo com evento externo.

Motivo
Evitar visualização indevida de imagens, exportação não autorizada, exposição de áreas sensíveis e bypass de tenant, contexto, herança ou licença.

Impacto
Ações de vídeo ficam rastreáveis, autorizadas, limitadas por escopo, auditáveis e compatíveis com LGPD.

Status
Aprovada

Data
2026-06-23

DEC-071: Gateway transporta vídeo, mas não é VMS
Tema
Fronteira entre Gateway Local / Mikrotik / Tunnel e Câmeras / VMS.

Decisão
Gateway Local / Mikrotik / Tunnel pode viabilizar rota segura, tunnel, proxy autorizado, reachability e transporte técnico para streams locais, NVRs, DVRs, RTSP, ONVIF e câmeras IP. Contudo, Gateway não é dono de live view, stream operacional, mosaico, playback, clipe, evidência, retenção, exportação ou permissão de visualização.

Motivo
Evitar que o domínio de conectividade local vire VMS e misture transporte técnico com regra operacional de vídeo.

Impacto
Câmeras / VMS solicita visualização, playback ou evidência autorizada. Core autoriza. Gateway transporta quando necessário. Dispositivos representa o equipamento. Câmeras / VMS entrega a experiência de vídeo.

Status
Aprovada

Data
2026-06-23

DEC-072: Eventos externos podem gerar evidência de vídeo sem transferir domínio
Tema
Correlação entre vídeo e eventos de outros módulos.

Decisão
Eventos de Controle de Acesso, Alarmes, Convites e Visitantes, Reservas, Dispositivos, Gateway, Automações ou outros módulos podem gerar VideoEvidenceRequest, CameraClip, CameraSnapshot, CameraEvidence ou EventVideoCorrelation por contrato autorizado. O evento original permanece no módulo dono e a evidência de vídeo pertence a Câmeras / VMS.

Motivo
Permitir correlação operacional rica sem acoplamento e sem transferência de domínio entre módulos.

Impacto
AccessEvent continua no Controle de Acesso. AlarmEvent continua em Alarmes. Reservation e VisitorInvite continuam em seus módulos. Câmeras / VMS cria e governa evidência de vídeo associada por referência, finalidade, autorização e auditoria.

Status
Aprovada

Data
2026-06-23

DEC-073: Exportação e compartilhamento de vídeo exigem finalidade, proteção e auditoria
Tema
Segurança, LGPD e cadeia de custódia de vídeo.

Decisão
Toda exportação, download, pacote de vídeo, link de compartilhamento, evidência compartilhada, snapshot exportado ou clipe enviado deve possuir finalidade, autorização, escopo, proteção, validade, auditoria e, quando aplicável, watermark, mascaramento, hash e cadeia de custódia.

Motivo
Vídeo pode conter dados pessoais, áreas sensíveis, rostos, placas, crianças, visitantes, funcionários, prestadores, dados de circulação e evidências críticas.

Impacto
VideoExportRequest, VideoExportPackage e VideoShareLink devem ser protegidos, expiráveis, revogáveis e auditáveis. Links públicos irrestritos são proibidos. Segurança e LGPD governa políticas avançadas; Câmeras / VMS executa operacionalmente dentro do escopo autorizado.

Status
Aprovada

Data
2026-06-23

Fronteira de Câmeras / VMS consolidada nesta versão:
Câmeras / VMS representa o domínio operacional de vídeo da plataforma.

Câmeras / VMS governa CameraResource, CameraChannel, CameraStream, CameraLiveView, CameraViewSession, CameraMosaic, CameraLayout, CameraPlayback, CameraTimeline, CameraClip, CameraSnapshot, CameraEvidence, VideoEvidenceRequest, EventVideoCorrelation, CameraRecordingPolicy, CameraRetentionExecutionPolicy, CameraPermissionScope, CameraAuthorizationScope, VideoViewExecutionResult, VideoExportRequest, VideoExportPackage, VideoShareLink, VideoWatermark, VideoMaskingRequest, VideoPrivacyZone, CameraDeviceBinding, CameraCoverageArea, CameraAreaReference, CameraGatewayRouteReference, CameraStreamProxySession e CameraAuditTrail.

Câmeras / VMS não substitui Core Platform, Herança e Permissões, Pessoas e Clientes, Unidades, Organizações, Parceiros, Gateway Local / Mikrotik / Tunnel, Dispositivos, Controle de Acesso, Alarmes, Convites e Visitantes, Reservas, Financeiro, Notificações, Segurança e LGPD, Auditoria e Compliance ou módulos comerciais.

CameraResource não é DeviceRecord. Gateway transporta vídeo, mas não é VMS. Eventos externos podem gerar evidência de vídeo sem transferir domínio. Toda ação sensível de vídeo exige AuthorizationDecision do Core e CameraAuthorizationScope. Exportação e compartilhamento exigem finalidade, proteção e auditoria.

Frase operacional consolidada de Câmeras / VMS:
Câmeras / VMS governa vídeo. Dispositivos governam equipamentos. Gateway conecta. Core autoriza. Herança governa políticas. Segurança e LGPD protege. Auditoria registra.

DEC-074: Alarmes como domínio operacional de alarme
Tema
Fronteira do módulo Alarmes.

Decisão
Alarmes representa o domínio operacional de arme, desarme, setores, zonas, sensores operacionais, pânico, disparos, reconhecimento, silenciamento, reset, escalonamento, incidentes, planos de resposta e histórico operacional.

Motivo
Evitar que Dispositivos, Gateway, Controle de Acesso, Câmeras / VMS, Organizações ou Parceiros assumam regra operacional de alarme.

Impacto
Alarmes passa a ser o módulo dono da operação de alarme, enquanto equipamentos permanecem em Dispositivos e conectividade permanece em Gateway.

Status
Aprovada

Data
2026-06-23

DEC-075: AlarmResource não é DeviceRecord
Tema
Fronteira entre Alarmes e Dispositivos.

Decisão
AlarmResource representa o recurso operacional de alarme. DeviceRecord permanece no módulo Dispositivos como fonte oficial do equipamento físico.

Motivo
Evitar cadastro paralelo de centrais, sensores, sirenes, teclados, botões de pânico, comunicadores e módulos PGM dentro de Alarmes.

Impacto
Alarmes usa DeviceReference, AlarmDeviceBinding e contratos autorizados. Dispositivos governa equipamento, saúde, diagnóstico, credenciais técnicas e ciclo de vida.

Status
Aprovada

Data
2026-06-23

DEC-076: Toda ação sensível de alarme exige AuthorizationDecision do Core
Tema
Autorização de operação crítica de alarme.

Decisão
Armar, desarmar, acionar pânico, silenciar, resetar, aplicar bypass, alterar regras, alterar escalonamento, solicitar evidência, solicitar notificação crítica, solicitar ticket e executar comando remoto exigem AuthorizationDecision do Core Platform.

Motivo
Evitar bypass de contexto, permissões paralelas e risco operacional de segurança física.

Impacto
Alarmes monta AlarmAuthorizationScope, mas não autoriza sozinho. O Core Platform permanece como autoridade estrutural de autorização.

Status
Aprovada

Data
2026-06-23

DEC-077: Gateway transporta sinal e comando de alarme, mas não é Alarmes
Tema
Fronteira entre Alarmes e Gateway Local / Mikrotik / Tunnel.

Decisão
Gateway pode transportar comandos e sinais técnicos de alarme por rotas, tunnel e contratos autorizados, mas não arma, desarma, silencia, reconhece, escala ou resolve alarmes como domínio próprio.

Motivo
Separar conectividade técnica de operação de alarme.

Impacto
Gateway continua responsável pela conectividade local, rotas, tunnel e transporte técnico. Alarmes continua responsável pela operação de alarme.

Status
Aprovada

Data
2026-06-23

DEC-078: Eventos de acesso e vídeo podem se correlacionar com Alarmes sem transferir domínio
Tema
Fronteira entre Alarmes, Controle de Acesso e Câmeras / VMS.

Decisão
Eventos de Controle de Acesso podem gerar AlarmEvent por contrato autorizado. Eventos de Alarmes podem solicitar evidência ao VMS. O evento original continua pertencendo ao módulo dono.

Motivo
Permitir operação integrada sem acoplamento e sem transferência de domínio.

Impacto
Controle de Acesso mantém AccessEvent. Alarmes mantém AlarmEvent. Câmeras / VMS mantém CameraEvidence, CameraClip, CameraSnapshot e VideoEvidenceRequest como domínio de vídeo.

Status
Aprovada

Data
2026-06-23

DEC-079: AlarmOfflinePolicy obrigatório para operação offline de alarme
Tema
Tolerância a falhas e segurança operacional.

Decisão
Toda operação offline de alarme deve possuir AlarmOfflinePolicy explícita, auditável e previamente autorizada.

Motivo
Evitar desarme remoto inseguro, perda de eventos, comandos fora de contexto e lacunas de auditoria quando gateway, central ou conectividade estiver indisponível.

Impacto
Alarmes deve tratar gateway offline, dispositivo offline, central offline, buffer local, comandos pendentes e sincronização posterior com política clara.

Status
Aprovada

Data
2026-06-23

DEC-080: Histórico de pânico e eventos críticos exige proteção reforçada
Tema
Segurança, LGPD e proteção de dados críticos.

Decisão
Histórico de pânico, eventos críticos, áreas sensíveis, escalonamentos, pessoas acionadas, contatos de emergência e dados de presença indireta exigem finalidade, permissão, minimização, retenção e auditoria reforçada.

Motivo
Esses dados podem revelar vulnerabilidade, rotina, presença, risco físico ou informações sensíveis de pessoas e organizações.

Impacto
Alarmes deve consultar políticas de Segurança e LGPD e registrar acesso reforçado em ações sensíveis, visualizações, exportações, investigações e correlações com vídeo ou acesso.

Status
Aprovada

Data
2026-06-23

DEC-081: Financeiro como domínio financeiro oficial
Tema
Fronteira do módulo Financeiro.

Decisão
O módulo Financeiro é o domínio oficial de cobranças, faturamento, faturas, pagamentos, inadimplência, conciliação, contratos financeiros, assinaturas, consumo variável, rateios, repasses, comissões, split, recibos, documentos fiscais por referência, relatórios financeiros e eventos financeiros.

Motivo
Evitar motores financeiros paralelos em Parceiros, Organizações, Reservas, Tickets, Convites e Visitantes, Controle de Acesso, Câmeras / VMS, Alarmes ou qualquer outro módulo.

Impacto
Todo módulo que gerar cobrança, taxa, multa, consumo, pagamento, reembolso, comissão ou repasse deve se comunicar com o Financeiro por APIs internas, eventos, contratos, webhooks ou read models autorizados.

Status
Aprovada

Data
2026-06-23

DEC-082: Separação entre plano estrutural e contrato financeiro
Tema
Fronteira entre Core Platform, Master e Financeiro.

Decisão
Plan, License, FeatureFlag, ModuleRegistry e Entitlement pertencem ao Core Platform, sob governança superior do Master. FinancialContract, Subscription, BillingPolicy, PricingSnapshot, Invoice, Payment e PaymentReconciliation pertencem ao Financeiro.

Motivo
Evitar que Financeiro vire motor de licenciamento e evitar que Core Platform vire motor financeiro.

Impacto
Financeiro executa cobrança baseada em contratos financeiros e snapshots autorizados, sem assumir domínio estrutural de planos, licenças, feature flags ou módulos ativos.

Status
Aprovada

Data
2026-06-23

DEC-083: Eventos financeiros não executam bloqueio operacional
Tema
Financeiro, Herança e Permissões, Core Platform e módulos operacionais.

Decisão
Eventos financeiros como InvoiceOverdue, DelinquencyCreated, InvoicePaid, DelinquencyResolved, FinancialRestrictionSuggested e FinancialRestrictionRevoked podem influenciar políticas, mas não executam bloqueio ou liberação diretamente.

Motivo
Preservar a separação entre estado financeiro, avaliação de política, autorização estrutural e execução operacional.

Impacto
Controle de Acesso, Câmeras / VMS, Reservas, Alarmes e demais módulos só executam restrição ou liberação após política autorizada, AuthorizationDecision do Core Platform e contrato com o módulo dono do recurso.

Status
Aprovada

Data
2026-06-23

DEC-084: Dados financeiros sensíveis com proteção reforçada
Tema
Segurança, LGPD e dados financeiros.

Decisão
Dados financeiros, fiscais, bancários, inadimplência, comprovantes, recibos, dados de cartão tokenizados, repasses, comissões, contratos financeiros e exportações financeiras exigem finalidade, minimização, criptografia, permissão granular, mascaramento e auditoria.

Motivo
O módulo Financeiro lida com dados sensíveis, valores, documentos, inadimplência e informações de pagamento.

Impacto
Toda visualização, alteração, exportação, reembolso, estorno, desconto manual, alteração contratual ou acesso a dado financeiro sensível deve gerar trilha auditável.

Status
Aprovada

Data
2026-06-23

DEC-085: Financeiro com adaptadores plugáveis
Tema
Integrações financeiras.

Decisão
O Financeiro deve operar com adaptadores plugáveis para Pix, boleto, cartão, conciliação, split, fiscal, antifraude, banco, ERP e contabilidade, sem dependência arquitetural de fornecedor único.

Motivo
Preservar modularidade, evitar aprisionamento de fornecedor e permitir evolução das integrações financeiras.

Impacto
A plataforma poderá trocar ou adicionar gateways financeiros sem quebrar o domínio Financeiro.

Status
Aprovada

Data
2026-06-23

DEC-086: Convites e Visitantes como domínio operacional de visita temporária
Tema
Fronteira do módulo Convites e Visitantes.

Decisão
O módulo Convites e Visitantes é o domínio operacional oficial de convites, visitantes temporários, delivery, acompanhantes eventuais, prestadores temporários, convites únicos, convites recorrentes operacionais, janelas de visita, aprovações, recusas, check-in, check-out, permanência excedida, listas de convidados, solicitações de QR temporário por contrato, histórico operacional de visitação e trilha auditável de visitas.

Motivo
Evitar que Pessoas e Clientes, Organizações, Controle de Acesso, Reservas, Financeiro, Tickets ou Notificações criem fluxos paralelos de visita temporária.

Impacto
Todo fluxo de visitante temporário deve passar pelo módulo Convites e Visitantes. Pessoas e Clientes continua dono de cadastros permanentes. Controle de Acesso executa a passagem física. Financeiro cobra quando solicitado por contrato. Notificações comunica por contrato. Auditoria registra.

Status
Aprovada

Data
2026-06-23

DEC-087: Convites e Visitantes não executa acesso físico
Tema
Fronteira entre Convites e Visitantes e Controle de Acesso.

Decisão
Convites e Visitantes pode solicitar QR temporário, passe temporário, revogação de passe ou autorização temporária ao módulo Controle de Acesso, mas não cria AccessCredential, TemporaryAccessCredential, QrCredential, AccessEvent, AccessGrant, AccessDeny, RemoteUnlock ou AccessExecutionResult como domínio próprio.

Motivo
Evitar que o fluxo de visitação se transforme em motor paralelo de acesso físico.

Impacto
Convites define quem pode visitar, quando, por quem foi convidado, quem aprovou e qual destino. Controle de Acesso executa a passagem física, registra tentativas, concessões, negações e eventos físicos.

Status
Aprovada

Data
2026-06-23

DEC-088: Snapshot temporário de visitante não é PersonProfile
Tema
Fronteira entre Convites e Visitantes e Pessoas e Clientes.

Decisão
VisitorIdentitySnapshot, VisitorDocumentSnapshot, VisitorPhotoSnapshot, VisitorVehicleSnapshot, VisitorContactSnapshot e demais snapshots temporários pertencem ao módulo Convites e Visitantes apenas para registrar o estado da visita. Esses snapshots não substituem PersonProfile, ClientProfile, PersonUnitLink, DependentProfile ou ServiceProviderProfile permanente.

Motivo
Evitar que visitantes temporários, deliveries e prestadores eventuais virem cadastro permanente de pessoas sem vínculo contínuo, finalidade adequada e governança LGPD.

Impacto
Pessoas e Clientes continua dono de pessoas, clientes, dependentes, prestadores recorrentes e vínculos contínuos. Convites e Visitantes mantém dados temporários mínimos, com retenção, finalidade e auditoria.

Status
Aprovada

Data
2026-06-23

DEC-089: Convite pode se vincular a reserva sem assumir agenda
Tema
Fronteira entre Convites e Visitantes e Reservas.

Decisão
Convites e Visitantes pode manter EventGuestList, ReservationGuestList, ReservationAccessReference e convites vinculados a uma reserva, mas não cria Reservation, não calcula disponibilidade, não executa check-in de reserva, não cancela reserva e não trata no-show como domínio próprio.

Motivo
Permitir lista de convidados e visitação associada a eventos e recursos reservados sem transferir o domínio de agenda e disponibilidade para Convites.

Impacto
Reservas governa agenda, disponibilidade, reserva, cancelamento, check-in de reserva e no-show. Convites e Visitantes governa convidados, visitas, aprovação, check-in/check-out de visitante e histórico operacional da visita.

Status
Aprovada

Data
2026-06-23

DEC-090: Visitante banido exige governança LGPD
Tema
Segurança, LGPD e visitantes restritos.

Decisão
VisitorBan, VisitorWatchlistReference e restrições equivalentes exigem motivo, escopo, validade, responsável, base operacional, revisão, política de desbloqueio, retenção, autorização e auditoria. São proibidas listas informais, eternas, sem motivo, sem escopo ou expostas indevidamente ao Cliente final.

Motivo
Dados sobre visitante banido ou restrito podem revelar risco, acusação, conflito, rotina, vulnerabilidade ou informação pessoal sensível.

Impacto
Convites e Visitantes deve tratar bloqueios e listas de atenção com proteção reforçada, minimização, controle de acesso, revisão e trilha auditável, respeitando Segurança e LGPD.

Status
Aprovada

Data
2026-06-23


DEC-091: Planejamento completo em canva e sequência obrigatória de nomenclatura das decisões
Tema
Método de trabalho, prompts de módulo e governança de decisões.

Decisão
Todo prompt inicial de módulo deve informar que, quando a fronteira for aprovada e o usuário solicitar o planejamento completo, o planejamento deve ser entregue em um único CANVA FINAL, em Markdown limpo, pronto para copiar e colar.

Todo prompt inicial de módulo também deve exigir que decisões novas, regras oficiais ou nomenclaturas DEC sigam obrigatoriamente a sequência numérica do arquivo 03_DECISOES_OFICIAIS.md, sem repetir, pular, renumerar ou reaproveitar códigos já usados.

Antes de sugerir novas decisões, o chat deve identificar a última DEC oficial registrada nos documentos centrais e continuar a partir do próximo número livre.

Motivo
Evitar retrabalho, conflito de nomenclatura, duplicidade de decisões e planejamentos difíceis de transportar entre chats.

Impacto
O arquivo 04_PROMPTS_DE_TRABALHO.md deve incluir essa regra nos prompts iniciais de módulo, nos prompts de planejamento completo e nos prompts de criação de decisões oficiais.

Os módulos futuros devem entregar planejamento completo em canva copiável e respeitar a sequência oficial das decisões.

Status
Aprovada

Data
2026-06-23


# DEC-092: Tickets como domínio operacional de atendimento

## Tema
Fronteira do módulo Tickets.

## Decisão
Tickets é o domínio oficial de chamados, solicitações, ocorrências, atendimento, manutenção operacional, comunicação operacional, SLA, comentários, anexos, escalonamento, resolução e reabertura.

## Motivo
Evitar que chamados fiquem espalhados entre módulos comerciais diferentes e impedir duplicidade de ciclo de atendimento.

## Impacto
Módulos podem gerar, referenciar ou solicitar tickets, mas o ciclo de vida do chamado pertence a Tickets.

Tickets não substitui Core Platform, Herança e Permissões, Pessoas e Clientes, Unidades, Organizações, Parceiros, Gateway, Dispositivos, Controle de Acesso, Câmeras / VMS, Alarmes, Financeiro, Convites e Visitantes, Reservas, Mural Informativo, Notificações, Automações, Relatórios / BI, Segurança e LGPD ou Auditoria e Compliance.

## Status
Aprovada

## Data
2026-06-23

# DEC-093: TicketLinkedResource por referência autorizada

## Tema
Vínculo entre Tickets e recursos de outros módulos.

## Decisão
Tickets pode vincular chamados a recursos externos por TicketLinkedResource e referências tipadas, sem assumir domínio do recurso vinculado.

## Motivo
Permitir atendimento integrado sem acoplamento entre módulos.

## Impacto
Ticket pode apontar para dispositivo, gateway, câmera, acesso, alarme, cobrança, visitante, reserva, mural, unidade, organização ou parceiro.

O módulo dono mantém dados completos, regras e execução.

A associação ao ticket não transfere posse operacional do recurso.

## Status
Aprovada

## Data
2026-06-23

# DEC-094: Tickets solicita ações, mas não executa domínios externos

## Tema
Execução entre módulos.

## Decisão
Tickets pode solicitar diagnóstico, cobrança, notificação, automação, evidência ou análise a outros módulos por contrato autorizado, mas não executa diretamente a regra operacional desses módulos.

## Motivo
Preservar modularidade e impedir que Tickets vire motor universal de operação.

## Impacto
Gateway diagnostica gateway. Dispositivos diagnostica equipamento. Financeiro cobra. Notificações entrega. Câmeras / VMS mantém evidência. Controle de Acesso executa acesso. Alarmes executa alarme. Reservas executa agenda. Convites e Visitantes executa visita. Mural Informativo executa comunicado.

## Status
Aprovada

## Data
2026-06-23

# DEC-095: Separação entre Tickets e Suporte e Operação

## Tema
Fronteira entre atendimento operacional e suporte interno da plataforma.

## Decisão
Tickets governa chamados operacionais das organizações, clientes, unidades, áreas, dispositivos, manutenção, ocorrências e solicitações de uso.

Suporte e Operação governa suporte interno da plataforma SaaS, incidentes do provedor, base de conhecimento interna, sustentação do produto e atendimento técnico da operação da própria plataforma.

## Motivo
Evitar duplicidade entre ticket da organização e suporte interno da plataforma.

## Impacto
OperationalTicket pertence ao módulo Tickets.

PlatformSupportCase ou SupportOperationCase pertencem ao módulo Suporte e Operação.

Parceiros, Organizações e Clientes podem usar Tickets para atendimento operacional, mas problemas internos do provedor da plataforma pertencem a Suporte e Operação.

## Status
Aprovada

## Data
2026-06-23

# DEC-096: Proteção reforçada para tickets sensíveis, anexos e evidências

## Tema
LGPD, segurança e auditoria em Tickets.

## Decisão
Tickets com dados pessoais, financeiros, visitantes, acesso físico, vídeo, alarme, menores, documentos, anexos ou evidências devem suportar classificação sensível, controle de visualização, mascaramento, retenção e auditoria de acesso.

## Motivo
Tickets concentra narrativas e anexos que podem conter dados críticos.

## Impacto
Visualização, download, exportação e compartilhamento de ticket sensível devem exigir autorização e auditoria.

Evidências de vídeo devem preferencialmente ser vinculadas por referência ao módulo Câmeras / VMS, sem duplicar domínio.

## Status
Aprovada

## Data
2026-06-23

# DEC-097: SLA e escalonamento pertencem ao ciclo do ticket

## Tema
SLA operacional.

## Decisão
SLA, relógio de SLA, violação de SLA e escalonamento pertencem ao módulo Tickets quando relacionados ao ciclo do chamado.

A violação de SLA pode acionar notificações, automações ou responsáveis, mas não executa diretamente regra operacional de outro módulo.

## Motivo
Separar gestão de atendimento da execução real do recurso.

## Impacto
SLA vencido pode escalar um chamado, notificar um responsável ou solicitar ação por contrato, mas não abre porta, não cobra, não altera reserva, não silencia alarme e não executa diagnóstico técnico sozinho.

## Status
Aprovada

## Data
2026-06-23


# DEC-098: Mural Informativo como domínio oficial de comunicação institucional

## Tema
Fronteira do módulo Mural Informativo.

## Decisão
O Mural Informativo é o domínio oficial de avisos, comunicados, publicações, documentos anexados ao comunicado, enquetes, leitura obrigatória, ciência, aceite, segmentação de público, histórico de leitura, fixação, destaque, arquivamento e relatórios próprios de comunicação institucional.

## Motivo
Evitar que comunicação oficial fique espalhada entre Organizações, Parceiros, Notificações, Tickets ou outros módulos.

## Impacto
Announcement e entidades relacionadas passam a ser domínio do Mural, respeitando autorização do Core Platform e políticas de Herança e Permissões.

## Status
Aprovada

## Data
2026-06-23


# DEC-099: Mural solicita notificações, mas Notificações entrega

## Tema
Fronteira entre Mural Informativo , Notificações e Automações.

## Decisão
Mural Informativo pode criar AnnouncementNotificationRequest, mas não envia push, e-mail, SMS ou WhatsApp como domínio próprio. O módulo Notificações governa templates, preferências, envio, entrega e logs multicanal.

## Motivo
Evitar duplicidade de motor de comunicação multicanal.

## Impacto
Mural publica. Notificações entrega.

## Status
Aprovada

## Data
2026-06-23


# DEC-100: Mural pode originar ticket, mas Tickets governa atendimento

## Tema
Fronteira entre Mural Informativo e Tickets.

## Decisão
Mural Informativo pode registrar AnnouncementQuestion e criar AnnouncementTicketRequest quando um comunicado gerar dúvida, reclamação, contestação ou solicitação. O módulo Tickets governa Ticket, OperationalTicket, SLA, atendimento, comentários, anexos, escalonamento, resolução e reabertura.

## Motivo
Evitar que o Mural vire central de atendimento.

## Impacto
Mural mantém vínculo de origem. Tickets executa o atendimento.

## Status
Aprovada

## Data
2026-06-23


# DEC-101: Leitura obrigatória, ciência e aceite não são motor de permissão

## Tema
Fronteira entre Mural, Core Platform, Herança e Permissões e Segurança/LGPD.

## Decisão
AnnouncementReadReceipt, AnnouncementAcknowledgement, AnnouncementAcceptance e AnnouncementMandatoryRead registram evidência de comunicação, ciência ou aceite, mas não substituem PermissionGrant, InheritanceGrant, AuthorizationDecision, política avançada ou consentimento LGPD governado por Segurança e LGPD.

## Motivo
Evitar que leitura obrigatória vire bloqueio operacional ou autorização paralela.

## Impacto
Qualquer impacto em acesso, reserva, financeiro ou outro recurso deve passar por política, Core Platform e módulo dono do recurso.

## Status
Aprovada

## Data
2026-06-23


# DEC-102: Segmentação do Mural ocorre por referências autorizadas

## Tema
Fronteira entre Mural, Pessoas e Clientes, Unidades e Organizações.

## Decisão
AnnouncementAudienceReference, AnnouncementTargetStructure, AnnouncementTargetUnit, AnnouncementTargetArea, AnnouncementTargetBlock e AnnouncementTargetRole pertencem ao Mural apenas como alvos de comunicação por referência autorizada. Eles não transferem domínio de PersonProfile, ClientProfile, PersonUnitLink, Unit, Block, Area, Environment, OrganizationRecord ou Role para o Mural.

## Motivo
Evitar cadastro paralelo de pessoas, estrutura física, organização ou papel.

## Impacto
Mural segmenta por referência. O módulo dono mantém o cadastro completo.

## Status
Aprovada

## Data
2026-06-23


# DEC-103: Anexos do Mural não substituem módulo Documentos/GED

## Tema
Fronteira entre Mural Informativo e gestão documental.

## Decisão
AnnouncementAttachment e AnnouncementDocumentReference pertencem ao Mural apenas como anexos ou documentos publicados em comunicado. Eles não substituem um módulo futuro de Documentos/GED, caso este seja criado por decisão oficial.

## Motivo
Evitar que o Mural vire repositório documental completo.

## Impacto
O Mural pode anexar documentos ao comunicado, mas não assume versionamento documental avançado, workflow de GED, assinatura digital completa ou gestão documental corporativa.

## Status
Aprovada

## Data
2026-06-23


# DEC-104: Mural expõe read models autorizados para BI

## Tema
Fronteira entre Mural Informativo e Relatórios / BI.

## Decisão
Mural Informativo possui relatórios próprios e pode expor AnnouncementReadModel autorizado para Relatórios / BI. O módulo BI não pode acessar banco interno do Mural.

## Motivo
Permitir análise consolidada sem acoplamento.

## Impacto
BI consome dados agregados, autorizados e minimizados por contrato.

## Status
Aprovada

## Data
2026-06-23


# DEC-105: Notificações como domínio operacional de envio e entrega multicanal

## Tema
Fronteira do módulo Notificações.

## Decisão
Notificações será o domínio operacional responsável por NotificationRequest, Notification, NotificationMessage, templates, canais, preferências, opt-in, opt-out, filas, tentativas, retries, falhas, providers, adapters, webhooks de notificação, delivery logs e read models próprios de envio.

## Motivo
Evitar que cada módulo implemente envio próprio de push, e-mail, SMS, WhatsApp ou webhook, criando duplicidade, inconsistência e acoplamento.

## Impacto
Mural, Tickets, Financeiro, Convites, Reservas, Controle de Acesso, Câmeras / VMS, Alarmes, Gateway, Dispositivos e Automações solicitam notificações por contrato. Notificações entrega. O módulo solicitante continua dono do fato original.

## Status
Aprovada

## Data
2026-06-23


# DEC-106: NotificationRequest não transfere domínio do módulo solicitante

## Tema
Separação entre solicitação de mensagem e domínio de origem.

## Decisão
NotificationRequest representa apenas uma solicitação de entrega. Ela não transfere para Notificações a posse de comunicado, ticket, fatura, convite, reserva, acesso, câmera, alarme, gateway, dispositivo ou workflow.

## Motivo
Evitar que Notificações vire módulo universal de operação.

## Impacto
Cada módulo mantém suas regras e dados. Notificações valida canal, destinatário, template, preferência, autorização e entrega.

## Status
Aprovada

## Data
2026-06-23


# DEC-107: NotificationPreference e NotificationEndpoint não são cadastro primário de pessoa

## Tema
Fronteira entre Notificações e Pessoas e Clientes.

## Decisão
NotificationPreference e NotificationEndpoint pertencem a Notificações apenas como configurações e endpoints operacionais de entrega por canal, contexto, finalidade e preferência. PersonProfile, ClientProfile, PersonUnitLink, e-mail e telefone canônicos permanecem em Pessoas e Clientes ou Core, conforme o tipo do dado.

## Motivo
Permitir preferências de comunicação sem criar cadastro paralelo de pessoa, cliente ou contato.

## Impacto
Notificações pode armazenar push token, endpoint operacional, opt-in, opt-out e preferências de canal, mas deve consumir dados cadastrais por referências autorizadas.

## Status
Aprovada

## Data
2026-06-23


# DEC-108: Opt-out pode ser ignorado apenas em alerta crítico autorizado

## Tema
Opt-out, preferências e alertas críticos.

## Decisão
Notificações deve respeitar opt-in, opt-out, preferências e silêncio de canal. A exceção só pode ocorrer para NotificationCriticalAlert quando houver política autorizada, finalidade legítima, AuthorizationDecision do Core Platform, registro de motivo, minimização de conteúdo e auditoria.

## Motivo
Evitar abuso de comunicação crítica e proteger LGPD, segurança e confiança operacional.

## Impacto
Alertas de pânico, alarme, porta forçada, risco de segurança ou evento técnico crítico podem ser entregues mesmo com restrição de canal apenas quando autorizados.

## Status
Aprovada

## Data
2026-06-23


# DEC-109: Marketplace fornece conectores, Notificações governa uso operacional dos providers

## Tema
Fronteira entre Notificações e Marketplace de Integrações.

## Decisão
Marketplace de Integrações fornece, versiona e habilita conectores externos. Notificações governa o uso operacional de NotificationProvider, NotificationProviderAdapter, fallback, rate limit, status de provider, tentativa, falha e delivery log.

## Motivo
Evitar que Notificações vire marketplace e evitar que Marketplace execute envio operacional.

## Impacto
WhatsApp, SMS, e-mail, push e webhook podem usar conectores autorizados, mas o ciclo de entrega permanece em Notificações.

## Status
Aprovada

## Data
2026-06-23


# DEC-110: BI consome apenas read models autorizados de Notificações

## Tema
Fronteira entre Notificações e Relatórios / BI.

## Decisão
Relatórios / BI não acessa banco interno d, Notificações e Automações. Indicadores, dashboards e exportações devem consumir NotificationReadModel autorizado, com mascaramento, agregação, finalidade e autorização.

## Motivo
Evitar acoplamento técnico e vazamento de conteúdo sensível de mensagens.

## Impacto
Notificações mantém relatórios próprios de entrega e expõe read models controlados para BI.

## Status
Aprovada

## Data
2026-06-23


# DEC-111: Automações como domínio operacional de workflows autorizados

## Tema
Fronteira do módulo Automações.

## Decisão
Automações será o domínio operacional responsável por workflows, gatilhos, condições, ações solicitadas, execuções, retries, falhas, pausas, aprovações humanas, templates, webhooks de automação, histórico operacional e read models próprios.

## Motivo
Evitar que workflows fiquem espalhados entre módulos e garantir rastreabilidade das execuções automáticas.

## Impacto
Módulos continuam donos de seus recursos. Automações orquestra por eventos, contratos, APIs internas e escopo autorizado.

## Status
Aprovada

## Data
2026-06-23


# DEC-112: Automações não executa domínio de módulos donos

## Tema
Proteção contra acoplamento operacional.

## Decisão
Automações não abre portas, não envia notificações diretamente, não cria tickets por domínio próprio, não gera cobranças, não cria reservas, não cria convites, não cria evidências, não arma alarmes, não executa comandos de gateway e não manipula dispositivos diretamente.

## Motivo
Impedir que Automações vire módulo mestre e quebre a modularidade.

## Impacto
Toda ação deve ser solicitada ao módulo dono, com autorização do Core quando necessário.

## Status
Aprovada

## Data
2026-06-23


# DEC-113: Ações críticas em Automações exigem política, escopo, autorização e auditoria

## Tema
Segurança operacional.

## Decisão
Toda ação crítica disparada por Automações deve respeitar política aplicável, escopo autorizado, AuthorizationDecision do Core, validação do módulo dono, logs e auditoria. Quando configurado, deve exigir aprovação humana.

## Motivo
Evitar abuso, erro em massa, bloqueios indevidos e execução automática sobre recursos físicos ou sensíveis sem controle.

## Impacto
Ações críticas ganham trilha auditável reforçada e podem ser pausadas, bloqueadas ou submetidas a aprovação.

## Status
Aprovada

## Data
2026-06-23


# DEC-114: AutomationReadModel como fonte autorizada para BI

## Tema
Relatórios e BI.

## Decisão
Relatórios / BI poderá consumir AutomationReadModel autorizado, sem acessar banco interno de Automações.

## Motivo
Permitir análise de workflows, falhas, execuções e ações críticas sem acoplamento.

## Impacto
BI usa read models, eventos e contratos públicos. Automações mantém seu domínio interno protegido.

## Status
Aprovada

## Data
2026-06-23


# DEC-115: Webhooks e conectores de Automações não substituem Marketplace

## Tema
Integrações externas.

## Decisão
Automações pode usar webhooks e conectores autorizados, mas Marketplace de Integrações continua dono do catálogo, instalação, adapters, providers e capacidades externas autorizadas.

## Motivo
Evitar que Automações vire marketplace paralelo ou cofre de credenciais.

## Impacto
Automações usa AutomationConnectorAction com referência segura ao conector e credencial, respeitando plano, licença, permissão, segurança e auditoria.

## Status
Aprovada

## Data
2026-06-23

4. Modelo para novas decisões
Use este modelo para registrar novas decisões:
# DEC-XXX: Título da decisão
## Tema
[Área afetada]
## Decisão
[O que foi decidido]
## Motivo
[Por que foi decidido]
## Impacto
[O que muda ou precisa ser respeitado]
## Status
Aprovada / Em revisão / Substituída / Revogada
## Data
AAAA-MM-DD

5. Regra para alteração de decisão existente
Para alterar uma decisão, não edite silenciosamente a decisão antiga.
Crie uma nova decisão com este formato:

# DEC-XXX: Alteração da DEC-YYY
## Tema
[Área afetada]
## Decisão
[A nova decisão]
## Motivo
[Por que a decisão anterior precisa mudar]
## Impacto
[Quais módulos, documentos e regras serão afetados]
## Decisão anterior afetada
DEC-YYY
## Status
Aprovada
## Data
AAAA-MM-DD
A decisão antiga deve ser marcada como:
  • Substituída
  • Revogada
conforme o caso.

6. Frase de proteção do projeto
Nenhuma conversa nova pode desfazer uma decisão aprovada sem registrar uma nova decisão oficial.

7. Estado atual deste documento
Este documento contém as decisões oficiais iniciais do projeto e as decisões adicionadas após consolidação dos módulos Core Platform, Herança e Permissões, Pessoas e Clientes, Unidades, Blocos, Áreas e Ambientes, Organizações, Parceiros, Gateway Local / Mikrotik / Tunnel, Dispositivos, Controle de Acesso, Câmeras / VMS, Alarmes, Financeiro, Convites e Visitantes, Tickets, Mural Informativo, Notificações, Automações, Marketplace de Integrações, Auditoria e Compliance e a blindagem de produção entre módulos.

Decisões aprovadas e consolidadas nesta versão:
  • DEC-037
  • DEC-038
  • DEC-039
  • DEC-042
  • DEC-043
  • DEC-044
  • DEC-045
  • DEC-046
  • DEC-047
  • DEC-048
  • DEC-049
  • DEC-050
  • DEC-051
  • DEC-052
  • DEC-053
  • DEC-054
  • DEC-055
  • DEC-056
  • DEC-057
  • DEC-058
  • DEC-059
  • DEC-060
  • DEC-061
  • DEC-062
  • DEC-063
  • DEC-064
  • DEC-065
  • DEC-066
  • DEC-067
  • DEC-068
  • DEC-069
  • DEC-070
  • DEC-071
  • DEC-072
  • DEC-073
  • DEC-074
  • DEC-075
  • DEC-076
  • DEC-077
  • DEC-078
  • DEC-079
  • DEC-080
  • DEC-081
  • DEC-082
  • DEC-083
  • DEC-084
  • DEC-085
  • DEC-086
  • DEC-087
  • DEC-088
  • DEC-089
  • DEC-090
  • DEC-091

Decisões regularizadas pela Revisão Geral de Consolidação:
  • DEC-031, substituída pela DEC-037
  • DEC-033, aprovada
  • DEC-034, substituída pela DEC-037
  • DEC-035, aprovada
  • DEC-040, aprovada
  • DEC-041, aprovada

Decisão substituída nesta versão:
  • DEC-032, substituída pela DEC-039

Fronteira de Organizações consolidada nesta versão:
Organizações representa o cadastro operacional e institucional do espaço físico conectado.
Organizações não substitui Core Platform, Parceiros, Unidades, Blocos, Áreas e Ambientes, Pessoas e Clientes, Gateway Local / Mikrotik / Tunnel, Dispositivos ou módulos comerciais.

Fronteira de Parceiros consolidada nesta versão:
Parceiros representa o domínio operacional autorizado do parceiro. Parceiros pode vender, implantar, configurar, cadastrar gateways e dispositivos por fluxos autorizados, administrar e acompanhar organizações abaixo dele, sempre dentro de escopo, contrato, licença, contexto, permissão e AuthorizationDecision do Core Platform.

Parceiros não substitui Master, Core Platform, Organizações, Gateway Local / Mikrotik / Tunnel, Dispositivos, White-label, Financeiro, Suporte e Operação ou módulos comerciais.

Fronteira de Gateway Local / Mikrotik / Tunnel consolidada nesta versão:
Gateway Local / Mikrotik / Tunnel representa o domínio técnico oficial de conectividade local entre a plataforma em nuvem e a rede física da organização.

Gateway governa GatewayRecord, GatewayAgent, GatewayCredential, GatewaySecret, TunnelSession, TunnelEndpoint, LocalRoute, RemoteRoute, GatewayHealth, GatewayDiagnostic, GatewayCommand, GatewayLog, GatewayConnectivityState, GatewaySyncState, GatewayDeviceDiscovery, GatewayDeviceReachability e GatewayAuthorizationScope.

Gateway não substitui Core Platform, Parceiros, Organizações, Dispositivos, Controle de Acesso, Câmeras / VMS, Alarmes, Automações, Segurança e LGPD, Auditoria e Compliance ou módulos comerciais.

GatewayDeviceDiscovery não é DeviceRecord. Toda ação técnica sensível do Gateway exige GatewayAuthorizationScope e AuthorizationDecision do Core Platform.

Frase operacional consolidada:
Core cria contexto e autoriza. Parceiro implanta e administra dentro do escopo. Organizações representa o espaço conectado. Unidades mapeia a estrutura interna. Pessoas se vinculam ao espaço. Gateway conecta o mundo físico. Dispositivos governam equipamentos. Módulos comerciais executam recursos. Herança governa políticas. Auditoria registra.

Frase operacional consolidada de Gateway:
Gateway conecta. Core autoriza. Parceiro instala. Organização referencia. Dispositivos governam equipamentos. Módulos comerciais executam recursos. Auditoria registra.

Fronteira de Automações consolidada nesta versão:
Automações representa o domínio operacional de workflows autorizados. Automações governa gatilhos, condições, ações solicitadas, execuções, retries, falhas, pausas, aprovações humanas, templates, webhooks, conectores autorizados, histórico operacional e read models próprios.

Automações não substitui Core Platform, Herança e Permissões, Notificações, Mural Informativo, Tickets, Financeiro, Convites e Visitantes, Reservas, Controle de Acesso, Câmeras / VMS, Alarmes, Gateway Local / Mikrotik / Tunnel, Dispositivos, Marketplace de Integrações, Relatórios / BI, Segurança e LGPD ou Auditoria e Compliance.

Frase operacional consolidada de Automações:
O fato nasce no módulo dono. Automações avalia o workflow. Política influencia. Core decide. Módulo dono executa. Automações registra. Auditoria preserva.

Sempre que uma nova conversa for iniciada, este documento deve ser tratado como fonte oficial junto com a Bíblia do Projeto, o Mapa de Módulos, as Regras de Arquitetura e os Prompts de Trabalho.

Fronteira de Alarmes consolidada nesta versão:
Alarmes representa o domínio operacional de arme, desarme, setores, zonas, sensores operacionais, pânico, disparos, reconhecimento, silenciamento, reset, escalonamento, incidentes, planos de resposta e histórico operacional.

Alarmes não substitui Core Platform, Herança e Permissões, Pessoas e Clientes, Unidades, Organizações, Parceiros, Gateway Local / Mikrotik / Tunnel, Dispositivos, Controle de Acesso, Câmeras / VMS, Financeiro, Reservas, Convites e Visitantes, Tickets, Notificações, Automações, Segurança e LGPD, Auditoria e Compliance ou módulos comerciais.

Frase operacional consolidada de Alarmes:
Alarmes governa a operação de alarme. Dispositivos governam equipamentos. Gateway conecta. Core autoriza. Herança governa políticas. Câmeras / VMS gera evidência. Notificações comunica. Auditoria registra.

Fronteira de Financeiro consolidada nesta versão:
Financeiro representa o domínio financeiro oficial da plataforma, incluindo cobranças, faturamento, faturas, pagamentos, inadimplência, conciliação, contratos financeiros, assinaturas, consumo variável, rateios, repasses, comissões, split, recibos, documentos fiscais por referência, relatórios financeiros e eventos financeiros.

Financeiro não substitui Core Platform, Master, Parceiros, Organizações, Pessoas e Clientes, Unidades, Herança e Permissões, Controle de Acesso, Câmeras / VMS, Alarmes, Reservas, Convites e Visitantes, Tickets, Notificações, Relatórios / BI, Segurança e LGPD, Auditoria e Compliance ou módulos comerciais.

Eventos financeiros influenciam políticas, mas não executam bloqueio ou liberação operacional diretamente.

Frase operacional consolidada de Financeiro:
Financeiro cobra e informa. Herança avalia. Core decide. Módulo dono executa. Auditoria registra.

Fronteira de Convites e Visitantes consolidada nesta versão:
Convites e Visitantes representa o domínio operacional de visita temporária da plataforma, incluindo convites, visitantes temporários, delivery, acompanhantes eventuais, prestadores temporários, convites recorrentes operacionais, janelas de visita, aprovações, recusas, check-in, check-out, listas de convidados, solicitações de QR temporário por contrato e histórico operacional de visitação.

Convites e Visitantes não substitui Core Platform, Herança e Permissões, Pessoas e Clientes, Unidades, Organizações, Parceiros, Gateway Local / Mikrotik / Tunnel, Dispositivos, Controle de Acesso, Câmeras / VMS, Alarmes, Financeiro, Reservas, Tickets, Notificações, Segurança e LGPD, Auditoria e Compliance ou módulos comerciais.

Convites e Visitantes não abre porta, não cria pessoa permanente, não gera cobrança, não envia notificação multicanal e não cria credencial física.

Frase operacional consolidada de Convites e Visitantes:
Convites organiza a visita. Core autoriza. Herança governa políticas. Controle de Acesso executa passagem física. Auditoria registra.

Regra de prompts e nomenclatura consolidada nesta versão:
Todo prompt inicial de módulo deve exigir planejamento completo em CANVA FINAL copiável quando a fronteira for aprovada e o usuário pedir o planejamento completo. Toda sugestão de decisão oficial deve seguir a próxima numeração livre do arquivo 03_DECISOES_OFICIAIS.md, sem repetir, pular, renumerar ou reaproveitar códigos DEC.


Fronteira de Tickets consolidada nesta versão:
Tickets representa o domínio operacional oficial de chamados, solicitações, ocorrências, atendimento, manutenção operacional, comunicação operacional, SLA, comentários, anexos, escalonamento, resolução e reabertura.

Tickets pode vincular recursos externos por referência autorizada, mas não assume domínio do recurso vinculado. Tickets solicita ações a módulos donos por contrato, mas não executa domínios externos.

Decisões aprovadas nesta versão:
  • DEC-092
  • DEC-093
  • DEC-094
  • DEC-095
  • DEC-096
  • DEC-097

Frase operacional consolidada de Tickets:
Tickets atende. Core autoriza. Herança e Permissões governa políticas. Módulo dono executa. Auditoria registra.



Fronteira de Mural Informativo consolidada nesta versão:
Mural Informativo representa o domínio oficial de comunicação institucional, avisos, comunicados, publicações, documentos anexados ao comunicado, enquetes, leitura obrigatória, ciência, aceite, segmentação, histórico de leitura, fixação, destaque, arquivamento e relatórios próprios.

Mural Informativo não substitui Core Platform, Herança e Permissões, Pessoas e Clientes, Unidades, Organizações, Parceiros, Notificações, Tickets, Financeiro, Convites e Visitantes, Reservas, Controle de Acesso, Câmeras / VMS, Alarmes, Relatórios / BI, Segurança e LGPD ou Auditoria e Compliance.

Decisões aprovadas do Mural Informativo nesta versão:
  • DEC-098
  • DEC-099
  • DEC-100
  • DEC-101
  • DEC-102
  • DEC-103
  • DEC-104

Frase operacional consolidada de Mural Informativo:
Mural publica. Core autoriza. Herança governa políticas. Notificações entrega. Tickets atende. Financeiro cobra. BI analisa por read model. Auditoria registra.


Fronteira de Notificações consolidada nesta versão:
Notificações representa o domínio operacional oficial de envio, entrega, preferências, templates, canais, filas, tentativas, retries, falhas, provedores, opt-in, opt-out, logs de entrega, rastreabilidade e relatórios próprios de mensagens.

Notificações não substitui Core Platform, Herança e Permissões, Pessoas e Clientes, Unidades, Organizações, Parceiros, Mural Informativo, Tickets, Financeiro, Convites e Visitantes, Reservas, Controle de Acesso, Câmeras / VMS, Alarmes, Gateway Local / Mikrotik / Tunnel, Dispositivos, Automações, Marketplace de Integrações, Relatórios / BI, Segurança e LGPD ou Auditoria e Compliance.

NotificationRequest não transfere domínio do módulo solicitante. NotificationPreference e NotificationEndpoint não são cadastro primário de pessoa. Marketplace fornece conectores e Notificações governa o uso operacional dos providers. Relatórios / BI consome apenas NotificationReadModel autorizado.

Decisões aprovadas nesta versão:
  • DEC-105
  • DEC-106
  • DEC-107
  • DEC-108
  • DEC-109
  • DEC-110

Frase operacional consolidada de Notificações:
Módulo dono solicita. Notificações entrega. Core autoriza. Política influencia. Auditoria registra.

# DEC-116: Marketplace de Integrações como domínio oficial de conectores plugáveis

## Tema
Fronteira do Marketplace de Integrações.

## Decisão
Marketplace de Integrações será o domínio oficial de catálogo, publicação, versionamento, instalação, habilitação, escopo, compatibilidade, adapters, capacidades, credenciais por referência, termos, compliance, status e logs técnicos de integrações plugáveis.

## Motivo
Evitar que conectores fiquem espalhados entre módulos e permitir crescimento multimarcas, extensível e governado.

## Impacto
Módulos donos usarão conectores por contratos autorizados, sem assumir catálogo global. Marketplace cataloga e disponibiliza; Core autoriza; o módulo dono executa; Auditoria registra.

## Status
Aprovada

## Data
2026-06-24


# DEC-117: Marketplace não executa regra operacional de módulos donos

## Tema
Separação operacional.

## Decisão
Marketplace não executa regra de Controle de Acesso, Câmeras / VMS, Alarmes, Financeiro, Convites e Visitantes, Reservas, Tickets, Mural Informativo, Notificações, Automações, Gateway Local / Mikrotik / Tunnel, Dispositivos, White-label ou Relatórios / BI.

## Motivo
Preservar modularidade e impedir que Marketplace vire central operacional invisível.

## Impacto
Marketplace fornece conectores. O módulo dono governa e executa. Core autoriza. Auditoria registra.

## Status
Aprovada

## Data
2026-06-24


# DEC-118: Credenciais de integração devem ser sempre tratadas por referência segura

## Tema
Segurança de segredos e credenciais externas.

## Decisão
Marketplace não deve armazenar segredo bruto. Credenciais devem ser tratadas por ProviderCredentialReference, IntegrationCredentialReference, ConnectorSecretReference ou mecanismo equivalente protegido por cofre seguro.

## Motivo
Reduzir risco de vazamento, abuso e exposição de credenciais externas.

## Impacto
Todo conector deverá declarar política de segredo, rotação, revogação e auditoria. Segredos não devem aparecer em tela, evento, log, exportação ou payload público.

## Status
Aprovada

## Data
2026-06-24


# DEC-119: Conector sensível exige escopo, finalidade, LGPD, auditoria e avaliação de risco

## Tema
LGPD e segurança de integrações.

## Decisão
Conectores que trafegam dados pessoais, biometria, imagens, dados financeiros, dados de acesso ou dados sensíveis exigem escopo mínimo, finalidade, contrato, base legal, auditoria, retenção e avaliação de risco.

## Motivo
Impedir integração externa sem governança de dados.

## Impacto
Marketplace deverá integrar seu ciclo de aprovação com Segurança e LGPD e Auditoria e Compliance. Conectores inseguros podem ser bloqueados, suspensos, depreciados ou removidos.

## Status
Aprovada

## Data
2026-06-24


# DEC-120: Marketplace pode expor views de licença e feature flag, mas Core permanece fonte oficial

## Tema
Fronteira entre Marketplace e Core Platform.

## Decisão
Marketplace pode manter MarketplaceIntegrationLicenseView, MarketplaceIntegrationFeatureFlagView e MarketplaceEntitlementView apenas como read models autorizados. A fonte oficial de License, FeatureFlag, Plan, Entitlement, ModuleRegistry e AuthorizationDecision permanece no Core Platform.

## Motivo
Permitir experiência operacional de catálogo e disponibilidade sem criar motor paralelo de licença e autorização.

## Impacto
Marketplace poderá filtrar catálogo e disponibilidade por escopo autorizado, mas nunca decidir licença, plano, feature flag, entitlement ou autorização final.

## Status
Aprovada

## Data
2026-06-24


# DEC-121: Saúde de conector não substitui saúde de dispositivo, gateway ou módulo consumidor

## Tema
Observabilidade e separação de falhas.

## Decisão
MarketplaceConnectorHealth representa apenas a saúde técnica da integração, provider, adapter ou conector. DeviceHealth pertence a Dispositivos. GatewayHealth pertence ao Gateway Local / Mikrotik / Tunnel. NotificationDeliveryLog pertence a Notificações. Logs financeiros pertencem ao Financeiro. Logs operacionais pertencem ao módulo dono.

## Motivo
Evitar que Marketplace vire observabilidade universal e misture falha técnica de integração com falha operacional de domínio.

## Impacto
Falhas serão rastreáveis por correlation_id, mas cada módulo continuará dono do seu log operacional, estado e diagnóstico de domínio.

## Status
Aprovada

## Data
2026-06-24


# DEC-122: Auditoria e Compliance como domínio de investigação e conformidade

## Tema
Fronteira do módulo Auditoria e Compliance.

## Decisão
Auditoria e Compliance será o domínio responsável por consulta, correlação, investigação, alertas, evidências, exportações auditadas, cadeia de custódia, trilhas avançadas e relatórios de conformidade.

## Motivo
Evitar que o módulo se confunda com Core Platform, BI, Segurança e LGPD, Suporte ou módulos donos.

## Impacto
Auditoria e Compliance não executa ações operacionais e não substitui logs primários.

## Status
Aprovada

## Data
2026-06-24


# DEC-123: CoreAuditLog permanece como fonte imutável da trilha base

## Tema
Separação entre CoreAuditLog e ComplianceTrail.

## Decisão
CoreAuditLog e AuditLog base pertencem ao Core Platform. ComplianceTrail pertence à Auditoria e Compliance como trilha derivada e correlacionada.

## Motivo
Evitar auditoria base paralela.

## Impacto
Auditoria referencia, correlaciona e evidencia, mas não substitui nem altera a trilha base.

## Status
Aprovada

## Data
2026-06-24


# DEC-124: Segurança e LGPD governa políticas, Auditoria evidencia conformidade

## Tema
Fronteira entre Segurança e LGPD e Auditoria e Compliance.

## Decisão
Segurança e LGPD define políticas de proteção, retenção, anonimização, remoção, finalidade, consentimento e mascaramento. Auditoria e Compliance aplica referências e evidencia conformidade.

## Motivo
Evitar motor paralelo de LGPD dentro de Auditoria.

## Impacto
Auditoria não executa anonimização, remoção ou consentimento como fonte oficial.

## Status
Aprovada

## Data
2026-06-24


# DEC-125: Exportação de evidência exige autorização, motivo e cadeia de custódia

## Tema
Exportação auditada.

## Decisão
Toda exportação de logs, trilhas, evidências, dados pessoais, financeiros, imagens, vídeos ou eventos sensíveis deve registrar autorização, motivo, escopo, hash, aprovação quando aplicável e cadeia de custódia.

## Motivo
Proteger evidências e dados sensíveis.

## Impacto
Exportações sem motivo, autorização e trilha ficam proibidas.

## Status
Aprovada

## Data
2026-06-24


# DEC-126: Auditoria e Compliance não é BI, Suporte, Segurança nem executor de módulos donos

## Tema
Proibição de acoplamento.

## Decisão
Auditoria e Compliance não pode virar BI genérico, Suporte e Operação, Segurança e LGPD, VMS, Controle de Acesso, Financeiro, Automações, Notificações, Marketplace ou qualquer módulo executor.

## Motivo
Preservar modularidade e baixo acoplamento.

## Impacto
Dashboards de Auditoria serão limitados a conformidade, trilhas, evidências, alertas e investigação.

## Status
Aprovada

## Data
2026-06-24


# DEC-127: Consolidação da separação entre Core Audit e Auditoria e Compliance

## Tema
Auditoria base, logs operacionais e investigação avançada.

## Decisão
CoreAuditLog, AuditLog base e SecurityLog base pertencem ao Core Platform. ModuleAuditLog e logs operacionais pertencem aos módulos donos. ComplianceTrail, ComplianceCase, ComplianceInvestigation, AuditEvidence, AuditExport, ComplianceAlert, ComplianceFinding e ComplianceReport pertencem ao módulo Auditoria e Compliance como camada derivada, investigativa e correlacionada.

## Motivo
Evitar auditoria base paralela, acesso direto a bancos internos e mistura entre trilha primária, log operacional e investigação avançada.

## Impacto
Auditoria e Compliance poderá consultar, correlacionar, evidenciar, alertar e exportar por contratos autorizados, sem substituir Core Platform nem os logs originais dos módulos donos.

## Decisão anterior afetada
DEC-036

## Status
Aprovada

## Data
2026-06-24

# DEC-128: Blindagem de produção entre módulos como regra oficial

## Tema
Segurança, modularidade, contratos e prevenção de quebras em produção.

## Decisão
Toda produção de módulo deve obedecer a uma camada obrigatória de blindagem entre módulos, incluindo separação de domínio, contratos públicos versionados, autorização estrutural pelo Core Platform, validação de tenant e contexto, escopos específicos por módulo, idempotência em comandos críticos, eventos com envelope padronizado, rastreabilidade por correlation_id e causation_id, proibição de acesso direto a banco interno de outro módulo e auditoria de ações sensíveis.

## Motivo
Evitar que a implementação futura quebre a arquitetura aprovada, crie acoplamento invisível, duplique domínios, burle autorização, exponha dados sensíveis ou gere efeitos colaterais entre módulos.

## Impacto
Todos os módulos devem ser produzidos com contratos explícitos, testes de contrato, limites de domínio, validação de contexto, autorização central, logs próprios e integração apenas por APIs internas, eventos, webhooks internos, barramento de eventos ou read models autorizados.

## Status
Aprovada

## Data
2026-06-24


# DEC-129: Contratos versionados e compatibilidade obrigatória entre módulos

## Tema
Versionamento de APIs internas, eventos, webhooks, comandos e read models.

## Decisão
Toda API interna, evento, webhook interno, comando intermodular e read model autorizado deve possuir contrato público versionado. Alterações aditivas podem manter compatibilidade, mas mudanças incompatíveis exigem nova versão, período de compatibilidade, plano de migração e validação de consumidores.

## Motivo
Permitir evolução dos módulos sem quebrar consumidores existentes, sem acesso a detalhes internos e sem dependência invisível entre domínios.

## Impacto
Cada módulo deve declarar owner_module, versão de contrato, campos obrigatórios, campos opcionais, dados sensíveis, permissões necessárias, escopo, compatibilidade, política de descontinuação e eventos relacionados. Consumidores não podem depender de campos internos, tabelas privadas ou comportamento não documentado.

## Status
Aprovada

## Data
2026-06-24


# DEC-130: Fail-closed obrigatório para ações críticas e dados sensíveis

## Tema
Segurança operacional, dados sensíveis e comportamento em falha.

## Decisão
Toda ação crítica deve falhar fechada quando tenant, contexto, ator, recurso, licença, feature flag, permissão, política, escopo específico ou AuthorizationDecision estiver ausente, inválido, expirado, inconclusivo ou negado. Ações envolvendo acesso físico, vídeo, biometria, dados pessoais, dados financeiros, credenciais, gateway, dispositivos, automações, conectores, exportações e evidências devem negar, pausar ou degradar com segurança em caso de falha de autorização ou política.

## Motivo
Evitar execução indevida de ações físicas, exposição de dados sensíveis, vazamento entre tenants, duplicidade de efeitos, bypass de permissão e decisões inseguras durante indisponibilidade parcial de módulos.

## Impacto
Módulos como Controle de Acesso, Câmeras / VMS, Alarmes, Financeiro, Convites e Visitantes, Notificações, Automações, Marketplace, Gateway, Dispositivos, Auditoria e Compliance e os futuros módulos Segurança e LGPD, Reservas, BI, White-label e Suporte devem declarar comportamento de falha seguro. Modos offline só podem existir com política explícita, escopo limitado, validade temporal e auditoria.

## Status
Aprovada

## Data
2026-06-24


# DEC-131: Segurança e LGPD como domínio oficial de políticas de proteção e privacidade

## Tema

Fronteira do módulo Segurança e LGPD.

## Decisão

Segurança e LGPD será o domínio oficial de políticas de proteção, privacidade, retenção, minimização, mascaramento, consentimento, finalidade, base legal, tratamento de dados, classificação de sensibilidade, anonimização, remoção, bloqueio de tratamento, oposição, portabilidade, risco de terceiros, segredos, credenciais, webhooks externos e exportação sensível.

## Motivo

Evitar que Core Platform, Auditoria e Compliance, Herança e Permissões, Relatórios / BI, Suporte e Operação ou módulos donos criem políticas paralelas de LGPD e proteção de dados.

## Impacto

Módulos donos continuam executando seus domínios, mas devem respeitar políticas de Segurança e LGPD quando houver dado sensível, tratamento protegido, exportação sensível, retenção, consentimento, finalidade, segredo ou risco de terceiro.

## Status

Aprovada

## Data

2026-06-24

# DEC-132: Segurança e LGPD não substitui Core Platform, Auditoria, Herança, BI, Suporte ou módulos donos

## Tema

Proibição de acoplamento.

## Decisão

Segurança e LGPD não cria Tenant, Context, UserAccount, AuthorizationDecision, PermissionGrant, License, FeatureFlag, CoreAuditLog, ComplianceCase, BI genérico, ticket de suporte ou regra operacional dos módulos donos.

## Motivo

Preservar modularidade e impedir que Segurança e LGPD se transforme em módulo universal.

## Impacto

Segurança e LGPD influencia por políticas e contratos. Core autoriza. Herança influencia. Módulo dono executa. Auditoria evidencia.

## Status

Aprovada

## Data

2026-06-24

# DEC-133: Políticas de retenção, mascaramento, minimização, finalidade e consentimento são referências oficiais

## Tema

Contratos de política.

## Decisão

RetentionPolicy, MaskingPolicy, DataMinimizationPolicy, ConsentPolicy, ConsentRequirement, LegalBasis e DataProcessingPurpose pertencem a Segurança e LGPD e devem ser consumidos por módulos por APIs internas, eventos ou referências versionadas.

## Motivo

Evitar retenção, consentimento, finalidade e mascaramento informais espalhados entre módulos.

## Impacto

Módulos donos aplicam as políticas sem assumir o domínio de LGPD. ConsentRecord pertence a Segurança e LGPD como registro de governança de consentimento por referência, sem transferir PersonProfile, ClientProfile ou dados pessoais primários para Segurança e LGPD.

## Status

Aprovada

## Data

2026-06-24

# DEC-134: Solicitações do titular pertencem a Segurança e LGPD, execução ocorre no módulo dono

## Tema

Direitos do titular e modularidade.

## Decisão

DataSubjectRequest e suas variações pertencem a Segurança e LGPD. Quando a solicitação exigir alteração, exportação, anonimização, bloqueio ou remoção de dados mantidos por outro módulo, Segurança e LGPD coordena por contrato e o módulo dono executa dentro do próprio domínio.

## Motivo

Cumprir governança de privacidade sem acesso direto a banco interno de outros módulos.

## Impacto

Nenhum módulo comercial deve tratar pedido LGPD completo de forma isolada ou informal.

## Status

Aprovada

## Data

2026-06-24

# DEC-135: Segredos e credenciais devem usar referência segura

## Tema

Proteção de segredos.

## Decisão

Segredos, tokens, chaves, senhas, credenciais técnicas, credenciais de gateway, credenciais de dispositivo, credenciais de marketplace e webhooks externos não podem aparecer brutos em payload, evento, log, read model, URL, exportação, ticket, relatório ou notificação. Devem ser tratados por referência segura.

## Motivo

Evitar vazamento de segredo e comprometimento de tenants, dispositivos, gateways e integrações.

## Impacto

Gateway, Dispositivos, Marketplace, Automações, Notificações e módulos técnicos devem adotar referências seguras e políticas de rotação, revogação e expiração.

## Status

Aprovada

## Data

2026-06-24

# DEC-136: Incidentes de segurança e privacidade exigem política, escopo, trilha e separação de domínio

## Tema

Incidentes.

## Decisão

SecurityIncidentPolicy, PrivacyIncidentPolicy e BreachNotificationPolicy pertencem a Segurança e LGPD. Suporte e Operação atende incidentes operacionais. Auditoria e Compliance investiga, correlaciona e preserva evidências. Core registra trilha base e autoriza ações sensíveis. Módulo dono executa contenção operacional.

## Motivo

Evitar que incidente sensível vire atendimento comum sem governança de privacidade, proteção e evidência.

## Impacto

Incidentes de privacidade passam a exigir severidade, escopo, motivo, responsável, retenção, comunicação autorizada e trilha.

## Status

Aprovada

## Data

2026-06-24

# DEC-137: Terceiros, conectores e transferência internacional exigem avaliação de risco

## Tema

Terceiros e integrações.

## Decisão

ThirdPartyRiskAssessment, ConnectorRiskAssessment, DataProcessingAgreement, SubprocessorRecord e InternationalTransferRecord pertencem a Segurança e LGPD. Marketplace governa instalação e ciclo de vida do conector, mas Segurança e LGPD governa risco, dados trafegados, privacidade, subprocessadores e transferência internacional.

## Motivo

Evitar integração externa sem governança de dados, contrato e risco.

## Impacto

Conectores sensíveis podem exigir aprovação, limitação, bloqueio ou revisão conforme política.

## Status

Aprovada

## Data

2026-06-24

# DEC-138: Ausência de política de Segurança e LGPD deve falhar fechado em ação sensível

## Tema

Fail-closed.

## Decisão

Ações críticas ou tratamentos sensíveis devem negar, pausar ou degradar com segurança quando política de retenção, consentimento, finalidade, mascaramento, minimização, segredo, exportação ou proteção estiver ausente, expirada, inválida ou incompatível.

## Motivo

Evitar execução insegura em lacuna de política.

## Impacto

Módulos donos devem consultar política aplicável antes de processar dados sensíveis.

## Status

Aprovada

## Data

2026-06-24

Fronteira de Segurança e LGPD consolidada nesta versão:
Segurança e LGPD representa o domínio oficial de políticas de proteção, privacidade, retenção, minimização, mascaramento, consentimento, finalidade, base legal, tratamento de dados, classificação de sensibilidade, anonimização, remoção, bloqueio de tratamento, oposição, portabilidade, segredos, credenciais, webhooks externos, exportação sensível, risco de terceiros, subprocessadores e transferência internacional.

Segurança e LGPD não substitui Core Platform, Herança e Permissões, Auditoria e Compliance, Relatórios / BI, Suporte e Operação ou módulos donos. Segurança e LGPD define políticas e referências. Core autoriza estruturalmente. Herança influencia. Módulo dono executa. Auditoria evidencia.

Decisões aprovadas nesta versão:
  • DEC-131
  • DEC-132
  • DEC-133
  • DEC-134
  • DEC-135
  • DEC-136
  • DEC-137
  • DEC-138

Frase operacional consolidada de Segurança e LGPD:
Segurança e LGPD define políticas de proteção e tratamento. Core autoriza. Herança influencia. Módulo dono executa. Auditoria evidencia.

Fronteira de Marketplace de Integrações consolidada nesta versão:
Marketplace de Integrações representa o domínio oficial de catálogo, publicação, aprovação, certificação, instalação, habilitação, desabilitação, versionamento, escopo, compatibilidade, adapters, providers, pacotes, templates, credenciais por referência, webhooks externos, termos, compliance, status, logs técnicos e governança de integrações externas.

Marketplace de Integrações não substitui Core Platform, Herança e Permissões, Pessoas e Clientes, Unidades, Organizações, Parceiros, Gateway Local / Mikrotik / Tunnel, Dispositivos, Controle de Acesso, Câmeras / VMS, Alarmes, Financeiro, Convites e Visitantes, Reservas, Tickets, Mural Informativo, Notificações, Automações, White-label, Relatórios / BI, Segurança e LGPD ou Auditoria e Compliance.

Marketplace fornece conectores, adapters, providers e capacidades plugáveis. O módulo dono governa e executa a regra operacional. Core autoriza. Segurança e LGPD protege dados e segredos. Auditoria registra.

Decisões aprovadas nesta versão:
  • DEC-116
  • DEC-117
  • DEC-118
  • DEC-119
  • DEC-120
  • DEC-121

Frase operacional consolidada de Marketplace de Integrações:
Marketplace cataloga e disponibiliza. Core autoriza. Herança e Permissões influencia. Segurança e LGPD protege. Módulo dono executa. Auditoria registra.


Fronteira de Auditoria e Compliance consolidada nesta versão:
Auditoria e Compliance representa o domínio oficial de investigação, conformidade, evidências, cadeia de custódia, exportações auditadas, alertas e trilhas avançadas da plataforma.

Auditoria e Compliance não substitui Core Platform, Segurança e LGPD, Herança e Permissões, Relatórios / BI, Suporte e Operação ou módulos donos.

CoreAuditLog, AuditLog base e SecurityLog base pertencem ao Core Platform. ModuleAuditLog e logs operacionais pertencem aos módulos donos. ComplianceTrail, ComplianceCase, ComplianceInvestigation, AuditEvidence, AuditExport, ComplianceAlert, ComplianceFinding e ComplianceReport pertencem à Auditoria e Compliance como camada derivada, investigativa e correlacionada.

Decisões aprovadas nesta versão:
  • DEC-122
  • DEC-123
  • DEC-124
  • DEC-125
  • DEC-126
  • DEC-127

Decisão substituída nesta versão:
  • DEC-036, substituída pela DEC-127

Frase operacional consolidada de Auditoria e Compliance:
Core registra e autoriza. Módulo dono executa e mantém log operacional. Segurança e LGPD protege e define políticas. Auditoria e Compliance investiga, correlaciona, evidencia, alerta e exporta com controle.



# DEC-139: Suporte e Operação como domínio oficial de sustentação da plataforma

## Tema

Fronteira do módulo Suporte e Operação.

## Decisão

Suporte e Operação representa o domínio oficial de suporte técnico, sustentação operacional da plataforma, incidentes de serviço, status operacional, janelas de manutenção, base de conhecimento, runbooks, diagnóstico assistido, suporte ao parceiro, suporte à organização e coordenação de resposta entre módulos donos.

## Motivo

Evitar que suporte técnico fique espalhado entre Tickets, Parceiros, Auditoria, Gateway, Dispositivos ou módulos comerciais.

## Impacto

SupportOperationCase, PlatformSupportCase, ServiceIncident, MaintenanceWindow, ServiceStatus, KnowledgeBaseArticle, SupportRunbook e PostIncidentReview passam a pertencer a Suporte e Operação.

## Status

Aprovada

## Data

2026-06-24

# DEC-140: Separação oficial entre Tickets e Suporte e Operação

## Tema

Fronteira entre atendimento operacional local e sustentação da plataforma.

## Decisão

OperationalTicket pertence a Tickets. SupportOperationCase e PlatformSupportCase pertencem a Suporte e Operação. Tickets atende demandas operacionais da organização, usuários, moradores, clientes e rotinas locais. Suporte e Operação atende incidentes técnicos da plataforma, suporte ao parceiro, suporte à organização, incidentes de serviço, diagnóstico assistido e operação interna da plataforma.

## Motivo

Evitar duplicidade de atendimento, SLA, comentários, anexos, escalonamento e resolução.

## Impacto

Tickets pode escalar para Suporte por contrato quando a causa for plataforma, integração, gateway, dispositivo, bug, licença, indisponibilidade ou módulo. Suporte pode vincular ticket por referência, sem assumir o domínio de Tickets.

## Status

Aprovada

## Data

2026-06-24

# DEC-141: Suporte coordena, mas módulo dono executa

## Tema

Execução entre Suporte e módulos donos.

## Decisão

Suporte e Operação pode solicitar diagnóstico, ação técnica, análise, correção, status ou evidência por contrato autorizado, mas não executa regra operacional de módulo dono.

## Motivo

Evitar que Suporte vire executor universal da plataforma.

## Impacto

Gateway diagnostica gateway. Dispositivos diagnostica equipamento. Controle de Acesso executa acesso. Câmeras / VMS executa stream e evidência. Notificações entrega mensagens. Automações executa workflows. Financeiro executa cobrança. Suporte coordena e acompanha.

## Status

Aprovada

## Data

2026-06-24

# DEC-142: Diagnóstico assistido por contrato versionado

## Tema

Diagnóstico técnico seguro.

## Decisão

Todo diagnóstico solicitado por Suporte deve ocorrer por SupportDiagnosticRequest versionado, com tenant, contexto, ator, motivo, escopo, ResourceReference, AuthorizationDecision, correlation_id e política de Segurança e LGPD quando envolver dado sensível.

## Motivo

Evitar acesso direto a banco, logs crus, segredos ou comandos técnicos sem controle.

## Impacto

SupportDiagnosticResult deve retornar apenas resumo autorizado, mascarado e minimizado.

## Status

Aprovada

## Data

2026-06-24

# DEC-143: Acesso remoto assistido deve ser temporário, autorizado e auditável

## Tema

Acesso remoto técnico.

## Decisão

Acesso remoto assistido solicitado por Suporte deve ser temporário, justificado, escopado, autorizado pelo Core, compatível com política de Segurança e LGPD, executado pelo módulo dono e registrado por referência segura.

## Motivo

Proteger redes locais, gateways, dispositivos, credenciais, IPs internos e dados sensíveis.

## Impacto

Suporte não armazena credencial bruta e não abre túnel diretamente. Gateway ou módulo dono mantém a sessão técnica.

## Status

Aprovada

## Data

2026-06-24

# DEC-144: Status operacional e incidentes de serviço pertencem a Suporte e Operação

## Tema

Status da plataforma.

## Decisão

ServiceStatus, ServiceStatusPage, ServiceComponent, ServiceDependency, MaintenanceWindow, ServiceIncident, RootCauseAnalysis e PostIncidentReview pertencem a Suporte e Operação como domínio de sustentação da plataforma.

## Motivo

Centralizar comunicação operacional da saúde da plataforma sem invadir logs técnicos ou execução dos módulos donos.

## Impacto

Módulos donos publicam eventos e status autorizados. Suporte consolida impacto, severidade, atualização, mitigação e resolução.

## Status

Aprovada

## Data

2026-06-24

# DEC-145: Dados sensíveis em suporte exigem minimização, mascaramento e referência segura

## Tema

Proteção de dados no atendimento.

## Decisão

Comentários, notas internas, anexos, diagnósticos, logs, eventos, payloads e URLs de Suporte não podem conter segredo bruto. Dados sensíveis devem ser minimizados, mascarados, classificados, retidos por política e, quando necessário, armazenados apenas por referência segura.

## Motivo

Suporte tende a concentrar prints, logs, narrativas sensíveis e informações técnicas críticas.

## Impacto

SupportSensitiveAttachmentReference vira padrão para anexos críticos. Visualização, download e compartilhamento exigem autorização e auditoria.

## Status

Aprovada

## Data

2026-06-24

Fronteira de Suporte e Operação consolidada nesta versão:
Suporte e Operação representa o domínio oficial de sustentação técnica da plataforma, suporte a parceiros, suporte a organizações, incidentes de serviço, status operacional, janelas de manutenção, diagnóstico assistido, acesso remoto assistido por referência, escalonamentos técnicos, base de conhecimento, runbooks, known issues, workarounds, root cause analysis e post-incident review.

Suporte e Operação não substitui Core Platform, Tickets, Auditoria e Compliance, Segurança e LGPD, Relatórios / BI, Gateway, Dispositivos, Controle de Acesso, Câmeras / VMS, Alarmes, Financeiro, Convites e Visitantes, Reservas, Mural Informativo, Notificações, Automações, Marketplace de Integrações ou White-label.

Frase operacional consolidada de Suporte e Operação:
Suporte atende. Módulo dono corrige. Segurança protege. Auditoria evidencia. Core autoriza.

Estado atual consolidado após esta atualização:

## DEC-155: Relatórios / BI como domínio analítico oficial

## Tema

Fronteira do módulo Relatórios / BI.

## Decisão

Relatórios / BI representa o domínio oficial de dashboards, indicadores, métricas, análises, relatórios, consultas agregadas, visões gerenciais, visões operacionais analíticas, snapshots, widgets, filtros, modelos analíticos, insights, tendências e exportações autorizadas.

Relatórios / BI não é dono dos dados operacionais primários.

## Motivo

Separar análise e apresentação de dados da execução operacional dos módulos donos.

## Impacto

Cada módulo dono continua mantendo seu domínio. BI consome apenas read models, eventos, APIs e contratos autorizados.

## Status

Aprovada

## Data

2026-06-24

## DEC-156: Relatórios / BI consome apenas read models, eventos e contratos autorizados

## Tema

Comunicação entre BI e módulos donos.

## Decisão

Relatórios / BI não pode acessar banco interno de outro módulo. Toda consulta analítica deve ocorrer por read model autorizado, API interna versionada, evento público ou contrato analítico publicado pelo módulo dono.

## Motivo

Evitar acoplamento, dependência invisível e quebra entre módulos.

## Impacto

Todo módulo que desejar aparecer no BI deve expor contrato analítico próprio, com owner_module, versão, escopo, permissões, dados sensíveis, retenção e política de compatibilidade.

## Status

Aprovada

## Data

2026-06-24

## DEC-157: Read model analítico não transfere domínio operacional para BI

## Tema

Separação entre leitura analítica e posse de domínio.

## Decisão

Read models consumidos por Relatórios / BI não transferem domínio operacional ao BI. O módulo dono permanece responsável por regra, estado, ciclo de vida, correção, origem e consistência do dado.

## Motivo

Impedir que BI vire banco compartilhado ou módulo operacional indireto.

## Impacto

BI pode agregar, resumir, exibir e exportar conforme autorização, mas não altera, corrige, recalcula ou executa regra de negócio de módulos donos.

## Status

Aprovada

## Data

2026-06-24

## DEC-158: Exportações sensíveis em BI exigem autorização, finalidade, política e trilha

## Tema

Segurança, LGPD e exportação analítica.

## Decisão

Toda exportação sensível em Relatórios / BI deve exigir motivo, finalidade, tenant, contexto, escopo, permissão, AuthorizationDecision do Core, política de Segurança e LGPD, mascaramento, retenção, idempotency_key e trilha de auditoria.

## Motivo

Relatórios e exportações podem concentrar dados pessoais, financeiros, operacionais, imagens, acessos, visitantes, tickets e reservas.

## Impacto

BIExportRequest, BIExportApproval e BIExportLog passam a ser entidades críticas, sempre com fail-closed quando faltar autorização, política ou trilha.

## Status

Aprovada

## Data

2026-06-24

## DEC-159: BI não substitui Auditoria e Compliance

## Tema

Fronteira entre análise gerencial e investigação.

## Decisão

Relatórios / BI pode gerar relatórios analíticos, indicadores e dashboards de conformidade quando autorizado, mas não cria ComplianceCase, ComplianceInvestigation, AuditEvidence, AuditExport ou ChainOfCustodyRecord.

## Motivo

Evitar que BI vire módulo investigativo ou evidencial.

## Impacto

Relatórios analíticos ficam no BI. Investigações, evidências, cadeia de custódia e exportações auditadas ficam em Auditoria e Compliance.

## Status

Aprovada

## Data

2026-06-24

## DEC-160: BI não define políticas de Segurança e LGPD

## Tema

Fronteira entre BI e Segurança/LGPD.

## Decisão

Relatórios / BI aplica políticas de retenção, minimização, mascaramento, finalidade, consentimento e exportação sensível por referência, mas não define DataRetentionPolicy, DataMaskingPolicy, ConsentPolicy ou SensitiveDataPolicy.

## Motivo

Evitar motor paralelo de Segurança e LGPD dentro do BI.

## Impacto

BI deve negar, mascarar ou degradar com segurança quando a política necessária estiver ausente, inválida ou insuficiente.

## Status

Aprovada

## Data

2026-06-24

## DEC-161: Relatórios agendados pertencem ao BI, entrega multicanal pertence a Notificações

## Tema

Fronteira entre BI e Notificações.

## Decisão

BIReportSchedule, BIReportExecution e BIReportSnapshot pertencem ao BI. A entrega por push, e-mail, SMS, WhatsApp ou webhook pertence ao módulo Notificações por contrato autorizado.

## Motivo

Evitar que BI crie fila própria de entrega multicanal.

## Impacto

BI gera o relatório. Notificações entrega. Auditoria registra. Core autoriza.

## Status

Aprovada

## Data

2026-06-24

## DEC-162: Data mart, data warehouse e data lake em BI exigem governança explícita

## Tema

Governança de dados analíticos.

## Decisão

BIDataMart, DataWarehouseReference e DataLakeReference só podem existir como estruturas governadas, rastreáveis, autorizadas, minimizadas, segregadas por tenant e contexto, com contratos versionados, política de retenção, mascaramento, auditoria e owner_module definido.

É proibido usar essas estruturas como banco compartilhado, cópia irrestrita de dados operacionais ou data lake livre sem governança.

## Motivo

Evitar que Relatórios / BI vire ETL invasivo, fonte paralela de verdade ou repositório sensível sem controle.

## Impacto

Qualquer iniciativa analítica avançada deve declarar origem, escopo, finalidade, retenção, sensibilidade, mascaramento, rastreabilidade e compatibilidade antes de ser consumida pelo BI.

## Status

Aprovada

## Data

2026-06-24

Fronteira de Relatórios / BI consolidada nesta versão:
Relatórios / BI representa o domínio analítico oficial de dashboards, indicadores, métricas, KPIs, relatórios, consultas agregadas, visões gerenciais, visões operacionais analíticas, snapshots, filtros, widgets, insights, tendências, anomalias analíticas e exportações autorizadas por perfil, tenant, contexto e escopo.

Relatórios / BI não substitui Core Platform, Herança e Permissões, Segurança e LGPD, Auditoria e Compliance, Suporte e Operação, Financeiro, Controle de Acesso, Câmeras / VMS, Alarmes, Convites e Visitantes, Reservas, Tickets, Mural Informativo, Notificações, Automações, Marketplace de Integrações, Gateway Local / Mikrotik / Tunnel, Dispositivos ou White-label.

Relatórios / BI não acessa banco interno de outro módulo, não usa read model como banco compartilhado, não define política de retenção ou mascaramento, não cria evidência investigativa, não executa workflow, não envia notificação como domínio próprio, não executa regra operacional e não exporta dado sensível sem autorização, finalidade, política, mascaramento, retenção e trilha.

Frase operacional consolidada de Relatórios / BI:
BI analisa. Módulo dono informa. Core autoriza. Segurança protege. Auditoria registra.


A última decisão oficial registrada era DEC-178 antes da Revisão Geral. Após a revisão, ver DEC-179 a DEC-183 ao final deste documento.

Decisões aprovadas nesta atualização de blindagem:
  • DEC-128
  • DEC-129
  • DEC-130

Decisões aprovadas na consolidação de Segurança e LGPD:
  • DEC-131
  • DEC-132
  • DEC-133
  • DEC-134
  • DEC-135
  • DEC-136
  • DEC-137
  • DEC-138

Decisões aprovadas na consolidação de Suporte e Operação:
  • DEC-139
  • DEC-140
  • DEC-141
  • DEC-142
  • DEC-143
  • DEC-144
  • DEC-145

Regra de produção consolidada:
Contrato protege módulo. Contexto protege tenant. Core protege autorização. Segurança protege dado. Auditoria preserva prova.


# DEC-As decisões abaixo continuam a sequência oficial após DEC-145.

# DEC-146: Reservas como domínio operacional de agenda e uso de recursos reserváveis

## Tema

Fronteira do módulo Reservas.

## Decisão

Reservas é o domínio oficial de agenda, disponibilidade, solicitação, aprovação, recusa, confirmação, cancelamento, check-in, check-out, no-show, conflitos, holds, bloqueios, regras de uso, participantes, convidados vinculados, histórico operacional e uso reservado de recursos físicos ou compartilhados.

Reservas não substitui Core Platform, Unidades, Blocos, Áreas e Ambientes, Controle de Acesso, Financeiro, Convites e Visitantes, Tickets, Suporte e Operação, Notificações, Automações, Segurança e LGPD, Auditoria e Compliance, Relatórios / BI, Marketplace de Integrações ou White-label.

## Motivo

Evitar que Reservas se transforme em módulo universal e garantir separação clara entre agenda, estrutura física, passagem física, cobrança, visitação, comunicação, automação e auditoria.

## Impacto

Reservation, ReservationRequest, ReservationAvailability, ReservationCalendar, ReservationRule, ReservationHold, ReservationBlock, ReservationCheckIn, ReservationCheckOut e ReservationNoShow pertencem ao módulo Reservas.

## Status

Aprovada

## Data

2026-06-24

# DEC-147: ReservableResource não transfere domínio da estrutura física

## Tema

Fronteira entre Reservas e Unidades, Blocos, Áreas e Ambientes.

## Decisão

Reservas pode criar ReservableResource e ReservationResourceReference com base em StructureReference, ResourceReference ou referência autorizada de área, ambiente, unidade, bloco ou recurso estrutural marcado como reservável.

Criar um recurso reservável não transfere Unit, Block, Area, Environment, StructureRoot ou PhysicalStructureNode para Reservas.

## Motivo

Preservar Unidades, Blocos, Áreas e Ambientes como fonte oficial da estrutura física e Reservas como domínio de agenda.

## Impacto

Unidades localiza e classifica. Reservas agenda e controla disponibilidade. Associação física não transfere domínio operacional.

## Status

Aprovada

## Data

2026-06-24

# DEC-148: ReservationAccessWindow não executa passagem física

## Tema

Fronteira entre Reservas e Controle de Acesso.

## Decisão

Reservas pode criar ReservationAccessWindow e ReservationAccessRequest para informar a janela operacional vinculada à reserva.

Controle de Acesso permanece dono de AccessCredential, AccessGrant, AccessDeny, AccessEvent, RemoteUnlock e AccessExecutionResult.

Reservas não abre porta, não cria credencial física e não executa passagem.

## Motivo

Evitar motor paralelo de acesso físico dentro de Reservas.

## Impacto

Reservas temporiza o uso do recurso. Controle de Acesso materializa a passagem física autorizada.

## Status

Aprovada

## Data

2026-06-24

# DEC-149: Reservas solicita cobranças, mas não executa financeiro

## Tema

Fronteira entre Reservas e Financeiro.

## Decisão

Reservas pode criar ReservationChargeRequest, ReservationDepositRequest, ReservationPenaltyRequest e ReservationRefundRequest.

Financeiro permanece dono de Invoice, Payment, PaymentReceipt, Refund, boleto, Pix, cartão, conciliação, inadimplência, caução financeira, repasse, split e relatórios financeiros.

Reservas não gera cobrança diretamente.

## Motivo

Evitar motor financeiro paralelo dentro de Reservas.

## Impacto

Reservas solicita cobrança, caução, penalidade e reembolso por contrato. Financeiro executa e publica eventos financeiros. Reservas reage apenas por política e autorização.

## Status

Aprovada

## Data

2026-06-24

# DEC-150: Lista de convidados de reserva não substitui Convites e Visitantes

## Tema

Fronteira entre Reservas e Convites e Visitantes.

## Decisão

Reservas pode manter ReservationGuestList e ReservationGuestReference como vínculos operacionais da reserva.

Convites e Visitantes permanece dono de VisitorInvite, TemporaryVisitor, TemporaryVisitPass, QR temporário, aprovação de visitante, check-in e check-out de visitante.

## Motivo

Evitar duplicidade entre convidados de uma reserva e fluxo oficial de visita temporária.

## Impacto

Reservas organiza o uso do espaço. Convites e Visitantes organiza a visita. Controle de Acesso executa passagem física quando autorizada.

## Status

Aprovada

## Data

2026-06-24

# DEC-151: ReservationTicketRequest não substitui Tickets

## Tema

Fronteira entre Reservas e Tickets.

## Decisão

Reservas pode criar ReservationTicketRequest por dano, limpeza, manutenção, problema operacional, disputa, uso irregular ou no-show.

Tickets permanece dono de OperationalTicket, TicketSLA, TicketComment, TicketAttachment, TicketResolution, escalonamento, reabertura e histórico de atendimento.

## Motivo

Evitar que Reservas crie central paralela de atendimento ou ocorrência.

## Impacto

Reservas solicita atendimento. Tickets atende, registra, escala e resolve.

## Status

Aprovada

## Data

2026-06-24

# DEC-152: Eventos de Reservas podem acionar Automações sem criar workflow interno

## Tema

Fronteira entre Reservas e Automações.

## Decisão

Reservas pode publicar eventos como ReservationRequested, ReservationApproved, ReservationConfirmed, ReservationCancelled, ReservationNoShowMarked, ReservationCheckInRegistered e ReservationCheckOutRegistered para servir de gatilho ao módulo Automações.

Reservas não cria AutomationWorkflow, não executa ações genéricas e não dispara regra de domínio alheio por conta própria.

## Motivo

Permitir orquestração modular sem criar motor paralelo de workflow em Reservas.

## Impacto

Automações consome eventos, avalia condições, solicita ações autorizadas e o módulo dono executa.

## Status

Aprovada

## Data

2026-06-24

# DEC-153: Dados sensíveis de Reservas exigem finalidade, minimização, mascaramento, retenção e trilha

## Tema

Segurança, LGPD e auditoria em Reservas.

## Decisão

Participantes, convidados, histórico de uso, check-in, check-out, no-show, cobrança vinculada, acesso vinculado, exportações, justificativas, anexos e observações de reserva devem respeitar finalidade, autorização, minimização, mascaramento, retenção, política de Segurança e LGPD e trilha de auditoria.

Reservas não pode guardar segredo bruto em payload, evento, log, read model, URL, comentário, anexo ou notificação.

## Motivo

Reservas concentra dados de presença, comportamento, convidados, uso de espaços e possíveis informações financeiras ou de acesso físico.

## Impacto

Visualização, exportação, compartilhamento e retenção de dados de reserva devem ser protegidos por padrão e auditados.

## Status

Aprovada

## Data

2026-06-24

Fronteira de Reservas consolidada nesta versão:
Reservas representa o domínio operacional de agenda, disponibilidade e uso reservado de recursos físicos ou compartilhados.

Reservas não substitui Core Platform, Unidades, Blocos, Áreas e Ambientes, Controle de Acesso, Financeiro, Convites e Visitantes, Tickets, Suporte e Operação, Notificações, Automações, Segurança e LGPD, Auditoria e Compliance, Relatórios / BI, Marketplace de Integrações ou White-label.

Frase operacional consolidada de Reservas:
Reservas agenda. Estrutura localiza. Core autoriza. Acesso executa passagem. Financeiro cobra quando aplicável. Notificações comunica. Auditoria registra.

Estado atual consolidado após esta atualização:

# DEC-154: Nome oficial do projeto e aplicativo como NoduOS

## Tema

Identidade oficial do produto, nome comercial do aplicativo e identidade visual inicial.

## Decisão

O nome oficial do app e do projeto passa a ser NoduOS.

A descrição oficial permanece:

SaaS Modular de Gestão de Espaços e Segurança Unificada.

O conceito técnico permanece:

Sistema Operacional Modular para Espaços Físicos Conectados.

A expressão Building OS Modular Platform deixa de ser nome provisório e passa a ser tratada apenas como conceito técnico, categoria arquitetural ou descrição estratégica.

A identidade visual oficial inicial registra:

- Conceito: Conexão que impulsiona.
- Paleta principal: #1F2937, #00A37A e #F1F3F5.
- Direção de marca: conexão, acesso, automação, inteligência e eficiência.

## Motivo

Registrar a identidade oficial do produto nos documentos centrais, encerrar o estado de nome provisório e garantir que todos os próximos módulos, prompts, planejamentos, telas, documentações e comunicações usem a mesma nomenclatura.

## Impacto

Todos os documentos centrais passam a usar NoduOS como nome oficial do app e do projeto.

A descrição “SaaS Modular de Gestão de Espaços e Segurança Unificada” permanece como subtítulo funcional e não deve ser removida.

Building OS permanece como conceito técnico de posicionamento e arquitetura.

O módulo White-label continua responsável por marcas, temas, domínios e customizações por parceiro ou organização, quando autorizado, sem alterar o nome oficial do projeto raiz nem as fronteiras arquiteturais centrais.

Esta decisão não altera hierarquia, herança, Core Platform, módulos comerciais, contratos, permissões, LGPD, auditoria, blindagem de produção ou fronteiras já aprovadas.

## Status

Aprovada

## Data

2026-06-24

A última decisão oficial registrada era DEC-178 antes da Revisão Geral. Após a revisão, ver DEC-179 a DEC-183 ao final deste documento.

Decisões aprovadas na consolidação de Reservas:
  • DEC-146
  • DEC-147
  • DEC-148
  • DEC-149
  • DEC-150
  • DEC-151
  • DEC-152
  • DEC-153
  • DEC-154
  • DEC-155
  • DEC-156
  • DEC-157
  • DEC-158
  • DEC-159
  • DEC-160
  • DEC-161
  • DEC-162


# DEC-163: White-label como domínio oficial de identidade visual autorizada

### Tema

Fronteira do módulo White-label.

### Decisão

White-label é o domínio oficial de tema, marca, logo, paleta, domínio customizado, favicon, assets, templates visuais, preview, publicação, rollback, fallback e experiência visual autorizada por Master, Parceiro ou Organização.

### Motivo

Separar identidade visual de regras de negócio, permissões, licenças, segurança, auditoria, BI, notificações, financeiro e módulos operacionais.

### Impacto

White-label passa a ser reconhecido como módulo dono da apresentação visual customizada, sem executar domínio operacional.

### Status

Aprovada

### Data

2026-06-24

# DEC-164: White-label não altera regra de negócio, autorização, licença, tenant ou contexto

### Tema

Proteção contra acoplamento com Core e módulos donos.

### Decisão

White-label não pode criar Tenant, Context, UserAccount, PermissionGrant, License, FeatureFlag ou AuthorizationDecision e não pode alterar regra operacional de qualquer módulo dono.

### Motivo

Evitar motor paralelo ao Core Platform e evitar que aparência visual altere comportamento operacional.

### Impacto

Toda ação sensível de White-label deve consultar Core Platform e respeitar módulo ativo, licença, feature flag, contexto, escopo e AuthorizationDecision.

### Status

Aprovada

### Data

2026-06-24

# DEC-165: NoduOS permanece nome oficial raiz mesmo com marcas customizadas

### Tema

Identidade oficial e white-label.

### Decisão

White-label pode exibir nome comercial por parceiro ou organização quando autorizado, mas não pode sobrescrever NoduOS como nome oficial do projeto, aplicativo, documentação raiz, arquitetura, decisões centrais, contratos estruturais ou auditoria oficial.

### Motivo

Permitir multimarca sem apagar a identidade raiz e sem gerar confusão documental ou arquitetural.

### Impacto

Marcas customizadas aparecem apenas no contexto autorizado. NoduOS permanece como nome oficial central.

### Status

Aprovada

### Data

2026-06-24

# DEC-166: Domínio customizado e certificados exigem validação, referência segura e fail-closed

### Tema

Domínios, DNS, certificados e segurança.

### Decisão

CustomDomain, CustomSubdomain, DomainVerificationRecord, DomainDnsInstruction, DomainCertificateReference e SslCertificateReference pertencem ao White-label, mas certificados, credenciais e segredos devem ser tratados apenas por referência segura, nunca como segredo bruto.

### Motivo

Evitar exposição de credenciais, domínio sem validação, certificado inseguro e bypass de segurança.

### Impacto

Domínio customizado só pode ser ativado após validação, escopo autorizado, certificado seguro e auditoria. Falhas devem negar, pausar ou degradar com segurança.

### Status

Aprovada

### Data

2026-06-24

# DEC-167: Assets, uploads e templates visuais exigem validação de segurança e LGPD

### Tema

Assets, templates e proteção de dados.

### Decisão

Uploads de logo, imagem, ícone, favicon, templates visuais e assets de marca devem passar por validação de tipo, tamanho, conteúdo, segurança, metadados, política contra phishing visual, spoofing de marca e exposição indevida de dados.

### Motivo

Impedir asset malicioso, template inseguro e uso indevido de dados ou marcas.

### Impacto

White-label deve aplicar políticas de Segurança e LGPD por referência antes de publicar assets ou templates sensíveis.

### Status

Aprovada

### Data

2026-06-24

# DEC-168: Templates visuais pertencem ao White-label, execução pertence ao módulo dono

### Tema

Separação entre aparência e execução.

### Decisão

Templates visuais de notificação, e-mail, documento, relatório e página pública pertencem ao White-label quando forem apenas camada visual. A entrega, geração, cobrança, relatório ou execução operacional pertence ao módulo dono correspondente.

### Motivo

Evitar que White-label substitua Notificações, BI, Financeiro ou módulos operacionais.

### Impacto

White-label define aparência. Notificações entrega. BI gera relatório. Financeiro emite cobrança. Módulo dono executa sua regra.

### Status

Aprovada

### Data

2026-06-24

# DEC-169: Publicação, rollback e fallback de tema são ações críticas idempotentes

### Tema

Publicação visual e blindagem de produção.

### Decisão

BrandPublishingRequest, BrandPublishingResult, publicação de ThemeVersion, rollback de tema, ativação de domínio, vínculo de certificado e alteração crítica de template devem usar idempotency_key, correlation_id, causation_id quando aplicável, contratos versionados e trilha auditável.

### Motivo

Evitar publicação duplicada, estado visual inconsistente, falhas invisíveis e quebra de produção.

### Impacto

Ações críticas de White-label devem ser reprocessáveis com segurança, auditáveis e fail-closed.

### Status

Aprovada

### Data

2026-06-24

# DEC-170: Herança visual é escopada e não concede permissão operacional

### Tema

Herança visual.

### Decisão

A herança visual pode aplicar tema padrão NoduOS, tema do parceiro ou tema da organização conforme escopo autorizado, mas não concede permissão, não ativa módulo, não libera recurso, não altera herança operacional e não muda regra de negócio.

### Motivo

Evitar confusão entre aparência visual e autorização operacional.

### Impacto

A resolução visual deve obedecer contexto, licença, feature flag, permissão e AuthorizationDecision, mas nunca substituir esses controles.

### Status

Aprovada

### Data

2026-06-24

Fronteira de White-label consolidada nesta versão:
White-label representa o domínio oficial de identidade visual autorizada do NoduOS, permitindo tema, marca, logo, cores, paleta, tipografia, ícones, favicon, domínio customizado, subdomínio, assets, templates visuais, preview, publicação, rollback, fallback e experiência visual customizada por Master, Parceiro ou Organização.

White-label não substitui Core Platform, Master, Parceiros, Organizações, Financeiro, Notificações, Relatórios / BI, Segurança e LGPD, Auditoria e Compliance, Marketplace de Integrações, Suporte e Operação ou módulos donos.

White-label não acessa banco interno de outro módulo, não usa read model como banco compartilhado, não armazena segredo bruto, não altera regra operacional, não executa entrega multicanal, não gera cobrança, não gera relatório analítico e não sobrescreve NoduOS como nome oficial raiz.

Frase operacional consolidada de White-label:
White-label personaliza. Core autoriza. Módulo dono preserva regra. Segurança protege. Auditoria registra.

A última decisão oficial registrada era DEC-178 antes da Revisão Geral. Após a revisão, ver DEC-179 a DEC-183 ao final deste documento.

Decisões aprovadas na consolidação de White-label:
  • DEC-163
  • DEC-164
  • DEC-165
  • DEC-166
  • DEC-167
  • DEC-168
  • DEC-169
  • DEC-170

8. Frase final de governança
O chat conversa. O documento manda. A decisão registrada protege a arquitetura contra acoplamento invisível.


# DEC-171: Master como domínio oficial de governança superior

### Tema

Fronteira do módulo Master.

### Decisão

Master representa o domínio oficial de governança superior da plataforma NoduOS, responsável por políticas superiores, limites, liberações superiores, governança de parceiros, módulos, planos comerciais, licenças comerciais, marketplace, white-label, integrações globais e visões administrativas autorizadas.

### Motivo

Separar governo superior de execução operacional e impedir que Master vire Core Platform, Parceiros ou módulo operacional.

### Impacto

Master governa limites, mas não substitui Core, Parceiros, Organizações, Financeiro, BI, White-label, Marketplace, Auditoria, Segurança, Suporte ou módulos donos.

### Status

Aprovada

### Data

2026-06-24

# DEC-172: Master não substitui Core Platform

### Tema

Separação entre Master e Core Platform.

### Decisão

Master não cria Tenant, Context, UserAccount, PermissionGrant, InheritanceGrant, AuthorizationDecision, License técnica, FeatureFlag técnica, ModuleRegistry, AuditLog base ou Event bus como fonte paralela.

### Motivo

Evitar motor paralelo de identidade, autorização, tenant, contexto, licença, feature flag e auditoria.

### Impacto

Toda ação sensível do Master deve consultar Core Platform e respeitar AuthorizationDecision.

### Status

Aprovada

### Data

2026-06-24

# DEC-173: Master governa parceiros sem substituir Parceiros

### Tema

Fronteira entre Master e Parceiros.

### Decisão

Master pode solicitar, aprovar, limitar, suspender, restaurar e governar parceiros por política superior. PartnerRecord, PartnerProfile, PartnerStatus, PartnerScope e operação diária pertencem ao módulo Parceiros.

### Motivo

Evitar duplicidade entre governança superior e operação do parceiro.

### Impacto

Criação e alteração de parceiro devem ocorrer por fluxo autorizado entre Master, Core Platform e Parceiros.

### Status

Aprovada

### Data

2026-06-24

# DEC-174: Master governa módulos, planos e licenças por política superior

### Tema

Governança comercial e técnica.

### Decisão

Master define políticas superiores de módulos, planos comerciais e limites comerciais. Core Platform mantém ModuleRegistry, Plan, License, Entitlement, FeatureFlag e AuthorizationDecision. Financeiro executa cobrança quando aplicável.

### Motivo

Separar política comercial, licença técnica, autorização e cobrança.

### Impacto

Master não vira Core Platform nem Financeiro.

### Status

Aprovada

### Data

2026-06-24

# DEC-175: Master consome visões globais sem acessar bancos internos

### Tema

Dashboards e visões globais.

### Decisão

Master pode consumir dashboards, resumos, indicadores e visões globais apenas por APIs internas, eventos, contratos versionados, read models autorizados e Relatórios / BI.

### Motivo

Evitar banco compartilhado, acoplamento invisível e cópia irrestrita de dados operacionais.

### Impacto

MasterGlobalDashboard não é data warehouse próprio nem atalho para banco interno.

### Status

Aprovada

### Data

2026-06-24

# DEC-176: Master governa White-label e Marketplace sem executar seus domínios

### Tema

Fronteira com White-label e Marketplace.

### Decisão

Master define políticas superiores de white-label e marketplace. White-label executa identidade visual autorizada. Marketplace executa catálogo, conectores, adapters, providers, instalação e versionamento.

### Motivo

Evitar que Master edite tema, instale conector, execute adapter ou guarde credencial.

### Impacto

Direitos superiores ficam no Master. Execução fica nos módulos donos.

### Status

Aprovada

### Data

2026-06-24

# DEC-177: Suspensão, bloqueio e restauração de parceiro são ações críticas idempotentes

### Tema

Governança crítica de parceiro.

### Decisão

Suspensão, bloqueio, restauração, liberação ou alteração crítica de limite de parceiro devem usar idempotency_key, correlation_id, AuthorizationDecision, política aplicável, contrato versionado, auditoria e comportamento fail-closed.

### Motivo

Evitar duplicidade, bloqueio indevido, restauração insegura e inconsistência entre módulos.

### Impacto

Parceiros, Core, Financeiro, White-label, Suporte, Organizações e módulos donos devem reagir por contratos autorizados.

### Status

Aprovada

### Data

2026-06-24

# DEC-178: Master não executa regra operacional de módulos donos

### Tema

Antiacoplamento operacional.

### Decisão

Master não abre porta, não visualiza câmera operacional, não gera cobrança, não cria reserva, não cria convite, não cria ticket operacional, não envia notificação multicanal, não executa automação, não instala conector, não investiga compliance e não executa suporte técnico como domínio próprio.

### Motivo

Preservar a regra: política influencia, Core decide, módulo dono executa, Auditoria registra.

### Impacto

Master pode solicitar, visualizar ou governar conforme autorização, mas a execução pertence ao módulo responsável.

### Status

Aprovada

### Data

2026-06-24

Fronteira de Master consolidada nesta versão:
Master representa o domínio oficial de governança superior da plataforma NoduOS. Ele governa políticas superiores, limites, liberações, parceiros, módulos, planos comerciais, licenças comerciais, white-label, marketplace, integrações globais e visões administrativas autorizadas.

Master não substitui Core Platform, Parceiros, Organizações, White-label, Marketplace de Integrações, Financeiro, Relatórios / BI, Auditoria e Compliance, Segurança e LGPD, Suporte e Operação ou módulos donos operacionais.

Master não cria Tenant, Context, UserAccount, PermissionGrant, InheritanceGrant, AuthorizationDecision, License técnica, FeatureFlag técnica, ModuleRegistry, AuditLog base ou Event bus.

Master não acessa banco interno de outro módulo, não usa read model como banco compartilhado, não guarda segredo bruto, não exporta dado sensível sem autorização, finalidade, política, mascaramento, retenção e trilha, e não executa regra operacional de módulos donos.

Frase operacional consolidada de Master:
Master governa o limite. Core autoriza. Parceiro opera. Módulo dono executa. Auditoria registra.

A última decisão oficial registrada era DEC-178 antes da Revisão Geral. Após a revisão, ver DEC-179 a DEC-183 ao final deste documento.

Decisões aprovadas na consolidação de Master:
  • DEC-171
  • DEC-172
  • DEC-173
  • DEC-174
  • DEC-175
  • DEC-176
  • DEC-177
  • DEC-178


# DEC-179: Regularização das decisões estruturais antigas em revisão

### Tema

Governança das decisões oficiais.

### Decisão

As decisões estruturais antigas que permaneciam em revisão ficam regularizadas da seguinte forma:

- DEC-031: substituída pela DEC-037.
- DEC-033: aprovada como regra oficial de EventEnvelope v1.
- DEC-034: substituída pela DEC-037, preservando a obrigatoriedade de AuthorizationDecision para ações sensíveis.
- DEC-035: aprovada como regra oficial de ResourceReference entre Core Platform e módulos donos.
- DEC-040: aprovada como separação oficial entre dependente, prestador recorrente e visitante temporário.
- DEC-041: aprovada como separação oficial entre consentimento biométrico, política de tratamento e credencial física biométrica.

### Motivo

Encerrar ambiguidades antigas antes da modelagem técnica e impedir que decisões centrais continuem com status indefinido apesar de já estarem incorporadas na arquitetura atual.

### Impacto

A raiz passa a não possuir DEC estrutural pendente em revisão. A próxima modelagem deve obedecer EventEnvelope v1, ResourceReference, AuthorizationDecision do Core, separação entre pessoa, visitante e biometria, e a regra “Política influencia. Core decide. Módulo dono executa. Auditoria registra.”

### Status

Aprovada

### Data

2026-06-25

# DEC-180: Matriz oficial de propriedade de entidades críticas

### Tema

Fronteiras de domínio e ownership.

### Decisão

Toda entidade, recurso, read model, credencial, política, log, evidência, contrato, comando, evento, webhook e API deve possuir owner_module único e consumidores autorizados.

Nenhum módulo pode assumir posse operacional de entidade pertencente a outro módulo. Quando precisar usar informação externa, deve usar ResourceReference, EvidenceReference, API interna, evento, contrato público versionado ou read model autorizado.

### Motivo

Evitar disputa de domínio, banco compartilhado, acoplamento invisível e execução de regra alheia.

### Impacto

Antes da modelagem técnica de banco, APIs e eventos, deve existir matriz de ownership por módulo. Read models e resumos não transferem domínio. O owner_module responde por ciclo de vida, validação, retenção, auditoria primária e compatibilidade do contrato.

### Status

Aprovada

### Data

2026-06-25

# DEC-181: Separação obrigatória entre comando, evento de fato e evento de solicitação registrada

### Tema

Event-driven, comandos e contratos.

### Decisão

Comando solicita execução. Evento comunica fato ocorrido. Read model permite consulta autorizada.

Eventos com sufixo Requested só podem ser usados quando representarem o fato de que uma solicitação foi registrada. Eles não podem substituir comandos, APIs de execução, workflows autorizados ou ações do módulo dono.

Exemplos corretos:

- Comando: RequestGatewayRegistration.
- Evento: GatewayRegistrationRequestRegistered.
- Evento final de fato: GatewayRegistered.

### Motivo

Evitar comandos disfarçados de eventos, execução indireta de domínio alheio, duplicidade e inconsistência em fluxos distribuídos.

### Impacto

Todo contrato futuro deve declarar tipo: comando, evento de fato, evento de solicitação registrada, webhook, read model ou consulta. Ações críticas devem usar idempotency_key, correlation_id, causation_id quando aplicável, outbox/inbox, retry controlado e fail-closed.

### Status

Aprovada

### Data

2026-06-25

# DEC-182: EvidenceReference como contrato oficial de evidências e cadeia de custódia

### Tema

Evidências, auditoria, compliance, vídeo, acesso, alarmes e suporte.

### Decisão

Evidências de vídeo, acesso físico, alarmes, tickets, suporte, incidentes, exportações e ocorrências críticas devem trafegar entre módulos por EvidenceReference seguro.

EvidenceReference deve conter referência segura, owner_module, origem, escopo, finalidade, classificação de dado, política de retenção, hash ou controle de integridade quando aplicável, permissões, cadeia de custódia e trilha auditável.

Dados brutos de vídeo, imagem, biometria, documento, segredo, IP interno, credencial ou payload sensível não devem trafegar como evento, log, URL, relatório ou read model sem proteção adequada.

### Motivo

Preservar privacidade, LGPD, rastreabilidade, integridade e validade de evidências sem transformar Auditoria e Compliance, BI ou Suporte em banco de dados bruto dos módulos operacionais.

### Impacto

Câmeras / VMS continua dona de vídeo. Controle de Acesso continua dono de eventos de passagem. Alarmes continua dono de eventos de alarme. Tickets e Suporte continuam donos de seus registros operacionais. Auditoria e Compliance governa investigação, correlação, exportação e cadeia de custódia por contrato autorizado.

### Status

Aprovada

### Data

2026-06-25

# DEC-183: Taxonomia obrigatória para Veículos, Documentos e Ocorrências antes da modelagem técnica

### Tema

Lacunas de domínio.

### Decisão

Veículos, Documentos e Ocorrências não devem ser modelados como entidades genéricas universais sem definição de ownership.

Antes da modelagem técnica, cada tipo deve ser classificado:

- Veículos: vínculo pessoal, recurso de unidade, credencial de acesso, estacionamento, visitante ou domínio futuro.
- Documentos: documento pessoal, institucional, financeiro, operacional, evidência, publicação ou anexo de atendimento.
- Ocorrências: ticket operacional, evento de alarme, evento de acesso, incidente de segurança, incidente de privacidade, incidente de plataforma, evidência de auditoria ou registro operacional do módulo dono.

### Motivo

Evitar entidade genérica inchada, disputa entre módulos, acoplamento com Tickets, Auditoria, Pessoas, Financeiro, Acesso ou Organizações, e perda de governança LGPD.

### Impacto

A modelagem técnica só deve criar essas entidades após definir owner_module, consumidores autorizados, dados sensíveis, retenção, auditoria e contratos públicos.

### Status

Aprovada

### Data

2026-06-25


# DEC-184: Catálogo de Contratos Públicos como artefato técnico oficial

### Tema

Contratos públicos, versionamento e governança técnica.

### Decisão

O NoduOS passa a adotar o Catálogo de Contratos Públicos como artefato técnico oficial e obrigatório antes de banco de dados, endpoints finais, telas, integrações e implementação.

O catálogo deve consolidar contratos públicos versionados para APIs internas, comandos, eventos de fato ocorrido, eventos de solicitação registrada, webhooks, read models autorizados, contratos de política, autorização, evidência, exportação, análise, diagnóstico, integração, notificação, suporte, auditoria, segurança e LGPD.

### Motivo

Preservar modularidade, baixo acoplamento, compatibilidade futura, governança técnica, segurança, LGPD, auditoria e evolução sem quebrar consumidores.

### Impacto

Nenhum módulo deve avançar para schema técnico, banco, endpoint final, tela ou integração sem ter seus contratos públicos essenciais definidos ou referenciados no catálogo.

### Status

Aprovada

### Data

2026-06-25

# DEC-185: Tipos oficiais de contrato público

### Tema

Classificação de contratos públicos.

### Decisão

O NoduOS reconhece 18 tipos oficiais de contrato público: API interna, Comando, Evento de fato ocorrido, Evento de solicitação registrada, Read model autorizado, Webhook interno, Webhook externo, Contrato de política, Contrato de autorização, Contrato de evidência, Contrato de exportação, Contrato analítico, Contrato de diagnóstico, Contrato de integração, Contrato de notificação, Contrato de suporte, Contrato de auditoria e Contrato de segurança e LGPD.

### Motivo

Evitar confusão entre intenção, fato, leitura, política, evidência e execução operacional.

### Impacto

Todo contrato público deve declarar seu tipo oficial. Contratos ambíguos devem ser separados antes da modelagem técnica.

### Status

Aprovada

### Data

2026-06-25

# DEC-186: Metadados mínimos obrigatórios de contrato

### Tema

Metadados, segurança, compatibilidade e governança de contratos.

### Decisão

Todo contrato público deve declarar, no mínimo: contract_id, contract_name, contract_type, owner_module, versão, status, objetivo, consumidores autorizados, permissões, escopo, tenant/contexto quando aplicável, dados sensíveis, nível de sensibilidade, minimização, mascaramento, retenção, auditoria, AuthorizationDecision quando sensível, idempotência quando crítico, correlation_id, causation_id quando aplicável, EventEnvelope v1 quando evento, outbox/inbox quando crítico, retry, dead-letter/quarentena, comportamento em falha, fail-closed, compatibilidade, descontinuação e riscos de acoplamento.

### Motivo

Impedir contrato sem dono, sem versão, sem escopo, sem política de dados, sem auditoria ou sem comportamento seguro de falha.

### Impacto

Contrato sem owner_module, versão, escopo, política de dados sensíveis e comportamento de falha não pode ser aprovado como contrato oficial.

### Status

Aprovada

### Data

2026-06-25

# DEC-187: Separação oficial entre contrato, schema técnico e implementação

### Tema

Fronteira entre arquitetura contratual e implementação técnica.

### Decisão

O Catálogo de Contratos Públicos define a fronteira conceitual pública entre módulos, mas não substitui schema técnico final, banco de dados, endpoint, migration, DTO de linguagem específica, rota de framework, tela ou implementação.

### Motivo

Evitar que a etapa de contratos vire modelagem prematura de banco ou código, mantendo a arquitetura focada em fronteira, owner, consumidor, versão, segurança, auditoria e compatibilidade.

### Impacto

A modelagem técnica futura deve derivar dos contratos aprovados, mas ainda precisará detalhar schemas, tipos, endpoints, bancos, filas, telas e integrações separadamente.

### Status

Aprovada

### Data

2026-06-25

# DEC-188: Política oficial de versionamento e ciclo de vida de contratos públicos

### Tema

Versionamento, compatibilidade, depreciação e ciclo de vida de contratos públicos.

### Decisão

Todo contrato público deve seguir política de versionamento, compatibilidade, depreciação e ciclo de vida. Mudanças incompatíveis exigem nova versão, janela de compatibilidade, política de migração e descontinuação explícita.

Os status permitidos para contratos são: Draft, Approved, Active, Deprecated, Superseded, Retired e Revoked. Contrato sem status não pode ser oficial.

### Motivo

Permitir evolução técnica sem quebrar consumidores, sem remover campo obrigatório de forma invisível, sem alterar semântica e sem reduzir segurança, autorização ou classificação de sensibilidade.

### Impacto

Módulos consumidores devem tolerar campos adicionais em mudanças compatíveis. Contratos depreciados devem declarar substituto, janela de suporte, consumidores conhecidos, plano de retirada e critério de bloqueio fail-closed após retirada.

### Status

Aprovada

### Data

2026-06-25

Fronteira de Revisão Geral consolidada nesta versão:
A raiz do NoduOS foi revisada e consolidada para preservar a lógica modular completa, a interação correta entre módulos, a sequência de decisões oficiais, a separação entre comando, evento e read model, a matriz de ownership crítico, a cadeia de custódia por EvidenceReference e as lacunas de domínio a resolver antes da modelagem técnica.

Frase operacional consolidada da Revisão Geral:
Raiz consolida. Contrato estabiliza. Módulo preserva fronteira. Produção agradece.

A última decisão oficial registrada é DEC-188.
As próximas decisões novas devem começar em DEC-189, salvo alteração formal posterior neste documento.

Decisões aprovadas na Revisão Geral de Consolidação:
  • DEC-179
  • DEC-180
  • DEC-181
  • DEC-182
  • DEC-183

Fronteira do Catálogo de Contratos Públicos consolidada nesta versão:
O NoduOS passa a possuir um documento técnico raiz complementar para governar contratos públicos versionados entre módulos, separando comando, evento de fato ocorrido, evento de solicitação registrada, read model autorizado, webhooks, políticas, autorização, evidência, exportação, integração, auditoria, segurança e LGPD.

Frase operacional consolidada do Catálogo:
Contrato protege módulo. Contexto protege tenant. Core protege autorização. Segurança e LGPD protege dados. Auditoria preserva prova.

A última decisão oficial registrada é DEC-188.
As próximas decisões novas devem começar em DEC-189, salvo alteração formal posterior neste documento.

Decisões aprovadas no Catálogo de Contratos Públicos:
  • DEC-184
  • DEC-185
  • DEC-186
  • DEC-187
  • DEC-188

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

---

Fronteira da Matriz Técnica de Permissões por Contrato consolidada nesta versão:
O NoduOS passa a possuir uma matriz técnica oficial para definir quem pode chamar ou consumir cada contrato público, em qual escopo, com qual permissão conceitual e sob quais exigências de AuthorizationDecision, Segurança e LGPD, auditoria, idempotência e fail-closed.

Frase operacional consolidada da Matriz Técnica de Permissões por Contrato:
Permissão limita o ator. Contrato limita o caminho. Core decide. Módulo dono executa. Auditoria registra.

A última decisão oficial registrada antes da Matriz Técnica de Dados Sensíveis por Contrato era DEC-190.

Decisões aprovadas na Matriz Técnica de Permissões por Contrato:
  • DEC-189
  • DEC-190


# DEC-191: Matriz Técnica de Dados Sensíveis por Contrato como artefato técnico oficial complementar

## Tema

Governança técnica de dados sensíveis por contrato público.

## Decisão

O NoduOS passa a adotar a Matriz Técnica de Dados Sensíveis por Contrato como artefato técnico oficial complementar ao Catálogo de Contratos Públicos e à Matriz Técnica de Permissões por Contrato.

A matriz define, por contrato público, quais categorias de dados podem trafegar, quais são proibidas, quais devem ser tratadas apenas por ResourceReference, EvidenceReference ou SecretReference, quais exigem mascaramento, finalidade explícita, consentimento ou política equivalente, base legal ou política de Segurança e LGPD, retenção específica, descarte, expurgo, anonimização, AuthorizationDecision, auditoria de visualização, auditoria de exportação e fail-closed.

A matriz não substitui Segurança e LGPD, Core Platform, Auditoria e Compliance, Catálogo de Contratos Públicos, Matriz Técnica de Permissões por Contrato ou o módulo dono. Ela funciona como filtro obrigatório de payload sensível antes de schema técnico, banco de dados, endpoints finais, filas, eventos, webhooks, read models, BI, exportações, integrações, telas ou implementação.

## Motivo

Impedir exposição indevida de dados pessoais, financeiros, biométricos, vídeo, imagem, evidência, visitante, suporte, segredo, certificado, token, webhook externo, conector externo, IP interno, rota local, túnel, logs técnicos, auditoria e exportações sensíveis.

Também impedir que contratos públicos virem canal de vazamento, banco compartilhado, payload bruto indevido, bypass de política LGPD, bypass de autorização, evidência sem cadeia de custódia ou segredo fora de cofre.

## Impacto

Todo contrato público deverá ser validado contra a Matriz Técnica de Dados Sensíveis por Contrato antes da modelagem técnica e da implementação.

O Catálogo de Contratos Públicos deverá carregar metadados sensíveis obrigatórios como categorias permitidas, categorias proibidas, nível de sensibilidade, finalidade, base legal ou política aplicável, máscara, retenção, referência obrigatória, permissão de payload bruto, auditoria de visualização e auditoria de exportação.

A Matriz Técnica de Permissões por Contrato deverá ser usada em conjunto com a Matriz Técnica de Dados Sensíveis por Contrato. Uma chamada autorizada por perfil e permissão ainda deve respeitar minimização, finalidade, retenção, mascaramento, referência segura e fail-closed.

## Status

Aprovada

## Data

2026-06-27

---

Fronteira da Matriz Técnica de Dados Sensíveis por Contrato consolidada nesta versão:
O NoduOS passa a possuir uma matriz técnica oficial para definir o que cada contrato público pode carregar, mascarar, referenciar, reter, exportar ou proibir, preservando LGPD, minimização, finalidade, retenção, auditoria, EvidenceReference, SecretReference, ResourceReference e fail-closed.

Frase operacional consolidada da Matriz Técnica de Dados Sensíveis por Contrato:
Dado sensível exige finalidade. Contrato limita payload. Segurança protege. Core autoriza. Auditoria evidencia.

A última decisão oficial registrada era DEC-191 antes da consolidação do EventEnvelope v1.
As próximas decisões novas devem começar em DEC-193 após a DEC-192, salvo alteração formal posterior neste documento.

Decisões aprovadas na Matriz Técnica de Dados Sensíveis por Contrato:
  • DEC-191

# DEC-192: EventEnvelope v1 como padrão oficial obrigatório de eventos públicos intermodulares

## Tema

Eventos, contratos públicos, rastreabilidade, payload mínimo, auditoria, LGPD e integração entre módulos.

## Decisão

O NoduOS passa a adotar o EventEnvelope v1 como padrão transversal oficial e obrigatório para eventos públicos intermodulares.

O EventEnvelope v1 deve ser usado em todo evento publicado entre módulos, evento consumido por read model autorizado, evento entregue por webhook autorizado, evento externo recebido e normalizado, evento técnico de retry, evento de dead-letter, evento de quarentena e evento que sirva de base para auditoria, segurança, LGPD, BI, suporte, evidência ou compliance.

O EventEnvelope v1 deve carregar metadados conceituais de contrato, versão, source_module, owner_module, producer_module, tenant, contexto, ator, recurso, permissão, políticas aplicáveis, sensibilidade, categorias de dados, finalidade, auditoria, correlação, causalidade, payload minimizado, compatibilidade, depreciação e tratamento de falha.

Evento não é comando, não é banco compartilhado, não transporta estado interno completo do módulo dono, não cria autorização nova e não permite execução de domínio alheio.

Quando houver `authorization_decision_reference`, ela representa apenas a decisão original emitida pelo Core Platform no momento da ação original. Qualquer nova ação sensível derivada do evento exige nova AuthorizationDecision, no escopo do consumidor e do módulo dono.

Eventos sensíveis e críticos devem respeitar a Matriz Técnica de Permissões por Contrato, a Matriz Técnica de Dados Sensíveis por Contrato, políticas de Segurança e LGPD, auditoria, minimização, mascaramento, retenção, ResourceReference, EvidenceReference, SecretReference quando aplicável, outbox no produtor, inbox/deduplicação no consumidor, retry controlado, dead-letter, quarentena e fail-closed.

## Motivo

Impedir que eventos virem comandos disfarçados, banco compartilhado, payload bruto indevido, bypass de autorização, vazamento de dados sensíveis, acoplamento entre módulos ou execução de domínio alheio.

Garantir que todos os fluxos distribuídos tenham rastreabilidade, `correlation_id`, `causation_id` quando derivado, auditoria, compatibilidade, depreciação e tratamento seguro de falhas antes da modelagem técnica e da programação.

## Impacto

Todos os módulos que publicarem, consumirem, entregarem, normalizarem, reprocessarem ou exportarem eventos deverão obedecer o EventEnvelope v1.

O Catálogo de Contratos Públicos, a Matriz Técnica de Permissões por Contrato e a Matriz Técnica de Dados Sensíveis por Contrato passam a ser aplicados em conjunto com o `08_DETALHAMENTO_EVENTENVELOPE_V1.md`.

Eventos mínimos listados no detalhamento do EventEnvelope v1 devem ser tratados como identificadores conceituais de eventos envelopados, não como novos contratos públicos independentes automaticamente. A criação de contratos públicos independentes para eventos específicos exige detalhamento técnico posterior ou decisão oficial futura.

A próxima etapa técnica recomendada passa a ser o Detalhamento de EvidenceReference.

## Status

Aprovada

## Data

2026-06-27

---

Fronteira do EventEnvelope v1 consolidada nesta versão:
O NoduOS passa a possuir um padrão oficial para eventos públicos intermodulares, preservando contrato, contexto, autorização, minimização de payload, rastreabilidade, auditoria, LGPD, outbox, inbox, deduplicação, retry, dead-letter, quarentena e fail-closed.

Frase operacional consolidada do EventEnvelope v1:
Evento comunica fato. Envelope protege contexto. Payload minimiza dado. Correlação preserva fluxo. Auditoria preserva prova.

A última decisão oficial registrada é DEC-192.
As próximas decisões novas devem começar em DEC-193, salvo alteração formal posterior neste documento.

Decisões aprovadas no Detalhamento de EventEnvelope v1:
  • DEC-192


# DEC-193: Detalhamento técnico complementar do EvidenceReference v1 como padrão oficial de referência segura de evidências

## Tema

Evidências, provas, cadeia de custódia, storage seguro, auditoria, LGPD, exportação sensível e integração com EventEnvelope v1.

## Decisão

O NoduOS passa a adotar o Detalhamento de EvidenceReference v1 como padrão técnico raiz complementar para referência segura de evidências.

A DEC-182 permanece como decisão base que reconhece EvidenceReference como contrato oficial de evidência e cadeia de custódia. A DEC-193 não substitui, não revoga e não duplica a DEC-182. Ela detalha semântica, campos conceituais, proibições, relações com EventEnvelope v1, ResourceReference, SecretReference, FileAttachmentReference e AuditTrailReference, cadeia de custódia, storage_reference seguro, integridade, hash, retenção, mascaramento, visualização, exportação, quarentena, reprocessamento, auditoria e fail-closed.

EvidenceReference v1 deve ser usado quando houver vídeo, imagem, snapshot, clip, playback, stream com valor probatório, documento probatório, anexo probatório, evento de acesso, evento de alarme, pânico, suporte remoto, diagnóstico usado como prova, trilha de auditoria, caso de compliance, solicitação LGPD, exportação sensível, pacote probatório, evidência externa normalizada ou qualquer prova que não deva trafegar bruta em payload, evento, webhook, read model, relatório ou exportação.

EvidenceReference aponta para a prova e preserva metadados suficientes para escopo, finalidade, autorização, política, retenção, máscara, acesso, exportação, integridade, cadeia de custódia e auditoria. Ele não deve transportar prova bruta quando referência segura bastar.

## Motivo

Impedir que evidências virem payload bruto indevido, storage público, URL permanente, path exposto, bucket sensível, banco compartilhado, bypass de autorização, bypass de LGPD, vazamento de vídeo/imagem/documento, prova sem cadeia de custódia ou exportação sem trilha.

Garantir que evidências críticas e sensíveis sejam tratadas com finalidade, minimização, mascaramento, retenção, cadeia de custódia, integridade, auditabilidade, autorização do Core quando aplicável e comportamento fail-closed.

## Impacto

O arquivo `09_DETALHAMENTO_EVIDENCEREFERENCE_V1.md` passa a integrar a raiz como documento técnico oficial complementar.

O Catálogo de Contratos Públicos, a Matriz Técnica de Permissões por Contrato, a Matriz Técnica de Dados Sensíveis por Contrato e o Detalhamento de EventEnvelope v1 devem referenciar EvidenceReference v1 sempre que um contrato, evento, webhook, read model, exportação ou relatório envolver prova ou evidência.

Eventos podem transportar `evidence_reference`, mas não transportam prova bruta quando referência bastar. Visualização, exportação, compartilhamento, reprocessamento, liberação de quarentena ou acesso ao bruto exigem autorização própria, finalidade, política, escopo e auditoria.

Câmeras / VMS continua dona de vídeo, snapshot, clip e evidência visual. Controle de Acesso continua dono dos eventos de acesso. Alarmes continua dono dos eventos de alarme e pânico. Tickets e Suporte continuam donos dos registros operacionais. Auditoria e Compliance preserva trilha e cadeia de custódia. Segurança e LGPD governa políticas de tratamento, retenção, máscara, descarte, expurgo e anonimização. Nenhuma fronteira de módulo é alterada.

A próxima etapa técnica recomendada passa a ser o Detalhamento de SecretReference.

## Status

Aprovada

## Data

2026-06-27

---

Fronteira do EvidenceReference v1 consolidada nesta versão:
O NoduOS passa a possuir um padrão oficial para referência segura de evidências, preservando owner_module, custody_owner_module, tenant, contexto, finalidade, política, integridade, cadeia de custódia, auditoria, retenção, mascaramento, exportação, quarentena e fail-closed sem transportar bruto indevido.

Frase operacional consolidada do EvidenceReference v1:
Evidência referencia prova. Cadeia de custódia preserva confiança. Payload evita bruto. Segurança controla acesso. Auditoria sustenta validade.

A última decisão oficial registrada era DEC-193 nesta seção histórica. A decisão seguinte consolidada posteriormente foi DEC-194. O estado final atualizado consta no fim deste documento.

Decisões aprovadas no Detalhamento de EvidenceReference v1:
  • DEC-193


# DEC-194: Detalhamento oficial do SecretReference v1

## Tema

Governança técnica de segredos, tokens, chaves, certificados, credenciais, assinaturas e material criptográfico por referência segura.

## Decisão

O NoduOS passa a adotar o `SecretReference v1` como padrão conceitual oficial para referenciar segredos sem transportar segredo bruto.

Todo segredo, token, chave, certificado sensível, credencial de gateway, credencial de dispositivo, credencial de conector, segredo de webhook, assinatura, client secret, material criptográfico e credencial de provedor deve ser tratado por referência segura, com owner_module, finalidade, escopo, política de acesso, rotação, revogação, expiração quando aplicável, auditoria, tenant/contexto quando aplicável e comportamento fail-closed.

`raw_secret_allowed` deve ser sempre `never` em contratos públicos, eventos, comandos, webhooks, read models, logs, URLs, exportações, BI, auditoria, relatórios e configurações.

SecretReference não é banco compartilhado, não é cofre concreto, não é endpoint de leitura de segredo, não transfere domínio e não autoriza ação operacional por si só.

## Motivo

Impedir vazamento de segredos, credenciais, tokens, chaves, certificados privados, material criptográfico e credenciais de integrações em contratos públicos, eventos, logs, webhooks, BI, relatórios, URLs, auditoria, suporte e exportações.

Também impedir que módulos consumidores usem SecretReference como atalho para acessar segredo bruto, invadir domínio alheio, burlar autorização do Core Platform ou criar dependência invisível entre módulos.

## Impacto

Todos os módulos que criarem, usarem, rotacionarem, revogarem, expirarem, auditarem, entregarem, validarem ou referenciarem segredos devem obedecer o SecretReference v1.

O Catálogo de Contratos Públicos, a Matriz Técnica de Permissões por Contrato, a Matriz Técnica de Dados Sensíveis por Contrato, o EventEnvelope v1 e o EvidenceReference v1 passam a ser aplicados em conjunto com o `10_DETALHAMENTO_SECRETREFERENCE_V1.md`.

Eventos relacionados a segredos devem usar EventEnvelope v1. Evidências protegidas por criptografia ou assinatura devem manter EvidenceReference separada de SecretReference. Ações críticas sobre segredo exigem AuthorizationDecision do Core Platform e auditoria.

A próxima etapa técnica recomendada passa a ser o Detalhamento de AuthorizationDecision v1.

## Status

Aprovada

## Data

2026-06-27

---

Fronteira do SecretReference v1 consolidada nesta versão:
SecretReference aponta para o segredo autorizado. Ele nunca carrega o segredo. Módulos consumidores recebem referência, status ou resultado, nunca valor bruto. O módulo dono usa internamente dentro do escopo autorizado. Core decide. Política limita. Auditoria registra.

A última decisão oficial registrada é DEC-197.
As próximas decisões novas devem começar em DEC-198, salvo alteração formal posterior neste documento.

Decisões aprovadas no Detalhamento de SecretReference v1:
  • DEC-194

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

# DEC-196: ResourceReference v1 como padrão oficial de referência segura de recursos entre módulos

## Tema

Contratos públicos, referências seguras, modularidade, ownership, autorização, auditoria, LGPD e prevenção de acoplamento entre módulos.

## Decisão

O NoduOS passa a adotar o ResourceReference v1 como padrão transversal oficial para referenciar recursos físicos, lógicos, estruturais, pessoais, operacionais, financeiros, técnicos, documentais, de evidência, de segredo, de política, de suporte, de integração e de auditoria entre módulos, sem transferir domínio do módulo dono.

ResourceReference v1 deve ser uma referência segura, minimizada, versionada, escopada e auditável. Ele deve declarar, no mínimo, `resource_reference_id`, `contract_id`, `contract_version`, `reference_version`, `owner_module`, `resource_type`, `resource_public_id`, `tenant_id` quando aplicável, `context_id` quando aplicável, `module_scope`, `authorization_scope`, `allowed_actions_conceptual`, `sensitivity_level`, `data_categories`, `lifecycle_state`, políticas aplicáveis, `display_label_minimized`, auditoria quando aplicável e `no_domain_transfer = true`.

ResourceReference v1 não executa ação, não autoriza, não concede permissão, não cria herança, não substitui AuthorizationDecision, não substitui PermissionGrant, não substitui InheritanceGrant, não substitui EvidenceReference, não substitui SecretReference, não substitui EventEnvelope, não substitui read model autorizado e não transfere domínio do recurso.

A existência de ResourceReference não permite ação sensível. Toda ação sensível ou crítica sobre recurso referenciado deve exigir AuthorizationDecision v1 emitida pelo Core Platform, respeitando tenant, contexto, escopo, política, licença, feature flag, permissão, herança, LGPD, auditoria e fail-closed.

O módulo consumidor não pode usar ResourceReference para consultar banco interno, classe interna, regra interna, payload completo, segredo bruto, evidência bruta, biometria bruta, vídeo bruto, documento completo ou dado de outro tenant.

## Motivo

Evitar que referências entre módulos virem banco compartilhado, payload completo, autorização automática, permissão disfarçada, evidência indevida, segredo exposto, read model clandestino, dependência invisível ou invasão de domínio alheio.

Garantir que o NoduOS mantenha modularidade, baixo acoplamento, multi-tenancy, ownership claro, rastreabilidade, auditoria, LGPD, segurança, compatibilidade e fail-closed em todos os fluxos intermodulares.

## Impacto

Todos os módulos que precisarem apontar recursos de outro módulo devem usar ResourceReference v1 ou referência especializada compatível, preservando owner_module e no_domain_transfer.

O Core Platform governa o padrão transversal e usa ResourceReference em autorização, contexto, auditoria, contratos, eventos e decisões, mas não assume domínio completo dos recursos dos módulos donos.

O Catálogo de Contratos Públicos, a Matriz Técnica de Permissões por Contrato, a Matriz Técnica de Dados Sensíveis por Contrato, o EventEnvelope v1, o AuthorizationDecision v1, o EvidenceReference v1 e o SecretReference v1 devem referenciar ResourceReference v1 quando apontarem recursos.

A próxima modelagem técnica de contratos, APIs internas, eventos, comandos, read models, auditoria, suporte, integração, segurança e LGPD deve obedecer ResourceReference v1.

## Status

Aprovada

## Data

2026-06-27


# Controle decisório após consolidação conjunta

A última decisão oficial registrada é DEC-197.
As próximas decisões novas devem começar em DEC-198, salvo alteração formal posterior neste documento.

Decisões aprovadas na consolidação conjunta AuthorizationDecision v1 + ResourceReference v1:
  • DEC-195
  • DEC-196


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


# Controle decisório após consolidação do Blueprint técnico

A última decisão oficial registrada é DEC-197.
As próximas decisões novas devem começar em DEC-198, salvo alteração formal posterior neste documento.

Decisão aprovada na consolidação do Blueprint técnico da aplicação:
  • DEC-197


---

# DEC-198: Política oficial de referência Git canônica pré-runtime

## Tema

Referência Git oficial do NoduOS após divergência detectada entre o histórico remoto `origin/main` e a linha local auditada.

## Decisão

A branch remota `official/pre-runtime-foundation-v1` passa a ser a referência Git canônica do NoduOS para continuidade pré-runtime.

O `origin/main` remoto não deve ser usado como referência oficial neste momento, pois possui histórico divergente, sem ancestral comum com o estado local auditado e consolidado.

## Motivo

O GIT-PUBLISH-BLOCK pré-runtime detectou que `origin/main` continha histórico remoto próprio. Para evitar sobrescrita destrutiva, perda de evidência ou merge não auditado, o estado oficial foi publicado em branch segura.

## Impacto

- Próximas etapas técnicas devem partir de `official/pre-runtime-foundation-v1`.
- `origin/main` deve permanecer preservado até decisão específica de reconciliação.
- Pull, merge, rebase ou force push sobre `origin/main` estão proibidos sem bloco próprio.
- O Runtime-BLOCK técnico mínimo da API deve referenciar a branch oficial segura.
- Esta decisão não cria endpoint, banco, migration, módulo comercial, worker ou deploy.

## Estado técnico vinculado

```text
Commit oficial publicado: 388c96e
Commit completo: 388c96e41ae2bffc5e9eee2e0a2af162cf5c3025
Branch oficial publicada: official/pre-runtime-foundation-v1
origin/main preservado: 73456a10720852456d074931d964361a3cdcb83a
Tag marco: pre-runtime-foundation-v1
```

## Status

Aprovada

## Data

2026-07-17

## Estado da raiz

```text
Última DEC consolidada: DEC-198.
Próxima DEC livre: DEC-199.
Próxima etapa recomendada: Runtime-BLOCK técnico mínimo da API usando official/pre-runtime-foundation-v1 como branch Git oficial.
```
