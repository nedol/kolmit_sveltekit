import * as universal from '../entries/pages/_page.js';
import * as server from '../entries/pages/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/3.9178578e.js","_app/immutable/chunks/scheduler.96a9d009.js","_app/immutable/chunks/index.ee48a681.js","_app/immutable/chunks/paths.a9cae6bb.js","_app/immutable/chunks/stores.0a25b4ea.js"];
export const stylesheets = ["_app/immutable/assets/3.b2dd6054.css"];
export const fonts = ["_app/immutable/assets/icofont.242e5428.woff2","_app/immutable/assets/icofont.53bbbda5.woff"];
