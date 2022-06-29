const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const { userRegister, userLogin, getUserbyId, logOut, updateUser, updateUserProfileImage } = require('../controllers/user-controller');
const verifyToken  = require('../middleware/verifyToken');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './images/profile');
  },
  filename: (req, file, cb) => {
    cb(
      null,
      'userphoto' + '-' + path.parse(file.originalname).name + '-' + Date.now() + path.extname(file.originalname)
    )
  },
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype) {
      return cb(null, true);
    }
    cb('Error: Images only!');
  }
});

const upload = multer({ storage: storage });

router.post('/', userRegister);
router.post('/login', userLogin);
router.put('/updateimage/:id', verifyToken, upload.single('images'), updateUserProfileImage);
router.put('/:id', verifyToken, updateUser);
router.get('/:id', verifyToken, getUserbyId);
router.delete('/logout', verifyToken, logOut);

module.exports = router;