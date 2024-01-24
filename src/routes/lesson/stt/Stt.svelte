<script>
	import { onMount } from 'svelte';

	let audioContext,
		mediaRecorder,
		mediaStream,
		audioAnalyser,
		audioChunks = [];
	let audioUrl,
		audioPlayer,
		isRecording = false,
		soundTimer,
		silenceTimer;
	const threshold = 25;
	const silenceDelay = 2000; // 1 секунда тишины
	let checkLoop = true;

	onMount(async () => {});

	export async function startAudioMonitoring() {
		try {
			mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
			audioContext = new AudioContext();
			audioAnalyser = audioContext.createAnalyser();
			const source = audioContext.createMediaStreamSource(mediaStream);
			source.connect(audioAnalyser);
			// дополнительные настройки audioAnalyser
			startRecording();
			// checkAudio();
			setTimeout(() => {
				mediaRecorder.stop();
				stopRecording();
			}, 5000);
		} catch (error) {
			console.error('Ошибка доступа к микрофону:', error);
		}
	}

	// Функция для проверки уровня аудио и управления записью
	function checkAudio() {
		console.log('startRecording');
		const dataArray = new Uint8Array(audioAnalyser.frequencyBinCount);
		const checkSilence = () => {
			audioAnalyser.getByteFrequencyData(dataArray);
			const sum = dataArray.reduce((a, b) => a + b, 0);
			const average = sum / dataArray.length;
			console.log('average:', average);
			if (average > threshold) {
				clearTimeout(silenceTimer);
			} else if (average <= threshold - 15 && isRecording) {
				silenceTimer = setTimeout(() => {
					checkLoop = false;
					mediaRecorder.stop();
					isRecording = false;
					console.log('stopRecording:', average);
				}, silenceDelay);
			}
			if (checkLoop) {
				requestAnimationFrame(checkSilence);
			}
		};

		console.log();
		checkSilence();
	}

	// Функция для начала записи
	function startRecording() {
		audioChunks = [];
		mediaRecorder = new MediaRecorder(mediaStream);
		mediaRecorder.ondataavailable = (e) => {
			audioChunks.push(e.data);
			console.log(audioChunks);
			stopRecording();
		};

		mediaRecorder.start();
		isRecording = true;
		checkLoop = true;
	}

	// Функция для остановки записи
	async function stopRecording() {
		// Обработка audioChunks или отправка на сервер
		const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
		audioUrl = URL.createObjectURL(audioBlob);
		await sendAudioToServer(audioBlob);
		audioChunks = []; // Очистка массива после отправки
	}

	async function sendAudioToServer(blob) {
		try {
			const formData = new FormData();
			formData.append('file', blob);

			for (const pair of formData.entries()) {
				console.log(pair[0], pair[1]);
			}

			const response = await fetch('/lesson/stt', {
				method: 'POST',
				body: formData,
				header: { 'Content-Type': 'audio/wav' }
			});

			if (!response.ok) {
				throw new Error(`Ошибка сервера: ${response.status}`);
			}

			let recognition = await response.json();
			console.log('Ответ сервера:', recognition);
		} catch (error) {
			console.error('Ошибка отправки аудио:', error);
		}
	}

	function playAudio() {
		if (audioPlayer) {
			audioPlayer.play();
		}
	}
</script>

<audio bind:this={audioPlayer} src={audioUrl} controls></audio>
<button on:click={playAudio}>Воспроизвести</button>
