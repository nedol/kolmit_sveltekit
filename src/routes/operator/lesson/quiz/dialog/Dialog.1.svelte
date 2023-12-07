<script>
	import { onMount, onDestroy, getContext } from 'svelte';
	import BottomAppBar, { Section, AutoAdjust } from '@smui-extra/bottom-app-bar';
	import IconButton, { Icon } from '@smui/icon-button';
	import {
		mdiPagePreviousOutline,
		mdiArrowRight,
		mdiArrowLeft,
		mdiShareVariant,
		mdiShuffle
	} from '@mdi/js';
	import { lesson } from '$lib/js/stores.js';

	import { dc_oper } from '$lib/js/stores.js';
	import { dc_oper_state } from '$lib/js/stores.js';
	import { dc_user } from '$lib/js/stores.js';
	import { dc_user_state } from '$lib/js/stores.js';
	import { dialog_data } from './dialog_data.js';
	import { msg_user } from '$lib/js/stores.js';

	import QA2 from './Dialog.2.svelte';

	let share_mode = false;
	export let data;

	$: if (data) {
		if (data.html) {
			style_button = style_button_shared;
			share_mode = true;
		}
		console.log();
	}

	if (data.func) {
		onChangeClick();
	}

	let cur_html = 0;
	let cur_qa = 0;
	let q, a, d;
	let containerWidth, containerHeight;

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

	async function QA() {
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
		q = dialog_data.content[cur_qa].question.text;
		a = dialog_data.content[cur_qa].answer.text;
		if (share_mode && ($dc_user || $dc_oper)) {
			let dc = $dc_user || $dc_oper;
			await dc.SendData(
				{
					lesson: { quiz: 'pair.client', html: dialog_data.html[cur_html], question: q, answer: a }
				},
				() => {
					console.log();
				}
			);
		}
	}

	QA();

	onMount(() => {
		const parentWidth = window.innerWidth;
		containerWidth = parentWidth + 'px';

		const parentHeight = window.innerHeight;
		containerHeight = parentHeight + 'px';

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
		QA();
	}

	function onBackQA() {
		// Обработчик нажатия на кнопку "<-"
		cur_qa--;
		QA();
	}

	function onShare() {
		// Обработчик нажатия на кнопку "share"
		share_mode = !share_mode;
		style_button = share_mode ? style_button_shared : style_button_non_shared;
		QA();
	}

	function onChangeClick() {
		data = { html: dialog_data.html[cur_html], question: q, answer: a, quiz: data.quiz };
		data.quiz = data.quiz === 'pair.client' ? 'pair' : 'pair.client';
		let client_quiz = data.quiz === 'pair.client' ? 'pair' : 'pair.client';
		let dc = $dc_user || $dc_oper;
		if (dc)
			dc.SendData(
				{ lesson: { quiz: client_quiz, html: dialog_data.html[cur_html], question: q, answer: a } },
				() => {
					console.log();
				}
			);
	}
</script>

{#if data.quiz == 'pair'}
	{#if share_button}
		<IconButton class="material-icons" on:click={onShare} style={style_button}>
			<Icon tag="svg" viewBox="0 0 24 24">
				<path fill="currentColor" d={mdiShareVariant} /></Icon
			>
		</IconButton>
	{/if}

	<div class="container">
		<div class="card">
			<div class="question">{cur_qa + 1}. {q}</div>
			<div class="answer">{@html a}</div>
		</div>
	</div>

	<div class="arrow-buttons">
		<button on:click={onBackQA} class="arrow-button arrow-button-left">&#8592;</button>
		<button on:click={onNextQA} class="arrow-button arrow-button-right">&#8594;</button>
	</div>
{:else}
	<QA2 {data} />
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
				<path fill="currentColor" d={mdiShuffle} />
			</Icon>
		</Section>

		<Section>
			<IconButton class="material-icons" fill="currentColor" aria-label="More">more_vert</IconButton
			>
		</Section>
	</BottomAppBar>
{/if}

<style>
	.container {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		padding: 20px;
		justify-content: center; /* Центрирование по горизонтали */
		align-items: center; /* Центрирование по вертикали */
	}

	.card {
		background-color: #fff;
		border: 1px solid #ddd;
		border-radius: 8px;
		padding: 16px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease-in-out;
		width: 70%; /* Ширина карточки */
	}

	.card:hover {
		transform: scale(1.05);
	}

	.question {
		font-size: 1.5em;
		margin-bottom: 10px;
		color: #333;
	}

	.answer {
		color: #555;
		text-align: center;
	}

	.arrow-buttons {
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

	.share-button {
		position: absolute;
		top: 10px;
		left: 10px;
		padding: 10px;
		font-size: 1.5em;
		background-color: #2196f3;
		color: #fff;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}
</style>
