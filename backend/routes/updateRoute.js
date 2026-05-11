const express = require("express");
const router = express.Router();
const { updateUser } = require("../controllers/updateController");
const authMiddleware = require("../middleware/authMiddleware");

router.put("/editprofile/:id", authMiddleware, updateUser);

module.exports = router;
