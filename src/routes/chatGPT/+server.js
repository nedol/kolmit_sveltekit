import Chat from 'chatgpt-unlimited';
import { authToken } from './chatgpt_tokken.js';
// Функция для взаимодействия с ChatGPT Unlimited
async function chatGPT(prompt) {
	try {
		// Создаем запрос на сервер
		const response = await Chat.create(prompt);

		// Выводим ответ в консоль
		console.log(response.chat);
		return response.chat;
	} catch (error) {
		console.error('Ошибка при взаимодействии с ChatGPT:', error);
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
