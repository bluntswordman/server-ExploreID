const express = require('express');
const router = express.Router();
const { userRegister, userLogin, getUserbyId, logOut, updateUser } = require('../controllers/user-controller');
const verifyToken  = require('../middleware/verifyToken');

router.post('/', userRegister);
router.post('/login', userLogin);
router.put('/:id', verifyToken, updateUser);
router.get('/:id', verifyToken, getUserbyId);
router.delete('/logout', verifyToken, logOut);

module.exports = router;