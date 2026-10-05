#!/usr/bin/env bash
set -Eeuo pipefail
umask 077

BACKUP_FILE="${1:?backup file required}"
test -s "$BACKUP_FILE"
sha256sum --check "$BACKUP_FILE.sha256"
DRILL_DB="noduos_restore_drill_$(date -u +%Y%m%d%H%M%S)"
cleanup(){ runuser -u postgres -- dropdb --if-exists "$DRILL_DB" >/dev/null 2>&1 || true; }
trap cleanup EXIT
runuser -u postgres -- createdb "$DRILL_DB"
runuser -u postgres -- pg_restore --exit-on-error --no-owner --no-acl --dbname="$DRILL_DB" < "$BACKUP_FILE"
runuser -u postgres -- psql --dbname="$DRILL_DB" --tuples-only --no-align --command="SELECT CASE WHEN to_regclass('core.tenants') IS NOT NULL AND to_regclass('core.user_sessions') IS NOT NULL AND to_regclass('ops.spaces') IS NOT NULL THEN 'OK' ELSE 'FAIL' END" | grep -qx OK
printf 'restore_drill=OK\n'
