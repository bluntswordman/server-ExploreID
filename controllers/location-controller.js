const { Location } = require('../models');

const createLocation = async (req, res) => {
  const { author, title, description, lat, lng } = req.body;
  const image = req.file ? req.file.path : null;
  try {
    const location = await Location.create({
      author: author || 'Anonymous',
      title: title || 'Untitled',
      description: description || 'No description',
      Image: image || 'no-image.png',
      lat: lat || 0,
      lng: lng || 0
    });
    res.status(201).json({msg: 'Location created', location});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateLocation = async (req, res) => {
  const { author, title, description, image, lat, lng } = req.body;

  try {
    await Location.update({
      author: author || Location.author,
      title: title || Location.title,
      description: description || Location.description,
      Image: image,
      lat: lat || Location.lat,
      lng: lng || Location.lng
    }, {
      where: req.params
    });
    res.status(200).json({msg: 'Location updated'});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.findAll({
      attributes: ['author', 'title', 'description', 'image', 'lat', 'lng']
    });
    res.status(200).json(locations);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getLocationById = async (req, res) => {
  try {
    const location = await Location.findOne({
      attributes: ['author', 'title', 'description', 'image', 'lat', 'lng'],
      where: req.params
    });
    res.status(200).json(location);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteLocation = async (req, res) => {
  const { id } = req.params;
  try {
    await Location.destroy({
      where: { id }
    });
    res.status(200).json({msg: 'Location deleted'});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createLocation,
  updateLocation,
  getAllLocations,
  getLocationById,
  deleteLocation
};