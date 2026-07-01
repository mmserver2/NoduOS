Mapa de Módulos: NoduOS
SaaS Modular de Gestão de Espaços e Segurança Unificada
Versão: 2.9
Status: Base oficial atualizada com Blueprint Técnico da Aplicação, DEC-197 e documentos técnicos raiz 00 a 13
Data de criação: 2026-06-22
Data desta atualização: 2026-06-27
Tipo de documento: Mapa oficial dos módulos da plataforma

1. Objetivo deste documento
Este documento define o mapa oficial dos módulos da plataforma.
Ele existe para impedir que os módulos sejam planejados de forma solta, repetida, acoplada ou contraditória.
Cada módulo deve ser tratado como uma unidade independente, com responsabilidades próprias, permissões
próprias, eventos próprios, APIs próprias e limites claros.
Regra de proteção:
O chat conversa. O documento manda.

1.1 Identidade oficial do produto
Nome oficial do app e do projeto: NoduOS.

Descrição oficial: SaaS Modular de Gestão de Espaços e Segurança Unificada.

Conceito técnico: Sistema Operacional Modular para Espaços Físicos Conectados.

Building OS Modular Platform deixa de ser nome provisório e permanece apenas como conceito técnico/descritivo.

Identidade visual oficial inicial:
- Conceito: Conexão que impulsiona.
- Paleta principal: #1F2937, #00A37A e #F1F3F5.
- Direção de marca: conexão, acesso, automação, inteligência e eficiência.

Regra de uso:
Todos os módulos devem referenciar o produto como NoduOS quando citarem o app, o projeto ou a plataforma oficial.

2. Regra principal
Todo módulo deve declarar:
- Nome.
- Objetivo.
- Usuários que acessam.
- Responsabilidades.
- O que não faz.
- Entidades principais.
- Permissões.
- Eventos publicados.
- Eventos consumidos.
- APIs internas.
- Integrações externas.
- Dependências permitidas.
- Dependências proibidas.
- Logs e auditoria.
- Relatórios.
- Configurações por nível.
- Status.

3. Estados possíveis de um módulo
Cada módulo pode ter um dos seguintes estados:
- Planejado.
- Em detalhamento.
- Em revisão.
- Aprovado.
- Substituído.
- Removido.

Nenhum módulo deve ser considerado oficial sem estar registrado neste documento.

4. Lista oficial de módulos
4.1 Core Platform
Status: Aprovado como núcleo obrigatório.
Tipo: Núcleo permanente, não comercial.

Objetivo
Sustentar toda a plataforma com autenticação, conta técnica de usuário, tenants, contextos, papéis,
permissões, herança contextual, auditoria, logs, planos, licenças, feature flags, LGPD, notificações básicas,
segurança, configurações globais e barramento de eventos.
O Core Platform é base obrigatória para todos os módulos. Nenhum módulo comercial pode recriar
autenticação, tenancy, contexto, permissões globais, auditoria base, licenças ou feature flags por conta
própria.

Responsabilidades
- Autenticação.
- Conta técnica de usuário.
- Sessões.
- MFA.
- Tenants.
- Contextos.
- Vínculos de contexto.
- Papéis.
- Permissões estruturais.
- Herança contextual.
- Planos.
- Licenças.
- Feature flags.
- Auditoria base.

- Logs de segurança.
- LGPD base.
- Event bus.
- Contratos de eventos.
- API clients.
- Webhooks internos autorizados.
- Notificações básicas.
- Configurações globais.
- Políticas de segurança.
- ResourceReference para autorização, contexto, herança e auditoria.
- AuthorizationDecision estrutural final.

O que não faz
- Não gerencia boletos.
- Não abre portas.
- Não visualiza câmeras.
- Não cadastra dispositivos específicos.
- Não gerencia reservas.
- Não cria convites.
- Não executa automações comerciais.
- Não cria regras financeiras próprias.
- Não integra diretamente com hardware.
- Não cadastra pessoas como PersonProfile completo.
- Não cadastra clientes como ClientProfile completo.
- Não cadastra unidades, blocos, áreas ou ambientes como domínio completo.
- Não substitui módulos comerciais.

Entidades principais
- UserAccount.
- AuthCredential.
- UserSession.
- MfaMethod.
- Tenant.
- TenantHierarchyNode.
- Context.
- ContextMembership.
- Role.
- Permission.
- PermissionGrant.
- InheritanceGrant.
- ResourceReference.

- AuthorizationDecision.
- ModuleRegistry.
- Plan.
- License.
- FeatureFlag.
- AuditLog.
- SecurityLog.
- PrivacyConsent.
- PrivacyRequest.
- EventEnvelope.
- EventContract.
- ApiClient.
- WebhookEndpoint.
- BasicNotification.
- GlobalConfig.

APIs internas principais
- CoreAuthAPI.
- CoreUserAccountAPI.
- CoreContextAPI.
- CoreTenantAPI.
- CoreMembershipAPI.
- CoreAuthorizationAPI.
- CoreInheritanceAPI.
- CoreEntitlementAPI.
- CoreAuditAPI.
- CoreEventBusAPI.
- CoreContractRegistryAPI.
- CorePrivacyAPI.
- CoreNotificationBasicAPI.
- CoreConfigAPI.
- CoreApiClientAPI.

Regra importante
O Core Platform autentica, contextualiza, autoriza, licencia, audita, protege e conecta.
O Core pode manter ResourceReference mínima para recursos de outros módulos, mas o domínio completo
permanece no módulo dono.

4.2 Master
Status: Aprovado.

Objetivo
Representar o domínio oficial de governança superior da plataforma NoduOS, permitindo que o dono da plataforma governe limites superiores de parceiros, módulos, planos comerciais, licenças comerciais, white-label, marketplace, integrações globais, políticas administrativas e visões globais autorizadas, sem substituir o Core Platform nem executar regra operacional de módulos donos.

Usuários
- Master Admin.
- Dono da plataforma.
- Equipe interna autorizada.
- Equipe executiva interna autorizada.
- Equipe de governança autorizada.
- Auditor interno autorizado, apenas conforme escopo.

Responsabilidades
- Governar limites superiores da plataforma.
- Solicitar, aprovar, limitar, suspender e restaurar parceiros por fluxo autorizado.
- Definir políticas superiores de módulos para parceiros.
- Definir políticas comerciais superiores de planos e pacotes.
- Definir limites comerciais superiores de licenciamento.
- Definir políticas superiores de white-label.
- Definir políticas superiores de marketplace.
- Definir políticas superiores de integrações globais.
- Consultar visões globais autorizadas.
- Consumir indicadores globais por Relatórios / BI.
- Consultar trilhas administrativas autorizadas.
- Acompanhar saúde geral da plataforma por read models autorizados.
- Solicitar bloqueios administrativos superiores por política e AuthorizationDecision.
- Publicar eventos de governança superior.

O que não faz
- Não cria Tenant.
- Não cria Context.
- Não cria UserAccount.
- Não cria PermissionGrant.
- Não cria InheritanceGrant.
- Não emite AuthorizationDecision.
- Não cria License técnica.
- Não cria FeatureFlag técnica.
- Não substitui Core Platform.
- Não substitui Parceiros.
- Não mantém PartnerRecord como fonte primária.
- Não substitui Organizações.
- Não mantém OrganizationRecord como fonte primária.
- Não substitui White-label.
- Não edita tema, domínio, certificado, asset ou template como domínio próprio.
- Não substitui Marketplace.
- Não instala conector, não executa adapter e não guarda credencial.
- Não substitui Financeiro.
- Não gera fatura, boleto, Pix, pagamento, split, comissão, repasse ou inadimplência.
- Não substitui Relatórios / BI.
- Não cria banco analítico próprio e não acessa banco interno de módulos.
- Não substitui Auditoria e Compliance.
- Não cria ComplianceCase, AuditEvidence, AuditExport ou ChainOfCustodyRecord.
- Não substitui Segurança e LGPD.
- Não define sozinho política de tratamento de dados sensíveis fora do módulo especializado.
- Não substitui Suporte e Operação.
- Não cria ServiceIncident, SupportOperationCase, runbook ou status page como domínio próprio.
- Não executa regra operacional de Controle de Acesso, Câmeras / VMS, Alarmes, Financeiro, Convites e Visitantes, Tickets, Mural Informativo, Reservas, Notificações, Automações ou Marketplace.

Entidades principais
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

Eventos publicados
- MasterPartnerCreationRequested.
- MasterPartnerCreationApproved.
- MasterPartnerCreationRejected.
- MasterPartnerSuspensionRequested.
- MasterPartnerRestorationRequested.
- MasterPartnerLimitChanged.
- MasterModuleReleasePolicyChanged.
- MasterModuleReleasedToPartner.
- MasterModuleRevokedFromPartner.
- MasterCommercialPlanPolicyChanged.
- MasterLicenseLimitPolicyChanged.
- MasterWhiteLabelGovernanceChanged.
- MasterMarketplaceGovernanceChanged.
- MasterIntegrationGovernanceChanged.
- MasterGlobalAdministrativeBlockRequested.
- MasterGlobalAdministrativeBlockRemoved.
- MasterGovernancePolicyChanged.
- MasterSensitiveExportRequested.
- MasterSensitiveExportApproved.
- MasterSensitiveExportDenied.
- MasterGlobalDashboardViewed.
- MasterAdministrativeTrailViewed.

Eventos consumidos
- TenantCreated.
- ContextCreated.
- UserAccountCreated.
- PermissionGranted.
- PermissionRevoked.
- ModuleRegistered.
- ModuleActivated.
- ModuleDeactivated.
- LicenseChanged.
- EntitlementChanged.
- FeatureFlagChanged.
- AuthorizationDecisionIssued.
- PartnerCreated.
- PartnerProfileUpdated.
- PartnerStatusChanged.
- PartnerSuspended.
- PartnerRestored.
- PartnerScopeChanged.
- OrganizationCreated.
- OrganizationStatusChanged.
- OrganizationModuleAvailabilityUpdated.
- WhiteLabelThemePublished.
- WhiteLabelThemeRollbackExecuted.
- MarketplaceConnectorPublished.
- MarketplaceConnectorSuspended.
- InvoicePaid.
- InvoiceOverdue.
- BIReportPublished.
- ServiceIncidentOpened.
- ServiceIncidentResolved.
- SecurityPolicyChanged.
- PrivacyPolicyChanged.
- ComplianceCaseOpened, apenas como referência autorizada.

APIs internas
- MasterGovernancePolicyAPI.
- MasterPartnerGovernanceAPI.
- MasterModuleGovernanceAPI.
- MasterCommercialPlanPolicyAPI.
- MasterLicenseLimitPolicyAPI.
- MasterWhiteLabelGovernanceAPI.
- MasterMarketplaceGovernanceAPI.
- MasterIntegrationGovernanceAPI.
- MasterDashboardAPI.
- MasterAuditTrailAPI.
- MasterSensitiveExportRequestAPI.

Dependências permitidas
- Core Platform.
- Parceiros.
- Organizações.
- Herança e Permissões.
- White-label.
- Marketplace de Integrações.
- Financeiro.
- Relatórios / BI.
- Auditoria e Compliance.
- Segurança e LGPD.
- Suporte e Operação.
- Notificações, apenas por contrato.
- Módulos operacionais, apenas por resumos, eventos, APIs e read models autorizados.

Dependências proibidas
- Banco interno de qualquer módulo.
- Classes internas de qualquer módulo.
- Motor paralelo ao Core Platform.
- Motor paralelo de autorização.
- Motor paralelo de licenças.
- Motor paralelo de feature flags.
- Motor paralelo de auditoria.
- Motor financeiro.
- Motor de BI.
- Motor de white-label.
- Motor de marketplace.
- Motor de suporte.
- Execução operacional de módulos donos.
- Comunicação direta com hardware.
- Segredo bruto em payload, evento, log, URL ou read model.
- Read model como banco compartilhado.

Regra importante
Master governa o limite. Core autoriza. Parceiro opera. Módulo dono executa. Auditoria registra.


4.3 Parceiros
Status: Aprovado.

Objetivo
Representar o domínio operacional autorizado do parceiro criado pelo Master para vender, implantar, configurar, cadastrar gateways e dispositivos por fluxos autorizados, administrar e acompanhar organizações abaixo dele, sempre dentro de escopo, contrato, licença, contexto, permissão e autorização do Core Platform.

Usuários
- Parceiro Admin.
- Equipe técnica do parceiro.
- Equipe comercial do parceiro.
- Suporte do parceiro.
- Equipe de implantação do parceiro.
- Master, para governança superior e auditoria conforme permissão.

Responsabilidades
- Manter PartnerRecord.
- Manter PartnerProfile.
- Manter PartnerStatus.
- Manter PartnerType.
- Manter PartnerLifecycle.
- Manter PartnerScope como representação operacional autorizada, sem substituir permissão ou AuthorizationDecision do Core Platform.
- Manter contatos operacionais, comerciais e técnicos do parceiro.
- Administrar carteira de organizações abaixo dele por fluxo autorizado.
- Solicitar criação de organizações por fluxo autorizado.
- Conduzir implantação física das organizações abaixo dele.
- Instalar e cadastrar gateways por fluxo autorizado do módulo Gateway Local / Mikrotik / Tunnel.
- Instalar e cadastrar dispositivos por fluxo autorizado do módulo Dispositivos.
- Associar dispositivos à organização, gateway e estrutura física por referência autorizada.
- Solicitar criação ou vínculo de operadores/gestores por fluxo autorizado do Core Platform.
- Acompanhar saúde geral da operação por resumos autorizados.
- Acompanhar implantação, pendências, alertas e status operacional.
- Visualizar módulos disponíveis por PartnerModuleAvailability como read model autorizado.
- Visualizar PartnerPlanView e PartnerLicenseView como read models autorizados.
- Visualizar PartnerWhiteLabelPermission como read model autorizado.
- Aplicar white-label quando permitido pelo Master, plano, licença e Core Platform, usando o módulo White-label.
- Acompanhar receita, comissão ou repasse quando habilitado e autorizado, usando resumos do Financeiro.
- Abrir, acompanhar e escalar suporte por contratos com Suporte e Operação.
- Publicar eventos próprios do ciclo de vida e operação do parceiro.

O que não faz
- Não substitui Master.
- Não governa a plataforma inteira.
- Não cria Tenant.
- Não cria Context oficial.
- Não cria UserAccount.
- Não cria login, senha, sessão ou MFA como domínio próprio.
- Não cria Role, Permission, PermissionGrant ou InheritanceGrant como fonte oficial.
- Não emite AuthorizationDecision final.
- Não cria ResourceReference como fonte oficial fora do Core Platform.
- Não cria ModuleRegistry.
- Não cria Plan oficial.
- Não cria License oficial.
- Não cria Entitlement oficial.
- Não cria FeatureFlag oficial.
- Não mantém auditoria base paralela.
- Não substitui Organizações.
- Não mantém OrganizationRecord ou OrganizationProfile como domínio próprio.
- Não substitui Gateway Local / Mikrotik / Tunnel.
- Não é dono de GatewayRecord, tunnel, rotas, latência, diagnóstico remoto ou logs técnicos de gateway.
- Não substitui Dispositivos.
- Não mantém DeviceRecord paralelo, saúde técnica oficial, última comunicação oficial ou diagnóstico técnico oficial de dispositivos como domínio próprio.
- Não substitui White-label.
- Não cria motor próprio de tema, domínio, templates ou identidade visual.
- Não substitui Financeiro.
- Não gera faturas, boletos, Pix, split, repasses, comissões ou inadimplência como domínio próprio.
- Não bloqueia portas, câmeras, reservas, convites, tickets, alarmes, módulos ou organizações por conta própria.
- Não substitui Suporte e Operação.
- Não mantém central completa de incidentes, SLA global, histórico oficial de atendimento ou diagnóstico de suporte como domínio próprio.
- Não executa regra operacional de Controle de Acesso, Câmeras / VMS, Alarmes, Reservas, Convites e Visitantes, Tickets, Mural Informativo, Relatórios / BI, Notificações ou Automações.
- Não acessa banco interno de outro módulo.

Entidades principais
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
- PartnerModuleAvailability, como read model autorizado.
- PartnerPlanView, como read model autorizado.
- PartnerLicenseView, como read model autorizado.
- PartnerWhiteLabelPermission, como read model autorizado.
- PartnerCommercialPolicy, limitada ao escopo autorizado.
- PartnerSupportOverview, como resumo autorizado.
- PartnerRevenueSummary, se habilitado e autorizado.

Separação entre Master, Core e Parceiros
- Master governa o limite superior da plataforma, cria parceiros, libera planos, define módulos globais, licenças superiores, marketplace, integrações globais e políticas superiores.
- Core Platform autentica, contextualiza, licencia, autoriza, audita e conecta.
- Parceiros opera dentro do escopo autorizado.
- PartnerScope orienta o alcance operacional do parceiro, mas não substitui PermissionGrant, InheritanceGrant ou AuthorizationDecision do Core Platform.

Fronteira com Organizações
Parceiro pode criar e administrar organizações abaixo dele por fluxo autorizado.
Organizações mantém OrganizationRecord, OrganizationProfile, OrganizationSettings, OrganizationStatus, OrganizationType, OrganizationAddress e OrganizationOperationalContact.

Regra correta:
Parceiro solicita ou conduz. Core valida. Organizações registra. Módulos especializados completam seus próprios domínios.

Fronteira com Gateway Local / Mikrotik / Tunnel
Parceiro pode instalar, cadastrar e acompanhar gateways por fluxo autorizado.
Gateway Local / Mikrotik / Tunnel mantém GatewayRecord, tunnel, rotas, conectividade, latência, diagnóstico remoto e logs técnicos.

Fronteira com Dispositivos
Parceiro pode criar, cadastrar, instalar, associar, configurar inicialmente, substituir, remover por fluxo autorizado e acompanhar dispositivos das organizações abaixo dele, pois é o integrador responsável pela implantação física.
Dispositivos mantém DeviceRecord, marca, modelo, tipo, saúde, status, diagnóstico, última comunicação, associação com gateway, associação com organização, localização técnica por referência e ciclo de vida técnico.

Regra correta:
Parceiro cadastra e instala. Dispositivos governa o equipamento. O módulo comercial executa o recurso.

Fronteira com White-label
Parceiro pode aplicar marca própria quando autorizado pelo Master, plano, licença e Core Platform.
White-label mantém tema, logo, cores, domínio, favicon, templates, nome comercial, identidade visual e experiência customizada.

Fronteira com Financeiro
Parceiro pode visualizar plano, licença, receita, comissão, repasse e inadimplência quando autorizado.
Financeiro mantém cobrança, fatura, boleto, Pix, cartão, pagamento, inadimplência, repasse, comissão, split, contrato financeiro, relatórios financeiros e consumo variável.

Fronteira com Suporte e Operação
Parceiro pode abrir, acompanhar e escalar chamados e incidentes dentro do seu escopo.
Suporte e Operação mantém incidentes, chamados, base de conhecimento, escalonamento, histórico de atendimento, diagnóstico de atendimento, SLA e status operacional.

Fronteira com módulos comerciais
Parceiros não executa regra operacional de Controle de Acesso, Câmeras / VMS, Alarmes, Financeiro, Convites e Visitantes, Tickets, Reservas, Mural Informativo, Relatórios / BI, Notificações ou Automações.
Parceiros pode visualizar, solicitar, configurar dentro do escopo permitido, acompanhar ou navegar para os módulos especialistas.

Eventos publicados
- PartnerCreated.
- PartnerProfileUpdated.
- PartnerStatusChanged.
- PartnerSuspended.
- PartnerRestored.
- PartnerScopeChanged.
- PartnerOrganizationLinked.
- PartnerOrganizationUnlinked.
- PartnerDeploymentStarted.
- PartnerDeploymentUpdated.
- PartnerDeploymentCompleted.
- PartnerGatewayRegistrationRequested.
- PartnerDeviceRegistrationRequested.
- PartnerModuleActivationRequested.
- PartnerWhiteLabelRequested.
- PartnerSupportRequested.

Eventos consumidos
- TenantCreated.
- ContextCreated.
- LicenseChanged.
- FeatureFlagChanged.
- ModuleActivated.
- ModuleDeactivated.
- OrganizationCreated.
- OrganizationStatusChanged.
- GatewayConnected.
- GatewayDisconnected.
- GatewayHealthChanged.
- DeviceRegistered.
- DeviceHealthChanged.
- DeviceOffline.
- InvoiceCreated.
- InvoicePaid.
- InvoiceOverdue.
- SupportTicketCreated.
- SupportTicketEscalated.
- SupportTicketResolved.
- WhiteLabelUpdated.

APIs internas
- CreatePartnerRecord.
- UpdatePartnerProfile.
- ChangePartnerStatus.
- GetPartnerProfile.
- ListPartners.
- GetPartnerScope.
- ListPartnerOrganizations.
- GetPartnerOperationalSummary.
- GetPartnerDeploymentOverview.
- GetPartnerModuleAvailability.
- GetPartnerLicenseView.
- GetPartnerWhiteLabelPermission.
- GetPartnerSupportOverview.
- GetPartnerRevenueSummary.

APIs chamadas por Parceiros em outros módulos
- CoreAuthorizationAPI.
- CoreUserAccountAPI.
- CoreContextAPI.
- CoreEntitlementAPI.
- OrganizationAPI.
- GatewayAPI.
- DeviceAPI.
- WhiteLabelAPI.
- FinanceAPI.
- SupportOperationAPI.
- NotificationAPI.
- AuditAPI.

Dependências permitidas
- Core Platform.
- Master.
- Organizações.
- Gateway Local / Mikrotik / Tunnel.
- Dispositivos.
- White-label.
- Financeiro.
- Suporte e Operação.
- Herança e Permissões.
- Segurança e LGPD.
- Auditoria e Compliance.
- Notificações, apenas por contrato.
- Relatórios / BI, apenas por read models autorizados.
- Módulos comerciais, apenas por APIs internas, eventos, contratos e read models autorizados.

Dependências proibidas
- Banco interno do Core Platform.
- Banco interno de Organizações.
- Banco interno de Gateway.
- Banco interno de Dispositivos.
- Banco interno de White-label.
- Banco interno de Financeiro.
- Banco interno de Suporte e Operação.
- Banco interno de módulos comerciais.
- Classes internas de outro módulo.
- Motor paralelo de autorização.
- Motor paralelo de licenças.
- Motor paralelo de feature flags.
- Motor paralelo de dispositivos.
- Motor paralelo de gateway.
- Motor paralelo de white-label.
- Motor financeiro.
- Motor completo de suporte.
- Execução de regra comercial de módulos.
- Comunicação direta com hardware fora dos módulos técnicos autorizados.

Observações importantes
Parceiro instala e cadastra. Módulo dono governa. Core autoriza.
Parceiros pode cadastrar dispositivos e gateways por fluxos autorizados dos módulos donos. Isso não transfere a posse técnica de DeviceRecord, GatewayRecord, tunnel, rotas, saúde, diagnóstico, última comunicação, comunicação técnica ou logs técnicos para Parceiros.

4.4 Organizações
Status: Aprovado.

Objetivo
Representar o cadastro operacional e institucional de cada espaço físico conectado dentro da plataforma, sem substituir o Core Platform, Parceiros, Unidades, Pessoas e Clientes, Dispositivos, Gateway Local / Mikrotik / Tunnel ou módulos comerciais.

A Organização responde: que espaço físico conectado é este, qual seu tipo, onde fica, qual seu estado operacional e quais referências institucionais autorizadas ele possui.

Exemplos
- Condomínio.
- Empresa.
- Clínica.
- Coworking.
- Escola.
- Academia.
- Hospital.
- Galpão.
- Prédio comercial.
- Loja.
- Unidade operacional.
- Espaço compartilhado.
- Ambiente industrial.
- Qualquer espaço físico conectado.

Usuários que acessam
- Master, para governança superior e auditoria conforme permissão.
- Parceiro, para criação, implantação, administração e acompanhamento das organizações abaixo do seu escopo autorizado.
- Organização Admin, para administração institucional e operacional do próprio espaço.
- Operador/Gestor, para visualização e administração permitida da organização.
- Cliente, apenas para visualização limitada do próprio contexto quando autorizado.

Responsabilidades
- Manter OrganizationRecord.
- Manter OrganizationProfile.
- Manter OrganizationSettings.
- Manter OrganizationStatus.
- Manter OrganizationType.
- Manter OrganizationAddress.
- Manter OrganizationOperationalContact.
- Manter OrganizationLifecycle.
- Manter referências autorizadas para Tenant e Context do Core Platform.
- Manter referência autorizada ao Parceiro responsável.
- Manter referência autorizada ao root estrutural do módulo Unidades, Blocos, Áreas e Ambientes.
- Exibir operadores por referência autorizada.
- Exibir clientes e vínculos por resumo autorizado, sem ser fonte primária.
- Exibir gateway associado por referência autorizada.
- Exibir dispositivos por resumo autorizado.
- Exibir módulos disponíveis por OrganizationModuleAvailability como read model autorizado.
- Publicar eventos de ciclo de vida da organização.
- Consumir eventos autorizados de Core, Parceiros, Unidades, Pessoas, Gateway, Dispositivos e módulos comerciais.
- Servir como contêiner institucional do espaço conectado, sem absorver domínio dos módulos especialistas.

O que não faz
- Não cria Tenant.
- Não cria Context oficial.
- Não cria UserAccount.
- Não cria login.
- Não cria senha.
- Não controla sessão.
- Não controla MFA.
- Não emite AuthorizationDecision final.
- Não cria motor paralelo de permissão.
- Não cria motor paralelo de licenciamento.
- Não cria FeatureFlag.
- Não controla ModuleRegistry.
- Não cadastra blocos, unidades, áreas ou ambientes como domínio próprio.
- Não substitui Unidades, Blocos, Áreas e Ambientes.
- Não cadastra pessoa como fonte primária.
- Não cria PersonProfile.
- Não cria ClientProfile.
- Não cria PersonUnitLink.
- Não substitui Pessoas e Clientes.
- Não cadastra dispositivo global.
- Não monitora saúde técnica de dispositivo.
- Não diagnostica equipamento.
- Não comunica diretamente com hardware.
- Não gerencia tunnel.
- Não gerencia rotas.
- Não mede latência.
- Não substitui Gateway Local / Mikrotik / Tunnel.
- Não abre portas.
- Não gera QR Code de acesso.
- Não executa facial, RFID ou PIN.
- Não visualiza câmeras.
- Não monta mosaico.
- Não executa playback.
- Não gera evidência de vídeo.
- Não cria cobranças.
- Não cria boletos.
- Não executa bloqueio financeiro.
- Não cria reservas.
- Não calcula disponibilidade de agenda.
- Não cria convites.
- Não executa check-in ou check-out de visitantes.
- Não gerencia tickets.
- Não executa alarmes.
- Não executa automações operacionais.
- Não envia notificações multicanal como domínio próprio.
- Não gera relatórios avançados de BI.
- Não acessa banco interno de outros módulos.

Entidades principais
- OrganizationRecord.
- OrganizationProfile.
- OrganizationSettings.
- OrganizationStatus.
- OrganizationType.
- OrganizationAddress.
- OrganizationOperationalContact.
- OrganizationLifecycle.
- OrganizationReference.
- OrganizationModuleAvailability, como read model autorizado.
- OrganizationStructureSummary, como resumo autorizado.
- OrganizationPeopleSummary, como resumo autorizado.
- OrganizationGatewaySummary, como resumo autorizado.
- OrganizationDeviceSummary, como resumo autorizado.

Separação entre Tenant, Context e Organização
- Tenant pertence ao Core Platform e representa isolamento lógico, escopo estrutural e governança multi-tenant.
- Context pertence ao Core Platform e representa o ambiente lógico ativo no qual o usuário opera.
- OrganizationRecord pertence a Organizações e representa o registro canônico do espaço físico conectado.
- OrganizationProfile pertence a Organizações e representa os dados cadastrais e institucionais do espaço.
- OrganizationSettings pertence a Organizações e guarda apenas configurações locais neutras.
- OrganizationStatus pertence a Organizações e representa o estado cadastral/operacional da organização.
- OrganizationModuleAvailability pertence a Organizações apenas como read model autorizado, refletindo a disponibilidade definida por Core, licenças, entitlements e feature flags.

