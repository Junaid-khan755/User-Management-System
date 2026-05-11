  require("dotenv").config();
  const app = require("./app");
  const connectDB = require("./config/DB");

  const port = process.env.PORT;

  connectDB();

  app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`);
  });
