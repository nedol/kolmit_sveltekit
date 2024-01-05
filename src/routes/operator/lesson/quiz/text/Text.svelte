<script>
	import { onMount, getContext, onDestroy } from 'svelte';
	import md5 from 'md5';
	import translate from 'translate';
	import EasySpeech from 'easy-speech';
	import CircularProgress from '@smui/circular-progress';

	import BottomAppBar, { Section, AutoAdjust } from '@smui-extra/bottom-app-bar';
	import IconButton, { Icon } from '@smui/icon-button';
	import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
	import {
		mdiPagePreviousOutline,
		mdiChevronDownCircleOutline,
		mdiHelp,
		mdiVolumeHigh,
		mdiPause,
		mdiPlay
	} from '@mdi/js';

	import pkg from 'lodash';
	const { merge } = pkg;

	translate.from = 'nl';
	translate.engine = 'google';
	import { langs } from '$lib/js/stores.js';

	import { lesson } from '$lib/js/stores.js';
	import { tts } from '$lib/js/stores.js';

	export let data;
	let bottomAppBar;
	let woorden = data.words,
		orig_text,
		text,
		trans = '',
		trans_div;

	let bottomOpen = true;
	let containerWidth = '100%';
	let containerHeight = '100vh';
	const abonent = getContext('abonent');
	let speaker = mdiVolumeHigh;

	fetch(
		`/operator/lesson?text=theme&level=${data.level}&theme=${data.theme}&title=${data.name}&abonent=${abonent}`
	)
		.then((response) => response.json())
		.then((data) => {
			orig_text = text = data.obj.text;
			fetchText();
		})
		.catch((error) => {
			console.log(error);
			return [];
		});

	function fetchText() {
		fetch(`/operator/lesson?dict=theme&level=${data.level}&theme=${data.theme}&abonent=${abonent}`)
			.then((response) => response.json())
			.then((data) => {
				woorden = merge(woorden, JSON.parse(data.data));
				highlightWords();
			})
			.catch((error) => {
				console.log(error);
				return [];
			});
	}

	async function handleBackClick() {
		setTimeout(() => {
			EasySpeech.cancel();
		}, 0);
		$lesson.data = { quiz: '' }; // При клике на "Back" показываем компонент Lesson
	}

	async function Translate(text) {
		if (woorden[text]) {
			return woorden[text][$langs];
		} else {
			console.log();
			return await translate(text.trim().toLowerCase(), $langs);
		}
	}

	function searchWordsWithPartialMatch(words, searchTerm, matchPercentage) {
		const searchTermLower = searchTerm.toLowerCase();

		function calculateMatchPercentage(str1, str2) {
			const longerStr = str1.length > str2.length ? str1 : str2;
			const shorterStr = str1.length > str2.length ? str2 : str1;
			const matchPercentage = (shorterStr.length / longerStr.length) * 100;

			return matchPercentage;
		}

		const matchedWords = words.filter((word) => {
			const wordLower = word.toLowerCase();
			const percentage = calculateMatchPercentage(wordLower, searchTermLower);
			return percentage >= matchPercentage;
		});

		return matchedWords;
	}

	onMount(async () => {
		const parentWidth = window.innerWidth;
		containerWidth = parentWidth + 'px';

		const parentHeight = window.innerHeight;
		containerHeight = parentHeight + 'px';
	});

	onDestroy(() => {});

	function measureTextSize(text, cb) {
		const measureElement = trans_div;
		measureElement.textContent = text;
		const computedStyle = window.getComputedStyle(measureElement);
		measureElement.style.font = computedStyle.fontSize;

		const width = measureElement.offsetWidth;
		const height = measureElement.offsetHeight;

		cb({ width, height });
	}

	function highlightWords() {
		Object.keys(woorden).forEach((woord) => {
			const regex = new RegExp(
				`\\b[${woord.charAt(0).toUpperCase()}${woord.charAt(0).toLowerCase()}]${woord.slice(1)}\\b`,
				'g'
			);

			text = text.replace(
				regex,
				`<span class="highlight" style="color: red;background-color: transparent" trans="${woorden[woord][$langs]}">${woord}</span>`
			);
		});
	}

	function TTSSpeak(text) {
		setTimeout(() => {
			EasySpeech.speak({
				text: text.replace(/<[^>]*>/g, ''),
				voice: $tts.voice,
				rate: 0,
				end: (e) => {
					speaker = mdiVolumeHigh;
				},
				error: (e) => console.log(e)
			});
		}, 0);
	}

	function TTSPause() {
		setTimeout(() => {
			EasySpeech.pause();
		}, 0);
	}

	function TTSResume() {
		setTimeout(() => {
			EasySpeech.resume();
		}, 0);
	}
	async function onClickText(event) {
		let x, y;
		if (event.target.attributes['trans']) {
			x = event.clientX - 35;
			y = event.clientY - 40 + window.scrollY;
			trans_div.style.top = `${y}px`;
			trans_div.style.left = `${x}px`;
			trans_div.style.visibility = 'visible';
			trans = event.target.attributes['trans'].nodeValue;
			TTSSpeak(event.target.innerText);
		} else {
			let selection = window.getSelection();

			const range = selection.getRangeAt(0);
			const rect = range.getBoundingClientRect();

			let word = selection.anchorNode.data.substring(
				selection.anchorOffset,
				selection.extentOffset
			);

			TTSSpeak(word);

			trans = await Translate(word);

			x = rect.x;
			y = rect.y - 28 + window.scrollY;

			trans_div.style.top = `${y}px`;
			trans_div.style.left = `${x}px`;
			trans_div.style.visibility = 'visible';

			await new Promise((resolve) => setTimeout(resolve, 0));

			measureTextSize(trans, (transSize) => {
				if (x + transSize.width > window.innerWidth) {
					trans_div.style.left = `${window.innerWidth - transSize.width - 50}px`;
					trans_div.style.width = `${transSize.width}`;
				}
			});
		}

		setTimeout(
			(trans_div) => {
				trans_div.style.visibility = 'hidden';
				trans = '';
			},
			2000,
			trans_div
		);
	}

	function onContinueClick() {
		paused = false;
		cnt++;
		fetchText();
	}

	let touchStartTime = 0;
	function onTouchStart(event) {
		// Запомните время начала касания
		touchStartTime = new Date().getTime();
	}

	async function onSelectionEnd(event) {
		let x, y;
		const selection = window.getSelection();
		const range = selection.getRangeAt(0);
		const rect = range.getBoundingClientRect();

		const touchEndTime = new Date().getTime();
		const touchDuration = touchEndTime - touchStartTime;
		if (touchDuration >= 500) {
			if (selection && selection.toString().trim() !== '') {
				if (event.target.attributes['trans']) {
					x = rect.x;
					y = rect.y - 28 + window.scrollY;
					trans_div.style.top = `${y}px`;
					trans_div.style.left = `${x}px`;
					trans_div.style.visibility = 'visible';
					trans = event.target.attributes['trans'].nodeValue;
					await TTSSpeak(event.target.innerText);
					return;
				}

				// Выделение текста завершено
				const selectedText = selection.toString().trim();
				trans = await Translate(selectedText);
				x = rect.x;
				y = rect.y - 28 + window.scrollY;

				trans_div.style.top = `${y}px`;
				trans_div.style.left = `${x}px`;
				trans_div.style.visibility = 'visible';
			}
		}
	}

	function onSpeach(ev) {
		if (speaker === mdiVolumeHigh) {
			TTSSpeak(orig_text);
			speaker = mdiPause;
		} else if (speaker === mdiPause) {
			TTSPause();
			speaker = mdiPlay;
		} else if (speaker === mdiPlay) {
			TTSResume();
			speaker = mdiPause;
		}
	}
