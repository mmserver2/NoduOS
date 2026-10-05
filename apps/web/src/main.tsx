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
    case "network": return <NetworkWizard session={session} notify={notify}/>;
    case "devices": return <EntityPage title={route.label} endpoint={`modules/${route.moduleId}/${route.resource}`} session={session} fields={route.fields || []} columns={route.columns || ["name","status"]} canWrite={session.user.capabilities.includes(`${route.moduleId}.write`)} notify={notify}/>;
    case "settings": return <Settings session={session} notify={notify}/>;
    default: return <EntityPage title={route.label} endpoint={`modules/${route.moduleId}/${route.resource}`} session={session} fields={route.fields || []} columns={route.columns || ["name","status"]} canWrite={session.user.capabilities.includes(`${route.moduleId}.write`)} notify={notify}/>;
  }
}

interface NetworkProfile { endpointHost:string;endpointPort:number;serverAddress:string;serverPublicKey:string;interfaceName:string;ready:boolean }
interface NetworkRuntime { connected:boolean;peerFound:boolean;handshakeAgeSeconds:number|null;rxBytes:number;txBytes:number }
interface NetworkTunnel { id:string;name:string;interface_name:string;client_tunnel_address:string;remote_subnet:string;router_ip:string;peer_public_key?:string;status:string;mikrotikScript?:string;last_handshake_at?:string;runtime?:NetworkRuntime }
function NetworkWizard({session,notify}:{session:Session;notify:(message:string)=>void}) {
  const [profile,setProfile]=useState<NetworkProfile|null>(null); const [items,setItems]=useState<NetworkTunnel[]>([]); const [selected,setSelected]=useState<NetworkTunnel|null>(null); const [publicKey,setPublicKey]=useState(""); const [busy,setBusy]=useState(false); const [error,setError]=useState<string|null>(null);
  const [form,setForm]=useState({name:"",remoteSubnet:"192.168.88.0/24",routerIp:"192.168.88.1",interfaceName:"wg-noduos"});
  const load=useCallback(async()=>{try{const [p,t]=await Promise.all([request<NetworkProfile>("/v1/network/profile",{},session.accessToken),request<{items:NetworkTunnel[]}>("/v1/network/tunnels",{},session.accessToken)]);setProfile(p);setItems(t.items);if(selected){setSelected(t.items.find((item)=>item.id===selected.id)||selected);}setError(null);}catch(reason){setError(reason instanceof Error?reason.message:"Falha ao carregar rede");}},[session.accessToken,selected]);
  useEffect(()=>{void load();},[session.accessToken]);
  async function create(event:FormEvent){event.preventDefault();setBusy(true);try{const tunnel=await request<NetworkTunnel>("/v1/network/tunnels",{method:"POST",headers:{"idempotency-key":`network-${crypto.randomUUID()}`},body:JSON.stringify(form)},session.accessToken);setSelected(tunnel);setItems((current)=>[tunnel,...current]);notify("Túnel preparado. Execute o script na MikroTik.");setError(null);}catch(reason){setError(reason instanceof Error?reason.message:"Falha ao preparar túnel");}finally{setBusy(false);}}
  async function activate(){if(!selected)return;setBusy(true);try{const result=await request<{status:string;runtime:NetworkRuntime}>(`/v1/network/tunnels/${selected.id}/activate`,{method:"POST",body:JSON.stringify({publicKey})},session.accessToken);setSelected({...selected,status:result.status,peer_public_key:publicKey,runtime:result.runtime});notify("Peer sincronizado no servidor. Aguarde o handshake.");setError(null);}catch(reason){setError(reason instanceof Error?reason.message:"Falha ao ativar peer");}finally{setBusy(false);}}
  async function status(){if(!selected)return;setBusy(true);try{const result=await request<NetworkTunnel>(`/v1/network/tunnels/${selected.id}/status`,{},session.accessToken);setSelected({...selected,...result});setError(null);}catch(reason){setError(reason instanceof Error?reason.message:"Falha ao consultar status");}finally{setBusy(false);}}
  return <div className="network-wizard">
    {error&&<div className="error" role="alert">{error}</div>}
    <section className="panel network-profile"><div><p className="eyebrow">Perfil global</p><h2>Servidor WireGuard</h2></div><div className={`network-badge ${profile?.ready?"ready":""}`}>{profile?.ready?"Pronto":"Incompleto"}</div><dl><div><dt>Endpoint</dt><dd>{profile?`${profile.endpointHost}:${profile.endpointPort}`:"—"}</dd></div><div><dt>Endereço</dt><dd>{profile?.serverAddress||"—"}</dd></div><div><dt>Chave pública</dt><dd className="mono">{profile?.serverPublicKey||"—"}</dd></div></dl></section>
    <div className="content-grid"><form className="panel form-panel" onSubmit={(event)=>void create(event)}><p className="eyebrow">Passo 1</p><h2>Preparar MikroTik</h2><label>Nome do local<input required value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})}/></label><label>Sub-rede LAN<input required value={form.remoteSubnet} onChange={(e)=>setForm({...form,remoteSubnet:e.target.value})}/></label><label>IP da MikroTik<input required value={form.routerIp} onChange={(e)=>setForm({...form,routerIp:e.target.value})}/></label><label>Interface WireGuard<input required value={form.interfaceName} onChange={(e)=>setForm({...form,interfaceName:e.target.value})}/></label><button className="primary" disabled={busy||!profile?.ready}>{busy?"Preparando…":"Gerar configuração"}</button></form>
    <section className="panel table-panel"><div className="panel-heading"><div><p className="eyebrow">Túneis</p><h2>Locais preparados</h2></div><button className="secondary" onClick={()=>void load()}>Atualizar</button></div>{items.length===0?<State title="Nenhum túnel" detail="Prepare o primeiro local para iniciar."/>:<div className="tunnel-list">{items.map((item)=><button key={item.id} className={selected?.id===item.id?"selected":""} onClick={()=>{setSelected(item);setPublicKey(item.peer_public_key||"");}}><strong>{item.name}</strong><span>{item.remote_subnet}</span><small>{item.status}</small></button>)}</div>}</section></div>
    {selected&&<section className="panel tunnel-setup"><p className="eyebrow">Passos 2 e 3</p><h2>Configurar {selected.name}</h2><p>Abra o terminal da MikroTik, cole o script completo e depois copie a chave pública exibida pelo último comando.</p><pre className="script-box">{selected.mikrotikScript}</pre><button className="secondary" onClick={()=>void navigator.clipboard.writeText(selected.mikrotikScript||"")}>Copiar script</button><label>Chave pública da MikroTik<input className="mono" value={publicKey} onChange={(e)=>setPublicKey(e.target.value.trim())} placeholder="Cole a public key gerada pela MikroTik"/></label><div className="action-row"><button className="primary" disabled={busy||publicKey.length<44} onClick={()=>void activate()}>Sincronizar peer</button><button className="secondary" disabled={busy||!selected.peer_public_key} onClick={()=>void status()}>Verificar handshake</button></div>{selected.runtime&&<div className={`runtime-card ${selected.runtime.connected?"connected":""}`}><strong>{selected.runtime.connected?"Túnel conectado":"Aguardando handshake"}</strong><span>Peer: {selected.runtime.peerFound?"configurado":"não encontrado"}</span><span>Último handshake: {selected.runtime.handshakeAgeSeconds==null?"ainda não ocorreu":`${selected.runtime.handshakeAgeSeconds}s atrás`}</span><span>RX {selected.runtime.rxBytes} B · TX {selected.runtime.txBytes} B</span></div>}</section>}
  </div>;
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
