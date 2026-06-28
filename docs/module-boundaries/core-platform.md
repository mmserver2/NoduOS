# Fronteira do Core Platform

## Natureza

O Core Platform é núcleo obrigatório, não comercial. Ele autentica, contextualiza, autoriza, licencia, audita, protege e conecta.

## Dentro da fronteira

- UserAccount
- AuthCredential
- UserSession
- MfaMethod
- Tenant
- TenantHierarchyNode
- Context
- ContextMembership
- Role
- Permission
- PermissionGrant
- InheritanceGrant
- ModuleRegistry
- License
- Entitlement
- FeatureFlag
- AuthorizationDecision
- ResourceReference mínima/transversal
- AuditLog base
- SecurityLog base
- PrivacyConsent base
- PrivacyRequest base
- EventEnvelope/EventContract
- ApiClient
- WebhookEndpoint interno autorizado
- GlobalConfig

## Fora da fronteira

- PersonProfile completo
- ClientProfile completo
- PartnerRecord completo
- OrganizationRecord completo
- Unit, Block, Area, Environment
- GatewayRecord
- DeviceRecord
- AccessPoint
- CameraResource
- Invoice, Payment
- VisitorInvite
- OperationalTicket
- Reservation
- WhiteLabelTheme
- MarketplaceConnector
- SupportOperationCase
- ComplianceCase

## Regra curta

Core decide o direito. Módulo dono executa o fato. Auditoria registra o caminho.
