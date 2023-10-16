import * as universal from '../entries/pages/site/_page.js';
import * as server from '../entries/pages/site/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/site/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/site/+page.js";
export { server };
export const server_id = "src/routes/site/+page.server.js";
export const imports = ["_app/immutable/nodes/6.fcba6620.js","_app/immutable/chunks/scheduler.09e37659.js","_app/immutable/chunks/index.0089bb03.js","_app/immutable/chunks/signalingChannel.547f7d37.js","_app/immutable/chunks/paths.d27590c6.js","_app/immutable/chunks/stores.8b626080.js"];
export const stylesheets = ["_app/immutable/assets/signalingChannel.5ae4bd4e.css"];
export const fonts = ["_app/immutable/assets/icofont.242e5428.woff2","_app/immutable/assets/icofont.53bbbda5.woff"];
