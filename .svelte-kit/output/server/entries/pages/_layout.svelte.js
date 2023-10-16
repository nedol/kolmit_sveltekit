import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { s as subscribe, a as set_store_value } from "../../chunks/utils.js";
import { v as view, d as dicts, l as langs } from "../../chunks/stores.js";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-kp5x5i.svelte-kp5x5i{display:flex;justify-content:space-between}.corner.svelte-kp5x5i.svelte-kp5x5i{width:3em;height:3em}nav.svelte-kp5x5i.svelte-kp5x5i{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.7)}svg.svelte-kp5x5i.svelte-kp5x5i{width:2em;height:3em;display:block}path.svelte-kp5x5i.svelte-kp5x5i{fill:var(--background)}ul.svelte-kp5x5i.svelte-kp5x5i{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-kp5x5i.svelte-kp5x5i{position:relative;height:100%}nav.svelte-kp5x5i a.svelte-kp5x5i{display:flex;height:100%;align-items:center;padding:0 0.5rem;color:var(--color-text);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-kp5x5i.svelte-kp5x5i:hover{color:var(--color-theme-1)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $view, $$unsubscribe_view;
  let $dicts, $$unsubscribe_dicts;
  let $langs, $$unsubscribe_langs;
  $$unsubscribe_view = subscribe(view, (value) => $view = value);
  $$unsubscribe_dicts = subscribe(dicts, (value) => $dicts = value);
  $$unsubscribe_langs = subscribe(langs, (value) => $langs = value);
  set_store_value(view, $view = "cc", $view);
  $$result.css.add(css$1);
  $$unsubscribe_view();
  $$unsubscribe_dicts();
  $$unsubscribe_langs();
  return `<header class="svelte-kp5x5i"><div class="corner svelte-kp5x5i" data-svelte-h="svelte-1qgbnqr"></div> <nav class="svelte-kp5x5i"><svg viewBox="0 0 2 3" aria-hidden="true" class="svelte-kp5x5i"><path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" class="svelte-kp5x5i"></path></svg> <ul class="svelte-kp5x5i">  <a href="#" target="_self" class="svelte-kp5x5i">${escape($dicts ? $dicts["CLASS"][$langs] : "CLASS")}</a> <li class="svelte-kp5x5i"><a href="#" target="_self" class="svelte-kp5x5i">${escape($dicts ? $dicts["LESSON"][$langs] : "LESSON")}</a></li></ul> <svg viewBox="0 0 2 3" aria-hidden="true" class="svelte-kp5x5i"><path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" class="svelte-kp5x5i"></path></svg></nav> <div class="corner svelte-kp5x5i" data-svelte-h="svelte-vel7td"></div> </header>`;
});
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-qijthw{display:flex;flex-direction:column;min-height:100vh}main.svelte-qijthw{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}footer.svelte-qijthw{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px}@media(min-width: 480px){footer.svelte-qijthw{padding:12px 0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-qijthw">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="svelte-qijthw">${slots.default ? slots.default({}) : ``}</main> <footer class="svelte-qijthw" data-svelte-h="svelte-18mjmal"></footer> </div>`;
});
export {
  Layout as default
};
