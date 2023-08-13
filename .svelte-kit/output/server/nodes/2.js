import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.621df0cf.js","_app/immutable/chunks/scheduler.570d4bd4.js","_app/immutable/chunks/index.3ae6d580.js","_app/immutable/chunks/index.44fd05d3.js"];
export const stylesheets = ["_app/immutable/assets/2.57239003.css"];
export const fonts = [];
