<script>
	import { onMount } from 'svelte';

	import prompt_data from './prompt/prompt_data.json';

	let userInput = '';
	let messages = [];
	let prompt = 'I want to get answers in json.'; // Default prompt
	let display = 'none';
	export let view;

	$: if (view === 'chat') {
		display = 'block';
	} else {
		display = 'none';
	}

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

	function handleKeyDown(event) {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault();
			callChatGPT();
		}
	}

	onMount(() => {
		callChatGPT(); // Call on component mount for initial question
	});
</script>

<div
	class="chat-container"
	style="display:{display};visibility: {view === 'chat' ? 'visible' : 'hidden'}; overflow-y: auto;"
>
	{#each messages as { text, isQuestion }, index (index)}
		<div class="userMessage {isQuestion}" key={index}>
			{text}
		</div>
	{/each}
</div>
<div class="input-container" style="display:{display}">
	<button on:click={callChatGPT}>Отправить</button>
	<textarea bind:value={userInput} on:keydown={handleKeyDown} placeholder="Задайте вопрос..."
	></textarea>
</div>

<style>
	.chat-container {
		display: flex;
		flex-direction: column-reverse;
		position: relative;
		width: 100%;
		height: 65vh;
		background-color: #f4f4f8;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		padding-bottom: 60px; /* Оставляем место для поля ввода и кнопки */
	}

	.userMessage {
		margin: 5px;
		padding: 8px;
		border-radius: 8px;
		width: 80%;
	}

	.userMessage.question {
		background-color: #cce5ff;
		float: left;
	}

	.userMessage.answer {
		background-color: #e0e0e0;
		margin-right: 20px;
		float: right;
	}

	.input-container {
		position: relative;
		bottom: -150px;
		width: 95%;
		padding: 0 10px; /* Добавляем отступы */
	}

	button {
		position: relative;
		bottom: 0px; /* Кнопка выше нижней границы на 30px */
	}

	textarea {
		width: 100%;
		height: 10vh;
		position: relative;
		bottom: 0;
	}
</style>