Campos conceituais de OrganizationRecord
- organization_id.
- tenant_id, referência ao Core Platform.
- context_id, referência ao Core Platform.
- partner_id, referência ao módulo Parceiros.
- organization_profile_id.
- organization_type.
- organization_status.
- lifecycle_state.
- created_by_actor_reference.
- created_at.
- updated_at.
- archived_at.

Campos conceituais de OrganizationProfile
- Nome oficial.
- Nome de exibição.
- Tipo de espaço.
- Documento institucional, se aplicável.
- Endereço.
- Contatos institucionais.
- E-mail administrativo.
- Telefone institucional.
- Horário geral de operação.
- Observações cadastrais.
- Referência de imagem institucional, quando permitido.
- Dados públicos da organização, conforme configuração e autorização.

OrganizationSettings
Pode conter:
- Timezone.
- Idioma padrão.
- Formato de data e hora.
- Nomenclatura local permitida.
- Preferências administrativas.
- Configurações cadastrais locais.
- Preferências de exibição sem alterar regra de negócio.
- Parâmetros institucionais simples.

Não pode conter:
- Feature flag oficial.
- Licença.
- Plano.
- Permissão estrutural.
- Regra de abertura de porta.
- Regra de stream de câmera.
- Regra de bloqueio financeiro.
- Regra de reserva.
- Regra de check-in.
- Regra de visitante.
- Regra de alarme.
- Regra de automação operacional.
- Regra de notificação multicanal.

Fronteira com Core Platform
Core Platform é dono de:
- Tenant.
- Context.
- UserAccount.
- Role.
- Permission.
- PermissionGrant.
- InheritanceGrant.
- ResourceReference.
- AuthorizationDecision.
- ModuleRegistry.
- Plan.
- License.
- Entitlement.
- FeatureFlag.
- Auditoria base.
- Event bus.

Organizações referencia Tenant e Context, mas não cria nem governa esses domínios.
Organizações não emite AuthorizationDecision final.
Organizações não decide licença, módulo ativo ou feature flag.

Fronteira com Parceiros
Parceiro cria, implanta e administra organizações abaixo dele por fluxo autorizado.
Parceiro vende, instala, acompanha e administra dentro do seu escopo.
Organizações mantém o cadastro operacional do espaço.
Core valida escopo, contexto, licença, módulos ativos e autorização.

Regra correta:
Parceiro solicita. Core valida. Organizações registra. Módulos especializados completam seus próprios domínios.

Fronteira com Unidades, Blocos, Áreas e Ambientes
Organizações representa o espaço como entidade institucional/operacional.
Unidades, Blocos, Áreas e Ambientes representa a estrutura física interna.

Exemplo:
- Organização Alpha = condomínio, clínica, coworking, empresa ou loja.
- Estrutura interna = Torre A, Unidade 302, Recepção, Garagem, Sala de Reunião 02, Área Técnica.

Organizações não deve virar cadastro completo de blocos, unidades, áreas e ambientes.
Organizações pode manter apenas referência ao root estrutural ou resumo autorizado.

Fronteira com Pessoas e Clientes
Organizações pode exibir operadores, clientes, responsáveis e vínculos por referência autorizada.
Organizações não é dona de PersonProfile, ClientProfile ou PersonUnitLink.
Organizações não cadastra pessoa como fonte primária.
Organizações não cria login.
Organizações não cria cliente contextual como domínio próprio.

Fronteira com Gateway Local / Mikrotik / Tunnel
Organizações pode ter gateway associado por referência.
Organizações não gerencia tunnel, rotas, status técnico detalhado, latência, diagnóstico ou comunicação local.
Gateway Local / Mikrotik / Tunnel é dono da conectividade local.

Fronteira com Dispositivos
Organizações pode listar ou exibir dispositivos por referência autorizada.
Organizações não é dona do cadastro global, saúde, diagnóstico, comunicação técnica, marca, modelo ou integração de hardware.
Dispositivos é dono do equipamento.

Fronteira com módulos ativos, licenças e feature flags
Organização recebe módulos ativos por licença, plano, entitlement e feature flag, sem que Organizações vire dono do catálogo de módulos ou das regras comerciais.
Core Platform mantém ModuleRegistry, licenças, feature flags, permissões e AuthorizationDecision.
Master e Parceiro governam liberação conforme contrato.
Organizações apenas reflete a disponibilidade operacional da organização.

OrganizationModuleAvailability deve ser tratado como read model autorizado, não como fonte oficial.

Fronteira com módulos comerciais
Organizações não executa:
- Cobranças.
- Bloqueios financeiros.
- Abertura de portas.
- Visualização de câmeras.
- Cadastro de dispositivos.
- Reservas.
- Convites.
- Tickets.
- Alarmes.
- Automações operacionais.
- Notificações multicanal.
- Relatórios avançados de BI.

Cada módulo dono executa sua própria regra.

Eventos publicados
- OrganizationCreated.
- OrganizationProfileUpdated.
- OrganizationSettingsUpdated.
- OrganizationStatusChanged.
- OrganizationArchived.
- OrganizationRestored.
- OrganizationTypeChanged.
- OrganizationAddressUpdated.
- OrganizationOperationalContactUpdated.
- OrganizationStructureReferenceLinked.
- OrganizationStructureReferenceUnlinked.
- OrganizationGatewayReferenceLinked.
- OrganizationGatewayReferenceUnlinked.
- OrganizationDeviceSummaryUpdated.
- OrganizationModuleAvailabilityUpdated.

Eventos consumidos
Do Core Platform:
- TenantCreated.
- ContextCreated.
- ContextUpdated.
- ContextArchived.
- LicenseChanged.
- FeatureFlagChanged.
- ModuleActivated.
- ModuleDeactivated.
- AuthorizationPolicyChanged.

De Parceiros:
- PartnerCreated.
- PartnerUpdated.
- PartnerScopeChanged.
- PartnerSuspended.
- PartnerRestored.

De Unidades, Blocos, Áreas e Ambientes:
- StructureCreated.
- StructureUpdated.
- StructureArchived.
- StructureHierarchyChanged.

De Pessoas e Clientes:
- PersonLinkedToOrganization.
- PersonUnlinkedFromOrganization.
- ClientProfileActivated.
- ClientProfileInactivated.

De Gateway Local / Mikrotik / Tunnel:
- GatewayLinkedToOrganization.
- GatewayUnlinkedFromOrganization.
- GatewayConnected.
- GatewayDisconnected.
- GatewayHealthChanged.

De Dispositivos:
- DeviceRegistered.
- DeviceRemoved.
- DeviceHealthChanged.
- DeviceLinkedToOrganization.
- DeviceUnlinkedFromOrganization.

Dos módulos comerciais, apenas quando necessário e por contrato:
- AccessModuleStatusChanged.
- CameraModuleStatusChanged.
- FinancialModuleStatusChanged.
- ReservationModuleStatusChanged.
- TicketModuleStatusChanged.
- VisitorModuleStatusChanged.
- AlarmModuleStatusChanged.

APIs internas
- CreateOrganizationRecord.
- UpdateOrganizationProfile.
- GetOrganizationRecord.
- GetOrganizationProfile.
- ListOrganizationsByPartner.
- SearchOrganizations.
- UpdateOrganizationSettings.
- ChangeOrganizationStatus.
- ArchiveOrganization.
- RestoreOrganization.
- LinkStructureRootReference.
- UnlinkStructureRootReference.
- LinkGatewayReference.
- UnlinkGatewayReference.
- GetOrganizationOperationalSummary.
- GetOrganizationModuleAvailability.
- GetOrganizationPeopleSummary.
- GetOrganizationDeviceSummary.
- GetOrganizationGatewaySummary.
- ValidateOrganizationReference.

Dependências permitidas
- Core Platform.
- Parceiros.
- Unidades, Blocos, Áreas e Ambientes.
- Pessoas e Clientes.
- Gateway Local / Mikrotik / Tunnel.
- Dispositivos.
- Herança e Permissões.
- Segurança e LGPD.
- Auditoria e Compliance.
- White-label.
- Notificações, apenas para eventos próprios e por contrato.
- Relatórios / BI, apenas por read models autorizados.
- Módulos comerciais, apenas para resumo de disponibilidade ou status autorizado.

Dependências proibidas
- Banco interno do Core Platform.
- Banco interno de Parceiros.
- Banco interno de Pessoas e Clientes.
- Banco interno de Unidades, Blocos, Áreas e Ambientes.
- Banco interno de Dispositivos.
- Banco interno de Gateway.
- Banco interno de módulos comerciais.
- Classes internas de outro módulo.
- SDK técnico de hardware.
- Integração direta com equipamentos.
- Motor de autorização paralelo.
- Motor de licenciamento paralelo.
- Motor financeiro.
- Motor de controle de acesso.
- Motor de câmeras.
- Motor de reservas.
- Motor de visitantes.
- Motor de tickets.
- Motor de alarmes.
- Motor de automações.

Observações importantes
OrganizationRecord é a raiz operacional do espaço físico conectado dentro do módulo Organizações, mas sempre referenciando Tenant e Context do Core Platform.
OrganizationProfile descreve a organização, sem governar acesso, licença, pessoa, estrutura ou recurso.
OrganizationSettings não pode virar depósito oculto de regras comerciais.
OrganizationModuleAvailability reflete disponibilidade, mas não decide licenciamento.

Regra consolidada:
Core cria contexto e autoriza. Parceiro implanta e administra dentro do escopo. Organizações representa o espaço conectado. Unidades mapeia a estrutura interna. Pessoas se vinculam ao espaço. Gateway conecta o mundo físico. Dispositivos governam equipamentos. Módulos comerciais executam recursos. Herança governa políticas. Auditoria registra.

4.5 Pessoas e Clientes
Status: Aprovado.

Objetivo
Gerenciar pessoas reais, usuários finais, clientes contextuais, dados pessoais, documentos, contatos, foto,
consentimentos, dependentes, prestadores autorizados, vínculos com organizações, vínculos com
unidades/blocos/áreas/ambientes, status cadastral, status contextual e histórico individual.

Usuários que acessam
- Master, para auditoria e governança superior conforme permissão.
- Parceiro, para implantação, suporte e gestão das organizações abaixo dele conforme permissão.
- Organização, para configuração local do cadastro.
- Operador/Gestor, para administração diária de pessoas, clientes e vínculos.
- Cliente, para acesso mobile first ao próprio perfil, vínculos, dependentes, prestadores e consentimentos
permitidos.

Responsabilidades
- PersonProfile.
- ClientProfile.
- Cadastro de pessoas.
- Dados pessoais.
- Documentos.
- Contatos.
- Foto.
- Consentimentos.
- Dependentes.
- Prestadores autorizados recorrentes.
- Vínculos com organizações.
- Vínculos com unidades, blocos, áreas e ambientes.
- Histórico individual.
- Status ativo/inativo.
- Pendências cadastrais.
- Solicitação de criação ou vínculo de UserAccount ao Core Platform.
- APIs públicas internas de identidade.

- Eventos de pessoa, cliente, vínculo e consentimento.
- Auditoria de dados pessoais.
- Regras de LGPD relacionadas ao cadastro pessoal.

O que não faz
- Não controla autenticação.
- Não cria senha.
- Não controla sessão.
- Não controla token.
- Não controla MFA.
- Não cria UserAccount diretamente sem Core Platform.
- Não define permissão global.
- Não executa herança final.
- Não abre portas.
- Não gera QR Code de acesso.
- Não visualiza câmeras.
- Não gera cobranças.
- Não gerencia reservas.
- Não gerencia tickets.
- Não gerencia convites temporários.
- Não cadastra dispositivos.
- Não substitui Core Platform.
- Não é dono da estrutura física oficial.

Entidades principais
- PersonProfile.
- ClientProfile.
- PersonDocument.
- PersonContact.
- PersonPhoto.
- PersonConsent.
- ClientContextLink.
- PersonUnitLink.
- PersonRelationship.
- DependentProfile.
- ServiceProviderProfile.
- PersonAccountLinkReference.
- PersonCredentialIdentity.
- PersonHistory.

Eventos publicados

- PersonProfileCreated.
- PersonProfileUpdated.
- PersonProfileInactivated.
- PersonProfileReactivated.
- PersonProfileAnonymized.
- PersonProfileMerged.
- ClientProfileCreated.
- ClientProfileActivated.
- ClientProfileUpdated.
- ClientProfileInactivated.
- ClientProfileSuspended.
- ClientProfileRestored.
- PersonLinkedToOrganization.
- PersonUnlinkedFromOrganization.
- PersonLinkedToUnit.
- PersonUnlinkedFromUnit.
- PrimaryResponsibleChanged.
- DependentLinked.
- DependentUnlinked.
- ServiceProviderLinked.
- ServiceProviderUnlinked.
- PersonDocumentAdded.
- PersonDocumentValidated.
- PersonConsentGranted.
- PersonConsentRevoked.
- PersonAccountLinkRequested.
- PersonLinkedToUserAccount.
- PersonUnlinkedFromUserAccount.
- UserAccountActivationRequested.

Eventos consumidos
- UserAccountCreated.
- UserAccountActivated.
- UserAccountSuspended.
- UserAccountBlocked.
- UserAccountDeleted.
- ContextAccessGranted.
- ContextAccessRevoked.
- OrganizationCreated.
- OrganizationUpdated.
- UnitCreated.

- UnitUpdated.
- UnitInactivated.
- PermissionGranted.
- PermissionRevoked.
- InheritanceChanged.
- DataRetentionPolicyUpdated.
- ConsentPolicyUpdated.

APIs internas
- CreatePersonProfile.
- UpdatePersonProfile.
- GetPersonProfile.
- SearchPersons.
- InactivatePersonProfile.
- AnonymizePersonProfile.
- MergePersonProfiles.
- CreateClientProfile.
- UpdateClientProfile.
- ActivateClientProfile.
- InactivateClientProfile.
- SuspendClientProfile.
- LinkPersonToOrganization.
- LinkPersonToUnit.
- UnlinkPersonFromUnit.
- ChangePrimaryResponsible.
- AddDependent.
- RemoveDependent.
- AddServiceProvider.
- RemoveServiceProvider.
- AddPersonDocument.
- ValidatePersonDocument.
- GrantConsent.
- RevokeConsent.
- RequestUserAccountCreation.
- RequestUserAccountLink.
- GetPublicPersonIdentity.
- GetClientContextSummary.
- CheckPersonActiveInContext.

Dependências permitidas
- Core Platform.

- Herança e Permissões.
- Unidades, Blocos, Áreas e Ambientes.
- Segurança e LGPD.
- Auditoria e Compliance.
- Notificações.
- Convites e Visitantes, por contrato.
- Controle de Acesso, por contrato.
- Financeiro, por contrato.
- Tickets, por contrato.
- Reservas, por contrato.
- Relatórios / BI, por read models autorizados.

Dependências proibidas
- Banco interno do Core Platform.
- Lógica interna de autenticação.
- Banco interno de outros módulos.
- Credenciais físicas de Controle de Acesso.
- Cadastro global de Dispositivos.
- Motor financeiro.
- Motor de reservas.
- Motor de tickets.
- Motor de convites.
- Motor de câmeras.
- Login compartilhado por unidade.

Observações importantes
UserAccount pertence ao Core Platform. PersonProfile e ClientProfile pertencem a Pessoas e Clientes. Pessoa
tem login próprio. Unidade não deve ser login compartilhado. Credencial de login pertence ao Core.
Credencial de identidade pessoal pertence a Pessoas e Clientes. Credencial de acesso físico pertence a
Controle de Acesso. Dados pessoais sensíveis exigem finalidade, permissão e auditoria.

4.6 Unidades, Blocos, Áreas e Ambientes
Status: Aprovado.

Objetivo
Representar a estrutura física oficial interna da organização, incluindo blocos, unidades, áreas, ambientes e
demais divisões físicas utilizadas para localização, organização, associação de recursos e herança contextual.

Usuários que acessam
- Master, para auditoria e governança superior conforme permissão.
- Parceiro, para implantação e estruturação física das organizações abaixo dele.

- Organização, para manter sua estrutura física oficial.
- Operador/Gestor, para administração diária da estrutura física, com experiência mobile first.
- Cliente, para visualizar sua própria unidade, bloco, área ou ambiente vinculado, quando permitido.

Responsabilidades
- Cadastrar blocos.
- Cadastrar unidades.
- Cadastrar áreas.
- Cadastrar ambientes.
- Manter a hierarquia física interna da organização.
- Representar a árvore estrutural oficial.
- Classificar estruturas como comuns, privadas, técnicas, operacionais, restritas ou reserváveis.
- Definir status estrutural.
- Definir visibilidade estrutural.
- Registrar capacidade física quando aplicável.
- Expor estruturas físicas para vínculos pessoais gerenciados pelo módulo Pessoas e Clientes.
- Associar ResourceReferences de câmeras, acessos, dispositivos, recursos reserváveis e demais recursos à
estrutura física, sem assumir a operação desses recursos.
- Definir pontos estruturais aptos a receber recursos herdáveis.
- Publicar eventos estruturais para módulos autorizados.
- Servir como fonte de verdade sobre onde algo está localizado dentro da organização.

O que não faz
- Não cadastra pessoa como fonte primária.
- Não cria PersonProfile.
- Não cria ClientProfile.
- Não cria UserAccount.
- Não cria login de unidade.
- Não transforma unidade em conta compartilhada.
- Não gerencia PersonUnitLink como fonte primária.
- Não substitui Pessoas e Clientes.
- Não substitui Herança e Permissões.
- Não executa regra de acesso físico.
- Não abre porta.
- Não fecha porta.
- Não revoga credencial.
- Não gera QR Code.
- Não executa facial.
- Não gerencia RFID, PIN ou credencial física.
- Não exibe câmeras.
- Não monta mosaico.
- Não abre stream.

- Não faz playback.
- Não gera evidência de vídeo.
- Não gerencia agenda de reservas.
- Não calcula disponibilidade.
- Não cancela reserva.
- Não executa check-in ou no-show de reserva.
- Não cobra reserva.
- Não cria convite.
- Não cria QR temporário de visitante.
- Não executa check-in ou check-out de visitante.
- Não cadastra dispositivo global.
- Não monitora saúde de dispositivo.
- Não diagnostica equipamento.
- Não comunica tecnicamente com hardware.
- Não emite AuthorizationDecision final.
- Não cria motor paralelo ao Core Platform.
- Não cria motor paralelo ao módulo Herança e Permissões.

Entidades principais
- StructureRoot.
- PhysicalStructureNode.
- Block.
- Unit.
- Area.
- Environment.
- StructuralRelationship.
- StructuralStatus.
- StructuralResourceAssignment.
- StructuralResourceReference.
- StructureTypeCatalog.
- StructureImportBatch.

Eventos publicados
- StructureCreated.
- StructureUpdated.
- StructureArchived.
- StructureRestored.
- StructureHierarchyChanged.
- StructureClassificationChanged.
- StructureReservableFlagChanged.
- StructuralResourceAssigned.

- StructuralResourceRemoved.
- StructureImportCompleted.
- StructureImportFailed.
- StructureVisibilityChanged.

Eventos consumidos
- OrganizationCreated.
- OrganizationArchived.
- ResourceReferenceCreated.
- ResourceReferenceUpdated.
- ResourceReferenceRevoked.
- DeviceRegistered.
- DeviceRemoved.
- CameraRegistered.
- AccessPointCreated.
- ReservationResourceCreated.
- PolicyChanged.

APIs internas
- CreateStructure.
- UpdateStructure.
- ArchiveStructure.
- RestoreStructure.
- GetStructureById.
- ListStructuresByOrganization.
- GetStructurePath.
- ValidateStructureReference.
- AssignResourceToStructure.
- RemoveResourceFromStructure.
- ListResourcesByStructure.
- ListStructuresByResourceReference.
- MarkStructureAsReservable.
- ImportStructures.
- GetStructureAuditTrail.

Dependências permitidas
- Core Platform.
- Organizações.
- Pessoas e Clientes.
- Herança e Permissões.
- Dispositivos.

- Controle de Acesso.
- Câmeras / VMS.
- Reservas.
- Convites e Visitantes.
- Relatórios / BI.

Dependências proibidas
- Banco interno de outro módulo.
- Classes internas de outro módulo.
- Execução de regra de acesso físico.
- Stream ou playback.
- Gerenciamento de credencial.
- Criação de pessoa.
- Criação de cliente contextual.
- Criação de UserAccount.
- Criação de PersonUnitLink como fonte primária.
- Agenda de reserva.
- Convite.
- Diagnóstico de dispositivo.
- Comunicação direta com hardware.
- Substituição de ResourceReference do Core.
- Decisão final de autorização.
- Política paralela.
- Consulta sem tenant ou contexto.

Observação importante
Unidades mapeia o espaço. Pessoas se vinculam ao espaço. Core autoriza. Herança governa políticas. O
módulo dono executa o recurso.

4.7 Herança e Permissões
Status: Aprovado.

Objetivo
Governar, configurar, visualizar, delegar, auditar e simular políticas avançadas de herança e permissões,
respeitando o Core Platform como autoridade estrutural de autorização.

Usuários que acessam
- Master Admin.
- Parceiro Admin.
- Equipe técnica do parceiro.
- Organização Admin.

- Operador/Gestor.
- Cliente, apenas de forma limitada e transparente para visualizar o que herdou.

Responsabilidades
- Herança de módulos.
- Herança de recursos.
- Visualização da árvore de herança.
- Delegação de permissões.
- Permissões por papel.
- Permissões por contexto.
- Permissões por unidade.
- Permissões por pessoa.
- Permissões por horário.
- Permissões por recurso.
- Políticas condicionais.
- Políticas de bloqueio.
- Políticas de liberação.
- Simulação de acesso.
- Diagnóstico de negação.
- Explicação de decisão.
- Auditoria funcional de alterações de política.
- Visualização de conflitos entre permissões.
- Administração de exceções.

O que não faz
- Não autentica usuários.
- Não cria UserAccount.
- Não cria tenant.
- Não cria contexto oficial.
- Não substitui Role, Permission, PermissionGrant ou InheritanceGrant do Core.
- Não emite AuthorizationDecision final fora do Core.
- Não executa regra comercial de módulos.
- Não bloqueia portas diretamente.
- Não bloqueia câmeras diretamente.
- Não bloqueia reservas diretamente.
- Não revoga credenciais diretamente.
- Não acessa banco interno de outros módulos.
- Não cria motor paralelo de autorização.

Entidades principais
- AdvancedPolicy.

- PolicyCondition.
- PolicyEffect.
- PolicyScope.
- DelegationRule.
- PolicyException.
- InheritanceView.
- EffectivePermissionView.
- AccessSimulationRun.
- PolicyConflict.
- PolicyTemplate.
- GovernanceAuditRecord.

Eventos publicados
- PolicyCreated.
- PolicyUpdated.
- PolicyActivated.
- PolicyDeactivated.
- PolicyExceptionCreated.
- PolicyExceptionRevoked.
- DelegationGranted.
- DelegationRevoked.
- PermissionConflictDetected.
- PermissionConflictResolved.
- AccessSimulationExecuted.
- EffectivePermissionViewed.
- InheritanceTreeViewed.
- PolicyEvaluationRequested.
- PolicyEvaluationResultGenerated.

Eventos consumidos
- UserCreated.
- UserBlocked.
- ContextCreated.
- OrganizationCreated.
- UnitCreated.
- AreaCreated.
- ResourceRegistered.
- ModuleActivated.
- ModuleDeactivated.
- LicenseChanged.
- InvoiceOverdue.

- InvoicePaid.
- VisitorApproved.
- ReservationCreated.
- ReservationCanceled.
- DeviceOffline.
- PersonLinkedToUnit.
- PersonUnlinkedFromUnit.

APIs internas
- Policy Management API.
- Delegation API.
- Inheritance Visualization API.
- Effective Permission Read API.
- Access Simulation API.
- Policy Evaluation API.
- Conflict Detection API.
- Policy Template API.
- Policy Audit API.

Dependências permitidas
Core Platform, Event bus, Auditoria e Compliance, Segurança e LGPD, Notificações, Relatórios / BI e módulos
comerciais apenas por eventos, APIs internas, contratos e read models autorizados.

Dependências proibidas
Banco interno de outros módulos, motor paralelo de autorização, execução direta de ação comercial,
integração direta com hardware e decisão final fora do Core.

Regra central
Cliente usa apenas o que herdou.
Toda decisão estrutural de autorização passa pelo Core Platform.
Política influencia. Core decide. Módulo dono executa. Auditoria registra.

4.8 Gateway Local / Mikrotik / Tunnel
Status: Aprovado.

Objetivo
Conectar a rede local da organização ao servidor por tunnel seguro, permitindo comunicação técnica autorizada com dispositivos físicos, rotas locais, diagnóstico remoto, monitoramento de latência, logs técnicos, comandos técnicos autorizados e sincronização de eventos locais.

Este módulo representa o domínio técnico de conectividade local entre a plataforma em nuvem e a rede física da organização.

Usuários que acessam
- Master, para saúde global, governança técnica e auditoria superior.
- Parceiro Admin, para implantação e acompanhamento dos gateways das organizações abaixo dele.
- Equipe técnica do parceiro, para instalação, diagnóstico autorizado, substituição e manutenção.
- Organização Admin, apenas para resumo autorizado de conectividade.
- Operador/Gestor, apenas para resumo, alertas e solicitação de suporte.
- Suporte e Operação, para incidentes e atendimento técnico.
- Auditoria e Compliance, para investigação, exportação e correlação de trilhas autorizadas.
- Segurança e LGPD, para políticas de segredos, retenção, mascaramento e acesso remoto.
- Módulos internos autorizados, por contratos, APIs e eventos.

Responsabilidades
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
- Tunnel seguro entre nuvem e rede local.
- Rotas autorizadas.
- Estado online, offline, degradado, intermitente, manutenção, bloqueado ou desconhecido.
- Diagnóstico remoto autorizado.
- Logs técnicos.
- Descoberta técnica temporária de equipamentos.
- Reachability de dispositivos registrados.
- Sincronização de eventos locais.
- Proteção de chaves, credenciais, segredos, IPs internos e rotas privadas.

O que não faz
- Não cria Tenant.
- Não cria Context.
- Não cria UserAccount.
- Não cria login, senha, sessão de usuário ou MFA.
- Não cria Role, Permission, PermissionGrant ou InheritanceGrant.
- Não cria License, Plan, Entitlement ou FeatureFlag.
- Não emite AuthorizationDecision final.
- Não substitui Core Platform.
- Não substitui Master.
- Não substitui Parceiros.
- Não substitui Organizações.
- Não mantém OrganizationRecord ou OrganizationProfile.
- Não substitui Dispositivos.
- Não cria DeviceRecord oficial.
- Não vira cadastro global de equipamentos.
- Não executa regra operacional de Controle de Acesso.
- Não abre portas por conta própria.
- Não gera QR Code de acesso.
- Não cadastra facial operacional.
- Não gerencia RFID ou PIN.
- Não registra log oficial de entrada e saída.
- Não substitui Câmeras / VMS.
- Não entrega live view como domínio próprio.
- Não monta mosaico.
- Não executa playback.
- Não cria clipes ou evidências de vídeo como domínio próprio.
- Não substitui Alarmes.
- Não executa arme/desarme como regra comercial.
- Não interpreta pânico operacional.
- Não define escalonamento de alarme.
- Não substitui Automações.
- Não cria workflows, gatilhos, condições ou ações de negócio.
- Não envia notificações multicanal como domínio próprio.
- Não gera cobrança, reserva, convite ou ticket.
- Não acessa banco interno de outro módulo.
- Não expõe IPs, rotas ou segredos sem autorização.
- Não permite acesso remoto sem contexto, permissão, escopo e auditoria.
- Não prende a arquitetura à Mikrotik.

