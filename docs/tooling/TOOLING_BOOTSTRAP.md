# Tooling Bootstrap

Etapa: Bootstrap técnico agressivo de tooling, typecheck e invariantes do Core Platform.

## Escopo

Esta etapa adiciona validação técnica local sem criar endpoint funcional, banco, migration real, serviço, deploy, PM2, Nginx, firewall, remote Git ou push.

## Scripts

- `npm run verify:foundation`
- `npm run check:invariants`
- `npm run typecheck`
- `npm run check:all`

## Garantias

- TypeScript roda com `noEmit`.
- A validação de invariantes usa Node.js com biblioteca padrão.
- O Core Platform permanece estrutural.
- Módulos comerciais seguem bloqueados.
- Apps continuam cascas não executáveis.
