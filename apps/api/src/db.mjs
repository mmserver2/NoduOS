import pg from "pg";
import { config } from "./config.mjs";

const { Pool } = pg;
export const pool = new Pool({
  connectionString: config.databaseUrl,
  max: 8,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
  application_name: "noduos-api",
});

pool.on("error", (error) => {
  console.error(JSON.stringify({ level: "error", event: "db_pool_error", code: error.code || "DB_POOL" }));
});

export async function query(text, values = []) {
  return pool.query(text, values);
}

export async function withTenant(scope, operation) {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    await client.query("SELECT set_config('app.tenant_id', $1, true), set_config('app.context_id', $2, true), set_config('app.user_id', $3, true)", [scope.tenantId, scope.contextId, scope.userId]);
    const result = await operation(client);
    await client.query("COMMIT");
    return result;
  } catch (error) {
    await client.query("ROLLBACK").catch(() => undefined);
    throw error;
  } finally {
    client.release();
  }
}

export async function closePool() {
  await pool.end();
}
