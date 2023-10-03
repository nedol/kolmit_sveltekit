<script>
	import { onMount } from 'svelte';

	let display = 'block';
	export let srcObject = '';
	let lv;

	import { posterst } from '$lib/js/stores.js';
	$: if ($posterst) {
	}

	onMount(async () => {
		// lv = document.getElementById('localVideo');
	});

	$: if (lv && srcObject) {
		lv.srcObject = srcObject;
	} else if (lv && lv.srcObject) {
		lv.srcObject.getVideoTracks().forEach((track) => {
			track.stop();
			lv.srcObject.removeTrack(track);
		});
		lv.src = '';
	}
</script>

{@debug $posterst}
<video
	bind:this={lv}
	poster={$posterst}
	autoplay
	playsinline
	muted
	style="
        display: {display};
        position:absolute;
        top:-15px;
        width:100px;
        height: 100px;
        z-index: 20;"
/>
<slot name="footer" />
