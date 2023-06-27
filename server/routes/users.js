var express = require('express');
const {
  registerUser,
  loginUser,
  getUserProfile,
} = require('../controllers/user.controller');
const { registerValidate } = require('../middlewares/validate.middleware');
const { protect } = require('../middlewares/auth.middleware');
var router = express.Router();

// REGISTER USER
router.post('/register', registerValidate, registerUser);

// LOGIN USER
router.post('/login', loginUser);

// GET USER INFO
router.get('/profile', protect, getUserProfile);

module.exports = router;
