// 'use strict';

// import {log} from './utils'

import { msg_signal_oper, msg_signal_user } from '$lib/js/stores.js';

let server = '';
import { server_path } from '$lib/js/stores.js';
server_path.subscribe((data) => {
	if (data) server = data;
});
// export const msg = writable('');

export class SignalingChannel {
	constructor(operator) {
		this.msg_signal_oper = msg_signal_oper;
		this.msg_signal_user = msg_signal_user;
		this.operator = operator;
	}

	async SendMessage(par, cb) {
		par.operator = this.operator;
		let response;
		console.log('server:' + server);
		response = await fetch(server + '/site', {
			method: 'POST',
			mode: 'no-cors',
			body: JSON.stringify({ par }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const { resp } = await response.json();
		// console.log(resp);
		if (cb) cb(resp);
	}

	async CallWaiting(par) {
		par.func = 'callwaiting';
		const response = await fetch(server + '/operator/', {
			method: 'POST',
			mode: 'no-cors',
			body: JSON.stringify({ par }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const { resp } = await response.json();
		let remAr = resp;
		if (Array.isArray(remAr)) {
			remAr.map((resp) => {
				msg_signal_oper.set(resp);
			});
		} else {
			msg_signal_oper.set(remAr);
		}
		//console.log(resp);
		this.CallWaiting(par);
	}

	async OperatorWaiting(par) {
		const response = await fetch(server + '/user/', {
			method: 'POST',
			mode: 'no-cors',
			body: JSON.stringify({ par }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const { resp } = await response.json();

		let remAr = resp;
		if (Array.isArray(remAr)) {
			remAr.map((resp) => {
				msg_signal_user.set(resp);
			});
		} else {
			msg_signal_user.set(remAr);
		}

		this.OperatorWaiting(par);
	}
}
