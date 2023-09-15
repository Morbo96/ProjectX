// const { Sequelize } = require("sequelize");
// const dotenv = require("dotenv");
// import {User} from "./entities/users";
// dotenv.config();

// module.exports = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     dialect: "postgres",
//     // models: [__dirname + "/model/entities"],
//     models: [User],
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//   }
// );
import { Sequelize } from "sequelize-typescript";

import { User } from "./entities/users";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1909",
  database: "PlannerDB",
  logging: false,
  models: [User],
});

export default sequelize;
