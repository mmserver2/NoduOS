#!/usr/bin/env bash
set -Eeuo pipefail
umask 077

BASE_URL="${1:-https://127.0.0.1:8443}"
CREDENTIALS_FILE="${2:-/opt/noduos/shared/secrets/pilot-admin-credentials.txt}"
test -r "$CREDENTIALS_FILE"
EMAIL="$(sed -n 's/^EMAIL=//p' "$CREDENTIALS_FILE")"
LOGIN_VALUE="$(sed -n 's/^PASSWORD=//p' "$CREDENTIALS_FILE")"
test -n "$EMAIL"
test -n "$LOGIN_VALUE"
TMP_DIR="$(mktemp -d /tmp/noduos-smoke.XXXXXX)"
cleanup(){ rm -rf -- "$TMP_DIR"; }
trap cleanup EXIT

curl -ksSf "$BASE_URL/api/health" | jq -e '.status=="ok"' >/dev/null
jq -n --arg email "$EMAIL" --arg password "$LOGIN_VALUE" '{email:$email,password:$password}' > "$TMP_DIR/login.json"
curl -ksSf -c "$TMP_DIR/cookies" -H 'content-type: application/json' --data-binary @"$TMP_DIR/login.json" "$BASE_URL/api/v1/auth/login" > "$TMP_DIR/session.json"
ACCESS_VALUE="$(jq -er '.accessToken' "$TMP_DIR/session.json")"
curl -ksSf -H "authorization: Bearer $ACCESS_VALUE" "$BASE_URL/api/v1/auth/me" | jq -e '.user.role=="owner"' >/dev/null
SPACE_NAME="Piloto $(date -u +%Y%m%dT%H%M%SZ)"
jq -n --arg name "$SPACE_NAME" '{name:$name}' > "$TMP_DIR/space.json"
curl -ksSf -H "authorization: Bearer $ACCESS_VALUE" -H 'content-type: application/json' -H "idempotency-key: smoke-space-$(date -u +%Y%m%d%H%M%S)" --data-binary @"$TMP_DIR/space.json" "$BASE_URL/api/v1/spaces" | jq -e --arg name "$SPACE_NAME" '.name==$name' >/dev/null
curl -ksSf -H "authorization: Bearer $ACCESS_VALUE" "$BASE_URL/api/v1/spaces" | jq -e --arg name "$SPACE_NAME" '.items|any(.name==$name)' >/dev/null
curl -ksSf -b "$TMP_DIR/cookies" -H 'x-noduos-csrf: 1' -H "authorization: Bearer $ACCESS_VALUE" -X POST "$BASE_URL/api/v1/auth/logout" >/dev/null
printf 'smoke_runtime=OK\n'
