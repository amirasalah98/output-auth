const User= require('../models/User')
const bcrypt= require('bcrypt')
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const dotenv= require("dotenv")
dotenv.config();

exports.signupAuth = async (req, res) => {
  console.log("SIGNUP HIT");
console.log("BODY:", req.body);
  // Validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
       message: errors.array()[0].msg,
  type: "validation" 
});
  }
  const { name, email, password } = req.body;
  
  try {
    // Check if user exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: 'Email already exists',
       type: 'email' });
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // Create user
    user = new User({ name, email, password: hashedPassword });
    await user.save();
    // Create JWT token
    const payload = { user: { id: user.id } };
    jwt.sign(payload, process.env.jwtSecret, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token, message: 'Registered successfully' });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};
exports.loginAuth = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array()[0].msg });
  }

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const payload = { user: { id: user.id } };

    jwt.sign(payload, process.env.jwtSecret, { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;

      res.json({
        token,
        message: "Login successful",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role || "user"
        }
      });
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};