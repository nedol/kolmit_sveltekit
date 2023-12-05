import { w as writable } from "./index2.js";
let operator = writable();
let editable = writable(false);
let view = writable();
let langs = writable();
langs.subscribe((data) => {
});
let server_path = writable();
let posterst = writable();
let msg_user = writable();
let msg_oper = writable();
let signal = writable();
let dicts = writable();
let users = writable();
let call_but_status = writable("inactive");
let ice_conf = writable();
let rtcPool_st = writable();
rtcPool_st.set({ user: {}, operator: {} });
let lesson = writable({ visible: true });
let click_call_func = writable();
let dc_oper = writable();
let dc_user = writable();
export {
  call_but_status as a,
  server_path as b,
  click_call_func as c,
  dicts as d,
  editable as e,
  lesson as f,
  dc_oper as g,
  msg_oper as h,
  dc_user as i,
  ice_conf as j,
  langs as l,
  msg_user as m,
  operator as o,
  posterst as p,
  rtcPool_st as r,
  signal as s,
  users as u,
  view as v
};
