const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const userModel = require('../models/user.model');
require('dotenv').config();

const protect = asyncHandler(async (req, res, next) => {
  const accessToken = req.cookies.ac_token;
  try {
    const { _id } = jwt.verify(accessToken, process.env.SECRET_ACCESS);
    const user = await userModel.findById(_id).select('-password');
    req.user = user;
    next();
  } catch (error) {
    res.status(401);
    throw new Error('Token invalid');
  }
});

module.exports = { protect };