</script>

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/>

<!-- <button  class="speaker-button"> -->

{#if !text}
	<span class="material-symbols-outlined" style="font-size: 20px; color: blue; scale:1.5">
		<CircularProgress style="height: 30px; width: 30px;" indeterminate />
	</span>
{:else}
	<IconButton class="material-icons" on:click={onSpeach}>
		<Icon tag="svg" viewBox="0 0 24 24">
			<path fill="currentColor" d={speaker} />
		</Icon>
	</IconButton>
{/if}

<!-- </button> -->
<div class="accordion-container">
	<Accordion>
		<Panel>
			<Header>
				<h3>{data.title}</h3>
				<IconButton class="material-icons">
					<Icon tag="svg" viewBox="0 0 24 24">
						<path fill="currentColor" d={mdiChevronDownCircleOutline} />
					</Icon>
				</IconButton>
			</Header>
			<Content style="line-height: 2.2;">
				<div
					style="height:{window.innerHeight}; line-height:50px"
					on:touchend={onSelectionEnd}
					on:mouseup={onSelectionEnd}
				>
					{@html text}
				</div>
			</Content>
		</Panel>
	</Accordion>
</div>

<div id="translationOverlay" bind:this={trans_div}>{trans}</div>

<BottomAppBar bind:this={bottomAppBar}>
	<Section>
		<IconButton class="material-icons" aria-label="Back" on:click={handleBackClick}>
			<Icon tag="svg" viewBox="0 0 24 24">
				<path fill="currentColor" d={mdiPagePreviousOutline} />
			</Icon>
		</IconButton>
	</Section>
	<Section>
		<!-- <IconButton class="material-icons">change_circle</IconButton> -->
	</Section>

	<Section>
		<IconButton class="material-icons" fill="currentColor" aria-label="More">more_vert</IconButton>
	</Section>
</BottomAppBar>

<style>
	#translationOverlay {
		display: block;
		position: absolute;
		/* width: 400px; */
		word-break: break-all;
		background-color: rgba(255, 255, 255, 0.61);
		right: 5px;
		/* padding: 5px; */
		/* white-space: nowrap; */
		height: auto;
		color: green;

		visibility: hidden;
	}

	.selected_sentence {
		font-weight: 100;
	}

	.bottom-app-bar-container {
		border: 1px solid var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
		margin: 0 18px 18px 0;
		background-color: var(--mdc-theme-background, #fff);
	}

	@media (max-width: 480px) {
		.bottom-app-bar-container {
			margin-right: 0;
		}
	}

	.flexy {
		display: flex;
		flex-wrap: wrap;
	}

	.flexor {
		overflow: hidden;
		display: inline-flex;
		flex-direction: column;
	}

	.flexor-content {
		flex-basis: 0;
		height: 0;
		flex-grow: 1;
		overflow: auto;
	}
</style>
