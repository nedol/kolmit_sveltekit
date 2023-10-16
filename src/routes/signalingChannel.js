import { msg_signal_oper, msg_signal_user } from '$lib/js/stores.js';

import { server_path } from '$lib/js/stores.js';
let server;
server_path.subscribe((data) => {
	server = data;
});

const token = 'CPkJ1MYWC7DMlvw6MvtV0yBw';
const headers = {
	'Content-Type': 'application/json'
	// Authorization: `Bearer ${token}`
};

export class SignalingChannel {
	constructor(operator) {
		this.msg_signal_oper = msg_signal_oper;
		this.msg_signal_user = msg_signal_user;
		this.operator = operator;
	}

	async SendMessage(par, cb) {
		par.operator = this.operator;
		fetch(server + '/', {
			method: 'POST',
			// mode: 'no-cors',
			body: JSON.stringify({ par }),
			headers: { headers }
		})
			.then((response) => response.json())
			.then((data) => {
				// console.log(resp);
				if (cb) cb(data);
			})
			.catch((error) => {
				console.log(error);
				return [];
			});
	}
}