Entidades principais
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

Separação com Core Platform
Core Platform é dono de Tenant, Context, UserAccount, Role, Permission, PermissionGrant, InheritanceGrant, ResourceReference, AuthorizationDecision, ModuleRegistry, Plan, License, Entitlement, FeatureFlag, auditoria base e event bus.

Gateway referencia tenant_id, context_id, organization_id e partner_id, mas não cria essas entidades como domínio próprio.

Toda ação sensível de tunnel, rota, diagnóstico remoto, comando técnico, leitura técnica, rotação de credencial ou alteração de conectividade deve respeitar autorização estrutural do Core Platform.

Separação com Parceiros
Parceiro pode instalar fisicamente, cadastrar e acompanhar gateways por fluxo autorizado.
Gateway é dono de GatewayRecord, GatewayAgent, GatewayCredential, TunnelSession, rotas, latência, diagnóstico remoto, logs técnicos e comunicação local.

Regra correta:
Parceiro instala e cadastra. Gateway governa tecnicamente. Core autoriza. Auditoria registra.

Separação com Organizações
Organização pode ter um ou mais gateways associados por referência autorizada.
Organizações pode exibir OrganizationGatewaySummary, mas não governa tunnel, rotas, IPs locais, NAT, VPN, firewall, latência, diagnóstico remoto, comandos técnicos ou segredos.

Separação com Dispositivos
Gateway pode descobrir equipamentos, medir reachability, transportar comandos técnicos e encaminhar eventos.
Dispositivos mantém DeviceRecord, DeviceType, DeviceBrand, DeviceModel, DeviceSerial, DeviceHealth, DeviceStatus, DeviceDiagnostic, DeviceLifecycle e DeviceLocationReference.

Regra correta:
Gateway enxerga e transporta. Dispositivos cadastra e governa o equipamento.

GatewayDeviceDiscovery não é DeviceRecord.

Separação com Controle de Acesso
Gateway pode transportar comando técnico autorizado para controladoras, leitores, relés, portas, portões ou catracas.
Controle de Acesso é dono de porta, portão, catraca, credencial física, regra de acesso, QR Code, facial operacional, RFID, PIN, abertura remota, logs de entrada/saída, bloqueios e liberações operacionais.

Gateway não abre porta por conta própria.

Separação com Câmeras / VMS
Gateway pode permitir rota segura para câmeras, NVRs, DVRs, RTSP, ONVIF ou rede local de vídeo.
Câmeras / VMS é dono de live view, stream, mosaico, playback, clipes, evidências, eventos de vídeo e permissões de visualização.

Gateway conecta. Câmeras / VMS visualiza, grava, organiza e entrega vídeo.

Separação com Alarmes
Gateway pode transportar comunicação técnica com centrais, sensores e setores.
Alarmes é dono de central de alarme, setores, sensores, arme, desarme, pânico, disparo, evento de alarme, escalonamento operacional e histórico de alarmes.

Separação com Automações
Gateway pode publicar eventos técnicos e receber comandos autorizados.
Automações é dona de workflows, gatilhos, condições, ações e histórico de execução.

Gateway não executa automações operacionais fora de contrato autorizado.

Segurança e LGPD
Gateway deve proteger credenciais técnicas, chaves do tunnel, segredos do gateway, IPs internos, rotas privadas, logs técnicos, metadados de rede, acesso remoto, diagnóstico remoto e comandos técnicos.

Regras obrigatórias:
- Criptografia.
- Escopo mínimo.
- Mascaramento.
- Rotação de credenciais.
- Revogação de segredos.
- Auditoria.
- Retenção controlada.
- Segregação por tenant/contexto.
- Acesso remoto temporário, justificado e auditado.

Eventos publicados
- GatewayRegistered.
- GatewayLinkedToOrganization.
- GatewayUnlinkedFromOrganization.
- GatewayReplaced.
- GatewayRemoved.
- GatewayLifecycleStateChanged.
- TunnelSessionStarted.
- TunnelSessionEnded.
- TunnelStatusChanged.
- TunnelAuthenticationFailed.
- TunnelRevoked.
- GatewayConnected.
- GatewayDisconnected.
- GatewayConnectivityDegraded.
- GatewayLatencyChanged.
- GatewayHealthChanged.
- GatewayRouteChanged.
- GatewayCredentialCreated.
- GatewayCredentialRotated.
- GatewayCredentialRevoked.
- GatewaySecretAccessAttempted.
- GatewayRemoteAccessStarted.
- GatewayRemoteAccessEnded.
- GatewayRemoteAccessDenied.
- GatewayDiagnosticStarted.
- GatewayDiagnosticCompleted.
- GatewayDiagnosticFailed.
- GatewayCommandRequested.
- GatewayCommandExecuted.
- GatewayCommandFailed.
- GatewayCommandDenied.
- GatewayDeviceDiscoveryStarted.
- GatewayDeviceDiscovered.
- GatewayDeviceDiscoveryCompleted.
- GatewayDeviceReachabilityChanged.
- GatewaySyncStarted.
- GatewaySyncCompleted.
- GatewaySyncFailed.
- GatewayEventBuffered.
- GatewayEventBufferDrained.

Eventos consumidos
- TenantCreated.
- ContextCreated.
- ContextUpdated.
- ContextArchived.
- LicenseChanged.
- FeatureFlagChanged.
- ModuleActivated.
- ModuleDeactivated.
- AuthorizationDecisionIssued.
- AuthorizationPolicyChanged.
- ResourceReferenceCreated.
- ResourceReferenceRevoked.
- PermissionGranted.
- PermissionRevoked.
- UserAccountSuspended.
- ApiClientRevoked.
- PartnerGatewayRegistrationRequested.
- PartnerDeploymentStarted.
- PartnerDeploymentCompleted.
- OrganizationCreated.
- OrganizationStatusChanged.
- OrganizationArchived.
- OrganizationRestored.
- DeviceRegistered.
- DeviceRemoved.
- DeviceLinkedToGateway.
- DeviceUnlinkedFromGateway.
- DeviceHealthChanged.
- DeviceDiagnosticRequested.
- DeviceReachabilityCheckRequested.
- AccessTechnicalCommandRequested.
- DoorOpenCommandAuthorized.
- AccessDeviceSyncRequested.
- CameraRouteRequested.
- CameraStreamRouteAuthorized.
- VmsRelayRequested.
- AlarmPanelRouteRequested.
- AlarmTechnicalCommandAuthorized.
- AlarmEventTransportRequested.
- AutomationTechnicalCommandRequested.
- SecurityPolicyUpdated.
- SecretRotationPolicyUpdated.
- DataRetentionPolicyUpdated.
- RemoteAccessPolicyUpdated.
- SupportTicketCreated.
- IncidentCreated.
- MaintenanceWindowScheduled.

APIs internas
- Gateway Management API.
- Gateway Installation API.
- Gateway Link API.
- Tunnel API.
- Route API.
- Gateway Authorization Scope API.
- Credential API.
- Diagnostic API.
- Command API.
- Discovery API.
- Reachability API.
- Sync API.
- Logs API.
- Summary APIs.

Integrações externas
- MikrotikAdapter.
- WireGuardAdapter.
- OpenVpnAdapter.
- IpsecAdapter.
- ZerotierAdapter, se autorizado.
- CloudTunnelAdapter.
- MqttAdapter.
- LocalAgentAdapter.
- DockerAgentAdapter.
- LinuxServiceAdapter.
- WindowsServiceAdapter.
- ApplianceAdapter.
- RouterEmbeddedAdapter.
- RtspRouteAdapter.
- OnvifRouteAdapter.
- CustomGatewayAdapter.

Dependências permitidas
- Core Platform.
- Parceiros.
- Organizações.
- Dispositivos.
- Controle de Acesso.
- Câmeras / VMS.
- Alarmes.
- Automações.
- Segurança e LGPD.
- Auditoria e Compliance.
- Suporte e Operação.
- Notificações, apenas por contrato.
- Relatórios / BI, apenas por read models autorizados.
- Marketplace de Integrações.
- Herança e Permissões, apenas como política avançada que influencia o Core.

Dependências proibidas
- Banco interno de qualquer outro módulo.
- Classes internas de outro módulo.
- Motor paralelo de autorização.
- Motor paralelo de licenças.
- Motor paralelo de feature flags.
- Cadastro global paralelo de dispositivos.
- Motor operacional de acesso físico.
- Motor de VMS.
- Motor de alarme.
- Motor de automações.
- Motor financeiro.
- Motor de reservas.
- Motor de visitantes.
- Motor de tickets.
- Exposição direta de segredos.
- Dependência obrigatória de marca única.
- Bypass do Core Platform.

Observações importantes
Mikrotik é uma implementação suportada, não a arquitetura. Gateway Local / Mikrotik / Tunnel deve ser hardware agnostic, multimarcas, plugável e preparado para agentes, appliances, containers e adaptadores futuros.

Frase consolidada:
Gateway conecta o mundo físico. Core autoriza. Parceiro instala. Organização representa o espaço. Dispositivos governam equipamentos. Módulos comerciais executam recursos. Auditoria registra.

4.9 Dispositivos
Status: Aprovado.

Objetivo
Representar o domínio técnico oficial dos equipamentos físicos integrados à plataforma, governando cadastro técnico, identificação, tipo, categoria, marca, modelo, serial, firmware, protocolo, conectividade, credenciais técnicas, segredos, saúde, status, diagnóstico, última comunicação, telemetria, ciclo de vida, vínculos, manutenção, substituição, alertas, logs técnicos e adaptadores de integração.

Usuários que acessam
- Master, para governança superior e auditoria conforme permissão.
- Parceiro, para instalar, cadastrar, associar, substituir, remover e acompanhar dispositivos por fluxos autorizados.
- Organização, para visualizar resumo autorizado dos dispositivos vinculados.
- Operador/Gestor, para acompanhar saúde, status, alertas, localização técnica e manutenção autorizada, com experiência mobile first.
- Cliente, apenas para visualizar reflexos simples de recursos herdados, sem dados técnicos sensíveis.
- Módulos internos autorizados, como Controle de Acesso, Câmeras / VMS, Alarmes, Automações, Gateway, Segurança, Auditoria, Suporte e Relatórios.

Responsabilidades
- Manter DeviceRecord oficial.
- Manter DeviceReference para uso por outros módulos.
- Manter DeviceIdentity.
- Manter DeviceType.
- Manter DeviceCategory.
- Manter DeviceBrand.
- Manter DeviceModel.
- Manter DeviceSerial.
- Manter DeviceFirmware.
- Manter DeviceProtocolProfile.
- Manter DeviceConnectivityProfile.
- Manter DeviceCredential.
- Manter DeviceSecret.
- Manter DeviceHealth.
- Manter DeviceStatus.
- Manter DeviceDiagnostic.
- Manter DeviceLifecycle.
- Manter DeviceCapability.
- Manter DeviceGatewayLink.
- Manter DeviceOrganizationLink.
- Manter DeviceStructureLocationReference.
- Manter DeviceTechnicalLog.
- Manter DeviceAlert.
- Manter DeviceMaintenanceRecord.
- Manter DeviceReplacementRecord.
- Manter DeviceIntegrationAdapterReference.
- Manter DeviceCommandRequest apenas para comandos técnicos.
- Manter DeviceCommandResult.
- Manter DeviceTelemetry.
- Manter DeviceReachability como consolidação técnica autorizada.
- Manter DeviceDiscoveryCandidate.
- Manter DeviceAuthorizationScope.
- Publicar eventos técnicos.
- Consumir eventos autorizados de Core, Gateway, Organizações, Parceiros, Unidades, Segurança e LGPD.
- Proteger IPs, MACs, seriais, credenciais, segredos, logs técnicos e metadados sensíveis.

O que não faz
- Não cria Tenant.
- Não cria Context.
- Não cria UserAccount.
- Não emite AuthorizationDecision final.
- Não cria License.
- Não cria FeatureFlag.
- Não substitui Core Platform.
- Não substitui Parceiros.
- Não substitui Organizações.
- Não mantém OrganizationRecord ou OrganizationProfile.
- Não substitui Gateway Local / Mikrotik / Tunnel.
- Não cria tunnel, rotas, VPN, NAT ou diagnóstico de rede como domínio principal.
- Não substitui Controle de Acesso.
- Não abre porta.
- Não gera QR Code de acesso.
- Não executa facial, RFID ou PIN operacional.
- Não substitui Câmeras / VMS.
- Não executa live view, stream, mosaico, playback, clipes ou evidências.
- Não substitui Alarmes.
- Não arma, desarma, dispara, escala ou governa zonas operacionais.
- Não substitui Automações.
- Não executa workflows, gatilhos, condições ou ações.
- Não cria Unit, Block, Area ou Environment.
- Não acessa banco interno de outro módulo.
- Não prende a arquitetura a uma marca única.

Entidades principais
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
- DeviceCommandRequest.
- DeviceCommandResult.
- DeviceTelemetry.
- DeviceReachability.
- DeviceDiscoveryCandidate.
- DeviceAuthorizationScope.

Eventos publicados
- DeviceRegistered.
- DeviceReferenceCreated.
- DeviceUpdated.
- DeviceArchived.
- DeviceRemoved.
- DeviceLinkedToOrganization.
- DeviceUnlinkedFromOrganization.
- DeviceLinkedToGateway.
- DeviceUnlinkedFromGateway.
- DeviceLinkedToStructure.
- DeviceUnlinkedFromStructure.
- DeviceOnline.
- DeviceOffline.
- DeviceHealthChanged.
- DeviceStatusChanged.
- DeviceLastSeenUpdated.
- DeviceTelemetryReceived.
- DeviceDiagnosticRequested.
- DeviceDiagnosticCompleted.
- DeviceDiagnosticFailed.
- DeviceFirmwareChanged.
- DeviceCredentialRotated.
- DeviceSecretUpdated.
- DeviceAlertRaised.
- DeviceAlertResolved.
- DeviceMaintenanceRecorded.
- DeviceReplacementStarted.
- DeviceReplaced.
- DeviceTechnicalCommandRequested.
- DeviceTechnicalCommandCompleted.
- DeviceTechnicalCommandFailed.
- DeviceDiscoveryCandidateCreated.
- DeviceDiscoveryCandidateRejected.
- DeviceDiscoveryCandidatePromoted.
- DeviceCapabilityChanged.
- DeviceAdapterLinked.
- DeviceAdapterChanged.

Eventos consumidos
- TenantCreated.
- ContextCreated.
- LicenseChanged.
- FeatureFlagChanged.
- ModuleActivated.
- ModuleDeactivated.
- AuthorizationPolicyChanged.
- ResourceReferenceCreated.
- ResourceReferenceUpdated.
- ResourceReferenceRevoked.
- PartnerDeviceRegistrationRequested.
- PartnerDeviceReplacementRequested.
- PartnerDeviceRemovalRequested.
- PartnerScopeChanged.
- OrganizationCreated.
- OrganizationStatusChanged.
- GatewayConnected.
- GatewayDisconnected.
- GatewayHealthChanged.
- GatewayDeviceDiscovered.
- GatewayDeviceReachabilityChanged.
- StructureCreated.
- StructureUpdated.
- StructureArchived.
- SecurityPolicyUpdated.
- SensitiveDataAccessPolicyChanged.
- CredentialPolicyChanged.
- AccessDeviceRequired.
- CameraDeviceRequired.
- AlarmDeviceRequired.
- AutomationDeviceEventSubscribed.
- TicketCreatedFromDeviceAlert.
- SupportIncidentCreated.

APIs internas
- CreateDeviceRecord.
- UpdateDeviceRecord.
- GetDeviceRecord.
- GetDeviceReference.
- ValidateDeviceReference.
- ListDevicesByOrganization.
- ListDevicesByPartner.
- ListDevicesByGateway.
- ListDevicesByStructureReference.
- SearchDevices.
- CreateDeviceDiscoveryCandidate.
- EvaluateDeviceDiscoveryCandidate.
- RejectDeviceDiscoveryCandidate.
- PromoteDiscoveryCandidateToDevice.
- LinkDiscoveryCandidateToExistingDevice.
- LinkDeviceToOrganization.
- UnlinkDeviceFromOrganization.
- LinkDeviceToGateway.
- UnlinkDeviceFromGateway.
- LinkDeviceToStructureReference.
- UnlinkDeviceFromStructureReference.
- UpdateDeviceStatus.
- UpdateDeviceHealth.
- RegisterDeviceTelemetry.
- GetDeviceHealth.
- RequestDeviceDiagnostic.
- CompleteDeviceDiagnostic.
- RequestDeviceTechnicalCommand.
- CompleteDeviceTechnicalCommand.
- CreateDeviceCredential.
- RotateDeviceCredential.
- RevokeDeviceCredential.
- UpdateDeviceSecret.
- RegisterDeviceFirmwareChange.
- RegisterDeviceMaintenance.
- StartDeviceReplacement.
- CompleteDeviceReplacement.
- ArchiveDevice.
- DecommissionDevice.
- RaiseDeviceAlert.
- ResolveDeviceAlert.
- GetDeviceTechnicalAuditTrail.

Integrações externas
- HikvisionAdapter.
- IntelbrasAdapter.
- ControlIdAdapter.
- ZktecoAdapter.
- DahuaAdapter.
- AxisAdapter.
- JflAdapter.
- PpaAdapter.
- NiceAdapter.
- GrandstreamAdapter.
- MikrotikAdapter, apenas quando o equipamento também for monitorado como dispositivo, sem substituir Gateway.
- OnvifAdapter.
- RtspAdapter.
- MqttAdapter.
- OSDPAdapter.
- WiegandAdapter.
- SnmpAdapter.
- ModbusAdapter.
- GenericHttpDeviceAdapter.
- GenericTcpDeviceAdapter.

Dependências permitidas
- Core Platform.
- Parceiros.
- Organizações.
- Gateway Local / Mikrotik / Tunnel.
- Unidades, Blocos, Áreas e Ambientes.
- Herança e Permissões.
- Segurança e LGPD.
- Auditoria e Compliance.
- Marketplace de Integrações.
- Notificações, apenas por contrato.
- Relatórios / BI, apenas por read models autorizados.
- Suporte e Operação, apenas por contrato.
- Controle de Acesso, apenas por DeviceReference, eventos e APIs autorizadas.
- Câmeras / VMS, apenas por DeviceReference, eventos e APIs autorizadas.
- Alarmes, apenas por DeviceReference, eventos e APIs autorizadas.
- Automações, apenas por eventos e ações autorizadas.

Dependências proibidas
- Banco interno do Core Platform.
- Banco interno de Parceiros.
- Banco interno de Organizações.
- Banco interno de Gateway.
- Banco interno de Unidades.
- Banco interno de Controle de Acesso.
- Banco interno de Câmeras / VMS.
- Banco interno de Alarmes.
- Banco interno de Automações.
- Banco interno de Relatórios / BI.
- Classes internas de outro módulo.
- SDK acoplado a uma única marca como núcleo do módulo.
- Motor paralelo de autorização.
- Motor paralelo de licença.
- Motor paralelo de feature flag.
- Motor paralelo de auditoria avançada.
- Motor de acesso físico.
- Motor de vídeo.
- Motor de alarme.
- Motor de automação.
- Comunicação direta com recurso comercial fora do módulo dono.

Observações importantes
DeviceRecord é o cadastro técnico oficial do equipamento, não o recurso comercial.

GatewayDeviceDiscovery e DeviceDiscoveryCandidate não são DeviceRecord. Descoberta técnica só vira dispositivo oficial após validação, autorização, avaliação de duplicidade e promoção pelo módulo Dispositivos.

Dispositivos governa o equipamento. Controle de Acesso governa acesso. Câmeras / VMS governa vídeo. Alarmes governa operação de alarme. Automações governa workflows. Gateway conecta e descobre. Core autoriza.

4.10 Controle de Acesso
Status: Aprovado.

Objetivo
Gerenciar o domínio operacional de acesso físico da plataforma, incluindo pontos de acesso, portas, portões, catracas, zonas, credenciais físicas, QR, facial, RFID, PIN, regras operacionais, agendas de acesso, passes, tentativas, concessões, negações, bloqueios, liberações, abertura remota, antipassback, modo offline, sincronização e logs operacionais de entrada e saída.

Usuários que acessam
- Master, para governança e auditoria superior conforme permissão.
- Parceiro, para implantação, acompanhamento e suporte autorizado.
- Organização, para administração local.
- Operador/Gestor, para operação diária.
- Cliente, apenas para acessos próprios herdados.
- Visitante, apenas como usuário de credencial temporária derivada de convite.
- Módulos internos, por contratos autorizados.

Responsabilidades
- Manter AccessPoint.
- Manter Door, Gate e Turnstile como recursos operacionais.
- Manter AccessZone.
- Manter AccessCredential.
- Manter PhysicalAccessCredential.
- Manter TemporaryAccessCredential.
- Manter FaceCredential, RfidCredential, PinCredential e QrCredential.
- Manter AccessRule.
- Manter AccessPolicyBinding.
- Manter AccessSchedule e AccessWindow.
- Manter AccessPass.
- Registrar AccessAttempt.
- Registrar AccessEvent.
- Registrar AccessGrant e AccessDeny.
- Executar AccessBlock e AccessUnblock.
- Executar RemoteUnlock.
- Controlar DoorForcedEvent e DoorHeldOpenEvent.
- Controlar AntipassbackState.
- Criar AccessExecutionRequest.
- Registrar AccessExecutionResult.
- Exigir AccessAuthorizationScope em ações sensíveis.
- Vincular AccessPoint a DeviceReference via AccessDeviceBinding.
- Controlar AccessSyncState.
- Controlar AccessOfflinePolicy.
- Publicar eventos operacionais.
- Gerar logs auditáveis.

O que não faz
- Não cria Tenant.
- Não cria Context.
- Não cria UserAccount.
- Não emite AuthorizationDecision final.
- Não substitui Herança e Permissões.
- Não mantém PersonProfile ou ClientProfile.
- Não cria fluxo completo de visita.
- Não substitui Convites e Visitantes.
- Não cria Unit, Block, Area ou Environment.
- Não substitui Organizações.
- Não substitui Parceiros.
- Não cria GatewayRecord.
- Não cria tunnel, rota ou diagnóstico de rede.
- Não mantém DeviceRecord global.
- Não substitui Dispositivos.
- Não cria live view, stream, mosaico, playback, clipe ou evidência.
- Não substitui Câmeras / VMS.
- Não arma, desarma ou escala alarme.
- Não substitui Alarmes.
- Não cria fatura, cobrança ou status financeiro.
- Não decide bloqueio financeiro sozinho.
- Não cria agenda ou disponibilidade de reserva.
- Não substitui Reservas.
- Não define LGPD avançada.
- Não substitui Auditoria e Compliance.
- Não acessa banco interno de outro módulo.
- Não prende arquitetura a marca única.

Entidades principais
- AccessPoint.
- Door.
- Gate.
- Turnstile.
- AccessZone.
- AccessAreaReference.
- AccessSubject.
- AccessHolder.
- AccessCredential.
- PhysicalAccessCredential.
- TemporaryAccessCredential.
- AccessCredentialOwnerReference.
- AccessCredentialLifecycle.
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
- AccessAuditTrail.

Eventos publicados
- AccessPointCreated.
- AccessPointUpdated.
- AccessPointArchived.
- AccessPointRestored.
- AccessDeviceBound.
- AccessDeviceUnbound.
- AccessCredentialIssued.
- AccessCredentialRevoked.
- AccessCredentialExpired.
- TemporaryAccessCredentialIssued.
- AccessRuleCreated.
- AccessRuleUpdated.
- AccessRuleActivated.
- AccessRuleDeactivated.
- AccessPassCreated.
- AccessAttemptRecorded.
- AccessGranted.
- AccessDenied.
- AccessBlocked.
- AccessUnblocked.
- RemoteUnlockRequested.
- RemoteUnlockExecuted.
- RemoteUnlockDenied.
- DoorForced.
- DoorHeldOpen.
- AntipassbackViolation.
- AccessOfflineEventBuffered.
- AccessOfflineSynced.
- AccessExecutionFailed.
- AccessLogExportRequested.
- AccessLogExportCompleted.
- BiometricCredentialRemoved.

Eventos consumidos
- AuthorizationDecisionIssued.
- PermissionGranted.
- PermissionRevoked.
- PolicyCreated.
- PolicyUpdated.
- PersonLinkedToUnit.
- PersonUnlinkedFromUnit.
- PersonConsentGranted.
- PersonConsentRevoked.
- VisitorApproved.
- VisitorInviteCanceled.
- ReservationCreated.
- ReservationCanceled.
- ReservationAccessWindowChanged.
- InvoiceOverdue.
- InvoicePaid.
- StructureCreated.
- StructureArchived.
- OrganizationStatusChanged.
- PartnerDeploymentUpdated.
- DeviceRegistered.
- DeviceOffline.
- DeviceOnline.
- GatewayConnected.
- GatewayDisconnected.
- GatewayCommandResultReceived.
- DataRetentionPolicyUpdated.
- ConsentPolicyUpdated.

APIs internas
- CreateAccessPoint.
- UpdateAccessPoint.
- ArchiveAccessPoint.
- GetAccessPoint.
- ListAccessPoints.
- BindDeviceToAccessPoint.
- CreateAccessCredential.
- RevokeAccessCredential.
- ValidateAccessCredential.
- CreateTemporaryAccessCredential.
- CreateAccessRule.
- UpdateAccessRule.
- ActivateAccessRule.
- DeactivateAccessRule.
- CreateAccessPass.
- ValidateAccessPass.
- RequestRemoteUnlock.
- ExecuteAccessDecision.
- RegisterAccessAttempt.
- RegisterAccessGrant.
- RegisterAccessDeny.
- ApplyAccessBlock.
- RemoveAccessBlock.
- ConfigureAntipassback.
- ResetAntipassbackState.
- ConfigureAccessOfflinePolicy.
- SyncAccessOfflineEvents.
- ExportAccessLogs.
- RemoveBiometricCredential.
- GetAccessOperationalSummary.
- GetAccessAuditTrail.

Integrações externas
- Adaptadores para Hikvision, Intelbras, Control iD, ZKTeco, Dahua, Axis, JFL, PPA, Nice e equivalentes.
- Protocolos e meios como HTTP API, MQTT, OSDP, Wiegand, webhooks, SDK encapsulado, relé via gateway e APIs de controladoras.
- APIs externas autorizadas para sistemas de RH, ERP, coworking, reservas, visitantes ou portaria.

Dependências permitidas
- Core Platform.
- Herança e Permissões.
- Pessoas e Clientes.
- Convites e Visitantes.
- Unidades, Blocos, Áreas e Ambientes.
- Organizações.
- Parceiros.
- Gateway Local / Mikrotik / Tunnel.
- Dispositivos.
- Câmeras / VMS.
- Alarmes.
- Financeiro.
- Reservas.
- Segurança e LGPD.
- Auditoria e Compliance.
- Notificações.
- Relatórios / BI.
- Automações, apenas por contrato.

Dependências proibidas
- Banco interno de outro módulo.
- Classes internas de outro módulo.
- Motor paralelo de autorização.
- Motor paralelo de identidade.
- Motor paralelo de pessoa.
- Motor paralelo de dispositivo.
- Motor paralelo de gateway.
- Motor financeiro.
- Motor de reserva.
- Motor de convite.
- Motor de VMS.
- Motor de alarme.
- Integração presa a uma marca.
- Biometria sem consentimento.
- Exportação de logs sem autorização.
- Ação sensível sem AuthorizationDecision.
- Ação sensível sem AccessAuthorizationScope.

