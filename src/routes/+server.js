import { json } from '@sveltejs/kit';
import { CreateOperator, CheckOperator } from '$lib/server/db.js'; //src\lib\server\server.db.js

import { Email } from 'nodemailer';
import md5 from 'md5';

import pkg from 'lodash';
const { find, findKey } = pkg;

import { request } from 'undici';

// import { CreateServer } from '$lib/server/server.js';
// import { get, set } from 'node-global-storage';
// set('global.rtcPool', { user: {}, operator: {} });
// CreateServer();

global.rtcPool;
import { rtcPool_st } from '$lib/js/stores.js';
rtcPool_st.subscribe((data) => {
	global.rtcPool = data;
});

global.interval;
global.loop = function () {
	try {
		if (!global.interval)
			global.interval = setInterval(async () => {
				const { statusCode, headers, trailers, body } = await request(
					`https://kolmit-service.onrender.com`
				);
				console.log('response received', statusCode);
				console.log('headers', headers);

				for await (const data of body) {
					// console.log('data', data);
				}
				//let resp = fetch('https://kolmit-service.onrender.com/?abonent=nedooleg@gmail.com');
			}, 1000 * 60 * 10);
	} catch (ex) {}
};

global.loop();

/** @type {import('./$types').RequestHandler} */
export async function GET({ url, fetch, cookies }) {
	// let global.rtcPool = get('global.rtcPool');
	const abonent = url.searchParams.get('abonent');
	const text = url.searchParams.get('text');
	const dict = url.searchParams.get('dict');
	const key = url.searchParams.get('key');
	const func = url.searchParams.get('func');
	const lang = url.searchParams.get('lang');

	// debugger;
	if (func === 'reset') {
		cookies.delete('abonent:' + abonent);
	} else if (func === 'cookie') {
		if (lang) {
			try {
				let cookie = cookies.get(`abonent:${abonent}`);
				cookie = JSON.parse(cookie);
				cookie.lang = lang;
				cookies.set(`abonent:${abonent}`, JSON.stringify(cookie));
			} catch (ex) {
				console.log(ex);
			}
		}
		let response = new Response();
		response.headers.append('Access-Control-Allow-Origin', `*`);
		return response;
	} else if (text) {
		// let resp = await fetch('/src/routes/operator/lesson/' + path);
		const level = url.searchParams.get('level');
		const theme = url.searchParams.get('theme');

		let text = await GetText({ owner: abonent, level: level, theme: theme });
		// let data = await resp.text();
		// let items = text.split('\r\n');
		let obj = { text: text };
		let response = new Response(JSON.stringify({ obj }));
		response.headers.append('Access-Control-Allow-Origin', `*`);
		return response;
	} else if (dict) {
		const level = url.searchParams.get('level');
		const theme = url.searchParams.get('theme');
		// let resp = await fetch('/src/routes/operator/lesson/' + path);
		let data = await GetDict({ owner: abonent, type: dict, level: level, theme: theme });
		// let data = await resp.text();
		// let items = text.split('\r\n');
		//debugger;
		if (data) {
			let response = new Response(JSON.stringify({ data }));
			response.headers.append('Access-Control-Allow-Origin', `*`);
			return response;
		}
	} else if (key) {
		const audio = await ReadSpeech({ key: key });

		let response = new Response(JSON.stringify({ audio }));
		response.headers.append('Access-Control-Allow-Origin', `*`);
		return response;
	}

	let response = new Response();
	response.headers.append('Access-Control-Allow-Origin', `*`);
	return response;
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, url, fetch, cookies }) {
	//debugger;
	let resp;

	const { par } = await request.json();
	const q = par;
	let abonent = q['abonent'];
	let res = cookies.get('abonent:' + abonent);
	let kolmit;
	if (res) {
		kolmit = JSON.parse(res);
	} else {
		kolmit = { psw: md5('demo') };
	}

	if (!global.interval) global.loop();

	switch (q.func) {
		case 'operator':
			if (q.email && q.psw) {
				if (await CreateOperator(q)) {
					cookies.set(
						'abonent:' + q.abonent,
						JSON.stringify({
							name: q.name,
							operator: q.email,
							abonent: q.abonent,
							psw: q.psw,
							lang: q.lang
						}),
						{
							maxAge: 31536000, //60 * 60 * 24 * 365,
							path: '/',
							httpOnly: true
						}
					);

					resp = JSON.stringify({
						func: par.func,
						name: q.name,
						operator: q.email,
						abonent: q.email,
						lang: q.lang
					});
				}
			}
			break;

		case 'check':
			SetParams(q);

			if (q.type === 'user') {
				let cnt_queue = 0;
				let item = global.rtcPool[q.type][q.abonent][q.em][q.uid];
				// try {
				// 	// for (let uid in global.rtcPool[q.type][q.abonent]) {
				// 	//     if (global.rtcPool[q.type][q.abonent][q.em][uid])
				// 	//         if (global.rtcPool[q.type][q.abonent][q.em][uid].status === 'call' ||
				// 	//             global.rtcPool[q.type][q.abonent][q.em][uid].status === 'wait')
				// 	//             if (global.rtcPool[q.type][q.abonent][q.em][uid].uid === q.uid) {
				// 	//                 cnt_queue++;
				// 	//             }
				// 	// }
				// } catch (ex) {
				// 	return json({
				// 		ex: ex,
				// 		func: q.func,
				// 		check: true,
				// 		queue: String(cnt_queue)
				// 	});
				// }

				SendOperatorStatus(q);

				// let operators = { [q.em]: {} };
				// for (let uid in global.rtcPool['operator'][q.abonent][q.em]) {
				// 	if (uid !== 'resolve')
				// 		operators[q.em][uid] = {
				// 			type: q.type,
				// 			abonent: q.abonent,
				// 			em: q.em,
				// 			uid: q.uid,
				// 			status: global.rtcPool['operator'][q.abonent][q.em][uid].status
				// 			// queue: queue
				// 		};
				// }

				resp = {
					func: q.func,
					type: q.type,
					check: true,
					queue: String(cnt_queue)
					// operators: operators
				};

				// set('global.rtcPool', global.rtcPool);
			} else if (q.type === 'operator') {
				q.psw = kolmit.psw;
				// console.log(q.em)
				resp = await CheckOperator(q);
			}

			break;
		case 'offer':
			try {
				SetParams(q);
				BroadcastOperatorStatus(q);
			} catch (ex) {
				console.log();
			}

			break;

		case 'call':
			HandleCall(q);

			break;

		case 'status':
			if (q.status === 'call') {
				if (q.type === 'operator') {
					let item = global.rtcPool[q.type][q.abonent][q.em][q.uid];
					if (item) item.status = 'busy';
					BroadcastOperatorStatus(q);
					// global.rtcPool['operator'][q.abonent][q.em].shift();
				}
				break;
			}
			if (q.status === 'close') {
				try {
					let item = global.rtcPool[q.type][q.abonent][q.em][q.uid];
					if (item) {
						item.status = q.status;
						if (q.type === 'operator') BroadcastOperatorStatus(q);
					}
				} catch (ex) {}
				//this.RemoveAbonent(q);
				break;
			}

			SetParams(q);

			break;
	}

	// set('global.rtcPool', global.rtcPool);
	// rtcPool_st.set(global.rtcPool);

	console.log(JSON.stringify(resp));

	let response = new Response(JSON.stringify({ resp }));
	response.headers.append('Access-Control-Allow-Origin', `*`);
	return response;
}

