# DEC-201 a DEC-205 — Runtime, persistência, Golden Path, deploy e piloto

## Decisão

O NoduOS inicia o Runtime Core em uma sequência executiva única, preservando gates independentes e commits rastreáveis:

- DEC-201: API mínima, autenticação, sessão e autorização por capacidade.
- DEC-202: PostgreSQL, migrations, schemas `core` e `ops`, isolamento tenant/contexto com RLS forçado.
- DEC-203: integração frontend → API → banco para Visão Geral, Espaços, Pessoas, Dispositivos e Configurações.
- DEC-204: release imutável, systemd, Nginx, HTTPS local, logs, health, backup e restore drill.
- DEC-205: smoke E2E, piloto controlado e promoção restrita à LAN.

## Garantias

- API escuta somente em `127.0.0.1:4100`.
- A exposição ocorre via HTTPS local em `8443`, com HTTP `8080` apenas para redirecionamento.
- Senhas usam `scrypt`; access e refresh tokens são opacos, rotativos e persistidos apenas como hash.
- Refresh token usa cookie HttpOnly, SameSite Strict e Secure; ações de sessão exigem marcador CSRF.
- Consultas operacionais passam por tenant/contexto; tabelas tenant-scoped usam RLS forçado.
- Escritas de criação exigem `Idempotency-Key` e geram auditoria.
- Segredos não entram em Git, logs, relatórios, URLs ou manifests.
- Deploy usa release imutável, troca atômica de symlink, health check e rollback automático em falha.
- Backup é diário e o restore é exercitado antes da aprovação do piloto.
- O `check:all` pré-runtime é preservado como evidência em `check:pre-runtime-legacy`; após a autorização da DEC-200, verificações incompatíveis com runtime são substituídas por um gate que mantém os contratos internos e impede dependências de servidor/banco dentro do Core estrutural.

## Limite da promoção

O resultado da DEC-205 é piloto operacional utilizável na LAN. Produção pública ampla permanece fail-closed até existir domínio, certificado público confiável, backup externo e período de piloto sem bloqueador crítico.

## Estado esperado

```text
DEC-201: concluída
DEC-202: concluída
DEC-203: concluída
DEC-204: concluída
DEC-205: piloto LAN concluído
Próxima DEC livre: DEC-206
```
