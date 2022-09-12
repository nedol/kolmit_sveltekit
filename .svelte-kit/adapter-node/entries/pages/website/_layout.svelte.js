import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { H as Header } from "../../../chunks/app.js";
import "../../../chunks/stores.js";
import "cookie";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-14x53a4.svelte-14x53a4{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:1024px;margin:0 auto;box-sizing:border-box}footer.svelte-14x53a4.svelte-14x53a4{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:40px}footer.svelte-14x53a4 a.svelte-14x53a4{font-weight:bold}@media(min-width: 480px){footer.svelte-14x53a4.svelte-14x53a4{padding:40px 0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<main class="${"svelte-14x53a4"}">${slots.default ? slots.default({}) : ``}</main>

<footer class="${"svelte-14x53a4"}"><p>visit <a href="${"https://kit.svelte.dev"}" class="${"svelte-14x53a4"}">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>`;
});
export {
  Layout as default
};
