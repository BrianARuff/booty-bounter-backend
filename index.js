require("dotenv").config();

// app
const app = require("./middleware/middleware.js");

const userRoutes = require("./routes/userRoutes/userRoutes");

// routes
app.use("/users", userRoutes);

// port
app.listen(4000, () => console.log("server running on port 4000"));
