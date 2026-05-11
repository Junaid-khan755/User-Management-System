const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect(process.env.CONNECTION_STRING);
  console.log("MongoDB Connected!");
};

module.exports = connectDB;
