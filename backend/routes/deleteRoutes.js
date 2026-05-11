const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminOnly");
const deleteController = require("../controllers/deleteController");
const router = express.Router();

router.delete("/delete/:id", authMiddleware, deleteController);

module.exports = router;
