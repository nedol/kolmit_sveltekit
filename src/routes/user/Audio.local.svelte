<script>
	import { onMount } from 'svelte';

	import call from '$lib/mp3/call.mp3';

	export let paused = true;
	let ls;
	onMount(async () => {
		ls = document.getElementById('localSound');
	});

	$: if (ls) {
		if (paused) ls.pause();
		else {
			ls.play();
		}
	}
</script>

<audio id="localSound" autoplay src={call}>
	<track kind="captions" />
</audio>
