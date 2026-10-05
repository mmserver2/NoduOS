import http from "node:http";
import { randomUUID } from "node:crypto";
import { execFile as execFileCallback } from "node:child_process";
import { promisify } from "node:util";
import { config } from "./config.mjs";
import { closePool, query, withTenant } from "./db.mjs";
import { safeIdempotencyKey, safeUuid, token, tokenHash, verifyPassword } from "./security.mjs";

const startedAt = Date.now();
const metrics = { requests: 0, errors: 0, loginsOk: 0, loginsDenied: 0 };
const rateBuckets = new Map();
const execFile = promisify(execFileCallback);
const commercialModules = ["condo.network","condo.residents","condo.visitors","condo.access","condo.reservations","condo.deliveries","condo.occurrences","condo.maintenance","condo.communication","condo.documents","condo.assemblies","condo.finance","condo.cameras","condo.devices","condo.notifications","condo.support","condo.partners"];
const moduleCapabilities = (write) => commercialModules.flatMap((moduleId) => write ? [`${moduleId}.read`,`${moduleId}.write`] : [`${moduleId}.read`]);
const roleCapabilities = Object.freeze({
  owner: new Set(["overview.read", "spaces.read", "spaces.write", "people.read", "people.write", "devices.read", "devices.write", "settings.read", "settings.write", "audit.read", ...moduleCapabilities(true)]),
  admin: new Set(["overview.read", "spaces.read", "spaces.write", "people.read", "people.write", "devices.read", "devices.write", "settings.read", "settings.write", "audit.read", ...moduleCapabilities(true)]),
  operator: new Set(["overview.read", "spaces.read", "people.read", "people.write", "devices.read", "devices.write", "settings.read", ...moduleCapabilities(false)]),
  viewer: new Set(["overview.read", "spaces.read", "people.read", "devices.read", "settings.read", ...moduleCapabilities(false)]),
});

function log(entry) {
  process.stdout.write(`${JSON.stringify({ ts: new Date().toISOString(), service: "noduos-api", ...entry })}\n`);
}

function headers(correlationId, extra = {}) {
  return {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
    "x-content-type-options": "nosniff",
    "x-frame-options": "DENY",
    "referrer-policy": "no-referrer",
    "x-correlation-id": correlationId,
    ...extra,
  };
}

function send(res, status, body, correlationId, extraHeaders = {}) {
  const payload = JSON.stringify(body);
  res.writeHead(status, { ...headers(correlationId, extraHeaders), "content-length": Buffer.byteLength(payload) });
  res.end(payload);
}

function fail(status, code, message) {
  const error = new Error(message);
  error.status = status;
  error.code = code;
  throw error;
}

function text(value, field, max = 160, required = true) {
  if (value === undefined || value === null || value === "") {
    if (required) fail(400, "VALIDATION_ERROR", `${field} é obrigatório`);
    return null;
  }
  if (typeof value !== "string") fail(400, "VALIDATION_ERROR", `${field} inválido`);
  const normalized = value.trim();
  if (!normalized || normalized.length > max) fail(400, "VALIDATION_ERROR", `${field} inválido`);
  return normalized;
}

async function readJson(req) {
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > config.bodyLimitBytes) fail(413, "PAYLOAD_TOO_LARGE", "Payload excede o limite");
    chunks.push(chunk);
  }
  if (size === 0) return {};
  try {
    const parsed = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    if (!parsed || Array.isArray(parsed) || typeof parsed !== "object") throw new Error("shape");
    return parsed;
  } catch {
    fail(400, "INVALID_JSON", "JSON inválido");
  }
}

function cookies(req) {
  const output = {};
  for (const item of (req.headers.cookie || "").split(";")) {
    const position = item.indexOf("=");
    if (position > 0) output[item.slice(0, position).trim()] = decodeURIComponent(item.slice(position + 1).trim());
  }
  return output;
}

function refreshCookie(value, maxAge = config.refreshTtlSeconds) {
  const secure = config.cookieSecure ? "; Secure" : "";
  return `noduos_refresh=${encodeURIComponent(value)}; Path=/api/v1/auth; HttpOnly; SameSite=Strict; Max-Age=${maxAge}${secure}`;
}

function clientIp(req) {
  return req.socket.remoteAddress || "unknown";
}

