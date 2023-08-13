import {
  create_ssr_component,
  escape
} from "./chunk-OAMQRJKR.js";
import "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/operator/_slug_/_page.svelte.js
var Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>${escape(data.title)}</h1>
  <div><!-- HTML_TAG_START -->${data.content}<!-- HTML_TAG_END --></div>`;
});
export {
  Page as default
};
//# sourceMappingURL=_page.svelte-7T5XZAFK.js.map
