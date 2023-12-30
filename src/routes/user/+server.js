import { json } from '@sveltejs/kit';
// import { OperatorWaiting } from '$lib/server/db.js'; //src\lib\server\server.db.js
import Turn from 'node-turn';

if (!global.turn_server) {
	global.turn_server = new Turn({
		// set options
		authMech: 'long-term',
		credentials: {
			username: 'password'
		},
		listeningPort: 3478
	});
	global.turn_server.start();
}

global.rtcPool;
import { rtcPool_st } from '$lib/js/stores.js';
rtcPool_st.subscribe((data) => {
	global.rtcPool = data;
});

/** @type {import('./$types').RequestHandler} */
export async function GET(event, fetch) {
	let q = {};
	q.abonent = event.url.searchParams.get('abonent');
	q.type = event.url.searchParams.get('type');
	q.em = event.url.searchParams.get('em');

	let resp;

	try {
		let promise = new Promise((resolve, reject) => {
			try {
				OperatorWaiting(q, resolve);
				// console.log('user global.rtcPool' + JSON.stringify(global.rtcPool));
				rtcPool_st.set(global.rtcPool);
			} catch (ex) {
				console.log(ex);
			}
		});

		resp = await promise;

		// console.log(resp);
	} catch (ex) {
		console.log(ex);
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
		if (!global.rtcPool[q.type][q.abonent]) global.rtcPool[q.type][q.abonent] = {};
		if (!global.rtcPool[q.type][q.abonent][q.em])
			global.rtcPool[q.type][q.abonent][q.em] = { resolve: '' };
		global.rtcPool[q.type][q.abonent][q.em].resolve = resolve;
	} catch (ex) {
		console.log('OperatorWaiting ex:' + ex);
	}
}
