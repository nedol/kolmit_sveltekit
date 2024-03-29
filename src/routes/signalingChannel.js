import { msg_oper, msg_user } from '$lib/js/stores.js';

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
		this.msg_oper = msg_oper;
		this.msg_user = msg_user;
		this.operator = operator;
	}

	async SendMessage(par, cb) {
		par.operator = this.operator;
		fetch('./', {
			method: 'POST',
			// mode: 'no-cors',
			body: JSON.stringify({ par }),
			headers: { headers }
		})
			.then((response) => response.json())
			.then((data) => {
				// console.log(resp);
				msg_user.set(data.resp);
				if (cb) cb(data);
			})
			.catch((error) => {
				console.log(error);
				return [];
			});
	}
}
