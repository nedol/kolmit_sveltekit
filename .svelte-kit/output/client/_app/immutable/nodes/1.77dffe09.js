import{s as S,w as _,p as x}from"../chunks/scheduler.1d2e48cd.js";import{S as j,i as q,g as f,m as d,s as w,h as g,j as h,n as v,f as u,c as y,a as m,A as $,o as E}from"../chunks/index.abd3b193.js";import{d as A}from"../chunks/singletons.c17499a8.js";const C=()=>{const s=A;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},H={subscribe(s){return C().page.subscribe(s)}};function P(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",l;return{c(){t=f("h1"),o=d(r),n=w(),i=f("p"),l=d(c)},l(e){t=g(e,"H1",{});var a=h(t);o=v(a,r),a.forEach(u),n=y(e),i=g(e,"P",{});var p=h(i);l=v(p,c),p.forEach(u)},m(e,a){m(e,t,a),$(t,o),m(e,n,a),m(e,i,a),$(i,l)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&E(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&E(l,c)},i:_,o:_,d(e){e&&(u(t),u(n),u(i))}}}function k(s,t,r){let o;return x(s,H,n=>r(0,o=n)),[o]}let F=class extends j{constructor(t){super(),q(this,t,k,P,S,{})}};export{F as component};