Observações importantes
AccessPoint é o recurso operacional de acesso físico. DeviceRecord é o equipamento técnico em Dispositivos. StructureReference é a localização física em Unidades, Blocos, Áreas e Ambientes. AccessCredential é credencial física operacional. UserAccount pertence ao Core. PersonProfile e ClientProfile pertencem a Pessoas e Clientes. Gateway transporta comando técnico autorizado. Controle de Acesso executa o acesso físico.

4.11 Câmeras / VMS
Status: Aprovado.

Objetivo
Representar o domínio operacional de vídeo da plataforma, governando visualização ao vivo, stream operacional, mosaicos, layouts, playback, timeline, clipes, snapshots, evidências, correlação de vídeo com eventos, exportação autorizada, compartilhamento autorizado, retenção operacional, máscaras, zonas de privacidade, watermark e trilhas auditáveis de vídeo.

Usuários que acessam
- Master, para governança e auditoria superior conforme permissão, sem abrir vídeo fora de contexto e finalidade.
- Parceiro, para implantação, acompanhamento, diagnóstico operacional autorizado e suporte dentro do escopo.
- Organização Admin, para administração local de câmeras, mosaicos, layouts, evidências e políticas permitidas.
- Operador/Gestor, para live view, mosaicos, playback, clipes, snapshots, evidências e atendimento de ocorrências.
- Cliente, apenas para câmeras herdadas, evidências compartilhadas ou visualizações expressamente autorizadas.
- Módulos internos, por contratos autorizados.

Responsabilidades
- Manter CameraResource.
- Manter CameraChannel.
- Manter CameraStream.
- Executar CameraLiveView.
- Manter CameraViewSession.
- Manter CameraMosaic.
- Manter CameraLayout.
- Executar CameraPlayback.
- Manter CameraTimeline.
- Criar CameraClip.
- Criar CameraSnapshot.
- Criar CameraEvidence.
- Criar VideoEvidenceRequest.
- Criar EventVideoCorrelation.
- Aplicar CameraRecordingPolicy operacional.
- Executar CameraRetentionExecutionPolicy.
- Manter CameraPermissionScope.
- Montar CameraAuthorizationScope para ações sensíveis.
- Registrar VideoViewExecutionResult.
- Criar VideoExportRequest e VideoExportPackage.
- Criar, validar, expirar e revogar VideoShareLink.
- Aplicar VideoWatermark.
- Executar VideoMaskingRequest.
- Manter VideoPrivacyZone.
- Manter CameraDeviceBinding.
- Manter CameraCoverageArea e CameraAreaReference.
- Manter CameraGatewayRouteReference.
- Manter CameraStreamProxySession apenas como sessão operacional de vídeo, sem substituir GatewayTunnelSession.
- Manter CameraAuditTrail.
- Publicar eventos operacionais de vídeo.
- Consumir eventos autorizados de acesso, alarmes, visitas, reservas, dispositivos, gateway, financeiro, LGPD, auditoria, notificações e automações.

O que não faz
- Não cria Tenant, Context, UserAccount, License, FeatureFlag ou AuthorizationDecision.
- Não substitui Core Platform.
- Não substitui Herança e Permissões.
- Não mantém PersonProfile, ClientProfile ou PersonUnitLink.
- Não cria Unit, Block, Area ou Environment.
- Não mantém OrganizationRecord ou OrganizationProfile.
- Não mantém PartnerRecord.
- Não mantém DeviceRecord global, DeviceHealth oficial, DeviceDiagnostic oficial ou DeviceCredential oficial.
- Não substitui Dispositivos.
- Não cria tunnel, rota, VPN, NAT, proxy técnico ou diagnóstico de rede como domínio principal.
- Não substitui Gateway Local / Mikrotik / Tunnel.
- Não cria AccessEvent, não abre portas e não executa controle de acesso físico.
- Não substitui Controle de Acesso.
- Não cria AlarmEvent, não arma, não desarma, não dispara sirene e não escala alarme.
- Não substitui Alarmes.
- Não cria convite, não aprova visitante e não executa check-in/check-out.
- Não substitui Convites e Visitantes.
- Não cria reserva, não calcula disponibilidade, não executa no-show e não cobra reserva.
- Não substitui Reservas.
- Não cria cobrança, boleto, Pix, fatura ou bloqueio financeiro.
- Não substitui Financeiro.
- Não envia push, e-mail, SMS ou WhatsApp como domínio próprio.
- Não substitui Notificações.
- Não governa política oficial avançada de LGPD como fonte primária.
- Não substitui Segurança e LGPD.
- Não faz investigação avançada de compliance como domínio próprio.
- Não substitui Auditoria e Compliance.
- Não acessa banco interno de outro módulo.
- Não prende arquitetura a Hikvision, Intelbras, Dahua, Axis, ONVIF, RTSP ou qualquer marca/protocolo único.

Entidades principais
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
- VideoAccessEvaluationResult, sem substituir AuthorizationDecision.
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

Eventos publicados
- CameraResourceCreated.
- CameraResourceUpdated.
- CameraResourceArchived.
- CameraResourceRestored.
- CameraLinkedToDevice.
- CameraUnlinkedFromDevice.
- CameraLinkedToStructure.
- CameraUnlinkedFromStructure.
- CameraCoverageAreaChanged.
- CameraLiveViewStarted.
- CameraLiveViewEnded.
- CameraLiveViewDenied.
- CameraSensitiveViewStarted.
- CameraSensitiveViewDenied.
- CameraViewSessionExpired.
- CameraMosaicCreated.
- CameraMosaicUpdated.
- CameraMosaicDeleted.
- CameraLayoutCreated.
- CameraLayoutUpdated.
- CameraPlaybackOpened.
- CameraPlaybackDenied.
- CameraTimelineViewed.
- CameraTimelineMarkerCreated.
- CameraClipCreated.
- CameraSnapshotCreated.
- VideoEvidenceRequestCreated.
- VideoEvidenceRequestDenied.
- CameraEvidenceCreated.
- CameraEvidenceArchived.
- CameraEvidenceLocked.
- EventVideoCorrelationCreated.
- VideoExportRequested.
- VideoExportApproved.
- VideoExportDenied.
- VideoExportReady.
- VideoExportFailed.
- VideoExportDownloaded.
- VideoExportExpired.
- VideoShareLinkCreated.
- VideoShareLinkAccessed.
- VideoShareLinkRevoked.
- VideoShareLinkExpired.
- VideoWatermarkApplied.
- VideoMaskingRequested.
- VideoMaskingApplied.
- VideoPrivacyZoneCreated.
- VideoPrivacyZoneUpdated.
- VideoPrivacyZoneRemoved.
- CameraRetentionExecuted.
- CameraOperationalStatusChanged.
- CameraOfflineDetected.
- CameraOnlineDetected.
- CameraStreamUnavailable.
- CameraStreamRecovered.
- CameraRecordingInterrupted.
- CameraRecordingRecovered.

Eventos consumidos
- AuthorizationPolicyChanged.
- PermissionGranted.
- PermissionRevoked.
- InheritanceChanged.
- ModuleActivated.
- ModuleDeactivated.
- LicenseChanged.
- FeatureFlagChanged.
- PolicyCreated.
- PolicyUpdated.
- PolicyActivated.
- PolicyDeactivated.
- OrganizationStatusChanged.
- StructureCreated.
- StructureUpdated.
- StructureArchived.
- PersonLinkedToUnit.
- PersonUnlinkedFromUnit.
- PersonConsentRevoked.
- PartnerDeploymentUpdated.
- DeviceRegistered.
- DeviceRemoved.
- DeviceHealthChanged.
- DeviceOffline.
- DeviceOnline.
- GatewayConnected.
- GatewayDisconnected.
- GatewayRouteAvailable.
- GatewayRouteUnavailable.
- AccessGranted.
- AccessDenied.
- DoorForced.
- DoorHeldOpen.
- RemoteUnlockExecuted.
- AntipassbackViolation.
- AlarmTriggered.
- PanicTriggered.
- ZoneViolated.
- AlarmEscalated.
- AlarmResolved.
- VisitorCheckedIn.
- VisitorCheckedOut.
- ReservationCreated.
- ReservationCanceled.
- ReservationIncidentReported.
- InvoiceOverdue.
- InvoicePaid.
- PrivacyPolicyUpdated.
- RetentionPolicyUpdated.
- MaskingPolicyUpdated.
- ComplianceInvestigationOpened.
- SuspiciousActivityDetected.
- NotificationPreferenceChanged.
- AutomationExecutionRequested.

APIs internas
- CreateCameraResource.
- UpdateCameraResource.
- ArchiveCameraResource.
- RestoreCameraResource.
- GetCameraResource.
- ListCameraResources.
- ListAuthorizedCameras.
- GetCameraOperationalStatus.
- BindCameraToDeviceReference.
- UnbindCameraFromDeviceReference.
- ValidateCameraDeviceBinding.
- LinkCameraToStructureReference.
- UnlinkCameraFromStructureReference.
- UpdateCameraCoverageArea.
- StartLiveView.
- StopLiveView.
- CreateCameraViewSession.
- ValidateLiveViewAuthorization.
- StartSensitiveCameraView.
- CreateCameraMosaic.
- UpdateCameraMosaic.
- DeleteCameraMosaic.
- CreateCameraLayout.
- UpdateCameraLayout.
- OpenPlayback.
- ClosePlayback.
- SearchCameraTimeline.
- FindVideoByEventReference.
- CreateCameraClip.
- CreateCameraSnapshot.
- CreateVideoEvidenceRequest.
- CreateCameraEvidence.
- CorrelateEventWithVideo.
- RequestVideoExport.
- ApproveVideoExport.
- DenyVideoExport.
- GenerateVideoExportPackage.
- DownloadVideoExportPackage.
- CreateVideoShareLink.
- ValidateVideoShareLink.
- RevokeVideoShareLink.
- ApplyVideoWatermark.
- RequestVideoMasking.
- ApplyVideoMasking.
- CreateVideoPrivacyZone.
- UpdateVideoPrivacyZone.
- ExecuteRetentionPolicy.
- HoldEvidenceRetention.
- GetCameraAuditTrail.
- SearchVideoAuditEvents.
- GetSensitiveCameraAccessLog.
- GetVideoExportAudit.
- GetVideoShareAudit.
- GetEvidenceChainOfCustody.
- GetCameraOperationalSummary.
- GetCameraBIReadModel.

Integrações externas
- RTSP.
- ONVIF.
- HLS.
- WebRTC.
- HTTP snapshot.
- APIs de DVR/NVR por adaptador.
- Edge recording por adaptador.
- Metadata stream por adaptador.
- Motion/tamper events por adaptador.
- Adaptadores para Hikvision, Intelbras, Dahua, Axis, Uniview, Hanwha, Vivotek, Grandstream e equivalentes.
- Gateway Local / Mikrotik / Tunnel para rota segura, stream local, proxy autorizado e transporte técnico.
- Dispositivos para DeviceReference, DeviceStatus, DeviceHealth, DeviceDiagnostic e perfis técnicos.
- Segurança e LGPD para retenção, finalidade, privacidade, mascaramento e tratamento de imagens.
- Auditoria e Compliance para investigação, cadeia de custódia e relatórios avançados.

Dependências permitidas
- Core Platform.
- Herança e Permissões.
- Pessoas e Clientes.
- Unidades, Blocos, Áreas e Ambientes.
- Organizações.
- Parceiros.
- Gateway Local / Mikrotik / Tunnel.
- Dispositivos.
- Controle de Acesso.
- Alarmes.
- Convites e Visitantes.
- Reservas.
- Financeiro.
- Notificações.
- Segurança e LGPD.
- Auditoria e Compliance.
- Relatórios / BI.
- Automações, apenas por contrato autorizado.

Dependências proibidas
- Banco interno de outro módulo.
- Classes internas de outro módulo.
- DeviceRecord paralelo.
- GatewayTunnelSession paralelo.
- Motor paralelo de autorização.
- Motor paralelo de permissões.
- Motor paralelo de pessoa.
- Motor paralelo de estrutura física.
- Motor de controle de acesso.
- Motor de alarme.
- Motor de convite.
- Motor de reserva.
- Motor financeiro.
- Motor de notificação multicanal.
- Exportação ou compartilhamento sem autorização, finalidade, proteção e auditoria.
- Live view, playback, clipe ou evidência sem tenant, contexto, herança e AuthorizationDecision.
- Integração presa a marca ou protocolo único.

Observações importantes
CameraResource é o recurso operacional de vídeo. DeviceRecord é o equipamento técnico em Dispositivos. StructureReference é a localização ou área de cobertura em Unidades, Blocos, Áreas e Ambientes. Gateway transporta rota técnica autorizada, mas não é VMS. Controle de Acesso e Alarmes publicam eventos; Câmeras / VMS cria evidências de vídeo por contrato autorizado. Segurança e LGPD protege imagens, retenção, exportação e compartilhamento. Auditoria registra visualização, playback, exportação, link, evidência e ações sensíveis.

Regra do módulo
Câmeras / VMS governa vídeo. Dispositivos governam equipamentos. Gateway conecta. Core autoriza. Herança governa políticas. Segurança e LGPD protege. Auditoria registra.

4.12 Alarmes
Status: Aprovado.

Objetivo
Representar o domínio operacional de alarme, segurança perimetral, detecção, resposta e histórico de eventos críticos da plataforma.

Usuários que acessam
- Master, para governança superior e auditoria conforme permissão.
- Parceiro, para implantação, suporte técnico e acompanhamento autorizado.
- Organização Admin, para gestão operacional local.
- Operador/Gestor, para operação diária, arme, desarme, reconhecimento, silenciamento e incidentes conforme permissão.
- Cliente, apenas para alarmes herdados ou autorizados no próprio contexto.

Responsabilidades
- Manter AlarmResource.
- Manter AlarmPanelResource.
- Manter AlarmPanelBinding.
- Manter AlarmSector.
- Manter AlarmZone.
- Manter AlarmArea.
- Manter AlarmSensorBinding.
- Manter AlarmSensorState.
- Manter AlarmArmingState.
- Manter AlarmMode.
- Manter AlarmRule.
- Manter AlarmPolicyBinding.
- Manter AlarmSchedule.
- Manter AlarmWindow.
- Executar arme, desarme, arme parcial e mudança de modo.
- Registrar AlarmEvent, AlarmTrigger, AlarmPanicEvent, AlarmTamperEvent e AlarmFaultEvent.
- Registrar AlarmAcknowledgement, AlarmSilenceAction e AlarmResetAction.
- Gerenciar AlarmEscalation, AlarmIncident e AlarmResponsePlan.
- Manter AlarmHistory.
- Criar AlarmCommandRequest e AlarmExecutionResult.
- Usar AlarmAuthorizationScope para solicitar decisão ao Core.
- Manter AlarmOfflinePolicy.
- Manter AlarmDeviceBinding e AlarmSyncState.
- Criar AlarmNotificationRequest, AlarmTicketRequest e AlarmVideoEvidenceRequest.
- Publicar eventos operacionais de alarme.
- Consumir eventos autorizados de acesso, câmeras, dispositivos, gateway, reservas, visitantes, financeiro, tickets, notificações e automações.
- Gerar trilhas auditáveis.

O que não faz
- Não cria Tenant, Context, UserAccount, License, FeatureFlag ou AuthorizationDecision.
- Não substitui Core Platform.
- Não substitui Herança e Permissões.
- Não mantém PersonProfile, ClientProfile ou PersonUnitLink.
- Não cria Unit, Block, Area ou Environment.
- Não mantém OrganizationRecord ou PartnerRecord.
- Não mantém DeviceRecord global, DeviceHealth oficial ou DeviceDiagnostic oficial.
- Não substitui Dispositivos.
- Não cria tunnel, rota, VPN, NAT, proxy técnico ou diagnóstico de rede como domínio principal.
- Não substitui Gateway Local / Mikrotik / Tunnel.
- Não cria AccessEvent nem executa abertura de porta como domínio de acesso.
- Não substitui Controle de Acesso.
- Não cria live view, mosaico, playback, clipe, snapshot ou evidência de vídeo.
- Não substitui Câmeras / VMS.
- Não cria convite, reserva, cobrança, boleto, Pix ou fatura.
- Não substitui Financeiro, Reservas ou Convites e Visitantes.
- Não mantém central completa de Tickets, SLA, comentários e resolução.
- Não envia push, e-mail, SMS ou WhatsApp como domínio próprio.
- Não executa workflow genérico como domínio próprio.
- Não substitui Segurança e LGPD nem Auditoria e Compliance.
- Não acessa banco interno de outro módulo.
- Não prende arquitetura a JFL, Intelbras, Hikvision, Paradox, DSC, Honeywell, Ajax, MQTT, Contact ID ou qualquer marca/protocolo único.

Entidades principais
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

Eventos publicados
- AlarmResourceCreated.
- AlarmResourceUpdated.
- AlarmResourceArchived.
- AlarmLinkedToDevice.
- AlarmLinkedToStructure.
- AlarmSectorCreated.
- AlarmZoneCreated.
- AlarmSensorLinked.
- AlarmArmed.
- AlarmDisarmed.
- AlarmPartiallyArmed.
- AlarmArmFailed.
- AlarmDisarmFailed.
- AlarmModeChanged.
- AlarmOfflineModeEntered.
- AlarmOfflineModeExited.
- AlarmTriggered.
- PanicTriggered.
- ZoneViolated.
- SensorViolated.
- TamperDetected.
- AlarmFaultDetected.
- SirenActivated.
- SirenSilenced.
- AlarmAcknowledged.
- AlarmReset.
- AlarmEscalated.
- AlarmResolved.
- AlarmIncidentCreated.
- AlarmIncidentEscalated.
- AlarmIncidentResolved.
- AlarmVideoEvidenceRequested.
- AlarmNotificationRequested.
- AlarmTicketRequested.

Eventos consumidos
- AuthorizationPolicyChanged.
- PermissionGranted.
- PermissionRevoked.
- InheritanceChanged.
- DeviceRegistered.
- DeviceOffline.
- DeviceOnline.
- DeviceHealthChanged.
- GatewayConnected.
- GatewayDisconnected.
- GatewayRouteAvailable.
- GatewayRouteUnavailable.
- AccessGranted.
- AccessDenied.
- DoorForced.
- DoorHeldOpen.
- AntipassbackViolation.
- CameraEvidenceCreated.
- VideoEvidenceRequestDenied.
- VisitorCheckedIn.
- VisitorCheckedOut.
- ReservationCreated.
- ReservationCanceled.
- InvoiceOverdue.
- InvoicePaid.
- SupportTicketCreated.
- SupportTicketResolved.
- NotificationDeliveryFailed.
- AutomationExecutionRequested.

APIs internas
- CreateAlarmResource.
- UpdateAlarmResource.
- ArchiveAlarmResource.
- RestoreAlarmResource.
- GetAlarmResource.
- ListAuthorizedAlarms.
- BindAlarmToDeviceReference.
- LinkAlarmToStructureReference.
- CreateAlarmSector.
- CreateAlarmZone.
- BindSensorToAlarmZone.
- ArmAlarm.
- DisarmAlarm.
- ArmAlarmPartially.
- TriggerPanic.
- AcknowledgeAlarm.
- SilenceAlarm.
- ResetAlarm.
- CreateAlarmIncident.
- EscalateAlarmIncident.
- ResolveAlarmIncident.
- RequestAlarmVideoEvidence.
- RequestAlarmNotification.
- RequestAlarmTicket.
- GetAlarmHistory.
- SearchAlarmEvents.
- GetAlarmAuditTrail.

Dependências permitidas
- Core Platform.
- Herança e Permissões.
- Pessoas e Clientes.
- Unidades, Blocos, Áreas e Ambientes.
- Organizações.
- Parceiros.
- Gateway Local / Mikrotik / Tunnel.
- Dispositivos.
- Controle de Acesso.
- Câmeras / VMS.
- Convites e Visitantes.
- Reservas.
- Financeiro.
- Tickets.
- Notificações.
- Automações.
- Segurança e LGPD.
- Auditoria e Compliance.
- Relatórios / BI.
- Marketplace de Integrações.

Dependências proibidas
- Banco interno de outro módulo.
- Classes internas de outro módulo.
- Motor paralelo de autorização.
- Motor paralelo de dispositivos.
- Motor paralelo de gateway.
- Motor paralelo de câmeras.
- Motor paralelo de acesso físico.
- Motor paralelo de notificações.
- Motor paralelo de tickets.
- Motor paralelo de automações.
- Comunicação direta com hardware fora de adaptadores e contratos autorizados.
- Marca única como prisão arquitetural.

Observação importante
Alarmes governa a operação de alarme. Dispositivos governam equipamentos. Gateway conecta. Core autoriza. Herança governa políticas. Câmeras / VMS gera evidência. Notificações comunica. Auditoria registra.

4.13 Financeiro
Status: Aprovado.

Objetivo
Gerenciar o domínio financeiro da plataforma, incluindo cobranças, faturamento, faturas, boletos, Pix, cartão, pagamentos, inadimplência, conciliação, contratos financeiros, assinaturas, consumo variável, rateios, taxas, multas, recibos, documentos fiscais por referência, repasses, comissões, split, demonstrativos, relatórios financeiros e eventos financeiros.

Usuários que acessam
- Master Admin.
- Equipe financeira do Master.
- Parceiro Admin.
- Equipe financeira do parceiro.
- Organização Admin.
- Operador/Gestor autorizado.
- Cliente / Usuário Final.
- Sistemas externos financeiros autorizados.

Responsabilidades
- Manter BillingAccount.
- Manter BillingCustomer.
- Manter PayerReference.
- Manter FiscalProfile.
- Manter PaymentResponsibility.
- Manter FinancialContract.
- Manter Subscription.
- Gerenciar cobranças recorrentes.
- Gerenciar cobranças avulsas.
- Gerenciar ChargeItem.
- Gerenciar ChargeAllocation.
- Gerenciar CostCenter.
- Gerenciar CostShareRule.
- Emitir Invoice.
- Emitir InvoiceItem.
- Gerar boleto.
- Gerar Pix.
- Processar cartão tokenizado.
- Registrar Payment.
- Registrar PaymentAttempt.
- Conciliar pagamentos.
- Emitir recibos.
- Gerenciar Refund.
- Gerenciar Chargeback.
- Gerenciar CreditNote e DebitNote.
- Aplicar Discount, Interest, Fine e Tax.
- Registrar DelinquencyRecord.
- Publicar FinancialRestrictionSuggestion e FinancialRestrictionRevocation sem executar bloqueio operacional.
- Calcular PartnerCommission.
- Gerar PartnerSettlement.
- Gerar PartnerPayout.
- Aplicar PartnerRevenueShare.
- Aplicar SplitRule.
- Gerar FinancialStatement.
- Gerar CashFlowView.
- Gerar RevenueReport.
- Registrar ConsumptionRecord.
- Gerar ConsumptionCharge.
- Gerar ReservationCharge.
- Gerar TicketCharge.
- Gerar VisitorCharge.
- Gerar AccessCharge.
- Gerar CameraCharge.
- Gerar AlarmCharge.
- Solicitar notificações financeiras por BillingNotificationRequest.
- Manter FinancialAuditTrail funcional.

O que não faz
- Não cria Tenant.
- Não cria Context.
- Não cria UserAccount.
- Não cria login, senha, sessão ou MFA.
- Não cria Role, Permission, PermissionGrant ou InheritanceGrant.
- Não emite AuthorizationDecision final.
- Não substitui Core Platform.
- Não substitui Master.
- Não governa Plan, License, FeatureFlag, ModuleRegistry ou Entitlement como fonte oficial.
- Não substitui Parceiros.
- Não mantém PartnerRecord ou PartnerProfile.
- Não substitui Organizações.
- Não mantém OrganizationRecord ou OrganizationProfile.
- Não substitui Pessoas e Clientes.
- Não mantém PersonProfile, ClientProfile ou PersonUnitLink.
- Não substitui Unidades, Blocos, Áreas e Ambientes.
- Não cria Unit, Block, Area ou Environment.
- Não substitui Herança e Permissões.
- Não decide bloqueio operacional sozinho.
- Não bloqueia portas diretamente.
- Não abre portas.
- Não revoga credenciais diretamente.
- Não bloqueia câmeras diretamente.
- Não bloqueia alarmes diretamente.
- Não cria reservas.
- Não calcula disponibilidade.
- Não cria convites ou visitantes.
- Não faz check-in ou check-out.
- Não encerra tickets.
- Não altera SLA.
- Não envia notificações multicanal como domínio próprio.
- Não acessa banco interno de outro módulo.
- Não armazena cartão de forma insegura.
- Não prende a arquitetura a gateway financeiro único.

Entidades principais
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

Eventos publicados
- BillingAccountCreated.
- BillingCustomerCreated.
- FinancialContractCreated.
- SubscriptionCreated.
- RecurringChargeCreated.
- OneTimeChargeCreated.
- InvoiceCreated.
- InvoiceIssued.
- InvoiceOverdue.
- InvoicePaid.
- PaymentAttemptCreated.
- PixPaymentGenerated.
- BoletoPaymentGenerated.
- CardPaymentProcessed.
- PaymentReceived.
- PaymentFailed.
- PaymentReconciled.
- PaymentReceiptIssued.
- DelinquencyCreated.
- DelinquencyResolved.
- FinancialRestrictionSuggested.
- FinancialRestrictionRevoked.
- RefundRequested.
- RefundCompleted.
- ChargebackCreated.
- PartnerCommissionCalculated.
- PartnerSettlementCreated.
- PartnerPayoutCreated.
- SplitApplied.
- ConsumptionRecorded.
- ConsumptionChargeCreated.
- ReservationChargeCreated.
- TicketChargeCreated.
- VisitorChargeCreated.
- FinancialExportGenerated.
- SensitiveFinancialDataAccessed.

Eventos consumidos
- TenantCreated.
- ContextCreated.
- LicenseChanged.
- FeatureFlagChanged.
- ModuleActivated.
- ModuleDeactivated.
- AuthorizationDecisionIssued.
- PartnerCreated.
- PartnerStatusChanged.
- OrganizationCreated.
- OrganizationStatusChanged.
- PersonProfileCreated.
- ClientProfileCreated.
- PersonLinkedToUnit.
- PrimaryResponsibleChanged.
- StructureCreated.
- StructureUpdated.
- ReservationCreated.
- ReservationCanceled.
- ReservationNoShow.
- VisitorApproved.
- VisitorCheckedIn.
- SupportTicketResolved.
- TicketBillableServiceApproved.
- DeviceConsumptionMeasured.
- AccessUsageMeasured.
- CameraPremiumUsageMeasured.
- AlarmMonitoringServiceActivated.
- BillingNotificationDelivered.
- BillingNotificationFailed.
- DataRetentionPolicyUpdated.
- SensitiveDataPolicyUpdated.

APIs internas
- FinanceBillingAccountAPI.
- FinanceBillingCustomerAPI.
- FinanceContractAPI.
- FinanceSubscriptionAPI.
- FinanceChargeAPI.
- FinanceInvoiceAPI.
- FinancePaymentAPI.
- FinancePixAPI.
- FinanceBoletoAPI.
- FinanceCardAPI.
- FinanceReconciliationAPI.
- FinanceRefundAPI.
- FinanceDelinquencyAPI.
- FinancePartnerCommissionAPI.
- FinanceSettlementAPI.
- FinanceSplitAPI.
- FinanceConsumptionBillingAPI.
- FinanceReportAPI.
- FinanceExportAPI.
- FinanceAuditTrailAPI.

Integrações externas
- PaymentGatewayAdapter.
- BankAdapter.
- FiscalAdapter.
- AccountingAdapter.
- ERPAdapter.
- AntiFraudAdapter.
- Webhook financeiro.
- Marketplace de Integrações para conectores financeiros.

