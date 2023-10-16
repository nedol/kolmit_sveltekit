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
		client: {"start":"_app/immutable/entry/start.b904c634.js","app":"_app/immutable/entry/app.c5bb3eb2.js","imports":["_app/immutable/entry/start.b904c634.js","_app/immutable/chunks/scheduler.09e37659.js","_app/immutable/chunks/singletons.996d308e.js","_app/immutable/chunks/paths.d27590c6.js","_app/immutable/entry/app.c5bb3eb2.js","_app/immutable/chunks/scheduler.09e37659.js","_app/immutable/chunks/index.0089bb03.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../../output/server/nodes/0.js')),
			__memo(() => import('../../output/server/nodes/1.js')),
			__memo(() => import('../../output/server/nodes/2.js')),
			__memo(() => import('../../output/server/nodes/3.js')),
			__memo(() => import('../../output/server/nodes/4.js')),
			__memo(() => import('../../output/server/nodes/5.js')),
			__memo(() => import('../../output/server/nodes/6.js')),
			__memo(() => import('../../output/server/nodes/7.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api",
				pattern: /^\/api\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../../output/server/entries/endpoints/api/_server.js'))
			},
			{
				id: "/api/operator",
				pattern: /^\/api\/operator\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../../output/server/entries/endpoints/api/operator/_server.js'))
			},
			{
				id: "/api/user",
				pattern: /^\/api\/user\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../../output/server/entries/endpoints/api/user/_server.js'))
			},
			{
				id: "/operator",
				pattern: /^\/operator\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/operator/lesson",
				pattern: /^\/operator\/lesson\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: __memo(() => import('../../output/server/entries/endpoints/operator/lesson/_server.js'))
			},
			{
				id: "/site",
				pattern: /^\/site\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: __memo(() => import('../../output/server/entries/endpoints/site/_server.js'))
			},
			{
				id: "/site/about",
				pattern: /^\/site\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
