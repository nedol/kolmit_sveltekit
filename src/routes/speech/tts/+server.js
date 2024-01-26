import path from 'path';
import { fileURLToPath } from 'url';
const token = 'WWJSDBA5JAVB4WP4JNKULL2CAZ7JCPL7';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('./$types').RequestHandler} */
export async function POST({ url, fetch, cookies, request, response }) {
	let resp;
	let abonent = url.searchParams.get('abonent');
	const { par } = await request.json();
	const q = par;

	switch (q.func) {
		case 'tts':
			resp = textToSpeech(q.text);
			break;
	}

	return resp;
}

async function textToSpeech(text) {
	const url = 'https://api.wit.ai/synthesize?v=20230215';
	// Замените на ваш токен
	const headers = {
		Authorization: `Bearer ${token}`,
		'Content-Type': 'application/json',
		Accept: 'audio/pcm'
	};

	const requestData = {
		q: text,
		voice: 'Rebecca'
	};

	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(requestData)
		});

		if (!response.ok) {
			throw new Error(`Ошибка: ${response.status}`);
		}

		const blob = await response.blob();
		return response;
	} catch (error) {
		console.error('Ошибка запроса:', error);
		let response = new Response(JSON.stringify({ error }));
		response.headers.append('Access-Control-Allow-Origin', `*`);
		return response;
	}
}
