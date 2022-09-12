const browser = false;
const dev = false;
const hydrate = dev;
const router = browser;
const prerender = true;
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
export {
  GET,
  hydrate,
  load,
  prerender,
  router
};
