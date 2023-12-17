<script>
	import { onMount, onDestroy } from 'svelte';
	// import words from './80.json';
	import { langs } from '$lib/js/stores.js';
	import EasySpeech from 'easy-speech';

	import BottomAppBar, { Section, AutoAdjust } from '@smui-extra/bottom-app-bar';
	import IconButton, { Icon } from '@smui/icon-button';
	import { mdiPagePreviousOutline, mdiShuffleVariant } from '@mdi/js';

	import { dicts } from '$lib/js/stores.js';

	let dict = $dicts;

	import { lesson } from '$lib/js/stores.js';

	export let data;

	import { tts } from '$lib/js/stores.js';
	let voice_name = '';
	if ($tts && $tts.voice) voice_name = $tts.voice.name;

	let words = [],
		word;
	let shuffleWords = words;
	let wordsString = '';
	let currentWordIndex = 0;
	let currentWord;
	let hl_words = data.highlight ? data.highlight.split(',') : '';

	let arrayOfArrays;
	let userContent = '';
	let div_input;
	let result = '';
	let hintIndex = 0;
	let errorIndex = 0;
	let showCheckMark = false;
	let showNextButton = false;

	let showSpeakerButton = false;
	let focus_pos = 0;

	// defineWordsArray();

	let counter = 0;
	let isVisible = false;

	let names = data.name.split(',');

	for (let n in names) {
		// Создаем массив промисов для каждого запроса
		const fetchPromises = names.map((name) => {
			return fetch(`./operator/lesson?words=theme&name=${name}&owner=nedooleg@gmail.com`)
				.then((response) => response.json())
				.then((data) => data.data)
				.catch((error) => {
					console.log(error);
					return [];
				});
		});
		// Ждем завершения всех запросов
		Promise.all(fetchPromises)
			.then((allData) => {
				// allData - это массив результатов каждого запроса
				words = [].concat(...allData); // Объединяем массивы в один
				console.log(words);
				currentWord = words[currentWordIndex];
				words.map((word) => {
					if (word.original) wordsString += word.original + '  ';
				});
			})
			.catch((error) => {
				console.log(error);
				return [];
			});
	}

	function highlightWords() {
		hl_words.forEach((woord) => {
			const regex = new RegExp(
				`\\b[${woord.charAt(0).toUpperCase()}${woord.charAt(0).toLowerCase()}]${woord.slice(1)}\\b`,
				'g'
			);

			userContent = userContent.replace(
				regex,
				`<span class="highlight" style="color: green;background-color: transparent">${woord}</span>`
			);
		});

		Object.keys(words).forEach((i) => {
			const woord = words[i].original;
			const regex = new RegExp(
				`\\b[${woord.charAt(0).toUpperCase()}${woord.charAt(0).toLowerCase()}]${woord.slice(1)}\\b`,
				'g'
			);

			userContent = userContent.replace(
				regex,
				`<span class="highlight" style="color: green;background-color: transparent">${woord}</span>`
			);
		});
	}

	let bottomAppBar;

	$: if (div_input) div_input.focus();

	$: if (currentWord) {
		word = currentWord.translation[$langs];
		// Устанавливаем фокус в конец строки
		setFocus();
	}

	onMount(async () => {});

	onDestroy(() => {
		// Очищаем интервал при размонтировании компонента

		console.log('Компонент размонтирован');
	});

	function handleBackClick() {
		$lesson.data = { quiz: '' }; // При клике на "Back" показываем компонент Lesson
	}

	function onShuffleWords(ev) {
		for (let i = words.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[words[i], words[j]] = [words[j], words[i]];
		}

		currentWord = words[0];
	}

	function jumpNext10() {
		const nextIndex = (parseInt(currentWordIndex / 10) + 1) * 10;
		currentWordIndex = nextIndex;
		currentWord = words[currentWordIndex];
		div_input.focus();
		userContent = '';
		hintIndex = 0;
		result = '';
		showCheckMark = false;
		showSpeakerButton = false;
	}

	function defineWordsArray() {
		const originalArray = words;

		// Определение длины массива
		const arrayLength = originalArray.length;

		// Определение количества подмассивов
		const chunkSize = 10;
		const numberOfChunks = Math.ceil(arrayLength / chunkSize);

		// Разбиваем массив на подмассивы по 10 элементов
		arrayOfArrays = [];

		for (let i = 0; i < numberOfChunks; i++) {
			const start = i * chunkSize;
			const end = (i + 1) * chunkSize;
			const chunk = originalArray.slice(start, end);
			arrayOfArrays.push(chunk);
		}

		// console.log(arrayOfArrays);
	}

	function setFocus() {
		setTimeout(() => {
			const range = document.createRange();
			const selection = window.getSelection();
			range.selectNodeContents(div_input);
			range.collapse(false);
			selection.removeAllRanges();
			selection.addRange(range);
		});
	}

	function checkInput() {
		const targetWord = words[currentWordIndex].original;
		userContent = userContent.replace(/&nbsp;/g, '').replace(/<\/?[^>]+(>|$)/g, '');
		const trimmedUserContent = userContent.trim();
		focus_pos = 0;

		if (trimmedUserContent.toLowerCase() === targetWord) {
			showCheckMark = true; // Показываем галочку
			showNextButton = true;
			speak(currentWord.original);

			if (hintIndex != 0 || errorIndex != 0) {
				// Перемещаем текущее слово в конец своей "десятки" в words
				words.splice(currentWordIndex, 1);
				words.splice(parseInt(currentWordIndex / 10) * 10 + 9, 0, currentWord);
				// Создаем клон текущего слова
				const currentWordClone = { ...currentWord };
				// Проверяем, достаточно ли элементов в массиве words для добавления в следующую "двадцатку"
				if (currentWordIndex + 20 < words.length) {
					// Вычисляем индекс конечного элемента в следующей "двадцатке"
					const nextTwentyIndex = currentWordIndex + 20;
					// Вставляем клон currentWord в конец следующей "двадцатки"
					words.splice(nextTwentyIndex, 0, currentWordClone);
				} else {
					// Если условие не выполняется, вставляем клон currentWord в конец массива words
					words.push(currentWordClone);
				}

				words = words;
				currentWordIndex = currentWordIndex - 1;
				errorIndex = 0;
			}

			userContent = currentWord.example;
			highlightWords(userContent);
			// nextWord();
		} else {
			showCheckMark = false;
			result = '';

			let i = 0;

			while (i < targetWord.length || i < trimmedUserContent.length) {
				if (!trimmedUserContent[i]) {
					// Недостающие символы выделяются пустым span с красной окантовкой
					result += `<span class="empty_block" onchage="onChangeUserContent" style="display: inline-block; background-color:rgba(255, 240, 251, 0.9);border:1px solid rgba(255, 240, 251, 0.9); width:15px">&nbsp;</span>`;
				} else if (trimmedUserContent[i] === targetWord[i]) {
					// Совпадающие символы
					result += `<span class="correct">${targetWord[i]}</span>`;
					focus_pos = i + 1;
				} else {
					// Несовпадающие символы
					result += `<span style="color:red;  ">${trimmedUserContent[i]}</span>`;
					errorIndex++;
				}

				i++;
			}

			userContent = result;
			// Устанавливаем фокус в конец строки в div_input
			setFocus();
		}
	}

	function onChangeUserContent(ev) {
		let ar = document.getElementsByClassName('empty_block');
		if (ar.length > 0) {
			// console.log(ar.length);
			ar[0].remove();
		}
	}

	function showHint() {
		// wordsString = shuffleWords(wordsString);
		if (currentWord && hintIndex < currentWord.original.length) {
			if (hintIndex === 0) {
				userContent = '';
			}
			userContent += currentWord.original[hintIndex];
			hintIndex++;

			result = ''; // Очистим результат при каждой новой подсказке
			showSpeakerButton = true; // Устанавливаем видимость кнопки
			setFocus();
		}
	}

	function nextWord() {
		currentWordIndex = currentWordIndex + 1;
		if (currentWordIndex >= words.length) currentWordIndex = 0;
		currentWord = words[currentWordIndex];
		div_input.focus();
		userContent = '';
		hintIndex = 0;
		result = '';
		showCheckMark = false;
		showNextButton = false;
		showSpeakerButton = false;
	}

	function onPrev() {
		if (currentWordIndex === 1) return;
		currentWord = words[--currentWordIndex];
	}

	function onSpeach() {
		speak(currentWord.original);
	}

	async function speak(text) {
		// if ($tts.speak) {
		// 	$tts.speak({
		// 		text: text
		// 	});
		// .then(() => {
		// 	console.log('speak Success !');
		// })
		// .catch((e) => {
		// 	console.error('An error occurred :', e);
		// });
		// } else {

		await EasySpeech.speak({ text: text, voice: $tts.voice, error: (e) => console.log(e) });
		// }

		setFocus();
	}
