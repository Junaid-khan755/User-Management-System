const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const deleteRoutes = require("./routes/deleteRoutes");
const updateRoutes = require("./routes/updateRoute");
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.json());

app.use("/users", authRoutes);
app.use("/users", userRoutes);
app.use("/users", deleteRoutes);
app.use("/users/", updateRoutes);

app.use(errorHandler);

module.exports = app;
