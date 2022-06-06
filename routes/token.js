const express = require('express');
const router = express.Router();
const refreshToken = require('../controllers/refresh-token');

router.get('/access', refreshToken);

module.exports = router;
