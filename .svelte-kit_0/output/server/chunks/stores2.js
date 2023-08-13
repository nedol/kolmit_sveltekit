import { w as writable } from "./index3.js";
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
export {
  statust as a,
  dicts as d,
  editable as e,
  langs as l,
  msg_1 as m,
  pswd as p,
  signal as s,
  users as u
};
