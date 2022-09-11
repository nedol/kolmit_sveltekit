
import { error } from '@sveltejs/kit';


/** @type {import('./$types').PageLoad} */
export const load = async ({params})=>{

    const res =  fetch("./src/lib/dict.json");

    const prom = await res;
    const data = await prom.json();

    // let dict = new Dict(data);
    
    return {
        dict: data
    }
    
    throw error(404, 'Not found');
}