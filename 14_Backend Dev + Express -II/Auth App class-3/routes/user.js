const express = require("express");
const router = express.Router();
const User = require("../Models/User");

const { signup } = require("../Controller/Auth1");
const { login } = require("../Controller/Auth2");
const { auth, isAdmin, isStudent } = require("../middleware/auth");

router.post("/signup", signup);
router.post("/login", login);

// Testing Route for single Middleware - dummy
router.get("/test", auth, (req, res) => {
  res.json({
    success: true,
    message: "Test successful",
  });
});

// Protected Route for Student
router.get("/student", auth, isStudent, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Protected Route for Student",
  });
});

// Protected Route for Admin
router.get("/admin", auth, isAdmin, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Protected Route for Admin",
  });
});

router.get("/getEmail", auth, async (req, res) => {
  try {
    const id = req.user.id;
    // const user =await User.findOne({ id });
    const user = await User.findById(id);
    console.log("id", id, user);

    res.status(200).json({
      success: true,
      user: user,
      message: "welcome to email route ",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "email route crashed ",
    });
  }
  // const id = req.user.id;
  // console.log("ID: " + id);
  // res.json({
  //   success: true,
  //   id: id,
  //   message: "Email: " + req.user.email,
  // });
});

module.exports = router;
