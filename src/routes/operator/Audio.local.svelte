<script>
	import { onMount } from 'svelte';
	import { ring } from '../assets/mp3/ring';

	export let paused = true;
	let ls;
	let src;
	onMount(async () => {
		// ls = document.getElementById('localSound');
	});

	$: if (ls) {
		if (paused) ls.pause();
		else {
			ls.src = ring.data;
			// ls.srcObject = ring.data;
			let playPromise = ls.play();
			if (playPromise !== undefined) {
				playPromise
					.then((_) => {
						// Automatic playback started!
						// Show playing UI.
					})
					.catch((error) => {
						// Auto-play was prevented
						// Show paused UI.
					});
			}
		}
	}
</script>

<audio bind:this={ls}>
	<!-- <track kind="captions" /> -->
</audio>

<!-- <audio id="localSound" src="../src/routes/assets/mp3/ring.mp3">
	<track kind="captions" />
</audio> -->
