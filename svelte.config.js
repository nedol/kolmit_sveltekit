// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
// import adapter from '@sveltejs/adapter-netlify';
// import adapter from '@sveltejs/adapter-vercel';
// import adapter from '@sveltejs/adapter-node';
// import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		})
		// hydrate the <div id="svelte"> element in src/app.html
	}
};
//

export default config;
