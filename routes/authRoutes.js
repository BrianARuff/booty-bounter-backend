const router = require("../middleware/middleware").router;
const { json } = require("body-parser");
const sql = require("../db/db.js");

router.get("/auth/:username", (req, res) => {
  const fetchUser = async () =>
    await sql`select * from users where username = ${req.params.username}`;
  fetchUser()
    .then((user) => {
      const response = user[0] ? true : false;
      res.json(response);
    })
    .catch((err) => res.json("***ERROR FETCHING USER AUTH***", err));
});

module.exports = router;
