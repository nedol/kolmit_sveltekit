// @ts-nocheck

import { error } from '@sveltejs/kit';


/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export const load = async ({params})=>{

    const res =  fetch("https://nedol.ru/assets/dict/dict.json");

    const prom = await res;
    const data = await prom.json();

    // let dict = new Dict(data);
    
    return {
        dict: data
    }
    
    throw error(404, 'Not found');
}