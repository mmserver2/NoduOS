# 02_REGRAS_DE_ARQUITETURA.md

# Regras de Arquitetura: NoduOS

SaaS Modular de Gestão de Espaços e Segurança Unificada

## Versão

Versão: 2.8
Status: Base oficial atualizada com Blueprint Técnico da Aplicação, DEC-198, referência Git canônica pré-runtime e documentos técnicos raiz 00 a 13
Data de criação: 2026-06-22
Data desta atualização: 2026-06-27
Tipo de documento: Regras arquiteturais oficiais

---

# 1. Objetivo deste documento

Este documento define as regras arquiteturais que devem guiar o planejamento da plataforma.

Ele existe para garantir que a plataforma seja modular, escalável, segura, multi-tenant, multimarcas, white-label e preparada para integração com o mundo físico.

---

# 1.1 Identidade oficial do produto

Nome oficial do app e do projeto: NoduOS.

Descrição oficial: SaaS Modular de Gestão de Espaços e Segurança Unificada.

Conceito técnico: Sistema Operacional Modular para Espaços Físicos Conectados.

Building OS Modular Platform permanece apenas como conceito técnico, categoria arquitetural ou descrição estratégica.

Regras arquiteturais de nomenclatura:

- NoduOS deve ser usado como nome oficial da plataforma, app e projeto.
- A descrição funcional deve permanecer como subtítulo do produto.
- A identidade visual não pode alterar regras de negócio, hierarquia, herança, autorização, contratos ou fronteiras de módulos.
- White-label pode customizar marcas comerciais por parceiro ou organização quando autorizado, mas isso não altera o nome oficial do projeto raiz nem as decisões arquiteturais centrais.

Identidade visual oficial inicial:

- Conceito: Conexão que impulsiona.
- Paleta principal: #1F2937, #00A37A e #F1F3F5.
- Direção: conexão, acesso, automação, inteligência e eficiência.

---

# 2. Princípio central

A plataforma deve ser planejada como uma arquitetura modular final.

Regra principal:

> Todo módulo deve ser independente. Nenhuma alteração em um módulo deve quebrar outro módulo.

---

# 3. Tipo de arquitetura desejada

A arquitetura deve seguir os princípios de:

- Modularidade.
- Baixo acoplamento.
- Alta coesão.
- Multi-tenancy.
- API-first.
- Event-driven.
- Hardware agnostic.
- Security by design.
- Privacy by design.
- White-label ready.
- Mobile first.
- Auditabilidade.
- Extensibilidade.

---

# 4. Core Platform

O Core Platform é obrigatório e sustenta todos os módulos.

Componentes do Core:

- Autenticação.
- Usuários.
- Tenants.
- Contextos.
- Papéis.
- Permissões.
- Herança contextual.
- Auditoria.
- Logs.
- Notificações básicas.
- Planos.
- Licenças.
- Feature flags.
- Segurança.
- LGPD.
- Event bus.
- Configurações globais.

Regra:

> Nenhum módulo comercial deve recriar funcionalidades do Core.

---

# 5. Separação entre Core e módulos comerciais

O Core fornece a base.

Os módulos comerciais fornecem funções de negócio.

Exemplo:

- Core sabe quem é o usuário.
- Core sabe o contexto.
- Core sabe permissões gerais.
- Controle de Acesso sabe abrir portas.
- Financeiro sabe gerar cobranças.
- Câmeras sabe exibir vídeo.
- Tickets sabe gerenciar chamados.

O Core não deve assumir regras específicas de módulos comerciais.

---

# 6. Comunicação entre módulos

Os módulos só podem se comunicar por:

- APIs públicas internas.
- Eventos.
- Contratos de dados.
- Webhooks internos.
- Barramento de eventos.
- Read models autorizados.

Proibido:

- Um módulo acessar diretamente a lógica interna de outro módulo.
- Um módulo alterar diretamente banco interno de outro módulo.
- Um módulo importar classes internas de outro módulo.
- Um módulo executar regra de negócio que pertence a outro módulo.

---

# 7. Eventos

A plataforma deve usar eventos para comunicação entre módulos.

Exemplos de eventos:

- PartnerCreated.
- OrganizationCreated.
- GatewayConnected.
- GatewayDisconnected.
- DeviceOnline.
- DeviceOffline.
- PersonCreated.
- PersonBlocked.
- UnitCreated.
- AccessGranted.
- AccessDenied.
- DoorForced.
- CameraOffline.
- InvoiceCreated.
- InvoicePaid.
- InvoiceOverdue.
- VisitorApproved.
- TicketCreated.
- ReservationCreated.
- AnnouncementPublished.
- PermissionGranted.
- PermissionRevoked.

Regra:

- Eventos devem ter contrato estável.
- Eventos não devem expor detalhes internos desnecessários.
- Eventos devem conter tenant_id, context_id e correlation_id quando aplicável.

---

# 8. Contratos de dados

Cada módulo deve definir contratos públicos para comunicação.

Todo contrato deve informar:

- Nome.
- Versão.
- Campos obrigatórios.
- Campos opcionais.
- Origem.
- Destino.
- Permissões necessárias.
- Eventos relacionados.
- Política de compatibilidade.

Regra:

> Alteração incompatível em contrato exige nova versão.

---

# 9. Multi-tenancy

A plataforma deve ser multi-tenant por natureza.

Todo dado relevante deve estar vinculado a um contexto de tenant.

Níveis possíveis:

- Master.
- Parceiro.
- Organização.
- Unidade.
- Pessoa.
- Contexto.

Regra:

> Nenhuma consulta deve retornar dados fora do tenant/contexto permitido.

Observação arquitetural:

- Organização é nível operacional da hierarquia da plataforma.
- Tenant e Context são entidades estruturais do Core Platform.
- Uma Organização pode referenciar tenant_id e context_id, mas não substitui Tenant nem Context.

---

# 10. Herança contextual

A herança oficial será:

- Master libera módulos para Parceiro.
- Parceiro libera módulos para Organização.
- Organização libera permissões para Operador/Gestor.
- Operador/Gestor libera recursos para Unidade/Bloco/Área.
- Unidade/Bloco/Área libera recursos para Cliente.
- Cliente usa apenas o que herdou.

A arquitetura deve garantir que toda ação seja avaliada por:

- Quem é o usuário?
- Qual é o contexto ativo?
- Qual é o papel?
- Qual módulo está ativo?
- Qual recurso foi herdado?
- Qual permissão existe?
- Qual regra local se aplica?

Regra consolidada:

> Política influencia. Core decide. Módulo dono executa. Auditoria registra.

---

# 11. Identidade e login

Regra oficial:

- Pessoa tem login próprio.
- Unidade não é login compartilhado.

Separações obrigatórias:

- Pessoa.
- Usuário.
- Cliente.
- Unidade.
- Vínculo.
- Credencial.
- Permissão.
- Contexto.

Uma pessoa pode ter múltiplos vínculos e múltiplos contextos.

Regra complementar:

- UserAccount pertence ao Core Platform.
- PersonProfile pertence a Pessoas e Clientes.
- ClientProfile pertence a Pessoas e Clientes.
- Organizações não cria login, senha, sessão, MFA ou conta técnica de acesso.

---

# 12. Banco de dados e isolamento lógico

O planejamento deve prever separação clara por domínio.

Cada módulo deve controlar seus próprios dados.

Regra:

> Um módulo não deve depender de tabelas internas de outro módulo.

Preferência conceitual:

- Dados por domínio.
- Schemas separados por módulo, quando aplicável.
- IDs públicos para referência cruzada.
- Read models para consultas compostas.
- Eventos para sincronização.
- Auditoria centralizada.

Regra complementar:

- Organizações deve manter seu próprio domínio cadastral.
- Organizações não deve consultar diretamente tabelas internas do Core, Parceiros, Pessoas e Clientes, Unidades, Gateway, Dispositivos ou módulos comerciais.
- Consultas compostas devem usar APIs internas, eventos, contratos ou read models autorizados.

---

# 13. APIs internas

Cada módulo deve expor APIs internas estáveis para ações e consultas permitidas.

Exemplo:

Controle de Acesso expõe:

- criar permissão.
- revogar permissão.
- abrir acesso.
- consultar logs.

Financeiro expõe:

- criar cobrança.
- consultar fatura.
- registrar pagamento.
- gerar relatório.

Câmeras expõe:

- listar câmeras permitidas.
- abrir stream.
- buscar eventos.
- anexar evidência.

Regra:

> APIs internas devem validar tenant, contexto, permissão e escopo.

Regra complementar:

- APIs de Organizações devem servir ao cadastro operacional e institucional do espaço conectado.
- APIs de Organizações não devem criar Tenant, Context, UserAccount, PersonProfile, ClientProfile, Unit, Block, Area, Environment, Device, Gateway, Invoice, Reservation, VisitorInvite, Ticket ou AuthorizationDecision.

---

# 14. APIs públicas externas

A plataforma deve nascer API-first.

Deve prever APIs para:

- Parceiros.
- Integrações externas.
- Sistemas de RH.
- Sistemas financeiros.
- ERPs.
- CRMs.
- Apps externos.
- Dispositivos autorizados.
- Marketplace.

Regra:

> Toda API pública deve ter autenticação, autorização, rate limit, logs e auditoria.

---

# 15. Webhooks

A plataforma deve prever webhooks para eventos importantes.

Exemplos:

- Pessoa criada.
- Visitante aprovado.
- Acesso liberado.
- Acesso negado.
- Fatura paga.
- Fatura vencida.
- Dispositivo offline.
- Ticket aberto.
- Reserva criada.
- Organização criada.
- Organização atualizada.
- Organização arquivada.

Regra:

> Webhooks devem ser configuráveis por parceiro ou organização, conforme permissão.

---

# 16. Integrações com hardware

A plataforma deve ser hardware agnostic.

Regra:

- O módulo principal fala com interface genérica.
- Cada marca ou protocolo implementa adaptador próprio.

Exemplos de adaptadores:

- MikrotikAdapter.
- HikvisionAdapter.
- IntelbrasAdapter.
- ControlIdAdapter.
- ZktecoAdapter.
- DahuaAdapter.
- AxisAdapter.
- JflAdapter.
- PpaAdapter.
- OnvifAdapter.
- RtspAdapter.
- MqttAdapter.

Regra complementar:

- Organizações não deve integrar diretamente com hardware.
- Integrações técnicas pertencem aos módulos Gateway Local / Mikrotik / Tunnel, Dispositivos, Controle de Acesso, Câmeras / VMS, Alarmes ou módulos especializados.

---

# 17. Gateway Local / Tunnel

A arquitetura deve prever comunicação segura entre servidor e organização física.

Responsabilidades:

- Tunnel seguro.
- Comunicação com rede local.
- Diagnóstico remoto.
- Status online/offline.
- Monitoramento de latência.
- Rotas autorizadas.
- Logs técnicos.
- Alertas de queda.
- Sincronização de eventos.

Regra:

> O Gateway Local não deve ser apenas detalhe técnico. Ele é parte central do produto.

Regra complementar:

- Organizações pode referenciar um gateway associado.
- Organizações não gerencia tunnel, rotas, IPs locais, latência, diagnóstico remoto, NAT, VPN, logs técnicos ou comunicação local.
- Gateway Local / Mikrotik / Tunnel é o domínio responsável pela conectividade local.

---

# 18. Segurança

A plataforma deve seguir security by design.

Obrigatório prever:

- Autenticação forte.
- Controle de sessão.
- MFA, quando aplicável.
- RBAC.
- ABAC, quando aplicável.
- Permissões por contexto.
- Criptografia em trânsito.
- Criptografia em repouso.
- Logs de segurança.
- Rate limiting.
- Proteção contra abuso.
- Auditoria de ações críticas.
- Segregação por tenant.

Regra complementar:

- Organizações deve validar autorização estrutural com o Core Platform antes de ações sensíveis.
- Organizações não emite AuthorizationDecision final.

---

# 19. LGPD e privacidade

A plataforma deve seguir privacy by design.

Obrigatório prever:

- Consentimento.
- Finalidade.
- Minimização de dados.
- Controle de acesso a dados pessoais.
- Histórico de aceite.
- Proteção de biometria.
- Proteção de imagens.
- Proteção de documentos.
- Anonimização.
- Remoção, quando aplicável.
- Relatório de tratamento.
- Auditoria de visualização e exportação.

Regra complementar:

- Organizações pode armazenar dados institucionais do espaço físico conectado.
- Dados pessoais, consentimentos pessoais, documentos pessoais e vínculos pessoais pertencem ao módulo Pessoas e Clientes.
- Políticas avançadas de privacidade, retenção e tratamento pertencem ao módulo Segurança e LGPD.

---

# 20. Auditoria

Toda ação crítica deve gerar log auditável.

Campos mínimos recomendados:

- audit_id.
- tenant_id.
- context_id.
- user_id.
- actor_role.
- action.
- resource_type.
- resource_id.
- before.
- after.
- ip_address.
- device_info.
- timestamp.
- correlation_id.

Regra complementar:

- Alterações em Organizações devem gerar auditoria base no Core Platform quando afetarem contexto, escopo, autorização, licença ou ciclo crítico.
- O módulo Auditoria e Compliance pode consultar e analisar trilhas avançadas por contrato autorizado.

---

# 21. Feature flags e licenças

Módulos e recursos devem ser ativáveis por:

- Master.
- Parceiro.
- Organização.
- Plano.
- Licença.
- Contexto.
- Usuário.
- Unidade.

Regra:

> Interface e API devem respeitar módulos ativos, licenças e permissões.

Regra complementar:

- ModuleRegistry, Plan, License, Entitlement e FeatureFlag pertencem ao Core Platform.
- Organizações pode manter OrganizationModuleAvailability apenas como read model autorizado.
- Organizações não decide ativação, desativação, licença, plano, entitlement ou feature flag.
- Master e Parceiro governam liberações conforme contrato e escopo autorizado.

---

# 22. White-label

A arquitetura deve permitir personalização por:

- Master.
- Parceiro.
- Organização.

Itens personalizáveis:

- Logo.
- Cores.
- Nome comercial.
- Domínio.
- Favicon.
- Tema.
- Textos.
- Templates de e-mail.
- Templates de notificação.
- Experiência no app.

Regra:

> White-label não deve alterar regra de negócio dos módulos.

Regra complementar:

- OrganizationProfile pode referenciar dados institucionais da organização.
- White-label continua responsável por identidade visual, tema, domínio, marca, templates e experiência customizada quando habilitado.

---

# 23. Mobile first

Cliente e Operador/Gestor devem ser planejados mobile first.

Regra:

> Toda tela de Cliente e Operador deve funcionar bem no celular antes de ser expandida para desktop.

Parceiro e Master podem ter dashboards desktop mais completos, mantendo responsividade.

---

# 24. Relatórios e read models

Relatórios não devem forçar acoplamento entre módulos.

Preferência:

- Eventos alimentam read models.
- Read models alimentam relatórios.
- Relatórios consultam dados consolidados autorizados.

Regra:

> BI não deve virar atalho para invadir dados internos de módulos.

Regra complementar:

- OrganizationModuleAvailability, OrganizationStructureSummary, OrganizationPeopleSummary, OrganizationGatewaySummary e OrganizationDeviceSummary devem ser tratados como read models ou resumos autorizados.
- Esses resumos não transferem posse de domínio para Organizações.

---

# 25. Automações

Automações devem operar por eventos, condições e ações.

Modelo:

- Gatilho.
- Condição.
- Ação.
- Escopo.
- Permissão.
- Log.
- Resultado.

Exemplo:

- Se InvoiceOverdue,
- e regra da organização permitir bloqueio,
- então revogar reserva premium,
- e publicar PermissionRevoked.

Regra complementar:

- Automações não devem acessar banco interno de Organizações nem de qualquer outro módulo.
- Automações devem agir por eventos, contratos e APIs autorizadas dos módulos donos dos recursos.
- Organizações não deve executar automações operacionais diretamente.

---

# 26. Observabilidade

A plataforma deve prever observabilidade técnica e operacional.

Itens:

- Logs.
- Métricas.
- Tracing.
- Status de serviços.
- Status de gateways.
- Status de dispositivos.
- Alertas.
- Painel de saúde.
- Histórico de falhas.

Regra complementar:

- Organizações pode exibir status operacional resumido autorizado.
- Diagnóstico técnico detalhado pertence a Gateway, Dispositivos ou módulos técnicos especializados.

---

# 27. Tolerância a falhas

Falha de um módulo não deve derrubar a plataforma inteira.

Exemplos:

- Se Financeiro falhar, Câmeras continuam funcionando.
- Se Câmeras falhar, Controle de Acesso continua funcionando.
- Se Reservas falhar, Tickets continuam funcionando.
- Se Gateway cair, o sistema registra alerta e mantém painéis cloud ativos.

Regra complementar:

- Se Organizações estiver indisponível, módulos já autorizados devem tratar falha com degradação controlada, usando contexto, permissões e referências previamente válidas conforme política do Core.
- A indisponibilidade de Organizações não deve permitir acesso fora de contexto.

---

# 28. Proibições arquiteturais

É proibido:

- Criar módulo acoplado.
- Criar dependência invisível.
- Misturar regra de negócio de módulos diferentes.
- Acessar banco interno de outro módulo.
- Criar login compartilhado por unidade como padrão.
- Criar regra global sem decisão oficial.
- Ignorar tenant/contexto em consultas.
- Ignorar auditoria em ação crítica.
- Prender integração a uma marca única.
- Planejar como MVP no documento funcional final.

Proibições específicas para Organizações:

