const {
  createLocation, 
  updateLocation, 
  getAllLocations, 
  deleteLocation,
  getLocationById,
  getThreeRandomLocations
} = require('../controllers/location-controller');
const express = require('express');
const router = express.Router();

router.post('/', createLocation);
router.put('/:id', updateLocation);
router.get('/', getAllLocations);
router.get('/random', getThreeRandomLocations);
router.get('/:id', getLocationById);
router.delete('/:id', deleteLocation);

module.exports = router;