const { Location } = require('../models');

const createLocation = async (req, res) => {
  const { title, description, lat, lng, name, userId } = req.body;
  const image = req.file.path;
    
  try {
    const location = await Location.create({
      title: title || 'Untitled',
      description: description || 'No description',
      image: image || null,
      lat: lat || 0,
      lng: lng || 0,
      name: name || 'Anonymous',
      userId: userId || 'null'
    });
    res.status(201).json({msg: 'Location created', location});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateLocation = async (req, res) => {
  const { title, description, lat, lng, name } = req.body;
  const image = req.file;

  try {
    await Location.update({
      title: title || Location.title,
      description: description || Location.description,
      image: image,
      lat: lat || Location.lat,
      lng: lng || Location.lng,
      name: name || Location.name
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
      attributes: ['id', 'title', 'description', 'image', 'lat', 'lng', 'name', 'userId'],
    });
    res.status(200).json(locations);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllLocationsByUserId = async (req, res) => {
  try {
    const locations = await Location.findAll({
      attributes: ['id', 'title', 'description', 'image', 'lat', 'lng', 'name', 'UserId'],
      where: {
        UserId: req.params.userId
      }
    });
    res.status(200).json(locations);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const getLocationById = async (req, res) => {
  try {
    const location = await Location.findOne({
      attributes: ['id', 'title', 'description', 'image', 'lat', 'lng', 'name', 'UserId'],
      where: req.params
    });
    res.status(200).json(location);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getRandomLocation = async (req, res) => {
  try {
    const locations = await Location.findAll({
      attributes: ['title', 'image', 'name', 'id'],
    });
    const randomLocation = locations.sort(() => Math.random() - 0.5).slice(0, 8);
    res.status(200).json(randomLocation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

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
  getAllLocationsByUserId,
  getRandomLocation,
  deleteLocation
};