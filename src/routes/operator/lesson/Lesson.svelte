<script>
	import { onMount, onDestroy } from 'svelte';

	import pkg from 'lodash';
	const { find, findKey, mapValues } = pkg;
	import IconButton, { Icon } from '@smui/icon-button';
	import {
		mdiAccountMultiple,
		mdiTextBoxOutline,
		mdiCardTextOutline,
		mdiEarHearing,
		mdiFileWordBoxOutline
	} from '@mdi/js';
	import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
	import Quiz from './quiz/Quiz.svelte';

	// import { view } from '$lib/js/stores.js';
	export let view;

	import { lesson } from '$lib/js/stores.js';
	let lesson_visible = true;

	let disabled = [true, true, true, true, true, true, true, true, true, true, true, true, true];

	let display = 'hidden';

	$: if ($lesson.data) {
		// if (view !== 'lesson')
		data = $lesson.data;
		console.log();
	}

	$: if (view === 'lesson') {
		display = 'visible';
	} else {
		display = 'hidden';
		data.quiz = '';
	}

	import lesson_data from './lesson_data.json';
	// import { disabled } from '@smui-extra/accordion/src/Panel.svelte';

	const level = lesson_data.module;
	export let data;
	let panel_disabled = true;

	let containerWidth = '100%'; // Исходная ширина - 100% ширины родительского окна
	let containerHeight = '100vh';

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

	onDestroy(() => {});

	function onClickQuiz(ev) {
		if (ev) {
			data.quiz = ev.currentTarget.attributes['quiz'].value;
			data.level = ev.currentTarget.attributes['level'].value.replace('.', '');
			data.name = ev.currentTarget.attributes['name'].value;
			data.theme = ev.currentTarget.attributes['theme'].value;
			data.title = ev.currentTarget.attributes['title'].value;
			data.words = find(lesson_data.module.themes, {
				name: ev.currentTarget.attributes['theme_name'].value
			})['words'];
			if (ev.currentTarget.attributes['highlight'])
				data.highlight = ev.currentTarget.attributes['highlight'].value;
		}
	}

	function disablePanel(node) {
		try {
			let t = node.attributes['t'].value;
			disabled[parseInt(t)] = false;
		} catch (ex) {}
		// disabled = 'disabled';
	}
</script>

<!-- svelte-ignore a11y-missing-content -->
<!-- {@debug display} -->
<div style="visibility:{display}">
	<!-- {@debug data} -->
	{#if data.quiz}
		<Quiz {data} bind:lesson_display={display} />
	{:else}
		<div class="lesson-container" style="">
			<div class="module_level">
				<div>Module {level.level}</div>
			</div>

			{#each level.themes as theme, t}
				<div class="accordion-container">
					<Accordion multiple>
						<Panel class="panel" disabled={disabled[parseInt(t)]}>
							<Header><h4>{theme.name}</h4></Header>
							<Content>
								{#if theme.lessons}
									{#each theme.lessons as lesson}
										<!-- <div>{lesson.num}.{lesson.title}</div> -->
										{#if lesson.quizes}
											{#each lesson.quizes as quiz}
												<!-- {@debug quiz} -->
												{#if quiz.title && quiz.name}
													<div
														{t}
														use:disablePanel
														name={quiz.name}
														quiz={quiz.type}
														level={level.level}
														theme={theme.num}
														theme_name={theme.name}
														title={quiz.title}
														highlight={quiz.highlight || ''}
														on:click={onClickQuiz}
													>
														<a href="#">{quiz.title}</a><span />
														{#if quiz.type === 'pair'}
															<Icon tag="svg" viewBox="0 0 24 24" width="20" height="20">
																<path fill="grey" d={mdiAccountMultiple} />
															</Icon>
														{:else if quiz.type === 'text'}
															<Icon tag="svg" viewBox="0 0 24 24" width="20" height="20">
																<path fill="grey" d={mdiTextBoxOutline} />
															</Icon>
														{:else if quiz.type === 'word'}
															<Icon tag="svg" viewBox="0 0 24 24" width="20" height="20">
																<path fill="grey" d={mdiFileWordBoxOutline} />
															</Icon>
														{:else if quiz.type === 'listen'}
															<Icon tag="svg" viewBox="0 0 24 24" width="20" height="20">
																<path fill="grey" d={mdiEarHearing} />
															</Icon>
														{/if}
													</div>
													<!-- <div style="height:10px" /> -->
												{/if}
											{/each}
										{/if}
									{/each}
								{/if}
							</Content>
						</Panel>
					</Accordion>
				</div>
			{/each}
		</div>
		<div style="height:100px"></div>
	{/if}
</div>

<style>
	.module_level {
		position: fixed;
		background-color: rgba(255, 255, 255, 0.8);
		padding: 10px;
		bottom: -15px;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1;
	}

	.lesson-container {
		height: 120vh;
		width: 100vh;
		overflow-y: auto;
		overflow-x: hidden;
		max-width: 100%;
		padding-top: 10px;
		scrollbar-width: none;
		-ms-overflow-style: none;
	}
</style>
