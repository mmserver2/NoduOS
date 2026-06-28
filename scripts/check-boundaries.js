const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const forbiddenCommercialModules = [
  'master', 'partners', 'organizations', 'people-clients', 'structure',
  'gateway-tunnel', 'devices', 'access-control', 'cameras-vms', 'alarms',
  'finance', 'visitors', 'tickets', 'mural', 'reservations', 'bi-reports',
  'white-label', 'notifications', 'automations', 'marketplace',
  'audit-compliance', 'security-lgpd', 'support-operations'
];

function listFiles(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) listFiles(full, acc);
    else acc.push(full);
  }
  return acc;
}

const coreFiles = listFiles(path.join(root, 'modules', 'core-platform', 'src'))
  .filter((file) => file.endsWith('.ts'));

const violations = [];
for (const file of coreFiles) {
  const content = fs.readFileSync(file, 'utf8');
  for (const moduleName of forbiddenCommercialModules) {
    const needles = [
      `modules/${moduleName}`,
      `modules\\${moduleName}`,
      `from '${moduleName}'`,
      `from \"${moduleName}\"`
    ];
    if (needles.some((needle) => content.includes(needle))) {
      violations.push(`${path.relative(root, file)} imports or references forbidden module ${moduleName}`);
    }
  }
}

const apiFiles = listFiles(path.join(root, 'apps', 'api', 'src'))
  .filter((file) => file.endsWith('.ts'));
for (const file of apiFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const forbiddenEndpointSignals = ['app.get(', 'app.post(', 'router.', 'fastify.', 'express()'];
  for (const signal of forbiddenEndpointSignals) {
    if (content.includes(signal)) {
      violations.push(`${path.relative(root, file)} appears to define an endpoint before contract approval: ${signal}`);
    }
  }
}

if (violations.length > 0) {
  console.error('Boundary check failed:');
  for (const violation of violations) console.error(`- ${violation}`);
  process.exit(1);
}

console.log('Boundary check OK: Core Platform remains inside its approved frontier.');