function rateLimit(key, maximum, windowMs) {
  const now = Date.now();
  const bucket = rateBuckets.get(key);
  if (!bucket || bucket.resetAt <= now) {
    rateBuckets.set(key, { count: 1, resetAt: now + windowMs });
    return;
  }
  bucket.count += 1;
  if (bucket.count > maximum) fail(429, "RATE_LIMITED", "Muitas tentativas; aguarde e tente novamente");
}

function sameOrigin(req) {
  const marker = req.headers["x-noduos-csrf"];
  if (marker !== "1") fail(403, "CSRF_REJECTED", "Requisição de sessão rejeitada");
}

function bearer(req) {
  const value = req.headers.authorization || "";
  const match = /^Bearer ([A-Za-z0-9_-]{40,})$/.exec(value);
  return match?.[1] || null;
}

function publicUser(row) {
  return { id: row.user_id, email: row.email, name: row.user_name, tenantId: row.tenant_id, tenantName: row.tenant_name, contextId: row.context_id, contextName: row.context_name, role: row.role, capabilities: [...(roleCapabilities[row.role] || new Set())] };
}

async function authenticate(req) {
  const accessToken = bearer(req);
  if (!accessToken) fail(401, "AUTH_REQUIRED", "Autenticação obrigatória");
  const result = await query("SELECT * FROM core.get_session($1, 'access')", [tokenHash(accessToken)]);
  if (result.rowCount !== 1) fail(401, "SESSION_INVALID", "Sessão inválida ou expirada");
  const row = result.rows[0];
  return { sessionId: row.session_id, tenantId: row.tenant_id, contextId: row.context_id, userId: row.user_id, role: row.role, user: publicUser(row) };
}

function requireCapability(session, capability) {
  if (!(roleCapabilities[session.role] || new Set()).has(capability)) fail(403, "AUTHORIZATION_DENIED", "Ação não autorizada");
}

async function audit(client, session, action, resourceType, resourceId, correlationId, metadata = {}) {
  await client.query("INSERT INTO core.audit_log (tenant_id, context_id, user_id, action, resource_type, resource_id, correlation_id, metadata) VALUES ($1,$2,$3,$4,$5,$6,$7,$8::jsonb)", [session.tenantId, session.contextId, session.userId, action, resourceType, resourceId, correlationId, JSON.stringify(metadata)]);
}

async function idempotent(client, req, session, operation, execute) {
  const key = req.headers["idempotency-key"];
  if (!safeIdempotencyKey(key)) fail(400, "IDEMPOTENCY_KEY_REQUIRED", "Idempotency-Key válido é obrigatório");
  const inserted = await client.query("INSERT INTO core.idempotency_keys (tenant_id, context_id, operation, idempotency_key, created_by) VALUES ($1,$2,$3,$4,$5) ON CONFLICT DO NOTHING RETURNING id", [session.tenantId, session.contextId, operation, key, session.userId]);
  if (inserted.rowCount === 0) {
    const replay = await client.query("SELECT response_status, response_body FROM core.idempotency_keys WHERE tenant_id=$1 AND context_id=$2 AND operation=$3 AND idempotency_key=$4", [session.tenantId, session.contextId, operation, key]);
    if (replay.rowCount !== 1 || replay.rows[0].response_body === null) fail(409, "IDEMPOTENCY_IN_PROGRESS", "Operação idempotente em processamento");
    return { status: replay.rows[0].response_status, body: replay.rows[0].response_body, replayed: true };
  }
  const outcome = await execute();
  await client.query("UPDATE core.idempotency_keys SET response_status=$1, response_body=$2::jsonb, completed_at=now() WHERE id=$3", [outcome.status, JSON.stringify(outcome.body), inserted.rows[0].id]);
  return { ...outcome, replayed: false };
}

function routeKey(method, pathname) {
  return `${method.toUpperCase()} ${pathname}`;
}

