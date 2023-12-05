import { c as create_ssr_component, g as get_current_component, a as spread, e as escape_attribute_value, b as escape_object, d as add_attribute, s as setContext, v as validate_component, f as escape } from "../../chunks/ssr.js";
import { c as compute_rest_props, s as subscribe, a as set_store_value } from "../../chunks/utils.js";
import { f as forwardEventsBuilder, c as classMap, d as dispatch, R as Row, T as Title, I as IconButton } from "../../chunks/IconButton.js";
import { MDCTopAppBarBaseFoundation, MDCShortTopAppBarFoundation, MDCFixedTopAppBarFoundation, MDCTopAppBarFoundation } from "@material/top-app-bar";
import { r as readable } from "../../chunks/index2.js";
import { l as langs, v as view, d as dicts, e as editable } from "../../chunks/stores.js";
const TopAppBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "variant",
    "color",
    "collapsed",
    "prominent",
    "dense",
    "scrollTarget",
    "getPropStore",
    "getElement"
  ]);
  forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value) {
    return value === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { variant = "standard" } = $$props;
  let { color = "primary" } = $$props;
  let { collapsed = uninitializedValue } = $$props;
  const alwaysCollapsed = !isUninitializedValue(collapsed) && !!collapsed;
  if (isUninitializedValue(collapsed)) {
    collapsed = false;
  }
  let { prominent = false } = $$props;
  let { dense = false } = $$props;
  let { scrollTarget = void 0 } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  let propStoreSet;
  let propStore = readable({ variant, prominent, dense }, (set) => {
    propStoreSet = set;
  });
  let oldScrollTarget = void 0;
  let oldVariant = variant;
  function getInstance() {
    const Foundation = {
      static: MDCTopAppBarBaseFoundation,
      short: MDCShortTopAppBarFoundation,
      fixed: MDCFixedTopAppBarFoundation,
      standard: MDCTopAppBarFoundation
    }[variant] || MDCTopAppBarFoundation;
    return new Foundation({
      hasClass,
      addClass,
      removeClass,
      setStyle: addStyle,
      getTopAppBarHeight: () => element.clientHeight,
      notifyNavigationIconClicked: () => dispatch(element, "SMUITopAppBar:nav", void 0, void 0, true),
      getViewportScrollY: () => scrollTarget == null ? window.pageYOffset : scrollTarget.scrollTop,
      getTotalActionItems: () => element.querySelectorAll(".mdc-top-app-bar__action-item").length
    });
  }
  function hasClass(className2) {
    return className2 in internalClasses ? internalClasses[className2] : getElement().classList.contains(className2);
  }
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
  function handleTargetScroll() {
    if (instance) {
      instance.handleTargetScroll();
      if (variant === "short") {
        collapsed = "isCollapsed" in instance && instance.isCollapsed;
      }
    }
  }
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
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.collapsed === void 0 && $$bindings.collapsed && collapsed !== void 0)
    $$bindings.collapsed(collapsed);
  if ($$props.prominent === void 0 && $$bindings.prominent && prominent !== void 0)
    $$bindings.prominent(prominent);
  if ($$props.dense === void 0 && $$bindings.dense && dense !== void 0)
    $$bindings.dense(dense);
  if ($$props.scrollTarget === void 0 && $$bindings.scrollTarget && scrollTarget !== void 0)
    $$bindings.scrollTarget(scrollTarget);
  if ($$props.getPropStore === void 0 && $$bindings.getPropStore && getPropStore !== void 0)
    $$bindings.getPropStore(getPropStore);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  {
    if (propStoreSet) {
      propStoreSet({ variant, prominent, dense });
    }
  }
  {
    if (oldVariant !== variant && instance) {
      oldVariant = variant;
      instance.destroy();
      internalClasses = {};
      internalStyles = {};
      instance = getInstance();
      instance.init();
    }
  }
  {
    if (instance && variant === "short" && "setAlwaysCollapsed" in instance) {
      instance.setAlwaysCollapsed(alwaysCollapsed);
    }
  }
  {
    if (oldScrollTarget !== scrollTarget) {
      if (oldScrollTarget) {
        oldScrollTarget.removeEventListener("scroll", handleTargetScroll);
      }
      if (scrollTarget) {
        scrollTarget.addEventListener("scroll", handleTargetScroll);
      }
      oldScrollTarget = scrollTarget;
    }
  }
  return ` <header${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-top-app-bar": true,
          "mdc-top-app-bar--short": variant === "short",
          "mdc-top-app-bar--short-collapsed": collapsed,
          "mdc-top-app-bar--fixed": variant === "fixed",
          "smui-top-app-bar--static": variant === "static",
          "smui-top-app-bar--color-secondary": color === "secondary",
          "mdc-top-app-bar--prominent": prominent,
          "mdc-top-app-bar--dense": dense,
          ...internalClasses
        }))
      },
      {
        style: escape_attribute_value(Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``} </header>`;
});
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "align", "toolbar", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { align = "start" } = $$props;
  let { toolbar = false } = $$props;
  let element;
  setContext("SMUI:icon-button:context", toolbar ? "top-app-bar:action" : "top-app-bar:navigation");
  setContext("SMUI:button:context", toolbar ? "top-app-bar:action" : "top-app-bar:navigation");
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.toolbar === void 0 && $$bindings.toolbar && toolbar !== void 0)
    $$bindings.toolbar(toolbar);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<section${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-top-app-bar__section": true,
          "mdc-top-app-bar__section--align-start": align === "start",
          "mdc-top-app-bar__section--align-end": align === "end"
        }))
      },
      escape_object(toolbar ? { role: "toolbar" } : {}),
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``} </section>`;
});
const BurgerButton_svelte_svelte_type_style_lang = "";
const SideMenu_svelte_svelte_type_style_lang = "";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-1xvb5w2{display:flex;justify-content:space-between}img.svelte-1xvb5w2{width:20px;opacity:100%}.lang_list.svelte-1xvb5w2{background-color:white;opacity:50%}@media screen and (max-width: 767px){}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $langs, $$unsubscribe_langs;
  let $view, $$unsubscribe_view;
  let $dicts, $$unsubscribe_dicts;
  let $editable, $$unsubscribe_editable;
  $$unsubscribe_langs = subscribe(langs, (value) => $langs = value);
  $$unsubscribe_view = subscribe(view, (value) => $view = value);
  $$unsubscribe_dicts = subscribe(dicts, (value) => $dicts = value);
  $$unsubscribe_editable = subscribe(editable, (value) => $editable = value);
  set_store_value(view, $view = "cc", $view);
  let topAppBar;
  $$result.css.add(css$1);
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
      if ($dicts) {
        console.log($dicts);
      }
    }
    $$rendered = `${$dicts && $dicts["CLASS"][$langs] ? `<header class="svelte-1xvb5w2">${validate_component(TopAppBar, "TopAppBar").$$render(
      $$result,
      {
        variant: "fixed",
        dense: true,
        this: topAppBar
      },
      {
        this: ($$value) => {
          topAppBar = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Section, "Section").$$render($$result, {}, {}, {})} <div class="sec_items">${validate_component(Section, "Section").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Title, "Title").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape($dicts ? $dicts["CLASS"][$langs] : "CLASS")}`;
                    }
                  })} ${validate_component(Title, "Title").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape($dicts ? $dicts["LESSON"][$langs] : "LESSON")}`;
                    }
                  })} `;
                }
              })}</div> ${validate_component(Section, "Section").$$render($$result, { align: "end" }, {}, {
                default: () => {
                  return `${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
                    default: () => {
                      return `menu`;
                    }
                  })} ${``}`;
                }
              })}`;
            }
          })}`;
        }
      }
    )}</header>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_langs();
  $$unsubscribe_view();
  $$unsubscribe_dicts();
  $$unsubscribe_editable();
  return $$rendered;
});
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-12n6i4v{display:flex;flex-direction:column;min-height:100vh}main.svelte-12n6i4v{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box;margin-top:40px}@media(min-width: 480px){}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-12n6i4v">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="svelte-12n6i4v">${slots.default ? slots.default({}) : ``}</main>  </div>`;
});
export {
  Layout as default
};
