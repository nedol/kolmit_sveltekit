import {
  Header
} from "./chunk-IDVBXPGW.js";
import {
  require_cookie
} from "./chunk-5UO6NJKZ.js";
import "./chunk-ITGA7LHQ.js";
import {
  create_ssr_component,
  validate_component
} from "./chunk-OAMQRJKR.js";
import {
  __toESM
} from "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/website/_layout.svelte.js
var import_cookie = __toESM(require_cookie(), 1);
var css = {
  code: "main.svelte-1izrdc8.svelte-1izrdc8{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:1024px;margin:0 auto;box-sizing:border-box}footer.svelte-1izrdc8.svelte-1izrdc8{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:40px}footer.svelte-1izrdc8 a.svelte-1izrdc8{font-weight:bold}@media(min-width: 480px){footer.svelte-1izrdc8.svelte-1izrdc8{padding:40px 0}}",
  map: null
};
var Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<main class="${"svelte-1izrdc8"}">${slots.default ? slots.default({}) : ``}</main>

<footer class="${"svelte-1izrdc8"}"><p>visit <a href="${"https://kit.svelte.dev"}" class="${"svelte-1izrdc8"}">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>`;
});
export {
  Layout as default
};
//# sourceMappingURL=_layout.svelte-EWL55WWO.js.map
