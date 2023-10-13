import { w as writable } from "./index2.js";
let operatorst = writable();
let editable = writable(false);
let view = writable();
let langs = writable();
langs.subscribe((data) => {
});
let posterst = writable();
let msg_signal_user = writable();
let msg_signal_oper = writable();
let signal = writable();
let dicts = writable();
let users = writable();
let statust = writable();
let ice_conf = writable();
export {
  statust as a,
  msg_signal_oper as b,
  dicts as d,
  editable as e,
  ice_conf as i,
  langs as l,
  msg_signal_user as m,
  operatorst as o,
  posterst as p,
  signal as s,
  users as u,
  view as v
};
