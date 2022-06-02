require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const db = require('./models');
const router = require('./routes/location');
const multer = require('./controllers/image-upload');
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(multer.single('image'));

app.use('v1/images', express.static(path.resolve(__dirname, 'images')));
app.use('/v1/location', router);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
});
