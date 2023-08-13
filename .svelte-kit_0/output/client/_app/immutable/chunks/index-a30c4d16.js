import{a2 as y}from"./index-49fb8ea3.js";function m(o){const t=o-1;return t*t*t+1}function $(o,{delay:t=0,duration:s=400,easing:n=y}={}){const c=+getComputedStyle(o).opacity;return{delay:t,duration:s,easing:n,css:a=>`opacity: ${a*c}`}}function g(o,{delay:t=0,duration:s=400,easing:n=m,start:c=0,opacity:a=0}={}){const r=getComputedStyle(o),e=+r.opacity,f=r.transform==="none"?"":r.transform,p=1-c,u=e*(1-a);return{delay:t,duration:s,easing:n,css:(d,i)=>`
			transform: ${f} scale(${1-p*i});
			opacity: ${e-u*i}
		`}}export{m as c,$ as f,g as s};
