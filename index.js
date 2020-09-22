const postgres = require("postgres");
const sql = postgres("postgres://postgres:1366@localhost:5432/booty_bounter");

const express = require("express");
const app = express();

const dataCall = async function () {
  return await sql`select * from test;`;
};

app.get("/test", (req, res) => {
  return dataCall().then((result) => res.json(result));
});

app.listen(4000, () => console.log("server running on port 4000"));
