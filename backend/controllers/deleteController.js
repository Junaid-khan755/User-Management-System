const asyncHandler = require("../middleware/asyncHandler");
const User = require("../models/User");

const deleteController = asyncHandler(async (req, res) => {
  // console.log("delete Controller Hit");
  if (req.user.id !== req.params.id && req.user.role !== "admin") {
    const error = new Error("Action denied!");
    error.statusCode = 403;
    throw error;
  }

  const user = await User.findByIdAndDelete(req.params.id);

  if (!user) {
    const error = new Error("User Not Found!");
    error.statusCode = 404;
    throw error;
  }

  res.status(200).json({
    success: true,
    message: "User Deleted!",
  });
});

module.exports = deleteController;
