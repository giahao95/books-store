const asyncHandler = require('express-async-handler');
const userModel = require('../models/user.model');
const { register, login } = require('../services/user.service');

// REGISTER USER
const registerUser = asyncHandler(async (req, res) => {
  const userExists = await userModel.findOne({ email: req.body.email });
  if (userExists) {
    res.status(400);
    throw new Error('Email đã được đăng ký tài khoản');
  }

  const result = await register(req.body);
  if (result) {
    res.status(200).json({ success: true });
  } else {
    res.status(400);
    throw new Error('Tạo tài khoản thất bại');
  }
});

// LOGIN USER
const loginUser = asyncHandler(async (req, res) => {
  const userExists = await userModel.findOne({ email: req.body.email });
  if (!userExists) {
    throw new Error('Email chưa có tài khoản');
  }

  const result = await login(req.body.password, userExists);
  if (result) {
    res.cookie('ac_token', result.access, {
      httpOnly: true,
      secure: true,
      expires: new Date(Date.now() + 2 * 3600000),
    });
    res.cookie('re_token', result.refresh, {
      httpOnly: true,
      secure: true,
      expires: new Date(Date.now() + 30 * 86400000),
    });

    res.status(200).json({ success: true });
  } else {
    res.status(400);
    throw new Error('Mật khẩu không chính xác');
  }
});

// GET USER INFO
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

module.exports = { registerUser, loginUser, getUserProfile };
