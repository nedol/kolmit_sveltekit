import { sveltekit } from '@sveltejs/kit/vite';
// import { svelte } from '@sveltejs/vite-plugin-svelte';
// import { SvelteKitPWA } from '@vite-pwa/sveltekit';
/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit()
		// svelte({
		// 	/* plugin options */
		// })
		// SvelteKitPWA({
		// 	strategies: 'injectManifest',
		// 	srcDir: 'src',
		// 	filename: 'sw.js' // or `my-sw.ts`
		// 	/* other pwa options */
		// })
	]
};

export default config;
