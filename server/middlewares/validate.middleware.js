const joi = require('joi');
const asyncHandler = require('express-async-handler');

const emailRegex =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const passwordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

const registerValidate = asyncHandler((req, res, next) => {
  const { fullName, email, password } = req.body;
  const schema = joi.object({
    fullName: joi.string().min(6).required(),
    email: joi.string().regex(emailRegex).required(),
    password: joi.string().regex(passwordRegex).required(),
  });

  const googleSchema = joi.object({
    fullName: joi.string().min(6).required(),
    email: joi.string().regex(emailRegex).required(),
  });

  const { error } = password
    ? schema.validate({ fullName, email, password })
    : googleSchema.validate({ fullName, email });

  if (error) {
    res.status(400);
    throw new Error(`${error.details[0].message}`);
  } else {
    next();
  }
});

module.exports = { registerValidate };
