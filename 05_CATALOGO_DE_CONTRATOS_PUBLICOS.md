# CATÁLOGO DE CONTRATOS PÚBLICOS NODUOS

Projeto: NoduOS  
Descrição oficial: SaaS Modular de Gestão de Espaços e Segurança Unificada  
Conceito técnico: Sistema Operacional Modular para Espaços Físicos Conectados  
Conceito de marca: Conexão que impulsiona  
Tipo de documento: Catálogo técnico conceitual de contratos públicos versionados  
Versão do documento: 1.7.0
Versão base dos contratos: v1  
Data desta consolidação: 2026-06-27  
Status: Aprovado e atualizado com Blueprint Técnico da Aplicação e DEC-197
Última DEC consolidada na raiz: DEC-197  
Próxima DEC livre: DEC-198  

---

## 1. Natureza deste documento

Este documento consolida a primeira base técnica oficial de comunicação entre módulos do NoduOS. Ele não é implementação, banco de dados, migration, endpoint final de framework, tela ou criação de módulo novo. Ele define a malha pública de contratos que deve existir antes da modelagem técnica detalhada.

Frase guia:

Contrato protege módulo.  
Contexto protege tenant.  
Core protege autorização.  
Segurança e LGPD protege dados.  
Auditoria preserva prova.

Regra central:

Política influencia.  
Core decide.  
Módulo dono executa.  
Auditoria registra.

---

## 2. Fontes oficiais consideradas

1. 00_BIBLIA_DO_PROJETO.md
2. 01_MAPA_DE_MODULOS.md
3. 02_REGRAS_DE_ARQUITETURA.md
4. 03_DECISOES_OFICIAIS.md
5. 04_PROMPTS_DE_TRABALHO.md
6. IDENTIDADE_OFICIAL_NODUOS.md
7. RELATORIO_GERAL_CONSOLIDACAO_ARQUITETURA_NODUOS.txt
8. CANVA_FINAL_PLANEJAMENTO_GERAL_NODUOS.md.txt
9. README_PACOTE_FINAL_NODUOS_REVISAO_GERAL.md.txt

Regra de governança: o chat conversa, o documento manda.

---

## 3. Ajustes aplicados nesta consolidação

- Versão do documento definida como 1.0.0.
- Versão inicial de contratos definida como v1.
- Decisões novas preservadas como rascunho até aprovação.
- Política formal de versionamento e compatibilidade futura adicionada.
- Ciclo de vida oficial de contratos adicionado.
- Nomenclatura de contract_id padronizada.
- Eventos de solicitação registrada separados de execução.
- Read models autorizados reforçados como leitura sem transferência de domínio.
- Comandos críticos reforçados com idempotency_key.
- Fail-closed reforçado para contrato sensível sem contexto, autorização, política ou escopo.
- SecretReference e EvidenceReference reforçados como contratos transversais.
- Catálogo preservado como etapa anterior a banco, endpoints finais e telas.
- DEC-191 preservada como próxima decisão livre após a consolidação da Matriz Técnica de Permissões por Contrato.

---

## 4. Escopo

Inclui APIs internas, comandos, eventos de fato ocorrido, eventos de solicitação registrada, webhooks internos, webhooks externos, read models autorizados, contratos de política, autorização, evidência, exportação, análise, diagnóstico, integração, notificação, suporte, auditoria, segurança e LGPD.

Não inclui código, banco, tabelas, migrations, rotas finais, DTO final de linguagem específica, telas, layout ou implementação de adaptadores.

---

## 5. Política de versionamento futuro

### 5.1 Versão do documento

O documento usa MAJOR.MINOR.PATCH. MAJOR indica mudança estrutural incompatível; MINOR indica inclusão compatível; PATCH indica correção textual ou clareza sem impacto. Versão atual: 1.0.0.

### 5.2 Versão dos contratos

Cada contrato inicia em v1. Mudanças aditivas compatíveis podem manter a versão. Mudanças incompatíveis exigem nova versão, janela de compatibilidade, política de migração e descontinuação explícita.

### 5.3 Ciclo de vida

Status permitidos: Draft, Approved, Active, Deprecated, Superseded, Retired e Revoked. Contrato sem status não pode ser oficial.

### 5.4 Compatibilidade

Mudanças compatíveis não removem campo obrigatório, não mudam semântica, não alteram owner_module, não reduzem sensibilidade, não reduzem autorização e não quebram consumidores antigos. Eventos devem tolerar campos adicionais.

### 5.5 Depreciação

Contrato depreciado deve declarar data, motivo, substituto, janela de suporte, consumidores conhecidos, plano de retirada e critério de bloqueio fail-closed após retirada.

---

## 6. Tipos oficiais de contrato

1. API interna
2. Comando
3. Evento de fato ocorrido
4. Evento de solicitação registrada
5. Read model autorizado
6. Webhook interno
7. Webhook externo
8. Contrato de política
9. Contrato de autorização
10. Contrato de evidência
11. Contrato de exportação
12. Contrato analítico
13. Contrato de diagnóstico
14. Contrato de integração
15. Contrato de notificação
16. Contrato de suporte
17. Contrato de auditoria
18. Contrato de segurança e LGPD

Regra curta: comando solicita execução; evento de fato comunica fato consumado; evento de solicitação registrada comunica registro de pedido; read model permite leitura autorizada e não transfere domínio.

---

## 7. Metadados mínimos obrigatórios de todo contrato

- contract_id
- contract_name
- contract_type
- permission_code
- owner_module
- producer_module quando aplicável
- consumer_modules autorizados
- source_module quando aplicável
- target_module quando aplicável
- versão inicial
- status
- objetivo
- quando usar
- quando não usar
- permissões necessárias
- escopo
- tenant_id obrigatório ou não
- context_id obrigatório ou não
- actor_reference obrigatório ou não
- resource_reference obrigatório ou não
- AuthorizationDecision obrigatório ou não
- política de Segurança e LGPD aplicável
- dados sensíveis envolvidos
- data_categories_allowed
- data_categories_prohibited
- sensitive_data_level
- purpose_required
- legal_basis_or_policy_required
- masking_policy_reference
- retention_policy_reference
- resource_reference_required
- evidence_reference_required
- secret_reference_required
- raw_payload_allowed
- view_audit_required
- export_audit_required
- descarte_expurgo_anonimizacao
- nível de sensibilidade
- minimização
- mascaramento
- retenção
- auditoria
- idempotency_key
- correlation_id
- causation_id
- EventEnvelope v1
- outbox
- inbox/deduplicação
- retry
- dead-letter/quarentena
- comportamento em falha
- fail-closed
- compatibilidade
- descontinuação
- riscos de acoplamento
- observações

Contrato sem owner_module, versão, escopo, compatibilidade, dados sensíveis e comportamento de falha não pode ser aprovado.

---

## 8. Convenção de contract_id

Formato: NODUOS.<DOMINIO>.<NOME_PUBLICO>.v<N>. Exemplos: NODUOS.CORE.AUTH_DECISION.v1, NODUOS.ACCESS.EVENT.v1, NODUOS.CAMERA.EVIDENCE_REFERENCE.v1, NODUOS.SECURITY.RETENTION_POLICY.v1.

Regras: usar NODUOS como prefixo fixo; usar domínio público do módulo; não usar nomes de banco, tabela, framework, rota, ORM ou linguagem; não usar marca de fabricante no contrato principal quando a integração puder ser plugável.

---

## 9. Padrões transversais obrigatórios

### 9.1 EventEnvelope v1

Campos mínimos: event_id, event_name, contract_id, contract_version, source_module, owner_module, tenant_id, context_id, actor_reference, resource_reference, occurred_at, published_at, correlation_id, causation_id quando derivado, sensitivity_level, security_policy_reference, lgpd_policy_reference, payload minimizado e audit_reference.

Proibido em evento: segredo bruto, biometria bruta, vídeo bruto, imagem bruta sem política, documento completo quando referência bastar e dados sensíveis sem minimização.

### 9.2 Comando crítico

Campos mínimos: command_id, command_name, command_version, source_module, target_module, tenant_id, context_id, actor_reference, resource_reference, AuthorizationDecision, module_authorization_scope, idempotency_key, correlation_id, requested_at, expires_at quando aplicável, payload minimizado, expected_result_contract, failure_policy e audit_requirement.

### 9.3 API interna

Deve declarar api_contract_id, owner_module, allowed_callers, operation_type, permissions, tenant_id, context_id, AuthorizationDecision quando sensível, input_contract, output_contract, ErrorContract v1, paginação, filtros, auditoria, rate limit, compatibilidade e descontinuação.

### 9.4 Read model autorizado

Deve declarar read_model_id, owner_module, source_contracts, allowed_consumers, data_freshness, staleness_policy, tenant_id, context_id, scope, masking_policy, retention_policy, audit, no_domain_transfer e no_shared_database.

### 9.5 Webhook externo

Exige assinatura, rotação de segredo por SecretReference, escopo, tenant_id e context_id quando aplicável, rate limit, retry controlado, dead-letter quando crítico, política de terceiro, avaliação de Segurança e LGPD, auditoria e revogação.

### 9.6 EvidenceReference

Referencia prova sem expor bruto indevido. Deve seguir o detalhamento oficial do arquivo `09_DETALHAMENTO_EVIDENCEREFERENCE_V1.md`. Deve declarar evidence_reference_id, evidence_owner_module, custody_owner_module, source_event_reference quando aplicável, related_resource_reference, related_actor_reference, tenant_id, context_id, evidence_type, sensitivity_level, storage_reference segura, hash_reference quando exigir integridade, retention_policy_reference, masking_policy_reference, access_policy_reference, chain_of_custody_reference, audit_reference e export_control_policy.

EvidenceReference não é storage público, não é URL permanente, não é path bruto, não é bucket sensível, não é segredo, não é payload bruto e não autoriza visualização da prova sem decisão, finalidade, política, escopo e auditoria.

### 9.7 SecretReference