- Criar Tenant próprio.
- Criar Context próprio.
- Criar UserAccount.
- Criar login de organização.
- Criar login compartilhado por unidade.
- Criar motor próprio de permissão.
- Emitir AuthorizationDecision final.
- Criar motor paralelo de licenças ou feature flags.
- Cadastrar estrutura física interna como domínio próprio.
- Cadastrar PersonProfile ou ClientProfile.
- Gerenciar PersonUnitLink como fonte primária.
- Cadastrar dispositivo global.
- Gerenciar tunnel, rotas, latência ou diagnóstico técnico.
- Executar abertura de portas.
- Visualizar stream de câmeras.
- Gerar cobrança.
- Gerenciar reservas.
- Gerenciar convites.
- Executar tickets.
- Executar alarmes.
- Enviar notificações multicanal diretamente.
- Executar automações operacionais.
- Gerar BI avançado acessando bancos internos.

---

# 29. Checklist obrigatório para cada módulo

Antes de aprovar um módulo, verificar:

- O módulo tem objetivo claro?
- O módulo diz o que não faz?
- As entidades estão claras?
- As permissões estão claras?
- Os eventos publicados estão claros?
- Os eventos consumidos estão claros?
- As APIs internas estão claras?
- As integrações externas estão claras?
- As dependências estão claras?
- Os riscos de acoplamento foram identificados?
- A auditoria foi definida?
- A LGPD foi considerada?
- A herança contextual foi respeitada?

Checklist complementar para Organizações:

- OrganizationRecord foi tratado como entidade raiz do módulo Organizações?
- OrganizationProfile foi limitado ao cadastro institucional?
- OrganizationSettings foi limitado a configurações neutras?
- OrganizationStatus não virou bloqueio financeiro ou regra comercial?
- OrganizationModuleAvailability foi tratado apenas como read model autorizado?
- Tenant e Context permaneceram no Core Platform?
- Parceiro permaneceu responsável por implantar e administrar dentro do escopo autorizado?
- Unidades, Blocos, Áreas e Ambientes permaneceram donos da estrutura física interna?
- Pessoas e Clientes permaneceram donos de PersonProfile, ClientProfile e vínculos pessoais?
- Gateway Local / Mikrotik / Tunnel permaneceu dono da conectividade local?
- Dispositivos permaneceu dono do cadastro técnico, saúde e diagnóstico dos equipamentos?
- Os módulos comerciais permaneceram donos da execução de seus recursos?

---


# 30. Blindagem de produção e compatibilidade entre módulos

Esta seção define os parâmetros obrigatórios para que a plataforma possa ser produzida sem que um módulo quebre outro.

## 30.1 Contratos públicos versionados

Toda comunicação entre módulos deve usar contrato público versionado.

Aplica-se a:

- APIs internas.
- Eventos.
- Webhooks internos.
- Read models autorizados.
- Comandos intermodulares.
- Payloads de integração.

Regras:

- Mudança aditiva pode manter a mesma versão quando não quebrar consumidores.
- Mudança incompatível exige nova versão.
- Contratos antigos devem ter período de compatibilidade antes de remoção.
- Todo contrato deve declarar owner_module, consumer_module, versão, campos obrigatórios, campos opcionais, permissões, escopo, dados sensíveis e política de retenção.
- Contrato não pode expor dados internos desnecessários.

## 30.2 Separação entre comando, evento e read model

Comando solicita execução.
Evento comunica fato ocorrido.
Read model permite leitura autorizada.

Regras:

- Comando não prova que a ação ocorreu.
- Evento deve representar fato já ocorrido.
- Read model não transfere domínio.
- Um módulo não deve usar evento como atalho para executar regra de outro módulo sem contrato.
- Um módulo não deve usar read model como banco compartilhado.

## 30.3 Idempotência, outbox e consumo confiável

Toda ação crítica deve ser idempotente.

Obrigatório prever:

- idempotency_key em comandos críticos.
- correlation_id em fluxos distribuídos.
- causation_id em eventos derivados.
- Outbox no produtor ou mecanismo equivalente.
- Inbox/deduplicação no consumidor ou mecanismo equivalente.
- Retry controlado.
- Dead-letter ou quarentena para falhas persistentes.
- Reprocessamento seguro sem duplicar cobrança, abertura, convite, credencial, notificação, workflow, exportação ou ação física.

## 30.4 Autorização, contexto e fail-closed

Toda ação sensível deve passar por autorização estrutural do Core Platform.

Falha em qualquer item abaixo deve negar, pausar ou degradar com segurança a ação crítica:

- tenant_id ausente ou inválido.
- context_id ausente ou inválido.
- actor_reference inválido.
- módulo inativo.
- licença inválida.
- feature flag ausente.
- permissão ausente.
- ResourceReference inválida.
- AuthorizationDecision ausente, expirada ou negada.
- escopo específico do módulo ausente.
- política de Segurança e LGPD ausente para dado sensível.

Regra curta:

> Sem contexto, sem escopo ou sem autorização, ação crítica não executa.

## 30.5 Dados sensíveis, segredos e logs

Dados pessoais, biometria, imagem, vídeo, dados financeiros, dados de acesso físico, dados de visitantes, dados de tickets, IPs internos, credenciais e segredos devem ser protegidos por padrão.

Obrigatório:

- Minimização de payload.
- Mascaramento por padrão em consultas e exportações.
- Segredos por referência segura.
- Rotação e revogação de credenciais.
- Retenção definida por Segurança e LGPD.
- Auditoria de acesso, visualização, exportação e compartilhamento.
- Cadeia de custódia em evidências.
- Proibição de segredo bruto em evento, log, read model, URL ou payload não criptografado.

## 30.6 Testes de contrato e checklist anti-quebra

Antes de produzir ou alterar módulo, validar:

- O módulo acessa apenas contratos públicos?
- As APIs mantêm compatibilidade?
- Os eventos estão versionados?
- Os consumidores toleram campos adicionais?
- O comando é idempotente?
- O fluxo tem correlation_id e causation_id?
- A ação sensível consulta CoreAuthorizationAPI?
- O escopo específico do módulo foi validado?
- O comportamento de falha é fail-closed?
- Dados sensíveis estão minimizados e mascarados?
- Segredos estão por referência segura?
- Logs operacionais ficam no módulo dono?
- Auditoria e Compliance recebe apenas trilha autorizada?
- Nenhum módulo acessa banco interno de outro?

# 31. Regra arquitetural específica do módulo Organizações

Organizações representa o espaço físico conectado como entidade operacional e institucional.

Organizações é dona de:

- OrganizationRecord.
- OrganizationProfile.
- OrganizationSettings.
- OrganizationStatus.
- OrganizationType.
- OrganizationAddress.
- OrganizationOperationalContact.
- OrganizationLifecycle.
- OrganizationReference.
- OrganizationModuleAvailability, apenas como read model autorizado.
- OrganizationStructureSummary, apenas como resumo autorizado.
- OrganizationPeopleSummary, apenas como resumo autorizado.
- OrganizationGatewaySummary, apenas como resumo autorizado.
- OrganizationDeviceSummary, apenas como resumo autorizado.

Organizações não cria, não substitui e não executa:

- Tenant.
- Context.
- UserAccount.
- AuthorizationDecision.
- License.
- FeatureFlag.
- ModuleRegistry.
- Partner.
- Unit.
- Block.
- Area.
- Environment.
- PersonProfile.
- ClientProfile.
- PersonUnitLink.
- Gateway técnico.
- Tunnel.
- DeviceRecord.
- Cadastro técnico de hardware.
- Regra comercial de Controle de Acesso.
- Regra comercial de Câmeras / VMS.
- Regra comercial de Financeiro.
- Regra comercial de Reservas.
- Regra comercial de Convites e Visitantes.
- Regra comercial de Tickets.
- Regra comercial de Alarmes.
- Regra comercial de Notificações.
- Regra comercial de Automações.
- Regra comercial de Relatórios / BI.

Fluxo arquitetural correto:

1. Parceiro solicita criação ou administração de uma organização.
2. Core Platform valida tenant, contexto, licença, escopo, feature flags e autorização estrutural.
3. Organizações registra ou atualiza o cadastro operacional do espaço físico conectado.
4. Unidades, Blocos, Áreas e Ambientes estruturam o interior do espaço.
5. Pessoas e Clientes vinculam pessoas e clientes ao espaço e à estrutura.
6. Gateway Local / Mikrotik / Tunnel conecta a rede local.
7. Dispositivos cadastra e monitora equipamentos.
8. Módulos comerciais executam suas próprias regras.
9. Auditoria registra eventos e ações críticas.

Frase consolidada:

> Core cria contexto e autoriza. Parceiro implanta e administra dentro do escopo. Organizações representa o espaço conectado. Unidades mapeia a estrutura interna. Pessoas se vinculam ao espaço. Gateway conecta o mundo físico. Dispositivos governam equipamentos. Módulos comerciais executam recursos. Herança governa políticas. Auditoria registra.

---

# 32. Regra arquitetural específica do módulo Parceiros

Parceiros representa o domínio operacional autorizado do parceiro.

Parceiros pode vender, implantar, configurar, cadastrar gateways e dispositivos por fluxos autorizados, administrar e acompanhar organizações abaixo dele, sempre dentro de escopo, contrato, licença, contexto, permissão e autorização do Core Platform.

Parceiros é dono de:

- PartnerRecord.
- PartnerProfile.
- PartnerStatus.
- PartnerType.
- PartnerLifecycle.
- PartnerScope.
- PartnerOperationalContact.
- PartnerCommercialContact.
- PartnerTechnicalContact.
- PartnerTeamReference.
- PartnerOrganizationPortfolio.
- PartnerDeploymentOverview.
- PartnerGatewayOperationRequest.
- PartnerDeviceOperationRequest.
- PartnerModuleAvailability, apenas como read model autorizado.
- PartnerPlanView, apenas como read model autorizado.
- PartnerLicenseView, apenas como read model autorizado.
- PartnerWhiteLabelPermission, apenas como read model autorizado.
- PartnerCommercialPolicy, limitada ao escopo autorizado.
- PartnerSupportOverview, apenas como resumo autorizado.
- PartnerRevenueSummary, se habilitado e autorizado.

Parceiros não cria, não substitui e não executa:

- Master.
- Tenant.
- Context.
- UserAccount.
- AuthCredential.
- UserSession.
- Role.
- Permission.
- PermissionGrant.
- InheritanceGrant.
- ResourceReference.
- AuthorizationDecision.
- ModuleRegistry.
- Plan oficial.
- License oficial.
- Entitlement oficial.
- FeatureFlag oficial.
- OrganizationRecord.
- OrganizationProfile.
- GatewayRecord como domínio próprio.
- Tunnel.
- Rotas.
- Latência.
- Diagnóstico técnico oficial de gateway.
- DeviceRecord como domínio próprio.
- Saúde técnica oficial de dispositivos.
- Última comunicação oficial de dispositivos.
- Diagnóstico técnico oficial de dispositivos.
- Motor próprio de white-label.
- Motor financeiro.
- Motor completo de suporte.
- Regra operacional de Controle de Acesso.
- Regra operacional de Câmeras / VMS.
- Regra operacional de Alarmes.
- Regra operacional de Reservas.
- Regra operacional de Convites e Visitantes.
- Regra operacional de Tickets.
- Regra operacional de Notificações.
- Regra operacional de Automações.

Fluxo arquitetural correto:

1. Master cria ou autoriza o parceiro e define limites superiores.
2. Core Platform valida tenant, contexto, licença, escopo, feature flags e autorização estrutural.
3. Parceiros opera dentro do escopo autorizado.
4. Organizações registra o espaço físico conectado quando o parceiro solicita criação de organização.
5. Gateway Local / Mikrotik / Tunnel registra e governa gateway, tunnel, rotas, conectividade, latência, diagnóstico e logs técnicos.
6. Dispositivos registra e governa equipamentos, saúde, diagnóstico, última comunicação e ciclo de vida técnico.
7. White-label personaliza identidade quando permitido.
8. Financeiro cobra, fatura, controla pagamentos, repasses, comissões, split e inadimplência.
9. Suporte e Operação atende incidentes, chamados, escalonamentos e histórico de atendimento.
10. Módulos comerciais executam suas próprias regras operacionais.
11. Auditoria registra eventos e ações críticas.

Regra complementar:

Parceiros pode cadastrar dispositivos e gateways por fluxos autorizados dos módulos donos. Isso não transfere a posse técnica de DeviceRecord, GatewayRecord, tunnel, rotas, saúde, diagnóstico, última comunicação, comunicação técnica ou logs técnicos para Parceiros.

Frase consolidada:

> Master governa o limite. Core valida contexto, licença e autorização. Parceiro vende, implanta, cadastra gateways e dispositivos por fluxos autorizados, administra e acompanha organizações abaixo dele. Organizações registra o espaço conectado. Gateway governa conectividade. Dispositivos governam equipamentos. White-label personaliza. Financeiro cobra. Suporte atende. Módulos comerciais executam recursos. Auditoria registra.

Frase curta:

> Parceiro instala e cadastra. Módulo dono governa. Core autoriza.

# 33. Regra arquitetural específica do módulo Gateway Local / Mikrotik / Tunnel

Gateway Local / Mikrotik / Tunnel representa o domínio técnico de conectividade local entre a plataforma em nuvem e a rede física da organização.

Gateway é responsável por:

- GatewayRecord.
- GatewayAgent.
- GatewayInstallation.
- GatewayCredential.
- GatewaySecret.
- TunnelSession.
- TunnelEndpoint.
- TunnelStatus.
- LocalNetwork.
- LocalRoute.
- RemoteRoute.
- NatRuleReference.
- FirewallRuleReference.
- VpnProfileReference.
- GatewayHealth.
- GatewayDiagnostic.
- GatewayCommand.
- GatewayCommandResult.
- GatewayLog.
- GatewayEventBuffer.
- GatewaySyncState.
- GatewayConnectivityState.
- GatewayDeviceDiscovery.
- GatewayDeviceReachability.
- GatewayOrganizationLink.
- GatewayPartnerLink.
- GatewayResourceReference.
- GatewayAuthorizationScope.

Gateway não cria, não substitui e não executa:

- Tenant.
- Context.
- UserAccount.
- AuthorizationDecision.
- License.
- FeatureFlag.
- PartnerRecord.
- OrganizationRecord.
- OrganizationProfile.
- DeviceRecord oficial.
- Regra operacional de Controle de Acesso.
- Abertura de porta por decisão própria.
- QR Code, facial, RFID ou PIN operacional.
- Live view, mosaico, playback, clipes ou evidências de vídeo.
- Arme, desarme, pânico, disparo ou escalonamento operacional de alarme.
- Workflows, gatilhos, condições ou ações de automação.
- Cobranças.
- Reservas.
- Convites.
- Tickets.
- Notificações multicanal como domínio próprio.
- Auditoria avançada de compliance como domínio próprio.

Regras obrigatórias:

- Toda ação sensível do Gateway deve consultar o Core Platform.
- Toda ação sensível deve possuir GatewayAuthorizationScope.
- GatewayAuthorizationScope deve limitar tenant, contexto, organização, parceiro, ator, módulo solicitante, recurso, comando, rota, protocolo, porta, validade temporal, motivo e AuthorizationDecision.
- GatewayDeviceDiscovery não é DeviceRecord.
- Parceiro instala e cadastra gateway por fluxo autorizado, mas não governa tunnel, rotas, latência, diagnóstico remoto, logs técnicos ou comunicação local.
- Organização pode exibir resumo autorizado, mas não governa conectividade.
- Gateway pode conectar e comunicar com equipamentos, mas Dispositivos governa o cadastro oficial, saúde, status, diagnóstico, última comunicação e ciclo de vida técnico dos equipamentos.
- Gateway pode transportar comando técnico autorizado para Controle de Acesso, Câmeras / VMS, Alarmes e Automações, mas o módulo dono continua executando a regra operacional.
- Gateway deve proteger credenciais técnicas, chaves, segredos, IPs internos, rotas privadas, logs técnicos, metadados de rede, acesso remoto, diagnóstico remoto e comandos técnicos.
- Mikrotik é adaptador suportado, não prisão arquitetural.

Fluxo arquitetural correto:

1. Parceiro instala e solicita cadastro de gateway por fluxo autorizado.
2. Core Platform valida tenant, contexto, licença, escopo, feature flags e autorização estrutural.
3. Gateway cria GatewayRecord, credencial técnica e escopo autorizado.
4. Gateway estabelece tunnel seguro com a plataforma.
5. Organizações recebe apenas referência ou resumo autorizado.
6. Dispositivos registra e governa equipamentos conectados ou descobertos.
7. Controle de Acesso, Câmeras / VMS, Alarmes e outros módulos comerciais usam Gateway por contratos autorizados.
8. O módulo dono executa sua regra operacional.
9. Gateway registra logs técnicos.
10. Core e Auditoria registram trilhas críticas conforme contrato.

Frase consolidada:

> Gateway conecta. Core autoriza. Parceiro instala. Organização referencia. Dispositivos governam equipamentos. Módulos comerciais executam recursos. Auditoria registra.

Frase curta:

> Core autoriza. Gateway conecta. Módulo dono executa. Auditoria registra.

# 34. Regra arquitetural específica do módulo Dispositivos

Dispositivos representa o domínio técnico oficial dos equipamentos físicos integrados à plataforma.

Dispositivos é dono de:

- DeviceRecord.
- DeviceReference.
- DeviceIdentity.
- DeviceType.
- DeviceCategory.
- DeviceBrand.
- DeviceModel.
- DeviceSerial.
- DeviceFirmware.
- DeviceProtocolProfile.
- DeviceConnectivityProfile.
- DeviceCredential.
- DeviceSecret.
- DeviceHealth.
- DeviceStatus.
- DeviceDiagnostic.
- DeviceLifecycle.
- DeviceCapability.
- DeviceGatewayLink.
- DeviceOrganizationLink.
- DeviceStructureLocationReference.
- DeviceTechnicalLog.
- DeviceAlert.
- DeviceMaintenanceRecord.
- DeviceReplacementRecord.
- DeviceIntegrationAdapterReference.
- DeviceCommandRequest, apenas para comandos técnicos.
- DeviceCommandResult.
- DeviceTelemetry.
- DeviceReachability.
- DeviceDiscoveryCandidate.
- DeviceAuthorizationScope.

