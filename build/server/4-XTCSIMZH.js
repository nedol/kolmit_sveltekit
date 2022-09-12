import {
  __export
} from "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/operator/_page.js
var page_exports = {};
__export(page_exports, {
  load: () => load
});
var load = async ({ params }) => {
  const res = fetch("https://nedol.ru/assets/dict/dict.json");
  const prom = await res;
  const data = await prom.json();
  return {
    dict: data
  };
};

// .svelte-kit/adapter-node/nodes/4.js
var index = 4;
var component = async () => (await import("./_page.svelte-ENAUDP4V.js")).default;
var file = "_app/immutable/components/pages/operator/_page.svelte-138873a5.js";
var imports = ["_app/immutable/components/pages/operator/_page.svelte-138873a5.js", "_app/immutable/chunks/index-49fb8ea3.js", "_app/immutable/chunks/stores-ee5d380e.js", "_app/immutable/chunks/singletons-1d97e6dd.js", "_app/immutable/chunks/stores-6cc41122.js", "_app/immutable/chunks/index-1b6a2f9b.js", "_app/immutable/modules/pages/operator/_page.js-5e1c22b6.js", "_app/immutable/chunks/_page-1c6b15e7.js"];
var stylesheets = ["_app/immutable/assets/_page-0cc74466.css"];
export {
  component,
  file,
  imports,
  index,
  page_exports as shared,
  stylesheets
};
//# sourceMappingURL=4-XTCSIMZH.js.map