Representa segredo por referência segura. Deve declarar secret_reference_id, owner_module, vault_provider_reference, purpose, scope, rotation_policy, revocation_policy, access_policy, audit_policy, expires_at quando aplicável, last_rotated_at quando aplicável, sensitivity_level crítico e raw_secret_allowed igual a nunca.

### 9.8 ResourceReference

Permite autorização sem transferência de domínio. Deve declarar resource_reference_id, owner_module, resource_type, resource_public_id, tenant_id, context_id, structure_reference quando localizado fisicamente, sensitivity_level, allowed_actions, lifecycle_state, authorization_scope, display_label minimizado e no_domain_transfer sempre verdadeiro.

### 9.9 AuthorizationDecision

É emitida pelo Core Platform. Deve declarar authorization_decision_id, decision, issued_by, tenant_id, context_id, actor_reference, resource_reference, action, module_scope, policy_references, license_reference quando aplicável, feature_flag_reference quando aplicável, reason_code minimizado, expires_at em ações sensíveis, correlation_id e audit_reference. Nenhum módulo comercial emite AuthorizationDecision final.

---

## 10. Contratos transversais oficiais

- EventEnvelope v1
- ErrorContract v1
- PaginationContract v1
- FilterContract v1
- SortContract v1
- ActorReferenceContract v1
- TenantContextContract v1
- AuthorizationDecisionContract v1
- ResourceReferenceContract v1
- SecretReferenceContract v1
- FileAttachmentReferenceContract v1
- EvidenceReferenceContract v1
- AuditTrailReferenceContract v1
- DataSensitivityContract v1
- RetentionPolicyReferenceContract v1
- MaskingPolicyReferenceContract v1
- IdempotencyContract v1
- CorrelationContract v1
- DeadLetterContract v1
- ContractDeprecationPolicyContract v1

---

## 11. Catálogo de contratos por módulo

### 11.1 Core Platform

Owner module: Core Platform
Status: Aprovado para consolidação
Versão inicial: v1

| Contract ID | Contract name | Tipo sugerido | Observação |
|---|---|---|---|
| NODUOS.CORE.CORE_AUTHORIZATION.v1 | CoreAuthorizationContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.CORE.AUTHORIZATION_DECISION.v1 | AuthorizationDecisionContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.CORE.RESOURCE_REFERENCE.v1 | ResourceReferenceContract v1 | Contrato de autorização | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.CORE.CONTEXT.v1 | ContextContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.CORE.TENANT.v1 | TenantContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.CORE.USER_ACCOUNT_REFERENCE.v1 | UserAccountReferenceContract v1 | Contrato de autorização | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.CORE.PERMISSION_GRANT.v1 | PermissionGrantContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.CORE.INHERITANCE_GRANT.v1 | InheritanceGrantContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.CORE.MODULE_REGISTRY.v1 | ModuleRegistryContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.CORE.LICENSE_ENTITLEMENT.v1 | LicenseEntitlementContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.CORE.FEATURE_FLAG.v1 | FeatureFlagContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.CORE.EVENT_ENVELOPE.v1 | EventEnvelope v1 | Evento de fato ocorrido | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.CORE.CORE_AUDIT_TRAIL.v1 | CoreAuditTrailContract v1 | Contrato de auditoria | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.CORE.CORE_SECURITY_LOG.v1 | CoreSecurityLogContract v1 | Contrato de segurança e LGPD | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.CORE.CORE_API_CLIENT.v1 | CoreApiClientContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |

### 11.2 Master

Owner module: Master
Status: Aprovado para consolidação
Versão inicial: v1

| Contract ID | Contract name | Tipo sugerido | Observação |
|---|---|---|---|
| NODUOS.MASTER.MASTER_PARTNER_GOVERNANCE.v1 | MasterPartnerGovernanceContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.MASTER.MASTER_MODULE_RELEASE_POLICY.v1 | MasterModuleReleasePolicyContract v1 | Contrato de política | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.MASTER.MASTER_COMMERCIAL_PLAN_POLICY.v1 | MasterCommercialPlanPolicyContract v1 | Contrato de política | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.MASTER.MASTER_LICENSE_LIMIT_POLICY.v1 | MasterLicenseLimitPolicyContract v1 | Contrato de política | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.MASTER.MASTER_WHITE_LABEL_GOVERNANCE.v1 | MasterWhiteLabelGovernanceContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.MASTER.MASTER_MARKETPLACE_GOVERNANCE.v1 | MasterMarketplaceGovernanceContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.MASTER.MASTER_INTEGRATION_GOVERNANCE.v1 | MasterIntegrationGovernanceContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.MASTER.MASTER_GLOBAL_OVERVIEW_READ_MODEL.v1 | MasterGlobalOverviewReadModelContract v1 | Read model autorizado | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.MASTER.MASTER_SENSITIVE_EXPORT_REQUEST.v1 | MasterSensitiveExportRequestContract v1 | Comando | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |

### 11.3 Parceiros

Owner module: Parceiros
Status: Aprovado para consolidação
Versão inicial: v1

| Contract ID | Contract name | Tipo sugerido | Observação |
|---|---|---|---|
| NODUOS.PARTNER.PARTNER_RECORD.v1 | PartnerRecordContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.PARTNER.PARTNER_PROFILE.v1 | PartnerProfileContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.PARTNER.PARTNER_SCOPE.v1 | PartnerScopeContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.PARTNER.PARTNER_ORGANIZATION_PORTFOLIO_READ_MODEL.v1 | PartnerOrganizationPortfolioReadModelContract v1 | Read model autorizado | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.PARTNER.PARTNER_DEPLOYMENT_OVERVIEW_READ_MODEL.v1 | PartnerDeploymentOverviewReadModelContract v1 | Read model autorizado | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.PARTNER.PARTNER_GATEWAY_REGISTRATION_REQUEST.v1 | PartnerGatewayRegistrationRequestContract v1 | Comando | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.PARTNER.PARTNER_DEVICE_REGISTRATION_REQUEST.v1 | PartnerDeviceRegistrationRequestContract v1 | Comando | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.PARTNER.PARTNER_MODULE_AVAILABILITY_READ_MODEL.v1 | PartnerModuleAvailabilityReadModelContract v1 | Read model autorizado | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.PARTNER.PARTNER_PLAN_VIEW_READ_MODEL.v1 | PartnerPlanViewReadModelContract v1 | Read model autorizado | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.PARTNER.PARTNER_LICENSE_VIEW_READ_MODEL.v1 | PartnerLicenseViewReadModelContract v1 | Read model autorizado | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.PARTNER.PARTNER_WHITE_LABEL_PERMISSION_READ_MODEL.v1 | PartnerWhiteLabelPermissionReadModelContract v1 | Read model autorizado | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |

### 11.4 Organizações

Owner module: Organizações
Status: Aprovado para consolidação
Versão inicial: v1

| Contract ID | Contract name | Tipo sugerido | Observação |
|---|---|---|---|
| NODUOS.ORG.ORGANIZATION_RECORD.v1 | OrganizationRecordContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.ORG.ORGANIZATION_PROFILE.v1 | OrganizationProfileContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.ORG.ORGANIZATION_SETTINGS.v1 | OrganizationSettingsContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.ORG.ORGANIZATION_STATUS.v1 | OrganizationStatusContract v1 | Evento de fato ocorrido ou API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.ORG.ORGANIZATION_REFERENCE.v1 | OrganizationReferenceContract v1 | Contrato de autorização | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.ORG.ORGANIZATION_MODULE_AVAILABILITY_READ_MODEL.v1 | OrganizationModuleAvailabilityReadModelContract v1 | Read model autorizado | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.ORG.ORGANIZATION_STRUCTURE_SUMMARY_READ_MODEL.v1 | OrganizationStructureSummaryReadModelContract v1 | Read model autorizado | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.ORG.ORGANIZATION_PEOPLE_SUMMARY_READ_MODEL.v1 | OrganizationPeopleSummaryReadModelContract v1 | Read model autorizado | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.ORG.ORGANIZATION_GATEWAY_SUMMARY_READ_MODEL.v1 | OrganizationGatewaySummaryReadModelContract v1 | Read model autorizado | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.ORG.ORGANIZATION_DEVICE_SUMMARY_READ_MODEL.v1 | OrganizationDeviceSummaryReadModelContract v1 | Read model autorizado | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |

### 11.5 Pessoas e Clientes

Owner module: Pessoas e Clientes
Status: Aprovado para consolidação
Versão inicial: v1

| Contract ID | Contract name | Tipo sugerido | Observação |
|---|---|---|---|
| NODUOS.PEOPLE.PERSON_PROFILE.v1 | PersonProfileContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.PEOPLE.CLIENT_PROFILE.v1 | ClientProfileContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.PEOPLE.PERSON_DOCUMENT.v1 | PersonDocumentContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.PEOPLE.PERSON_CONTACT.v1 | PersonContactContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.PEOPLE.PERSON_CONSENT.v1 | PersonConsentContract v1 | Contrato de segurança e LGPD | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.PEOPLE.PERSON_UNIT_LINK.v1 | PersonUnitLinkContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.PEOPLE.PERSON_ORGANIZATION_LINK.v1 | PersonOrganizationLinkContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.PEOPLE.DEPENDENT_PROFILE.v1 | DependentProfileContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.PEOPLE.SERVICE_PROVIDER_PROFILE.v1 | ServiceProviderProfileContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.PEOPLE.PERSON_ACCOUNT_LINK_REFERENCE.v1 | PersonAccountLinkReferenceContract v1 | Contrato de autorização | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.PEOPLE.PUBLIC_PERSON_IDENTITY_READ_MODEL.v1 | PublicPersonIdentityReadModelContract v1 | Read model autorizado | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |

### 11.6 Unidades, Blocos, Áreas e Ambientes

Owner module: Unidades, Blocos, Áreas e Ambientes
Status: Aprovado para consolidação
Versão inicial: v1

