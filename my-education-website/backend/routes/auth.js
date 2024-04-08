const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { userId, password } = req.body;
    const user = await User.findOne({ userId }).exec();

    if (!user) {
      return res.status(401).json({ message: 'Authentication failed: User not found.' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Authentication failed: Incorrect password.' });
    }

    const token = jwt.sign(
      {
        userId: user._id, 
        username: user.username 
      },
      process.env.JWT_SECRET, 
      { expiresIn: '1h' } 
    );

    res.json({
      message: 'Authentication successful!',
      token: token
    });

  } catch (error) {
    res.status(500).json({ message: 'Internal server error.' });
  }
});

module.exports = router;
