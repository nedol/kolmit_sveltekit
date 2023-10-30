<script>
	import { onMount, setContext } from 'svelte';
	import SelectMenu from './SelectMenu.svelte';
	import Operator from '../operator/Operator.svelte';
	import Login from './Login.svelte';
	// import Content from '../operator/modal/Content.svelte';
	// import Modal from 'svelte-simple-modal';
	// import md5 from 'md5';

	// import { page, navigating } from '$app/stores';

	export let data;

	let checked = data.check;
	let tarif;

	let user_pic = data.picture ? data.picture.medium : '';

	let email = data.operator,
		abonent = data.abonent;
	let hash = null;

	import { SignalingChannel } from '../signalingChannel.js';
	import { signal } from '$lib/js/stores.js';
	$signal = new SignalingChannel(email);

	import { server_path } from '$lib/js/stores.js';
	$server_path = data.host;

	import { langs } from '$lib/js/stores.js';
	$langs = data.lang;

	import { dicts } from '$lib/js/stores.js';
	$dicts = data.dict[0];

	import { ice_conf } from '$lib/js/stores.js';
	$ice_conf = data.ice_conf;

	import { users } from '$lib/js/stores.js';
	$users = JSON.parse(data.users);
	setContext('users', $users);

	onMount(async () => {});

	let handleLogin = function (emailValue) {
		email = emailValue; // Функция для обновления email в Site на основе ввода в Login
	};
</script>

{#if email === ''}
	<Login {email} {handleLogin} />
	<SelectMenu bind:lang={$langs} {user_pic} {abonent} {email} />
{:else}
	<Operator />
{/if}
