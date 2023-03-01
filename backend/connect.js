import mysql from "mysql";

export const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.ROOT_PASSWORD,
  database: process.env.DB_NAME,
});
