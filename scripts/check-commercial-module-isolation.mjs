import { readdirSync, readFileSync } from "node:fs";
const roots=readdirSync("modules",{withFileTypes:true}).filter((entry)=>entry.isDirectory()&&entry.name.startsWith("condo-")).map((entry)=>`modules/${entry.name}`);
if(roots.length<16) throw new Error("commercial module inventory incomplete");
const ids=new Set(); const routes=new Set(); const owners=new Set();
for(const root of roots){const manifest=JSON.parse(readFileSync(`${root}/module.json`,"utf8")); if(!/^condo\.[a-z]+$/.test(manifest.id)) throw new Error(`invalid module id: ${root}`); if(ids.has(manifest.id)||routes.has(manifest.route)) throw new Error(`duplicate module contract: ${manifest.id}`); if(!Array.isArray(manifest.dependencies)||manifest.dependencies.length) throw new Error(`${manifest.id} cannot depend on a commercial module`); for(const resource of manifest.owns){const owner=`${manifest.id}:${resource}`; if(owners.has(resource)) throw new Error(`resource ownership collision: ${owner}`); owners.add(resource);} ids.add(manifest.id); routes.add(manifest.route);}
console.log(`OK: ${ids.size} commercial modules are physically isolated with exclusive resource ownership`);
