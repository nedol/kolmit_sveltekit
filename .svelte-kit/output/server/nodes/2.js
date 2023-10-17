

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/operator/lesson/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.9cb538b7.js","_app/immutable/chunks/scheduler.09e37659.js","_app/immutable/chunks/index.0089bb03.js"];
export const stylesheets = ["_app/immutable/assets/2.109bf5db.css"];
export const fonts = [];
