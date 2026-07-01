import fs from 'node:fs';
const file = 'tests/core-platform/core-platform.structural.test.ts';
if (!fs.existsSync(file)) {
  console.error('FAIL: teste estrutural ausente');
  process.exit(1);
}
const source = fs.readFileSync(file, 'utf8');
for (const token of ['structuralAssert', 'AuthorizationDecisionService', 'createSecretReferenceV1', 'createEvidenceReferenceV1', 'assertEventEnvelopeV1']) {
  if (!source.includes(token)) {
    console.error('FAIL: token de teste ausente: ' + token);
    process.exit(1);
  }
}
console.log('OK: suite estrutural do Core Platform presente');
