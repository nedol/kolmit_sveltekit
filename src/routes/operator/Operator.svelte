<script>
	import { onMount, getContext, setContext } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	import '../assets/icofont/icofont.min.css';

	import IconButton, { Icon } from '@smui/icon-button';
	import { mdiAccountBox } from '@mdi/js';
	import CircularProgress from '@smui/circular-progress';
	// import {Dict} from '$lib/js/$dicts'
	import Callcenter from './callcenter/Callcenter.svelte';
	let callcenter;
	import { RTCOperator } from './rtc/RTCOperator.js';
	import * as cookie from 'cookie';

	import CallButton from './callbutton/CallButtonOperator.svelte';
	// import BurgerMenu from './menu/BurgerMenu.svelte';
	import VideoLocal from './Video.local.svelte';
	import VideoRemote from './Video.remote.svelte';

	import Download from './Download.svelte';
	import AudioLocal from './Audio.local.svelte';
	import AudioRemote from './Audio.remote.svelte';

	import RecordedVideo from './RecordedVideo.svelte';

	import Lesson from './lesson/Lesson.svelte';

	import pkg from 'lodash';
	const { find } = pkg;

	import md5 from 'md5';

	import { tts } from '$lib/js/stores.js';

	import Speech from 'speak-tts'; // es6

	import { lesson } from '$lib/js/stores.js';

	import { signal } from '$lib/js/stores.js';

	import { users } from '$lib/js/stores.js';
	export let users_;
	$users = users_;

	import { click_call_func } from '$lib/js/stores.js';

	import { msg_user } from '$lib/js/stores.js';
	$: if ($msg_user) {
		OnMessage($msg_user);
	}

	import { msg_oper } from '$lib/js/stores.js';
	$: if ($msg_oper) {
		OnMessage($msg_oper);
	}

	import { view } from '$lib/js/stores.js';

	let rtc;
	let voice;
	let selected;
	let call_cnt, inter;
	let video_button_display = false;
	let video_progress = false;
	let edited_display = false;

	import { call_but_status } from '$lib/js/stores.js';
	$call_but_status = 'inactive';

	import { editable } from '$lib/js/stores.js';
	$: if ($editable) {
		edited_display = $editable;
	}

	export let email, abonent, name;
	const uid = md5(email);
	import { operator } from '$lib/js/stores.js';
	import { posterst } from '$lib/js/stores.js';

	// import { dc_msg } from '$lib/js/stores.js';
	// $: if ($dc_msg) {
	// 	OnMessage($dc_msg);
	// }

	$: if (remote.text.msg) {
		console.log(remote.text.msg);
	}

	let container;

	const token = 'CPkJ1MYWC7DMlvw6MvtV0yBw';
	const headers = {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${token}`
	};

	async function CallWaiting(par) {
		par.func = 'callwaiting';

		fetch(`/operator`, {
			method: 'POST',
			// mode: 'no-cors',
			body: JSON.stringify({ par }),
			headers: { headers }
		})
			.then((response) => response.json())
			.then((data) => {
				if (Array.isArray(data.resp)) {
					data.resp.map((resp) => {
						$msg_oper = resp;
					});
				} else {
					$msg_oper = data.resp;
				}
				if (true /*!rtc.DC.dc*/) {
					CallWaiting(par);
				}
			})
			.catch((error) => {
				console.log(error);
				return [];
			});
	}

	function InitTTS() {
		$tts = new Speech();
		if ($tts.hasBrowserSupport()) {
			console.log('speech synthesis supported');
		}

		$tts.init({
			volume: 1,
			lang: 'nl-BE',
			rate: 1,
			pitch: 1,
			// voice: 'Dutch Belgium',
			splitSentences: true,
			listeners: {
				onvoiceschanged: (voices) => {
					// Вывод информации о голосах
					voices.forEach((v, index) => {
						if (v.name.includes('Dutch') && v.lang.includes('nl') && v.lang.includes('BE')) {
							console.log(`Голос ${index + 1}: ${v.name}, Язык: ${v.lang}`);
							$tts.setVoice(v.name);
							voice = v;
							return;
						}
					});
				},
				onerror: () => {
					$tts.cancel();
				}
			}
		});
	}

	onMount(async () => {
		try {
			rtc = new RTCOperator($operator, uid, $signal);
			initRTC();
			rtc.SendCheck();
			CallWaiting($operator);
		} catch (ex) {
			console.log();
		}

		//InitTTS();

		const synthesis = window.speechSynthesis;
		let voices = synthesis.getVoices();
		selectVoice(voices);
		if (!voices)
			synthesis.onvoiceschanged = (event) => {
				const voices = synthesis.getVoices();
				selectVoice(voices);
			};

		function selectVoice(voices) {
			for (let v in voices) {
				$tts = { voice: voices[v] };
				if (voices[v].lang.includes('nl')) {
					$tts = { voice: voices[v] };
					if (voices[v].lang.includes('BE')) {
						// utterance.voice = voices[index]; //'Microsoft Bart - Dutch (Belgium)';
						$tts = { voice: voices[v] };
						break;
					}
				}
			}
		}

		// setTimeout(() => {
		// 	$tts = {
		// 		speak: function (textObj) {
		// 			if ('speechSynthesis' in window) {
		// 				// Получаем доступные голоса
		// 				// let voices = await synthesis.getVoices();
		// 				// Создаем объект с параметрами речи
		// 				const utterance = new SpeechSynthesisUtterance(textObj.text);
		// 				utterance.lang = 'nl-BE';
		// 				utterance.onerror = (event) => {
		// 					// console.log(event);
		// 					synthesis.cancel();
		// 				};
		// 				utterance.onend = (event) => {
		// 					synthesis.cancel();
		// 				};
		// 				// Запускаем озвучивание
		// 				utterance.voice = voice;
		// 				console.log(`Голос: ${voice.name}, Язык: ${voice.lang}`);
		// 				synthesis.speak(utterance);
		// 				// synthesis.cancel();
		// 			} else {
		// 				alert('Web Speech API не поддерживается в вашем браузере.');
		// 			}
		// 		},
		// 		cancel: function () {
		// 			synthesis.cancel();
		// 		},
		// 		voice: voice
		// 	};
		// }, 10);
	});

	let progress = {
		display: 'block',
		value: 0
	};

	let local = {
		video: {
			display: 'none',
			srcObject: '',
			poster: ''
		},
		audio: {
			paused: true,
			src: ''
		}
	};

	let remote = {
		text: {
			display: 'none',
			msg: 'You have a call from:',
			name: '',
			email: ''
		},
		video: {
			display: 'none',
			srcObject: '',
			poster: ''
		},
		audio: {
			muted: true,
			srcObject: ''
		}
	};

	let profile = {
		display: 'none'
	};

	$operator = {
		type: 'operator',
		em: email,
		abonent: abonent,
		uid: uid,
		name: name,
		img: $posterst
	};
	if ($operator.em === abonent) {
		$operator.role = 'admin';
	} else {
		$operator.role = 'user';
	}

	function onTransFile(params) {
		let event = new MouseEvent('click', {
			bubbles: true,
			cancelable: true,
			view: window
		});
		document.getElementById('files').dispatchEvent(event);
	}

	$: if (selected)
		switch (selected) {
			case 1:
				break;
			case 2:
				edited_display = true;
				break;

			case 10:
				break;
		}

	setContext('abonent', abonent);

	// const SendToComponent = OnMessage;

	async function initRTC() {
		// rtc ..set(rtc .;
		//rtc .type = "operator";

		rtc.PlayCallCnt = () => {
			video_progress = false;

			if (!call_cnt) local.audio.paused = false;
			call_cnt = 10;

			inter = setInterval(function () {
				call_cnt--;

				if (call_cnt === 0) {
					clearInterval(inter);
					local.audio.paused = true;
				}
			}, 2000);
		};
		// rtc .SendToComponent = OnMessage;
		rtc.GetRemoteAudio = () => {
			return remote.audio.srcObject;
		};
		rtc.SetRemoteAudio = (src) => {
			if (src) remote.audio.srcObject = src;
		};
		rtc.GetRemoteVideo = () => {
			return remote.video.srcObject;
		};
		rtc.SetLocalVideo = (src) => {
			if (src) local.video.srcObject = src;
		};

		rtc.SetRemoteVideo = (src) => {
			if ($call_but_status === 'talk') {
				remote.video.poster = '';
				remote.video.srcObject = src;
				remote.video.display = 'block';
				local.audio.paused = true;
			}
		};
	}

	function OnLongPress() {
		select.display = true;
	}

	function OnClickCallButton() {
		try {
			// Fix up for prefixing
			if (!window.AudioContext) {
				window.AudioContext = window.AudioContext || window.webkitAudioContext;
				let audioCtx = new AudioContext();
				rtc.localSoundSrc = audioCtx.createMediaElementSource(window.user.localSound);
				rtc.localSoundSrc.connect(audioCtx.destination);
			}
		} catch (ex) {
			console.log('Web Audio API is not supported in this browser');
		}

		// console.log($call_but_status);

		switch ($call_but_status) {
			case 'inactive':
				rtc.Offer();
				$call_but_status = 'active';
				break;

			case 'active':
				$call_but_status = 'inactive';
				rtc.OnInactive();

				break;
			case 'call':
				$call_but_status = 'talk';
				clearInterval(inter);
				local.audio.paused = true;
				remote.audio.muted = false;
				rtc.OnTalk();
				video_button_display = true;
				remote.text.display = 'none';
				// const dispatch = createEventDispatcher();
				// dispatch('talk');
				// const event = new Event('talk');
				// document.getElementsByTagName('body')[0].dispatchEvent(event);

				break;
			case 'talk':
				remote.audio.muted = true;
				local.video.display = 'none';
				video_button_display = false;
				remote.video.display = 'none';
				remote.video.srcObject = '';
				remote.video.poster = '';
				remote.text.display = 'none';
				remote.text.name = '';
				remote.text.email = '';
				$call_but_status = 'inactive';
				rtc.OnInactive();
				break;
			case 'muted':
				$call_but_status = 'inactive';

				local.video.srcObject = '';
				remote.audio.muted = true;
				remote.video.display = 'none';
				remote.video.srcObject = '';
				remote.video.poster = '';
				remote.text.display = 'none';
				// local.video.poster = UserSvg;
				rtc.OnInactive();
				break;
			default:
				return;
		}
	}

	$click_call_func = OnClickCallButton;

	$: if (!$click_call_func) {
		$click_call_func = OnClickCallButton;
	}

	function openProfile(id) {
		profile.display = 'block';
	}

	function OnClickVideoButton() {
		$call_but_status = 'talk';
		local.audio.paused = true;
		local.video.display = 'block';
		video_button_display = false;
		video_progress = true;

		if (rtc.DC.dc.readyState === 'open') {
			rtc.GetUserMedia({ audio: 1, video: 1 }, function () {
				rtc.SendVideoOffer(rtc.main_pc);
			});
		}
	}

	function OnPlayVideo() {
		video_progress = false;
	}

	function OnMessage(data, resolve) {
		if (data.call || data.func === 'call') {
			if ($call_but_status === 'active') {
				$call_but_status = 'call';
			}

			rtc.OnCall();

			remote.text.display = 'block';
			video_button_display = false;

			if (data.profile) {
				let profile = data.profile;
				let avatar = profile.img;
				remote.video.poster = avatar;
				if (avatar) remote.video.display = 'block';

				remote.text.name = profile.name;
				remote.text.email = profile.email;
			}
		}

		if (data.func === 'mute') {
			local.audio.paused = true;
			remote.audio.muted = true;
			video_button_display = false;
			local.video.display = 'none';
			local.video.srcObject = '';
			// local.video.display = 'block';
			remote.video.srcObject = '';
			remote.video.poster = '';
			remote.video.display = 'none';
			remote.text.name = '';
			remote.text.email = '';
			remote.text.display = 'none';
			// local.video.poster = UserSvg;
			rtc.OnInactive();
			if ($call_but_status === 'talk') {
				$call_but_status = 'inactive';
				// rtc .OnInactive();
			} else if ($call_but_status === 'call') {
				$call_but_status = 'inactive';
				rtc.OnMute();
				// callcenter.GetUsers();
				$click_call_func();
			}
			if (resolve) resolve();
		}

		if (data.camera) {
			local.video.src = that.localStream;
		}

		if (data.lesson) {
			$view = 'lesson';
			if (data.lesson) {
				$lesson.data = {
					quiz: data.lesson.quiz,
					html: data.lesson.html,
					question: data.lesson.question,
					answer: data.lesson.answer,
					func: data.lesson.func
				};
			}
		}
	}
</script>

<div style="display:flex; height:70px; flex-wrap: nowrap;justify-content: space-between;">
	<!-- <VideoLocal {...local.video} /> -->
	<div class="placeholder">
		{#if remote.text.display}
			<VideoRemote {...remote.video} name={remote.text.name} em={$operator.em}>
				<div
					class="remote_text_display"
					style="display:{remote.text.display};	
						position:relative;			
						background-color: rgba(125, 125, 125, 0.5);
						z-index: 1"
				>
					<!-- <p
						class="remote_msg"
						style="font-size: .7em; white-space: nowrap; color:white; margin:auto;text-align: center;"
					>
						{remote.text.msg} <br />
						{remote.text.name}
					</p> -->
				</div>
			</VideoRemote>
		{:else}
			<div
				style="block;
				max-width: 50px;
				max-height: 50px;"
			></div>
		{/if}
	</div>

	<div style="flex:50%" />

	<div>
		<!-- {@debug $call_but_status} -->
		<CallButton on:click={$click_call_func} bind:status={$call_but_status} {OnLongPress}>
			<b
				class="call_cnt"
				style="display:none;position: relative;left:22px;top:10px;color:#0e0cff;font-size: 12px;"
				>100</b
			>
			<span
				class="badge badge-primary badge-pill call-queue"
				style="display:none;position: relative;right:0px;bottom:0px;color:#0e0cff;font-size: 12px;opacity:1"
				>0</span
			>
		</CallButton>
	</div>

	<div style="flex:48%" />
	<div class="video" on:click={OnClickVideoButton} on:loadstart={OnPlayVideo}>
		{#if video_button_display}
			<Icon tag="svg" viewBox="0 0 24 24">
				<path fill="currentColor" style="color:grey" d={mdiAccountBox} />
			</Icon>
			<!-- <i class="video icofont-ui-video-chat"  on:click = {OnClickVideoButton}
                        style="position: absolute; right: 0; top: 0; stroke:black; stroke-width: 2px; color: lightgrey; font-size: 30px; z-index: 20;"></i>  -->
		{/if}

		{#if video_progress}
			<div style="position: absolute; top: -10px;">
				<CircularProgress style="height: 30px; width: 30px;" indeterminate />
			</div>
		{/if}
	</div>

	<div style="position:relative; right: 5px; width: 70px;	height: 70px;">
		<VideoLocal {...local.video}>
			<svelte:fragment slot="footer">
				<div bind:this={container} />
			</svelte:fragment>
		</VideoLocal>
	</div>
</div>

<div>
	<AudioLocal {...local.audio} bind:paused={local.audio.paused} />
	<AudioRemote {...remote.audio} bind:srcObject={remote.audio.srcObject} />

	<RecordedVideo />
	<Download />
</div>

<progress class="progress" value={progress.value} max="100" duration="200" />

<!-- {@debug $view} -->
<Callcenter view={$view} bind:this={callcenter} bind:$call_but_status bind:operator={$operator} />

<Lesson view={$view} data={$users[0].staff} />

<style>
	.video {
		position: relative;
		top: 5px;
		margin: auto;
		max-height: 50px;
	}
	.progress {
		position: relative;
		top: 0px;
		width: 100%;
		text-align: center;
	}
	.placeholder {
		position: relative;
		left: 5px;
		top: 0px;
	}

	@media screen and (max-width: 400px) {
		.video {
			top: 0px;
		}
	}
</style>
