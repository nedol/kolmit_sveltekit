<script>
	import { onMount, onDestroy, getContext } from 'svelte';
	import EasySpeech from 'easy-speech';
	import bell from '$lib/mp3/bell.mp3';

	let voice, tts;

	onMount(() => {
		initSpeech();
	});

	export function Speak(text) {
		setTimeout(() => {
			EasySpeech.cancel();
			EasySpeech.speak({
				text: text, //dialog_data.content[cur_qa].question['nl'],
				voice: tts.voice,
				volume: 1,
				rate: 0.5,
				error: (e) => EasySpeech.reset()
			});
		}, 0);
	}

	export function Cancel() {
		EasySpeech.cancel();
	}

	export function Pause() {
		EasySpeech.pause();
	}

	export function Resume() {
		EasySpeech.resume();
	}

	async function initSpeech() {
		// const es_det = EasySpeech.detect();
		await EasySpeech.init({ maxTimeout: 10000, interval: 250, quiet: false, rate: 0.7 }); // required

		let voices = EasySpeech.voices();

		for (let v in voices) {
			tts = { voice: voices[v] };

			if (voices[v].lang.includes('nl')) {
				tts = { voice: voices[v] };

				if (voices[v].lang.includes('BE')) {
					// utterance.voice = voices[index]; //'Microsoft Bart - Dutch (Belgium)';
					tts = { voice: voices[v] };
					break;
				}
			}
		}

		EasySpeech.on('error', () => {
			EasySpeech.reset();
		});

		document.addEventListener('visibilitychange', async () => {
			if (document.hidden) {
				// Ваш код, выполняемый при переходе приложения в неактивное состояние
				// if (audioCtx) audioCtx.suspend();

				// EasySpeech.pause();
				// EasySpeech.cancel();
				await EasySpeech.reset();
				console.log('EasySpeech.status:' + EasySpeech.status());
			} else {
				// EasySpeech.cancel();
				await EasySpeech.init({ maxTimeout: 10000, interval: 250, quiet: false, rate: 1 }); // required

				console.log('EasySpeech.status:' + EasySpeech.status());

				console.log('Приложение активно');
			}
		});
	}

	onDestroy(() => {
		EasySpeech.cancel();
	});
</script>
