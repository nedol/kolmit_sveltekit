<script>
	import { onMount, onDestroy } from 'svelte';
	// import words from './80.json';
	import { langs } from '$lib/js/stores.js';

	import BottomAppBar, { Section, AutoAdjust } from '@smui-extra/bottom-app-bar';
	import IconButton, { Icon } from '@smui/icon-button';
	import { mdiPagePreviousOutline } from '@mdi/js';

	import { lesson } from '$lib/js/stores.js';

	import SpeakTTS from 'speak-tts'; // es6

	export let data;

	const tts = new SpeakTTS();
	if (tts.hasBrowserSupport()) {
		console.log('speech synthesis supported');
	}

	tts.init({
		volume: 1,
		lang: 'nl-BE',
		rate: 0,
		pitch: 1,
		voice: 'Microsoft Bart - Dutch (Belgium)',
		splitSentences: true,
		listeners: {
			onvoiceschanged: (voices) => {
				console.log('Event voiceschanged', voices);
			}
		}
	});

	let words, word;
	let shuffleWords = words;
	let wordsString = '';
	let currentWordIndex = 0;
	let currentWord;

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

	fetch(`/operator/lesson?words=theme&name=${data.name}&owner=nedooleg@gmail.com`)
		.then((response) => response.json())
		.then((data) => {
			words = data.data;
			currentWord = words[currentWordIndex];
			words.map((word) => {
				if (word.original) wordsString += word.original + '  ';
			});
		})
		.catch((error) => {
			console.log(error);
			return [];
		});

	let bottomAppBar;

	$: if (div_input) div_input.focus();

	$: if (currentWord) word = currentWord.translation[$langs];

	onMount(() => {});

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

		console.log(words);
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
			const sel = window.getSelection();
			range.setStart(div_input, focus_pos);
			range.collapse(true);
			sel.removeAllRanges();
			sel.addRange(range);
			div_input.focus();
		});
	}

	function checkInput() {
		const targetWord = words[currentWordIndex].original;
		userContent = userContent.replace(/&nbsp;/g, '').replace(/<\/?[^>]+(>|$)/g, '');
		const trimmedUserContent = userContent.trim();
		focus_pos = 0;

		if (trimmedUserContent === targetWord) {
			showCheckMark = true; // Показываем галочку
			showNextButton = true;

			if (hintIndex != 0 || errorIndex != 0) {
				// Перемещаем текущее слово в конец своей "десятки" в words
				words.splice(currentWordIndex, 1);
				words.splice(parseInt(currentWordIndex / 10) * 10 + 9, 0, currentWord);
				currentWordIndex--;
				errorIndex = 0;
			}

			userContent = currentWord.example;
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

	function onChangeUserContent() {
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
		}
	}

	function nextWord() {
		currentWordIndex = currentWordIndex + 1;
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
		currentWord = words[--currentWordIndex];
	}

	function onSpeach() {
		// speak(currentWord.original);
		tts
			.speak({
				text: currentWord.original
			})
			.then(() => {
				console.log('Success !');
			})
			.catch((e) => {
				console.error('An error occurred :', e);
			});

		setFocus();
	}

	function speak(textToSpeak) {
		if ('speechSynthesis' in window) {
			const synthesis = window.speechSynthesis;

			// Получаем доступные голоса
			let voices = synthesis.getVoices();

			// Создаем объект с параметрами речи
			const utterance = new SpeechSynthesisUtterance(textToSpeak);

			// Выбираем голос (по умолчанию первый доступный)
			utterance.voice = voices[0]; //'Microsoft Bart - Dutch (Belgium)';

			// Запускаем озвучивание
			synthesis.speak(utterance);
		} else {
			console.error('Web Speech API не поддерживается в вашем браузере.');
		}
	}
</script>

<main>
	{#if words}
		<div class="word">
			<!-- {@debug currentWord} -->
			<h1>{word}</h1>
			<!-- <div><p class={isVisible ? '' : 'hidden'}>{currentWord.original}</p></div> -->
		</div>

		<div class="input-container">
			<!-- {#if showCheckMark}
			<div class="check-mark">✓</div>
		{/if} -->
			<!-- <div /> -->
			<div
				class="input"
				contenteditable="true"
				on:input={onChangeUserContent}
				bind:this={div_input}
				bind:innerHTML={userContent}
			>
				{@html result}
			</div>
			{#if showSpeakerButton}
				<button on:click={onSpeach} class="speaker-button">🔊</button>
			{/if}
		</div>

		<button on:click={onShuffleWords} class="shuffle-button">🔀</button>
		<button on:click={jumpNext10} class="next10-button">+10</button>
		<button on:click={onPrev} class="prev-button">-1</button>
		<button on:click={showHint} class="hint-button">?</button>
		<button on:click={checkInput} class="check-button">Проверить</button>

		{#if showNextButton}
			<button on:click={nextWord} class="next-button">Дальше</button>
		{/if}

		{#if hintIndex != 0}
			<div class="words_div">
				{wordsString}
			</div>
		{/if}
	{/if}
</main>

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
	/* Стилизуйте компонент по вашему усмотрению */
	.word {
		display: flex;
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
		right: 10px;
		transform: translate(50%, 0%);
		font-size: large;
	}

	.input-container {
		position: relative;
		flex: 10;
		width: 100%;
		margin: 30px auto;
		display: flex; /* Добавлено свойство display: flex; */
		align-items: center; /* Добавлено свойство align-items: center; */
	}

	.words_div {
		line-height: 30px;
		margin: 20px;
		text-align: justify;
		max-height: 500px; /* Фиксированная высота контейнера */
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
		margin-right: 10px;
		padding: 10px;
		font-size: large;
		font-weight: 600;
		background-color: rgb(29, 113, 192);
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	.check-button:hover,
	.hint-button:hover,
	.next-button:hover {
		background-color: #5d45a0;
	}
</style>
