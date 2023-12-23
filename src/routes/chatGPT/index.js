import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: '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' });

async function main() {
	const completion = await openai.chat.completions.create({
		messages: [{ role: 'system', content: 'You are a helpful assistant.' }],
		model: 'gpt-3.5-turbo'
	});

	console.log(completion.choices[0]);
}

main();
