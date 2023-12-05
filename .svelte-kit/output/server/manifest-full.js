export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","smui.1.css","smui.2.css","smui.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.072bab93.js","app":"_app/immutable/entry/app.8f01bdeb.js","imports":["_app/immutable/entry/start.072bab93.js","_app/immutable/chunks/scheduler.1d2e48cd.js","_app/immutable/chunks/singletons.c17499a8.js","_app/immutable/chunks/paths.8eea7ef6.js","_app/immutable/entry/app.8f01bdeb.js","_app/immutable/chunks/scheduler.1d2e48cd.js","_app/immutable/chunks/index.abd3b193.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
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
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/operator/_server.js'))
			},
			{
				id: "/operator/lesson",
				pattern: /^\/operator\/lesson\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: __memo(() => import('./entries/endpoints/operator/lesson/_server.js'))
			},
			{
				id: "/site",
				pattern: /^\/site\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: __memo(() => import('./entries/endpoints/site/_server.js'))
			},
			{
				id: "/site/about",
				pattern: /^\/site\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
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
