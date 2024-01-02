<script>
	import { onMount, onDestroy, getContext, setContext } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	import '../assets/icofont/icofont.min.css';

	import EasySpeech from 'easy-speech';

	import IconButton, { Icon } from '@smui/icon-button';
	import { mdiAccountBox } from '@mdi/js';
	import CircularProgress from '@smui/circular-progress';
	import { dicts } from '$lib/js/stores.js';
	import { langs } from '$lib/js/stores.js';
	import { user_placeholder } from '$lib/js/stores.js';
	// import {Dict} from '$lib/js/$dicts'
	import Callcenter from './callcenter/Callcenter.svelte';
	let callcenter;
	import { RTCOperator } from './rtc/RTCOperator.js';

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

	import { lesson } from '$lib/js/stores.js';

	import { signal } from '$lib/js/stores.js';

	import { users } from '$lib/js/stores.js';
	export let users_;
	$users = users_;

	import { click_call_func } from '$lib/js/stores.js';

	import { dc_oper_state } from '$lib/js/stores.js';
	import { dc_user_state } from '$lib/js/stores.js';

	$: if ($dc_oper_state === 'closed' || $dc_user_state === 'closed') {
	}

	import { msg_user } from '$lib/js/stores.js';
	$: if ($msg_user) {
		OnMessage($msg_user);
	}

	import { msg_oper } from '$lib/js/stores.js';
	$: if ($msg_oper) {
		OnMessage($msg_oper);
	}

	import { view } from '$lib/js/stores.js';
	import { operator } from '$lib/js/stores.js';
	import { posterst } from '$lib/js/stores.js';

	let rtc;
	let voice;
	let selected;
	let call_cnt, inter;
	let video_button_display = false;
	let video_progress = false;
	let edited_display = false;
	let synthesis;
	let commandsList;
	let showCommands = false;
	let debug = 'debug';
	let debug_div;

	import { call_but_status } from '$lib/js/stores.js';
	$call_but_status = 'inactive';

	import { editable } from '$lib/js/stores.js';
	$: if ($editable) {
		edited_display = $editable;
	}

	export let email, abonent, name;
	const uid = md5(email);

	$: if ($langs) {
		fetch(`./?func=cookie&abonent=${abonent}&lang=${$langs}`)
			.then(() => console.log())
			.catch((error) => {
				console.log(error);
			});
	}

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
			headers: headers
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

	onDestroy(() => {
		debug = 'onDestroy';
	});

	let audioCtx;

	onMount(async () => {
		try {
			await EasySpeech.init({ maxTimeout: 10000, interval: 250, quiet: false, rate: 1 }); // required

			EasySpeech.on('error', () => {
				EasySpeech.reset();
			});

			rtc = new RTCOperator($operator, uid, $signal);
			initRTC();
			rtc.SendCheck();
			CallWaiting($operator);
			try {
				// Fix up for prefixing
				if (!window.AudioContext) {
					window.AudioContext = window.AudioContext || window.webkitAudioContext;
					audioCtx = new AudioContext();
					rtc.localSoundSrc = audioCtx.createMediaElementSource(window.user.localSound);
					rtc.localSoundSrc.connect(audioCtx.destination);
				}
			} catch (ex) {
				console.log('Web Audio API is not supported in this browser');
			}

			let voices = EasySpeech.voices();

			initSpeech(voices);

			// Добавьте слушателя событий для скрытия списка команд при клике за его пределами
			// document.addEventListener('click', handleOutsideClick);
		} catch (ex) {
			console.log();
		}

		document.addEventListener('visibilitychange', () => {
			if (document.hidden) {
				// Ваш код, выполняемый при переходе приложения в неактивное состояние
				// if (audioCtx) audioCtx.suspend();
				setTimeout(() => {
					EasySpeech.pause();
					console.log(EasySpeech.status());
				}, 0);
			} else {
				setTimeout(() => {
					EasySpeech.resume();
					console.log(EasySpeech.status());
				}, 0);
				console.log('Приложение активно');
			}
		});

		return () => {
			// Удалите слушателя событий при размонтировании компонента
			// document.removeEventListener('click', handleOutsideClick);
			setTimeout(() => {
				EasySpeech.cancel();
			}, 0);
		};
	});

	function initSpeech(voices) {
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
		debug = $tts.voice.name;
	}

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

	const SendToComponent = OnMessage;

	async function initRTC() {
		// rtc ..set(rtc .;
		//rtc .type = "operator";

		rtc.PlayCallCnt = () => {
			// video_progress = false;

			local.audio.paused = false;

			return;

			call_cnt = 10;

			inter = setInterval(function () {
				call_cnt--;

				if (call_cnt === 0) {
					clearInterval(inter);
					call_cnt = 10;
					local.audio.paused = true;
					return;
				}
			}, 2000);

			return;
		};

		rtc.GetRemoteVideo = () => {
			return remote.video.srcObject;
		};
		rtc.SetLocalVideo = (src) => {
			if (src) local.video.srcObject = src;
		};

		rtc.SetRemoteVideo = (src) => {
			// if ($call_but_status === 'talk') {
			remote.video.poster = '';
			remote.video.srcObject = src;
			remote.video.display = 'block';
			// local.audio.paused = true;
			// }
		};
	}

	function OnLongPress() {
		select.display = true;
	}

	function OnClickCallButton() {
		console.log($call_but_status);

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
				call_cnt = 10;
				local.audio.paused = true;

				rtc.OnTalk();
				video_button_display = true;
				remote.text.display = 'none';
				// const dispatch = createEventDispatcher();
				// dispatch('talk');
				// const event = new Event('talk');
				// document.getElementsByTagName('body')[0].dispatchEvent(event);

				break;
			case 'talk':
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
		if (data.func === 'talk') {
			console.log('talk', data.em);
			clearInterval(inter);
			call_cnt = 10;
			video_button_display = true;
			$call_but_status = 'talk';

			video_button_display = 'block';
			remote.text.display = 'none';
		}

		if (data.func === 'mute') {
			local.audio.paused = true;

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
			console.log('rtc', rtc);
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
					name: data.lesson.name,
					html: data.lesson.html,
					question: data.lesson.question,
					answer: data.lesson.answer,
					cur_qa: data.lesson.cur_qa,
					func: data.lesson.func
				};
			}
		}
	}

	function onDebug() {
		if (debug_div.style.opacity === '10') debug_div.style.opacity = '0';
		else debug_div.style.opacity = '10';
	}

	function handleChangeProfile(ev) {
		console.log();
		fetch(`./?abonent=${abonent}&func=reset`)
			.then(() => location.reload())
			.catch((error) => {
				console.log(error);
			});
	}

	const handleCommandClick = (event) => {
		showCommands = !showCommands;
	};

	// Функция для скрытия списка команд при клике за его пределами
	const handleOutsideClick = (event) => {
		if (commandsList && !commandsList.contains(event.target)) {
			showCommands = false;
		}
	};