async function issueSession(user, membership) {
  const access = token(32);
  const refresh = token(48);
  const sessionId = randomUUID();
  const scope = { tenantId: membership.tenant_id, contextId: membership.context_id, userId: user.user_id };
  await withTenant(scope, async (client) => {
    await client.query("INSERT INTO core.user_sessions (id,user_id,tenant_id,context_id,access_token_hash,refresh_token_hash,access_expires_at,refresh_expires_at) VALUES ($1,$2,$3,$4,$5,$6,now()+($7||' seconds')::interval,now()+($8||' seconds')::interval)", [sessionId, user.user_id, membership.tenant_id, membership.context_id, tokenHash(access), tokenHash(refresh), config.accessTtlSeconds, config.refreshTtlSeconds]);
    await audit(client, scope, "auth.login.succeeded", "UserSession", sessionId, randomUUID(), { role: membership.role });
  });
  return { access, refresh, expiresIn: config.accessTtlSeconds };
}

async function handlePublic(req, res, url, correlationId) {
  const key = routeKey(req.method, url.pathname);
  if (key === "GET /health") {
    send(res, 200, { status: "ok", service: "noduos-api", uptimeSeconds: Math.floor((Date.now() - startedAt) / 1000) }, correlationId);
    return true;
  }
  if (key === "GET /ready") {
    await query("SELECT 1");
    send(res, 200, { status: "ready" }, correlationId);
    return true;
  }
  if (key === "GET /metrics") {
    const body = Object.entries(metrics).map(([name, value]) => `noduos_${name} ${value}`).join("\n") + "\n";
    res.writeHead(200, { "content-type": "text/plain; version=0.0.4", "cache-control": "no-store" });
    res.end(body);
    return true;
  }
  if (key === "GET /v1/control/bootstrap/status") {
    const result = await query("SELECT core.bootstrap_status() AS initialized");
    send(res, 200, { initialized: result.rows[0].initialized }, correlationId);
    return true;
  }
  if (key === "POST /v1/auth/login") {
    rateLimit(`login:${clientIp(req)}`, 5, 15 * 60 * 1000);
    const body = await readJson(req);
    const email = text(body.email, "email", 254).toLowerCase();
    const password = text(body.password, "password", 256);
    const users = await query("SELECT * FROM core.get_login_user($1)", [email]);
    if (users.rowCount !== 1 || !(await verifyPassword(password, users.rows[0].password_salt, users.rows[0].password_hash, users.rows[0].password_params))) {
      metrics.loginsDenied += 1;
      await new Promise((resolve) => setTimeout(resolve, 250));
      fail(401, "LOGIN_DENIED", "Credenciais inválidas");
    }
    const memberships = await query("SELECT * FROM core.get_login_contexts($1)", [users.rows[0].user_id]);
    const requested = body.contextId;
    const membership = requested ? memberships.rows.find((item) => item.context_id === requested) : memberships.rows[0];
    if (!membership) fail(403, "CONTEXT_DENIED", "Nenhum contexto autorizado");
    const issued = await issueSession(users.rows[0], membership);
    metrics.loginsOk += 1;
    send(res, 200, { accessToken: issued.access, expiresIn: issued.expiresIn, user: publicUser({ ...users.rows[0], ...membership }) }, correlationId, { "set-cookie": refreshCookie(issued.refresh) });
    return true;
  }
  if (key === "POST /v1/auth/refresh") {
    sameOrigin(req);
    rateLimit(`refresh:${clientIp(req)}`, 30, 15 * 60 * 1000);
    const refresh = cookies(req).noduos_refresh;
    if (!refresh) fail(401, "REFRESH_REQUIRED", "Sessão expirada");
    const found = await query("SELECT * FROM core.get_session($1, 'refresh')", [tokenHash(refresh)]);
    if (found.rowCount !== 1) fail(401, "REFRESH_INVALID", "Sessão expirada");
    const row = found.rows[0];
    const nextAccess = token(32);
    const nextRefresh = token(48);
    const scope = { tenantId: row.tenant_id, contextId: row.context_id, userId: row.user_id };
    await withTenant(scope, async (client) => {
      const updated = await client.query("UPDATE core.user_sessions SET access_token_hash=$1,refresh_token_hash=$2,access_expires_at=now()+($3||' seconds')::interval,refresh_expires_at=now()+($4||' seconds')::interval,last_seen_at=now() WHERE id=$5 AND revoked_at IS NULL", [tokenHash(nextAccess), tokenHash(nextRefresh), config.accessTtlSeconds, config.refreshTtlSeconds, row.session_id]);
      if (updated.rowCount !== 1) fail(401, "REFRESH_INVALID", "Sessão expirada");
      await audit(client, scope, "auth.session.refreshed", "UserSession", row.session_id, correlationId);
    });
    send(res, 200, { accessToken: nextAccess, expiresIn: config.accessTtlSeconds, user: publicUser(row) }, correlationId, { "set-cookie": refreshCookie(nextRefresh) });
    return true;
  }
  return false;
}

