const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["1.svg","2.svg","back.svg","favicon.png","qs.css"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".css":"text/css"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.ed03924e.js","imports":["_app/immutable/entry/start.ed03924e.js","_app/immutable/chunks/index.ea98a15b.js","_app/immutable/chunks/singletons.97976cdb.js","_app/immutable/chunks/index.978b1eea.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.a2ed3082.js","imports":["_app/immutable/entry/app.a2ed3082.js","_app/immutable/chunks/index.ea98a15b.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-f9f2f384.js'),
			() => import('./chunks/1-c465a412.js'),
			() => import('./chunks/2-2352a85e.js'),
			() => import('./chunks/3-82784a53.js'),
			() => import('./chunks/4-b40f06ee.js'),
			() => import('./chunks/5-52167efb.js'),
			() => import('./chunks/6-e4ea6e38.js'),
			() => import('./chunks/7-2bf15201.js'),
			() => import('./chunks/8-011e356a.js'),
			() => import('./chunks/9-10d14ccb.js'),
			() => import('./chunks/10-21cfe538.js'),
			() => import('./chunks/11-33c450d8.js'),
			() => import('./chunks/12-18cfc4cd.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/admin-ufbshkdjncmxzsjkdcfhbsnkd",
				pattern: /^\/admin-ufbshkdjncmxzsjkdcfhbsnkd\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/catchup",
				pattern: /^\/catchup\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/catchup/play",
				pattern: /^\/catchup\/play\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/catchup/play/[id]",
				pattern: /^\/catchup\/play\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/catchup/play/[id]/[cstart]/[cend]",
				pattern: /^\/catchup\/play\/([^/]+?)\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false},{"name":"cstart","optional":false,"rest":false,"chained":false},{"name":"cend","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/catchup/[id]",
				pattern: /^\/catchup\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/catchup/[id]/[day]",
				pattern: /^\/catchup\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false},{"name":"day","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/playlist",
				pattern: /^\/playlist\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			},
			{
				id: "/play",
				pattern: /^\/play\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "/play/[id]",
				pattern: /^\/play\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
