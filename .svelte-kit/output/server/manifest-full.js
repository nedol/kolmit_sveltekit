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
		client: {"start":"_app/immutable/entry/start.2410334b.js","app":"_app/immutable/entry/app.c7095fb5.js","imports":["_app/immutable/entry/start.2410334b.js","_app/immutable/chunks/scheduler.a6de4c6a.js","_app/immutable/chunks/singletons.eeea2cb3.js","_app/immutable/chunks/paths.5ebe83a5.js","_app/immutable/entry/app.c7095fb5.js","_app/immutable/chunks/scheduler.a6de4c6a.js","_app/immutable/chunks/index.ef490459.js"],"stylesheets":[],"fonts":[]},
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
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/lesson",
				pattern: /^\/lesson\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: __memo(() => import('./entries/endpoints/lesson/_server.js'))
			},
			{
				id: "/lesson/luister",
				pattern: /^\/lesson\/luister\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/operator",
				pattern: /^\/operator\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/operator/_server.js'))
			},
			{
				id: "/user",
				pattern: /^\/user\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: __memo(() => import('./entries/endpoints/user/_server.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
