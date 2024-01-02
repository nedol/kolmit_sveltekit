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
		urls: 'turn:openrelay.metered.ca:80',
		username: 'openrelayproject',
		credentials: 'openrelayproject'
	},
	lifetimeDuration: '86400s'
};
