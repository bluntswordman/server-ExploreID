import { Sequelize } from "sequelize";

const db = new Sequelize('exploreid_db', 'root', '', {
  host: "localhost",
  dialect: "mysql"
});

export default db; 