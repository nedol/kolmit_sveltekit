import "md5";
import { d as dict, i as ice_conf } from "../../chunks/dict.js";
import "os";
import { b as CreatePool, G as GetUsers } from "../../chunks/db.js";
global.rtcPull = { user: {}, operator: {} };
let kolmit;
async function load({ fetch, cookies, route, url }) {
  let abonent = url.searchParams.get("abonent");
  let prom = new Promise((resolve, reject) => {
    CreatePool(resolve);
  });
  await prom;
  let host = url.origin;
  let res;
  let resp = {
    dict,
    ice_conf
  };
  try {
    res = cookies.get("abonent:" + abonent);
    if (res) {
      kolmit = JSON.parse(res);
    } else {
      resp.check = false;
      resp.abonent = abonent;
      resp.users = "{}";
      resp.host = host;
      return resp;
    }
  } catch (ex) {
    console.log();
  }
  let params = {
    operator: kolmit.operator,
    abonent,
    psw: kolmit.psw
  };
  res = await GetUsers(params);
  return {
    check: true,
    host,
    operator: kolmit.operator,
    abonent,
    lang: kolmit.lang,
    dict,
    users: res.users || "",
    tarif: res.tarif || "",
    ice_conf
  };
}
export {
  load
};
