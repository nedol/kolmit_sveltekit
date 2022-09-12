import * as server from '../entries/pages/website/todos/_page.server.js';

export const index = 9;
export const component = async () => (await import('../entries/pages/website/todos/_page.svelte.js')).default;
export const file = '_app/immutable/components/pages/website/todos/_page.svelte-d06c49ad.js';
export { server };
export const imports = ["_app/immutable/components/pages/website/todos/_page.svelte-d06c49ad.js","_app/immutable/chunks/index-49fb8ea3.js","_app/immutable/chunks/singletons-cf7710cb.js","_app/immutable/chunks/index-a30c4d16.js"];
export const stylesheets = ["_app/immutable/assets/_page-bf3fc389.css"];
