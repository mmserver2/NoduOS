import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const required = [
  "docs/contracts/internal-core/README.md",
  "docs/contracts/internal-core/AUTHORIZATION_DECISION_V1.md",
  "docs/contracts/internal-core/RESOURCE_REFERENCE_V1.md",
  "docs/contracts/internal-core/EVENT_ENVELOPE_V1.md",
  "docs/contracts/internal-core/SECRET_REFERENCE_V1.md",
  "docs/contracts/internal-core/EVIDENCE_REFERENCE_V1.md",
  "docs/contracts/internal-core/TENANT_CONTEXT_V1.md",
  "docs/contracts/internal-core/AUDIT_REFERENCE_V1.md",
  "docs/contracts/internal-core/ERROR_ENVELOPE_V1.md",
  "docs/contracts/internal-core/IDEMPOTENCY_COMMAND_V1.md",
  "packages/contracts/src/internal-core-contracts.ts",
  "packages/contracts/src/internal-core-contract-validators.ts",
  "packages/contracts/src/internal-core-contract-examples.ts",
  "tests/contracts/internal-core-contracts.structural.test.ts",
];

for (const file of required) {
  if (!existsSync(file)) throw new Error(`internal core contract file missing: ${file}`);
}

function sourceFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? sourceFiles(path) : /\.(?:ts|tsx|mjs|js)$/.test(entry.name) ? [path] : [];
  });
}

const coreSources = ["packages/contracts/src", "modules/core-platform/src"]
  .filter(existsSync)
  .flatMap(sourceFiles);
const runtimeImport = /(?:from\s+|require\s*\()["'][^"']*(?:node:http|node:https|apps\/api|infra\/migrations|\bpg\b|express|fastify|koa|hapi|mysql2?|sqlite3?|sequelize|typeorm|prisma)[^"']*["']/;
for (const file of coreSources) {
  if (runtimeImport.test(readFileSync(file, "utf8"))) {
    throw new Error(`runtime dependency crossed into structural Core: ${file}`);
  }
}

console.log("OK: contratos internos preservados; gate pre-runtime transicionado sem contaminar o Core estrutural");
