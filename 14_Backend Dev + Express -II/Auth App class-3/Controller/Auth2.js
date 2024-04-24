const bcrypt = require("bcrypt");
const User = require("../Models/User");
const jwt = require("jsonwebtoken");

require("dotenv").config();

// Login
exports.login = async (req, res) => {
  try {
    // fetch data from req.body
    const { email, password } = req.body;
    // validate on email & password
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the details carefully",
      });
    }

    // check for register user
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User does not exist",
      });
    }

    // Verify password & generate a JWT token

    const payload = {
      email: user.email,
      id: user._id,
      role: user.role,
    };

    // hashed password in user - user.password
    if (await bcrypt.compare(password, user.password)) {
      // password match
      let token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });

      user = user.toObject();
      user.token = token;
      user.password = undefined; // removing password from user object

      // options for cookie
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days
        httpOnly: true, // not accessible by client side js
      };

      // Cookie
      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: "User logged in successfully",
      });
      // res.status(200).json({
      //   success: true,
      //   token,
      //   user,
      //   message: "User logged in successfully",
      // });
    } else {
      // password not match
      return res.status(403).json({
        success: false,
        message: "Password does not match",
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Login false",
    });
  }
};
