import 'moment';
import pkg from 'lodash';
import md5 from 'md5';
import { createPool } from '@vercel/postgres';
import './index-2b68e648.js';
import 'nodemailer';

const { find, remove, findIndex } = pkg;
let pool = "";
let conStr = {
  connectionString: "postgres://default:VAkLCRpUw1H0@ep-noisy-cell-09055546-pooler.eu-central-1.postgres.vercel-storage.com:5432/verceldb"
};
async function CreatePool(resolve) {
  pool = await createPool(conStr);
  resolve(pool);
}
function getHash(par) {
  return md5(par + par);
}
async function CreateOperator(par) {
  try {
    let res = await pool.sql`SELECT operators.operator as operator, users.users as users FROM operators
		INNER JOIN users ON (users.operator = operators.abonent)
		WHERE operators.psw = ${par.psw} AND operators.operator=${par.email} 
		AND operators.abonent =${par.abonent}`;
    if (res.rows[0]) {
      let users = JSON.parse(res.rows[0].users);
      par.dep_id = "0";
      let oper = find(users[0].staff, { email: par.email });
      if (!oper) {
        oper = {
          id: 0,
          role: "operator",
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
      return AddOperator(par);
    }
  } catch (er) {
    console.log(er);
  }
}
async function updateUsers(users, q) {
  let usrs = JSON.stringify(users);
  await pool.sql`UPDATE users SET
		users=${usrs}, 
		last=CURRENT_TIMESTAMP, 
		editor=${q.abonent || q.email}
		WHERE  operator=${q.abonent || q.email}`;
  return JSON.stringify({ func: q.func, dep: users[0] });
}
async function GetUsers(par) {
  let users = "";
  if (par.abonent) {
    users = await pool.sql`SELECT tarif, users
			FROM operators
			INNER JOIN users ON (operators.abonent = users.operator)
			WHERE  operators.operator=${par.operator} AND operators.abonent=${par.abonent}  AND operators.psw=${par.psw};`;
  } else {
    users = await pool.sql`SELECT tarif, users 
			FROM operators
			INNER JOIN users ON (operators.abonent = users.operator = operators.operator) 
			WHERE operators.operator=users.operators.operator AND operators.operator=${par.em} AND operators.psw=${par.psw};`;
  }
  return users.rows[0];
}
async function CheckOperator(q) {
  let result;
  console.log(pool.sql);
  if (q.psw && q.hash && getHash(q.em) === q.hash) {
    await pool.sql`
		INSERT INTO operators (psw, operator, abonent, tarif) VALUES(${q.psw}, ${q.em}, ${q.abonent}, ${JSON.stringify({ name: "free" })})`;
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
async function AddOperator(q) {
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
    let res2 = await pool.sql`UPDATE users SET
		users=${users}, 
		last=CURRENT_TIMESTAMP, 
		editor=${q.email}
		WHERE  operator=${q.abonent}`;
  } catch (ex) {
    await pool.sql`ROLLBACK;`;
    return JSON.stringify({ func: q.func, res: ex });
  }
  try {
    let res2 = await pool.sql`INSERT INTO operators
		(operator, abonent, psw, tarif) VALUES (${q.email}, ${q.abonent}, ${q.psw},'free')`;
  } catch (ex) {
    await pool.sql`ROLLBACK;`;
    return JSON.stringify({ func: q.func, res: ex });
  }
  await pool.sql`COMMIT;`;
  return JSON.stringify({ func: q.func, dep: users });
}
async function GetText(q) {
  await pool.sql`BEGIN;`;
  try {
    let res = await pool.sql`SELECT text FROM texts
		WHERE level= ${q.level} AND theme=${q.theme} AND owner=${q.owner}`;
    return res.rows[0].text;
    await pool.sql`COMMIT;`;
  } catch (ex) {
    await pool.sql`ROLLBACK;`;
    return JSON.stringify({ func: q.func, res: ex });
  }
}
async function GetDict(q) {
  await pool.sql`BEGIN;`;
  try {
    let res = await pool.sql`SELECT words FROM dicts
		WHERE type=${q.type} AND level= ${q.level} AND theme=${q.theme} AND owner=${q.owner}`;
    return res.rows[0].words;
    await pool.sql`COMMIT;`;
  } catch (ex) {
    debugger;
    await pool.sql`ROLLBACK;`;
    return JSON.stringify({ func: q.func, res: ex });
  }
}
async function WriteSpeech(q) {
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
async function ReadSpeech(q) {
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
    return JSON.stringify("");
  }
}

export { CreatePool as C, GetUsers as G, ReadSpeech as R, WriteSpeech as W, CheckOperator as a, CreateOperator as b, GetText as c, GetDict as d };
//# sourceMappingURL=db-53d6f8c0.js.map
