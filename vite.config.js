import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	assetsInclude: ['**/*.html'],

	server: {
		//port: 3478, // Измените этот порт по вашему усмотрению
		https: {
			key: path.resolve('./key.pem'),
			cert: path.resolve('./cert.pem')
		}
	}
});
//# sourceMappingURL=vite.config.js.map
