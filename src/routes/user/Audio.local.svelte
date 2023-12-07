<script>
	import { onMount } from 'svelte';
	import { call } from '../assets/mp3/call';

	export let paused = true;
	let ls;
	let src;
	onMount(async () => {
		// ls = document.getElementById('localSound');
	});

	$: if (ls) {
		if (paused) ls.pause();
		else {
			ls.src = call.data;
			// ls.srcObject = call.data;
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

<audio bind:this={ls} autoplay>
	<!-- <track kind="captions" /> -->
</audio>

<!-- <audio id="localSound" autoplay src="../src/routes/assets/mp3/call.mp3">
	<track kind="captions" />
</audio> -->
