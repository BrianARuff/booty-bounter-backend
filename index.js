require("dotenv").config();
const postgres = require("postgres");
const sql = postgres(process.env.PSQL_STRING);

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(express.json());
app.use(cors());
app.use(helmet());

const data = async () => await sql`select * from users;`;

app.post("/test", (req, res) => {
  const user = req.body;
  console.log(user);
  try {
    const newUser = async () =>
      await sql`
      insert into users (
        username, password, dob, ow_real_id, reviewer, timestamp
      )
      values (
        ${user.username},
        ${user.password},
        ${user.dob},
        ${user.ow_real_id},
        ${user.reviewer},
        ${user.timestamp}
      );
    `;
    newUser().then((r) => console.log("New User", r));
  } catch (error) {
    console.log("error", error);
  }
});

app.get("/test", (req, res) => {
  data().then((result) => {
    console.log(result);
    return res.json(result);
  });
});

app.listen(4000, () => console.log("server running on port 4000"));
