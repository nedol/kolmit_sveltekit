// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
// import adapter from '@sveltejs/adapter-netlify';
// import adapter from '@sveltejs/adapter-vercel';
// import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		enableSourcemap: true
	},
	preprocess: preprocess({
		sourceMap: true
	}),
	kit: {
		adapter: adapter({
			adapter: adapter({
				fallback: '200.html' // may differ from host to host
			})
		}),
		csrf: {
			checkOrigin: false
		}
	}
};

export default config;