Dependências permitidas
- Core Platform.
- Master.
- Parceiros.
- Organizações.
- Pessoas e Clientes.
- Unidades, Blocos, Áreas e Ambientes.
- Herança e Permissões.
- Controle de Acesso, apenas por eventos, APIs e contratos.
- Câmeras / VMS, apenas por eventos, APIs e contratos.
- Alarmes, apenas por eventos, APIs e contratos.
- Reservas, apenas por eventos, APIs e contratos.
- Convites e Visitantes, apenas por eventos, APIs e contratos.
- Tickets, apenas por eventos, APIs e contratos.
- Notificações, apenas por BillingNotificationRequest e contratos.
- Relatórios / BI, apenas por read models autorizados.
- Segurança e LGPD.
- Auditoria e Compliance.
- Marketplace de Integrações.

Dependências proibidas
- Banco interno de outro módulo.
- Classes internas de outro módulo.
- Motor paralelo de autorização.
- Motor paralelo de licenças.
- Motor paralelo de feature flags.
- Motor paralelo de cadastro de pessoa.
- Motor paralelo de organização.
- Motor paralelo de estrutura física.
- Execução direta de regra operacional de acesso, câmera, alarme, reserva, convite, ticket ou notificação.
- Gateway financeiro único obrigatório.
- Armazenamento inseguro de cartão.
- Exportação sem finalidade, permissão e auditoria.

Observações importantes
Financeiro cobra e informa. Herança e Permissões avalia políticas. Core Platform decide autorização estrutural. O módulo dono executa eventual restrição ou liberação. Auditoria registra.

4.14 Convites e Visitantes
Status: Aprovado.

Objetivo
Gerenciar o domínio operacional de visitantes temporários, convites, autorizações temporárias, aprovações, janelas de visita, check-in, check-out, delivery, acompanhantes, prestadores temporários, visitantes recorrentes operacionais, listas de convidados, QR temporário por contrato com Controle de Acesso, histórico de visitação e trilha auditável.

Usuários que acessam
- Master, para governança superior e auditoria.
- Parceiro, para acompanhar implantação e uso autorizado.
- Organização Admin, para configurar regras locais permitidas e visualizar resumos.
- Operador/Gestor, para criar convites administrativos, aprovar, recusar, consultar e operar visitas.
- Portaria / Recepção / Segurança, para validar visitantes, registrar chegada, check-in, check-out e ocorrências.
- Cliente / Usuário Final, para criar, compartilhar, aprovar, recusar e acompanhar convites próprios conforme herança.
- Visitante, apenas por interface limitada quando habilitada.

Responsabilidades
- Manter VisitorInvite.
- Manter TemporaryVisitor.
- Manter VisitAuthorization.
- Manter VisitWindow.
- Manter VisitorApproval.
- Manter VisitorDenial.
- Manter VisitorCheckIn.
- Manter VisitorCheckOut.
- Manter VisitorVisitSession.
- Manter VisitorIdentitySnapshot.
- Manter VisitorDocumentSnapshot.
- Manter VisitorPhotoSnapshot.
- Manter VisitorVehicleSnapshot.
- Manter VisitorConsentSnapshot.
- Manter VisitorHostReference.
- Manter VisitorUnitReference.
- Manter VisitDestinationReference.
- Manter VisitorAllowedArea.
- Manter VisitorAccessArea.
- Criar convite único.
- Criar convite recorrente operacional.
- Criar convite para delivery.
- Criar convite para acompanhante eventual.
- Criar convite para prestador temporário.
- Criar lista de convidados vinculada a reserva ou evento por referência.
- Registrar visitante sem pré-cadastro.
- Registrar chegada.
- Registrar check-in.
- Registrar check-out.
- Registrar recusa.
- Registrar permanência excedida.
- Registrar tentativa fora da janela.
- Registrar visitante banido ou restrito conforme governança LGPD.
- Solicitar QR temporário, passe temporário ou revogação ao Controle de Acesso por contrato autorizado.
- Solicitar notificação ao módulo Notificações por contrato autorizado.
- Solicitar cobrança ao Financeiro por contrato autorizado.
- Solicitar ticket ao módulo Tickets por contrato autorizado.
- Solicitar evidência ao Câmeras / VMS por contrato autorizado.
- Publicar eventos auditáveis.
- Aplicar retenção e proteção conforme Segurança e LGPD.

O que não faz
- Não cria Tenant.
- Não cria Context.
- Não cria UserAccount.
- Não autentica usuário.
- Não cria Role, Permission, PermissionGrant ou InheritanceGrant.
- Não emite AuthorizationDecision final.
- Não substitui Core Platform.
- Não substitui Herança e Permissões.
- Não mantém PersonProfile, ClientProfile ou PersonUnitLink.
- Não vira cadastro permanente de pessoas.
- Não cria dependente permanente ou prestador recorrente permanente.
- Não cria Unit, Block, Area ou Environment.
- Não substitui Organizações.
- Não substitui Parceiros.
- Não cria Gateway, tunnel, rota ou diagnóstico técnico.
- Não mantém DeviceRecord.
- Não substitui Dispositivos.
- Não cria AccessCredential, TemporaryAccessCredential, QrCredential ou AccessEvent.
- Não abre porta, portão ou catraca diretamente.
- Não substitui Controle de Acesso.
- Não cria live view, playback, snapshot, clipe ou evidência de vídeo.
- Não substitui Câmeras / VMS.
- Não arma, desarma, silencia, dispara ou resolve alarme.
- Não substitui Alarmes.
- Não gera fatura, Pix, boleto, cartão, recibo ou inadimplência.
- Não substitui Financeiro.
- Não cria reserva, agenda, disponibilidade ou no-show de reserva.
- Não substitui Reservas.
- Não cria SupportTicket, SLA ou central de atendimento como domínio próprio.
- Não substitui Tickets.
- Não envia push, SMS, e-mail ou WhatsApp diretamente.
- Não substitui Notificações.
- Não substitui Segurança e LGPD ou Auditoria e Compliance.
- Não acessa banco interno de outro módulo.

Entidades principais
- VisitorInvite.
- TemporaryVisitor.
- VisitorProfile, apenas perfil temporário operacional.
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
- ReservationGuestList, como lista de convidados, não como reserva.
- VisitorChargeRequest.
- VisitorPenaltyRequest.
- VisitorNotificationRequest.
- VisitorTicketRequest.
- VisitorVideoEvidenceRequest.
- VisitorAlarmContextEvent.
- VisitorAuditTrail.

Eventos publicados
- VisitorInviteCreated.
- VisitorInviteUpdated.
- VisitorInviteCancelled.
- VisitorInviteRevoked.
- VisitorInviteExpired.
- VisitorInviteShared.
- RecurringOperationalInviteCreated.
- TemporaryVisitorRegistered.
- VisitorIdentitySnapshotCreated.
- VisitorDocumentSnapshotCreated.
- VisitorPhotoSnapshotCreated.
- VisitorVehicleSnapshotCreated.
- HostApprovalRequested.
- VisitorApproved.
- VisitorDenied.
- VisitorArrived.
- VisitorCheckedIn.
- VisitorCheckedOut.
- VisitorNoShow.
- VisitorOverstayed.
- VisitorInRestrictedArea.
- VisitorTemporaryPassRequested.
- VisitorQrRequested.
- VisitorAccessRevocationRequested.
- DeliveryVisitCreated.
- ServiceProviderTemporaryVisitCreated.
- VisitorBanCreated.
- VisitorBanRevoked.
- VisitorDocumentMissing.
- VisitorPhotoRejected.
- VisitorChargeRequested.
- VisitorPenaltyRequested.
- VisitorNotificationRequested.
- VisitorTicketRequested.
- VisitorVideoEvidenceRequested.
- VisitorHistoryExported.
- VisitorSensitiveDataViewed.

Eventos consumidos
- AuthorizationPolicyChanged.
- PermissionGranted.
- PermissionRevoked.
- InheritanceChanged.
- LicenseChanged.
- FeatureFlagChanged.
- ModuleActivated.
- ModuleDeactivated.
- PolicyCreated.
- PolicyUpdated.
- PersonProfileUpdated.
- ClientProfileActivated.
- PersonLinkedToUnit.
- PersonUnlinkedFromUnit.
- StructureCreated.
- StructureUpdated.
- StructureArchived.
- OrganizationCreated.
- OrganizationStatusChanged.
- TemporaryAccessCredentialCreated.
- TemporaryAccessCredentialRevoked.
- TemporaryAccessCredentialExpired.
- AccessGranted.
- AccessDenied.
- AccessAttemptRecorded.
- CameraEvidenceCreated.
- EventVideoCorrelationCreated.
- AlarmIncidentCreated.
- VisitorChargeCreated.
- VisitorChargePaid.
- ReservationCreated.
- ReservationCancelled.
- SupportTicketCreated.
- NotificationSent.
- NotificationDelivered.
- DataRetentionPolicyUpdated.
- SensitiveDataAccessPolicyChanged.

APIs internas
- CreateVisitorInvite.
- UpdateVisitorInvite.
- CancelVisitorInvite.
- RevokeVisitorInvite.
- GetVisitorInvite.
- ListVisitorInvites.
- SearchVisitorInvites.
- ShareVisitorInvite.
- ExpireVisitorInvite.
- CreateRecurringOperationalInvite.
- UpdateRecurringOperationalInvite.
- CancelRecurringOperationalInvite.
- RegisterTemporaryVisitor.
- UpdateTemporaryVisitorSnapshot.
- RequestHostApproval.
- ApproveVisitor.
- DenyVisitor.
- SearchInviteAtGatehouse.
- RegisterVisitorArrival.
- ValidateVisitorDocument.
- ValidateVisitorPhoto.
- ValidateVisitorVehicle.
- ExecuteVisitorCheckIn.
- ExecuteVisitorCheckOut.
- RegisterVisitorDenial.
- RegisterVisitorIncident.
- RequestTemporaryVisitPass.
- RequestVisitorQr.
- RequestVisitorAccessRevocation.
- CreateDeliveryVisit.
- CreateTemporaryServiceProviderVisit.
- CreateVisitorBan.
- ReviewVisitorBan.
- RevokeVisitorBan.
- RegisterVisitorOverstay.
- RegisterRestrictedAreaAttempt.
- GetVisitorOperationalDashboard.
- ExportVisitorHistory.
- GetVisitorAuditTrail.
- UpdateVisitorOrganizationSettings.

Integrações externas
- Core Platform.
- Herança e Permissões.
- Pessoas e Clientes.
- Unidades, Blocos, Áreas e Ambientes.
- Organizações.
- Parceiros.
- Controle de Acesso.
- Gateway Local / Mikrotik / Tunnel, apenas por execução técnica indireta via módulo dono.
- Dispositivos, apenas por referências autorizadas.
- Câmeras / VMS.
- Alarmes.
- Financeiro.
- Reservas.
- Tickets.
- Notificações.
- Segurança e LGPD.
- Auditoria e Compliance.
- Relatórios / BI por read models autorizados.
- White-label.
- Marketplace de Integrações.

Dependências permitidas
- Core Platform.
- Herança e Permissões.
- Pessoas e Clientes.
- Unidades, Blocos, Áreas e Ambientes.
- Organizações.
- Parceiros.
- Controle de Acesso, apenas por APIs, eventos e contratos.
- Câmeras / VMS, apenas por APIs, eventos e contratos.
- Alarmes, apenas por APIs, eventos e contratos.
- Financeiro, apenas por solicitações de cobrança e eventos financeiros.
- Reservas, apenas por vínculo de convidados e eventos.
- Tickets, apenas por solicitações de ocorrência.
- Notificações, apenas por solicitações de envio.
- Segurança e LGPD.
- Auditoria e Compliance.
- Relatórios / BI, apenas por read models autorizados.

Dependências proibidas
- Banco interno de outro módulo.
- Classes internas de outro módulo.
- Motor paralelo de autorização.
- Motor paralelo de pessoas.
- Motor paralelo de controle de acesso.
- Motor paralelo de financeiro.
- Motor paralelo de reservas.
- Motor paralelo de tickets.
- Motor paralelo de notificações.
- Cadastro permanente de pessoa.
- Criação de credencial física como domínio próprio.
- Abertura de porta, portão ou catraca diretamente.
- Criação de fatura, Pix, boleto, cartão ou recibo.
- Stream, playback, clipe ou evidência de vídeo.
- Envio multicanal direto.
- Exportação sem finalidade, permissão e auditoria.

Observações importantes
Convites organiza a visita. Core autoriza. Herança governa políticas. Controle de Acesso executa passagem física. Auditoria registra.
Convites não abre porta, não cria pessoa permanente, não gera cobrança, não envia notificação multicanal e não cria credencial física.

4.15 Tickets
Status: Aprovado.

Objetivo
Gerenciar chamados, solicitações, ocorrências, atendimento, suporte operacional da organização, manutenção, comunicação operacional, SLA, comentários, anexos, escalonamento, histórico, resolução e reabertura.

Usuários que acessam
- Master, para governança superior, auditoria e indicadores globais autorizados.
- Parceiro, para acompanhar, atender e escalar tickets das organizações abaixo do seu escopo autorizado.
- Organização, para acompanhar operação, SLA, ocorrências abertas e histórico de atendimento.
- Operador/Gestor, para abrir, classificar, atribuir, comentar, anexar, escalar, resolver e reabrir tickets conforme permissão.
- Cliente, para abrir e acompanhar seus próprios tickets ou tickets vinculados ao seu contexto herdado.
- Equipe técnica autorizada, para atuar em chamados atribuídos.
- Auditoria e Compliance, por contrato autorizado.

Responsabilidades
- Manter Ticket.
- Manter OperationalTicket.
- Manter MaintenanceTicket.
- Manter IncidentTicket.
- Manter ComplaintTicket.
- Manter ServiceRequestTicket.
- Manter TicketCategory.
- Manter TicketPriority.
- Manter TicketStatus.
- Manter TicketType.
- Manter TicketSource.
- Manter TicketRequesterReference.
- Manter TicketAssigneeReference.
- Manter TicketWatcherReference.
- Manter TicketTeamReference.
- Manter TicketParticipantReference.
- Manter TicketComment.
- Manter TicketInternalNote.
- Manter TicketAttachment.
- Manter TicketAttachmentReference.
- Manter TicketSLA.
- Manter TicketSLAClock.
- Manter TicketSLABreach.
- Manter TicketEscalation.
- Manter TicketEscalationLevel.
- Manter TicketResolution.
- Manter TicketReopen.
- Manter TicketClosureReason.
- Manter TicketWorkflowState.
- Manter TicketTag.
- Manter TicketLinkedResource.
- Manter TicketModuleReference.
- Manter referências tipadas para recursos externos autorizados.
- Publicar eventos do ciclo de vida do ticket.
- Solicitar ações a outros módulos por contratos autorizados.
- Expor read models autorizados para Relatórios / BI.
- Gerar logs e trilhas auditáveis.

O que não faz
- Não cria Tenant.
- Não cria Context.
- Não cria UserAccount.
- Não emite AuthorizationDecision final.
- Não substitui Herança e Permissões.
- Não mantém PersonProfile ou ClientProfile.
- Não vira cadastro primário de pessoas.
- Não cria Unit, Block, Area ou Environment.
- Não substitui Organizações.
- Não substitui Parceiros.
- Não substitui Gateway Local / Mikrotik / Tunnel.
- Não cria tunnel, rota, comando técnico ou diagnóstico técnico de gateway.
- Não substitui Dispositivos.
- Não mantém DeviceRecord, DeviceHealth ou DeviceDiagnostic como domínio próprio.
- Não substitui Controle de Acesso.
- Não abre porta, não revoga credencial e não cria AccessEvent.
- Não substitui Câmeras / VMS.
- Não cria live view, playback, clipe, snapshot ou CameraEvidence.
- Não substitui Alarmes.
- Não arma, desarma, silencia, reseta ou resolve AlarmEvent.
- Não substitui Financeiro.
- Não gera fatura, boleto, Pix, cartão, recibo, inadimplência, repasse ou comissão.
- Não substitui Convites e Visitantes.
- Não cria convite, não aprova visitante e não faz check-in/check-out.
- Não substitui Reservas.
- Não cria reserva, não calcula disponibilidade e não executa no-show.
- Não substitui Mural Informativo.
- Não publica comunicado institucional.
- Não substitui Notificações.
- Não envia notificações multicanal como domínio próprio.
- Não substitui Automações.
- Não executa workflow genérico.
- Não acessa banco interno de outro módulo.

Entidades principais
- Ticket.
- OperationalTicket.
- MaintenanceTicket.
- IncidentTicket.
- ComplaintTicket.
- ServiceRequestTicket.
- TicketCategory.
- TicketSubcategory.
- TicketPriority.
- TicketStatus.
- TicketType.
- TicketSource.
- TicketChannel.
- TicketSeverity.
- TicketSensitivity.
- TicketLifecycle.
- TicketWorkflowState.
- TicketQueue.
- TicketTag.
- TicketNumber.
- TicketTemplate.
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
- TicketDeviceReference.
- TicketGatewayReference.
- TicketAccessReference.
- TicketCameraReference.
- TicketAlarmReference.
- TicketFinanceReference.
- TicketVisitorReference.
- TicketReservationReference.
- TicketMuralReference.
- TicketAuditTrail.

Eventos publicados
- TicketCreated.
- TicketUpdated.
- TicketCanceled.
- TicketCategoryChanged.
- TicketPriorityChanged.
- TicketStatusChanged.
- TicketAssigned.
- TicketCommentAdded.
- TicketInternalNoteAdded.
- TicketAttachmentAdded.
- TicketAttachmentRemoved.
- TicketSensitiveContentViewed.
- TicketLinkedResourceAdded.
- TicketLinkedResourceRemoved.
- TicketSLAStarted.
- TicketSLABreached.
- TicketEscalated.
- TicketExternalActionRequested.
- TicketDeviceDiagnosticRequested.
- TicketGatewayDiagnosticRequested.
- TicketFinanceActionRequested.
- TicketNotificationRequested.
- TicketResolved.
- TicketClosed.
- TicketReopened.
- TicketExported.
- TicketActionDenied.

Eventos consumidos
- AuthorizationPolicyChanged.
- ModuleActivated.
- ModuleDeactivated.
- PersonLinkedToUnit.
- PersonUnlinkedFromUnit.
- StructureUpdated.
- OrganizationStatusChanged.
- PartnerScopeChanged.
- GatewayDisconnected.
- GatewayDiagnosticCompleted.
- DeviceOffline.
- DeviceDiagnosticCompleted.
- AccessDenied.
- CameraOffline.
- CameraEvidenceShared.
- AlarmIncidentCreated.
- InvoiceOverdue.
- PaymentFailed.
- VisitorDenied.
- ReservationConflictDetected.
- AnnouncementPublished.
- AutomationRequestedTicketCreation.
- NotificationDelivered.
- NotificationFailed.

APIs internas
- CreateTicket.
- GetTicket.
- ListTickets.
- SearchTickets.
- UpdateTicket.
- CancelTicket.
- ChangeTicketStatus.
- ChangeTicketPriority.
- AssignTicket.
- AddTicketComment.
- AddTicketInternalNote.
- AddTicketAttachment.
- RemoveTicketAttachment.
- ResolveTicket.
- ReopenTicket.
- LinkTicketResource.
- UnlinkTicketResource.
- RequestDeviceDiagnosticFromTicket.
- RequestGatewayDiagnosticFromTicket.
- RequestFinanceActionFromTicket.
- RequestNotificationFromTicket.
- GetTicketOperationalSummary.
- GetTicketSLAReport.
- ExportTicketHistory.
- GetTicketAuditTrail.

Integrações externas
- E-mail inbound autorizado para abertura de ticket.
- WhatsApp inbound via módulo Notificações ou conector autorizado.
- API externa de suporte por contrato.
- ERP ou CRM externo por Marketplace de Integrações.
- Formulário público autorizado.
- Webhook externo de incidente.
- Ferramenta de manutenção terceirizada.
- Central de monitoramento, quando contratada.
- Storage de anexos.

Dependências permitidas
- Core Platform.
- Herança e Permissões.
- Pessoas e Clientes.
- Unidades, Blocos, Áreas e Ambientes.
- Organizações.
- Parceiros.
- Gateway Local / Mikrotik / Tunnel.
- Dispositivos.
- Controle de Acesso.
- Câmeras / VMS.
- Alarmes.
- Financeiro.
- Convites e Visitantes.
- Reservas.
- Mural Informativo.
- Notificações.
- Automações.
- Relatórios / BI.
- Segurança e LGPD.
- Auditoria e Compliance.
- White-label.
- Marketplace de Integrações.
- Suporte e Operação, apenas para separação de fronteira e suporte interno da plataforma.

Dependências proibidas
- Banco interno de qualquer outro módulo.
- Classes internas de outro módulo.
- Motor paralelo de autorização.
- Motor paralelo de herança.
- Motor de cadastro de pessoas.
- Motor de estrutura física.
- Motor de gateway.
- Motor de dispositivos.
- Motor de acesso físico.
- Motor de vídeo.
- Motor de alarme.
- Motor financeiro.
- Motor de visitantes.
- Motor de reservas.
- Motor de mural.
- Motor de notificações.
- Motor de automações.
- Motor de BI.
- Comunicação direta com hardware.

Observações importantes
Tickets atende. Core autoriza. Herança e Permissões governa políticas. Módulo dono executa. Auditoria registra.

TicketLinkedResource permite vínculo por referência autorizada, sem transferência de domínio.

SLA e escalonamento pertencem ao ciclo do ticket, mas não executam ações operacionais de outros módulos.

Tickets sensíveis, anexos e evidências exigem proteção reforçada, mascaramento, retenção, controle de acesso e auditoria.

OperationalTicket pertence a Tickets.

PlatformSupportCase e SupportOperationCase pertencem a Suporte e Operação.

4.16 Mural Informativo
Status: Aprovado.

Objetivo
Permitir comunicação oficial da organização, parceiro ou master com públicos segmentados, governando avisos, comunicados, publicações, documentos anexados ao comunicado, enquetes, leitura obrigatória, ciência, aceite, histórico de leitura, fixação, destaque, arquivamento e relatórios próprios de comunicação institucional.

Usuários que acessam
- Master.
- Parceiro.
- Organização.
- Operador/Gestor.
- Cliente.

Responsabilidades
- Criar comunicados.
- Criar rascunhos.
- Editar comunicados.
- Publicar comunicados.
- Programar publicações.
- Categorizar comunicados.
- Definir prioridade.
- Definir público-alvo por referência autorizada.
- Segmentar por organização, unidade, bloco, área, ambiente, perfil, papel ou vínculo contextual autorizado.
- Anexar documentos ao comunicado.
- Configurar leitura obrigatória.
- Registrar leitura.
- Registrar ciência.
- Registrar aceite.
- Criar enquetes vinculadas a comunicados.
- Registrar votos.
- Encerrar enquetes.
- Fixar comunicados.
- Destacar comunicados.
- Arquivar comunicados.
- Solicitar notificações por contrato com Notificações.
- Solicitar tickets por contrato com Tickets.
- Gerar relatórios próprios.
- Expor read models autorizados para Relatórios / BI.
- Publicar eventos próprios.
- Gerar logs e trilhas auditáveis.

O que não faz
- Não cria Tenant.
- Não cria Context.
- Não cria UserAccount.
- Não cria PermissionGrant.
- Não cria InheritanceGrant.
- Não emite AuthorizationDecision final.
- Não substitui Core Platform.
- Não substitui Herança e Permissões.
- Não mantém PersonProfile, ClientProfile ou PersonUnitLink.
- Não cria Unit, Block, Area ou Environment.
- Não mantém OrganizationRecord ou OrganizationProfile.
- Não substitui Parceiros.
- Não substitui Notificações.
- Não envia push, e-mail, SMS ou WhatsApp diretamente.
- Não substitui Tickets.
- Não gerencia SLA, atendimento ou resolução.
- Não substitui Financeiro.
- Não gera fatura, boleto, Pix, cartão, inadimplência ou recibo.
- Não substitui Convites e Visitantes.
- Não cria convite, QR temporário ou check-in/check-out.
- Não substitui Reservas.
- Não cria agenda, disponibilidade, reserva ou no-show.
- Não substitui Controle de Acesso.
- Não abre porta, bloqueia acesso, revoga credencial ou cria AccessEvent.
- Não substitui Câmeras / VMS.
- Não cria live view, playback, clipe, snapshot ou evidência.
- Não substitui Alarmes.
- Não arma, desarma, silencia ou dispara alarme.
- Não substitui Relatórios / BI.
- Não acessa banco interno de outro módulo.
- Não vira GED completo.

Entidades principais
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

Eventos publicados
- AnnouncementDraftCreated.
- AnnouncementCreated.
- AnnouncementPublished.
- AnnouncementEdited.
- AnnouncementArchived.
- AnnouncementPinned.
- AnnouncementHighlighted.
- AnnouncementAudienceChanged.
- AnnouncementMandatoryReadConfigured.
- AnnouncementReadRegistered.
- AnnouncementAcknowledged.
- AnnouncementAccepted.
- AnnouncementAttachmentAdded.
- AnnouncementAttachmentRemoved.
- AnnouncementPollCreated.
- AnnouncementPollVoted.
- AnnouncementPollClosed.
- AnnouncementNotificationRequested.
- AnnouncementTicketRequested.
- AnnouncementReadModelUpdated.
- AnnouncementReportExported.
- AnnouncementSensitiveViewed.
- AnnouncementActionDenied.

Eventos consumidos
- PermissionGranted.
- PermissionRevoked.
- InheritanceChanged.
- LicenseChanged.
- FeatureFlagChanged.
- ModuleActivated.
- ModuleDeactivated.
- PolicyUpdated.
- PersonLinkedToOrganization.
- PersonLinkedToUnit.
- PersonUnlinkedFromUnit.
- StructureCreated.
- StructureUpdated.
- StructureArchived.
- OrganizationStatusChanged.
- PartnerScopeChanged.
- NotificationDelivered.
- NotificationFailed.
- TicketCreated.
- TicketStatusChanged.
- DataRetentionPolicyUpdated.
- SensitiveDataPolicyUpdated.

APIs internas
- CreateAnnouncementDraft.
- UpdateAnnouncementDraft.
- PublishAnnouncement.
- ScheduleAnnouncement.
- UpdateAnnouncement.
- ArchiveAnnouncement.
- PinAnnouncement.
- HighlightAnnouncement.
- DefineAnnouncementAudience.
- AddAnnouncementAttachment.
- RemoveAnnouncementAttachment.
- ConfigureMandatoryRead.
- RegisterAnnouncementRead.
- RegisterAcknowledgement.
- RegisterAcceptance.
- CreateAnnouncementPoll.
- VoteAnnouncementPoll.
- CloseAnnouncementPoll.
- RegisterAnnouncementQuestion.
- RequestTicketFromAnnouncement.
- RequestNotificationForAnnouncement.
- GetAnnouncementReports.
- ExportAnnouncementReport.
- GetAnnouncementReadModel.
- GetAnnouncementAuditTrail.
- ValidateAnnouncementReference.

Dependências permitidas
- Core Platform.
- Herança e Permissões.
- Pessoas e Clientes.
- Unidades, Blocos, Áreas e Ambientes.
- Organizações.
- Parceiros.
- Notificações.
- Tickets.
- Segurança e LGPD.
- Auditoria e Compliance.
- Relatórios / BI, apenas por read models autorizados.
- Módulos comerciais, apenas por referência autorizada.
- White-label, apenas para identidade visual da experiência.
- Marketplace de Integrações, apenas para integrações futuras autorizadas.

Dependências proibidas
- Banco interno de qualquer outro módulo.
- Classes internas de outro módulo.
- Motor paralelo de autorização.
- Motor paralelo de notificações.
- Motor paralelo de atendimento.
- Motor financeiro.
- Motor de reservas.
- Motor de visitantes.
- Motor de acesso físico.
- Motor de câmeras.
- Motor de alarmes.
- BI avançado acoplado.
- GED completo sem decisão oficial.

Observações importantes
Mural publica. Notificações entrega. Tickets atende. Financeiro cobra. Reservas agenda. Controle de Acesso executa acesso físico. Câmeras / VMS governa vídeo. Alarmes governa alarme. Core autoriza. Herança governa políticas. Auditoria registra.

