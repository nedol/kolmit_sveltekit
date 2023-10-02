// import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-netlify';
import adapter from '@sveltejs/adapter-vercel';
// import adapter from '@sveltejs/adapter-node';
// import adapter from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// preprocess: preprocess(),
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

				// if (path === '/site') {
				// 	return;
				// }

				// return;
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
};

export default config;
