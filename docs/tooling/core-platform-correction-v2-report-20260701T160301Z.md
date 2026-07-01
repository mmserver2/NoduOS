# Relatório corretivo v2 - Core Platform NoduOS

Data UTC: 2026-07-01T16:03:02Z

## Motivo

Correção final dos erros restantes de TypeScript em `modules/core-platform/src/core-platform.ts`.

## Erro corrigido

`TS2379` causado por `exactOptionalPropertyTypes` em chamadas de `isTemporalActive` com:

- `PermissionGrant`
- `InheritanceGrant`
- `License`

## Correção aplicada

Tipos temporais com `expiresAt?: string` foram ajustados para aceitar explicitamente:

```ts
expiresAt?: string | undefined
```

## Garantias preservadas

- Sem endpoint funcional.
- Sem banco real.
- Sem migration real.
- Sem módulo comercial.
- Sem serviço iniciado.
- Sem alteração em PM2, Nginx ou firewall.
- Sem alteração em /opt/noduos/current.
- Sem alteração em /opt/noduos/releases.
