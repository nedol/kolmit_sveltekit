<script>
	import { onMount /*, onDestroy, getContext, setContext*/, setContext } from 'svelte';
	import { page, navigating, updated } from '$app/stores';
	import List, { Item, Graphic, Separator, Text } from '@smui/list';
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';

	import ru_flag from '$lib/images/flag-square-250_ru.png';

	import { lesson } from '$lib/js/stores.js';

	import BurgerMenu from './menu/BurgerMenu.svelte';

	import { editable } from '$lib/js/stores.js';
	$: if ($editable) {
		edited_display = $editable;
	}

	import { view } from '$lib/js/stores.js';

	import { langs } from '$lib/js/stores.js';

	import { dicts } from '$lib/js/stores.js';
	$: if ($dicts) {
		console.log($dicts);
	}

	$view = 'cc';

	let menu = 'menu';

	let topAppBar;

	onMount(async () => {});

	let lang_menu = false;

	let langAr = {
		en: `https://cdn.countryflags.com/thumbs/united-kingdom/flag-square-250.png
			`,
		fr: `
			https://cdn.countryflags.com/thumbs/france/flag-square-250.png
			`,
		nl: `
			https://cdn.countryflags.com/thumbs/netherlands/flag-square-250.png
			`,
		de: `https://cdn.countryflags.com/thumbs/germany/flag-square-250.png
			`,
		uk: `
			https://cdn.countryflags.com/thumbs/ukraine/flag-square-250.png
			`,
		ru: ru_flag
	};

	function OnSelected(ev) {
		$langs = ev.target.attributes[2].nodeValue;
	}
</script>

{#if $dicts && $dicts['CLASS'][$langs]}
	<header>
		<TopAppBar bind:this={topAppBar} variant="fixed" dense>
			<Row>
				<Section />
				<div class="sec_items">
					<Section>
						<Title
							on:click={() => {
								$view = 'cc';
							}}>{$dicts ? $dicts['CLASS'][$langs] : 'CLASS'}</Title
						>

						<Title
							on:click={() => {
								console.log();
								$view = 'lesson';
							}}>{$dicts ? $dicts['LESSON'][$langs] : 'LESSON'}</Title
						>
						<!-- <IconButton class="material-icons" aria-label="Bookmark this page">bookmark</IconButton> -->
					</Section>
				</div>
				<Section align="end">
					<IconButton
						class="material-icons"
						on:click={() => {
							lang_menu = !lang_menu;
						}}><img src={langAr[$langs]} alt={langAr[$langs]} /></IconButton
					>
					{#if lang_menu}
						<div class="lang_list" style="position:absolute; display: flex; margin-top:300px">
							<List dense>
								<Item
									on:SMUI:action={() => {
										$langs = 'en';
										lang_menu = false;
									}}
								>
									<!-- <Graphic class="material-icons">edit</Graphic> -->
									<img src={langAr['en']} alt="English" />
								</Item>
								<Item
									on:SMUI:action={() => {
										$langs = 'fr';
										lang_menu = false;
									}}
								>
									<!-- <Graphic class="material-icons">edit</Graphic> -->
									<img src={langAr['fr']} alt="English" />
								</Item>
								<Item
									on:SMUI:action={() => {
										$langs = 'nl';
										lang_menu = false;
									}}
								>
									<!-- <Graphic class="material-icons">edit</Graphic> -->
									<img src={langAr['nl']} alt="English" />
								</Item>
								<Item
									on:SMUI:action={() => {
										$langs = 'de';
										lang_menu = false;
									}}
								>
									<!-- <Graphic class="material-icons">edit</Graphic> -->
									<img src={langAr['de']} alt="English" />
								</Item>
								<Item
									on:SMUI:action={() => {
										$langs = 'uk';
										lang_menu = false;
									}}
								>
									<!-- <Graphic class="material-icons">edit</Graphic> -->
									<img src={langAr['uk']} alt="English" />
								</Item>
								<Item
									on:SMUI:action={() => {
										$langs = 'ru';
										lang_menu = false;
									}}
								>
									<img src={langAr['ru']} alt="English" />
								</Item>
							</List>
						</div>
					{/if}
				</Section>
			</Row>
		</TopAppBar>
	</header>
{/if}

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	img {
		width: 20px;
		opacity: 100%;
	}

	button.sec_right {
		left: 100px;
	}
	.lang_list {
		background-color: white;
		/* opacity: 50%; */
	}
	/* Стили для мобильных устройств */
	@media screen and (max-width: 767px) {
		.sec_items {
			position: absolute;
			/* left: 30%; */
			top: 15%;
		}
	}
</style>
