import { c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-1yw2o45.svelte-1yw2o45{display:flex;justify-content:space-between}.corner.svelte-1yw2o45.svelte-1yw2o45{width:3em;height:3em}nav.svelte-1yw2o45.svelte-1yw2o45{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.7)}svg.svelte-1yw2o45.svelte-1yw2o45{width:2em;height:3em;display:block}path.svelte-1yw2o45.svelte-1yw2o45{fill:var(--background)}ul.svelte-1yw2o45.svelte-1yw2o45{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-1yw2o45.svelte-1yw2o45{position:relative;height:100%}li[aria-current='page'].svelte-1yw2o45.svelte-1yw2o45::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--color-theme-1)}nav.svelte-1yw2o45 a.svelte-1yw2o45{display:flex;height:100%;align-items:center;padding:0 0.5rem;color:var(--color-text);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-1yw2o45.svelte-1yw2o45:hover{color:var(--color-theme-1)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header class="svelte-1yw2o45"><div class="corner svelte-1yw2o45" data-svelte-h="svelte-nmvquu"></div> <nav class="svelte-1yw2o45"><svg viewBox="0 0 2 3" aria-hidden="true" class="svelte-1yw2o45"><path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" class="svelte-1yw2o45"></path></svg> <ul class="svelte-1yw2o45"><li${add_attribute("aria-current", $page.url.pathname === "/" ? "page" : void 0, 0)} class="svelte-1yw2o45"><a href="/" class="svelte-1yw2o45" data-svelte-h="svelte-5a0zws">Home</a></li> <li${add_attribute("aria-current", $page.url.pathname === "/site" ? "page" : void 0, 0)} class="svelte-1yw2o45"><a href="/site/operator.html" class="svelte-1yw2o45" data-svelte-h="svelte-14ducjf">Site</a></li> <li${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/operator") ? "page" : void 0,
    0
  )} class="svelte-1yw2o45"><a href="/operator" class="svelte-1yw2o45" data-svelte-h="svelte-1u3bxqb">Operator</a></li></ul> <svg viewBox="0 0 2 3" aria-hidden="true" class="svelte-1yw2o45"><path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" class="svelte-1yw2o45"></path></svg></nav> <div class="corner svelte-1yw2o45" data-svelte-h="svelte-zm00vo"></div> </header>`;
});
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-1t5f27d.svelte-1t5f27d{display:flex;flex-direction:column;min-height:100vh}main.svelte-1t5f27d.svelte-1t5f27d{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}footer.svelte-1t5f27d.svelte-1t5f27d{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px}footer.svelte-1t5f27d a.svelte-1t5f27d{font-weight:bold}@media(min-width: 480px){footer.svelte-1t5f27d.svelte-1t5f27d{padding:12px 0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-1t5f27d">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="svelte-1t5f27d">${slots.default ? slots.default({}) : ``}</main> <footer class="svelte-1t5f27d" data-svelte-h="svelte-9ombps"><p>visit <a href="https://kit.svelte.dev" class="svelte-1t5f27d">kit.svelte.dev</a> to learn SvelteKit</p></footer> </div>`;
});
export {
  Layout as default
};
