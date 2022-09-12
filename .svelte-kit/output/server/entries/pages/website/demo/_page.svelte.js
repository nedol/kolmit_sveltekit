import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../chunks/index.js";
let lang = "en";
const WhiteHouse = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h3 style="${"text-align:center"}">White House Call Center Demo</h3>
  
  <div style="${"display:flex;justify-content: space-between;height:220px; margin:20px;"}"><div style="${"flex:0 0 4%"}"><div style="${"position:absolute;text-align: center;"}"><img src="${"https://nedol.ru/assets/user/biden.png"}" title="${""}" alt="${""}" style="${"height:180px"}">
              <iframe class="${"kolmit"}" src="${"../src/lib/user/iframe.svelte?em=biden@wh.com&abonent=white@house.usa"}" scrolling="${"no"}" frameborder="${"0"}" style="${"position: absolute;height:30px; width:100%;top:0;left:0;"}" title="${""}"></iframe>
              <div><a href="${"../operator?operator=biden@wh.com&abonent=white@house.usa&psw=demo&lan=" + escape(lang, true)}" target="${"_blank"}">Click to open operator</a></div></div></div>

      <div style="${"flex:0 0 0%"}"><div style="${"position:absolute;text-align: center;"}"><img src="${"https://nedol.ru/assets/user/trump.png"}" title="${""}" alt="${""}" style="${"height:180px"}">
              <iframe class="${"kolmit"}" src="${"../src/lib/user/iframe.svelte?em=trump@wh.com&abonent=white@house.usa"}" scrolling="${"no"}" frameborder="${"0"}" style="${"position: absolute;height:30px; width:100%;top:0;left:0;"}" title="${""}"></iframe>
              <div><a href="${"../operator?operator=trump@wh.com&abonent=white@house.usa&psw=demo&lan=" + escape(lang, true)}" target="${"_blank"}">Click to open operator</a></div></div></div>

      <div style="${"flex:0 0 20%"}"><div style="${"position:absolute;text-align: center;"}"><img src="${"https://nedol.ru/assets/user/obama.png"}" title="${""}" alt="${""}" style="${"height:180px"}">
              <iframe class="${"kolmit"}" src="${"../src/lib/user/iframe.svelte?em=obama@wh.com&abonent=white@house.usa"}" scrolling="${"no"}" frameborder="${"0"}" style="${"position: absolute;height:30px; width:100%;top:0;left:0;"}" title="${""}"></iframe>
              <div><a href="${"../operator?operator=obama@wh.com&abonent=white@house.usa&psw=demo&lan=" + escape(lang, true)}" target="${"_blank"}">Click to open operator</a></div></div></div>
  </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(WhiteHouse, "WhiteHouse").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
