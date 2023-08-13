import mysql from "mysql2/promise";
const pool = mysql.createPool({
  connectionLimit: 100,
  host: "193.200.74.37",
  user: "nedol_kolmit",
  password: "Nissan@386",
  database: "nedol_kolmit"
});
export {
  pool as p
};