Dispositivos não cria, não substitui e não executa:

- Tenant.
- Context.
- UserAccount.
- AuthorizationDecision.
- License.
- FeatureFlag.
- PartnerRecord.
- OrganizationRecord.
- OrganizationProfile.
- GatewayRecord.
- Tunnel.
- Rotas.
- VPN.
- NAT.
- Firewall.
- Regra operacional de Controle de Acesso.
- Abertura de porta.
- QR Code de acesso.
- Facial, RFID ou PIN operacional.
- Live view, stream, mosaico, playback, clipes ou evidências de vídeo.
- Arme, desarme, pânico, disparo ou escalonamento operacional de alarme.
- Workflows, gatilhos, condições ou ações de automação.
- Cobranças.
- Reservas.
- Convites.
- Tickets.
- Notificações multicanal como domínio próprio.
- Auditoria avançada de compliance como domínio próprio.

Regras obrigatórias:

- Toda ação sensível em Dispositivos deve consultar o Core Platform.
- Toda ação sensível deve possuir DeviceAuthorizationScope.
- DeviceAuthorizationScope deve limitar tenant, contexto, organização, parceiro, gateway, ator, módulo solicitante, ação técnica, recurso, validade temporal, motivo e AuthorizationDecision.
- GatewayDeviceDiscovery e DeviceDiscoveryCandidate não são DeviceRecord.
- Parceiro instala e cadastra dispositivos por fluxo autorizado, mas não governa DeviceRecord, saúde, status, diagnóstico, última comunicação ou ciclo de vida técnico.
- Organização pode exibir resumo autorizado, mas não governa cadastro técnico, marca, modelo, protocolo, credencial, saúde ou diagnóstico.
- Gateway conecta, descobre e mede reachability técnico, mas Dispositivos governa o cadastro oficial dos equipamentos.
- Dispositivos pode fornecer DeviceReference para Controle de Acesso, Câmeras / VMS, Alarmes e Automações, mas cada módulo dono executa sua regra operacional.
- Dispositivos deve proteger IPs, MACs, seriais, credenciais, segredos, logs técnicos, metadados de rede, fotos de equipamentos e dados sensíveis relacionados.
- O módulo deve ser hardware agnostic e multimarcas. Adaptador é conector técnico, não regra de negócio.

Fluxo arquitetural correto:

1. Parceiro instala e solicita cadastro de dispositivo por fluxo autorizado.
2. Core Platform valida tenant, contexto, licença, escopo, feature flags e autorização estrutural.
3. Dispositivos cria DeviceRecord e DeviceReference.
4. Dispositivos vincula o equipamento à organização, gateway e estrutura física por referências autorizadas.
5. Gateway conecta, descobre e testa reachability quando aplicável.
6. Controle de Acesso, Câmeras / VMS, Alarmes e Automações usam DeviceReference por contratos autorizados.
7. O módulo comercial dono executa sua regra operacional.
8. Dispositivos registra logs técnicos.
9. Core e Auditoria registram trilhas críticas conforme contrato.

Frase consolidada:

> Core autoriza. Parceiro instala e cadastra por fluxo autorizado. Organização referencia. Gateway conecta e descobre. Dispositivos governa equipamentos. Módulos comerciais executam recursos. Segurança protege. Auditoria registra.

Frase curta:

> Dispositivos governa equipamentos. Módulo dono executa recursos. Core autoriza.

# 35. Decisões oficiais relacionadas

Esta versão aplica e respeita:

- DEC-010: Hardware agnóstico e multimarcas.
- DEC-011: Gateway Local / Mikrotik / Tunnel como parte essencial.
- DEC-012: Parceiro instala o mundo físico.
- DEC-026: Dispositivos como domínio independente.
- DEC-037: Core Platform como autoridade estrutural de autorização.
- DEC-054: Gateway Local / Mikrotik / Tunnel como domínio técnico de conectividade local.
- DEC-055: Gateway não executa regra operacional de módulos comerciais.
- DEC-056: GatewayAuthorizationScope obrigatório para ações técnicas sensíveis.
- DEC-057: GatewayDeviceDiscovery não é DeviceRecord.
- DEC-058: Dispositivos como domínio técnico oficial dos equipamentos físicos.
- DEC-059: DeviceAuthorizationScope obrigatório para ações técnicas sensíveis.
- DEC-060: Descoberta técnica não é cadastro oficial de dispositivo.
- DEC-061: Dispositivos não executa regra operacional de módulos comerciais.

# 36. Estado atual deste documento

Este documento foi atualizado para incluir a fronteira arquitetural consolidada do módulo Dispositivos, sem remover as fronteiras já consolidadas de Organizações, Parceiros e Gateway Local / Mikrotik / Tunnel.

Atualizações desta versão:

- Inclusão da regra arquitetural específica do módulo Dispositivos.
- Reforço da separação entre DeviceRecord e GatewayDeviceDiscovery.
- Reforço da separação entre Dispositivos, Gateway, Controle de Acesso, Câmeras / VMS, Alarmes e Automações.
- Inclusão de DeviceAuthorizationScope para ações técnicas sensíveis.
- Inclusão das DEC-058, DEC-059, DEC-060 e DEC-061 como decisões aprovadas relacionadas.
- Inclusão da regra arquitetural específica do módulo Controle de Acesso.
- Inclusão das DEC-062, DEC-063, DEC-064, DEC-065, DEC-066 e DEC-067 como decisões aprovadas relacionadas.

# 37. Frase guia deste documento

> Arquitetura boa é aquela que permite evolução sem apagar o mapa da galáxia.

# 38. Regra arquitetural específica do módulo Controle de Acesso

Controle de Acesso representa o domínio operacional de acesso físico da plataforma.

Controle de Acesso é responsável por:

- AccessPoint.
- Door.
- Gate.
- Turnstile.
- AccessZone.
- AccessCredential.
- PhysicalAccessCredential.
- TemporaryAccessCredential.
- FaceCredential.
- RfidCredential.
- PinCredential.
- QrCredential.
- AccessRule.
- AccessPolicyBinding.
- AccessSchedule.
- AccessWindow.
- AccessPass.
- AccessAttempt.
- AccessEvent.
- AccessGrant.
- AccessDeny.
- AccessBlock.
- AccessUnblock.
- AccessRestriction.
- RemoteUnlock.
- DoorForcedEvent.
- DoorHeldOpenEvent.
- AntipassbackState.
- AccessExecutionRequest.
- AccessExecutionResult.
- AccessAuthorizationScope.
- AccessDeviceBinding.
- AccessDeviceCapabilityRequirement.
- AccessSyncState.
- AccessOfflinePolicy.
- AccessAuditTrail operacional.

Controle de Acesso não cria, não substitui e não executa:

- Tenant.
- Context.
- UserAccount.
- AuthorizationDecision final.
- PersonProfile.
- ClientProfile.
- PersonUnitLink.
- VisitorInvite.
- Reservation.
- DeviceRecord.
- GatewayRecord.
- CameraEvidence.
- AlarmEvent.
- Invoice.
- Unit, Block, Area ou Environment.
- OrganizationRecord.
- PartnerRecord.
- Live view, stream, mosaico, playback, clipe ou evidência.
- Arme, desarme ou escalonamento de alarme.
- Motor financeiro.
- Motor de reserva.
- Motor de convite.
- Motor paralelo de LGPD.
- Auditoria avançada de compliance.

Regras obrigatórias:

- AccessPoint não substitui DeviceRecord nem StructureReference.
- AccessCredential não substitui UserAccount, PersonProfile, ClientProfile ou BiometricConsent.
- Toda ação sensível de acesso físico exige AuthorizationDecision do Core Platform e AccessAuthorizationScope válido.
- AccessExecutionResult não substitui AuthorizationDecision nem GatewayCommandResult.
- Gateway transporta comando técnico autorizado, mas não decide acesso.
- Dispositivos governa equipamentos; Controle de Acesso usa DeviceReference e AccessDeviceBinding.
- Convites e Visitantes governa a visita; Controle de Acesso materializa a credencial física temporária.
- Reservas governa a agenda e a janela; Controle de Acesso materializa a passagem física.
- Financeiro informa status por evento ou read model autorizado; Controle de Acesso só restringe quando política e Core autorizam.
- Câmeras / VMS cria evidência de vídeo; Controle de Acesso publica evento operacional.
- Alarmes executa regra operacional de alarme; Controle de Acesso publica violação.
- AccessOfflinePolicy é obrigatório para qualquer funcionamento offline.
- Biometria, QR, RFID, PIN e logs de acesso devem respeitar Segurança, LGPD, finalidade, minimização, retenção e auditoria.
- Hardware e fabricantes são adaptadores, nunca regra estrutural do domínio.

Fluxo arquitetural correto:

1. Ator solicita criação, alteração, credencial, bloqueio, abertura remota ou execução de acesso.
2. Core Platform valida tenant, contexto, módulo ativo, licença, escopo, permissão e AuthorizationDecision.
3. Herança e Permissões influencia a política quando aplicável.
4. Controle de Acesso valida AccessAuthorizationScope e regra operacional.
5. Controle de Acesso cria AccessExecutionRequest quando houver execução física.
6. Gateway transporta GatewayCommand quando necessário.
7. Dispositivos representa o equipamento usado na execução.
8. Controle de Acesso registra AccessExecutionResult e AccessEvent.
9. Câmeras / VMS, Alarmes, Notificações, Relatórios / BI e Auditoria consomem eventos por contrato autorizado.
10. Auditoria registra trilhas críticas.

Frase consolidada:

> Core autoriza. Herança governa política. Pessoas identifica. Convites temporizam visitas. Reservas temporizam recursos. Financeiro informa status. Unidades localiza. Dispositivos representam equipamentos. Gateway transporta. Controle de Acesso executa a passagem física. Auditoria registra.

# 39. Decisões oficiais relacionadas ao Controle de Acesso

Esta versão aplica e respeita também:

- DEC-062: Controle de Acesso como domínio operacional de acesso físico.
- DEC-063: AccessPoint não é DeviceRecord nem StructureReference.
- DEC-064: AccessCredential como credencial física operacional.
- DEC-065: AccessAuthorizationScope obrigatório para ações sensíveis de acesso.
- DEC-066: AccessOfflinePolicy obrigatório para modo offline.
- DEC-067: Eventos de acesso podem gerar evidência, mas evidência pertence ao VMS.

# 40. Regra arquitetural específica do módulo Câmeras / VMS

Câmeras / VMS representa o domínio operacional de vídeo da plataforma.

Regra central:

> Câmeras / VMS governa vídeo. Dispositivos governam equipamentos. Gateway conecta. Core autoriza. Herança governa políticas. Segurança e LGPD protege. Auditoria registra.

Câmeras / VMS é dono de:

- CameraResource.
- CameraChannel.
- CameraStream.
- CameraLiveView.
- CameraViewSession.
- CameraMosaic.
- CameraLayout.
- CameraPlayback.
- CameraTimeline.
- CameraClip.
- CameraSnapshot.
- CameraEvidence.
- VideoEvidenceRequest.
- EventVideoCorrelation.
- CameraRecordingPolicy.
- CameraRetentionExecutionPolicy.
- CameraPermissionScope.
- CameraAuthorizationScope.
- VideoViewExecutionResult.
- VideoExportRequest.
- VideoExportPackage.
- VideoShareLink.
- VideoWatermark.
- VideoMaskingRequest.
- VideoPrivacyZone.
- CameraDeviceBinding.
- CameraCoverageArea.
- CameraAreaReference.
- CameraGatewayRouteReference.
- CameraStreamProxySession.
- CameraAuditTrail.

Câmeras / VMS não cria, não substitui e não executa:

- Tenant.
- Context.
- UserAccount.
- AuthorizationDecision.
- License.
- FeatureFlag.
- PersonProfile.
- ClientProfile.
- Unit, Block, Area ou Environment.
- OrganizationRecord.
- PartnerRecord.
- DeviceRecord.
- DeviceHealth oficial.
- DeviceDiagnostic oficial.
- GatewayRecord.
- TunnelSession.
- Rotas, VPN, NAT ou diagnóstico de rede como domínio principal.
- AccessEvent.
- Abertura de porta.
- Regra operacional de Controle de Acesso.
- AlarmEvent.
- Arme, desarme, pânico, disparo ou escalonamento operacional de alarme.
- VisitorInvite.
- Reservation.
- Invoice.
- Notificações multicanal como domínio próprio.
- Política avançada de LGPD como fonte primária.
- Auditoria avançada de compliance.

Regras obrigatórias:

- CameraResource não é DeviceRecord.
- DeviceRecord pertence a Dispositivos.
- CameraResource usa DeviceReference e CameraDeviceBinding por contrato autorizado.
- Câmeras / VMS não deve guardar credenciais técnicas brutas do equipamento.
- CameraStream não substitui Gateway.
- Gateway pode transportar stream ou rota técnica autorizada, mas não governa live view, playback, mosaico ou evidência.
- Toda ação sensível de vídeo exige AuthorizationDecision do Core Platform e CameraAuthorizationScope válido.
- Live view, playback, clipe, snapshot, evidência, exportação, download, link, mascaramento, alteração de retenção e visualização de câmera sensível são ações sensíveis.
- Eventos externos podem gerar evidência de vídeo, mas não transferem domínio para Câmeras / VMS.
- AccessEvent continua em Controle de Acesso.
- AlarmEvent continua em Alarmes.
- VisitorInvite continua em Convites e Visitantes.
- Reservation continua em Reservas.
- CameraEvidence pertence ao VMS e deve referenciar o evento de origem sem copiar dados internos desnecessários.
- Exportação e compartilhamento de vídeo exigem finalidade, proteção, autorização, escopo, validade, watermark ou máscara quando aplicável e auditoria.
- Links públicos irrestritos são proibidos.
- Imagens, gravações, clipes, snapshots, evidências, rostos, placas, crianças, visitantes, funcionários e áreas sensíveis devem obedecer Segurança e LGPD.
- Câmeras / VMS deve ser hardware agnóstico e operar por adaptadores, sem prender o domínio a Hikvision, Intelbras, Dahua, Axis, ONVIF, RTSP ou qualquer marca/protocolo único.

Fluxo arquitetural correto:

1. Parceiro instala câmera, DVR, NVR ou equipamento de vídeo.
2. Dispositivos cadastra o equipamento como DeviceRecord.
3. Câmeras / VMS cria CameraResource usando DeviceReference autorizado.
4. Unidades fornece StructureReference ou CameraCoverageArea por contrato autorizado.
5. Core valida tenant, contexto, licença, herança, permissão e AuthorizationDecision.
6. Câmeras / VMS executa live view, playback, mosaico, clipe, evidência ou exportação dentro do escopo autorizado.
7. Gateway transporta stream ou rota técnica quando necessário.
8. Segurança e LGPD aplica políticas de imagem, retenção, mascaramento, exportação e compartilhamento.
9. Auditoria registra visualização, playback, exportação, link, evidência, câmera sensível e ações críticas.

# 41. Decisões aplicadas nesta atualização

Esta versão incorpora as decisões aprovadas de Câmeras / VMS:

- DEC-068: Câmeras / VMS como domínio operacional de vídeo.
- DEC-069: CameraResource não é DeviceRecord.
- DEC-070: Toda ação sensível de vídeo exige AuthorizationDecision do Core.
- DEC-071: Gateway transporta vídeo, mas não é VMS.
- DEC-072: Eventos externos podem gerar evidência de vídeo sem transferir domínio.
- DEC-073: Exportação e compartilhamento de vídeo exigem finalidade, proteção e auditoria.

# 42. Regra arquitetural específica do módulo Alarmes

Alarmes representa o domínio operacional de alarme, segurança perimetral, detecção, resposta e histórico de eventos críticos.

Alarmes é dono de:

- AlarmResource.
- AlarmPanelResource.
- AlarmPanelBinding.
- AlarmSector.
- AlarmZone.
- AlarmArea.
- AlarmSensorBinding.
- AlarmSensorState.
- AlarmArmingState.
- AlarmMode.
- AlarmRule.
- AlarmPolicyBinding.
- AlarmSchedule.
- AlarmWindow.
- AlarmEvent.
- AlarmTrigger.
- AlarmPanicEvent.
- AlarmTamperEvent.
- AlarmFaultEvent.
- AlarmAcknowledgement.
- AlarmSilenceAction.
- AlarmResetAction.
- AlarmEscalation.
- AlarmEscalationLevel.
- AlarmEscalationTargetReference.
- AlarmIncident.
- AlarmResponsePlan.
- AlarmHistory.
- AlarmCommandRequest.
- AlarmExecutionResult.
- AlarmAuthorizationScope.
- AlarmOfflinePolicy.
- AlarmDeviceBinding.
- AlarmDeviceCapabilityRequirement.
- AlarmSyncState.
- AlarmSignalTransportReference.
- AlarmNotificationRequest.
- AlarmTicketRequest.
- AlarmVideoEvidenceRequest.

Alarmes não cria, não substitui e não executa:

- Tenant.
- Context.
- UserAccount.
- AuthorizationDecision.
- License.
- FeatureFlag.
- PersonProfile.
- ClientProfile.
- Unit, Block, Area ou Environment.
- OrganizationRecord.
- PartnerRecord.
- DeviceRecord.
- GatewayRecord.
- Tunnel, rota, proxy técnico, VPN ou diagnóstico de rede.
- AccessEvent ou abertura de porta como domínio de acesso.
- Live view, mosaico, playback, clipe, snapshot ou evidência de vídeo.
- Convite, reserva ou cobrança.
- SupportTicket como central completa de atendimento.
- Templates, preferências e envio multicanal de Notificações.
- Workflow genérico de Automações.
- Política avançada de LGPD como fonte primária.
- Auditoria avançada de compliance.

