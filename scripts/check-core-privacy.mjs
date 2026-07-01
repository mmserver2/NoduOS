import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const checks = [
  ['packages/secret-reference/src/secret-reference-v1.ts', ['rawSecretAllowed', 'never', 'noDomainTransfer']],
  ['packages/evidence-reference/src/evidence-reference-v1.ts', ['rawEvidenceAllowed', 'false', 'chainOfCustodyReference']],
  ['packages/event-envelope/src/event-envelope-v1.ts', ['payloadMinimized', 'purpose', 'auditReference']],
  ['modules/core-platform/src/core-platform.ts', ['failClosed', 'Core Platform', 'AuthorizationDecisionService']]
];

function fail(message) {
  console.error('FAIL: ' + message);
  process.exit(1);
}

for (const [file, tokens] of checks) {
  const fullPath = path.join(root, file);
  if (!fs.existsSync(fullPath)) fail('arquivo ausente: ' + file);
  const source = fs.readFileSync(fullPath, 'utf8');
  for (const token of tokens) {
    if (!source.includes(token)) fail('token obrigatorio ausente em ' + file + ': ' + token);
  }
}
console.log('OK: privacidade, minimizacao, evidencia e segredo por referencia validados');