function SendEmail(q, new_email) {
	let em = new Email();
	const abonent = q.abonent ? '&abonent=' + q.abonent : '';
	const mail = q.send_mail || new_email;
	const hash = this.getHash(mail);
	let text = {
		ru: '<h1>Присоединиться к сети</h1></a>',
		en: '<h1>Join network</h1></a>',
		fr: '<h1>Rejoindre le réseau</h1></a>'
	}[q.lang];
	let html =
		"<div><a href='http://localhost:5000/kolmit/site/operator.html?operator=" +
		(q.send_mail || new_email) +
		abonent +
		'&hash=' +
		hash +
		"'>" +
		text +
		'</a></div>';

	em.SendMail(
		'nedol@narod.ru',
		q.send_mail || new_email,
		{
			ru: 'Новый оператор сети Колми',
			en: 'New Kolmi network operator',
			fr: 'Le nouvel opérateur de Kolmi'
		}[q.lang],
		html,
		(result) => {
			console.log();
		}
	);
}

function SetParams(q) {
	if (!global.rtcPool[q.type][q.abonent]) {
		global.rtcPool[q.type][q.abonent] = {};
	}

	if (!global.rtcPool[q.type][q.abonent][q.em]) global.rtcPool[q.type][q.abonent][q.em] = [];

	let item;
	if (q.type === 'user') {
		item = global.rtcPool[q.type][q.abonent][q.em][q.uid];
	} else item = global.rtcPool[q.type][q.abonent][q.em][0];

	if (!item) {
		item = {};
		item.cand = [];
		global.rtcPool[q.type][q.abonent][q.em][q.uid] = item;
	}

	item.uid = q.uid;
	item.status = q.status;
	item.abonent = q.abonent;
	item.operator = q.em;

	if (q.desc) item.desc = q.desc;
	if (Array.isArray(q.cand)) {
		q.cand.forEach((cand, index) => {
			item.cand.push(cand);
		});
	} else if (q.cand) item.cand.push(q.cand);

	// ws.onclose = function (ev) {
	// 	if (q.type === 'operator') {
	// 		let item = _.find(global.rtcPool[q.type][q.abonent][q.em], {
	// 			uid: q.uid
	// 		});
	// 		if (item) item.status = 'close';
	// 		that.BroadcastOperatorStatus(q, 'close');
	// 		const ind = _.findIndex(global.rtcPool[q.type][q.abonent][q.em], {
	// 			uid: q.uid
	// 		});
	// 		global.rtcPool[q.type][q.abonent][q.em].splice(ind, 1);
	// 	} else if ((q.type = 'user')) {
	// 		if (global.rtcPool[q.type][q.abonent]) {
	// 			that.SendUserStatus(q);
	// 			const index = _.findIndex(global.rtcPool[q.type][q.abonent][q.em], {
	// 				uid: q.uid
	// 			});
	// 			global.rtcPool[q.type][q.abonent][q.em].splice(index, 1);
	// 		}
	// 	}
	// };
}

