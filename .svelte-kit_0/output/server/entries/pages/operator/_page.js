const load = async ({ params }) => {
  const res = fetch("https://nedol.ru/assets/dict/dict.json");
  const prom = await res;
  const data = await prom.json();
  return {
    dict: data
  };
};
export {
  load
};
