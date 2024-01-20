<script>
	import { onMount } from 'svelte';
	import EasySpeech from 'easy-speech';
	import prompt_data from './prompt/prompt_data.json';
	import { tts } from '$lib/js/stores.js';

	let userInput = '';
	let messages = [];
	let prompt = 'I want to get answers in json.'; // Default prompt
	export let view;

	// Function to call ChatGPT
	async function callChatGPT() {
		try {
			if (!userInput) return;

			const response = await fetch(`/chatGPT`, {
				method: 'POST',
				body: JSON.stringify({ question: userInput }),
				headers: { 'Content-Type': 'application/json' }
			});

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const data = await response.json();
			const answer = data.resp;

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
		callChatGPT(); // Call on component mount for initial question
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
		bottom: 0;
		width: 100%;
		overflow-y: auto;
		max-height: 70vh;
		background-color: #f4f4f8; /* Светлый фон */
		border-radius: 10px; /* Скругленные углы */
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Тень */
	}

	.userMessage {
		margin: 5px;
		padding: 8px;
		border-radius: 8px;
		width: 80%;
	}

	.userMessage.question {
		background-color: #cce5ff; /* Цвет для вопросов */
		position: relative;
		float: left;
	}

	.userMessage.answer {
		background-color: #e0e0e0; /* Цвет для ответов */
		position: relative;
		margin-right: 20px;
		float: right;
	}

	textarea {
		height: 10vh;
	}
</style>
