# Plano de Testes - Core Platform Inicial

## Obrigatórios nesta primeira leva

- Contratos possuem owner_module, versionamento, tipo e status.
- Tenant/contexto/ator são obrigatórios para ação crítica.
- AuthorizationDecision expirada, negada ou fora de escopo falha fechado.
- ResourceReference exige owner_module e no_domain_transfer = true.
- EventEnvelope v1 rejeita payload com segredo bruto.
- Idempotência bloqueia reuso conflitante de chave.
- Core não importa classes internas de módulos comerciais.
- apps/api não possui endpoints comerciais.

## Comando

```bash
npm run verify
```
