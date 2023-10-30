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

<video
	bind:this={lv}
	poster={$posterst}
	autoplay
	playsinline
	muted
	style="
        display: {display};
        position:absolute;
        top:-10px;
        width:60px;
        z-index: 20;"
/>
<slot name="footer" />
