"use strict";
// const { Sequelize } = require("sequelize");
// const dotenv = require("dotenv");
// import { User } from "./entities/users";
// dotenv.config();
Object.defineProperty(exports, "__esModule", { value: true });
// // module.exports = new Sequelize(
// export const sequelize = new Sequelize(
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
const sequelize_typescript_1 = require("sequelize-typescript");
//import { User } from "./entities/users";
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin123",
    database: "planner_db",
    logging: false,
    //models: [User],
});
exports.default = sequelize;
