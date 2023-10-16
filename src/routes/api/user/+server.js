import { json } from '@sveltejs/kit';
// import { OperatorWaiting } from '$lib/server/db.js'; //src\lib\server\server.db.js
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
	let q = {};
	q.abonent = event.url.searchParams.get('abonent');
	q.type = event.url.searchParams.get('type');
	q.em = event.url.searchParams.get('em');

	let resp;

	// let rtcPool = get('rtcPool');

	try {
		let promise = new Promise((resolve, reject) => {
			try {
				OperatorWaiting(q, resolve);
				set('rtcPool', rtcPool);
				rtcPool_st.set(rtcPool);
				console.log('user rtcPool' + JSON.stringify(rtcPool));
			} catch (ex) {
				console.log(ex);
			}
		});

		resp = await promise;

		// console.log(resp);
	} catch (ex) {
		console.log(q.func + ex);
	}

	let response = new Response(JSON.stringify({ resp }));
	response.headers.append('Access-Control-Allow-Origin', `*`);
	return response;
}

/** @type {import('./$types').RequestHandler} */
export async function POST(event) {
	const { par } = await event.request.json();
	const q = par;
	let resp = {};

	try {
		let promise = new Promise((resolve, reject) => {
			try {
				OperatorWaiting(q, resolve);
				set('rtcPool', rtcPool);
			} catch (ex) {
				console.log(ex);
			}
		});

		resp = await promise;

		// console.log(resp);
	} catch (ex) {
		console.log(par.func + ex);
	}

	let response = new Response(JSON.stringify({ resp }));
	response.headers.append('Access-Control-Allow-Origin', `*`);
	return response;
}
function OperatorWaiting(q, resolve) {
	try {
		if (!rtcPool[q.type][q.abonent]) rtcPool[q.type][q.abonent] = {};
		if (!rtcPool[q.type][q.abonent][q.em]) rtcPool[q.type][q.abonent][q.em] = { resolve: '' };
		rtcPool[q.type][q.abonent][q.em].resolve = resolve;
	} catch (ex) {
		console.log();
	}
}
