import adapter from '@sveltejs/adapter-vercel';
// import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-static'
// import adapter from '@sveltejs/adapter-node'
// import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			// prerender: {
			//     // This can be false if you're using a fallback (i.e. SPA mode)
			// default: false
			// }
			handleHttpError: ({ path, referrer, message }) => {
				// ignore deliberate link to shiny 404 page
				if (path === '/not-found' && referrer === '/site') {
					return;
				}
				// otherwise fail the build
				throw new Error(message);
			}
		}
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