Regras obrigatórias:

- Toda ação sensível de alarme deve consultar o Core Platform.
- Toda ação sensível deve possuir AlarmAuthorizationScope.
- AlarmAuthorizationScope deve limitar tenant, contexto, organização, ator, ação, recurso, setor, zona, dispositivo, finalidade, modo solicitado, evento de origem e correlation_id.
- AlarmResource não é DeviceRecord.
- Alarmes usa DeviceReference e AlarmDeviceBinding para operar equipamentos governados por Dispositivos.
- Gateway transporta sinais e comandos técnicos, mas não arma, desarma, silencia, reconhece, escala ou resolve alarmes.
- Controle de Acesso publica AccessEvent; Alarmes pode gerar AlarmEvent por contrato autorizado.
- Câmeras / VMS cria evidência de vídeo associada a AlarmEvent, se autorizado.
- Notificações entrega comunicação multicanal solicitada por Alarmes, mas Alarmes não envia multicanal como domínio próprio.
- Tickets gerencia atendimento e SLA quando Alarmes solicita abertura de ticket.
- Automações consome AlarmEvent e solicita ações por contrato, sem substituir Alarmes.
- Histórico de pânico, áreas sensíveis, escalonamentos e pessoas acionadas exige finalidade, permissão, retenção e auditoria reforçada.
- Toda operação offline de alarme deve possuir AlarmOfflinePolicy explícita, auditável e previamente autorizada.

Fluxo arquitetural correto:

1. Parceiro instala central, sensores, sirenes e comunicadores.
2. Dispositivos cadastra os equipamentos como DeviceRecord.
3. Alarmes cria AlarmResource usando DeviceReference autorizado.
4. Unidades, Blocos, Áreas e Ambientes fornece StructureReference para setores, zonas e cobertura.
5. Core Platform valida contexto, licença, permissão, herança e AuthorizationDecision.
6. Alarmes executa arme, desarme, pânico, disparo, reconhecimento, silenciamento, escalonamento e resolução.
7. Gateway transporta sinais e comandos técnicos quando necessário.
8. Câmeras / VMS cria evidência de vídeo por contrato autorizado.
9. Notificações comunica, Tickets atende e Automações reage apenas por contratos autorizados.
10. Auditoria registra eventos e ações críticas.

Frase consolidada:

> Alarmes governa a operação de alarme. Dispositivos governam equipamentos. Gateway conecta. Core autoriza. Herança governa políticas. Câmeras / VMS gera evidência. Notificações comunica. Auditoria registra.

# 43. Decisões oficiais relacionadas ao módulo Alarmes

Esta versão aplica e respeita as seguintes decisões aprovadas:

     • DEC-074: Alarmes como domínio operacional de alarme.
     • DEC-075: AlarmResource não é DeviceRecord.
     • DEC-076: Toda ação sensível de alarme exige AuthorizationDecision do Core.
     • DEC-077: Gateway transporta sinal e comando de alarme, mas não é Alarmes.
     • DEC-078: Eventos de acesso e vídeo podem se correlacionar com Alarmes sem transferir domínio.
     • DEC-079: AlarmOfflinePolicy obrigatório para operação offline de alarme.
     • DEC-080: Histórico de pânico e eventos críticos exige proteção reforçada.

# 44. Regra arquitetural específica do módulo Financeiro

Financeiro representa o domínio financeiro oficial da plataforma.

Financeiro é responsável por:

- BillingAccount.
- BillingCustomer.
- PayerReference.
- FiscalProfile.
- PaymentResponsibility.
- FinancialContract.
- Subscription.
- RecurringCharge.
- OneTimeCharge.
- ChargeItem.
- ChargeAllocation.
- CostCenter.
- CostShareRule.
- Invoice.
- InvoiceItem.
- Payment.
- PaymentMethod.
- PaymentAttempt.
- PixPayment.
- BoletoPayment.
- CardPayment.
- PaymentGatewayReference.
- PaymentReconciliation.
- PaymentReceipt.
- Refund.
- Chargeback.
- CreditNote.
- DebitNote.
- Discount.
- Interest.
- Fine.
- Tax.
- TaxDocumentReference.
- DelinquencyRecord.
- FinancialRestrictionSuggestion.
- FinancialRestrictionRevocation.
- PartnerCommission.
- PartnerSettlement.
- PartnerPayout.
- PartnerRevenueShare.
- SplitRule.
- FinancialStatement.
- CashFlowView.
- RevenueReport.
- ConsumptionRecord.
- ConsumptionCharge.
- ReservationCharge.
- TicketCharge.
- VisitorCharge.
- AccessCharge.
- CameraCharge.
- AlarmCharge.
- BillingNotificationRequest.
- FinancialAuditTrail.

Financeiro não cria, não substitui e não executa:

- Tenant.
- Context.
- UserAccount.
- AuthorizationDecision.
- Plan, License, FeatureFlag, ModuleRegistry ou Entitlement como fonte oficial.
- PartnerRecord ou PartnerProfile.
- OrganizationRecord ou OrganizationProfile.
- PersonProfile, ClientProfile ou PersonUnitLink.
- Unit, Block, Area ou Environment.
- Motor de Herança e Permissões.
- Bloqueio operacional direto.
- Abertura de porta, revogação de credencial ou regra de acesso físico.
- Bloqueio direto de câmera, live view, playback, stream ou evidência.
- Arme, desarme, silenciamento ou bloqueio direto de alarme.
- Agenda, disponibilidade, check-in ou no-show de reserva.
- Convite, visitante, QR temporário, check-in ou check-out.
- Central completa de tickets, SLA e resolução.
- Templates, preferências e envio multicanal de Notificações.
- Auditoria avançada de compliance como domínio próprio.
- Política avançada de Segurança e LGPD como domínio próprio.
- Gateway financeiro único obrigatório.

Regras obrigatórias:

- Financeiro publica eventos financeiros, mas não executa castigo operacional.
- Eventos como InvoiceOverdue, DelinquencyCreated, InvoicePaid, DelinquencyResolved, FinancialRestrictionSuggested e FinancialRestrictionRevoked influenciam políticas, não bloqueiam recursos diretamente.
- Herança e Permissões avalia a política aplicável.
- Core Platform emite AuthorizationDecision.
- O módulo dono do recurso executa a restrição ou liberação, se autorizado.
- Plan, License, FeatureFlag, ModuleRegistry e Entitlement pertencem ao Core Platform, sob governança superior do Master.
- FinancialContract, Subscription, BillingPolicy, PricingSnapshot, Invoice, Payment e PaymentReconciliation pertencem ao Financeiro.
- BillingAccount, BillingCustomer, PayerReference e FiscalProfile não substituem OrganizationRecord, PersonProfile, ClientProfile ou PartnerRecord.
- Dados financeiros, fiscais, bancários, inadimplência, comprovantes, recibos, dados de cartão tokenizados, repasses, comissões, contratos financeiros e exportações financeiras exigem finalidade, minimização, criptografia, permissão granular, mascaramento e auditoria.
- Integrações financeiras devem usar adaptadores plugáveis para Pix, boleto, cartão, conciliação, split, fiscal, antifraude, banco, ERP e contabilidade.

Fluxo arquitetural correto:

1. Financeiro gera cobrança, fatura, Pix, boleto, cartão, contrato financeiro, repasse, comissão ou split dentro do escopo autorizado.
2. Financeiro publica eventos financeiros como InvoiceOverdue, InvoicePaid, DelinquencyCreated ou FinancialRestrictionSuggested.
3. Herança e Permissões avalia políticas financeiras configuradas.
4. Core Platform decide autorização estrutural.
5. Controle de Acesso, Câmeras / VMS, Alarmes, Reservas ou outro módulo dono executa eventual restrição ou liberação, se autorizado.
6. Notificações entrega comunicação financeira solicitada por contrato.
7. Relatórios / BI consome read models autorizados.
8. Segurança e LGPD governa proteção de dados sensíveis.
9. Auditoria registra eventos e ações críticas.

Frase consolidada:

> Financeiro cobra e informa. Herança avalia. Core decide. Módulo dono executa. Auditoria registra.

# 45. Decisões oficiais relacionadas ao módulo Financeiro

Esta versão aplica e respeita as seguintes decisões aprovadas:

     • DEC-081: Financeiro como domínio financeiro oficial.
     • DEC-082: Separação entre plano estrutural e contrato financeiro.
     • DEC-083: Eventos financeiros não executam bloqueio operacional.
     • DEC-084: Dados financeiros sensíveis com proteção reforçada.
     • DEC-085: Financeiro com adaptadores plugáveis.

# 46. Regra arquitetural específica do módulo Convites e Visitantes

Convites e Visitantes representa o domínio operacional de visita temporária da plataforma.

Convites e Visitantes é responsável por:

- VisitorInvite.
- TemporaryVisitor.
- VisitorProfile, apenas como perfil temporário operacional.
- VisitorIdentitySnapshot.
- VisitorDocumentSnapshot.
- VisitorPhotoSnapshot.
- VisitorVehicleSnapshot.
- VisitorContactSnapshot.
- VisitorConsentSnapshot.
- VisitorHostReference.
- VisitorUnitReference.
- VisitDestinationReference.
- VisitAuthorization.
- VisitWindow.
- VisitPurpose.
- VisitType.
- VisitorApproval.
- VisitorDenial.
- VisitorCheckIn.
- VisitorCheckOut.
- VisitorVisitSession.
- VisitorExpectedArrival.
- VisitorOverstay.
- VisitorBan.
- VisitorWatchlistReference.
- TemporaryVisitPass, como passe lógico de visita.
- VisitorQrRequest.
- VisitorAccessRequest.
- VisitorAccessArea.
- VisitorAllowedArea.
- VisitorCompanion.
- DeliveryVisit.
- ServiceProviderTemporaryVisit.
- RecurringOperationalInvite.
- EventGuestList.
- ReservationGuestList, como lista de convidados.
- VisitorChargeRequest.
- VisitorPenaltyRequest.
- VisitorNotificationRequest.
- VisitorTicketRequest.
- VisitorVideoEvidenceRequest.
- VisitorAlarmContextEvent.
- VisitorAuditTrail.

Convites e Visitantes não cria, não substitui e não executa:

- Tenant.
- Context.
- UserAccount.
- AuthorizationDecision.
- Role, Permission, PermissionGrant ou InheritanceGrant.
- PersonProfile, ClientProfile ou PersonUnitLink.
- Cadastro permanente de pessoas, dependentes ou prestadores recorrentes.
- Unit, Block, Area ou Environment.
- OrganizationRecord ou PartnerRecord.
- Gateway, tunnel, rota ou diagnóstico técnico.
- DeviceRecord.
- AccessCredential, TemporaryAccessCredential, QrCredential, AccessEvent, AccessGrant, AccessDeny ou RemoteUnlock.
- Abertura direta de porta, portão ou catraca.
- Live view, playback, clipe, snapshot ou evidência de vídeo.
- Arme, desarme, pânico, disparo ou escalonamento de alarme.
- Invoice, Pix, boleto, cartão, recibo ou inadimplência.
- Reservation, agenda, disponibilidade ou no-show de reserva.
- SupportTicket, SLA ou central de atendimento como domínio próprio.
- Template, preferência, push, e-mail, SMS ou WhatsApp como domínio próprio.
- Política avançada de Segurança e LGPD como fonte primária.
- Auditoria avançada de compliance como domínio próprio.

Regras obrigatórias:

- Toda ação sensível de visita deve consultar o Core Platform.
- Herança e Permissões governa políticas de convite, aprovação, quantidade, horário, documento, foto, placa, visitante banido, inadimplência e exceções.
- Convites e Visitantes executa o fluxo operacional de visita, mas não decide autorização estrutural sozinho.
- VisitorInvite, TemporaryVisitor e snapshots temporários não substituem PersonProfile, ClientProfile ou cadastros permanentes.
- TemporaryVisitPass é passe lógico de visita; a credencial física real pertence ao Controle de Acesso.
- QR temporário é solicitado por Convites e criado pelo Controle de Acesso.
- Check-in e check-out de visitante pertencem a Convites; passagem física e AccessEvent pertencem ao Controle de Acesso.
- Convites pode publicar eventos que gerem vídeo, alarme, cobrança, ticket ou notificação, sem transferir domínio.
- VisitorBan e VisitorWatchlistReference exigem motivo, escopo, validade, revisão, retenção, autorização e auditoria.
- Dados de visitantes exigem finalidade, minimização, mascaramento, retenção, controle de acesso, consentimento quando aplicável e trilha auditável.

Fluxo arquitetural correto:

1. Cliente, Operador/Gestor ou Portaria cria ou consulta um convite dentro do contexto autorizado.
2. Core Platform valida tenant, contexto, licença, escopo e autorização estrutural.
3. Herança e Permissões influencia políticas aplicáveis.
4. Convites e Visitantes cria VisitorInvite, VisitWindow, TemporaryVisitor e snapshots temporários quando necessário.
5. Se houver acesso físico, Convites solicita QR ou passe temporário ao Controle de Acesso.
6. Controle de Acesso cria credencial temporária, executa passagem física e registra AccessEvent.
7. Câmeras / VMS, Alarmes, Financeiro, Tickets e Notificações participam apenas por eventos, APIs e contratos.
8. Segurança e LGPD governa proteção e retenção.
9. Auditoria registra ações críticas e correlações.

Frase consolidada:

> Convites organiza a visita. Core autoriza. Herança governa políticas. Controle de Acesso executa passagem física. Auditoria registra.

Frase de blindagem:

> Convites não abre porta, não cria pessoa permanente, não gera cobrança, não envia notificação multicanal e não cria credencial física.

# 47. Decisões oficiais relacionadas ao módulo Convites e Visitantes

Esta versão aplica e respeita as seguintes decisões aprovadas:

     • DEC-086: Convites e Visitantes como domínio operacional de visita temporária.
     • DEC-087: Convites e Visitantes não executa acesso físico.
     • DEC-088: Snapshot temporário de visitante não é PersonProfile.
     • DEC-089: Convite pode se vincular a reserva sem assumir agenda.
     • DEC-090: Visitante banido exige governança LGPD.

# 48. Estado atual deste documento

Este documento foi atualizado para incluir a regra arquitetural específica do módulo Convites e Visitantes e consolidar as decisões DEC-086 a DEC-090, preservando as fronteiras anteriores até Financeiro.

# 49. Frase guia deste documento

> Arquitetura boa mantém cada visitante no corredor certo: Convites organiza a visita, Controle de Acesso abre a passagem física, e Auditoria registra os passos.


# 50. Regra arquitetural específica do módulo Tickets

Tickets representa o domínio operacional de atendimento, chamados, solicitações, ocorrências, manutenção operacional, comunicação operacional, comentários, anexos, SLA, escalonamento, resolução e reabertura.

Tickets é dono de:

- Ticket.
- OperationalTicket.
- MaintenanceTicket.
- IncidentTicket.
- ComplaintTicket.
- ServiceRequestTicket.
- TicketCategory.
- TicketPriority.
- TicketStatus.
- TicketType.
- TicketSource.
- TicketRequesterReference.
- TicketAssigneeReference.
- TicketWatcherReference.
- TicketTeamReference.
- TicketParticipantReference.
- TicketComment.
- TicketInternalNote.
- TicketAttachment.
- TicketAttachmentReference.
- TicketSLA.
- TicketSLAClock.
- TicketSLABreach.
- TicketEscalation.
- TicketEscalationLevel.
- TicketResolution.
- TicketReopen.
- TicketClosureReason.
- TicketLinkedResource.
- TicketModuleReference.
- TicketAuditTrail.

Tickets não cria, não substitui e não executa:

- Tenant.
- Context.
- UserAccount.
- AuthorizationDecision.
- PersonProfile.
- ClientProfile.
- Unit, Block, Area ou Environment.
- OrganizationRecord.
- PartnerRecord.
- GatewayRecord, tunnel, rotas, comando ou diagnóstico técnico oficial de gateway.
- DeviceRecord, DeviceHealth ou DeviceDiagnostic oficial.
- Regra operacional de Controle de Acesso.
- Live view, mosaico, playback, clipes, snapshots ou evidências do VMS.
- Arme, desarme, silêncio, reset, pânico ou execução operacional de alarme.
- Cobrança, fatura, Pix, boleto, cartão, inadimplência, repasse ou comissão.
- Convite, aprovação de visitante, check-in, check-out ou QR temporário.
- Agenda, disponibilidade, reserva ou no-show.
- Comunicado institucional do Mural Informativo.
- Envio multicanal de Notificações.
- Workflow genérico de Automações.
- BI avançado acessando bancos internos.
- Auditoria avançada de compliance como domínio próprio.

Regras obrigatórias:

- Toda ação sensível de Tickets deve consultar Core Platform.
- Tickets usa referências autorizadas para pessoa, cliente, unidade, organização, parceiro, gateway, dispositivo, acesso, câmera, alarme, financeiro, visitante, reserva e mural.
- TicketLinkedResource não transfere posse operacional do recurso vinculado.
- Tickets pode solicitar ações a outros módulos por contrato autorizado, mas não executa domínios externos.
- Tickets sensíveis, anexos e evidências exigem classificação, mascaramento, retenção, controle de visualização, autorização e auditoria.
- SLA e escalonamento pertencem ao ciclo do ticket, mas não executam ações operacionais de outros módulos.
- OperationalTicket pertence a Tickets.
- PlatformSupportCase e SupportOperationCase pertencem a Suporte e Operação.

