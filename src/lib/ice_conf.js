export let ice_conf = {
	stun: {
		urls: [
			'stun:stun.relay.metered.ca:80',
			'stun:stun1.l.google.com:19302',
			'stun:stun2.l.google.com:19302',
			'stun:stun3.l.google.com:19302',
			'stun:stun4.l.google.com:19302'
		]
	},
	turn: {
		urls: [
			'turn:standard.relay.metered.ca:80',
			'turn:standard.relay.metered.ca:80?transport=tcp',
			'turn:standard.relay.metered.ca:443',
			'turn:standard.relay.metered.ca:443?transport=tcp'
		],
		username: '077cf3ec6ba3c88b0fc27137',
		credential: 'Veamdb+7k9Zf/C/W'
	},
	lifetimeDuration: '86400s'
};
