import {
  __export
} from "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/website/about/_page.js
var page_exports = {};
__export(page_exports, {
  GET: () => GET,
  hydrate: () => hydrate,
  load: () => load,
  prerender: () => prerender,
  router: () => router
});
var browser = false;
var dev = false;
var hydrate = dev;
var router = browser;
var prerender = true;
async function GET({ params }) {
  return {
    body: {
      mesagge: "Hello"
    }
  };
}
function load({ params }) {
  return {
    message: "Hello world!",
    content: "Welcome to our blog. Lorem ipsum dolor sit amet..."
  };
}

// .svelte-kit/adapter-node/nodes/6.js
var index = 6;
var component = async () => (await import("./_page.svelte-LXTWIWAN.js")).default;
var file = "_app/immutable/components/pages/website/about/_page.svelte-6ee8478c.js";
var imports = ["_app/immutable/components/pages/website/about/_page.svelte-6ee8478c.js", "_app/immutable/chunks/index-49fb8ea3.js", "_app/immutable/modules/pages/website/about/_page.js-64d25736.js", "_app/immutable/chunks/_page-5f828c32.js"];
var stylesheets = ["_app/immutable/assets/_page-9682aba9.css"];
export {
  component,
  file,
  imports,
  index,
  page_exports as shared,
  stylesheets
};
//# sourceMappingURL=6-BF72WCQH.js.map
