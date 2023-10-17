

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c0391b03.js","_app/immutable/chunks/scheduler.09e37659.js","_app/immutable/chunks/index.0089bb03.js","_app/immutable/chunks/singletons.227dd748.js","_app/immutable/chunks/paths.ef2969f2.js"];
export const stylesheets = [];
export const fonts = [];
