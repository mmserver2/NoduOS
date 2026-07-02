import { execSync } from "node:child_process";
import fs from "node:fs";

const fail = (message) => {
  console.error("FAIL: " + message);
  process.exitCode = 1;
};

const ok = (message) => console.log("OK: " + message);
const read = (path) => fs.readFileSync(path, "utf8");
const exists = (path) => fs.existsSync(path);

const requireFile = (path) => {
  if (!exists(path)) fail("arquivo obrigatorio ausente: " + path);
  else ok("arquivo presente: " + path);
};

const requireIncludes = (path, needles) => {
  if (!exists(path)) return fail("arquivo ausente: " + path);
  const text = read(path);
  for (const needle of needles) if (!text.includes(needle)) fail(path + " nao contem marcador obrigatorio: " + needle);
};

const docs = [
  "docs/contracts/internal-core/README.md",
  "docs/contracts/internal-core/AUTHORIZATION_DECISION_V1.md",
  "docs/contracts/internal-core/RESOURCE_REFERENCE_V1.md",
  "docs/contracts/internal-core/EVENT_ENVELOPE_V1.md",
  "docs/contracts/internal-core/SECRET_REFERENCE_V1.md",
  "docs/contracts/internal-core/EVIDENCE_REFERENCE_V1.md",
  "docs/contracts/internal-core/TENANT_CONTEXT_V1.md",
  "docs/contracts/internal-core/AUDIT_REFERENCE_V1.md",
  "docs/contracts/internal-core/ERROR_ENVELOPE_V1.md",
  "docs/contracts/internal-core/IDEMPOTENCY_COMMAND_V1.md"
];

const code = [
  "packages/contracts/src/internal-core-contracts.ts",
  "packages/contracts/src/internal-core-contract-validators.ts",
  "packages/contracts/src/internal-core-contract-examples.ts",
  "tests/contracts/internal-core-contracts.structural.test.ts",
  "scripts/check-internal-core-contracts.mjs"
];

for (const file of [...docs, ...code]) requireFile(file);

requireIncludes("docs/contracts/internal-core/README.md", [
  "AuthorizationDecision v1",
  "ResourceReference v1",
  "EventEnvelope v1",
  "SecretReference v1",
  "EvidenceReference v1",
  "TenantContext v1",
  "AuditReference v1",
  "ErrorEnvelope v1",
  "IdempotencyCommand v1",
  "payload_minimized",
  "raw_secret_allowed = never",
  "raw_evidence_allowed = false",
  "no_domain_transfer"
]);

requireIncludes("docs/contracts/internal-core/AUTHORIZATION_DECISION_V1.md", ["fail_closed", "falha fechada", "Core decide", "módulo dono executa", "decisão não é permissão eterna"]);
requireIncludes("docs/contracts/internal-core/RESOURCE_REFERENCE_V1.md", ["no_domain_transfer = true", "não autoriza", "não executa", "banco compartilhado"]);
requireIncludes("docs/contracts/internal-core/EVENT_ENVELOPE_V1.md", ["payload_minimized = true", "Evento não é comando", "não cria autorização nova"]);
requireIncludes("docs/contracts/internal-core/SECRET_REFERENCE_V1.md", ["raw_secret_allowed = never", "Segredo não viaja", "segredo bruto"]);
requireIncludes("docs/contracts/internal-core/EVIDENCE_REFERENCE_V1.md", ["raw_evidence_allowed = false", "Cadeia de custódia", "Visualização/exportação exige AuthorizationDecision"]);
requireIncludes("docs/contracts/internal-core/TENANT_CONTEXT_V1.md", ["ausência de tenant falha fechada", "contexto não autoriza sozinho", "contexto não substitui AuthorizationDecision"]);
requireIncludes("docs/contracts/internal-core/AUDIT_REFERENCE_V1.md", ["auditoria não autoriza", "auditoria não executa domínio", "payload_minimized"]);
requireIncludes("docs/contracts/internal-core/ERROR_ENVELOPE_V1.md", ["sem vazar dado sensível", "stack trace bruto", "message_safe", "fail_closed"]);
requireIncludes("docs/contracts/internal-core/IDEMPOTENCY_COMMAND_V1.md", ["replay_policy", "conflict_policy", "mesma chave com payload igual", "mesma chave com payload diferente", "idempotência não autoriza ação sozinha"]);

requireIncludes("packages/contracts/src/internal-core-contracts.ts", ["AuthorizationDecisionV1", "ResourceReferenceV1", "EventEnvelopeV1", "SecretReferenceV1", "EvidenceReferenceV1", "TenantContextV1", "AuditReferenceV1", "ErrorEnvelopeV1", "IdempotencyCommandV1", "raw_secret_allowed: \"never\"", "raw_evidence_allowed: false", "raw_biometric_allowed: false"]);
requireIncludes("packages/contracts/src/internal-core-contract-validators.ts", ["validateAuthorizationDecision", "validateResourceReference", "validateEventEnvelope", "validateSecretReference", "validateEvidenceReference", "validateTenantContext", "validateAuditReference", "validateErrorEnvelope", "validateIdempotencyCommand", "resolveIdempotencyReplayOrConflict"]);
requireIncludes("packages/contracts/src/internal-core-contract-examples.ts", ["validAuthorizationDecision", "invalidAuthorizationDecision", "validResourceReference", "validEventEnvelope", "validSecretReference", "validEvidenceReference", "validTenantContext", "validAuditReference", "validErrorEnvelope", "validIdempotencyCommand", "replayIdempotencyCommand", "conflictIdempotencyCommand"]);
requireIncludes("tests/contracts/internal-core-contracts.structural.test.ts", ["payload valido de AuthorizationDecision", "payload invalido de AuthorizationDecision", "ResourceReference sem transferencia de dominio", "EventEnvelope com payload minimizado", "SecretReference sem segredo bruto", "EvidenceReference sem evidencia bruta", "TenantContext falha fechado", "TenantContext nao autoriza sozinho", "ErrorEnvelope nao vaza dado sensivel", "IdempotencyCommand detecta replay", "IdempotencyCommand detecta conflito"]);

