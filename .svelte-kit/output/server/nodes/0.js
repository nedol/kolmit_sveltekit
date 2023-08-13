

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.06c75c04.js","_app/immutable/chunks/scheduler.570d4bd4.js","_app/immutable/chunks/index.3ae6d580.js","_app/immutable/chunks/stores.946e0483.js","_app/immutable/chunks/singletons.c3a43c16.js","_app/immutable/chunks/index.44fd05d3.js"];
export const stylesheets = ["_app/immutable/assets/0.43c3669c.css"];
export const fonts = ["_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.3df7909e.woff2","_app/immutable/assets/fira-mono-all-400-normal.1e3b098c.woff","_app/immutable/assets/fira-mono-cyrillic-400-normal.c7d433fd.woff2","_app/immutable/assets/fira-mono-greek-ext-400-normal.9e2fe623.woff2","_app/immutable/assets/fira-mono-greek-400-normal.a8be01ce.woff2","_app/immutable/assets/fira-mono-latin-ext-400-normal.6bfabd30.woff2","_app/immutable/assets/fira-mono-latin-400-normal.e43b3538.woff2"];
