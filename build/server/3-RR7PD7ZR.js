import {
  page
} from "./chunk-ITGA7LHQ.js";
import "./chunk-OAMQRJKR.js";
import {
  __export
} from "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/_page.js
var page_exports = {};
__export(page_exports, {
  load: () => load
});
var load = async ({ params }) => {
  const res = fetch("https://nedol.ru/assets/dict/dict.json");
  console.log(page);
  const prom = await res;
  const data = await prom.json();
  return {
    dict: JSON.stringify(data)
  };
};

// .svelte-kit/adapter-node/nodes/3.js
var index = 3;
var component = async () => (await import("./_page.svelte-QC2R7LNK.js")).default;
var file = "_app/immutable/components/pages/_page.svelte-d9700ecd.js";
var imports = ["_app/immutable/components/pages/_page.svelte-d9700ecd.js", "_app/immutable/chunks/index-49fb8ea3.js", "_app/immutable/chunks/app-0b93dd95.js", "_app/immutable/chunks/stores-390f46a7.js", "_app/immutable/chunks/singletons-cf7710cb.js", "_app/immutable/chunks/index-1b6a2f9b.js", "_app/immutable/chunks/stores-16dbe7c5.js", "_app/immutable/chunks/index-a30c4d16.js", "_app/immutable/modules/pages/_page.js-57e2a8c4.js", "_app/immutable/chunks/stores-390f46a7.js", "_app/immutable/chunks/index-49fb8ea3.js", "_app/immutable/chunks/singletons-cf7710cb.js", "_app/immutable/chunks/_page-1067c462.js"];
var stylesheets = ["_app/immutable/assets/_page-1f0c1e59.css", "_app/immutable/assets/app-6c71c248.css"];
export {
  component,
  file,
  imports,
  index,
  page_exports as shared,
  stylesheets
};
//# sourceMappingURL=3-RR7PD7ZR.js.map
