import { StrictMode, useCallback, useEffect, useMemo, useState, type FormEvent } from "react";
import { createRoot } from "react-dom/client";
import { appRoutes, type AppRoute, type RouteId } from "./routes.js";
import "./styles.css";

interface User {
  id: string; email: string; name: string; tenantId: string; tenantName: string;
  contextId: string; contextName: string; role: string; capabilities: string[];
}
interface Session { accessToken: string; expiresIn: number; user: User; }
interface ApiError { error?: { message?: string; correlationId?: string } }

async function request<T>(path: string, init: RequestInit = {}, accessToken?: string): Promise<T> {
  const requestHeaders = new Headers(init.headers);
  if (init.body) requestHeaders.set("content-type", "application/json");
  if (accessToken) requestHeaders.set("authorization", `Bearer ${accessToken}`);
  const response = await fetch(`/api${path}`, {
    ...init,
    credentials: "include",
    headers: requestHeaders,
  });
  const body = response.status === 204 ? {} : await response.json().catch(() => ({}));
  if (!response.ok) throw new Error((body as ApiError).error?.message || "Não foi possível concluir a operação");
  return body as T;
}

function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [booting, setBooting] = useState(true);
  const [routeId, setRouteId] = useState<RouteId>("overview");
  const [notice, setNotice] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    try {
      const next = await request<Session>("/v1/auth/refresh", { method: "POST", headers: { "x-noduos-csrf": "1" } });
      setSession(next);
      return next;
    } catch {
      setSession(null);
      return null;
    } finally { setBooting(false); }
  }, []);

  useEffect(() => { void refresh(); }, [refresh]);
  const allowedRoutes = useMemo(() => appRoutes.filter((route) => session?.user.capabilities.includes(route.capability)), [session]);
  const route: AppRoute =
    allowedRoutes.find((item) => item.id === routeId) ??
    allowedRoutes[0] ??
    appRoutes[0]!;

  if (booting) return <main className="center-screen"><div className="spinner"/><p>Conectando ao NoduOS…</p></main>;
  if (!session) return <Login onAuthenticated={(next) => { setSession(next); setRouteId("overview"); }} />;

  async function logout() {
    try { await request("/v1/auth/logout", { method: "POST", headers: { "x-noduos-csrf": "1" } }, session!.accessToken); } finally { setSession(null); }
  }

  return <div className="app-shell">
    <aside>
      <Brand />
      <nav aria-label="Navegação principal">{allowedRoutes.map((item) => <button key={item.id} className={item.id === route.id ? "active" : ""} onClick={() => setRouteId(item.id)}><span>{item.icon}</span>{item.label}</button>)}</nav>
      <div className="tenant"><span>Contexto ativo</span><strong>{session.user.contextName}</strong><small>{session.user.role}</small></div>
    </aside>
    <main className="workspace">
      <header><div><p className="eyebrow">Operação conectada</p><h1>{route.label}</h1><p>{route.description}</p></div><div className="user-menu"><span>{session.user.name}</span><button onClick={() => void logout()}>Sair</button></div></header>
      {notice && <div className="notice" role="status">{notice}<button onClick={() => setNotice(null)}>×</button></div>}
      <Page route={route} session={session} notify={setNotice}/>
    </main>
  </div>;
}

function Login({ onAuthenticated }: { onAuthenticated: (session: Session) => void }) {
  const [email, setEmail] = useState(""); const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false); const [error, setError] = useState<string | null>(null);
  async function submit(event: FormEvent) {
    event.preventDefault(); setBusy(true); setError(null);
    try { onAuthenticated(await request<Session>("/v1/auth/login", { method: "POST", body: JSON.stringify({ email, password }) })); }
    catch (reason) { setError(reason instanceof Error ? reason.message : "Falha no login"); }
    finally { setBusy(false); }
  }
  return <main className="login-shell"><form className="login-card" onSubmit={(event) => void submit(event)}><Brand/><p className="eyebrow">Conexão que impulsiona</p><h1>Acesse seu espaço</h1><p>Operação simples, conectada e segura.</p>{error && <div className="error" role="alert">{error}</div>}<label>E-mail<input required type="email" autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)}/></label><label>Senha<input required minLength={12} type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)}/></label><button className="primary" disabled={busy}>{busy ? "Validando…" : "Entrar"}</button><small>Sessão protegida, escopo por contexto e auditoria ativa.</small></form></main>;
}

