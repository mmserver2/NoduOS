import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = '/opt/noduos/repo';

const fail = (message) => {
  console.error(`FAIL: ${message}`);
  process.exit(1);
};

const ok = (message) => {
  console.log(`OK: ${message}`);
};

const requiredPaths = [
  'package.json',
  'FOUNDATION_SCOPE.md',
  'tsconfig.base.json',
  'tsconfig.json',
  'apps/api/src/main.ts',
  'apps/worker-runtime/src/main.ts',
  'packages/contracts/src/public-contract.ts',
  'packages/event-envelope/src/event-envelope-v1.ts',
  'packages/authorization-client/src/authorization-decision-reference.ts',
  'packages/resource-reference/src/resource-reference-v1.ts',
  'packages/evidence-reference/src/evidence-reference-v1.ts',
  'packages/secret-reference/src/secret-reference-v1.ts',
  'packages/idempotency/src/idempotency.ts',
  'packages/correlation/src/correlation.ts',
  'packages/tenant-context/src/tenant-context.ts',
  'packages/audit-client/src/audit-reference.ts',
  'packages/observability/src/observability.ts',
  'packages/test-kit/src/structural-expectation.ts',
  'modules/core-platform/src/index.ts',
  'modules/core-platform/src/domain/entities.ts',
  'modules/core-platform/src/authorization/authorization-decision.ts',
  'modules/core-platform/src/application/application-boundary.ts',
  'infra/scripts/verify-foundation.sh'
];

for (const rel of requiredPaths) {
  if (!existsSync(join(root, rel))) {
    fail(`caminho obrigatório ausente: ${rel}`);
  }
}

const forbiddenPaths = [
  'modules/master',
  'modules/partners',
  'modules/organizations',
  'modules/people',
  'modules/structure',
  'modules/gateway',
  'modules/devices',
  'modules/access-control',
  'modules/cameras',
  'modules/alarms',
  'modules/finance',
  'modules/visitors',
  'modules/tickets',
  'modules/mural',
  'modules/reservations',
  'modules/bi',
  'modules/white-label',
  'modules/notifications',
  'modules/automations',
  'modules/marketplace',
  'modules/audit-compliance',
  'modules/security-lgpd',
  'modules/support',
  '.env',
  '.env.local',
  '.env.production',
  'docker-compose.yml',
  'ecosystem.config.js',
  'nginx.conf'
];

for (const rel of forbiddenPaths) {
  if (existsSync(join(root, rel))) {
    fail(`caminho proibido encontrado: ${rel}`);
  }
}

const packageJson = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));

if (packageJson.name !== 'noduos') {
  fail('package.json precisa manter name=noduos');
}

if (packageJson.noduos?.functionalEndpoints !== false) {
  fail('package.json precisa manter noduos.functionalEndpoints=false');
}

if (packageJson.noduos?.commercialModules !== false) {
  fail('package.json precisa manter noduos.commercialModules=false');
}

if (packageJson.noduos?.deploy !== false) {
  fail('package.json precisa manter noduos.deploy=false');
}

if (packageJson.noduos?.services !== false) {
  fail('package.json precisa manter noduos.services=false');
}

if (packageJson.noduos?.database !== false) {
  fail('package.json precisa manter noduos.database=false');
}

const authDecision = readFileSync(join(root, 'modules/core-platform/src/authorization/authorization-decision.ts'), 'utf8');
if (!authDecision.includes('expiredDecisionFailsClosed')) {
  fail('AuthorizationDecision precisa preservar expiredDecisionFailsClosed');
}

const appBoundary = readFileSync(join(root, 'modules/core-platform/src/application/application-boundary.ts'), 'utf8');
if (!appBoundary.includes('noCommercialDomainExecution')) {
  fail('Core application boundary precisa preservar noCommercialDomainExecution');
}

const apiShell = readFileSync(join(root, 'apps/api/src/main.ts'), 'utf8');

if (/app\.listen\s*\(|server\.listen\s*\(|createServer\s*\(|fastify\.listen\s*\(|router\.(get|post|put|patch|delete)\s*\(|app\.(get|post|put|patch|delete)\s*\(/.test(apiShell)) {
  fail('apps/api não pode conter listener ou rota funcional nesta etapa');
}

if (!/exposesFunctionalEndpoint:\s*false/.test(apiShell)) {
  fail('apps/api precisa declarar exposesFunctionalEndpoint=false');
}

if (!/startsServer:\s*false/.test(apiShell)) {
  fail('apps/api precisa declarar startsServer=false');
}

const workerShell = readFileSync(join(root, 'apps/worker-runtime/src/main.ts'), 'utf8');

if (/queue\.process\s*\(|processJob\s*\(|worker\.start\s*\(|consume\s*\(|subscribe\s*\(|runWorker\s*\(/i.test(workerShell)) {
  fail('apps/worker-runtime não pode conter worker real nesta etapa');
}

if (!/startsWorker:\s*false/.test(workerShell)) {
  fail('apps/worker-runtime precisa declarar startsWorker=false');
}

if (!/consumesQueue:\s*false/.test(workerShell)) {
  fail('apps/worker-runtime precisa declarar consumesQueue=false');
}

if (!/executesJob:\s*false/.test(workerShell)) {
  fail('apps/worker-runtime precisa declarar executesJob=false');
}

function walk(dir, out = []) {
  for (const item of readdirSync(dir)) {
    if (item === '.git' || item === 'node_modules' || item === 'dist' || item === 'coverage') continue;
    const full = join(dir, item);
    const st = statSync(full);
    if (st.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

const files = walk(root);

const sqlOrDb = files.filter((f) => /\.(sql|sqlite|sqlite3|db|dump|backup)$/i.test(f));
if (sqlOrDb.length) {
  fail(`arquivo de banco/dump/sql encontrado: ${sqlOrDb[0]}`);
}

const deployFiles = files.filter((f) => /(?:docker-compose\.ya?ml|compose\.ya?ml|ecosystem\.config\.c?js|nginx\.conf|\.service)$/i.test(f));
if (deployFiles.length) {
  fail(`arquivo de deploy ativo encontrado: ${deployFiles[0]}`);
}

const envFiles = files.filter((f) => /(^|\/)\.env(\.|$)/.test(f));
if (envFiles.length) {
  fail(`arquivo .env encontrado: ${envFiles[0]}`);
}

const suspiciousSecretFiles = files.filter((f) => {
  if (!/\.(ts|js|json|yml|yaml|sh|md)$/i.test(f)) return false;
  if (f.endsWith('/infra/scripts/verify-foundation.sh')) return false;
  const content = readFileSync(f, 'utf8');
  return /-----BEGIN (RSA |DSA |EC |OPENSSH )?PRIVATE KEY-----|(^|[^A-Z0-9_])(TOKEN|SECRET|PASSWORD)\s*=/.test(content);
});

if (suspiciousSecretFiles.length) {
  fail(`possível segredo bruto textual encontrado: ${suspiciousSecretFiles[0]}`);
}

ok('invariantes estruturais do NoduOS preservadas');
ok('Core Platform continua estrutural');
ok('apps continuam sem endpoint/worker funcional');
ok('módulos comerciais continuam ausentes');
ok('banco, deploy e segredos brutos continuam ausentes');
