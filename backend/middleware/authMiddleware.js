const jwt = require("jsonwebtoken");
const asyncHandler = require("./asyncHandler");
const User = require("../models/User");

// const authMiddleware = async (req, res, next) => {
//   try {
//     const header = req.headers.authorization;

//     if (!header) {
//       return res.status(401).json({ message: "No Token Provided!" });
//     }

//     const token = header.split(" ")[1];

//     const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);

//     req.user = decoded;
//     next();
//   } catch (err) {
//     res.status(401).json({ message: err.message });
//   }
// };

const authMiddleware = asyncHandler(async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    const error = new Error("No Token Provided!");
    error.statusCode = 401;
    throw error;
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
    req.user = {
      id: decoded.id,
      role: decoded.role,
    };
    next();
  } catch (err) {
    res.clearCookie("token");
    const error = new Error("Invalid Token!");
    error.statusCode = 401;
    throw error;
  }
});

module.exports = authMiddleware;
