import { appRoutes } from "../../apps/web/src/routes.js";

const requiredRoutes = ["overview", "spaces", "people", "devices", "settings"];
const ids = new Set(appRoutes.map((route) => route.id));

for (const route of requiredRoutes) {
  if (!ids.has(route as never)) throw new Error(`required web route missing: ${route}`);
}
if (appRoutes.some((route) => !route.capability.trim())) throw new Error("every route must declare a capability");
if (new Set(appRoutes.map((route) => route.capability)).size !== appRoutes.length) throw new Error("route capabilities must be unique");

console.log("OK: NoduOS web App Shell structural test passed");
