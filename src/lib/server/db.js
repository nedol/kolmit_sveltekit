// import { page, navigating, updated } from '$app/stores';

import { moment } from 'moment';

import pkg from 'lodash';
const { find, remove, findIndex } = pkg;

import md5 from 'md5';
import { writable } from 'svelte/store';

import { tarifs } from './tarifs.json';

import user_pic from '$lib/images/operator.svg';

import { createPool, sql, db } from '@vercel/postgres';
import { redirect } from '@sveltejs/kit';
import pkg_e from 'nodemailer';
const { Email } = pkg_e;

// import { pool } from 'svelte/store';
let pool = '';
let conStr = {
	connectionString:
		'postgres://default:VAkLCRpUw1H0@ep-noisy-cell-09055546-pooler.eu-central-1.postgres.vercel-storage.com:5432/verceldb'
};

export async function CreatePool(resolve) {
	pool = await createPool(conStr);
	resolve(pool);
}

function getHash(par) {
	return md5(par + par);
}

function SendEmail(q, new_email) {
	let em = new Email();
	const abonent = q.abonent ? '&abonent=' + q.abonent : '';
	const mail = q.send_mail || new_email;
	const hash = getHash(mail);
	let text = {
		ru: '<h1>Присоединиться к сети</h1></a>',
		en: '<h1>Join network</h1></a>',
		fr: '<h1>Rejoindre le réseau</h1></a>'
	}[q.lang];
	let html =
		"<div><a href='http://localhost:5000/kolmit/site/operator.html?operator=" +
		(q.send_mail || new_email) +
		abonent +
		'&hash=' +
		hash +
		"'>" +
		text +
		'</a></div>';

	em.SendMail(
		'nedol@narod.ru',
		q.send_mail || new_email,
		{
			ru: 'Новый оператор сети Колми',
			en: 'New Kolmi network operator',
			fr: 'Le nouvel opérateur de Kolmi'
		}[q.lang],
		html,
		(result) => {
			console.log();
		}
	);
}

export async function CreateOperator(par) {
	try {
		let res =
			await pool.sql`SELECT operators.operator as operator, users.users as users FROM operators
		INNER JOIN users ON (users.operator = operators.abonent)
		WHERE operators.psw = ${par.psw} AND operators.operator=${par.email} 
		AND operators.abonent =${par.abonent}`;
		if (res.rows[0]) {
			let users = JSON.parse(res.rows[0].users);
			par.dep_id = '0';
			let oper = find(users[0].staff, { email: par.email });
			if (!oper) {
				oper = {
					id: 0,
					role: 'operator',
					email: par.email,
					picture: {
						medium: par.img
					}
				};

				users[0].staff.push(oper);
			} else {
				oper.picture = { medium: par.img };
			}

			updateUsers(users, par);
		} else {
			if (par.email.toLowerCase().includes('cvo')) return AddOperator(par);
			else return false;
		}
	} catch (er) {
		console.log(er);
	}
}

async function updateUsers(users, q) {
	let usrs = JSON.stringify(users);

	let res = await pool.sql`UPDATE users SET
		users=${usrs}, 
		last=CURRENT_TIMESTAMP, 
		editor=${q.abonent || q.email}
		WHERE  operator=${q.abonent || q.email}`;
	return JSON.stringify({ func: q.func, dep: users[0] });
}

export async function GetUsers(par) {
	let users = '';

	if (par.abonent) {
		users = await pool.sql`SELECT  users
			FROM operators
			INNER JOIN users ON (operators.abonent = users.operator)
			WHERE  operators.operator=${par.operator} AND operators.abonent=${par.abonent}  
			AND operators.psw=${par.psw};`;
	} else {
		users = await pool.sql`SELECT  users 
			FROM operators
			INNER JOIN users ON (operators.abonent = users.operator = operators.operator) 
			WHERE operators.operator=users.operators.operator AND operators.operator=${par.em} AND operators.psw=${par.psw};`;
	}

	return users.rows[0];
}

