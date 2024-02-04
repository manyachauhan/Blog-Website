import mysql from "mysql";


export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password: "mansi123",
  database:"blog"
})