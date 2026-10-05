#!/usr/bin/env bash
set -Eeuo pipefail
umask 077

BACKUP_ROOT="/opt/noduos/shared/backups"
STAMP="$(date -u +%Y%m%dT%H%M%SZ)"
TARGET="$BACKUP_ROOT/noduos-$STAMP.dump"
TMP="$TARGET.partial"

install -d -m 0700 -o root -g root "$BACKUP_ROOT"
runuser -u postgres -- pg_dump --format=custom --no-owner --no-acl noduos > "$TMP"
test -s "$TMP"
mv -f "$TMP" "$TARGET"
sha256sum "$TARGET" > "$TARGET.sha256"
find "$BACKUP_ROOT" -maxdepth 1 -type f -name 'noduos-*.dump' -mtime +14 -delete
find "$BACKUP_ROOT" -maxdepth 1 -type f -name 'noduos-*.dump.sha256' -mtime +14 -delete
printf 'backup=%s\n' "$TARGET"
