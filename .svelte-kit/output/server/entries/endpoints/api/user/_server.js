import "../../../../chunks/index.js";
import { get, set } from "node-global-storage";
const config = {
  // runtime: 'edge'
  // isr: {
  // 	expiration: false // 10
  // }
};
async function GET(event) {
  let q = {};
  q.abonent = event.url.searchParams.get("abonent");
  q.type = event.url.searchParams.get("type");
  q.em = event.url.searchParams.get("em");
  let resp;
  let rtcPull2 = get("rtcPull");
  try {
    let promise = new Promise((resolve, reject) => {
      try {
        OperatorWaiting(q, resolve);
        set("rtcPull", rtcPull2);
        console.log("user rtcPull" + JSON.stringify(rtcPull2));
      } catch (ex) {
        console.log(ex);
      }
    });
    resp = await promise;
  } catch (ex) {
    console.log(q.func + ex);
  }
  let response = new Response(JSON.stringify({ resp }));
  response.headers.append("Access-Control-Allow-Origin", `*`);
  return response;
}
async function POST(event) {
  const { par } = await event.request.json();
  const q = par;
  let resp = {};
  try {
    let promise = new Promise((resolve, reject) => {
      try {
        OperatorWaiting(q, resolve);
        set("rtcPull", rtcPull);
      } catch (ex) {
        console.log(ex);
      }
    });
    resp = await promise;
  } catch (ex) {
    console.log(par.func + ex);
  }
  let response = new Response(JSON.stringify({ resp }));
  response.headers.append("Access-Control-Allow-Origin", `*`);
  return response;
}
function OperatorWaiting(q, resolve) {
  try {
    if (!rtcPull[q.type][q.abonent])
      rtcPull[q.type][q.abonent] = {};
    if (!rtcPull[q.type][q.abonent][q.em])
      rtcPull[q.type][q.abonent][q.em] = { resolve: "" };
    rtcPull[q.type][q.abonent][q.em].resolve = resolve;
  } catch (ex) {
    console.log();
  }
}
export {
  GET,
  POST,
  config
};