| Contract ID | Contract name | Tipo sugerido | Observação |
|---|---|---|---|
| NODUOS.STRUCTURE.STRUCTURE_ROOT.v1 | StructureRootContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.STRUCTURE.PHYSICAL_STRUCTURE_NODE.v1 | PhysicalStructureNodeContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.STRUCTURE.STRUCTURE_HIERARCHY.v1 | StructureHierarchyContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.STRUCTURE.STRUCTURE_REFERENCE.v1 | StructureReferenceContract v1 | Contrato de autorização | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.STRUCTURE.STRUCTURAL_RESOURCE_ASSIGNMENT.v1 | StructuralResourceAssignmentContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.STRUCTURE.STRUCTURE_PATH_READ_MODEL.v1 | StructurePathReadModelContract v1 | Read model autorizado | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.STRUCTURE.STRUCTURE_VISIBILITY.v1 | StructureVisibilityContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.STRUCTURE.STRUCTURE_RESERVABLE_FLAG.v1 | StructureReservableFlagContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |

### 11.7 Herança e Permissões

Owner module: Herança e Permissões
Status: Aprovado para consolidação
Versão inicial: v1

| Contract ID | Contract name | Tipo sugerido | Observação |
|---|---|---|---|
| NODUOS.POLICY.ADVANCED_POLICY.v1 | AdvancedPolicyContract v1 | Contrato de política | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.POLICY.POLICY_CONDITION.v1 | PolicyConditionContract v1 | Contrato de política | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.POLICY.POLICY_EFFECT.v1 | PolicyEffectContract v1 | Contrato de política | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.POLICY.POLICY_SCOPE.v1 | PolicyScopeContract v1 | Contrato de política | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.POLICY.DELEGATION_RULE.v1 | DelegationRuleContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.POLICY.POLICY_EXCEPTION.v1 | PolicyExceptionContract v1 | Contrato de política | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.POLICY.EFFECTIVE_PERMISSION_READ_MODEL.v1 | EffectivePermissionReadModelContract v1 | Read model autorizado | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.POLICY.ACCESS_SIMULATION.v1 | AccessSimulationContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.POLICY.POLICY_EVALUATION.v1 | PolicyEvaluationContract v1 | Contrato de política | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.POLICY.PERMISSION_CONFLICT.v1 | PermissionConflictContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |

### 11.8 Gateway Local / Mikrotik / Tunnel

Owner module: Gateway Local / Mikrotik / Tunnel
Status: Aprovado para consolidação
Versão inicial: v1

| Contract ID | Contract name | Tipo sugerido | Observação |
|---|---|---|---|
| NODUOS.GATEWAY.GATEWAY_RECORD.v1 | GatewayRecordContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.GATEWAY.GATEWAY_AGENT.v1 | GatewayAgentContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.GATEWAY.GATEWAY_CREDENTIAL_REFERENCE.v1 | GatewayCredentialReferenceContract v1 | Contrato de segurança e LGPD | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.GATEWAY.TUNNEL_SESSION.v1 | TunnelSessionContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.GATEWAY.GATEWAY_HEALTH_READ_MODEL.v1 | GatewayHealthReadModelContract v1 | Read model autorizado | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.GATEWAY.GATEWAY_DIAGNOSTIC.v1 | GatewayDiagnosticContract v1 | Contrato de diagnóstico | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.GATEWAY.GATEWAY_COMMAND.v1 | GatewayCommandContract v1 | Comando | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.GATEWAY.GATEWAY_COMMAND_RESULT.v1 | GatewayCommandResultContract v1 | Evento de fato ocorrido | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.GATEWAY.GATEWAY_DEVICE_DISCOVERY.v1 | GatewayDeviceDiscoveryContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.GATEWAY.GATEWAY_DEVICE_REACHABILITY_READ_MODEL.v1 | GatewayDeviceReachabilityReadModelContract v1 | Read model autorizado | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.GATEWAY.GATEWAY_AUTHORIZATION_SCOPE.v1 | GatewayAuthorizationScopeContract v1 | Contrato de autorização | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.GATEWAY.GATEWAY_TECHNICAL_LOG.v1 | GatewayTechnicalLogContract v1 | Contrato de auditoria | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |

### 11.9 Dispositivos

Owner module: Dispositivos
Status: Aprovado para consolidação
Versão inicial: v1

| Contract ID | Contract name | Tipo sugerido | Observação |
|---|---|---|---|
| NODUOS.DEVICE.DEVICE_RECORD.v1 | DeviceRecordContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.DEVICE.DEVICE_REFERENCE.v1 | DeviceReferenceContract v1 | Contrato de autorização | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.DEVICE.DEVICE_IDENTITY.v1 | DeviceIdentityContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.DEVICE.DEVICE_CAPABILITY.v1 | DeviceCapabilityContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.DEVICE.DEVICE_HEALTH_READ_MODEL.v1 | DeviceHealthReadModelContract v1 | Read model autorizado | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.DEVICE.DEVICE_STATUS_READ_MODEL.v1 | DeviceStatusReadModelContract v1 | Read model autorizado | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.DEVICE.DEVICE_DIAGNOSTIC.v1 | DeviceDiagnosticContract v1 | Contrato de diagnóstico | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.DEVICE.DEVICE_TELEMETRY.v1 | DeviceTelemetryContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.DEVICE.DEVICE_LIFECYCLE.v1 | DeviceLifecycleContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.DEVICE.DEVICE_CREDENTIAL_REFERENCE.v1 | DeviceCredentialReferenceContract v1 | Contrato de segurança e LGPD | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.DEVICE.DEVICE_AUTHORIZATION_SCOPE.v1 | DeviceAuthorizationScopeContract v1 | Contrato de autorização | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.DEVICE.DEVICE_MAINTENANCE_RECORD.v1 | DeviceMaintenanceRecordContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |

### 11.10 Controle de Acesso

Owner module: Controle de Acesso
Status: Aprovado para consolidação
Versão inicial: v1

| Contract ID | Contract name | Tipo sugerido | Observação |
|---|---|---|---|
| NODUOS.ACCESS.ACCESS_POINT.v1 | AccessPointContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.ACCESS.ACCESS_CREDENTIAL.v1 | AccessCredentialContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.ACCESS.ACCESS_RULE.v1 | AccessRuleContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.ACCESS.ACCESS_POLICY_BINDING.v1 | AccessPolicyBindingContract v1 | Contrato de política | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.ACCESS.ACCESS_SCHEDULE.v1 | AccessScheduleContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.ACCESS.ACCESS_ATTEMPT_EVENT.v1 | AccessAttemptEventContract v1 | Evento de fato ocorrido | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.ACCESS.ACCESS_EVENT.v1 | AccessEventContract v1 | Evento de fato ocorrido | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.ACCESS.ACCESS_EXECUTION_COMMAND.v1 | AccessExecutionCommandContract v1 | Comando | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.ACCESS.ACCESS_EXECUTION_RESULT.v1 | AccessExecutionResultContract v1 | Evento de fato ocorrido | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.ACCESS.ACCESS_AUTHORIZATION_SCOPE.v1 | AccessAuthorizationScopeContract v1 | Contrato de autorização | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.ACCESS.ACCESS_OFFLINE_POLICY.v1 | AccessOfflinePolicyContract v1 | Contrato de política | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.ACCESS.ACCESS_DEVICE_BINDING.v1 | AccessDeviceBindingContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |

### 11.11 Câmeras / VMS

Owner module: Câmeras / VMS
Status: Aprovado para consolidação
Versão inicial: v1

| Contract ID | Contract name | Tipo sugerido | Observação |
|---|---|---|---|
| NODUOS.CAMERA.CAMERA_RESOURCE.v1 | CameraResourceContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.CAMERA.CAMERA_STREAM_ACCESS.v1 | CameraStreamAccessContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.CAMERA.CAMERA_LIVE_VIEW_REQUEST.v1 | CameraLiveViewRequestContract v1 | Comando | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.CAMERA.CAMERA_PLAYBACK_REQUEST.v1 | CameraPlaybackRequestContract v1 | Comando | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.CAMERA.CAMERA_CLIP.v1 | CameraClipContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.CAMERA.CAMERA_SNAPSHOT.v1 | CameraSnapshotContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.CAMERA.CAMERA_EVIDENCE_REFERENCE.v1 | CameraEvidenceReferenceContract v1 | Contrato de evidência | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.CAMERA.CAMERA_AUTHORIZATION_SCOPE.v1 | CameraAuthorizationScopeContract v1 | Contrato de autorização | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.CAMERA.CAMERA_ANALYTICS_READ_MODEL.v1 | CameraAnalyticsReadModelContract v1 | Read model autorizado | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.CAMERA.VIDEO_RETENTION_POLICY_BINDING.v1 | VideoRetentionPolicyBindingContract v1 | Contrato de política | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |

### 11.12 Alarmes

Owner module: Alarmes
Status: Aprovado para consolidação
Versão inicial: v1

| Contract ID | Contract name | Tipo sugerido | Observação |
|---|---|---|---|
| NODUOS.ALARM.ALARM_PANEL.v1 | AlarmPanelContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.ALARM.ALARM_ZONE.v1 | AlarmZoneContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.ALARM.ALARM_SENSOR.v1 | AlarmSensorContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.ALARM.ALARM_ARMING_STATE.v1 | AlarmArmingStateContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.ALARM.ALARM_EVENT.v1 | AlarmEventContract v1 | Evento de fato ocorrido | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.ALARM.ALARM_TRIGGER_EVENT.v1 | AlarmTriggerEventContract v1 | Evento de fato ocorrido | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.ALARM.PANIC_EVENT.v1 | PanicEventContract v1 | Evento de fato ocorrido | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.ALARM.ALARM_ESCALATION.v1 | AlarmEscalationContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.ALARM.ALARM_ACKNOWLEDGEMENT.v1 | AlarmAcknowledgementContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.ALARM.ALARM_RESOLUTION.v1 | AlarmResolutionContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.ALARM.ALARM_AUTHORIZATION_SCOPE.v1 | AlarmAuthorizationScopeContract v1 | Contrato de autorização | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.ALARM.ALARM_ANALYTICS_READ_MODEL.v1 | AlarmAnalyticsReadModelContract v1 | Read model autorizado | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |

