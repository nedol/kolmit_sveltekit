import {
	S as Ke,
	i as Fe,
	s as Je,
	a as He,
	e as U,
	c as We,
	b as B,
	g as Q,
	t as D,
	d as Z,
	f as T,
	h as q,
	j as Ge,
	o as he,
	k as Me,
	l as Xe,
	m as Ye,
	n as fe,
	p as W,
	q as Qe,
	r as Ze,
	u as xe,
	v as K,
	w as te,
	x as F,
	y as J,
	z as Ae
} from './chunks/index-49fb8ea3.js';
import {
	g as Ie,
	f as je,
	a as Ue,
	s as Y,
	b as _e,
	i as et,
	c as tt
} from './chunks/singletons-a47ad8bd.js';
import { H as ue, R as De, e as nt } from './chunks/index-56c348ce.js';
import './chunks/index-46779b86.js';
const rt = (function () {
		const e = document.createElement('link').relList;
		return e && e.supports && e.supports('modulepreload') ? 'modulepreload' : 'preload';
	})(),
	at = function (a, e) {
		return new URL(a, e).href;
	},
	Te = {},
	C = function (e, n, i) {
		return !n || n.length === 0
			? e()
			: Promise.all(
					n.map((r) => {
						if (((r = at(r, i)), r in Te)) return;
						Te[r] = !0;
						const u = r.endsWith('.css'),
							t = u ? '[rel="stylesheet"]' : '';
						if (document.querySelector(`link[href="${r}"]${t}`)) return;
						const o = document.createElement('link');
						if (
							((o.rel = u ? 'stylesheet' : rt),
							u || ((o.as = 'script'), (o.crossOrigin = '')),
							(o.href = r),
							document.head.appendChild(o),
							u)
						)
							return new Promise((f, p) => {
								o.addEventListener('load', f),
									o.addEventListener('error', () => p(new Error(`Unable to preload CSS for ${r}`)));
							});
					})
			  ).then(() => e());
	};
