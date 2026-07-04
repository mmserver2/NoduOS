# Core Internal API Boundary

## Objetivo

A Core Internal API Boundary define a fronteira interna de aplicação do Core Platform NoduOS.

Ela transforma contratos públicos internos do Core em portas TypeScript estruturais, preparando o Runtime-BLOCK sem criar runtime HTTP, endpoint funcional, banco, migration real, worker real, deploy ou módulo comercial.

## Princípios obrigatórios

- Contrato antes de endpoint.
- Domínio antes de tabela.
- Autorização antes de ação.
- Referência antes de payload.
- Evento antes de read model.
- Auditoria antes de confiança.
- LGPD antes de dado bruto.
- Teste antes de deploy.

## Contratos cobertos

- AuthorizationDecision
- TenantContext
- ResourceReference
- EventEnvelope
- SecretReference
- EvidenceReference
- AuditReference
- ErrorEnvelope
- IdempotencyCommand

## Request interno

Todo request interno da boundary deve conter identidade de contrato, versão, request_id, correlation_id, received_at e payload específico.

Quando aplicável, o request deve conter tenant/contexto, ator, purpose, sensitivity_level, ResourceReference, audit_reference e demais referências estruturais.

## Response interno

Todo response interno deve retornar request_id, contract_id, contract_version, status, result ou ErrorEnvelope, correlation_id, processed_at e fail_closed.

O response de erro usa ErrorEnvelope com message_safe, sem stack trace, sem segredo bruto, sem evidência bruta, sem internal database id e sem mapeamento HTTP.

## Fail closed

Qualquer erro crítico, contrato desconhecido, versão não suportada, ausência de tenant/contexto obrigatório, ausência de ator, ausência de permissão, segredo bruto, evidência bruta, evento-comando ou replay conflitante deve retornar fail_closed.

O campo técnico usado pelas responses é fail_closed.

## Garantias negativas

A boundary não acessa banco.

A boundary não executa domínio comercial.

A boundary não cria endpoint funcional, não cria servidor HTTP, não cria rotas, não cria filas reais, não cria migrations e não inicia deploy.

## Papel dos módulos

Política influencia. Core decide. Módulo dono executa. Auditoria registra.

A boundary valida contratos, contexto, autorização estrutural, ResourceReference, EventEnvelope, SecretReference, EvidenceReference, ErrorEnvelope, auditoria e idempotência. A execução do domínio continua pertencendo ao módulo dono autorizado.
