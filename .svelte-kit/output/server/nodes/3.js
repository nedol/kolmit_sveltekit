import * as universal from '../entries/pages/_page.js';
import * as server from '../entries/pages/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/3.fa0ba05d.js","_app/immutable/chunks/scheduler.09e37659.js","_app/immutable/chunks/index.0089bb03.js","_app/immutable/chunks/signalingChannel.e5806d6e.js","_app/immutable/chunks/paths.83b4f003.js","_app/immutable/chunks/stores.b08845f0.js"];
export const stylesheets = ["_app/immutable/assets/signalingChannel.4cecd492.css"];
export const fonts = ["_app/immutable/assets/icofont.242e5428.woff2","_app/immutable/assets/icofont.53bbbda5.woff"];
