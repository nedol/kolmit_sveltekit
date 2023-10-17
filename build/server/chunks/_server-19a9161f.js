import './index-2b68e648.js';
import { r as rtcPool_st } from './stores-409ff9d6.js';
import './index2-4394be15.js';
import './utils-3c68d794.js';

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
  q.func = event.url.searchParams.get("func");
  q.role = event.url.searchParams.get("role");
  q.uid = event.url.searchParams.get("uid");
  q.abonent = event.url.searchParams.get("abonent");
  q.type = event.url.searchParams.get("type");
  q.em = event.url.searchParams.get("em");
  let resp;
  switch (q.func) {
    case "callwaiting":
      try {
        let promise = new Promise((resolve, reject) => {
          CallWaiting(q, resolve);
          if (global.rtcPool[q.type][q.abonent][q.em].resolve_post)
            global.rtcPool[q.type][q.abonent][q.em].resolve_post();
          rtcPool_st.set(global.rtcPool);
        });
        resp = await promise;
        global.rtcPool[q.type][q.abonent][q.em].promise = new Promise((resolve, reject) => {
          global.rtcPool[q.type][q.abonent][q.em].resolve_post = resolve;
          rtcPool_st.set(global.rtcPool);
        });
      } catch (ex) {
        console.log("callwaiting" + ex);
      }
      break;
  }
  let response = new Response(JSON.stringify({ resp }));
  response.headers.append("Access-Control-Allow-Origin", `*`);
  return response;
}
async function POST(event) {
  const { par } = await event.request.json();
  const q = par;
  let resp;
  switch (q.func) {
    case "callwaiting":
      try {
        let promise = new Promise((resolve, reject) => {
          CallWaiting(q, resolve);
          if (global.rtcPool[q.type][q.abonent][q.em].resolve_post)
            global.rtcPool[q.type][q.abonent][q.em].resolve_post();
        });
        resp = await promise;
        global.rtcPool[q.type][q.abonent][q.em].promise = new Promise((resolve, reject) => {
          global.rtcPool[q.type][q.abonent][q.em].resolve_post = resolve;
        });
      } catch (ex) {
        console.log("callwaiting" + ex);
      }
      break;
  }
  let response = new Response(JSON.stringify({ resp }));
  response.headers.append("Access-Control-Allow-Origin", `*`);
  return response;
}
function CallWaiting(q, resolve) {
  try {
    if (!global.rtcPool[q.type][q.abonent])
      global.rtcPool[q.type][q.abonent] = {};
    if (!global.rtcPool[q.type][q.abonent][q.em])
      global.rtcPool[q.type][q.abonent][q.em] = { resolve: "" };
    global.rtcPool[q.type][q.abonent][q.em].resolve = resolve;
  } catch (e) {
    console.log();
  }
}

export { GET, POST, config };
//# sourceMappingURL=_server-19a9161f.js.map
