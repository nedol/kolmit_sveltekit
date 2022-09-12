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
var component = async () => (await import("./_page.svelte-RPOKGFYJ.js")).default;
var file = "_app/immutable/components/pages/_page.svelte-aa7528de.js";
var imports = ["_app/immutable/components/pages/_page.svelte-aa7528de.js", "_app/immutable/chunks/index-49fb8ea3.js", "_app/immutable/chunks/app-9cb3380c.js", "_app/immutable/chunks/stores-c9271dbf.js", "_app/immutable/chunks/singletons-7ec10d91.js", "_app/immutable/chunks/index-1b6a2f9b.js", "_app/immutable/chunks/stores-24dd553b.js", "_app/immutable/chunks/index-a30c4d16.js", "_app/immutable/modules/pages/_page.js-50a1134d.js", "_app/immutable/chunks/stores-c9271dbf.js", "_app/immutable/chunks/index-49fb8ea3.js", "_app/immutable/chunks/singletons-7ec10d91.js", "_app/immutable/chunks/_page-a96c466a.js"];
var stylesheets = ["_app/immutable/assets/_page-e30102d1.css", "_app/immutable/assets/app-fa19de04.css"];
export {
  component,
  file,
  imports,
  index,
  page_exports as shared,
  stylesheets
};
//# sourceMappingURL=3-NINL6KYW.js.map
