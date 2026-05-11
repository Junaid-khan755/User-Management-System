const asyncHandler = require("../middleware/asyncHandler");
const User = require("../models/User");

exports.getUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("fullName email role _id");

  if (users.length === 0) {
    const error = new Error("No user Found!");
    error.statusCode = 404;
    throw error;
  }

  const totalUsers = await User.countDocuments();
  const countAdmins = await User.countDocuments({ role: "admin" });
  const activeUsers = await User.countDocuments({ isActive: true });
  // console.log(users, totalUsers);
  res.status(200).json({
    loggedInUser: req.user,
    users,
    totalUsers,
    countAdmins,
    totalActiveUsers: activeUsers,
  });
});

exports.myProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id).select(
    "fullName email _id role",
  );
  // console.log(user);
  res.status(200).json({
    _id: user._id,
    fullName: user.fullName,
    email: user.email,
    role: user.role,
  });
});

exports.getSingleUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("fullName email role");

  if (!user) {
    const error = new Error("User Not Found!");
    error.statusCode = 404;
    throw error;
  }
  res.status(200).json({
    success: true,
    user,
  });
});
