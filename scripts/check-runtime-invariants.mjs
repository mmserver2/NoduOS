import { existsSync, readFileSync } from "node:fs";

const required = [
  "apps/api/package.json","apps/api/src/config.mjs","apps/api/src/db.mjs","apps/api/src/security.mjs","apps/api/src/server.mjs",
  "infra/migrations/001_runtime_core.sql","infra/deployment/noduos-api.service","infra/deployment/noduos.nginx.conf",
  "infra/scripts/backup-runtime.sh","infra/scripts/smoke-runtime.sh","tests/runtime/security.test.mjs","tests/runtime/contracts.test.mjs",
  "scripts/check-internal-core-contracts-runtime.mjs",
];
for (const file of required) if (!existsSync(file)) throw new Error(`runtime file missing: ${file}`);

const server = readFileSync("apps/api/src/server.mjs", "utf8");
const config = readFileSync("apps/api/src/config.mjs", "utf8");
const sql = readFileSync("infra/migrations/001_runtime_core.sql", "utf8");
const web = readFileSync("apps/web/src/main.tsx", "utf8");
const service = readFileSync("infra/deployment/noduos-api.service", "utf8");
const nginx = readFileSync("infra/deployment/noduos.nginx.conf", "utf8");
const packageJson = JSON.parse(readFileSync("package.json", "utf8"));
if (!config.includes('"127.0.0.1"')) throw new Error("API must default to loopback");
if (!server.includes("withTenant") || !server.includes("requireCapability") || !server.includes("idempotent")) throw new Error("runtime request gates incomplete");
if (!sql.includes("FORCE ROW LEVEL SECURITY") || !sql.includes("tenant_context_isolation")) throw new Error("database isolation missing");
if (web.includes("setAuthenticated(true)") || !web.includes("/v1/auth/login")) throw new Error("web shell still uses mock authentication");
if (!service.includes("WorkingDirectory=/opt/noduos/current\n") || service.includes("MemoryDenyWriteExecute=true")) throw new Error("Node systemd execution path or JIT compatibility is invalid");
if (!nginx.includes("root /opt/noduos/current/apps/web/dist;")) throw new Error("Nginx release path is inconsistent with current symlink");
if (!packageJson.scripts?.["check:pre-runtime-legacy"]) throw new Error("pre-runtime evidence gate was not preserved");
if (!packageJson.scripts?.["check:all"]?.includes("check:internal-core-contracts-runtime")) throw new Error("runtime-compatible contract gate missing from check:all");
if (packageJson.scripts["check:all"].includes("check:pre-runtime-legacy")) throw new Error("legacy pre-runtime gate cannot execute after runtime authorization");
const tracked = required.concat(["apps/web/src/main.tsx","apps/web/src/routes.tsx"]);
const secretPattern = /-----BEGIN (?:RSA |DSA |EC |OPENSSH )?PRIVATE KEY-----|(?:password|token|secret)\s*[=:]\s*["'][^"']{8,}["']/i;
for (const file of tracked) if (secretPattern.test(readFileSync(file, "utf8"))) throw new Error(`possible raw secret in ${file}`);
console.log("OK: runtime, tenant isolation, authorization, idempotency and secret gates validated");
