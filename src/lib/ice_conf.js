export const ice_conf = {
	stun: {
		urls: [
			'stun:stun1.l.google.com:19302',
			'stun:stun2.l.google.com:19302',
			'stun:stun3.l.google.com:19302',
			'stun:stun4.l.google.com:19302'
		]
	},
	turn: {
		urls: [
			'turn:delivery-angels.com:3478?transport=udp',
			'turn:delivery-angels.com:3478?transport=tcp',
			'turn:delivery-angels.com:5349?transport=udp',
			'turn:delivery-angels.com:5349?transport=tcp'
		],
		username: 'guest',
		credential: 'password'
	},
	lifetimeDuration: '86400s'
};
