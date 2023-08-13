import {
  create_ssr_component,
  escape,
  validate_component
} from "./chunk-OAMQRJKR.js";
import "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/website/demo/_page.svelte.js
var lang = "en";
var WhiteHouse = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
var Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(WhiteHouse, "WhiteHouse").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
//# sourceMappingURL=_page.svelte-4UFISFL7.js.map
