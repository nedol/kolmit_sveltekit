// import { defineConfig } from 'vite'
import dns from 'dns';
import { sveltekit } from '@sveltejs/kit/vite';

// dns.setDefaultResultOrder('verbatim');

const defineConfig = {
	plugins: [sveltekit()]
	// resolve: {
	//   alias: {
	// 	'@': resolve(__dirname, 'src'),
	//   },
	// },
	// open:'/app.html',
	// server: {
	//   proxy: {
	//   '/kolmit':{
	// 	target: 'http://localhost:5000/kolmit/',
	// 	},
	//   '/user': {
	// 	target: 'http://localhost:5000/kolmit/user/',
	// 	changeOrigin: true,
	// 	secure: false,
	// 	rewrite: (path) => path.replace(/^\/user/, '')
	//   },
	//   cors:false
	//   },
	// },
	// define: {
	//   'process.env': {}
	// }

	// server: {
	// 	host: '192.168.0.2',
	// 	port: 5173, // или любой другой свободный порт
	// 	https: {
	// 		key: path.resolve('./ca/key.pem'),
	// 		cert: path.resolve('./ca/cert.pem')
	// 	}
	// }
};

export default defineConfig;
