require("dotenv").config();

// app
const app = require("./middleware/middleware.js").app;

const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

// routes
app.use(userRoutes);
app.use(authRoutes);

// port
app.listen(process.env.PORT, () =>
  console.log("server running on port " + process.env.PORT)
);
