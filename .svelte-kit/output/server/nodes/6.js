import * as universal from '../entries/pages/site/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/site/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/site/+page.js";
export const imports = ["_app/immutable/nodes/6.b32359bc.js","_app/immutable/chunks/scheduler.09e37659.js","_app/immutable/chunks/index.0089bb03.js","_app/immutable/chunks/signalingChannel.33a1ffc1.js","_app/immutable/chunks/paths.84140d67.js","_app/immutable/chunks/stores.de0f8634.js"];
export const stylesheets = ["_app/immutable/assets/signalingChannel.b2dd6054.css"];
export const fonts = ["_app/immutable/assets/icofont.242e5428.woff2","_app/immutable/assets/icofont.53bbbda5.woff"];
