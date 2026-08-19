import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { appRoutes, PageContent, type RouteId } from "./routes.js";
import "./styles.css";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [routeId, setRouteId] = useState<RouteId>("overview");
  const route = appRoutes.find((item) => item.id === routeId) ?? appRoutes[0]!;

  if (!authenticated) {
    return <main className="login-shell"><section className="login-card"><Brand/><p className="eyebrow">Conexão que impulsiona.</p><h1>Acesse seu espaço</h1><p>Uma operação simples, conectada e segura.</p><label>E-mail<input type="email" placeholder="voce@empresa.com.br"/></label><label>Senha<input type="password" placeholder="••••••••"/></label><button type="button" onClick={() => setAuthenticated(true)}>Entrar</button><small>Ambiente estrutural — autenticação real será conectada na DEC-201.</small></section></main>;
  }

  return <div className="app-shell"><aside><Brand/><nav aria-label="Navegação principal">{appRoutes.map((item) => <button key={item.id} className={item.id === routeId ? "active" : ""} onClick={() => setRouteId(item.id)}><span>{item.icon}</span>{item.label}</button>)}</nav><div className="tenant"><span>Organização</span><strong>NoduOS Demo</strong></div></aside><main><header><div><p className="eyebrow">Operação conectada</p><h1>{route.label}</h1><p>{route.description}</p></div><button className="profile" aria-label="Abrir perfil">MJ</button></header><PageContent route={route}/></main></div>;
}

function Brand() { return <div className="brand"><span>Nodu</span><i>O</i><b>S</b></div>; }

createRoot(document.getElementById("root")!).render(<StrictMode><App/></StrictMode>);