</script>

<div style="display:flex; height:60px; flex-wrap: nowrap;justify-content: space-between;">
	<!-- <VideoLocal {...local.video} /> -->
	<div bind:this={$user_placeholder}>
		{#if remote.text.display}
			<VideoRemote
				{...remote.video}
				name={remote.text.name}
				em={$operator.em}
				on:click={OnClickCallButton}
				on:mute
				status={$call_but_status}
			>
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

	<div
		class="videolocal_div"
		on:click|preventDefault|stopPropagation={handleCommandClick}
		style="position:relative; right: 5px; width: 70px;	height: 70px;"
	>
		<VideoLocal {...local.video}>
			<svelte:fragment slot="footer">
				<div bind:this={container} />
			</svelte:fragment>
		</VideoLocal>
	</div>
	{#if showCommands}
		<!-- Список команд -->
		<div bind:this={commandsList}>
			<div on:click={handleChangeProfile}>{$dicts['Изменить профиль'][$langs]}</div>
		</div>
	{/if}
</div>

<AudioLocal {...local.audio} bind:paused={local.audio.paused} />

<progress class="progress" value={progress.value} max="100" duration="200" />
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="chat-container" bind:this={debug_div} on:click={onDebug}>
	<div class="debug">{debug}</div>
</div>
<!-- {@debug $view} -->
<Callcenter view={$view} bind:this={callcenter} bind:$call_but_status bind:operator={$operator} />

<Lesson view={$view} data={$users[0].staff} />

<style>
	.chat-container {
		display: none;
		position: absolute;
		width: 50%;
		bottom: 50px;
		right: 0;
		height: 100px;
		overflow-y: auto;
		border: 1px solid #ccc;
		padding: 10px;
		direction: rtl;
		pointer-events: auto;
		text-align: right;
		opacity: 0; /* Делаем элемент видимым */
		/* z-index: 1; */
	}
	.debug {
		font-size: small;
		display: flex;
		flex-direction: column-reverse; /* Используем стиль column-reverse для отображения дочерних элементов в обратном порядке */
	}
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

	/* Стили для списка команд */
	#commandsList {
		position: absolute;
		top: 50px; /* Выберите подходящий отступ сверху */
		right: 10px; /* Выберите подходящий отступ справа */
		background-color: white;
		border: 1px solid #ccc;
		padding: 10px;
		display: 'block';
	}

	@media screen and (max-width: 400px) {
		.video {
			top: 0px;
		}
	}
</style>
