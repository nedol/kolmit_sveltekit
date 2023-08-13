export { matchers } from './client-matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9')];

export const server_loads = [];

export const dictionary = {
	"": [3],
	"operator": [4],
	"website/about": [6,[2]],
	"website/demo": [~7,[2]],
	"website/login": [~8,[2]],
	"website/todos": [~9,[2]],
	"operator/[slug]": [5]
};