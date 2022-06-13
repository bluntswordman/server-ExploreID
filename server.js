require('dotenv').config();
const express = require('express');
const cookieParser = require("cookie-parser");
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const db = require('./models');
const routerLocation = require('./routes/location');
const routerUser = require('./routes/user');
const routerToken = require('./routes/token');
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors(
  {
    origin: "http://localhost:3000",
    credentials: true,
  }
));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/v1/images', express.static(path.join(__dirname, 'images')));
app.use('/v1/user', routerUser);
app.use('/v1/location', routerLocation);
app.use('/v1/token', routerToken);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
});
