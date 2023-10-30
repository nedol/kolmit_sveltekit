

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.33ce2804.js","_app/immutable/chunks/scheduler.09e37659.js","_app/immutable/chunks/index.0089bb03.js","_app/immutable/chunks/singletons.4ed6f927.js","_app/immutable/chunks/paths.83b4f003.js"];
export const stylesheets = [];
export const fonts = [];
