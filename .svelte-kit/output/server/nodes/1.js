

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.64426802.js","_app/immutable/chunks/scheduler.570d4bd4.js","_app/immutable/chunks/index.3ae6d580.js","_app/immutable/chunks/stores.946e0483.js","_app/immutable/chunks/singletons.c3a43c16.js","_app/immutable/chunks/index.44fd05d3.js"];
export const stylesheets = [];
export const fonts = [];
