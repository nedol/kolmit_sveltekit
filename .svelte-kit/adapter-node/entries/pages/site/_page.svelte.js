import { c as create_ssr_component, s as setContext, v as validate_component } from "../../../chunks/ssr.js";
import { s as subscribe, a as set_store_value } from "../../../chunks/utils.js";
import { S as SignalingChannel, O as Operator, a as SelectMenu, L as Login } from "../../../chunks/signalingChannel.js";
import { u as users, i as ice_conf, d as dicts, l as langs, s as server_path, a as signal } from "../../../chunks/stores.js";
const Site = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let checked = data.check;
  let user_pic = data.picture ? data.picture.medium : "";
  const email = data.operator, abonent = data.abonent;
  set_store_value(signal, $signal = new SignalingChannel(email), $signal);
  set_store_value(
    server_path,
    $server_path = data.host.includes("http://[::1]") ? "http://localhost:3000" : data.host,
    $server_path
  );
  set_store_value(langs, $langs = data.lang, $langs);
  set_store_value(dicts, $dicts = data.dict[0], $dicts);
  set_store_value(ice_conf, $ice_conf = data.ice_conf, $ice_conf);
  set_store_value(users, $users = JSON.parse(data.users), $users);
  setContext("users", $users);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${checked ? `${validate_component(Operator, "Operator").$$render($$result, { email, abonent }, {}, {})}` : `${validate_component(SelectMenu, "SelectMenu").$$render(
      $$result,
      { $langs },
      {
        $langs: ($$value) => {
          $langs = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Login, "Login").$$render(
      $$result,
      { abonent, user_pic, lang: $langs, checked },
      {
        checked: ($$value) => {
          checked = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}`;
  } while (!$$settled);
  $$unsubscribe_users();
  $$unsubscribe_ice_conf();
  $$unsubscribe_dicts();
  $$unsubscribe_langs();
  $$unsubscribe_server_path();
  $$unsubscribe_signal();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Site, "Site").$$render($$result, { data }, {}, {})}`;
});
export {
  Page as default
};
