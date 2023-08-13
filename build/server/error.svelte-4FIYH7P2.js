import {
  page
} from "./chunk-ITGA7LHQ.js";
import {
  create_ssr_component,
  escape,
  subscribe
} from "./chunk-OAMQRJKR.js";
import "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/fallbacks/error.svelte.js
var Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>${escape($page.status)}</h1>

<pre>${escape($page.error.message)}</pre>



${$page.error.frame ? `<pre>${escape($page.error.frame)}</pre>` : ``}
${$page.error.stack ? `<pre>${escape($page.error.stack)}</pre>` : ``}`;
});
export {
  Error as default
};
//# sourceMappingURL=error.svelte-4FIYH7P2.js.map
