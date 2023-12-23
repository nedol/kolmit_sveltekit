export let ice_conf = {
	stun: {
		urls: [
			'stun:stun1.l.google.com:19302',
			'stun:stun2.l.google.com:19302',
			'stun:stun3.l.google.com:19302',
			'stun:stun4.l.google.com:19302'
		]
	},
	turn: {
		urls: ['turn:localhost:3478?transport=udp', 'turn:localhost:3478?transport=tcp'],
		username: 'username',
		credential: 'password'
	},
	lifetimeDuration: '86400s'
};
