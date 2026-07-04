import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const fail = (message) => {
  console.error(`FAIL: ${message}`);
  process.exit(1);
};
const ok = (message) => console.log(`OK: ${message}`);

const requiredFiles = [
  "docs/api-boundary/core/README.md",
  "docs/api-boundary/core/CORE_INTERNAL_API_BOUNDARY.md",
  "modules/core-platform/src/api-boundary/index.ts",
  "modules/core-platform/src/api-boundary/core-boundary-types.ts",
  "modules/core-platform/src/api-boundary/core-boundary-errors.ts",
  "modules/core-platform/src/api-boundary/core-boundary-result.ts",
  "modules/core-platform/src/api-boundary/core-authorization-boundary.ts",
  "modules/core-platform/src/api-boundary/core-tenant-context-boundary.ts",
  "modules/core-platform/src/api-boundary/core-resource-reference-boundary.ts",
  "modules/core-platform/src/api-boundary/core-event-envelope-boundary.ts",
  "modules/core-platform/src/api-boundary/core-secret-reference-boundary.ts",
  "modules/core-platform/src/api-boundary/core-evidence-reference-boundary.ts",
  "modules/core-platform/src/api-boundary/core-audit-boundary.ts",
  "modules/core-platform/src/api-boundary/core-idempotency-boundary.ts",
  "modules/core-platform/src/api-boundary/core-contract-boundary.ts",
  "modules/core-platform/src/api-boundary/core-boundary-facade.ts",
  "tests/core-platform/core-api-boundary.structural.test.ts",
  "scripts/check-core-api-boundary.mjs",
];

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) fail(`arquivo ausente: ${file}`);
  ok(`arquivo presente: ${file}`);
}

const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
if (!pkg.scripts?.["check:core-api-boundary"]) fail("package.json nao possui check:core-api-boundary");
ok("package.json possui check:core-api-boundary");
if (!pkg.scripts?.["check:all"]?.includes("check:core-api-boundary")) fail("check:all nao inclui check:core-api-boundary");
ok("check:all inclui check:core-api-boundary");

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function mustContain(file, text) {
  if (!read(file).includes(text)) fail(`${file} nao contem: ${text}`);
  ok(`${file} contem: ${text}`);
}

mustContain("modules/core-platform/src/index.ts", "api-boundary/index.js");
mustContain("docs/api-boundary/core/README.md", "sem runtime HTTP");
mustContain("docs/api-boundary/core/CORE_INTERNAL_API_BOUNDARY.md", "fail_closed");
mustContain("docs/api-boundary/core/CORE_INTERNAL_API_BOUNDARY.md", "ErrorEnvelope");
mustContain("docs/api-boundary/core/CORE_INTERNAL_API_BOUNDARY.md", "AuthorizationDecision");
mustContain("docs/api-boundary/core/CORE_INTERNAL_API_BOUNDARY.md", "ResourceReference");
mustContain("docs/api-boundary/core/CORE_INTERNAL_API_BOUNDARY.md", "EventEnvelope");
mustContain("docs/api-boundary/core/CORE_INTERNAL_API_BOUNDARY.md", "SecretReference");
mustContain("docs/api-boundary/core/CORE_INTERNAL_API_BOUNDARY.md", "EvidenceReference");
mustContain("docs/api-boundary/core/CORE_INTERNAL_API_BOUNDARY.md", "não acessa banco");
mustContain("docs/api-boundary/core/CORE_INTERNAL_API_BOUNDARY.md", "não executa domínio comercial");
mustContain("modules/core-platform/src/api-boundary/core-authorization-boundary.ts", "CORE_AUTH_TENANT_REQUIRED");
mustContain("modules/core-platform/src/api-boundary/core-tenant-context-boundary.ts", "does_not_authorize");
mustContain("modules/core-platform/src/api-boundary/core-resource-reference-boundary.ts", "no_domain_transfer");
mustContain("modules/core-platform/src/api-boundary/core-event-envelope-boundary.ts", "payload_minimized");
mustContain("modules/core-platform/src/api-boundary/core-secret-reference-boundary.ts", "raw_secret_allowed");
mustContain("modules/core-platform/src/api-boundary/core-evidence-reference-boundary.ts", "raw_evidence_allowed");
mustContain("modules/core-platform/src/api-boundary/core-audit-boundary.ts", "does_not_authorize");
mustContain("modules/core-platform/src/api-boundary/core-boundary-errors.ts", "message_safe");
mustContain("modules/core-platform/src/api-boundary/core-idempotency-boundary.ts", "CORE_IDEMPOTENCY_CONFLICT");
mustContain("modules/core-platform/src/api-boundary/core-contract-boundary.ts", "CORE_CONTRACT_UNKNOWN");
mustContain("modules/core-platform/src/api-boundary/core-boundary-facade.ts", "createCoreBoundaryFacade");

