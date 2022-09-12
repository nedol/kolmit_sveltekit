import "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/manifest.js
var manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["favicon.png"]),
  mimeTypes: { ".png": "image/png" },
  _: {
    entry: { "file": "_app/immutable/start-1b81da48.js", "imports": ["_app/immutable/start-1b81da48.js", "_app/immutable/chunks/index-49fb8ea3.js", "_app/immutable/chunks/singletons-1d97e6dd.js", "_app/immutable/chunks/index-56c348ce.js"], "stylesheets": [] },
    nodes: [
      () => import("./0-XM7F7WOM.js"),
      () => import("./1-ACDXRPD5.js"),
      () => import("./2-CDZVFEU7.js"),
      () => import("./3-MIIG44Y3.js"),
      () => import("./4-XTCSIMZH.js"),
      () => import("./5-BCMB7SDD.js"),
      () => import("./6-BF72WCQH.js"),
      () => import("./7-6HPX7YLE.js"),
      () => import("./8-JSLMYRKN.js"),
      () => import("./9-ZWHRFRD3.js")
    ],
    routes: [
      {
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        page: { "layouts": [0], "errors": [1], "leaf": 3 },
        endpoint: null
      },
      {
        id: "operator",
        pattern: /^\/operator\/?$/,
        names: [],
        types: [],
        page: { "layouts": [0], "errors": [1], "leaf": 4 },
        endpoint: null
      },
      {
        id: "api/edit_cc",
        pattern: /^\/api\/edit_cc\/?$/,
        names: [],
        types: [],
        page: null,
        endpoint: () => import("./_server-VIUTDLXR.js")
      },
      {
        id: "website/demo",
        pattern: /^\/website\/demo\/?$/,
        names: [],
        types: [],
        page: { "layouts": [0, 2], "errors": [1, null], "leaf": 7 },
        endpoint: null
      },
      {
        id: "website/login",
        pattern: /^\/website\/login\/?$/,
        names: [],
        types: [],
        page: { "layouts": [0, 2], "errors": [1, null], "leaf": 8 },
        endpoint: null
      },
      {
        id: "website/todos",
        pattern: /^\/website\/todos\/?$/,
        names: [],
        types: [],
        page: { "layouts": [0, 2], "errors": [1, null], "leaf": 9 },
        endpoint: null
      },
      {
        id: "operator/[slug]",
        pattern: /^\/operator\/([^/]+?)\/?$/,
        names: ["slug"],
        types: [null],
        page: { "layouts": [0], "errors": [1], "leaf": 5 },
        endpoint: null
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
export {
  manifest
};
//# sourceMappingURL=manifest.js.map
