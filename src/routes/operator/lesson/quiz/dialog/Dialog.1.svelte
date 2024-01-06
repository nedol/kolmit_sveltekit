<script>
	import { onMount, onDestroy, getContext } from 'svelte';
	import BottomAppBar, { Section, AutoAdjust } from '@smui-extra/bottom-app-bar';
	import IconButton, { Icon } from '@smui/icon-button';
	import CircularProgress from '@smui/circular-progress';
	import { langs } from '$lib/js/stores.js';
	import { dicts } from '$lib/js/stores.js';
	let dict = $dicts;
	import {
		mdiPagePreviousOutline,
		mdiArrowRight,
		mdiArrowLeft,
		mdiShareVariant,
		mdiShuffle,
		mdiAccountConvertOutline
	} from '@mdi/js';
	import { lesson } from '$lib/js/stores.js';

	import { dc_oper } from '$lib/js/stores.js';
	import { dc_user } from '$lib/js/stores.js';
	// import { dialog_data } from './dialog_data.js';
	import { call_but_status } from '$lib/js/stores.js';

	import Dialog2 from './Dialog.2.svelte';
	import { initial } from 'lodash';
	// import js from './Familie.Dialog.1.js';
	// import js_ from './In het restorant.Dialog.1.js';

	let dialog_data;

	let isFlipped = false;

	function flipCard() {
		isFlipped = !isFlipped;
	}

	let visibility = ['visible', 'hidden', 'hidden'];
	let visibility_cnt = 1;

	let share_mode = false;
	export let data;

	let cur_html = 0;
	let cur_qa = 0;
	let q, q_shfl, a_shfl, a, d;

	let bottomAppBar;

	let share_button = false;
	let style_button;
	let style_button_non_shared = `position: relative;
		padding: 10px;
		font-size: 1.5em;
		background-color: white;
		color: grey;
		border: none;
		border-radius: 5px;
		cursor: pointer;`;
	let style_button_shared = `position: relative;
		padding: 10px;
		font-size: 1.5em;
		background-color: #2196f3;
		color: #fff;
		border: none;
		border-radius: 5px;
		cursor: pointer;`;

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
		const module = await import(`../../../../assets/dialog/${data.name}.js`);
		dialog_data = await module['dialog_data'];
		dialog_data.name = data.name;
		Dialog();
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

	onMount(() => {
		// const parentWidth = window.innerWidth;
		// containerWidth = parentWidth + 'px';

		// const parentHeight = window.innerHeight;
		// containerHeight = parentHeight + 'px';

		style_button = style_button_non_shared;
	});

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
		Dialog();
		SendData();
	}

	function onBackQA() {
		// Обработчик нажатия на кнопку "<-"
		cur_qa--;
		Dialog();
		SendData();
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
	}

	function shuffle(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}
</script>

<!-- <link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/> -->

