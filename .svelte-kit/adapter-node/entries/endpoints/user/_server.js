import "../../../chunks/index.js";
import { r as rtcPool_st } from "../../../chunks/stores.js";
rtcPool_st.subscribe((data) => {
  global.rtcPool = data;
});
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
  try {
    let promise = new Promise((resolve, reject) => {
      try {
        OperatorWaiting(q, resolve);
        rtcPool_st.set(global.rtcPool);
      } catch (ex) {
        console.log(ex);
      }
    });
    resp = await promise;
  } catch (ex) {
    console.log(ex);
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
        set("global.rtcPool", global.rtcPool);
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
    if (!global.rtcPool[q.type][q.abonent])
      global.rtcPool[q.type][q.abonent] = {};
    if (!global.rtcPool[q.type][q.abonent][q.em])
      global.rtcPool[q.type][q.abonent][q.em] = { resolve: "" };
    global.rtcPool[q.type][q.abonent][q.em].resolve = resolve;
  } catch (ex) {
    console.log("OperatorWaiting ex:" + ex);
  }
}
export {
  GET,
  POST,
  config
};
