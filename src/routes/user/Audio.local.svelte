<script>
	import { onMount } from 'svelte';

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

<audio id="localSound" autoplay src="../src/routes/assets/mp3/call.mp3">
	<track kind="captions" />
</audio>
