import type { ReactNode } from "react";

export type RouteId = "overview" | "spaces" | "people" | "devices" | "settings";

export interface AppRoute {
  id: RouteId;
  label: string;
  icon: string;
  description: string;
  capability: string;
}

export const appRoutes: readonly AppRoute[] = [
  { id: "overview", label: "Visão geral", icon: "◉", description: "Resumo operacional do seu ambiente", capability: "core.overview.read" },
  { id: "spaces", label: "Espaços", icon: "⌂", description: "Organização de unidades e ambientes", capability: "spaces.read" },
  { id: "people", label: "Pessoas", icon: "◎", description: "Identidades e vínculos autorizados", capability: "people.read" },
  { id: "devices", label: "Dispositivos", icon: "◇", description: "Equipamentos conectados e integridade", capability: "devices.read" },
  { id: "settings", label: "Configurações", icon: "⚙", description: "Preferências, módulos e políticas", capability: "settings.read" },
] as const;

export function PageContent({ route }: { route: AppRoute }): ReactNode {
  if (route.id === "overview") {
    return <div className="metric-grid"><Metric title="Espaços" value="12" detail="11 operacionais"/><Metric title="Pessoas" value="248" detail="236 ativas"/><Metric title="Dispositivos" value="64" detail="62 online"/><Metric title="Alertas" value="2" detail="requerem atenção" tone="warning"/></div>;
  }
  return <section className="empty-state"><span className="empty-icon">{route.icon}</span><h2>{route.label}</h2><p>{route.description}</p><button type="button">Criar primeiro registro</button></section>;
}

function Metric({ title, value, detail, tone = "default" }: { title: string; value: string; detail: string; tone?: "default" | "warning" }) {
  return <article className={`metric ${tone}`}><span>{title}</span><strong>{value}</strong><small>{detail}</small></article>;
}
