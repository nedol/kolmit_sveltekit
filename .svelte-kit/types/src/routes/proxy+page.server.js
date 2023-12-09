// @ts-nocheck
import md5 from 'md5';
import { dict } from '$lib/dict/dict';
import { ice_conf } from '$lib/ice_conf';
import os from 'os';

import { CreateOperator, CheckOperator } from '$lib/server/db.js';

global.rtcPull = { user: {}, operator: {} };

import { CreatePool, GetUsers } from '$lib/server/db.js'; //src\lib\server\server.db.js

let kolmit;

/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export async function load({ fetch, cookies, route, url, stuff }) {
	// let operator = url.searchParams.get('operator');
	let abonent = url.searchParams.get('abonent');
	// let lang = url.searchParams.get('lang');

	let prom = new Promise((resolve, reject) => {
		CreatePool(resolve);
	});

	let pool = await prom;

	let host = url.origin; //'http://localhost:3000'; //'https://kolmit-sveltekit-nedol.vercel.app'; //

	// console.log();
	//debugger;

	let res;
	let resp = {
		dict: dict,
		ice_conf: ice_conf
	};
	try {
		res = cookies.get('abonent:' + abonent);
		if (res) {
			kolmit = JSON.parse(res);
		} else {
			resp.check = false;
			resp.abonent = abonent;
			resp.users = '{}';
			resp.host = host;
			return resp;
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