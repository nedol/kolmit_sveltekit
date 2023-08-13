import { c as create_ssr_component, a as subscribe, o as onDestroy, b as add_attribute, e as escape, v as validate_component, d as each, s as setContext } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
import { w as writable } from "../../../chunks/index2.js";
import "cookie";
import "blueimp-load-image/js/load-image.js";
import "blueimp-load-image/js/load-image-scale.js";
import _ from "lodash";
import md5 from "md5";
let editable = writable(false);
let langs = writable();
let pswd = writable();
langs.subscribe((data) => {
});
let msg_1 = writable();
let signal = writable();
let dicts = writable();
let users = writable();
let statust = writable();
const icofont_min = "";
const Forward = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { status } = $$props;
  let { operator } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.operator === void 0 && $$bindings.operator && operator !== void 0)
    $$bindings.operator(operator);
  return `<div style="position: relative;right: 0px; top:70px">${slots.default ? slots.default({}) : ``} </div>`;
});
const FileTransfer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { operator } = $$props;
  if ($$props.operator === void 0 && $$bindings.operator && operator !== void 0)
    $$bindings.operator(operator);
  return `<div style="position: relative;right: 0px; top:70px">${slots.default ? slots.default({}) : ``} <input class="file-upload" accept="*,*" id="file" name="file" type="file" style="display: none"> </div>`;
});
const Oper_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "textarea.svelte-3cznv6:not([readonly]),input.svelte-3cznv6:not([readonly]){color:rgb(35, 33, 158)}textarea.svelte-3cznv6:not([readonly])::placeholder,input.svelte-3cznv6:not([readonly])::placeholder{color:rgb(41, 128, 155)}input.svelte-3cznv6,input.svelte-3cznv6:hover,input.svelte-3cznv6:focus,input.svelte-3cznv6:active,textarea.svelte-3cznv6{background:transparent;border:0;border-style:none;border-color:transparent;outline:none;outline-offset:0;box-shadow:none;padding:0;font-size:0.7em}",
  map: null
};
const Oper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_pswd;
  let $$unsubscribe_signal;
  let $dicts, $$unsubscribe_dicts;
  let $langs, $$unsubscribe_langs;
  $$unsubscribe_pswd = subscribe(pswd, (value) => value);
  $$unsubscribe_signal = subscribe(signal, (value) => value);
  $$unsubscribe_dicts = subscribe(dicts, (value) => $dicts = value);
  $$unsubscribe_langs = subscribe(langs, (value) => $langs = value);
  let lang = $langs;
  let { operator } = $$props;
  let { id } = $$props;
  let { dep } = $$props;
  let { user } = $$props;
  let user_status, placeholder_name, placeholder_email, placeholder_desc;
  let dict = $dicts;
  if (dict) {
    placeholder_name = dict["input operator name"][lang];
    placeholder_email = dict["input operator email"][lang];
    placeholder_desc = dict["input description"][lang];
  }
  let status = "";
  statust.subscribe((data) => {
    status = data;
  });
  let { edited_display } = $$props;
  let readonlyOper = true;
  let readonlyAdm = true;
  const us_edit = editable.subscribe((data) => {
    edited_display = data;
    readonlyOper = !edited_display;
    readonlyAdm = !edited_display;
  });
  onDestroy(us_edit);
  user.email = user.email ? user.email : "";
  const titleize = (s) => s ? s.replace(/^([a-z])/, (_2, r) => r.toUpperCase()) : "";
  user.name = titleize(user.name);
  let oper_admin_div;
  if ($$props.operator === void 0 && $$bindings.operator && operator !== void 0)
    $$bindings.operator(operator);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.dep === void 0 && $$bindings.dep && dep !== void 0)
    $$bindings.dep(dep);
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  if ($$props.edited_display === void 0 && $$bindings.edited_display && edited_display !== void 0)
    $$bindings.edited_display(edited_display);
  $$result.css.add(css$5);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div style="display:flex; flex-wrap: nowrap;justify-content: space-between; padding:4px"${add_attribute("this", oper_admin_div, 0)}><div class="user_pic_div" style="position:relative; width: 100px;"> <img class="user_pic is-rounded"${add_attribute("src", user.picture.medium, 0)} alt="" style="border-radius: 5px; float:right; max-width:100%"> ${edited_display ? `<input class="file-upload svelte-3cznv6" accept="image/png, image/jpeg" id="avatar" name="avatar" type="file" style="display: none">` : ``}   ${user.email && operator.email !== user.email ? `<iframe class="user_frame" src="${"https://nedol.ru/kolmit/user/iframe.html?em=" + escape(user.email, true) + "&abonent=" + escape(operator.abonent, true)}" scrolling="no" frameborder="0" style="position: absolute;width:100%;top:0;left:0" title=""></iframe>` : ``}  ${edited_display ? `${dep.admin.email === operator.email && operator.email !== user.email && user.role === "operator" ? `<svg height="30" width="30" style="position: absolute;bottom: -15px;left: -9px;"><glyph glyph-name="minus-circle" unicode="" horiz-adv-x="50"></glyph><g class="currentLayer"><path d="M500.2 62.5c-241.8 0-437.7 195.89999999999998-437.7 437.3 0 241.8 195.89999999999998 437.7 437.7 437.7 241.40000000000003 0 437.3-195.89999999999998 437.3-437.7 0-241.40000000000003-195.89999999999998-437.3-437.3-437.3z m301.59999999999997 466.5c-0.6999999999999318 9-2.199999999999932 19.100000000000023-4.699999999999932 30.299999999999955h-593.9000000000001c-2.499999999999943-11.199999999999932-4.299999999999926-21.699999999999932-5.0999999999999375-31.399999999999977-0.6999999999999886-9.699999999999932-1.0999999999999943-19.799999999999955-1.0999999999999943-30.299999999999955 0-9 0.4000000000000057-18 1.0999999999999943-26.700000000000045 0.700000000000017-9 2.5-19.099999999999966 5.099999999999994-30.299999999999955h593.9000000000001c2.4999999999998863 11.199999999999989 3.9999999999998863 21.599999999999966 4.699999999999818 31.399999999999977 1.1000000000000227 9.699999999999989 1.400000000000091 19.80000000000001 1.400000000000091 30.30000000000001 0.09999999999990905 9.099999999999966-0.3000000000000682 17.69999999999999-1.400000000000091 26.69999999999999z" transform="scale(.03)" style="fill:lightgrey; stroke:black; stroke-width:20px"></path></g></svg>` : ``}` : ``}</div> <div style="flex:1; margin-left:10px">${dict ? `<input type="text" class="user_name svelte-3cznv6"${add_attribute("placeholder", placeholder_name, 0)} ${readonlyOper ? "readonly" : ""} style="width:80%;"${add_attribute("value", user.name, 0)}> <input type="text" class="user_email svelte-3cznv6"${add_attribute("placeholder", placeholder_email, 0)} ${readonlyAdm ? "readonly" : ""} style="width:100%; max-height: 100px;"${add_attribute("value", user.email, 0)}>` : ``} <textarea type="text" rows="3" class="user_desc svelte-3cznv6"${add_attribute("placeholder", placeholder_desc, 0)} ${readonlyOper ? "readonly" : ""} style="width:85%;overflow:auto;max-height: 100px;resize:none">${escape(user.desc || "")}</textarea></div> <div style="display: flex;flex-flow: row nowrap; align-items: flex-start;flex-direction: column;">${status === "talk" && user_status === "active" && user.email !== operator.email ? `${validate_component(Forward, "Forward").$$render(
      $$result,
      { operator: user.email, status },
      {
        status: ($$value) => {
          status = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<img src="./src/routes/assets/call-forward.svg" alt="call-forward" width="30px" height="30px">`;
        }
      }
    )}` : ``} ${status === "talk" && user.email === operator.email ? `${validate_component(FileTransfer, "FileTransfer").$$render($$result, { status, operator: user.email }, {}, {
      default: () => {
        return `<img src="./src/routes/assets/file-transfer.svg" alt="file-transfer" width="30px" height="30px">`;
      }
    })}` : ``}</div> </div>`;
  } while (!$$settled);
  $$unsubscribe_pswd();
  $$unsubscribe_signal();
  $$unsubscribe_dicts();
  $$unsubscribe_langs();
  return $$rendered;
});
const Dep_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".collapsible.svelte-1fx3n49{background-color:rgb(158, 158, 158);color:white;cursor:pointer;padding:18px;width:100%;border:none;text-align:left;outline:none;font-size:15px}.content.svelte-1fx3n49{padding:0 10px;max-height:0;overflow:hidden;transition:max-height 0.2s ease-out;background-color:#f1f1f1}input.svelte-1fx3n49:not([readonly])::placeholder{color:rgb(35, 33, 158)}input.svelte-1fx3n49,input.svelte-1fx3n49:hover,input.svelte-1fx3n49:focus,input.svelte-1fx3n49:active{background:transparent;border:0;border-style:none;border-color:transparent;outline:none;outline-offset:0;box-shadow:none;padding:0}",
  map: null
};
const Dep = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $statust, $$unsubscribe_statust;
  let $$unsubscribe_signal;
  $$unsubscribe_statust = subscribe(statust, (value) => $statust = value);
  $$unsubscribe_signal = subscribe(signal, (value) => value);
  let { dep } = $$props;
  let { owner } = $$props;
  let { operator } = $$props;
  let button;
  let isAddOper = "none";
  let status = $statust;
  let readonly = false;
  let content;
  let { update } = $$props;
  let { edited_display } = $$props;
  const us_edit = editable.subscribe((data) => {
    edited_display = data;
    readonly = !edited_display;
  });
  let lang = "en";
  langs.subscribe((data) => {
    lang = data;
  });
  let psw;
  pswd.subscribe((data) => {
    psw = data;
  });
  onDestroy(us_edit);
  async function AddOper(ev) {
    let par = {};
    par.proj = "kolmit";
    par.func = "addoper";
    par.abonent = operator.abonent;
    par.em = operator.email;
    par.psw = psw;
    par.lang = lang;
    par.dep_id = dep.id;
    const res = fetch("/api/edit_cc/", {
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
  if ($$props.operator === void 0 && $$bindings.operator && operator !== void 0)
    $$bindings.operator(operator);
  if ($$props.update === void 0 && $$bindings.update && update !== void 0)
    $$bindings.update(update);
  if ($$props.edited_display === void 0 && $$bindings.edited_display && edited_display !== void 0)
    $$bindings.edited_display(edited_display);
  if ($$props.AddOper === void 0 && $$bindings.AddOper && AddOper !== void 0)
    $$bindings.AddOper(AddOper);
  if ($$props.RemoveDep === void 0 && $$bindings.RemoveDep && RemoveDep !== void 0)
    $$bindings.RemoveDep(RemoveDep);
  $$result.css.add(css$4);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (edited_display) {
        if (!operator.abonent && dep.id === "0" || !operator.abonent && !dep.admin || operator.abonent && operator.email === dep.admin.email) {
          isAddOper = "block";
        }
      }
    }
    $$rendered = ` ${dep.id !== "0" ? `<button class="collapsible svelte-1fx3n49"${add_attribute("owner", owner, 0)}${add_attribute("this", button, 0)}><input type="text" ${readonly ? "readonly" : ""} style="border-width: 0px;" placeholder="input dep name" class="svelte-1fx3n49"${add_attribute("value", dep.alias, 0)}> ${edited_display ? `${operator.email === operator.abonent ? `<svg height="30" width="30" style="position: relative;float:right"><glyph glyph-name="minus-circle" unicode="" horiz-adv-x="50"></glyph><g class="currentLayer"><path d="M500.2 62.5c-241.8 0-437.7 195.89999999999998-437.7 437.3 0 241.8 195.89999999999998 437.7 437.7 437.7 241.40000000000003 0 437.3-195.89999999999998 437.3-437.7 0-241.40000000000003-195.89999999999998-437.3-437.3-437.3z m301.59999999999997 466.5c-0.6999999999999318 9-2.199999999999932 19.100000000000023-4.699999999999932 30.299999999999955h-593.9000000000001c-2.499999999999943-11.199999999999932-4.299999999999926-21.699999999999932-5.0999999999999375-31.399999999999977-0.6999999999999886-9.699999999999932-1.0999999999999943-19.799999999999955-1.0999999999999943-30.299999999999955 0-9 0.4000000000000057-18 1.0999999999999943-26.700000000000045 0.700000000000017-9 2.5-19.099999999999966 5.099999999999994-30.299999999999955h593.9000000000001c2.4999999999998863 11.199999999999989 3.9999999999998863 21.599999999999966 4.699999999999818 31.399999999999977 1.1000000000000227 9.699999999999989 1.400000000000091 19.80000000000001 1.400000000000091 30.30000000000001 0.09999999999990905 9.099999999999966-0.3000000000000682 17.69999999999999-1.400000000000091 26.69999999999999z" transform="scale(.03)" style="fill:lightgrey; stroke:black; stroke-width:20px"></path></g></svg>` : ``}` : ``}</button>` : ``} <div class="content svelte-1fx3n49" style="max-height:0px"${add_attribute("this", content, 0)}><br> ${dep.admin ? `<div>${validate_component(Oper, "Oper").$$render(
      $$result,
      {
        id: dep.admin.id,
        operator,
        update,
        readonly,
        status,
        dep,
        user: dep.admin
      },
      {
        status: ($$value) => {
          status = $$value;
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
      return `${user.email || !user.email && owner === operator.email ? `${validate_component(Oper, "Oper").$$render(
        $$result,
        {
          id: u,
          operator,
          update,
          readonly,
          status,
          dep,
          user
        },
        {
          status: ($$value) => {
            status = $$value;
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
      )} <br>` : ``}`;
    })}` : ``} ${edited_display ? ` <div class="add_oper" style="${"display:" + escape(isAddOper, true)}"><svg style="position: relative;left: 45%; height:40, width=40"><title>add-user</title><glyph glyph-name="contact-add" unicode="" horiz-adv-x="50"></glyph><path d="M134.1 761.6c-14.5 0-26.39999999999999-11.899999999999977-26.39999999999999-26.399999999999977v-523.5c0-14.500000000000057 11.899999999999991-26.400000000000034 26.39999999999999-26.400000000000034h639.8c14.5 0 26.399999999999977 11.899999999999977 26.399999999999977 26.399999999999977v239.40000000000003c15.800000000000068 2.3999999999999773 30.90000000000009 6.2999999999999545 45.40000000000009 11.899999999999977v-288.7c0-14.5-11.900000000000091-26.400000000000006-26.40000000000009-26.400000000000006h-730.4c-14.499999999999972 0-26.399999999999977 11.900000000000006-26.399999999999977 26.400000000000006v598.7c0 14.399999999999977 11.900000000000006 26.299999999999955 26.400000000000006 26.299999999999955h479.30000000000007c-7.400000000000091-11.899999999999977-13.700000000000045-24.59999999999991-18.700000000000045-37.69999999999993h-415.4z m164.70000000000002-245h-19.400000000000034c-41.69999999999999 0-75.39999999999998 33.799999999999955-75.39999999999998 75.39999999999998v21c0 13.100000000000023 10.699999999999989 23.799999999999955 23.80000000000001 23.799999999999955h251.7c13.100000000000023 0 23.899999999999977-10.699999999999932 23.899999999999977-23.799999999999955v-21c0-41.60000000000002-33.799999999999955-75.39999999999998-75.39999999999998-75.39999999999998h-19.600000000000023c-10.099999999999966 0-18.299999999999955-8.100000000000023-18.299999999999955-18.30000000000001 0-3.8000000000000114 1.5-7.300000000000011 4.199999999999989-10 11.300000000000011-11 20.899999999999977-25.80000000000001 27.69999999999999-41.80000000000001 1.5 1.1000000000000227 2.8999999999999773 1.8000000000000114 4.5 1.8000000000000114 10.899999999999977 0 23.80000000000001-24.19999999999999 23.80000000000001-40.80000000000001 0-16.399999999999977-1.5-29.80000000000001-12.300000000000011-29.80000000000001-1.3000000000000114 0-2.8000000000000114 0.30000000000001137-4 0.6000000000000227-0.8000000000000114-44.69999999999999-12.100000000000023-100.40000000000003-80.30000000000001-100.40000000000003-71.19999999999999 0-79.5 55.60000000000002-80.19999999999999 100.20000000000005-1-0.20000000000004547-2-0.4000000000000341-2.8999999999999773-0.4000000000000341-11 0-12.5 13.400000000000034-12.5 29.80000000000001 0 16.5 12.899999999999977 40.80000000000001 23.799999999999955 40.80000000000001 1.3000000000000114 0 2.6000000000000227-0.4000000000000341 3.8000000000000114-1.1000000000000227 6.800000000000011 15.699999999999989 16.19999999999999 30.30000000000001 27.30000000000001 41 2.8000000000000114 2.6000000000000227 4.199999999999989 6.300000000000011 4.199999999999989 10-0.19999999999998863 10.199999999999989-8.399999999999977 18.400000000000034-18.399999999999977 18.400000000000034z m381.2-189.3c0-9.699999999999989-7.899999999999977-17.80000000000001-17.799999999999955-17.80000000000001h-211.00000000000006c6 13.600000000000023 10.300000000000011 30.100000000000023 12.199999999999989 50.60000000000002 4.600000000000023 2.8999999999999773 7.900000000000034 7.399999999999977 10.700000000000045 12.799999999999955h188.10000000000002c9.699999999999932 0 17.799999999999955-7.899999999999977 17.799999999999955-17.599999999999966v-28z m-2.1000000000000227 151.09999999999997c1.1000000000000227-2.3999999999999773 2.1000000000000227-5 2.1000000000000227-7.699999999999989v-28c0-9.699999999999989-7.899999999999977-17.80000000000001-17.799999999999955-17.80000000000001h-183.80000000000007c-5 18.900000000000034-17.099999999999966 38.700000000000045-34.299999999999955 43.900000000000034l-1.6000000000000227 2.8000000000000114v16.69999999999999h213.20000000000005c7.2999999999999545-3.6999999999999886 14.699999999999932-7 22.199999999999932-9.900000000000034z m-125 125.10000000000002c8.899999999999977-23.299999999999955 21.5-44.5 37.39999999999998-63.200000000000045h-71.69999999999993c9.399999999999977 15 15.100000000000023 32.700000000000045 15.100000000000023 51.60000000000002v11.5h19.199999999999932v0.10000000000002274z m332.20000000000005-55.39999999999998c-30.700000000000045-31.100000000000023-73.10000000000002-50.60000000000002-119.70000000000005-52.400000000000034h-6.2999999999999545c-49.700000000000045 0-94 19.900000000000034-126.5 52.400000000000034-32.10000000000002 32.10000000000002-52.39999999999998 76.79999999999995-52.39999999999998 126 0 25.299999999999955 5.399999999999977 49.299999999999955 14.899999999999977 71 9 20.699999999999932 21.699999999999932 39.69999999999993 37.5 55.60000000000002 32.5 32.09999999999991 76.79999999999995 52 126.5 52 98.39999999999998 0 178.39999999999998-80 178.39999999999998-178.4000000000001 0-49.39999999999998-19.899999999999977-94.09999999999991-52.39999999999998-126.19999999999993z m-41.60000000000002 152.19999999999993h-58.700000000000045v58.30000000000007h-52v-58.30000000000007h-58.299999999999955v-52.39999999999998h58.299999999999955v-58.299999999999955h52v58.299999999999955h58.700000000000045v52.39999999999998z" transform="scale(.04)" style="fill:grey"></path></svg></div> ` : ``}</div> `;
  } while (!$$settled);
  $$unsubscribe_statust();
  $$unsubscribe_signal();
  return $$rendered;
});
const Callcenter_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".svelte-mkabf0::-webkit-scrollbar{display:none}",
  map: null
};
const Callcenter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $users, $$unsubscribe_users;
  let $langs, $$unsubscribe_langs;
  let $$unsubscribe_signal;
  let $pswd, $$unsubscribe_pswd;
  let $$unsubscribe_statust;
  $$unsubscribe_users = subscribe(users, (value) => $users = value);
  $$unsubscribe_langs = subscribe(langs, (value) => $langs = value);
  $$unsubscribe_signal = subscribe(signal, (value) => value);
  $$unsubscribe_pswd = subscribe(pswd, (value) => $pswd = value);
  $$unsubscribe_statust = subscribe(statust, (value) => value);
  let { operator, url } = $$props;
  let psw = $pswd;
  let lang = $langs;
  let cc_data = "";
  if ($users)
    cc_data = $users;
  let edited_display = false;
  let { tarif: tarif2 } = $$props;
  async function RemoveDep(id) {
    let ind = _.findIndex(cc_data, { id });
    if (confirm("Delete Dep " + (cc_data[ind].alias ? cc_data[ind].alias : "") + "?")) {
      let par = {};
      par.proj = "kolmit";
      par.func = "remdep";
      par.role = operator;
      par.dep = id;
      par.em = operator.email;
      par.lang = lang;
      par.abonent = operator.abonent;
      par.uid = operator.uid;
      par.psw = psw;
      const res = fetch("/api/edit_cc/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // 'Content-Type': 'application/x-www-form-urlencoded',
        body: JSON.stringify({ par })
      });
      const data = await (await res).json();
      cc_data = data["users"];
    }
  }
  if ($$props.operator === void 0 && $$bindings.operator && operator !== void 0)
    $$bindings.operator(operator);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.tarif === void 0 && $$bindings.tarif && tarif2 !== void 0)
    $$bindings.tarif(tarif2);
  $$result.css.add(css$3);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (cc_data && cc_data.length > 0) {
        _.forEach(cc_data, (dep, k) => {
          if (dep.admin && dep.admin.email === operator.email) {
            operator.role = dep.admin.role;
          }
        });
      }
    }
    $$rendered = `<div class="deps_div svelte-mkabf0" style="height: 100vh; overflow-y: scroll;">${each(cc_data, (dep, i) => {
      return `<br class="svelte-mkabf0"> ${validate_component(Dep, "Dep").$$render(
        $$result,
        {
          owner: dep.admin.email,
          operator,
          update: cc_data,
          RemoveDep,
          dep,
          tarif: tarif2,
          edited_display
        },
        {
          dep: ($$value) => {
            dep = $$value;
            $$settled = false;
          },
          tarif: ($$value) => {
            tarif2 = $$value;
            $$settled = false;
          },
          edited_display: ($$value) => {
            edited_display = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${edited_display ? `${operator.email === operator.abonent ? `<svg class="add_dep svelte-mkabf0" height="50" width="50" style="float:right"><title class="svelte-mkabf0">plus-circle</title><glyph glyph-name="plus-circle" unicode="" horiz-adv-x="50" class="svelte-mkabf0"></glyph><path d="M500.2 62.5c-241.8 0-437.7 195.89999999999998-437.7 437.3 0 241.8 195.89999999999998 437.7 437.7 437.7 241.40000000000003 0 437.3-195.89999999999998 437.3-437.7 0-241.40000000000003-195.89999999999998-437.3-437.3-437.3z m301.59999999999997 466.5c-0.6999999999999318 9-2.199999999999932 19.100000000000023-4.699999999999932 30.299999999999955h-237.70000000000005v237.80000000000007c-11.199999999999932 2.5-21.600000000000023 4.2999999999999545-31.399999999999977 5.100000000000023-9.700000000000045 0.6999999999999318-19.80000000000001 1.099999999999909-30.30000000000001 1.099999999999909-9 0-17.69999999999999-0.39999999999997726-26.69999999999999-1.099999999999909-9-0.7000000000000455-19.100000000000023-2.5-30.30000000000001-5.100000000000023v-237.70000000000005h-237.5c-2.5-11.199999999999932-4.299999999999983-21.699999999999932-5.099999999999994-31.399999999999977-0.6999999999999886-9.700000000000045-1.0999999999999943-19.80000000000001-1.0999999999999943-30.30000000000001 0-9 0.4000000000000057-17.69999999999999 1.0999999999999943-26.69999999999999 0.700000000000017-9 2.5-19.100000000000023 5.099999999999994-30.30000000000001h237.40000000000003v-237.5c11.199999999999989-2.5 21.599999999999966-4 31.399999999999977-4.699999999999989 9.699999999999989-1.0999999999999943 19.80000000000001-1.4000000000000057 30.30000000000001-1.4000000000000057 9 0 17.999999999999943 0.4000000000000057 26.69999999999999 1.4000000000000057 9 0.6999999999999886 19.100000000000023 2.1999999999999886 30.299999999999955 4.699999999999989v237.40000000000003h237.80000000000007c2.5 11.199999999999989 4 21.599999999999966 4.699999999999932 31.399999999999977 1.1000000000000227 9.699999999999989 1.400000000000091 19.80000000000001 1.400000000000091 30.30000000000001 0.09999999999990905 9.099999999999966-0.3000000000000682 18.099999999999966-1.400000000000091 26.69999999999999z" transform="scale(.04)" style="fill:lightgrey" class="svelte-mkabf0"></path></svg>` : ``}` : ``} <div class="empty svelte-mkabf0" style="height:200px"></div> </div>`;
  } while (!$$settled);
  $$unsubscribe_users();
  $$unsubscribe_langs();
  $$unsubscribe_signal();
  $$unsubscribe_pswd();
  $$unsubscribe_statust();
  return $$rendered;
});
const Tarif_svelte_svelte_type_style_lang = "";
const Landpage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { rtc } = $$props;
  let lang = "en";
  langs.subscribe((data) => {
    if (data)
      lang = data;
  });
  let txt = "Download Call Center";
  let dnld = "";
  let Dict;
  const unsubscribe = dicts.subscribe((data) => {
    if (data) {
      Dict = data;
      dnld = Dict.dict[txt][lang];
    }
  });
  onDestroy(unsubscribe);
  if ($$props.rtc === void 0 && $$bindings.rtc && rtc !== void 0)
    $$bindings.rtc(rtc);
  {
    if (lang && Dict && txt) {
      dnld = Dict.dict[txt][lang];
    }
  }
  return `<span ref="#">${escape(dnld)}</span> ${``}`;
});
class Peer {
  constructor(rtc, pc_config, pc_key) {
    this.con = new RTCPeerConnection(pc_config);
    this.rtc = rtc;
    this.pc_key = pc_key;
    this.params = {};
  }
  async SendDesc(desc) {
    let that2 = this;
    let par = {};
    par.proj = "kolmit";
    par.func = "call";
    par.abonent = that2.rtc.abonent;
    par.type = this.rtc.type;
    par.em = this.rtc.operator;
    par.uid = this.rtc.uid;
    par.desc = desc;
    par.status = "call";
    par.oper_uid = this.rtc.oper_uid;
    return await this.signch.SendMessage(par);
  }
  async SendCand(cand) {
    let that2 = this;
    let par = {};
    par.proj = "kolmit";
    par.func = "call";
    par.type = this.rtc.type;
    par.uid = this.rtc.uid;
    par.em = this.rtc.operator;
    par.cand = cand;
    par.status = "call";
    par.abonent = that2.rtc.abonent;
    par.oper_uid = this.rtc.oper_uid;
    return await this.signch.SendMessage(par);
  }
  async SendOffer(cand) {
    let par = {};
    par.proj = "kolmit";
    par.func = "offer";
    par.abonent = this.rtc.abonent;
    par.type = this.rtc.type;
    par.uid = this.rtc.uid;
    par.em = this.rtc.email;
    par.desc = this.params["loc_desc"];
    par.cand = this.params["loc_cand"];
    par.status = "offer";
    this.signch.SendMessage(par, (data) => {
      console.log(data);
    });
  }
  StartEvents() {
    let that2 = this;
    this.con.ontrack = function(ev) {
      if (that2.pc_key === "reserve") {
        return;
      }
      if (that2.rtc.GetRemoteAudio() !== ev.streams[0]) {
        that2.rtc.remoteStream = ev.streams[0];
        that2.rtc.remoteStream.onaddtrack = function(ev2) {
          console.log("addtrack in remote stream", that2);
        };
      }
      if (that2.rtc.remoteStream) {
        if (ev.track.kind === "audio") {
          that2.rtc.SetRemoteAudio(null);
          that2.rtc.SetRemoteAudio(that2.rtc.remoteStream);
        }
        if (ev.track.kind === "video") {
          that2.rtc.SetRemoteVideo(that2.rtc.remoteStream);
          that2.rtc.DC.SendDCVideoOK(() => {
          });
        }
      }
    };
    let timr;
    this.con.onicecandidate = (e) => {
      let that3 = this;
      if (e.candidate) {
        if (!this.params["loc_cand"])
          this.params["loc_cand"] = [];
        this.params["loc_cand"].push(e.candidate);
        if (!timr) {
          timr = setTimeout(() => {
            if (this.rtc.DC && this.rtc.DC.dc.readyState === "open") {
              let msg = "";
              if (this.rtc.type && this.rtc.type.offerToReceiveVideo === 1)
                msg = { confirm: "Do you mind to turn on the cameras?" };
              this.rtc.DC.SendDCOffer(that3.pc_key, msg);
              clearTimeout(timr);
            } else if (this.rtc.DC && this.rtc.DC.dc.readyState !== "open") {
              this.SendOffer(e.candidate);
              clearTimeout(timr);
            }
          }, 100);
        }
      }
    };
    this.con.oniceconnectionstatechange = function(e) {
      that2.rtc.onIceStateChange(that2, e);
    };
    this.con.onremovestream = function(e) {
    };
    this.con.onsignalingstatechange = function(e) {
    };
    this.con.onconnectionstatechange = function(e) {
      console.log();
    };
  }
  onCreateAnswerSuccess(desc) {
    let that2 = this;
    console.log("Answer from pcPull 2:", this);
    console.log("setLocalDescription start", that2);
    that2.con.setLocalDescription(desc).then(
      function() {
        that2.params["loc_desc"] = that2.con.localDescription;
        console.log("onSetLocalDescriptionSuccess", that2);
        that2.SendDesc(desc);
      },
      that2.onSetAnswerError
    );
  }
  setRemoteDesc(desc) {
    let that2 = this;
    console.log("setRemoteDescription start", that2);
    console.log("Peer connectionState:" + this.con.connectionState, that2);
    this.con.setRemoteDescription(desc).then(
      function() {
        that2.params["rem_desc"] = that2.con.remoteDescription;
        if (that2.con.remoteDescription.type === "offer") {
          that2.con.createAnswer().then(
            (desc2) => that2.onCreateAnswerSuccess(desc2),
            that2.onCreateAnswerError
          );
        }
      },
      function(error) {
        console.log("Failed to set remote description: " + error.toString(), this);
      }
    );
  }
  onCreateAnswerError(error) {
    console.log("Failed to create answer: " + error.toString(), this);
  }
  onCreateOfferSuccess(desc) {
    let that2 = this;
    console.log("Offer created", that2);
    console.log("setLocalDescription start", that2);
    that2.con.setLocalDescription(desc).then(
      function() {
        that2.params["loc_desc"] = that2.con.localDescription;
        console.log(" setLocalDescription complete", that2);
      },
      that2.onSetOfferError
    );
  }
  onCreateVideoOfferSuccess(desc, msg) {
    let that2 = this;
    console.log("Offer created", that2);
    console.log("setLocalDescription start", that2);
    that2.con.setLocalDescription(desc).then(
      function() {
        that2.params["loc_desc"] = that2.con.localDescription;
        console.log(" setLocalDescription complete", that2);
        that2.rtc.DC.SendDCDesc(desc, that2.pc_key);
      },
      that2.onSetOfferError
    );
  }
  onSetOfferError(error) {
    console.log("Failed to set offer: " + error.toString(), this);
  }
  onSetAnswerError(error) {
    console.log("Failed to set session description: " + error.toString(), this);
  }
  onAddIceCandidateSuccess(pc2) {
    console.log(" addIceCandidate success", this);
  }
  onAddIceCandidateError(pc2, error) {
    console.log(" failed to add ICE Candidate: " + error.toString(), this);
  }
  onCreateOfferError(error) {
    console.log("Failed to create session description: " + error.toString(), this);
  }
  onAddVideo(ev) {
    let that2 = this;
    let msg = "Do you mind to turn on the cameras?";
    if (that2.rtc.DC && that2.rtc.DC.dc.readyState === "open") {
      that2.rtc.DC.SendData({ "confirm": msg });
    }
  }
  onCreateSessionDescriptionError(ev) {
  }
  Cancel() {
    this.close();
  }
}
class DataChannel {
  constructor(rtc, pc2) {
    this.rtc = rtc;
    this.pc = pc2;
    this.call_num = 3;
    this.forward;
  }
  CreateDC() {
    this.dc = pc.con.createDataChannel(pc.pc_key + " data channel");
  }
}
const dc_msg = writable();
class DataChannelOperator extends DataChannel {
  constructor(rtc, pc2) {
    super(rtc, pc2);
    let that2 = this;
    that2.cnt_call = 0;
    this.dc = pc2.con.createDataChannel(pc2.pc_key + " data channel");
    this.dc.onopen = () => {
      if (that2.dc.readyState === "open") {
        console.log(that2.pc.pc_key + " datachannel open");
      }
      this.dc.onclose = () => {
      };
    };
    pc2.StartEvents();
    pc2.con.ondatachannel = (event) => {
      console.log("Receive Channel Callback");
      this.dc = event.channel;
    };
    let data = "";
    let receiveBuffer = [];
    let receivedSize = 0;
    this.dc.onmessage = function(event) {
      try {
        let parsed = JSON.parse(event.data);
        if (parsed.type === "eom") {
          if (data) {
            that2.rtc.OnMessage(JSON.parse(data), that2);
            dc_msg.set(JSON.parse(data));
          }
          data = "";
          return;
        }
        data += parsed.slice;
        if (parsed.file) {
        }
        if (parsed.type === "eof") {
          const received = new Blob(receiveBuffer);
          receiveBuffer = [];
          receivedSize = 0;
          if (confirm("Получен файл: " + parsed.file + ". Размер: " + parsed.length + " Сохранить?")) {
            let download_href = document.getElementById("download_href");
            download_href.text("Получен файл: " + parsed.file + ". Размер: " + parsed.length + " Сохранить?");
            download_href.attributes.href = "URL.createObjectURL(received)";
            download_href.attributes.download = parsed.file;
            download_href.click();
          }
          setTimeout(function() {
            document.getElementById("dataProgress").style.display = "none";
          }, 2e3);
          return;
        }
      } catch (ex) {
        data = "";
        if (!event.data.byteLength)
          return;
      }
    };
  }
  SendFile(data, name) {
    try {
      if (this.dc.readyState === "open") {
        let size = 16384;
        const numChunks = Math.ceil(data.byteLength / size);
        this.dc.send(JSON.stringify({ file: name, length: data.byteLength }), function(data2) {
          console.log(data2);
        });
        for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
          const slice = data.slice(o, o + size);
          document.getElementById("dataProgress").attributes.value = o + size;
          this.dc.send(slice, function(data2) {
            console.log(data2);
          });
        }
        setTimeout(function() {
          document.getElementById("dataProgress").style.display = "none";
        }, 2e3);
        this.dc.send(JSON.stringify({ type: "eof", file: name, length: data.byteLength }), function(data2) {
          console.log(data2);
        });
      }
    } catch (ex) {
      console.log(ex);
    }
  }
  SendData(data, cb) {
    try {
      if (this.dc.readyState === "open") {
        data = JSON.stringify(data);
        let size = 16384;
        const numChunks = Math.ceil(data.length / size);
        for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
          this.dc.send(JSON.stringify({ slice: data.substr(o, size) }));
        }
        this.dc.send(JSON.stringify({ type: "eom" }));
      }
      if (cb)
        cb();
    } catch (ex) {
      console.log(ex);
    }
  }
  // SendDCCnt(){
  //     let that = this;
  //     let par = {};
  //     par.proj = 'kolmit';
  //     par.uid = that.rtc.uid;
  //     par.func = 'cnt';
  //     par.call = that.rtc.call_num;
  //     par.type = that.rtc.type;
  //     par.email = that.rtc.email.from;
  //     par.profile = localStorage.getItem("kolmi_abonent");
  //     if(that.dc.readyState==='open') {
  //         that.SendData(par);
  //         //that.rtc.pcPull[that.rtc.main_pc].params['loc_cand'] = [];
  //     }
  //     that.rtc.PlayCallCnt();
  // }
  SendDCHangup(cb) {
    let par = {};
    par.proj = "kolmit";
    par.func = "mute";
    par.type = this.rtc.type;
    this.SendData(par, cb);
  }
  SendDCClose(cb) {
    let par = {};
    par.proj = "kolmit";
    par.func = "close";
    par.type = this.rtc.type;
    this.SendData(par, cb);
  }
  SendDCTalk(cb) {
    let par = {};
    par.proj = "kolmit";
    par.func = "talk";
    par.type = this.rtc.type;
    this.SendData(par, cb);
  }
  SendDCCand(cand, key, msg) {
    let par = {};
    par.proj = "kolmit";
    par.func = "offer";
    par.cand = cand;
    par.trans = key;
    par.abonent = this.rtc.abonent;
    par.msg = msg;
    this.SendData(par);
  }
  SendDCDesc(desc, key, msg) {
    let par = {};
    par.proj = "kolmit";
    par.func = "offer";
    par.desc = desc;
    par.trans = key;
    par.abonent = this.rtc.abonent;
    par.msg = msg;
    this.SendData(par);
  }
  SendDCOffer(key, msg) {
    let par = {};
    par.proj = "kolmit";
    par.func = "offer";
    par.desc = this.pc.params["loc_desc"];
    par.cand = this.pc.params["loc_cand"];
    par.trans = key;
    par.abonent = this.rtc.abonent;
    par.msg = msg;
    this.SendData(par);
  }
  SendDCVideoOK(cb) {
    let par = {};
    par.proj = "kolmit";
    par.func = "video";
    par.type = this.rtc.type;
    this.SendData(par, cb);
  }
  SendRedirect(abonent, resolve) {
    let par = {};
    par.proj = "kolmit";
    par.func = "redirect";
    par.abonent = abonent;
    if (this.dc.readyState === "open") {
      this.SendData(par);
      let date_str = (/* @__PURE__ */ new Date()).toLocaleString("es-CL");
      resolve(date_str);
    }
  }
}
class RTCBase {
  constructor(type, operator) {
    this.type = type;
    this.abonent = operator.abonent;
    this.email = operator.email;
    this.role = operator.role;
    this.psw = operator.psw;
    this.uid = md5(JSON.stringify(Date.now()) + operator.email);
    this.pcPull = {};
    this.main_pc;
    this.url;
    this.localStream;
    this.remoteStream;
    this.startTime;
    this.phone = "";
  }
  SendVideoOffer(key) {
    this.pcPull[key].params["loc_desc"] = "";
    this.pcPull[key].params["loc_cand"] = "";
    this.pcPull[key].con.createOffer(
      this.mode = {
        offerToReceiveAudio: 1,
        offerToReceiveVideo: 1,
        iceRestart: 1
      }
    ).then(
      (desc) => this.pcPull[key].onCreateVideoOfferSuccess(desc),
      this.pcPull[key].onCreateOfferError
    );
  }
  onIceStateChange(pc2, event) {
    if (pc2 && pc2.con) {
      if (pc2.con.iceConnectionState === "new") {
        console.log(pc2.pc_key + " ICE state change event: new", this);
      }
      if (pc2.con.iceConnectionState === "checking") {
        console.log(pc2.pc_key + " ICE state change event: checking", this);
        this.checking_tmr = setTimeout(() => {
          pc2.con.restartIce();
        }, 5e3);
      }
      if (pc2.con.iceConnectionState === "disconnected") {
        console.log(pc2.pc_key + " ICE state change event: disconnected", this);
        pc2.con.restartIce();
      }
      if (pc2.con.iceConnectionState === "connected") {
        clearTimeout(this.checking_tmr);
        console.log(pc2.pc_key + " ICE state change event: connected", this);
        this.main_pc = pc2.pc_key;
      }
      if (pc2.con.iceConnectionState === "failed") {
        console.log(pc2.pc_key + " ICE state change event: failed", this);
        pc2.con.restartIce();
      }
      if (pc2.con.iceConnectionState === "completed") {
        console.log(pc2.pc_key + " ICE state change event: completed", this);
      }
      console.log(pc2.pc_key + " ICE state change event: " + event.type, this);
    }
  }
  TransFile() {
    async function handleFileInputChange() {
      const file = this.fileInput.files[0];
      if (!file) {
        console.log("No file chosen");
      }
      if (file.size === 0) {
        return;
      }
      dataProgress.style.display = "block";
      dataProgress.attributes.max = file.size;
      let fileReader = new FileReader();
      fileReader.onload = (e) => {
        console.log("FileRead.onload ", e);
        this.DC.SendFile(e.target.result, file.name);
      };
      fileReader.readAsArrayBuffer(file);
    }
    this.fileInput.removeEventListener("change", this.fileInput.onchange);
    this.fileInput.onchange = handleFileInputChange;
    this.fileInput.dispatchEvent(new Event("click"));
  }
  GetUserMedia(opts, cb) {
    navigator.mediaDevices.getUserMedia(opts).then((stream) => this.gotStream(stream, cb)).catch(function(e) {
      if (e.name === "NotFoundError" || e.name === "NotReadableError") {
        if (opts.audio)
          alert("Something wrong with mic?");
        if (opts.video)
          alert("Something wrong with camera?");
        cb(false);
      }
    });
  }
  get RemoteStream() {
    return this.remoteStream;
  }
  async InitRTC(pc_key, cb) {
    this.conf = await (await fetch("./src/lib/ice_conf.json")).json();
    let pc_config = {
      iceTransportPolicy: "all",
      lifetimeDuration: this.conf.lifetimeDuration,
      rtcpMuxPolicy: "require",
      bundlePolicy: "balanced",
      iceServers: [
        this.conf.stun,
        this.conf.turn
      ]
    };
    if (this.pcPull[pc_key]) {
      if (this.DC && this.DC.dc) {
        this.DC.dc.close();
        this.DC = null;
      }
      if (this.pcPull[pc_key].con) {
        this.pcPull[pc_key].con.close();
        this.pcPull[pc_key].con = null;
      }
    }
    let params = {};
    this.pcPull[pc_key] = null;
    this.pcPull[pc_key] = new Peer(this, pc_config, pc_key);
    this.pcPull[pc_key].signch = this.signch;
    this.pcPull[pc_key].params = params;
    this.DC = new DataChannelOperator(this, this.pcPull[pc_key]);
    this.startTime = Date.now();
    cb();
  }
  gotStream(stream, cb) {
    if (!this.localStream)
      this.localStream = stream;
    this.getTracks(stream, cb);
  }
  getTracks(stream, cb) {
    stream.getTracks().forEach((track) => {
      for (let key in this.pcPull) {
        if (key === "reserve")
          continue;
        if (this.pcPull[key].con.iceConnectionState === "disconnected" || this.pcPull[key].con.iceConnectionState === "closed")
          continue;
        this.localStream.addTrack(track);
        this.pcPull[key].sender = this.pcPull[key].con.addTrack(
          track,
          this.localStream
        );
        if (track.kind === "video") {
          this.SetLocalVideo(this.localStream);
        } else if (track.kind === "audio")
          ;
      }
    });
    var videoTracks = this.localStream.getVideoTracks();
    var audioTracks = this.localStream.getAudioTracks();
    if (videoTracks.length > 0) {
      console.log("Using video device: " + videoTracks[0].label, this);
    }
    if (audioTracks.length > 0) {
      console.log("Using audio device: " + audioTracks[0].label, this);
    }
    cb(true);
  }
  RemoveTracks() {
    if (this.localStream) {
      const videoTracks = this.localStream.getVideoTracks();
      videoTracks.forEach((videoTrack) => {
        if (videoTrack.readyState == "live" && videoTrack.kind === "video") {
          videoTrack.stop();
        }
        this.localStream.removeTrack(videoTrack);
      });
      const audioTracks = this.localStream.getAudioTracks();
      audioTracks.forEach((audioTrack) => {
        if (audioTrack.readyState == "live" && audioTrack.kind === "audio") {
          audioTrack.stop();
        }
        this.localStream.removeTrack(audioTrack);
      });
    }
  }
}
class RTCOperator extends RTCBase {
  constructor(type, operator, signch) {
    super(type, operator);
    this.signch = signch;
    this.checking_tmr;
  }
  Init(cb) {
    let that2 = this;
    this.mode = "";
    let transAr = [that2.abonent];
    that2.main_pc = "";
    for (let i in transAr) {
      that2.InitRTC(transAr[i], function() {
        cb();
      });
    }
  }
  SendOffer(key) {
    let that2 = this;
    that2.pcPull[key].params["loc_desc"] = "";
    that2.pcPull[key].params["loc_cand"] = "";
    that2.pcPull[key].con.createOffer(
      this.mode = {
        offerToReceiveAudio: 1,
        offerToReceiveVideo: 1,
        // test 0
        iceRestart: 1
      }
    ).then(
      (desc) => that2.pcPull[key].onCreateOfferSuccess(desc),
      that2.pcPull[key].onCreateOfferError
    );
  }
  ChooseTarif(tarif2) {
    let par = {};
    par.proj = "kolmit";
    par.func = "tarif";
    par.em = this.email;
    par.tarif = tarif2;
    par.psw = this.psw;
    return new Promise((resolve, reject) => {
      this.signch.SendMessage(par, (data) => {
        resolve(data);
      });
    });
  }
  SendStatus(status) {
    let par = {};
    par.proj = "kolmit";
    par.func = "status";
    par.type = this.type;
    par.abonent = this.abonent;
    par.uid = this.uid;
    par.em = this.email;
    par.status = status;
    this.status = status;
    return new Promise((resolve, reject) => {
      this.signch.SendMessage(par, (data) => {
        resolve(data);
      });
    });
  }
  SendVideoOffer(key) {
    let that2 = this;
    that2.pcPull[key].params["loc_desc"] = "";
    that2.pcPull[key].params["loc_cand"] = "";
    that2.pcPull[key].con.createOffer(
      that2.mode = {
        offerToReceiveAudio: 1,
        offerToReceiveVideo: 1,
        iceRestart: 1
      }
    ).then(
      (desc) => that2.pcPull[key].onCreateVideoOfferSuccess(desc),
      that2.pcPull[key].onCreateOfferError
    );
  }
  async Offer() {
    this.Init(async () => {
      if (this.pcPull[this.abonent].con.signalingState !== "closed") {
        this.GetUserMedia({ audio: 1, video: 0 }, () => {
          this.SendOffer(this.abonent);
        });
      }
    });
  }
  OnActive() {
    this.Init(() => {
      if (this.pcPull[this.abonent].con.signalingState !== "closed") {
        this.GetUserMedia({ audio: 1, video: 0 }, (res) => {
          if (res) {
            this.SendOffer(this.abonent);
          }
        });
      }
    });
  }
  OnCall() {
    if (this.DC) {
      clearInterval(this.DC.inter);
    }
    this.SendStatus("call");
  }
  OnTalk() {
    if (this.DC.dc) {
      this.DC.SendDCTalk();
    }
    this.SendStatus("talk");
    console.log();
  }
  OnMute() {
    this.RemoveTracks();
    if (this.DC)
      this.DC.SendDCHangup(() => {
      });
  }
  OnInactive() {
    this.RemoveTracks();
    if (this.DC.dc.readyState === "open" || this.DC.dc.readyState === "connecting") {
      this.DC.SendDCHangup(() => {
        this.DC.dc.close();
        this.SendStatus("close");
      });
    }
  }
  OnMessage(data) {
    let that2 = this;
    msg_1.set(data);
    if (data.func === "call")
      ;
    if (data.func === "mute") {
      this.RemoveTracks();
    }
    if (data.func === "talk") {
      clearInterval(that2.DC.inter);
    }
    if (data.func === "redirect")
      ;
    if (data.func === "video")
      ;
    if (data.desc) {
      if (that2.pcPull[data.abonent].con && (that2.pcPull[data.abonent].con.connectionState === "failed" || that2.pcPull[data.abonent].con.connectionState === "disconnected"))
        that2.pcPull[data.abonent].con.restartIce();
      if (that2.pcPull[data.abonent]) {
        that2.pcPull[data.abonent].params["rem_desc"] = data.desc;
        that2.pcPull[data.abonent].setRemoteDesc(data.desc);
        that2.PlayCallCnt();
      }
    }
    if (data.cand) {
      if (that2.pcPull[data.abonent]) {
        if (!that2.pcPull[data.abonent].con || that2.pcPull[data.abonent].con.signalingState === "closed") {
          return;
        }
        try {
          that2.pcPull[data.abonent].params["rem_cand"] = data.cand;
          if (Array.isArray(data.cand)) {
            for (let c in data.cand) {
              that2.pcPull[data.abonent].con.addIceCandidate(data.cand[c]);
            }
          } else {
            that2.pcPull[data.abonent].con.addIceCandidate(data.cand);
          }
        } catch (ex) {
          log(ex);
        }
      }
    }
  }
}
const CallButtonOperator_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "[status='call'].svelte-xpesuu.svelte-xpesuu{transform:rotate(0deg) !important;animation-iteration-count:infinite}[status='call'].svelte-xpesuu g.svelte-xpesuu{fill:orange\r\n    }[status='talk'].svelte-xpesuu.svelte-xpesuu{transform:rotate(0deg) !important}[status='talk'].svelte-xpesuu g.svelte-xpesuu{fill:green\r\n    }[status='muted'].svelte-xpesuu.svelte-xpesuu{transform:rotate(120deg) !important;color:#232323}[status='inactive'].svelte-xpesuu.svelte-xpesuu{color:#dea677;transform:rotate(120deg)}[status='inactive'].svelte-xpesuu g.svelte-xpesuu{fill:grey}[status='active'].svelte-xpesuu.svelte-xpesuu{transform:rotate(120deg);color:black;opacity:1}[status='active'].svelte-xpesuu g.svelte-xpesuu{fill:orange}[status='busy'].svelte-xpesuu.svelte-xpesuu{transform:rotate(120deg);opacity:0.3;color:indianred}@keyframes svelte-xpesuu-shake{0%{transform:translate(1px, 1px) rotate(0deg)}10%{transform:translate(-1px, -2px) rotate(-1deg)}20%{transform:translate(-3px, 0px) rotate(1deg)}30%{transform:translate(3px, 2px) rotate(0deg)}40%{transform:translate(1px, -1px) rotate(1deg)}50%{transform:translate(-1px, 2px) rotate(-1deg)}60%{transform:translate(-3px, 1px) rotate(0deg)}70%{transform:translate(3px, 1px) rotate(-1deg)}80%{transform:translate(-1px, -1px) rotate(1deg)}90%{transform:translate(1px, 2px) rotate(0deg)}100%{transform:translate(1px, -2px) rotate(-1deg)}}",
  map: null
};
const CallButtonOperator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { status = "inactive" } = $$props;
  let { OnLongPress: OnLongPress2 } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.OnLongPress === void 0 && $$bindings.OnLongPress && OnLongPress2 !== void 0)
    $$bindings.OnLongPress(OnLongPress2);
  $$result.css.add(css$2);
  return `<div class="callObject" style="display: block;"><svg class="callButton svelte-xpesuu"${add_attribute("status", status, 0)} width="50" height="50" style="position:absolute;left:0px;top:5px;z-index: 30;"><g class="currentLayer svelte-xpesuu" style="stroke:lightgrey; stroke-width:10px"><title>Layer 1</title><path d="M390.7 353.3c-120.30000000000001 69.5 63.19999999999999 413.59999999999997 194.90000000000003 337.59999999999997l122.10000000000002 211.39999999999998c-55.60000000000002 32.10000000000002-102.5 52.30000000000007-166.9000000000001 15.5-178.79999999999995-102.19999999999993-375.59999999999997-442.9-369.99999999999994-646.0999999999999 1.8999999999999773-70.60000000000005 43.599999999999994-98.30000000000004 97.89999999999998-129.70000000000005 23.30000000000001 40.400000000000006 98.60000000000002 170.8 122 211.3z m50.400000000000034-5.699999999999989c-13 7.5-29.700000000000045 3.099999999999966-37.30000000000001-10l-115-199.3c-7.5-13.000000000000014-3.1000000000000227-29.700000000000017 10-37.30000000000001l60.5-34.900000000000006c13-7.499999999999993 29.69999999999999-3.0999999999999943 37.30000000000001 10l115.09999999999997 199.29999999999998c7.500000000000057 13 3.099999999999966 29.700000000000045-10 37.200000000000045l-60.599999999999966 35z m314.4 544.5c-13 7.5-29.700000000000045 3.1000000000000227-37.299999999999955-10l-115-199.30000000000007c-7.5-13-3.1000000000000227-29.699999999999932 10-37.299999999999955l60.5-34.89999999999998c13-7.5 29.699999999999932-3.1000000000000227 37.299999999999955 10l115.10000000000002 199.29999999999995c7.5 13 3.1000000000000227 29.700000000000045-10 37.30000000000007l-60.60000000000002 34.89999999999998z" id="svg_1" class="selected" transform="scale(.04)"></path></g></svg>  </div>`;
});
const BurgerButton_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "button.svelte-15ez1si.svelte-15ez1si{position:absolute;right:10px;top:0px;margin:5px;z-index:100;background-color:Transparent;background-repeat:no-repeat;border:none;cursor:pointer;overflow:hidden;outline:none}svg.svelte-15ez1si line.svelte-15ez1si{stroke:currentColor;stroke-width:3}.open.svelte-15ez1si #top.svelte-15ez1si{transform:translate(8px, 0px) rotate(45deg)\r\n    }.open.svelte-15ez1si #mid.svelte-15ez1si{opacity:0\r\n    }.open.svelte-15ez1si #bot.svelte-15ez1si{transform:translate(-15px, 8px) rotate(-45deg)\r\n    }",
  map: null
};
const BurgerButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open } = $$props;
  let { duration } = $$props;
  let { burgerColor } = $$props;
  let { menuColor } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.burgerColor === void 0 && $$bindings.burgerColor && burgerColor !== void 0)
    $$bindings.burgerColor(burgerColor);
  if ($$props.menuColor === void 0 && $$bindings.menuColor && menuColor !== void 0)
    $$bindings.menuColor(menuColor);
  $$result.css.add(css$1);
  return `<button style="${"position:fixed;transition: color " + escape(duration, true) + "s ease-in-out; color: " + escape(open ? menuColor : burgerColor, true) + ";"}" class="${["svelte-15ez1si", open ? "open" : ""].join(" ").trim()}"><svg width="26" height="26" class="svelte-15ez1si"><line id="top" x1="0" y1="8" x2="26" y2="8" style="${"transition: transform " + escape(duration, true) + "s ease-in-out, opacity " + escape(duration, true) + "s ease-in-out;"}" class="svelte-15ez1si"></line><line id="mid" x1="0" y1="16" x2="26" y2="16" style="${"transition: transform " + escape(duration, true) + "s ease-in-out, opacity " + escape(duration, true) + "s ease-in-out;"}" class="svelte-15ez1si"></line><line id="bot" x1="0" y1="24" x2="26" y2="24" style="${"transition: transform " + escape(duration, true) + "s ease-in-out, opacity " + escape(duration, true) + "s ease-in-out;"}" class="svelte-15ez1si"></line></svg> </button>`;
});
const SideMenu_svelte_svelte_type_style_lang = "";
const css = {
  code: "#container.svelte-1229l7u{position:absolute;height:100vh;top:0px;overflow-y:auto}#menu.svelte-1229l7u{text-align:left}",
  map: null
};
const SideMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open } = $$props;
  let { duration } = $$props;
  let { width } = $$props;
  let { padding } = $$props;
  let { paddingTop } = $$props;
  let { backgroundColor } = $$props;
  let { menuColor } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.paddingTop === void 0 && $$bindings.paddingTop && paddingTop !== void 0)
    $$bindings.paddingTop(paddingTop);
  if ($$props.backgroundColor === void 0 && $$bindings.backgroundColor && backgroundColor !== void 0)
    $$bindings.backgroundColor(backgroundColor);
  if ($$props.menuColor === void 0 && $$bindings.menuColor && menuColor !== void 0)
    $$bindings.menuColor(menuColor);
  $$result.css.add(css);
  return `<div id="container" style="${"position:fixed;z-index:1;background-color: " + escape(backgroundColor, true) + "; color: " + escape(menuColor, true) + "; width: " + escape(width, true) + "; right: " + escape(open ? "0px" : "-" + (parseInt(width) + 10) + "px", true) + "; transition: right " + escape(duration, true) + "s ease-in-out"}" class="svelte-1229l7u"><div id="menu" style="${"padding: " + escape(padding, true) + "; padding-top: " + escape(paddingTop, true) + ";"}" class="svelte-1229l7u">${slots.default ? slots.default({}) : ``}</div></div>`;
});
const BurgerMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  let { duration = 0.4 } = $$props;
  let { width = "250px" } = $$props;
  let { padding = "20px" } = $$props;
  let { paddingTop = "50px" } = $$props;
  let { backgroundColor = "rgb(250, 250, 250)" } = $$props;
  let { burgerColor = "rgb(18.4, 18.4, 18.4)" } = $$props;
  let { menuColor = "rgb(180, 180, 180)" } = $$props;
  let burgerProps = { duration, burgerColor, menuColor };
  let menuProps = {
    duration,
    width,
    padding,
    paddingTop,
    backgroundColor,
    menuColor
  };
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.paddingTop === void 0 && $$bindings.paddingTop && paddingTop !== void 0)
    $$bindings.paddingTop(paddingTop);
  if ($$props.backgroundColor === void 0 && $$bindings.backgroundColor && backgroundColor !== void 0)
    $$bindings.backgroundColor(backgroundColor);
  if ($$props.burgerColor === void 0 && $$bindings.burgerColor && burgerColor !== void 0)
    $$bindings.burgerColor(burgerColor);
  if ($$props.menuColor === void 0 && $$bindings.menuColor && menuColor !== void 0)
    $$bindings.menuColor(menuColor);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(BurgerButton, "BurgerButton").$$render(
      $$result,
      Object.assign({}, burgerProps, { open }),
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(SideMenu, "SideMenu").$$render(
      $$result,
      Object.assign({}, menuProps, { open }),
      {
        open: ($$value) => {
          open = $$value;
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
const Video_local = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { display = "block" } = $$props;
  let { srcObject = "" } = $$props;
  if ($$props.display === void 0 && $$bindings.display && display !== void 0)
    $$bindings.display(display);
  if ($$props.srcObject === void 0 && $$bindings.srcObject && srcObject !== void 0)
    $$bindings.srcObject(srcObject);
  return `<video id="localVideo" autoplay playsinline muted style="${"display: " + escape(display, true) + "; position:absolute; top:0px; width:130%; height: 100px; z-index: 20;"}"></video> ${slots.footer ? slots.footer({}) : ``}`;
});
const Video_remote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { display = "none" } = $$props;
  let { poster } = $$props;
  let { srcObject } = $$props;
  if ($$props.display === void 0 && $$bindings.display && display !== void 0)
    $$bindings.display(display);
  if ($$props.poster === void 0 && $$bindings.poster && poster !== void 0)
    $$bindings.poster(poster);
  if ($$props.srcObject === void 0 && $$bindings.srcObject && srcObject !== void 0)
    $$bindings.srcObject(srcObject);
  return ` <video id="remoteVideo" autoplay playsinline${add_attribute("poster", poster, 0)} style="${"display:" + escape(display, true) + "; position: absolute; height: 105px; background-color: white; max-width: 12%; z-index: 10;"}"><track kind="captions"></video> ${slots.default ? slots.default({}) : ``}`;
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
  let { display = "none" } = $$props;
  if ($$props.display === void 0 && $$bindings.display && display !== void 0)
    $$bindings.display(display);
  return `<video class="recordedVideo" autoplay muted style="${"display:" + escape(display, true)}"></video>`;
});
function OnLongPress() {
  select.display = true;
}
const Operator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $langs, $$unsubscribe_langs;
  let $dicts, $$unsubscribe_dicts;
  $$unsubscribe_langs = subscribe(langs, (value) => $langs = value);
  $$unsubscribe_dicts = subscribe(dicts, (value) => $dicts = value);
  let callcenter;
  let window = globalThis;
  let dict = $dicts;
  let { tarif: tarif2 } = $$props;
  if (tarif2 && tarif2.paid) {
    new Date(tarif2.paid) > Date.now();
  }
  let call_cnt, status, inter;
  let video_button_display = false;
  let edited_display = false;
  editable.subscribe((data) => {
    edited_display = data;
  });
  let { operator = {} } = $$props;
  operator.lang = $langs;
  let lang = $langs;
  msg_1.subscribe((data) => {
    console.log();
    if (data)
      OnMessage(data);
  });
  dc_msg.subscribe((data) => {
    if (data)
      OnMessage(data);
  });
  let container;
  let psw = operator.psw;
  pswd.set(psw);
  const us_signal = signal.subscribe((signalch) => {
    if (signalch) {
      window.rtc = new RTCOperator("operator", operator, signalch);
      initRTC();
    }
  });
  onDestroy(us_signal);
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
  setContext("operator", { getOperator: () => globalThis });
  async function initRTC() {
    window.rtc.PlayCallCnt = () => {
      call_cnt = 10;
      local.audio.paused = false;
      inter = setInterval(
        function() {
          call_cnt--;
          if (call_cnt === 0) {
            clearInterval(inter);
            local.audio.paused = true;
          }
        },
        2e3
      );
    };
    window.rtc.GetRemoteAudio = () => {
      return remote.audio.srcObject;
    };
    window.rtc.SetRemoteAudio = (src) => {
      if (src)
        remote.audio.srcObject = src;
    };
    window.rtc.GetRemoteVideo = () => {
      return remote.video.srcObject;
    };
    window.rtc.SetLocalVideo = (src) => {
      if (src)
        local.video.srcObject = src;
    };
    window.rtc.SetRemoteVideo = (src) => {
      if (status === "talk") {
        remote.video.poster = "";
        remote.video.srcObject = src;
        remote.video.display = "block";
        local.audio.paused = true;
      }
    };
  }
  function OnClickCallButton() {
    try {
      if (!window.AudioContext) {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        let audioCtx = new AudioContext();
        window.rtc.localSoundSrc = audioCtx.createMediaElementSource(window.user.localSound);
        window.rtc.localSoundSrc.connect(audioCtx.destination);
      }
    } catch (ex) {
      log("Web Audio API is not supported in this browser");
    }
    console.log();
    switch (status) {
      case "inactive":
        window.rtc.Offer();
        status = "active";
        break;
      case "active":
        status = "inactive";
        window.rtc.OnInactive();
        break;
      case "call":
        status = "talk";
        clearInterval(inter);
        local.audio.paused = true;
        remote.audio.muted = false;
        window.rtc.OnTalk();
        video_button_display = true;
        remote.text.display = "block";
        const event = new Event("talk");
        document.getElementsByTagName("body")[0].dispatchEvent(event);
        break;
      case "talk":
        window.rtc.OnInactive();
        remote.audio.muted = true;
        local.video.display = "none";
        video_button_display = false;
        remote.video.display = "none";
        remote.video.srcObject = "";
        remote.video.poster = "";
        remote.text.display = "none";
        remote.text.name = "";
        remote.text.email = "";
        status = "inactive";
        break;
      case "muted":
        status = "inactive";
        local.video.srcObject = "";
        remote.audio.muted = true;
        remote.video.display = "none";
        remote.video.srcObject = "";
        remote.video.poster = "";
        remote.text.display = "none";
        window.rtc.OnInactive();
        break;
      default:
        return;
    }
  }
  function OnMessage(data, resolve) {
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
      window.rtc.OnInactive();
      if (status === "talk") {
        status = "inactive";
      } else if (status === "call") {
        status = "inactive";
        window.rtc.OnMute();
        OnClickCallButton();
      }
      if (resolve)
        resolve();
    }
    if (data.call || data.func === "call") {
      status = "call";
      window.rtc.OnCall();
      remote.text.display = "block";
      if (data.profile) {
        let profile = JSON.parse(data.profile);
        let avatar = profile.src;
        remote.video.poster = avatar;
        if (avatar)
          remote.video.display = "block";
        remote.text.name = profile.name;
        remote.text.email = profile.email;
      }
    }
    if (data.desc)
      ;
    if (data.camera) {
      local.video.src = that.localStream;
    }
    if (data.status === "wait") {
      remote.text.display = "block", remote.text.msg = "You have a waiting call";
    }
  }
  if ($$props.tarif === void 0 && $$bindings.tarif && tarif2 !== void 0)
    $$bindings.tarif(tarif2);
  if ($$props.operator === void 0 && $$bindings.operator && operator !== void 0)
    $$bindings.operator(operator);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      statust.set(status);
    }
    $$rendered = `<div style="display:flex; min-height:120px; flex-wrap: nowrap;justify-content: space-between;"><div style="flex:1">${validate_component(Video_remote, "VideoRemote").$$render($$result, Object.assign({}, remote.video), {}, {})} ${validate_component(CallButtonOperator, "CallButton").$$render(
      $$result,
      { OnLongPress, status },
      {
        status: ($$value) => {
          status = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `  <b class="call_cnt" style="display:none;position: absolute;left:22px;top:10px;color:#0e0cff;font-size: 12px;" data-svelte-h="svelte-c2ioih">100</b> <span class="badge badge-primary badge-pill call-queue" style="display:none;position: absolute;right:0px;bottom:0px;color:#0e0cff;font-size: 12px;opacity:1" data-svelte-h="svelte-k0969a">0</span>`;
        }
      }
    )} <div style="${"display:" + escape(remote.text.display, true) + "; position: absolute; z-index: 10; background-color: rgba(125, 125, 125, 0.8); top: 90px; left: 2px;"}"><p style="font-size: .7em; white-space: nowrap; color:white;margin:auto;text-align: center;">${escape(remote.text.msg)} <br> ${escape(remote.text.name)}</p> </div></div> <div style="position:absolute;flex:1 1 0%">${validate_component(Video_local, "VideoLocal").$$render($$result, Object.assign({}, local.video), {}, {
      footer: () => {
        return `<div${add_attribute("this", container, 0)}></div>`;
      }
    })} ${video_button_display ? `<div class="video" style="position: absolute;top: 0;width: 100px; height:100px;"><svg height="30" width="30" style="position: absolute; bottom: 70px; right: 0px; z-index: 30;"><glyph glyph-name="ui-video-chat" unicode="" horiz-adv-x="50"></glyph><g class="currentLayer" style="position: absolute; right: 0; top: 0; stroke:grey; stroke-width:2px;fill:lightgrey;font-size: 30px;"><path d="M891.5 23h-783c-59.7 0-108.5 48.8-108.5 108.5v466.20000000000005c0 59.59999999999991 48.8 108.5 108.5 108.5h222.39999999999998v270.5999999999999l270.70000000000005-270.5999999999999h289.9c59.700000000000045 0 108.5-48.90000000000009 108.5-108.5v-466.20000000000005c0-59.7-48.799999999999955-108.5-108.5-108.5z m-223.5 370l-252.8 134.70000000000005c-26.30000000000001 14-47.89999999999998 1.099999999999909-47.89999999999998-28.700000000000045v-262.9c0-29.900000000000034 21.599999999999966-42.80000000000001 47.89999999999998-28.80000000000001l252.8 134.7c26.299999999999955 14 26.299999999999955 37 0 51z" transform="scale(.03)" style="fill:lightgrey; stroke:black; stroke-width:20px"></path></g></svg> </div>` : ``}</div> <div style="flex:3">${validate_component(Audio_local, "AudioLocal").$$render(
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
    )} ${validate_component(RecordedVideo, "RecordedVideo").$$render($$result, {}, {}, {})} ${validate_component(Download, "Download").$$render($$result, {}, {}, {})}</div> ${validate_component(BurgerMenu, "BurgerMenu").$$render($$result, { padding: "25px" }, {}, {
      default: () => {
        return `  ${escape(dict["Language Select"][lang])}:
                 <div style="display: flex; margin-bottom:20px"><label style="flex:1"><input type="radio" name="lang"${add_attribute("value", "en", 0)}${"en" === lang ? add_attribute("checked", true, 1) : ""}> <img src="https://www.sic-info.org/wp-content/uploads/2014/01/gb.png" alt="English"></label> <label style="flex:1"><input type="radio" name="lang"${add_attribute("value", "fr", 0)}${"fr" === lang ? add_attribute("checked", true, 1) : ""}> <img src="https://www.sic-info.org/wp-content/uploads/2014/01/fr.png" alt="French"></label> <label style="flex:1"><input type="radio" name="lang"${add_attribute("value", "ru", 0)}${"ru" === lang ? add_attribute("checked", true, 1) : ""}> <img src="https://www.sic-info.org/wp-content/uploads/2014/01/ru.png" alt="Russian"></label></div> ${operator ? `${!edited_display ? `<h5>${escape(dict["Edit Call Center"][lang])}</h5>` : `<h5>${escape(dict["Cancel Edit Call Center"][lang])}</h5>`}` : ``} ${dict && operator.email !== operator.abonent ? `<h5>${escape(dict["Create my own net"][lang])}</h5>` : ``}`;
      }
    })}</div> <progress id="dataProgress"${add_attribute("value", progress.value, 0)} max="100" duration="200" style="${"display:" + escape(progress.display, true) + ";top:100px;width:98%;z-index:10"}"></progress> ${(!tarif2 || tarif2.name === "free") && !operator.abonent ? `${validate_component(Landpage, "Landpage").$$render($$result, { tarif: tarif2 }, {}, {})}` : `${validate_component(Callcenter, "Callcenter").$$render(
      $$result,
      {
        tarif: tarif2,
        psw,
        this: callcenter,
        status,
        operator
      },
      {
        this: ($$value) => {
          callcenter = $$value;
          $$settled = false;
        },
        status: ($$value) => {
          status = $$value;
          $$settled = false;
        },
        operator: ($$value) => {
          operator = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}`;
  } while (!$$settled);
  $$unsubscribe_langs();
  $$unsubscribe_dicts();
  return $$rendered;
});
let tarif = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let data_dict = data.dict;
  dicts.set(data_dict);
  let operator = {};
  let usrs = [];
  operator.abonent = $page.url.searchParams.get("abonent");
  operator.email = $page.url.searchParams.get("operator");
  operator.psw = $page.url.searchParams.get("psw") ? md5($page.url.searchParams.get("psw")) : "";
  operator.lang = $page.url.searchParams.get("lang");
  langs.set(operator.lang);
  async function GetUsers() {
    let par = {};
    par.proj = "kolmit";
    par.func = "getusers";
    par.abonent = operator.abonent;
    par.em = operator.email;
    par.psw = operator.psw;
    fetch("/api/edit_cc/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // 'Content-Type': 'application/x-www-form-urlencoded',
      body: JSON.stringify({ par })
    }).then(async (res) => {
      const data2 = await res;
      const json = await data2.json();
      console.log("data");
      users.set(json.rows.users);
      usrs = json.rows.users;
    });
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.GetUsers === void 0 && $$bindings.GetUsers && GetUsers !== void 0)
    $$bindings.GetUsers(GetUsers);
  $$unsubscribe_page();
  return `<div>${usrs.length > 0 ? `<div>${validate_component(Operator, "Operator").$$render($$result, { operator, tarif, data_dict }, {}, {})}</div>` : ``}</div>`;
});
export {
  Page as default
};
