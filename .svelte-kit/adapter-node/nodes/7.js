import * as universal from '../entries/pages/site/about/_page.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/site/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/site/about/+page.js";
export const imports = ["_app/immutable/nodes/7.fb0a4e72.js","_app/immutable/chunks/scheduler.09e37659.js","_app/immutable/chunks/index.0089bb03.js"];
export const stylesheets = [];
export const fonts = [];
