# NoduOS - Programação Inicial do Core Platform

Este pacote contém a primeira leva de programação aprovada para o NoduOS:

- fundação do repositório modular;
- packages transversais mínimos;
- Core Platform estrutural;
- testes iniciais de contrato, tenant/contexto, autorização, ResourceReference, EventEnvelope, idempotência e fail-closed.

Não inclui módulos comerciais, endpoints finais, banco compartilhado, integração com hardware, telas ou execução de domínio alheio.

## Comandos

```bash
npm run build
npm test
npm run verify
```

## Regras preservadas

```text
Política influencia.
Core decide.
Módulo dono executa.
Auditoria registra.
```

## O que existe aqui

```text
apps/api                         shell da API sem endpoints comerciais
packages/contracts               contratos, metadados e proteção contra payload proibido
packages/correlation             correlation_id e causation_id
packages/idempotency             idempotência de comandos críticos
packages/tenant-context          resolução fail-closed de tenant/contexto/ator
packages/event-envelope          EventEnvelope v1
packages/resource-reference      ResourceReference v1 com no_domain_transfer
packages/authorization-client    contratos de AuthorizationDecision
packages/secret-reference        SecretReference v1
packages/evidence-reference      EvidenceReference v1
packages/audit-client            cliente de auditoria base
packages/observability           trace mínimo sem dados sensíveis
packages/test-kit                fixtures para testes de fronteira
modules/core-platform            domínio e aplicação estrutural do Core
```

## O que não existe aqui

- Master;
- Parceiros;
- Organizações;
- Pessoas e Clientes;
- Unidades, Blocos, Áreas e Ambientes;
- Gateway, Dispositivos, Acesso, Câmeras, Alarmes;
- Financeiro, Visitantes, Tickets, Reservas, Mural, BI;
- White-label, Marketplace, Suporte, Segurança/LGPD avançado.

Este pacote é a pista de decolagem. A nave ainda não está indo para Coruscant, mas os hiperpropulsores já estão alinhados. 🚀