Fluxo arquitetural correto:

1. Usuário, operador, parceiro, automação ou módulo autorizado solicita criação de ticket.
2. Core Platform valida tenant, contexto, licença, herança, permissão e autorização estrutural.
3. Tickets cria e governa o ciclo operacional do chamado.
4. Tickets vincula recursos externos apenas por referências autorizadas.
5. Tickets solicita ações a módulos donos quando necessário.
6. O módulo dono executa sua regra operacional.
7. Tickets registra comentários, anexos, SLA, escalonamento, resolução e reabertura.
8. Notificações comunica quando solicitado por contrato.
9. Auditoria registra ações críticas.
10. Relatórios / BI consome apenas read models autorizados.

Frase consolidada:

> Tickets atende. Core autoriza. Herança e Permissões governa políticas. Módulo dono executa. Auditoria registra.

# 51. Decisões oficiais relacionadas ao módulo Tickets

Esta versão aplica e respeita as seguintes decisões oficiais específicas:

- DEC-092: Tickets como domínio operacional de atendimento.
- DEC-093: TicketLinkedResource por referência autorizada.
- DEC-094: Tickets solicita ações, mas não executa domínios externos.
- DEC-095: Separação entre Tickets e Suporte e Operação.
- DEC-096: Proteção reforçada para tickets sensíveis, anexos e evidências.
- DEC-097: SLA e escalonamento pertencem ao ciclo do ticket.


# 52. Regra arquitetural específica do módulo Mural Informativo

Mural Informativo representa o domínio operacional de comunicação institucional e operacional oficial da plataforma.

Mural Informativo é responsável por:

- Announcement.
- AnnouncementPost.
- AnnouncementDraft.
- AnnouncementPublication.
- AnnouncementCategory.
- AnnouncementPriority.
- AnnouncementStatus.
- AnnouncementAudience.
- AnnouncementAudienceReference.
- AnnouncementTargetStructure.
- AnnouncementTargetUnit.
- AnnouncementTargetArea.
- AnnouncementTargetBlock.
- AnnouncementTargetRole.
- AnnouncementAttachment.
- AnnouncementDocumentReference.
- AnnouncementReadReceipt.
- AnnouncementAcknowledgement.
- AnnouncementAcceptance.
- AnnouncementMandatoryRead.
- AnnouncementPinned.
- AnnouncementHighlight.
- AnnouncementArchive.
- AnnouncementQuestion.
- AnnouncementReaction.
- AnnouncementPoll.
- PollQuestion.
- PollOption.
- PollVote.
- AnnouncementNotificationRequest.
- AnnouncementTicketRequest.
- AnnouncementAuditTrail.
- AnnouncementReadModel.
- AnnouncementResourceReference.
- MuralAuthorizationScope.
- AnnouncementExecutionResult.

Mural Informativo não cria, não substitui e não executa:

- Tenant.
- Context.
- UserAccount.
- Role.
- Permission.
- PermissionGrant.
- InheritanceGrant.
- AuthorizationDecision.
- PersonProfile.
- ClientProfile.
- PersonUnitLink.
- Unit, Block, Area ou Environment.
- OrganizationRecord ou OrganizationProfile.
- Envio multicanal de Notificações.
- Ticket, OperationalTicket, SLA ou resolução de atendimento.
- Invoice, boleto, Pix, cartão, pagamento, inadimplência ou recibo.
- VisitorInvite, QR temporário, check-in ou check-out.
- Reservation, agenda, disponibilidade ou no-show.
- AccessEvent, abertura de porta, bloqueio de acesso ou revogação de credencial.
- Live view, playback, clipe, snapshot ou CameraEvidence.
- AlarmEvent, arme, desarme, silêncio ou disparo de alarme.
- BI avançado acessando banco interno.
- GED completo sem decisão oficial.

Regras obrigatórias:

- Mural publica comunicados, mas Notificações entrega por canais.
- Mural pode originar ticket, mas Tickets governa atendimento, SLA, resolução e reabertura.
- Mural pode publicar aviso financeiro, mas Financeiro cobra e registra pagamento.
- Mural pode publicar aviso de reserva, visita, acesso, câmera ou alarme, mas o módulo dono executa o recurso real.
- Leitura obrigatória, ciência e aceite são evidências de comunicação, não motor de permissão.
- Qualquer efeito operacional decorrente de leitura, ciência ou aceite deve passar por política, Core Platform e módulo dono do recurso.
- Segmentação do Mural deve ocorrer por referências autorizadas, sem copiar cadastro de Pessoas, Unidades ou Organizações.
- Anexos do Mural são anexos do comunicado, não GED completo.
- Relatórios do Mural são próprios do domínio; Relatórios / BI consome apenas AnnouncementReadModel autorizado.
- Dados de público-alvo, histórico de leitura, aceite, anexos e comunicados sensíveis exigem finalidade, minimização, permissão, retenção, mascaramento e auditoria.

Fluxo arquitetural correto:

1. Ator autorizado cria ou edita comunicado no Mural.
2. Core Platform valida tenant, contexto, licença, feature flags e AuthorizationDecision.
3. Herança e Permissões influencia políticas de criação, publicação, segmentação, leitura obrigatória, aceite e exportação.
4. Mural define público-alvo por referências autorizadas.
5. Mural publica o comunicado e registra eventos.
6. Notificações entrega por canais quando solicitado por contrato.
7. Tickets atende dúvidas, reclamações ou solicitações originadas pelo comunicado quando solicitado por contrato.
8. Financeiro, Reservas, Convites e Visitantes, Controle de Acesso, Câmeras / VMS e Alarmes executam seus próprios domínios quando citados ou relacionados.
9. Relatórios / BI consome apenas read models autorizados.
10. Auditoria registra eventos e ações críticas.

Frase consolidada:

> Mural publica. Core autoriza. Herança governa políticas. Notificações entrega. Tickets atende. Financeiro cobra. BI analisa por read model. Auditoria registra.

Frase de blindagem:

> Mural comunica. Não entrega canal. Não atende ticket. Não cobra. Não reserva. Não abre porta. Não opera câmera. Não dispara alarme. Não decide permissão.

# 53. Decisões oficiais relacionadas ao módulo Mural Informativo

Esta versão aplica e respeita as seguintes decisões oficiais:

- DEC-098: Mural Informativo como domínio oficial de comunicação institucional.
- DEC-099: Mural solicita notificações, mas Notificações entrega.
- DEC-100: Mural pode originar ticket, mas Tickets governa atendimento.
- DEC-101: Leitura obrigatória, ciência e aceite não são motor de permissão.
- DEC-102: Segmentação do Mural ocorre por referências autorizadas.
- DEC-103: Anexos do Mural não substituem módulo Documentos/GED.
- DEC-104: Mural expõe read models autorizados para BI.



# 54. Estado atual deste documento
Este documento foi atualizado para incluir a fronteira arquitetural consolidada do módulo Mural Informativo.

Atualizações desta versão:

- Consolidação do Mural Informativo como domínio de comunicação institucional.
- Inclusão das DEC-098 a DEC-104 como decisões aprovadas relacionadas.
- Reforço da separação entre Mural e Notificações.
- Reforço da separação entre Mural e Tickets.
- Reforço da separação entre leitura obrigatória/aceite e motor de permissão.
- Reforço da separação entre segmentação do Mural e cadastros de Pessoas, Unidades e Organizações.
- Reforço da separação entre anexos do Mural e possível módulo futuro Documentos/GED.
- Reforço da separação entre relatórios próprios do Mural e Relatórios / BI.


# 55. Regra arquitetural específica do módulo Notificações

Notificações representa o domínio operacional de envio, entrega, preferências, templates, canais, filas, tentativas, retries, falhas, provedores, opt-in, opt-out, logs de entrega, rastreabilidade e relatórios próprios de mensagens.

Notificações é responsável por:

- NotificationRequest.
- Notification.
- NotificationMessage.
- NotificationTemplate.
- NotificationTemplateVersion.
- NotificationChannel.
- NotificationRecipientReference.
- NotificationContactReference.
- NotificationEndpoint.
- NotificationPreference.
- NotificationOptIn.
- NotificationOptOut.
- NotificationQueue.
- NotificationJob.
- NotificationAttempt.
- NotificationRetryPolicy.
- NotificationDeliveryLog.
- NotificationProvider.
- NotificationProviderAdapter.
- NotificationProviderCredentialReference.
- NotificationWebhook.
- NotificationWebhookDeliveryLog.
- NotificationSuppressionList.
- NotificationRateLimitPolicy.
- NotificationPriority.
- NotificationCriticalAlert.
- NotificationDigest.
- NotificationBatch.
- NotificationSchedule.
- NotificationFailureReason.
- NotificationAuditTrail.
- NotificationReadModel.
- NotificationResourceReference.
- NotificationAuthorizationScope.
- NotificationExecutionResult.

Notificações não cria, não substitui e não executa:

- Tenant.
- Context.
- UserAccount.
- Role.
- Permission.
- PermissionGrant.
- InheritanceGrant.
- License.
- FeatureFlag.
- AuthorizationDecision final.
- PersonProfile.
- ClientProfile.
- PersonUnitLink.
- Cadastro primário de pessoa, cliente, telefone ou e-mail canônico.
- Unit, Block, Area ou Environment.
- OrganizationRecord ou OrganizationProfile.
- Comunicado oficial do Mural Informativo.
- Ticket, OperationalTicket, SLA ou resolução.
- Invoice, boleto, Pix, cartão, pagamento, inadimplência ou recibo.
- VisitorInvite, QR temporário, check-in ou check-out.
- Reservation, agenda, disponibilidade ou no-show.
- AccessEvent, abertura de porta ou revogação de credencial.
- Live view, playback, clipe, snapshot ou CameraEvidence.
- AlarmEvent, arme, desarme, silêncio ou disparo.
- GatewayRecord, tunnel, rota ou diagnóstico técnico.
- DeviceRecord, DeviceHealth ou DeviceDiagnostic.
- Workflow genérico de Automações.
- MarketplaceConnector como domínio de marketplace.
- BI avançado acessando banco interno.

Regras obrigatórias:

- NotificationRequest é apenas solicitação de entrega e não transfere domínio do módulo solicitante.
- Notificações valida tenant, contexto, módulo ativo, escopo, destinatário, canal, template, preferência, opt-in, opt-out, política e AuthorizationDecision quando necessário.
- NotificationPreference e NotificationEndpoint pertencem a Notificações como configurações e endpoints operacionais, não como cadastro primário de pessoa.
- E-mail e telefone canônicos permanecem em Pessoas e Clientes ou Core, conforme o tipo do dado.
- Opt-out, silêncio e preferências devem ser respeitados.
- NotificationCriticalAlert só pode ignorar opt-out ou silêncio com política autorizada, finalidade legítima, AuthorizationDecision, conteúdo mínimo e auditoria reforçada.
- Templates não devem conter dados pessoais fixos desnecessários.
- Filas, tentativas, retries, falhas e delivery logs pertencem a Notificações.
- NotificationSchedule agenda entrega de mensagem, mas não vira workflow. Workflow pertence a Automações.
- Marketplace fornece conectores externos; Notificações governa o uso operacional de providers, adapters, fallback, rate limit, tentativa, falha e log de entrega.
- Segredos de provider devem ser referenciados por ProviderCredentialReference e cofre autorizado, não armazenados como segredo puro.
- Relatórios / BI consome apenas NotificationReadModel autorizado, com mascaramento, agregação, finalidade e autorização.
- Logs de entrega, conteúdo sensível, tracking, webhooks externos e exportações exigem finalidade, permissão, retenção, mascaramento e auditoria.

Fluxo arquitetural correto:

1. Módulo dono gera o fato original.
2. Módulo dono cria NotificationRequest por contrato.
3. Core Platform valida tenant, contexto, licença, feature flags e autorização estrutural quando necessário.
4. Herança e Permissões influencia políticas de envio, canal, alerta crítico, opt-out, templates e logs.
5. Notificações resolve destinatários por referências autorizadas.
6. Notificações aplica preferências, opt-in, opt-out, silêncio, prioridade, rate limit e fallback.
7. Notificações renderiza template com variáveis permitidas e dados mínimos.
8. Notificações enfileira, envia, tenta novamente quando aplicável e registra entrega ou falha.
9. Notificações publica eventos de ciclo de entrega.
10. Relatórios / BI consome read models autorizados.
11. Auditoria e Compliance investiga por trilhas, eventos, APIs ou read models autorizados.

Frase consolidada:

> Módulo dono solicita. Notificações entrega. Core autoriza. Política influencia. Auditoria registra.

# 56. Decisões oficiais relacionadas ao módulo Notificações

Esta versão aplica e respeita as seguintes decisões oficiais:

- DEC-105: Notificações como domínio operacional de envio e entrega multicanal.
- DEC-106: NotificationRequest não transfere domínio do módulo solicitante.
- DEC-107: NotificationPreference e NotificationEndpoint não são cadastro primário de pessoa.
- DEC-108: Opt-out pode ser ignorado apenas em alerta crítico autorizado.
- DEC-109: Marketplace fornece conectores, Notificações governa uso operacional dos providers.
- DEC-110: BI consome apenas read models autorizados de Notificações.

# 57. Regra arquitetural específica do módulo Automações

Automações representa o domínio operacional de workflows autorizados.

Automações é responsável por:

- AutomationWorkflow.
- AutomationRule.
- AutomationTrigger.
- AutomationCondition.
- AutomationAction.
- AutomationActionRequest.
- AutomationExecution.
- AutomationExecutionStep.
- AutomationExecutionResult.
- AutomationExecutionLog.
- AutomationRetryPolicy.
- AutomationSchedule.
- AutomationDelay.
- AutomationTemplate.
- AutomationTemplateVersion.
- AutomationScope.
- AutomationAuthorizationScope.
- AutomationResourceReference.
- AutomationActorReference.
- AutomationTargetReference.
- AutomationWebhook.
- AutomationWebhookDeliveryLog.
- AutomationConnectorAction.
- AutomationApprovalRequest.
- AutomationHumanApproval.
- AutomationReadModel.
- AutomationAuditTrail.

Automações não cria, não substitui e não executa:

- Tenant.
- Context.
- UserAccount.
- Role.
- Permission.
- PermissionGrant.
- InheritanceGrant.
- AuthorizationDecision.
- PersonProfile.
- ClientProfile.
- PersonUnitLink.
- Unit.
- Block.
- Area.
- Environment.
- OrganizationRecord.
- PartnerRecord.
- NotificationRequest como domínio próprio.
- NotificationTemplate.
- NotificationDeliveryLog.
- Ticket.
- Invoice.
- Payment.
- Reservation.
- VisitorInvite.
- AccessEvent.
- AccessGrant.
- Live view.
- Playback.
- Clip.
- Snapshot.
- Evidência de vídeo.
- AlarmEvent operacional.
- GatewayCommand como domínio próprio.
- DeviceRecord.
- DeviceHealth oficial.
- DeviceDiagnostic.
- MarketplaceConnector.
- BI avançado.

Regras obrigatórias:

- Automações não acessa banco interno de outro módulo.
- Automações não executa regra de domínio que pertence a outro módulo.
- Automações não emite AuthorizationDecision final.
- Automações não cria motor paralelo de autorização.
- Automações não envia notificações multicanal diretamente.
- Automações não abre portas, não revoga credenciais e não cria AccessEvent.
- Automações não gera cobrança, boleto, Pix, cartão, recibo, repasse ou inadimplência.
- Automações não cria reserva, convite, ticket, evidência, alarme, gateway ou dispositivo como domínio próprio.
- Toda ação externa deve ser representada por AutomationActionRequest.
- O módulo dono da ação deve executar ou negar a ação.
- Toda ação sensível deve respeitar tenant, contexto, plano, licença, módulo ativo, escopo, permissão, política, AuthorizationDecision do Core Platform, validação do módulo dono e auditoria.
- Ações críticas podem exigir aprovação humana conforme política.
- Retry deve ser limitado, idempotente quando aplicável e nunca pode burlar negativa do Core ou do módulo dono.
- Webhooks e conectores de Automações devem respeitar Marketplace, segurança, credenciais por referência, payload mínimo, assinatura, rate limit, retenção e auditoria.
- AutomationReadModel é a fonte autorizada para Relatórios / BI, sem acesso ao banco interno de Automações.

Fluxo arquitetural correto:

1. O módulo dono publica um evento ou um gatilho autorizado ocorre.
2. Automações valida contrato, tenant, contexto, módulo ativo, licença, workflow ativo e escopo.
3. Herança e Permissões influencia políticas aplicáveis.
4. Core Platform emite AuthorizationDecision quando necessário.
5. Automações avalia condições.
6. Automações cria AutomationActionRequest para o módulo dono.
7. O módulo dono executa, nega ou falha a ação.
8. Automações registra AutomationExecutionResult e histórico operacional.
9. Notificações entrega mensagens quando solicitada por contrato.
10. Marketplace fornece conectores quando houver ação externa autorizada.
11. Segurança e LGPD aplica políticas de proteção, retenção e mascaramento.
12. Auditoria e Compliance consulta trilhas por contrato autorizado.
13. Relatórios / BI consome apenas AutomationReadModel autorizado.

Frase consolidada:

> O fato nasce no módulo dono. Automações avalia o workflow. Política influencia. Core decide. Módulo dono executa. Automações registra. Auditoria preserva.

Frase curta:

> Automações orquestra. Módulo dono executa. Core autoriza. Auditoria registra.

# 58. Decisões oficiais relacionadas ao módulo Automações

Esta versão aplica e respeita as seguintes decisões oficiais:

