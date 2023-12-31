<script>
	import { onMount, onDestroy, getContext } from 'svelte';
	import BottomAppBar, { Section, AutoAdjust } from '@smui-extra/bottom-app-bar';
	import IconButton, { Icon } from '@smui/icon-button';
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
	import { dc_oper_state } from '$lib/js/stores.js';
	import { dc_user } from '$lib/js/stores.js';
	import { dc_user_state } from '$lib/js/stores.js';
	// import { dialog_data } from './dialog_data.js';
	import { msg_user } from '$lib/js/stores.js';

	import Dialog2 from './Dialog.2.svelte';
	import { initial } from 'lodash';
	// import js from './Familie.Dialog.1.js';
	// import js_ from './In het restorant.Dialog.1.js';

	let dialog_data;

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

	$: if (data.html) {
		style_button = style_button_shared;
		share_mode = true;
	}

	$: if (data.cur_qa) {
		cur_qa = data.cur_qa;
		style_button = share_mode = true;
		Dialog();
	}

	if (data.func) {
		onChangeClick();
	}

	$: if ($dc_oper_state) {
		switch ($dc_oper_state) {
			case 'open':
				share_button = true;
				break;
			case 'closed':
				share_button = false;
				share_mode = false;
				style_button = style_button_non_shared;
				break;
		}
	}

	$: if ($dc_user_state) {
		share_button = true;
	}

	async function init() {
		const module = await import(`../../../../assets/dialog/${data.name}.js`);
		dialog_data = await module['dialog_data'];
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

	async function SendData() {
		if (share_mode && ($dc_user || $dc_oper)) {
			let dc = $dc_user || $dc_oper;
			const ar = dialog_data.content[cur_qa].answer['nl']
				.toLowerCase()
				.replaceAll('?', '')
				.replaceAll('.', ' ')
				.replaceAll(',', ' ')
				.split(' ');
			let str = shuffle(ar).toString().replaceAll(',', ' ');
			// dialog_data.content[cur_qa].answer['nl'] = str;

			await dc.SendData(
				{
					lesson: {
						quiz: 'pair.client',
						name: data.name,
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

	onMount(() => {
		init();
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

	function onChangeClick() {
		const ar = dialog_data.content[cur_qa].answer['nl']
			.toLowerCase()
			.replaceAll('?', '')
			.replaceAll(',', ' ')
			.replaceAll('.', ' ')
			.split(' ');
		let str = shuffle(ar).toString().replaceAll(',', ' ');
		// dialog_data.content[cur_qa].answer['nl'] = str;
		data = {
			html: dialog_data.html ? dialog_data.html[cur_html] : '',
			question: dialog_data.content[cur_qa].question,
			answer: dialog_data.content[cur_qa].answer,
			a_shfl: str,
			quiz: data.quiz
		};
		data.quiz = data.quiz === 'pair.client' ? 'pair' : 'pair.client';
		let client_quiz = data.quiz === 'pair.client' ? 'pair' : 'pair.client';
		let dc = $dc_user || $dc_oper;

		console.log(str);
		if (dc)
			dc.SendData(
				{
					lesson: {
						quiz: client_quiz,
						name: data.name,
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

{#if data.quiz == 'pair'}
	{#if share_button && (dc_oper_state || dc_user_state)}
		<IconButton class="material-icons" on:click={onShare} style={style_button}>
			<Icon tag="svg" viewBox="0 0 24 24">
				<path fill="currentColor" d={mdiShareVariant} />
			</Icon>
		</IconButton>
	{/if}

	<div class="container">
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
					<button on:click={onClickQ} class="toggleButton">
						<span class="material-symbols-outlined"> ? </span>
					</button>
				</div>
				<div class="title">{dict['Проконтролируй ответ'][$langs]}:</div>
				<div class="answer" style="visibility:{visibility[0]}">
					{@html a['nl']}
				</div>
			{/if}
		</div>
	</div>

	<div class="arrow-buttons">
		{#if cur_qa > 0}
			<button on:click={onBackQA} class="arrow-button arrow-button-left">&#8592;</button>
		{/if}
		<button on:click={onNextQA} class="arrow-button arrow-button-right">&#8594;</button>
	</div>
{:else}
	<Dialog2 {data} />
{/if}

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
	/* Добавленные стили для улучшения визуального восприятия */

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

	.container {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		padding: 20px;
		justify-content: center;
		align-items: center;
	}

	.card {
		background-color: #fff;
		border: 1px solid #ddd;
		border-radius: 8px;
		padding: 16px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease-in-out;
		width: 90%;
		text-align: center;
	}

	/* .card:hover {
		transform: scale(1.05);
	} */

	.cnt {
		position: relative;
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
	}

	.question {
		font-size: 1.3em;
		margin-bottom: 10px;
		color: #333;
	}

	.answer {
		font-size: 1.2em;
		color: #555;
		text-align: center;
	}

	.tip {
		font-size: 1.2em;
		margin-bottom: 10px;
		margin-left: 20px;
		color: #2196f3;
	}

	.arrow-buttons {
		position: relative;
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
		position: relative;
		margin-left: 10px;
		background-color: #2196f3;
		color: #fff;
		border: none;
		padding: 10px;
		border-radius: 5px;
		cursor: pointer;
	}
</style>
