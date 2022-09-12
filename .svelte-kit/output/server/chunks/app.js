import { c as create_ssr_component, d as add_attribute, e as escape, f as each, b as subscribe, v as validate_component } from "./index.js";
import { p as page } from "./stores.js";
import "cookie";
const SelectMenu_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".collapsible.svelte-1xtkch7{position:absolute;right:0;background-color:rgb(158, 158, 158);color:white;cursor:pointer;padding:1px;max-width:105px;border:none;outline:none}.content.svelte-1xtkch7{position:absolute;right:0;padding:0px 18px;max-width:100px;max-height:0;overflow:hidden;transition:max-height 0.2s ease-out;background-color:#f1f1f1}",
  map: null
};
const SelectMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let options;
  let content;
  let { lang } = $$props;
  options = [
    {
      id: 0,
      lang: "en",
      src: "https://www.sic-info.org/wp-content/uploads/2014/01/gb.png",
      alt: "English"
    },
    {
      id: 1,
      lang: "fr",
      src: "https://www.sic-info.org/wp-content/uploads/2014/01/fr.png",
      alt: "French"
    },
    {
      id: 2,
      lang: "de",
      src: "https://www.sic-info.org/wp-content/uploads/2014/01/de.png",
      alt: "Deutch"
    },
    {
      id: 3,
      lang: "ru",
      src: "https://www.sic-info.org/wp-content/uploads/2014/01/ru.png",
      alt: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439"
    }
  ];
  let selected = {
    id: 0,
    src: "https://www.sic-info.org/wp-content/uploads/2014/01/gb.png",
    alt: "English"
  };
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  $$result.css.add(css$1);
  return `<button class="${"button collapsible svelte-1xtkch7"}" style="${"position:absolute;top:0;"}"><div style="${"padding:10px;"}"><img${add_attribute("src", selected.src, 0)} alt="${""}">${escape(selected.alt)}</div></button>

<div class="${"content svelte-1xtkch7"}" style="${"z-index:2"}"${add_attribute("this", content, 0)}>${options ? `${each(options, (opt) => {
    return `<div style="${"padding:10px"}"><img${add_attribute("src", opt.src, 0)} alt="${""}"${add_attribute("value", opt.id, 0)}>${escape(opt.alt)}</div>`;
  })}` : ``}   
</div>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-16zye4i.svelte-16zye4i{display:flex;justify-content:space-between}.corner.svelte-16zye4i.svelte-16zye4i{width:3em;height:3em}.corner.svelte-16zye4i a.svelte-16zye4i{display:flex;align-items:center;justify-content:center;width:100%;height:100%}nav.svelte-16zye4i.svelte-16zye4i{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.7)}svg.svelte-16zye4i.svelte-16zye4i{width:2em;height:3em;display:block}path.svelte-16zye4i.svelte-16zye4i{fill:var(--background)}ul.svelte-16zye4i.svelte-16zye4i{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-16zye4i.svelte-16zye4i{position:relative;height:100%}li.active.svelte-16zye4i.svelte-16zye4i::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--accent-color)}nav.svelte-16zye4i a.svelte-16zye4i{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--heading-color);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-16zye4i.svelte-16zye4i:hover{color:var(--accent-color)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let lang = "en";
  let home, demo, about;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (lang) {
        home = {
          "en": "Home",
          "de": "Home",
          "fr": "Home",
          "ru": "\u0414\u043E\u043C\u043E\u0439"
        }[lang];
        demo = {
          "en": "demo",
          "de": "demo",
          "fr": "demo",
          "ru": "\u0434\u0435\u043C\u043E"
        }[lang];
        about = {
          "en": "about",
          "de": "zum",
          "fr": "sur",
          "ru": "o \u043F\u0440\u043E\u0435\u043A\u0442\u0435"
        }[lang];
      }
    }
    $$rendered = `<header class="${"svelte-16zye4i"}"><div class="${"corner svelte-16zye4i"}"><a href="${"/website/about"}" class="${"svelte-16zye4i"}">
			<h5>Kolmit</h5></a>		
		${validate_component(SelectMenu, "SelectMenu").$$render(
      $$result,
      { lang },
      {
        lang: ($$value) => {
          lang = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

	<nav class="${"svelte-16zye4i"}"><svg viewBox="${"0 0 2 3"}" aria-hidden="${"true"}" class="${"svelte-16zye4i"}"><path d="${"M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"}" class="${"svelte-16zye4i"}"></path></svg>
		<ul class="${"svelte-16zye4i"}"><li class="${["svelte-16zye4i", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-16zye4i"}">${escape(home)}</a></li>
			<li class="${["svelte-16zye4i", $page.url.pathname === "/website/demo" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/website/demo"}" class="${"svelte-16zye4i"}">${escape(demo)}</a></li>
			<li class="${["svelte-16zye4i", $page.url.pathname === "/website/about" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/website/about"}" class="${"svelte-16zye4i"}">${escape(about)}</a></li></ul>
		<svg viewBox="${"0 0 2 3"}" aria-hidden="${"true"}" class="${"svelte-16zye4i"}"><path d="${"M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"}" class="${"svelte-16zye4i"}"></path></svg></nav>

	<div class="${"corner svelte-16zye4i"}">
		</div>
</header>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
const app = "";
export {
  Header as H
};