function BroadcastOperatorStatus(q, check) {
	try {
		let queue = 0;
		if (!global.rtcPool['user'][q.abonent]) return;
		for (let uid in global.rtcPool['user'][q.abonent][q.em]) {
			if (q.uid && global.rtcPool['user'][q.abonent][q.em][uid]) {
				queue++;
			}
		}
		let type = q.type === 'operator' ? 'user' : 'operator';

		let operators = { [q.em]: {} };
		for (let uid in global.rtcPool['operator'][q.abonent][q.em]) {
			if (uid !== 'resolve')
				operators[q.em][uid] = {
					type: q.type,
					abonent: q.abonent,
					em: q.em,
					uid: q.uid,
					status: global.rtcPool['operator'][q.abonent][q.em][uid].status,
					queue: queue
				};
		}

		for (let em in global.rtcPool[type][q.abonent]) {
			if (em === q.em && q.status === 'call')
				//not to send to yourself
				continue;
			for (let uid in global.rtcPool[type][q.abonent][em]) {
				let item = global.rtcPool[type][q.abonent][em][uid];
				let offer = find(operators[q.em], { status: 'offer' });
				if (
					offer &&
					// && item.abonent === q.em
					item.uid !== q.uid
				) {
					if (item.status === 'wait') {
						let oper = global.rtcPool['operator'][q.abonent][q.em][q.uid];

						let remAr = {
							func: q.func,
							type: type,
							abonent: q.abonent,
							oper_uid: q.uid,
							desc: oper.desc,
							cand: oper.cand
						};
						if (global.rtcPool[type][q.abonent][em].resolve)
							global.rtcPool[type][q.abonent][em].resolve(remAr);
					} else {
						if (global.rtcPool[type][q.abonent][em].resolve)
							global.rtcPool[type][q.abonent][em].resolve({
								func: q.func,
								type: type,
								abonent: q.abonent,
								em: q.em,
								uid: q.uid,
								operators: operators
							});
					}
				} else {
					if (global.rtcPool[type][q.abonent][em].resolve)
						global.rtcPool[type][q.abonent][em].resolve({
							func: q.func,
							type: type,
							abonent: q.abonent,
							em: em,
							uid: q.uid,
							operators: operators
						});
				}
			}
		}

		operators = '';
	} catch (ex) {
		console.log(ex);
	}
}

