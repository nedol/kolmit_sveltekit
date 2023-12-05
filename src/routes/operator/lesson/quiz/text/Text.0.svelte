<script>
	import { onMount, getContext } from 'svelte';
	import md5 from 'md5';

	import Sentence from './Sentence.svelte';
	import Control from '../control/Control.svelte';
	let api_key = ['d1654c16b135479cbe429e3d2967a5fb', '7a4b7dd989dd4086a626f34dbf21d3a9'];

	export let data;
	let video,
		selected_sentence,
		audio_data = {},
		paused,
		speech,
		text,
		cnt = 0,
		cnt_prnt = 0,
		spanAr = [];

	let bottomOpen = true;
	let containerWidth = '100%'; // Исходная ширина - 100% ширины родительского окна
	let containerHeight = '100vh';
	const abonent = getContext('abonent');

	fetch(
		`/operator/lesson?text=theme&level=${data.level}&theme=${data.theme}&title=${data.title}&abonent=${abonent}`
	)
		.then((response) => response.json())
		.then((data) => {
			//data = data.replace(/(?:\\[rn])+/g, '<br>'); //.replace('    ', '&nbsp;&nbsp;&nbsp;&nbsp;');
			// print = JSON.parse(data).text;

			text = data.obj.text;
			text = text.replace(/^\s+|\s+$/gm, '');
			// text = text.replaceAll('\r\n', '');
			text = text.replaceAll('.', '.. ');
			// .split(/(?:[\r\n]|.  )+/g);
			text = text.split('. ');

			text = text.map((txt) => {
				return txt.trim();
			});

			fetchText();
		})
		.catch((error) => {
			console.log(error);
			return [];
		});

	function fetchText() {
		if (!text[cnt]) {
			return;
		}
		if (text[cnt]) {
			fetch('/operator/lesson?key=' + md5(text[cnt]))
				.then((response) => response.text())
				.then((data) => {
					spanAr.push(text[cnt]);
					spanAr = spanAr;
					fetchText(cnt++);

					try {
						// if (JSON.parse(data).audio) {
						// speech = JSON.parse(data).audio;
						audio_data[md5(text[cnt])] = JSON.parse(data).audio;
					} catch (ex) {}
					// 	spanAr.push(text[cnt]);
					// 	spanAr = spanAr; //
					// } else {
					// 	fetchText(cnt++);
					// }
				})
				.catch((error) => {
					console.log(error);
					return [];
				});
			// speech = audio[md5(text[cnt])];
		} else {
			fetchText(cnt++);
		}
	}

	function fetchVoice() {
		fetch(
			`https://api.voicerss.org/?key=${api_key[0]}&hl=nl-be&c=MP3&f=16khz_16bit_mono&r=0&b64=true
				&src=${encodeURIComponent(text[cnt])}`
		)
			.then((response) => response.text())
			.then((data) => {
				speech = data;
				let key = md5(text[cnt]);
				audio_data[key] = data;

				fetch('/operator/lesson/', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
						// 'Content-Type': 'application/x-www-form-urlencoded',
					},
					body: JSON.stringify({
						voice: { admin: 'admin', key: key, data: data }
					})
				})
					.then((response) => response.text())
					.then((data) => {
						spanAr.push(text[cnt]);
						spanAr = spanAr;
					});
			})
			.catch((error) => {
				console.log(error);
				return [];
			});
	}

	function onEnded() {
		selected_sentence.style.fontWeight = 100;
		if (paused) return;

		cnt++;

		cnt_prnt = cnt;

		if (cnt >= text.length) {
		} else {
			fetchText();
		}
	}

	onMount(() => {
		// Получаем ширину родительского окна при загрузке компонента
		const parentWidth = window.innerWidth; // Может потребоваться window.innerWidth - некоторое смещение, если у вас есть другие элементы на странице

		// Устанавливаем ширину контейнера равной ширине родительского окна
		containerWidth = parentWidth + 'px';

		// Получаем высоту родительского окна при загрузке компонента
		const parentHeight = window.innerHeight; // Может потребоваться window.innerHeight - некоторое смещение, если у вас есть другие элементы на странице

		// Устанавливаем высоту контейнера равной высоте родительского окна
		containerHeight = parentHeight + 'px';
	});

	function onPlay() {
		if (selected_sentence) selected_sentence.style.fontWeight = 500;
	}
	function onClickSentence(ev) {
		speech = '';
		video.src = '';
		paused = true;
		selected_sentence.style.fontWeight = 100;
		let this_cnt = parseInt(ev.currentTarget.attributes.cnt.nodeValue);
		ev.currentTarget.style.fontWeight = 500;
		if (text[this_cnt]) speech = audio_data[md5(text[this_cnt + 1])];
		selected_sentence = ev.currentTarget;
	}

	function onContinueClick() {
		paused = false;
		cnt++;
		fetchText();
	}
</script>

<div class="flexy">
	<div
		class="bottom-app-bar-container flexor"
		style="width: {containerWidth}; height: {containerHeight};"
	>
		<div class="flexor-content">
			<div style="padding-top:20px;line-height: 30px;">
				{#each spanAr as text, i}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<!-- {@debug i} -->
					<div
						class="selected_sentence"
						bind:this={selected_sentence}
						on:click={onClickSentence}
						cnt={i}
					>
						<Sentence {text} level={data.level} theme={data.theme} />
					</div>
				{/each}
			</div>
			<div style="height:70px" />

			<!-- svelte-ignore a11y-media-has-caption -->
			<audio
				autoplay
				name="media"
				bind:this={video}
				src={speech}
				on:canplay={onPlay}
				on:ended={onEnded}
			/>
		</div>
	</div>
</div>
<Control {bottomOpen} {onContinueClick} />

<style>
	.selected_sentence {
		font-weight: 100;
	}

	.bottom-app-bar-container {
		/* max-width: 480px; */
		border: 1px solid var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
		margin: 0 18px 18px 0;
		background-color: var(--mdc-theme-background, #fff);

		/* overflow: auto; */
		/* display: inline-block; */
	}

	@media (max-width: 480px) {
		.bottom-app-bar-container {
			margin-right: 0;
		}
	}

	.flexy {
		display: flex;
		flex-wrap: wrap;
	}

	.flexor {
		overflow: hidden;
		display: inline-flex;
		flex-direction: column;
	}

	.flexor-content {
		flex-basis: 0;
		height: 0;
		flex-grow: 1;
		overflow: auto;
	}
</style>
