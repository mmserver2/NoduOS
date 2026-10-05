export type RouteId = "overview" | "spaces" | "people" | "devices" | "settings";

export interface AppRoute {
  id: RouteId;
  label: string;
  icon: string;
  description: string;
  capability: string;
}

export const appRoutes: readonly AppRoute[] = [
  { id: "overview", label: "Visão geral", icon: "◉", description: "Resumo operacional do seu ambiente", capability: "overview.read" },
  { id: "spaces", label: "Espaços", icon: "⌂", description: "Organização de unidades e ambientes", capability: "spaces.read" },
  { id: "people", label: "Pessoas", icon: "◎", description: "Identidades e vínculos autorizados", capability: "people.read" },
  { id: "devices", label: "Dispositivos", icon: "◇", description: "Equipamentos conectados e integridade", capability: "devices.read" },
  { id: "settings", label: "Configurações", icon: "⚙", description: "Preferências e identidade da organização", capability: "settings.read" },
] as const;