### 11.13 Financeiro

Owner module: Financeiro
Status: Aprovado para consolidação
Versão inicial: v1

| Contract ID | Contract name | Tipo sugerido | Observação |
|---|---|---|---|
| NODUOS.FINANCE.INVOICE.v1 | InvoiceContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.FINANCE.CHARGE.v1 | ChargeContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.FINANCE.PAYMENT.v1 | PaymentContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.FINANCE.PAYMENT_STATUS.v1 | PaymentStatusContract v1 | Evento de fato ocorrido ou API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.FINANCE.RECEIPT.v1 | ReceiptContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.FINANCE.OVERDUE_EVENT.v1 | OverdueEventContract v1 | Evento de fato ocorrido | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.FINANCE.FINANCIAL_AGREEMENT.v1 | FinancialAgreementContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.FINANCE.COMMISSION.v1 | CommissionContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.FINANCE.SPLIT.v1 | SplitContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.FINANCE.TRANSFER.v1 | TransferContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.FINANCE.FINANCIAL_READ_MODEL.v1 | FinancialReadModelContract v1 | Read model autorizado | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.FINANCE.FINANCIAL_RESTRICTION_SIGNAL.v1 | FinancialRestrictionSignalContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |

### 11.14 Convites e Visitantes

Owner module: Convites e Visitantes
Status: Aprovado para consolidação
Versão inicial: v1

| Contract ID | Contract name | Tipo sugerido | Observação |
|---|---|---|---|
| NODUOS.VISITOR.VISITOR_INVITE.v1 | VisitorInviteContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.VISITOR.TEMPORARY_VISITOR_PROFILE.v1 | TemporaryVisitorProfileContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.VISITOR.TEMPORARY_QR_CODE.v1 | TemporaryQRCodeContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.VISITOR.VISIT_WINDOW.v1 | VisitWindowContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.VISITOR.VISIT_APPROVAL.v1 | VisitApprovalContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.VISITOR.VISITOR_CHECK_IN.v1 | VisitorCheckInContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.VISITOR.VISITOR_CHECK_OUT.v1 | VisitorCheckOutContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.VISITOR.VISITOR_ACCESS_REFERENCE.v1 | VisitorAccessReferenceContract v1 | Contrato de autorização | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.VISITOR.VISITOR_ANALYTICS_READ_MODEL.v1 | VisitorAnalyticsReadModelContract v1 | Read model autorizado | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |

### 11.15 Tickets

Owner module: Tickets
Status: Aprovado para consolidação
Versão inicial: v1

| Contract ID | Contract name | Tipo sugerido | Observação |
|---|---|---|---|
| NODUOS.TICKET.OPERATIONAL_TICKET.v1 | OperationalTicketContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.TICKET.TICKET_COMMENT.v1 | TicketCommentContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.TICKET.TICKET_ATTACHMENT_REFERENCE.v1 | TicketAttachmentReferenceContract v1 | Contrato de autorização | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.TICKET.TICKET_SLA.v1 | TicketSLAContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.TICKET.TICKET_ESCALATION.v1 | TicketEscalationContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.TICKET.TICKET_RESOLUTION.v1 | TicketResolutionContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.TICKET.TICKET_REOPEN.v1 | TicketReopenContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.TICKET.TICKET_LINKED_RESOURCE_REFERENCE.v1 | TicketLinkedResourceReferenceContract v1 | Contrato de autorização | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.TICKET.TICKET_ANALYTICS_READ_MODEL.v1 | TicketAnalyticsReadModelContract v1 | Read model autorizado | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |

### 11.16 Mural Informativo

Owner module: Mural Informativo
Status: Aprovado para consolidação
Versão inicial: v1

| Contract ID | Contract name | Tipo sugerido | Observação |
|---|---|---|---|
| NODUOS.MURAL.ANNOUNCEMENT.v1 | AnnouncementContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.MURAL.ANNOUNCEMENT_AUDIENCE.v1 | AnnouncementAudienceContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.MURAL.ANNOUNCEMENT_ATTACHMENT_REFERENCE.v1 | AnnouncementAttachmentReferenceContract v1 | Contrato de autorização | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.MURAL.ANNOUNCEMENT_ACKNOWLEDGEMENT.v1 | AnnouncementAcknowledgementContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.MURAL.ANNOUNCEMENT_POLL.v1 | AnnouncementPollContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.MURAL.ANNOUNCEMENT_READ_MODEL.v1 | AnnouncementReadModelContract v1 | Read model autorizado | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.MURAL.ANNOUNCEMENT_ARCHIVED_EVENT.v1 | AnnouncementArchivedEventContract v1 | Evento de fato ocorrido | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |

### 11.17 Reservas

Owner module: Reservas
Status: Aprovado para consolidação
Versão inicial: v1

| Contract ID | Contract name | Tipo sugerido | Observação |
|---|---|---|---|
| NODUOS.RESERVATION.RESERVABLE_RESOURCE.v1 | ReservableResourceContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.RESERVATION.RESERVATION.v1 | ReservationContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.RESERVATION.AVAILABILITY_QUERY.v1 | AvailabilityQueryContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.RESERVATION.RESERVATION_HOLD.v1 | ReservationHoldContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.RESERVATION.RESERVATION_APPROVAL.v1 | ReservationApprovalContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.RESERVATION.RESERVATION_CANCELLATION.v1 | ReservationCancellationContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.RESERVATION.RESERVATION_CHECK_IN.v1 | ReservationCheckInContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.RESERVATION.RESERVATION_CHECK_OUT.v1 | ReservationCheckOutContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.RESERVATION.RESERVATION_NO_SHOW.v1 | ReservationNoShowContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.RESERVATION.RESERVATION_ACCESS_WINDOW.v1 | ReservationAccessWindowContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.RESERVATION.RESERVATION_CHARGE_REQUEST.v1 | ReservationChargeRequestContract v1 | Comando | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.RESERVATION.RESERVATION_GUEST_LIST_REFERENCE.v1 | ReservationGuestListReferenceContract v1 | Contrato de autorização | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.RESERVATION.RESERVATION_ANALYTICS_READ_MODEL.v1 | ReservationAnalyticsReadModelContract v1 | Read model autorizado | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |

### 11.18 Relatórios / BI

Owner module: Relatórios / BI
Status: Aprovado para consolidação
Versão inicial: v1

| Contract ID | Contract name | Tipo sugerido | Observação |
|---|---|---|---|
| NODUOS.BI.BI_WORKSPACE.v1 | BIWorkspaceContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.BI.BI_DASHBOARD.v1 | BIDashboardContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.BI.BI_WIDGET.v1 | BIWidgetContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.BI.BI_REPORT.v1 | BIReportContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.BI.BI_REPORT_TEMPLATE.v1 | BIReportTemplateContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.BI.BI_REPORT_SCHEDULE.v1 | BIReportScheduleContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.BI.BI_EXPORT_REQUEST.v1 | BIExportRequestContract v1 | Comando | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.BI.BI_EXPORT_LOG.v1 | BIExportLogContract v1 | Contrato de exportação | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.BI.BI_READ_MODEL_SUBSCRIPTION.v1 | BIReadModelSubscriptionContract v1 | Read model autorizado | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.BI.BI_ANALYTICS_READ_MODEL.v1 | BIAnalyticsReadModelContract v1 | Read model autorizado | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.BI.BI_KPI.v1 | BIKPIContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.BI.BI_INSIGHT.v1 | BIInsightContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.BI.BI_ANOMALY_DETECTION.v1 | BIAnomalyDetectionContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |

### 11.19 White-label

Owner module: White-label
Status: Aprovado para consolidação
Versão inicial: v1

| Contract ID | Contract name | Tipo sugerido | Observação |
|---|---|---|---|
| NODUOS.WL.WHITE_LABEL_PROFILE.v1 | WhiteLabelProfileContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.WL.WHITE_LABEL_THEME.v1 | WhiteLabelThemeContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.WL.THEME_TOKEN.v1 | ThemeTokenContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.WL.COLOR_PALETTE.v1 | ColorPaletteContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.WL.BRAND_ASSET_REFERENCE.v1 | BrandAssetReferenceContract v1 | Contrato de autorização | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.WL.CUSTOM_DOMAIN.v1 | CustomDomainContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.WL.DOMAIN_VERIFICATION.v1 | DomainVerificationContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.WL.CERTIFICATE_REFERENCE.v1 | CertificateReferenceContract v1 | Contrato de autorização | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.WL.BRAND_PUBLISHING_REQUEST.v1 | BrandPublishingRequestContract v1 | Comando | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.WL.BRAND_PUBLISHING_RESULT.v1 | BrandPublishingResultContract v1 | Evento de fato ocorrido | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.WL.BRAND_PREVIEW.v1 | BrandPreviewContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.WL.BRAND_FALLBACK_THEME.v1 | BrandFallbackThemeContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.WL.BRAND_VISUAL_TEMPLATE.v1 | BrandVisualTemplateContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |

### 11.20 Notificações

Owner module: Notificações
Status: Aprovado para consolidação
Versão inicial: v1

