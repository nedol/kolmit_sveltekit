import adapter from '@sveltejs/adapter-vercel';
// import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-static'
// import adapter from '@sveltejs/adapter-node'
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
		// prerender: {
		// 	handleHttpError: ({ path, referrer, message }) => {
		// 		// ignore deliberate link to shiny 404 page
		// 		if (path === '/not-found' && referrer === '/blog/how-we-built-our-404-page') {
		// 			return;
		// 		}

		// 		// otherwise fail the build
		// 		throw new Error(message);
		// 	}
		// }
		// serviceWorker: {
		// 	register: false
		// }
		// 	{
		// 	pages:'build_pages',
		// 	assets: 'build_assets',  // path to public directory
		// 	fallback: null,
		// }
	}
	// files: {
	// 	serviceWorker: 'sw.js' // or `src/my-sw.ts`
	// }
	// preprocess: [
	// 	preprocess({
	// 	  postcss: true,
	// 	}),
	//   ],
};

export default config;
