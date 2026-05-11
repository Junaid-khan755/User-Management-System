const User = require("../models/User");
const asyncHandler = require("../middleware/asyncHandler");

exports.updateUser = asyncHandler(async (req, res) => {
  const currentUserId = req.user.id;
  const targetUserId = req.params.id;

  // console.log(req.body);
  if (currentUserId !== targetUserId && req.user.role !== "admin") {
    const error = new Error("Unauthorized!");
    error.statusCode = 403;
    throw error;
  }

  let { fullName, email } = req.body; // This could lead to some fields undefined

  //      BASIC VALIDATION
  if (!fullName?.trim() || !email?.trim()) {
    const error = new Error("Please fill All the fields");
    error.statusCode = 400;
    throw error;
  }
  // fix undefined fields by using ?. optional chaining
  //  Prevents crash if field is undefined.

  // Sanitize
  fullName = fullName.trim();
  email = email.trim().toLowerCase();

  // Validate Email

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    const error = new Error("Invalid Email");
    error.statusCode = 400;
    throw error;
  }

  //  USED FOR PATCH UPDATE & HAS ANOTHER CLEARNER WAY
  // const updateData = {};
  // if (req.body.firstName) {
  //   updateData.firstName = req.body.firstName.trim();
  // }
  // if (req.body.lastName) {
  //   updateData.lastName = req.body.lastName.trim();
  // }
  // if (req.body.email) {
  //   updateData.email = req.body.email.trim();
  // }
  const updatedUser = await User.findByIdAndUpdate(
    targetUserId,
    { fullName, email },
    {
      returnDocument: "after",
    },
  );

  if (!updatedUser) {
    const error = new Error("User Not Found");
    error.statusCode = 404;
    throw error;
  }

  res.status(200).json({
    success: true,
    message: "Profile Updated!",
    user: updatedUser,
  });
});
