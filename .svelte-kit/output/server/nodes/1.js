

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.0b137e29.js","_app/immutable/chunks/scheduler.a6de4c6a.js","_app/immutable/chunks/index.ef490459.js","_app/immutable/chunks/stores.66cbfe75.js","_app/immutable/chunks/singletons.eeea2cb3.js","_app/immutable/chunks/paths.5ebe83a5.js"];
export const stylesheets = [];
export const fonts = [];
