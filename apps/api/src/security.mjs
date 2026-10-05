import { createHash, randomBytes, scrypt as scryptCallback, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";

const scrypt = promisify(scryptCallback);
export const PASSWORD_PARAMS = Object.freeze({ N: 16384, r: 8, p: 1, keylen: 64 });

export function token(bytes = 32) {
  return randomBytes(bytes).toString("base64url");
}

export function tokenHash(value) {
  return createHash("sha256").update(value, "utf8").digest("hex");
}

export async function derivePassword(password, saltHex, params = PASSWORD_PARAMS) {
  if (typeof password !== "string" || password.length < 12 || password.length > 256) {
    throw new Error("invalid password length");
  }
  const salt = Buffer.from(saltHex, "hex");
  const derived = await scrypt(password, salt, params.keylen, { N: params.N, r: params.r, p: params.p, maxmem: 64 * 1024 * 1024 });
  return Buffer.from(derived).toString("hex");
}

export async function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  return { salt, hash: await derivePassword(password, salt), params: PASSWORD_PARAMS };
}

export async function verifyPassword(password, salt, expectedHash, params) {
  try {
    const actual = Buffer.from(await derivePassword(password, salt, params), "hex");
    const expected = Buffer.from(expectedHash, "hex");
    return actual.length === expected.length && timingSafeEqual(actual, expected);
  } catch {
    return false;
  }
}

export function safeUuid(value) {
  return typeof value === "string" && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}

export function safeIdempotencyKey(value) {
  return typeof value === "string" && /^[A-Za-z0-9._:-]{12,128}$/.test(value);
}
