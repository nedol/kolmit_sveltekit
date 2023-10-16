// import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-netlify';
// import adapter from '@sveltejs/adapter-vercel';
import adapter from 'svelte-adapter-firebase';

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
		adapter: adapter(),
		// csp: {
		// 	mode: 'auto',
		// 	directives: {
		// 		'script-src': ['self']
		// 	}
		// },
		csrf: {
			checkOrigin: false
		}
	}
};

export default config;
