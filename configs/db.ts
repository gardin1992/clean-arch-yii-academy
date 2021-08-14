import mysql from "mysql2/promise";

// Drive do MYSQL
export const mysqlConnect = async () =>
  mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "MT@Mudar1234",
    database: "yiiDatabase",
  });
