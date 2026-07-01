import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const endpointPattern = /(^|[^A-Za-z0-9_])(app|router|fastify)\.(get|post|put|patch|delete)\s*\(|@(Controller|Get|Post|Put|Patch|Delete)\b|(^|[^A-Za-z0-9_])(app|server)\.listen\s*\(|(^|[^A-Za-z0-9_])createServer\s*\(/;
const rawSecretPattern = /-----BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY-----|(?:password|passwd|api[_-]?key|client[_-]?secret|private[_-]?key)\s*[:=]\s*['"][^'"]{8,}['"]/i;
const excluded = new Set(['.git', 'node_modules', 'docs']);
const extensions = new Set(['.ts', '.tsx', '.js', '.mjs', '.cjs']);

function walk(dir) {
  const result = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (excluded.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) result.push(...walk(fullPath));
    else if (extensions.has(path.extname(entry.name))) result.push(fullPath);
  }
  return result;
}

function fail(message) {
  console.error('FAIL: ' + message);
  process.exit(1);
}

for (const file of walk(root)) {
  const source = fs.readFileSync(file, 'utf8');
  if (endpointPattern.test(source)) fail('endpoint ou servidor funcional detectado em ' + path.relative(root, file));
  if (rawSecretPattern.test(source)) fail('possivel segredo bruto detectado em ' + path.relative(root, file));
}

const envFiles = ['.env', '.env.local', '.env.production', '.env.development', '.env.test'];
for (const envFile of envFiles) {
  if (fs.existsSync(path.join(root, envFile))) fail('arquivo env detectado: ' + envFile);
}
console.log('OK: seguranca Core validada sem endpoint, servidor funcional, env ou segredo bruto');
