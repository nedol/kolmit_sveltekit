<script>
	import { onMount, onDestroy, getContext } from 'svelte';

	import bell from '$lib/mp3/bell.mp3';

	let voice, tts;

	onMount(() => {});

	export async function Speak(text) {
		const par = {
			func: 'tts',
			text: text
		};
		const response = await fetch('/speech/tts', {
			method: 'POST',
			body: JSON.stringify({ par })
			// header: { 'Content-Type': 'audio/ogg' }
		});

		if (!response.ok) {
			throw new Error(`Ошибка сервера: ${response.status}`);
		}

		const url = URL.createObjectURL(response);
		// Пример того, как можно воспроизвести полученный аудиофайл
		const audio = new Audio(url);
		audio.play();
	}

	export function Cancel() {}

	export function Pause() {}

	export function Resume() {}

	export async function initSpeech() {}

	onDestroy(() => {});
</script>
