require('dotenv').config();
const express = require('express');
const cookieParser = require("cookie-parser");
const cors = require('cors');
const path = require('path');

const db = require('./models');
const routerLocation = require('./routes/location');
const routerUser = require('./routes/user');
// const multer = require('./controllers/image-upload');
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors(
  {
    origin: "http://localhost:3000",
    credentials: true,
  }
));
// app.use(multer.single('images'));
app.use(cookieParser());

// app.use('/v1/images', express.static(path.resolve(__dirname, 'images')));
app.use('/v1/user', routerUser);
app.use('/v1/location', routerLocation);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
});
