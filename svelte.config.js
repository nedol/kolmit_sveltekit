// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
// import adapter from '@sveltejs/adapter-netlify';
// import adapter from '@sveltejs/adapter-vercel';
// import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			// scss: {
			// 	prependData: "@import 'src/lib/styles/variables.scss';"
			// }
		})
	],
	kit: {
		adapter: adapter({ strict: false, target: '#svelte' })
		// hydrate the <div id="svelte"> element in src/app.html
	}
};

export default config;
