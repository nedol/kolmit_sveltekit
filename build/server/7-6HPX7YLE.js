import {
  error
} from "./chunk-PIZEBXHO.js";
import {
  __export
} from "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/website/demo/_page.server.js
var page_server_exports = {};
__export(page_server_exports, {
  DELETE: () => DELETE,
  PATCH: () => PATCH,
  POST: () => POST,
  load: () => load
});
var base = "https://api.svelte.dev";
function api(method, resource, data) {
  return fetch(`${base}/${resource}`, {
    method,
    headers: {
      "content-type": "application/json"
    },
    body: data && JSON.stringify(data)
  });
}
var load = async ({ locals }) => {
  const response = await api("GET", `todos/${locals.userid}`);
  if (response.status === 404) {
    return {
      todos: []
    };
  }
  if (response.status === 200) {
    return {
      todos: await response.json()
    };
  }
  throw error(response.status);
};
var POST = async ({ request, locals }) => {
  const form = await request.formData();
  await api("POST", `todos/${locals.userid}`, {
    text: form.get("text")
  });
};
var PATCH = async ({ request, locals }) => {
  const form = await request.formData();
  await api("PATCH", `todos/${locals.userid}/${form.get("uid")}`, {
    text: form.has("text") ? form.get("text") : void 0,
    done: form.has("done") ? !!form.get("done") : void 0
  });
};
var DELETE = async ({ request, locals }) => {
  const form = await request.formData();
  await api("DELETE", `todos/${locals.userid}/${form.get("uid")}`);
};

// .svelte-kit/adapter-node/nodes/7.js
var index = 7;
var component = async () => (await import("./_page.svelte-4UFISFL7.js")).default;
var file = "_app/immutable/components/pages/website/demo/_page.svelte-08fe39ca.js";
var imports = ["_app/immutable/components/pages/website/demo/_page.svelte-08fe39ca.js", "_app/immutable/chunks/index-49fb8ea3.js"];
var stylesheets = [];
export {
  component,
  file,
  imports,
  index,
  page_server_exports as server,
  stylesheets
};
//# sourceMappingURL=7-6HPX7YLE.js.map
