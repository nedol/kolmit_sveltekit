<script>
	import { onMount } from 'svelte';
	import EasySpeech from 'easy-speech';
	import prompt_data from './prompt/prompt_data.json';
	import { tts } from '$lib/js/stores.js';
	// import * as PlayHT from 'playht';
	// PlayHT.init({
	// 	apiKey: 'a0f45d3ac9a34b94a47e1c3390415f98',
	// 	userId: '616JDkizH4P9yZNeOzOOlaAKbKi2'
	// });

	let userInput = '';
	let messages = [];
	let prompt = prompt_data['2'];
	export let view;

	async function callChatGPT() {
		try {
			let question = prompt || userInput;
			if (!question) return;

			const response = await fetch(`/chatGPT`, {
				method: 'POST',
				body: JSON.stringify({ question: question }),
				headers: { 'Content-Type': 'application/json' }
			});

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			prompt = '';
			question = '';

			const data = await response.json();
			const answer = data.resp;

			// const generated = await PlayHT.generate(answer.replace(/<[^>]*>/g, ''));

			// EasySpeech.speak({
			// 	text: answer.replace(/<[^>]*>/g, ''),
			// 	voice: $tts.voice,
			// 	rate: 0.7,
			// 	boundary: (e) => {
			// 		// console.log(e);
			// 	},
			// 	end: (e) => {},
			// 	start: (e) => {
			// 		console.log(e);
			// 	},
			// 	pause: (e) => {
			// 		console.log(e);
			// 	},
			// 	mark: (e) => {
			// 		console.log(e);
			// 	},
			// 	error: (e) => console.log(e)
			// });

			messages = [
				...messages,
				{ text: userInput, isQuestion: 'question' },
				{ text: answer, isQuestion: 'answer' }
			];
			userInput = '';
		} catch (error) {
			console.error('Произошла ошибка при обращении к серверу:', error);
		}
	}

	onMount(() => {
		// Пример начального вопроса
		//callChatGPT();
	});
</script>

<div
	class="chat-container"
	style="visibility: {view === 'chat' ? 'visible' : 'hidden'}; overflow-y: auto;"
>
	{#each messages as { text, isQuestion }, index (index)}
		<div class="userMessage {isQuestion}" key={index}>
			{text}
		</div>
	{/each}

	<div>
		<textarea
			bind:value={userInput}
			placeholder="Задайте вопрос..."
			style="width: 90%; min-width: 90%;"
		></textarea>
		<button on:click={callChatGPT}>Отправить</button>
	</div>
</div>

<style>
	.chat-container {
		position: absolute;
		width: 100%;
		overflow-y: auto;
		max-height: 70vh;
		bottom: 0;
	}

	.userMessage {
		margin: 5px;
		padding: 8px;
		border-radius: 8px;
		width: 60%;
	}

	.userMessage.question {
		background-color: #cce5ff; /* Цвет для вопросов */
		position: relative;
		float: left;
	}

	.userMessage.answer {
		background-color: #e0e0e0; /* Цвет для ответов */
		position: relative;
		float: right;
	}

	textarea {
		height: 10vh;
	}
</style>
