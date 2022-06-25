const {
  createLocation, 
  updateLocation, 
  getAllLocations, 
  deleteLocation,
  getLocationById,
  getRandomLocation ,
  getAllLocationsByUserId
} = require('../controllers/location-controller');
const verifyToken  = require('../middleware/verifyToken');
const multer = require('multer');
const path = require('path');
const express = require('express');
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './images');
  },
  filename: (req, file, cb) => {
    cb(
      null,
      path.parse(file.originalname).name + '-' + Date.now() + path.extname(file.originalname)
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

// router.post('/', verifyToken, upload.single('photo'), async (req, res) => {
//   console.log(req.file.path);
// });

router.post('/', verifyToken, upload.single('photo'), createLocation);

router.get('/', getAllLocations);
router.get('/random', getRandomLocation);
router.get('/locself/:userId', getAllLocationsByUserId);
router.get('/:id', getLocationById);
router.put('/:id', verifyToken, updateLocation);
router.delete('/:id', deleteLocation);

module.exports = router;