

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/lesson/luister/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.55b08bf2.js","_app/immutable/chunks/scheduler.a6de4c6a.js","_app/immutable/chunks/index.ef490459.js","_app/immutable/chunks/md5.326e8267.js","_app/immutable/chunks/stores.3557e9cb.js","_app/immutable/chunks/paths.5ebe83a5.js"];
export const stylesheets = ["_app/immutable/assets/6.3b6f4751.css"];
export const fonts = [];
