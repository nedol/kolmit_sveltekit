import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.55ecba5b.js","_app/immutable/chunks/scheduler.a6de4c6a.js","_app/immutable/chunks/index.ef490459.js","_app/immutable/chunks/stores.66cbfe75.js","_app/immutable/chunks/singletons.eeea2cb3.js","_app/immutable/chunks/paths.5ebe83a5.js","_app/immutable/chunks/stores.3557e9cb.js"];
export const stylesheets = ["_app/immutable/assets/0.a334959a.css"];
export const fonts = ["_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.3df7909e.woff2","_app/immutable/assets/fira-mono-all-400-normal.1e3b098c.woff","_app/immutable/assets/fira-mono-cyrillic-400-normal.c7d433fd.woff2","_app/immutable/assets/fira-mono-greek-ext-400-normal.9e2fe623.woff2","_app/immutable/assets/fira-mono-greek-400-normal.a8be01ce.woff2","_app/immutable/assets/fira-mono-latin-ext-400-normal.6bfabd30.woff2","_app/immutable/assets/fira-mono-latin-400-normal.e43b3538.woff2"];