{#if share_button && $call_but_status === 'talk'}
	<IconButton class="material-icons" on:click={onShare} style={style_button}>
		<Icon tag="svg" viewBox="0 0 24 24">
			<path fill="currentColor" d={mdiShareVariant} />
		</Icon>
	</IconButton>
{/if}
<div class="card-container">
	<div class="card {isFlipped ? 'flipped' : ''}">
		<div class="front">
			{#if data.quiz == 'pair'}
				<!-- Ваш контент для лицевой стороны -->
				<div class="card">
					{#if q || a}
						<div class="cnt">{cur_qa + 1}</div>
						<div class="title">{dict['Переведи'][$langs]}:</div>
						<div class="question">
							{q[$langs]}
						</div>
						<div style="display:inline-flex;">
							<div class="tip" style="display:inline;visibility:{visibility[1]}">
								{q_shfl}
							</div>
							<!-- <button on:click={onClickQ} class="toggleButton">
						<span class="material-symbols-outlined"> ? </span>
					</button> -->
						</div>
						<div class="title">
							{dict['Проконтролируй ответ'][$langs]}:
						</div>
						<div class="answer" style="visibility:{visibility[1]}">
							{@html a['nl']}
						</div>

						<div>
							<div class="arrow-buttons">
								{#if cur_qa > 0}
									<button on:click={onBackQA} class="arrow-button arrow-button-left">&#8592;</button
									>
								{/if}
								<div>
									<button on:click={onClickQ} class="toggleButton">
										<span class="material-symbols-outlined"> ? </span>
									</button>
								</div>
								<button on:click={onNextQA} class="arrow-button arrow-button-right">&#8594;</button>
							</div>
						</div>
					{:else}
						<div style="text-align:center">
							<span
								class="material-symbols-outlined"
								style="font-size: 20px; color: blue; scale:1.5;"
							>
								<CircularProgress style="height: 50px; width: 50px;" indeterminate />
							</span>
						</div>
					{/if}
				</div>
			{/if}
		</div>
		{#if data.quiz == 'pair.client'}
			<div class="back">
				<!-- Ваш контент для обратной стороны -->
				<Dialog2 {data} />
			</div>
		{/if}
	</div>
</div>

{#if data.quiz}
	<BottomAppBar bind:this={bottomAppBar}>
		<Section>
			<IconButton class="material-icons" aria-label="Back" on:click={handleBackClick}>
				<Icon tag="svg" viewBox="0 0 24 24">
					<path fill="currentColor" d={mdiPagePreviousOutline} />
				</Icon>
			</IconButton>
		</Section>

		<Section>
			<Icon tag="svg" viewBox="0 0 24 24" on:click={onChangeClick}>
				<path fill="currentColor" d={mdiAccountConvertOutline} />
			</Icon>
		</Section>

		<Section>
			<!-- <IconButton class="material-icons" fill="currentColor" aria-label="More">more_vert</IconButton> -->
		</Section>
	</BottomAppBar>
{/if}

<style>
	body {
		font-family: 'Arial', sans-serif;
		background-color: #f8f8f8;
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	/* .card:hover {
		transform: scale(1.05);
	} */

	.cnt {
		position: absolute;
		text-align: left;
		left: 15px;
		top: 3px;
		z-index: 2;
		font-size: 1.2em;
		margin-bottom: 10px;
		color: #2196f3;
	}

	.title {
		color: grey;
		position: relative;
		text-align: center;
		margin: 20px;
	}

	.question {
		font-size: 1.3em;
		margin-bottom: 10px;
		color: #333;
	}

	.answer {
		font-size: 1.2em;
		color: #2196f3;
		text-align: center;
	}

	.tip {
		font-size: 1.2em;
		margin-bottom: 10px;
		margin-left: 20px;
		color: #2196f3;
	}

	.arrow-buttons {
		/* position: relative; */
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.arrow-button {
		position: absolute;
		top: 60%;
		margin: 10px;
		padding: 10px 20px;
		font-size: 1.5em;
		background-color: #2196f3;
		color: #fff;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}

	.arrow-button-left {
		left: 0;
		transform: translateY(-50%);
	}

	.arrow-button-right {
		right: 0;
		transform: translateY(-50%);
	}

	.toggleButton {
		position: absolute;
		left: 45%;
		top: 60%;

		background-color: #2196f3;
		color: #fff;
		border: none;
		padding: 10px;
		border-radius: 5px;
		cursor: pointer;
	}
	.card-container {
		perspective: 1000px;

		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		padding: 20px;
		justify-content: center;
		align-items: center;
	}

	.card {
		background-color: #fff;
		/* border: 1px solid #ddd;
		border-radius: 8px; */
		padding: 16px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease-in-out;
		width: 95%;
		text-align: center;
		height: 100vh;
		position: relative;
		transform-style: preserve-3d;
		transition: transform 0.5s;
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
		background-color: #ececec;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24px;
	}

	.back {
		/* Стили для обратной стороны карточки */
		/* background-color: #a0a0a0; */
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 18px;
		transform: rotateY(180deg);
	}
</style>
