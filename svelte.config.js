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
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		csrf: {
			checkOrigin: false
		}
	}
};

export default config;
