<script>
	import { msg_signal_oper, msg_signal_user } from '$lib/js/stores.js';

	import { server_path } from '$lib/js/stores.js';

	import { getContext } from 'svelte';

	getContext('operator');
	// this.msg_signal_oper = msg_signal_oper;
	// this.msg_signal_user = msg_signal_user;
	// this.operator = operator;

	export async function SendMessage(par, cb) {
		par.operator = operator;
		let response;
		console.log('server:' + $server_path);
		response = await fetch($server_path + '/site', {
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

	export async function CallWaiting(par) {
		par.func = 'callwaiting';
		const response = await fetch($server_path + '/operator/', {
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
				$msg_signal_oper.set(resp);
			});
		} else {
			$msg_signal_oper.set(remAr);
		}
		//console.log(resp);
		CallWaiting(par);
	}

	export async function OperatorWaiting(par) {
		const response = await fetch($server_path + '/user/', {
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
				$msg_signal_user.set(resp);
			});
		} else {
			$msg_signal_user.set(remAr);
		}

		OperatorWaiting(par);
	}
</script>
