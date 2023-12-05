import * as universal from '../entries/pages/site/about/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/site/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/site/about/+page.js";
export const imports = ["_app/immutable/nodes/6.dd3701bd.js","_app/immutable/chunks/scheduler.1d2e48cd.js","_app/immutable/chunks/index.abd3b193.js"];
export const stylesheets = [];
export const fonts = [];
