const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  register,
  loginUser,
  logoutUser,
  getMe,
} = require("../controllers/authController");
const { getUsers, myProfile } = require("../controllers/userController");

// console.log("authRoutes loaded");
// console.log("register =", register);
router.post("/register", register);
router.post("/login", loginUser);
router.get("/me", authMiddleware, getMe);
router.post("/logout", authMiddleware, logoutUser);
// router.get("/profile", authMiddleware, myProfile);
// router.get("/", authMiddleware, getUsers);
router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({
    success: true,
    message: "Authorized user",
    user: req.user,
  });
});

module.exports = router;
