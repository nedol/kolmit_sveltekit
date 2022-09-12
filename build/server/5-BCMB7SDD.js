import {
  error
} from "./chunk-PIZEBXHO.js";
import {
  __export
} from "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/operator/_slug_/_page.js
var page_exports = {};
__export(page_exports, {
  load: () => load
});
function load({ params }) {
  if (params.slug === "hello-world") {
    return {
      title: "Hello world!",
      content: "Welcome to our blog. Lorem ipsum dolor sit amet..."
    };
  }
  throw error(404, "Not found");
}

// .svelte-kit/adapter-node/nodes/5.js
var index = 5;
var component = async () => (await import("./_page.svelte-7T5XZAFK.js")).default;
var file = "_app/immutable/components/pages/operator/_slug_/_page.svelte-2933bb02.js";
var imports = ["_app/immutable/components/pages/operator/_slug_/_page.svelte-2933bb02.js", "_app/immutable/chunks/index-49fb8ea3.js", "_app/immutable/modules/pages/operator/_slug_/_page.js-d6fb70f3.js", "_app/immutable/chunks/index-56c348ce.js", "_app/immutable/chunks/_page-b427286f.js"];
var stylesheets = [];
export {
  component,
  file,
  imports,
  index,
  page_exports as shared,
  stylesheets
};
//# sourceMappingURL=5-BCMB7SDD.js.map
