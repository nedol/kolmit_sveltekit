import {
  pool
} from "./chunk-ZIGICOLJ.js";
import {
  require_cookie
} from "./chunk-5UO6NJKZ.js";
import {
  __toESM
} from "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/endpoints/api/edit_cc/_server.js
var cookie = __toESM(require_cookie(), 1);
import nodemailer from "nodemailer";
import stringHash from "string-hash";
import { _ } from "lodash";
import "mysql2/promise";
var Email = class {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "nedol.kolmit@gmail.com",
        pass: "fonjopvnigxpsxnx"
      }
    });
  }
  SendMail(from, to, subj, html, cb) {
    let mailOptions = {
      from,
      to,
      subject: subj,
      html
    };
    this.transporter.sendMail(mailOptions, function(error2, info) {
      if (error2) {
        cb({ err: error2 });
        console.log(error2);
      } else {
        cb("Email sent: " + info.response);
        console.log("Email sent: " + info.response);
      }
    });
  }
};
global.rtcPull = { "user": {}, "operator": {} };
async function POST({ request, setHeaders, url }) {
  let sql = "", vals = "";
  let q = await request.json().then((data) => {
    return data.par;
  });
  let [rows, fields] = "";
  let err = "";
  let headers = "";
  switch (q.func) {
    case "operator":
      if (q.send_mail && q.psw) {
        const ab = q.abonent ? q.abonent : q.send_mail;
        vals = [q.psw, q.send_mail, ab];
        sql = "SELECT * FROM operators WHERE psw=? AND operator=? AND abonent=?";
        try {
          [rows, fields] = await pool.query(sql, vals);
          if (rows.length === 0) {
            vals = [q.psw, q.send_mail, ab, '{"name": "free", "start": "2021-12-14"}'];
            sql = "INSERT INTO operators SET psw=?, operator=?, abonent=?, tarif=?";
            [rows, fields] = await pool.execute(sql, vals);
            const cookieId = crypto.randomUUID();
            headers = {
              "Set-cookie": cookie.serialize(
                "session_id",
                cookieId,
                {
                  httpOnly: true,
                  maxAge: 60 * 60 * 24 * 7,
                  sameSite: "lax",
                  path: "/"
                }
              )
            };
            SendEmail(q);
          } else {
          }
        } catch (ex) {
          if (ex.errno === 1062) {
            err = ex;
          }
        }
      }
      return new Response(JSON.stringify({ rows, fields, err }));
    case "getusers":
      if (q.abonent) {
        vals = [q.em, q.abonent, q.psw];
        sql = "SELECT tarif, users FROM operators, users WHERE operators.abonent = users.operator AND operators.operator=? AND operators.abonent=?  AND operators.psw=?";
      } else {
        vals = [q.em, q.psw];
        sql = "SELECT tarif, users FROM operators, users WHERE operators.operator=users.operators.operator ";
      }
      try {
        [rows, fields] = await pool.query(sql, vals);
        if (rows[0]) {
          let res = false;
          let users2 = rows[0].users;
          for (let d in users2) {
            if (users2[d].admin.email === q.em) {
              res = true;
              break;
            }
            for (let s in users2[d].staff) {
              if (users2[d].staff[s].email === q.em) {
                res = true;
                break;
              }
            }
          }
          if (res) {
            rows = { tarif: rows[0].tarif, users: rows[0].users };
          }
        } else {
          rows = { users: [] };
        }
      } catch (ex) {
        console.log(ex.sql);
        return new Response(JSON.stringify({ error: ex.message, users: [] }));
      }
      return new Response(JSON.stringify({ rows, fields, err }));
    case "addoper":
      vals = [q.abonent ? q.abonent : q.em, q.em, q.abonent ? q.abonent : "", q.psw];
      sql = "SELECT *, (SELECT users FROM users WHERE operator=?) as users FROM  operators as oper WHERE oper.operator=?  AND abonent=? AND psw=?";
      try {
        [rows, fields] = await pool.query(sql, vals);
        let usrs = [];
        if (rows[0]) {
          usrs = rows[0].users;
          let dep = _.find(usrs, { "id": q.dep_id });
          let item = { "id": dep.staff.length + 1, "desc": "", "name": "", "role": "operator", "email": "", "picture": { "medium": "./src/routes/assets/operator.svg" } };
          dep.staff.push(item);
          vals = [JSON.stringify(usrs), q.em, q.abonent || q.em];
          sql = "UPDATE users SET users=?, last=CURRENT_TIMESTAMP(), editor=? WHERE  operator=?";
          [rows, fields] = await pool.query(sql, vals);
          return new Response(JSON.stringify({ func: q.func, dep }));
        }
      } catch (ex) {
        return new Response(JSON.stringify({ error: ex.message }));
      }
    case "changeoper":
      vals = [q.abonent ? q.abonent : q.em, q.em, q.abonent ? q.abonent : "", q.psw];
      sql = "SELECT *, (SELECT users FROM users WHERE operator=?) as users FROM  operators as oper WHERE oper.operator=?  AND abonent=? AND psw=?";
      try {
        [rows, fields] = await pool.query(sql, vals);
        let usrs = [];
        if (rows[0]) {
          usrs = rows[0].users;
          let dep = _.find(usrs, { "id": q.dep_id });
          let user;
          if (q.data.role === "admin") {
            user = dep["admin"];
          } else {
            let ind = _.findIndex(dep.staff, { id: q.data.id });
            user = dep.staff[ind];
          }
          if (q.data.alias)
            user.alias = q.data.alias;
          if (q.data.picture)
            user.picture = q.data.picture;
          if (q.data.email) {
            if (q.data.email !== user.email)
              SendEmail(q, q.data.email);
            user.email = q.data.email;
          }
          if (q.data.name)
            user.name = q.data.name;
          if (q.data.desc)
            user.desc = q.data.desc;
          vals = [JSON.stringify(usrs), q.em, q.abonent || q.em];
          sql = "UPDATE users SET users=?, last=CURRENT_TIMESTAMP(), editor=? WHERE  operator=?";
          [rows, fields] = await pool.query(sql, vals);
          return new Response(JSON.stringify({ func: q.func, dep }));
        }
      } catch (ex) {
        return new Response(JSON.stringify({ error: ex.message }));
      }
    case "remoper":
      vals = [q.abonent ? q.abonent : q.em, q.em, q.abonent ? q.abonent : "", q.psw];
      sql = "SELECT *, (SELECT users FROM users WHERE operator=?) as users FROM  operators as oper WHERE oper.operator=?  AND abonent=? AND psw=?";
      try {
        [rows, fields] = await pool.query(sql, vals);
        let usrs = [];
        if (rows[0]) {
          usrs = rows[0].users;
          let dep = _.find(usrs, { "id": q.dep });
          let ind = _.findIndex(dep.staff, { id: q.id });
          dep.staff.splice(ind, 1);
          vals = [JSON.stringify(usrs), q.em, q.abonent || q.em];
          sql = "UPDATE users SET users=?, last=CURRENT_TIMESTAMP(), editor=? WHERE  operator=?";
          [rows, fields] = await pool.query(sql, vals);
          return new Response(JSON.stringify({ func: q.func, dep }));
        }
      } catch (ex) {
        return new Response(JSON.stringify({ error: ex.message }));
      }
    case "adddep":
      vals = [q.abonent ? q.abonent : q.em, q.em, q.abonent, q.psw];
      sql = "SELECT *, (SELECT users FROM users WHERE operator=?) as users FROM  operators as oper WHERE oper.operator=?  AND abonent=? AND psw=?";
      try {
        [rows, fields] = await pool.query(sql, vals);
        let users2 = [];
        if (rows[0]) {
          users2 = rows[0].users;
          let ind = _.findIndex(users2, { "id": String(q.id) });
          if (ind === -1)
            return;
          users2[q.id + 1] = {
            "id": String(q.id + 1),
            "alias": "",
            "admin": { "desc": "", "name": "", "role": "admin", "email": "", "picture": { "medium": "./src/routes/assets/operator.svg" } },
            "staff": []
          };
          vals = [JSON.stringify(users2), q.em, q.abonent || q.em];
          sql = "UPDATE users SET users=?, last=CURRENT_TIMESTAMP(), editor=? WHERE  operator=?";
          [rows, fields] = await pool.query(sql, vals);
          return new Response(JSON.stringify({ func: q.func, dep: users2[q.id + 1] }));
        }
      } catch (ex) {
        return new Response(JSON.stringify({ error: ex.message }));
      }
    case "changedep":
      vals = [q.abonent, q.em, q.psw];
      sql = "SELECT users FROM operators as oper, users as usr WHERE usr.operator=oper.abonent AND oper.abonent=? AND oper.operator=? AND oper.psw=?";
      try {
        [rows, fields] = await pool.query(sql, vals);
        if (rows[0]) {
          let users2 = rows[0].users;
          let ind = _.findIndex(users2, { "id": String(q.dep.id) });
          if (ind === -1)
            return;
          users2[ind] = q.dep;
          vals = [JSON.stringify(users2), q.em, q.abonent || q.em];
          sql = "UPDATE users SET users=?, last=CURRENT_TIMESTAMP(), editor=? WHERE  operator=? ";
          [rows, fields] = await pool.query(sql, vals);
          return new Response(JSON.stringify({ dep: users2[ind], fields, err }));
        }
      } catch (ex) {
        return new Response(JSON.stringify({ error: ex.message }));
      }
    case "remdep":
      vals = [q.em, q.psw];
      let query = "SELECT users FROM operators as oper, users as usr WHERE usr.operator=oper.abonent AND oper.operator=? AND oper.psw=?";
      try {
        [rows, fields] = await pool.query(query, vals);
        if (rows[0]) {
          let users2 = rows[0].users;
          _.remove(users2, (n) => {
            return n.id === q.dep;
          });
          vals = [JSON.stringify(users2), q.em, q.abonent || q.em];
          query = "UPDATE users SET users=?, last=CURRENT_TIMESTAMP(), editor=? WHERE  operator=? ";
          [rows, fields] = await pool.query(query, vals);
          return new Response(JSON.stringify({ users: users2, fields, err }));
        }
      } catch (ex) {
        return new Response(JSON.stringify({ error: ex.message }));
      }
    case "tarif":
      let tarif = tarifs[q.tarif];
      let users = [
        {
          "id": "0",
          "admin": {
            "desc": "Admin of admins",
            "name": "",
            "alias": "",
            "role": "admin",
            "email": q.em,
            "picture": {
              "medium": "./src/routes/assets/operator.svg"
            }
          },
          "staff": []
        }
      ];
      let paid = moment().add(tarif.trial, "days").format("YYYY-MM-DD");
      let start = moment().format("YYYY-MM-DD");
      vals = [q.tarif, start, paid, q.em, q.psw, JSON.stringify(users)];
      sql = "call ADD_NEW_TARIF(?,?,?,?,?,?)";
      [rows, fields] = await pool.query(sql, vals);
      return new Response(JSON.stringify({ rows, fields, err }));
  }
}
function SendEmail(q, new_email) {
  let em = new Email();
  const abonent = q.abonent ? "&abonent=" + q.abonent : "";
  const mail = q.send_mail || new_email;
  const hash = stringHash(mail);
  let text = { ru: "<h1>\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u0442\u044C\u0441\u044F \u043A \u0441\u0435\u0442\u0438</h1></a>", en: "<h1>Join network</h1></a>", fr: "<h1>Rejoindre le r\xE9seau</h1></a>" }[q.lang];
  let html = "<div><a href='http://nedol.ru/kolmit/site/operator.html?operator=" + (q.send_mail || new_email) + abonent + "&hash=" + hash + "'>" + text + "</a></div>";
  em.SendMail(
    "nedol.kolmit@gmail.com",
    q.send_mail || new_email,
    {
      ru: "\u041D\u043E\u0432\u044B\u0439 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0442\u0438 \u041A\u043E\u043B\u043C\u0438",
      en: "New Kolmi network operator",
      fr: "Le nouvel op\xE9rateur de Kolmi"
    }[q.lang],
    html,
    (result) => {
      console.log();
    }
  );
}
function GET({ url }) {
  const min = Number(url.searchParams.get("min") ?? "0");
  const max = Number(url.searchParams.get("max") ?? "1");
  const d = max - min;
  if (isNaN(d) || d < 0) {
    throw error(400, "min and max must be numbers, and min must be less than max");
  }
  const random = min + Math.random() * d;
  return new Response(String(random));
}
export {
  GET,
  POST
};
//# sourceMappingURL=_server-VIUTDLXR.js.map