</script>

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/>

<main>
	{#if words}
		<div style="position:relative;float:left">
			<button on:click={showHint} class="hint-button">
				<span class="material-symbols-outlined"> reminder </span>
				<!-- <i class="material-icons" style="font-size: 15px; color: blue; scale:1.5"> reminder </i> -->
				<!-- <i class="material-icons" style="font-size: 15px; color: blue; scale:1.5">reminder</i> -->
			</button>

			<button on:click={jumpNext10} class="next10-button">+10</button>
			<button on:click={onPrev} class="prev-button">-1</button>
			<button on:click={onShuffleWords} class="shuffle-button">
				<i class="material-symbols-outlined" style="font-size: 15px;  scale:1.5">shuffle</i>
			</button>
		</div>
		<div style="position:relative;float:right">
			{#if showNextButton}
				<button on:click={nextWord} class="next-button">{dict['Дальше'][$langs]}</button>
			{:else}
				<button on:click={checkInput} class="check-button">{dict['Проверить'][$langs]}</button>
			{/if}
		</div>
		<div style="height: 40px"></div>
		<div class="word">
			<!-- {@debug currentWord} -->
			<h1>{word}</h1>
			<div>{currentWordIndex + 1}/{words.length}</div>
			{#if showSpeakerButton}
				<button on:click={onSpeach} class="speaker-button">
					<span class="material-symbols-outlined" style="font-size: 15px; color: blue; scale:1.5">
						volume_up
					</span>
				</button>
			{/if}
		</div>

		<div class="input-container">
			<div
				class="input"
				contenteditable="true"
				on:input={onChangeUserContent}
				bind:this={div_input}
				bind:innerHTML={userContent}
			>
				{@html result}
			</div>
		</div>

		{#if hintIndex != 0}
			<div class="words_div">
				{wordsString}
			</div>
		{/if}
	{/if}
</main>

<BottomAppBar bind:this={bottomAppBar}>
	<!-- <div style="position:absolute; bottom:55px ; right:0; font-size:small">{voice_name}</div> -->

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
	.material-symbols-outlined {
		font-size: 15px;
		color: rgb(100, 180, 69);
		scale: 1.5;
		font-variation-settings:
			'FILL' 0,
			'wght' 400,
			'GRAD' 0,
			'opsz' 24;
	}

	/* Стилизуйте компонент по вашему усмотрению */
	.word {
		flex-direction: column;
		align-items: center;
		margin: 0;
	}

	h1 {
		margin-bottom: 20px;
	}

	.hidden {
		opacity: 0;
		pointer-events: none;
	}

	p {
		position: relative;
		transition: opacity 0.5s ease;
		text-align: center;
		font-size: xx-large;
		margin: 0;
	}

	.speaker-button {
		position: absolute;
		flex: auto;
		top: 210px;
		right: 30px;
		transform: translate(50%, 0%);
		font-size: large;
	}

	.input-container {
		position: relative;
		width: 100%;
		margin: 0px auto;
		display: flex; /* Добавлено свойство display: flex; */
		align-items: center; /* Добавлено свойство align-items: center; */
	}

	.words_div {
		width: 95%;
		line-height: 30px;
		margin-top: 20px;
		text-align: justify;
		max-height: 370px;
		overflow-y: auto;
	}

	.input {
		flex: 1;
		letter-spacing: 2px;
		padding: 5px;
		text-align: center;
		color: blue;
		background-color: white;
		border: 0vw;
		font-size: large;
	}
	.check-mark {
		/* Стили галочки */
		position: absolute;
		top: 50%;
		right: 0%;
		transform: translate(-50%, -50%);
		font-size: xx-large;
		color: rgb(25, 133, 25);
	}
	.next10-button,
	.shuffle-button,
	.prev-button,
	.check-button,
	.hint-button,
	.next-button {
		margin-top: 10px;
		padding: 8px 10px;
		font-size: 16px;
		font-weight: 500;
		border-color: rgb(100, 180, 69);
		border-radius: 5px;
		cursor: pointer;
		color: rgb(85, 151, 59);
	}
</style>
