<script>
	import { onMount } from 'svelte';

	import md5 from 'md5';
	import loadImage from 'blueimp-load-image/js/load-image.js';
	import 'blueimp-load-image/js/load-image-scale.js';
	import SelectMenu from './SelectMenu.svelte';
	import { dicts } from '$lib/js/stores.js';
	import { signal } from '$lib/js/stores.js';
	import operator_svg from '$lib/images/operator.svg';

	export let oper_pic;
	if (!oper_pic) {
		oper_pic = operator_svg;
	}

	let lang = 'en';
	$: if (lang) {
		console.log('lang:' + lang);
	}

	let psw = 'demo';

	let confirmPassword = 'demo'; // Поле для повторного ввода пароля
	let passwordMatch = true; // Переменная для проверки совпадения паролей

	onMount(async () => {});

	$: if (confirmPassword) {
		if (psw === confirmPassword) {
			// Проверка на совпадение паролей
			passwordMatch = true;
		} else {
			passwordMatch = false;
		}
	}

	function uploadImage(event) {
		const file = event.target.files[0];
		if (file) {
			loadImage(
				file,
				function (img, data) {
					if (img.type === 'error') {
						console.error($dicts['Ошибка загрузки изображения'][lang]);
					} else {
						width = img.width;
						height = img.height;
						user_pic = img.toDataURL();
					}
				},
				{
					orientation: true,
					maxWidth: 100,
					maxHeight: 100,
					canvas: true
				}
			);
		}
	}
</script>

<form method="post">
	<input name="lang" value={lang} hidden />

	<label for="email">{$dicts['Email'][lang]}:</label>
	<input type="email" id="email" name="email" required />

	<label for="oper_name">{$dicts['Имя'][lang]}:</label>
	<input type="text" id="oper_name" name="name" required />

	<label for="psw">{$dicts['Пароль'][lang]}:</label>
	<input type="psw" placeholder="input your psw" name="psw" bind:value={psw} required />

	<label for="psw">{$dicts['Повторить пароль'][lang]}:</label>
	<input
		type="psw"
		placeholder="repeat your psw"
		name="confirmPassword"
		bind:value={confirmPassword}
		required
	/>

	<label for="oper_pic">{$dicts['Фотография профиля'][lang]}:</label>
	<input
		type="file"
		id="oper_pic"
		name="oper_pic"
		on:change={uploadImage}
		accept="image/png, image/jpeg"
	/>

	<div class="user-pic-container">
		<img
			class="user-pic"
			src={oper_pic}
			alt="Профиль пользователя"
			on:click={() => document.getElementById('oper_pic').click()}
		/>
	</div>

	<button class="upload-button">{$dicts['Зарегистрироваться'][lang]}</button>
</form>
<SelectMenu bind:lang />

{#if !passwordMatch}
	<p style="color: red;">{$dicts['Пароли не совпадают'][lang]}</p>
{/if}

<style>
	/* Стили для мобильных устройств */

	/* Стили для более крупных экранов */
	@media screen and (min-width: 768px) {
		/* Ваши стили для более крупных экранов здесь */
		button {
			padding: 6px 10px;
			font-size: 14px;
		}

		input {
			padding: 8px;
			font-size: 14px;
		}
	}
	/* Стили для мобильных устройств */
	@media screen and (max-width: 767px) {
		button {
			padding: 6px 10px;
			font-size: 14px;
		}

		input {
			padding: 8px;
			font-size: 14px;
		}
	}

	/* CSS стили для формы регистрации */
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 400px;
		margin: 0 auto;
		padding: 20px;
		border: 1px solid #ccc;
		border-radius: 5px;
		background-color: #fff;
	}

	label {
		font-weight: bold;
		margin-top: 10px;
	}

	input[type='email'],
	input[type='text'],
	input[type='psw'] {
		width: 100%;
		padding: 10px;
		margin: 5px 0;
		border: 1px solid #ccc;
		border-radius: 5px;
	}

	input[type='file'] {
		display: none;
	}

	.user-pic-container {
		text-align: center;
		margin-top: 10px;
	}

	.user-pic {
		max-width: 100px;
		max-height: 100px;
		border-radius: 50%;
		cursor: pointer;
	}

	.upload-button {
		background-color: #0078d4;
		color: #fff;
		border: none;
		padding: 10px 20px;
		border-radius: 5px;
		cursor: pointer;
		margin-top: 10px;
	}
</style>
