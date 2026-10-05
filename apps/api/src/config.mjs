function integer(name, fallback, minimum, maximum) {
  const raw = process.env[name];
  const value = raw === undefined ? fallback : Number.parseInt(raw, 10);
  if (!Number.isInteger(value) || value < minimum || value > maximum) {
    throw new Error(`invalid ${name}`);
  }
  return value;
}

function required(name) {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`missing ${name}`);
  return value;
}

export const config = Object.freeze({
  host: process.env.NODUOS_API_HOST?.trim() || "127.0.0.1",
  port: integer("NODUOS_API_PORT", 4100, 1, 65535),
  databaseUrl: required("DATABASE_URL"),
  cookieSecure: process.env.NODUOS_COOKIE_SECURE !== "0",
  accessTtlSeconds: integer("NODUOS_ACCESS_TTL_SECONDS", 900, 300, 3600),
  refreshTtlSeconds: integer("NODUOS_REFRESH_TTL_SECONDS", 604800, 3600, 2592000),
  bodyLimitBytes: integer("NODUOS_BODY_LIMIT_BYTES", 32768, 1024, 1048576),
});
