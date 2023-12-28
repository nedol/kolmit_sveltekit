import md5 from 'md5';
import { dict } from '$lib/dict/dict';
import { ice_conf } from '$lib/ice_conf';
import os from 'os';
import Turn from 'node-turn';

import { CreateOperator, CheckOperator } from '$lib/server/db.js';

global.rtcPull = { user: {}, operator: {} };

import { CreatePool, GetUsers } from '$lib/server/db.js'; //src\lib\server\server.db.js

let kolmit;

if (!global.server) {
	global.server = new Turn({
		// set options
		authMech: 'long-term',
		credentials: {
			username: 'password'
		}
	});
}

// global.server.start();

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, cookies, route, url, stuff }) {
	// res.json({ response: completion.data.choices[0].text }
	// let operator = url.searchParams.get('operator');

	let res;

	let abonent = url.searchParams.get('abonent');
	let lang = url.searchParams.get('lang');
	let name = url.searchParams.get('name');
	let email = url.searchParams.get('email');
	let psw = url.searchParams.get('psw');

	let prom = new Promise((resolve, reject) => {
		CreatePool(resolve);
	});

	let pool = await prom;

	let host = url.origin; //'http://localhost:3000'; //'https://kolmit-sveltekit-nedol.vercel.app'; //

	let resp = {
		dict: dict,
		ice_conf: ice_conf
	};
	try {
		res = cookies.get('abonent:' + abonent);

		if (psw) {
			kolmit = { operator: email, psw: md5(psw), name: name, lang: lang };
		} else {
			if (res) {
				kolmit = JSON.parse(res);
			} else {
				resp.check = false;
				resp.abonent = abonent;
				resp.users = '{}';
				resp.host = host;
				return resp;
			}
		}
	} catch (ex) {
		console.log();
	}

	let params = {
		operator: kolmit.operator,
		abonent: abonent,
		psw: kolmit.psw
	};

	res = await GetUsers(params);

	return {
		check: true,
		host: host,
		// url: decodeURIComponent(url.toString()),
		operator: kolmit.operator,
		name: kolmit.name,
		abonent: abonent,
		lang: kolmit.lang,
		dict: dict,
		users: res && res.users ? res.users : '',
		ice_conf: ice_conf
	};
}

export const actions = {
	default: async ({ cookies, request, url }) => {
		const abonent = url.searchParams.get('abonent');
		const data = await request.formData();
		if (data.get('psw') !== data.get('confirmPassword')) return;
		let q = {
			abonent: abonent,
			img: data.get('oper_pic_text'),
			name: data.get('name'),
			email: data.get('email'),
			psw: md5(data.get('psw')),
			lang: data.get('lang')
		};

		cookies.set(
			'abonent:' + q.abonent,
			JSON.stringify({
				name: q.name,
				operator: q.email,
				abonent: q.abonent,
				psw: q.psw,
				lang: q.lang
			}),
			{ maxAge: 60 * 60 * 24 * 30 * 1000 }
		);

		await CreateOperator(q);
	}
};
