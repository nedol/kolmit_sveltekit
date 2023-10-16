import "../../../chunks/index.js";
import { C as CheckOperator, a as CreateOperator } from "../../../chunks/db.js";
import "nodemailer";
import md5 from "md5";
import pkg from "lodash";
const { find, findKey } = pkg;
const config = {
  // runtime: 'edge'
  isr: {
    expiration: false
    // 10
  }
};
async function POST({ request, cookies, url }) {
  let abonent = url.searchParams.get("abonent");
  const { par } = await request.json();
  const q = par;
  let res = cookies.get("abonent:" + abonent);
  let kolmit;
  if (res) {
    kolmit = JSON.parse(res);
  } else {
    kolmit = { psw: md5("demo") };
  }
  let resp = {};
  switch (par.func) {
    case "operator":
      if (q.email && q.psw) {
        if (CreateOperator(q)) {
          cookies.set(
            "abonent:" + q.abonent,
            JSON.stringify({
              operator: q.email,
              abonent: q.abonent,
              psw: q.psw,
              lang: q.lang
            }),
            { maxAge: 60 * 60 * 24 * 30 }
          );
          resp = JSON.stringify({
            func: par.func,
            operator: q.email,
            abonent: q.email,
            lang: q.lang
          });
        }
      }
      break;
    case "check":
      SetParams(q);
      if (q.type === "user") {
        let cnt_queue = 0;
        global.rtcPull[q.type][q.abonent][q.em][q.uid];
        resp = {
          func: q.func,
          type: q.type,
          check: true,
          queue: String(cnt_queue)
        };
        SendOperatorStatus(q);
        return new Response(JSON.stringify({ resp }));
      } else if (q.type === "operator") {
        q.psw = kolmit.psw;
        resp = await CheckOperator(q);
        console.log(resp);
      }
      break;
    case "offer":
      try {
        SetParams(q);
        BroadcastOperatorStatus(q, "offer");
      } catch (ex) {
        console.log();
      }
      break;
    case "call":
      HandleCall(q);
      break;
    case "status":
      if (q.status === "call") {
        if (q.type === "operator") {
          let item = global.rtcPull[q.type][q.abonent][q.em][q.uid];
          if (item)
            item.status = "busy";
          BroadcastOperatorStatus(q);
        }
        break;
      }
      if (q.status === "close") {
        try {
          let item = global.rtcPull[q.type][q.abonent][q.em][q.uid];
          if (item) {
            item.status = q.status;
            if (q.type === "operator")
              BroadcastOperatorStatus(q, "close");
          }
        } catch (ex) {
        }
        break;
      }
      SetParams(q);
      break;
  }
  let response = new Response(JSON.stringify({ resp }));
  response.headers.append("Access-Control-Allow-Origin", `*`);
  return response;
}
function SetParams(q) {
  if (!global.rtcPull[q.type][q.abonent]) {
    global.rtcPull[q.type][q.abonent] = {};
  }
  if (!global.rtcPull[q.type][q.abonent][q.em])
    global.rtcPull[q.type][q.abonent][q.em] = [];
  let item;
  if (q.type === "user") {
    item = global.rtcPull[q.type][q.abonent][q.em][q.uid];
  } else
    item = global.rtcPull[q.type][q.abonent][q.em][0];
  if (!item) {
    item = {};
    item.cand = [];
    global.rtcPull[q.type][q.abonent][q.em][q.uid] = item;
  }
  item.uid = q.uid;
  item.status = q.status;
  item.abonent = q.abonent;
  item.operator = q.em;
  if (q.desc)
    item.desc = q.desc;
  if (Array.isArray(q.cand)) {
    q.cand.forEach((cand, index) => {
      item.cand.push(cand);
    });
  } else if (q.cand)
    item.cand.push(q.cand);
}
function BroadcastOperatorStatus(q, status) {
  try {
    let queue = 0;
    if (!global.rtcPull["user"][q.abonent])
      return;
    for (let uid in global.rtcPull["user"][q.abonent][q.em]) {
      if (q.uid && global.rtcPull["user"][q.abonent][q.em][uid]) {
        queue++;
      }
    }
    let type = q.type === "operator" ? "user" : "operator";
    let operators = { [q.em]: {} };
    for (let uid in global.rtcPull["operator"][q.abonent][q.em]) {
      if (uid !== "resolve")
        operators[q.em][uid] = {
          type: q.type,
          abonent: q.abonent,
          em: q.em,
          uid: q.uid,
          status: global.rtcPull["operator"][q.abonent][q.em][uid].status,
          queue
        };
    }
    for (let em in global.rtcPull[type][q.abonent]) {
      if (em === q.em && q.status === "call")
        continue;
      for (let uid in global.rtcPull[type][q.abonent][em]) {
        let item = global.rtcPull[type][q.abonent][em][uid];
        let offer = find(operators[q.em], { status: "offer" });
        if (offer && // && item.abonent === q.em
        item.uid !== q.uid) {
          if (item.status === "wait") {
            let oper = global.rtcPull["operator"][q.abonent][q.em][q.uid];
            let remAr2 = {
              func: q.func,
              type,
              abonent: q.abonent,
              oper_uid: q.uid,
              desc: oper.desc,
              cand: oper.cand
            };
            if (global.rtcPull[type][q.abonent][em].resolve)
              global.rtcPull[type][q.abonent][em].resolve(remAr2);
          } else {
            if (global.rtcPull[type][q.abonent][em].resolve)
              global.rtcPull[type][q.abonent][em].resolve({
                func: q.func,
                type,
                abonent: q.abonent,
                em: q.em,
                uid: q.uid,
                operators
              });
          }
        } else {
          if (global.rtcPull[type][q.abonent][em].resolve)
            global.rtcPull[type][q.abonent][em].resolve({
              func: q.func,
              type,
              abonent: q.abonent,
              em,
              uid: q.uid,
              operators
            });
        }
      }
    }
    operators = "";
  } catch (ex) {
    console.log(ex);
  }
}
function SendOperatorStatus(q) {
  if (global.rtcPull["operator"] && global.rtcPull["operator"][q.abonent] && global.rtcPull["operator"][q.abonent][q.em]) {
    for (let uid in global.rtcPull["operator"][q.abonent][q.em]) {
      if (global.rtcPull["operator"][q.abonent][q.em][uid].status === "offer") {
        let operator = {
          abonent: q.abonent,
          em: q.em,
          uid,
          status: global.rtcPull["operator"][q.abonent][q.em][uid].status,
          desc: global.rtcPull["operator"][q.abonent][q.em][uid].desc,
          cand: global.rtcPull["operator"][q.abonent][q.em][uid].cand
        };
        if (q.type === "user") {
          global.rtcPull["user"][q.abonent][q.em][q.uid];
          global.rtcPull["user"][q.abonent][q.em].resolve({ operator });
        }
      }
    }
  }
}
let remAr = [];
async function HandleCall(q) {
  if (q.type === "user") {
    if (q.desc || q.cand) {
      remAr.push({
        func: q.func,
        desc: q.desc,
        cand: q.cand,
        abonent: q.abonent,
        user: q.em
        // "abonent": q.em
      });
      let item = global.rtcPull["operator"][q.abonent][q.em][q.oper_uid];
      if (item) {
        await global.rtcPull["operator"][q.abonent][q.em].promise;
        global.rtcPull["operator"][q.abonent][q.em].resolve(remAr);
        remAr = [];
      }
    } else {
      let item = global.rtcPull["user"][q.abonent][q.em][q.uid];
      if (item) {
        let oper_check = findKey(global.rtcPull["operator"][q.abonent][q.em], {
          status: "check"
        });
        let oper_offer_key = findKey(global.rtcPull["operator"][q.abonent][q.em], {
          status: "offer"
        });
        let oper_offer = global.rtcPull["operator"][q.abonent][q.em][oper_offer_key];
        if (oper_offer) {
          remAr.push({
            func: q.func,
            abonent: q.abonent,
            uid: q.uid,
            oper_uid: oper_offer.uid,
            desc: oper_offer.desc,
            cand: oper_offer.cand
          });
          await global.rtcPull["operator"][q.abonent][q.em].promise;
          global.rtcPull["user"][q.abonent][q.operator].resolve(remAr);
          remAr = [];
        } else {
          item.status = "wait";
          remAr.push({
            func: q.func,
            abonent: q.abonent,
            status: "wait"
          });
          await global.rtcPull["operator"][q.abonent][q.em].promise;
          global.rtcPull["user"][q.abonent][q.em].resolve(remAr);
          if (oper_check && oper_check.resolve) {
            const remAr2 = {
              func: q.func,
              abonent: q.abonent,
              user_uid: item.uid,
              status: "wait"
            };
            oper_check.resolve(remAr2);
            remAr2 = [];
          }
        }
      }
    }
  }
}
export {
  POST,
  config
};
