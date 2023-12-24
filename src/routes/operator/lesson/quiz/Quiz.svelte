<script>
	import Volgorde from './Volgorde.svelte';
	import Dialog from './dialog/Dialog.1.svelte';
	import Listen from './listen/Listen.svelte';
	import Text from './text/Text.svelte';
	import Word from './word/Word.svelte';

	export let data;
	let quiz = data.quiz;
</script>

<div />
<!-- {@debug quiz} -->
{#if quiz}
	{#if quiz === 'sequence'}
		<Volgorde data={data.zinnen} />
	{:else if quiz.includes('pair')}
		<Dialog {data} />
	{:else if quiz.includes('listen')}
		<Listen {data} />
	{:else if quiz === 'text'}
		<Text {data} />
	{:else if quiz === 'word'}
		<Word {data} />
	{/if}
{/if}
