

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/operator/lesson/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.4c4b97a6.js","_app/immutable/chunks/scheduler.96a9d009.js","_app/immutable/chunks/index.ee48a681.js"];
export const stylesheets = ["_app/immutable/assets/2.109bf5db.css"];
export const fonts = [];
