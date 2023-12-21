<script>
	import { onMount, onDestroy } from 'svelte';
	import md5 from 'md5';
	import RTCUser from './rtc/RTCUser';
	import Profile from './modal/Profile.svelte';
	import DropdownList from './DropdownList.svelte';
	import VideoLocal from './Video.local.svelte';
	import VideoRemote from './Video.remote.svelte';
	import CallButtonUser from './CallButtonUser.svelte';
	import Download from './Download.svelte';
	import AudioLocal from './Audio.local.svelte';
	import AudioRemote from './Audio.remote.svelte';
	import RecordedVideo from './RecordedVideo.svelte';

	export let abonent, em, operator, poster, name;

	import { signal } from '$lib/js/stores.js';

	import { call_but_status } from '$lib/js/stores.js';

	import { click_call_func } from '$lib/js/stores.js';
	$click_call_func = null;

	import pkg from 'lodash';
	const { groupBy, find } = pkg;

	import './lib/icofont/icofont.min.css';

	import { msg_user } from '$lib/js/stores.js';
	$: if ($msg_user) {
		// if ($msg_user.em) {
		// 	if ($msg_user.em === em) OnMessage($msg_user);
		// } else {
		OnMessage($msg_user);
		// }
	}

	// import { dc_msg } from '$lib/js/stores.js';
	// $: if ($dc_msg) {
	// 	OnMessage($dc_msg);
	// }

	let checked = false;

	const uid = md5(abonent + em + operator);

	let rtc;
	let selected,
		inter,
		status = 'inactive',
		profile = false,
		card;

	let video_button_display = false;
	let video_element, parent_div;

	import { users } from '$lib/js/stores.js';

	$: if (status) {
		let user = find($users[0].staff, { email: em });
		if (user) user.status = status;
	}

	let progress = {
		display: 'none',
		value: 0
	};

	let video = {
		display: 'none'
	};

	let local = {
		video: {
			display: 'none',
			srcObject: ''
		},
		audio: {
			paused: true,
			src: ''
		}
	};

	let remote = {
		video: {
			display: 'block',
			srcObject: '',
			poster: poster
		},
		audio: {
			muted: true,
			srcObject: ''
		}
	};

	let select = {
		display: false
	};

	let user = {
		em: em,
		abonent: abonent,
		type: 'user'
	};

	onMount(async () => {
		rtc = new RTCUser(user, uid, $signal);
		rtc.SendCheck();

		rtc.OnOpenDataChannel = () => {
			console.log('OnOpenDataChannel');
		};

		rtc.GetRemoteAudio = () => {
			return remote.audio.srcObject;
		};
		rtc.SetRemoteAudio = (src) => {
			remote.audio.srcObject = src;
		};
		rtc.SendToComponent = OnMessage;

		rtc.SetLocalVideo = (src) => {
			local.video.srcObject = src;
		};

		rtc.SetRemoteVideo = (src) => {
			remote.video.srcObject = src;
			remote.video.display = 'block';
			status = 'talk';
			// $call_but_status = 'talk';
			remote.audio.paused = true;
		};
		// $call_but_status = status;
	});

	// onDestroy();

	function OnLongPress() {
		select.display = true;
	}

	function OnMute() {
		status = 'talk';
		// $call_but_status = 'talk';
		OnClickCallButton();
	}

	function OnChangeFile(e) {
		try {
			let file = e.target.files[0];
			let reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = function (file) {
				rtc.DC.SendFile(file);
			};
		} catch (ex) {}
	}

	function OnMessage(data) {
		if (data.operators && data.operators[em]) {
			let res = groupBy(data.operators[em], 'status');
			try {
				if (res && res['offer']) {
					if (status !== 'call') {
						status = 'active';
						// $call_but_status = 'active';
					}
				} else if (res['busy']) {
					// if ($click_call_func === null)
					status = 'busy';
				} else if (res['close']) {
					local.video.display = 'none';
					// remote.video.display = 'none';
					local.audio.paused = true;
					remote.audio.muted = true;
					//rtc.abonent = url.searchParams.get('abonent');
					status = 'inactive';
					// $call_but_status = 'inactive';
					$click_call_func = null; //operator -> OnClickCallButton
					parent_div.appendChild(card);
					rtc.OnInactive();
					video_element.src = '';
				}
			} catch (ex) {
				console.log(ex);
			}
		}

		if (data.operator && data.operator.em === rtc.em) {
			status = 'active';
			// $call_but_status = 'active';
		}

		// TODO: to delete
		if (data.desc && data.cand) {
			if (status === 'talk') {
				// status = 'talk';
			} else {
				// status = 'call';
			}
		}

		if (data.func === 'mute') {
			local.audio.paused = true;
			remote.audio.muted = true;
			video_button_display = false;
			local.video.display = 'none';
			// remote.video.display = 'none';
			// rtc.abonent = url.searchParams.get('abonent');
			status = 'inactive';
			$call_but_status = 'inactive';
			$click_call_func = null; //operator -> OnClickCallButton
			parent_div.appendChild(card);
			// video_element.load();
		}

		if (data.func === 'talk') {
			$call_but_status = 'talk';
			if (data.em && data[em]) {
				status = 'talk';

				clearInterval(inter);
				video_button_display = true;
				local.audio.paused = true;
				remote.audio.muted = false;
				video_button_display = 'block';
				// local.video.display = "block";
				remote.video.display = 'block';
			}
		}

		if (data.func === 'redirect') {
			status = 'call';
			// $call_but_status = 'call';
			local.audio.paused = true;
			remote.audio.muted = true;

			remote.video.srcObject = null;
			remote.video.display = 'none';
		}

		// $call_but_status = status;
	}

	function OnClickCallButton() {
		try {
			// Fix up for prefixing
			if (!window.AudioContext) {
				window.AudioContext = window.AudioContext || window.webkitAudioContext;
				let audioCtx = new AudioContext();
				rtc.localSoundSrc = audioCtx.createMediaElementSource(rtc.localSound);
				rtc.localSoundSrc.connect(audioCtx.destination);
			}
		} catch (ex) {
			console.log('Web Audio API is not supported in this browser');
		}

		console.log();

		switch (status) {
			case 'inactive':
				// status = 'wait';
				// Call();
				// remote.video.srcObject = null;
				break;

			// case 'wait':
			// 	status = 'inactive';
			// 	// $call_but_status = 'inactive';
			// 	rtc.SendCheck();
			// 	break;
			case 'active':
				$click_call_func = OnClickCallButton;
				function call() {
					rtc.Call();
					status = 'call';
					$call_but_status = 'call';
					video_element.load();
					document.getElementsByClassName('placeholder')[0].appendChild(card);

					window.scrollTo({ top: 0, behavior: 'smooth' });
				}

				call();

				break;
			case 'call':
				status = 'inactive';
				$call_but_status = 'inactive';

				local.audio.paused = true;
				local.video.display = 'none';
				video_button_display = 'none';
				clearInterval(inter);
				rtc.OnInactive();
				$click_call_func = null; //operator -> OnClickCallButton
				parent_div.appendChild(card);
				break;
			case 'talk':
				status = 'inactive';
				$call_but_status = 'inactive';
				remote.audio.muted = true;
				local.video.display = 'none';
				// remote.video.display = 'none';
				video_button_display = 'none';
				rtc.OnInactive();
				$click_call_func = null; //operator -> OnClickCallButton
				parent_div.appendChild(card);
				video_element.poster = '';
				video_element.load();

				video_element.poster = remote.video.poster;
				break;
			case 'muted':
				status = 'inactive';
				// $call_but_status = 'inactive';
				video_button_display = 'none';
				$click_call_func = null; //operator -> OnClickCallButton
				parent_div.appendChild(card);
				break;
			case 'busy':
				// rtc.Call();
				if ($call_but_status === 'talk') {
					status = 'inactive';
					$call_but_status = 'inactive';
					rtc.OnInactive();
				}

				// $click_call_func = null; //operator -> OnClickCallButton
				// parent_div.appendChild(card);
				// video_element.load();
				// video_element.src = '';
				// video_element.poster = remote.video.poster;
				break;
			default:
				break;
		}
	}
</script>

<VideoRemote
	{...remote.video}
	{name}
	{em}
	bind:parent_div
	bind:video_element
	bind:card
	bind:status
	on:click={OnClickCallButton}
	on:mute={OnMute}
/>
