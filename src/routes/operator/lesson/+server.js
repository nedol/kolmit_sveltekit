import { json } from '@sveltejs/kit';
import fs from 'fs';
// import { path } from '$lib/js/server.path.js';
import { GetText, GetDict, GetWords } from '$lib/server/db.js';
// import { getContext } from 'svelte';

export const config = {
	runtime: 'edge'
	// isr:{
	// 	expiration: false// 10
	// }
};

/** @type {import('./$types').RequestHandler} */
export async function GET({ url, fetch, cookies }) {
	const abonent = url.searchParams.get('abonent');
	const text = url.searchParams.get('text');
	const dict = url.searchParams.get('dict');
	const words = url.searchParams.get('words');
	// debugger;
	if (text) {
		// let resp = await fetch('/src/routes/operator/operator/lesson/' + path);
		const level = url.searchParams.get('level');
		const theme = url.searchParams.get('theme');
		const title = url.searchParams.get('title');

		let text = await GetText({ owner: abonent, level: level, theme: theme, title: title });
		// let data = await resp.text();
		// let items = text.split('\r\n');
		let obj = { text: text };
		let response = new Response(JSON.stringify({ obj }));
		response.headers.append('Access-Control-Allow-Origin', `*`);
		return response;
	} else if (dict) {
		const level = url.searchParams.get('level');
		const theme = url.searchParams.get('theme');
		// let resp = await fetch('/src/routes/operator/operator/lesson/' + path);
		let data = await GetDict({ owner: abonent, type: dict, level: level, theme: theme });
		// let data = await resp.text();
		// let items = text.split('\r\n');
		//debugger;
		if (data) {
			let response = new Response(JSON.stringify({ data }));
			response.headers.append('Access-Control-Allow-Origin', `*`);
			return response;
		}
	} else if (words) {
		let name = url.searchParams.get('name');
		let owner = url.searchParams.get('owner');
		let data = await GetWords({ name: name, owner: owner });
		let response = new Response(JSON.stringify({ data }));
		response.headers.append('Access-Control-Allow-Origin', `*`);
		return response;
	}
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, url, fetch }) {
	const { voice } = await request.json();

	let admin = voice['admin'];
	let key = voice['key'];
	let data = voice['data'];
	// let resp = await fetch('/src/routes/operator/operator/lesson/audio.json');

	// try {
	// 	audio = await resp.json();
	// } catch (ex) {}

	//audio[key] = voice[key];
	// fs.writeFile('./src/routes/operator/operator/lesson/audio.json', JSON.stringify(audio), (err) => {
	// 	if (err) {
	// 		return new Response(json('Error writing file:' + err));
	// 	} else {
	// 		return new Response(json('Successfully wrote file'));
	// 	}
	// });

	WriteSpeech({ admin: 'admin', key: key, data: data });

	return new Response('Successfully post file');
}
