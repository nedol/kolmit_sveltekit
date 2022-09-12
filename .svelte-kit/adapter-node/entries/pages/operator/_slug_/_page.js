import { e as error } from "../../../../chunks/index2.js";
function load({ params }) {
  if (params.slug === "hello-world") {
    return {
      title: "Hello world!",
      content: "Welcome to our blog. Lorem ipsum dolor sit amet..."
    };
  }
  throw error(404, "Not found");
}
export {
  load
};