| Contract ID | Contract name | Tipo sugerido | Observação |
|---|---|---|---|
| NODUOS.NOTIFICATION.NOTIFICATION_REQUEST.v1 | NotificationRequestContract v1 | Comando | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.NOTIFICATION.NOTIFICATION_TEMPLATE.v1 | NotificationTemplateContract v1 | Contrato de notificação | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.NOTIFICATION.NOTIFICATION_CHANNEL.v1 | NotificationChannelContract v1 | Contrato de notificação | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.NOTIFICATION.NOTIFICATION_PROVIDER.v1 | NotificationProviderContract v1 | Contrato de notificação | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.NOTIFICATION.NOTIFICATION_DELIVERY_ATTEMPT.v1 | NotificationDeliveryAttemptContract v1 | Contrato de notificação | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.NOTIFICATION.NOTIFICATION_DELIVERY_LOG.v1 | NotificationDeliveryLogContract v1 | Contrato de notificação | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.NOTIFICATION.NOTIFICATION_PREFERENCE.v1 | NotificationPreferenceContract v1 | Contrato de notificação | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.NOTIFICATION.NOTIFICATION_OPT_IN.v1 | NotificationOptInContract v1 | Contrato de notificação | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.NOTIFICATION.NOTIFICATION_OPT_OUT.v1 | NotificationOptOutContract v1 | Contrato de notificação | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.NOTIFICATION.NOTIFICATION_ANALYTICS_READ_MODEL.v1 | NotificationAnalyticsReadModelContract v1 | Read model autorizado | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |

### 11.21 Automações

Owner module: Automações
Status: Aprovado para consolidação
Versão inicial: v1

| Contract ID | Contract name | Tipo sugerido | Observação |
|---|---|---|---|
| NODUOS.AUTOMATION.AUTOMATION_WORKFLOW.v1 | AutomationWorkflowContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.AUTOMATION.AUTOMATION_TRIGGER.v1 | AutomationTriggerContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.AUTOMATION.AUTOMATION_CONDITION.v1 | AutomationConditionContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.AUTOMATION.AUTOMATION_ACTION_REQUEST.v1 | AutomationActionRequestContract v1 | Comando | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.AUTOMATION.AUTOMATION_EXECUTION.v1 | AutomationExecutionContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.AUTOMATION.AUTOMATION_RETRY.v1 | AutomationRetryContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.AUTOMATION.AUTOMATION_PAUSE.v1 | AutomationPauseContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.AUTOMATION.AUTOMATION_HUMAN_APPROVAL.v1 | AutomationHumanApprovalContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.AUTOMATION.AUTOMATION_ACTION_RESULT.v1 | AutomationActionResultContract v1 | Evento de fato ocorrido | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.AUTOMATION.AUTOMATION_READ_MODEL.v1 | AutomationReadModelContract v1 | Read model autorizado | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |

### 11.22 Marketplace de Integrações

Owner module: Marketplace de Integrações
Status: Aprovado para consolidação
Versão inicial: v1

| Contract ID | Contract name | Tipo sugerido | Observação |
|---|---|---|---|
| NODUOS.MARKETPLACE.MARKETPLACE_CONNECTOR.v1 | MarketplaceConnectorContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.MARKETPLACE.INTEGRATION_PROVIDER.v1 | IntegrationProviderContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.MARKETPLACE.ADAPTER_PACKAGE.v1 | AdapterPackageContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.MARKETPLACE.CONNECTOR_INSTALLATION.v1 | ConnectorInstallationContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.MARKETPLACE.CONNECTOR_VERSION.v1 | ConnectorVersionContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.MARKETPLACE.CONNECTOR_COMPATIBILITY.v1 | ConnectorCompatibilityContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.MARKETPLACE.CONNECTOR_CREDENTIAL_REFERENCE.v1 | ConnectorCredentialReferenceContract v1 | Contrato de segurança e LGPD | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.MARKETPLACE.CONNECTOR_WEBHOOK_ENDPOINT.v1 | ConnectorWebhookEndpointContract v1 | Webhook externo | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.MARKETPLACE.EXTERNAL_EVENT_MAPPING.v1 | ExternalEventMappingContract v1 | Evento de fato ocorrido | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.MARKETPLACE.MARKETPLACE_AUDIT_TRAIL.v1 | MarketplaceAuditTrailContract v1 | Contrato de auditoria | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |

### 11.23 Auditoria e Compliance

Owner module: Auditoria e Compliance
Status: Aprovado para consolidação
Versão inicial: v1

| Contract ID | Contract name | Tipo sugerido | Observação |
|---|---|---|---|
| NODUOS.AUDIT.AUDIT_TRAIL.v1 | AuditTrailContract v1 | Contrato de auditoria | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.AUDIT.AUDIT_QUERY.v1 | AuditQueryContract v1 | Contrato de auditoria | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.AUDIT.AUDIT_EXPORT.v1 | AuditExportContract v1 | Contrato de exportação | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.AUDIT.COMPLIANCE_CASE.v1 | ComplianceCaseContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.AUDIT.COMPLIANCE_INVESTIGATION.v1 | ComplianceInvestigationContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.AUDIT.EVIDENCE_REFERENCE.v1 | EvidenceReferenceContract v1 | Contrato de evidência | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.AUDIT.CHAIN_OF_CUSTODY_RECORD.v1 | ChainOfCustodyRecordContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.AUDIT.AUDIT_ALERT.v1 | AuditAlertContract v1 | Contrato de auditoria | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.AUDIT.COMPLIANCE_REPORT.v1 | ComplianceReportContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |

### 11.24 Segurança e LGPD

Owner module: Segurança e LGPD
Status: Aprovado para consolidação
Versão inicial: v1

| Contract ID | Contract name | Tipo sugerido | Observação |
|---|---|---|---|
| NODUOS.SECURITY.SECURITY_POLICY.v1 | SecurityPolicyContract v1 | Contrato de política | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.SECURITY.PRIVACY_POLICY.v1 | PrivacyPolicyContract v1 | Contrato de política | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.SECURITY.DATA_PROTECTION_POLICY.v1 | DataProtectionPolicyContract v1 | Contrato de política | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.SECURITY.CONSENT_POLICY.v1 | ConsentPolicyContract v1 | Contrato de política | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.SECURITY.CONSENT_RECORD.v1 | ConsentRecordContract v1 | Contrato de segurança e LGPD | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.SECURITY.DATA_PROCESSING_RECORD.v1 | DataProcessingRecordContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.SECURITY.DATA_SUBJECT_REQUEST.v1 | DataSubjectRequestContract v1 | Comando | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.SECURITY.RETENTION_POLICY.v1 | RetentionPolicyContract v1 | Contrato de política | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.SECURITY.MASKING_POLICY.v1 | MaskingPolicyContract v1 | Contrato de política | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.SECURITY.SENSITIVE_DATA_CLASSIFICATION.v1 | SensitiveDataClassificationContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.SECURITY.EXPORT_CONTROL_POLICY.v1 | ExportControlPolicyContract v1 | Contrato de política | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.SECURITY.SECRET_POLICY.v1 | SecretPolicyContract v1 | Contrato de política | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.SECURITY.THIRD_PARTY_RISK.v1 | ThirdPartyRiskContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.SECURITY.INCIDENT_POLICY.v1 | IncidentPolicyContract v1 | Contrato de política | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |

### 11.25 Suporte e Operação

Owner module: Suporte e Operação
Status: Aprovado para consolidação
Versão inicial: v1

| Contract ID | Contract name | Tipo sugerido | Observação |
|---|---|---|---|
| NODUOS.SUPPORT.PLATFORM_SUPPORT_CASE.v1 | PlatformSupportCaseContract v1 | Contrato de suporte | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.SUPPORT.SUPPORT_OPERATION_CASE.v1 | SupportOperationCaseContract v1 | Contrato de suporte | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.SUPPORT.SERVICE_INCIDENT.v1 | ServiceIncidentContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.SUPPORT.MAINTENANCE_WINDOW.v1 | MaintenanceWindowContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.SUPPORT.SERVICE_STATUS.v1 | ServiceStatusContract v1 | Evento de fato ocorrido ou API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.SUPPORT.DIAGNOSTIC_REQUEST.v1 | DiagnosticRequestContract v1 | Comando | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.SUPPORT.REMOTE_SUPPORT_SESSION.v1 | RemoteSupportSessionContract v1 | Contrato de suporte | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.SUPPORT.RUNBOOK.v1 | RunbookContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.SUPPORT.POST_INCIDENT_REVIEW.v1 | PostIncidentReviewContract v1 | API interna | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.SUPPORT.SUPPORT_KNOWLEDGE_BASE_REFERENCE.v1 | SupportKnowledgeBaseReferenceContract v1 | Contrato de suporte | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |
| NODUOS.SUPPORT.SUPPORT_ANALYTICS_READ_MODEL.v1 | SupportAnalyticsReadModelContract v1 | Read model autorizado | Exige tenant/contexto, compatibilidade e política de dados sensíveis conforme escopo. |


## 11.26 Contratos derivados de solicitação registrada

Esta seção separa explicitamente comandos de eventos de solicitação registrada. O comando solicita execução. O evento de solicitação registrada apenas confirma que o pedido entrou no domínio dono e não prova execução. A execução final deve gerar evento de fato ocorrido separado, quando aplicável.

| Comando | Evento de solicitação registrada derivado | Dono | Observação |
|---|---|---|---|
| MasterSensitiveExportRequestContract v1 | MasterSensitiveExportRequestRegisteredEventContract v1 | Master | Exportação só executa após autorização, política de Segurança e LGPD e auditoria. |
| PartnerGatewayRegistrationRequestContract v1 | PartnerGatewayRegistrationRequestRegisteredEventContract v1 | Parceiros | Registro do pedido não cria GatewayRecord; Gateway executa por contrato próprio. |
| PartnerDeviceRegistrationRequestContract v1 | PartnerDeviceRegistrationRequestRegisteredEventContract v1 | Parceiros | Registro do pedido não cria DeviceRecord; Dispositivos executa por contrato próprio. |
| CameraLiveViewRequestContract v1 | CameraLiveViewRequestRegisteredEventContract v1 | Câmeras / VMS | Pedido registrado não prova abertura de stream. |
| CameraPlaybackRequestContract v1 | CameraPlaybackRequestRegisteredEventContract v1 | Câmeras / VMS | Pedido registrado não prova playback entregue. |
| ReservationChargeRequestContract v1 | ReservationChargeRequestRegisteredEventContract v1 | Reservas | Pedido de cobrança registrado; Financeiro executa cobrança por contrato próprio. |
| BIExportRequestContract v1 | BIExportRequestRegisteredEventContract v1 | Relatórios / BI | Exportação sensível exige autorização, finalidade, política e trilha. |
| BrandPublishingRequestContract v1 | BrandPublishingRequestRegisteredEventContract v1 | White-label | Publicação só ocorre após validação, política, segurança e auditoria. |
| NotificationRequestContract v1 | NotificationRequestRegisteredEventContract v1 | Notificações | Pedido registrado não prova entrega multicanal. |
| AutomationActionRequestContract v1 | AutomationActionRequestRegisteredEventContract v1 | Automações | Automações solicita; módulo dono executa. |
| DataSubjectRequestContract v1 | DataSubjectRequestRegisteredEventContract v1 | Segurança e LGPD | Solicitação do titular registrada não prova atendimento concluído. |
| DiagnosticRequestContract v1 | DiagnosticRequestRegisteredEventContract v1 | Suporte e Operação | Diagnóstico remoto exige escopo temporário, autorização e auditoria. |