- DEC-111: Automações como domínio operacional de workflows autorizados.
- DEC-112: Automações não executa domínio de módulos donos.
- DEC-113: Ações críticas em Automações exigem política, escopo, autorização e auditoria.
- DEC-114: AutomationReadModel como fonte autorizada para BI.
- DEC-115: Webhooks e conectores de Automações não substituem Marketplace.
- DEC-116: Marketplace de Integrações como domínio oficial de conectores plugáveis.
- DEC-117: Marketplace não executa regra operacional de módulos donos.
- DEC-118: Credenciais de integração devem ser sempre tratadas por referência segura.
- DEC-119: Conector sensível exige escopo, finalidade, LGPD, auditoria e avaliação de risco.
- DEC-120: Marketplace pode expor views de licença e feature flag, mas Core permanece fonte oficial.
- DEC-121: Saúde de conector não substitui saúde de dispositivo, gateway ou módulo consumidor.

# 59. Estado atual deste documento

Este documento foi atualizado para incluir a fronteira arquitetural consolidada do módulo Notificações e do módulo Automações.

Atualizações desta versão:

- Consolidação de Notificações como domínio operacional de envio e entrega multicanal.
- Inclusão das DEC-105 a DEC-110 como decisões aprovadas relacionadas.
- Inclusão da regra arquitetural específica do módulo Automações.
- Inclusão da regra arquitetural específica do módulo Marketplace de Integrações.
- Inclusão das DEC-111, DEC-112, DEC-113, DEC-114 e DEC-115 como decisões aprovadas relacionadas.
- Inclusão das DEC-116, DEC-117, DEC-118, DEC-119, DEC-120 e DEC-121 como decisões aprovadas relacionadas.
- Reforço da separação entre Notificações e Mural Informativo.
- Reforço da separação entre Notificações e Tickets.
- Reforço da separação entre Notificações e Financeiro.
- Reforço da separação entre Notificações e Pessoas e Clientes.
- Reforço da separação entre opt-out, preferências e alertas críticos.
- Reforço da separação entre MarketplaceConnector e NotificationProvider.
- Reforço da separação entre relatórios próprios de Notificações e Relatórios / BI.


# 60. Regra arquitetural específica do módulo Marketplace de Integrações

Marketplace de Integrações representa o domínio oficial de catálogo, publicação, aprovação, certificação, instalação, habilitação, desabilitação, versionamento, escopo, compatibilidade, adapters, providers, pacotes, templates, credenciais por referência, webhooks externos, termos, compliance, status, logs técnicos e governança de integrações externas.

Marketplace é responsável por:

- MarketplaceConnector.
- MarketplaceConnectorVersion.
- MarketplaceConnectorCatalog.
- MarketplaceConnectorCategory.
- MarketplaceConnectorCapability.
- MarketplaceConnectorRequirement.
- MarketplaceConnectorCompatibility.
- MarketplaceConnectorInstallation.
- MarketplaceConnectorActivation.
- MarketplaceConnectorScope.
- MarketplaceAuthorizationScope.
- MarketplaceProvider.
- MarketplaceProviderProfile.
- MarketplaceProviderStatus.
- MarketplaceConnectorAdapter.
- MarketplaceIntegrationTemplate.
- MarketplaceIntegrationPackage.
- MarketplaceConnectorCredentialReference.
- IntegrationCredentialReference.
- ProviderCredentialReference.
- ConnectorSecretReference.
- ConnectorDataProcessingAgreement.
- ConnectorPrivacyPolicyReference.
- ConnectorTermsAcceptance.
- ConnectorRiskAssessment.
- ConnectorSecurityAssessment.
- MarketplaceConnectorHealth.
- MarketplaceConnectorLog.
- ConnectorAuditTrail.
- ConnectorReadModel.

Marketplace não cria, não substitui e não executa:

- Tenant.
- Context.
- UserAccount.
- Role.
- Permission.
- PermissionGrant.
- InheritanceGrant.
- AuthorizationDecision.
- License oficial.
- FeatureFlag oficial.
- Plan oficial.
- ModuleRegistry oficial.
- PersonProfile.
- ClientProfile.
- PersonUnitLink.
- Unit, Block, Area ou Environment.
- OrganizationRecord.
- PartnerRecord.
- GatewayRecord, tunnel, rota ou diagnóstico técnico.
- DeviceRecord, DeviceHealth ou DeviceDiagnostic.
- Regra operacional de Controle de Acesso.
- Live view, playback, clipe, snapshot ou evidência de vídeo.
- Arme, desarme, pânico, disparo ou incidente de alarme.
- Fatura, boleto, Pix, cartão, pagamento, inadimplência, repasse ou comissão.
- Convite, QR temporário, check-in ou check-out.
- Agenda, disponibilidade, reserva ou no-show.
- Ticket, SLA, atendimento, resolução ou reabertura.
- Comunicado oficial, leitura obrigatória, ciência ou aceite.
- NotificationRequest, NotificationTemplate, NotificationDeliveryLog, opt-in ou opt-out.
- AutomationWorkflow, condição, execução ou ação operacional.
- Marca, domínio, logo, tema ou experiência visual como domínio próprio.
- BI avançado ou acesso a bancos internos.

Regras obrigatórias:

- Marketplace fornece conectores e capacidades plugáveis; o módulo dono executa a regra operacional.
- MarketplaceAuthorizationScope é apenas escopo técnico de integração; AuthorizationDecision pertence ao Core Platform.
- MarketplaceIntegrationLicenseView, MarketplaceIntegrationFeatureFlagView e MarketplaceEntitlementView são apenas read models autorizados; License, FeatureFlag, Plan, Entitlement e ModuleRegistry permanecem no Core Platform.
- Credenciais devem ser tratadas por ProviderCredentialReference, IntegrationCredentialReference, ConnectorSecretReference ou mecanismo equivalente em cofre seguro.
- Segredo bruto não pode aparecer em tela, evento, log, exportação ou payload público.
- Conectores sensíveis exigem escopo mínimo, finalidade, base legal, avaliação de risco, contrato, retenção, mascaramento, auditoria e políticas de Segurança e LGPD.
- MarketplaceConnectorHealth representa apenas saúde técnica da integração, provider, adapter ou conector. Saúde operacional permanece no módulo dono.
- Conectores podem ser bloqueados, suspensos, depreciados, removidos ou ter rollback controlado por risco, falha, incompatibilidade ou política.

Fluxo arquitetural correto:

1. Master publica ou aprova conector no Marketplace.
2. Core Platform valida plano, licença, contexto, escopo e autorização.
3. Parceiro ou Organização instala e habilita conector dentro do escopo autorizado.
4. Segurança e LGPD valida credenciais, finalidade, risco, DPA, retenção e dados sensíveis quando aplicável.
5. Marketplace registra instalação, versão, escopo, termos, credential reference e status técnico.
6. O módulo dono consome o conector por contrato autorizado.
7. Marketplace registra logs técnicos de integração.
8. O módulo dono registra logs operacionais próprios.
9. Auditoria e Compliance investiga e exporta trilhas autorizadas.

Frase consolidada:

> Marketplace cataloga e disponibiliza. Core autoriza. Herança e Permissões influencia. Segurança e LGPD protege. Módulo dono executa. Auditoria registra.

Frase curta:

> Marketplace fornece conectores. Módulo dono executa.


# Regra arquitetural específica do módulo Auditoria e Compliance

Auditoria e Compliance representa o domínio de investigação, conformidade, evidências, cadeia de custódia, exportações auditadas, alertas e trilhas avançadas da plataforma.

Auditoria e Compliance é dona de:

- ComplianceCase.
- ComplianceInvestigation.
- ComplianceTrail.
- AuditEvidence.
- AuditEvidenceHash.
- AuditTimeline.
- AuditCorrelation.
- AuditQuery.
- AuditFilter.
- AuditSearchIndex.
- AuditExport.
- AuditExportApproval.
- AuditExportLog.
- AuditRetentionPolicyReference.
- AuditAccessRequest.
- AuditAccessGrant.
- AuditAccessDenial.
- AuditSensitiveDataView.
- AuditMaskingRuleReference.
- ComplianceAlert.
- ComplianceFinding.
- ComplianceReport.
- ComplianceDashboard limitado a compliance.
- InvestigationNote.
- InvestigationAttachment.
- InvestigationTimeline.
- ChainOfCustodyRecord.

Auditoria e Compliance não cria, não substitui e não executa:

- Tenant.
- Context.
- UserAccount.
- AuthorizationDecision.
- CoreAuditLog.
- AuditLog base.
- SecurityLog base.
- Logs operacionais primários dos módulos donos.
- Política oficial de retenção.
- Política oficial de consentimento.
- Anonimização ou remoção LGPD como domínio próprio.
- BI genérico.
- Suporte operacional.
- VMS.
- Controle de Acesso.
- Financeiro.
- Notificações.
- Automações.
- Marketplace.
- Execução de qualquer módulo dono.

Regras obrigatórias:

- CoreAuditLog, AuditLog base e SecurityLog base pertencem ao Core Platform.
- ModuleAuditLog e logs operacionais pertencem aos módulos donos.
- ComplianceTrail é derivada e não substitui a origem.
- Toda consulta sensível deve respeitar tenant, contexto, escopo, permissão e AuthorizationDecision do Core Platform.
- Toda exportação sensível exige motivo, autorização, aprovação quando aplicável, hash, expiração, log imutável e cadeia de custódia.
- Dados sensíveis devem ser mascarados por padrão, salvo autorização explícita, finalidade e trilha.
- RetentionPolicy, MaskingPolicy, ConsentPolicy, PrivacyPolicy e DataProcessingRecord pertencem a Segurança e LGPD.
- Auditoria e Compliance referencia essas políticas e evidencia conformidade.
- Auditoria e Compliance não acessa banco interno de outro módulo.
- Auditoria e Compliance consome eventos, APIs internas, contratos e read models autorizados.

Fluxo arquitetural correto:

1. Core Platform registra trilha base quando a ação envolve autenticação, autorização, contexto, permissão, licença, segurança ou estrutura.
2. O módulo dono executa a ação e registra seu log operacional próprio.
3. O módulo dono publica evento auditável por contrato.
4. Auditoria e Compliance consome o evento ou consulta trilha por API autorizada.
5. Auditoria e Compliance cria ComplianceTrail derivada, ComplianceCase, ComplianceInvestigation ou AuditEvidence, quando aplicável.
6. Segurança e LGPD fornece referências de retenção, mascaramento, finalidade e proteção.
7. Auditoria e Compliance preserva cadeia de custódia, registra consulta, controla exportação e evidencia conformidade.

Frase consolidada:

Core registra e autoriza. Módulo dono executa e mantém log operacional. Segurança e LGPD protege e define políticas. Auditoria e Compliance investiga, correlaciona, evidencia, alerta e exporta com controle.


Atualização desta versão:
- Inclusão da regra arquitetural específica do módulo Auditoria e Compliance.
- Inclusão das DEC-122, DEC-123, DEC-124, DEC-125, DEC-126 e DEC-127 como decisões aprovadas relacionadas.
- Marcação da DEC-036 como substituída pela DEC-127.


# 61. Atualização consolidada: blindagem de produção

Esta atualização reforça a arquitetura para produção segura, com foco em impedir quebras entre módulos.

Decisões aplicadas nesta atualização:

- DEC-128: Blindagem de produção entre módulos como regra oficial.
- DEC-129: Contratos versionados e compatibilidade obrigatória entre módulos.
- DEC-130: Fail-closed obrigatório para ações críticas e dados sensíveis.

Regra operacional reforçada:

> Contrato protege módulo. Contexto protege tenant. Core protege autorização. Segurança protege dado. Auditoria preserva prova.


# 62. Regra arquitetural específica do módulo Segurança e LGPD

Segurança e LGPD representa o domínio oficial de políticas de proteção, privacidade, retenção, minimização, mascaramento, consentimento, finalidade, base legal, tratamento de dados, anonimização, remoção, bloqueio de tratamento, oposição, portabilidade, classificação de sensibilidade, segredos, credenciais, webhooks externos, risco de terceiros, subprocessadores, transferência internacional e exportação sensível.

Segurança e LGPD não substitui Core Platform, Herança e Permissões, Auditoria e Compliance, Relatórios / BI, Suporte e Operação ou módulos donos.

Regras obrigatórias:

- Toda ação sensível deve validar AuthorizationDecision do Core Platform.
- Toda ação sensível deve consultar política aplicável de Segurança e LGPD.
- Módulo dono executa a ação operacional.
- Segurança e LGPD não acessa banco interno de outro módulo.
- Dados sensíveis devem ser minimizados e mascarados por padrão.
- Segredos devem ser tratados por referência segura.
- Exportações sensíveis exigem autorização, motivo, finalidade, escopo, retenção e trilha.
- Ausência de política obrigatória deve falhar fechado.
- Retenção, anonimização e remoção são coordenadas por Segurança e LGPD, mas executadas pelo módulo dono.
- Auditoria e Compliance evidencia conformidade, sem assumir política oficial de LGPD.

Frase consolidada:

Segurança e LGPD define políticas de proteção e tratamento. Core autoriza. Herança influencia. Módulo dono executa. Auditoria evidencia.

# 63. Decisões oficiais relacionadas ao módulo Segurança e LGPD

Esta versão aplica e respeita:

- DEC-020: LGPD e proteção de dados sensíveis.
- DEC-037: Core Platform como autoridade estrutural de autorização.
- DEC-038: Herança e Permissões como camada avançada de governança e políticas.
- DEC-124: Segurança e LGPD governa políticas, Auditoria evidencia conformidade.
- DEC-128: Blindagem de produção entre módulos como regra oficial.
- DEC-129: Contratos versionados e compatibilidade obrigatória entre módulos.
- DEC-130: Fail-closed obrigatório para ações críticas e dados sensíveis.
- DEC-131: Segurança e LGPD como domínio oficial de políticas de proteção e privacidade.
- DEC-132: Segurança e LGPD não substitui Core Platform, Auditoria, Herança, BI, Suporte ou módulos donos.
- DEC-133: Políticas de retenção, mascaramento, minimização, finalidade e consentimento são referências oficiais.
- DEC-134: Solicitações do titular pertencem a Segurança e LGPD, execução ocorre no módulo dono.
- DEC-135: Segredos e credenciais devem usar referência segura.
- DEC-136: Incidentes de segurança e privacidade exigem política, escopo, trilha e separação de domínio.
- DEC-137: Terceiros, conectores e transferência internacional exigem avaliação de risco.
- DEC-138: Ausência de política de Segurança e LGPD deve falhar fechado em ação sensível.

# 64. Estado atual deste documento

Este documento foi atualizado para incluir a fronteira arquitetural consolidada do módulo Segurança e LGPD e a blindagem de produção entre módulos até a DEC-138. A fronteira de Suporte e Operação também foi consolidada nesta versão até a DEC-153.

Próxima etapa recomendada: Matriz Técnica de Dados Sensíveis por Contrato.

A próxima decisão nova deve começar em DEC-193, salvo se o arquivo 03_DECISOES_OFICIAIS.md indicar outra última DEC.

# 65. Frase guia atualizada deste documento

> Contrato protege módulo. Contexto protege tenant. Core protege autorização. Segurança e LGPD protege dados. Auditoria preserva prova.


# 66. Contratos públicos afetados pelo módulo Segurança e LGPD

Contratos que devem ser definidos ou revisados:

- SecurityPolicyContract v1.
- PrivacyPolicyContract v1.
- DataProtectionPolicyContract v1.
- ConsentPolicyContract v1.
- ConsentRecordContract v1.
- DataProcessingRecordContract v1.
- DataSubjectRequestContract v1.
- RetentionPolicyContract v1.
- MaskingPolicyContract v1.
- SensitiveDataClassificationContract v1.
- ExportControlPolicyContract v1.
- SecretPolicyContract v1.
- WebhookSecurityPolicyContract v1.
- ThirdPartyRiskContract v1.
- IncidentPolicyContract v1.
- PrivacyReadModelContract v1.

Todo contrato deve declarar:

- owner_module.
- consumer_module.
- contract_version.
- campos obrigatórios.
- campos opcionais.
- dados sensíveis.
- política de minimização.
- política de mascaramento.
- política de retenção.
- permissão necessária.
- escopo.
- tenant_id.
- context_id.
- correlation_id.
- causation_id quando aplicável.
- idempotency_key quando for comando crítico.
- compatibilidade.
- política de descontinuação.

---

# 29. Regras de compatibilidade e versionamento

- Mudança aditiva pode manter a versão se não quebrar consumidores.
- Mudança incompatível exige nova versão.
- Contratos antigos devem ter período de compatibilidade antes da remoção.
- Eventos devem tolerar campos adicionais.
- Consumidores não podem depender de campos internos não declarados.
- Payload deve ser minimizado.
- Dados sensíveis devem ser mascarados.
- Segredos devem ser apenas referências.
- Eventos não devem transportar documentos completos, biometria bruta, imagem bruta, vídeo bruto ou segredo bruto.
- Comandos críticos devem ser idempotentes.
- Fluxos distribuídos devem usar correlation_id e causation_id.
- Produtores devem usar outbox ou mecanismo equivalente.
- Consumidores devem usar inbox, deduplicação ou mecanismo equivalente.
- Falhas persistentes devem ir para dead-letter ou quarentena.
- Reprocessamento não pode duplicar exportação, remoção, anonimização, consentimento, rotação de credencial ou bloqueio de tratamento.

---

# 30. Parâmetros de segurança e produção

Obrigatório:

- Criptografia em trânsito.
- Criptografia em repouso.
- Minimização de payload.
- Mascaramento por padrão.
- Segredos por referência segura.
- Retenção explícita.
- AuthorizationDecision do Core.
- Validação de tenant e contexto.
- Validação de licença e feature flag.
- Validação de escopo.
- Consentimento quando exigido.
- Finalidade obrigatória.
- Base legal obrigatória.
- Logs auditáveis.
- Exportação controlada.
- Cadeia de custódia quando evidência.
- Fail-closed para ação crítica.
- Idempotência para comandos críticos.
- Outbox/inbox ou mecanismo equivalente.
- Retry controlado.
- Dead-letter ou quarentena.
- Política de expiração para exceções.
- Bloqueio de segredo bruto.
- Bloqueio de URL com token sensível.
- Bloqueio de webhook inseguro.
- Bloqueio de conector sem avaliação quando tratar dado sensível.


# 67. Regra arquitetural específica do módulo Suporte e Operação

Suporte e Operação representa o domínio oficial de sustentação técnica da plataforma, suporte a parceiros, suporte a organizações, incidentes de serviço, status operacional, janelas de manutenção, base de conhecimento, runbooks, diagnóstico assistido, acesso remoto assistido por referência e coordenação entre módulos donos.

Suporte e Operação é dono de:

- SupportOperationCase.
- PlatformSupportCase.
- ServiceIncident.
- TechnicalIncident.
- SupportEscalation.
- SupportSLA.
- SupportDiagnosticRequest.
- SupportDiagnosticResult.
- SupportModuleActionRequest.
- SupportModuleActionResult.
- SupportRemoteAccessRequest.
- SupportRemoteAccessSessionReference.
- MaintenanceWindow.
- ServiceStatus.
- ServiceStatusPage.
- ServiceComponent.
- KnowledgeBaseArticle.
- SupportRunbook.
- KnownIssue.
- Workaround.
- RootCauseAnalysis.
- PostIncidentReview.

Suporte e Operação não cria, não substitui e não executa:

- Tenant.
- Context.
- UserAccount.
- AuthorizationDecision.
- License.
- FeatureFlag.
- OperationalTicket.
- ComplianceCase.
- AuditEvidence.
- Política de Segurança e LGPD.
- BI genérico.
- GatewayCommand.
- DeviceDiagnostic oficial.
- Abertura de porta.
- Stream de câmera.
- Alarme operacional.
- Cobrança.
- Convite.
- Reserva.
- Notificação multicanal como domínio próprio.
- Workflow.
- Conector de Marketplace.

Regras obrigatórias:

- Toda ação sensível de Suporte deve consultar Core Platform.
- Diagnóstico assistido deve ocorrer por contrato versionado.
- Acesso remoto assistido deve ser temporário, escopado, autorizado e auditável.
- Dados sensíveis devem ser minimizados e mascarados.
- Segredos devem usar referência segura.
- Falha de autorização, contexto, licença, escopo, política ou consentimento deve falhar fechada.
- Suporte não acessa banco interno de outro módulo.
- Suporte não executa regra de módulo dono.

Frase consolidada:

> Suporte atende. Módulo dono corrige. Segurança protege. Auditoria evidencia. Core autoriza.

# 68. Decisões oficiais relacionadas ao módulo Suporte e Operação

Esta versão aplica e respeita:

- DEC-128: Blindagem de produção entre módulos como regra oficial.
- DEC-129: Contratos versionados e compatibilidade obrigatória entre módulos.
- DEC-130: Fail-closed obrigatório para ações críticas e dados sensíveis.
- DEC-131: Segurança e LGPD como domínio oficial de políticas de proteção e privacidade.
- DEC-139: Suporte e Operação como domínio oficial de sustentação da plataforma.
- DEC-140: Separação oficial entre Tickets e Suporte e Operação.
- DEC-141: Suporte coordena, mas módulo dono executa.
- DEC-142: Diagnóstico assistido por contrato versionado.
- DEC-143: Acesso remoto assistido deve ser temporário, autorizado e auditável.
- DEC-144: Status operacional e incidentes de serviço pertencem a Suporte e Operação.
- DEC-145: Dados sensíveis em suporte exigem minimização, mascaramento e referência segura.

# 69. Estado atual deste documento

Este documento foi atualizado para incluir a fronteira arquitetural consolidada do módulo Suporte e Operação e a blindagem de produção entre módulos até a DEC-153.

Próxima etapa recomendada: Matriz Técnica de Dados Sensíveis por Contrato.

A próxima decisão nova deve começar em DEC-193, salvo se o arquivo 03_DECISOES_OFICIAIS.md indicar outra última DEC.


# 69. Regra arquitetural específica do módulo Reservas

Reservas representa o domínio operacional de agenda e uso reservado de recursos físicos ou compartilhados.

Reservas é dono de agenda, disponibilidade, reserva, solicitação, aprovação, recusa, confirmação, cancelamento, check-in, check-out, no-show, conflitos, holds, bloqueios, regras de uso, participantes, convidados vinculados, solicitações de cobrança, solicitações de acesso, solicitações de notificação, solicitações de ticket, eventos para automações, read models próprios e trilha operacional.

Reservas não cria, não substitui e não executa:

- Tenant.
- Context.
- UserAccount.
- PermissionGrant.
- AuthorizationDecision.
- License.
- FeatureFlag.
- Unit.
- Block.
- Area.
- Environment.
- AccessCredential.
- AccessGrant.
- AccessEvent.
- Invoice.
- Payment.
- VisitorInvite.
- OperationalTicket.
- NotificationRequest como domínio de entrega.
- AutomationWorkflow.
- ComplianceCase.
- AuditEvidence.
- DataRetentionPolicy.

Regras obrigatórias:

- Toda ação sensível em Reservas deve consultar o Core Platform.
- Toda ação sensível deve possuir ReservationAuthorizationScope ou escopo equivalente do módulo.
- Reservas deve validar módulo ativo, licença, feature flag, herança, ResourceReference, política de Segurança e LGPD e AuthorizationDecision.
- Comandos críticos de Reservas devem usar idempotency_key quando houver risco de duplicidade.
- Eventos de Reservas devem respeitar EventEnvelope v1, minimização de payload, correlation_id, causation_id e contratos versionados.
- Reservas usa StructureReference autorizada, mas não assume Unit, Block, Area ou Environment.
- ReservationAccessWindow temporiza o uso, mas Controle de Acesso executa a passagem física.
- ReservationChargeRequest, ReservationDepositRequest, ReservationPenaltyRequest e ReservationRefundRequest solicitam ação ao Financeiro, sem executar financeiro.
- ReservationGuestList e ReservationGuestReference não substituem Convites e Visitantes.
- ReservationTicketRequest solicita atendimento, mas Tickets governa OperationalTicket, SLA, comentários, anexos e resolução.
- ReservationAutomationTrigger publica fato ou gatilho, mas Automações governa workflows.
- Dados sensíveis de reservas devem ser minimizados, mascarados, retidos por política e auditados.
- Falhas em autorização, escopo, contexto, licença, política, cobrança obrigatória, acesso obrigatório, consentimento, retenção ou proteção devem negar, pausar ou degradar com segurança.

Frase consolidada:

Reservas agenda. Estrutura localiza. Core autoriza. Acesso executa passagem. Financeiro cobra quando aplicável. Notificações comunica. Auditoria registra.

# 70. Decisões oficiais relacionadas ao módulo Reservas

Esta versão incorpora as decisões aprovadas do módulo Reservas:

- DEC-146: Reservas como domínio operacional de agenda e uso de recursos reserváveis.
- DEC-147: ReservableResource não transfere domínio da estrutura física.
- DEC-148: ReservationAccessWindow não executa passagem física.
- DEC-149: Reservas solicita cobranças, mas não executa financeiro.
- DEC-150: Lista de convidados de reserva não substitui Convites e Visitantes.
- DEC-151: ReservationTicketRequest não substitui Tickets.
- DEC-152: Eventos de Reservas podem acionar Automações sem criar workflow interno.
- DEC-153: Dados sensíveis de Reservas exigem finalidade, minimização, mascaramento, retenção e trilha.

Estado atual:

Este documento foi atualizado para incluir a fronteira arquitetural consolidada do módulo Reservas e a blindagem de produção entre módulos até a DEC-153.

Próxima etapa recomendada: Matriz Técnica de Dados Sensíveis por Contrato.

A próxima decisão nova deve começar em DEC-193, salvo se o arquivo 03_DECISOES_OFICIAIS.md indicar outra última DEC.


# 71. Regra arquitetural específica de identidade oficial NoduOS

NoduOS é o nome oficial do app e do projeto.

A identidade oficial não altera a arquitetura modular, a hierarquia, a regra de herança, o Core Platform, as fronteiras entre módulos ou a blindagem de produção.

Regras obrigatórias:

- NoduOS deve ser usado como nome oficial nos documentos centrais, prompts e comunicações do projeto.
- A descrição “SaaS Modular de Gestão de Espaços e Segurança Unificada” permanece como subtítulo funcional.
- Building OS permanece como conceito técnico, não como nome oficial.
- A identidade visual oficial inicial usa o conceito “Conexão que impulsiona” e a paleta #1F2937, #00A37A e #F1F3F5.
- White-label pode aplicar marcas por parceiro ou organização quando autorizado, mas não muda as fronteiras arquiteturais do projeto.
- Marca, tema, logo, cores, domínio e experiência customizada continuam pertencendo ao módulo White-label quando forem operacionais por tenant, parceiro ou organização.

Decisão relacionada:

- DEC-154: Nome oficial do projeto e aplicativo como NoduOS.

# 72. Estado atual deste documento

Este documento foi atualizado para registrar Relatórios / BI como módulo consolidado até a DEC-162, preservando NoduOS como nome oficial, Reservas consolidado e a blindagem de produção.

Próxima etapa recomendada: Matriz Técnica de Dados Sensíveis por Contrato.

A próxima decisão nova deve começar em DEC-193, salvo se o arquivo 03_DECISOES_OFICIAIS.md indicar outra última DEC.

# Regra arquitetural específica do módulo Relatórios / BI

Relatórios / BI representa o domínio analítico oficial do NoduOS.

Relatórios / BI é dono de dashboards, indicadores, métricas, KPIs, relatórios, widgets, filtros, consultas agregadas, snapshots, exportações autorizadas, agendamentos de relatório, compartilhamentos, insights e anomalias analíticas.

Relatórios / BI não é dono dos dados operacionais primários. Cada módulo dono preserva seu domínio, estado, regra, ciclo de vida, logs e read models.

Regras obrigatórias:

- Relatórios / BI consome apenas contratos públicos versionados, eventos, APIs internas, webhooks autorizados ou read models analíticos autorizados.
- Relatórios / BI não acessa banco interno de outro módulo.
- Read model analítico não transfere domínio operacional para BI.
- BIDataMart, DataWarehouseReference e DataLakeReference só podem existir como estruturas governadas, rastreáveis, autorizadas, minimizadas, segregadas por tenant e contexto, com owner_module definido.
- BI não define políticas de Segurança e LGPD. BI aplica políticas por referência.
- BI não cria evidência investigativa, ComplianceCase, AuditEvidence, AuditExport ou ChainOfCustodyRecord.
- BIReportSchedule, BIReportExecution e BIReportSnapshot pertencem ao BI. A entrega multicanal pertence a Notificações por contrato autorizado.
- Exportações sensíveis exigem autorização, finalidade, política, mascaramento, retenção, trilha e idempotency_key.
- Dashboards, relatórios e exportações devem indicar origem, owner_module, versão do contrato, data de atualização e defasagem dos dados.
- Falha de contexto, autorização, contrato, política, licença, feature flag ou mascaramento deve negar, pausar ou degradar com segurança.

Fluxo arquitetural correto:

1. Módulo dono publica evento ou read model analítico autorizado.
2. Relatórios / BI consome o contrato público versionado.
3. Core Platform valida tenant, contexto, módulo ativo, licença, feature flag, permissão e AuthorizationDecision.
4. Segurança e LGPD fornece políticas de finalidade, minimização, mascaramento, retenção e exportação sensível.
5. Relatórios / BI agrega, apresenta, compartilha ou exporta apenas dentro do escopo autorizado.
6. Relatórios / BI registra logs funcionais de visualização, consulta, compartilhamento e exportação.
7. Auditoria e Compliance investiga e evidencia quando necessário por contrato autorizado.

Frase consolidada:

> BI analisa. Módulo dono informa. Core autoriza. Segurança protege. Auditoria registra.

Decisões relacionadas:

- DEC-155: Relatórios / BI como domínio analítico oficial.
- DEC-156: Relatórios / BI consome apenas read models, eventos e contratos autorizados.
- DEC-157: Read model analítico não transfere domínio operacional para BI.
- DEC-158: Exportações sensíveis em BI exigem autorização, finalidade, política e trilha.
- DEC-159: BI não substitui Auditoria e Compliance.
- DEC-160: BI não define políticas de Segurança e LGPD.
- DEC-161: Relatórios agendados pertencem ao BI, entrega multicanal pertence a Notificações.
- DEC-162: Data mart, data warehouse e data lake em BI exigem governança explícita.

Próxima etapa recomendada: Matriz Técnica de Dados Sensíveis por Contrato.

A próxima decisão nova deve começar em DEC-193, salvo se o arquivo 03_DECISOES_OFICIAIS.md indicar outra última DEC.

# 73. Regra arquitetural específica do módulo White-label

White-label representa o domínio oficial de identidade visual autorizada do NoduOS.

White-label é dono de:

- WhiteLabelProfile.
- WhiteLabelTheme.
- ThemeVersion.
- ThemeToken.
- ColorPalette.
- BrandLogo.
- BrandAsset.
- BrandAssetVersion.
- BrandTypography.
- BrandIconSet.
- BrandFavicon.
- BrandSplashScreen.
- BrandLoginScreen.
- BrandAppShell.
- BrandNavigationStyle.
- BrandEmailVisualTemplate.
- BrandNotificationVisualTemplate.
- BrandDocumentVisualTemplate.
- BrandReportVisualTemplate.
- BrandPublicPageTemplate.
- CustomDomain.
- CustomSubdomain.
- DomainVerificationRecord.
- DomainDnsInstruction.
- DomainCertificateReference.
- SslCertificateReference.
- BrandPublishingRequest.
- BrandPublishingResult.
- BrandPreview.
- BrandFallbackTheme.
- WhiteLabelScope.
- WhiteLabelPolicyBinding.
- WhiteLabelPermissionView.
- OrganizationWhiteLabelSetting.
- WhiteLabelAuditTrail.
- WhiteLabelReadModel.
- WhiteLabelAnalyticsReadModel.

White-label não cria, não substitui e não executa:

- Tenant.
- Context.
- UserAccount.
- AuthorizationDecision.
- License.
- FeatureFlag.
- Plan.
- PermissionGrant.
- Regra operacional de módulo dono.
- Notificação multicanal.
- Cobrança.
- Relatório analítico.
- Política oficial de Segurança e LGPD.
- Investigação de Auditoria e Compliance.
- Conector de Marketplace.
- Segredo bruto.
- Banco interno de outro módulo.

Regras obrigatórias:

- Toda ação sensível deve consultar Core Platform.
- Publicação, rollback, ativação de domínio, certificado e template crítico exigem idempotency_key.
- Eventos devem usar EventEnvelope v1 quando aplicável.
- Contratos devem ser versionados.
- Domínio customizado exige validação DNS.
- Certificado exige referência segura.
- Assets exigem validação de segurança.
- Templates visuais não executam regra de negócio.
- Falha de autorização, política, domínio, certificado, asset ou contrato deve falhar fechada.
- Fallback padrão deve ser NoduOS.
- NoduOS permanece nome oficial raiz.

Frase consolidada:

White-label personaliza. Core autoriza. Módulo dono preserva regra. Segurança protege. Auditoria registra.

# 74. Decisões oficiais relacionadas ao módulo White-label

Esta versão incorpora as decisões aprovadas do módulo White-label:

- DEC-163: White-label como domínio oficial de identidade visual autorizada.
- DEC-164: White-label não altera regra de negócio, autorização, licença, tenant ou contexto.
- DEC-165: NoduOS permanece nome oficial raiz mesmo com marcas customizadas.
- DEC-166: Domínio customizado e certificados exigem validação, referência segura e fail-closed.
- DEC-167: Assets, uploads e templates visuais exigem validação de segurança e LGPD.
- DEC-168: Templates visuais pertencem ao White-label, execução pertence ao módulo dono.
- DEC-169: Publicação, rollback e fallback de tema são ações críticas idempotentes.
- DEC-170: Herança visual é escopada e não concede permissão operacional.

# 75. Estado atual deste documento

Este documento foi atualizado para registrar White-label como módulo consolidado até a DEC-170, preservando NoduOS como nome oficial, Relatórios / BI consolidado e a blindagem de produção.

Próxima etapa recomendada: Matriz Técnica de Dados Sensíveis por Contrato.

A próxima decisão nova deve começar em DEC-193, salvo se o arquivo 03_DECISOES_OFICIAIS.md indicar outra última DEC.



# 76. Regra arquitetural específica do módulo Master

Master representa o domínio oficial de governança superior da plataforma NoduOS.

Master é dono de:

- MasterAdminProfile.
- MasterAccountReference.
- MasterTeamMemberReference.
- MasterGovernancePolicy.
- MasterGovernanceScope.
- MasterPartnerGovernance.
- MasterPartnerCreationRequest.
- MasterPartnerApproval.
- MasterPartnerRejection.
- MasterPartnerSuspension.
- MasterPartnerRestoration.
- MasterPartnerLimit.
- MasterModuleCatalogView.
- MasterModuleReleasePolicy.
- MasterModuleReleaseRequest.
- MasterPlanCatalogView.
- MasterCommercialPlanPolicy.
- MasterLicenseLimitPolicy.
- MasterFeatureFlagGovernanceView.
- MasterWhiteLabelGovernance.
- MasterMarketplaceGovernance.
- MasterIntegrationGovernance.
- MasterGlobalDashboard.
- MasterOperationalOverview.
- MasterFinancialOverview.
- MasterSupportOverview.
- MasterSecurityOverview.
- MasterComplianceOverview.
- MasterSystemHealthView.
- MasterPartnerPortfolio.
- MasterOrganizationPortfolioView.
- MasterBillingPolicyReference.
- MasterRevenueSummary.
- MasterReadModel.
- MasterAnalyticsReadModel.
- MasterGovernanceAuditTrail.

