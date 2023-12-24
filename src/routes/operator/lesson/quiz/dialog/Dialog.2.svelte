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
	export let data;

	let visibility = ['hidden', 'hidden', 'hidden'];
	let visibility_cnt = 0;

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

	function onClickQ() {
		visibility[visibility_cnt++] = 'visible';
	}
</script>

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/>

<div style="display: flex;">
	<div style="margin:0 auto">
		<div class="q" id="question" style="visibility:{visibility[0]}">
			<div>{@html data.question['nl']}</div>
		</div>
		<div class="q" id="answer" style="visibility:{visibility[1]}">
			<div>{@html data.answer[$langs]}</div>
		</div>
		<div class="q" id="answer" style="visibility:{visibility[2]}">
			<div>{@html data.answer['nl']}</div>
		</div>
		<button on:click={onClickQ} class="toggleButton">
			<span class="material-symbols-outlined"> reminder </span>
		</button>
	</div>
</div>
{#if data.html}
	<div>{@html data.html}</div>
{/if}

<!-- <BottomAppBar bind:this={bottomAppBar}>
	<Section>
		<IconButton class="material-icons" aria-label="Back" on:click={handleBackClick}>
			<Icon tag="svg" viewBox="0 0 24 24">
				<path fill="currentColor" d={mdiPagePreviousOutline} />
			</Icon>
		</IconButton>
	</Section>
	<Section>
		<IconButton class="material-icons">change_circle</IconButton>
	</Section>

	<Section>
		<IconButton class="material-icons" fill="currentColor" aria-label="More">more_vert</IconButton>
	</Section>
</BottomAppBar> -->

<style>
	.container {
		position: absolute;
		line-height: 50px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		/* Дополнительные стили по вашему усмотрению */
		margin: 0;
		padding: 20px;
		border: 1px solid #ccc;
		border-radius: 5px;
	}
	.q {
		color: gray;
		border: 0;
		background-color: transparent;
		font: 1.2em sans-serif;
	}
	.toggleButton {
		position: absolute;
		right: 25px;
		top: 170px;
	}
</style>
