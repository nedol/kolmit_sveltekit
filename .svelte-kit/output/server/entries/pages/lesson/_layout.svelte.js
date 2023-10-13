import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1r3gvzc{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}footer.svelte-1r3gvzc{display:flex;position:static;flex-direction:column;justify-content:center;align-items:center;padding:12px}",
  map: null
};
let level = "level 1.2";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header></header> <main class="svelte-1r3gvzc">${slots.default ? slots.default({}) : ``}</main> <footer class="svelte-1r3gvzc"><p>${escape(level)}</p></footer>`;
});
export {
  Layout as default
};
