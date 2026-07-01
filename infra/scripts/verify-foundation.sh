#!/usr/bin/env bash
set -Eeuo pipefail

ROOT="${1:-/opt/noduos/repo}"

fail() {
  printf 'FAIL: %s\n' "$*" >&2
  exit 1
}

ok() {
  printf 'OK: %s\n' "$*"
}

[ -d "$ROOT" ] || fail "repositório ausente: $ROOT"

required_dirs=(
  "apps/api"
  "apps/worker-runtime"
  "packages/contracts"
  "packages/event-envelope"
  "packages/authorization-client"
  "packages/resource-reference"
  "packages/evidence-reference"
  "packages/secret-reference"
  "packages/idempotency"
  "packages/correlation"
  "packages/tenant-context"
  "packages/audit-client"
  "packages/observability"
  "packages/test-kit"
  "modules/core-platform"
  "tests/contracts"
  "tests/authorization"
  "tests/tenant-context"
  "tests/resource-reference"
  "tests/event-envelope"
  "tests/secret-reference"
  "tests/evidence-reference"
  "tests/idempotency"
  "tests/fail-closed"
)

for dir in "${required_dirs[@]}"; do
  [ -d "${ROOT}/${dir}" ] || fail "diretório ausente: ${ROOT}/${dir}"
done

required_files=(
  "package.json"
  "FOUNDATION_SCOPE.md"
  "README.md"
  ".gitignore"
  "tsconfig.base.json"
  "apps/api/package.json"
  "apps/api/src/main.ts"
  "apps/worker-runtime/package.json"
  "apps/worker-runtime/src/main.ts"
  "packages/contracts/src/public-contract.ts"
  "packages/event-envelope/src/event-envelope-v1.ts"
  "packages/authorization-client/src/authorization-decision-reference.ts"
  "packages/resource-reference/src/resource-reference-v1.ts"
  "packages/evidence-reference/src/evidence-reference-v1.ts"
  "packages/secret-reference/src/secret-reference-v1.ts"
  "packages/idempotency/src/idempotency.ts"
  "packages/correlation/src/correlation.ts"
  "packages/tenant-context/src/tenant-context.ts"
  "packages/audit-client/src/audit-reference.ts"
  "packages/observability/src/observability.ts"
  "packages/test-kit/src/structural-expectation.ts"
  "modules/core-platform/package.json"
  "modules/core-platform/src/index.ts"
  "modules/core-platform/src/domain/entities.ts"
  "modules/core-platform/src/authorization/authorization-decision.ts"
  "modules/core-platform/src/application/application-boundary.ts"
  "infra/database/README.md"
  "infra/migrations/README.md"
  "infra/queues/README.md"
  "infra/storage/README.md"
  "infra/observability/README.md"
  "infra/deployment/README.md"
  "infra/environments/README.md"
  "docs/decisions/NO_DEC_CREATED.md"
)

for file in "${required_files[@]}"; do
  [ -f "${ROOT}/${file}" ] || fail "arquivo ausente: ${ROOT}/${file}"
done

commercial_modules=(
  "modules/master"
  "modules/partners"
  "modules/organizations"
  "modules/people"
  "modules/structure"
  "modules/gateway"
  "modules/devices"
  "modules/access-control"
  "modules/cameras"
  "modules/alarms"
  "modules/finance"
  "modules/visitors"
  "modules/tickets"
  "modules/mural"
  "modules/reservations"
  "modules/bi"
  "modules/white-label"
  "modules/notifications"
  "modules/automations"
  "modules/marketplace"
  "modules/audit-compliance"
  "modules/security-lgpd"
  "modules/support"
)

for dir in "${commercial_modules[@]}"; do
  [ ! -e "${ROOT}/${dir}" ] || fail "módulo comercial não permitido nesta etapa: ${ROOT}/${dir}"
done

[ ! -f "${ROOT}/.env" ] || fail ".env real encontrado indevidamente"
[ ! -f "${ROOT}/.env.local" ] || fail ".env.local real encontrado indevidamente"
[ ! -f "${ROOT}/.env.production" ] || fail ".env.production real encontrado indevidamente"

if find "$ROOT" -type f \
  ! -path "$ROOT/node_modules/*" \
  ! -path "$ROOT/.git/*" \
  ! -path "$ROOT/infra/scripts/verify-foundation.sh" \
  \( -name '.env' -o -name '.env.*' \) \
  -print -quit 2>/dev/null | grep -q .; then
  fail "arquivo .env ou .env.* encontrado indevidamente"
fi

if find "$ROOT" -type f \
  ! -path "$ROOT/node_modules/*" \
  ! -path "$ROOT/.git/*" \
  ! -path "$ROOT/infra/scripts/verify-foundation.sh" \
  \( -name '*.ts' -o -name '*.js' -o -name '*.json' -o -name '*.yml' -o -name '*.yaml' -o -name '*.sh' \) \
  -exec grep -IlE -- '-----BEGIN (RSA |DSA |EC |OPENSSH )?PRIVATE KEY-----|raw_secret_allowed[[:space:]]*=[[:space:]]*true|(^|[^A-Z0-9_])(TOKEN|SECRET|PASSWORD)[[:space:]]*=' {} + 2>/dev/null | grep -q .; then
  fail "possível segredo bruto encontrado por padrão textual"
fi

if [ -d "$ROOT/apps" ] && find "$ROOT/apps" -type f \
  \( -name '*.ts' -o -name '*.js' -o -name '*.mts' -o -name '*.cts' \) \
  -exec grep -IlE -- 'app[.]listen|server[.]listen|createServer[[:space:]]*[(]|fastify[.]listen|router[.](get|post|put|patch|delete)[[:space:]]*[(]|app[.](get|post|put|patch|delete)[[:space:]]*[(]|@(Get|Post|Put|Patch|Delete)[[:space:]]*[(]' {} + 2>/dev/null | grep -q .; then
  fail "possível endpoint ou listener funcional encontrado em apps"
fi

if [ -d "$ROOT/infra/migrations" ] && find "$ROOT/infra/migrations" -mindepth 1 -type f ! -name 'README.md' -print -quit 2>/dev/null | grep -q .; then
  fail "migration real encontrada em infra/migrations"
fi

if find "$ROOT" -type f \
  \( -name '*.sqlite' -o -name '*.sqlite3' -o -name '*.db' -o -name '*.dump' -o -name '*.backup' -o -name '*.sql' \) \
  -print -quit 2>/dev/null | grep -q .; then
  fail "arquivo aparente de banco, dump, backup ou SQL encontrado"
fi

if find "$ROOT" -type f \
  \( -name 'docker-compose.yml' -o -name 'docker-compose.yaml' -o -name 'compose.yml' -o -name 'compose.yaml' -o -name 'ecosystem.config.js' -o -name 'ecosystem.config.cjs' -o -name 'nginx.conf' -o -name '*.service' \) \
  -print -quit 2>/dev/null | grep -q .; then
  fail "arquivo aparente de deploy ativo encontrado"
fi

ok "fundação estrutural validada sem módulos comerciais, sem segredo bruto textual, sem servidor funcional, sem banco real e sem deploy"
