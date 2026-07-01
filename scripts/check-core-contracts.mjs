import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const requiredFiles = [
  '00_BIBLIA_DO_PROJETO.md',
  '01_MAPA_DE_MODULOS.md',
  '02_REGRAS_DE_ARQUITETURA.md',
  '03_DECISOES_OFICIAIS.md',
  '04_PROMPTS_DE_TRABALHO.md',
  '05_CATALOGO_DE_CONTRATOS_PUBLICOS.md',
  '06_MATRIZ_TECNICA_PERMISSOES_POR_CONTRATO.md',
  '07_MATRIZ_TECNICA_DADOS_SENSIVEIS_POR_CONTRATO.md',
  '08_DETALHAMENTO_EVENTENVELOPE_V1.md',
  '09_DETALHAMENTO_EVIDENCEREFERENCE_V1.md',
  '10_DETALHAMENTO_SECRETREFERENCE_V1.md',
  '11_DETALHAMENTO_AUTHORIZATIONDECISION_V1.md',
  '12_DETALHAMENTO_RESOURCEREFERENCE_V1.md',
  '13_BLUEPRINT_TECNICO_APLICACAO_NODUOS.md',
  'IDENTIDADE_OFICIAL_NODUOS.md',
  'packages/contracts/src/public-contract.ts',
  'modules/core-platform/src/core-platform.ts'
];

const requiredContractIds = [
  'NODUOS.CORE.CORE_AUTHORIZATION.v1',
  'NODUOS.CORE.AUTHORIZATION_DECISION.v1',
  'NODUOS.CORE.RESOURCE_REFERENCE.v1',
  'NODUOS.CORE.CONTEXT.v1',
  'NODUOS.CORE.TENANT.v1',
  'NODUOS.CORE.PERMISSION_GRANT.v1',
  'NODUOS.CORE.INHERITANCE_GRANT.v1',
  'NODUOS.CORE.MODULE_REGISTRY.v1',
  'NODUOS.CORE.LICENSE.v1',
  'NODUOS.CORE.FEATURE_FLAG.v1',
  'NODUOS.CORE.AUDIT_REFERENCE.v1'
];

function fail(message) {
  console.error('FAIL: ' + message);
  process.exit(1);
}

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) fail('arquivo obrigatorio ausente: ' + file);
}

const source = fs.readFileSync(path.join(root, 'packages/contracts/src/public-contract.ts'), 'utf8');
for (const contractId of requiredContractIds) {
  if (!source.includes(contractId)) fail('contract_id ausente: ' + contractId);
}
if (!source.includes('rawPayloadAllowed: false')) fail('rawPayloadAllowed false ausente');
if (!source.includes('noSharedDatabase: true')) fail('noSharedDatabase true ausente');
if (!source.includes('noDomainTransfer: true')) fail('noDomainTransfer true ausente');
console.log('OK: contratos Core validados');