export async function CheckOperator(q) {
	let result;

	// console.log(pool.sql);

	if (q.psw && q.hash && getHash(q.em) === q.hash) {
		await pool.sql`
		INSERT INTO operators (psw, operator, abonent, tarif, name) VALUES(${q.psw}, ${q.em}, 
			${q.abonent}, ${q.name})`;
	}

	if (q.em) {
		if (q.abonent) {
			result = await pool.sql`
				SELECT *, (SELECT tarif FROM operators WHERE operator=${q.abonent} AND abonent=operator) as tarif 
			FROM  operators WHERE operator=${q.em} AND abonent=${q.abonent} AND psw=${q.psw}`;
		} else {
			result = result.rows;
			await pool.sql`
			SELECT * FROM  operators WHERE operator=${q.em} AND abonent=${q.abonent} AND psw=${q.psw}`;
		}

		result = result.rows;

		if (result[0]) {
			if (q.psw == result[0].psw) {
				return {
					func: q.func,
					check: true
				};
			} else {
				return JSON.stringify({ func: q.func, check: false });
			}
		} else {
			return JSON.stringify({ func: q.func, check: false });
		}
	} else {
		result = await pool.sql`
		SELECT * FROM  operators WHERE operator=${q.em}`;

		return result.rows;
	}
}

async function insertUsers(users, q) {
	let usrs = JSON.stringify(users);

	let res = await pool.sql`INSERT INTO users
		(operator, users, last, editor) VALUES (${q.email},
		${usrs}, CURRENT_TIMESTAMP, ${q.email})`;

	return JSON.stringify({ func: q.func, res: res });
}

export async function AddOperator(q) {
	let res = await pool.sql`SELECT users 
	FROM users 
	INNER JOIN operators ON (operators.abonent = users.operator)
	WHERE operators.abonent=${q.abonent}`;

	let users = {};
	if (res.rows[0]) {
		users = res.rows[0].users;
	}

	await pool.sql`BEGIN;`;

	try {
		let res = await pool.sql`UPDATE users SET
		users=${users}, 
		last=CURRENT_TIMESTAMP, 
		editor=${q.email}
		WHERE  operator=${q.abonent}`;
	} catch (ex) {
		await pool.sql`ROLLBACK;`;
		return JSON.stringify({ func: q.func, res: ex });
	}
	try {
		let res = await pool.sql`INSERT INTO operators
		(operator, abonent, psw, tarif) VALUES (${q.email}, ${q.abonent}, ${q.psw},'free')`;
	} catch (ex) {
		await pool.sql`ROLLBACK;`;
		return JSON.stringify({ func: q.func, res: ex });
	}

	await pool.sql`COMMIT;`;
	return JSON.stringify({ func: q.func, dep: users });
}

export async function ChangeDep(q) {
	let res = await pool.sql`SELECT users 
	FROM operators as oper
	INNER JOIN users as usr ON (operators.abonent = users.operator)
	WHERE oper.abonent=${q.abonent} AND oper.operator=${q.em || q.operator} AND oper.psw=${q.psw}`;

	if (res.rows[0]) {
		let users = JSON.parse(res.rows[0].users);
		let ind = findIndex(users, { id: String(q.dep.id) });
		if (ind === -1) return;
		users[ind] = q.dep;

		return updateUsers(users, q);
	}
}

export async function AddDep(q) {
	if (q.abonent) {
		let res = await pool.sql`SELECT *, (SELECT users FROM users WHERE operator=${
			q.abonent || q.em
		}) as users
		FROM  operators as oper
		WHERE oper.operator=${q.abonent || q.em}  AND abonent=${q.abonent} AND psw=${q.psw}
		`;
		let users = [];
		if (res.rows[0]) {
			users = JSON.parse(res.rows[0].users);
			let ind = findIndex(users, { id: String(q.id) });
			if (ind === -1) return;
			users[q.id + 1] = {
				id: String(q.id + 1),
				alias: '',
				admin: {
					desc: '',
					name: '',
					role: 'admin',
					email: '',
					picture: { user_pic }
				},
				staff: []
			};
			return updateUsers(users, q);
		}
		return rows[0];
	}
}

