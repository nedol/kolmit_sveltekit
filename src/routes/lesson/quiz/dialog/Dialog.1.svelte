<script>
	import { onMount, onDestroy, getContext } from 'svelte';
	import BottomAppBar, { Section } from '@smui-extra/bottom-app-bar';

	// import '$lib/js/talkify.js';
	// import 'talkify-tts/dist/talkify.min.js';

	import IconButton, { Icon } from '@smui/icon-button';
	import Textfield from '@smui/textfield';
	import HelperText from '@smui/textfield/helper-text';
	import CircularProgress from '@smui/circular-progress';
	import { langs } from '$lib/js/stores.js';
	import { dicts } from '$lib/js/stores.js';
	let dict = $dicts;
	import {
		mdiPagePreviousOutline,
		mdiArrowRight,
		mdiArrowLeft,
		mdiShareVariant,
		mdiMicrophone,
		mdiMicrophoneOutline,
		mdiAccountConvertOutline,
		mdiVolumeHigh
	} from '@mdi/js';
	import { lesson } from '$lib/js/stores.js';

	import { dc_oper } from '$lib/js/stores.js';
	import { dc_user } from '$lib/js/stores.js';
	// import { dialog_data } from './dialog_data.js';
	import { call_but_status } from '$lib/js/stores.js';

	import pkg from 'lodash';
	const { maxBy } = pkg;

	import Dialog2 from './Dialog.2.svelte';
	import EasySpeech from '../../../speech/tts/EasySpeech.svelte';
	import Tts from '../../../speech/tts/Tts.svelte';
	import Stt from '../../../speech/stt/Stt.svelte';
	let easyspeech, stt, tts;

	let dialog_data;

	let isFlipped = false;

	function flipCard() {
		isFlipped = !isFlipped;
	}

	let visibility = ['visible', 'hidden', 'hidden'];
	let visibility_cnt = 1;

	let bottomAppBar;

	let share_mode = false;
	export let data;
	let showSpeakerButton = false;
	let tr_input = '';
	let tf_label = '';
	let cur_html = 0;
	let cur_qa = 0;
	let q, q_shfl, a_shfl, a, d;

	let tts_text = '';

	let isListening = false;

	let share_button = false;
	let style_button;
	let style_button_non_shared = `position: absolute;
		font-size: 1.5em;	
		color: grey;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		width: 50px`;
	let style_button_shared = `position: absolute;
		font-size: 1.5em;
		color: blue;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		width: 50px`;

	$: if (data.name) {
		init();
	}

	$: if (data.html) {
		style_button = style_button_shared;
		share_mode = true;
	}

	$: if (data.cur_qa) {
		cur_qa = data.cur_qa;
		style_button = share_mode = true;
	}

	if (data.func) {
		onChangeClick();
	}

	$: switch ($call_but_status) {
		case 'talk':
			share_button = true;
			break;
		default:
			share_button = false;
			share_mode = false;
			style_button = style_button_non_shared;
			break;
	}

	async function init() {
		const module = await import(`../../../assets/dialog/${data.name}.js`);
		dialog_data = await module['dialog_data'];
		dialog_data.name = data.name;
		Dialog();
		// onClickMicrophone();
	}

	function Dialog() {
		if (!dialog_data.content[cur_qa]) {
			cur_qa = 0;
			cur_html++;
			if (!dialog_data.html[cur_html]) {
				cur_html = 0;
			}
			setTimeout(() => {
				onChangeClick();
			}, 0);
		}
		q = dialog_data.content[cur_qa].question;
		q_shfl = q['nl'].slice(0);
		let ar = q_shfl.toLowerCase().replaceAll('?', '').replaceAll(',', ' ').split(' ');
		q_shfl = shuffle(ar).toString().replaceAll(',', ' ');
		a = dialog_data.content[cur_qa].answer;
		a_shfl = a['nl'].slice(0);
		ar = a_shfl.toLowerCase().replaceAll('?', '').replaceAll(',', ' ').split(' ');
		a_shfl = shuffle(ar).toString().replaceAll(',', ' ');
	}

	onDestroy(() => {
		// share_button = false;
	});

	function handleBackClick() {
		$lesson.data = { quiz: '' };
		// $lesson.visible = true;
	}

	function onNextQA() {
		cur_qa++;
		visibility[1] = 'hidden';
		visibility[2] = 'hidden';
		tr_input = '';
		Dialog();
		SendData();
		// onClickMicrophone();
		showSpeakerButton = false;
	}

	function onBackQA() {
		// Обработчик нажатия на кнопку "<-"
		cur_qa--;
		Dialog();
		SendData();
		// onClickMicrophone();
	}

	function onShare() {
		// Обработчик нажатия на кнопку "share"
		share_mode = !share_mode;
		style_button = share_mode ? style_button_shared : style_button_non_shared;
		Dialog();
		SendData();
	}

	async function SendData() {
		let dc = $dc_user || $dc_oper;
		if (share_mode && dc) {
			dialog_data.content[cur_qa].answer['a_shfl'] = a_shfl;

			await dc.SendData(
				{
					lesson: {
						quiz: 'pair.client',
						name: dialog_data.name,
						html: dialog_data.html ? dialog_data.html[cur_html] : null,
						question: dialog_data.content[cur_qa].question,
						answer: dialog_data.content[cur_qa].answer,
						cur_qa: cur_qa
					}
				},
				(ex) => {
					console.log(ex);
				}
			);
		}
	}

	function onChangeClick() {
		data = {
			html: dialog_data.html ? dialog_data.html[cur_html] : '',
			question: dialog_data.content[cur_qa].question,
			answer: dialog_data.content[cur_qa].answer,
			a_shfl: a_shfl,
			quiz: data.quiz
		};
		data.quiz = data.quiz === 'pair.client' ? 'pair' : 'pair.client';
		let client_quiz = data.quiz === 'pair.client' ? 'pair' : 'pair.client';
		let dc = $dc_user || $dc_oper;

		dialog_data.content[cur_qa].answer['a_shfl'] = a_shfl;
		if (dc && share_mode)
			dc.SendData(
				{
					lesson: {
						quiz: client_quiz,
						name: dialog_data.name,
						html: dialog_data.html ? dialog_data.html[cur_html] : '',
						question: dialog_data.content[cur_qa].question,
						answer: dialog_data.content[cur_qa].answer,
						cur_qa: cur_qa
					}
				},
				() => {
					console.log();
				}
			);

		flipCard();
	}

	function onClickQ() {
		visibility[1] = 'visible';
		showSpeakerButton = true;
	}

	function shuffle(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	async function speak() {
		setTimeout(() => {
			easyspeech.Speak(dialog_data.content[cur_qa].question['nl']);
		}, 0);
		// tts.Speak(dialog_data.content[cur_qa].question['nl']);
	}

	function onClickMicrophone() {
		let helloFunction = (text) => {
			console.log(text);
		};
		////для тестов !!! УБРАть if!!!
		// if (false)
		stt.startAudioMonitoring();

		tr_input = '';

		let text = dialog_data.content[cur_qa].question['nl'].replace(/[^\w\s]/gi, ''); //.split(' ');

		isListening = true;
	}

	function StopListening() {
		isListening = false;
	}

	function SttResult(text) {
		tts_text = text;
	}

	onMount(async () => {
		style_button = style_button_non_shared;
	});
</script>

<Tts bind:this={tts}></Tts>

<EasySpeech bind:this={easyspeech}></EasySpeech>

{#if share_button && $call_but_status === 'talk'}
	<div style={style_button} on:click={onShare}>
		<IconButton>
			<Icon tag="svg" viewBox="0 0 24 24">
				<path fill="currentColor" d={mdiShareVariant} />
			</Icon>
		</IconButton>
	</div>
{/if}

{#if data.quiz == 'pair'}
	<!-- Ваш контент для лицевой стороны -->

	<div class="card">
		{#if q || a}
			<div class="cnt">{cur_qa + 1}</div>
			<div class="title">{dict['Переведи'][$langs]}:</div>
			<div class="question">
				{q[$langs]}
			</div>
			<div style="text-align: center;">
				<div class="tip" style="visibility:{visibility[1]}">
					{dialog_data.content[cur_qa].question['nl']}
				</div>
				{#if showSpeakerButton}
					<div class="speaker-button">
						<IconButton on:click={speak}>
							<Icon tag="svg" viewBox="0 0 24 24">
								<path fill="currentColor" d={mdiVolumeHigh} />
							</Icon>
						</IconButton>
					</div>
				{/if}
			</div>
			<div class="margins" style="text-align: center;">
				<IconButton class="material-icons" aria-label="Back" on:click={onClickMicrophone}>
					<Icon tag="svg" viewBox="0 0 24 24">
						{#if isListening}
							<path fill="currentColor" d={mdiMicrophone} />
						{:else}
							<path fill="currentColor" d={mdiMicrophoneOutline} />
						{/if}
					</Icon>
				</IconButton>
				<span style="color: darkgreen;">
					{@html tts_text}
				</span>
			</div>
			<div class="title" style="visibility:{visibility[2]}">
				{dict['Проконтролируй ответ'][$langs]}:
			</div>
			<div class="answer" style="visibility:{visibility[2]}">
				{@html a['nl']}
			</div>
			<Stt bind:this={stt} {SttResult} {StopListening}></Stt>

			<BottomAppBar bind:this={bottomAppBar}>
				<Section>
					{#if cur_qa > 0}
						<button on:click={onBackQA} class="arrow-button arrow-button-left">&#8592;</button>
					{/if}</Section
				>

				<Section>
					<button on:click={onClickQ} class="toggleButton">
						<span class="material-symbols-outlined"> ? </span>
					</button>
				</Section>

				<Section>
					<div style={style_button} on:click={onChangeClick}>
						<IconButton>
							<Icon tag="svg" viewBox="0 0 24 24">
								<path fill="currentColor" d={mdiAccountConvertOutline} />
							</Icon>
						</IconButton>
					</div>
				</Section>

				<Section>
					<button on:click={onNextQA} class="arrow-button arrow-button-right">&#8594;</button>
				</Section>
			</BottomAppBar>
		{:else}
			<div style="text-align:center">
				<span class="material-symbols-outlined" style="font-size: 20px; color: blue; scale:1.5;">
					<CircularProgress style="height: 50px; width: 50px;" indeterminate />
				</span>
			</div>
		{/if}
	</div>
{/if}

{#if data.quiz == 'pair.client'}
	<Dialog2 {data} />
{/if}

<style>
	.marg_tip {
		display: flex; /* Используем flexbox для выравнивания в ряд */
		align-items: center; /* Выравнивание элементов по вертикали по центру */
		justify-content: end; /* Выравнивание элементов по горизонтали по центру */
	}
	/* Если вы хотите добавить пространство между элементами, вы можете использовать margin */
	.marg_tip > * {
		margin-right: 10px; /* Пример: 10px пространства между элементами */
	}
	.margins {
		display: flex; /* Используем flexbox для выравнивания в ряд */
		align-items: center; /* Выравнивание элементов по вертикали по центру */
		justify-content: start; /* Выравнивание элементов по горизонтали по центру */
	}

	/* Если вы хотите добавить пространство между элементами, вы можете использовать margin */
	.margins > * {
		margin-right: 10px; /* Пример: 10px пространства между элементами */
	}

	.speaker-button {
		position: absolute;
		flex: auto;
		top: 45px;
		right: 0px;
		transform: translate(50%, 0%);
		font-size: large;
	}

	.cnt {
		position: absolute;
		text-align: left;
		left: 10px;
		top: 3px;
		z-index: 2;
		font-size: 1em;
		margin-bottom: 10px;
		color: #501d94;
	}

	.title {
		color: grey;
		position: relative;
		text-align: center;
		margin: 5px;
	}

	.question {
		text-align: center;
		font-size: 1.3em;
		margin-bottom: 10px;
		color: #333;
	}

	.answer {
		text-align: center;
		font-size: 1.2em;
		color: #2196f3;
		text-align: center;
	}

	.tip {
		text-align: center;
		font-size: 1.2em;
		margin-bottom: 10px;

		color: #2196f3;
	}

	.arrow-buttons {
		/* position: relative; */
		/* display: flex; */
		justify-content: space-between;
		align-items: center;
	}

	.arrow-button {
		position: relative;
		top: 15px;
		/* margin: 10px */
		/* font-size: 1.5em; */
		font-weight: 600;
		background-color: white;
		color: #101c88;
		border: 1px solid;
		border-radius: 5px;
		cursor: pointer;
	}

	.arrow-button-left {
		transform: translateY(-50%);
	}

	.arrow-button-right {
		transform: translateY(-50%);
	}

	.toggleButton {
		position: relative;
		/* margin: 40px auto 0; */
		/* left: 50%; */
		background-color: #2196f3;
		color: #fff;
		border: none;

		border-radius: 5px;
		cursor: pointer;
	}

	.card {
		background-color: #fff;
		transition: transform 0.3s ease-in-out;
		width: 90%;
		/* top: 13vh; */
		margin: 0 auto;
		position: relative;
		transform-style: preserve-3d;
		transition: transform 0.5s;
		height: 70vh;
	}

	.card.flipped {
		transform: rotateY(180deg);
	}

	.front,
	.back {
		width: 95%;
		height: 100%;
		position: absolute;
		backface-visibility: hidden;
	}

	.front {
		/* Стили для лицевой стороны карточки */
		/* background-color: #ececec; */
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 12px;
	}

	.back {
		/* Стили для обратной стороны карточки */
		/* background-color: #a0a0a0; */
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 12px;
		transform: rotateY(180deg);
	}
</style>
