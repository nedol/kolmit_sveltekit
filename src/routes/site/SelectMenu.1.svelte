<script>
	import { onMount, onDestroy } from 'svelte';

	let lang = 'en';
	let selectedLang = 'English';

	let isMenuOpen = false;

	let options = [
		{
			lang: 'en',
			alt: 'English'
		},
		{
			lang: 'nl',
			alt: 'Nederlands'
		},
		{
			lang: 'fr',
			alt: 'Français'
		},
		{
			lang: 'de',
			alt: 'Deutch'
		},
		{
			lang: 'uk',
			alt: 'Український'
		},
		{
			lang: 'ru',
			alt: 'Русский'
		}
	];

	onMount(() => {
		document.addEventListener('click', handleDocumentClick);
	});

	onDestroy(() => {
		document.removeEventListener('click', handleDocumentClick);
	});

	function handleDocumentClick(event) {
		const menuButton = document.querySelector('.menu-button');
		if (menuButton && !menuButton.contains(event.target)) {
			isMenuOpen = false;
		}
	}

	function onMenuItemClick(option) {
		lang = option.lang;
		selectedLang = option.alt;
		isMenuOpen = false;
	}
</script>

<IconButton class="menu-button" on:click={() => (isMenuOpen = !isMenuOpen)}>
	{selectedLang}
</IconButton>

<Menu bind:isOpen={isMenuOpen} transitionDuration={200}>
	<List>
		{#each options as option (option.lang)}
			<Item on:click={() => onMenuItemClick(option)}>{option.alt}</Item>
		{/each}
	</List>
</Menu>

<style>
	.menu-button {
		position: absolute;
		right: 0;
		top: 0;
		background-color: white;
	}
</style>
