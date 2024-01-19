// import Chat from 'chatgpt-unlimited';
// import { authToken } from './chatgpt_tokken.js';
import { Hercai } from 'hercai';
const herc = new Hercai();
// Функция для взаимодействия с ChatGPT Unlimited
async function chatGPT(question) {
	try {
		// Создаем запрос на сервер
		/* Available Models */
		/* "v3" , "v3-32k" , "turbo" , "turbo-16k" , "gemini" */
		/* Default Model; "v3" */
		let response = await herc.question({ model: 'v3', content: question });

		// Выводим ответ в консоль

		return response.reply;
	} catch (error) {
		console.error('Ошибка при взаимодействии с Hercai:', error);
	}
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, url, fetch, cookies }) {
	const { question } = await request.json();

	let resp = await chatGPT(question);

	let response = new Response(JSON.stringify({ resp }));
	response.headers.append('Access-Control-Allow-Origin', `*`);
	return response;
}
