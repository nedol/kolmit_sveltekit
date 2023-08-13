// @ts-nocheck
import { browser, dev } from '$app/environment';
import { error } from '@sveltejs/kit';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement...
export const hydrate = dev;

// ...but if the client-side router is already loaded
// (i.e. we came here from elsewhere in the app), use it
export const router = browser;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in prod
export const prerender = true;

/** @type {import('./$types').RequestHandler} */
export async function GET({params}){
    return {
        body: {
            mesagge:'Hello'     
        }   
        
    }
}


 
/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export function load({ params }) {

        return {

            message: 'Hello world!',
            content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'            
            
        } 
  
  throw error(404, 'Not found');
}