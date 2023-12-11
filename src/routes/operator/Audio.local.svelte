<script>
	import { onMount } from 'svelte';

	import ring from '$lib/mp3/ring.mp3';

	export let paused = true;
	let ls;
	onMount(async () => {
	
	});

	$: if (ls) {
		if (paused) ls.pause();
		else ls.play();
	}
</script>

<audio id="localSound" src={ring} bind:this={ls}>
	<track kind="captions" />
</audio>
