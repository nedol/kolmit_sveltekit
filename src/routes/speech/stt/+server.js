const fs = require('fs');
const { Wit } = require('node-wit');

const client = new Wit({ accessToken: 'WWJSDBA5JAVB4WP4JNKULL2CAZ7JCPL7' });
const token = 'WWJSDBA5JAVB4WP4JNKULL2CAZ7JCPL7';

// import audioEncoder from 'audio-encoder';

/** @type {import('./$types').RequestHandler} */
export async function POST({ url, fetch, cookies, request }) {
	// const audioBlob = await request.blob(); // Получаем Blob объект
	const formData = await request.formData();
	let fileContent = formData.get('file');

	// Преобразование Blob в Buffer
	const buffer = await fileContent.arrayBuffer();
	let nodeBuffer = Buffer.from(buffer);
	// for (let [key, value] of fileContent) {
	// 	console.log({ key: key, value: value });
	// }

	// // // Путь к файлу
	// const filePath = 'C:\\Users\\lenovo\\waar.ogg';
	// let fileBuffer;
	// try {
	// 	// Чтение файла синхронно
	// 	fileBuffer = fs.readFileSync(filePath);
	// 	// Обработка данных файла
	// 	console.log('Аудиофайл прочитан', fileBuffer);
	// } catch (err) {
	// 	console.error('Ошибка при чтении файла:', err);
	// }

	// convert as mp3 and save file using file-saver
	// audioEncoder(buffer, 128, null, function onComplete(blob) {
	// 	fileSaver.saveAs(blob, 'sound.mp3');
	// });

	try {
		// const resp = await client.speech('audio/ogg', audioBlob);
		let resp = await sendAudioToWitAI(nodeBuffer);

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

async function sendAudioToWitAI(audioFile) {
	const token = 'WWJSDBA5JAVB4WP4JNKULL2CAZ7JCPL7'; // Замените на ваш серверный токен доступа
	const context = 'context=' + encodeURIComponent('{ "locale": "nl_NL"}');
	const url = `https://api.wit.ai/speech?v=20230215&${context}`;

	let res;

	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'audio/wav' //audio/ogg'
			},
			body: audioFile

			// duplex: 'half' // Указывает, что поток только для чтения
		})
			.then((response) => response.text())
			.then((data) => (res = data))
			.catch((error) => console.error('Ошибка от Wit.ai:', error));

		// if (!response.ok) {
		// 	throw new Error(`Ошибка от Wit.ai: ${response.status}`);
		// }

		// const data = await response.json();
		console.log('Ответ Wit.ai:', res);
		return res;
	} catch (error) {
		console.error('Ошибка при отправке аудио в Wit.ai:', error);
	}
}
