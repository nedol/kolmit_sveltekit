// @ts-nocheck
// export const router = true
// export const hydrate = true
// export const prerender = true
import { error } from '@sveltejs/kit';
// import { pool } from '$lib/db/mysql';
// import {fetch} from "node-fetch";
import { page } from "$app/stores"

/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export const load = async ({params})=>{
    // console.log(String(params))
    const res =  fetch("https://nedol.ru/assets/dict/dict.json");

    console.log(page)

    const prom = await res;
    const data = await prom.json();
    
    return {
        dict: JSON.stringify(data)
    }
    
    throw error(404, 'Not found');
}