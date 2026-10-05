export type RouteId = string;
export interface RouteField { key: string; label: string; type?: string; optional?: boolean; placeholder?: string }
export interface AppRoute { id: RouteId; label: string; icon: string; description: string; capability: string; moduleId: string; resource?: string; fields?: RouteField[]; columns?: string[]; core?: boolean }
const field = (key: string, label: string, optional = false): RouteField => ({ key, label, optional });
const moduleRoute = (moduleId: string, id: string, label: string, icon: string, description: string, fields: RouteField[], columns: string[]): AppRoute => ({ id, label, icon, description, moduleId, resource: id, fields, columns, capability: `${moduleId}.read` });

export const appRoutes: readonly AppRoute[] = [
  { id: "overview", label: "Visão geral", icon: "◉", description: "Resumo operacional do ambiente", capability: "overview.read", moduleId: "core", core: true },
  { id: "spaces", label: "Estrutura", icon: "⌂", description: "Blocos, unidades e áreas comuns", capability: "spaces.read", moduleId: "core", core: true },
  { id: "people", label: "Pessoas", icon: "◎", description: "Identidades e vínculos autorizados", capability: "people.read", moduleId: "core", core: true },
  { id: "condominiums", label: "Condomínios", icon: "▦", description: "Clientes, implantação e inventário por condomínio", capability: "condo.management.read", moduleId: "condo.management" },
  { id: "network", label: "Rede e MikroTik", icon: "⌁", description: "Wizard WireGuard e integração da rede remota", capability: "condo.network.read", moduleId: "condo.network" },
  moduleRoute("condo.residents", "residents", "Moradores", "♙", "Moradores, dependentes e vínculos com unidades", [field("name","Nome"),field("unit","Unidade"),field("contact","Contato",true)], ["name","unit","contact","status"]),
  moduleRoute("condo.visitors", "visitors", "Visitantes", "↪", "Visitantes, autorizações e entradas", [field("name","Visitante"),field("document","Documento",true),field("destination","Destino")], ["name","document","destination","status"]),
  moduleRoute("condo.access", "access-control", "Controle de acesso", "⌁", "Credenciais, permissões e eventos", [field("name","Credencial"),field("kind","Tipo"),field("holder","Portador")], ["name","kind","holder","status"]),
  moduleRoute("condo.reservations", "reservations", "Reservas", "▣", "Agenda e reservas de áreas comuns", [field("name","Reserva"),field("space","Área"),field("scheduled_at","Data e hora")], ["name","space","scheduled_at","status"]),
  moduleRoute("condo.deliveries", "deliveries", "Encomendas", "□", "Recebimento e retirada de encomendas", [field("name","Destinatário"),field("unit","Unidade"),field("carrier","Transportadora",true)], ["name","unit","carrier","status"]),
  moduleRoute("condo.occurrences", "occurrences", "Ocorrências", "!", "Registro, triagem e acompanhamento", [field("name","Título"),field("category","Categoria"),field("priority","Prioridade")], ["name","category","priority","status"]),
  moduleRoute("condo.maintenance", "maintenance", "Manutenção", "⚒", "Ordens de serviço e manutenção preventiva", [field("name","Serviço"),field("location","Local"),field("priority","Prioridade")], ["name","location","priority","status"]),
  moduleRoute("condo.communication", "notices", "Comunicados", "◫", "Avisos e comunicação com moradores", [field("name","Título"),field("audience","Público"),field("message","Mensagem")], ["name","audience","status","created_at"]),
  moduleRoute("condo.documents", "documents", "Documentos", "▤", "Documentos, regulamentos e arquivos", [field("name","Documento"),field("category","Categoria"),field("reference","Referência",true)], ["name","category","status"]),
  moduleRoute("condo.assemblies", "assemblies", "Assembleias", "♧", "Assembleias, pautas e deliberações", [field("name","Assembleia"),field("scheduled_at","Data e hora"),field("kind","Tipo")], ["name","scheduled_at","kind","status"]),
  moduleRoute("condo.finance", "financial", "Financeiro", "$", "Boletos, cobranças e posição financeira", [field("name","Lançamento"),field("amount","Valor"),field("due_date","Vencimento")], ["name","amount","due_date","status"]),
  moduleRoute("condo.cameras", "cameras", "Câmeras", "◉", "Câmeras, streams e integridade do vídeo", [field("name","Câmera"),field("location","Local"),field("provider","Provedor",true)], ["name","location","provider","status"]),
  moduleRoute("condo.devices", "devices", "Dispositivos", "◇", "Equipamentos e integrações", [field("name","Dispositivo"),field("kind","Tipo"),field("location","Local",true)], ["name","kind","location","status"]),
  moduleRoute("condo.notifications", "notifications", "Notificações", "✦", "Fila e histórico de notificações", [field("name","Notificação"),field("channel","Canal"),field("audience","Público")], ["name","channel","audience","status"]),
  moduleRoute("condo.support", "support", "Suporte", "?", "Solicitações e atendimento", [field("name","Solicitação"),field("category","Categoria"),field("priority","Prioridade")], ["name","category","priority","status"]),
  moduleRoute("condo.partners", "partners", "Parceiros", "◇", "Prestadores e acessos delegados", [field("name","Parceiro"),field("service","Serviço"),field("contact","Contato",true)], ["name","service","contact","status"]),
  { id: "settings", label: "Configurações", icon: "⚙", description: "Identidade e preferências", capability: "settings.read", moduleId: "core", core: true },
] as const;
