const asyncHandler = require("../middleware/asyncHandler");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//        Register user
exports.register = asyncHandler(async (req, res) => {
  let { fullName, email, password } = req.body;

  //      Required Fields Check
  if (
    !fullName?.trim() ||
    // !lastName?.trim() ||
    !email?.trim() ||
    !password?.trim()
  ) {
    const error = new Error("All fields are required!");
    error.statusCode = 400;
    throw error;
  }

  //      Input Sanitize
  fullName = fullName.trim();
  // lastName = lastName.trim();
  email = email.trim().toLowerCase();
  password = password.trim();

  //      Email Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email && !emailRegex.test(email)) {
    const error = new Error("Invalid email");
    error.statusCode = 400;
    throw error;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  let user;
  try {
    user = await User.create({
      fullName,
      // lastName,
      email,
      password: hashedPassword,
    });
  } catch (err) {
    if (err.code === 11000) {
      const error = new Error("Email already exists");
      error.statusCode = 400;
      throw error;
    }
    throw err;
  }
  res.status(201).json({
    success: true,
    message: "User created",
    user: {
      id: user._id,
      email: user.email,
    },
  });
});

//        Login user

exports.loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    const error = new Error("Email and Password is required!");
    error.statusCode = 400;
    throw error;
  }

  const user = await User.findOne({ email: email.toLowerCase().trim() }).select(
    "password role",
  );

  if (!user) {
    const error = new Error("User Not Found!");
    error.statusCode = 404;
    throw error;
  }

  const isMatched = await bcrypt.compare(password, user.password);

  if (!isMatched) {
    const error = new Error("Invalid credentials!");
    error.statusCode = 401;
    throw error;
  }

  const token = await jwt.sign(
    { id: user._id, role: user.role },
    process.env.ACCESS_TOKEN,
    {
      expiresIn: "15m",
    },
  );

  const refreshToken = await jwt.sign(
    { id: user._id },
    process.env.REFRESH_TOKEN,
    { expiresIn: "7d" },
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
    maxAge: 15 * 60 * 1000,
  });

  res.status(200).json({
    success: true,
    message: "login successfully!",
  });
});

//        Logout user

exports.logoutUser = asyncHandler(async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  });

  res.json({
    success: true,
    message: "Logged out",
  });
});

//        veriy user
exports.getMe = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
});