4.17 Reservas

Status: Aprovado.

Objetivo

Gerenciar agenda, disponibilidade, solicitação, aprovação, recusa, confirmação, cancelamento, check-in, check-out, no-show, regras de uso, conflitos, holds, bloqueios e histórico operacional de reservas de recursos físicos ou compartilhados.

Usuários que acessam

- Master, para visão global autorizada e auditoria superior.
- Parceiro, para acompanhamento e implantação dentro do escopo autorizado.
- Organização Admin, para configurar recursos, regras e políticas operacionais de reserva.
- Operador/Gestor, para administrar agenda, aprovar, cancelar, bloquear, registrar check-in, check-out e no-show.
- Cliente, para consultar recursos herdados, solicitar reserva, acompanhar status, cancelar quando permitido e fazer check-in/check-out quando autorizado.
- Auditoria e Compliance, Segurança e LGPD e Suporte e Operação, por contratos autorizados.

Responsabilidades

- ReservableResource.
- ReservationResourceReference.
- Reservation.
- ReservationRequest.
- ReservationApproval.
- ReservationDenial.
- ReservationStatus.
- ReservationType.
- ReservationCategory.
- ReservationRule.
- ReservationPolicyBinding.
- ReservationAvailability.
- ReservationAvailabilitySlot.
- ReservationCalendar.
- ReservationSchedule.
- ReservationTimeSlot.
- ReservationWindow.
- ReservationConflict.
- ReservationHold.
- ReservationBlock.
- ReservationCancellation.
- ReservationCancellationReason.
- ReservationCheckIn.
- ReservationCheckOut.
- ReservationNoShow.
- ReservationUsageSession.
- ReservationParticipant.
- ReservationGuestReference.
- ReservationGuestList.
- ReservationAccessWindow.
- ReservationAccessRequest.
- ReservationChargeRequest.
- ReservationPenaltyRequest.
- ReservationDepositRequest.
- ReservationRefundRequest.
- ReservationNotificationRequest.
- ReservationTicketRequest.
- ReservationMaintenanceRequest.
- ReservationAutomationTrigger.
- ReservationReadModel.
- ReservationAuditTrail.

O que não faz

- Não cria Tenant.
- Não cria Context.
- Não cria UserAccount.
- Não emite AuthorizationDecision final.
- Não cria PermissionGrant.
- Não cria License.
- Não cria FeatureFlag.
- Não substitui Core Platform.
- Não cria Unit, Block, Area ou Environment.
- Não substitui Unidades, Blocos, Áreas e Ambientes.
- Não abre porta.
- Não cria AccessCredential, AccessGrant ou AccessEvent.
- Não substitui Controle de Acesso.
- Não gera fatura, boleto, Pix, cartão, pagamento, recibo ou reembolso.
- Não substitui Financeiro.
- Não cria VisitorInvite, TemporaryVisitor ou QR temporário de visitante.
- Não substitui Convites e Visitantes.
- Não cria OperationalTicket como domínio próprio.
- Não substitui Tickets.
- Não cria PlatformSupportCase, SupportOperationCase ou ServiceIncident.
- Não substitui Suporte e Operação.
- Não envia notificação multicanal como domínio próprio.
- Não substitui Notificações.
- Não cria AutomationWorkflow.
- Não substitui Automações.
- Não cria BI genérico.
- Não substitui Segurança e LGPD.
- Não substitui Auditoria e Compliance.
- Não acessa banco interno de outro módulo.
- Não guarda segredo bruto.

Eventos publicados

- ReservationResourceCreated.
- ReservationResourceUpdated.
- ReservationResourceArchived.
- ReservationRuleCreated.
- ReservationRuleUpdated.
- ReservationSlotHeld.
- ReservationHoldExpired.
- ReservationRequested.
- ReservationApproved.
- ReservationDenied.
- ReservationConfirmed.
- ReservationUpdated.
- ReservationRescheduled.
- ReservationCancelled.
- ReservationConflictDetected.
- ReservationBlockCreated.
- ReservationBlockRemoved.
- ReservationCheckInRegistered.
- ReservationCheckOutRegistered.
- ReservationNoShowMarked.
- ReservationAccessWindowCreated.
- ReservationAccessRequested.
- ReservationChargeRequested.
- ReservationDepositRequested.
- ReservationPenaltyRequested.
- ReservationRefundRequested.
- ReservationNotificationRequested.
- ReservationTicketRequested.
- ReservationMaintenanceRequested.
- ReservationAutomationTriggerPublished.
- ReservationReadModelUpdated.

Eventos consumidos

- ModuleActivated.
- ModuleDeactivated.
- LicenseChanged.
- FeatureFlagChanged.
- PermissionGranted.
- PermissionRevoked.
- ResourceReferenceCreated.
- ResourceReferenceUpdated.
- ResourceReferenceRevoked.
- StructureReservableFlagChanged.
- StructureUpdated.
- StructureArchived.
- PersonLinkedToUnit.
- PersonUnlinkedFromUnit.
- ClientProfileActivated.
- ClientProfileInactivated.
- AccessExecutionResultCreated.
- AccessEventRegistered.
- InvoiceCreated.
- InvoicePaid.
- InvoiceOverdue.
- PaymentConfirmed.
- PaymentFailed.
- RefundProcessed.
- VisitorInviteApproved.
- TicketCreated.
- TicketResolved.
- NotificationDelivered.
- NotificationFailed.
- AutomationExecutionCompleted.
- DataRetentionPolicyUpdated.
- ConsentPolicyUpdated.

APIs internas

- CreateReservableResource.
- UpdateReservableResource.
- ArchiveReservableResource.
- ListReservableResources.
- GetReservationAvailability.
- HoldReservationSlot.
- CreateReservationRequest.
- ApproveReservationRequest.
- DenyReservationRequest.
- ConfirmReservation.
- UpdateReservation.
- RescheduleReservation.
- CancelReservation.
- CreateReservationBlock.
- RegisterReservationCheckIn.
- RegisterReservationCheckOut.
- MarkReservationNoShow.
- RequestReservationAccess.
- RequestReservationCharge.
- RequestReservationDeposit.
- RequestReservationPenalty.
- RequestReservationRefund.
- RequestReservationNotification.
- RequestReservationTicket.
- GetReservationAuditTrail.
- ExportReservations.

Dependências permitidas

- Core Platform.
- Herança e Permissões.
- Organizações.
- Unidades, Blocos, Áreas e Ambientes.
- Pessoas e Clientes.
- Controle de Acesso.
- Financeiro.
- Convites e Visitantes.
- Tickets.
- Suporte e Operação.
- Notificações.
- Automações.
- Segurança e LGPD.
- Auditoria e Compliance.
- Relatórios / BI, apenas por read models autorizados.
- Marketplace de Integrações.
- White-label, apenas para experiência visual autorizada.
- Dispositivos e Gateway, apenas por contratos indiretos autorizados.

Dependências proibidas

- Banco interno de outro módulo.
- Classes internas de outro módulo.
- Motor paralelo de autorização.
- Motor paralelo de permissões.
- Motor paralelo de auditoria.
- Motor paralelo de LGPD.
- Motor financeiro.
- Motor de acesso físico.
- Motor de visitantes.
- Motor de tickets.
- Motor de notificações.
- Motor de automações.
- BI genérico.
- Integração direta com hardware.
- Segredo bruto.
- Read model como banco compartilhado.
- Ação crítica em modo fail-open.

Observações importantes

Área ou ambiente pode ser marcado como reservável no módulo Unidades, Blocos, Áreas e Ambientes, mas agenda, disponibilidade, solicitação, aprovação, cancelamento, check-in, check-out, no-show, conflitos e bloqueios pertencem ao módulo Reservas.

Reservas pode solicitar cobrança ao Financeiro, acesso ao Controle de Acesso, notificações ao módulo Notificações, tickets ao módulo Tickets e automações ao módulo Automações, sempre por contratos públicos versionados e AuthorizationDecision do Core.

Frase consolidada:

Reservas agenda. Estrutura localiza. Core autoriza. Acesso executa passagem. Financeiro cobra quando aplicável. Notificações comunica. Auditoria registra.


4.18 Relatórios / BI
Status: Aprovado.

Objetivo
Representar o domínio analítico oficial da plataforma, responsável por dashboards, indicadores, métricas, KPIs, relatórios, consultas agregadas, visões gerenciais, visões operacionais analíticas, snapshots, filtros, widgets, insights, tendências, anomalias analíticas e exportações autorizadas por perfil, tenant, contexto e escopo.

Usuários que acessam
- Master.
- Parceiro.
- Organização.
- Operador/Gestor.
- Cliente, apenas para relatórios pessoais, próprios ou herdados.
- Auditoria e Compliance, por contrato autorizado.
- Segurança e LGPD, por políticas e trilhas autorizadas.
- Módulos internos autorizados, apenas por contratos públicos.

Responsabilidades
- Manter BIWorkspace.
- Manter BIDashboard.
- Manter BIWidget.
- Manter BIReport.
- Manter BIReportTemplate.
- Manter BIReportDefinition.
- Manter BIReportSchedule.
- Manter BIReportExecution.
- Manter BIReportSnapshot.
- Manter BIExport, BIExportRequest, BIExportApproval e BIExportLog.
- Manter BIQuery, BIQueryDefinition e BIQueryResult.
- Manter BIMetric, BIIndicator, BIKPI e BITrend.
- Manter BIChart, BITableView, BIFilter, BIDimension e BIAggregation.
- Manter BIDataSourceReference.
- Manter BIReadModelSubscription e BIReadModelContract.
- Manter BIAnalyticsReadModel derivado e governado.
- Manter BIDataMart apenas quando governado, autorizado, minimizado e rastreável.
- Manter BIDataSnapshot.
- Manter BIDataRetentionReference e BIMaskingPolicyReference como referências a políticas de Segurança e LGPD.
- Manter BISensitiveDataView conforme autorização e mascaramento.
- Manter BIAccessLog e BIViewLog.
- Manter BIDashboardShare e BIReportShare.
- Manter BIAlertRule, BIInsight e BIAnomalyDetection sem executar workflow operacional.
- Exibir dashboards por perfil e contexto.
- Gerar relatórios autorizados.
- Gerar exportações autorizadas.
- Registrar visualização, exportação e compartilhamento.
- Aplicar políticas de finalidade, minimização, mascaramento, retenção e classificação por referência.
- Indicar origem, owner_module, versão do contrato, data de atualização e defasagem dos dados.
- Degradar com segurança quando fonte, contrato, autorização ou política estiverem indisponíveis.

O que não faz
- Não cria Tenant.
- Não cria Context.
- Não cria UserAccount.
- Não cria Role, Permission, PermissionGrant ou InheritanceGrant.
- Não cria AuthorizationDecision.
- Não cria License, Plan, Entitlement ou FeatureFlag.
- Não substitui Core Platform.
- Não substitui Herança e Permissões.
- Não cria motor paralelo de autorização, permissão, auditoria, licenciamento ou feature flag.
- Não define DataRetentionPolicy, DataMaskingPolicy, ConsentPolicy ou SensitiveDataPolicy.
- Não substitui Segurança e LGPD.
- Não cria ComplianceCase, ComplianceInvestigation, AuditEvidence, AuditExport ou ChainOfCustodyRecord.
- Não substitui Auditoria e Compliance.
- Não cria SupportOperationCase, ServiceIncident, MaintenanceWindow ou ServiceStatusPage.
- Não substitui Suporte e Operação.
- Não cria Invoice, boleto, Pix, pagamento, recibo, repasse, comissão ou conciliação.
- Não substitui Financeiro.
- Não cria AccessEvent, AccessGrant, AccessDeny, AccessCredential ou AccessExecutionResult.
- Não abre porta, não revoga credencial e não executa acesso físico.
- Não substitui Controle de Acesso.
- Não abre stream, não executa live view, não monta mosaico operacional, não executa playback, não cria clipe, snapshot ou evidência de vídeo.
- Não substitui Câmeras / VMS.
- Não arma, desarma, silencia, resolve ou escala alarme.
- Não substitui Alarmes.
- Não cria convite, QR temporário, visitante, check-in ou check-out.
- Não substitui Convites e Visitantes.
- Não cria reserva, disponibilidade, aprovação, cancelamento, check-in, check-out ou no-show.
- Não substitui Reservas.
- Não cria ticket, comentário, anexo, SLA, resolução ou reabertura.
- Não substitui Tickets.
- Não publica comunicado, não registra ciência e não cria enquete.
- Não substitui Mural Informativo.
- Não envia push, e-mail, SMS ou WhatsApp diretamente como domínio próprio.
- Não substitui Notificações.
- Não cria AutomationWorkflow, gatilho, condição ou ação operacional.
- Não substitui Automações.
- Não instala conector, não executa adapter, não cria provider e não guarda credencial de integração.
- Não substitui Marketplace de Integrações.
- Não diagnostica gateway nem executa comando técnico.
- Não substitui Gateway Local / Mikrotik / Tunnel.
- Não cria DeviceRecord, DeviceHealth, DeviceStatus, DeviceDiagnostic ou DeviceLifecycle.
- Não substitui Dispositivos.
- Não gerencia tema, logo, domínio ou identidade visual como fonte oficial.
- Não substitui White-label.
- Não acessa banco interno de outro módulo.
- Não usa read model como banco compartilhado.
- Não guarda segredo bruto.
- Não exporta dado sensível sem autorização, finalidade, política, mascaramento, retenção e trilha.

Entidades principais
- BIWorkspace.
- BIDashboard.
- BIWidget.
- BIReport.
- BIReportTemplate.
- BIReportDefinition.
- BIReportSchedule.
- BIReportExecution.
- BIReportSnapshot.
- BIExport.
- BIExportRequest.
- BIExportLog.
- BIExportApproval.
- BIQuery.
- BIQueryDefinition.
- BIQueryResult.
- BIMetric.
- BIIndicator.
- BIKPI.
- BITrend.
- BIChart.
- BITableView.
- BIFilter.
- BIDimension.
- BIAggregation.
- BIDataSourceReference.
- BIReadModelSubscription.
- BIReadModelContract.
- BIAnalyticsReadModel.
- BIDataMart, apenas governado e autorizado.
- BIDataSnapshot.
- BIDataRetentionReference.
- BISensitiveDataView.
- BIMaskingPolicyReference.
- BIAccessLog.
- BIViewLog.
- BIDashboardShare.
- BIReportShare.
- BIAlertRule.
- BIInsight.
- BIAnomalyDetection.
- BIExternalConnectorReference.
- DataWarehouseReference, apenas como referência governada.
- DataLakeReference, apenas como referência governada.
- BIAuthorizationScope.
- BIDataFreshnessStatus.
- BIDataLineageRecord.
- BIDataQualityIndicator.

Eventos publicados
- BIDashboardCreated.
- BIDashboardUpdated.
- BIDashboardViewed.
- BIDashboardShared.
- BIDashboardShareRevoked.
- BIWidgetCreated.
- BIWidgetUpdated.
- BIWidgetViewed.
- BIReportCreated.
- BIReportUpdated.
- BIReportExecuted.
- BIReportExecutionFailed.
- BIReportViewed.
- BIReportSnapshotCreated.
- BIReportScheduled.
- BIReportScheduleCanceled.
- BIExportRequested.
- BIExportApproved.
- BIExportDenied.
- BIExportGenerated.
- BIExportFailed.
- BIExportDownloaded.
- BIExportExpired.
- BIExportRevoked.
- BIReadModelSubscribed.
- BIReadModelContractChanged.
- BIDataFreshnessChanged.
- BIDataQualityIssueDetected.
- BISensitiveDataViewed.
- BIUnmaskedDataViewed.
- BIMaskingApplied.
- BIUnauthorizedAccessAttempted.
- BIInsightGenerated.
- BIAnomalyDetected.
- BIKPIThresholdReached.

Eventos consumidos
- ModuleActivated.
- ModuleDeactivated.
- LicenseChanged.
- FeatureFlagChanged.
- PermissionGranted.
- PermissionRevoked.
- InheritanceChanged.
- ResourceReferenceCreated.
- ResourceReferenceUpdated.
- ResourceReferenceRevoked.
- OrganizationModuleAvailabilityUpdated.
- FinancialReadModelUpdated.
- AccessAnalyticsReadModelUpdated.
- CameraAnalyticsReadModelUpdated.
- AlarmAnalyticsReadModelUpdated.
- VisitorAnalyticsReadModelUpdated.
- ReservationAnalyticsReadModelUpdated.
- TicketAnalyticsReadModelUpdated.
- AnnouncementReadModelUpdated.
- NotificationAnalyticsReadModelUpdated.
- AutomationReadModelUpdated.
- MarketplaceAnalyticsReadModelUpdated.
- SupportAnalyticsReadModelUpdated.
- GatewayAnalyticsReadModelUpdated.
- DeviceAnalyticsReadModelUpdated.
- DataRetentionPolicyUpdated.
- DataMaskingPolicyUpdated.
- ConsentPolicyUpdated.
- SensitiveDataPolicyUpdated.
- DataExportPolicyUpdated.

APIs internas
- CreateBIDashboard.
- UpdateBIDashboard.
- GetBIDashboard.
- ListBIDashboards.
- RenderBIDashboard.
- ShareBIDashboard.
- RevokeBIDashboardShare.
- CreateBIWidget.
- UpdateBIWidget.
- RefreshBIWidgetData.
- CreateBIReportDefinition.
- UpdateBIReportDefinition.
- ExecuteBIReport.
- GetBIReportExecution.
- CreateBIReportSnapshot.
- CreateBIReportSchedule.
- UpdateBIReportSchedule.
- CancelBIReportSchedule.
- RequestBIReportDelivery.
- RequestBIExport.
- ApproveBIExport.
- DenyBIExport.
- GenerateBIExport.
- DownloadBIExport.
- RevokeBIExport.
- RegisterBIDataSourceReference.
- SubscribeBIReadModel.
- GetBIReadModelContract.
- CheckBIContractCompatibility.
- GetBIDataFreshnessStatus.
- ExecuteBIQuery.
- ValidateBIQueryScope.
- CreateBIMetric.
- UpdateBIMetric.
- CreateBIKPI.
- UpdateBIKPI.
- ConfigureBIAnomalyDetection.
- PublishBIAnalyticalEvent.
- LogBIView.
- LogBIExport.
- LogBIShare.

Integrações externas
- Ferramentas externas de BI somente por conector aprovado pelo Marketplace.
- Data warehouse governado somente por referência, contrato, política e autorização.
- Data lake governado somente por referência, contrato, política e autorização.
- Exportações CSV, XLSX, PDF ou JSON conforme política.
- Webhooks externos de relatório somente por contrato aprovado.
- Entrega externa por Notificações.

Dependências permitidas
- Core Platform.
- Herança e Permissões.
- Segurança e LGPD.
- Auditoria e Compliance.
- Notificações.
- White-label.
- Marketplace de Integrações.
- Organizações, apenas por read models ou resumos autorizados.
- Parceiros, apenas por read models ou resumos autorizados.
- Pessoas e Clientes, apenas por read models minimizados e autorizados.
- Unidades, Blocos, Áreas e Ambientes, apenas por read models ou referências autorizadas.
- Gateway Local / Mikrotik / Tunnel, apenas por GatewayAnalyticsReadModel autorizado.
- Dispositivos, apenas por DeviceAnalyticsReadModel autorizado.
- Controle de Acesso, apenas por AccessAnalyticsReadModel autorizado.
- Câmeras / VMS, apenas por CameraAnalyticsReadModel autorizado.
- Alarmes, apenas por AlarmAnalyticsReadModel autorizado.
- Financeiro, apenas por FinancialReadModel autorizado.
- Convites e Visitantes, apenas por VisitorAnalyticsReadModel autorizado.
- Reservas, apenas por ReservationAnalyticsReadModel autorizado.
- Tickets, apenas por TicketAnalyticsReadModel autorizado.
- Mural Informativo, apenas por AnnouncementReadModel autorizado.
- Automações, apenas por AutomationReadModel autorizado ou consumo de evento analítico permitido.
- Suporte e Operação, apenas por SupportAnalyticsReadModel autorizado.

Dependências proibidas
- Banco interno de qualquer módulo.
- Classes internas de outro módulo.
- Motor paralelo de autorização.
- Motor paralelo de permissões.
- Motor paralelo de auditoria.
- Motor paralelo de Segurança e LGPD.
- Motor financeiro.
- Motor de acesso físico.
- Motor de câmeras.
- Motor de alarmes.
- Motor de reservas.
- Motor de visitantes.
- Motor de tickets.
- Motor de notificações.
- Motor de automações.
- Motor de suporte.
- Stream, playback, clipe, snapshot ou evidência de vídeo como domínio próprio.
- GatewayCommand.
- DeviceDiagnostic oficial.
- NotificationRequest como domínio próprio.
- AutomationWorkflow.
- ComplianceCase.
- AuditEvidence.
- DataRetentionPolicy ou DataMaskingPolicy como domínio próprio.
- Segredo bruto.
- Exportação sensível sem autorização e política.
- Read model como banco compartilhado.
- Data lake livre sem governança.
- ETL invasivo.
- Ação crítica em modo fail-open.

Observações importantes
Relatórios / BI analisa dados por contratos autorizados. O módulo dono informa e preserva a fonte operacional. Core Platform autoriza. Segurança e LGPD define políticas de proteção. Auditoria registra e investiga quando necessário.

Frase consolidada:
BI analisa. Módulo dono informa. Core autoriza. Segurança protege. Auditoria registra.

4.19 White-label

Status: Aprovado.

Objetivo:
Representar o domínio oficial de identidade visual autorizada do NoduOS, permitindo tema, marca, logo, cores, paleta, tipografia, ícones, favicon, domínio customizado, subdomínio, assets, templates visuais, preview, publicação, rollback, fallback e experiência visual customizada por Master, Parceiro ou Organização, sempre dentro de tenant, contexto, escopo, licença, feature flag, permissão e AuthorizationDecision do Core Platform.

Usuários que acessam:
- Master.
- Parceiro.
- Organização.
- Operador/Gestor, de forma limitada.
- Cliente, apenas como consumidor da experiência visual renderizada.
- Segurança e LGPD, por contratos de política.
- Auditoria e Compliance, por trilhas autorizadas.
- Notificações, BI, Financeiro e outros módulos donos, por contratos de templates visuais.

Responsabilidades:
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
- PartnerWhiteLabelPermission, apenas como read model autorizado.
- OrganizationWhiteLabelSetting, como configuração visual escopada do White-label.
- WhiteLabelAuditTrail.
- WhiteLabelReadModel.
- WhiteLabelAnalyticsReadModel.

O que não faz:
- Não cria Tenant.
- Não cria Context.
- Não cria UserAccount.
- Não cria PermissionGrant.
- Não cria License.
- Não cria FeatureFlag.
- Não emite AuthorizationDecision final.
- Não altera regra operacional de módulo dono.
- Não acessa banco interno de outro módulo.
- Não substitui Core Platform, Master, Parceiros, Organizações, Financeiro, Notificações, Relatórios / BI, Segurança e LGPD, Auditoria e Compliance, Marketplace ou módulos operacionais.
- Não envia notificação multicanal.
- Não gera cobrança.
- Não gera relatório analítico.
- Não armazena segredo bruto.
- Não permite domínio sem validação.
- Não permite certificado sem referência segura.
- Não permite asset ou template inseguro.
- Não sobrescreve NoduOS como nome oficial raiz.

Eventos publicados:
- WhiteLabelProfileCreated.
- WhiteLabelProfileUpdated.
- WhiteLabelThemeCreated.
- WhiteLabelThemeUpdated.
- ThemeVersionPublished.
- ThemeVersionRolledBack.
- BrandAssetUploaded.
- BrandAssetValidated.
- BrandAssetRejected.
- BrandLogoChanged.
- BrandVisualTemplatePublished.
- CustomDomainRequested.
- CustomDomainDnsInstructionGenerated.
- CustomDomainVerified.
- CustomDomainActivated.
- CustomDomainSuspended.
- DomainCertificateReferenceLinked.
- BrandPreviewGenerated.
- BrandPublishingRequested.
- BrandPublishingSucceeded.
- BrandPublishingFailed.
- BrandFallbackApplied.
- WhiteLabelUnauthorizedAttemptDetected.
- WhiteLabelPolicyValidationFailed.
- WhiteLabelAuditTrailRecorded.
- WhiteLabelReadModelUpdated.

Eventos consumidos:
- TenantCreated.
- ContextCreated.
- LicenseChanged.
- FeatureFlagChanged.
- ModuleActivated.
- ModuleDeactivated.
- PermissionGranted.
- PermissionRevoked.
- PartnerWhiteLabelEnabled.
- PartnerWhiteLabelDisabled.
- PartnerScopeChanged.
- OrganizationCreated.
- OrganizationProfileUpdated.
- SecurityPolicyUpdated.
- UploadSecurityPolicyUpdated.
- DomainSecurityPolicyUpdated.
- CertificateSecurityPolicyUpdated.
- BrandSpoofingPolicyUpdated.
- PhishingProtectionPolicyUpdated.
- NotificationTemplateCompatibilityChanged.
- BIReportTemplateCompatibilityChanged.
- FinancialDocumentVisualTemplateRequested.
- MarketplaceConnectorVersionChanged.

APIs internas:
- WhiteLabelProfileAPI.
- WhiteLabelThemeAPI.
- ThemeVersionAPI.
- ThemeTokenAPI.
- ColorPaletteAPI.
- BrandAssetAPI.
- BrandTemplateAPI.
- BrandPreviewAPI.
- CustomDomainAPI.
- CertificateReferenceAPI.
- WhiteLabelScopeAPI.
- WhiteLabelRenderAPI.
- WhiteLabelReadModelAPI.
- WhiteLabelAuditAPI.

Integrações externas:
- Provedor DNS.
- Provedor de certificado.
- Storage de assets.
- CDN.
- Serviço de validação de imagem.
- Serviço de varredura de malware.
- Serviço de sanitização de SVG.
- Marketplace de Integrações para conectores homologados.
- Providers externos apenas por referência segura.

Dependências permitidas:
- Core Platform.
- Master.
- Parceiros.
- Organizações.
- Segurança e LGPD.
- Auditoria e Compliance.
- Relatórios / BI, apenas por read models autorizados.
- Notificações, apenas para templates visuais.
- Financeiro, apenas para templates visuais.
- Marketplace de Integrações, apenas por conectores homologados.
- Herança e Permissões, apenas por política avançada e sem decisão final.
- Suporte e Operação, para incidentes e sustentação.
- Módulos donos, apenas para aparência por contratos versionados.

Dependências proibidas:
- Banco interno de qualquer outro módulo.
- Classes internas de qualquer outro módulo.
- Segredo bruto.
- Certificado bruto.
- Chave privada bruta.
- Credencial bruta de provider.
- Motor paralelo de autorização.
- Motor paralelo de licença.
- Motor paralelo de feature flag.
- Motor paralelo de plano.
- Motor paralelo de auditoria.
- Motor paralelo de Segurança e LGPD.
- Motor paralelo de BI.
- Motor paralelo de Notificações.
- Motor financeiro.
- Motor operacional de módulo dono.
- Read model como banco compartilhado.
- Template como motor de regra de negócio.
- Fail-open em ação crítica.

Observação importante:
White-label personaliza. Core autoriza. Módulo dono preserva regra. Segurança protege. Auditoria registra.

4.20 Notificações
Status: Aprovado.

Objetivo
Gerenciar envio, entrega, preferências, templates, canais, filas, tentativas, retries, falhas, provedores, opt-in, opt-out, logs de entrega, rastreabilidade e relatórios próprios de mensagens.

Usuários que acessam
- Master.
- Parceiro.
- Organização.
- Operador/Gestor.
- Cliente.
- Auditoria e Compliance, por contrato autorizado.
- Relatórios / BI, por read models autorizados.
- Módulos comerciais solicitantes, por APIs, eventos e contratos.

