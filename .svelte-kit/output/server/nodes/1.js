

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.7acc79bc.js","_app/immutable/chunks/scheduler.96a9d009.js","_app/immutable/chunks/index.ee48a681.js","_app/immutable/chunks/singletons.4e9b7f39.js","_app/immutable/chunks/paths.a9cae6bb.js"];
export const stylesheets = [];
export const fonts = [];
