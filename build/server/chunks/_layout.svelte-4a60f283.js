import { c as create_ssr_component, e as escape } from './ssr-3c27212a.js';
import './utils-3c68d794.js';

const css = {
  code: "main.svelte-u10gos{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}footer.svelte-u10gos{display:flex;position:static;flex-direction:column;justify-content:center;align-items:center;padding:12px}",
  map: null
};
let level = "level 1.2";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header></header> <main class="svelte-u10gos">${slots.default ? slots.default({}) : ``}</main> <footer class="svelte-u10gos"><p>${escape(level)}</p></footer>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-4a60f283.js.map
