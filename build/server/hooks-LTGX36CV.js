import {
  require_cookie
} from "./chunk-5UO6NJKZ.js";
import {
  __toESM
} from "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/chunks/hooks.js
var cookie = __toESM(require_cookie(), 1);
var handle = async ({ event, resolve }) => {
  const cookies = cookie.parse(event.request.headers.get("cookie") || "");
  event.locals.userid = cookies["userid"] || crypto.randomUUID();
  let response = await resolve(event, {
    ssr: false
  });
  console.log(event.url.pathname);
  if (!cookies["userid"]) {
    response.headers.set(
      "set-cookie",
      cookie.serialize("userid", event.locals.userid, {
        path: "/",
        httpOnly: true
      })
    );
  }
  return response;
};
async function externalFetch(request) {
  if (request.url.startsWith("https://api.yourapp.com/")) {
    request = new Request(
      request.url.replace("https://api.yourapp.com/", "http://localhost:9999/"),
      request
    );
  }
  return fetch(request);
}
export {
  externalFetch,
  handle
};
//# sourceMappingURL=hooks-LTGX36CV.js.map