function SendOperatorStatus(q) {
	if (
		global.rtcPool['operator'] &&
		global.rtcPool['operator'][q.abonent] &&
		global.rtcPool['operator'][q.abonent][q.em]
	) {
		for (let uid in global.rtcPool['operator'][q.abonent][q.em]) {
			if (global.rtcPool['operator'][q.abonent][q.em][uid].status === 'offer') {
				let operator = {
					abonent: q.abonent,
					em: q.em,
					uid: uid,
					status: global.rtcPool['operator'][q.abonent][q.em][uid].status,
					desc: global.rtcPool['operator'][q.abonent][q.em][uid].desc,
					cand: global.rtcPool['operator'][q.abonent][q.em][uid].cand
				};

				if (q.type === 'user') {
					let item = global.rtcPool['user'][q.abonent][q.em][q.uid];

					global.rtcPool['user'][q.abonent][q.em].resolve({ operator: operator });
				}
			}
		}
	}
}

let remAr = [];
async function HandleCall(q) {
	if (q.type === 'user') {
		if (q.desc || q.cand) {
			remAr = [];
			remAr.push({
				func: q.func,
				desc: q.desc,
				cand: q.cand,
				abonent: q.abonent,
				user: q.em
				// "abonent": q.em
			});
			if (!global.rtcPool['operator'][q.abonent][q.em]) return;
			let item = global.rtcPool['operator'][q.abonent][q.em][q.oper_uid];

			if (item) {
				await global.rtcPool['operator'][q.abonent][q.em].promise;
				if (global.rtcPool['operator'][q.abonent][q.em].resolve) {
					await global.rtcPool['operator'][q.abonent][q.em].resolve(remAr);
					console.log('HandleCall to user', remAr);
				}
			}
		} else {
			let item = global.rtcPool['user'][q.abonent][q.em][q.uid];

			if (item) {
				let oper_check = findKey(global.rtcPool['operator'][q.abonent][q.em], {
					status: 'check'
				});

				let oper_offer_key = findKey(global.rtcPool['operator'][q.abonent][q.em], {
					status: 'offer'
				});

				let oper_offer = global.rtcPool['operator'][q.abonent][q.em][oper_offer_key];

				if (oper_offer) {
					remAr.push({
						func: q.func,
						abonent: q.abonent,
						uid: q.uid,
						oper_uid: oper_offer.uid,
						desc: oper_offer.desc,
						cand: oper_offer.cand
					});
					await global.rtcPool['operator'][q.abonent][q.em].promise;
					if (global.rtcPool['user'][q.abonent][q.operator].resolve)
						global.rtcPool['user'][q.abonent][q.operator].resolve(remAr);
					console.log('after HandleCall:user ' + JSON.stringify(remAr));
					remAr = [];
				} else {
					item.status = 'wait';
					remAr.push({
						func: q.func,
						abonent: q.abonent,
						status: 'wait'
					});
					await global.rtcPool['operator'][q.abonent][q.em].promise;
					if (global.rtcPool['user'][q.abonent][q.em].resolve)
						global.rtcPool['user'][q.abonent][q.em].resolve(remAr);

					if (oper_check && oper_check.resolve) {
						let remAr = {
							func: q.func,
							abonent: q.abonent,
							user_uid: item.uid,
							status: 'wait'
						};
						oper_check.resolve(remAr);
						remAr = [];
					}
				}
			}
		}
	}
}