async function collection(req, res, session, correlationId, configItem) {
  requireCapability(session, `${configItem.name}.read`);
  if (req.method === "GET") {
    const rows = await withTenant(session, (client) => client.query(configItem.listSql, [session.tenantId, session.contextId]));
    send(res, 200, { items: rows.rows }, correlationId);
    return;
  }
  if (req.method === "POST") {
    requireCapability(session, `${configItem.name}.write`);
    const body = await readJson(req);
    const data = configItem.validate(body);
    const outcome = await withTenant(session, async (client) => idempotent(client, req, session, `${configItem.name}.create`, async () => {
      const id = randomUUID();
      const values = [id, session.tenantId, session.contextId, ...data.values];
      const created = await client.query(configItem.insertSql, values);
      await audit(client, session, `${configItem.name}.created`, configItem.resourceType, id, correlationId, data.audit);
      return { status: 201, body: created.rows[0] };
    }));
    send(res, outcome.status, outcome.body, correlationId, outcome.replayed ? { "idempotency-replayed": "true" } : {});
    return;
  }
  fail(405, "METHOD_NOT_ALLOWED", "Método não permitido");
}

const collections = {
  "/v1/spaces": {
    name: "spaces", resourceType: "Space",
    listSql: "SELECT id,name,status,created_at FROM ops.spaces WHERE tenant_id=$1 AND context_id=$2 ORDER BY created_at DESC LIMIT 200",
    insertSql: "INSERT INTO ops.spaces (id,tenant_id,context_id,name,status) VALUES ($1,$2,$3,$4,'active') RETURNING id,name,status,created_at",
    validate: (body) => { const name = text(body.name, "name", 120); return { values: [name], audit: { name } }; },
  },
  "/v1/people": {
    name: "people", resourceType: "Person",
    listSql: "SELECT id,name,email,status,created_at FROM ops.people WHERE tenant_id=$1 AND context_id=$2 ORDER BY created_at DESC LIMIT 200",
    insertSql: "INSERT INTO ops.people (id,tenant_id,context_id,name,email,status) VALUES ($1,$2,$3,$4,$5,'active') RETURNING id,name,email,status,created_at",
    validate: (body) => { const name = text(body.name, "name", 120); const email = text(body.email, "email", 254, false)?.toLowerCase() || null; if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fail(400, "VALIDATION_ERROR", "email inválido"); return { values: [name, email], audit: { name } }; },
  },
  "/v1/devices": {
    name: "devices", resourceType: "Device",
    listSql: "SELECT id,name,kind,status,created_at FROM ops.devices WHERE tenant_id=$1 AND context_id=$2 ORDER BY created_at DESC LIMIT 200",
    insertSql: "INSERT INTO ops.devices (id,tenant_id,context_id,name,kind,status) VALUES ($1,$2,$3,$4,$5,'offline') RETURNING id,name,kind,status,created_at",
    validate: (body) => { const name = text(body.name, "name", 120); const kind = text(body.kind, "kind", 60); return { values: [name, kind], audit: { name, kind } }; },
  },
};

function safeModuleData(body) {
  if (!body || Array.isArray(body) || typeof body !== "object") fail(400, "VALIDATION_ERROR", "dados inválidos");
  const entries = Object.entries(body);
  if (entries.length === 0 || entries.length > 32) fail(400, "VALIDATION_ERROR", "quantidade de campos inválida");
  const data = {};
  for (const [key, value] of entries) {
    if (!/^[a-z][a-z0-9_]{0,39}$/.test(key)) fail(400, "VALIDATION_ERROR", "campo inválido");
    if (value !== null && !["string","number","boolean"].includes(typeof value)) fail(400, "VALIDATION_ERROR", `${key} inválido`);
    if (typeof value === "string" && value.trim().length > 1000) fail(400, "VALIDATION_ERROR", `${key} excede o limite`);
    data[key] = typeof value === "string" ? value.trim() : value;
  }
  if (typeof data.name !== "string" || !data.name) fail(400, "VALIDATION_ERROR", "name é obrigatório");
  return data;
}

