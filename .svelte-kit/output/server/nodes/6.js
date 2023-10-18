import * as universal from '../entries/pages/site/about/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/site/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/site/about/+page.js";
export const imports = ["_app/immutable/nodes/6.e011e996.js","_app/immutable/chunks/scheduler.96a9d009.js","_app/immutable/chunks/index.ee48a681.js"];
export const stylesheets = [];
export const fonts = [];
