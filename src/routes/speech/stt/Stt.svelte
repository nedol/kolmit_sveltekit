<script>
	import { onMount } from 'svelte';
	import { MediaRecorder, register } from 'extendable-media-recorder';
	import { connect } from 'extendable-media-recorder-wav-encoder';

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
	const threshold = 40;
	const silenceDelay = 3000; //  секунды тишины
	let checkLoop = true;

	(async () => {
		await register(await connect());
	})();

	onMount(async () => {});

	export async function startAudioMonitoring() {
		try {
			mediaStream = await navigator.mediaDevices.getUserMedia({
				audio: {
					echoCancellation: true,
					noiseSuppression: true,
					autoGainControl: true,
					channelCount: 1,
					sampleRate: 16000,
					sampleSize: 16,
					volume: 1.0
				}
			});
			audioContext = new AudioContext();
			audioAnalyser = audioContext.createAnalyser();
			const source = audioContext.createMediaStreamSource(mediaStream);
			source.connect(audioAnalyser);

			const noiseSuppression = audioContext.createDynamicsCompressor();
			noiseSuppression.threshold.value = -30; // Устанавливаем порог шумоподавления
			source.connect(noiseSuppression);
			// дополнительные настройки audioAnalyser
			startRecording();
			checkAudio();
			// setTimeout(() => {
			// 	mediaRecorder.stop();
			// }, 4000);
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
				console.log('threshold:', average);
				clearTimeout(silenceTimer);
				silenceTimer = '';
				console.log('silenceTimer after:', silenceTimer);
			} else if (average <= threshold - 15 && isRecording) {
				if (!silenceTimer)
					silenceTimer = setTimeout(() => {
						checkLoop = false;
						mediaRecorder.stop();
						isRecording = false;
						silenceTimer = '';
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
		let options = {
			/*bitsPerSecond: 44100*/
			mimeType: 'audio/wav'
		};

		mediaRecorder = new MediaRecorder(mediaStream, options);
		mediaRecorder.ondataavailable = (e) => {
			audioChunks.push(e.data);
			// console.log(audioChunks);
		};

		mediaRecorder.onstop = (e) => {
			// Здесь вызывается функция для преобразования данных в WAV
			stopRecording();
			console.log(audioChunks);
		};

		mediaRecorder.start(100);
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

			const response = await fetch('/speech/stt', {
				method: 'POST',
				body: formData
				// header: { 'Content-Type': 'audio/ogg' }
			});

			if (!response.ok) {
				throw new Error(`Ошибка сервера: ${response.status}`);
			}

			function createJsonFromString(str) {
				// Разделение строки на массив строк по символам переноса строки и возврата каретки
				const jsonStrings = str.trim().split(/\r?\n/);

				// Преобразование каждой строки в JSON объект
				const jsonObjects = jsonStrings.map((jsonStr) => {
					try {
						return JSON.parse(jsonStr);
					} catch (e) {
						console.error('Ошибка при преобразовании строки в JSON:', e);
						return null;
					}
				});

				// Удаление неудачных преобразований (если таковые имеются)
				return jsonObjects.filter((jsonObject) => jsonObject !== null);
			}

			const recognition = await response.json();
			const json_resp = createJsonFromString(recognition.resp);
			console.log('Ответ сервера:', json_resp);
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
<!-- <button on:click={playAudio}>Воспроизвести</button> -->