---

## 12. Matriz de comandos críticos

- AccessExecutionCommandContract: exige AuthorizationDecision, idempotency_key, correlation_id, auditoria, retry controlado, dead-letter quando aplicável e fail-closed.
- GatewayCommandContract: exige AuthorizationDecision, idempotency_key, correlation_id, auditoria, retry controlado, dead-letter quando aplicável e fail-closed.
- ReservationHoldContract: exige AuthorizationDecision, idempotency_key, correlation_id, auditoria, retry controlado, dead-letter quando aplicável e fail-closed.
- ReservationCancellationContract: exige AuthorizationDecision, idempotency_key, correlation_id, auditoria, retry controlado, dead-letter quando aplicável e fail-closed.
- BIExportRequestContract: exige AuthorizationDecision, idempotency_key, correlation_id, auditoria, retry controlado, dead-letter quando aplicável e fail-closed.
- AuditExportContract: exige AuthorizationDecision, idempotency_key, correlation_id, auditoria, retry controlado, dead-letter quando aplicável e fail-closed.
- BrandPublishingRequestContract: exige AuthorizationDecision, idempotency_key, correlation_id, auditoria, retry controlado, dead-letter quando aplicável e fail-closed.
- NotificationRequestContract: exige AuthorizationDecision, idempotency_key, correlation_id, auditoria, retry controlado, dead-letter quando aplicável e fail-closed.
- AutomationActionRequestContract: exige AuthorizationDecision, idempotency_key, correlation_id, auditoria, retry controlado, dead-letter quando aplicável e fail-closed.
- ConnectorInstallationContract: exige AuthorizationDecision, idempotency_key, correlation_id, auditoria, retry controlado, dead-letter quando aplicável e fail-closed.
- DataSubjectRequestContract: exige AuthorizationDecision, idempotency_key, correlation_id, auditoria, retry controlado, dead-letter quando aplicável e fail-closed.
- DiagnosticRequestContract: exige AuthorizationDecision, idempotency_key, correlation_id, auditoria, retry controlado, dead-letter quando aplicável e fail-closed.
- RemoteSupportSessionContract: exige AuthorizationDecision, idempotency_key, correlation_id, auditoria, retry controlado, dead-letter quando aplicável e fail-closed.

---

## 13. Matriz de eventos de fato ocorrido

- AccessEventContract: usa EventEnvelope v1, correlation_id, causation_id quando derivado, outbox/inbox, auditoria e payload minimizado.
- AccessExecutionResultContract: usa EventEnvelope v1, correlation_id, causation_id quando derivado, outbox/inbox, auditoria e payload minimizado.
- CameraEvidenceReferenceContract: usa EventEnvelope v1, correlation_id, causation_id quando derivado, outbox/inbox, auditoria e payload minimizado.
- AlarmEventContract: usa EventEnvelope v1, correlation_id, causation_id quando derivado, outbox/inbox, auditoria e payload minimizado.
- PaymentRegisteredEventContract: usa EventEnvelope v1, correlation_id, causation_id quando derivado, outbox/inbox, auditoria e payload minimizado.
- OverdueEventContract: usa EventEnvelope v1, correlation_id, causation_id quando derivado, outbox/inbox, auditoria e payload minimizado.
- VisitorCheckInContract: usa EventEnvelope v1, correlation_id, causation_id quando derivado, outbox/inbox, auditoria e payload minimizado.
- TicketResolvedEventContract: usa EventEnvelope v1, correlation_id, causation_id quando derivado, outbox/inbox, auditoria e payload minimizado.
- ReservationApprovedEventContract: usa EventEnvelope v1, correlation_id, causation_id quando derivado, outbox/inbox, auditoria e payload minimizado.
- NotificationDeliveryAttemptedEventContract: usa EventEnvelope v1, correlation_id, causation_id quando derivado, outbox/inbox, auditoria e payload minimizado.
- AutomationExecutionFinishedEventContract: usa EventEnvelope v1, correlation_id, causation_id quando derivado, outbox/inbox, auditoria e payload minimizado.
- ServiceIncidentOpenedEventContract: usa EventEnvelope v1, correlation_id, causation_id quando derivado, outbox/inbox, auditoria e payload minimizado.

---

## 14. Matriz de eventos de solicitação registrada

- PartnerGatewayRegistrationRequestRegisteredEventContract: registra solicitação, não prova execução. A execução pertence ao módulo dono e deve gerar evento de fato ocorrido separado.
- PartnerDeviceRegistrationRequestRegisteredEventContract: registra solicitação, não prova execução. A execução pertence ao módulo dono e deve gerar evento de fato ocorrido separado.
- MasterSensitiveExportRequestRegisteredEventContract: registra solicitação, não prova execução. A execução pertence ao módulo dono e deve gerar evento de fato ocorrido separado.
- FinancialRestrictionSignalRegisteredEventContract: registra solicitação, não prova execução. A execução pertence ao módulo dono e deve gerar evento de fato ocorrido separado.
- ReservationChargeRequestRegisteredEventContract: registra solicitação, não prova execução. A execução pertence ao módulo dono e deve gerar evento de fato ocorrido separado.
- TicketReopenRequestRegisteredEventContract: registra solicitação, não prova execução. A execução pertence ao módulo dono e deve gerar evento de fato ocorrido separado.
- AutomationActionRequestRegisteredEventContract: registra solicitação, não prova execução. A execução pertence ao módulo dono e deve gerar evento de fato ocorrido separado.
- NotificationRequestRegisteredEventContract: registra solicitação, não prova execução. A execução pertence ao módulo dono e deve gerar evento de fato ocorrido separado.

---

## 15. Matriz de read models autorizados

- MasterGlobalOverviewReadModel: deve declarar owner, fontes, staleness, masking, retention, consumidores autorizados e proibição de uso como banco compartilhado.
- PartnerOrganizationPortfolioReadModel: deve declarar owner, fontes, staleness, masking, retention, consumidores autorizados e proibição de uso como banco compartilhado.
- PartnerDeploymentOverviewReadModel: deve declarar owner, fontes, staleness, masking, retention, consumidores autorizados e proibição de uso como banco compartilhado.
- OrganizationModuleAvailabilityReadModel: deve declarar owner, fontes, staleness, masking, retention, consumidores autorizados e proibição de uso como banco compartilhado.
- OrganizationStructureSummaryReadModel: deve declarar owner, fontes, staleness, masking, retention, consumidores autorizados e proibição de uso como banco compartilhado.
- OrganizationPeopleSummaryReadModel: deve declarar owner, fontes, staleness, masking, retention, consumidores autorizados e proibição de uso como banco compartilhado.
- GatewayHealthReadModel: deve declarar owner, fontes, staleness, masking, retention, consumidores autorizados e proibição de uso como banco compartilhado.
- DeviceHealthReadModel: deve declarar owner, fontes, staleness, masking, retention, consumidores autorizados e proibição de uso como banco compartilhado.
- EffectivePermissionReadModel: deve declarar owner, fontes, staleness, masking, retention, consumidores autorizados e proibição de uso como banco compartilhado.
- CameraAnalyticsReadModel: deve declarar owner, fontes, staleness, masking, retention, consumidores autorizados e proibição de uso como banco compartilhado.
- AlarmAnalyticsReadModel: deve declarar owner, fontes, staleness, masking, retention, consumidores autorizados e proibição de uso como banco compartilhado.
- FinancialReadModel: deve declarar owner, fontes, staleness, masking, retention, consumidores autorizados e proibição de uso como banco compartilhado.
- VisitorAnalyticsReadModel: deve declarar owner, fontes, staleness, masking, retention, consumidores autorizados e proibição de uso como banco compartilhado.
- TicketAnalyticsReadModel: deve declarar owner, fontes, staleness, masking, retention, consumidores autorizados e proibição de uso como banco compartilhado.
- ReservationAnalyticsReadModel: deve declarar owner, fontes, staleness, masking, retention, consumidores autorizados e proibição de uso como banco compartilhado.
- NotificationAnalyticsReadModel: deve declarar owner, fontes, staleness, masking, retention, consumidores autorizados e proibição de uso como banco compartilhado.
- AutomationReadModel: deve declarar owner, fontes, staleness, masking, retention, consumidores autorizados e proibição de uso como banco compartilhado.
- SupportAnalyticsReadModel: deve declarar owner, fontes, staleness, masking, retention, consumidores autorizados e proibição de uso como banco compartilhado.

---

## 16. Dados sensíveis e proteção obrigatória

- Identidade técnica: referência minimizada.
- Dados pessoais: minimização, mascaramento e finalidade.
- Documentos pessoais: referência segura.
- Consentimentos: trilha, retenção e revogação.
- Biometria e credenciais físicas: nunca bruto em contrato.
- Imagem e vídeo: referência, mascaramento, retenção e cadeia de custódia.
- Acesso físico: auditoria obrigatória.
- Visitantes: retenção curta e minimização.
- Financeiro: mascaramento e exportação controlada.
- Suporte remoto: escopo temporário e trilha.
- Segredos: cofre, rotação e SecretReference.
- Integrações externas: avaliação de terceiro e política de LGPD.

---