const scanFiles = requiredFiles.filter((file) => file.endsWith(".ts"));
const forbiddenPatterns = [
  [/\bapp\s*\.\s*listen\s*\(/, "app listen"],
  [/\bserver\s*\.\s*listen\s*\(/, "server listen"],
  [/\bcreateServer\s*\(/, "createServer"],
  [/\b(router|app|server)\s*\.\s*(get|post|put|patch|delete)\s*\(/, "HTTP route method"],
  [/\bexpress\s*\(/, "express runtime"],
  [/\bfastify\s*\(/, "fastify runtime"],
  [/@nestjs\//, "nestjs runtime"],
  [/\bkoa\s*\(/, "koa runtime"],
  [/\bhapi\b/, "hapi runtime"],
  [/new\s+PrismaClient\b/, "Prisma client"],
  [/from\s+["']@prisma\/client["']/, "Prisma import"],
  [/from\s+["']typeorm["']/, "TypeORM import"],
  [/from\s+["']sequelize["']/, "Sequelize import"],
  [/from\s+["']mongoose["']/, "Mongoose import"],
  [/from\s+["']pg["']/, "Postgres driver import"],
  [/from\s+["']mysql2?["']/, "MySQL driver import"],
  [/from\s+["']sqlite3["']/, "SQLite driver import"],
  [/from\s+["']better-sqlite3["']/, "Better SQLite driver import"],
  [/from\s+["']knex["']/, "Knex import"],
  [/from\s+["']drizzle-orm["']/, "Drizzle import"],
  [/process\.env\b/, "process env"],
];

for (const file of scanFiles) {
  const content = read(file);
  for (const [regex, label] of forbiddenPatterns) {
    if (regex.test(content)) {
      fail(`padrao proibido encontrado em ${file}: ${label}`);
    }
  }
}
ok("nenhum endpoint, runtime HTTP, banco, migration, deploy ou env detectado na API Boundary");

for (const file of scanFiles) {
  const content = read(file);
  const badRelativeImport = content
    .split("\n")
    .map((line, index) => ({ line, number: index + 1 }))
    .filter(({ line }) => /^(import|export).*from\s+["']\./.test(line))
    .filter(({ line }) => !/\.(js|json|node)["']/.test(line));
  if (badRelativeImport.length > 0) {
    fail(`import/export relativo sem extensao .js em ${file}:${badRelativeImport[0].number}`);
  }
}
ok("imports/exports relativos da API Boundary usam extensao .js");

const prohibitedModuleDirs = [
  "modules/master",
  "modules/partners",
  "modules/organizations",
  "modules/people",
  "modules/people-clients",
  "modules/structure",
  "modules/inheritance-permissions",
  "modules/gateway",
  "modules/gateway-tunnel",
  "modules/devices",
  "modules/access-control",
  "modules/cameras",
  "modules/cameras-vms",
  "modules/alarms",
  "modules/finance",
  "modules/visitors",
  "modules/tickets",
  "modules/mural",
  "modules/reservations",
  "modules/bi",
  "modules/bi-reports",
  "modules/white-label",
  "modules/notifications",
  "modules/automations",
  "modules/marketplace",
  "modules/audit-compliance",
  "modules/security-lgpd",
  "modules/support",
  "modules/support-operations",
];

for (const dir of prohibitedModuleDirs) {
  if (fs.existsSync(path.join(root, dir))) fail(`modulo comercial proibido detectado: ${dir}`);
}
ok("nenhum modulo comercial proibido detectado");
ok("API Boundary interna do Core validada");
