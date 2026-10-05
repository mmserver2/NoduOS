import test from "node:test";
import assert from "node:assert/strict";
import { derivePassword, hashPassword, safeIdempotencyKey, safeUuid, token, tokenHash, verifyPassword } from "../../apps/api/src/security.mjs";

test("password hashing is salted and verifiable", async () => {
  const first = await hashPassword("correct-horse-battery-staple");
  const second = await hashPassword("correct-horse-battery-staple");
  assert.notEqual(first.salt, second.salt);
  assert.notEqual(first.hash, second.hash);
  assert.equal(await verifyPassword("correct-horse-battery-staple", first.salt, first.hash, first.params), true);
  assert.equal(await verifyPassword("wrong-password-value", first.salt, first.hash, first.params), false);
  assert.equal((await derivePassword("correct-horse-battery-staple", first.salt)).length, 128);
});

test("opaque tokens are random and only hashes are persisted", () => {
  const first = token(32);
  const second = token(32);
  assert.notEqual(first, second);
  assert.match(first, /^[A-Za-z0-9_-]+$/);
  assert.equal(tokenHash(first).length, 64);
  assert.notEqual(tokenHash(first), first);
});

test("identifiers reject unsafe input", () => {
  assert.equal(safeUuid("d6d7dbd9-9de8-4314-877b-b21549f2fbf8"), true);
  assert.equal(safeUuid("../../etc/passwd"), false);
  assert.equal(safeIdempotencyKey("pilot-create-space-001"), true);
  assert.equal(safeIdempotencyKey("short"), false);
});
