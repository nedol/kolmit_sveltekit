import { writable } from 'svelte/store';

export let operator = writable();

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

export let msg_user = writable();

export let msg_oper = writable();

export let signal = writable();

export let dicts = writable();

export let credentials = writable();

export let users = writable();

export let call_but_status = writable('inactive');

export let ice_conf = writable();

export let pool = writable();

export let rtcPool_st = writable();
rtcPool_st.set({ user: {}, operator: {} });

export let lesson = writable({ visible: true });

export let click_call_func = writable();

export let dc_oper = writable();
export let dc_user = writable();
export let dc_oper_state = writable();
export let dc_user_state = writable();

export let share_mode = writable(false);
