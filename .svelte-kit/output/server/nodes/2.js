

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/lesson/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.a63ff535.js","_app/immutable/chunks/scheduler.a6de4c6a.js","_app/immutable/chunks/index.ef490459.js"];
export const stylesheets = ["_app/immutable/assets/2.2dc3ccd2.css"];
export const fonts = [];
