const { Wit } = require('node-wit');

const client = new Wit({ accessToken: 'WWJSDBA5JAVB4WP4JNKULL2CAZ7JCPL7' });
const token = 'WWJSDBA5JAVB4WP4JNKULL2CAZ7JCPL7';

/** @type {import('./$types').RequestHandler} */
export async function POST({ url, fetch, cookies, request }) {
	const audioBlob = await request.blob(); // Получаем Blob объект

	try {
		// const resp = await client.speech(audioBlob, {
		// 	headers: {
		// 		Authorization: `Bearer ${token}`,
		// 		'Content-Type': 'audio/wav'
		// 	}
		// });
		let resp = sendAudioToWitAI(audioBlob);

		let response = new Response(JSON.stringify({ resp }));
		response.headers.append('Access-Control-Allow-Origin', `*`);
		return response;
	} catch (error) {
		console.error('Ошибка при отправке аудио в Wit.ai:', error);
	}

	let response = new Response(JSON.stringify({}));
	response.headers.append('Access-Control-Allow-Origin', `*`);
	return response;
}

async function sendAudioToWitAI(audioBlob) {
	const token = 'WWJSDBA5JAVB4WP4JNKULL2CAZ7JCPL7'; // Замените на ваш серверный токен доступа
	const url = 'https://api.wit.ai/speech';

	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'audio/wav'
			},
			body: audioBlob
		});

		if (!response.ok) {
			throw new Error(`Ошибка от Wit.ai: ${response.status}`);
		}

		const data = await response.json();
		console.log('Ответ Wit.ai:', data);
		return data;
	} catch (error) {
		console.error('Ошибка при отправке аудио в Wit.ai:', error);
	}
}

function startRecording() {
	const recording = recorder.record({
		recorder: 'arecord'
	});
	recording.stream().pipe(
		request.post(
			{
				url: 'https://api.wit.ai/speech?client=chromium&lang=nl-nl&output=json',
				headers: {
					Accept: 'application/vnd.wit.20160202+json',
					Authorization: `Bearer ${witToken}`,
					'Content-Type': 'audio/wav'
				}
			},
			parseResult
		)
	);

	function parseResult(err, resp, body) {
		if (err) console.error(err);
		console.log(body);
	}
	setTimeout(() => {
		recording.stop();
	}, 3000); // Stop after three seconds of recording
}
