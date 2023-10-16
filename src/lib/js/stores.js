import { writable } from 'svelte/store';

// export let window = window;//{location:{href:'http://nedol.ru'}};

export let editable = writable(false);

export let view = writable();

export let langs = writable();

export let pswd = writable();

let lang = 'en';
const us_lang = langs.subscribe((data) => {
	lang = data;
});

export let server_path = writable();

export let posterst = writable();

export let msg_signal_user = writable();

export let msg_signal_oper = writable();

export let signal = writable();

export let dicts = writable();

export let credentials = writable();

export let users = writable();

export let statust = writable();

export let ice_conf = writable();

export let pool = writable();

export let rtcPool_st = writable();
rtcPool_st.set({ user: {}, operator: {} });
