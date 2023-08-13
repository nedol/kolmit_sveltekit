/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var g=p;function p(e,a){if(typeof e!="string")throw new TypeError("argument str must be a string");for(var o={},f=a||{},u=f.decode||h,r=0;r<e.length;){var i=e.indexOf("=",r);if(i===-1)break;var n=e.indexOf(";",r);if(n===-1)n=e.length;else if(n<i){r=e.lastIndexOf(";",i-1)+1;continue}var c=e.slice(r,i).trim();if(o[c]===void 0){var t=e.slice(i+1,n).trim();t.charCodeAt(0)===34&&(t=t.slice(1,-1)),o[c]=v(t,u)}r=n+1}return o}function h(e){return e.indexOf("%")!==-1?decodeURIComponent(e):e}function v(e,a){try{return a(e)}catch{return e}}export{g as p};
