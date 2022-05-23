import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./src/config/Database.js";
import router from "./src/routes/index.js";

dotenv.config();

const app = express();
const port = 5500;

try {
  await db.authenticate();
  console.log('Database Connected');
} catch (error) {
  console.log(error);
}

app.use(cors({
  Credential: true,
  origin: 'http://localhost:3000'
}));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})