## 17. Regras de AuthorizationDecision

Exigem AuthorizationDecision: contratos de autorização, comandos críticos, contratos com dados pessoais, credenciais, vídeo, imagem, biometria, evidência, exportações, financeiro, suporte remoto, alteração de política, licença, escopo, módulo ativo, feature flag, ação física, diagnóstico técnico ou integração externa.

Exceção limitada: contratos puramente públicos e não sensíveis podem dispensar AuthorizationDecision, desde que não permitam ação, dado sensível, inferência de contexto privado ou alteração operacional.

---

## 18. Regras de Segurança e LGPD

Ausência de política aplicável em contrato sensível deve falhar fechado. Contratos sensíveis devem declarar PrivacyPolicy, SecurityPolicy, DataProtectionPolicy, ConsentPolicy, RetentionPolicy, MaskingPolicy, ExportControlPolicy, SecretPolicy ou ThirdPartyRisk conforme o caso.

---

## 19. Regras de auditoria

Exigem auditoria: autenticação, contexto, autorização, permissão, herança, criação/alteração/suspensão/restauração/arquivamento de entidades críticas, acesso físico, vídeo, exportação, financeiro, visitante, evidência, suporte remoto, diagnóstico, políticas, marketplace, integração externa e automação crítica.

---

## 20. Outbox, inbox, retry e dead-letter

Eventos críticos devem usar outbox no produtor ou mecanismo equivalente, inbox/deduplicação no consumidor, retry controlado e dead-letter/quarentena para falhas persistentes. Reprocessamento nunca pode duplicar cobrança, abertura, notificação, exportação, evidência, convite, reserva, credencial, workflow ou ação física.

---

## 21. Riscos de acoplamento e correções

- Evento Requested virar comando: Usar evento apenas como solicitação registrada.
- Read model virar banco compartilhado: Declarar owner, origem, staleness e proibição de domínio.
- Core virar módulo comercial: Core autoriza, não executa domínio.
- Organização virar módulo universal: Usar apenas referência e resumo autorizado.
- Parceiro tomar posse técnica: Parceiro solicita/cadastra; módulo dono governa.
- Financeiro bloquear recurso: Financeiro publica fato; Core decide; módulo dono executa.
- Gateway executar regra operacional: Gateway transporta.
- Dispositivo virar recurso operacional: Separar DeviceRecord de AccessPoint/CameraResource/AlarmPanel.
- BI virar fonte primária: BI consome contratos e read models.
- Segurança executar domínio alheio: Segurança define política; módulo dono executa.
- Auditoria substituir log primário: Auditoria referencia, investiga e evidencia.
- Suporte acessar banco interno: Diagnóstico por contrato versionado.
- Automações executar ação diretamente: ActionRequest para módulo dono.
- Marketplace executar conector fora de escopo: Instalação autorizada e credencial por referência.

---

## 22. Checklist de aprovação de contrato

- Validar owner_module único.
- Validar versão.
- Validar status.
- Validar tipo oficial.
- Validar objetivo.
- Validar consumidores autorizados.
- Validar escopo.
- Validar permissões.
- Validar tenant/contexto.
- Validar AuthorizationDecision quando sensível.
- Validar política de Segurança e LGPD.
- Validar dados sensíveis.
- Validar minimização.
- Validar mascaramento.
- Validar retenção.
- Validar auditoria.
- Validar idempotência quando crítico.
- Validar EventEnvelope quando evento.
- Validar correlation_id.
- Validar causation_id.
- Validar outbox.
- Validar inbox/deduplicação.
- Validar retry.
- Validar dead-letter.
- Validar fail-closed.
- Validar proibição de segredo bruto.
- Validar proibição de transferência de domínio.
- Validar proibição de banco interno.
- Validar compatibilidade.
- Validar descontinuação.
- Validar risco de acoplamento.

---

## 23. Lacunas antes da modelagem técnica detalhada

- Taxonomia oficial de Veículos.
- Taxonomia oficial de Documentos.
- Taxonomia oficial de Ocorrências.
- Schema conceitual final do EventEnvelope v1.
- Schema conceitual final do EvidenceReference.
- Schema conceitual final do SecretReference.
- Matriz técnica de permissões por contrato.
- Matriz técnica de dados sensíveis por campo conceitual.
- Política final de prazos de versionamento e depreciação.
- Catálogo de webhooks externos por provedor.
- Matriz de retenção por módulo.
- Matriz de mascaramento por perfil.
- Matriz de exportação sensível.
- Matriz de diagnóstico remoto.
- Matriz de compatibilidade por conector de Marketplace.

---

## 24. Decisões aplicadas nesta consolidação

As decisões abaixo foram aprovadas para entrada no arquivo 03_DECISOES_OFICIAIS.md junto com este catálogo.

### DEC-184: Catálogo de Contratos Públicos como artefato técnico oficial

Tema: Contratos públicos, versionamento e governança técnica.

Decisão: O NoduOS passa a adotar o Catálogo de Contratos Públicos como artefato técnico obrigatório antes de banco, endpoints finais, telas e integrações.

Motivo: preservar modularidade, compatibilidade futura, segurança, LGPD, auditoria e evolução sem quebrar consumidores.

Impacto: deve ser aplicado aos documentos centrais após aprovação.

Status: Aprovada.

Data: 2026-06-25.

### DEC-185: Tipos oficiais de contrato público

Tema: Contratos públicos, versionamento e governança técnica.

Decisão: O NoduOS reconhece 18 tipos oficiais de contrato público para padronizar APIs, comandos, eventos, read models, webhooks, política, autorização, evidência, exportação, análise, diagnóstico, integração, notificação, suporte, auditoria, segurança e LGPD.

Motivo: preservar modularidade, compatibilidade futura, segurança, LGPD, auditoria e evolução sem quebrar consumidores.

Impacto: deve ser aplicado aos documentos centrais após aprovação.

Status: Aprovada.

Data: 2026-06-25.

### DEC-186: Metadados mínimos obrigatórios de contrato

Tema: Contratos públicos, versionamento e governança técnica.

Decisão: Todo contrato público deve declarar owner_module, versão, status, escopo, consumidores, permissões, dados sensíveis, minimização, mascaramento, retenção, auditoria, AuthorizationDecision quando sensível, idempotência quando crítico, compatibilidade, descontinuação e fail-closed.

Motivo: preservar modularidade, compatibilidade futura, segurança, LGPD, auditoria e evolução sem quebrar consumidores.

Impacto: deve ser aplicado aos documentos centrais após aprovação.

Status: Aprovada.

Data: 2026-06-25.

### DEC-187: Separação oficial entre contrato, schema técnico e implementação

Tema: Contratos públicos, versionamento e governança técnica.

Decisão: O catálogo define fronteira conceitual pública entre módulos, mas não substitui schema técnico final, banco, endpoint, migration ou implementação.

Motivo: preservar modularidade, compatibilidade futura, segurança, LGPD, auditoria e evolução sem quebrar consumidores.

Impacto: deve ser aplicado aos documentos centrais após aprovação.

Status: Aprovada.

Data: 2026-06-25.

### DEC-188: Política oficial de versionamento e ciclo de vida de contratos públicos

Tema: Contratos públicos, versionamento e governança técnica.

Decisão: Todo contrato público deve seguir política de versionamento, compatibilidade, depreciação e ciclo de vida. Mudanças incompatíveis exigem nova versão e janela de compatibilidade.

Motivo: preservar modularidade, compatibilidade futura, segurança, LGPD, auditoria e evolução sem quebrar consumidores.

Impacto: deve ser aplicado aos documentos centrais após aprovação.

Status: Aprovada.

Data: 2026-06-25.

---

## 25. Atualizações recomendadas para os documentos centrais

### 25.1 00_BIBLIA_DO_PROJETO.md

Adicionar seção de Catálogo de Contratos Públicos como etapa obrigatória entre arquitetura aprovada e modelagem técnica detalhada.

### 25.2 01_MAPA_DE_MODULOS.md

Adicionar em cada módulo contratos públicos principais, contratos consumidos, contratos publicados, read models autorizados, comandos críticos, eventos de fato ocorrido, eventos de solicitação registrada, contratos sensíveis, contratos críticos, contratos que exigem AuthorizationDecision, contratos que exigem política de Segurança e LGPD e riscos de acoplamento por contrato.

### 25.3 02_REGRAS_DE_ARQUITETURA.md

Adicionar regra de classificação obrigatória por tipo oficial, versionamento, ciclo de vida, fail-closed, idempotência, EventEnvelope, read model sem transferência de domínio e contrato sensível com política obrigatória.

### 25.4 03_DECISOES_OFICIAIS.md

Adicionar DEC-184 a DEC-188 como decisões aprovadas.

### 25.5 04_PROMPTS_DE_TRABALHO.md

Adicionar prompt específico para criação e revisão de contratos públicos, proibindo banco, código, endpoint final, migration e tela nesta etapa.

---

## 26. Parecer final

Este Catálogo de Contratos Públicos está aprovado para consolidação como base técnica conceitual oficial complementar da raiz. Ele preserva modularidade, baixo acoplamento, versionamento futuro, compatibilidade, idempotência, EventEnvelope, correlation_id, causation_id, outbox/inbox, dead-letter, fail-closed, Segurança e LGPD, Auditoria, EvidenceReference, SecretReference, read models sem transferência de domínio, Core como autoridade estrutural de autorização, módulo dono como executor e Auditoria como preservadora de prova.

Próxima etapa segura: avançar para Matriz Técnica de Dados Sensíveis por Contrato, seguida do detalhamento de EventEnvelope v1, EvidenceReference, SecretReference e AuthorizationDecision. Só depois avançar para banco, endpoints finais, telas e integrações.

Frase final:

Raiz consolida.  
Contrato estabiliza.  
Módulo preserva fronteira.  
Produção agradece.

---

## 27. Estado após ajustes finais

Este catálogo foi ajustado para consolidação na raiz com:

