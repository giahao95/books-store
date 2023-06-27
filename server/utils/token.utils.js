const jwt = require('jsonwebtoken');
require('dotenv').config();

const createAccessToken = (id) => {
  try {
    const accessToken = jwt.sign({ _id: id }, process.env.SECRET_ACCESS, {
      expiresIn: process.env.EXPIRES_ACCESS,
    });
    return accessToken;
  } catch (error) {
    throw new Error('Tạo access token thất bại');
  }
};

const createRefreshToken = (id) => {
  try {
    const refreshToken = jwt.sign({ _id: id }, process.env.SECRET_REFRESH, {
      expiresIn: process.env.EXPIRES_REFRESH,
    });
    return refreshToken;
  } catch (error) {
    throw new Error('Tạo refresh token thất bại');
  }
};

module.exports = { createAccessToken, createRefreshToken };
