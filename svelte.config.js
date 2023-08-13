import adapter from '@sveltejs/adapter-vercel';
// import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-static'
// import adapter from '@sveltejs/adapter-node'
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
		// 	{
		// 	pages:'build_pages',
		// 	assets: 'build_assets',  // path to public directory
		// 	fallback: null,
		// }
	}
	// preprocess: [
	// 	preprocess({
	// 	  postcss: true,
	// 	}),
	//   ],

	// kit: {
	// 	// target: '#svelte',
	// 	adapter: adapter({
	// 		pages: 'build',  // path to public directory
	// 		assets: 'build',  // path to public directory
	// 		fallback: null,
	// 	}),
	// prerender: {
	//     // This can be false if you're using a fallback (i.e. SPA mode)
	//     default: false
	// }
	// }
};

export default config;
