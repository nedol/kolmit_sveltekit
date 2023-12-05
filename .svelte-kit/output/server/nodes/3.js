import * as universal from '../entries/pages/_page.js';
import * as server from '../entries/pages/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/3.50127a7f.js","_app/immutable/chunks/scheduler.1d2e48cd.js","_app/immutable/chunks/index.abd3b193.js","_app/immutable/chunks/stores.ff7bd9f1.js","_app/immutable/chunks/paths.8eea7ef6.js"];
export const stylesheets = ["_app/immutable/assets/3.b9c2caa8.css"];
export const fonts = ["_app/immutable/assets/icofont.242e5428.woff2","_app/immutable/assets/icofont.53bbbda5.woff"];
