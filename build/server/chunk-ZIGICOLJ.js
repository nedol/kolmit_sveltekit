// .svelte-kit/adapter-node/chunks/mysql.js
import mysql from "mysql2/promise";
var pool = mysql.createPool({
  connectionLimit: 100,
  host: "193.200.74.37",
  user: "nedol_kolmit",
  password: "Nissan@386",
  database: "nedol_kolmit"
});

export {
  pool
};
//# sourceMappingURL=chunk-ZIGICOLJ.js.map
