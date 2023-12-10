import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	assetsInclude: ['**/*.html'],
	server: {
		https: {
			key: path.resolve('./key.pem'),
			cert: path.resolve('./cert.pem')
		}
	}
});
//# sourceMappingURL=vite.config.js.map
