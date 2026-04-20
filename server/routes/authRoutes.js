const express = require('express');
const router = express.Router();
const { login, getMe, initAdmin } = require('../controllers/authController');
const { protect } = require('../middleware/auth');

router.post('/login', login);
router.get('/me', protect, getMe);
router.post('/init', initAdmin); // Move to protected or remove after first use

module.exports = router;