Responsabilidades
- Receber NotificationRequest.
- Validar contexto, tenant, módulo ativo, escopo e autorização.
- Resolver destinatários por referências autorizadas.
- Aplicar preferências de notificação.
- Aplicar opt-in e opt-out.
- Aplicar exceção de alerta crítico autorizado.
- Gerenciar templates.
- Versionar templates.
- Gerenciar canais.
- Gerenciar providers.
- Gerenciar adapters de provider.
- Gerenciar filas.
- Gerenciar tentativas.
- Gerenciar retries.
- Registrar falhas.
- Registrar entregas.
- Registrar abertura e clique, quando permitido.
- Gerenciar webhooks de notificação.
- Manter delivery logs.
- Expor NotificationReadModel autorizado.
- Gerar relatórios próprios.
- Publicar eventos de ciclo de entrega.
- Proteger dados sensíveis.
- Registrar auditoria.

O que não faz
- Não cria Tenant.
- Não cria Context.
- Não cria UserAccount.
- Não emite AuthorizationDecision final.
- Não substitui Herança e Permissões.
- Não mantém PersonProfile ou ClientProfile.
- Não vira cadastro primário de pessoas.
- Não cria Unit, Block, Area ou Environment.
- Não substitui Organizações.
- Não substitui Parceiros.
- Não publica comunicado oficial.
- Não substitui Mural Informativo.
- Não gerencia tickets, SLA ou resolução.
- Não gera fatura, boleto, Pix, cartão, inadimplência ou recibo.
- Não cria convite, QR temporário ou check-in/check-out.
- Não cria agenda, disponibilidade, reserva ou no-show.
- Não abre porta, revoga credencial ou cria AccessEvent.
- Não cria live view, playback, clipe, snapshot ou evidência.
- Não arma, desarma, silencia ou dispara alarme.
- Não cria tunnel, rota ou diagnóstico técnico.
- Não cria DeviceRecord ou DeviceDiagnostic.
- Não executa workflow genérico.
- Não instala conector como domínio de Marketplace.
- Não substitui Relatórios / BI.
- Não acessa banco interno de outro módulo.

Entidades principais
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
- NotificationConsentReference.
- NotificationQueue.
- NotificationJob.
- NotificationAttempt.
- NotificationRetryPolicy.
- NotificationDeliveryLog.
- NotificationReadReceipt.
- NotificationOpenTracking.
- NotificationClickTracking.
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

Eventos publicados
- NotificationRequested.
- NotificationValidated.
- NotificationDenied.
- NotificationQueued.
- NotificationScheduled.
- NotificationCancelled.
- NotificationSent.
- NotificationDelivered.
- NotificationFailed.
- NotificationRetried.
- NotificationRetryExhausted.
- NotificationResent.
- NotificationRead.
- NotificationOpened.
- NotificationClicked.
- NotificationPreferenceChanged.
- NotificationOptInRegistered.
- NotificationOptOutRegistered.
- NotificationTemplateCreated.
- NotificationTemplateUpdated.
- NotificationTemplateApproved.
- NotificationProviderConfigured.
- NotificationProviderChanged.
- NotificationWebhookTriggered.
- NotificationSensitiveMessageSent.
- NotificationCriticalAlertSent.
- NotificationDeliveryLogExported.
- NotificationReadModelUpdated.

Eventos consumidos
- AnnouncementPublished.
- TicketCreated.
- TicketAssigned.
- TicketSlaNearBreach.
- TicketSlaBreached.
- InvoiceCreated.
- InvoiceDueSoon.
- InvoiceOverdue.
- PaymentConfirmed.
- PaymentFailed.
- VisitorInviteCreated.
- VisitorArrived.
- ReservationCreated.
- ReservationUpcoming.
- AccessDenied.
- DoorForced.
- CameraOffline.
- AlarmTriggered.
- PanicRegistered.
- GatewayOffline.
- TunnelDisconnected.
- DeviceOffline.
- DeviceHealthCritical.
- AutomationNotificationActionRequested.
- PersonConsentGranted.
- PersonConsentRevoked.
- LicenseChanged.
- FeatureFlagChanged.
- PermissionGranted.
- PermissionRevoked.
- DataRetentionPolicyUpdated.

APIs internas
- CreateNotificationRequest.
- ValidateNotificationRequest.
- CancelNotificationRequest.
- SendNotification.
- SendNotificationBatch.
- SendCriticalNotification.
- ResendNotification.
- ScheduleNotification.
- CreateNotificationDigest.
- CreateNotificationTemplate.
- UpdateNotificationTemplate.
- ApproveNotificationTemplate.
- GetNotificationPreference.
- UpdateNotificationPreference.
- RegisterNotificationOptIn.
- RegisterNotificationOptOut.
- RegisterNotificationEndpoint.
- ConfigureNotificationProvider.
- TestNotificationProvider.
- GetNotificationDeliveryLog.
- SearchNotificationDeliveryLogs.
- ExportNotificationDeliveryLogs.
- CreateNotificationWebhook.
- GetNotificationReadModel.

Integrações externas
- Provedores de e-mail.
- Provedores de SMS.
- Provedores de WhatsApp.
- Push notification provider.
- Webhooks externos.
- Conectores autorizados pelo Marketplace de Integrações.

Dependências permitidas
- Core Platform.
- Herança e Permissões.
- Pessoas e Clientes.
- Unidades, Blocos, Áreas e Ambientes.
- Organizações.
- Parceiros.
- Mural Informativo.
- Tickets.
- Financeiro.
- Convites e Visitantes.
- Reservas.
- Controle de Acesso.
- Câmeras / VMS.
- Alarmes.
- Gateway Local / Mikrotik / Tunnel.
- Dispositivos.
- Automações.
- Marketplace de Integrações.
- Segurança e LGPD.
- Auditoria e Compliance.
- Relatórios / BI, apenas por read models autorizados.
- White-label, apenas para identidade visual e templates autorizados.

Dependências proibidas
- Banco interno de outro módulo.
- Classes internas de outro módulo.
- Motor paralelo de autorização.
- Motor paralelo de cadastro de pessoa.
- Motor paralelo de workflow.
- Motor paralelo de marketplace.
- Motor paralelo de BI.
- Regra operacional de outro módulo.
- Segredo puro de provider sem cofre autorizado.

Observações importantes
NotificationPreference pertence a Notificações como preferência de entrega por canal, contexto, categoria, finalidade e frequência.
NotificationPreference não é cadastro primário de pessoa.
NotificationEndpoint é endpoint operacional de entrega, não fonte canônica de telefone, e-mail ou identidade.
NotificationRequest não transfere domínio do módulo solicitante.
Marketplace fornece conectores. Notificações governa uso operacional dos providers.
BI consome apenas NotificationReadModel autorizado.

Frase consolidada:
Módulo dono solicita. Notificações entrega. Core autoriza. Política influencia. Auditoria registra.

4.21 Automações

Status: Aprovado.

Objetivo
Representar o domínio operacional de workflows autorizados, gatilhos, condições, ações solicitadas, execuções, retries, falhas, pausas, aprovações humanas, templates, webhooks de automação, conectores autorizados, histórico operacional e read models próprios.

Usuários que acessam
- Master.
- Parceiro.
- Organização.
- Operador/Gestor.
- Cliente, apenas de forma limitada e quando autorizado.

Responsabilidades
- Workflows.
- Gatilhos.
- Condições.
- Ações solicitadas.
- Solicitações ao módulo dono.
- Execuções.
- Passos de execução.
- Resultados.
- Logs operacionais.
- Retry.
- Pausa por falha.
- Aprovação humana.
- Ações críticas.
- Templates.
- Versionamento de templates.
- Webhooks de automação.
- Uso autorizado de conectores do Marketplace.
- Relatórios próprios.
- Read models autorizados para BI.
- Histórico operacional.

O que não faz
- Não cria Tenant, Context ou UserAccount.
- Não emite AuthorizationDecision final.
- Não substitui Herança e Permissões.
- Não cadastra pessoas, clientes, unidades, organizações, dispositivos ou gateways como fonte primária.
- Não envia notificações diretamente.
- Não cria tickets como domínio próprio.
- Não gera cobranças.
- Não cria reservas.
- Não cria convites.
- Não abre portas.
- Não cria eventos de acesso.
- Não cria live view, playback, clipe, snapshot ou evidência.
- Não arma, desarma, silencia ou dispara alarmes.
- Não cria tunnel, rota ou diagnóstico técnico.
- Não cria DeviceRecord ou DeviceDiagnostic.
- Não instala conectores como Marketplace.
- Não acessa banco interno de outro módulo.
- Não vira módulo mestre da plataforma.

Entidades principais
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
- AutomationTargetStructure.
- AutomationTargetPersonReference.
- AutomationAudienceReference.
- AutomationWebhook.
- AutomationWebhookDeliveryLog.
- AutomationConnectorAction.
- AutomationManualRun.
- AutomationPause.
- AutomationFailureReason.
- AutomationCriticalAction.
- AutomationApprovalRequest.
- AutomationHumanApproval.
- AutomationReadModel.
- AutomationAuditTrail.

Eventos publicados
- AutomationWorkflowCreated.
- AutomationWorkflowUpdated.
- AutomationWorkflowActivated.
- AutomationWorkflowPaused.
- AutomationWorkflowDisabled.
- AutomationWorkflowArchived.
- AutomationExecutionStarted.
- AutomationExecutionCompleted.
- AutomationExecutionFailed.
- AutomationActionRequested.
- AutomationActionDenied.
- AutomationActionExecutedByOwnerModule.
- AutomationRetryExecuted.
- AutomationApprovalRequested.
- AutomationApprovalApproved.
- AutomationApprovalRejected.
- AutomationWebhookDeliveryFailed.
- AutomationReadModelUpdated.

Eventos consumidos
- Eventos autorizados de Core Platform.
- Eventos autorizados de Herança e Permissões.
- Eventos autorizados de Pessoas e Clientes.
- Eventos autorizados de Unidades, Blocos, Áreas e Ambientes.
- Eventos autorizados de Organizações.
- Eventos autorizados de Parceiros.
- Eventos autorizados de Notificações.
- Eventos autorizados de Mural Informativo.
- Eventos autorizados de Tickets.
- Eventos autorizados de Financeiro.
- Eventos autorizados de Convites e Visitantes.
- Eventos autorizados de Reservas.
- Eventos autorizados de Controle de Acesso.
- Eventos autorizados de Câmeras / VMS.
- Eventos autorizados de Alarmes.
- Eventos autorizados de Gateway Local / Mikrotik / Tunnel.
- Eventos autorizados de Dispositivos.
- Eventos autorizados de Marketplace de Integrações.
- Eventos autorizados de Segurança e LGPD.
- Eventos autorizados de Auditoria e Compliance.

APIs internas
- Workflow Management API.
- Trigger API.
- Condition API.
- Action API.
- Execution API.
- Template API.
- Approval API.
- Webhook API.
- Connector Action API.
- Read Model API.

Integrações externas
- Webhooks externos autorizados.
- Conectores do Marketplace de Integrações.
- APIs públicas externas autorizadas.
- Sistemas de RH, ERP, CRM, monitoramento, facilities e mensageria, quando permitido por contrato.

Dependências permitidas
- Core Platform.
- Herança e Permissões.
- Pessoas e Clientes, por referências autorizadas.
- Unidades, Blocos, Áreas e Ambientes, por StructureReference.
- Organizações, por contexto e resumos autorizados.
- Parceiros, por escopo autorizado.
- Notificações, por NotificationRequest.
- Mural Informativo, por eventos e ações autorizadas.
- Tickets, por ações autorizadas.
- Financeiro, por eventos financeiros e contratos autorizados.
- Convites e Visitantes, por eventos e ações autorizadas.
- Reservas, por eventos e ações autorizadas.
- Controle de Acesso, por eventos e ações autorizadas.
- Câmeras / VMS, por eventos e ações autorizadas.
- Alarmes, por eventos e ações autorizadas.
- Gateway Local / Mikrotik / Tunnel, por eventos e ações técnicas autorizadas.
- Dispositivos, por eventos e ações autorizadas.
- Marketplace de Integrações, por conectores autorizados.
- Relatórios / BI, por read models autorizados.
- Segurança e LGPD, por políticas.
- Auditoria e Compliance, por trilhas e investigações autorizadas.

Dependências proibidas
- Banco interno de qualquer módulo.
- Classes internas de outro módulo.
- Motores paralelos.
- Execução direta de domínio alheio.
- Credenciais brutas externas.
- SDK técnico de hardware fora dos módulos donos.
- Motor paralelo de autorização.
- Motor paralelo de permissões.
- Motor paralelo de notificações.
- Motor paralelo financeiro.
- Motor paralelo de controle de acesso.
- Motor paralelo de câmeras.
- Motor paralelo de alarmes.
- Motor paralelo de gateway.
- Motor paralelo de dispositivos.
- Motor paralelo de Marketplace.
- Motor paralelo de BI.

Observações importantes
Automações orquestra workflows autorizados.
O módulo dono executa a ação.
Core autoriza.
Auditoria registra.
AutomationAction não significa execução direta do domínio externo. Ela deve virar AutomationActionRequest para o módulo dono por contrato autorizado.
AutomationAuthorizationScope é escopo operacional e não substitui AuthorizationDecision do Core Platform.
AutomationReadModel é a fonte autorizada para BI, sem acesso ao banco interno de Automações.
Webhooks e conectores de Automações não substituem Marketplace de Integrações.


4.22 Marketplace de Integrações
Status: Aprovado.

Objetivo
Permitir expansão segura, auditável e plugável da plataforma com conectores, adapters, providers, versões, pacotes, templates, credenciais por referência, webhooks externos, compliance e governança de integrações externas.

Usuários que acessam
- Master.
- Parceiro.
- Organização.
- Operador/Gestor, de forma limitada.
- Segurança e LGPD.
- Auditoria e Compliance.
- Módulos consumidores por APIs internas, eventos e contratos.
- Cliente apenas para transparência e consentimento, quando aplicável.

Responsabilidades
- Catálogo de conectores.
- Publicação e aprovação.
- Certificação.
- Versionamento.
- Compatibilidade.
- Instalação lógica.
- Habilitação e desabilitação.
- Escopos de integração.
- Adapters.
- Providers.
- Pacotes.
- Templates.
- Credenciais por referência.
- Termos de uso.
- Política de privacidade de conectores.
- DPA.
- Avaliação de risco.
- Avaliação de segurança.
- Status técnico de conector.
- Logs técnicos de integração.
- Webhooks externos vinculados a conectores.
- Depreciação.
- Rollback.
- Bloqueio por segurança.

O que não faz
- Não cria Tenant.
- Não cria Context.
- Não cria UserAccount.
- Não emite AuthorizationDecision.
- Não decide License ou FeatureFlag oficial.
- Não substitui Core Platform.
- Não substitui Herança e Permissões.
- Não substitui Pessoas e Clientes.
- Não substitui Unidades, Blocos, Áreas e Ambientes.
- Não substitui Organizações.
- Não substitui Parceiros.
- Não substitui Gateway Local / Mikrotik / Tunnel.
- Não substitui Dispositivos.
- Não substitui Controle de Acesso.
- Não substitui Câmeras / VMS.
- Não substitui Alarmes.
- Não substitui Financeiro.
- Não substitui Convites e Visitantes.
- Não substitui Reservas.
- Não substitui Tickets.
- Não substitui Mural Informativo.
- Não substitui Notificações.
- Não substitui Automações.
- Não substitui White-label.
- Não substitui Relatórios / BI.
- Não acessa banco interno de outro módulo.
- Não guarda segredo bruto.
- Não executa regra operacional de módulos donos.

Entidades principais
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
- MarketplaceConnectorStatus.
- MarketplaceConnectorHealth.
- MarketplaceConnectorLog.
- MarketplaceConnectorEvent.
- ConnectorAuditTrail.
- ConnectorReadModel.

Eventos publicados
- MarketplaceConnectorPublished.
- MarketplaceConnectorInstalled.
- MarketplaceConnectorEnabled.
- MarketplaceConnectorDisabled.
- MarketplaceConnectorBlocked.
- MarketplaceConnectorDeprecated.
- MarketplaceConnectorScopeChanged.
- MarketplaceCredentialReferenceCreated.
- MarketplaceCredentialRotated.
- MarketplaceCredentialRevoked.
- MarketplaceWebhookConfigured.
- MarketplaceWebhookDeliveryFailed.
- MarketplaceConnectorHealthChanged.
- MarketplaceConnectorFailureDetected.
- MarketplaceConnectorRecovered.
- MarketplaceConnectorBlockedBySecurity.
- MarketplaceConnectorUsedByModule.
- MarketplaceConnectorLogExported.

Eventos consumidos
- LicenseChanged.
- FeatureFlagChanged.
- ModuleActivated.
- ModuleDeactivated.
- AuthorizationPolicyChanged.
- PartnerScopeChanged.
- OrganizationStatusChanged.
- PolicyUpdated.
- ConsentPolicyUpdated.
- DataRetentionPolicyUpdated.
- ConnectorSecurityRiskDetected.
- AuditExportRequested.

APIs internas
- MarketplaceCatalogAPI.
- MarketplacePublisherAPI.
- MarketplaceInstallationAPI.
- MarketplaceScopeAPI.
- MarketplaceCredentialAPI.
- MarketplaceAdapterAPI.
- MarketplaceWebhookAPI.
- MarketplaceHealthAPI.
- MarketplaceComplianceAPI.
- MarketplaceAuditAPI.

Integrações externas
- Hardware.
- Gateway.
- Dispositivos.
- Controle de Acesso.
- Câmeras / VMS.
- Alarmes.
- Financeiro.
- Comunicação.
- ERP.
- CRM.
- RH.
- Calendários.
- Suporte.
- BI.
- White-label.
- Webhooks.

Dependências permitidas
- Core Platform.
- Herança e Permissões.
- Segurança e LGPD.
- Auditoria e Compliance.
- Parceiros.
- Organizações.
- Módulos consumidores por contratos, APIs internas, eventos, webhooks internos e read models autorizados.

Dependências proibidas
- Bancos internos de outros módulos.
- Classes internas.
- Execução operacional de domínio alheio.
- Segredos brutos.
- Motor paralelo de autorização.
- Motor paralelo de licenças.
- Motor paralelo financeiro.
- Motor paralelo de notificações.
- Motor paralelo de automações.
- Motor paralelo de gateway.
- Motor paralelo de dispositivos.

Observação importante
Marketplace fornece conectores. Módulo dono governa e executa. Core autoriza. Segurança e LGPD protege. Auditoria registra.

4.23 Auditoria e Compliance

Status: Aprovado.

Objetivo
Consultar, filtrar, investigar, correlacionar, alertar, evidenciar, exportar e consolidar trilhas de auditoria, eventos críticos e evidências de conformidade da plataforma.

Auditoria e Compliance não substitui o Core Platform, Segurança e LGPD, Herança e Permissões, Relatórios / BI, Suporte e Operação ou os módulos donos das ações.

Usuários que acessam
- Master.
- Parceiro, dentro do escopo autorizado.
- Organização, dentro do próprio contexto.
- Operador/Gestor, de forma limitada.
- Cliente, apenas para histórico pessoal permitido.

Responsabilidades
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
- Busca e correlação de trilhas autorizadas.
- Exportação auditada.
- Alertas de compliance.
- Relatórios de conformidade.
- Preservação de cadeia de custódia.

O que não faz
- Não cria Tenant.
- Não cria Context.
- Não cria UserAccount.
- Não emite AuthorizationDecision final.
- Não substitui CoreAuditLog.
- Não altera log imutável.
- Não acessa banco interno de outro módulo.
- Não substitui Segurança e LGPD.
- Não define consentimento como fonte oficial.
- Não executa anonimização ou remoção LGPD.
- Não substitui Herança e Permissões.
- Não cria política de acesso.
- Não substitui Relatórios / BI.
- Não vira dashboard geral de negócio.
- Não substitui Suporte e Operação.
- Não resolve ticket ou incidente operacional.
- Não substitui módulos donos.
- Não abre porta.
- Não visualiza câmera como VMS.
- Não executa playback.
- Não gera fatura.
- Não envia notificação.
- Não executa automação.
- Não instala conector.
- Não cria credencial.
- Não expõe dado sensível sem finalidade, autorização, mascaramento e trilha.
- Não exporta evidência sem autorização e motivo.

Entidades principais
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
- ComplianceDashboard.
- InvestigationNote.
- InvestigationAttachment.
- InvestigationTimeline.
- ChainOfCustodyRecord.

Eventos publicados
- ComplianceCaseOpened.
- ComplianceCaseUpdated.
- ComplianceCaseClosed.
- ComplianceInvestigationStarted.
- ComplianceInvestigationClosed.
- AuditQueryExecuted.
- AuditTrailViewed.
- AuditSensitiveDataViewed.
- AuditEvidenceCreated.
- AuditEvidenceHashGenerated.
- AuditEvidenceHashVerified.
- ChainOfCustodyRecordCreated.
- AuditExportRequested.
- AuditExportApproved.
- AuditExportDenied.
- AuditExportGenerated.
- AuditExportDownloaded.
- ComplianceAlertRaised.
- ComplianceFindingCreated.
- ComplianceReportGenerated.

Eventos consumidos
Auditoria e Compliance consome eventos auditáveis autorizados do Core Platform, Segurança e LGPD, Herança e Permissões, Pessoas e Clientes, Organizações, Unidades, Parceiros, Gateway, Dispositivos, Controle de Acesso, Câmeras / VMS, Alarmes, Financeiro, Convites e Visitantes, Reservas, Tickets, Mural Informativo, Notificações, Automações, Marketplace e White-label.

APIs internas
- CreateComplianceCase.
- UpdateComplianceCase.
- GetComplianceCase.
- CloseComplianceCase.
- StartComplianceInvestigation.
- ExecuteAuditQuery.
- GetComplianceTrail.
- GenerateAuditTimeline.
- GenerateAuditCorrelation.
- CreateAuditEvidence.
- VerifyAuditEvidenceHash.
- GetEvidenceChainOfCustody.
- RequestAuditExport.
- ApproveAuditExport.
- DenyAuditExport.
- GenerateAuditExport.
- GetAuditExportLog.
- RaiseComplianceAlert.
- CreateComplianceFinding.
- GenerateComplianceReport.
- RequestAuditAccess.
- RegisterSensitiveDataView.

Dependências permitidas
- Core Platform.
- Segurança e LGPD.
- Herança e Permissões.
- Relatórios / BI, apenas por read models autorizados.
- Suporte e Operação, apenas para evidências autorizadas.
- Notificações, apenas para envio de alertas.
- Marketplace, apenas para integrações homologadas.
- Módulos donos, apenas por eventos, APIs internas, contratos e read models autorizados.

Dependências proibidas
- Banco interno de outro módulo.
- Classes internas de outro módulo.
- Motor paralelo de autorização.
- Motor paralelo de permissão.
- Motor paralelo de LGPD.
- Motor de BI.
- Motor de suporte.
- Motor de VMS.
- Motor de controle de acesso.
- Motor financeiro.
- Motor de automações.
- Motor de notificações.
- Motor de marketplace.
- Exportação sem autorização.
- Acesso a dado sensível sem finalidade, motivo, escopo e trilha.

Observações importantes
CoreAuditLog pertence ao Core Platform.
ComplianceTrail pertence à Auditoria e Compliance como trilha derivada.
RetentionPolicy pertence a Segurança e LGPD.
AuditRetentionPolicyReference pertence à Auditoria e Compliance apenas como referência.
Módulos donos mantêm seus logs operacionais e eventos originais.
Auditoria e Compliance investiga, correlaciona, evidencia, alerta e exporta com controle.

4.24 Segurança e LGPD

Status: Aprovado.

Objetivo

Governar políticas de segurança, privacidade, proteção de dados, consentimento, finalidade, base legal, retenção, minimização, mascaramento, anonimização, remoção, bloqueio de tratamento, portabilidade, oposição, classificação de sensibilidade, exportação sensível, segredos, credenciais, webhooks externos, risco de terceiros, subprocessadores e transferência internacional.

Segurança e LGPD define políticas de proteção e tratamento. Core autoriza. Herança influencia. Módulo dono executa. Auditoria evidencia.

Usuários que acessam

- Master.
- Parceiro autorizado.
- Organização autorizada.
- Operador/Gestor autorizado.
- Cliente/Titular.
- Auditoria e Compliance, por contrato.
- Suporte e Operação, por contrato.
- Módulos internos autorizados, por APIs, eventos e contratos.

Responsabilidades

- SecurityPolicy.
- PrivacyPolicy.
- DataProtectionPolicy.
- DataRetentionPolicy.
- DataMinimizationPolicy.
- DataMaskingPolicy.
- DataAccessPolicy.
- SensitiveDataPolicy.
- BiometricDataPolicy.
- ImageProtectionPolicy.
- VideoRetentionPolicy.
- FinancialDataProtectionPolicy.
- VisitorDataPolicy.
- TicketDataPolicy.
- IntegrationRiskPolicy.
- RemoteAccessPolicy.
- SecretManagementPolicy.
- CredentialRotationPolicy.
- WebhookSecurityPolicy.
- ExportControlPolicy.
- ConsentPolicy.
- ConsentRequirement.
- ConsentRecord.
- ConsentEvent.
- DataProcessingRecord.
- DataProcessingPurpose.
- LegalBasis.
- DataSubjectRequest.
- DataSensitivityClassification.
- DataClassificationRule.
- SensitiveDataView.
- MaskingRule.
- RetentionRule.
- RetentionSchedule.
- PrivacyImpactAssessment.
- SecurityRiskAssessment.
- ThirdPartyRiskAssessment.
- ConnectorRiskAssessment.
- DataProcessingAgreement.
- SubprocessorRecord.
- InternationalTransferRecord.
- BreachNotificationPolicy.
- SecurityIncidentPolicy, apenas como política.
- PrivacyIncidentPolicy, apenas como política.
- SecurityException.
- PrivacyException.
- SecurityPolicyEvaluation.
- PrivacyPolicyEvaluation.
- SecurityReadModel.
- PrivacyReadModel.

O que não faz

- Não cria Tenant, Context, UserAccount, PermissionGrant, AuthorizationDecision, License ou FeatureFlag.
- Não substitui Core Platform.
- Não substitui Herança e Permissões.
- Não substitui Auditoria e Compliance.
- Não cria ComplianceCase, ComplianceInvestigation ou AuditEvidence.
- Não substitui Relatórios / BI.
- Não substitui Suporte e Operação.
- Não executa regra operacional de módulos donos.
- Não abre porta, não exibe câmera, não cria clipe, não cobra, não cria convite, não cria reserva, não resolve ticket, não envia notificação e não executa automação.
- Não acessa banco interno de outro módulo.
- Não guarda segredo bruto em payload, evento, log, URL, read model ou exportação.

Eventos publicados

- SecurityPolicyCreated.
- SecurityPolicyUpdated.
- PrivacyPolicyCreated.
- PrivacyPolicyUpdated.
- DataRetentionPolicyUpdated.
- DataMaskingPolicyUpdated.
- ConsentRequirementCreated.
- ConsentGranted.
- ConsentRevoked.
- DataProcessingRecordCreated.
- DataSubjectRequestCreated.
- DataSubjectRequestCompleted.
- RetentionExecutionRequested.
- AnonymizationRequested.
- DeletionRequested.
- SensitiveDataUnmaskRequested.
- SecretManagementPolicyUpdated.
- CredentialRotationRequested.
- WebhookSecurityPolicyUpdated.
- ConnectorRiskAssessmentCreated.
- ConnectorRiskApproved.
- ConnectorRiskDenied.
- DataProcessingAgreementRegistered.
- SubprocessorRegistered.
- InternationalTransferRegistered.
- SecurityExceptionRequested.
- PrivacyExceptionRequested.
- PrivacyIncidentPolicyTriggered.
- SecurityIncidentPolicyTriggered.

Eventos consumidos

