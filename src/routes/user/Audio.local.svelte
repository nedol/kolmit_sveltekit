<script>
	import { onMount } from 'svelte';

	import call from '$lib/mp3/call.wav';

	export let paused = true;
	let ls;
	onMount(async () => {});

	$: if (ls) {
		if (paused) ls.pause();
		else {
			ls.play();
		}
	}
</script>

<audio bind:this={ls} autoplay src={call}>
	<track kind="captions" />
</audio>
