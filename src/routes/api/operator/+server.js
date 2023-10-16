import { json } from '@sveltejs/kit';

import { get, set } from 'node-global-storage';

let rtcPool;
import { rtcPool_st } from '$lib/js/stores.js';
rtcPool_st.subscribe((data) => {
	rtcPool = data;
});

export const config = {
	// runtime: 'edge'
	// isr: {
	// 	expiration: false // 10
	// }
};

/** @type {import('./$types').RequestHandler} */
export async function GET(event) {
	// let rtcPool = get('rtcPool');

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
					// if (rtcPool[q.type][q.abonent][q.em].post_resolve)
					// 	rtcPool[q.type][q.abonent][q.em].post_resolve(resolve);
					console.log('oper rtcPool' + JSON.stringify(rtcPool));
					CallWaiting(q, resolve);
					if (rtcPool[q.type][q.abonent][q.em].resolve_post)
						rtcPool[q.type][q.abonent][q.em].resolve_post();
					// set('rtcPool', rtcPool);
					rtcPool_st.set(rtcPool);
				});
				resp = await promise;
				rtcPool[q.type][q.abonent][q.em].promise = new Promise((resolve, reject) => {
					rtcPool[q.type][q.abonent][q.em].resolve_post = resolve;
					// set('rtcPool', rtcPool);
					rtcPool_st.set(rtcPool);
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
					// if (rtcPool[q.type][q.abonent][q.em].post_resolve)
					// 	rtcPool[q.type][q.abonent][q.em].post_resolve(resolve);
					CallWaiting(q, resolve);
					if (rtcPool[q.type][q.abonent][q.em].resolve_post)
						rtcPool[q.type][q.abonent][q.em].resolve_post();
				});
				resp = await promise;
				rtcPool[q.type][q.abonent][q.em].promise = new Promise((resolve, reject) => {
					rtcPool[q.type][q.abonent][q.em].resolve_post = resolve;
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
		if (!rtcPool[q.type][q.abonent]) rtcPool[q.type][q.abonent] = {};
		if (!rtcPool[q.type][q.abonent][q.em]) rtcPool[q.type][q.abonent][q.em] = { resolve: '' };
		rtcPool[q.type][q.abonent][q.em].resolve = resolve;
	} catch (e) {
		console.log();
	}
}
