import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';
import { createProxyMiddleware } from 'http-proxy-middleware';

import commonjs from 'vite-plugin-commonjs';

export default defineConfig({
	plugins: [sveltekit(), commonjs()],
	assetsInclude: ['**/*.html'],

	server: {
		//port: 3478, // Измените этот порт по вашему усмотрению
		https: {
			key: path.resolve('./key.pem'),
			cert: path.resolve('./cert.pem')
		}
		// middleware: [
		// 	createProxyMiddleware('/turn', {
		// 		target: 'http://0.0.0.0:3478',
		// 		pathRewrite: {
		// 			'^/turn': '' // Удалить префикс /turn из URL перед отправкой на сервер TURN
		// 		},
		// 		changeOrigin: true // Включить изменение происхождения запросов
		// 	})
		// ]
	}
});

//# sourceMappingURL=vite.config.js.map
