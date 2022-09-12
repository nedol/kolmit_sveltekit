class HttpError {
  name = "HttpError";
  stack = void 0;
  constructor(status, message) {
    this.status = status;
    this.message = message ?? `Error: ${status}`;
  }
  toString() {
    return this.message;
  }
}
class Redirect {
  constructor(status, location) {
    this.status = status;
    this.location = location;
  }
}
function error(status, message) {
  return new HttpError(status, message);
}
function json(data, init) {
  const headers = new Headers(init == null ? void 0 : init.headers);
  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }
  return new Response(JSON.stringify(data), {
    ...init,
    headers
  });
}
export {
  HttpError as H,
  Redirect as R,
  error as e,
  json as j
};
