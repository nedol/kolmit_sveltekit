export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.6d7ebdf6.js","app":"_app/immutable/entry/app.929ce2a4.js","imports":["_app/immutable/entry/start.6d7ebdf6.js","_app/immutable/chunks/scheduler.570d4bd4.js","_app/immutable/chunks/singletons.c3a43c16.js","_app/immutable/chunks/index.44fd05d3.js","_app/immutable/entry/app.929ce2a4.js","_app/immutable/chunks/scheduler.570d4bd4.js","_app/immutable/chunks/index.3ae6d580.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/operator",
				pattern: /^\/operator\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/operator/api/edit_cc",
				pattern: /^\/operator\/api\/edit_cc\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/operator/api/edit_cc/_server.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