async function moduleCollection(req, res, session, correlationId, moduleId, resource) {
  if (!commercialModules.includes(moduleId) || !/^[a-z][a-z0-9-]{1,39}$/.test(resource)) fail(404, "MODULE_NOT_FOUND", "Módulo não encontrado");
  requireCapability(session, `${moduleId}.read`);
  const outcome = await withTenant(session, async (client) => {
    const entitlement = await client.query("SELECT enabled FROM core.module_entitlements WHERE tenant_id=$1 AND context_id=$2 AND module_id=$3", [session.tenantId,session.contextId,moduleId]);
    if (!entitlement.rows[0]?.enabled) fail(403, "MODULE_DISABLED", "Módulo não contratado para este contexto");
    if (req.method === "GET") {
      const rows = await client.query("SELECT id,status,data,created_at,updated_at FROM ops.module_records WHERE tenant_id=$1 AND context_id=$2 AND module_id=$3 AND resource=$4 ORDER BY created_at DESC LIMIT 300", [session.tenantId,session.contextId,moduleId,resource]);
      return { status: 200, body: { items: rows.rows.map((row) => ({ id: row.id, status: row.status, created_at: row.created_at, updated_at: row.updated_at, ...row.data })) } };
    }
    if (req.method === "POST") {
      requireCapability(session, `${moduleId}.write`);
      const data = safeModuleData(await readJson(req));
      return idempotent(client, req, session, `${moduleId}.${resource}.create`, async () => {
        const id = randomUUID();
        const created = await client.query("INSERT INTO ops.module_records(id,tenant_id,context_id,module_id,resource,status,data,created_by) VALUES($1,$2,$3,$4,$5,'active',$6::jsonb,$7) RETURNING id,status,data,created_at", [id,session.tenantId,session.contextId,moduleId,resource,JSON.stringify(data),session.user.id]);
        await audit(client, session, "module.record.created", `${moduleId}:${resource}`, id, correlationId, { moduleId, resource });
        const row = created.rows[0]; return { status: 201, body: { id: row.id, status: row.status, created_at: row.created_at, ...row.data } };
      });
    }
    fail(405, "METHOD_NOT_ALLOWED", "Método não permitido");
  });
  send(res, outcome.status, outcome.body, correlationId, outcome.replayed ? { "idempotency-replayed": "true" } : {});
}

