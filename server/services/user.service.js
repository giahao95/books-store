const userModel = require('../models/user.model');
const bcrypt = require('bcryptjs');
const {
  createAccessToken,
  createRefreshToken,
} = require('../utils/token.utils');

const register = async (data) => {
  const { fullName, email, password } = data;

  try {
    const result = password
      ? await userModel.create({ fullName, email, password })
      : await userModel.create({ fullName, email });

    return result;
  } catch (error) {
    return false;
  }
};

const login = async (pass, user) => {
  const { _id, password } = user;

  if (pass && (await bcrypt.compare(pass, password))) {
    const access = createAccessToken(_id);
    const refresh = createRefreshToken(_id);
    return { access, refresh };
  }
  return false;
};

module.exports = { register, login };
