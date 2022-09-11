<form action="./website/login" method="post" style="position:relative ;">
	<!-- <div id="inputs" on:click={OnSubmit}> -->
		<!-- <input type="email" name="email" placeholder="input your email" required  value="{kolmit.email}"> -->
		{#if keys.length>0}
		<select  type="email" name="email">
			{#each keys as key, i}  
				<option value="{key}">{key}</option>
			{/each}
		</select>
		{:else}
			<input type="email" name="email"  placeholder="input your email" required >
		{/if}
		<div>		
			
			<input type="password" name="password" placeholder="input your password" required >
			<input type={hidden_psw} name="password" placeholder="repeat your password" required  {hidden_psw}>	
		</div>
		<input type="text" name="lang" value="{lang}" hidden>	
		<input type="submit"  {hidden_but}  >
	<!-- </div> -->
</form>

<script>
	import { onMount, onDestroy,getContext, setContext } from 'svelte';
	import * as cookie from 'cookie';
	let hidden_but = 'hidden'
	let psw_val_1 = '123'
	let psw_val_2 = '123'

	$:if(psw_val_1 && psw_val_2 && psw_val_1===psw_val_2){
		hidden_but=''
	}

	let hidden_psw = 'password'

	let keys = []
		
	let kolmit = {email:''};

	let lang = 'en';

	onMount(async() => {

		if(document.cookie){
			keys = Object.keys(cookie.parse(document.cookie));
			kolmit = JSON.parse(cookie.parse(document.cookie)[keys[0]]);		

			if(kolmit.abonent === kolmit.email)
				hidden_psw = 'hidden'
		}

	})
</script>