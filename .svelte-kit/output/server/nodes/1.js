

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.77dffe09.js","_app/immutable/chunks/scheduler.1d2e48cd.js","_app/immutable/chunks/index.abd3b193.js","_app/immutable/chunks/singletons.c17499a8.js","_app/immutable/chunks/paths.8eea7ef6.js"];
export const stylesheets = [];
export const fonts = [];
