<script>
	import { users } from '$lib/js/stores.js';
	import { langs } from '$lib/js/stores.js';
	import { onMount, getContext } from 'svelte';
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
	$: if ($dc_oper && $dc_oper.dc) {
		$dc_oper.dc.onmessage = (event) => {
			console.log(event.data);
		};
	}
	import { dc_user } from '$lib/js/stores.js';
	$: if ($dc_user && $dc_user.dc) {
		$dc_user.dc.onmessage = (event) => {
			console.log(event.data);
		};
	}

	import { dicts } from '$lib/js/stores.js';
	let dict = $dicts;

	import pkg from 'lodash';
	const { find, findKey, mapValues } = pkg;

	let bottomAppBar;

	import { msg_oper } from '$lib/js/stores.js';
	$: if ($msg_oper) {
		console.log($msg_oper);
	}

	$: {
		console.log($lesson.visible);
	}
	// import pair_data from './pair_data.json';
	let hint_visible;

	export let data;

	$: if (data) {
		hint_visible = false;
	}

	let containerWidth, containerHeight;

	onMount(() => {
		// Получаем ширину родительского окна при загрузке компонента
		const parentWidth = window.innerWidth; // Может потребоваться window.innerWidth - некоторое смещение, если у вас есть другие элементы на странице

		// Устанавливаем ширину контейнера равной ширине родительского окна
		containerWidth = parentWidth + 'px';

		// Получаем высоту родительского окна при загрузке компонента
		const parentHeight = window.innerHeight; // Может потребоваться window.innerHeight - некоторое смещение, если у вас есть другие элементы на странице

		// Устанавливаем высоту контейнера равной высоте родительского окна
		containerHeight = parentHeight + 'px';
	});
	function handleBackClick() {
		lesson_display = true; // При клике на "Back" показываем компонент Lesson
	}

	function onClickQ(ev) {
		hint_visible = true;
	}
</script>

<div class="container">
	<div class="card">
		<div class="title">{dict['Проконтролируй вопрос'][$langs]}:</div>

		<div style="display: flex; justify-content: center; align-items: center; margin: 0 auto;">
			<div>
				<div class="question">
					{#if data.question}
						<div>{@html data.question['nl']}</div>
					{/if}
				</div>

				<div class="title">{dict['Переведи и ответь'][$langs]}:</div>

				<div class="answer">
					{#if data.answer}
						<div>{@html data.answer[$langs]}</div>
					{/if}
				</div>

				<div class="tip">
					{#if data.answer['a_shfl'] && hint_visible}
						<div>{@html data.answer['a_shfl']}</div>
					{/if}
				</div>

				<div>
					<button on:click={onClickQ} class="toggleButton">
						<span class="material-symbols-outlined"> ? </span>
					</button>
				</div>
			</div>
		</div>
	</div>
	{#if data.html}
		<div>{@html data.html}</div>
	{/if}
</div>

<style>
	.container {
		position: absolute;
		width: 90%;
		top: -15vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0;
		padding: 20px;

		/* border: 1px solid #ccc; */
		/* border-radius: 5px; */
	}

	.card {
		background-color: #fff;
		border: 1px solid #ddd;
		border-radius: 8px;
		padding: 16px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease-in-out;
		width: 95%;
	}

	.title {
		color: grey;
		text-align: center;
		margin-bottom: 10px;
	}

	.question {
		color: #2196f3;
		font-size: 1.3em;
		margin-bottom: 10px;
		text-align: center;
	}

	.answer {
		color: #555;
		font-size: 1.3em;
		text-align: center;
		margin-bottom: 10px;
	}
	.tip {
		text-align: center;
		font-size: 1.2em;
		margin-bottom: 10px;
		margin-left: 20px;
		color: #2196f3;
	}

	.toggleButton {
		background-color: #2196f3;
		color: #fff;
		border: none;
		padding: 10px;
		border-radius: 5px;
		cursor: pointer;
		float: right;
	}
</style>
