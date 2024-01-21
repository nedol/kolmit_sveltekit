const ElevenLabs = require('elevenlabs-node');
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const voice = new ElevenLabs({
	apiKey: 'c6eb3b1bd5e2b1efffc104fc0a356935', // Your API key from Elevenlabs
	voiceId: 'pNInz6obpgDQGcFmaJgB' // A Voice ID from Elevenlabs
});
/** @type {import('./$types').RequestHandler} */
export async function POST({ url, fetch, cookies, request }) {
	let resp;
	let abonent = url.searchParams.get('abonent');
	const { par } = await request.json();
	const q = par;

	switch (q.func) {
		case 'tts':
			await voice
				.textToSpeech({
					// Required Parameters
					fileName: __dirname + '/audio.mp3', // The name of your audio file
					textInput: q.text, // The text you wish to convert to speech

					// Optional Parameters
					voiceId: '21m00Tcm4TlvDq8ikWAM', // A different Voice ID from the default
					stability: 0.5, // The stability for the converted speech
					similarityBoost: 0.5, // The similarity boost for the converted speech
					modelId: 'eleven_multilingual_v2', // The ElevenLabs Model ID
					style: 1, // The style exaggeration for the converted speech
					speakerBoost: true // The speaker boost for the converted speech
				})
				.catch((error) => {
					console.log(error);
				})
				.then((res) => {
					console.log(res);
					resp = { speech: 'audio.mp3' };

					let response = new Response({ resp });
					response.headers.append('Access-Control-Allow-Origin', `*`);
					return response;
				});

			break;
	}
}