- status aprovado para consolidação nos documentos centrais;
- DEC-184 a DEC-188 aprovadas;
- próxima DEC livre original do catálogo definida como DEC-189, posteriormente avançada para DEC-191 após a consolidação da Matriz Técnica de Permissões por Contrato;
- siglas de contract_id corrigidas, incluindo READ_MODEL, BI, QR, SLA e KPI;
- tipos ambíguos separados entre Comando e Evento de solicitação registrada;
- GatewayCommandResultContract corrigido para Evento de fato ocorrido;
- próxima etapa original do catálogo definida como Matriz Técnica de Permissões por Contrato, já consolidada nesta raiz.

Próxima etapa recomendada: Matriz Técnica de Dados Sensíveis por Contrato.

## 28. Atualização consolidada: Matriz Técnica de Permissões por Contrato

A partir da DEC-189 e da DEC-190, este Catálogo de Contratos Públicos passa a ser complementado oficialmente pela Matriz Técnica de Permissões por Contrato.

Documento técnico raiz complementar:

```text
06_MATRIZ_TECNICA_PERMISSOES_POR_CONTRATO.md
```

Atualização obrigatória nos metadados mínimos:

- Todo contrato público deve possuir `permission_code` conceitual.
- O formato oficial da permissão conceitual é `<dominio>.<recurso_ou_contrato>.<ação>`.
- A permissão conceitual classifica o uso técnico do contrato, mas não autoriza ação sozinha.
- A autorização estrutural continua pertencendo ao Core Platform por PermissionGrant, InheritanceGrant, ResourceReference, AuthorizationDecision, contexto, licença, entitlement e feature flag.

A matriz deve ser consultada antes de qualquer modelagem de:

- banco de dados;
- endpoints finais;
- filas;
- jobs;
- workers;
- webhooks;
- integrações;
- telas;
- permissões finais;
- exportações;
- evidências;
- dados sensíveis.

Regras complementares:

- Contrato sem `permission_code` não avança para modelagem técnica.
- Contrato sensível sem AuthorizationDecision válido deve falhar fechado.
- Contrato sensível sem política de Segurança e LGPD deve falhar fechado.
- Contrato crítico sem auditoria deve falhar fechado.
- Comando crítico com risco de duplicidade deve exigir idempotency_key.
- Evento de fato ocorrido não concede permissão nova ao consumidor.
- Evento de solicitação registrada não prova execução.
- Read model autorizado não transfere domínio e não vira banco compartilhado.

Decisões aplicadas nesta atualização:

- DEC-189: Matriz Técnica de Permissões por Contrato como artefato técnico oficial complementar.
- DEC-190: Permissão conceitual obrigatória em contrato público.

Última DEC consolidada: DEC-197.

Próxima DEC livre: DEC-191.

Próxima etapa recomendada: Matriz Técnica de Dados Sensíveis por Contrato.


## Atualização de governança: Matriz Técnica de Dados Sensíveis por Contrato

A partir da DEC-191, todo contrato público do NoduOS deve ser validado também contra o arquivo `07_MATRIZ_TECNICA_DADOS_SENSIVEIS_POR_CONTRATO.md`.

Regras adicionais obrigatórias:

- Declarar categorias de dados permitidas e proibidas.
- Declarar nível de sensibilidade do payload.
- Declarar finalidade obrigatória para contrato sensível ou crítico.
- Declarar base legal ou política de Segurança e LGPD aplicável.
- Declarar quando usar ResourceReference, EvidenceReference ou SecretReference.
- Declarar se payload bruto é permitido, proibido ou excepcional.
- Declarar mascaramento, retenção, descarte, expurgo ou anonimização.
- Declarar auditoria de visualização e auditoria de exportação.
- Falhar fechado quando contrato sensível não tiver finalidade, política, escopo, autorização, retenção ou máscara aplicável.

Próxima etapa recomendada: Detalhamento de SecretReference.

# Atualização complementar - EventEnvelope v1 consolidado

Status: aplicado ao Catálogo de Contratos Públicos.

O Catálogo passa a considerar o `08_DETALHAMENTO_EVENTENVELOPE_V1.md` como detalhamento oficial do padrão transversal `EventEnvelope v1`.

Regras aplicáveis a contratos de evento:

- Todo contrato de evento deve declarar que usa EventEnvelope v1.
- Evento público intermodular não pode existir sem `contract_id`, `contract_version`, `event_id`, `event_name`, `event_type`, `event_version`, `source_module`, `owner_module`, `tenant_id`, `context_id`, `correlation_id`, `payload_schema_reference`, `payload_minimized`, política de sensibilidade e comportamento de falha.
- Evento derivado deve possuir `causation_id`.
- Evento sensível ou crítico deve respeitar Matriz Técnica de Permissões por Contrato, Matriz Técnica de Dados Sensíveis por Contrato, auditoria, política LGPD, retenção, máscara, AuthorizationDecision quando aplicável e fail-closed.
- Evento externo recebido deve ser tratado como não confiável até validação, normalização, assinatura/integridade, política e escopo.
- Eventos mínimos listados no `08_DETALHAMENTO_EVENTENVELOPE_V1.md` são Event Contract IDs conceituais e não entram automaticamente como novos contratos públicos independentes sem decisão ou detalhamento futuro.

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


## Atualização de metadados mínimos para evidência

Todo contrato que envolver evidência deve declarar, quando aplicável:

- `evidence_reference_required`
- `chain_of_custody_required`
- `evidence_view_audit_required`
- `evidence_export_audit_required`
- `evidence_quarantine_policy`
- `storage_reference_policy`
- `evidence_retention_policy_reference`
- `evidence_masking_policy_reference`
- `evidence_export_control_policy`

Contrato que transportar evidência sensível ou crítica sem esses metadados deve ser negado, pausado ou quarentenado em comportamento fail-closed.


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


## Atualização consolidada no catálogo - SecretReference v1

### SecretReference v1

Representa segredo por referência segura.

Campos mínimos conceituais:

- `secret_reference_id`
- `contract_id`
- `contract_version`
- `reference_version`
- `owner_module`
- `custody_module`
- `requesting_module`, quando aplicável
- `allowed_consumer_modules`
- `tenant_id`, quando aplicável
- `context_id`, quando aplicável
- `resource_reference`, quando aplicável
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
- `expiration_policy_reference`, quando aplicável
- `audit_policy_reference`
- `security_policy_reference`
- `lgpd_policy_reference`, quando aplicável
- `created_at`
- `created_by_actor_reference`
- `last_rotated_at`, quando aplicável
- `next_rotation_due_at`, quando aplicável
- `expires_at`, quando aplicável
- `revoked_at`, quando aplicável
- `revocation_reason_code`, quando aplicável
- `lifecycle_state`
- `authorization_decision_reference`, quando aplicável
- `correlation_id`
- `audit_reference`
- `integrity_reference`, quando aplicável
- `failure_policy`
- `no_domain_transfer = true`
- `no_shared_database = true`

Regra:

Segredo bruto é proibido em todo contrato público. Contrato que detectar segredo bruto deve rejeitar, bloquear ou quarentenar conforme política e fail-closed.

## Atualização transversal: AuthorizationDecision v1 e ResourceReference v1

### AuthorizationDecision v1

AuthorizationDecision v1 é emitida exclusivamente pelo Core Platform e representa a decisão estrutural, contextual, temporal, modular, sensível ou crítica para uma ação específica.

Deve declarar authorization_decision_id, decision, issued_by, tenant_id, context_id, actor_reference, subject_reference quando aplicável, resource_reference, action, module_scope, decision_scope, permission_reference quando aplicável, inheritance_reference quando aplicável, policy_references, security_policy_reference quando aplicável, lgpd_policy_reference quando aplicável, license_reference quando aplicável, feature_flag_reference quando aplicável, purpose quando aplicável, sensitivity_level, reason_code minimizado, issued_at, expires_at quando aplicável, correlation_id, causation_id quando aplicável, audit_reference, cache_policy, reuse_policy e fail_policy.

Nenhum módulo comercial emite AuthorizationDecision final.

AuthorizationDecision não substitui PermissionGrant, InheritanceGrant, ResourceReference, EvidenceReference, SecretReference, EventEnvelope, read model, política, licença, feature flag ou execução do módulo dono.

Contrato oficial:

```text
NODUOS.CORE.AUTHORIZATION_DECISION.v1
```

### ResourceReference v1

ResourceReference v1 permite referenciar recursos entre módulos sem transferência de domínio.

Campos mínimos: resource_reference_id, contract_id, contract_version, reference_version, owner_module, resource_type, resource_public_id, tenant_id quando aplicável, context_id quando aplicável, structure_reference quando localizado fisicamente, module_scope, authorization_scope, allowed_actions_conceptual, sensitivity_level, data_categories, lifecycle_state, availability_state quando aplicável, policy_references, display_label_minimized, audit_reference quando aplicável e `no_domain_transfer = true`.

Proibições: ResourceReference não pode carregar payload completo, entidade interna, chave primária interna, segredo bruto, evidência bruta, biometria bruta, vídeo bruto, documento completo, dado de outro tenant ou autorização automática.

Regra: ResourceReference aponta recurso. AuthorizationDecision decide ação sensível. Módulo dono executa.


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

O Blueprint técnico torna obrigatória a abordagem contract-first na programação. Nenhum endpoint, worker, webhook, evento, read model ou integração deve ser criado sem contrato público ou contrato interno conceitual correspondente.

O Catálogo de Contratos Públicos continua sendo a fonte para definir contract_id, contract_name, contract_type, owner_module, escopo, permissões, tenant/contexto, AuthorizationDecision, ResourceReference, dados sensíveis, idempotência, EventEnvelope, auditoria, retry, dead-letter, fail-closed, compatibilidade e descontinuação.

A programação deve preservar os padrões transversais:

- EventEnvelope v1 para eventos;
- EvidenceReference v1 para provas;
- SecretReference v1 para segredos;
- AuthorizationDecision v1 para autorização sensível/crítica;
- ResourceReference v1 para recursos intermodulares;
- IdempotencyContract v1 para comandos críticos;
- CorrelationContract v1 para rastreabilidade distribuída.
