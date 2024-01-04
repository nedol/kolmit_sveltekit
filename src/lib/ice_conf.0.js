export let ice_conf = {
	stun: [
		{ urls: 'stun:stun1.l.google.com:19302' },
		{ urls: 'stun:stun2.l.google.com:19302' },
		{ urls: 'stun:stun3.l.google.com:19302' },
		{ urls: 'stun:stun4.l.google.com:19302' }
	],
	turn: [
		{
			urls: 'turn:0.0.0.0:3478?transport=tcp',
			username: 'username',
			credential: 'password'
		}
	],
	lifetimeDuration: '86400s'
};
