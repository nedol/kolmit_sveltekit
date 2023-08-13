// @ts-nocheck
import { error } from '@sveltejs/kit';
 
/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export function load({ params }) {
  if (params.slug === 'hello-world') {
    return {
      title: 'Hello world!',
      content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
    };
  }
 
  throw error(404, 'Not found');
}