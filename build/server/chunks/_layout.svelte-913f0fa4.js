import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-3c27212a.js';
import { s as subscribe, a as set_store_value } from './utils-3c68d794.js';
import { v as view, d as dicts, l as langs } from './stores-409ff9d6.js';
import './index2-4394be15.js';

const css$1 = {
  code: "header.svelte-1vvgu9m.svelte-1vvgu9m{display:flex;justify-content:space-between}.corner.svelte-1vvgu9m.svelte-1vvgu9m{width:3em;height:3em}nav.svelte-1vvgu9m.svelte-1vvgu9m{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.7)}svg.svelte-1vvgu9m.svelte-1vvgu9m{width:2em;height:3em;display:block}path.svelte-1vvgu9m.svelte-1vvgu9m{fill:var(--background)}ul.svelte-1vvgu9m.svelte-1vvgu9m{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-1vvgu9m.svelte-1vvgu9m{position:relative;height:100%}nav.svelte-1vvgu9m a.svelte-1vvgu9m{display:flex;height:100%;align-items:center;padding:0 0.5rem;color:var(--color-text);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-1vvgu9m.svelte-1vvgu9m:hover{color:var(--color-theme-1)}",
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
  return `<header class="svelte-1vvgu9m"><div class="corner svelte-1vvgu9m" data-svelte-h="svelte-1qgbnqr"></div> <nav class="svelte-1vvgu9m"><svg viewBox="0 0 2 3" aria-hidden="true" class="svelte-1vvgu9m"><path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" class="svelte-1vvgu9m"></path></svg> <ul class="svelte-1vvgu9m">  <a href="#" target="_self" class="svelte-1vvgu9m">${escape($dicts ? $dicts["CLASS"][$langs] : "CLASS")}</a> <li class="svelte-1vvgu9m"><a href="#" target="_self" class="svelte-1vvgu9m">${escape($dicts ? $dicts["LESSON"][$langs] : "LESSON")}</a></li></ul> <svg viewBox="0 0 2 3" aria-hidden="true" class="svelte-1vvgu9m"><path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" class="svelte-1vvgu9m"></path></svg></nav> <div class="corner svelte-1vvgu9m" data-svelte-h="svelte-vel7td"></div> </header>`;
});
const css = {
  code: ".app.svelte-yd0o68{display:flex;flex-direction:column;min-height:100vh}main.svelte-yd0o68{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}footer.svelte-yd0o68{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px}@media(min-width: 480px){footer.svelte-yd0o68{padding:12px 0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-yd0o68">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="svelte-yd0o68">${slots.default ? slots.default({}) : ``}</main> <footer class="svelte-yd0o68" data-svelte-h="svelte-18mjmal"></footer> </div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-913f0fa4.js.map
