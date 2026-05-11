const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const {
  getUsers,
  myProfile,
  getSingleUser,
} = require("../controllers/userController");

router.get("/allusers", authMiddleware, getUsers);
router.get("/profile", authMiddleware, myProfile);
router.get("/:id", authMiddleware, getSingleUser);

module.exports = router;
