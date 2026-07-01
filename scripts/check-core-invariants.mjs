import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const required = [
  'modules/core-platform/src/core-platform.ts',
  'packages/contracts/src/public-contract.ts',
  'packages/tenant-context/src/tenant-context.ts',
  'packages/authorization-client/src/authorization-decision-reference.ts',
  'packages/resource-reference/src/resource-reference-v1.ts',
  'packages/event-envelope/src/event-envelope-v1.ts',
  'packages/secret-reference/src/secret-reference-v1.ts',
  'packages/evidence-reference/src/evidence-reference-v1.ts',
  'packages/audit-client/src/audit-reference.ts',
  'packages/idempotency/src/idempotency.ts',
  'tests/core-platform/core-platform.structural.test.ts'
];

const forbiddenCommercialDirs = [
  'modules/master', 'modules/parceiros', 'modules/partners', 'modules/organizacoes', 'modules/organizations',
  'modules/financeiro', 'modules/finance', 'modules/tickets', 'modules/reservas', 'modules/controle-acesso',
  'modules/access-control', 'modules/cameras', 'modules/vms', 'modules/alarmes', 'modules/marketplace'
];

function fail(message) {
  console.error('FAIL: ' + message);
  process.exit(1);
}

for (const file of required) {
  if (!fs.existsSync(path.join(root, file))) fail('arquivo obrigatorio ausente: ' + file);
}

for (const dir of forbiddenCommercialDirs) {
  if (fs.existsSync(path.join(root, dir))) fail('modulo comercial detectado: ' + dir);
}

const migrationsDir = path.join(root, 'infra/migrations');
if (fs.existsSync(migrationsDir)) {
  const items = fs.readdirSync(migrationsDir).filter((name) => name !== 'README.md' && name !== '.gitkeep');
  if (items.length > 0) fail('migration real detectada em infra/migrations: ' + items[0]);
}

const coreSource = fs.readFileSync(path.join(root, 'modules/core-platform/src/core-platform.ts'), 'utf8');
const requiredTokens = ['issuedBy: \'Core Platform\'', "decision: 'deny'", 'allowed_by_permission_grant', 'allowed_by_inheritance', 'fail_closed'];
for (const token of requiredTokens) {
  if (!coreSource.includes(token)) fail('invariante ausente no Core: ' + token);
}
console.log('OK: invariantes completas do Core Platform preservadas');
