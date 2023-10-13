<script>
	import Volgorde from './Volgorde.svelte';
	import Paar from './Paar.svelte';
	import Text from '../text/Text.svelte';

	export let data;
	const quiz = data.quiz;
</script>

<div />
<!-- {@debug quiz} -->
{#if quiz === 'sequence'}
	<Volgorde data={data.zinnen} />
{:else if quiz === 'pair'}
	<Paar />
{:else}
	<Text {data} />
{/if}
