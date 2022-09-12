import {
  pool
} from "./chunk-ZIGICOLJ.js";
import {
  __export
} from "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/website/login/_page.server.js
var page_server_exports = {};
__export(page_server_exports, {
  POST: () => POST
});
import md5 from "md5";
import "mysql2/promise";
async function POST({ request, setHeaders, url }) {
  const values = await request.formData();
  const email = values.get("email");
  const psw = values.get("password");
  const lang = values.get("lang");
  const vals = [md5(psw), email, email];
  const sql = "SELECT * FROM operators WHERE psw=? AND operator=? AND abonent=?";
  try {
    const pr = pool.execute(sql, vals);
    const [rows, fields] = await pr;
    console.log(psw);
    let path = "/operator?operator=" + email + "&abonent=" + email;
    return {
      status: 403,
      location: url.searchParams.get("redirectTo") ?? path,
      errors: {
        username: "No user with this username"
      }
    };
    const session = md5(email);
    setHeaders({
      "set-cookie": email + "=" + JSON.stringify({ session, email, abonent: email, psw: md5(psw), lang })
    });
    return {
      location: url.searchParams.get("redirectTo") ?? path
    };
  } catch (ex) {
  }
}

// .svelte-kit/adapter-node/nodes/8.js
var index = 8;
var imports = [];
var stylesheets = [];
export {
  imports,
  index,
  page_server_exports as server,
  stylesheets
};
//# sourceMappingURL=8-JSLMYRKN.js.map