export async function RemDep(q) {
	let res = pool.sql`SELECT users 
		FROM operators as oper
		INNER JOIN users as usr ON (operators.abonent = users.operator)
		WHERE oper.operator=${q.em || q.abonent} AND oper.psw=${q.psw}`;

	if (res.rows[0]) {
		let users = JSON.parse(res.rows[0].users);
		remove(users, (n) => {
			return n.id === q.dep;
		});
		return updateUsers(users, q);
	}
}

export async function ChangeOperator(q) {
	const res = await pool.sql`SELECT *, (SELECT users FROM users WHERE operator=${
		q.abonent || q.em
	}) as users 
		FROM  operators as oper 
		WHERE oper.operator=${q.abonent || q.em}  AND abonent=${q.abonent} AND psw=${q.psw}`;

	if (res.rows[0]) {
		try {
			let users = [];
			users = JSON.parse(res.rows[0].users);
			let dep = find(users, { id: q.dep_id });
			let user;
			if (q.data.role === 'admin') {
				user = dep['admin'];
			} else {
				let ind = findIndex(dep.staff, { id: q.data.id });
				user = dep.staff[ind];
			}

			if (q.data.alias) user.alias = q.data.alias;
			if (q.data.picture) user.picture = q.data.picture;
			if (q.data.email) {
				if (q.data.email !== user.email) SendEmail(q, q.data.email);
				user.email = q.data.email;
			}
			if (q.data.name) user.name = q.data.name;
			if (q.data.desc) user.desc = q.data.desc;
		} catch (ex) {}

		return updateUsers(users, q);
	}
}

export async function RemoveOperator(q) {
	const res = pool.sql`SELECT *, (SELECT users FROM users WHERE operator=?) as users ' +
		'FROM  operators as oper 
		'WHERE oper.operator=${q.abonent || q.em}  AND abonent=${q.abonent} AND psw=${q.psw}`;
	try {
		let users = [];
		if (res.rows[0]) {
			users = JSON.parse(res.rows[0].users);
			let dep = find(users, { id: q.dep });
			let ind = findIndex(dep.staff, { id: q.id });
			dep.staff.splice(ind, 1);

			return updateUsers(users, q);
		}
	} catch (ex) {
		return;
	}
}

export async function GetText(q) {
	await pool.sql`BEGIN;`;
	try {
		let res = await pool.sql`SELECT text FROM texts
		WHERE level= ${q.level} AND theme=${q.theme} AND owner=${q.owner}`;
		//debugger;
		return res.rows[0].text;
		await pool.sql`COMMIT;`;
	} catch (ex) {
		await pool.sql`ROLLBACK;`;
		return JSON.stringify({ func: q.func, res: ex });
	}
}

export async function GetDict(q) {
	await pool.sql`BEGIN;`;
	try {
		let res = await pool.sql`SELECT words FROM dicts
		WHERE type=${q.type} AND level= ${q.level} AND theme=${q.theme} AND owner=${q.owner}`;
		//debugger;
		return res.rows[0].words;
		await pool.sql`COMMIT;`;
	} catch (ex) {
		debugger;
		await pool.sql`ROLLBACK;`;
		return JSON.stringify({ func: q.func, res: ex });
	}
}

export async function WriteSpeech(q) {
	await pool.sql`BEGIN;`;
	try {
		let res = await pool.sql`INSERT INTO speech
		(admin,key, data) VALUES (${q.admin}, ${q.key}, ${q.data})`;
	} catch (ex) {
		await pool.sql`ROLLBACK;`;
		return JSON.stringify({ func: q.func, res: ex });
	}
	await pool.sql`COMMIT;`;
}

export async function ReadSpeech(q) {
	//debugger;
	await pool.sql`BEGIN;`;
	try {
		let res = await pool.sql`SELECT data FROM speech
		WHERE key= ${q.key}`;
		if (res.rows[0]) {
			return res.rows[0].data;
		}
		await pool.sql`COMMIT;`;
	} catch (ex) {
		await pool.sql`ROLLBACK;`;
		return JSON.stringify('');
	}
}
