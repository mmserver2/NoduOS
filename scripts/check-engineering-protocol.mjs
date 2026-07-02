import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const errors = [];

function fail(message) {
  errors.push(message);
}

function ok(message) {
  console.log(`OK: ${message}`);
}

function readText(path) {
  return readFileSync(path, "utf8");
}

function requireFile(path) {
  if (!existsSync(path)) {
    fail(`arquivo obrigatório ausente: ${path}`);
    return false;
  }
  return true;
}

function requireContains(text, phrase, label) {
  if (!text.includes(phrase)) {
    fail(`${label} não contém frase obrigatória: ${phrase}`);
  }
}

function walkFiles(root, options = {}) {
  const ignored = new Set(options.ignored ?? [".git", "node_modules", "dist", "build"]);
  const results = [];

  function walk(current) {
    if (!existsSync(current)) return;

    const stat = statSync(current);
    if (stat.isDirectory()) {
      const base = current.split(/[\\/]/).pop();
      if (ignored.has(base)) return;

      for (const entry of readdirSync(current)) {
        walk(join(current, entry));
      }
      return;
    }

    if (stat.isFile()) {
      results.push(current);
    }
  }

  walk(root);
  return results;
}

function readJson(path) {
  try {
    return JSON.parse(readText(path));
  } catch (error) {
    fail(`JSON inválido em ${path}: ${error.message}`);
    return {};
  }
}

const protocolPath = "docs/engineering/ENGINEERING_EXECUTION_PROTOCOL.md";
const checkerPath = "scripts/check-engineering-protocol.mjs";
const packagePath = "package.json";

requireFile(protocolPath);
requireFile(checkerPath);
requireFile(packagePath);

if (existsSync(protocolPath)) {
  const protocol = readText(protocolPath);

  const requiredPhrases = [
    "NODUOS BLOCK-GATE PROGRAMMING",
    "PROGRAMAÇÃO POR BLOCOS COM PORTÕES DE AUDITORIA",
    "SaaS Modular de Gestão de Espaços e Segurança Unificada",
    "Sistema Operacional Modular para Espaços Físicos Conectados",
    "Contrato antes de endpoint.",
    "Domínio antes de tabela.",
    "Autorização antes de ação.",
    "Referência antes de payload.",
    "Evento antes de read model.",
    "Auditoria antes de confiança.",
    "LGPD antes de dado bruto.",
    "Teste antes de deploy.",
    "Política influencia.",
    "Core decide.",
    "Módulo dono executa.",
    "Auditoria registra.",
    "DOC-BLOCK",
    "CONTRACT-BLOCK",
    "CORE-BLOCK",
    "API-BOUNDARY-BLOCK",
    "RUNTIME-BLOCK",
    "PERSISTENCE-BLOCK",
    "AUTH-BLOCK",
    "MODULE-BLOCK",
    "INTEGRATION-BLOCK",
    "DEPLOY-BLOCK",
    "Gate 0 - Fundação",
    "Gate 1 - Contrato",
    "Gate 2 - Domínio puro",
    "Gate 3 - Application Boundary",
    "Gate 4 - Runtime mínimo",
    "Gate 5 - Persistência",
    "Gate 6 - Endpoint de negócio",
    "Gate 7 - Módulo comercial",
    "Gate 8 - Deploy",
    "Política de payload",
    "Política de correção",
    "Política de Git",
    "Política de validação",
    "Política de Segurança e LGPD",
    "Política de contratos",
    "Política de eventos",
    "Política de banco",
    "Política de endpoint",
    "Política de deploy",
    "DEC oficial criada nesta etapa: nenhuma",
    "DEC futura sugerida",
    "remote deve permanecer ausente",
    "push proibido",
    "check:engineering-protocol",
    "bash <<'EOF'",
    "sem banco compartilhado",
    "Sem frontend decidindo autorização",
    "Sem ResourceReference como autorização",
    "Sem EvidenceReference como autorização",
    "Sem SecretReference como autorização"
  ];

  for (const phrase of requiredPhrases) {
    requireContains(protocol, phrase, protocolPath);
  }

  const forbiddenOfficialDecision = /^# DEC-(?!197\b)\d+:/m;
  if (forbiddenOfficialDecision.test(protocol)) {
    fail("o protocolo parece consolidar DEC oficial nova; esta etapa não deve criar DEC oficial");
  }

  ok("documento do protocolo contém identidade, princípios, gates e políticas obrigatórias");
}