if (exists("package.json")) {
  const pkg = JSON.parse(read("package.json"));
  const scripts = pkg.scripts || {};
  if (scripts["check:internal-core-contracts"] !== "node scripts/check-internal-core-contracts.mjs") fail("package.json deve possuir check:internal-core-contracts");
  else ok("package.json possui check:internal-core-contracts");
  if (!String(scripts["check:all"] || "").includes("check:internal-core-contracts")) fail("check:all deve incluir check:internal-core-contracts");
  else ok("check:all inclui check:internal-core-contracts");
} else {
  fail("package.json ausente");
}

const trackedFiles = execSync("git ls-files", { encoding: "utf8" }).split(/\r?\n/).filter(Boolean);
const dbPackages = new Set(["prisma", "@prisma/client", "typeorm", "sequelize", "mongoose", "sqlite3", "better-sqlite3", "mysql", "mysql2", "pg", "knex", "drizzle-orm"]);
const isDocOnlyMigrationPlaceholder = (file) => /^infra\/migrations\/(README\.md|\.gitkeep)$/i.test(file);
const isCodeFile = (file) => /\.(ts|tsx|js|jsx|mjs|cjs)$/i.test(file);
const isIgnored = (file) => /^node_modules\//.test(file) || /^docs\//.test(file) || /^scripts\/check-.*\.mjs$/i.test(file) || /^infra\/scripts\/verify-foundation\.sh$/i.test(file);

for (const file of trackedFiles) {
  if (/(^|\/)\.env($|\.|\/)/.test(file)) fail("arquivo .env rastreado: " + file);
  if (/(^|\/)(docker-compose\.ya?ml|ecosystem\.config\.(js|cjs|mjs)|nginx\.conf|.*\.service)$/i.test(file)) fail("artefato real de deploy/servico rastreado: " + file);
  if (/\.sql$/i.test(file)) fail("arquivo SQL rastreado: " + file);
  if (/(^|\/)schema\.prisma$/i.test(file)) fail("Prisma schema rastreado: " + file);
  if (/(^|\/)prisma(\/|$)/i.test(file)) fail("diretorio Prisma rastreado: " + file);
  if (/(^|\/)migrations?(\/|$)/i.test(file) && !isDocOnlyMigrationPlaceholder(file)) fail("migration real ou suspeita rastreada: " + file);
  if (/^modules\/(master|partners|organizations|people|structure|gateway|devices|access-control|cameras|alarms|finance|visitors|tickets|mural|reservations|bi|white-label|notifications|automations|marketplace|audit-compliance|security-lgpd|support)(\/|$)/i.test(file)) fail("modulo comercial proibido rastreado: " + file);
}

if (exists("package.json")) {
  const pkg = JSON.parse(read("package.json"));
  for (const bucket of ["dependencies", "devDependencies", "optionalDependencies", "peerDependencies"]) {
    const deps = pkg[bucket] || {};
    for (const depName of Object.keys(deps)) if (dbPackages.has(depName)) fail("dependencia real de banco/ORM: " + depName);
  }
}

const importPattern = /(?:import\s+.*?\s+from\s+['"]([^'"]+)['"]|import\s*\(\s*['"]([^'"]+)['"]\s*\)|require\s*\(\s*['"]([^'"]+)['"]\s*\))/g;
for (const file of trackedFiles) {
  if (!isCodeFile(file) || isIgnored(file)) continue;
  const text = read(file);
  let match;
  while ((match = importPattern.exec(text)) !== null) {
    const specifier = match[1] || match[2] || match[3] || "";
    const rootName = specifier.startsWith("@") ? specifier.split("/").slice(0, 2).join("/") : specifier.split("/")[0];
    if (dbPackages.has(rootName)) fail("import/require real de banco/ORM em " + file + ": " + specifier);
  }
  if (/\b(app|server)\.listen\s*\(/.test(text)) fail("runtime listen funcional detectado em " + file);
  if (/\bcreateServer\s*\(/.test(text)) fail("createServer funcional detectado em " + file);
  if (/\b(router|app)\.(get|post|put|patch|delete)\s*\(/.test(text)) fail("rota HTTP funcional detectada em " + file);
}

if (process.exitCode) process.exit(process.exitCode);

ok("docs dos 9 contratos existem");
ok("tipos TypeScript, validadores, exemplos e testes estruturais existem");
ok("AuthorizationDecision contem fail-closed");
ok("ResourceReference contem no_domain_transfer");
ok("EventEnvelope contem payload_minimized");
ok("SecretReference contem raw_secret_allowed = never");
ok("EvidenceReference contem raw_evidence_allowed = false");
ok("ErrorEnvelope proibe vazamento sensivel");
ok("IdempotencyCommand define replay/conflict policy");
ok("TenantContext nao autoriza sozinho");
ok("AuditReference nao autoriza");
ok("nenhum endpoint funcional detectado");
ok("nenhum banco/ORM/driver real detectado");
ok("nenhuma migration real detectada");
ok("nenhum .env rastreado");
ok("nenhum modulo comercial proibido detectado");
ok("nenhum deploy real detectado");
ok("contratos publicos internos do Core validados");

