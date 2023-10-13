import "../../../chunks/index.js";
async function POST(event) {
  const { par } = await event.request.json();
  const q = par;
  let resp;
  switch (q.func) {
    case "callwaiting":
      try {
        let promise = new Promise((resolve, reject) => {
          CallWaiting(q, resolve);
          if (global.rtcPull[q.type][q.abonent][q.em].resolve_post)
            global.rtcPull[q.type][q.abonent][q.em].resolve_post();
        });
        resp = await promise;
        global.rtcPull[q.type][q.abonent][q.em].promise = new Promise((resolve, reject) => {
          global.rtcPull[q.type][q.abonent][q.em].resolve_post = resolve;
        });
      } catch (ex) {
        console.log(ex);
      }
      break;
  }
  return new Response(JSON.stringify({ resp }));
}
function CallWaiting(q, resolve) {
  try {
    if (!global.rtcPull[q.type][q.abonent])
      global.rtcPull[q.type][q.abonent] = {};
    if (!global.rtcPull[q.type][q.abonent][q.em])
      global.rtcPull[q.type][q.abonent][q.em] = { resolve: "" };
    rtcPull[q.type][q.abonent][q.em].resolve = resolve;
  } catch (e) {
    console.log();
  }
}
export {
  POST
};
