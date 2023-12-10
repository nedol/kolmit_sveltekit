<script>
	import { onMount } from 'svelte';

	import ring from '$lib/mp3/ring.mp3';

	export let paused = true;
	let ls;
	onMount(async () => {
		ls = document.getElementById('localSound');
	});

	$: if (ls) {
		if (paused) ls.pause();
		else ls.play();
	}
</script>

<audio id="localSound" src={ring}>
	<track kind="captions" />
</audio>
