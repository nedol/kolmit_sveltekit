import { json } from '@sveltejs/kit';

import { get, set } from 'node-global-storage';

export const config = {
	// runtime: 'edge'
	// isr: {
	// 	expiration: false // 10
	// }
};

/** @type {import('./$types').RequestHandler} */
export async function GET(event) {
	let rtcPull = get('rtcPull');
	let q = {};
	q.func = event.url.searchParams.get('func');
	q.role = event.url.searchParams.get('role');
	q.uid = event.url.searchParams.get('uid');
	q.abonent = event.url.searchParams.get('abonent');
	q.type = event.url.searchParams.get('type');
	q.em = event.url.searchParams.get('em');

	let resp;
	switch (q.func) {
		case 'callwaiting':
			try {
				let promise = new Promise((resolve, reject) => {
					// if (rtcPull[q.type][q.abonent][q.em].post_resolve)
					// 	rtcPull[q.type][q.abonent][q.em].post_resolve(resolve);
					console.log('oper rtcPull' + JSON.stringify(get('rtcPull')));
					CallWaiting(q, resolve);
					if (rtcPull[q.type][q.abonent][q.em].resolve_post)
						rtcPull[q.type][q.abonent][q.em].resolve_post();
					set('rtcPull', rtcPull);
				});
				resp = await promise;
				rtcPull[q.type][q.abonent][q.em].promise = new Promise((resolve, reject) => {
					rtcPull[q.type][q.abonent][q.em].resolve_post = resolve;
					set('rtcPull', rtcPull);
				});
			} catch (ex) {
				console.log('callwaiting' + ex);
			}
			break;
	}

	let response = new Response(JSON.stringify({ resp }));
	response.headers.append('Access-Control-Allow-Origin', `*`);
	return response;
}

/** @type {import('./$types').RequestHandler} */
export async function POST(event) {
	const { par } = await event.request.json();
	const q = par;
	let resp;

	switch (q.func) {
		case 'callwaiting':
			try {
				let promise = new Promise((resolve, reject) => {
					// if (rtcPull[q.type][q.abonent][q.em].post_resolve)
					// 	rtcPull[q.type][q.abonent][q.em].post_resolve(resolve);
					CallWaiting(q, resolve);
					if (rtcPull[q.type][q.abonent][q.em].resolve_post)
						rtcPull[q.type][q.abonent][q.em].resolve_post();
				});
				resp = await promise;
				rtcPull[q.type][q.abonent][q.em].promise = new Promise((resolve, reject) => {
					rtcPull[q.type][q.abonent][q.em].resolve_post = resolve;
				});
			} catch (ex) {
				console.log('callwaiting' + ex);
			}
			break;
	}

	let response = new Response(JSON.stringify({ resp }));
	response.headers.append('Access-Control-Allow-Origin', `*`);
	return response;
}

function CallWaiting(q, resolve) {
	try {
		if (!rtcPull[q.type][q.abonent]) rtcPull[q.type][q.abonent] = {};
		if (!rtcPull[q.type][q.abonent][q.em]) rtcPull[q.type][q.abonent][q.em] = { resolve: '' };
		rtcPull[q.type][q.abonent][q.em].resolve = resolve;
	} catch (e) {
		console.log();
	}
}
