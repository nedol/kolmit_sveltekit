<script>
	import { onMount } from 'svelte';
	import Card, { Content, PrimaryAction, Media, MediaContent } from '@smui/card';

	import CallButtonUser from './CallButtonUser.svelte';
	import { view } from '$lib/js/stores.js';

	export let abonent, em, name;

	import poster from '$lib/images/tutor.png';

	import { call_but_status } from '$lib/js/stores.js';

	import { click_call_func } from '$lib/js/stores.js';

	import { users_status } from '$lib/js/stores.js';

	$click_call_func = null;

	import { user_placeholder } from '$lib/js/stores.js';

	import pkg from 'lodash';
	const { groupBy, find } = pkg;

	let checked = false;

	let rtc;

	let call_cnt;
	let selected,
		inter,
		status = 'inactive',
		profile = false,
		card;

	let video_button_display = false;
	let video_element, parent_div;

	$: if (status) {
		$users_status[em] = status;
	}

	let progress = {
		display: 'none',
		value: 0
	};

	let video = {
		display: 'none'
	};

	let local = {
		video: {
			display: 'none',
			srcObject: ''
		},
		audio: {
			paused: true,
			src: ''
		}
	};

	let remote = {
		video: {
			display: 'block',
			srcObject: '',
			poster: poster
		}
	};

	let select = {
		display: false
	};

	let user = {
		em: em,
		abonent: abonent,
		type: 'user'
	};

	onMount(async () => {
		// $call_but_status = status;
	});

	// onDestroy();

	function OnLongPress() {
		select.display = true;
	}

	function OnMessage(data) {
		if (data.operators && data.operators[em]) {
			let res = groupBy(data.operators[em], 'status');
			try {
				if (res && res['offer']) {
					if (status !== 'call') {
						status = 'active';
						// $call_but_status = 'active';
					}
				} else if (res['busy']) {
					// if ($click_call_func === null)
					if (
						!rtc.DC ||
						(rtc.DC && rtc.DC.dc.readyState !== 'open' && rtc.DC.dc.readyState !== 'connecting')
					)
						status = 'busy';
				} else if (res['close']) {
					local.video.display = 'none';
					// remote.video.display = 'none';
					local.audio.paused = true;

					//rtc.abonent = url.searchParams.get('abonent');
					status = 'inactive';
					// $call_but_status = 'inactive';
					$click_call_func = null; //operator -> OnClickCallButton
					parent_div.appendChild(card);
					rtc.OnInactive();
					video_element.src = '';
				}
			} catch (ex) {
				console.log(ex);
			}
		}

		if (data.operator && data.operator.em === rtc.em) {
			status = 'active';
			// $call_but_status = 'active';
		}

		// TODO: to delete
		if (data.desc && data.cand) {
			if (status === 'talk') {
				// status = 'talk';
			} else {
				// status = 'call';
			}
		}

		if (data.func === 'call') {
			remote.video.muted = true;
		}

		if (data.func === 'mute') {
			local.audio.paused = true;

			video_button_display = false;
			local.video.display = 'none';
			// remote.video.display = 'none';
			// rtc.abonent = url.searchParams.get('abonent');
			status = 'inactive';
			$call_but_status = 'inactive';
			$click_call_func = null; //operator -> OnClickCallButton
			parent_div.appendChild(card);
			// video_element.load();
		}

		if (data.func === 'talk') {
			console.log('user talk', data.em);
			if (data.em === em) {
				$call_but_status = 'talk';
				status = 'talk';
				video_button_display = true;
				local.audio.paused = true;
				remote.video.muted = false;
				video_button_display = 'block';
				// local.video.display = "block";
				remote.video.display = 'block';
			}
		}

		if (data.func === 'redirect') {
			status = 'call';
			// $call_but_status = 'call';
			local.audio.paused = true;

			remote.video.srcObject = null;
			remote.video.display = 'none';
		}

		// $call_but_status = status;
	}

	let OnClickCallButton = function (ev, email) {
		$view = 'chat';
	};
</script>

<div class="card-display" bind:this={parent_div}>
	<div class="card-container" bind:this={card}>
		<Card style="min-width: 50px;">
			<Media class="card-media-square" aspectRatio="square">
				<MediaContent>
					<video
						class="user_video_remote"
						bind:this={video_element}
						on:click
						{poster}
						autoplay
						playsinline
						on:click={OnClickCallButton}
					>
						<track kind="captions" />
					</video>
				</MediaContent>
			</Media>
			<h3
				class="mdc-typography--subtitle2"
				style="margin: 0; color: #888;font-size:x-small;text-align:center;z-index:1"
			>
				{#if name}
					{name.slice(0, 8)}
				{:else}
					{em.slice(0, 8)}
				{/if}
			</h3>
		</Card>
	</div>
</div>

<style>
	video {
		display: block;
		margin-right: auto;
		margin-left: auto;
		margin-top: auto;
		max-width: 50px;
		max-height: 50px;
	}
</style>
