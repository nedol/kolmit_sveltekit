import { c as compute_rest_props, s as subscribe, a as set_store_value, b as compute_slots, n as noop, d as null_to_empty } from "../../chunks/utils.js";
import { c as create_ssr_component, g as get_current_component, h as getContext, v as validate_component, m as missing_component, a as spread, b as escape_object, d as add_attribute, s as setContext, o as onDestroy, f as escape, i as each, e as escape_attribute_value } from "../../chunks/ssr.js";
import { f as forwardEventsBuilder, c as classMap, S as SmuiElement, a as Ripple, g as globals, b as classAdderBuilder, d as dispatch, I as IconButton } from "../../chunks/IconButton.js";
import { mdiPagePreviousOutline, mdiAccountBox } from "@mdi/js";
import "blueimp-load-image/js/load-image.js";
import "blueimp-load-image/js/load-image-scale.js";
import { p as posterst, o as operator, c as click_call_func, a as call_but_status, s as signal, u as users, m as msg_user, l as langs, e as editable, d as dicts, b as server_path, f as lesson, g as dc_oper, h as msg_oper, i as dc_user, v as view, j as ice_conf } from "../../chunks/stores.js";
import md5 from "md5";
import pkg from "lodash";
import "cookie";
import { w as writable, r as readable } from "../../chunks/index2.js";
import translate from "translate";
import Speech from "speak-tts";
import "devalue";
const operator_svg = "/_app/immutable/assets/operator.7238a518.svg";
function exclude(obj2, keys) {
  let names = Object.getOwnPropertyNames(obj2);
  const newObj = {};
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const cashIndex = name.indexOf("$");
    if (cashIndex !== -1 && keys.indexOf(name.substring(0, cashIndex + 1)) !== -1) {
      continue;
    }
    if (keys.indexOf(name) !== -1) {
      continue;
    }
    newObj[name] = obj2[name];
  }
  return newObj;
}
function prefixFilter(obj2, prefix) {
  let names = Object.getOwnPropertyNames(obj2);
  const newObj = {};
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (name.substring(0, prefix.length) === prefix) {
      newObj[name.substring(prefix.length)] = obj2[name];
    }
  }
  return newObj;
}
const CommonIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "on", "component", "tag", "getElement"]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { on = false } = $$props;
  let element;
  let { component = SmuiElement } = $$props;
  let { tag = component === SmuiElement ? "i" : void 0 } = $$props;
  const svg = component === Svg;
  const context = getContext("SMUI:icon:context");
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.on === void 0 && $$bindings.on && on !== void 0)
    $$bindings.on(on);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign(
        {},
        { tag },
        { use: [forwardEvents, ...use] },
        {
          class: classMap({
            [className]: true,
            "mdc-button__icon": context === "button",
            "mdc-fab__icon": context === "fab",
            "mdc-icon-button__icon": context === "icon-button",
            "mdc-icon-button__icon--on": context === "icon-button" && on,
            "mdc-tab__icon": context === "tab",
            "mdc-banner__icon": context === "banner",
            "mdc-segmented-button__icon": context === "segmented-button"
          })
        },
        { "aria-hidden": "true" },
        svg ? { focusable: "false", tabindex: "-1" } : {},
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Svg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  if (console && console.warn) {
    console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  }
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<svg${spread([escape_object($$restProps)], {})}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</svg>`;
});
const ContextFragment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $storeValue, $$unsubscribe_storeValue;
  let { key } = $$props;
  let { value } = $$props;
  const storeValue = writable(value);
  $$unsubscribe_storeValue = subscribe(storeValue, (value2) => $storeValue = value2);
  setContext(key, storeValue);
  onDestroy(() => {
    storeValue.set(void 0);
  });
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  set_store_value(storeValue, $storeValue = value, $storeValue);
  $$unsubscribe_storeValue();
  return `${slots.default ? slots.default({}) : ``}`;
});
const { Object: Object_1$2 } = globals;
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let actionProp;
  let defaultProp;
  let secondaryProp;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "ripple",
    "color",
    "variant",
    "touch",
    "href",
    "action",
    "defaultAction",
    "secondary",
    "component",
    "tag",
    "getElement"
  ]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { ripple = true } = $$props;
  let { color = "primary" } = $$props;
  let { variant = "text" } = $$props;
  let { touch = false } = $$props;
  let { href = void 0 } = $$props;
  let { action = "close" } = $$props;
  let { defaultAction = false } = $$props;
  let { secondary = false } = $$props;
  let element;
  let internalClasses = {};
  let internalStyles = {};
  let context = getContext("SMUI:button:context");
  let { component = SmuiElement } = $$props;
  let { tag = component === SmuiElement ? href == null ? "button" : "a" : void 0 } = $$props;
  let previousDisabled = $$restProps.disabled;
  setContext("SMUI:label:context", "button");
  setContext("SMUI:icon:context", "button");
  function addClass(className2) {
    if (!internalClasses[className2]) {
      internalClasses[className2] = true;
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      internalClasses[className2] = false;
    }
  }
  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === "" || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.touch === void 0 && $$bindings.touch && touch !== void 0)
    $$bindings.touch(touch);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.defaultAction === void 0 && $$bindings.defaultAction && defaultAction !== void 0)
    $$bindings.defaultAction(defaultAction);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    actionProp = context === "dialog:action" && action != null ? { "data-mdc-dialog-action": action } : { action: $$props.action };
    defaultProp = context === "dialog:action" && defaultAction ? { "data-mdc-dialog-button-default": "" } : { default: $$props.default };
    secondaryProp = context === "banner" ? {} : { secondary: $$props.secondary };
    {
      if (previousDisabled !== $$restProps.disabled) {
        const el = getElement();
        if ("blur" in el) {
          el.blur();
        }
        previousDisabled = $$restProps.disabled;
      }
    }
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render(
      $$result,
      Object_1$2.assign(
        {},
        { tag },
        {
          use: [
            [
              Ripple,
              {
                ripple,
                unbounded: false,
                color,
                disabled: !!$$restProps.disabled,
                addClass,
                removeClass,
                addStyle
              }
            ],
            forwardEvents,
            ...use
          ]
        },
        {
          class: classMap({
            [className]: true,
            "mdc-button": true,
            "mdc-button--raised": variant === "raised",
            "mdc-button--unelevated": variant === "unelevated",
            "mdc-button--outlined": variant === "outlined",
            "smui-button--color-secondary": color === "secondary",
            "mdc-button--touch": touch,
            "mdc-card__action": context === "card:action",
            "mdc-card__action--button": context === "card:action",
            "mdc-dialog__button": context === "dialog:action",
            "mdc-top-app-bar__navigation-icon": context === "top-app-bar:navigation",
            "mdc-top-app-bar__action-item": context === "top-app-bar:action",
            "mdc-snackbar__action": context === "snackbar:actions",
            "mdc-banner__secondary-action": context === "banner" && secondary,
            "mdc-banner__primary-action": context === "banner" && !secondary,
            "mdc-tooltip__action": context === "tooltip:rich-actions",
            ...internalClasses
          })
        },
        {
          style: Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" ")
        },
        actionProp,
        defaultProp,
        secondaryProp,
        { href },
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="mdc-button__ripple"></div> ${slots.default ? slots.default({}) : ``}${touch ? `<div class="mdc-button__touch"></div>` : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const SelectMenu_svelte_svelte_type_style_lang = "";
const css$d = {
  code: ".collapsible.svelte-wfamek.svelte-wfamek{position:absolute;right:0px;width:140px;top:0px;display:flex;align-items:center;background-color:transparent;color:rgb(3, 3, 3);cursor:pointer;padding:5px;border:none;outline:none}.lang.svelte-wfamek.svelte-wfamek{display:flex;align-items:center;padding-top:15px}img.svelte-wfamek.svelte-wfamek{position:relative;width:15px;margin-right:5px}.collapsible.svelte-wfamek img.svelte-wfamek{margin-left:0px}.list.svelte-wfamek.svelte-wfamek{position:absolute;right:0px;padding-right:25px;padding-left:10px;top:50px;max-width:200px;overflow:hidden;transition:max-height 0.2s ease-out;color:black;background-color:#f1f1f1}",
  map: null
};
const SelectMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let options;
  let { lang = "en" } = $$props;
  let isListOpen = false;
  options = [
    {
      id: 0,
      lang: "en",
      src: "https://cdn.countryflags.com/thumbs/united-kingdom/flag-square-250.png",
      alt: "English"
    },
    {
      id: 1,
      lang: "nl",
      src: "https://cdn.countryflags.com/thumbs/netherlands/flag-square-250.png",
      alt: "Nederlands"
    },
    {
      id: 2,
      lang: "fr",
      src: "https://cdn.countryflags.com/thumbs/france/flag-square-250.png",
      alt: "Français"
    },
    {
      id: 3,
      lang: "de",
      src: "https://cdn.countryflags.com/thumbs/germany/flag-square-250.png",
      alt: "Deutch"
    },
    {
      id: 4,
      lang: "uk",
      src: "https://cdn.countryflags.com/thumbs/ukraine/flag-square-250.png",
      alt: "Український"
    },
    {
      id: 5,
      lang: "ru",
      src: "https://cdn.countryflags.com/thumbs/russia_/flag-square-250.png",
      alt: "Русский"
    }
  ];
  let selected = {
    id: 0,
    src: "https://cdn.countryflags.com/thumbs/united-kingdom/flag-square-250.png",
    alt: "English"
  };
  onDestroy(() => {
    document.removeEventListener("click", handleDocumentClick);
  });
  function handleDocumentClick(event) {
    const list = document.querySelector(".list");
    const button = document.querySelector(".collapsible");
    if (list && button) {
      if (!list.contains(event.target) && !button.contains(event.target)) {
        isListOpen = false;
      }
    }
  }
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  $$result.css.add(css$d);
  return `<div class="collapsible svelte-wfamek" style="display: flex; align-items: center;">${validate_component(Button, "IconButton").$$render($$result, {}, {}, {
    default: () => {
      return `<div style="padding:10px"><img${add_attribute("src", selected.src, 0)} alt="" class="svelte-wfamek">${escape(selected.alt)}</div>`;
    }
  })}</div> ${isListOpen ? `<div class="list svelte-wfamek">${each(options, (option) => {
    return `<span class="lang svelte-wfamek"><img${add_attribute("src", option.src, 0)} alt="" class="svelte-wfamek"> ${escape(option.alt)} </span>`;
  })}</div>` : ``}`;
});
const icofont_min$1 = "";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "variant", "padded", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { variant = "raised" } = $$props;
  let { padded = false } = $$props;
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.padded === void 0 && $$bindings.padded && padded !== void 0)
    $$bindings.padded(padded);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-card": true,
          "mdc-card--outlined": variant === "outlined",
          "smui-card--padded": padded
        }))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``} </div>`;
});
classAdderBuilder({
  class: "smui-card__content",
  tag: "div"
});
const Media = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "aspectRatio", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { aspectRatio = void 0 } = $$props;
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.aspectRatio === void 0 && $$bindings.aspectRatio && aspectRatio !== void 0)
    $$bindings.aspectRatio(aspectRatio);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-card__media": true,
          "mdc-card__media--square": aspectRatio === "square",
          "mdc-card__media--16-9": aspectRatio === "16x9"
        }))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``} </div>`;
});
const MediaContent = classAdderBuilder({
  class: "mdc-card__media-content",
  tag: "div"
});
classAdderBuilder({
  class: "mdc-card__action-buttons",
  tag: "div"
});
classAdderBuilder({
  class: "mdc-card__action-icons",
  tag: "div"
});
const Video_local_svelte_svelte_type_style_lang = "";
const css$c = {
  code: "video.svelte-1mhm3i9{display:block;margin-right:auto;margin-left:auto;margin-top:5px;width:50px}",
  map: null
};
let display = "block";
const Video_local = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $posterst, $$unsubscribe_posterst;
  $$unsubscribe_posterst = subscribe(posterst, (value) => $posterst = value);
  let { srcObject = "" } = $$props;
  let lv, card, parent_div;
  if ($$props.srcObject === void 0 && $$bindings.srcObject && srcObject !== void 0)
    $$bindings.srcObject(srcObject);
  $$result.css.add(css$c);
  $$unsubscribe_posterst();
  return `<div class="card-display"${add_attribute("this", parent_div, 0)}><div class="card-container"${add_attribute("this", card, 0)}>${validate_component(Card, "Card").$$render($$result, { style: "min-width: 50px;" }, {}, {
    default: () => {
      return `${validate_component(Media, "Media").$$render(
        $$result,
        {
          class: "card-media-square",
          aspectRatio: "square"
        },
        {},
        {
          default: () => {
            return `${validate_component(MediaContent, "MediaContent").$$render($$result, {}, {}, {
              default: () => {
                return `<video${add_attribute("poster", $posterst, 0)} autoplay playsinline muted style="${"display: " + escape(display, true)}" class="svelte-1mhm3i9"${add_attribute("this", lv, 0)}></video>`;
              }
            })}`;
          }
        }
      )}  <h3 class="mdc-typography--subtitle2" style="margin: 0; color: #888;font-size:smaller;text-align:center; z-index:1"></h3>`;
    }
  })}</div></div>  ${slots.footer ? slots.footer({}) : ``}`;
});
operator.subscribe((data) => {
});
posterst.subscribe((data) => {
});
const Profile_svelte_svelte_type_style_lang = "";
const Video_remote_svelte_svelte_type_style_lang$1 = "";
const css$b = {
  code: "video.svelte-j5wrbs{display:block;margin-right:auto;margin-left:auto;margin-top:5px;width:50px}[status='call'].svelte-j5wrbs{opacity:1}[status='talk'].svelte-j5wrbs{opacity:1}[status='muted'].svelte-j5wrbs{opacity:0.3}[status='inactive'].svelte-j5wrbs{opacity:0.3}[status='active'].svelte-j5wrbs{opacity:1}[status='busy'].svelte-j5wrbs{opacity:1}",
  map: null
};
const Video_remote$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { display: display2 = "block" } = $$props;
  let { srcObject } = $$props;
  let { poster } = $$props;
  let { status } = $$props;
  let { video_element, card } = $$props;
  let { parent_div } = $$props;
  let { name, em } = $$props;
  if ($$props.display === void 0 && $$bindings.display && display2 !== void 0)
    $$bindings.display(display2);
  if ($$props.srcObject === void 0 && $$bindings.srcObject && srcObject !== void 0)
    $$bindings.srcObject(srcObject);
  if ($$props.poster === void 0 && $$bindings.poster && poster !== void 0)
    $$bindings.poster(poster);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.video_element === void 0 && $$bindings.video_element && video_element !== void 0)
    $$bindings.video_element(video_element);
  if ($$props.card === void 0 && $$bindings.card && card !== void 0)
    $$bindings.card(card);
  if ($$props.parent_div === void 0 && $$bindings.parent_div && parent_div !== void 0)
    $$bindings.parent_div(parent_div);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.em === void 0 && $$bindings.em && em !== void 0)
    $$bindings.em(em);
  $$result.css.add(css$b);
  return `<div class="card-display"${add_attribute("this", parent_div, 0)}><div class="card-container"${add_attribute("this", card, 0)}>${validate_component(Card, "Card").$$render($$result, { style: "min-width: 50px;" }, {}, {
    default: () => {
      return `${validate_component(Media, "Media").$$render(
        $$result,
        {
          class: "card-media-square",
          aspectRatio: "square"
        },
        {},
        {
          default: () => {
            return `${validate_component(MediaContent, "MediaContent").$$render($$result, {}, {}, {
              default: () => {
                return `<video${add_attribute("poster", poster, 0)}${add_attribute("status", status, 0)} autoplay playsinline class="svelte-j5wrbs"${add_attribute("this", video_element, 0)}><track kind="captions"></video>`;
              }
            })}`;
          }
        }
      )}  <h3 class="mdc-typography--subtitle2" style="margin: 0; color: #888;font-size:smaller;text-align:center;z-index:1">${name ? `${escape(name.slice(0, 8))}` : `${escape(em.slice(0, 8))}`}</h3>`;
    }
  })}</div></div> ${slots.default ? slots.default({}) : ``}`;
});
const CallButtonUser_svelte_svelte_type_style_lang = "";
const icofont_min = "";
const User = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $click_call_func, $$unsubscribe_click_call_func;
  let $call_but_status, $$unsubscribe_call_but_status;
  let $$unsubscribe_signal;
  let $users, $$unsubscribe_users;
  let $msg_user, $$unsubscribe_msg_user;
  $$unsubscribe_click_call_func = subscribe(click_call_func, (value) => $click_call_func = value);
  $$unsubscribe_call_but_status = subscribe(call_but_status, (value) => $call_but_status = value);
  $$unsubscribe_signal = subscribe(signal, (value) => value);
  $$unsubscribe_users = subscribe(users, (value) => $users = value);
  $$unsubscribe_msg_user = subscribe(msg_user, (value) => $msg_user = value);
  let { abonent, em, operator: operator2, poster, name } = $$props;
  const { groupBy, find } = pkg;
  md5(abonent + em + operator2);
  let rtc;
  let inter, status = "inactive", card;
  let video_element, parent_div;
  let local = {
    video: { display: "none", srcObject: "" },
    audio: { paused: true, src: "" }
  };
  let remote = {
    video: { display: "block", srcObject: "", poster },
    audio: { muted: true, srcObject: "" }
  };
  function OnMessage(data) {
    if (data.operators && data.operators[em]) {
      let res = groupBy(data.operators[em], "status");
      try {
        if (res && res["offer"]) {
          if (status !== "call") {
            status = "active";
          }
        } else if (res["close"]) {
          local.video.display = "none";
          local.audio.paused = true;
          remote.audio.muted = true;
          status = "inactive";
          set_store_value(click_call_func, $click_call_func = null, $click_call_func);
          parent_div.appendChild(card);
          rtc.OnInactive();
          video_element.src = "";
        }
      } catch (ex) {
        console.log(ex);
      }
    }
    if (data.operator && data.operator.em === rtc.em) {
      status = "active";
    }
    if (data.desc && data.cand)
      ;
    if (data.func === "mute") {
      local.audio.paused = true;
      remote.audio.muted = true;
      local.video.display = "none";
      status = "inactive";
      set_store_value(call_but_status, $call_but_status = "inactive", $call_but_status);
      set_store_value(click_call_func, $click_call_func = null, $click_call_func);
      parent_div.appendChild(card);
    }
    if (data.func === "talk") {
      set_store_value(call_but_status, $call_but_status = "talk", $call_but_status);
      if (data.em && data[em]) {
        status = "talk";
        clearInterval(inter);
        local.audio.paused = true;
        remote.audio.muted = false;
        remote.video.display = "block";
      }
    }
    if (data.func === "redirect") {
      status = "call";
      local.audio.paused = true;
      remote.audio.muted = true;
      remote.video.srcObject = null;
      remote.video.display = "none";
    }
  }
  if ($$props.abonent === void 0 && $$bindings.abonent && abonent !== void 0)
    $$bindings.abonent(abonent);
  if ($$props.em === void 0 && $$bindings.em && em !== void 0)
    $$bindings.em(em);
  if ($$props.operator === void 0 && $$bindings.operator && operator2 !== void 0)
    $$bindings.operator(operator2);
  if ($$props.poster === void 0 && $$bindings.poster && poster !== void 0)
    $$bindings.poster(poster);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if ($msg_user) {
        OnMessage($msg_user);
      }
    }
    {
      if (status) {
        let user = find($users[0].staff, { email: em });
        if (user)
          user.status = status;
      }
    }
    $$rendered = `${validate_component(Video_remote$1, "VideoRemote").$$render(
      $$result,
      Object.assign({}, remote.video, { name }, { em }, { parent_div }, { video_element }, { card }, { status }),
      {
        parent_div: ($$value) => {
          parent_div = $$value;
          $$settled = false;
        },
        video_element: ($$value) => {
          video_element = $$value;
          $$settled = false;
        },
        card: ($$value) => {
          card = $$value;
          $$settled = false;
        },
        status: ($$value) => {
          status = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_click_call_func();
  $$unsubscribe_call_but_status();
  $$unsubscribe_signal();
  $$unsubscribe_users();
  $$unsubscribe_msg_user();
  return $$rendered;
});
const Forward = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { status } = $$props;
  let { operator: operator2 } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.operator === void 0 && $$bindings.operator && operator2 !== void 0)
    $$bindings.operator(operator2);
  return `  <div style="position: relative;right: 0px; top:70px">${slots.default ? slots.default({}) : ``}</div>`;
});
const FileTransfer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { operator: operator2 } = $$props;
  if ($$props.operator === void 0 && $$bindings.operator && operator2 !== void 0)
    $$bindings.operator(operator2);
  return `<div style="position: relative;right: 0px; top:70px">${slots.default ? slots.default({}) : ``} <input class="file-upload" accept="*,*" id="file" name="file" type="file" style="display: none"> </div>`;
});
const Oper_svelte_svelte_type_style_lang = "";
const css$a = {
  code: "textarea.svelte-81pd54:not([readonly]),input.svelte-81pd54:not([readonly]){color:rgb(35, 33, 158)}textarea.svelte-81pd54:not([readonly])::placeholder,input.svelte-81pd54:not([readonly])::placeholder{color:rgb(41, 128, 155)}input.svelte-81pd54,input.svelte-81pd54:hover,input.svelte-81pd54:focus,input.svelte-81pd54:active,textarea.svelte-81pd54{background:transparent;border:0;border-style:none;border-color:transparent;outline:none;outline-offset:0;box-shadow:none;padding:0;font-size:0.7em}",
  map: null
};
const Oper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $langs, $$unsubscribe_langs;
  let $posterst, $$unsubscribe_posterst;
  let $editable, $$unsubscribe_editable;
  let $dicts, $$unsubscribe_dicts;
  let $call_but_status, $$unsubscribe_call_but_status;
  $$unsubscribe_langs = subscribe(langs, (value) => $langs = value);
  $$unsubscribe_posterst = subscribe(posterst, (value) => $posterst = value);
  $$unsubscribe_editable = subscribe(editable, (value) => $editable = value);
  $$unsubscribe_dicts = subscribe(dicts, (value) => $dicts = value);
  $$unsubscribe_call_but_status = subscribe(call_but_status, (value) => $call_but_status = value);
  let { operator: operator2 } = $$props;
  let { id } = $$props;
  let { dep } = $$props;
  let { user } = $$props;
  let user_status;
  let dict = $dicts;
  if (dict) {
    dict["input operator name"][$langs];
    dict["input operator email"][$langs];
    dict["input description"][$langs];
  }
  let user_pic = operator_svg;
  if (user.picture.medium)
    user_pic = user.picture.medium;
  let { edited_display } = $$props;
  user.abonent = operator2.abonent;
  user.email = user.email ? user.email : "";
  const titleize = (s) => s ? s.replace(/^([a-z])/, (_, r) => r.toUpperCase()) : "";
  user.name = titleize(user.name);
  let oper_admin_div;
  function OnClickUpload(ev) {
    new MouseEvent(
      "click",
      {
        bubbles: false,
        cancelable: true,
        view: window
      }
    );
  }
  if ($$props.operator === void 0 && $$bindings.operator && operator2 !== void 0)
    $$bindings.operator(operator2);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.dep === void 0 && $$bindings.dep && dep !== void 0)
    $$bindings.dep(dep);
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  if ($$props.edited_display === void 0 && $$bindings.edited_display && edited_display !== void 0)
    $$bindings.edited_display(edited_display);
  $$result.css.add(css$a);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if ($editable) {
        edited_display = $editable;
      }
    }
    {
      if (user.email && operator2.em === user.email) {
        console.log(operator2.em + " " + user.email);
        set_store_value(posterst, $posterst = user_pic, $posterst);
      }
    }
    $$rendered = `${user.email !== operator2.em ? `<div style="display:flex; flex-wrap: nowrap;justify-content: space-between; padding-bottom:22px"${add_attribute("this", oper_admin_div, 0)}> <div class="user_pic_div" style="position:relative; width: 60px; height:60px">  ${edited_display ? `<input class="file-upload svelte-81pd54" accept="image/png, image/jpeg" id="avatar" name="avatar" type="file" style="display: none">` : ``}       ${validate_component(User, "User").$$render(
      $$result,
      {
        em: user.email,
        name: user.name,
        operator: operator2.em,
        abonent: user.abonent,
        poster: user_pic,
        OnClickUpload
      },
      {},
      {}
    )}   ${edited_display ? `${dep.admin.email === operator2.email && operator2.email !== user.email && user.role === "operator" ? `  <svg height="30" width="30" style="position: absolute;bottom: -15px;left: -9px;"><glyph glyph-name="minus-circle" unicode="" horiz-adv-x="50"></glyph><g class="currentLayer"><path d="M500.2 62.5c-241.8 0-437.7 195.89999999999998-437.7 437.3 0 241.8 195.89999999999998 437.7 437.7 437.7 241.40000000000003 0 437.3-195.89999999999998 437.3-437.7 0-241.40000000000003-195.89999999999998-437.3-437.3-437.3z m301.59999999999997 466.5c-0.6999999999999318 9-2.199999999999932 19.100000000000023-4.699999999999932 30.299999999999955h-593.9000000000001c-2.499999999999943-11.199999999999932-4.299999999999926-21.699999999999932-5.0999999999999375-31.399999999999977-0.6999999999999886-9.699999999999932-1.0999999999999943-19.799999999999955-1.0999999999999943-30.299999999999955 0-9 0.4000000000000057-18 1.0999999999999943-26.700000000000045 0.700000000000017-9 2.5-19.099999999999966 5.099999999999994-30.299999999999955h593.9000000000001c2.4999999999998863 11.199999999999989 3.9999999999998863 21.599999999999966 4.699999999999818 31.399999999999977 1.1000000000000227 9.699999999999989 1.400000000000091 19.80000000000001 1.400000000000091 30.30000000000001 0.09999999999990905 9.099999999999966-0.3000000000000682 17.69999999999999-1.400000000000091 26.69999999999999z" transform="scale(.03)" style="fill:lightgrey; stroke:black; stroke-width:20px"></path></g></svg>` : ``}` : ``}</div> ${``} <div style="display: flex;flex-flow: row nowrap; align-items: flex-start;flex-direction: column;">${$call_but_status === "talk" && user_status === "active" && user.email !== operator2.email ? `${validate_component(Forward, "Forward").$$render(
      $$result,
      { operator: user.email, $call_but_status },
      {
        $call_but_status: ($$value) => {
          $call_but_status = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<img src="./src/routes/assets/call-forward.svg" alt="call-forward" width="30px" height="30px">`;
        }
      }
    )}` : ``} ${$call_but_status === "talk" && user.email === operator2.email ? `${validate_component(FileTransfer, "FileTransfer").$$render($$result, { $call_but_status, operator: user.email }, {}, {
      default: () => {
        return `<img src="./src/routes/assets/file-transfer.svg" alt="file-transfer" width="30px" height="30px">`;
      }
    })}` : ``}</div></div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_langs();
  $$unsubscribe_posterst();
  $$unsubscribe_editable();
  $$unsubscribe_dicts();
  $$unsubscribe_call_but_status();
  return $$rendered;
});
const Dep_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: ".collapsible.svelte-zwf51o{background-color:rgb(158, 158, 158);color:white;cursor:pointer;padding:18px;width:100%;border:none;text-align:left;outline:none;font-size:15px}.content.svelte-zwf51o{padding:0 10px;max-height:0;overflow:hidden;transition:max-height 0.2s ease-out;background-color:#f1f1f1}input.svelte-zwf51o:not([readonly])::placeholder{color:rgb(35, 33, 158)}input.svelte-zwf51o,input.svelte-zwf51o:hover,input.svelte-zwf51o:focus,input.svelte-zwf51o:active{background:transparent;border:0;border-style:none;border-color:transparent;outline:none;outline-offset:0;box-shadow:none;padding:0}",
  map: null
};
const Dep = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $langs, $$unsubscribe_langs;
  let $editable, $$unsubscribe_editable;
  let $$unsubscribe_signal;
  let $call_but_status, $$unsubscribe_call_but_status;
  $$unsubscribe_langs = subscribe(langs, (value) => $langs = value);
  $$unsubscribe_editable = subscribe(editable, (value) => $editable = value);
  $$unsubscribe_signal = subscribe(signal, (value) => value);
  $$unsubscribe_call_but_status = subscribe(call_but_status, (value) => $call_but_status = value);
  let { dep } = $$props;
  let { owner } = $$props;
  let { operator: operator2 } = $$props;
  let button;
  let isAddOper = "none";
  let readonly = false;
  let content;
  let { update } = $$props;
  let { edited_display } = $$props;
  async function AddOper(ev) {
    let par = {};
    par.proj = "kolmit";
    par.func = "addoper";
    par.abonent = operator2.abonent;
    par.em = operator2.email;
    par.lang = $langs;
    par.dep_id = dep.id;
    const res = fetch("/operator/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // 'Content-Type': 'application/x-www-form-urlencoded',
      body: JSON.stringify({ par })
    });
    let data = await (await res).json();
    dep = data.dep;
    content.style.maxHeight = 200 + content.scrollHeight + "px";
    return;
  }
  let { RemoveDep } = $$props;
  if ($$props.dep === void 0 && $$bindings.dep && dep !== void 0)
    $$bindings.dep(dep);
  if ($$props.owner === void 0 && $$bindings.owner && owner !== void 0)
    $$bindings.owner(owner);
  if ($$props.operator === void 0 && $$bindings.operator && operator2 !== void 0)
    $$bindings.operator(operator2);
  if ($$props.update === void 0 && $$bindings.update && update !== void 0)
    $$bindings.update(update);
  if ($$props.edited_display === void 0 && $$bindings.edited_display && edited_display !== void 0)
    $$bindings.edited_display(edited_display);
  if ($$props.AddOper === void 0 && $$bindings.AddOper && AddOper !== void 0)
    $$bindings.AddOper(AddOper);
  if ($$props.RemoveDep === void 0 && $$bindings.RemoveDep && RemoveDep !== void 0)
    $$bindings.RemoveDep(RemoveDep);
  $$result.css.add(css$9);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if ($editable) {
        edited_display = $editable;
        readonly = !edited_display;
      }
    }
    {
      if (edited_display) {
        if (!operator2.abonent && dep.id === "0" || !operator2.abonent && !dep.admin || operator2.abonent && operator2.email === dep.admin.email) {
          isAddOper = "block";
        }
      }
    }
    $$rendered = `  ${dep.id !== "0" ? `<button class="collapsible svelte-zwf51o"${add_attribute("owner", owner, 0)}${add_attribute("this", button, 0)}><input type="text" ${readonly ? "readonly" : ""} style="border-width: 0px;" placeholder="input dep name" class="svelte-zwf51o"${add_attribute("value", dep.alias, 0)}> ${edited_display ? `${operator2.email === operator2.abonent ? `  <svg height="30" width="30" style="position: relative;float:right"><glyph glyph-name="minus-circle" unicode="" horiz-adv-x="50"></glyph><g class="currentLayer"><path d="M500.2 62.5c-241.8 0-437.7 195.89999999999998-437.7 437.3 0 241.8 195.89999999999998 437.7 437.7 437.7 241.40000000000003 0 437.3-195.89999999999998 437.3-437.7 0-241.40000000000003-195.89999999999998-437.3-437.3-437.3z m301.59999999999997 466.5c-0.6999999999999318 9-2.199999999999932 19.100000000000023-4.699999999999932 30.299999999999955h-593.9000000000001c-2.499999999999943-11.199999999999932-4.299999999999926-21.699999999999932-5.0999999999999375-31.399999999999977-0.6999999999999886-9.699999999999932-1.0999999999999943-19.799999999999955-1.0999999999999943-30.299999999999955 0-9 0.4000000000000057-18 1.0999999999999943-26.700000000000045 0.700000000000017-9 2.5-19.099999999999966 5.099999999999994-30.299999999999955h593.9000000000001c2.4999999999998863 11.199999999999989 3.9999999999998863 21.599999999999966 4.699999999999818 31.399999999999977 1.1000000000000227 9.699999999999989 1.400000000000091 19.80000000000001 1.400000000000091 30.30000000000001 0.09999999999990905 9.099999999999966-0.3000000000000682 17.69999999999999-1.400000000000091 26.69999999999999z" transform="scale(.03)" style="fill:lightgrey; stroke:black; stroke-width:20px"></path></g></svg>` : ``}` : ``}</button>` : ``}  <div class="content svelte-zwf51o" style="max-height:0px"${add_attribute("this", content, 0)}> ${dep.admin ? `<div>${validate_component(Oper, "Oper").$$render(
      $$result,
      {
        id: dep.admin.id,
        operator: operator2,
        update,
        readonly,
        status: $call_but_status,
        dep,
        user: dep.admin
      },
      {
        status: ($$value) => {
          $call_but_status = $$value;
          $$settled = false;
        },
        dep: ($$value) => {
          dep = $$value;
          $$settled = false;
        },
        user: ($$value) => {
          dep.admin = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : ``} ${dep.staff ? `${each(dep.staff, (user, u) => {
      return `  ${validate_component(Oper, "Oper").$$render(
        $$result,
        {
          operator: operator2,
          update,
          readonly,
          status: $call_but_status,
          dep,
          user
        },
        {
          status: ($$value) => {
            $call_but_status = $$value;
            $$settled = false;
          },
          dep: ($$value) => {
            dep = $$value;
            $$settled = false;
          },
          user: ($$value) => {
            user = $$value;
            $$settled = false;
          }
        },
        {}
      )}  `;
    })}` : ``} ${edited_display ? `   <div class="add_oper" style="${"display:" + escape(isAddOper, true)}"><svg style="position: relative;left: 45%; height:40, width=40"><title>add-user</title><glyph glyph-name="contact-add" unicode="" horiz-adv-x="50"></glyph><path d="M134.1 761.6c-14.5 0-26.39999999999999-11.899999999999977-26.39999999999999-26.399999999999977v-523.5c0-14.500000000000057 11.899999999999991-26.400000000000034 26.39999999999999-26.400000000000034h639.8c14.5 0 26.399999999999977 11.899999999999977 26.399999999999977 26.399999999999977v239.40000000000003c15.800000000000068 2.3999999999999773 30.90000000000009 6.2999999999999545 45.40000000000009 11.899999999999977v-288.7c0-14.5-11.900000000000091-26.400000000000006-26.40000000000009-26.400000000000006h-730.4c-14.499999999999972 0-26.399999999999977 11.900000000000006-26.399999999999977 26.400000000000006v598.7c0 14.399999999999977 11.900000000000006 26.299999999999955 26.400000000000006 26.299999999999955h479.30000000000007c-7.400000000000091-11.899999999999977-13.700000000000045-24.59999999999991-18.700000000000045-37.69999999999993h-415.4z m164.70000000000002-245h-19.400000000000034c-41.69999999999999 0-75.39999999999998 33.799999999999955-75.39999999999998 75.39999999999998v21c0 13.100000000000023 10.699999999999989 23.799999999999955 23.80000000000001 23.799999999999955h251.7c13.100000000000023 0 23.899999999999977-10.699999999999932 23.899999999999977-23.799999999999955v-21c0-41.60000000000002-33.799999999999955-75.39999999999998-75.39999999999998-75.39999999999998h-19.600000000000023c-10.099999999999966 0-18.299999999999955-8.100000000000023-18.299999999999955-18.30000000000001 0-3.8000000000000114 1.5-7.300000000000011 4.199999999999989-10 11.300000000000011-11 20.899999999999977-25.80000000000001 27.69999999999999-41.80000000000001 1.5 1.1000000000000227 2.8999999999999773 1.8000000000000114 4.5 1.8000000000000114 10.899999999999977 0 23.80000000000001-24.19999999999999 23.80000000000001-40.80000000000001 0-16.399999999999977-1.5-29.80000000000001-12.300000000000011-29.80000000000001-1.3000000000000114 0-2.8000000000000114 0.30000000000001137-4 0.6000000000000227-0.8000000000000114-44.69999999999999-12.100000000000023-100.40000000000003-80.30000000000001-100.40000000000003-71.19999999999999 0-79.5 55.60000000000002-80.19999999999999 100.20000000000005-1-0.20000000000004547-2-0.4000000000000341-2.8999999999999773-0.4000000000000341-11 0-12.5 13.400000000000034-12.5 29.80000000000001 0 16.5 12.899999999999977 40.80000000000001 23.799999999999955 40.80000000000001 1.3000000000000114 0 2.6000000000000227-0.4000000000000341 3.8000000000000114-1.1000000000000227 6.800000000000011 15.699999999999989 16.19999999999999 30.30000000000001 27.30000000000001 41 2.8000000000000114 2.6000000000000227 4.199999999999989 6.300000000000011 4.199999999999989 10-0.19999999999998863 10.199999999999989-8.399999999999977 18.400000000000034-18.399999999999977 18.400000000000034z m381.2-189.3c0-9.699999999999989-7.899999999999977-17.80000000000001-17.799999999999955-17.80000000000001h-211.00000000000006c6 13.600000000000023 10.300000000000011 30.100000000000023 12.199999999999989 50.60000000000002 4.600000000000023 2.8999999999999773 7.900000000000034 7.399999999999977 10.700000000000045 12.799999999999955h188.10000000000002c9.699999999999932 0 17.799999999999955-7.899999999999977 17.799999999999955-17.599999999999966v-28z m-2.1000000000000227 151.09999999999997c1.1000000000000227-2.3999999999999773 2.1000000000000227-5 2.1000000000000227-7.699999999999989v-28c0-9.699999999999989-7.899999999999977-17.80000000000001-17.799999999999955-17.80000000000001h-183.80000000000007c-5 18.900000000000034-17.099999999999966 38.700000000000045-34.299999999999955 43.900000000000034l-1.6000000000000227 2.8000000000000114v16.69999999999999h213.20000000000005c7.2999999999999545-3.6999999999999886 14.699999999999932-7 22.199999999999932-9.900000000000034z m-125 125.10000000000002c8.899999999999977-23.299999999999955 21.5-44.5 37.39999999999998-63.200000000000045h-71.69999999999993c9.399999999999977 15 15.100000000000023 32.700000000000045 15.100000000000023 51.60000000000002v11.5h19.199999999999932v0.10000000000002274z m332.20000000000005-55.39999999999998c-30.700000000000045-31.100000000000023-73.10000000000002-50.60000000000002-119.70000000000005-52.400000000000034h-6.2999999999999545c-49.700000000000045 0-94 19.900000000000034-126.5 52.400000000000034-32.10000000000002 32.10000000000002-52.39999999999998 76.79999999999995-52.39999999999998 126 0 25.299999999999955 5.399999999999977 49.299999999999955 14.899999999999977 71 9 20.699999999999932 21.699999999999932 39.69999999999993 37.5 55.60000000000002 32.5 32.09999999999991 76.79999999999995 52 126.5 52 98.39999999999998 0 178.39999999999998-80 178.39999999999998-178.4000000000001 0-49.39999999999998-19.899999999999977-94.09999999999991-52.39999999999998-126.19999999999993z m-41.60000000000002 152.19999999999993h-58.700000000000045v58.30000000000007h-52v-58.30000000000007h-58.299999999999955v-52.39999999999998h58.299999999999955v-58.299999999999955h52v58.299999999999955h58.700000000000045v52.39999999999998z" transform="scale(.04)" style="fill:grey"></path></svg></div> ` : ``}</div>   `;
  } while (!$$settled);
  $$unsubscribe_langs();
  $$unsubscribe_editable();
  $$unsubscribe_signal();
  $$unsubscribe_call_but_status();
  return $$rendered;
});
const Callcenter_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ".svelte-1mmnihw::-webkit-scrollbar{display:none}",
  map: null
};
const Callcenter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $server_path, $$unsubscribe_server_path;
  let $$unsubscribe_msg_user;
  let $users, $$unsubscribe_users;
  let $langs, $$unsubscribe_langs;
  $$unsubscribe_server_path = subscribe(server_path, (value) => $server_path = value);
  $$unsubscribe_msg_user = subscribe(msg_user, (value) => value);
  $$unsubscribe_users = subscribe(users, (value) => $users = value);
  $$unsubscribe_langs = subscribe(langs, (value) => $langs = value);
  const { forEach, findIndex } = pkg;
  let { operator: operator2 } = $$props;
  let { view: view2 } = $$props;
  let display2 = "none";
  let lang = $langs;
  let cc_data = $users;
  let edited_display = false;
  async function RemoveDep(id) {
    let ind = findIndex(cc_data, { id });
    if (confirm("Delete Dep " + (cc_data[ind].alias ? cc_data[ind].alias : "") + "?")) {
      let par = {};
      par.proj = "kolmit";
      par.func = "remdep";
      par.role = operator2;
      par.dep = id;
      par.em = operator2.email;
      par.lang = lang;
      par.abonent = operator2.abonent;
      par.uid = operator2.uid;
      const res = fetch($server_path + "/operator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // 'Content-Type': 'application/x-www-form-urlencoded',
        body: JSON.stringify({ par })
      });
      const data = await (await res).json();
      cc_data = data["users"];
    }
  }
  if ($$props.operator === void 0 && $$bindings.operator && operator2 !== void 0)
    $$bindings.operator(operator2);
  if ($$props.view === void 0 && $$bindings.view && view2 !== void 0)
    $$bindings.view(view2);
  $$result.css.add(css$8);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (view2 === "cc") {
        display2 = "block";
      } else {
        display2 = "none";
      }
    }
    {
      if (cc_data && cc_data.length > 0) {
        forEach(cc_data, (dep, k) => {
          if (dep.admin && dep.admin.email === operator2.email) {
            operator2.role = dep.admin.role;
          }
        });
      }
    }
    $$rendered = `<div style="${"display:" + escape(display2, true)}" class="svelte-1mmnihw"><div class="deps_div svelte-1mmnihw" style="height: 100vh; overflow-y: scroll;"> ${each(cc_data, (dep, i) => {
      return `<br class="svelte-1mmnihw">  ${validate_component(Dep, "Dep").$$render(
        $$result,
        {
          owner: dep.admin.email,
          operator: operator2,
          update: cc_data,
          RemoveDep,
          dep,
          edited_display
        },
        {
          dep: ($$value) => {
            dep = $$value;
            $$settled = false;
          },
          edited_display: ($$value) => {
            edited_display = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${edited_display ? `${operator2.role === "admin" ? `  <svg class="add_dep svelte-1mmnihw" height="50" width="50" style="float:right"><title class="svelte-1mmnihw">Add Dep</title><glyph glyph-name="plus-circle" unicode="" horiz-adv-x="50" class="svelte-1mmnihw"></glyph><path d="M500.2 62.5c-241.8 0-437.7 195.89999999999998-437.7 437.3 0 241.8 195.89999999999998 437.7 437.7 437.7 241.40000000000003 0 437.3-195.89999999999998 437.3-437.7 0-241.40000000000003-195.89999999999998-437.3-437.3-437.3z m301.59999999999997 466.5c-0.6999999999999318 9-2.199999999999932 19.100000000000023-4.699999999999932 30.299999999999955h-237.70000000000005v237.80000000000007c-11.199999999999932 2.5-21.600000000000023 4.2999999999999545-31.399999999999977 5.100000000000023-9.700000000000045 0.6999999999999318-19.80000000000001 1.099999999999909-30.30000000000001 1.099999999999909-9 0-17.69999999999999-0.39999999999997726-26.69999999999999-1.099999999999909-9-0.7000000000000455-19.100000000000023-2.5-30.30000000000001-5.100000000000023v-237.70000000000005h-237.5c-2.5-11.199999999999932-4.299999999999983-21.699999999999932-5.099999999999994-31.399999999999977-0.6999999999999886-9.700000000000045-1.0999999999999943-19.80000000000001-1.0999999999999943-30.30000000000001 0-9 0.4000000000000057-17.69999999999999 1.0999999999999943-26.69999999999999 0.700000000000017-9 2.5-19.100000000000023 5.099999999999994-30.30000000000001h237.40000000000003v-237.5c11.199999999999989-2.5 21.599999999999966-4 31.399999999999977-4.699999999999989 9.699999999999989-1.0999999999999943 19.80000000000001-1.4000000000000057 30.30000000000001-1.4000000000000057 9 0 17.999999999999943 0.4000000000000057 26.69999999999999 1.4000000000000057 9 0.6999999999999886 19.100000000000023 2.1999999999999886 30.299999999999955 4.699999999999989v237.40000000000003h237.80000000000007c2.5 11.199999999999989 4 21.599999999999966 4.699999999999932 31.399999999999977 1.1000000000000227 9.699999999999989 1.400000000000091 19.80000000000001 1.400000000000091 30.30000000000001 0.09999999999990905 9.099999999999966-0.3000000000000682 18.099999999999966-1.400000000000091 26.69999999999999z" transform="scale(.04)" style="fill:lightgrey" class="svelte-1mmnihw"></path></svg>` : ``}` : ``} <div class="empty svelte-1mmnihw" style="height:100px"></div></div> </div>`;
  } while (!$$settled);
  $$unsubscribe_server_path();
  $$unsubscribe_msg_user();
  $$unsubscribe_users();
  $$unsubscribe_langs();
  return $$rendered;
});
const CallButtonOperator_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: "[status='call'].svelte-6hf0ij.svelte-6hf0ij{transform:rotate(0deg) !important;animation-iteration-count:infinite}[status='call'].svelte-6hf0ij g.svelte-6hf0ij{fill:orange}[status='talk'].svelte-6hf0ij.svelte-6hf0ij{transform:rotate(0deg) !important}[status='talk'].svelte-6hf0ij g.svelte-6hf0ij{fill:green}[status='muted'].svelte-6hf0ij.svelte-6hf0ij{transform:rotate(120deg) !important;color:#232323}[status='inactive'].svelte-6hf0ij.svelte-6hf0ij{color:#dea677;transform:rotate(120deg)}[status='inactive'].svelte-6hf0ij g.svelte-6hf0ij{fill:grey}[status='active'].svelte-6hf0ij.svelte-6hf0ij{transform:rotate(120deg);color:black;opacity:1}[status='active'].svelte-6hf0ij g.svelte-6hf0ij{fill:orange}[status='busy'].svelte-6hf0ij.svelte-6hf0ij{transform:rotate(120deg);opacity:0.3;color:indianred}@keyframes svelte-6hf0ij-shake{0%{transform:translate(1px, 1px) rotate(0deg)}10%{transform:translate(-1px, -2px) rotate(-1deg)}20%{transform:translate(-3px, 0px) rotate(1deg)}30%{transform:translate(3px, 2px) rotate(0deg)}40%{transform:translate(1px, -1px) rotate(1deg)}50%{transform:translate(-1px, 2px) rotate(-1deg)}60%{transform:translate(-3px, 1px) rotate(0deg)}70%{transform:translate(3px, 1px) rotate(-1deg)}80%{transform:translate(-1px, -1px) rotate(1deg)}90%{transform:translate(1px, 2px) rotate(0deg)}100%{transform:translate(1px, -2px) rotate(-1deg)}}",
  map: null
};
const CallButtonOperator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { status = "inactive" } = $$props;
  let { OnLongPress: OnLongPress2 } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.OnLongPress === void 0 && $$bindings.OnLongPress && OnLongPress2 !== void 0)
    $$bindings.OnLongPress(OnLongPress2);
  $$result.css.add(css$7);
  return `<div class="callObject" style="display: block;"><svg class="callButton svelte-6hf0ij"${add_attribute("status", status, 0)} width="50" height="50" style="left:0px;top:50px;z-index: 1;"><g class="currentLayer svelte-6hf0ij" style="stroke:lightgrey; stroke-width:10px"><title>Layer 1</title><path d="M390.7 353.3c-120.30000000000001 69.5 63.19999999999999 413.59999999999997 194.90000000000003 337.59999999999997l122.10000000000002 211.39999999999998c-55.60000000000002 32.10000000000002-102.5 52.30000000000007-166.9000000000001 15.5-178.79999999999995-102.19999999999993-375.59999999999997-442.9-369.99999999999994-646.0999999999999 1.8999999999999773-70.60000000000005 43.599999999999994-98.30000000000004 97.89999999999998-129.70000000000005 23.30000000000001 40.400000000000006 98.60000000000002 170.8 122 211.3z m50.400000000000034-5.699999999999989c-13 7.5-29.700000000000045 3.099999999999966-37.30000000000001-10l-115-199.3c-7.5-13.000000000000014-3.1000000000000227-29.700000000000017 10-37.30000000000001l60.5-34.900000000000006c13-7.499999999999993 29.69999999999999-3.0999999999999943 37.30000000000001 10l115.09999999999997 199.29999999999998c7.500000000000057 13 3.099999999999966 29.700000000000045-10 37.200000000000045l-60.599999999999966 35z m314.4 544.5c-13 7.5-29.700000000000045 3.1000000000000227-37.299999999999955-10l-115-199.30000000000007c-7.5-13-3.1000000000000227-29.699999999999932 10-37.299999999999955l60.5-34.89999999999998c13-7.5 29.699999999999932-3.1000000000000227 37.299999999999955 10l115.10000000000002 199.29999999999995c7.5 13 3.1000000000000227 29.700000000000045-10 37.30000000000007l-60.60000000000002 34.89999999999998z" id="svg_1" class="selected" transform="scale(.04)"></path></g></svg>  </div>`;
});
const Video_remote_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "video.svelte-1mhm3i9{display:block;margin-right:auto;margin-left:auto;margin-top:5px;width:50px}",
  map: null
};
const Video_remote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { display: display2 = "block" } = $$props;
  let { poster, card, name, em } = $$props;
  let { srcObject } = $$props;
  let video;
  if ($$props.display === void 0 && $$bindings.display && display2 !== void 0)
    $$bindings.display(display2);
  if ($$props.poster === void 0 && $$bindings.poster && poster !== void 0)
    $$bindings.poster(poster);
  if ($$props.card === void 0 && $$bindings.card && card !== void 0)
    $$bindings.card(card);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.em === void 0 && $$bindings.em && em !== void 0)
    $$bindings.em(em);
  if ($$props.srcObject === void 0 && $$bindings.srcObject && srcObject !== void 0)
    $$bindings.srcObject(srcObject);
  $$result.css.add(css$6);
  return ` <div class="card-display" style="${"display:" + escape(display2, true)}"${add_attribute("this", card, 0)}><div class="card-container">${validate_component(Card, "Card").$$render($$result, { style: "min-width: 50px;" }, {}, {
    default: () => {
      return `${validate_component(Media, "Media").$$render(
        $$result,
        {
          class: "card-media-square",
          aspectRatio: "square"
        },
        {},
        {
          default: () => {
            return `${validate_component(MediaContent, "MediaContent").$$render($$result, {}, {}, {
              default: () => {
                return `<video autoplay playsinline${add_attribute("poster", poster, 0)} class="svelte-1mhm3i9"${add_attribute("this", video, 0)}><track kind="captions"></video>`;
              }
            })}`;
          }
        }
      )}  <h3 class="mdc-typography--subtitle2" style="margin: 0; color: #888;font-size:smaller;text-align:center;z-index:1">${name ? `${escape(name.slice(0, 8))}` : `${escape(em.slice(0, 8))}`}</h3>`;
    }
  })}</div></div>  ${slots.default ? slots.default({}) : ``}`;
});
const Download = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<a id="download_href" style="display:none;" data-svelte-h="svelte-1ulz4fx"></a> <form id="fileInfo" style="display: none" data-svelte-h="svelte-tjvju7"><input type="file" id="fileInput" name="files"></form> <i class="fa fa-spinner fa-spin" style="position:absolute; top:50%;left:50%;font-size:44px;"></i>`;
});
const Audio_local = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { paused = true } = $$props;
  if ($$props.paused === void 0 && $$bindings.paused && paused !== void 0)
    $$bindings.paused(paused);
  return `<audio id="localSound" src="../src/routes/assets/mp3/ring.mp3" data-svelte-h="svelte-qhtjm0"><track kind="captions"></audio>`;
});
const Audio_remote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { muted = false } = $$props;
  let { srcObject } = $$props;
  if ($$props.muted === void 0 && $$bindings.muted && muted !== void 0)
    $$bindings.muted(muted);
  if ($$props.srcObject === void 0 && $$bindings.srcObject && srcObject !== void 0)
    $$bindings.srcObject(srcObject);
  return `<audio id="remoteAudio" autoplay ${muted ? "muted" : ""}><track kind="captions"></audio>`;
});
const RecordedVideo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { display: display2 = "none" } = $$props;
  if ($$props.display === void 0 && $$bindings.display && display2 !== void 0)
    $$bindings.display(display2);
  return `<video class="recordedVideo" autoplay muted style="${"display:" + escape(display2, true)}"></video>`;
});
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "multiple", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { multiple = false } = $$props;
  let element;
  let withOpenDialog = false;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "smui-accordion": true,
          "smui-accordion--multiple": multiple,
          "smui-accordion--with-open-dialog": withOpenDialog
        }))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``} </div>`;
});
const Paper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "variant", "square", "color", "elevation", "transition", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { variant = "raised" } = $$props;
  let { square = false } = $$props;
  let { color = "default" } = $$props;
  let { elevation = 1 } = $$props;
  let { transition = false } = $$props;
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.square === void 0 && $$bindings.square && square !== void 0)
    $$bindings.square(square);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.elevation === void 0 && $$bindings.elevation && elevation !== void 0)
    $$bindings.elevation(elevation);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "smui-paper": true,
          "smui-paper--raised": variant === "raised",
          "smui-paper--unelevated": variant === "unelevated",
          "smui-paper--outlined": variant === "outlined",
          ["smui-paper--elevation-z" + elevation]: elevation !== 0 && variant === "raised",
          "smui-paper--rounded": !square,
          ["smui-paper--color-" + color]: color !== "default",
          "smui-paper-transition": transition
        }))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``} </div>`;
});
const Content = classAdderBuilder({
  class: "smui-paper__content",
  tag: "div"
});
classAdderBuilder({
  class: "smui-paper__title",
  tag: "h5"
});
classAdderBuilder({
  class: "smui-paper__subtitle",
  tag: "h6"
});
const Panel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let usePass;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "variant",
    "color",
    "elevation",
    "open",
    "disabled",
    "nonInteractive",
    "extend",
    "extendedElevation",
    "isOpen",
    "setOpen",
    "getElement"
  ]);
  let $openStore, $$unsubscribe_openStore;
  let $nonInteractiveStore, $$unsubscribe_nonInteractiveStore;
  let $disabledStore, $$unsubscribe_disabledStore;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { variant = "raised" } = $$props;
  let { color = "default" } = $$props;
  let { elevation = 1 } = $$props;
  let { open = false } = $$props;
  let { disabled = false } = $$props;
  let { nonInteractive = false } = $$props;
  let { extend = false } = $$props;
  let { extendedElevation = 3 } = $$props;
  let element;
  let accessor;
  let opened = open;
  const disabledStore = writable(disabled);
  $$unsubscribe_disabledStore = subscribe(disabledStore, (value) => $disabledStore = value);
  setContext("SMUI:accordion:panel:disabled", disabledStore);
  const nonInteractiveStore = writable(nonInteractive);
  $$unsubscribe_nonInteractiveStore = subscribe(nonInteractiveStore, (value) => $nonInteractiveStore = value);
  setContext("SMUI:accordion:panel:nonInteractive", nonInteractiveStore);
  const openStore = writable(open);
  $$unsubscribe_openStore = subscribe(openStore, (value) => $openStore = value);
  setContext("SMUI:accordion:panel:open", openStore);
  let previousOpen = open;
  function isOpen() {
    return open;
  }
  function setOpen(value) {
    open = value;
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.elevation === void 0 && $$bindings.elevation && elevation !== void 0)
    $$bindings.elevation(elevation);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.nonInteractive === void 0 && $$bindings.nonInteractive && nonInteractive !== void 0)
    $$bindings.nonInteractive(nonInteractive);
  if ($$props.extend === void 0 && $$bindings.extend && extend !== void 0)
    $$bindings.extend(extend);
  if ($$props.extendedElevation === void 0 && $$bindings.extendedElevation && extendedElevation !== void 0)
    $$bindings.extendedElevation(extendedElevation);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.setOpen === void 0 && $$bindings.setOpen && setOpen !== void 0)
    $$bindings.setOpen(setOpen);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    usePass = [forwardEvents, ...use];
    set_store_value(disabledStore, $disabledStore = disabled, $disabledStore);
    set_store_value(nonInteractiveStore, $nonInteractiveStore = nonInteractive, $nonInteractiveStore);
    set_store_value(openStore, $openStore = open, $openStore);
    {
      if (previousOpen !== open) {
        previousOpen = open;
        Array.from(getElement().children).forEach((child) => {
          if (child.classList.contains("smui-paper__content")) {
            const content = child;
            if (open) {
              content.classList.add("smui-accordion__content--no-transition");
              content.classList.add("smui-accordion__content--force-open");
              const { height } = content.getBoundingClientRect();
              content.classList.remove("smui-accordion__content--force-open");
              content.getBoundingClientRect();
              content.classList.remove("smui-accordion__content--no-transition");
              content.style.height = height + "px";
              content.addEventListener(
                "transitionend",
                () => {
                  if (content) {
                    content.style.height = "";
                  }
                  opened = open;
                  dispatch(getElement(), "SMUIAccordionPanel:opened", { accessor });
                },
                { once: true }
              );
            } else {
              content.style.height = content.getBoundingClientRect().height + "px";
              content.getBoundingClientRect();
              requestAnimationFrame(() => {
                if (content) {
                  content.style.height = "";
                }
                dispatch(getElement(), "SMUIAccordionPanel:closed", { accessor });
              });
              opened = false;
            }
            content.setAttribute("aria-hidden", open ? "false" : "true");
          }
        });
        dispatch(
          getElement(),
          open ? "SMUIAccordionPanel:opening" : "SMUIAccordionPanel:closing",
          { accessor }
        );
      }
    }
    $$rendered = `${validate_component(Paper, "Paper").$$render(
      $$result,
      Object.assign(
        {},
        { use: usePass },
        {
          class: classMap({
            [className]: true,
            "smui-accordion__panel": true,
            "smui-accordion__panel--open": open,
            "smui-accordion__panel--opened": opened,
            "smui-accordion__panel--disabled": disabled,
            "smui-accordion__panel--non-interactive": nonInteractive,
            "smui-accordion__panel--raised": variant === "raised",
            "smui-accordion__panel--extend": extend,
            ["smui-accordion__panel--elevation-z" + (extend && open ? extendedElevation : elevation)]: elevation !== 0 && variant === "raised" || extendedElevation !== 0 && variant === "raised" && extend && open
          })
        },
        { color },
        {
          variant: variant === "raised" ? "unelevated" : variant
        },
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_openStore();
  $$unsubscribe_nonInteractiveStore();
  $$unsubscribe_disabledStore();
  return $$rendered;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "style", "ripple", "getElement"]);
  let $$slots = compute_slots(slots);
  let $nonInteractive, $$unsubscribe_nonInteractive;
  let $$unsubscribe_disabled;
  let $open, $$unsubscribe_open;
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { ripple = true } = $$props;
  let element;
  let internalClasses = {};
  let internalStyles = {};
  const disabled = getContext("SMUI:accordion:panel:disabled");
  $$unsubscribe_disabled = subscribe(disabled, (value) => value);
  const nonInteractive = getContext("SMUI:accordion:panel:nonInteractive");
  $$unsubscribe_nonInteractive = subscribe(nonInteractive, (value) => $nonInteractive = value);
  const open = getContext("SMUI:accordion:panel:open");
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  $$unsubscribe_nonInteractive();
  $$unsubscribe_disabled();
  $$unsubscribe_open();
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "smui-accordion__header": true,
          ...internalClasses
        }))
      },
      {
        style: escape_attribute_value(Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "))
      },
      { role: "button" },
      {
        tabindex: escape_attribute_value($nonInteractive ? -1 : 0)
      },
      {
        "aria-expanded": escape_attribute_value($open ? "true" : "false")
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${ripple ? `<div class="smui-accordion__header__ripple"></div>` : ``} <div${add_attribute(
    "class",
    classMap({
      "smui-accordion__header__title": true,
      "smui-accordion__header__title--with-description": $$slots.description
    }),
    0
  )}>${slots.default ? slots.default({}) : ``}</div> ${$$slots.description ? `<div class="smui-accordion__header__description">${slots.description ? slots.description({}) : ``}</div>` : ``} ${$$slots.icon ? `<div class="smui-accordion__header__icon">${slots.icon ? slots.icon({}) : ``}</div>` : ``} </div>`;
});
const Volgorde = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div>${escape(data[0].s)}</div>`;
});
const BottomAppBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "style", "color", "variant", "getPropStore", "getElement"]);
  let $colorStore, $$unsubscribe_colorStore;
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { color = "primary" } = $$props;
  let { variant = "standard" } = $$props;
  let element;
  let internalStyles = {};
  const colorStore = writable(color);
  $$unsubscribe_colorStore = subscribe(colorStore, (value) => $colorStore = value);
  let withFab = false;
  let adjustOffset = 0;
  setContext("SMUI:bottom-app-bar:color", colorStore);
  let propStoreSet;
  let propStore = readable({ withFab, adjustOffset, variant }, (set) => {
    propStoreSet = set;
  });
  function getPropStore() {
    return propStore;
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.getPropStore === void 0 && $$bindings.getPropStore && getPropStore !== void 0)
    $$bindings.getPropStore(getPropStore);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  set_store_value(colorStore, $colorStore = color, $colorStore);
  {
    if (propStoreSet) {
      propStoreSet({ withFab, adjustOffset, variant });
    }
  }
  $$unsubscribe_colorStore();
  return ` <div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "smui-bottom-app-bar": true,
          "smui-bottom-app-bar--standard": variant === "standard",
          "smui-bottom-app-bar--fixed": variant === "fixed"
        }))
      },
      {
        style: escape_attribute_value(Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``} </div>`;
});
const { Object: Object_1$1 } = globals;
const AutoAdjust = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let propStore;
  let adjustClass;
  let $$restProps = compute_rest_props($$props, ["use", "class", "style", "bottomAppBar", "component", "tag", "getElement"]);
  let $propStore, $$unsubscribe_propStore = noop, $$subscribe_propStore = () => ($$unsubscribe_propStore(), $$unsubscribe_propStore = subscribe(propStore, ($$value) => $propStore = $$value), propStore);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { bottomAppBar } = $$props;
  let element;
  let { component = SmuiElement } = $$props;
  let { tag = component === SmuiElement ? "main" : void 0 } = $$props;
  let internalStyles = {};
  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === "" || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.bottomAppBar === void 0 && $$bindings.bottomAppBar && bottomAppBar !== void 0)
    $$bindings.bottomAppBar(bottomAppBar);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$subscribe_propStore(propStore = bottomAppBar && bottomAppBar.getPropStore());
    adjustClass = (() => {
      if (!propStore || $propStore.variant === "static") {
        return "";
      }
      addStyle("--smui-bottom-app-bar--fab-offset", $propStore.adjustOffset + "px");
      return `smui-bottom-app-bar--${$propStore.variant}-adjust ${$propStore.withFab ? "smui-bottom-app-bar--with-fab" : ""}`;
    })();
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render(
      $$result,
      Object_1$1.assign(
        {},
        { tag },
        { use: [forwardEvents, ...use] },
        {
          class: classMap({ [className]: true, [adjustClass]: true })
        },
        {
          style: Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" ")
        },
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_propStore();
  return $$rendered;
});
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let usePass;
  let $$restProps = compute_rest_props($$props, ["use", "class", "fabInset", "getElement"]);
  let $color, $$unsubscribe_color;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { fabInset = false } = $$props;
  let element;
  const color = getContext("SMUI:bottom-app-bar:color");
  $$unsubscribe_color = subscribe(color, (value) => $color = value);
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.fabInset === void 0 && $$bindings.fabInset && fabInset !== void 0)
    $$bindings.fabInset(fabInset);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    usePass = [forwardEvents, ...use];
    $$rendered = `${validate_component(Paper, "Paper").$$render(
      $$result,
      Object.assign(
        {},
        { use: usePass },
        {
          class: classMap({
            [className]: true,
            "smui-bottom-app-bar__section": true,
            "smui-bottom-app-bar__section--fab-inset": fabInset
          })
        },
        { color: $color },
        { variant: "unelevated" },
        { square: true },
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_color();
  return $$rendered;
});
let pair_data = {
  title: "Intro",
  content: [
    {
      num: "1",
      question: {
        text: "Waar woont jouw familie?"
      },
      answer: {
        text: "Mijn familie woont nog in Trinidad"
      },
      data: {
        html: `
                <style>
                    body {
                        font-family: 'Arial', sans-serif;
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 0;
                                }

                    .container {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-around;
                        margin: 20px;
                                }

                    .card {
                        flex-basis: 35%;
                        max-width: 400px;
                        padding: 20px;
                        border: 1px solid #3498db;
                        border-radius: 10px;
                        margin-bottom: 20px;
                        background-color: #fff;
                        box-shadow: 0 2px 4px rgba(0,
                                    0,
                                    0,
                                    0.1);
                                }

                    .header,
                    .q {
                        width: 98%;
                        padding: 0px;
                        border: 1px solid #3498db;
                        border-radius: 5px;
                        background-color: #3498db;
                        color: #fff;
                        text-align: center;
                        margin: 10px;
                                }

                    .toggleButton {
                        background-color: #3498db;
                        color: #fff;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                                }

                    #question {
                        visibility: hidden;
                        text-align: center;
                                }
                </style>

                <body>
                    <div style="display: flex; align-items: center">
                        <div class="q" id="question">
                            <div class="q">Waar woont jouw familie?</div>
                        </div>
                        <button
                            class="toggleButton"
                            onclick="document.getElementById('question').style.visibility = (document.getElementById('question').style.visibility === 'visible') ? 'hidden' : 'visible';"
                        >
                            ?
                        </button>
                    </div>

                    <div class="header">Mijn familie (James) -> Trinidad</div>

                    <div class="container">
                        <div class="card">
                            Vader: Ross<br />
                            84-pensioen;<br />
                            met zijn vrouw praten
                        </div>

                        <div class="card">
                            Moeder: Rachel<br />
                            78-gepensioeneerd<br />
                            met haar man praten
                        </div>

                        <div class="card">
                            Broer: Joey<br />
                            51-kantoor<br />
                            modelvliegtuigen bouwen Janice
                        </div>

                        <div class="card">
                            Zus: Monica<br />
                            48-verpleegster<br />
                            koffie zetten
                        </div>
                    </div>
                </body>
                `
      }
    },
    {
      num: "2",
      question: {
        text: "Hoe heet jouw vader?"
      },
      answer: {
        text: "Mijn vader heet …",
        img: ""
      }
    },
    {
      num: "3",
      question: {
        text: "Hoe oud is hij?"
      },
      answer: {
        text: "Hij is … jaar (oud)",
        img: ""
      }
    },
    {
      num: "4",
      question: {
        text: "Werk hij?"
      },
      answer: {
        text: "Nee, hij is gepensioneerd./ Ja, hij werkt als … ./ Ja, hij is …",
        img: ""
      }
    },
    {
      num: "5",
      question: {
        text: "Wat doet jouw vader graag?"
      },
      answer: {
        text: "Mijn vader V+t graag …",
        img: ""
      }
    },
    {
      num: "6",
      question: {
        text: "Hoe heet jouw moeder?"
      },
      answer: {
        text: "Mijn moeder heet …",
        img: ""
      }
    },
    {
      num: "7",
      question: {
        text: "Hoe oud is zij?"
      },
      answer: {
        text: "Zij is … jaar (oud)",
        img: ""
      }
    },
    {
      num: "8",
      question: {
        text: "Werkt zij?"
      },
      answer: {
        text: "Nee. Ze is huisvrouw./ Ja, zij werkt als … ./ Ja, zij is … .",
        img: ""
      }
    },
    {
      num: "9",
      question: {
        text: "Wat doet zij niet graag?"
      },
      answer: {
        text: "Zij Verbum +t niet graag … .",
        img: ""
      }
    },
    {
      num: "10",
      question: {
        text: "Heb jij nog broers of zussen?"
      },
      answer: {
        text: "Ja, ik heb nog 1 broer en 1 zus.",
        img: ""
      }
    },
    {
      num: "11",
      question: {
        text: "Hoe heet jouw broer?"
      },
      answer: {
        text: "Mijn broer heet … .",
        img: ""
      }
    },
    {
      num: "12",
      question: {
        text: "Hoe oud is jouw broer?"
      },
      answer: {
        text: "Mijn broer is … jaar (oud).",
        img: ""
      }
    },
    {
      num: "13",
      question: {
        text: "Waar werkt jouw broer?"
      },
      answer: {
        text: "Mijn broer werkt IN een + winkel / bedrijf OP een kantoor / boerderij BĲ de + persoon / bank BĲ + naam bedrijf.",
        img: ""
      }
    },
    {
      num: "14",
      question: {
        text: "Wat kan hij goed?"
      },
      answer: {
        text: "Hij kan goed … -en",
        img: ""
      }
    },
    {
      num: "15",
      question: {
        text: "Is hij getrouwd?"
      },
      answer: {
        text: "Ja, hij is getrouwd met … .",
        img: ""
      }
    },
    {
      num: "16",
      question: {
        text: "Hoe heet jouw zus?"
      },
      answer: {
        text: "Mijn zus heet … .",
        img: ""
      }
    },
    {
      num: "17",
      question: {
        text: "Hoe oud is zij?"
      },
      answer: {
        text: "Zij is … jaar (oud).",
        img: ""
      }
    },
    {
      num: "18",
      question: {
        text: "Welk beroep heeft jouw zus?"
      },
      answer: {
        text: "Mijn zus werkt als … .",
        img: ""
      }
    },
    {
      num: "19",
      question: {
        text: "Wat kan zij niet zo goed?"
      },
      answer: {
        text: "Zij kan niet zo goed … -en.",
        img: ""
      }
    }
  ]
};
const QA_1_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".container.svelte-1lqlp3e{position:absolute;line-height:50px;top:50%;left:50%;transform:translate(-50%, -50%);margin:0;padding:20px;border:1px solid #ccc;border-radius:5px}.question.svelte-1lqlp3e{font:1.5em sans-serif}.answer.svelte-1lqlp3e{margin:0 auto}",
  map: null
};
let cur_qa = 0;
const QA_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_lesson;
  let $dc_oper, $$unsubscribe_dc_oper;
  $$unsubscribe_lesson = subscribe(lesson, (value) => value);
  $$unsubscribe_dc_oper = subscribe(dc_oper, (value) => $dc_oper = value);
  let { data } = $$props;
  let q, a;
  let bottomAppBar;
  async function QA() {
    q = pair_data.content[cur_qa].question.text;
    a = pair_data.content[cur_qa].answer.text;
    if ($dc_oper)
      $dc_oper.SendData(
        {
          lesson: { pair: pair_data.content[cur_qa].data }
        },
        () => {
          console.log();
        }
      );
  }
  QA();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$5);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(AutoAdjust, "AutoAdjust").$$render($$result, { bottomAppBar }, {}, {
      default: () => {
        return `<div class="container svelte-1lqlp3e"><div class="question svelte-1lqlp3e">${escape(q)}</div>  <div class="answer svelte-1lqlp3e">${escape(a)}</div></div>`;
      }
    })} ${validate_component(BottomAppBar, "BottomAppBar").$$render(
      $$result,
      { this: bottomAppBar },
      {
        this: ($$value) => {
          bottomAppBar = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Section, "Section").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(IconButton, "IconButton").$$render(
                $$result,
                {
                  class: "material-icons",
                  "aria-label": "Back"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(CommonIcon, "Icon").$$render($$result, { tag: "svg", viewBox: "0 0 24 24" }, {}, {
                      default: () => {
                        return `<path fill="currentColor"${add_attribute("d", mdiPagePreviousOutline, 0)}></path>`;
                      }
                    })}`;
                  }
                }
              )}`;
            }
          })} ${validate_component(Section, "Section").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
                default: () => {
                  return `change_circle`;
                }
              })}`;
            }
          })} ${validate_component(Section, "Section").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(IconButton, "IconButton").$$render(
                $$result,
                {
                  class: "material-icons",
                  fill: "currentColor",
                  "aria-label": "More"
                },
                {},
                {
                  default: () => {
                    return `more_vert`;
                  }
                }
              )}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_lesson();
  $$unsubscribe_dc_oper();
  return $$rendered;
});
const QA_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_lesson;
  let $msg_oper, $$unsubscribe_msg_oper;
  let $dc_user, $$unsubscribe_dc_user;
  let $dc_oper, $$unsubscribe_dc_oper;
  $$unsubscribe_lesson = subscribe(lesson, (value) => value);
  $$unsubscribe_msg_oper = subscribe(msg_oper, (value) => $msg_oper = value);
  $$unsubscribe_dc_user = subscribe(dc_user, (value) => $dc_user = value);
  $$unsubscribe_dc_oper = subscribe(dc_oper, (value) => $dc_oper = value);
  let { data } = $$props;
  let d = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  {
    if ($dc_oper && $dc_oper.dc) {
      set_store_value(
        dc_oper,
        $dc_oper.dc.onmessage = (event) => {
          alert(event.data);
        },
        $dc_oper
      );
    }
  }
  {
    if ($dc_user && $dc_user.dc) {
      set_store_value(
        dc_user,
        $dc_user.dc.onmessage = (event) => {
          alert(event.data);
        },
        $dc_user
      );
    }
  }
  {
    if ($msg_oper) {
      console.log($msg_oper);
    }
  }
  $$unsubscribe_lesson();
  $$unsubscribe_msg_oper();
  $$unsubscribe_dc_user();
  $$unsubscribe_dc_oper();
  return `<div><!-- HTML_TAG_START -->${d.data.html}<!-- HTML_TAG_END --></div>`;
});
const Text_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "#translationOverlay.svelte-49aa5s{display:block;position:absolute;word-break:break-all;background-color:rgba(255, 255, 255, 0.61);right:5px;height:auto;color:green;visibility:hidden}@media(max-width: 480px){}",
  map: null
};
const Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $langs, $$unsubscribe_langs;
  let $$unsubscribe_lesson;
  $$unsubscribe_langs = subscribe(langs, (value) => $langs = value);
  $$unsubscribe_lesson = subscribe(lesson, (value) => value);
  const { merge } = pkg;
  translate.from = "nl";
  translate.engine = "google";
  const tts = new Speech();
  if (tts.hasBrowserSupport()) {
    console.log("speech synthesis supported");
  }
  tts.init({
    volume: 1,
    lang: "nl-BE",
    rate: 0,
    pitch: 1,
    voice: "WaveNet Male",
    splitSentences: true,
    listeners: {
      onvoiceschanged: (voices) => {
        console.log("Event voiceschanged", voices);
      }
    }
  });
  let { data } = $$props;
  let bottomAppBar;
  let woorden = data.words, text, trans = "", trans_div;
  const abonent = getContext("abonent");
  fetch(`/operator/lesson?text=theme&level=${data.level}&theme=${data.theme}&title=${data.title}&abonent=${abonent}`).then((response) => response.json()).then((data2) => {
    text = data2.obj.text;
    fetchText();
  }).catch((error) => {
    console.log(error);
    return [];
  });
  function fetchText() {
    fetch(`/operator/lesson?dict=theme&level=${data.level}&theme=${data.theme}&abonent=${abonent}`).then((response) => response.json()).then((data2) => {
      woorden = merge(woorden, JSON.parse(data2.data));
      highlightWords();
    }).catch((error) => {
      console.log(error);
      return [];
    });
  }
  function highlightWords() {
    Object.keys(woorden).forEach((woord) => {
      const regex = new RegExp(`\\b[${woord.charAt(0).toUpperCase()}${woord.charAt(0).toLowerCase()}]${woord.slice(1)}\\b`, "g");
      text = text.replace(regex, `<span class="highlight" style="color: red;background-color: transparent" trans="${woorden[woord][$langs]}">${woord}</span>`);
    });
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$4);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<h3>${escape(data.title)}</h3> <div style="${"height:" + escape(window.innerHeight, true) + "; line-height:50px"}"><!-- HTML_TAG_START -->${text}<!-- HTML_TAG_END --></div> <div id="translationOverlay" class="svelte-49aa5s"${add_attribute("this", trans_div, 0)}>${escape(trans)}</div> ${validate_component(BottomAppBar, "BottomAppBar").$$render(
      $$result,
      { this: bottomAppBar },
      {
        this: ($$value) => {
          bottomAppBar = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Section, "Section").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(IconButton, "IconButton").$$render(
                $$result,
                {
                  class: "material-icons",
                  "aria-label": "Back"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(CommonIcon, "Icon").$$render($$result, { tag: "svg", viewBox: "0 0 24 24" }, {}, {
                      default: () => {
                        return `<path fill="currentColor"${add_attribute("d", mdiPagePreviousOutline, 0)}></path>`;
                      }
                    })}`;
                  }
                }
              )}`;
            }
          })} ${validate_component(Section, "Section").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
                default: () => {
                  return `change_circle`;
                }
              })}`;
            }
          })} ${validate_component(Section, "Section").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(IconButton, "IconButton").$$render(
                $$result,
                {
                  class: "material-icons",
                  fill: "currentColor",
                  "aria-label": "More"
                },
                {},
                {
                  default: () => {
                    return `more_vert`;
                  }
                }
              )}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_langs();
  $$unsubscribe_lesson();
  return $$rendered;
});
const words = [
  {
    original: "aangedaan",
    infinitive: "aandoen",
    translation: {
      ru: "оделся",
      fr: "offensé",
      en: "put on",
      de: "betroffen",
      uk: "схвильований"
    },
    example: "Ik heb mijn nieuwe jas aangedaan."
  },
  {
    original: "aangekomen",
    infinitive: "aankomen",
    translation: {
      ru: "прибыл",
      fr: "arrivé",
      en: "arrived",
      de: "angekommen",
      uk: "прибув"
    },
    example: "Hij is gisteren aangekomen."
  },
  {
    original: "afgewassen",
    infinitive: "afwassen",
    translation: {
      ru: "помыл",
      fr: "lavé",
      en: "washed",
      de: "abgewaschen",
      uk: "вимитий"
    },
    example: "Ik heb de borden afgewassen."
  },
  {
    original: "gebakken",
    infinitive: "bakken",
    translation: {
      ru: "испёк",
      fr: "cuit",
      en: "baked",
      de: "gebacken",
      uk: "випік"
    },
    example: "Gisteren heb ik een taart gebakken."
  },
  {
    original: "begonnen",
    infinitive: "beginnen",
    translation: {
      ru: "начался",
      fr: "commencé",
      en: "begun",
      de: "begonnen",
      uk: "почався"
    },
    example: "Het concert is net begonnen."
  },
  {
    original: "begrepen",
    infinitive: "begrijpen",
    translation: {
      ru: "понял",
      fr: "compris",
      en: "understood",
      de: "verstanden",
      uk: "зрозумів"
    },
    example: "Ik heb eindelijk de grap begrepen."
  },
  {
    original: "behangen",
    infinitive: "behangen",
    translation: {
      ru: "повесил (обои)",
      fr: "tapisser",
      en: "wallpapered",
      de: "tapeziert",
      uk: "повісив (шпалери)"
    },
    example: "We hebben de slaapkamer behangen."
  },
  {
    original: "bezocht",
    infinitive: "bezoeken",
    translation: {
      ru: "посетил",
      fr: "visité",
      en: "visited",
      de: "besucht",
      uk: "відвідав"
    },
    example: "Wij hebben Parijs bezocht."
  },
  {
    original: "gebeten",
    infinitive: "bijten",
    translation: {
      ru: "укусил",
      fr: "mordu",
      en: "bitten",
      de: "gebissen",
      uk: "укусив"
    },
    example: "De hond heeft me gebeten."
  },
  {
    original: "gebleven",
    infinitive: "blijven",
    translation: {
      ru: "остался",
      fr: "resté",
      en: "stayed",
      de: "geblieben",
      uk: "залишився"
    },
    example: "Wij zijn in het hotel gebleven."
  },
  {
    original: "gebroken",
    infinitive: "breken",
    translation: {
      ru: "сломал",
      fr: "cassé",
      en: "broken",
      de: "gebrochen",
      uk: "зламав"
    },
    example: "Hij heeft zijn arm gebroken."
  },
  {
    original: "gebracht",
    infinitive: "brengen",
    translation: {
      ru: "привез",
      fr: "apporté",
      en: "brought",
      de: "gebracht",
      uk: "привіз"
    },
    example: "Heb je mijn boek teruggebracht?"
  },
  {
    original: "gedacht",
    infinitive: "denken",
    translation: {
      ru: "думал",
      fr: "pensé",
      en: "thought",
      de: "gedacht",
      uk: "думав"
    },
    example: "Ik heb nooit gedacht dat het zo moeilijk zou zijn."
  },
  {
    original: "gedaan",
    infinitive: "doen",
    translation: {
      ru: "сделал",
      fr: "fait",
      en: "done",
      de: "gemacht",
      uk: "зробив"
    },
    example: "Heb je je huiswerk gedaan?"
  },
  {
    original: "gedragen",
    infinitive: "dragen",
    translation: {
      ru: "носил",
      fr: "porté",
      en: "worn",
      de: "getragen",
      uk: "носив"
    },
    example: "Ze heeft altijd mooie jurken gedragen."
  },
  {
    original: "gedronken",
    infinitive: "drinken",
    translation: {
      ru: "выпил",
      fr: "bu",
      en: "drunk",
      de: "getrunken",
      uk: "випив"
    },
    example: "Heb je gisteravond iets gedronken?"
  },
  {
    original: "gegeten",
    infinitive: "eten",
    translation: {
      ru: "съел",
      fr: "mangé",
      en: "eaten",
      de: "gegessen",
      uk: "з'їв"
    },
    example: "We hebben lekker gegeten in dat restaurant."
  },
  {
    original: "gegeven",
    infinitive: "geven",
    translation: {
      ru: "дал",
      fr: "donné",
      en: "given",
      de: "gegeben",
      uk: "дав"
    },
    example: "Heb je je cadeau al gegeven?"
  },
  {
    original: "gehangen",
    infinitive: "hangen",
    translation: {
      ru: "повесил",
      fr: "accroché",
      en: "hung",
      de: "gehangen",
      uk: "повісив"
    },
    example: ""
  },
  {
    original: "gehad",
    infinitive: "hebben",
    translation: {
      ru: "имел",
      fr: "eu",
      en: "had",
      de: "gehabt",
      uk: "мав"
    },
    example: "Ik heb een auto gehad."
  },
  {
    original: "geholpen",
    infinitive: "helpen",
    translation: {
      ru: "помогал",
      fr: "aidé",
      en: "helped",
      de: "geholfen",
      uk: "допомогав"
    },
    example: "Heb je je buurman geholpen?"
  },
  {
    original: "ingenomen",
    infinitive: "innemen",
    translation: {
      ru: "принял",
      fr: "pris",
      en: "taken",
      de: "eingenommen",
      uk: "прийняв"
    },
    example: "Ik heb mijn medicijnen ingenomen."
  },
  {
    original: "gekozen",
    infinitive: "kiezen",
    translation: {
      ru: "выбрал",
      fr: "choisi",
      en: "chosen",
      de: "gewählt",
      uk: "вибрав"
    },
    example: "Heb je een film gekozen om te kijken?"
  },
  {
    original: "gekeken",
    infinitive: "kijken",
    translation: {
      ru: "глядел",
      fr: "regardé",
      en: "watched",
      de: "geguckt",
      uk: "дивився"
    },
    example: "We hebben naar een interessante film gekeken."
  },
  {
    original: "geklommen",
    infinitive: "klimmen",
    translation: {
      ru: "взабрался",
      fr: "grimpé",
      en: "climbed",
      de: "geklommen",
      uk: "забрався"
    },
    example: "Hij is op de berg geklommen."
  },
  {
    original: "gekomen",
    infinitive: "komen",
    translation: {
      ru: "пришел",
      fr: "venu",
      en: "come",
      de: "gekommen",
      uk: "прийшов"
    },
    example: "Ben je gisteren gekomen?"
  },
  {
    original: "gekocht",
    infinitive: "kopen",
    translation: {
      ru: "купил",
      fr: "acheté",
      en: "bought",
      de: "gekauft",
      uk: "купив"
    },
    example: "Ik heb een nieuwe telefoon gekocht."
  },
  {
    original: "gekregen",
    infinitive: "krijgen",
    translation: {
      ru: "получил",
      fr: "reçu",
      en: "received",
      de: "bekommen",
      uk: "отримав"
    },
    example: "Heb je mijn bericht gekregen?"
  },
  {
    original: "gelachen",
    infinitive: "lachen",
    translation: {
      ru: "смеялся",
      fr: "ri",
      en: "laughed",
      de: "gelacht",
      uk: "сміявся"
    },
    example: "We hebben veel gelachen tijdens de voorstelling."
  },
  {
    original: "gelezen",
    infinitive: "lezen",
    translation: {
      ru: "читал",
      fr: "lu",
      en: "read",
      de: "gelesen",
      uk: "читав"
    },
    example: "Heb je het boek gelezen?"
  },
  {
    original: "gelegen",
    infinitive: "liggen",
    translation: {
      ru: "лежал",
      fr: "été",
      en: "lain",
      de: "gelegen",
      uk: "лежав"
    },
    example: "Waar heb je gisteren gelegen?"
  },
  {
    original: "gelopen",
    infinitive: "lopen",
    translation: {
      ru: "бегал",
      fr: "couru",
      en: "run",
      de: "gelaufen",
      uk: "бігав"
    },
    example: "Ik heb vandaag gelopen in het park."
  },
  {
    original: "meegedaan",
    infinitive: "meedoen",
    translation: {
      ru: "участвовал",
      fr: "participé",
      en: "participated",
      de: "mitgemacht",
      uk: "брав участь"
    },
    example: "Heb je meegedaan aan de wedstrijd?"
  },
  {
    original: "meegenomen",
    infinitive: "meenemen",
    translation: {
      ru: "принес с собой",
      fr: "emporté",
      en: "taken along",
      de: "mitgenommen",
      uk: "приніс із собою"
    },
    example: "Heb je je lunch meegenomen?"
  },
  {
    original: "nagekeken",
    infinitive: "nakijken",
    translation: {
      ru: "проверил",
      fr: "vérifié",
      en: "checked",
      de: "nachgeprüft",
      uk: "переглянув"
    },
    example: "Heb je je huiswerk nagekeken?"
  },
  {
    original: "genomen",
    infinitive: "nemen",
    translation: {
      ru: "взял",
      fr: "pris",
      en: "taken",
      de: "genommen",
      uk: "взяв"
    },
    example: "Heb je de sleutels genomen?"
  },
  {
    original: "ontbeten",
    infinitive: "ontbijten",
    translation: {
      ru: "завтракал",
      fr: "pris le petit déjeuner",
      en: "had breakfast",
      de: "gefrühstückt",
      uk: "снідав"
    },
    example: "Heb je vandaag ontbeten?"
  },
  {
    original: "opgestaan",
    infinitive: "opstaan",
    translation: {
      ru: "встал",
      fr: "levé",
      en: "got up",
      de: "aufgestanden",
      uk: "встав"
    },
    example: "Hoe laat ben je opgestaan?"
  },
  {
    original: "overleden",
    infinitive: "overlijden",
    translation: {
      ru: "погиб",
      fr: "décédé",
      en: "passed away",
      de: "verstorben",
      uk: "загинув"
    },
    example: "Wanneer is hij overleden?"
  },
  {
    original: "gereden",
    infinitive: "rijden",
    translation: {
      ru: "поехал",
      fr: "conduit",
      en: "driven",
      de: "gefahren",
      uk: "поїхав"
    },
    example: "Heb je gisteren gereden?"
  },
  {
    original: "geroepen",
    infinitive: "roepen",
    translation: {
      ru: "позвал",
      fr: "appelé",
      en: "called",
      de: "gerufen",
      uk: "викликав"
    },
    example: "Heb je mijn naam geroepen?"
  },
  {
    original: "gescheiden",
    infinitive: "scheiden",
    translation: {
      ru: "развелся",
      fr: "divorcé",
      en: "divorced",
      de: "geschieden",
      uk: "розійшовся"
    },
    example: "Wanneer zijn ze gescheiden?"
  },
  {
    original: "geschenen",
    infinitive: "schijnen",
    translation: {
      ru: "светился",
      fr: "brillé",
      en: "shone",
      de: "geschienen",
      uk: "світився"
    },
    example: "De zon heeft de hele dag geschenen."
  },
  {
    original: "geschreven",
    infinitive: "schrijven",
    translation: {
      ru: "написал",
      fr: "écrit",
      en: "written",
      de: "geschrieben",
      uk: "написав"
    },
    example: "Heb je de brief geschreven?"
  },
  {
    original: "geslapen",
    infinitive: "slapen",
    translation: {
      ru: "спал",
      fr: "dormi",
      en: "slept",
      de: "geschlafen",
      uk: "спав"
    },
    example: "Hoe lang heb je gisteren geslapen?"
  },
  {
    original: "gesloten",
    infinitive: "sluiten",
    translation: {
      ru: "закрыл",
      fr: "fermé",
      en: "closed",
      de: "geschlossen",
      uk: "закрив"
    },
    example: "Heb je de deur gesloten?"
  },
  {
    original: "gesneden",
    infinitive: "snijden",
    translation: {
      ru: "нарезал",
      fr: "coupé",
      en: "cut",
      de: "geschnitten",
      uk: "нарізав"
    },
    example: "Heb je het brood gesneden?"
  },
  {
    original: "gesproken",
    infinitive: "spreken",
    translation: {
      ru: "говорил",
      fr: "parlé",
      en: "spoken",
      de: "gesprochen",
      uk: "говорив"
    },
    example: "Heb je met hem gesproken?"
  },
  {
    original: "gesprongen",
    infinitive: "springen",
    translation: {
      ru: "прыгнул",
      fr: "sauté",
      en: "jumped",
      de: "gesprungen",
      uk: "стрибнув"
    },
    example: "Heb je van de duikplank gesprongen?"
  },
  {
    original: "gestaan",
    infinitive: "staan",
    translation: {
      ru: "стоял",
      fr: "resté debout",
      en: "stood",
      de: "gestanden",
      uk: "стояв"
    },
    example: "Heb je lang gestaan?"
  },
  {
    original: "gestoken",
    infinitive: "steken",
    translation: {
      ru: "уколол",
      fr: "piqué",
      en: "stabbed",
      de: "gestochen",
      uk: "уколов"
    },
    example: "Heb je jezelf per ongeluk gestoken?"
  },
  {
    original: "gestolen",
    infinitive: "stelen",
    translation: {
      ru: "украл",
      fr: "volé",
      en: "stolen",
      de: "gestohlen",
      uk: "вкрав"
    },
    example: "Heb je ooit iets gestolen?"
  },
  {
    original: "gestorven",
    infinitive: "sterven",
    translation: {
      ru: "умер",
      fr: "mort",
      en: "died",
      de: "gestorben",
      uk: "помер"
    },
    example: "Wanneer is hij gestorven?"
  },
  {
    original: "gestegen",
    infinitive: "stijgen",
    translation: {
      ru: "поднялся",
      fr: "augmenté",
      en: "risen",
      de: "gestiegen",
      uk: "піднявся"
    },
    example: "Zijn de prijzen gestegen?"
  },
  {
    original: "gestreken",
    infinitive: "strijken",
    translation: {
      ru: "разгладил",
      fr: "repassé",
      en: "ironed",
      de: "gebügelt",
      uk: "розгладжений"
    },
    example: "Heb je je overhemd gestreken?"
  },
  {
    original: "getrokken",
    infinitive: "trekken",
    translation: {
      ru: "тянул",
      fr: "tiré",
      en: "pulled",
      de: "gezogen",
      uk: "тягнув"
    },
    example: "Heb je aan het touw getrokken?"
  },
  {
    original: "uitgedaan",
    infinitive: "uitdoen",
    translation: {
      ru: "выключил",
      fr: "éteint",
      en: "turned off",
      de: "ausgezogen",
      uk: "вимкнув"
    },
    example: "Heb je het licht uitgedaan?"
  },
  {
    original: "uitgegaan",
    infinitive: "uitgaan",
    translation: {
      ru: "вышел",
      fr: "sorti",
      en: "gone out",
      de: "ausgegangen",
      uk: "вийшов"
    },
    example: "Ben je gisteravond uitgegaan?"
  },
  {
    original: "gevallen",
    infinitive: "vallen",
    translation: {
      ru: "упал",
      fr: "tombé",
      en: "fallen",
      de: "gefallen",
      uk: "впав"
    },
    example: "Ben je van de trap gevallen?"
  },
  {
    original: "gevaren",
    infinitive: "varen",
    translation: {
      ru: "плавал",
      fr: "navigué",
      en: "sailed",
      de: "gefahren",
      uk: "плавав"
    },
    example: "Ben je ooit op zee gevaren?"
  },
  {
    original: "verbieden",
    infinitive: "verbieden",
    translation: {
      ru: "запрещать",
      fr: "interdire",
      en: "forbid",
      de: "verbieten",
      uk: "забороняти"
    },
    example: "Mag je hier roken, of is het verboden?"
  },
  {
    original: "vergeten",
    infinitive: "vergeten",
    translation: {
      ru: "забыл",
      fr: "oublié",
      en: "forgotten",
      de: "vergessen",
      uk: "забув"
    },
    example: "Heb je je sleutels weer vergeten?"
  },
  {
    original: "verkocht",
    infinitive: "verkopen",
    translation: {
      ru: "продал",
      fr: "vendu",
      en: "sold",
      de: "verkauft",
      uk: "продав"
    },
    example: "Heb je je oude telefoon verkocht?"
  },
  {
    original: "verloren",
    infinitive: "verliezen",
    translation: {
      ru: "потерял",
      fr: "perdu",
      en: "lost",
      de: "verloren",
      uk: "втратив"
    },
    example: "Heb je ooit je paspoort verloren?"
  },
  {
    original: "vertrokken",
    infinitive: "vertrekken",
    translation: {
      ru: "ушел",
      fr: "parti",
      en: "departed",
      de: "abgereist",
      uk: "вирушив"
    },
    example: "Zijn ze al vertrokken?"
  },
  {
    original: "vervangen",
    infinitive: "vervangen",
    translation: {
      ru: "заменил",
      fr: "remplacé",
      en: "replaced",
      de: "ersetzt",
      uk: "замінив"
    },
    example: "Heb je de kapotte lamp vervangen?"
  },
  {
    original: "gevonden",
    infinitive: "vinden",
    translation: {
      ru: "нашел",
      fr: "trouvé",
      en: "found",
      de: "gefunden",
      uk: "знайшов"
    },
    example: "Heb je mijn sleutels gevonden?"
  },
  {
    original: "gevlogen",
    infinitive: "vliegen",
    translation: {
      ru: "летел",
      fr: "volé",
      en: "flown",
      de: "geflogen",
      uk: "летів"
    },
    example: "Ben je ooit in een vliegtuig gevlogen?"
  },
  {
    original: "gevroren",
    infinitive: "vriezen",
    translation: {
      ru: "замерз",
      fr: "gelé",
      en: "frozen",
      de: "gefroren",
      uk: "замерз"
    },
    example: "Heb je ooit in een ijskoud land gewoond en gevroren?"
  },
  {
    original: "gewassen",
    infinitive: "wassen",
    translation: {
      ru: "помылся",
      fr: "lavé",
      en: "washed",
      de: "gewaschen",
      uk: "помився"
    },
    example: "Ik heb mijn handen gewassen."
  },
  {
    original: "gewogen",
    infinitive: "wegen",
    translation: {
      ru: "взвесился",
      fr: "pesé",
      en: "weighed",
      de: "gewogen",
      uk: "зважився"
    },
    example: "Heb je jezelf deze week gewogen?"
  },
  {
    original: "gewonnen",
    infinitive: "winnen",
    translation: {
      ru: "выиграл",
      fr: "gagné",
      en: "won",
      de: "gewonnen",
      uk: "виграв"
    },
    example: "Heb je ooit een prijs gewonnen?"
  },
  {
    original: "geworden",
    infinitive: "worden",
    translation: {
      ru: "стал",
      fr: "devenu",
      en: "become",
      de: "geworden",
      uk: "стаєш"
    },
    example: "Wanneer ben je leraar geworden?"
  },
  {
    original: "gezien",
    infinitive: "zien",
    translation: {
      ru: "видел",
      fr: "vu",
      en: "seen",
      de: "gesehen",
      uk: "бачив"
    },
    example: "Heb je die nieuwe film al gezien?"
  },
  {
    original: "geweest",
    infinitive: "zijn",
    translation: {
      ru: "был",
      fr: "été",
      en: "been",
      de: "gewesen",
      uk: "був"
    },
    example: "Ben je ooit in Parijs geweest?"
  },
  {
    original: "gezongen",
    infinitive: "zingen",
    translation: {
      ru: "пел",
      fr: "chanté",
      en: "sung",
      de: "gesungen",
      uk: "співав"
    },
    example: "Heb je in het koor gezongen?"
  },
  {
    original: "gezeten",
    infinitive: "zitten",
    translation: {
      ru: "сидел",
      fr: "assis",
      en: "sat",
      de: "gesessen",
      uk: "сидів"
    },
    example: "Heb je lang in de wachtkamer gezeten?"
  },
  {
    original: "gezocht",
    infinitive: "zoeken",
    translation: {
      ru: "иcскал",
      fr: "cherché",
      en: "sought",
      de: "gesucht",
      uk: "шукав"
    },
    example: "Heb je je sleutels gezocht?"
  },
  {
    original: "gezwommen",
    infinitive: "zwemmen",
    translation: {
      ru: "плавал",
      fr: "nageé",
      en: "swum",
      de: "geschwommen",
      uk: "плавав"
    },
    example: "Heb je deze zomer in de zee gezwommen?"
  }
];
const Word_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".word.svelte-9bizwp{display:flex;flex-direction:column;align-items:center;margin:0}h1.svelte-9bizwp{margin-bottom:20px}.hidden.svelte-9bizwp{opacity:0;pointer-events:none}p.svelte-9bizwp{position:relative;transition:opacity 0.5s ease;text-align:center;font-size:xx-large;margin:0}.speaker-button.svelte-9bizwp{position:absolute;flex:auto;right:10px;transform:translate(50%, 0%);font-size:large}.input-container.svelte-9bizwp{position:relative;flex:10;width:100%;margin:30px auto;display:flex;align-items:center}.words_div.svelte-9bizwp{line-height:30px;margin:20px;text-align:justify;max-height:500px;overflow-y:auto}.input.svelte-9bizwp{flex:1;letter-spacing:2px;padding:5px;text-align:center;color:blue;background-color:white;border:0vw;font-size:large}.next10-button.svelte-9bizwp,.check-button.svelte-9bizwp,.hint-button.svelte-9bizwp,.next-button.svelte-9bizwp{margin-top:10px;margin-right:5px;padding:5px;background-color:#45a049;color:white;border:none;border-radius:4px;cursor:pointer}.check-button.svelte-9bizwp:hover,.hint-button.svelte-9bizwp:hover,.next-button.svelte-9bizwp:hover{background-color:#45a049}",
  map: null
};
const Word = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_lesson;
  let $langs, $$unsubscribe_langs;
  $$unsubscribe_lesson = subscribe(lesson, (value) => value);
  $$unsubscribe_langs = subscribe(langs, (value) => $langs = value);
  const tts = new Speech();
  if (tts.hasBrowserSupport()) {
    console.log("speech synthesis supported");
  }
  tts.init({
    volume: 1,
    lang: "nl-BE",
    rate: 0,
    pitch: 1,
    // voice: 'Microsoft Bart - Dutch (Belgium)',
    splitSentences: true,
    listeners: {
      onvoiceschanged: (voices) => {
        console.log("Event voiceschanged", voices);
      }
    }
  });
  let bottomAppBar;
  let userContent = "";
  let div_input;
  let result = "";
  let currentWordIndex = 0;
  let currentWord = words[currentWordIndex];
  let isVisible = false;
  const interval = setInterval(
    () => {
      isVisible = true;
      setTimeout(
        () => {
          isVisible = false;
        },
        // console.log(`Выполнение на ${counter}-м кадре. Видимость: ${isVisible ? 'Виден' : 'Скрыт'}`);
        5
      );
    },
    40
  );
  onDestroy(() => {
    clearInterval(interval);
    console.log("Компонент размонтирован");
  });
  $$result.css.add(css$3);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<main><div class="word svelte-9bizwp"> <h1 class="svelte-9bizwp">${escape(currentWord.translation[$langs])}</h1> <div><p class="${escape(null_to_empty(isVisible ? "" : "hidden"), true) + " svelte-9bizwp"}">${escape(currentWord.original)}</p></div></div> <div class="input-container svelte-9bizwp">  <div class="input svelte-9bizwp" contenteditable="true"${add_attribute("this", div_input, 0)}>${(($$value) => $$value === void 0 ? `<!-- HTML_TAG_START -->${result}<!-- HTML_TAG_END -->` : $$value)(userContent)}</div> ${``}</div> <button class="next10-button svelte-9bizwp" data-svelte-h="svelte-18jn4gc">+10</button> <button class="hint-button svelte-9bizwp" data-svelte-h="svelte-9qf6iy">Подсказка</button> <button class="check-button svelte-9bizwp" data-svelte-h="svelte-hwec6i">Проверить</button> ${``} ${``}</main> ${validate_component(BottomAppBar, "BottomAppBar").$$render(
      $$result,
      { this: bottomAppBar },
      {
        this: ($$value) => {
          bottomAppBar = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Section, "Section").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(IconButton, "IconButton").$$render(
                $$result,
                {
                  class: "material-icons",
                  "aria-label": "Back"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(CommonIcon, "Icon").$$render($$result, { tag: "svg", viewBox: "0 0 24 24" }, {}, {
                      default: () => {
                        return `<path fill="currentColor"${add_attribute("d", mdiPagePreviousOutline, 0)}></path>`;
                      }
                    })}`;
                  }
                }
              )}`;
            }
          })} ${validate_component(Section, "Section").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
                default: () => {
                  return `change_circle`;
                }
              })}`;
            }
          })} ${validate_component(Section, "Section").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(IconButton, "IconButton").$$render(
                $$result,
                {
                  class: "material-icons",
                  fill: "currentColor",
                  "aria-label": "More"
                },
                {},
                {
                  default: () => {
                    return `more_vert`;
                  }
                }
              )}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_lesson();
  $$unsubscribe_langs();
  return $$rendered;
});
const Quiz = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const quiz = data.quiz;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div></div>  ${quiz === "sequence" ? `${validate_component(Volgorde, "Volgorde").$$render($$result, { data: data.zinnen }, {}, {})}` : `${quiz === "pair" ? `${validate_component(QA_1, "QA1").$$render($$result, { data }, {}, {})}` : `${quiz === "pair.client" ? `${validate_component(QA_2, "QA2").$$render($$result, { data }, {}, {})}` : `${quiz === "text" ? `${validate_component(Text, "Text").$$render($$result, { data }, {}, {})}` : `${quiz === "word" ? `${validate_component(Word, "Word").$$render($$result, { data }, {}, {})}` : ``}`}`}`}`}`;
});
const school = "CVO";
const module = {
  level: "1.2",
  themes: [
    {
      num: "1",
      name: "Familie",
      lessons: [
        {
          num: 1,
          title: "",
          quizes: [
            {
              type: "text",
              name: "Quiz 1",
              title: "Familie 1"
            },
            {
              type: "text",
              name: "Quiz 2",
              title: "Familie 2"
            },
            {
              type: "pair",
              name: "Dialog 1",
              title: "Familie 3"
            }
          ]
        },
        {
          num: 2,
          title: ""
        },
        {
          num: 3,
          title: ""
        }
      ]
    },
    {
      num: "2",
      name: "In Het Restorant",
      lessons: [
        {
          num: 1,
          title: "",
          quizes: [
            {
              type: "text",
              name: "In Het Restorant 1"
            },
            {
              type: "text",
              name: "In Het Restorant 2"
            },
            {
              type: "text",
              name: "In Het Restorant 3"
            }
          ]
        },
        {
          num: 2,
          title: ""
        },
        {
          num: 3,
          title: ""
        }
      ]
    },
    {
      num: "3",
      name: "Wonen",
      words: {
        aantal: {
          ru: "количество"
        },
        "aansluitende berging": {
          ru: "c прилегающей кладовкой"
        },
        appartementsgebouw: {
          ru: "многоквартирный дом"
        },
        benedenverdieping: {
          ru: "первый этаж"
        },
        beschikt: {
          ru: "имеет"
        },
        beschikbaar: {
          ru: "доступно"
        },
        "bewoonbare opervlakte": {
          ru: "жилая площадь"
        },
        brandverzekering: {
          ru: "страхование от пожара"
        },
        eigen: {
          ru: "собственную"
        },
        "exclusief verbruik": {
          ru: "без учета потребления"
        },
        "geen belang": {
          ru: "не важно"
        },
        gevonden: {
          ru: "нашли"
        },
        gezellige: {
          ru: "уютный"
        },
        gelegen: {
          ru: "расположенный"
        },
        gemeubeld: {
          ru: "с мебелью"
        },
        handelspand: {
          ru: "коммерческая недвижимость"
        },
        huisdieren: {
          ru: "домашние животные"
        },
        inbegrepen: {
          ru: "включены"
        },
        "ingerichte keuken": {
          ru: "оборудованная кухня"
        },
        kelder: {
          ru: "подвал"
        },
        liefst: {
          ru: "предпочтительно",
          en: "preferably"
        },
        lavabo: {
          ru: "умывальник"
        },
        "maandelijkse huurprijs": {
          ru: "ежемесячная оплата"
        },
        "met toolstellen": {
          ru: "с оборудованием"
        },
        misschien: {
          ru: "возможно"
        },
        mogelijk: {
          ru: "возможно"
        },
        nodigen: {
          ru: "приглашать"
        },
        "niet toegelaten": {
          ru: "запрещено"
        },
        "om te huren": {
          ru: "в аренду"
        },
        omgeving: {
          ru: "расположение"
        },
        ontspannen: {
          ru: "спокойный"
        },
        "op aargas": {
          ru: "на природном газе"
        },
        renoveren: {
          ru: "реконструирован"
        },
        rijwoning: {
          ru: "дом с террасой"
        },
        "rustig buurt": {
          ru: "тихий район"
        },
        ruime: {
          ru: "большой"
        },
        tuin: {
          ru: "сад"
        },
        "vindt het leuk om": {
          ru: "нравится жить"
        },
        "vindt je": {
          ru: "вы найдёте"
        },
        "vinden belangrijk": {
          ru: "важно найти"
        },
        "verder beschikt": {
          ru: "дополнительно"
        },
        verhuizen: {
          ru: "переезд"
        },
        verzorgde: {
          ru: "ухоженный"
        },
        wandelafstand: {
          ru: "пешая доступность"
        },
        zolder: {
          ru: "чердак"
        },
        zolderverdieping: {
          ru: "чердачный этаж"
        }
      },
      lessons: [
        {
          num: 1,
          title: "",
          quizes: [
            {
              type: "text",
              title: "Wonen 1"
            },
            {
              type: "text",
              title: "Wonen 2"
            },
            {
              type: "text",
              title: "Wonen 3"
            }
          ]
        },
        {
          num: 2,
          title: ""
        },
        {
          num: 3,
          title: ""
        }
      ]
    },
    {
      num: "3.1",
      name: "Herhalingsoefeningen familie, wonen, normal perfectum",
      words: {
        afstoffen: {
          en: "to dust",
          ru: "вытирать пыль",
          uk: "витирати пилу",
          fr: "épousseter",
          de: "abstauben"
        },
        afdrogen: {
          en: "to dry",
          ru: "вытирать (сушить)",
          uk: "витирати (сушити)",
          fr: "sécher",
          de: "abtrocknen"
        },
        babbelen: {
          en: "to chat",
          ru: "болтать",
          uk: "балакати",
          fr: "bavarder",
          de: "plaudern"
        },
        basketballen: {
          en: "to play basketball",
          ru: "играть в баскетбол",
          uk: "грати в баскетбол",
          fr: "jouer au basketball",
          de: "Basketball spielen"
        },
        beantwoorden: {
          en: "to answer",
          ru: "отвечать",
          uk: "відповідати",
          fr: "répondre",
          de: "beantworten"
        },
        bellen: {
          en: "to call",
          ru: "звонить",
          uk: "дзвонити",
          fr: "appeler",
          de: "anrufen"
        },
        bestellen: {
          en: "to order",
          ru: "заказывать",
          uk: "замовляти",
          fr: "commander",
          de: "bestellen"
        },
        betalen: {
          en: "to pay",
          ru: "платить",
          uk: "платити",
          fr: "payer",
          de: "bezahlen"
        },
        botsen: {
          en: "to collide",
          ru: "сталкиваться",
          uk: "зіткнутися",
          fr: "entrer en collision",
          de: "stoßen"
        },
        controleren: {
          en: "to check",
          ru: "проверять",
          uk: "перевіряти",
          fr: "vérifier",
          de: "kontrollieren"
        },
        dansen: {
          en: "to dance",
          ru: "танцевать",
          uk: "танцювати",
          fr: "danser",
          de: "tanzen"
        },
        dekken: {
          en: "to cover",
          ru: "накрывать",
          uk: "накривати",
          fr: "couvrir",
          de: "decken"
        },
        dromen: {
          en: "to dream",
          ru: "мечтать",
          uk: "мріяти",
          fr: "rêver",
          de: "träumen"
        },
        dweilen: {
          en: "to mop",
          ru: "мыть пол",
          uk: "помивати підлогу",
          fr: "essuyer",
          de: "wischen"
        },
        fietsen: {
          en: "to cycle",
          ru: "кататься на велосипеде",
          uk: "їздити на велосипеді",
          fr: "faire du vélo",
          de: "Rad fahren"
        },
        fitnessen: {
          en: "to work out",
          ru: "заниматься фитнесом",
          uk: "займатися фітнесом",
          fr: "faire de la remise en forme",
          de: "Fitness machen"
        },
        gebruiken: {
          en: "to use",
          ru: "использовать",
          uk: "використовувати",
          fr: "utiliser",
          de: "benutzen"
        },
        grillen: {
          en: "to grill",
          ru: "грильовать",
          uk: "грильовати",
          fr: "griller",
          de: "grillen"
        },
        halen: {
          en: "to fetch",
          ru: "забирать",
          uk: "забирати",
          fr: "aller chercher",
          de: "holen"
        },
        herhalen: {
          en: "to repeat",
          ru: "повторять",
          uk: "повторювати",
          fr: "répéter",
          de: "wiederholen"
        },
        invullen: {
          en: "to fill in",
          ru: "заполнять",
          uk: "заповнювати",
          fr: "remplir",
          de: "ausfüllen"
        },
        joggen: {
          en: "to jog",
          ru: "бегать (джоггинг)",
          uk: "бігати (джоггінг)",
          fr: "jogger",
          de: "joggen"
        },
        kamperen: {
          en: "to camp",
          ru: "кемпинговать",
          uk: "кемпінгувати",
          fr: "faire du camping",
          de: "campen"
        },
        klaarmaken: {
          en: "to prepare",
          ru: "готовить",
          uk: "готувати",
          fr: "préparer",
          de: "zubereiten"
        },
        kloppen: {
          en: "to beat",
          ru: "взбивать",
          uk: "вбивати",
          fr: "battre",
          de: "klopfen"
        },
        knippen: {
          en: "to cut",
          ru: "стричь",
          uk: "стригти",
          fr: "couper",
          de: "schneiden"
        },
        koken: {
          en: "to cook",
          ru: "готовить",
          uk: "готувати",
          fr: "cuisiner",
          de: "kochen"
        },
        kussen: {
          en: "to kiss",
          ru: "целовать",
          uk: "цілувати",
          fr: "embrasser",
          de: "küssen"
        },
        luisteren: {
          en: "to listen",
          ru: "слушать",
          uk: "слухати",
          fr: "écouter",
          de: "hören"
        },
        maken: {
          en: "to make",
          ru: "делать",
          uk: "робити",
          fr: "faire",
          de: "machen"
        },
        naaien: {
          en: "to sew",
          ru: "шить",
          uk: "шити",
          fr: "coudre",
          de: "nähen"
        },
        noteren: {
          en: "to note",
          ru: "делать запись",
          uk: "робити запис",
          fr: "noter",
          de: "notieren"
        },
        ontdekken: {
          en: "to discover",
          ru: "открывать",
          uk: "відкривати",
          fr: "découvrir",
          de: "entdecken"
        },
        opruimen: {
          en: "to clean up",
          ru: "убирать",
          uk: "прибирати",
          fr: "rangerr",
          de: "aufräumen"
        },
        parkeren: {
          en: "to park",
          ru: "парковаться",
          uk: "паркуватися",
          fr: "stationner",
          de: "parken"
        },
        passen: {
          en: "to fit",
          ru: "подходить (по размеру)",
          uk: "підходити (за розміром)",
          fr: "aller (en taille)",
          de: "passen"
        },
        poetsen: {
          uk: "чистити",
          ru: "чистить",
          fr: "nettoyer",
          en: "clean",
          de: "putzen"
        },
        posten: {
          uk: "відправляти",
          ru: "отправлять",
          fr: "poster",
          en: "post",
          de: "posten"
        },
        praten: {
          uk: "розмовляти",
          ru: "разговаривать",
          fr: "parler",
          en: "talk",
          de: "sprechen"
        },
        proeven: {
          uk: "пробувати",
          ru: "пробовать",
          fr: "goûter",
          en: "taste",
          de: "probieren"
        },
        regenen: {
          uk: "йти дощем",
          ru: "идти дождем",
          fr: "pleuvoir",
          en: "rain",
          de: "regnen"
        },
        repareren: {
          uk: "ремонтувати",
          ru: "ремонтировать",
          fr: "réparer",
          en: "repair",
          de: "reparieren"
        },
        roken: {
          uk: "курити",
          ru: "курить",
          fr: "fumer",
          en: "smoke",
          de: "rauchen"
        },
        schilderen: {
          en: "to paint",
          ru: "рисовать",
          uk: "малювати",
          fr: "peindre",
          de: "malen"
        },
        sorteren: {
          en: "to sort",
          ru: "сортировать",
          uk: "сортувати",
          fr: "trier",
          de: "sortieren"
        },
        spelen: {
          en: "to play",
          ru: "играть",
          uk: "грати",
          fr: "jouer",
          de: "spielen"
        },
        sporten: {
          en: "to sport",
          ru: "заниматься спортом",
          uk: "займатися спортом",
          fr: "faire du sport",
          de: "Sport treiben"
        },
        stofzuigen: {
          en: "to vacuum",
          ru: "пылесосить",
          uk: "пилососити",
          fr: "passer l'aspirateur",
          de: "staubsaugen"
        },
        stoppen: {
          en: "to stop",
          ru: "останавливаться",
          uk: "зупинятися",
          fr: "arrêter",
          de: "stoppen"
        },
        studeren: {
          en: "to study",
          ru: "учиться",
          uk: "вчитися",
          fr: "étudier",
          de: "studieren"
        },
        sturen: {
          en: "to send",
          ru: "отправлять",
          uk: "надсилати",
          fr: "envoyer",
          de: "schicken"
        },
        surfen: {
          en: "to surf",
          ru: "заниматься серфингом",
          uk: "займатися серфінгом",
          fr: "faire du surf",
          de: "surfen"
        },
        tekenen: {
          en: "to draw",
          ru: "рисовать",
          uk: "малювати",
          fr: "dessiner",
          de: "zeichnen"
        },
        telefoneren: {
          en: "to call",
          ru: "звонить по телефону",
          uk: "дзвонити по телефону",
          fr: "téléphoner",
          de: "telefonieren"
        },
        tennissen: {
          en: "to play tennis",
          ru: "играть в теннис",
          uk: "грати в теніс",
          fr: "jouer au tennis",
          de: "Tennis spielen"
        },
        tuinieren: {
          en: "to garden",
          ru: "заниматься садоводством",
          uk: "займатися садівництвом",
          fr: "jardiner",
          de: "gärtnern"
        },
        verbranden: {
          en: "to burn",
          ru: "сжигать",
          uk: "спалювати",
          fr: "brûler",
          de: "verbrennen"
        },
        vergaderen: {
          en: "to have a meeting",
          ru: "вести собрание",
          uk: "вести збори",
          fr: "avoir une réunion",
          de: "sich versammeln"
        },
        verhuizen: {
          en: "to move",
          ru: "переезжать",
          uk: "переїжджати",
          fr: "déménager",
          de: "umziehen"
        },
        verjaren: {
          en: "to have a birthday",
          ru: "праздновать день рождения",
          uk: "святкувати день народження",
          fr: "avoir un anniversaire",
          de: "Geburtstag haben"
        },
        vertellen: {
          en: "to tell",
          ru: "рассказывать",
          uk: "розповідати",
          fr: "raconter",
          de: "erzählen"
        },
        verzorgen: {
          en: "to take care of",
          ru: "заботиться о",
          uk: "дбати про",
          fr: "prendre soin de",
          de: "pflegen"
        },
        vissen: {
          en: "to fish",
          ru: "ловить рыбу",
          uk: "ловити рибу",
          fr: "pêcher",
          de: "fischen"
        },
        voetballen: {
          en: "to play football",
          ru: "играть в футбол",
          uk: "грати в футбол",
          fr: "jouer au football",
          de: "Fußball spielen"
        },
        volgen: {
          en: "to follow",
          ru: "следовать за",
          uk: "слідувати за",
          fr: "suivre",
          de: "folgen"
        },
        volleyballen: {
          en: "to play volleyball",
          ru: "играть в волейбол",
          uk: "грати в волейбол",
          fr: "jouer au volley-ball",
          de: "Volleyball spielen"
        },
        vragen: {
          en: "to ask",
          ru: "спрашивать",
          uk: "питати",
          fr: "demander",
          de: "fragen"
        },
        wandelen: {
          en: "to walk",
          ru: "гулять",
          uk: "гуляти",
          fr: "se promener",
          de: "wandern"
        },
        weggooien: {
          en: "to throw away",
          ru: "выбрасывать",
          uk: "кидати (про щось непотрібне)",
          fr: "jeter",
          de: "wegwerfen"
        },
        werken: {
          en: "to work",
          ru: "работать",
          uk: "працювати",
          fr: "travailler",
          de: "arbeiten"
        },
        winkelen: {
          en: "to shop",
          ru: "покупать",
          uk: "покупати",
          fr: "faire des courses",
          de: "einkaufen"
        },
        zeilen: {
          en: "to sail",
          ru: "парусить",
          uk: "парусити",
          fr: "naviguer",
          de: "segeln"
        },
        zetten: {
          en: "to set",
          ru: "устанавливать",
          uk: "встановлювати",
          fr: "mettre",
          de: "setzen"
        }
      },
      lessons: [
        {
          num: 1,
          title: "",
          quizes: [
            {
              type: "text",
              name: "ABC",
              title: "ABC-lijst normaal perfectum"
            },
            {
              type: "pair",
              name: "ABC",
              title: "ABC-lijst QA"
            }
          ]
        }
      ]
    },
    {
      num: "4",
      name: "Verhuizen",
      lessons: [
        {
          num: 1,
          title: "",
          words: {},
          quizes: []
        },
        {
          num: 2,
          title: ""
        },
        {
          num: 3,
          title: ""
        }
      ]
    },
    {
      num: "5",
      name: "Feest",
      lessons: [
        {
          num: 1,
          title: "",
          words: {},
          quizes: []
        },
        {
          num: 2,
          title: ""
        },
        {
          num: 3,
          title: ""
        }
      ]
    },
    {
      num: "6",
      name: "Op uitstap",
      words: {
        "kleren aangedaan": {
          ru: "оделся",
          fr: "a revêtu des vêtements",
          en: "dressed",
          de: "betroffen",
          uk: "одягнувся"
        },
        aangekomen: {
          ru: "прибыл",
          fr: "arrivé",
          en: "arrived",
          de: "angekommen",
          uk: "прибув"
        },
        afgewassen: {
          ru: "помыл",
          fr: "lavé",
          en: "washed",
          de: "abgewaschen",
          uk: "вимив"
        },
        gebakken: {
          ru: "испек",
          fr: "cuit",
          en: "baked",
          de: "gebacken",
          uk: "випечений"
        },
        begonnen: {
          ru: "начался",
          fr: "commencé",
          en: "begun",
          de: "begonnen",
          uk: "почався"
        },
        begrepen: {
          ru: "понял",
          fr: "compris",
          en: "understood",
          de: "verstanden",
          uk: "розумів"
        },
        behangen: {
          ru: "поклеил обоями",
          fr: "tapisser",
          en: "wallpapered",
          de: "tapeziert",
          uk: "поклеїв шпалерами"
        },
        bezocht: {
          ru: "посетил",
          fr: "visité",
          en: "visited",
          de: "besucht",
          uk: "відвіданий"
        },
        gebeten: {
          ru: "укусил",
          fr: "mordu",
          en: "bitten",
          de: "gebissen",
          uk: "укусив"
        },
        gebleven: {
          ru: "остался",
          fr: "",
          en: "",
          de: "",
          uk: "залишився"
        },
        gebroken: {
          ru: "сломал",
          fr: "cassé",
          en: "broken",
          de: "gebrochen",
          uk: "зламав"
        },
        gebracht: {
          ru: "привез",
          fr: "apporté",
          en: "brought",
          de: "gebracht",
          uk: "привіз"
        },
        gedacht: {
          ru: "думал",
          fr: "pensé",
          en: "thought",
          de: "gedacht",
          uk: "думав"
        },
        gedaan: {
          ru: "сделал",
          fr: "fait",
          en: "done",
          de: "gemacht",
          uk: "зробив"
        },
        gedragen: {
          ru: "принес",
          fr: "porté",
          en: "worn",
          de: "getragen",
          uk: "приніс"
        },
        gedronken: {
          ru: "выпил",
          fr: "bu",
          en: "drunk",
          de: "getrunken",
          uk: "випив"
        },
        gegeten: {
          ru: "съел",
          fr: "mangé",
          en: "eaten",
          de: "gegessen",
          uk: "з'їв"
        },
        gegaan: {
          ru: "поехал",
          uk: "поїхал"
        },
        gegeven: {
          ru: "дал",
          fr: "donné",
          en: "given",
          de: "gegeben",
          uk: "дав"
        },
        gehangen: {
          ru: "подвешенный",
          fr: "accroché",
          en: "hung",
          de: "gehangen",
          uk: "підвішений"
        },
        gehad: {
          ru: "имеющий",
          fr: "eu",
          en: "had",
          de: "gehabt",
          uk: "має"
        },
        geholpen: {
          ru: "помогший",
          fr: "aidé",
          en: "helped",
          de: "geholfen",
          uk: "допомігший"
        },
        ingenomen: {
          ru: "принятый",
          fr: "pris",
          en: "taken",
          de: "eingenommen",
          uk: "прийнятий"
        },
        gekozen: {
          ru: "выбранный",
          fr: "choisi",
          en: "chosen",
          de: "gewählt",
          uk: "обраний"
        },
        gekeken: {
          ru: "глядел",
          fr: "regardé",
          en: "watched",
          de: "geguckt",
          uk: "дивився"
        },
        geklommen: {
          ru: "забрался",
          fr: "grimpé",
          en: "climbed",
          de: "geklommen",
          uk: "забравшись"
        },
        gekomen: {
          ru: "пришедший",
          fr: "venu",
          en: "come",
          de: "gekommen",
          uk: "прийшов"
        },
        gekocht: {
          ru: "купил",
          fr: "acheté",
          en: "bought",
          de: "gekauft",
          uk: "куплений"
        },
        gekregen: {
          ru: "получил",
          fr: "reçu",
          en: "received",
          de: "bekommen",
          uk: "отриманий"
        },
        gelachen: {
          ru: "смеялся",
          fr: "ri",
          en: "laughed",
          de: "gelacht",
          uk: "сміявся"
        },
        gelezen: {
          ru: "читал",
          fr: "lu",
          en: "read",
          de: "gelesen",
          uk: "читав"
        },
        gelegen: {
          ru: "лежал",
          fr: "été",
          en: "lain",
          de: "gelegen",
          uk: "лежав"
        },
        gelopen: {
          ru: "бегавший",
          fr: "couru",
          en: "run",
          de: "gelaufen",
          uk: "бігав"
        },
        meegedaan: {
          ru: "участвовавший",
          fr: "participé",
          en: "participated",
          de: "mitgemacht",
          uk: "брав участь"
        },
        meegenomen: {
          ru: "принесенный с собой",
          fr: "emporté",
          en: "taken along",
          de: "mitgenommen",
          uk: ""
        },
        nagekeken: {
          ru: "проверил",
          fr: "vérifié",
          en: "checked",
          de: "nachgeprüft",
          uk: "переглянув"
        },
        genomen: {
          ru: "взял",
          fr: "pris",
          en: "taken",
          de: "genommen",
          uk: "взяв"
        },
        ontbeten: {
          ru: "завтракал",
          fr: "pris le petit déjeuner",
          en: "had breakfast",
          de: "gefrühstückt",
          uk: "снідав"
        },
        opgestaan: {
          ru: "встал",
          fr: "levé",
          en: "got up",
          de: "aufgestanden",
          uk: "встав"
        },
        overleden: {
          ru: "умер",
          fr: "décédé",
          en: "passed away",
          de: "verstorben",
          uk: "помер"
        },
        gereden: {
          ru: "поехал",
          fr: "conduit",
          en: "driven",
          de: "gefahren",
          uk: "поїхав"
        },
        geroepen: {
          ru: "позвал",
          fr: "appelé",
          en: "called",
          de: "gerufen",
          uk: "викликав"
        },
        gescheiden: {
          ru: "развелся",
          fr: "divorcé",
          en: "divorced",
          de: "geschieden",
          uk: "розійшовся"
        },
        geschenen: {
          ru: "светился",
          fr: "brillé",
          en: "shone",
          de: "geschienen",
          uk: "світився"
        },
        geschreven: {
          ru: "написал",
          fr: "écrit",
          en: "written",
          de: "geschrieben",
          uk: "написав"
        },
        geslapen: {
          ru: "спал",
          fr: "dormi",
          en: "slept",
          de: "geschlafen",
          uk: "спав"
        },
        gesloten: {
          ru: "закрыл",
          fr: "fermé",
          en: "closed",
          de: "geschlossen",
          uk: "закрив"
        },
        gesneden: {
          ru: "нарезал",
          fr: "coupé",
          en: "cut",
          de: "geschnitten",
          uk: "нарізав"
        },
        gesproken: {
          ru: "говорил",
          fr: "parlé",
          en: "spoken",
          de: "gesprochen",
          uk: "говорив"
        },
        gesprongen: {
          ru: "прыгнул",
          fr: "sauté",
          en: "jumped",
          de: "gesprungen",
          uk: "стрибнув"
        },
        gestaan: {
          ru: "стоял",
          fr: "resté debout",
          en: "stood",
          de: "gestanden",
          uk: "стояв"
        },
        gestoken: {
          ru: "уколол",
          fr: "piqué",
          en: "stabbed",
          de: "gestochen",
          uk: "уколов"
        },
        gestolen: {
          ru: "украл",
          fr: "volé",
          en: "stolen",
          de: "gestohlen",
          uk: "вкрав"
        },
        gestorven: {
          ru: "умер",
          fr: "mort",
          en: "died",
          de: "gestorben",
          uk: "помер"
        },
        gestegen: {
          ru: "поднялся",
          fr: "augmenté",
          en: "risen",
          de: "gestiegen",
          uk: "піднявся"
        },
        gestreken: {
          ru: "разгладил",
          fr: "repassé",
          en: "ironed",
          de: "gebügelt",
          uk: "розгладжений"
        },
        getrokken: {
          ru: "тянул",
          fr: "tiré",
          en: "pulled",
          de: "gezogen",
          uk: "тягнув"
        },
        uitgedaan: {
          ru: "выключил",
          fr: "éteint",
          en: "turned off",
          de: "ausgezogen",
          uk: "вимкнув"
        },
        uitgegaan: {
          ru: "вышел",
          fr: "sorti",
          en: "gone out",
          de: "ausgegangen",
          uk: "вийшов"
        },
        gevallen: {
          ru: "упал",
          fr: "tombé",
          en: "fallen",
          de: "gefallen",
          uk: "впав"
        },
        gevaren: {
          ru: ""
        },
        vergeten: {
          ru: "забыл",
          fr: "oublié",
          en: "forgotten",
          de: "vergessen",
          uk: "забув"
        },
        verkocht: {
          ru: "продал",
          fr: "vendu",
          en: "sold",
          de: "verkauft",
          uk: "продав"
        },
        verloren: {
          ru: "потерял",
          fr: "perdu",
          en: "lost",
          de: "verloren",
          uk: "втратив"
        },
        vertrokken: {
          ru: "ушел",
          fr: "parti",
          en: "departed",
          de: "abgereist",
          uk: "вирушив"
        },
        vervangen: {
          ru: "заменил",
          fr: "remplacé",
          en: "replaced",
          de: "ersetzt",
          uk: "замінив"
        },
        gevonden: {
          ru: "нашел",
          fr: "trouvé",
          en: "found",
          de: "gefunden",
          uk: "знайшов"
        },
        gevlogen: {
          ru: "летел",
          fr: "volé",
          en: "flown",
          de: "geflogen",
          uk: "летів"
        },
        gevroren: {
          ru: "замерз",
          fr: "gelé",
          en: "frozen",
          de: "gefroren",
          uk: "замерз"
        },
        gewassen: {
          ru: "помылся",
          fr: "lavé",
          en: "washed",
          de: "gewaschen",
          uk: "вирушив"
        },
        gewogen: {
          ru: "взвесился",
          fr: "pesé",
          en: "weighed",
          de: "gewogen",
          uk: "зважився"
        },
        gewonnen: {
          ru: "выиграл",
          fr: "gagné",
          en: "won",
          de: "gewonnen",
          uk: "виграв"
        },
        geworden: {
          ru: "стал",
          fr: "devenu",
          en: "become",
          de: "geworden",
          uk: "став"
        },
        gezien: {
          ru: "видел",
          fr: "vu",
          en: "seen",
          de: "gesehen",
          uk: "бачив"
        },
        geweest: {
          ru: "был",
          fr: "été",
          en: "been",
          de: "gewesen",
          uk: "був"
        },
        gezongen: {
          ru: "пел",
          fr: "chanté",
          en: "sung",
          de: "gesungen",
          uk: "співав"
        },
        gezeten: {
          ru: "сидел",
          fr: "assis",
          en: "sat",
          de: "gesessen",
          uk: "сидів"
        },
        gezocht: {
          ru: "иcскал",
          fr: "cherché",
          en: "sought",
          de: "gesucht",
          uk: "шукав"
        },
        gezwommen: {
          ru: "поплавал",
          fr: "nageé",
          en: "swum",
          de: "geschwommen",
          uk: "поплив"
        }
      },
      lessons: [
        {
          num: 1,
          title: "Een weekje Oostende",
          quizes: [
            {
              type: "text",
              name: "Een weekje Oostende met de klas",
              title: "Schooluitstap"
            },
            {
              type: "text",
              name: "Een weekje Oostende met de klas",
              title: "Een weekje Oostende"
            }
          ]
        },
        {
          num: 2,
          title: "Speciaal perfectum",
          quizes: [
            {
              type: "word",
              name: "Speciaal perfectum 1-10",
              title: "Speciaal perfectum 80. Words"
            }
          ]
        }
      ]
    },
    {
      num: "7",
      name: "Bij de dokter",
      words: {},
      lessons: [
        {
          num: 1,
          title: "",
          quizes: []
        },
        {
          num: 2,
          title: ""
        },
        {
          num: 3,
          title: ""
        }
      ]
    }
  ]
};
const obj = {
  school,
  module
};
const Lesson_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".module_level.svelte-847w0j{position:fixed;bottom:0px;left:50%;transform:translate(-50%, -50%);z-index:1}.lesson-container.svelte-847w0j{overflow-y:auto;overflow-x:hidden;max-width:100%;padding-top:10px;scrollbar-width:none;-ms-overflow-style:none}",
  map: null
};
const Lesson = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $lesson, $$unsubscribe_lesson;
  $$unsubscribe_lesson = subscribe(lesson, (value) => $lesson = value);
  const { find, findKey, mapValues } = pkg;
  const level = obj.module;
  let { data } = $$props;
  let { view: view2 } = $$props;
  let display2 = "none";
  let containerWidth = "100%";
  let containerHeight = "100vh";
  function onClickQuiz(ev) {
    if (ev) {
      data.quiz = ev.currentTarget.attributes["quiz"].value;
      data.level = ev.currentTarget.attributes["level"].value.replace(".", "");
      data.name = ev.currentTarget.attributes["name"].value;
      data.theme = ev.currentTarget.attributes["theme"].value;
      data.title = ev.currentTarget.attributes["title"].value;
      data.words = find(obj.module.themes, {
        name: ev.currentTarget.attributes["theme_name"].value
      })["words"];
    }
    set_store_value(lesson, $lesson.visible = false, $lesson);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.view === void 0 && $$bindings.view && view2 !== void 0)
    $$bindings.view(view2);
  $$result.css.add(css$2);
  {
    if ($lesson.data) {
      console.log($lesson.data);
      data = $lesson.data;
      onClickQuiz();
    }
  }
  {
    if (view2 === "lesson") {
      display2 = "block";
    } else {
      display2 = "none";
    }
  }
  $$unsubscribe_lesson();
  return ` ${$lesson.visible ? `<div class="lesson-container svelte-847w0j" style="${"display:" + escape(display2, true) + "; width: " + escape(containerWidth, true) + "; height: " + escape(containerHeight, true) + ";"}"><div class="module_level svelte-847w0j"><div>Module ${escape(level.level)}</div></div> ${each(level.themes, (theme, i) => {
    return `<div class="accordion-container">${validate_component(Accordion, "Accordion").$$render($$result, { multiple: true }, {}, {
      default: () => {
        return `${validate_component(Panel, "Panel").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
              default: () => {
                return `<h4>${escape(theme.name)}</h4>`;
              }
            })} ${validate_component(Content, "Content").$$render($$result, {}, {}, {
              default: () => {
                return `${theme.lessons ? `${each(theme.lessons, (lesson2) => {
                  return ` ${lesson2.quizes ? `${each(lesson2.quizes, (quiz) => {
                    return ` ${quiz.title && quiz.name ? `<div${add_attribute("name", quiz.name, 0)}${add_attribute("quiz", quiz.type, 0)}${add_attribute("level", level.level, 0)}${add_attribute("theme", theme.num, 0)}${add_attribute("theme_name", theme.name, 0)}${add_attribute("title", quiz.title, 0)}><a href="#">${escape(quiz.title)}</a></div> <div style="height:10px"></div>` : ``}`;
                  })}` : ``}`;
                })}` : ``} `;
              }
            })} `;
          }
        })} `;
      }
    })} </div>`;
  })}</div>` : ` ${validate_component(Quiz, "Quiz").$$render($$result, { data }, {}, {})}`}`;
});
const Operator_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".placeholder.svelte-lgm85x{position:relative;left:5px;top:0px}",
  map: null
};
function OnLongPress() {
  select.display = true;
}
const Operator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $lesson, $$unsubscribe_lesson;
  let $view, $$unsubscribe_view;
  let $click_call_func, $$unsubscribe_click_call_func;
  let $call_but_status, $$unsubscribe_call_but_status;
  let $operator, $$unsubscribe_operator;
  let $posterst, $$unsubscribe_posterst;
  let $$unsubscribe_signal;
  let $msg_oper, $$unsubscribe_msg_oper;
  let $$unsubscribe_editable;
  let $msg_user, $$unsubscribe_msg_user;
  let $users, $$unsubscribe_users;
  $$unsubscribe_lesson = subscribe(lesson, (value) => $lesson = value);
  $$unsubscribe_view = subscribe(view, (value) => $view = value);
  $$unsubscribe_click_call_func = subscribe(click_call_func, (value) => $click_call_func = value);
  $$unsubscribe_call_but_status = subscribe(call_but_status, (value) => $call_but_status = value);
  $$unsubscribe_operator = subscribe(operator, (value) => $operator = value);
  $$unsubscribe_posterst = subscribe(posterst, (value) => $posterst = value);
  $$unsubscribe_signal = subscribe(signal, (value) => value);
  $$unsubscribe_msg_oper = subscribe(msg_oper, (value) => $msg_oper = value);
  $$unsubscribe_editable = subscribe(editable, (value) => value);
  $$unsubscribe_msg_user = subscribe(msg_user, (value) => $msg_user = value);
  $$unsubscribe_users = subscribe(users, (value) => $users = value);
  let callcenter;
  let { users_ } = $$props;
  set_store_value(users, $users = users_, $users);
  let rtc;
  let inter;
  let video_button_display = false;
  set_store_value(call_but_status, $call_but_status = "inactive", $call_but_status);
  let { email, abonent, name } = $$props;
  const uid = md5(email);
  let container;
  let progress = { display: "block", value: 0 };
  let local = {
    video: {
      display: "none",
      srcObject: "",
      poster: ""
    },
    audio: { paused: true, src: "" }
  };
  let remote = {
    text: {
      display: "none",
      msg: "You have a call from:",
      name: "",
      email: ""
    },
    video: {
      display: "none",
      srcObject: "",
      poster: ""
    },
    audio: { muted: true, srcObject: "" }
  };
  set_store_value(
    operator,
    $operator = {
      type: "operator",
      em: email,
      abonent,
      uid,
      name,
      img: $posterst
    },
    $operator
  );
  if ($operator.em === abonent) {
    set_store_value(operator, $operator.role = "admin", $operator);
  } else {
    set_store_value(operator, $operator.role = "user", $operator);
  }
  setContext("abonent", abonent);
  function OnClickCallButton() {
    try {
      if (!window.AudioContext) {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        let audioCtx = new AudioContext();
        rtc.localSoundSrc = audioCtx.createMediaElementSource(window.user.localSound);
        rtc.localSoundSrc.connect(audioCtx.destination);
      }
    } catch (ex) {
      console.log("Web Audio API is not supported in this browser");
    }
    console.log($call_but_status);
    switch ($call_but_status) {
      case "inactive":
        rtc.Offer();
        set_store_value(call_but_status, $call_but_status = "active", $call_but_status);
        break;
      case "active":
        set_store_value(call_but_status, $call_but_status = "inactive", $call_but_status);
        rtc.OnInactive();
        break;
      case "call":
        set_store_value(call_but_status, $call_but_status = "talk", $call_but_status);
        clearInterval(inter);
        local.audio.paused = true;
        remote.audio.muted = false;
        rtc.OnTalk();
        video_button_display = true;
        remote.text.display = "none";
        break;
      case "talk":
        remote.audio.muted = true;
        local.video.display = "none";
        video_button_display = false;
        remote.video.display = "none";
        remote.video.srcObject = "";
        remote.video.poster = "";
        remote.text.display = "none";
        remote.text.name = "";
        remote.text.email = "";
        set_store_value(call_but_status, $call_but_status = "inactive", $call_but_status);
        rtc.OnInactive();
        break;
      case "muted":
        set_store_value(call_but_status, $call_but_status = "inactive", $call_but_status);
        local.video.srcObject = "";
        remote.audio.muted = true;
        remote.video.display = "none";
        remote.video.srcObject = "";
        remote.video.poster = "";
        remote.text.display = "none";
        rtc.OnInactive();
        break;
      default:
        return;
    }
  }
  set_store_value(click_call_func, $click_call_func = OnClickCallButton, $click_call_func);
  function OnMessage(data, resolve) {
    if (data.call || data.func === "call") {
      if ($call_but_status === "active") {
        set_store_value(call_but_status, $call_but_status = "call", $call_but_status);
      }
      rtc.OnCall();
      remote.text.display = "block";
      video_button_display = false;
      if (data.profile) {
        let profile = data.profile;
        let avatar = profile.img;
        remote.video.poster = avatar;
        if (avatar)
          remote.video.display = "block";
        remote.text.name = profile.name;
        remote.text.email = profile.email;
      }
    }
    if (data.func === "mute") {
      local.audio.paused = true;
      remote.audio.muted = true;
      video_button_display = false;
      local.video.display = "none";
      local.video.srcObject = "";
      remote.video.srcObject = "";
      remote.video.poster = "";
      remote.video.display = "none";
      remote.text.name = "";
      remote.text.email = "";
      remote.text.display = "none";
      rtc.OnInactive();
      if ($call_but_status === "talk") {
        set_store_value(call_but_status, $call_but_status = "inactive", $call_but_status);
      } else if ($call_but_status === "call") {
        set_store_value(
          call_but_status,
          $call_but_status = "inactive",
          $call_but_status
        );
        rtc.OnMute();
        $click_call_func();
      }
      if (resolve)
        resolve();
    }
    if (data.camera) {
      local.video.src = that.localStream;
    }
    if (data.lesson) {
      set_store_value(view, $view = "lesson", $view);
      if (data.lesson.pair) {
        console.log("pair", data.lesson.pair);
        set_store_value(
          lesson,
          $lesson.data = {
            quiz: "pair.client",
            data: data.lesson.pair
          },
          $lesson
        );
      }
    }
  }
  if ($$props.users_ === void 0 && $$bindings.users_ && users_ !== void 0)
    $$bindings.users_(users_);
  if ($$props.email === void 0 && $$bindings.email && email !== void 0)
    $$bindings.email(email);
  if ($$props.abonent === void 0 && $$bindings.abonent && abonent !== void 0)
    $$bindings.abonent(abonent);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if ($msg_user) {
        OnMessage($msg_user);
      }
    }
    {
      if ($msg_oper) {
        OnMessage($msg_oper);
      }
    }
    {
      {
        console.log(remote.text.msg);
      }
    }
    {
      if (!$click_call_func) {
        set_store_value(click_call_func, $click_call_func = OnClickCallButton, $click_call_func);
      }
    }
    $$rendered = `<div style="display:flex; height:70px; flex-wrap: nowrap;justify-content: space-between;"> <div class="placeholder svelte-lgm85x">${remote.text.display ? `${validate_component(Video_remote, "VideoRemote").$$render($$result, Object.assign({}, remote.video, { name: remote.text.name }, { em: $operator.em }), {}, {
      default: () => {
        return `<div class="remote_text_display" style="${"display:" + escape(remote.text.display, true) + "; position:relative; background-color: rgba(125, 125, 125, 0.5); z-index: 1"}"></div>`;
      }
    })}` : ``}</div> <div style="flex:48%"></div> <div> ${validate_component(CallButtonOperator, "CallButton").$$render(
      $$result,
      { OnLongPress, status: $call_but_status },
      {
        status: ($$value) => {
          $call_but_status = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<b class="call_cnt" style="display:none;position: relative;left:22px;top:10px;color:#0e0cff;font-size: 12px;" data-svelte-h="svelte-23wcub">100</b> <span class="badge badge-primary badge-pill call-queue" style="display:none;position: relative;right:0px;bottom:0px;color:#0e0cff;font-size: 12px;opacity:1" data-svelte-h="svelte-1xler22">0</span>`;
        }
      }
    )}</div> <div style="flex:48%"></div> <div class="video" style="right: 100px; top: 53px; width: 30px; height: 30px; position: absolute;">${video_button_display ? `${validate_component(CommonIcon, "Icon").$$render($$result, { tag: "svg", viewBox: "0 0 24 24" }, {}, {
      default: () => {
        return `<path fill="currentColor" style="color:grey"${add_attribute("d", mdiAccountBox, 0)}></path>`;
      }
    })} ` : ``} ${``}</div> <div style="position:relative; right: 20px; width: 70px; height: 70px;">${validate_component(Video_local, "VideoLocal").$$render($$result, Object.assign({}, local.video), {}, {
      footer: () => {
        return `<div${add_attribute("this", container, 0)}></div>`;
      }
    })}</div></div> <div>${validate_component(Audio_local, "AudioLocal").$$render(
      $$result,
      Object.assign({}, local.audio, { paused: local.audio.paused }),
      {
        paused: ($$value) => {
          local.audio.paused = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Audio_remote, "AudioRemote").$$render(
      $$result,
      Object.assign({}, remote.audio, { srcObject: remote.audio.srcObject }),
      {
        srcObject: ($$value) => {
          remote.audio.srcObject = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(RecordedVideo, "RecordedVideo").$$render($$result, {}, {}, {})} ${validate_component(Download, "Download").$$render($$result, {}, {}, {})}</div> <progress id="dataProgress"${add_attribute("value", progress.value, 0)} max="100" duration="200" style="${"display:" + escape(progress.display, true) + ";top:100px;width:98%;"}"></progress> ${validate_component(Callcenter, "Callcenter").$$render(
      $$result,
      {
        view: $view,
        this: callcenter,
        $call_but_status,
        operator: $operator
      },
      {
        this: ($$value) => {
          callcenter = $$value;
          $$settled = false;
        },
        $call_but_status: ($$value) => {
          $call_but_status = $$value;
          $$settled = false;
        },
        operator: ($$value) => {
          $operator = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Lesson, "Lesson").$$render($$result, { view: $view, data: $users[0].staff }, {}, {})}`;
  } while (!$$settled);
  $$unsubscribe_lesson();
  $$unsubscribe_view();
  $$unsubscribe_click_call_func();
  $$unsubscribe_call_but_status();
  $$unsubscribe_operator();
  $$unsubscribe_posterst();
  $$unsubscribe_signal();
  $$unsubscribe_msg_oper();
  $$unsubscribe_editable();
  $$unsubscribe_msg_user();
  $$unsubscribe_users();
  return $$rendered;
});
const Waypoint_svelte_svelte_type_style_lang = "";
const Image_svelte_svelte_type_style_lang = "";
const FloatingLabel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "for",
    "floatAbove",
    "required",
    "wrapped",
    "shake",
    "float",
    "setRequired",
    "getWidth",
    "getElement"
  ]);
  var _a;
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { for: forId = void 0 } = $$props;
  let { floatAbove = false } = $$props;
  let { required = false } = $$props;
  let { wrapped = false } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  let inputProps = (_a = getContext("SMUI:generic:input:props")) !== null && _a !== void 0 ? _a : {};
  function shake(shouldShake) {
    instance.shake(shouldShake);
  }
  function float(shouldFloat) {
    floatAbove = shouldFloat;
  }
  function setRequired(isRequired) {
    required = isRequired;
  }
  function getWidth() {
    return instance.getWidth();
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.for === void 0 && $$bindings.for && forId !== void 0)
    $$bindings.for(forId);
  if ($$props.floatAbove === void 0 && $$bindings.floatAbove && floatAbove !== void 0)
    $$bindings.floatAbove(floatAbove);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.wrapped === void 0 && $$bindings.wrapped && wrapped !== void 0)
    $$bindings.wrapped(wrapped);
  if ($$props.shake === void 0 && $$bindings.shake && shake !== void 0)
    $$bindings.shake(shake);
  if ($$props.float === void 0 && $$bindings.float && float !== void 0)
    $$bindings.float(float);
  if ($$props.setRequired === void 0 && $$bindings.setRequired && setRequired !== void 0)
    $$bindings.setRequired(setRequired);
  if ($$props.getWidth === void 0 && $$bindings.getWidth && getWidth !== void 0)
    $$bindings.getWidth(getWidth);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `${wrapped ? `<span${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-floating-label": true,
          "mdc-floating-label--float-above": floatAbove,
          "mdc-floating-label--required": required,
          ...internalClasses
        }))
      },
      {
        style: escape_attribute_value(Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</span>` : `<label${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-floating-label": true,
          "mdc-floating-label--float-above": floatAbove,
          "mdc-floating-label--required": required,
          ...internalClasses
        }))
      },
      {
        style: escape_attribute_value(Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "))
      },
      {
        for: escape_attribute_value(forId || (inputProps ? inputProps.id : void 0))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</label>`}`;
});
const LineRipple = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "active",
    "activate",
    "deactivate",
    "setRippleCenter",
    "getElement"
  ]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { active = false } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  function activate() {
    instance.activate();
  }
  function deactivate() {
    instance.deactivate();
  }
  function setRippleCenter(xCoordinate) {
    instance.setRippleCenter(xCoordinate);
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.activate === void 0 && $$bindings.activate && activate !== void 0)
    $$bindings.activate(activate);
  if ($$props.deactivate === void 0 && $$bindings.deactivate && deactivate !== void 0)
    $$bindings.deactivate(deactivate);
  if ($$props.setRippleCenter === void 0 && $$bindings.setRippleCenter && setRippleCenter !== void 0)
    $$bindings.setRippleCenter(setRippleCenter);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-line-ripple": true,
          "mdc-line-ripple--active": active,
          ...internalClasses
        }))
      },
      {
        style: escape_attribute_value(Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}></div>`;
});
const NotchedOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { notched = false } = $$props;
  let { noLabel = false } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let notchStyles = {};
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      internalClasses[className2] = false;
    }
  }
  function notch(notchWidth) {
    instance.notch(notchWidth);
  }
  function closeNotch() {
    instance.closeNotch();
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.notched === void 0 && $$bindings.notched && notched !== void 0)
    $$bindings.notched(notched);
  if ($$props.noLabel === void 0 && $$bindings.noLabel && noLabel !== void 0)
    $$bindings.noLabel(noLabel);
  if ($$props.notch === void 0 && $$bindings.notch && notch !== void 0)
    $$bindings.notch(notch);
  if ($$props.closeNotch === void 0 && $$bindings.closeNotch && closeNotch !== void 0)
    $$bindings.closeNotch(closeNotch);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  {
    {
      removeClass("mdc-notched-outline--upgraded");
    }
  }
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-notched-outline": true,
          "mdc-notched-outline--notched": notched,
          "mdc-notched-outline--no-label": noLabel,
          ...internalClasses
        }))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}><div class="mdc-notched-outline__leading"></div> ${!noLabel ? `<div class="mdc-notched-outline__notch"${add_attribute("style", Object.entries(notchStyles).map(([name, value]) => `${name}: ${value};`).join(" "), 0)}>${slots.default ? slots.default({}) : ``}</div>` : ``} <div class="mdc-notched-outline__trailing"></div> </div>`;
});
const HelperLine = classAdderBuilder({
  class: "mdc-text-field-helper-line",
  tag: "div"
});
const Prefix = classAdderBuilder({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  tag: "span"
});
const Suffix = classAdderBuilder({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  tag: "span"
});
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "type",
    "placeholder",
    "value",
    "files",
    "dirty",
    "invalid",
    "updateInvalid",
    "emptyValueNull",
    "emptyValueUndefined",
    "getAttr",
    "addAttr",
    "removeAttr",
    "focus",
    "blur",
    "getElement"
  ]);
  forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value2) {
    return value2 === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { type = "text" } = $$props;
  let { placeholder = " " } = $$props;
  let { value = uninitializedValue } = $$props;
  const valueUninitialized = isUninitializedValue(value);
  if (valueUninitialized) {
    value = "";
  }
  let { files = null } = $$props;
  let { dirty = false } = $$props;
  let { invalid = false } = $$props;
  let { updateInvalid = true } = $$props;
  let { emptyValueNull = value === null } = $$props;
  if (valueUninitialized && emptyValueNull) {
    value = null;
  }
  let { emptyValueUndefined = value === void 0 } = $$props;
  if (valueUninitialized && emptyValueUndefined) {
    value = void 0;
  }
  let element;
  let internalAttrs = {};
  let valueProp = {};
  function getAttr(name) {
    var _a;
    return name in internalAttrs ? (_a = internalAttrs[name]) !== null && _a !== void 0 ? _a : null : getElement().getAttribute(name);
  }
  function addAttr(name, value2) {
    if (internalAttrs[name] !== value2) {
      internalAttrs[name] = value2;
    }
  }
  function removeAttr(name) {
    if (!(name in internalAttrs) || internalAttrs[name] != null) {
      internalAttrs[name] = void 0;
    }
  }
  function focus() {
    getElement().focus();
  }
  function blur() {
    getElement().blur();
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.files === void 0 && $$bindings.files && files !== void 0)
    $$bindings.files(files);
  if ($$props.dirty === void 0 && $$bindings.dirty && dirty !== void 0)
    $$bindings.dirty(dirty);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.updateInvalid === void 0 && $$bindings.updateInvalid && updateInvalid !== void 0)
    $$bindings.updateInvalid(updateInvalid);
  if ($$props.emptyValueNull === void 0 && $$bindings.emptyValueNull && emptyValueNull !== void 0)
    $$bindings.emptyValueNull(emptyValueNull);
  if ($$props.emptyValueUndefined === void 0 && $$bindings.emptyValueUndefined && emptyValueUndefined !== void 0)
    $$bindings.emptyValueUndefined(emptyValueUndefined);
  if ($$props.getAttr === void 0 && $$bindings.getAttr && getAttr !== void 0)
    $$bindings.getAttr(getAttr);
  if ($$props.addAttr === void 0 && $$bindings.addAttr && addAttr !== void 0)
    $$bindings.addAttr(addAttr);
  if ($$props.removeAttr === void 0 && $$bindings.removeAttr && removeAttr !== void 0)
    $$bindings.removeAttr(removeAttr);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0)
    $$bindings.focus(focus);
  if ($$props.blur === void 0 && $$bindings.blur && blur !== void 0)
    $$bindings.blur(blur);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  {
    if (type === "file") {
      delete valueProp.value;
      valueProp = valueProp;
    } else {
      valueProp.value = value == null ? "" : value;
    }
  }
  return `<input${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-text-field__input": true
        }))
      },
      { type: escape_attribute_value(type) },
      {
        placeholder: escape_attribute_value(placeholder)
      },
      escape_object(valueProp),
      escape_object(internalAttrs),
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>`;
});
const Textarea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "value",
    "dirty",
    "invalid",
    "updateInvalid",
    "resizable",
    "getAttr",
    "addAttr",
    "removeAttr",
    "focus",
    "blur",
    "getElement"
  ]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { value = "" } = $$props;
  let { dirty = false } = $$props;
  let { invalid = false } = $$props;
  let { updateInvalid = true } = $$props;
  let { resizable = true } = $$props;
  let element;
  let internalAttrs = {};
  function getAttr(name) {
    var _a;
    return name in internalAttrs ? (_a = internalAttrs[name]) !== null && _a !== void 0 ? _a : null : getElement().getAttribute(name);
  }
  function addAttr(name, value2) {
    if (internalAttrs[name] !== value2) {
      internalAttrs[name] = value2;
    }
  }
  function removeAttr(name) {
    if (!(name in internalAttrs) || internalAttrs[name] != null) {
      internalAttrs[name] = void 0;
    }
  }
  function focus() {
    getElement().focus();
  }
  function blur() {
    getElement().blur();
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.dirty === void 0 && $$bindings.dirty && dirty !== void 0)
    $$bindings.dirty(dirty);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.updateInvalid === void 0 && $$bindings.updateInvalid && updateInvalid !== void 0)
    $$bindings.updateInvalid(updateInvalid);
  if ($$props.resizable === void 0 && $$bindings.resizable && resizable !== void 0)
    $$bindings.resizable(resizable);
  if ($$props.getAttr === void 0 && $$bindings.getAttr && getAttr !== void 0)
    $$bindings.getAttr(getAttr);
  if ($$props.addAttr === void 0 && $$bindings.addAttr && addAttr !== void 0)
    $$bindings.addAttr(addAttr);
  if ($$props.removeAttr === void 0 && $$bindings.removeAttr && removeAttr !== void 0)
    $$bindings.removeAttr(removeAttr);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0)
    $$bindings.focus(focus);
  if ($$props.blur === void 0 && $$bindings.blur && blur !== void 0)
    $$bindings.blur(blur);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<textarea${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-text-field__input": true
        }))
      },
      {
        style: escape_attribute_value(`${resizable ? "" : "resize: none; "}${style}`)
      },
      escape_object(internalAttrs),
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${escape(value || "")}</textarea>`;
});
const { Object: Object_1 } = globals;
const Textfield = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "ripple",
    "disabled",
    "required",
    "textarea",
    "variant",
    "noLabel",
    "label",
    "type",
    "value",
    "files",
    "invalid",
    "updateInvalid",
    "dirty",
    "prefix",
    "suffix",
    "validateOnValueChange",
    "useNativeValidation",
    "withLeadingIcon",
    "withTrailingIcon",
    "input",
    "floatingLabel",
    "lineRipple",
    "notchedOutline",
    "focus",
    "blur",
    "layout",
    "getElement"
  ]);
  let $$slots = compute_slots(slots);
  forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value2) {
    return value2 === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { ripple = true } = $$props;
  let { disabled = false } = $$props;
  let { required = false } = $$props;
  let { textarea = false } = $$props;
  let { variant = textarea ? "outlined" : "standard" } = $$props;
  let { noLabel = false } = $$props;
  let { label = void 0 } = $$props;
  let { type = "text" } = $$props;
  let { value = $$restProps.input$emptyValueUndefined ? void 0 : uninitializedValue } = $$props;
  let { files = uninitializedValue } = $$props;
  const valued = !isUninitializedValue(value) || !isUninitializedValue(files);
  if (isUninitializedValue(value)) {
    value = void 0;
  }
  if (isUninitializedValue(files)) {
    files = null;
  }
  let { invalid = uninitializedValue } = $$props;
  let { updateInvalid = isUninitializedValue(invalid) } = $$props;
  if (isUninitializedValue(invalid)) {
    invalid = false;
  }
  let { dirty = false } = $$props;
  let { prefix = void 0 } = $$props;
  let { suffix = void 0 } = $$props;
  let { validateOnValueChange = updateInvalid } = $$props;
  let { useNativeValidation = updateInvalid } = $$props;
  let { withLeadingIcon = uninitializedValue } = $$props;
  let { withTrailingIcon = uninitializedValue } = $$props;
  let { input = void 0 } = $$props;
  let { floatingLabel = void 0 } = $$props;
  let { lineRipple = void 0 } = $$props;
  let { notchedOutline = void 0 } = $$props;
  let element;
  let internalClasses = {};
  let internalStyles = {};
  let helperId = void 0;
  let addLayoutListener = getContext("SMUI:addLayoutListener");
  let removeLayoutListener;
  new Promise((resolve) => resolve);
  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }
  onDestroy(() => {
    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });
  function focus() {
    input === null || input === void 0 ? void 0 : input.focus();
  }
  function blur() {
    input === null || input === void 0 ? void 0 : input.blur();
  }
  function layout() {
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.textarea === void 0 && $$bindings.textarea && textarea !== void 0)
    $$bindings.textarea(textarea);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.noLabel === void 0 && $$bindings.noLabel && noLabel !== void 0)
    $$bindings.noLabel(noLabel);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.files === void 0 && $$bindings.files && files !== void 0)
    $$bindings.files(files);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.updateInvalid === void 0 && $$bindings.updateInvalid && updateInvalid !== void 0)
    $$bindings.updateInvalid(updateInvalid);
  if ($$props.dirty === void 0 && $$bindings.dirty && dirty !== void 0)
    $$bindings.dirty(dirty);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0)
    $$bindings.suffix(suffix);
  if ($$props.validateOnValueChange === void 0 && $$bindings.validateOnValueChange && validateOnValueChange !== void 0)
    $$bindings.validateOnValueChange(validateOnValueChange);
  if ($$props.useNativeValidation === void 0 && $$bindings.useNativeValidation && useNativeValidation !== void 0)
    $$bindings.useNativeValidation(useNativeValidation);
  if ($$props.withLeadingIcon === void 0 && $$bindings.withLeadingIcon && withLeadingIcon !== void 0)
    $$bindings.withLeadingIcon(withLeadingIcon);
  if ($$props.withTrailingIcon === void 0 && $$bindings.withTrailingIcon && withTrailingIcon !== void 0)
    $$bindings.withTrailingIcon(withTrailingIcon);
  if ($$props.input === void 0 && $$bindings.input && input !== void 0)
    $$bindings.input(input);
  if ($$props.floatingLabel === void 0 && $$bindings.floatingLabel && floatingLabel !== void 0)
    $$bindings.floatingLabel(floatingLabel);
  if ($$props.lineRipple === void 0 && $$bindings.lineRipple && lineRipple !== void 0)
    $$bindings.lineRipple(lineRipple);
  if ($$props.notchedOutline === void 0 && $$bindings.notchedOutline && notchedOutline !== void 0)
    $$bindings.notchedOutline(notchedOutline);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0)
    $$bindings.focus(focus);
  if ($$props.blur === void 0 && $$bindings.blur && blur !== void 0)
    $$bindings.blur(blur);
  if ($$props.layout === void 0 && $$bindings.layout && layout !== void 0)
    $$bindings.layout(layout);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    input && input.getElement();
    $$rendered = `${valued ? `<label${spread(
      [
        {
          class: escape_attribute_value(classMap({
            [className]: true,
            "mdc-text-field": true,
            "mdc-text-field--disabled": disabled,
            "mdc-text-field--textarea": textarea,
            "mdc-text-field--filled": variant === "filled",
            "mdc-text-field--outlined": variant === "outlined",
            "smui-text-field--standard": variant === "standard" && !textarea,
            "mdc-text-field--no-label": noLabel || label == null && !$$slots.label,
            "mdc-text-field--label-floating": value != null && value !== "",
            "mdc-text-field--with-leading-icon": isUninitializedValue(withLeadingIcon) ? $$slots.leadingIcon : withLeadingIcon,
            "mdc-text-field--with-trailing-icon": isUninitializedValue(withTrailingIcon) ? $$slots.trailingIcon : withTrailingIcon,
            "mdc-text-field--with-internal-counter": textarea && $$slots.internalCounter,
            "mdc-text-field--invalid": invalid,
            ...internalClasses
          }))
        },
        {
          style: escape_attribute_value(Object.entries(internalStyles).map(([name, value2]) => `${name}: ${value2};`).concat([style]).join(" "))
        },
        {
          for: escape_attribute_value(
            /* suppress a11y warning, since this is wrapped */
            void 0
          )
        },
        escape_object(exclude($$restProps, ["input$", "label$", "ripple$", "outline$", "helperLine$"]))
      ],
      {}
    )}${add_attribute("this", element, 0)}>${!textarea && variant !== "outlined" ? `${variant === "filled" ? `<span class="mdc-text-field__ripple"></span>` : ``} ${!noLabel && (label != null || $$slots.label) ? `${validate_component(FloatingLabel, "FloatingLabel").$$render(
      $$result,
      Object_1.assign(
        {},
        {
          floatAbove: value != null && value !== "" && (typeof value !== "number" || !isNaN(value))
        },
        { required },
        { wrapped: true },
        prefixFilter($$restProps, "label$"),
        { this: floatingLabel }
      ),
      {
        this: ($$value) => {
          floatingLabel = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${escape(label == null ? "" : label)}${slots.label ? slots.label({}) : ``}`;
        }
      }
    )}` : ``}` : ``} ${textarea || variant === "outlined" ? `${validate_component(NotchedOutline, "NotchedOutline").$$render(
      $$result,
      Object_1.assign(
        {},
        {
          noLabel: noLabel || label == null && !$$slots.label
        },
        prefixFilter($$restProps, "outline$"),
        { this: notchedOutline }
      ),
      {
        this: ($$value) => {
          notchedOutline = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${!noLabel && (label != null || $$slots.label) ? `${validate_component(FloatingLabel, "FloatingLabel").$$render(
            $$result,
            Object_1.assign(
              {},
              {
                floatAbove: value != null && value !== "" && (typeof value !== "number" || !isNaN(value))
              },
              { required },
              { wrapped: true },
              prefixFilter($$restProps, "label$"),
              { this: floatingLabel }
            ),
            {
              this: ($$value) => {
                floatingLabel = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${escape(label == null ? "" : label)}${slots.label ? slots.label({}) : ``}`;
              }
            }
          )}` : ``}`;
        }
      }
    )}` : ``} ${validate_component(ContextFragment, "ContextFragment").$$render(
      $$result,
      {
        key: "SMUI:textfield:icon:leading",
        value: true
      },
      {},
      {
        default: () => {
          return `${slots.leadingIcon ? slots.leadingIcon({}) : ``}`;
        }
      }
    )} ${slots.default ? slots.default({}) : ``} ${textarea && typeof value === "string" ? `<span${add_attribute(
      "class",
      classMap({
        "mdc-text-field__resizer": !("input$resizable" in $$restProps) || $$restProps.input$resizable
      }),
      0
    )}>${validate_component(Textarea, "Textarea").$$render(
      $$result,
      Object_1.assign({}, { disabled }, { required }, { updateInvalid }, { "aria-controls": helperId }, { "aria-describedby": helperId }, prefixFilter($$restProps, "input$"), { this: input }, { value }, { dirty }, { invalid }),
      {
        this: ($$value) => {
          input = $$value;
          $$settled = false;
        },
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        },
        dirty: ($$value) => {
          dirty = $$value;
          $$settled = false;
        },
        invalid: ($$value) => {
          invalid = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${slots.internalCounter ? slots.internalCounter({}) : ``}</span>` : `${slots.prefix ? slots.prefix({}) : ``} ${prefix != null ? `${validate_component(Prefix, "Prefix").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(prefix)}`;
      }
    })}` : ``} ${validate_component(Input, "Input").$$render(
      $$result,
      Object_1.assign({}, { type }, { disabled }, { required }, { updateInvalid }, { "aria-controls": helperId }, { "aria-describedby": helperId }, noLabel && label != null ? { placeholder: label } : {}, prefixFilter($$restProps, "input$"), { this: input }, { value }, { files }, { dirty }, { invalid }),
      {
        this: ($$value) => {
          input = $$value;
          $$settled = false;
        },
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        },
        files: ($$value) => {
          files = $$value;
          $$settled = false;
        },
        dirty: ($$value) => {
          dirty = $$value;
          $$settled = false;
        },
        invalid: ($$value) => {
          invalid = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${suffix != null ? `${validate_component(Suffix, "Suffix").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(suffix)}`;
      }
    })}` : ``} ${slots.suffix ? slots.suffix({}) : ``}`} ${validate_component(ContextFragment, "ContextFragment").$$render(
      $$result,
      {
        key: "SMUI:textfield:icon:leading",
        value: false
      },
      {},
      {
        default: () => {
          return `${slots.trailingIcon ? slots.trailingIcon({}) : ``}`;
        }
      }
    )} ${!textarea && variant !== "outlined" && ripple ? `${validate_component(LineRipple, "LineRipple").$$render(
      $$result,
      Object_1.assign({}, prefixFilter($$restProps, "ripple$"), { this: lineRipple }),
      {
        this: ($$value) => {
          lineRipple = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}</label>` : `<div${spread(
      [
        {
          class: escape_attribute_value(classMap({
            [className]: true,
            "mdc-text-field": true,
            "mdc-text-field--disabled": disabled,
            "mdc-text-field--textarea": textarea,
            "mdc-text-field--filled": variant === "filled",
            "mdc-text-field--outlined": variant === "outlined",
            "smui-text-field--standard": variant === "standard" && !textarea,
            "mdc-text-field--no-label": noLabel || !$$slots.label,
            "mdc-text-field--with-leading-icon": $$slots.leadingIcon,
            "mdc-text-field--with-trailing-icon": $$slots.trailingIcon,
            "mdc-text-field--invalid": invalid,
            ...internalClasses
          }))
        },
        {
          style: escape_attribute_value(Object.entries(internalStyles).map(([name, value2]) => `${name}: ${value2};`).concat([style]).join(" "))
        },
        escape_object(exclude($$restProps, ["input$", "label$", "ripple$", "outline$", "helperLine$"]))
      ],
      {}
    )}${add_attribute("this", element, 0)}>${slots.label ? slots.label({}) : ``} ${validate_component(ContextFragment, "ContextFragment").$$render(
      $$result,
      {
        key: "SMUI:textfield:icon:leading",
        value: true
      },
      {},
      {
        default: () => {
          return `${slots.leadingIcon ? slots.leadingIcon({}) : ``}`;
        }
      }
    )} ${slots.default ? slots.default({}) : ``} ${validate_component(ContextFragment, "ContextFragment").$$render(
      $$result,
      {
        key: "SMUI:textfield:icon:leading",
        value: false
      },
      {},
      {
        default: () => {
          return `${slots.trailingIcon ? slots.trailingIcon({}) : ``}`;
        }
      }
    )} ${slots.ripple ? slots.ripple({}) : ``}</div>`} ${$$slots.helper ? `${validate_component(HelperLine, "HelperLine").$$render($$result, Object_1.assign({}, prefixFilter($$restProps, "helperLine$")), {}, {
      default: () => {
        return `${slots.helper ? slots.helper({}) : ``}`;
      }
    })}` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const Login_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media screen and (min-width: 768px){input.svelte-1wt0mbk{padding:8px;font-size:14px}}@media screen and (max-width: 767px){input.svelte-1wt0mbk{padding:8px;font-size:14px}}form.svelte-1wt0mbk{display:flex;flex-direction:column;align-items:center;max-width:400px;margin:0 auto;padding:20px;border:1px solid #ccc;border-radius:5px;background-color:#fff}img.svelte-1wt0mbk{display:block;margin-left:auto;margin-right:auto}input[type='file'].svelte-1wt0mbk{display:none}#oper_pic.svelte-1wt0mbk{max-width:100px;max-height:100px;border-radius:50%;cursor:pointer}",
  map: null
};
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $dicts, $$unsubscribe_dicts;
  $$unsubscribe_dicts = subscribe(dicts, (value) => $dicts = value);
  let formData = {
    name: "",
    email: "",
    psw: "",
    confirmPassword: "",
    picture: "",
    lang: ""
  };
  if (!formData.picture) {
    formData.picture = operator_svg;
  }
  let lang = "en";
  let passwordMatch = true;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (lang) {
        formData.lang = lang;
      }
    }
    {
      {
        {
          passwordMatch = true;
        }
      }
    }
    $$rendered = `<form class="svelte-1wt0mbk"><div class="columns margins"><input name="lang"${add_attribute("value", formData.lang, 0)} hidden class="svelte-1wt0mbk"> <div>${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        name: "email",
        label: $dicts["Email"][lang] + ":",
        required: true,
        value: formData.email
      },
      {
        value: ($$value) => {
          formData.email = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div>${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        type: "text",
        name: "name",
        label: $dicts["Имя"][lang] + ":",
        required: true,
        value: formData.name
      },
      {
        value: ($$value) => {
          formData.name = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div>${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        type: "password",
        name: "psw",
        label: $dicts["Пароль"][lang] + ":",
        required: true,
        value: formData.psw
      },
      {
        value: ($$value) => {
          formData.psw = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div>${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        type: "password",
        name: "confirmPassword",
        value: formData.confirmPassword,
        label: $dicts["Повторить пароль"][lang] + ":",
        required: true
      },
      {},
      {}
    )}</div> <div style="padding-top: 20px"><input type="file" id="pic" accept="image/png, image/jpeg" class="svelte-1wt0mbk"> <img type="image" id="oper_pic"${add_attribute("src", formData.picture, 0)} class="svelte-1wt0mbk"></div> <div>${validate_component(Button, "Button").$$render($$result, { class: "upload-button" }, {}, {
      default: () => {
        return `${escape($dicts["Зарегистрироваться"][lang])}`;
      }
    })}</div></div></form> ${validate_component(SelectMenu, "SelectMenu").$$render(
      $$result,
      { lang },
      {
        lang: ($$value) => {
          lang = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${!passwordMatch ? `<p style="color: red;">${escape($dicts["Пароли не совпадают"][lang])}</p>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_dicts();
  return $$rendered;
});
server_path.subscribe((data) => {
});
const headers = {
  "Content-Type": "application/json"
  // Authorization: `Bearer ${token}`
};
class SignalingChannel {
  constructor(operator2) {
    this.msg_oper = msg_oper;
    this.msg_user = msg_user;
    this.operator = operator2;
  }
  async SendMessage(par, cb) {
    par.operator = this.operator;
    fetch("./", {
      method: "POST",
      // mode: 'no-cors',
      body: JSON.stringify({ par }),
      headers: { headers }
    }).then((response) => response.json()).then((data) => {
      if (cb)
        cb(data);
    }).catch((error) => {
      console.log(error);
      return [];
    });
  }
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $users, $$unsubscribe_users;
  let $ice_conf, $$unsubscribe_ice_conf;
  let $dicts, $$unsubscribe_dicts;
  let $langs, $$unsubscribe_langs;
  let $server_path, $$unsubscribe_server_path;
  let $signal, $$unsubscribe_signal;
  $$unsubscribe_users = subscribe(users, (value) => $users = value);
  $$unsubscribe_ice_conf = subscribe(ice_conf, (value) => $ice_conf = value);
  $$unsubscribe_dicts = subscribe(dicts, (value) => $dicts = value);
  $$unsubscribe_langs = subscribe(langs, (value) => $langs = value);
  $$unsubscribe_server_path = subscribe(server_path, (value) => $server_path = value);
  $$unsubscribe_signal = subscribe(signal, (value) => $signal = value);
  let { data } = $$props;
  let user_pic = data.picture ? data.picture.medium : "";
  let email = data.operator, abonent = data.abonent, name = data.name;
  set_store_value(signal, $signal = new SignalingChannel(email), $signal);
  set_store_value(server_path, $server_path = data.host, $server_path);
  set_store_value(langs, $langs = data.lang, $langs);
  set_store_value(dicts, $dicts = data.dict[0], $dicts);
  set_store_value(ice_conf, $ice_conf = data.ice_conf, $ice_conf);
  if (data.users) {
    set_store_value(users, $users = JSON.parse(data.users), $users);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_users();
  $$unsubscribe_ice_conf();
  $$unsubscribe_dicts();
  $$unsubscribe_langs();
  $$unsubscribe_server_path();
  $$unsubscribe_signal();
  return `${!email || !data.users ? `${validate_component(Login, "Login").$$render($$result, { email, abonent, user_pic }, {}, {})}` : `${validate_component(Operator, "Operator").$$render($$result, { email, abonent, name, users_: $users }, {}, {})}`}`;
});
export {
  Page as default
};