- TenantCreated.
- ContextCreated.
- AuthorizationDecisionIssued.
- LicenseChanged.
- FeatureFlagChanged.
- ModuleActivated.
- PermissionGranted.
- PermissionRevoked.
- PolicyCreated.
- PolicyUpdated.
- ComplianceAlertRaised.
- ComplianceFindingCreated.
- PersonProfileCreated.
- PersonConsentGranted.
- PersonConsentRevoked.
- OrganizationCreated.
- PartnerScopeChanged.
- StructureClassificationChanged.
- GatewayCredentialRotated.
- DeviceSecretRotated.
- AccessCredentialCreated.
- BiometricCredentialCreated.
- CameraViewed.
- VideoExportRequested.
- InvoiceCreated.
- VisitorCheckedIn.
- TicketAttachmentAdded.
- NotificationDeliveryLogCreated.
- AutomationExecutionRequested.
- MarketplaceConnectorInstalled.
- MarketplaceWebhookConfigured.

APIs internas

- SecurityPolicyAPI.
- PrivacyPolicyAPI.
- DataProtectionPolicyAPI.
- ConsentPolicyAPI.
- ConsentRecordAPI.
- DataProcessingRecordAPI.
- DataSubjectRequestAPI.
- RetentionPolicyAPI.
- MaskingPolicyAPI.
- SensitiveDataClassificationAPI.
- ExportControlPolicyAPI.
- SecretPolicyAPI.
- WebhookSecurityPolicyAPI.
- ThirdPartyRiskAPI.
- IncidentPolicyAPI.
- PrivacyReadModelAPI.

Integrações externas

- GRC externo, se habilitado pelo Marketplace.
- SIEM externo, se habilitado pelo Marketplace, Core e Segurança e LGPD.
- Cofre de segredos homologado.
- Assinatura digital ou carimbo temporal homologado.
- Serviço de DPO ou jurídico externo por contrato.
- Ferramenta de DPA por conector homologado.

Dependências permitidas

- Core Platform.
- Herança e Permissões.
- Auditoria e Compliance.
- Relatórios / BI, apenas por read models autorizados.
- Suporte e Operação, apenas por contrato.
- Notificações, apenas por contrato.
- Marketplace de Integrações.
- Módulos donos, apenas por APIs internas, eventos, contratos e read models autorizados.

Dependências proibidas

- Banco interno de qualquer outro módulo.
- Classes internas de outro módulo.
- Motor paralelo de autorização.
- Motor paralelo de permissões.
- Motor paralelo de auditoria.
- Motor de BI.
- Motor de suporte.
- Motor operacional de módulos donos.
- Segredo bruto.
- Exportação sem autorização.
- Tratamento sem finalidade.
- Falha aberta em ação crítica.

Observações importantes

Segurança e LGPD define políticas. Core autoriza. Herança influencia. Módulo dono executa. Auditoria evidencia.


4.25 Suporte e Operação
Status: Aprovado.

Objetivo
Representar o domínio oficial de suporte técnico, sustentação operacional da plataforma, incidentes de serviço, status operacional, janelas de manutenção, base de conhecimento, runbooks, diagnóstico assistido, suporte ao parceiro, suporte à organização e coordenação de resposta entre módulos donos.

Usuários que acessam
- Master.
- Equipe interna de suporte da plataforma.
- Parceiro Admin.
- Equipe técnica do parceiro.
- Organização Admin.
- Operador/Gestor, conforme permissão.
- Cliente, apenas de forma limitada e herdada quando permitido.

Responsabilidades
- SupportOperationCase.
- PlatformSupportCase.
- SupportIncident.
- ServiceIncident.
- TechnicalIncident.
- PartnerSupportRequest.
- OrganizationSupportRequest.
- SupportEscalation.
- SupportAssignment.
- SupportQueue.
- SupportPriority.
- SupportSeverity.
- SupportSLA.
- SupportSLAClock.
- SupportSLAEvent.
- SupportComment.
- SupportInternalNote.
- SupportAttachment.
- SupportSensitiveAttachmentReference.
- SupportDiagnosticRequest.
- SupportDiagnosticResult.
- SupportModuleActionRequest.
- SupportModuleActionResult.
- SupportRemoteAccessRequest.
- SupportRemoteAccessSessionReference.
- SupportRunbook.
- SupportPlaybook.
- KnowledgeBaseArticle.
- TroubleshootingGuide.
- KnownIssue.
- Workaround.
- RootCauseAnalysis.
- PostIncidentReview.
- MaintenanceWindow.
- ServiceStatus.
- ServiceStatusPage.
- ServiceComponent.
- ServiceDependency.
- OperationalAlert.
- SupportNotificationRequest.
- SupportReadModel.
- SupportAuditTrail.

O que não faz
- Não substitui Core Platform.
- Não cria Tenant, Context, UserAccount, PermissionGrant, License, FeatureFlag ou AuthorizationDecision.
- Não substitui Tickets.
- Não governa OperationalTicket.
- Não substitui Auditoria e Compliance.
- Não cria ComplianceCase, AuditEvidence ou cadeia de custódia.
- Não substitui Segurança e LGPD.
- Não define políticas de retenção, consentimento, finalidade, mascaramento, anonimização ou remoção.
- Não substitui Relatórios / BI.
- Não acessa banco interno de outro módulo.
- Não executa regra operacional de módulos donos.
- Não executa GatewayCommand ou DeviceDiagnostic como domínio próprio.
- Não abre portas.
- Não abre streams.
- Não gera boletos.
- Não cria convites.
- Não cria reservas.
- Não publica mural.
- Não envia notificação como domínio próprio.
- Não executa automação.
- Não instala conector.
- Não guarda segredo bruto.

Eventos publicados
- SupportOperationCaseCreated.
- SupportOperationCaseUpdated.
- SupportOperationCaseAssigned.
- SupportOperationCaseClosed.
- SupportOperationCaseEscalated.
- SupportCaseLinkedToOperationalTicket.
- SupportDiagnosticRequested.
- SupportDiagnosticResultReceived.
- SupportModuleActionRequested.
- SupportModuleActionResultReceived.
- SupportRemoteAccessRequested.
- SupportRemoteAccessApproved.
- SupportRemoteAccessSessionReferenced.
- ServiceIncidentCreated.
- ServiceIncidentResolved.
- ServiceStatusUpdated.
- MaintenanceWindowScheduled.
- KnowledgeBaseArticlePublished.
- KnownIssuePublished.
- WorkaroundPublished.
- RootCauseAnalysisCreated.
- PostIncidentReviewCreated.

Eventos consumidos
- OperationalTicketEscalatedToSupport.
- GatewayDisconnected.
- GatewayHealthChanged.
- GatewayDiagnosticCompleted.
- DeviceOffline.
- DeviceHealthChanged.
- DeviceDiagnosticCompleted.
- AccessExecutionFailed.
- CameraOffline.
- CameraStreamFailed.
- NotificationProviderDegraded.
- AutomationExecutionFailed.
- ConnectorUnavailable.
- PaymentProviderDegraded.
- SecurityPolicyUpdated.
- PrivacyPolicyUpdated.
- ComplianceAlertRaised.
- AuditEvidenceReferenced.

APIs internas
- SupportOperationCaseAPI.
- SupportCommentAPI.
- SupportAttachmentAPI.
- SupportSLAAPI.
- SupportDiagnosticAPI.
- SupportModuleActionAPI.
- SupportRemoteAccessAPI.
- ServiceIncidentAPI.
- ServiceStatusAPI.
- MaintenanceWindowAPI.
- KnowledgeBaseAPI.
- SupportRunbookAPI.
- SupportReadModelAPI.
- SupportConfigAPI.

Integrações externas
- Apenas por Marketplace de Integrações e contratos homologados.
- Status page externa, se autorizada.
- Observabilidade externa, se autorizada.
- Help desk externo, se autorizado.
- SIEM externo, se autorizado por Segurança e LGPD.
- Base de conhecimento externa, se autorizada.

Dependências permitidas
- Core Platform.
- Herança e Permissões.
- Segurança e LGPD.
- Auditoria e Compliance.
- Tickets, por referência e escalonamento.
- Parceiros.
- Organizações.
- Pessoas e Clientes, apenas identidade mínima autorizada.
- Unidades, Blocos, Áreas e Ambientes, apenas referência.
- Gateway, por contrato.
- Dispositivos, por contrato.
- Controle de Acesso, por contrato.
- Câmeras / VMS, por contrato.
- Alarmes, por contrato.
- Financeiro, por contrato.
- Convites e Visitantes, por contrato.
- Reservas, por contrato.
- Mural Informativo, por contrato.
- Notificações, por contrato.
- Automações, por contrato.
- Marketplace, por contrato.
- White-label, por contrato.
- Relatórios / BI, apenas por read models autorizados.

Dependências proibidas
- Banco interno de qualquer módulo.
- Classes internas de outro módulo.
- Motor paralelo de autorização.
- Motor paralelo de permissões.
- Motor paralelo de auditoria.
- Motor paralelo de LGPD.
- Motor paralelo de BI.
- Motor paralelo de Tickets.
- Motor operacional de módulos donos.
- Segredo bruto.
- Logs crus sem mascaramento.
- Ação crítica sem AuthorizationDecision.
- Comando crítico sem idempotency_key.
- Evento sem contrato versionado.
- Read model usado como banco compartilhado.
- Falha aberta em ação crítica.

Observações importantes
Suporte atende e coordena. Módulo dono executa e corrige. Segurança e LGPD define proteção. Auditoria e Compliance evidencia. Core autoriza.

5. Regra de alteração deste mapa
Qualquer mudança na lista de módulos deve gerar uma decisão oficial em 03_DECISOES_OFICIAIS.md.

Mudanças possíveis:
- Adicionar módulo.
- Remover módulo.
- Fundir módulos.
- Dividir módulo.
- Alterar responsabilidade.
- Alterar dependência.
- Alterar status.
- Alterar regra de comunicação entre módulos.
- Alterar regra de segurança, LGPD, auditoria, autorização ou contrato público.

6. Modelo para detalhamento futuro de cada módulo
Cada conversa de módulo deve usar este formato:

- Objetivo.
- Quem usa.
- Responsabilidades.
- O que este módulo não faz.
- Entidades principais.
- Telas necessárias.
- Regras de negócio.
- Permissões.
- Heranças.
- Eventos publicados.
- Eventos consumidos.
- APIs internas.
- Integrações externas.
- Logs e auditoria.
- Relatórios.
- Configurações por nível.
- Riscos de acoplamento.
- Dependências permitidas.
- Dependências proibidas.
- Pendências com outros módulos.
- Decisões novas.
- Resumo aprovado.
- Atualização para documentos centrais.
- Parâmetros de segurança e produção.
- Contratos públicos afetados.
- Regras de compatibilidade e versionamento.

7. Fronteiras consolidadas aplicadas nesta versão
Esta versão aplica as decisões consolidadas até Master e mantém a blindagem de produção entre módulos.

Decisões consolidadas nesta raiz:

- DEC-037 a DEC-039.
- DEC-042 a DEC-048.
- DEC-049 a DEC-057.
- DEC-058 a DEC-067.
- DEC-068 a DEC-080.
- DEC-081 a DEC-091.
- DEC-092 a DEC-104.
- DEC-105 a DEC-110.
- DEC-111 a DEC-115.
- DEC-116 a DEC-121.
- DEC-122 a DEC-127.
- DEC-128 a DEC-130.
- DEC-131 a DEC-138.
- DEC-139 a DEC-145.
- DEC-146 a DEC-153.

Regra consolidada:

Core cria contexto e autoriza. Parceiro implanta e administra dentro do escopo. Organizações representa o espaço conectado. Unidades mapeia a estrutura interna. Pessoas se vinculam ao espaço. Gateway conecta o mundo físico. Dispositivos governam equipamentos. Módulos comerciais executam recursos. Herança governa políticas. Segurança protege dados. Auditoria registra e evidencia.

8. Parâmetros de interação entre módulos em produção
Para evitar quebras quando os módulos forem produzidos, todo módulo deve obedecer aos seguintes parâmetros:

- Contratos públicos versionados para APIs internas, eventos, webhooks e read models.
- Compatibilidade retroativa para alterações aditivas.
- Nova versão obrigatória para mudanças incompatíveis.
- Idempotência obrigatória em comandos críticos.
- EventEnvelope obrigatório para eventos com correlation_id e causation_id.
- Outbox/inbox ou mecanismo equivalente para publicação e consumo confiável de eventos.
- Separação entre comando e evento: comando solicita execução; evento comunica fato ocorrido.
- AuthorizationDecision do Core Platform para ações sensíveis.
- Escopo específico por módulo para ações críticas, como AccessAuthorizationScope, GatewayAuthorizationScope, DeviceAuthorizationScope, CameraAuthorizationScope e escopos equivalentes.
- Fail-closed para ausência de autorização, contexto, escopo, política, licença ou feature flag em ações críticas.
- Read models autorizados sem transferência de domínio.
- Segredos e credenciais por referência segura.
- Logs operacionais no módulo dono e trilha investigativa em Auditoria e Compliance.
- Segurança e LGPD como fonte das políticas de proteção, retenção, consentimento, anonimização, remoção, minimização, finalidade e mascaramento.

9. Próxima etapa recomendada
Próxima etapa recomendada: Detalhamento de SecretReference.

Motivo: após consolidar Master, todos os módulos principais do NoduOS ficam planejados e registrados na raiz. O próximo trabalho deve revisar a arquitetura inteira, validar fronteiras cruzadas, alinhar versões, limpar duplicidades e preparar a base para contratos, eventos, APIs, banco de dados e telas.

A próxima decisão nova deve começar em DEC-193, salvo se o arquivo 03_DECISOES_OFICIAIS.md indicar outra última DEC.


10. Frase guia deste documento
O mapa de módulos impede que a plataforma vire um labirinto. Cada módulo tem fronteira, missão, contrato e blindagem de produção.


10. Atualização consolidada: nome oficial NoduOS
Status: Aprovado.

Esta atualização registra NoduOS como nome oficial do app e do projeto.

Impacto no Mapa de Módulos:
- Todos os módulos passam a pertencer oficialmente ao produto NoduOS.
- A descrição “SaaS Modular de Gestão de Espaços e Segurança Unificada” permanece como subtítulo funcional.
- Building OS Modular Platform permanece como conceito técnico e categoria arquitetural.
- A identidade visual oficial inicial fica associada ao conceito “Conexão que impulsiona” e à paleta #1F2937, #00A37A e #F1F3F5.

Decisão aplicada:
- DEC-154: Nome oficial do projeto e aplicativo como NoduOS.

Próxima decisão nova na raiz atual:
- DEC-184.


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


# Atualização consolidada: Master

Master representa o domínio oficial de governança superior da plataforma NoduOS.

Ele governa limites superiores, políticas administrativas, parceiros, módulos, planos comerciais, licenças comerciais, white-label, marketplace, integrações globais e visões administrativas autorizadas, sem substituir o Core Platform nem executar regra operacional de módulos donos.

Master não cria Tenant, Context, UserAccount, PermissionGrant, InheritanceGrant, AuthorizationDecision, License técnica, FeatureFlag técnica, ModuleRegistry, AuditLog base ou Event bus.

Master não substitui Parceiros, Organizações, White-label, Marketplace de Integrações, Financeiro, Relatórios / BI, Auditoria e Compliance, Segurança e LGPD, Suporte e Operação ou módulos donos operacionais.

Decisões aplicadas nesta atualização:

     • DEC-171: Master como domínio oficial de governança superior.
     • DEC-172: Master não substitui Core Platform.
     • DEC-173: Master governa parceiros sem substituir Parceiros.
     • DEC-174: Master governa módulos, planos e licenças por política superior.
     • DEC-175: Master consome visões globais sem acessar bancos internos.
     • DEC-176: Master governa White-label e Marketplace sem executar seus domínios.
     • DEC-177: Suspensão, bloqueio e restauração de parceiro são ações críticas idempotentes.
     • DEC-178: Master não executa regra operacional de módulos donos.

Próxima etapa recomendada: Detalhamento de SecretReference.

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

A raiz fica consolidada para avançar. O próximo trabalho recomendado não é novo módulo, mas Matriz Técnica de Permissões por Contrato, seguida da matriz de dados sensíveis por campo e do detalhamento de EventEnvelope v1, EvidenceReference e SecretReference.

# Catálogo técnico complementar: Contratos Públicos

Status: Aprovado como documento técnico raiz complementar.
Arquivo oficial: 05_CATALOGO_DE_CONTRATOS_PUBLICOS.md
Versão inicial do documento: 1.0.0
Versão base dos contratos: v1

Objetivo
Definir a malha pública de comunicação entre módulos antes de banco, endpoints finais, telas, integrações e implementação.

Responsabilidades do catálogo
- Declarar contratos públicos versionados por módulo.
- Separar API interna, comando, evento de fato ocorrido, evento de solicitação registrada, webhook e read model autorizado.
- Declarar contratos transversais como EventEnvelope v1, AuthorizationDecision, ResourceReference, SecretReference e EvidenceReference.
- Exigir owner_module único, versão, status, escopo, consumidores autorizados, permissões, dados sensíveis, retenção, auditoria, compatibilidade, descontinuação e fail-closed.
- Impedir read model como banco compartilhado.
- Impedir evento como comando disfarçado.
- Impedir segredo bruto em payload, evento, log, URL, read model, relatório, exportação ou configuração.

O que não faz
- Não cria módulo novo.
- Não cria banco de dados.
- Não cria endpoint final de framework.
- Não cria schema técnico final.
- Não cria tela.
- Não implementa adaptadores.
- Não altera fronteiras de módulo.

Observação importante
Cada módulo do mapa deve usar os contratos públicos do catálogo como fronteira técnica antes de detalhar banco, APIs finais, filas, telas ou integrações.

Próxima etapa recomendada: Detalhamento de SecretReference.

# Documento técnico complementar: Matriz Técnica de Permissões por Contrato

Status: Aprovado como documento técnico raiz complementar.
Arquivo oficial: 06_MATRIZ_TECNICA_PERMISSOES_POR_CONTRATO.md
Versão do documento: 1.0.1
Versão base dos contratos: v1
Última DEC consolidada: DEC-197
Próxima DEC livre: DEC-198

Objetivo
Definir, por contrato público do NoduOS, quem pode chamar ou consumir, em qual perfil, escopo, tenant, contexto, recurso, permissão conceitual e sob quais exigências de AuthorizationDecision, Segurança e LGPD, auditoria, idempotência, sensibilidade, mascaramento, retenção e fail-closed.

Responsabilidades da matriz
- Amarrar contrato público a perfil autorizado.
- Amarrar contrato público a permission_code conceitual.
- Definir consumidores autorizados por módulo.
- Definir escopo mínimo por contrato.
- Indicar contratos que exigem AuthorizationDecision do Core Platform.
- Indicar contratos que exigem módulo ativo, licença, entitlement e feature flag.
- Indicar contratos que exigem política de Segurança e LGPD.
- Indicar contratos que exigem auditoria.
- Indicar comandos críticos que exigem idempotency_key.
- Classificar sensibilidade e criticidade.
- Impedir uso de evento como comando.
- Impedir uso de read model como banco compartilhado.
- Impedir uso de contrato como atalho para executar domínio alheio.

O que não faz
- Não cria módulo novo.
- Não cria PermissionGrant.
- Não cria InheritanceGrant.
- Não emite AuthorizationDecision.
- Não substitui Core Platform.
- Não substitui Segurança e LGPD.
- Não substitui Auditoria e Compliance.
- Não substitui o módulo dono.
- Não cria banco de dados.
- Não cria endpoint final.
- Não cria schema técnico definitivo.
- Não cria tela.
- Não implementa filas, jobs ou adaptadores.

Regra importante
Permissão conceitual classifica o uso técnico do contrato. A autorização estrutural continua sendo do Core Platform por PermissionGrant, InheritanceGrant, ResourceReference, política, contexto, licença, feature flag e AuthorizationDecision.

Frase guia
Permissão limita o ator. Contrato limita o caminho. Core decide. Módulo dono executa. Auditoria registra.

Próxima etapa recomendada: Detalhamento de SecretReference.


# Documento técnico complementar: Matriz Técnica de Dados Sensíveis por Contrato

Status: Aprovado como documento técnico raiz complementar.
Arquivo oficial: 07_MATRIZ_TECNICA_DADOS_SENSIVEIS_POR_CONTRATO.md
Versão do documento: 1.0.1
Versão base dos contratos: v1
Última DEC consolidada: DEC-191
Próxima DEC livre: DEC-192

Objetivo
Definir, por contrato público do NoduOS, quais categorias de dados são permitidas, proibidas, mascaradas, referenciadas, retidas, expurgadas, anonimizadas, auditadas ou bloqueadas por fail-closed.

Responsabilidades da matriz
- Declarar dados permitidos e proibidos por contrato.
- Definir quando usar ResourceReference, EvidenceReference ou SecretReference.
- Definir contratos que exigem finalidade explícita, consentimento ou política equivalente.
- Definir contratos que exigem base legal ou política de Segurança e LGPD.
- Definir contratos que exigem mascaramento, retenção específica, descarte, expurgo ou anonimização.
- Definir contratos que exigem auditoria de visualização e auditoria de exportação.
- Definir contratos proibidos de transportar payload bruto.
- Impedir uso de BI, read models, eventos, webhooks e exportações como vazamento de dados sensíveis.

O que não faz
- Não cria módulo novo.
- Não cria banco de dados.
- Não cria schema técnico final.
- Não cria endpoint final.
- Não cria tela.
- Não implementa filas, workers, webhooks ou adaptadores.
- Não substitui Segurança e LGPD, Core Platform, Auditoria e Compliance ou módulo dono.

Regra importante
Contrato público só pode avançar para schema, endpoint, fila, evento, read model, exportação, BI ou integração se estiver compatível com a Matriz Técnica de Dados Sensíveis por Contrato.

Frase guia
Dado sensível exige finalidade. Contrato limita payload. Segurança protege. Core autoriza. Auditoria evidencia.

Próxima etapa recomendada: Detalhamento de SecretReference.

# Documento técnico raiz complementar: 08_DETALHAMENTO_EVENTENVELOPE_V1.md

Status: aprovado e consolidado.

O arquivo `08_DETALHAMENTO_EVENTENVELOPE_V1.md` passa a compor a raiz técnica do NoduOS como padrão oficial de eventos entre módulos.

Aplicação obrigatória:

- Eventos de fato ocorrido.
- Eventos de solicitação registrada.
- Eventos de alteração de estado.
- Eventos de ciclo de vida.
- Eventos técnicos de retry, dead-letter e quarentena.
- Eventos externos recebidos e normalizados.
- Eventos usados para read models, webhooks, auditoria, segurança, LGPD, BI, suporte e compliance.

Regra de fronteira:

- Módulo dono publica fato do seu domínio.
- Consumidor reage apenas por contrato autorizado.
- Evento não executa domínio alheio.
- Evento não transfere posse de dado, recurso, contrato ou regra.
- Read model derivado de evento permanece leitura autorizada, não banco compartilhado.

Estado da raiz após esta atualização:

- Última DEC consolidada: DEC-194.
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


## Atualização transversal no mapa de módulos

Esta atualização não cria módulo novo e não altera fronteiras existentes. Ela apenas consolida a forma como os módulos já aprovados devem referenciar evidências:

- Câmeras / VMS continua dona de vídeo, snapshot, clip, playback e evidência visual.
- Controle de Acesso continua dono dos fatos e resultados de acesso físico.
- Alarmes continua dono dos fatos de alarme, pânico, reconhecimento e resolução.
- Tickets continua dono dos registros operacionais e anexos de chamados.
- Suporte e Operação continua dono de sessões, incidentes, diagnóstico operacional e suporte remoto.
- Auditoria e Compliance preserva trilha, consulta auditável, cadeia de custódia e exportação probatória.
- Segurança e LGPD governa políticas de tratamento, retenção, máscara, descarte, expurgo, anonimização e incidentes.
- Nenhum módulo pode usar EvidenceReference como banco compartilhado, storage aberto ou atalho para obter prova bruta fora do módulo dono.


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


## Atualização transversal no mapa de módulos - SecretReference v1

Esta atualização não cria módulo novo e não altera fronteiras existentes. Ela apenas consolida como os módulos já aprovados devem tratar segredos:

- Core Platform emite AuthorizationDecision para ações críticas sobre SecretReference, sem virar cofre operacional de todos os módulos.
- Segurança e LGPD define políticas de proteção, acesso, rotação, revogação, expiração, incidente, retenção e fail-closed para segredos.
- Auditoria e Compliance audita ciclo de vida, uso, rotação, revogação, quarentena e incidentes sem visualizar segredo bruto.
- Gateway Local / Mikrotik / Tunnel continua dono das credenciais técnicas de conectividade, tunnel, agente e gateway.
- Dispositivos continua dono das credenciais técnicas do equipamento quando a credencial pertence ao cadastro técnico do dispositivo.
- Controle de Acesso, Câmeras / VMS e Alarmes mantêm segredos operacionais próprios quando o segredo pertence à execução específica do módulo.
- Financeiro mantém segredos de PSP, pagamento e webhooks financeiros conforme seu domínio.
- White-label mantém referência segura para chave privada/certificado de domínio customizado, sem guardar segredo em tema ou asset.
- Marketplace de Integrações mantém segredos de conectores, API keys, OAuth, client secrets e provedores externos conforme escopo autorizado.
- Notificações mantém credenciais de canais e provedores de entrega por SecretReference.
- Suporte e Operação usa tokens temporários por SecretReference, sem visualização humana de segredo bruto.

Nenhum módulo pode transformar SecretReference em banco compartilhado, configuração distribuída com segredo, read model de credenciais ou atalho para acessar domínio alheio.

## Observação transversal: AuthorizationDecision v1 e ResourceReference v1

Core Platform emite AuthorizationDecision v1 como decisão estrutural final para ações sensíveis, críticas, contextuais, modulares, temporais ou protegidas por política.

Core Platform governa o padrão transversal ResourceReference v1 para referências seguras, minimizadas, versionadas, escopadas e auditáveis de recursos entre módulos, sem assumir domínio operacional dos recursos dos módulos donos.

Nenhum módulo comercial pode emitir AuthorizationDecision final. Módulos comerciais devem solicitar decisão ao Core Platform quando ação, leitura, exportação, evidência, segredo, suporte, automação ou integração exigir autorização sensível ou crítica.

Quando um módulo precisar apontar recurso pertencente a outro módulo, deve usar ResourceReference v1, preservando owner_module, tenant, contexto, resource_type, resource_public_id, sensitivity_level, políticas aplicáveis e `no_domain_transfer = true`.

ResourceReference não transfere domínio, não concede permissão, não autoriza ação e não substitui API interna, evento, read model autorizado, EvidenceReference, SecretReference ou AuthorizationDecision.


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

# Atualização transversal: Blueprint técnico da aplicação

Data: 2026-06-27.
Decisão aplicada: DEC-197.
Arquivo técnico raiz: `13_BLUEPRINT_TECNICO_APLICACAO_NODUOS.md`.

O Blueprint técnico da aplicação passa a orientar a organização prática do repositório, apps, packages, módulos, backend, frontend, banco por domínio, migrations, contratos, eventos, workers, storage, auditoria, LGPD, observabilidade, testes e deploy.

Todos os módulos continuam independentes e donos dos próprios domínios. O Blueprint não cria domínio novo e não permite que o Core Platform execute regra operacional de módulos comerciais.

Nenhum módulo deve iniciar implementação sem declarar fronteira, contratos públicos, tenant/contexto, AuthorizationDecision quando aplicável, ResourceReference quando apontar recurso intermodular, EventEnvelope para eventos, auditoria, dados sensíveis, comportamento de falha e testes.

A organização recomendada é arquitetura modular distribuível, podendo iniciar como modular monolith com fronteiras fortes, preparada para separar workers, filas, gateway-agent, serviços críticos e integrações sem reescrever domínio.