function st(a, e) {
	return a === '/' || e === 'ignore'
		? a
		: e === 'never'
		? a.endsWith('/')
			? a.slice(0, -1)
			: a
		: e === 'always' && !a.endsWith('/')
		? a + '/'
		: a;
}
function it(a) {
	for (const e in a)
		a[e] = a[e]
			.replace(/%23/g, '#')
			.replace(/%3[Bb]/g, ';')
			.replace(/%2[Cc]/g, ',')
			.replace(/%2[Ff]/g, '/')
			.replace(/%3[Ff]/g, '?')
			.replace(/%3[Aa]/g, ':')
			.replace(/%40/g, '@')
			.replace(/%26/g, '&')
			.replace(/%3[Dd]/g, '=')
			.replace(/%2[Bb]/g, '+')
			.replace(/%24/g, '$');
	return a;
}
const ot = ['href', 'pathname', 'search', 'searchParams', 'toString', 'toJSON'];
function lt(a, e) {
	const n = new URL(a);
	for (const i of ot) {
		let r = n[i];
		Object.defineProperty(n, i, {
			get() {
				return e(), r;
			},
			enumerable: !0,
			configurable: !0
		});
	}
	return (n[Symbol.for('nodejs.util.inspect.custom')] = (i, r, u) => u(a, r)), ct(n), n;
}
function ct(a) {
	Object.defineProperty(a, 'hash', {
		get() {
			throw new Error(
				'Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead'
			);
		}
	});
}
function ft(a) {
	let e = 5381,
		n = a.length;
	if (typeof a == 'string') for (; n; ) e = (e * 33) ^ a.charCodeAt(--n);
	else for (; n; ) e = (e * 33) ^ a[--n];
	return (e >>> 0).toString(36);
}
const ze = window.fetch;
function ut(a, e) {
	let i = `script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(
		typeof a == 'string' ? a : a.url
	)}]`;
	e && typeof e.body == 'string' && (i += `[sveltekit\\:data-body="${ft(e.body)}"]`);
	const r = document.querySelector(i);
	if (r && r.textContent) {
		const { body: u, ...t } = JSON.parse(r.textContent);
		return Promise.resolve(new Response(u, t));
	}
	return ze(a, e);
}
const dt = /^(\.\.\.)?(\w+)(?:=(\w+))?$/;
function pt(a) {
	const e = [],
		n = [];
	let i = !0;
	if (/\]\[/.test(a)) throw new Error(`Invalid route ${a} \u2014 parameters must be separated`);
	if (Ve('[', a) !== Ve(']', a))
		throw new Error(`Invalid route ${a} \u2014 brackets are unbalanced`);
	return {
		pattern:
			a === ''
				? /^\/$/
				: new RegExp(
						`^${a
							.split(/(?:\/|$)/)
							.filter(ht)
							.map((u, t, o) => {
								const f = decodeURIComponent(u),
									p = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(f);
								if (p) return e.push(p[1]), n.push(p[2]), '(?:/(.*))?';
								const g = t === o.length - 1;
								return (
									f &&
									'/' +
										f
											.split(/\[(.+?)\]/)
											.map((L, V) => {
												if (V % 2) {
													const E = dt.exec(L);
													if (!E)
														throw new Error(
															`Invalid param: ${L}. Params and matcher names can only have underscores and alphanumeric characters.`
														);
													const [, A, H, G] = E;
													return e.push(H), n.push(G), A ? '(.*?)' : '([^/]+?)';
												}
												return (
													g && L.includes('.') && (i = !1),
													L.normalize()
														.replace(/%5[Bb]/g, '[')
														.replace(/%5[Dd]/g, ']')
														.replace(/#/g, '%23')
														.replace(/\?/g, '%3F')
														.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
												);
											})
											.join('')
								);
							})
							.join('')}${i ? '/?' : ''}$`
				  ),
		names: e,
		types: n
	};
}
function ht(a) {
	return !/^\([^)]+\)$/.test(a);
}
function _t(a, e, n, i) {
	const r = {};
	for (let u = 0; u < e.length; u += 1) {
		const t = e[u],
			o = n[u],
			f = a[u + 1] || '';
		if (o) {
			const p = i[o];
			if (!p) throw new Error(`Missing "${o}" param matcher`);
			if (!p(f)) return;
		}
		r[t] = f;
	}
	return r;
}
function Ve(a, e) {
	let n = 0;
	for (let i = 0; i < e.length; i += 1) e[i] === a && (n += 1);
	return n;
}
function mt(a, e, n, i) {
	const r = new Set(e);
	return Object.entries(n).map(([o, [f, p, g]]) => {
		const { pattern: L, names: V, types: E } = pt(o),
			A = {
				id: o,
				exec: (H) => {
					const G = L.exec(H);
					if (G) return _t(G, V, E, i);
				},
				errors: [1, ...(g || [])].map((H) => a[H]),
				layouts: [0, ...(p || [])].map(t),
				leaf: u(f)
			};
		return (A.errors.length = A.layouts.length = Math.max(A.errors.length, A.layouts.length)), A;
	});
	function u(o) {
		const f = o < 0;
		return f && (o = ~o), [f, a[o]];
	}
	function t(o) {
		return o === void 0 ? o : [r.has(o), a[o]];
	}
}
function gt(a) {
	let e, n, i;
	var r = a[0][0];
	function u(t) {
		return { props: { data: t[1], errors: t[4] } };
	}
	return (
		r && (e = new r(u(a))),
		{
			c() {
				e && K(e.$$.fragment), (n = U());
			},
			l(t) {
				e && te(e.$$.fragment, t), (n = U());
			},
			m(t, o) {
				e && F(e, t, o), B(t, n, o), (i = !0);
			},
			p(t, o) {
				const f = {};
				if ((o & 2 && (f.data = t[1]), o & 16 && (f.errors = t[4]), r !== (r = t[0][0]))) {
					if (e) {
						Q();
						const p = e;
						D(p.$$.fragment, 1, 0, () => {
							J(p, 1);
						}),
							Z();
					}
					r
						? ((e = new r(u(t))), K(e.$$.fragment), T(e.$$.fragment, 1), F(e, n.parentNode, n))
						: (e = null);
				} else r && e.$set(f);
			},
			i(t) {
				i || (e && T(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				e && D(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				t && q(n), e && J(e, t);
			}
		}
	);
}
function wt(a) {
	let e, n, i;
	var r = a[0][0];
	function u(t) {
		return { props: { data: t[1], errors: t[4], $$slots: { default: [kt] }, $$scope: { ctx: t } } };
	}
	return (
		r && (e = new r(u(a))),
		{
			c() {
				e && K(e.$$.fragment), (n = U());
			},
			l(t) {
				e && te(e.$$.fragment, t), (n = U());
			},
			m(t, o) {
				e && F(e, t, o), B(t, n, o), (i = !0);
			},
			p(t, o) {
				const f = {};
				if (
					(o & 2 && (f.data = t[1]),
					o & 16 && (f.errors = t[4]),
					o & 1053 && (f.$$scope = { dirty: o, ctx: t }),
					r !== (r = t[0][0]))
				) {
					if (e) {
						Q();
						const p = e;
						D(p.$$.fragment, 1, 0, () => {
							J(p, 1);
						}),
							Z();
					}
					r
						? ((e = new r(u(t))), K(e.$$.fragment), T(e.$$.fragment, 1), F(e, n.parentNode, n))
						: (e = null);
				} else r && e.$set(f);
			},
			i(t) {
				i || (e && T(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				e && D(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				t && q(n), e && J(e, t);
			}
		}
	);
}
function bt(a) {
	let e, n, i;
	var r = a[0][1];
	function u(t) {
		return { props: { data: t[2], errors: t[4] } };
	}
	return (
		r && (e = new r(u(a))),
		{
			c() {
				e && K(e.$$.fragment), (n = U());
			},
			l(t) {
				e && te(e.$$.fragment, t), (n = U());
			},
			m(t, o) {
				e && F(e, t, o), B(t, n, o), (i = !0);
			},
			p(t, o) {
				const f = {};
				if ((o & 4 && (f.data = t[2]), o & 16 && (f.errors = t[4]), r !== (r = t[0][1]))) {
					if (e) {
						Q();
						const p = e;
						D(p.$$.fragment, 1, 0, () => {
							J(p, 1);
						}),
							Z();
					}
					r
						? ((e = new r(u(t))), K(e.$$.fragment), T(e.$$.fragment, 1), F(e, n.parentNode, n))
						: (e = null);
				} else r && e.$set(f);
			},
			i(t) {
				i || (e && T(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				e && D(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				t && q(n), e && J(e, t);
			}
		}
	);
}
function yt(a) {
	let e, n, i;
	var r = a[0][1];
	function u(t) {
		return { props: { data: t[2], errors: t[4], $$slots: { default: [vt] }, $$scope: { ctx: t } } };
	}
	return (
		r && (e = new r(u(a))),
		{
			c() {
				e && K(e.$$.fragment), (n = U());
			},
			l(t) {
				e && te(e.$$.fragment, t), (n = U());
			},
			m(t, o) {
				e && F(e, t, o), B(t, n, o), (i = !0);
			},
			p(t, o) {
				const f = {};
				if (
					(o & 4 && (f.data = t[2]),
					o & 16 && (f.errors = t[4]),
					o & 1049 && (f.$$scope = { dirty: o, ctx: t }),
					r !== (r = t[0][1]))
				) {
					if (e) {
						Q();
						const p = e;
						D(p.$$.fragment, 1, 0, () => {
							J(p, 1);
						}),
							Z();
					}
					r
						? ((e = new r(u(t))), K(e.$$.fragment), T(e.$$.fragment, 1), F(e, n.parentNode, n))
						: (e = null);
				} else r && e.$set(f);
			},
			i(t) {
				i || (e && T(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				e && D(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				t && q(n), e && J(e, t);
			}
		}
	);
}
function vt(a) {
	let e, n, i;
	var r = a[0][2];
	function u(t) {
		return { props: { data: t[3], errors: t[4] } };
	}
	return (
		r && (e = new r(u(a))),
		{
			c() {
				e && K(e.$$.fragment), (n = U());
			},
			l(t) {
				e && te(e.$$.fragment, t), (n = U());
			},
			m(t, o) {
				e && F(e, t, o), B(t, n, o), (i = !0);
			},
			p(t, o) {
				const f = {};
				if ((o & 8 && (f.data = t[3]), o & 16 && (f.errors = t[4]), r !== (r = t[0][2]))) {
					if (e) {
						Q();
						const p = e;
						D(p.$$.fragment, 1, 0, () => {
							J(p, 1);
						}),
							Z();
					}
					r
						? ((e = new r(u(t))), K(e.$$.fragment), T(e.$$.fragment, 1), F(e, n.parentNode, n))
						: (e = null);
				} else r && e.$set(f);
			},
			i(t) {
				i || (e && T(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				e && D(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				t && q(n), e && J(e, t);
			}
		}
	);
}
function kt(a) {
	let e, n, i, r;
	const u = [yt, bt],
		t = [];
	function o(f, p) {
		return f[0][2] ? 0 : 1;
	}
	return (
		(e = o(a)),
		(n = t[e] = u[e](a)),
		{
			c() {
				n.c(), (i = U());
			},
			l(f) {
				n.l(f), (i = U());
			},
			m(f, p) {
				t[e].m(f, p), B(f, i, p), (r = !0);
			},
			p(f, p) {
				let g = e;
				(e = o(f)),
					e === g
						? t[e].p(f, p)
						: (Q(),
						  D(t[g], 1, 1, () => {
								t[g] = null;
						  }),
						  Z(),
						  (n = t[e]),
						  n ? n.p(f, p) : ((n = t[e] = u[e](f)), n.c()),
						  T(n, 1),
						  n.m(i.parentNode, i));
			},
			i(f) {
				r || (T(n), (r = !0));
			},
			o(f) {
				D(n), (r = !1);
			},
			d(f) {
				t[e].d(f), f && q(i);
			}
		}
	);
}
function Ne(a) {
	let e,
		n = a[6] && Ce(a);
	return {
		c() {
			(e = Me('div')), n && n.c(), this.h();
		},
		l(i) {
			e = Xe(i, 'DIV', { id: !0, 'aria-live': !0, 'aria-atomic': !0, style: !0 });
			var r = Ye(e);
			n && n.l(r), r.forEach(q), this.h();
		},
		h() {
			fe(e, 'id', 'svelte-announcer'),
				fe(e, 'aria-live', 'assertive'),
				fe(e, 'aria-atomic', 'true'),
				W(e, 'position', 'absolute'),
				W(e, 'left', '0'),
				W(e, 'top', '0'),
				W(e, 'clip', 'rect(0 0 0 0)'),
				W(e, 'clip-path', 'inset(50%)'),
				W(e, 'overflow', 'hidden'),
				W(e, 'white-space', 'nowrap'),
				W(e, 'width', '1px'),
				W(e, 'height', '1px');
		},
		m(i, r) {
			B(i, e, r), n && n.m(e, null);
		},
		p(i, r) {
			i[6] ? (n ? n.p(i, r) : ((n = Ce(i)), n.c(), n.m(e, null))) : n && (n.d(1), (n = null));
		},
		d(i) {
			i && q(e), n && n.d();
		}
	};
}
function Ce(a) {
	let e;
	return {
		c() {
			e = Qe(a[7]);
		},
		l(n) {
			e = Ze(n, a[7]);
		},
		m(n, i) {
			B(n, e, i);
		},
		p(n, i) {
			i & 128 && xe(e, n[7]);
		},
		d(n) {
			n && q(e);
		}
	};
}
function Et(a) {
	let e, n, i, r, u;
	const t = [wt, gt],
		o = [];
	function f(g, L) {
		return g[0][1] ? 0 : 1;
	}
	(e = f(a)), (n = o[e] = t[e](a));
	let p = a[5] && Ne(a);
	return {
		c() {
			n.c(), (i = He()), p && p.c(), (r = U());
		},
		l(g) {
			n.l(g), (i = We(g)), p && p.l(g), (r = U());
		},
		m(g, L) {
			o[e].m(g, L), B(g, i, L), p && p.m(g, L), B(g, r, L), (u = !0);
		},
		p(g, [L]) {
			let V = e;
			(e = f(g)),
				e === V
					? o[e].p(g, L)
					: (Q(),
					  D(o[V], 1, 1, () => {
							o[V] = null;
					  }),
					  Z(),
					  (n = o[e]),
					  n ? n.p(g, L) : ((n = o[e] = t[e](g)), n.c()),
					  T(n, 1),
					  n.m(i.parentNode, i)),
				g[5]
					? p
						? p.p(g, L)
						: ((p = Ne(g)), p.c(), p.m(r.parentNode, r))
					: p && (p.d(1), (p = null));
		},
		i(g) {
			u || (T(n), (u = !0));
		},
		o(g) {
			D(n), (u = !1);
		},
		d(g) {
			o[e].d(g), g && q(i), p && p.d(g), g && q(r);
		}
	};
}
function $t(a, e, n) {
	let { stores: i } = e,
		{ page: r } = e,
		{ components: u } = e,
		{ data_0: t = null } = e,
		{ data_1: o = null } = e,
		{ data_2: f = null } = e,
		{ errors: p } = e;
	Ge(i.page.notify);
	let g = !1,
		L = !1,
		V = null;
	return (
		he(() => {
			const E = i.page.subscribe(() => {
				g && (n(6, (L = !0)), n(7, (V = document.title || 'untitled page')));
			});
			return n(5, (g = !0)), E;
		}),
		(a.$$set = (E) => {
			'stores' in E && n(8, (i = E.stores)),
				'page' in E && n(9, (r = E.page)),
				'components' in E && n(0, (u = E.components)),
				'data_0' in E && n(1, (t = E.data_0)),
				'data_1' in E && n(2, (o = E.data_1)),
				'data_2' in E && n(3, (f = E.data_2)),
				'errors' in E && n(4, (p = E.errors));
		}),
		(a.$$.update = () => {
			a.$$.dirty & 768 && i.page.set(r);
		}),
		[u, t, o, f, p, g, L, V, i, r]
	);
}
class Rt extends Ke {
	constructor(e) {
		super(),
			Fe(this, e, $t, Et, Je, {
				stores: 8,
				page: 9,
				components: 0,
				data_0: 1,
				data_1: 2,
				data_2: 3,
				errors: 4
			});
	}
}
const Lt = {},
	ae = [
		() =>
			C(
				() => import('./chunks/0-bc5d4368.js'),
				[
					'chunks\\0-bc5d4368.js',
					'components\\layout.svelte-3bab0c9f.js',
					'chunks\\index-49fb8ea3.js'
				],
				import.meta.url
			),
		() =>
			C(
				() => import('./chunks/1-8c66fddf.js'),
				[
					'chunks\\1-8c66fddf.js',
					'components\\error.svelte-bbc9dfc8.js',
					'chunks\\index-49fb8ea3.js',
					'chunks\\stores-1b1a445b.js',
					'chunks\\singletons-a47ad8bd.js',
					'chunks\\index-46779b86.js'
				],
				import.meta.url
			),
		() =>
			C(
				() => import('./chunks/2-bd6181d2.js'),
				[
					'chunks\\2-bd6181d2.js',
					'components\\pages\\website\\_layout.svelte-b53f6634.js',
					'assets\\_layout-fc1f9720.css',
					'chunks\\index-49fb8ea3.js',
					'chunks\\app-3b095983.js',
					'assets\\app-fa19de04.css',
					'chunks\\stores-1b1a445b.js',
					'chunks\\singletons-a47ad8bd.js',
					'chunks\\index-46779b86.js',
					'chunks\\index-1b6a2f9b.js'
				],
				import.meta.url
			),
		() =>
			C(
				() => import('./chunks/3-f2d23819.js'),
				[
					'chunks\\3-f2d23819.js',
					'chunks\\_page-b36aa0f7.js',
					'components\\pages\\_page.svelte-bfd66377.js',
					'assets\\_page-e30102d1.css',
					'chunks\\index-49fb8ea3.js',
					'chunks\\app-3b095983.js',
					'assets\\app-fa19de04.css',
					'chunks\\stores-1b1a445b.js',
					'chunks\\singletons-a47ad8bd.js',
					'chunks\\index-46779b86.js',
					'chunks\\index-1b6a2f9b.js',
					'chunks\\stores-959aaa6e.js',
					'chunks\\index-a30c4d16.js'
				],
				import.meta.url
			),
		() =>
			C(
				() => import('./chunks/4-a7d64f3d.js'),
				[
					'chunks\\4-a7d64f3d.js',
					'chunks\\_page-97c2c518.js',
					'components\\pages\\operator\\_page.svelte-9dcfb27b.js',
					'assets\\_page-0cc74466.css',
					'chunks\\index-49fb8ea3.js',
					'chunks\\stores-959aaa6e.js',
					'chunks\\index-46779b86.js',
					'chunks\\index-1b6a2f9b.js'
				],
				import.meta.url
			),
		() =>
			C(
				() => import('./chunks/5-f0a9e8c5.js'),
				[
					'chunks\\5-f0a9e8c5.js',
					'chunks\\_page-b427286f.js',
					'chunks\\index-56c348ce.js',
					'components\\pages\\operator\\_slug_\\_page.svelte-2933bb02.js',
					'chunks\\index-49fb8ea3.js'
				],
				import.meta.url
			),
		() =>
			C(
				() => import('./chunks/6-22c3dd68.js'),
				[
					'chunks\\6-22c3dd68.js',
					'chunks\\_page-5f828c32.js',
					'components\\pages\\website\\about\\_page.svelte-2e8822c8.js',
					'assets\\_page-9682aba9.css',
					'chunks\\index-49fb8ea3.js'
				],
				import.meta.url
			),
		() =>
			C(
				() => import('./chunks/7-165cf647.js'),
				[
					'chunks\\7-165cf647.js',
					'components\\pages\\website\\demo\\_page.svelte-00137617.js',
					'chunks\\index-49fb8ea3.js'
				],
				import.meta.url
			),
		() => C(() => import('./chunks/8-417a690b.js'), [], import.meta.url),
		() =>
			C(
				() => import('./chunks/9-dd1715f7.js'),
				[
					'chunks\\9-dd1715f7.js',
					'components\\pages\\website\\todos\\_page.svelte-6193e839.js',
					'assets\\_page-5c3529b5.css',
					'chunks\\index-49fb8ea3.js',
					'chunks\\singletons-a47ad8bd.js',
					'chunks\\index-46779b86.js',
					'chunks\\index-a30c4d16.js'
				],
				import.meta.url
			)
	],
	St = [],
	Pt = {
		'': [3],
		operator: [4],
		'website/about': [6, [2]],
		'website/demo': [-8, [2]],
		'website/login': [-9, [2]],
		'website/todos': [-10, [2]],
		'operator/[slug]': [5]
	},
	Ot = '/__data.js',
	Be = 'sveltekit:scroll',
	M = 'sveltekit:index',
	de = mt(ae, St, Pt, Lt),
	me = ae[0],
	ge = ae[1];
me();
ge();
let ee = {};
try {
	ee = JSON.parse(sessionStorage[Be]);
} catch {}
function pe(a) {
	ee[a] = _e();
}
function At({ target: a, base: e, trailing_slash: n }) {
	var Le;
	const i = [],
		r = { id: null, promise: null },
		u = { before_navigate: [], after_navigate: [] };
	let t = { branch: [], error: null, session_id: 0, url: null },
		o = !1,
		f = !0,
		p = !1,
		g = 1,
		L = null,
		V,
		E = !0,
		A = (Le = history.state) == null ? void 0 : Le[M];
	A || ((A = Date.now()), history.replaceState({ ...history.state, [M]: A }, '', location.href));
	const H = ee[A];
	H && ((history.scrollRestoration = 'manual'), scrollTo(H.x, H.y));
	let G = !1,
		x,
		we;
	async function be(
		s,
		{ noscroll: d = !1, replaceState: h = !1, keepfocus: l = !1, state: c = {} },
		$
	) {
		if ((typeof s == 'string' && (s = new URL(s, Ie(document))), E))
			return oe({
				url: s,
				scroll: d ? _e() : null,
				keepfocus: l,
				redirect_chain: $,
				details: { state: c, replaceState: h },
				accepted: () => {},
				blocked: () => {}
			});
		await X(s);
	}
	async function ye(s) {
		const d = Re(s);
		if (!d) throw new Error('Attempted to prefetch a URL that does not belong to this app');
		return (r.promise = $e(d)), (r.id = d.id), r.promise;
	}
	async function ve(s, d, h, l) {
		var v, y, b;
		const c = Re(s),
			$ = (we = {});
		let _ = c && (await $e(c));
		if (
			(!_ &&
				s.origin === location.origin &&
				s.pathname === location.pathname &&
				(_ = await re({
					status: 404,
					error: new Error(`Not found: ${s.pathname}`),
					url: s,
					routeId: null
				})),
			!_)
		)
			return await X(s), !1;
		if (((s = (c == null ? void 0 : c.url) || s), we !== $)) return !1;
		if (((i.length = 0), _.type === 'redirect'))
			if (d.length > 10 || d.includes(s.pathname))
				_ = await re({ status: 500, error: new Error('Redirect loop'), url: s, routeId: null });
			else
				return (
					E
						? be(new URL(_.location, s).href, {}, [...d, s.pathname])
						: await X(new URL(_.location, location.href)),
					!1
				);
		else
			((y = (v = _.props) == null ? void 0 : v.page) == null ? void 0 : y.status) >= 400 &&
				(await Y.updated.check()) &&
				(await X(s));
		if (((p = !0), h && h.details)) {
			const { details: P } = h,
				j = P.replaceState ? 0 : 1;
			(P.state[M] = A += j), history[P.replaceState ? 'replaceState' : 'pushState'](P.state, '', s);
		}
		if ((o ? ((t = _.state), _.props.page && (_.props.page.url = s), V.$set(_.props)) : ke(_), h)) {
			const { scroll: P, keepfocus: j } = h;
			if (!j) {
				const k = document.body,
					O = k.getAttribute('tabindex');
				(k.tabIndex = -1),
					k.focus({ preventScroll: !0 }),
					setTimeout(() => {
						var m;
						(m = getSelection()) == null || m.removeAllRanges();
					}),
					O !== null ? k.setAttribute('tabindex', O) : k.removeAttribute('tabindex');
			}
			if ((await Ae(), f)) {
				const k = s.hash && document.getElementById(s.hash.slice(1));
				P ? scrollTo(P.x, P.y) : k ? k.scrollIntoView() : scrollTo(0, 0);
			}
		} else await Ae();
		(r.promise = null), (r.id = null), (f = !0), _.props.page && (x = _.props.page);
		const R = _.state.branch[_.state.branch.length - 1];
		(E = ((b = R == null ? void 0 : R.node.shared) == null ? void 0 : b.router) !== !1),
			l && l(),
			(p = !1);
	}
	function ke(s) {
		t = s.state;
		const d = document.querySelector('style[data-sveltekit]');
		if (
			(d && d.remove(),
			(x = s.props.page),
			(V = new Rt({ target: a, props: { ...s.props, stores: Y }, hydrate: !0 })),
			E)
		) {
			const h = { from: null, to: new URL(location.href) };
			u.after_navigate.forEach((l) => l(h));
		}
		o = !0;
	}
	async function ne({
		url: s,
		params: d,
		branch: h,
		status: l,
		error: c,
		routeId: $,
		validation_errors: _
	}) {
		var j;
		const R = h.filter(Boolean),
			v = {
				type: 'loaded',
				state: { url: s, params: d, branch: h, error: c, session_id: g },
				props: { components: R.map((k) => k.node.component), errors: _ }
			};
		let y = {},
			b = !x;
		for (let k = 0; k < R.length; k += 1) {
			const O = R[k];
			(y = { ...y, ...O.data }),
				(b || !t.branch.some((m) => m === O)) &&
					((v.props[`data_${k}`] = y),
					(b = b || Object.keys((j = O.data) != null ? j : {}).length > 0));
		}
		if (
			(b || (b = Object.keys(x.data).length !== Object.keys(y).length),
			!t.url || s.href !== t.url.href || t.error !== c || b)
		) {
			v.props.page = { error: c, params: d, routeId: $, status: l, url: s, data: b ? y : x.data };
			const k = (O, m) => {
				Object.defineProperty(v.props.page, O, {
					get: () => {
						throw new Error(`$page.${O} has been replaced by $page.url.${m}`);
					}
				});
			};
			k('origin', 'origin'), k('path', 'pathname'), k('query', 'searchParams');
		}
		return v;
	}
	async function se({ loader: s, parent: d, url: h, params: l, routeId: c, server_data_node: $ }) {
		var y, b, P, j, k;
		let _ = null;
		const R = { dependencies: new Set(), params: new Set(), parent: !1, url: !1 },
			v = await s();
		if ((y = v.shared) != null && y.load) {
			let O = function (...w) {
				for (const S of w) {
					const { href: N } = new URL(S, h);
					R.dependencies.add(N);
				}
			};
			const m = {};
			for (const w in l)
				Object.defineProperty(m, w, {
					get() {
						return R.params.add(w), l[w];
					},
					enumerable: !0
				});
			const I = {
				routeId: c,
				params: m,
				data: (b = $ == null ? void 0 : $.data) != null ? b : null,
				url: lt(h, () => {
					R.url = !0;
				}),
				async fetch(w, S) {
					let N;
					typeof w == 'string'
						? (N = w)
						: ((N = w.url),
						  (S = {
								body: w.method === 'GET' || w.method === 'HEAD' ? void 0 : await w.blob(),
								cache: w.cache,
								credentials: w.credentials,
								headers: w.headers,
								integrity: w.integrity,
								keepalive: w.keepalive,
								method: w.method,
								mode: w.mode,
								redirect: w.redirect,
								referrer: w.referrer,
								referrerPolicy: w.referrerPolicy,
								signal: w.signal,
								...S
						  }));
					const z = new URL(N, h).href;
					return O(z), o ? ze(z, S) : ut(N, S);
				},
				setHeaders: () => {},
				depends: O,
				parent() {
					return (R.parent = !0), d();
				}
			};
			Object.defineProperties(I, {
				props: {
					get() {
						throw new Error(
							'@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693'
						);
					},
					enumerable: !1
				},
				session: {
					get() {
						throw new Error(
							'session is no longer available. See https://github.com/sveltejs/kit/discussions/5883'
						);
					},
					enumerable: !1
				},
				stuff: {
					get() {
						throw new Error(
							'@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693'
						);
					},
					enumerable: !1
				}
			}),
				(_ = (P = await v.shared.load.call(null, I)) != null ? P : null);
		}
		return {
			node: v,
			loader: s,
			server: $,
			shared: (j = v.shared) != null && j.load ? { type: 'data', data: _, uses: R } : null,
			data: (k = _ != null ? _ : $ == null ? void 0 : $.data) != null ? k : null
		};
	}
	function Ee(s, d, h) {
		if (!h) return !1;
		if ((h.parent && d) || (s.url && h.url)) return !0;
		for (const l of s.params) if (h.params.has(l)) return !0;
		for (const l of h.dependencies) if (i.some((c) => c(l))) return !0;
		return !1;
	}
	function ie(s, d) {
		var h, l;
		return (s == null ? void 0 : s.type) === 'data'
			? {
					type: 'data',
					data: s.data,
					uses: {
						dependencies: new Set((h = s.uses.dependencies) != null ? h : []),
						params: new Set((l = s.uses.params) != null ? l : []),
						parent: !!s.uses.parent,
						url: !!s.uses.url
					}
			  }
			: (s == null ? void 0 : s.type) === 'skip' && d != null
			? d
			: null;
	}
	async function $e({ id: s, url: d, params: h, route: l }) {
		if (r.id === s && r.promise) return r.promise;
		const { errors: c, layouts: $, leaf: _ } = l,
			R = t.url && {
				url: s !== t.url.pathname + t.url.search,
				params: Object.keys(h).filter((m) => t.params[m] !== h[m])
			},
			v = [...$, _];
		c.forEach((m) => (m == null ? void 0 : m().catch(() => {}))),
			v.forEach((m) => (m == null ? void 0 : m[1]().catch(() => {})));
		let y = null;
		const b = v.reduce((m, I, w) => {
			var z;
			const S = t.branch[w],
				N =
					!!(I != null && I[0]) &&
					((S == null ? void 0 : S.loader) !== I[1] ||
						Ee(R, m.some(Boolean), (z = S.server) == null ? void 0 : z.uses));
			return m.push(N), m;
		}, []);
		if (b.some(Boolean)) {
			try {
				y = await qe(d, b);
			} catch (m) {
				return re({ status: 500, error: m, url: d, routeId: l.id });
			}
			if (y.type === 'redirect') return y;
		}
		const P = y == null ? void 0 : y.nodes;
		let j = !1;
		const k = v.map(async (m, I) => {
			var le, Se;
			if (!m) return;
			const w = t.branch[I],
				S = (le = P == null ? void 0 : P[I]) != null ? le : null;
			if (
				(!S || S.type === 'skip') &&
				m[1] === (w == null ? void 0 : w.loader) &&
				!Ee(R, j, (Se = w.shared) == null ? void 0 : Se.uses)
			)
				return w;
			if (((j = !0), (S == null ? void 0 : S.type) === 'error'))
				throw S.httperror ? nt(S.httperror.status, S.httperror.message) : S.error;
			return se({
				loader: m[1],
				url: d,
				params: h,
				routeId: l.id,
				parent: async () => {
					var Oe;
					const Pe = {};
					for (let ce = 0; ce < I; ce += 1)
						Object.assign(Pe, (Oe = await k[ce]) == null ? void 0 : Oe.data);
					return Pe;
				},
				server_data_node: ie(S, w == null ? void 0 : w.server)
			});
		});
		for (const m of k) m.catch(() => {});
		const O = [];
		for (let m = 0; m < v.length; m += 1)
			if (v[m])
				try {
					O.push(await k[m]);
				} catch (I) {
					const w = I;
					if (w instanceof De) return { type: 'redirect', location: w.location };
					const S = I instanceof ue ? I.status : 500;
					for (; m--; )
						if (c[m]) {
							let N,
								z = m;
							for (; !O[z]; ) z -= 1;
							try {
								return (
									(N = { node: await c[m](), loader: c[m], data: {}, server: null, shared: null }),
									await ne({
										url: d,
										params: h,
										branch: O.slice(0, z + 1).concat(N),
										status: S,
										error: w,
										routeId: l.id
									})
								);
							} catch {
								continue;
							}
						}
					X(d);
					return;
				}
			else O.push(void 0);
		return await ne({ url: d, params: h, branch: O, status: 200, error: null, routeId: l.id });
	}
	async function re({ status: s, error: d, url: h, routeId: l }) {
		var y;
		const c = {},
			$ = await me();
		let _ = null;
		if ($.server)
			try {
				const b = await qe(h, [!0]);
				if (b.type !== 'data' || (b.nodes[0] && b.nodes[0].type !== 'data')) throw 0;
				_ = (y = b.nodes[0]) != null ? y : null;
			} catch {
				X(h);
				return;
			}
		const R = await se({
				loader: me,
				url: h,
				params: c,
				routeId: l,
				parent: () => Promise.resolve({}),
				server_data_node: ie(_)
			}),
			v = { node: await ge(), loader: ge, shared: null, server: null, data: null };
		return await ne({ url: h, params: c, branch: [R, v], status: s, error: d, routeId: l });
	}
	function Re(s) {
		if (s.origin !== location.origin || !s.pathname.startsWith(e)) return;
		const d = decodeURI(s.pathname.slice(e.length) || '/');
		for (const h of de) {
			const l = h.exec(d);
			if (l) {
				const c = new URL(s.origin + st(s.pathname, n) + s.search + s.hash);
				return { id: c.pathname + c.search, route: h, params: it(l), url: c };
			}
		}
	}
	async function oe({
		url: s,
		scroll: d,
		keepfocus: h,
		redirect_chain: l,
		details: c,
		accepted: $,
		blocked: _
	}) {
		const R = t.url;
		let v = !1;
		const y = { from: R, to: s, cancel: () => (v = !0) };
		if ((u.before_navigate.forEach((b) => b(y)), v)) {
			_();
			return;
		}
		pe(A),
			$(),
			o && Y.navigating.set({ from: t.url, to: s }),
			await ve(s, l, { scroll: d, keepfocus: h, details: c }, () => {
				const b = { from: R, to: s };
				u.after_navigate.forEach((P) => P(b)), Y.navigating.set(null);
			});
	}
	function X(s) {
		return (location.href = s.href), new Promise(() => {});
	}
	return {
		after_navigate: (s) => {
			he(
				() => (
					u.after_navigate.push(s),
					() => {
						const d = u.after_navigate.indexOf(s);
						u.after_navigate.splice(d, 1);
					}
				)
			);
		},
		before_navigate: (s) => {
			he(
				() => (
					u.before_navigate.push(s),
					() => {
						const d = u.before_navigate.indexOf(s);
						u.before_navigate.splice(d, 1);
					}
				)
			);
		},
		disable_scroll_handling: () => {
			(p || !o) && (f = !1);
		},
		goto: (s, d = {}) => be(s, d, []),
		invalidate: (s) => {
			var d, h;
			if (s === void 0) {
				for (const l of t.branch)
					(d = l == null ? void 0 : l.server) == null || d.uses.dependencies.add(''),
						(h = l == null ? void 0 : l.shared) == null || h.uses.dependencies.add('');
				i.push(() => !0);
			} else if (typeof s == 'function') i.push(s);
			else {
				const { href: l } = new URL(s, location.href);
				i.push((c) => c === l);
			}
			return (
				L ||
					(L = Promise.resolve().then(async () => {
						await ve(new URL(location.href), []), (L = null);
					})),
				L
			);
		},
		prefetch: async (s) => {
			const d = new URL(s, Ie(document));
			await ye(d);
		},
		prefetch_routes: async (s) => {
			const h = (s ? de.filter((l) => s.some((c) => l.exec(c))) : de).map((l) =>
				Promise.all([...l.layouts, l.leaf].map((c) => (c == null ? void 0 : c[1]())))
			);
			await Promise.all(h);
		},
		_start_router: () => {
			(history.scrollRestoration = 'manual'),
				addEventListener('beforeunload', (l) => {
					let c = !1;
					const $ = { from: t.url, to: null, cancel: () => (c = !0) };
					u.before_navigate.forEach((_) => _($)),
						c ? (l.preventDefault(), (l.returnValue = '')) : (history.scrollRestoration = 'auto');
				}),
				addEventListener('visibilitychange', () => {
					if (document.visibilityState === 'hidden') {
						pe(A);
						try {
							sessionStorage[Be] = JSON.stringify(ee);
						} catch {}
					}
				});
			const s = (l) => {
				const c = je(l);
				c && c.href && c.hasAttribute('data-sveltekit-prefetch') && ye(Ue(c));
			};
			let d;
			const h = (l) => {
				clearTimeout(d),
					(d = setTimeout(() => {
						var c;
						(c = l.target) == null ||
							c.dispatchEvent(new CustomEvent('sveltekit:trigger_prefetch', { bubbles: !0 }));
					}, 20));
			};
			addEventListener('touchstart', s),
				addEventListener('mousemove', h),
				addEventListener('sveltekit:trigger_prefetch', s),
				addEventListener('click', (l) => {
					if (
						!E ||
						l.button ||
						l.which !== 1 ||
						l.metaKey ||
						l.ctrlKey ||
						l.shiftKey ||
						l.altKey ||
						l.defaultPrevented
					)
						return;
					const c = je(l);
					if (!c || !c.href) return;
					const $ = c instanceof SVGAElement,
						_ = Ue(c);
					if (!$ && !(_.protocol === 'https:' || _.protocol === 'http:')) return;
					const R = (c.getAttribute('rel') || '').split(/\s+/);
					if (
						c.hasAttribute('download') ||
						R.includes('external') ||
						c.hasAttribute('data-sveltekit-reload') ||
						($ ? c.target.baseVal : c.target)
					)
						return;
					const [v, y] = _.href.split('#');
					if (y !== void 0 && v === location.href.split('#')[0]) {
						(G = !0), pe(A), Y.page.set({ ...x, url: _ }), Y.page.notify();
						return;
					}
					oe({
						url: _,
						scroll: c.hasAttribute('data-sveltekit-noscroll') ? _e() : null,
						keepfocus: !1,
						redirect_chain: [],
						details: { state: {}, replaceState: _.href === location.href },
						accepted: () => l.preventDefault(),
						blocked: () => l.preventDefault()
					});
				}),
				addEventListener('popstate', (l) => {
					if (l.state && E) {
						if (l.state[M] === A) return;
						oe({
							url: new URL(location.href),
							scroll: ee[l.state[M]],
							keepfocus: !1,
							redirect_chain: [],
							details: null,
							accepted: () => {
								A = l.state[M];
							},
							blocked: () => {
								const c = A - l.state[M];
								history.go(c);
							}
						});
					}
				}),
				addEventListener('hashchange', () => {
					G && ((G = !1), history.replaceState({ ...history.state, [M]: ++A }, '', location.href));
				});
			for (const l of document.querySelectorAll('link')) l.rel === 'icon' && (l.href = l.href);
			addEventListener('pageshow', (l) => {
				l.persisted && Y.navigating.set(null);
			});
		},
		_hydrate: async ({
			status: s,
			error: d,
			node_ids: h,
			params: l,
			routeId: c,
			data: $,
			errors: _
		}) => {
			const R = new URL(location.href);
			let v;
			try {
				const y = h.map(async (b, P) => {
					const j = $[P];
					return se({
						loader: ae[b],
						url: R,
						params: l,
						routeId: c,
						parent: async () => {
							const k = {};
							for (let O = 0; O < P; O += 1) Object.assign(k, (await y[O]).data);
							return k;
						},
						server_data_node: ie(j)
					});
				});
				v = await ne({
					url: R,
					params: l,
					branch: await Promise.all(y),
					status: s,
					error: d != null && d.__is_http_error ? new ue(d.status, d.message) : d,
					validation_errors: _,
					routeId: c
				});
			} catch (y) {
				const b = y;
				if (b instanceof De) {
					await X(new URL(y.location, location.href));
					return;
				}
				v = await re({ status: b instanceof ue ? b.status : 500, error: b, url: R, routeId: c });
			}
			ke(v);
		}
	};
}
let It = 1;
async function qe(a, e) {
	const n = new URL(a);
	(n.pathname = a.pathname.replace(/\/$/, '') + Ot),
		n.searchParams.set('__invalid', e.map((r) => (r ? 'y' : 'n')).join('')),
		n.searchParams.set('__id', String(It++)),
		await C(() => import(n.href), [], import.meta.url);
	const i = window.__sveltekit_data;
	return delete window.__sveltekit_data, i;
}
function Vt(a) {}
async function Nt({ paths: a, target: e, route: n, spa: i, trailing_slash: r, hydrate: u }) {
	const t = At({ target: e, base: a.base, trailing_slash: r });
	et({ client: t }),
		tt(a),
		u && (await t._hydrate(u)),
		n && (i && t.goto(location.href, { replaceState: !0 }), t._start_router()),
		dispatchEvent(new CustomEvent('sveltekit:start'));
}
export { Vt as set_public_env, Nt as start };
import {
	S as Ke,
	i as Fe,
	s as Je,
	a as He,
	e as U,
	c as We,
	b as B,
	g as Q,
	t as D,
	d as Z,
	f as T,
	h as q,
	j as Ge,
	o as he,
	k as Me,
	l as Xe,
	m as Ye,
	n as fe,
	p as W,
	q as Qe,
	r as Ze,
	u as xe,
	v as K,
	w as te,
	x as F,
	y as J,
	z as Ae
} from './chunks/index-49fb8ea3.js';
import {
	g as Ie,
	f as je,
	a as Ue,
	s as Y,
	b as _e,
	i as et,
	c as tt
} from './chunks/singletons-a47ad8bd.js';
import { H as ue, R as De, e as nt } from './chunks/index-56c348ce.js';
import './chunks/index-46779b86.js';
const rt = (function () {
		const e = document.createElement('link').relList;
		return e && e.supports && e.supports('modulepreload') ? 'modulepreload' : 'preload';
	})(),
	at = function (a, e) {
		return new URL(a, e).href;
	},
	Te = {},
	C = function (e, n, i) {
		return !n || n.length === 0
			? e()
			: Promise.all(
					n.map((r) => {
						if (((r = at(r, i)), r in Te)) return;
						Te[r] = !0;
						const u = r.endsWith('.css'),
							t = u ? '[rel="stylesheet"]' : '';
						if (document.querySelector(`link[href="${r}"]${t}`)) return;
						const o = document.createElement('link');
						if (
							((o.rel = u ? 'stylesheet' : rt),
							u || ((o.as = 'script'), (o.crossOrigin = '')),
							(o.href = r),
							document.head.appendChild(o),
							u)
						)
							return new Promise((f, p) => {
								o.addEventListener('load', f),
									o.addEventListener('error', () => p(new Error(`Unable to preload CSS for ${r}`)));
							});
					})
			  ).then(() => e());
	};
function st(a, e) {
	return a === '/' || e === 'ignore'
		? a
		: e === 'never'
		? a.endsWith('/')
			? a.slice(0, -1)
			: a
		: e === 'always' && !a.endsWith('/')
		? a + '/'
		: a;
}
function it(a) {
	for (const e in a)
		a[e] = a[e]
			.replace(/%23/g, '#')
			.replace(/%3[Bb]/g, ';')
			.replace(/%2[Cc]/g, ',')
			.replace(/%2[Ff]/g, '/')
			.replace(/%3[Ff]/g, '?')
			.replace(/%3[Aa]/g, ':')
			.replace(/%40/g, '@')
			.replace(/%26/g, '&')
			.replace(/%3[Dd]/g, '=')
			.replace(/%2[Bb]/g, '+')
			.replace(/%24/g, '$');
	return a;
}
const ot = ['href', 'pathname', 'search', 'searchParams', 'toString', 'toJSON'];
function lt(a, e) {
	const n = new URL(a);
	for (const i of ot) {
		let r = n[i];
		Object.defineProperty(n, i, {
			get() {
				return e(), r;
			},
			enumerable: !0,
			configurable: !0
		});
	}
	return (n[Symbol.for('nodejs.util.inspect.custom')] = (i, r, u) => u(a, r)), ct(n), n;
}
function ct(a) {
	Object.defineProperty(a, 'hash', {
		get() {
			throw new Error(
				'Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead'
			);
		}
	});
}
function ft(a) {
	let e = 5381,
		n = a.length;
	if (typeof a == 'string') for (; n; ) e = (e * 33) ^ a.charCodeAt(--n);
	else for (; n; ) e = (e * 33) ^ a[--n];
	return (e >>> 0).toString(36);
}
const ze = window.fetch;
function ut(a, e) {
	let i = `script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(
		typeof a == 'string' ? a : a.url
	)}]`;
	e && typeof e.body == 'string' && (i += `[sveltekit\\:data-body="${ft(e.body)}"]`);
	const r = document.querySelector(i);
	if (r && r.textContent) {
		const { body: u, ...t } = JSON.parse(r.textContent);
		return Promise.resolve(new Response(u, t));
	}
	return ze(a, e);
}
const dt = /^(\.\.\.)?(\w+)(?:=(\w+))?$/;
function pt(a) {
	const e = [],
		n = [];
	let i = !0;
	if (/\]\[/.test(a)) throw new Error(`Invalid route ${a} \u2014 parameters must be separated`);
	if (Ve('[', a) !== Ve(']', a))
		throw new Error(`Invalid route ${a} \u2014 brackets are unbalanced`);
	return {
		pattern:
			a === ''
				? /^\/$/
				: new RegExp(
						`^${a
							.split(/(?:\/|$)/)
							.filter(ht)
							.map((u, t, o) => {
								const f = decodeURIComponent(u),
									p = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(f);
								if (p) return e.push(p[1]), n.push(p[2]), '(?:/(.*))?';
								const g = t === o.length - 1;
								return (
									f &&
									'/' +
										f
											.split(/\[(.+?)\]/)
											.map((L, V) => {
												if (V % 2) {
													const E = dt.exec(L);
													if (!E)
														throw new Error(
															`Invalid param: ${L}. Params and matcher names can only have underscores and alphanumeric characters.`
														);
													const [, A, H, G] = E;
													return e.push(H), n.push(G), A ? '(.*?)' : '([^/]+?)';
												}
												return (
													g && L.includes('.') && (i = !1),
													L.normalize()
														.replace(/%5[Bb]/g, '[')
														.replace(/%5[Dd]/g, ']')
														.replace(/#/g, '%23')
														.replace(/\?/g, '%3F')
														.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
												);
											})
											.join('')
								);
							})
							.join('')}${i ? '/?' : ''}$`
				  ),
		names: e,
		types: n
	};
}
function ht(a) {
	return !/^\([^)]+\)$/.test(a);
}
function _t(a, e, n, i) {
	const r = {};
	for (let u = 0; u < e.length; u += 1) {
		const t = e[u],
			o = n[u],
			f = a[u + 1] || '';
		if (o) {
			const p = i[o];
			if (!p) throw new Error(`Missing "${o}" param matcher`);
			if (!p(f)) return;
		}
		r[t] = f;
	}
	return r;
}
function Ve(a, e) {
	let n = 0;
	for (let i = 0; i < e.length; i += 1) e[i] === a && (n += 1);
	return n;
}
function mt(a, e, n, i) {
	const r = new Set(e);
	return Object.entries(n).map(([o, [f, p, g]]) => {
		const { pattern: L, names: V, types: E } = pt(o),
			A = {
				id: o,
				exec: (H) => {
					const G = L.exec(H);
					if (G) return _t(G, V, E, i);
				},
				errors: [1, ...(g || [])].map((H) => a[H]),
				layouts: [0, ...(p || [])].map(t),
				leaf: u(f)
			};
		return (A.errors.length = A.layouts.length = Math.max(A.errors.length, A.layouts.length)), A;
	});
	function u(o) {
		const f = o < 0;
		return f && (o = ~o), [f, a[o]];
	}
	function t(o) {
		return o === void 0 ? o : [r.has(o), a[o]];
	}
}
function gt(a) {
	let e, n, i;
	var r = a[0][0];
	function u(t) {
		return { props: { data: t[1], errors: t[4] } };
	}
	return (
		r && (e = new r(u(a))),
		{
			c() {
				e && K(e.$$.fragment), (n = U());
			},
			l(t) {
				e && te(e.$$.fragment, t), (n = U());
			},
			m(t, o) {
				e && F(e, t, o), B(t, n, o), (i = !0);
			},
			p(t, o) {
				const f = {};
				if ((o & 2 && (f.data = t[1]), o & 16 && (f.errors = t[4]), r !== (r = t[0][0]))) {
					if (e) {
						Q();
						const p = e;
						D(p.$$.fragment, 1, 0, () => {
							J(p, 1);
						}),
							Z();
					}
					r
						? ((e = new r(u(t))), K(e.$$.fragment), T(e.$$.fragment, 1), F(e, n.parentNode, n))
						: (e = null);
				} else r && e.$set(f);
			},
			i(t) {
				i || (e && T(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				e && D(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				t && q(n), e && J(e, t);
			}
		}
	);
}
function wt(a) {
	let e, n, i;
	var r = a[0][0];
	function u(t) {
		return { props: { data: t[1], errors: t[4], $$slots: { default: [kt] }, $$scope: { ctx: t } } };
	}
	return (
		r && (e = new r(u(a))),
		{
			c() {
				e && K(e.$$.fragment), (n = U());
			},
			l(t) {
				e && te(e.$$.fragment, t), (n = U());
			},
			m(t, o) {
				e && F(e, t, o), B(t, n, o), (i = !0);
			},
			p(t, o) {
				const f = {};
				if (
					(o & 2 && (f.data = t[1]),
					o & 16 && (f.errors = t[4]),
					o & 1053 && (f.$$scope = { dirty: o, ctx: t }),
					r !== (r = t[0][0]))
				) {
					if (e) {
						Q();
						const p = e;
						D(p.$$.fragment, 1, 0, () => {
							J(p, 1);
						}),
							Z();
					}
					r
						? ((e = new r(u(t))), K(e.$$.fragment), T(e.$$.fragment, 1), F(e, n.parentNode, n))
						: (e = null);
				} else r && e.$set(f);
			},
			i(t) {
				i || (e && T(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				e && D(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				t && q(n), e && J(e, t);
			}
		}
	);
}
function bt(a) {
	let e, n, i;
	var r = a[0][1];
	function u(t) {
		return { props: { data: t[2], errors: t[4] } };
	}
	return (
		r && (e = new r(u(a))),
		{
			c() {
				e && K(e.$$.fragment), (n = U());
			},
			l(t) {
				e && te(e.$$.fragment, t), (n = U());
			},
			m(t, o) {
				e && F(e, t, o), B(t, n, o), (i = !0);
			},
			p(t, o) {
				const f = {};
				if ((o & 4 && (f.data = t[2]), o & 16 && (f.errors = t[4]), r !== (r = t[0][1]))) {
					if (e) {
						Q();
						const p = e;
						D(p.$$.fragment, 1, 0, () => {
							J(p, 1);
						}),
							Z();
					}
					r
						? ((e = new r(u(t))), K(e.$$.fragment), T(e.$$.fragment, 1), F(e, n.parentNode, n))
						: (e = null);
				} else r && e.$set(f);
			},
			i(t) {
				i || (e && T(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				e && D(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				t && q(n), e && J(e, t);
			}
		}
	);
}
function yt(a) {
	let e, n, i;
	var r = a[0][1];
	function u(t) {
		return { props: { data: t[2], errors: t[4], $$slots: { default: [vt] }, $$scope: { ctx: t } } };
	}
	return (
		r && (e = new r(u(a))),
		{
			c() {
				e && K(e.$$.fragment), (n = U());
			},
			l(t) {
				e && te(e.$$.fragment, t), (n = U());
			},
			m(t, o) {
				e && F(e, t, o), B(t, n, o), (i = !0);
			},
			p(t, o) {
				const f = {};
				if (
					(o & 4 && (f.data = t[2]),
					o & 16 && (f.errors = t[4]),
					o & 1049 && (f.$$scope = { dirty: o, ctx: t }),
					r !== (r = t[0][1]))
				) {
					if (e) {
						Q();
						const p = e;
						D(p.$$.fragment, 1, 0, () => {
							J(p, 1);
						}),
							Z();
					}
					r
						? ((e = new r(u(t))), K(e.$$.fragment), T(e.$$.fragment, 1), F(e, n.parentNode, n))
						: (e = null);
				} else r && e.$set(f);
			},
			i(t) {
				i || (e && T(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				e && D(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				t && q(n), e && J(e, t);
			}
		}
	);
}
function vt(a) {
	let e, n, i;
	var r = a[0][2];
	function u(t) {
		return { props: { data: t[3], errors: t[4] } };
	}
	return (
		r && (e = new r(u(a))),
		{
			c() {
				e && K(e.$$.fragment), (n = U());
			},
			l(t) {
				e && te(e.$$.fragment, t), (n = U());
			},
			m(t, o) {
				e && F(e, t, o), B(t, n, o), (i = !0);
			},
			p(t, o) {
				const f = {};
				if ((o & 8 && (f.data = t[3]), o & 16 && (f.errors = t[4]), r !== (r = t[0][2]))) {
					if (e) {
						Q();
						const p = e;
						D(p.$$.fragment, 1, 0, () => {
							J(p, 1);
						}),
							Z();
					}
					r
						? ((e = new r(u(t))), K(e.$$.fragment), T(e.$$.fragment, 1), F(e, n.parentNode, n))
						: (e = null);
				} else r && e.$set(f);
			},
			i(t) {
				i || (e && T(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				e && D(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				t && q(n), e && J(e, t);
			}
		}
	);
}
function kt(a) {
	let e, n, i, r;
	const u = [yt, bt],
		t = [];
	function o(f, p) {
		return f[0][2] ? 0 : 1;
	}
	return (
		(e = o(a)),
		(n = t[e] = u[e](a)),
		{
			c() {
				n.c(), (i = U());
			},
			l(f) {
				n.l(f), (i = U());
			},
			m(f, p) {
				t[e].m(f, p), B(f, i, p), (r = !0);
			},
			p(f, p) {
				let g = e;
				(e = o(f)),
					e === g
						? t[e].p(f, p)
						: (Q(),
						  D(t[g], 1, 1, () => {
								t[g] = null;
						  }),
						  Z(),
						  (n = t[e]),
						  n ? n.p(f, p) : ((n = t[e] = u[e](f)), n.c()),
						  T(n, 1),
						  n.m(i.parentNode, i));
			},
			i(f) {
				r || (T(n), (r = !0));
			},
			o(f) {
				D(n), (r = !1);
			},
			d(f) {
				t[e].d(f), f && q(i);
			}
		}
	);
}
function Ne(a) {
	let e,
		n = a[6] && Ce(a);
	return {
		c() {
			(e = Me('div')), n && n.c(), this.h();
		},
		l(i) {
			e = Xe(i, 'DIV', { id: !0, 'aria-live': !0, 'aria-atomic': !0, style: !0 });
			var r = Ye(e);
			n && n.l(r), r.forEach(q), this.h();
		},
		h() {
			fe(e, 'id', 'svelte-announcer'),
				fe(e, 'aria-live', 'assertive'),
				fe(e, 'aria-atomic', 'true'),
				W(e, 'position', 'absolute'),
				W(e, 'left', '0'),
				W(e, 'top', '0'),
				W(e, 'clip', 'rect(0 0 0 0)'),
				W(e, 'clip-path', 'inset(50%)'),
				W(e, 'overflow', 'hidden'),
				W(e, 'white-space', 'nowrap'),
				W(e, 'width', '1px'),
				W(e, 'height', '1px');
		},
		m(i, r) {
			B(i, e, r), n && n.m(e, null);
		},
		p(i, r) {
			i[6] ? (n ? n.p(i, r) : ((n = Ce(i)), n.c(), n.m(e, null))) : n && (n.d(1), (n = null));
		},
		d(i) {
			i && q(e), n && n.d();
		}
	};
}
function Ce(a) {
	let e;
	return {
		c() {
			e = Qe(a[7]);
		},
		l(n) {
			e = Ze(n, a[7]);
		},
		m(n, i) {
			B(n, e, i);
		},
		p(n, i) {
			i & 128 && xe(e, n[7]);
		},
		d(n) {
			n && q(e);
		}
	};
}
function Et(a) {
	let e, n, i, r, u;
	const t = [wt, gt],
		o = [];
	function f(g, L) {
		return g[0][1] ? 0 : 1;
	}
	(e = f(a)), (n = o[e] = t[e](a));
	let p = a[5] && Ne(a);
	return {
		c() {
			n.c(), (i = He()), p && p.c(), (r = U());
		},
		l(g) {
			n.l(g), (i = We(g)), p && p.l(g), (r = U());
		},
		m(g, L) {
			o[e].m(g, L), B(g, i, L), p && p.m(g, L), B(g, r, L), (u = !0);
		},
		p(g, [L]) {
			let V = e;
			(e = f(g)),
				e === V
					? o[e].p(g, L)
					: (Q(),
					  D(o[V], 1, 1, () => {
							o[V] = null;
					  }),
					  Z(),
					  (n = o[e]),
					  n ? n.p(g, L) : ((n = o[e] = t[e](g)), n.c()),
					  T(n, 1),
					  n.m(i.parentNode, i)),
				g[5]
					? p
						? p.p(g, L)
						: ((p = Ne(g)), p.c(), p.m(r.parentNode, r))
					: p && (p.d(1), (p = null));
		},
		i(g) {
			u || (T(n), (u = !0));
		},
		o(g) {
			D(n), (u = !1);
		},
		d(g) {
			o[e].d(g), g && q(i), p && p.d(g), g && q(r);
		}
	};
}
function $t(a, e, n) {
	let { stores: i } = e,
		{ page: r } = e,
		{ components: u } = e,
		{ data_0: t = null } = e,
		{ data_1: o = null } = e,
		{ data_2: f = null } = e,
		{ errors: p } = e;
	Ge(i.page.notify);
	let g = !1,
		L = !1,
		V = null;
	return (
		he(() => {
			const E = i.page.subscribe(() => {
				g && (n(6, (L = !0)), n(7, (V = document.title || 'untitled page')));
			});
			return n(5, (g = !0)), E;
		}),
		(a.$$set = (E) => {
			'stores' in E && n(8, (i = E.stores)),
				'page' in E && n(9, (r = E.page)),
				'components' in E && n(0, (u = E.components)),
				'data_0' in E && n(1, (t = E.data_0)),
				'data_1' in E && n(2, (o = E.data_1)),
				'data_2' in E && n(3, (f = E.data_2)),
				'errors' in E && n(4, (p = E.errors));
		}),
		(a.$$.update = () => {
			a.$$.dirty & 768 && i.page.set(r);
		}),
		[u, t, o, f, p, g, L, V, i, r]
	);
}
class Rt extends Ke {
	constructor(e) {
		super(),
			Fe(this, e, $t, Et, Je, {
				stores: 8,
				page: 9,
				components: 0,
				data_0: 1,
				data_1: 2,
				data_2: 3,
				errors: 4
			});
	}
}
const Lt = {},
	ae = [
		() =>
			C(
				() => import('./chunks/0-bc5d4368.js'),
				[
					'chunks\\0-bc5d4368.js',
					'components\\layout.svelte-3bab0c9f.js',
					'chunks\\index-49fb8ea3.js'
				],
				import.meta.url
			),
		() =>
			C(
				() => import('./chunks/1-8c66fddf.js'),
				[
					'chunks\\1-8c66fddf.js',
					'components\\error.svelte-bbc9dfc8.js',
					'chunks\\index-49fb8ea3.js',
					'chunks\\stores-1b1a445b.js',
					'chunks\\singletons-a47ad8bd.js',
					'chunks\\index-46779b86.js'
				],
				import.meta.url
			),
		() =>
			C(
				() => import('./chunks/2-bd6181d2.js'),
				[
					'chunks\\2-bd6181d2.js',
					'components\\pages\\website\\_layout.svelte-b53f6634.js',
					'assets\\_layout-fc1f9720.css',
					'chunks\\index-49fb8ea3.js',
					'chunks\\app-3b095983.js',
					'assets\\app-fa19de04.css',
					'chunks\\stores-1b1a445b.js',
					'chunks\\singletons-a47ad8bd.js',
					'chunks\\index-46779b86.js',
					'chunks\\index-1b6a2f9b.js'
				],
				import.meta.url
			),
		() =>
			C(
				() => import('./chunks/3-f2d23819.js'),
				[
					'chunks\\3-f2d23819.js',
					'chunks\\_page-b36aa0f7.js',
					'components\\pages\\_page.svelte-bfd66377.js',
					'assets\\_page-e30102d1.css',
					'chunks\\index-49fb8ea3.js',
					'chunks\\app-3b095983.js',
					'assets\\app-fa19de04.css',
					'chunks\\stores-1b1a445b.js',
					'chunks\\singletons-a47ad8bd.js',
					'chunks\\index-46779b86.js',
					'chunks\\index-1b6a2f9b.js',
					'chunks\\stores-959aaa6e.js',
					'chunks\\index-a30c4d16.js'
				],
				import.meta.url
			),
		() =>
			C(
				() => import('./chunks/4-a7d64f3d.js'),
				[
					'chunks\\4-a7d64f3d.js',
					'chunks\\_page-97c2c518.js',
					'components\\pages\\operator\\_page.svelte-9dcfb27b.js',
					'assets\\_page-0cc74466.css',
					'chunks\\index-49fb8ea3.js',
					'chunks\\stores-959aaa6e.js',
					'chunks\\index-46779b86.js',
					'chunks\\index-1b6a2f9b.js'
				],
				import.meta.url
			),
		() =>
			C(
				() => import('./chunks/5-f0a9e8c5.js'),
				[
					'chunks\\5-f0a9e8c5.js',
					'chunks\\_page-b427286f.js',
					'chunks\\index-56c348ce.js',
					'components\\pages\\operator\\_slug_\\_page.svelte-2933bb02.js',
					'chunks\\index-49fb8ea3.js'
				],
				import.meta.url
			),
		() =>
			C(
				() => import('./chunks/6-22c3dd68.js'),
				[
					'chunks\\6-22c3dd68.js',
					'chunks\\_page-5f828c32.js',
					'components\\pages\\website\\about\\_page.svelte-2e8822c8.js',
					'assets\\_page-9682aba9.css',
					'chunks\\index-49fb8ea3.js'
				],
				import.meta.url
			),
		() =>
			C(
				() => import('./chunks/7-165cf647.js'),
				[
					'chunks\\7-165cf647.js',
					'components\\pages\\website\\demo\\_page.svelte-00137617.js',
					'chunks\\index-49fb8ea3.js'
				],
				import.meta.url
			),
		() => C(() => import('./chunks/8-417a690b.js'), [], import.meta.url),
		() =>
			C(
				() => import('./chunks/9-dd1715f7.js'),
				[
					'chunks\\9-dd1715f7.js',
					'components\\pages\\website\\todos\\_page.svelte-6193e839.js',
					'assets\\_page-5c3529b5.css',
					'chunks\\index-49fb8ea3.js',
					'chunks\\singletons-a47ad8bd.js',
					'chunks\\index-46779b86.js',
					'chunks\\index-a30c4d16.js'
				],
				import.meta.url
			)
	],
	St = [],
	Pt = {
		'': [3],
		operator: [4],
		'website/about': [6, [2]],
		'website/demo': [-8, [2]],
		'website/login': [-9, [2]],
		'website/todos': [-10, [2]],
		'operator/[slug]': [5]
	},
	Ot = '/__data.js',
	Be = 'sveltekit:scroll',
	M = 'sveltekit:index',
	de = mt(ae, St, Pt, Lt),
	me = ae[0],
	ge = ae[1];
me();
ge();
let ee = {};
try {
	ee = JSON.parse(sessionStorage[Be]);
} catch {}
function pe(a) {
	ee[a] = _e();
}
function At({ target: a, base: e, trailing_slash: n }) {
	var Le;
	const i = [],
		r = { id: null, promise: null },
		u = { before_navigate: [], after_navigate: [] };
	let t = { branch: [], error: null, session_id: 0, url: null },
		o = !1,
		f = !0,
		p = !1,
		g = 1,
		L = null,
		V,
		E = !0,
		A = (Le = history.state) == null ? void 0 : Le[M];
	A || ((A = Date.now()), history.replaceState({ ...history.state, [M]: A }, '', location.href));
	const H = ee[A];
	H && ((history.scrollRestoration = 'manual'), scrollTo(H.x, H.y));
	let G = !1,
		x,
		we;
	async function be(
		s,
		{ noscroll: d = !1, replaceState: h = !1, keepfocus: l = !1, state: c = {} },
		$
	) {
		if ((typeof s == 'string' && (s = new URL(s, Ie(document))), E))
			return oe({
				url: s,
				scroll: d ? _e() : null,
				keepfocus: l,
				redirect_chain: $,
				details: { state: c, replaceState: h },
				accepted: () => {},
				blocked: () => {}
			});
		await X(s);
	}
	async function ye(s) {
		const d = Re(s);
		if (!d) throw new Error('Attempted to prefetch a URL that does not belong to this app');
		return (r.promise = $e(d)), (r.id = d.id), r.promise;
	}
	async function ve(s, d, h, l) {
		var v, y, b;
		const c = Re(s),
			$ = (we = {});
		let _ = c && (await $e(c));
		if (
			(!_ &&
				s.origin === location.origin &&
				s.pathname === location.pathname &&
				(_ = await re({
					status: 404,
					error: new Error(`Not found: ${s.pathname}`),
					url: s,
					routeId: null
				})),
			!_)
		)
			return await X(s), !1;
		if (((s = (c == null ? void 0 : c.url) || s), we !== $)) return !1;
		if (((i.length = 0), _.type === 'redirect'))
			if (d.length > 10 || d.includes(s.pathname))
				_ = await re({ status: 500, error: new Error('Redirect loop'), url: s, routeId: null });
			else
				return (
					E
						? be(new URL(_.location, s).href, {}, [...d, s.pathname])
						: await X(new URL(_.location, location.href)),
					!1
				);
		else
			((y = (v = _.props) == null ? void 0 : v.page) == null ? void 0 : y.status) >= 400 &&
				(await Y.updated.check()) &&
				(await X(s));
		if (((p = !0), h && h.details)) {
			const { details: P } = h,
				j = P.replaceState ? 0 : 1;
			(P.state[M] = A += j), history[P.replaceState ? 'replaceState' : 'pushState'](P.state, '', s);
		}
		if ((o ? ((t = _.state), _.props.page && (_.props.page.url = s), V.$set(_.props)) : ke(_), h)) {
			const { scroll: P, keepfocus: j } = h;
			if (!j) {
				const k = document.body,
					O = k.getAttribute('tabindex');
				(k.tabIndex = -1),
					k.focus({ preventScroll: !0 }),
					setTimeout(() => {
						var m;
						(m = getSelection()) == null || m.removeAllRanges();
					}),
					O !== null ? k.setAttribute('tabindex', O) : k.removeAttribute('tabindex');
			}
			if ((await Ae(), f)) {
				const k = s.hash && document.getElementById(s.hash.slice(1));
				P ? scrollTo(P.x, P.y) : k ? k.scrollIntoView() : scrollTo(0, 0);
			}
		} else await Ae();
		(r.promise = null), (r.id = null), (f = !0), _.props.page && (x = _.props.page);
		const R = _.state.branch[_.state.branch.length - 1];
		(E = ((b = R == null ? void 0 : R.node.shared) == null ? void 0 : b.router) !== !1),
			l && l(),
			(p = !1);
	}
	function ke(s) {
		t = s.state;
		const d = document.querySelector('style[data-sveltekit]');
		if (
			(d && d.remove(),
			(x = s.props.page),
			(V = new Rt({ target: a, props: { ...s.props, stores: Y }, hydrate: !0 })),
			E)
		) {
			const h = { from: null, to: new URL(location.href) };
			u.after_navigate.forEach((l) => l(h));
		}
		o = !0;
	}
	async function ne({
		url: s,
		params: d,
		branch: h,
		status: l,
		error: c,
		routeId: $,
		validation_errors: _
	}) {
		var j;
		const R = h.filter(Boolean),
			v = {
				type: 'loaded',
				state: { url: s, params: d, branch: h, error: c, session_id: g },
				props: { components: R.map((k) => k.node.component), errors: _ }
			};
		let y = {},
			b = !x;
		for (let k = 0; k < R.length; k += 1) {
			const O = R[k];
			(y = { ...y, ...O.data }),
				(b || !t.branch.some((m) => m === O)) &&
					((v.props[`data_${k}`] = y),
					(b = b || Object.keys((j = O.data) != null ? j : {}).length > 0));
		}
		if (
			(b || (b = Object.keys(x.data).length !== Object.keys(y).length),
			!t.url || s.href !== t.url.href || t.error !== c || b)
		) {
			v.props.page = { error: c, params: d, routeId: $, status: l, url: s, data: b ? y : x.data };
			const k = (O, m) => {
				Object.defineProperty(v.props.page, O, {
					get: () => {
						throw new Error(`$page.${O} has been replaced by $page.url.${m}`);
					}
				});
			};
			k('origin', 'origin'), k('path', 'pathname'), k('query', 'searchParams');
		}
		return v;
	}
	async function se({ loader: s, parent: d, url: h, params: l, routeId: c, server_data_node: $ }) {
		var y, b, P, j, k;
		let _ = null;
		const R = { dependencies: new Set(), params: new Set(), parent: !1, url: !1 },
			v = await s();
		if ((y = v.shared) != null && y.load) {
			let O = function (...w) {
				for (const S of w) {
					const { href: N } = new URL(S, h);
					R.dependencies.add(N);
				}
			};
			const m = {};
			for (const w in l)
				Object.defineProperty(m, w, {
					get() {
						return R.params.add(w), l[w];
					},
					enumerable: !0
				});
			const I = {
				routeId: c,
				params: m,
				data: (b = $ == null ? void 0 : $.data) != null ? b : null,
				url: lt(h, () => {
					R.url = !0;
				}),
				async fetch(w, S) {
					let N;
					typeof w == 'string'
						? (N = w)
						: ((N = w.url),
						  (S = {
								body: w.method === 'GET' || w.method === 'HEAD' ? void 0 : await w.blob(),
								cache: w.cache,
								credentials: w.credentials,
								headers: w.headers,
								integrity: w.integrity,
								keepalive: w.keepalive,
								method: w.method,
								mode: w.mode,
								redirect: w.redirect,
								referrer: w.referrer,
								referrerPolicy: w.referrerPolicy,
								signal: w.signal,
								...S
						  }));
					const z = new URL(N, h).href;
					return O(z), o ? ze(z, S) : ut(N, S);
				},
				setHeaders: () => {},
				depends: O,
				parent() {
					return (R.parent = !0), d();
				}
			};
			Object.defineProperties(I, {
				props: {
					get() {
						throw new Error(
							'@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693'
						);
					},
					enumerable: !1
				},
				session: {
					get() {
						throw new Error(
							'session is no longer available. See https://github.com/sveltejs/kit/discussions/5883'
						);
					},
					enumerable: !1
				},
				stuff: {
					get() {
						throw new Error(
							'@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693'
						);
					},
					enumerable: !1
				}
			}),
				(_ = (P = await v.shared.load.call(null, I)) != null ? P : null);
		}
		return {
			node: v,
			loader: s,
			server: $,
			shared: (j = v.shared) != null && j.load ? { type: 'data', data: _, uses: R } : null,
			data: (k = _ != null ? _ : $ == null ? void 0 : $.data) != null ? k : null
		};
	}
	function Ee(s, d, h) {
		if (!h) return !1;
		if ((h.parent && d) || (s.url && h.url)) return !0;
		for (const l of s.params) if (h.params.has(l)) return !0;
		for (const l of h.dependencies) if (i.some((c) => c(l))) return !0;
		return !1;
	}
	function ie(s, d) {
		var h, l;
		return (s == null ? void 0 : s.type) === 'data'
			? {
					type: 'data',
					data: s.data,
					uses: {
						dependencies: new Set((h = s.uses.dependencies) != null ? h : []),
						params: new Set((l = s.uses.params) != null ? l : []),
						parent: !!s.uses.parent,
						url: !!s.uses.url
					}
			  }
			: (s == null ? void 0 : s.type) === 'skip' && d != null
			? d
			: null;
	}
	async function $e({ id: s, url: d, params: h, route: l }) {
		if (r.id === s && r.promise) return r.promise;
		const { errors: c, layouts: $, leaf: _ } = l,
			R = t.url && {
				url: s !== t.url.pathname + t.url.search,
				params: Object.keys(h).filter((m) => t.params[m] !== h[m])
			},
			v = [...$, _];
		c.forEach((m) => (m == null ? void 0 : m().catch(() => {}))),
			v.forEach((m) => (m == null ? void 0 : m[1]().catch(() => {})));
		let y = null;
		const b = v.reduce((m, I, w) => {
			var z;
			const S = t.branch[w],
				N =
					!!(I != null && I[0]) &&
					((S == null ? void 0 : S.loader) !== I[1] ||
						Ee(R, m.some(Boolean), (z = S.server) == null ? void 0 : z.uses));
			return m.push(N), m;
		}, []);
		if (b.some(Boolean)) {
			try {
				y = await qe(d, b);
			} catch (m) {
				return re({ status: 500, error: m, url: d, routeId: l.id });
			}
			if (y.type === 'redirect') return y;
		}
		const P = y == null ? void 0 : y.nodes;
		let j = !1;
		const k = v.map(async (m, I) => {
			var le, Se;
			if (!m) return;
			const w = t.branch[I],
				S = (le = P == null ? void 0 : P[I]) != null ? le : null;
			if (
				(!S || S.type === 'skip') &&
				m[1] === (w == null ? void 0 : w.loader) &&
				!Ee(R, j, (Se = w.shared) == null ? void 0 : Se.uses)
			)
				return w;
			if (((j = !0), (S == null ? void 0 : S.type) === 'error'))
				throw S.httperror ? nt(S.httperror.status, S.httperror.message) : S.error;
			return se({
				loader: m[1],
				url: d,
				params: h,
				routeId: l.id,
				parent: async () => {
					var Oe;
					const Pe = {};
					for (let ce = 0; ce < I; ce += 1)
						Object.assign(Pe, (Oe = await k[ce]) == null ? void 0 : Oe.data);
					return Pe;
				},
				server_data_node: ie(S, w == null ? void 0 : w.server)
			});
		});
		for (const m of k) m.catch(() => {});
		const O = [];
		for (let m = 0; m < v.length; m += 1)
			if (v[m])
				try {
					O.push(await k[m]);
				} catch (I) {
					const w = I;
					if (w instanceof De) return { type: 'redirect', location: w.location };
					const S = I instanceof ue ? I.status : 500;
					for (; m--; )
						if (c[m]) {
							let N,
								z = m;
							for (; !O[z]; ) z -= 1;
							try {
								return (
									(N = { node: await c[m](), loader: c[m], data: {}, server: null, shared: null }),
									await ne({
										url: d,
										params: h,
										branch: O.slice(0, z + 1).concat(N),
										status: S,
										error: w,
										routeId: l.id
									})
								);
							} catch {
								continue;
							}
						}
					X(d);
					return;
				}
			else O.push(void 0);
		return await ne({ url: d, params: h, branch: O, status: 200, error: null, routeId: l.id });
	}
	async function re({ status: s, error: d, url: h, routeId: l }) {
		var y;
		const c = {},
			$ = await me();
		let _ = null;
		if ($.server)
			try {
				const b = await qe(h, [!0]);
				if (b.type !== 'data' || (b.nodes[0] && b.nodes[0].type !== 'data')) throw 0;
				_ = (y = b.nodes[0]) != null ? y : null;
			} catch {
				X(h);
				return;
			}
		const R = await se({
				loader: me,
				url: h,
				params: c,
				routeId: l,
				parent: () => Promise.resolve({}),
				server_data_node: ie(_)
			}),
			v = { node: await ge(), loader: ge, shared: null, server: null, data: null };
		return await ne({ url: h, params: c, branch: [R, v], status: s, error: d, routeId: l });
	}
	function Re(s) {
		if (s.origin !== location.origin || !s.pathname.startsWith(e)) return;
		const d = decodeURI(s.pathname.slice(e.length) || '/');
		for (const h of de) {
			const l = h.exec(d);
			if (l) {
				const c = new URL(s.origin + st(s.pathname, n) + s.search + s.hash);
				return { id: c.pathname + c.search, route: h, params: it(l), url: c };
			}
		}
	}
	async function oe({
		url: s,
		scroll: d,
		keepfocus: h,
		redirect_chain: l,
		details: c,
		accepted: $,
		blocked: _
	}) {
		const R = t.url;
		let v = !1;
		const y = { from: R, to: s, cancel: () => (v = !0) };
		if ((u.before_navigate.forEach((b) => b(y)), v)) {
			_();
			return;
		}
		pe(A),
			$(),
			o && Y.navigating.set({ from: t.url, to: s }),
			await ve(s, l, { scroll: d, keepfocus: h, details: c }, () => {
				const b = { from: R, to: s };
				u.after_navigate.forEach((P) => P(b)), Y.navigating.set(null);
			});
	}
	function X(s) {
		return (location.href = s.href), new Promise(() => {});
	}
	return {
		after_navigate: (s) => {
			he(
				() => (
					u.after_navigate.push(s),
					() => {
						const d = u.after_navigate.indexOf(s);
						u.after_navigate.splice(d, 1);
					}
				)
			);
		},
		before_navigate: (s) => {
			he(
				() => (
					u.before_navigate.push(s),
					() => {
						const d = u.before_navigate.indexOf(s);
						u.before_navigate.splice(d, 1);
					}
				)
			);
		},
		disable_scroll_handling: () => {
			(p || !o) && (f = !1);
		},
		goto: (s, d = {}) => be(s, d, []),
		invalidate: (s) => {
			var d, h;
			if (s === void 0) {
				for (const l of t.branch)
					(d = l == null ? void 0 : l.server) == null || d.uses.dependencies.add(''),
						(h = l == null ? void 0 : l.shared) == null || h.uses.dependencies.add('');
				i.push(() => !0);
			} else if (typeof s == 'function') i.push(s);
			else {
				const { href: l } = new URL(s, location.href);
				i.push((c) => c === l);
			}
			return (
				L ||
					(L = Promise.resolve().then(async () => {
						await ve(new URL(location.href), []), (L = null);
					})),
				L
			);
		},
		prefetch: async (s) => {
			const d = new URL(s, Ie(document));
			await ye(d);
		},
		prefetch_routes: async (s) => {
			const h = (s ? de.filter((l) => s.some((c) => l.exec(c))) : de).map((l) =>
				Promise.all([...l.layouts, l.leaf].map((c) => (c == null ? void 0 : c[1]())))
			);
			await Promise.all(h);
		},
		_start_router: () => {
			(history.scrollRestoration = 'manual'),
				addEventListener('beforeunload', (l) => {
					let c = !1;
					const $ = { from: t.url, to: null, cancel: () => (c = !0) };
					u.before_navigate.forEach((_) => _($)),
						c ? (l.preventDefault(), (l.returnValue = '')) : (history.scrollRestoration = 'auto');
				}),
				addEventListener('visibilitychange', () => {
					if (document.visibilityState === 'hidden') {
						pe(A);
						try {
							sessionStorage[Be] = JSON.stringify(ee);
						} catch {}
					}
				});
			const s = (l) => {
				const c = je(l);
				c && c.href && c.hasAttribute('data-sveltekit-prefetch') && ye(Ue(c));
			};
			let d;
			const h = (l) => {
				clearTimeout(d),
					(d = setTimeout(() => {
						var c;
						(c = l.target) == null ||
							c.dispatchEvent(new CustomEvent('sveltekit:trigger_prefetch', { bubbles: !0 }));
					}, 20));
			};
			addEventListener('touchstart', s),
				addEventListener('mousemove', h),
				addEventListener('sveltekit:trigger_prefetch', s),
				addEventListener('click', (l) => {
					if (
						!E ||
						l.button ||
						l.which !== 1 ||
						l.metaKey ||
						l.ctrlKey ||
						l.shiftKey ||
						l.altKey ||
						l.defaultPrevented
					)
						return;
					const c = je(l);
					if (!c || !c.href) return;
					const $ = c instanceof SVGAElement,
						_ = Ue(c);
					if (!$ && !(_.protocol === 'https:' || _.protocol === 'http:')) return;
					const R = (c.getAttribute('rel') || '').split(/\s+/);
					if (
						c.hasAttribute('download') ||
						R.includes('external') ||
						c.hasAttribute('data-sveltekit-reload') ||
						($ ? c.target.baseVal : c.target)
					)
						return;
					const [v, y] = _.href.split('#');
					if (y !== void 0 && v === location.href.split('#')[0]) {
						(G = !0), pe(A), Y.page.set({ ...x, url: _ }), Y.page.notify();
						return;
					}
					oe({
						url: _,
						scroll: c.hasAttribute('data-sveltekit-noscroll') ? _e() : null,
						keepfocus: !1,
						redirect_chain: [],
						details: { state: {}, replaceState: _.href === location.href },
						accepted: () => l.preventDefault(),
						blocked: () => l.preventDefault()
					});
				}),
				addEventListener('popstate', (l) => {
					if (l.state && E) {
						if (l.state[M] === A) return;
						oe({
							url: new URL(location.href),
							scroll: ee[l.state[M]],
							keepfocus: !1,
							redirect_chain: [],
							details: null,
							accepted: () => {
								A = l.state[M];
							},
							blocked: () => {
								const c = A - l.state[M];
								history.go(c);
							}
						});
					}
				}),
				addEventListener('hashchange', () => {
					G && ((G = !1), history.replaceState({ ...history.state, [M]: ++A }, '', location.href));
				});
			for (const l of document.querySelectorAll('link')) l.rel === 'icon' && (l.href = l.href);
			addEventListener('pageshow', (l) => {
				l.persisted && Y.navigating.set(null);
			});
		},
		_hydrate: async ({
			status: s,
			error: d,
			node_ids: h,
			params: l,
			routeId: c,
			data: $,
			errors: _
		}) => {
			const R = new URL(location.href);
			let v;
			try {
				const y = h.map(async (b, P) => {
					const j = $[P];
					return se({
						loader: ae[b],
						url: R,
						params: l,
						routeId: c,
						parent: async () => {
							const k = {};
							for (let O = 0; O < P; O += 1) Object.assign(k, (await y[O]).data);
							return k;
						},
						server_data_node: ie(j)
					});
				});
				v = await ne({
					url: R,
					params: l,
					branch: await Promise.all(y),
					status: s,
					error: d != null && d.__is_http_error ? new ue(d.status, d.message) : d,
					validation_errors: _,
					routeId: c
				});
			} catch (y) {
				const b = y;
				if (b instanceof De) {
					await X(new URL(y.location, location.href));
					return;
				}
				v = await re({ status: b instanceof ue ? b.status : 500, error: b, url: R, routeId: c });
			}
			ke(v);
		}
	};
}
let It = 1;
async function qe(a, e) {
	const n = new URL(a);
	(n.pathname = a.pathname.replace(/\/$/, '') + Ot),
		n.searchParams.set('__invalid', e.map((r) => (r ? 'y' : 'n')).join('')),
		n.searchParams.set('__id', String(It++)),
		await C(() => import(n.href), [], import.meta.url);
	const i = window.__sveltekit_data;
	return delete window.__sveltekit_data, i;
}
function Vt(a) {}
async function Nt({ paths: a, target: e, route: n, spa: i, trailing_slash: r, hydrate: u }) {
	const t = At({ target: e, base: a.base, trailing_slash: r });
	et({ client: t }),
		tt(a),
		u && (await t._hydrate(u)),
		n && (i && t.goto(location.href, { replaceState: !0 }), t._start_router()),
		dispatchEvent(new CustomEvent('sveltekit:start'));
}
export { Vt as set_public_env, Nt as start };