function ipv4(value) {
  if (typeof value !== "string") return false;
  const parts=value.split("."); return parts.length===4 && parts.every((part)=>/^\d{1,3}$/.test(part)&&Number(part)>=0&&Number(part)<=255);
}
function cidr(value) {
  if (typeof value !== "string" || !value.includes("/")) return false;
  const [address,prefix]=value.split("/"); return ipv4(address) && /^\d{1,2}$/.test(prefix) && Number(prefix)>=8 && Number(prefix)<=32;
}
function wireguardProfile() {
  return {
    interfaceName: process.env.WIREGUARD_SERVER_INTERFACE_NAME || "wg0",
    endpointHost: process.env.WIREGUARD_SERVER_ENDPOINT_HOST || "",
    endpointPort: Number(process.env.WIREGUARD_SERVER_ENDPOINT_PORT || 51820),
    serverAddress: process.env.WIREGUARD_SERVER_TUNNEL_ADDRESS || "10.66.0.1/24",
    serverPublicKey: process.env.WIREGUARD_SERVER_PUBLIC_KEY || "",
    clientPool: process.env.WIREGUARD_CLIENT_POOL || "10.66.0.0/24",
  };
}
function mikrotikScript(tunnel, profile) {
  const safeName=String(tunnel.name).replace(/["\\\r\n]/g,""); const iface=String(tunnel.interface_name).replace(/[^A-Za-z0-9_.-]/g,"");
  const serverHost=profile.serverAddress.split("/")[0];
  return [
    `:if ([:len [/interface/wireguard find where name="${iface}"]] = 0) do={ /interface/wireguard add name="${iface}" listen-port=51820 mtu=1420 comment="NoduOS - ${safeName}" }`,
    `/ip/address add address=${tunnel.client_tunnel_address} interface="${iface}" comment="NoduOS WireGuard"`,
    `/interface/wireguard/peers add interface="${iface}" public-key="${profile.serverPublicKey}" endpoint-address=${profile.endpointHost} endpoint-port=${profile.endpointPort} allowed-address=${serverHost}/32 persistent-keepalive=25s comment="NoduOS Server"`,
    `/interface/wireguard print detail where name="${iface}"`,
    `/ping ${serverHost} count=5 src-address=${tunnel.client_tunnel_address.split("/")[0]}`,
  ].join("\n");
}
async function wg(args) { return execFile("/usr/bin/wg",args,{timeout:5000,maxBuffer:1024*1024}); }
async function ip(args) { return execFile("/usr/sbin/ip",args,{timeout:5000,maxBuffer:1024*1024}); }
function peerRuntime(dump, publicKey) {
  const now=Math.floor(Date.now()/1000); for(const line of dump.trim().split("\n").slice(1)){const c=line.split("\t"); if(c[0]===publicKey){const handshake=Number(c[4]||0); return {peerFound:true,latestHandshakeAt:handshake?new Date(handshake*1000).toISOString():null,handshakeAgeSeconds:handshake?now-handshake:null,rxBytes:Number(c[5]||0),txBytes:Number(c[6]||0),connected:handshake>0&&now-handshake<180};}} return {peerFound:false,latestHandshakeAt:null,handshakeAgeSeconds:null,rxBytes:0,txBytes:0,connected:false};
}
async function networkWizard(req,res,url,session,correlationId) {
  requireCapability(session,"condo.network.read"); const profile=wireguardProfile();
  if(url.pathname==="/v1/network/profile"&&req.method==="GET"){send(res,200,{...profile,ready:Boolean(profile.endpointHost&&profile.serverPublicKey)},correlationId);return true;}
  if(url.pathname==="/v1/network/tunnels"&&req.method==="GET"){
    const result=await withTenant(session,(client)=>client.query("SELECT id,name,interface_name,client_tunnel_address,remote_subnet,router_ip,peer_public_key,status,last_handshake_at,last_error,created_at FROM ops.network_tunnels WHERE tenant_id=$1 AND context_id=$2 ORDER BY created_at DESC",[session.tenantId,session.contextId]));
    send(res,200,{items:result.rows.map((row)=>({...row,mikrotikScript:mikrotikScript(row,profile)}))},correlationId);return true;
  }
  if(url.pathname==="/v1/network/tunnels"&&req.method==="POST"){
    requireCapability(session,"condo.network.write"); const body=await readJson(req); const name=text(body.name,"name",120); const remoteSubnet=text(body.remoteSubnet,"remoteSubnet",32); const routerIp=text(body.routerIp,"routerIp",15); const interfaceName=text(body.interfaceName||"wg-noduos","interfaceName",32);
    if(!cidr(remoteSubnet)||!ipv4(routerIp)||!/^wg-[A-Za-z0-9_.-]{1,28}$/.test(interfaceName)) fail(400,"VALIDATION_ERROR","Dados de rede inválidos");
    const created=await withTenant(session,async(client)=>idempotent(client,req,session,"condo.network.tunnel.create",async()=>{const used=await client.query("SELECT client_tunnel_address FROM ops.network_tunnels"); const taken=new Set(used.rows.map((row)=>row.client_tunnel_address)); let address=""; for(let i=2;i<255;i++){const candidate=`10.66.0.${i}/32`;if(!taken.has(candidate)){address=candidate;break;}} if(!address) fail(409,"POOL_EXHAUSTED","Pool WireGuard esgotado"); const id=randomUUID(); const result=await client.query("INSERT INTO ops.network_tunnels(id,tenant_id,context_id,name,interface_name,client_tunnel_address,remote_subnet,router_ip,status,created_by) VALUES($1,$2,$3,$4,$5,$6,$7,$8,'prepared',$9) RETURNING *",[id,session.tenantId,session.contextId,name,interfaceName,address,remoteSubnet,routerIp,session.user.id]); await audit(client,session,"network.tunnel.created","WireGuardTunnel",id,correlationId,{remoteSubnet}); const row=result.rows[0]; return {status:201,body:{...row,mikrotikScript:mikrotikScript(row,profile)}};})); send(res,created.status,created.body,correlationId);return true;
  }
  const match=url.pathname.match(/^\/v1\/network\/tunnels\/([0-9a-f-]{36})\/(activate|status)$/i); if(!match)return false;
  const [_,id,action]=match;
  const tunnelResult=await withTenant(session,(client)=>client.query("SELECT * FROM ops.network_tunnels WHERE id=$1 AND tenant_id=$2 AND context_id=$3",[id,session.tenantId,session.contextId])); const tunnel=tunnelResult.rows[0]; if(!tunnel)fail(404,"NOT_FOUND","Túnel não encontrado");
  if(action==="activate"&&req.method==="POST"){
    requireCapability(session,"condo.network.write"); const body=await readJson(req); const publicKey=text(body.publicKey,"publicKey",64); if(!/^[A-Za-z0-9+/]{43}=$/.test(publicKey))fail(400,"VALIDATION_ERROR","Chave pública WireGuard inválida");
    try{await wg(["set",profile.interfaceName,"peer",publicKey,"allowed-ips",`${tunnel.client_tunnel_address},${tunnel.remote_subnet}`,"persistent-keepalive","25"]);await ip(["route","replace",tunnel.remote_subnet,"dev",profile.interfaceName]);const runtime=peerRuntime((await wg(["show",profile.interfaceName,"dump"])).stdout,publicKey);await withTenant(session,(client)=>client.query("UPDATE ops.network_tunnels SET peer_public_key=$1,status='active',last_error=NULL,updated_at=now() WHERE id=$2",[publicKey,id]));send(res,200,{status:"active",runtime},correlationId);}catch(error){await withTenant(session,(client)=>client.query("UPDATE ops.network_tunnels SET status='error',last_error=$1,updated_at=now() WHERE id=$2",[String(error.message).slice(0,500),id]));fail(502,"WIREGUARD_SYNC_FAILED","Não foi possível sincronizar o peer no servidor");}return true;
  }
  if(action==="status"&&req.method==="GET"){
    const runtime=tunnel.peer_public_key?peerRuntime((await wg(["show",profile.interfaceName,"dump"])).stdout,tunnel.peer_public_key):peerRuntime("",""); if(runtime.latestHandshakeAt)await withTenant(session,(client)=>client.query("UPDATE ops.network_tunnels SET last_handshake_at=$1,status=$2,updated_at=now() WHERE id=$3",[runtime.latestHandshakeAt,runtime.connected?"connected":"active",id]));send(res,200,{...tunnel,runtime},correlationId);return true;
  }
  fail(405,"METHOD_NOT_ALLOWED","Método não permitido");
}

async function handlePrivate(req, res, url, correlationId) {
  const session = await authenticate(req);
  const key = routeKey(req.method, url.pathname);
  if (key === "GET /v1/auth/me") {
    send(res, 200, { user: session.user }, correlationId);
    return;
  }
  if (key === "POST /v1/auth/logout") {
    sameOrigin(req);
    await withTenant(session, async (client) => {
      await client.query("UPDATE core.user_sessions SET revoked_at=now() WHERE id=$1", [session.sessionId]);
      await audit(client, session, "auth.logout", "UserSession", session.sessionId, correlationId);
    });
    send(res, 204, {}, correlationId, { "set-cookie": refreshCookie("", 0) });
    return;
  }
  if (key === "GET /v1/overview") {
    requireCapability(session, "overview.read");
    const result = await withTenant(session, (client) => client.query("SELECT (SELECT count(*)::int FROM ops.spaces WHERE tenant_id=$1 AND context_id=$2) AS spaces,(SELECT count(*)::int FROM ops.people WHERE tenant_id=$1 AND context_id=$2) AS people,(SELECT count(*)::int FROM ops.devices WHERE tenant_id=$1 AND context_id=$2) AS devices,(SELECT count(*)::int FROM ops.devices WHERE tenant_id=$1 AND context_id=$2 AND status='online') AS devices_online", [session.tenantId, session.contextId]));
    send(res, 200, result.rows[0], correlationId);
    return;
  }
  if (collections[url.pathname]) {
    await collection(req, res, session, correlationId, collections[url.pathname]);
    return;
  }
  if (url.pathname.startsWith("/v1/network/") && await networkWizard(req,res,url,session,correlationId)) return;
  const moduleMatch = url.pathname.match(/^\/v1\/modules\/([a-z0-9.]+)\/([a-z0-9-]+)$/);
  if (moduleMatch) {
    await moduleCollection(req, res, session, correlationId, moduleMatch[1], moduleMatch[2]);
    return;
  }
  if (key === "GET /v1/settings") {
    requireCapability(session, "settings.read");
    const result = await withTenant(session, (client) => client.query("SELECT organization_name,primary_color,updated_at FROM ops.settings WHERE tenant_id=$1 AND context_id=$2", [session.tenantId, session.contextId]));
    send(res, 200, result.rows[0] || { organization_name: session.user.contextName, primary_color: "#00A37A" }, correlationId);
    return;
  }
  if (key === "PUT /v1/settings") {
    requireCapability(session, "settings.write");
    const body = await readJson(req);
    const organizationName = text(body.organizationName, "organizationName", 120);
    const primaryColor = text(body.primaryColor, "primaryColor", 7);
    if (!/^#[0-9A-F]{6}$/i.test(primaryColor)) fail(400, "VALIDATION_ERROR", "cor primária inválida");
    const result = await withTenant(session, async (client) => {
      const updated = await client.query("INSERT INTO ops.settings (tenant_id,context_id,organization_name,primary_color) VALUES ($1,$2,$3,$4) ON CONFLICT (tenant_id,context_id) DO UPDATE SET organization_name=excluded.organization_name,primary_color=excluded.primary_color,updated_at=now() RETURNING organization_name,primary_color,updated_at", [session.tenantId, session.contextId, organizationName, primaryColor]);
      await audit(client, session, "settings.updated", "OrganizationSettings", session.contextId, correlationId, { organizationName, primaryColor });
      return updated.rows[0];
    });
    send(res, 200, result, correlationId);
    return;
  }
  if (key === "GET /v1/audit") {
    requireCapability(session, "audit.read");
    const result = await withTenant(session, (client) => client.query("SELECT action,resource_type,resource_id,correlation_id,created_at FROM core.audit_log WHERE tenant_id=$1 AND context_id=$2 ORDER BY created_at DESC LIMIT 50", [session.tenantId, session.contextId]));
    send(res, 200, { items: result.rows }, correlationId);
    return;
  }
  fail(404, "NOT_FOUND", "Rota não encontrada");
}

const server = http.createServer(async (req, res) => {
  metrics.requests += 1;
  const began = Date.now();
  const supplied = req.headers["x-correlation-id"];
  const correlationId = safeUuid(supplied) ? supplied : randomUUID();
  let status = 500;
  try {
    rateLimit(`general:${clientIp(req)}`, 180, 60 * 1000);
    const url = new URL(req.url || "/", "http://localhost");
    if (!(await handlePublic(req, res, url, correlationId))) await handlePrivate(req, res, url, correlationId);
    status = res.statusCode;
  } catch (error) {
    metrics.errors += 1;
    status = Number.isInteger(error.status) ? error.status : 500;
    const code = error.code || "INTERNAL_ERROR";
    const message = status >= 500 ? "Falha interna; tente novamente" : error.message;
    if (!res.headersSent) send(res, status, { error: { code, message, correlationId } }, correlationId);
    else res.destroy();
    if (status >= 500) log({ level: "error", event: "request_failed", code, correlationId });
  } finally {
    log({ level: "info", event: "request", method: req.method, path: (req.url || "/").split("?")[0], status, durationMs: Date.now() - began, correlationId });
  }
});

server.requestTimeout = 15000;
server.headersTimeout = 10000;
server.keepAliveTimeout = 5000;
server.maxRequestsPerSocket = 500;

server.listen(config.port, config.host, () => log({ level: "info", event: "started", host: config.host, port: config.port }));

async function shutdown(signal) {
  log({ level: "info", event: "shutdown", signal });
  server.close(async () => { await closePool().catch(() => undefined); process.exit(0); });
  setTimeout(() => process.exit(1), 10000).unref();
}

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));
