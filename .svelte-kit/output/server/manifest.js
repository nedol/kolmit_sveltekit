export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-388b4100.js","imports":["_app/immutable/start-388b4100.js","_app/immutable/chunks/index-49fb8ea3.js","_app/immutable/chunks/singletons-834e63d6.js","_app/immutable/chunks/index-56c348ce.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js')
		],
		routes: [
			{
					id: "",
					pattern: /^\/$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":3},
					endpoint: null
				},
			{
					id: "operator",
					pattern: /^\/operator\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":4},
					endpoint: null
				},
			{
					id: "api/edit_cc",
					pattern: /^\/api\/edit_cc\/?$/,
					names: [],
					types: [],
					page: null,
					endpoint: () => import('./entries/endpoints/api/edit_cc/_server.js')
				},
			{
					id: "website/about",
					pattern: /^\/website\/about\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0,2],"errors":[1,null],"leaf":6},
					endpoint: null
				},
			{
					id: "website/demo",
					pattern: /^\/website\/demo\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0,2],"errors":[1,null],"leaf":7},
					endpoint: null
				},
			{
					id: "website/login",
					pattern: /^\/website\/login\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0,2],"errors":[1,null],"leaf":8},
					endpoint: null
				},
			{
					id: "website/todos",
					pattern: /^\/website\/todos\/?$/,
					names: [],
					types: [],
					page: {"layouts":[0,2],"errors":[1,null],"leaf":9},
					endpoint: null
				},
			{
					id: "operator/[slug]",
					pattern: /^\/operator\/([^/]+?)\/?$/,
					names: ["slug"],
					types: [null],
					page: {"layouts":[0],"errors":[1],"leaf":5},
					endpoint: null
				}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
