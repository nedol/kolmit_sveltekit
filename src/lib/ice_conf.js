export let ice_conf = {
	stun: [
		{ urls: 'stun:stun.relay.metered.ca:80' },
		{ urls: 'stun:stun1.l.google.com:19302' },
		{ urls: 'stun:stun2.l.google.com:19302' },
		{ urls: 'stun:stun3.l.google.com:19302' },
		{ urls: 'stun:stun4.l.google.com:19302' }
	],
	turn: [
		// {
		// 	urls: 'turn:standard.relay.metered.ca:80',
		// 	username: '077cf3ec6ba3c88b0fc27137',
		// 	credential: 'Veamdb+7k9Zf/C/W'
		// },
		// {
		// 	urls: 'turn:standard.relay.metered.ca:80?transport=tcp',
		// 	username: '077cf3ec6ba3c88b0fc27137',
		// 	credential: 'Veamdb+7k9Zf/C/W'
		// },
		// {
		// 	urls: 'turn:standard.relay.metered.ca:443',
		// 	username: '077cf3ec6ba3c88b0fc27137',
		// 	credential: 'Veamdb+7k9Zf/C/W'
		// },
		// {
		// 	urls: 'turn:standard.relay.metered.ca:443?transport=tcp',
		// 	username: '077cf3ec6ba3c88b0fc27137',
		// 	credential: 'Veamdb+7k9Zf/C/W'
		// },
		{
			urls: 'turn:relay1.expressturn.com:3478?transport=tcp',
			username: 'ef5N75GPIIOV97AS3J',
			credential: 'sIWl6OqxV67ZogkM'
		}
	],
	lifetimeDuration: '86400s'
};
