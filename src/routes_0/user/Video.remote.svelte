<script>
	import { onMount } from 'svelte';
	export let display = 'none';
	export let srcObject;
	let rv, video;
	onMount(async () => {
		rv = video;
	});

	$: if (rv && srcObject) {
		rv.srcObject = srcObject;
	} else if (rv && rv.srcObject) {
		rv.srcObject.getVideoTracks().forEach((track) => {
			track.stop();
			rv.srcObject.removeTrack(track);
		});
		rv.src = '';
	}
</script>

<div
	style="
    display:{display};
    position: relative;
    width: 100%;
    height: 95%;
    background-color: white;
    border-radius:5px;
    z-index: 1;"
>
	<video
		bind:this={video}
		autoplay
		playsinline
		style="
    position: absolute;
    width: 100%;
    /* height: 80%; */
    /* left: 0px; */
    top: 30px;
    opacity: 1;
        "
	>
		<track kind="captions" />
	</video>
</div>
<slot />
