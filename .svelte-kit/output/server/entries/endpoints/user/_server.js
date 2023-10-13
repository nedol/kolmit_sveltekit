import "../../../chunks/index.js";
async function POST(event) {
  const { par } = await event.request.json();
  const q = par;
  let resp = {};
  try {
    let promise = new Promise((resolve, reject) => {
      try {
        OperatorWaiting(q, resolve);
      } catch (ex) {
        console.log(ex);
      }
    });
    resp = await promise;
  } catch (ex) {
    console.log(ex);
  }
  return new Response(JSON.stringify({ resp }));
}
function OperatorWaiting(q, resolve) {
  try {
    if (!global.rtcPull[q.type][q.abonent])
      global.rtcPull[q.type][q.abonent] = {};
    if (!global.rtcPull[q.type][q.abonent][q.em])
      global.rtcPull[q.type][q.abonent][q.em] = { resolve: "" };
    global.rtcPull[q.type][q.abonent][q.em].resolve = resolve;
  } catch (ex) {
    console.log();
  }
}
export {
  POST
};
