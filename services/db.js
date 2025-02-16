const mysql = require("mysql2/promise");
const config = require("../config");

async function query(sql, params ) {
  let connection;
  try {
    connection = await mysql.createConnection(config.db);
    const [rows , fields] = await connection.execute(sql, params);

    return rows;
  } catch (error) {
    console.log("Error:", error);
  }
  finally{
    if (connection) await connection.end();
  }
}

module.exports = {
  query,
};
