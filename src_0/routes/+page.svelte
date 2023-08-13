
<Modal>
	<Content bind:showDialog={showDialog} bind/>     
</Modal>

<Header />

{#if operator.email}

<div></div>


{:else}

	<div>
		<Login>
			<!-- <slot></slot> -->
		</Login>
	</div>
{/if}



<script>


	import { page } from "$app/stores"
	import Header from '$lib/header/Header.svelte';
	import '../app.css';

	import Login from './website/login.svelte'
	import { onMount, onDestroy,getContext, setContext } from 'svelte';

	import Content from './site/modal/Content.svelte';
	import Modal from 'svelte-simple-modal';

	/** @type {import('./$types').PageData} */
	export let data;
	let dict = JSON.parse(data.dict);

	let showDialog;

	let operator = {},  abonent = "";

	let url = ''

	import {langs} from '$lib/js/stores.js'
	let lang = $langs;


	async function OnSubmit(event) {

		const inputs = document.getElementById('inputs').getElementsByTagName('input');
		let vals = {};
		for(let el in inputs){
			if(inputs[el].attributes)
				vals[inputs[el].attributes[0].nodeValue] = inputs[el].value;
		}
		
		// localStorage.setItem('kolmit', JSON.stringify({psw:md5(vals['password']),email:vals['email']}))
		
		let par = {};
		par.proj = 'kolmit';
		par.func = 'operator';
		par.send_mail = vals['email']
		par.psw = vals['password'];
		par.lang = lang;
		// SendEmail(par);
		// const res = await fetch("/api/post");
		// console.log(res)
		const res = fetch("./login",{
            method:'POST',
            headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(
                {
					par:par
            	})
        });   
         const data = await (await res).json();
		
        // console.log(data);

		if(data.err && data.err.errno===1062){
				console.log(data.err.message);
				return;
		}else{
			operator.email = data.rows[0].operator;	
			// window.user = JSON.stringify({operator:operator.email})		
			window.location.assign( data.location);//+"/hello-world"

			return;
		}
	}

</script>