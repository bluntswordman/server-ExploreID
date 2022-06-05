const express = require('express');
const router = express.Router();
const { userRegister, userLogin, getUserbyId, logOut } = require('../controllers/user-controller');
const refreshToken = require('../controllers/refresh-token');
const verifyToken  = require('../middleware/verifyToken');

router.post('/', userRegister);
router.post('/login', userLogin);
router.get('/:id', verifyToken, getUserbyId);
router.delete('/logout', verifyToken, logOut);

router.get('/token/access', refreshToken);

module.exports = router;