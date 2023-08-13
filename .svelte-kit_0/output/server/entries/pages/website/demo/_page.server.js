import { e as error } from "../../../../chunks/index2.js";
const base = "https://api.svelte.dev";
function api(method, resource, data) {
  return fetch(`${base}/${resource}`, {
    method,
    headers: {
      "content-type": "application/json"
    },
    body: data && JSON.stringify(data)
  });
}
const load = async ({ locals }) => {
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
const POST = async ({ request, locals }) => {
  const form = await request.formData();
  await api("POST", `todos/${locals.userid}`, {
    text: form.get("text")
  });
};
const PATCH = async ({ request, locals }) => {
  const form = await request.formData();
  await api("PATCH", `todos/${locals.userid}/${form.get("uid")}`, {
    text: form.has("text") ? form.get("text") : void 0,
    done: form.has("done") ? !!form.get("done") : void 0
  });
};
const DELETE = async ({ request, locals }) => {
  const form = await request.formData();
  await api("DELETE", `todos/${locals.userid}/${form.get("uid")}`);
};
export {
  DELETE,
  PATCH,
  POST,
  load
};