Master não cria, não substitui e não executa:

- Tenant.
- Context.
- UserAccount.
- PermissionGrant.
- InheritanceGrant.
- AuthorizationDecision.
- License técnica.
- FeatureFlag técnica.
- ModuleRegistry.
- AuditLog base.
- Event bus.
- PartnerRecord como fonte primária.
- OrganizationRecord como fonte primária.
- WhiteLabelTheme.
- MarketplaceConnector.
- Invoice.
- Payment.
- BIReport.
- ComplianceCase.
- AuditEvidence.
- SecurityPolicy oficial.
- SupportOperationCase.
- ServiceIncident.
- Regra operacional de módulo dono.
- Banco interno de outro módulo.
- Segredo bruto.

Regras obrigatórias:

- Master governa limites superiores, mas Core Platform autoriza estruturalmente.
- Master pode solicitar, aprovar, limitar, suspender e restaurar parceiros, mas Parceiros mantém PartnerRecord e operação diária.
- Master governa política superior de módulos, planos e licenças comerciais, mas Core mantém ModuleRegistry, License, Entitlement e FeatureFlag.
- Master governa direito superior de White-label e Marketplace, mas não executa seus domínios.
- Master consome visões globais por Relatórios / BI e read models autorizados, sem acessar bancos internos.
- Suspensão, bloqueio, restauração, liberação ou alteração crítica de limite de parceiro devem usar idempotency_key, correlation_id, AuthorizationDecision, contrato versionado, política aplicável e auditoria.
- Falha de autorização, contexto, escopo, licença, feature flag, política, contrato ou módulo dono deve falhar fechada.

Frase consolidada:

Master governa o limite. Core autoriza. Parceiro opera. Módulo dono executa. Auditoria registra.

# 77. Decisões oficiais relacionadas ao módulo Master

Esta versão incorpora as decisões aprovadas do módulo Master:

- DEC-171: Master como domínio oficial de governança superior.
- DEC-172: Master não substitui Core Platform.
- DEC-173: Master governa parceiros sem substituir Parceiros.
- DEC-174: Master governa módulos, planos e licenças por política superior.
- DEC-175: Master consome visões globais sem acessar bancos internos.
- DEC-176: Master governa White-label e Marketplace sem executar seus domínios.
- DEC-177: Suspensão, bloqueio e restauração de parceiro são ações críticas idempotentes.
- DEC-178: Master não executa regra operacional de módulos donos.

# 78. Estado atual deste documento

Este documento foi atualizado para registrar Master como módulo consolidado até a DEC-178, preservando NoduOS como nome oficial, White-label consolidado e a blindagem de produção.

Próxima etapa recomendada: Matriz Técnica de Dados Sensíveis por Contrato.

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

A raiz fica consolidada para avançar. O próximo trabalho recomendado não é novo módulo, mas Matriz Técnica de Permissões por Contrato, seguida da matriz de dados sensíveis por campo e do detalhamento de EventEnvelope v1, EvidenceReference e SecretReference.

# Regra arquitetural complementar: Catálogo de Contratos Públicos

O NoduOS passa a manter o arquivo 05_CATALOGO_DE_CONTRATOS_PUBLICOS.md como documento técnico raiz complementar.

Todo contrato público entre módulos deve ser versionado, possuir owner_module único e declarar: tipo, versão, status, objetivo, consumidores autorizados, permissões, escopo, tenant/contexto quando aplicável, dados sensíveis, nível de sensibilidade, minimização, mascaramento, retenção, auditoria, AuthorizationDecision quando sensível, idempotência quando crítico, correlation_id, causation_id quando aplicável, EventEnvelope v1 quando evento, outbox/inbox quando crítico, retry, dead-letter/quarentena, comportamento em falha, fail-closed, compatibilidade e descontinuação.

Tipos oficiais de contrato

1. API interna.
2. Comando.
3. Evento de fato ocorrido.
4. Evento de solicitação registrada.
5. Read model autorizado.
6. Webhook interno.
7. Webhook externo.
8. Contrato de política.
9. Contrato de autorização.
10. Contrato de evidência.
11. Contrato de exportação.
12. Contrato analítico.
13. Contrato de diagnóstico.
14. Contrato de integração.
15. Contrato de notificação.
16. Contrato de suporte.
17. Contrato de auditoria.
18. Contrato de segurança e LGPD.

Regras obrigatórias

- Comando solicita execução.
- Evento de fato ocorrido comunica execução já realizada.
- Evento de solicitação registrada não prova execução.
- Read model não transfere domínio e não vira banco compartilhado.
- Contrato sensível sem política de Segurança e LGPD deve falhar fechado.
- Contrato crítico sem AuthorizationDecision válido deve falhar fechado.
- Contrato crítico com risco de duplicidade deve exigir idempotency_key.
- Evento crítico deve usar EventEnvelope v1, correlation_id, causation_id quando derivado, outbox, inbox/deduplicação, retry controlado e dead-letter/quarentena.
- Segredo bruto nunca deve circular por contrato público.
- Evidência deve trafegar por EvidenceReference, não por bruto indevido.

Separação oficial

O catálogo define fronteira conceitual pública entre módulos. Ele não substitui schema técnico final, banco de dados, endpoint, migration, DTO de linguagem específica, rota de framework, tela ou implementação.

# Regra arquitetural complementar: Matriz Técnica de Permissões por Contrato

A Matriz Técnica de Permissões por Contrato é documento técnico oficial complementar ao Catálogo de Contratos Públicos.

Ela deve ser aplicada antes de banco de dados, endpoints finais, filas, integrações, telas, jobs, workers ou implementação.

Todo contrato público deve possuir permission_code conceitual no formato:

```text
<dominio>.<recurso_ou_contrato>.<ação>
```

A permission_code não substitui PermissionGrant, InheritanceGrant, Role, ResourceReference, AuthorizationDecision ou qualquer decisão estrutural do Core Platform.

Todo uso de contrato público deve validar:

- owner_module.
- contract_id.
- versão.
- tipo oficial de contrato.
- perfil autorizado.
- módulo consumidor autorizado.
- permission_code.
- tenant_id.
- context_id.
- actor_reference.
- resource_reference, quando aplicável.
- módulo ativo, quando aplicável.
- licença, entitlement e feature flag, quando aplicável.
- AuthorizationDecision, quando sensível ou crítico.
- política de Segurança e LGPD, quando envolver dado protegido.
- auditoria, quando houver ação ou consulta sensível.
- idempotency_key, quando comando crítico puder duplicar efeito.
- EventEnvelope v1, quando evento.
- correlation_id em fluxos distribuídos.
- causation_id em eventos derivados.
- outbox/inbox/deduplicação, retry controlado e dead-letter/quarentena quando crítico.

Regras obrigatórias:

- Sem permissão conceitual, contrato público não deve avançar para modelagem técnica.
- Sem tenant ou contexto válido, contrato sensível deve falhar fechado.
- Sem AuthorizationDecision válido, contrato crítico não executa.
- Sem política de Segurança e LGPD, contrato com dado sensível não executa nem exporta.
- Sem auditoria, contrato crítico não executa.
- Permissão conceitual não autoriza ação sozinha.
- Evento não concede permissão nova ao consumidor.
- Read model não transfere domínio ao consumidor.
- Automação pode solicitar ação, mas o módulo dono executa.
- Integração externa deve passar por Core, Marketplace, Segurança e LGPD e escopo autorizado.

Níveis oficiais de sensibilidade para esta matriz:

1. Público.
2. Interno.
3. Restrito.
4. Sensível.
5. Crítico.

Frase guia:

> Permissão limita o ator. Contrato limita o caminho. Core decide. Módulo dono executa. Auditoria registra.


# Regra arquitetural complementar: Matriz Técnica de Dados Sensíveis por Contrato

A Matriz Técnica de Dados Sensíveis por Contrato é documento técnico oficial complementar ao Catálogo de Contratos Públicos e à Matriz Técnica de Permissões por Contrato.

Ela deve ser aplicada antes de schema técnico, banco de dados, endpoints finais, filas, workers, webhooks, read models, BI, exportações, integrações, telas ou implementação.

Todo contrato público deve declarar e respeitar:

- categorias de dados permitidas;
- categorias de dados proibidas;
- dados que exigem ResourceReference;
- dados que exigem EvidenceReference;
- dados que exigem SecretReference;
- dados que exigem máscara;
- dados que exigem consentimento ou política equivalente;
- dados que exigem finalidade explícita;
- dados que exigem base legal ou política de Segurança e LGPD;
- dados que exigem retenção específica;
- dados que exigem descarte, expurgo ou anonimização;
- dados que exigem AuthorizationDecision do Core;
- dados que exigem auditoria de visualização;
- dados que exigem auditoria de exportação;
- sensibilidade geral do contrato;
- criticidade do contrato;
- comportamento fail-closed.

Regras obrigatórias:

- Segredo bruto nunca trafega.
- Biometria bruta nunca trafega.
- Documento completo não trafega quando referência ou máscara bastar.
- Vídeo, imagem, snapshot, clipe e evidência não trafegam brutos quando EvidenceReference bastar.
- Dado pessoal bruto não trafega quando referência, máscara ou minimização bastar.
- Exportação sensível exige finalidade, autorização, política, retenção, mascaramento e auditoria.
- BI e read model com dado sensível exigem agregação, máscara, finalidade e retenção.
- Webhook externo com dado sensível exige escopo, assinatura, SecretReference, política de terceiro, Segurança e LGPD e auditoria.
- Contrato sensível sem tenant, context, actor_reference, resource_reference quando aplicável, policy_reference, finalidade, retenção, máscara ou AuthorizationDecision deve falhar fechado.

A matriz não substitui Segurança e LGPD, Core Platform, Auditoria e Compliance ou módulo dono. Ela protege o payload público dos contratos antes da modelagem técnica.

Frase guia:

> Dado sensível exige finalidade. Contrato limita payload. Segurança protege. Core autoriza. Auditoria evidencia.

# 33. EventEnvelope v1 como padrão transversal oficial

O EventEnvelope v1 é o padrão conceitual obrigatório para eventos públicos intermodulares do NoduOS.

Aplica-se a:

- eventos entre módulos;
- eventos consumidos por read models autorizados;
- eventos entregues por webhooks internos ou externos autorizados;
- eventos externos recebidos e normalizados;
- eventos técnicos de retry, dead-letter e quarentena;
- eventos usados por auditoria, segurança, LGPD, BI, suporte, evidência ou compliance.

Campos conceituais obrigatórios incluem, conforme aplicabilidade: `event_id`, `event_name`, `event_type`, `event_version`, `contract_id`, `contract_version`, `envelope_version`, `source_module`, `owner_module`, `producer_module`, `tenant_id`, `context_id`, `actor_reference`, `resource_reference`, `permission_code`, `authorization_decision_reference`, políticas aplicáveis, `sensitivity_level`, `data_categories`, `purpose`, `occurred_at`, `published_at`, `correlation_id`, `causation_id` quando derivado, `payload_schema_reference`, `payload_minimized`, `payload`, `audit_reference`, `evidence_reference` quando aplicável, `retry_metadata`, `dead_letter_metadata`, `quarantine_metadata`, compatibilidade e depreciação.

Regras obrigatórias:

- Evento comunica fato, solicitação registrada, falha, retry, dead-letter ou quarentena.
- Evento não solicita execução sensível diretamente.
- Evento de solicitação registrada não prova execução.
- Evento não cria autorização nova.
- `authorization_decision_reference` referencia a decisão original emitida pelo Core Platform.
- Consumidor que precisar executar ação sensível deve solicitar nova AuthorizationDecision.
- Payload deve ser mínimo, versionado, mascarado quando aplicável e aderente à Matriz Técnica de Dados Sensíveis por Contrato.
- Segredo bruto, biometria bruta, vídeo bruto sem política, imagem bruta sem política, documento completo sem finalidade, banco interno, classe interna, objeto ORM, dados de outro tenant e stack trace sensível são proibidos.
- Produtor deve usar outbox ou mecanismo equivalente quando o evento for público, crítico ou sensível.
- Consumidor deve usar inbox/deduplicação ou mecanismo equivalente.
- Retry deve ser controlado.
- Dead-letter trata falha persistente não perigosa.
- Quarentena trata evento suspeito, inseguro, fora de escopo, com payload proibido, origem não confiável, assinatura inválida, política ausente ou tenant/contexto inválido.
- Falha em evento sensível ou crítico deve seguir fail-closed.

Frase guia:

Evento comunica fato. Envelope protege contexto. Payload minimiza dado. Correlação preserva fluxo. Auditoria preserva prova.

Estado da raiz após esta atualização:

- DEC aplicada: DEC-192.
- Última DEC consolidada: DEC-198.
- Próxima DEC livre: DEC-199.
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


# Regra arquitetural consolidada - EvidenceReference v1

EvidenceReference v1 é obrigatório sempre que um contrato, evento, read model, webhook, exportação, relatório, auditoria, suporte, integração ou fluxo externo precisar apontar para prova sem transportar bruto indevido.

Campos conceituais mínimos exigidos quando aplicável:

- `evidence_reference_id`
- `evidence_owner_module`
- `custody_owner_module`
- `source_event_reference`, quando derivado de evento
- `related_resource_reference`
- `related_actor_reference`
- `tenant_id`
- `context_id`
- `evidence_type`
- `sensitivity_level`
- `storage_reference` segura
- `hash_reference`, quando integridade for exigida
- `retention_policy_reference`
- `masking_policy_reference`
- `access_policy_reference`
- `chain_of_custody_reference`
- `audit_reference`
- `export_control_policy`

É proibido transportar vídeo bruto, imagem bruta, documento completo, segredo, biometria, path de storage, URL pública permanente, bucket sensível, credencial ou dados fora do tenant/contexto quando EvidenceReference bastar.


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


# Regra arquitetural consolidada - SecretReference v1

SecretReference v1 é obrigatório para qualquer segredo, token, chave, certificado privado, credencial de gateway, credencial de dispositivo, credencial de conector, segredo de webhook, client secret, assinatura, URL assinada com material sensível ou material criptográfico.

Campos conceituais mínimos exigidos quando aplicável:

- `secret_reference_id`
- `contract_id`
- `contract_version`
- `owner_module`
- `custody_module`
- `tenant_id`
- `context_id`
- `resource_reference`
- `purpose`
- `scope`
- `secret_type`
- `sensitivity_level = Crítico`
- `raw_secret_allowed = never`
- `storage_reference` segura
- `vault_provider_reference` abstrata
- `access_policy_reference`
- `resolution_policy_reference`
- `rotation_policy_reference`
- `revocation_policy_reference`
- `expiration_policy_reference` quando aplicável
- `audit_policy_reference`
- `security_policy_reference`
- `authorization_decision_reference` quando aplicável
- `correlation_id`
- `audit_reference`
- `failure_policy = fail-closed`
- `no_domain_transfer = true`
- `no_shared_database = true`

É proibido transportar segredo bruto em contratos públicos, eventos, comandos, webhooks, read models, logs, URLs, BI, relatórios, auditoria, exportações, configurações, mensagens de erro ou telas.

# Regra arquitetural: AuthorizationDecision v1

AuthorizationDecision v1 é obrigatório para ações sensíveis, críticas ou contextuais que envolvam acesso físico, vídeo, evidência, segredo, exportação, suporte remoto, conector externo, webhook externo, alteração de permissão, herança, licença, feature flag, política, dados pessoais, financeiro, visitante, auditoria sensível ou BI identificável.

AuthorizationDecision deve conter tenant, contexto, ator, recurso, ação, escopo, políticas aplicáveis, reason_code minimizado, expiração quando aplicável, correlation_id e audit_reference em decisões críticas.

AuthorizationDecision expirada, revogada, fora do escopo ou sem política obrigatória deve falhar fechado.

Eventos, read models, ResourceReference, EvidenceReference e SecretReference não autorizam ação por si só.

# Regra arquitetural: ResourceReference v1

ResourceReference v1 é o padrão transversal obrigatório para apontar recursos físicos, lógicos, estruturais, pessoais, operacionais, financeiros, técnicos, documentais, de evidência, de segredo, de política, de suporte, de integração e de auditoria entre módulos sem transferir domínio.

Todo ResourceReference deve declarar owner_module, resource_type, resource_public_id, tenant_id/context_id quando aplicável, sensitivity_level, lifecycle_state, políticas aplicáveis, display_label minimizado e `no_domain_transfer = true`.

ResourceReference não é autorização, permissão, evidência, segredo, evento, read model, banco compartilhado, payload completo ou execução de regra do módulo dono.

Ação sensível sobre recurso referenciado exige AuthorizationDecision do Core Platform. Módulo dono executa. Auditoria registra.

ResourceReference sem owner_module, resource_type, resource_public_id, tenant/contexto aplicável ou `no_domain_transfer = true` deve falhar fechado.


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

# Regra arquitetural: Blueprint técnico da aplicação

Data: 2026-06-27.
Decisão aplicada: DEC-197.
Arquivo técnico raiz: `13_BLUEPRINT_TECNICO_APLICACAO_NODUOS.md`.

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

É proibido iniciar programação de endpoint, tabela, worker, evento, read model, webhook, integração, tela ou deploy que viole AuthorizationDecision v1, ResourceReference v1, EventEnvelope v1, EvidenceReference v1, SecretReference v1, tenant/contexto, idempotência, fail-closed, auditoria ou LGPD.


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
