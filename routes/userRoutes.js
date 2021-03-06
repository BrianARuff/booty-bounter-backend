const router = require("../middleware/middleware").router;
const sql = require("../db/db.js");

router.get("/users", (req, res) => {
  try {
    const usersList = async () => await sql`select * from users;`;
    usersList()
      .then((users) => {
        // ***TESTING LOG*** console.log(users);
        return res.json(users);
      })
      .catch((error) => {
        console.log("***Error getting users @ /users***\n", error);
        return res.json(error);
      });
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
});

// Create New Account
router.post("/users", (req, res) => {
  const user = req.body;
  user.timestamp = new Date();
  console.log("Requst Body", user);
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
    newUser()
      .then((userAdded) => {
        const newUserObj = async () =>
          await sql`
          select * from users where username = ${user.username};
        `;
        newUserObj()
          .then((user) => {
            console.log("***USER ADDED***\n", user[0]);
            return res.json(user[0]);
          })
          .catch((error) => {
            console.log("***ERROR FETCHING USER***\n", error);
            res.json(error);
          });
      })
      .catch((error) => {
        console.log("***Error POSTING NEW USER***\n", error);
        return res.json(error);
      });
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
});

module.exports = router;