function Brand() { return <div className="brand" aria-label="NoduOS"><span>Nodu</span><i>O</i><b>S</b></div>; }

function Page({ route, session, notify }: { route: AppRoute; session: Session; notify: (message: string) => void }) {
  switch (route.id) {
    case "overview": return <Overview session={session}/>;
    case "spaces": return <EntityPage title="Espaços" endpoint="spaces" session={session} fields={[{ key: "name", label: "Nome do espaço" }]} columns={["name","status"]} canWrite={session.user.capabilities.includes("spaces.write")} notify={notify}/>;
    case "people": return <EntityPage title="Pessoas" endpoint="people" session={session} fields={[{ key: "name", label: "Nome" },{ key: "email", label: "E-mail", type: "email", optional: true }]} columns={["name","email","status"]} canWrite={session.user.capabilities.includes("people.write")} notify={notify}/>;
    case "devices": return <EntityPage title={route.label} endpoint={`modules/${route.moduleId}/${route.resource}`} session={session} fields={route.fields || []} columns={route.columns || ["name","status"]} canWrite={session.user.capabilities.includes(`${route.moduleId}.write`)} notify={notify}/>;
    case "settings": return <Settings session={session} notify={notify}/>;
    default: return <EntityPage title={route.label} endpoint={`modules/${route.moduleId}/${route.resource}`} session={session} fields={route.fields || []} columns={route.columns || ["name","status"]} canWrite={session.user.capabilities.includes(`${route.moduleId}.write`)} notify={notify}/>;
  }
}

function Overview({ session }: { session: Session }) {
  const [data, setData] = useState<Record<string, number> | null>(null); const [error, setError] = useState<string | null>(null);
  useEffect(() => { request<Record<string, number>>("/v1/overview", {}, session.accessToken).then(setData).catch((reason) => setError(reason.message)); }, [session.accessToken]);
  if (error) return <State title="Não foi possível carregar" detail={error}/>;
  if (!data) return <State title="Carregando visão geral" detail="Consultando dados do contexto ativo…" loading/>;
  return <><div className="metric-grid"><Metric title="Espaços" value={data.spaces ?? 0}/><Metric title="Pessoas" value={data.people ?? 0}/><Metric title="Dispositivos" value={data.devices ?? 0}/><Metric title="Online" value={data.devices_online ?? 0} tone="success"/></div><section className="panel"><h2>Ambiente operacional</h2><p>Autenticação real, isolamento por tenant e contexto, auditoria e idempotência estão ativos neste piloto.</p><div className="status-row"><span className="status-dot"/>API e banco conectados</div></section></>;
}

function Metric({ title, value, tone = "default" }: { title: string; value: number; tone?: string }) { return <article className={`metric ${tone}`}><span>{title}</span><strong>{value}</strong><small>contexto atual</small></article>; }

