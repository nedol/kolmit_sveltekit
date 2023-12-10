<script>
	import { onMount, setContext } from 'svelte';
	import SelectMenu from './site/SelectMenu.svelte';
	import Operator from './operator/Operator.svelte';
	import Login from './site/Login.svelte';
	// import Content from '../operator/modal/Content.svelte';
	// import Modal from 'svelte-simple-modal';
	// import md5 from 'md5';

	// import { page, navigating } from '$app/stores';

	export let data;

	let user_pic = data.picture ? data.picture.medium : '';

	let email = data.operator,
		abonent = data.abonent,
		name = data.name,
		psw = new URL(data.url).searchParams.get('psw');

	import { SignalingChannel } from './signalingChannel.js';
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
	if (data.users) {
		$users = data.users;
	}

	onMount(async () => {});
</script>

{#if (email && data.users) || psw}
	<Operator {email} {abonent} {name} users_={$users} />
{:else}
	<Login {email} {abonent} {user_pic} />
{/if}
