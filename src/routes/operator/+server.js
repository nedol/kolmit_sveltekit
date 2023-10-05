import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST(event) {
	const { par } = await event.request.json();
	const q = par;
	let resp;

	switch (q.func) {
		case 'callwaiting':
			try {
				let promise = new Promise((resolve, reject) => {
					// if (global.rtcPull[q.type][q.abonent][q.em].post_resolve)
					// 	rtcPull[q.type][q.abonent][q.em].post_resolve(resolve);
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
	// console.log(resp);
	// if (resp.em === q.em)
	// resp = JSON.stringify(resp);
	return new Response(JSON.stringify({ resp }));
}

function CallWaiting(q, resolve) {
	try {
		if (!global.rtcPull[q.type][q.abonent]) global.rtcPull[q.type][q.abonent] = {};
		if (!global.rtcPull[q.type][q.abonent][q.em])
			global.rtcPull[q.type][q.abonent][q.em] = { resolve: '' };
		rtcPull[q.type][q.abonent][q.em].resolve = resolve;
	} catch (e) {
		console.log();
	}
}
