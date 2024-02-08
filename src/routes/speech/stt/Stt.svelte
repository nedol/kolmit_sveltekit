<script>
	import { onMount } from 'svelte';
	import { MediaRecorder, register } from 'extendable-media-recorder';
	import { connect } from 'extendable-media-recorder-wav-encoder';
	import { createModel, KaldiRecognizer } from 'vosk-browser';

	export let SttResult, StopListening, display_audio;

	let audioContext,
		mediaRecorder,
		mediaStream,
		audioAnalyser,
		audioChunks = [],
		audioUrl,
		audioPlayer,
		isRecording = false,
		soundTimer,
		silenceTimer;
	let model,
		recognizer,
		loadedModel,
		audioBuffer = [];
	const threshold = 40;
	const silenceDelay = 3000; //  секунды тишины
	let checkLoop = true;

	(async () => {
		await register(await connect());
	})();

	const loadModel = async (path) => {
		loadedModel?.model.terminate();
		const MODEL_PATH = './src/routes/speech/stt/vosk-model-small-nl-0.22.tar.gz';

		const model = await createModel(MODEL_PATH);

		console.log('createdModel');

		loadedModel = { model, path };
		recognizer = new model.KaldiRecognizer(48000);
		recognizer.setWords(true);

		recognizer.on('result', (message) => {
			const result = message.result;
			console.log(result);
		});

		recognizer.on('partialresult', (message) => {
			const partial = message.result.partial;
			console.log(message.result.partial);

			recognizer.remove();
		});
	};

	onMount(async () => {
		await loadModel(); // Загрузите модель перед инициализацией аудиообработчика
	});

	export async function startAudioMonitoring() {
		try {
			mediaStream = await navigator.mediaDevices.getUserMedia({
				audio: {
					echoCancellation: true,
					noiseSuppression: true,
					autoGainControl: true,
					channelCount: 1,
					sampleRate: 48000,
					sampleSize: 16,
					volume: 1.0
				}
			});
			audioContext = new AudioContext();
			audioAnalyser = audioContext.createAnalyser();
			const source = audioContext.createMediaStreamSource(mediaStream);
			source.connect(audioAnalyser);

			const noiseSuppression = audioContext.createDynamicsCompressor();
			noiseSuppression.threshold.value = -20; // Устанавливаем порог шумоподавления
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
						MediaRecorderStop();
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

	export function MediaRecorderStop() {
		isRecording = false;
		silenceTimer = '';
		checkLoop = false;
		clearTimeout(silenceTimer);
		mediaRecorder.stop();
	}

	// Функция для начала записи
	function startRecording() {
		audioChunks = [];
		let options = {
			bitsPerSecond: 44100,
			mimeType: 'audio/wav'
			// audioBitsPerSecond: 128000 // Битрейт аудио (по желанию)
		};

		mediaRecorder = new MediaRecorder(mediaStream, options);
		mediaRecorder.ondataavailable = (e) => {
			if (false && audioChunks.length < 20) {
				audioChunks.push(e.data);
			} else {
				audioChunks.push(e.data);

				const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });

				// Преобразование Blob в массив байтов (Uint8Array)
				const fileReader = new FileReader();

				fileReader.onload = async () => {
					const arrayBuffer = fileReader.result;
					const uint8Array = new Uint8Array(arrayBuffer);
					// Декодирование массива байтов в AudioBuffer
					try {
						const audioBuffer = await audioContext.decodeAudioData(uint8Array.buffer);

						// Декодирование массива байтов в AudioBuffer
						await recognizer.acceptWaveform(audioBuffer);

						audioChunks = []; // Очистка массива после отправки
					} catch (error) {
						console.error('Error decoding audio data:', error);
					}
				};
				fileReader.readAsArrayBuffer(audioBlob);
			}
		};

		mediaRecorder.onstop = (e) => {
			stopRecording();
			StopListening();
		};

		mediaRecorder.start();
		isRecording = true;
		checkLoop = true;
	}

	// Функция для остановки записи
	async function stopRecording() {
		// await audioContext.decodeAudioData(audioBuffer);
		const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
		audioUrl = URL.createObjectURL(audioBlob);
		display_audio = 'block';
	}

	async function sendAudioToRecognition(blob) {
		try {
			function createJsonFromString(str) {
				// Разделение строки на массив строк по символам переноса строки и возврата каретки
				// Удаление символов перевода строки и возврата каретки
				const cleanedStr = str.replace(/[\n\r]/g, '');

				// Разбиваем строку на отдельные JSON объекты
				const jsonStrArray = cleanedStr.match(/{[\s\S]*?}(?=\{|$)/g);
				// Преобразование каждой строки в JSON объект
				const jsonObjects = jsonStrArray.map((jsonStr) => {
					try {
						return JSON.parse(jsonStr);
					} catch (ex) {
						console.log('Ошибка при преобразовании строки в JSON:', ex);
						return null;
					}
				});
				// Удаление неудачных преобразований (если таковые имеются)
				return jsonObjects.filter((jsonObject) => jsonObject !== null);
			}

			const recognition = await response.json();
			let json_resp = createJsonFromString(recognition.resp);

			function findLongestText(jsonObjects) {
				let longestText = '';
				let longestObject = null;
				console.log('jsonObjects:', jsonObjects);
				jsonObjects.forEach((obj) => {
					if (obj.text && obj.text.length > longestText.length) {
						longestText = obj.text;
						longestObject = obj;
					}
				});

				return longestObject;
			}
			let server_answer = '';
			if (Array.isArray(json_resp)) {
				server_answer = findLongestText(json_resp).text.replace('elite', '');
				SttResult(server_answer);
			}
			console.log('Ответ сервера:', server_answer);
		} catch (error) {
			console.log('Ошибка отправки аудио:', error);
		}
	}

	function playAudio() {
		if (audioPlayer) {
			audioPlayer.play();
		}
	}
	$: console.log('display_audio:', display_audio);
</script>

<audio bind:this={audioPlayer} src={audioUrl} controls style="display:{display_audio}"></audio>

<!-- <button on:click={playAudio}>Воспроизвести</button> -->

<style>
</style>
