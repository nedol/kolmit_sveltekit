export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.b1267815.js","app":"_app/immutable/entry/app.5aecf1de.js","imports":["_app/immutable/entry/start.b1267815.js","_app/immutable/chunks/scheduler.09e37659.js","_app/immutable/chunks/singletons.4ed6f927.js","_app/immutable/chunks/paths.83b4f003.js","_app/immutable/entry/app.5aecf1de.js","_app/immutable/chunks/scheduler.09e37659.js","_app/immutable/chunks/index.0089bb03.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: __memo(() => import('./entries/endpoints/_server.js'))
			},
			{
				id: "/operator",
				pattern: /^\/operator\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: __memo(() => import('./entries/endpoints/operator/_server.js'))
			},
			{
				id: "/operator/lesson",
				pattern: /^\/operator\/lesson\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: __memo(() => import('./entries/endpoints/operator/lesson/_server.js'))
			},
			{
				id: "/site",
				pattern: /^\/site\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: __memo(() => import('./entries/endpoints/site/_server.js'))
			},
			{
				id: "/site/about",
				pattern: /^\/site\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/user",
				pattern: /^\/user\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/user/_server.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
