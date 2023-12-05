import { c as create_ssr_component, f as escape } from "../../../../chunks/ssr.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-u10gos{display:flex;position:static;flex-direction:column;justify-content:center;align-items:center;padding:12px}",
  map: null
};
let level = "level 1.2";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header></header>  <footer class="svelte-u10gos"><p>${escape(level)}</p></footer>`;
});
export {
  Layout as default
};
