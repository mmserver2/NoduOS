import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("runtime contracts preserve isolation and fail-closed gates", async () => {
  const sql = await readFile(new URL("../../infra/migrations/001_runtime_core.sql", import.meta.url), "utf8");
  const server = await readFile(new URL("../../apps/api/src/server.mjs", import.meta.url), "utf8");
  for (const required of ["FORCE ROW LEVEL SECURITY", "tenant_context_isolation", "current_setting(''app.tenant_id''", "core.audit_log", "core.idempotency_keys"]) assert.match(sql, new RegExp(required.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  for (const required of ["AUTHORIZATION_DENIED", "IDEMPOTENCY_KEY_REQUIRED", "PAYLOAD_TOO_LARGE", "SESSION_INVALID", "CSRF_REJECTED"]) assert.ok(server.includes(required));
  assert.equal(/console\.(log|error)\([^\n]*(password|accessToken|refresh)/i.test(server), false);
});
