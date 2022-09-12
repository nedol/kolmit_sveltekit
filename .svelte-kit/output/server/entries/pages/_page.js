import { p as page } from "../../chunks/stores.js";
import "../../chunks/index.js";
const load = async ({ params }) => {
  const res = fetch("https://nedol.ru/assets/dict/dict.json");
  console.log(page);
  const prom = await res;
  const data = await prom.json();
  return {
    dict: JSON.stringify(data)
  };
};
export {
  load
};
