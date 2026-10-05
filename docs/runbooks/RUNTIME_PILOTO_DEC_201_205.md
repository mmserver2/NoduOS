# NoduOS — Runbook do piloto DEC-201 a DEC-205

## Escopo

Piloto operacional na LAN, com frontend HTTPS local, API em loopback, PostgreSQL local, autenticação com tokens opacos, sessão rotativa, isolamento por tenant/contexto, RLS, auditoria, idempotência, backup e restore drill.

## Operação

- URL: `https://10.0.0.119:8443`
- Saúde pública mínima: `/api/health`
- Serviço: `sudo systemctl status noduos-api`
- Logs: `sudo journalctl -u noduos-api -n 200 --no-pager`
- Credencial inicial: arquivo restrito informado pelo relatório de execução.
- Backup manual: `sudo systemctl start noduos-backup.service`
- Timer: `sudo systemctl status noduos-backup.timer`
- Smoke: `sudo /opt/noduos/current/infra/scripts/smoke-runtime.sh`

## Segurança

O certificado é local e autoassinado. A API não escuta na rede. Segredos não pertencem ao Git, logs, relatórios ou URLs. A promoção pública exige domínio, certificado confiável, backup externo e janela formal de piloto sem bloqueador crítico.

## Rollback

O deploy guarda o alvo anterior de `/opt/noduos/current`. Em falha de health/smoke, restaura o symlink anterior, as configurações operacionais anteriores e reinicia os serviços. Banco não é apagado automaticamente.
