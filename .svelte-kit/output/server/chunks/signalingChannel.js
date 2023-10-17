import { c as create_ssr_component, a as add_attribute, e as escape, b as each, v as validate_component, s as setContext } from "./ssr.js";
import { s as subscribe, a as set_store_value } from "./utils.js";
import "blueimp-load-image/js/load-image.js";
import "blueimp-load-image/js/load-image-scale.js";
import { p as posterst, a as signal, u as users, m as msg_signal_user, l as langs, e as editable, d as dicts, b as statust, s as server_path, c as msg_signal_oper, v as view } from "./stores.js";
import md5 from "md5";
import pkg from "lodash";
import { w as writable } from "./index2.js";
import "cookie";
import "translate";
const operator_svg = "/_app/immutable/assets/operator.7238a518.svg";
const SelectMenu_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".collapsible.svelte-82r0yg{position:absolute;right:0;background-color:rgb(158, 158, 158);color:white;cursor:pointer;padding:1px;max-width:105px;border:none;outline:none}.content.svelte-82r0yg{position:absolute;right:0;padding:0px 18px;max-width:100px;max-height:0;overflow:hidden;transition:max-height 0.2s ease-out;background-color:#f1f1f1}",
  map: null
};
const SelectMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let options;
  let content;
  let { lang = "en" } = $$props;
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
      alt: "Русский"
    }
  ];
  let selected = {
    id: 0,
    src: "https://www.sic-info.org/wp-content/uploads/2014/01/gb.png",
    alt: "English"
  };
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  $$result.css.add(css$7);
  return `<button class="button collapsible svelte-82r0yg"><div style="padding:10px"><img${add_attribute("src", selected.src, 0)} alt="">${escape(selected.alt)}</div></button> <div class="content svelte-82r0yg"${add_attribute("this", content, 0)}>${options ? `${each(options, (opt) => {
    return `  <div style="padding:10px"><img${add_attribute("src", opt.src, 0)} alt=""${add_attribute("value", opt.id, 0)}>${escape(opt.alt)} </div>`;
  })}` : ``} </div>`;
});
const icofont_min$1 = "";
let display = "block";
const Video_local = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $posterst, $$unsubscribe_posterst;
  $$unsubscribe_posterst = subscribe(posterst, (value) => $posterst = value);
  let { srcObject = "" } = $$props;
  let lv;
  if ($$props.srcObject === void 0 && $$bindings.srcObject && srcObject !== void 0)
    $$bindings.srcObject(srcObject);
  $$unsubscribe_posterst();
  return `<video${add_attribute("poster", $posterst, 0)} autoplay playsinline muted style="${"display: " + escape(display, true) + "; position:absolute; top:-15px; width:100px; height: 100px; z-index: 20;"}"${add_attribute("this", lv, 0)}></video> ${slots.footer ? slots.footer({}) : ``}`;
});
const CallButtonUser_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".callObject.svelte-1p3kvei.svelte-1p3kvei{display:block;position:absolute;max-width:100%;height:100%;top:0px;left:6px;z-index:10}.callButton.svelte-1p3kvei.svelte-1p3kvei{margin-left:-10px}[status='wait'].svelte-1p3kvei.svelte-1p3kvei{transform:rotate(0deg) !important;color:#69da12}[status='wait'].svelte-1p3kvei g.svelte-1p3kvei{fill:rgb(255, 255, 255)}[status='call'].svelte-1p3kvei g.svelte-1p3kvei{fill:orange}[status='talk'].svelte-1p3kvei.svelte-1p3kvei{transform:rotate(0deg) !important}[status='talk'].svelte-1p3kvei g.svelte-1p3kvei{fill:green}[status='muted'].svelte-1p3kvei.svelte-1p3kvei{transform:rotate(120deg) !important;color:#232323}[status='inactive'].svelte-1p3kvei.svelte-1p3kvei{color:#dea677;transform:rotate(120deg)}[status='inactive'].svelte-1p3kvei g.svelte-1p3kvei{fill:#fff0}[status='active'].svelte-1p3kvei.svelte-1p3kvei{transform:rotate(120deg);color:black}[status='active'].svelte-1p3kvei g.svelte-1p3kvei{fill:orange}[status='busy'].svelte-1p3kvei.svelte-1p3kvei{transform:rotate(120deg);opacity:0.3;color:indianred}@keyframes svelte-1p3kvei-shake{0%{transform:translate(1px, 1px) rotate(0deg)}10%{transform:translate(-1px, -2px) rotate(-1deg)}20%{transform:translate(-3px, 0px) rotate(1deg)}30%{transform:translate(3px, 2px) rotate(0deg)}40%{transform:translate(1px, -1px) rotate(1deg)}50%{transform:translate(-1px, 2px) rotate(-1deg)}60%{transform:translate(-3px, 1px) rotate(0deg)}70%{transform:translate(3px, 1px) rotate(-1deg)}80%{transform:translate(-1px, -1px) rotate(1deg)}90%{transform:translate(1px, 2px) rotate(0deg)}100%{transform:translate(1px, -2px) rotate(-1deg)}}",
  map: null
};
const CallButtonUser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { status = "inactive" } = $$props;
  let { OnLongPress: OnLongPress2 } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.OnLongPress === void 0 && $$bindings.OnLongPress && OnLongPress2 !== void 0)
    $$bindings.OnLongPress(OnLongPress2);
  $$result.css.add(css$6);
  return `  <div class="callObject svelte-1p3kvei"> <svg class="callButton svelte-1p3kvei"${add_attribute("status", status, 0)} width="35" height="35"><g class="currentLayer svelte-1p3kvei" style="stroke:black; stroke-width:10px;"><title>Layer 1</title><path d="M390.7 353.3c-120.30000000000001 69.5 63.19999999999999 413.59999999999997 194.90000000000003 337.59999999999997l122.10000000000002 211.39999999999998c-55.60000000000002 32.10000000000002-102.5 52.30000000000007-166.9000000000001 15.5-178.79999999999995-102.19999999999993-375.59999999999997-442.9-369.99999999999994-646.0999999999999 1.8999999999999773-70.60000000000005 43.599999999999994-98.30000000000004 97.89999999999998-129.70000000000005 23.30000000000001 40.400000000000006 98.60000000000002 170.8 122 211.3z m50.400000000000034-5.699999999999989c-13 7.5-29.700000000000045 3.099999999999966-37.30000000000001-10l-115-199.3c-7.5-13.000000000000014-3.1000000000000227-29.700000000000017 10-37.30000000000001l60.5-34.900000000000006c13-7.499999999999993 29.69999999999999-3.0999999999999943 37.30000000000001 10l115.09999999999997 199.29999999999998c7.500000000000057 13 3.099999999999966 29.700000000000045-10 37.200000000000045l-60.599999999999966 35z m314.4 544.5c-13 7.5-29.700000000000045 3.1000000000000227-37.299999999999955-10l-115-199.30000000000007c-7.5-13-3.1000000000000227-29.699999999999932 10-37.299999999999955l60.5-34.89999999999998c13-7.5 29.699999999999932-3.1000000000000227 37.299999999999955 10l115.10000000000002 199.29999999999995c7.5 13 3.1000000000000227 29.700000000000045-10 37.30000000000007l-60.60000000000002 34.89999999999998z" id="svg_1" class="selected" transform="scale(.03)"></path></g></svg> ${slots.default ? slots.default({}) : ``} <span class="badge badge-primary badge-pill call-queue" style="display:none;position: absolute;right:0px;bottom:0px;color:#0e0cff;font-size: 12px;opacity:1" data-svelte-h="svelte-zcrh5f">0</span> </div>`;
});
const icofont_min = "";
const User = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_signal;
  let $users, $$unsubscribe_users;
  let $msg_signal_user, $$unsubscribe_msg_signal_user;
  $$unsubscribe_signal = subscribe(signal, (value) => value);
  $$unsubscribe_users = subscribe(users, (value) => $users = value);
  $$unsubscribe_msg_signal_user = subscribe(msg_signal_user, (value) => $msg_signal_user = value);
  let { abonent, em, operator } = $$props;
  const { groupBy, find } = pkg;
  md5(abonent + em + operator);
  let rtc;
  let inter, status = "inactive";
  let local = {
    video: { display: "none", srcObject: "" },
    audio: { paused: true, src: "" }
  };
  let remote = {
    video: { display: "none", srcObject: "" },
    audio: { muted: true, srcObject: "" }
  };
  function OnLongPress2() {
  }
  function OnMessage(data) {
    if (data.operators && data.operators[em]) {
      let res = groupBy(data.operators[em], "status");
      try {
        if (res && res["offer"]) {
          if (status !== "call" && status !== "wait") {
            status = "active";
          }
        } else if (res["busy"]) {
          if (status !== "call") {
            status = "busy";
          }
        } else if (res["close"] && //  && res["close"].length === Object.keys(data.operators[rtc.abonent]).length
        status !== "wait") {
          local.video.display = "none";
          remote.video.display = "none";
          local.audio.paused = true;
          remote.audio.muted = true;
          status = "inactive";
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
      remote.video.display = "none";
      status = "inactive";
    }
    if (data.func === "talk") {
      status = "talk";
      clearInterval(inter);
      local.audio.paused = true;
      remote.audio.muted = false;
    }
    if (data.func === "redirect") {
      status = "call";
      local.audio.paused = true;
      remote.audio.muted = true;
      remote.video.srcObject = null;
      remote.video.display = "none";
    }
    if (data.status === "wait") {
      status = "wait";
    }
  }
  if ($$props.abonent === void 0 && $$bindings.abonent && abonent !== void 0)
    $$bindings.abonent(abonent);
  if ($$props.em === void 0 && $$bindings.em && em !== void 0)
    $$bindings.em(em);
  if ($$props.operator === void 0 && $$bindings.operator && operator !== void 0)
    $$bindings.operator(operator);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if ($msg_signal_user) {
        OnMessage($msg_signal_user);
      }
    }
    {
      if (status) {
        let user = find($users[0].staff, { email: em });
        if (user)
          user.status = status;
      }
    }
    $$rendered = `${``}  ${validate_component(CallButtonUser, "CallButtonUser").$$render(
      $$result,
      { em, OnLongPress: OnLongPress2, status },
      {
        status: ($$value) => {
          status = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_signal();
  $$unsubscribe_users();
  $$unsubscribe_msg_signal_user();
  return $$rendered;
});
const Forward = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { status } = $$props;
  let { operator } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.operator === void 0 && $$bindings.operator && operator !== void 0)
    $$bindings.operator(operator);
  return `  <div style="position: relative;right: 0px; top:70px">${slots.default ? slots.default({}) : ``}</div>`;
});
const FileTransfer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { operator } = $$props;
  if ($$props.operator === void 0 && $$bindings.operator && operator !== void 0)
    $$bindings.operator(operator);
  return `<div style="position: relative;right: 0px; top:70px">${slots.default ? slots.default({}) : ``} <input class="file-upload" accept="*,*" id="file" name="file" type="file" style="display: none"> </div>`;
});
const Oper_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "textarea.svelte-81pd54:not([readonly]),input.svelte-81pd54:not([readonly]){color:rgb(35, 33, 158)}textarea.svelte-81pd54:not([readonly])::placeholder,input.svelte-81pd54:not([readonly])::placeholder{color:rgb(41, 128, 155)}input.svelte-81pd54,input.svelte-81pd54:hover,input.svelte-81pd54:focus,input.svelte-81pd54:active,textarea.svelte-81pd54{background:transparent;border:0;border-style:none;border-color:transparent;outline:none;outline-offset:0;box-shadow:none;padding:0;font-size:0.7em}",
  map: null
};
const Oper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $langs, $$unsubscribe_langs;
  let $posterst, $$unsubscribe_posterst;
  let $editable, $$unsubscribe_editable;
  let $dicts, $$unsubscribe_dicts;
  let $statust, $$unsubscribe_statust;
  $$unsubscribe_langs = subscribe(langs, (value) => $langs = value);
  $$unsubscribe_posterst = subscribe(posterst, (value) => $posterst = value);
  $$unsubscribe_editable = subscribe(editable, (value) => $editable = value);
  $$unsubscribe_dicts = subscribe(dicts, (value) => $dicts = value);
  $$unsubscribe_statust = subscribe(statust, (value) => $statust = value);
  let { operator } = $$props;
  let { id } = $$props;
  let { dep } = $$props;
  let { user } = $$props;
  let user_status, placeholder_name, placeholder_email, placeholder_desc;
  let dict = $dicts;
  if (dict) {
    placeholder_name = dict["input operator name"][$langs];
    placeholder_email = dict["input operator email"][$langs];
    placeholder_desc = dict["input description"][$langs];
  }
  let user_pic = operator_svg;
  if (user.picture.medium)
    user_pic = user.picture.medium;
  let { edited_display } = $$props;
  let readonlyOper = true;
  let readonlyAdm = true;
  user.abonent = operator.abonent;
  user.email = user.email ? user.email : "";
  const titleize = (s) => s ? s.replace(/^([a-z])/, (_, r) => r.toUpperCase()) : "";
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
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if ($editable) {
        edited_display = $editable;
        readonlyOper = !edited_display;
        readonlyAdm = !edited_display;
      }
    }
    {
      if (user.email && operator.em === user.email) {
        console.log(operator.em + " " + user.email);
        set_store_value(posterst, $posterst = user_pic, $posterst);
      }
    }
    $$rendered = `<div style="display:flex; flex-wrap: nowrap;justify-content: space-between; padding-bottom:20px"${add_attribute("this", oper_admin_div, 0)}> ${user.email !== operator.em ? `<div class="user_pic_div" style="position:relative; width: 100px; height:100px">  <video id="localVideo" class="user_pic is-rounded"${add_attribute("poster", user_pic, 0)} autoplay playsinline muted style="display: block; position:absolute; top:0px; width:100px; height: 100px;"></video>  ${edited_display ? `<input class="file-upload svelte-81pd54" accept="image/png, image/jpeg" id="avatar" name="avatar" type="file" style="display: none">` : ``}      ${validate_component(User, "User").$$render(
      $$result,
      {
        em: user.email,
        operator: operator.em,
        abonent: user.abonent
      },
      {},
      {}
    )}   ${edited_display ? `${dep.admin.email === operator.email && operator.email !== user.email && user.role === "operator" ? `  <svg height="30" width="30" style="position: absolute;bottom: -15px;left: -9px;"><glyph glyph-name="minus-circle" unicode="" horiz-adv-x="50"></glyph><g class="currentLayer"><path d="M500.2 62.5c-241.8 0-437.7 195.89999999999998-437.7 437.3 0 241.8 195.89999999999998 437.7 437.7 437.7 241.40000000000003 0 437.3-195.89999999999998 437.3-437.7 0-241.40000000000003-195.89999999999998-437.3-437.3-437.3z m301.59999999999997 466.5c-0.6999999999999318 9-2.199999999999932 19.100000000000023-4.699999999999932 30.299999999999955h-593.9000000000001c-2.499999999999943-11.199999999999932-4.299999999999926-21.699999999999932-5.0999999999999375-31.399999999999977-0.6999999999999886-9.699999999999932-1.0999999999999943-19.799999999999955-1.0999999999999943-30.299999999999955 0-9 0.4000000000000057-18 1.0999999999999943-26.700000000000045 0.700000000000017-9 2.5-19.099999999999966 5.099999999999994-30.299999999999955h593.9000000000001c2.4999999999998863 11.199999999999989 3.9999999999998863 21.599999999999966 4.699999999999818 31.399999999999977 1.1000000000000227 9.699999999999989 1.400000000000091 19.80000000000001 1.400000000000091 30.30000000000001 0.09999999999990905 9.099999999999966-0.3000000000000682 17.69999999999999-1.400000000000091 26.69999999999999z" transform="scale(.03)" style="fill:lightgrey; stroke:black; stroke-width:20px"></path></g></svg>` : ``}` : ``}</div> <div style="flex:1; margin-left:10px">${dict ? `<input type="text" class="user_name svelte-81pd54"${add_attribute("placeholder", placeholder_name, 0)} ${readonlyOper ? "readonly" : ""} style="width:80%;"${add_attribute("value", user.name, 0)}> <input type="text" class="user_email svelte-81pd54"${add_attribute("placeholder", placeholder_email, 0)} ${readonlyAdm ? "readonly" : ""} style="width:100%; max-height: 100px;"${add_attribute("value", user.email, 0)}>` : ``} <textarea type="text" rows="3" class="user_desc svelte-81pd54"${add_attribute("placeholder", placeholder_desc, 0)} ${readonlyOper ? "readonly" : ""} style="width:85%;overflow:auto;max-height: 100px;resize:none">${escape(user.desc || "")}</textarea></div> <div style="display: flex;flex-flow: row nowrap; align-items: flex-start;flex-direction: column;">${$statust === "talk" && user_status === "active" && user.email !== operator.email ? `${validate_component(Forward, "Forward").$$render(
      $$result,
      { operator: user.email, $statust },
      {
        $statust: ($$value) => {
          $statust = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<img src="./src/routes/assets/call-forward.svg" alt="call-forward" width="30px" height="30px">`;
        }
      }
    )}` : ``} ${$statust === "talk" && user.email === operator.email ? `${validate_component(FileTransfer, "FileTransfer").$$render($$result, { $statust, operator: user.email }, {}, {
      default: () => {
        return `<img src="./src/routes/assets/file-transfer.svg" alt="file-transfer" width="30px" height="30px">`;
      }
    })}` : ``}</div>` : ``} </div>`;
  } while (!$$settled);
  $$unsubscribe_langs();
  $$unsubscribe_posterst();
  $$unsubscribe_editable();
  $$unsubscribe_dicts();
  $$unsubscribe_statust();
  return $$rendered;
});
const Dep_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".collapsible.svelte-zwf51o{background-color:rgb(158, 158, 158);color:white;cursor:pointer;padding:18px;width:100%;border:none;text-align:left;outline:none;font-size:15px}.content.svelte-zwf51o{padding:0 10px;max-height:0;overflow:hidden;transition:max-height 0.2s ease-out;background-color:#f1f1f1}input.svelte-zwf51o:not([readonly])::placeholder{color:rgb(35, 33, 158)}input.svelte-zwf51o,input.svelte-zwf51o:hover,input.svelte-zwf51o:focus,input.svelte-zwf51o:active{background:transparent;border:0;border-style:none;border-color:transparent;outline:none;outline-offset:0;box-shadow:none;padding:0}",
  map: null
};
const Dep = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $langs, $$unsubscribe_langs;
  let $editable, $$unsubscribe_editable;
  let $statust, $$unsubscribe_statust;
  let $$unsubscribe_signal;
  $$unsubscribe_langs = subscribe(langs, (value) => $langs = value);
  $$unsubscribe_editable = subscribe(editable, (value) => $editable = value);
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
  async function AddOper(ev) {
    let par = {};
    par.proj = "kolmit";
    par.func = "addoper";
    par.abonent = operator.abonent;
    par.em = operator.email;
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
        if (!operator.abonent && dep.id === "0" || !operator.abonent && !dep.admin || operator.abonent && operator.email === dep.admin.email) {
          isAddOper = "block";
        }
      }
    }
    $$rendered = `  ${dep.id !== "0" ? `<button class="collapsible svelte-zwf51o"${add_attribute("owner", owner, 0)}${add_attribute("this", button, 0)}><input type="text" ${readonly ? "readonly" : ""} style="border-width: 0px;" placeholder="input dep name" class="svelte-zwf51o"${add_attribute("value", dep.alias, 0)}> ${edited_display ? `${operator.email === operator.abonent ? `  <svg height="30" width="30" style="position: relative;float:right"><glyph glyph-name="minus-circle" unicode="" horiz-adv-x="50"></glyph><g class="currentLayer"><path d="M500.2 62.5c-241.8 0-437.7 195.89999999999998-437.7 437.3 0 241.8 195.89999999999998 437.7 437.7 437.7 241.40000000000003 0 437.3-195.89999999999998 437.3-437.7 0-241.40000000000003-195.89999999999998-437.3-437.3-437.3z m301.59999999999997 466.5c-0.6999999999999318 9-2.199999999999932 19.100000000000023-4.699999999999932 30.299999999999955h-593.9000000000001c-2.499999999999943-11.199999999999932-4.299999999999926-21.699999999999932-5.0999999999999375-31.399999999999977-0.6999999999999886-9.699999999999932-1.0999999999999943-19.799999999999955-1.0999999999999943-30.299999999999955 0-9 0.4000000000000057-18 1.0999999999999943-26.700000000000045 0.700000000000017-9 2.5-19.099999999999966 5.099999999999994-30.299999999999955h593.9000000000001c2.4999999999998863 11.199999999999989 3.9999999999998863 21.599999999999966 4.699999999999818 31.399999999999977 1.1000000000000227 9.699999999999989 1.400000000000091 19.80000000000001 1.400000000000091 30.30000000000001 0.09999999999990905 9.099999999999966-0.3000000000000682 17.69999999999999-1.400000000000091 26.69999999999999z" transform="scale(.03)" style="fill:lightgrey; stroke:black; stroke-width:20px"></path></g></svg>` : ``}` : ``}</button>` : ``}  <div class="content svelte-zwf51o" style="max-height:0px"${add_attribute("this", content, 0)}> ${dep.admin ? `<div>${validate_component(Oper, "Oper").$$render(
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
      return `  ${validate_component(Oper, "Oper").$$render(
        $$result,
        {
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
      )}  `;
    })}` : ``} ${edited_display ? `   <div class="add_oper" style="${"display:" + escape(isAddOper, true)}"><svg style="position: relative;left: 45%; height:40, width=40"><title>add-user</title><glyph glyph-name="contact-add" unicode="" horiz-adv-x="50"></glyph><path d="M134.1 761.6c-14.5 0-26.39999999999999-11.899999999999977-26.39999999999999-26.399999999999977v-523.5c0-14.500000000000057 11.899999999999991-26.400000000000034 26.39999999999999-26.400000000000034h639.8c14.5 0 26.399999999999977 11.899999999999977 26.399999999999977 26.399999999999977v239.40000000000003c15.800000000000068 2.3999999999999773 30.90000000000009 6.2999999999999545 45.40000000000009 11.899999999999977v-288.7c0-14.5-11.900000000000091-26.400000000000006-26.40000000000009-26.400000000000006h-730.4c-14.499999999999972 0-26.399999999999977 11.900000000000006-26.399999999999977 26.400000000000006v598.7c0 14.399999999999977 11.900000000000006 26.299999999999955 26.400000000000006 26.299999999999955h479.30000000000007c-7.400000000000091-11.899999999999977-13.700000000000045-24.59999999999991-18.700000000000045-37.69999999999993h-415.4z m164.70000000000002-245h-19.400000000000034c-41.69999999999999 0-75.39999999999998 33.799999999999955-75.39999999999998 75.39999999999998v21c0 13.100000000000023 10.699999999999989 23.799999999999955 23.80000000000001 23.799999999999955h251.7c13.100000000000023 0 23.899999999999977-10.699999999999932 23.899999999999977-23.799999999999955v-21c0-41.60000000000002-33.799999999999955-75.39999999999998-75.39999999999998-75.39999999999998h-19.600000000000023c-10.099999999999966 0-18.299999999999955-8.100000000000023-18.299999999999955-18.30000000000001 0-3.8000000000000114 1.5-7.300000000000011 4.199999999999989-10 11.300000000000011-11 20.899999999999977-25.80000000000001 27.69999999999999-41.80000000000001 1.5 1.1000000000000227 2.8999999999999773 1.8000000000000114 4.5 1.8000000000000114 10.899999999999977 0 23.80000000000001-24.19999999999999 23.80000000000001-40.80000000000001 0-16.399999999999977-1.5-29.80000000000001-12.300000000000011-29.80000000000001-1.3000000000000114 0-2.8000000000000114 0.30000000000001137-4 0.6000000000000227-0.8000000000000114-44.69999999999999-12.100000000000023-100.40000000000003-80.30000000000001-100.40000000000003-71.19999999999999 0-79.5 55.60000000000002-80.19999999999999 100.20000000000005-1-0.20000000000004547-2-0.4000000000000341-2.8999999999999773-0.4000000000000341-11 0-12.5 13.400000000000034-12.5 29.80000000000001 0 16.5 12.899999999999977 40.80000000000001 23.799999999999955 40.80000000000001 1.3000000000000114 0 2.6000000000000227-0.4000000000000341 3.8000000000000114-1.1000000000000227 6.800000000000011 15.699999999999989 16.19999999999999 30.30000000000001 27.30000000000001 41 2.8000000000000114 2.6000000000000227 4.199999999999989 6.300000000000011 4.199999999999989 10-0.19999999999998863 10.199999999999989-8.399999999999977 18.400000000000034-18.399999999999977 18.400000000000034z m381.2-189.3c0-9.699999999999989-7.899999999999977-17.80000000000001-17.799999999999955-17.80000000000001h-211.00000000000006c6 13.600000000000023 10.300000000000011 30.100000000000023 12.199999999999989 50.60000000000002 4.600000000000023 2.8999999999999773 7.900000000000034 7.399999999999977 10.700000000000045 12.799999999999955h188.10000000000002c9.699999999999932 0 17.799999999999955-7.899999999999977 17.799999999999955-17.599999999999966v-28z m-2.1000000000000227 151.09999999999997c1.1000000000000227-2.3999999999999773 2.1000000000000227-5 2.1000000000000227-7.699999999999989v-28c0-9.699999999999989-7.899999999999977-17.80000000000001-17.799999999999955-17.80000000000001h-183.80000000000007c-5 18.900000000000034-17.099999999999966 38.700000000000045-34.299999999999955 43.900000000000034l-1.6000000000000227 2.8000000000000114v16.69999999999999h213.20000000000005c7.2999999999999545-3.6999999999999886 14.699999999999932-7 22.199999999999932-9.900000000000034z m-125 125.10000000000002c8.899999999999977-23.299999999999955 21.5-44.5 37.39999999999998-63.200000000000045h-71.69999999999993c9.399999999999977 15 15.100000000000023 32.700000000000045 15.100000000000023 51.60000000000002v11.5h19.199999999999932v0.10000000000002274z m332.20000000000005-55.39999999999998c-30.700000000000045-31.100000000000023-73.10000000000002-50.60000000000002-119.70000000000005-52.400000000000034h-6.2999999999999545c-49.700000000000045 0-94 19.900000000000034-126.5 52.400000000000034-32.10000000000002 32.10000000000002-52.39999999999998 76.79999999999995-52.39999999999998 126 0 25.299999999999955 5.399999999999977 49.299999999999955 14.899999999999977 71 9 20.699999999999932 21.699999999999932 39.69999999999993 37.5 55.60000000000002 32.5 32.09999999999991 76.79999999999995 52 126.5 52 98.39999999999998 0 178.39999999999998-80 178.39999999999998-178.4000000000001 0-49.39999999999998-19.899999999999977-94.09999999999991-52.39999999999998-126.19999999999993z m-41.60000000000002 152.19999999999993h-58.700000000000045v58.30000000000007h-52v-58.30000000000007h-58.299999999999955v-52.39999999999998h58.299999999999955v-58.299999999999955h52v58.299999999999955h58.700000000000045v52.39999999999998z" transform="scale(.04)" style="fill:grey"></path></svg></div> ` : ``}</div>   `;
  } while (!$$settled);
  $$unsubscribe_langs();
  $$unsubscribe_editable();
  $$unsubscribe_statust();
  $$unsubscribe_signal();
  return $$rendered;
});
const Callcenter_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".svelte-1mmnihw::-webkit-scrollbar{display:none}",
  map: null
};
const Callcenter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $server_path, $$unsubscribe_server_path;
  let $$unsubscribe_msg_signal_user;
  let $users, $$unsubscribe_users;
  let $langs, $$unsubscribe_langs;
  $$unsubscribe_server_path = subscribe(server_path, (value) => $server_path = value);
  $$unsubscribe_msg_signal_user = subscribe(msg_signal_user, (value) => value);
  $$unsubscribe_users = subscribe(users, (value) => $users = value);
  $$unsubscribe_langs = subscribe(langs, (value) => $langs = value);
  const { forEach, findIndex } = pkg;
  let { operator } = $$props;
  let { view: view2 } = $$props;
  let display2 = "none";
  let lang = $langs;
  let cc_data = $users;
  let edited_display = false;
  let { tarif } = $$props;
  async function RemoveDep(id) {
    let ind = findIndex(cc_data, { id });
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
  if ($$props.operator === void 0 && $$bindings.operator && operator !== void 0)
    $$bindings.operator(operator);
  if ($$props.view === void 0 && $$bindings.view && view2 !== void 0)
    $$bindings.view(view2);
  if ($$props.tarif === void 0 && $$bindings.tarif && tarif !== void 0)
    $$bindings.tarif(tarif);
  $$result.css.add(css$3);
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
          if (dep.admin && dep.admin.email === operator.email) {
            operator.role = dep.admin.role;
          }
        });
      }
    }
    $$rendered = `<div style="${"display:" + escape(display2, true)}" class="svelte-1mmnihw"><div class="deps_div svelte-1mmnihw" style="height: 100vh; overflow-y: scroll;"> ${each(cc_data, (dep, i) => {
      return `<br class="svelte-1mmnihw">  ${validate_component(Dep, "Dep").$$render(
        $$result,
        {
          owner: dep.admin.email,
          operator,
          update: cc_data,
          RemoveDep,
          dep,
          tarif,
          edited_display
        },
        {
          dep: ($$value) => {
            dep = $$value;
            $$settled = false;
          },
          tarif: ($$value) => {
            tarif = $$value;
            $$settled = false;
          },
          edited_display: ($$value) => {
            edited_display = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${edited_display ? `${operator.role === "admin" ? `  <svg class="add_dep svelte-1mmnihw" height="50" width="50" style="float:right"><title class="svelte-1mmnihw">Add Dep</title><glyph glyph-name="plus-circle" unicode="" horiz-adv-x="50" class="svelte-1mmnihw"></glyph><path d="M500.2 62.5c-241.8 0-437.7 195.89999999999998-437.7 437.3 0 241.8 195.89999999999998 437.7 437.7 437.7 241.40000000000003 0 437.3-195.89999999999998 437.3-437.7 0-241.40000000000003-195.89999999999998-437.3-437.3-437.3z m301.59999999999997 466.5c-0.6999999999999318 9-2.199999999999932 19.100000000000023-4.699999999999932 30.299999999999955h-237.70000000000005v237.80000000000007c-11.199999999999932 2.5-21.600000000000023 4.2999999999999545-31.399999999999977 5.100000000000023-9.700000000000045 0.6999999999999318-19.80000000000001 1.099999999999909-30.30000000000001 1.099999999999909-9 0-17.69999999999999-0.39999999999997726-26.69999999999999-1.099999999999909-9-0.7000000000000455-19.100000000000023-2.5-30.30000000000001-5.100000000000023v-237.70000000000005h-237.5c-2.5-11.199999999999932-4.299999999999983-21.699999999999932-5.099999999999994-31.399999999999977-0.6999999999999886-9.700000000000045-1.0999999999999943-19.80000000000001-1.0999999999999943-30.30000000000001 0-9 0.4000000000000057-17.69999999999999 1.0999999999999943-26.69999999999999 0.700000000000017-9 2.5-19.100000000000023 5.099999999999994-30.30000000000001h237.40000000000003v-237.5c11.199999999999989-2.5 21.599999999999966-4 31.399999999999977-4.699999999999989 9.699999999999989-1.0999999999999943 19.80000000000001-1.4000000000000057 30.30000000000001-1.4000000000000057 9 0 17.999999999999943 0.4000000000000057 26.69999999999999 1.4000000000000057 9 0.6999999999999886 19.100000000000023 2.1999999999999886 30.299999999999955 4.699999999999989v237.40000000000003h237.80000000000007c2.5 11.199999999999989 4 21.599999999999966 4.699999999999932 31.399999999999977 1.1000000000000227 9.699999999999989 1.400000000000091 19.80000000000001 1.400000000000091 30.30000000000001 0.09999999999990905 9.099999999999966-0.3000000000000682 18.099999999999966-1.400000000000091 26.69999999999999z" transform="scale(.04)" style="fill:lightgrey" class="svelte-1mmnihw"></path></svg>` : ``}` : ``} <div class="empty svelte-1mmnihw" style="height:400px"></div></div> </div>`;
  } while (!$$settled);
  $$unsubscribe_server_path();
  $$unsubscribe_msg_signal_user();
  $$unsubscribe_users();
  $$unsubscribe_langs();
  return $$rendered;
});
const Tarif_svelte_svelte_type_style_lang = "";
const dc_msg = writable();
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
  code: "button.svelte-11id1mh.svelte-11id1mh{position:absolute;right:10px;top:0px;margin:5px;z-index:100;background-color:Transparent;background-repeat:no-repeat;border:none;cursor:pointer;overflow:hidden;outline:none}svg.svelte-11id1mh line.svelte-11id1mh{stroke:currentColor;stroke-width:3}.open.svelte-11id1mh #top.svelte-11id1mh{transform:translate(8px, 0px) rotate(45deg)}.open.svelte-11id1mh #mid.svelte-11id1mh{opacity:0}.open.svelte-11id1mh #bot.svelte-11id1mh{transform:translate(-15px, 8px) rotate(-45deg)}",
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
  return `<button style="${"position:fixed;transition: color " + escape(duration, true) + "s ease-in-out; color: " + escape(open ? menuColor : burgerColor, true) + ";"}" class="${["svelte-11id1mh", open ? "open" : ""].join(" ").trim()}"><svg width="26" height="26" class="svelte-11id1mh"><line id="top" x1="0" y1="8" x2="26" y2="8" style="${"transition: transform " + escape(duration, true) + "s ease-in-out, opacity " + escape(duration, true) + "s ease-in-out;"}" class="svelte-11id1mh"></line><line id="mid" x1="0" y1="16" x2="26" y2="16" style="${"transition: transform " + escape(duration, true) + "s ease-in-out, opacity " + escape(duration, true) + "s ease-in-out;"}" class="svelte-11id1mh"></line><line id="bot" x1="0" y1="24" x2="26" y2="24" style="${"transition: transform " + escape(duration, true) + "s ease-in-out, opacity " + escape(duration, true) + "s ease-in-out;"}" class="svelte-11id1mh"></line></svg> </button>`;
});
const SideMenu_svelte_svelte_type_style_lang = "";
const css = {
  code: "#container.svelte-krt0zq{position:absolute;height:100vh;top:0px;overflow-y:auto}#menu.svelte-krt0zq{text-align:left}",
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
  return `<div id="container" style="${"position:fixed;z-index:1;background-color: " + escape(backgroundColor, true) + "; color: " + escape(menuColor, true) + "; width: " + escape(width, true) + "; right: " + escape(open ? "0px" : "-" + (parseInt(width) + 10) + "px", true) + "; transition: right " + escape(duration, true) + "s ease-in-out"}" class="svelte-krt0zq"><div id="menu" style="${"padding: " + escape(padding, true) + "; padding-top: " + escape(paddingTop, true) + ";"}" class="svelte-krt0zq">${slots.default ? slots.default({}) : ``}</div> </div>`;
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
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
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
const Video_remote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { display: display2 = "none" } = $$props;
  let { poster } = $$props;
  let { srcObject } = $$props;
  let video;
  if ($$props.display === void 0 && $$bindings.display && display2 !== void 0)
    $$bindings.display(display2);
  if ($$props.poster === void 0 && $$bindings.poster && poster !== void 0)
    $$bindings.poster(poster);
  if ($$props.srcObject === void 0 && $$bindings.srcObject && srcObject !== void 0)
    $$bindings.srcObject(srcObject);
  return ` <video autoplay playsinline${add_attribute("poster", poster, 0)} style="${"display:" + escape(display2, true) + "; position: absolute; height: 105px; background-color: white; max-width: 12%; z-index: 10;"}"${add_attribute("this", video, 0)}><track kind="captions"></video> ${slots.default ? slots.default({}) : ``}`;
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
const Word_svelte_svelte_type_style_lang = "";
const Control_svelte_svelte_type_style_lang = "";
const Text_svelte_svelte_type_style_lang = "";
let les = "2";
const Lesson = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { view: view2 } = $$props;
  let display2 = "none";
  let level = {
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
              { type: "text", title: "Familie 1" },
              { type: "text", title: "Familie 2" },
              { type: "text", title: "Familie 3" }
            ]
          },
          { num: 2, title: "" },
          { num: 3, title: "" }
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
                title: "In Het Restorant 1"
              },
              {
                type: "text",
                title: "In Het Restorant 2"
              },
              {
                type: "text",
                title: "In Het Restorant 3"
              }
            ]
          },
          { num: 2, title: "" },
          { num: 3, title: "" }
        ]
      },
      {
        num: "3",
        name: "Wonen",
        lessons: [
          {
            num: 1,
            title: "",
            quizes: [
              { type: "text", title: "Wonen 1" },
              { type: "text", title: "Wonen 2" },
              { type: "text", title: "Wonen 3" }
            ]
          },
          { num: 2, title: "" },
          { num: 3, title: "" }
        ]
      }
    ]
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.view === void 0 && $$bindings.view && view2 !== void 0)
    $$bindings.view(view2);
  {
    if (view2 === "lesson") {
      display2 = "block";
    } else {
      display2 = "none";
    }
  }
  return ` <div style="${"display:" + escape(display2, true) + ";overflow-y: auto;height: 400px;"}">${`<div>Module ${escape(level.level)}</div> ${each(level.themes, (theme, i) => {
    return `<div>${escape(theme.name)}</div> ${theme.lessons ? `${each(theme.lessons, (lesson) => {
      return `<div>${escape(lesson.num)}.${escape(lesson.title)}</div> ${lesson.quizes ? `${each(lesson.quizes, (quiz) => {
        return `  <div${add_attribute("type", quiz.type, 0)}${add_attribute("level", level.level, 0)}${add_attribute("name", quiz.title, 0)}${add_attribute("theme", theme.num, 0)}>${escape(quiz.title)} </div>`;
      })}` : ``}`;
    })}` : ``}`;
  })} <h3>Les ${escape(les)}</h3> <div><a data-svelte-h="svelte-4c9h20">Familie van Marc 1</a></div> <div style="height:30px"></div> <div><a data-svelte-h="svelte-e5fyy2">Familie van Marc 2</a></div> `}</div>`;
});
function OnLongPress() {
  select.display = true;
}
const Operator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $langs, $$unsubscribe_langs;
  let $$unsubscribe_signal;
  let $msg_signal_oper, $$unsubscribe_msg_signal_oper;
  let $$unsubscribe_server_path;
  let $dc_msg, $$unsubscribe_dc_msg;
  let $editable, $$unsubscribe_editable;
  let $dicts, $$unsubscribe_dicts;
  let $view, $$unsubscribe_view;
  let $users, $$unsubscribe_users;
  $$unsubscribe_langs = subscribe(langs, (value) => $langs = value);
  $$unsubscribe_signal = subscribe(signal, (value) => value);
  $$unsubscribe_msg_signal_oper = subscribe(msg_signal_oper, (value) => $msg_signal_oper = value);
  $$unsubscribe_server_path = subscribe(server_path, (value) => value);
  $$unsubscribe_dc_msg = subscribe(dc_msg, (value) => $dc_msg = value);
  $$unsubscribe_editable = subscribe(editable, (value) => $editable = value);
  $$unsubscribe_dicts = subscribe(dicts, (value) => $dicts = value);
  $$unsubscribe_view = subscribe(view, (value) => $view = value);
  $$unsubscribe_users = subscribe(users, (value) => $users = value);
  let callcenter;
  let rtc;
  let { tarif } = $$props;
  let status = "inactive", inter;
  let video_button_display = false;
  let edited_display = false;
  let { email, abonent } = $$props;
  const uid = md5(email);
  let operator = {
    type: "operator",
    em: email,
    abonent,
    uid
  };
  if (operator.em === abonent) {
    operator.role = "admin";
  } else {
    operator.role = "user";
  }
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
    switch (status) {
      case "inactive":
        rtc.Offer();
        status = "active";
        break;
      case "active":
        status = "inactive";
        rtc.OnInactive();
        break;
      case "call":
        status = "talk";
        clearInterval(inter);
        local.audio.paused = true;
        remote.audio.muted = false;
        rtc.OnTalk();
        video_button_display = true;
        remote.text.display = "block";
        const event = new Event("talk");
        document.getElementsByTagName("body")[0].dispatchEvent(event);
        break;
      case "talk":
        rtc.OnInactive();
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
        rtc.OnInactive();
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
      rtc.OnInactive();
      if (status === "talk") {
        status = "inactive";
      } else if (status === "call") {
        status = "inactive";
        rtc.OnMute();
        OnClickCallButton();
      }
      if (resolve)
        resolve();
    }
    if (data.call || data.func === "call") {
      status = "call";
      rtc.OnCall();
      remote.text.display = "block";
      if (data.profile) {
        let profile = data.profile;
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
  if ($$props.tarif === void 0 && $$bindings.tarif && tarif !== void 0)
    $$bindings.tarif(tarif);
  if ($$props.email === void 0 && $$bindings.email && email !== void 0)
    $$bindings.email(email);
  if ($$props.abonent === void 0 && $$bindings.abonent && abonent !== void 0)
    $$bindings.abonent(abonent);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if ($msg_signal_oper) {
        OnMessage($msg_signal_oper);
      }
    }
    {
      statust.set(status);
    }
    {
      if ($editable) {
        edited_display = $editable;
      }
    }
    {
      if ($dc_msg) {
        OnMessage($dc_msg);
      }
    }
    {
      if (remote.text.msg) {
        console.log(remote.text.msg);
      }
    }
    $$rendered = `<div style="display:flex; min-height:100px; flex-wrap: nowrap;justify-content: space-between;"><div style="flex:1">${validate_component(Video_remote, "VideoRemote").$$render($$result, Object.assign({}, remote.video), {}, {})} ${validate_component(CallButtonOperator, "CallButton").$$render(
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
          return `<b class="call_cnt" style="display:none;position: absolute;left:22px;top:10px;color:#0e0cff;font-size: 12px;" data-svelte-h="svelte-1h19z5i">100</b> <span class="badge badge-primary badge-pill call-queue" style="display:none;position: absolute;right:0px;bottom:0px;color:#0e0cff;font-size: 12px;opacity:1" data-svelte-h="svelte-1dn9ak7">0</span>`;
        }
      }
    )} <div class="remote_text_display" style="${"display:" + escape(remote.text.display, true) + "; position: absolute; z-index: 21; background-color: rgba(125, 125, 125, 0.8); top: 90px; left: 2px;"}"><p class="remote_msg" style="font-size: .7em; white-space: nowrap; color:white;margin:auto;text-align: center;">${escape(remote.text.msg)} <br> ${escape(remote.text.name)}</p></div></div> <div style="position:absolute;flex:1 1 0%">${validate_component(Video_local, "VideoLocal").$$render($$result, Object.assign({}, local.video), {}, {
      footer: () => {
        return `<div${add_attribute("this", container, 0)}></div>`;
      }
    })} ${video_button_display ? `<div class="video" style="position: absolute;top: 0;width: 100px; height:100px;">  <svg height="30" width="30" style="position: absolute; bottom: 70px; right: 0px; z-index: 30;"><glyph glyph-name="ui-video-chat" unicode="" horiz-adv-x="50"></glyph><g class="currentLayer" style="position: absolute; right: 0; top: 0; stroke:grey; stroke-width:2px;fill:lightgrey;font-size: 30px;"><path d="M891.5 23h-783c-59.7 0-108.5 48.8-108.5 108.5v466.20000000000005c0 59.59999999999991 48.8 108.5 108.5 108.5h222.39999999999998v270.5999999999999l270.70000000000005-270.5999999999999h289.9c59.700000000000045 0 108.5-48.90000000000009 108.5-108.5v-466.20000000000005c0-59.7-48.799999999999955-108.5-108.5-108.5z m-223.5 370l-252.8 134.70000000000005c-26.30000000000001 14-47.89999999999998 1.099999999999909-47.89999999999998-28.700000000000045v-262.9c0-29.900000000000034 21.599999999999966-42.80000000000001 47.89999999999998-28.80000000000001l252.8 134.7c26.299999999999955 14 26.299999999999955 37 0 51z" transform="scale(.03)" style="fill:lightgrey; stroke:black; stroke-width:20px"></path></g></svg> </div>` : ``}</div> <div style="flex:3">${validate_component(Audio_local, "AudioLocal").$$render(
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
        return ` ${escape($dicts["Language Select"][$langs])}:

		<div style="display: flex; margin-bottom:20px"><label style="flex:1"><input type="radio" name="lang"${add_attribute("value", "en", 0)}${"en" === $langs ? add_attribute("checked", true, 1) : ""}> <img src="https://www.sic-info.org/wp-content/uploads/2014/01/gb.png" alt="English"></label> <label style="flex:1"><input type="radio" name="lang"${add_attribute("value", "fr", 0)}${"fr" === $langs ? add_attribute("checked", true, 1) : ""}> <img src="https://www.sic-info.org/wp-content/uploads/2014/01/fr.png" alt="French"></label> <label style="flex:1"><input type="radio" name="lang"${add_attribute("value", "ru", 0)}${"ru" === $langs ? add_attribute("checked", true, 1) : ""}> <img src="https://www.sic-info.org/wp-content/uploads/2014/01/ru.png" alt="Russian"></label></div>   ${operator.role == "admin" ? `${!edited_display ? `<h5>${escape($dicts["Edit Call Center"][$langs])}</h5>` : `<h5>${escape($dicts["Cancel Edit Call Center"][$langs])}</h5>`}` : ``} ${operator.role == "user" ? `<h5>${escape($dicts["Create my own net"][$langs])}</h5>` : ``}`;
      }
    })}</div> <progress id="dataProgress"${add_attribute("value", progress.value, 0)} max="100" duration="200" style="${"display:" + escape(progress.display, true) + ";top:100px;width:98%;"}"></progress> ${validate_component(Callcenter, "Callcenter").$$render(
      $$result,
      {
        view: $view,
        tarif,
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
    )} ${validate_component(Lesson, "Lesson").$$render($$result, { view: $view, data: $users[0].staff }, {}, {})}`;
  } while (!$$settled);
  $$unsubscribe_langs();
  $$unsubscribe_signal();
  $$unsubscribe_msg_signal_oper();
  $$unsubscribe_server_path();
  $$unsubscribe_dc_msg();
  $$unsubscribe_editable();
  $$unsubscribe_dicts();
  $$unsubscribe_view();
  $$unsubscribe_users();
  return $$rendered;
});
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_signal;
  $$unsubscribe_signal = subscribe(signal, (value) => value);
  let { user_name, user_pic } = $$props;
  let { lang = "en", checked, abonent, upload, files } = $$props;
  let email = "", psw = "demo", psw_2 = "demo";
  if (!user_pic) {
    user_pic = operator_svg;
  }
  if ($$props.user_name === void 0 && $$bindings.user_name && user_name !== void 0)
    $$bindings.user_name(user_name);
  if ($$props.user_pic === void 0 && $$bindings.user_pic && user_pic !== void 0)
    $$bindings.user_pic(user_pic);
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.abonent === void 0 && $$bindings.abonent && abonent !== void 0)
    $$bindings.abonent(abonent);
  if ($$props.upload === void 0 && $$bindings.upload && upload !== void 0)
    $$bindings.upload(upload);
  if ($$props.files === void 0 && $$bindings.files && files !== void 0)
    $$bindings.files(files);
  $$unsubscribe_signal();
  return `<form><div id="inputs"><input type="email" placeholder="input your email" required${add_attribute("value", email, 0)}> <input type="text" placeholder="input your name" required${add_attribute("value", user_name, 0)}> <input class="file-upload" accept="image/png, image/jpeg" id="avatar" name="avatar" type="file" style="display: none"> <div><img class="user_pic is-rounded"${add_attribute("src", user_pic, 0)} alt="" style="border-radius: 5px; max-width:10%"></div> <div><input type="password" placeholder="input your password" required${add_attribute("value", psw, 0)}> <input type="password" placeholder="repeat your password" required${add_attribute("value", psw_2, 0)}></div></div></form>`;
});
let server;
server_path.subscribe((data) => {
  server = data;
});
const headers = {
  "Content-Type": "application/json"
  // Authorization: `Bearer ${token}`
};
class SignalingChannel {
  constructor(operator) {
    this.msg_signal_oper = msg_signal_oper;
    this.msg_signal_user = msg_signal_user;
    this.operator = operator;
  }
  async SendMessage(par, cb) {
    par.operator = this.operator;
    fetch(server + "/", {
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
export {
  Login as L,
  Operator as O,
  SignalingChannel as S,
  SelectMenu as a
};