if (existsSync(packagePath)) {
  const pkg = readJson(packagePath);
  const scripts = pkg.scripts ?? {};

  if (scripts["check:engineering-protocol"] !== "node scripts/check-engineering-protocol.mjs") {
    fail("package.json deve conter check:engineering-protocol = node scripts/check-engineering-protocol.mjs");
  }

  if (!scripts["check:all"] || !scripts["check:all"].includes("npm run check:engineering-protocol")) {
    fail("package.json check:all deve incluir npm run check:engineering-protocol");
  }

  ok("package.json contém check:engineering-protocol e check:all integrado");
}

const endpointDirs = ["apps", "modules", "packages", "src"].filter((dir) => existsSync(dir));
const endpointPattern = /\b(app|router|server|fastify)\.(get|post|put|patch|delete|all)\s*\(|@(Get|Post|Put|Patch|Delete|Controller)\b|createServer\s*\(/;

for (const dir of endpointDirs) {
  for (const file of walkFiles(dir)) {
    const normalized = file.replaceAll("\\", "/");
    if (!/\.(ts|tsx|js|mjs|cjs)$/.test(normalized)) continue;
    const content = readText(file);
    if (endpointPattern.test(content)) {
      fail(`possível endpoint funcional encontrado: ${normalized}`);
    }
  }
}

ok("nenhum endpoint funcional detectado em apps/modules/packages/src");

const allFiles = walkFiles(".");
const dbLikeFiles = allFiles.filter((file) => {
  const normalized = file.replaceAll("\\", "/");
  const name = normalized.split("/").pop() ?? "";
  if (/(\.md|\.txt|README|\.gitkeep)$/i.test(name)) return false;
  return (
    name === "schema.prisma" ||
    /\.sql$/i.test(name) ||
    /migration/i.test(name) ||
    /\.migration\.(ts|js)$/i.test(name)
  );
});

if (dbLikeFiles.length > 0) {
  fail(`possível banco real ou migration real encontrado: ${dbLikeFiles.join(", ")}`);
}

ok("nenhum banco real ou migration real detectado");

const envFiles = allFiles.filter((file) => {
  const name = (file.replaceAll("\\", "/").split("/").pop() ?? "");
  return /^\.env(\..+)?$/.test(name) && ![".env.example", ".env.sample", ".env.template"].includes(name);
});

if (envFiles.length > 0) {
  fail(`arquivo .env real detectado: ${envFiles.join(", ")}`);
}

ok("nenhum arquivo .env real detectado");

if (existsSync("modules")) {
  const commercialCode = walkFiles("modules").filter((file) => {
    const normalized = file.replaceAll("\\", "/");
    if (normalized.startsWith("modules/core-platform/")) return false;
    return /\.(ts|tsx|js|mjs|cjs)$/.test(normalized);
  });

  if (commercialCode.length > 0) {
    fail(`código de módulo comercial detectado fora do Core Platform: ${commercialCode.join(", ")}`);
  }
}

ok("nenhum código de módulo comercial detectado fora do Core Platform");

const realDeployFiles = allFiles.filter((file) => {
  const normalized = file.replaceAll("\\", "/");
  const name = normalized.split("/").pop() ?? "";
  if (/(\.md|\.txt|README|\.gitkeep)$/i.test(name)) return false;
  return (
    /pm2/i.test(name) ||
    /^ecosystem\.config\./i.test(name) ||
    /nginx/i.test(name) ||
    /firewall/i.test(name) ||
    /ufw/i.test(name) ||
    /deploy/i.test(name) ||
    /release/i.test(name)
  );
});

if (realDeployFiles.length > 0) {
  fail(`artefato real de deploy/PM2/Nginx/firewall detectado: ${realDeployFiles.join(", ")}`);
}

ok("nenhum artefato real de deploy/PM2/Nginx/firewall detectado");

if (errors.length > 0) {
  console.error("");
  console.error("FALHAS DO CHECK DE PROTOCOLO:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("OK: protocolo de execução de engenharia NoduOS validado");