interface Field { key: string; label: string; type?: string; placeholder?: string; optional?: boolean }
type Item = Record<string, string | null>;
function EntityPage({ title, endpoint, session, fields, columns, canWrite, notify }: { title: string; endpoint: string; session: Session; fields: Field[]; columns: string[]; canWrite: boolean; notify: (message: string) => void }) {
  const [items, setItems] = useState<Item[]>([]); const [loading, setLoading] = useState(true); const [error, setError] = useState<string | null>(null); const [form, setForm] = useState<Record<string,string>>({}); const [saving, setSaving] = useState(false);
  const load = useCallback(async () => { setLoading(true); try { const data = await request<{items: Item[]}>(`/v1/${endpoint}`, {}, session.accessToken); setItems(data.items); setError(null); } catch (reason) { setError(reason instanceof Error ? reason.message : "Falha ao carregar"); } finally { setLoading(false); } }, [endpoint, session.accessToken]);
  useEffect(() => { void load(); }, [load]);
  async function submit(event: FormEvent) { event.preventDefault(); setSaving(true); try { await request(`/v1/${endpoint}`, { method: "POST", headers: { "idempotency-key": `${endpoint}-${crypto.randomUUID()}` }, body: JSON.stringify(form) }, session.accessToken); setForm({}); notify(`${title}: registro criado com sucesso.`); await load(); } catch (reason) { setError(reason instanceof Error ? reason.message : "Falha ao salvar"); } finally { setSaving(false); } }
  return <div className="content-grid">{canWrite && <form className="panel form-panel" onSubmit={(event) => void submit(event)}><h2>Novo registro</h2>{fields.map((field) => <label key={field.key}>{field.label}<input required={!field.optional} type={field.type || "text"} placeholder={field.placeholder} value={form[field.key] || ""} onChange={(e) => setForm({...form,[field.key]:e.target.value})}/></label>)}<button className="primary" disabled={saving}>{saving ? "Salvando…" : "Criar"}</button></form>}<section className="panel table-panel"><div className="panel-heading"><h2>{title}</h2><button className="secondary" onClick={() => void load()}>Atualizar</button></div>{error ? <State title="Falha na consulta" detail={error}/> : loading ? <State title="Carregando" detail="Buscando registros…" loading/> : items.length === 0 ? <State title="Nenhum registro" detail="Crie o primeiro registro para iniciar este fluxo."/> : <div className="table-wrap"><table><thead><tr>{columns.map((column) => <th key={column}>{labels[column] || column}</th>)}</tr></thead><tbody>{items.map((item) => <tr key={String(item.id)}>{columns.map((column) => <td key={column}>{item[column] || "—"}</td>)}</tr>)}</tbody></table></div>}</section></div>;
}

const labels: Record<string,string> = { name:"Nome",email:"E-mail",status:"Status",kind:"Tipo",unit:"Unidade",contact:"Contato",document:"Documento",destination:"Destino",holder:"Portador",space:"Área",scheduled_at:"Data e hora",carrier:"Transportadora",category:"Categoria",priority:"Prioridade",location:"Local",audience:"Público",created_at:"Criado em",amount:"Valor",due_date:"Vencimento",provider:"Provedor",channel:"Canal",service:"Serviço" };

function Settings({ session, notify }: { session: Session; notify: (message: string) => void }) {
  const [organizationName, setOrganizationName] = useState(""); const [primaryColor, setPrimaryColor] = useState("#00A37A"); const [busy, setBusy] = useState(true); const canWrite = session.user.capabilities.includes("settings.write");
  useEffect(() => { request<{organization_name:string;primary_color:string}>("/v1/settings", {}, session.accessToken).then((data) => { setOrganizationName(data.organization_name); setPrimaryColor(data.primary_color); }).finally(() => setBusy(false)); }, [session.accessToken]);
  async function submit(event: FormEvent) { event.preventDefault(); setBusy(true); try { await request("/v1/settings", { method: "PUT", body: JSON.stringify({ organizationName, primaryColor }) }, session.accessToken); document.documentElement.style.setProperty("--green", primaryColor); notify("Configurações atualizadas."); } finally { setBusy(false); } }
  return <form className="panel settings" onSubmit={(event) => void submit(event)}><h2>Identidade da organização</h2><label>Nome<input disabled={!canWrite} value={organizationName} onChange={(e) => setOrganizationName(e.target.value)}/></label><label>Cor primária<input disabled={!canWrite} type="color" value={primaryColor} onChange={(e) => setPrimaryColor(e.target.value)}/></label>{canWrite && <button className="primary" disabled={busy}>{busy ? "Salvando…" : "Salvar alterações"}</button>}</form>;
}

function State({ title, detail, loading = false }: { title: string; detail: string; loading?: boolean }) { return <div className="empty-state">{loading ? <div className="spinner"/> : <span className="empty-icon">◇</span>}<h3>{title}</h3><p>{detail}</p></div>; }

createRoot(document.getElementById("root")!).render(<StrictMode><App/></StrictMode>);
