const postgres = require("postgres");
const sql = postgres(process.env.PSQL_STRING);

module.exports = sql;
