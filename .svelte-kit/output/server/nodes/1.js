

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5427b450.js","_app/immutable/chunks/scheduler.09e37659.js","_app/immutable/chunks/index.0089bb03.js","_app/immutable/chunks/singletons.996d308e.js","_app/immutable/chunks/paths.d27590c6.js"];
export const stylesheets = [];
export const fonts = [];
