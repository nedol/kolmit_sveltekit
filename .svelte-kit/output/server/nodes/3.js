import * as universal from '../entries/pages/_page.js';
import * as server from '../entries/pages/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/3.3f00d142.js","_app/immutable/chunks/scheduler.a6de4c6a.js","_app/immutable/chunks/index.ef490459.js","_app/immutable/chunks/md5.326e8267.js","_app/immutable/chunks/paths.5ebe83a5.js","_app/immutable/chunks/stores.3557e9cb.js"];
export const stylesheets = ["_app/immutable/assets/3.1f8ffc74.css"];
export const fonts = ["_app/immutable/assets/icofont.242e5428.woff2","_app/immutable/assets/icofont.53bbbda5.woff"];
