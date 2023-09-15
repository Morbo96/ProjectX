const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

module.exports = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "postgres",
    // models: [__dirname + "/model/entities"],
    models: "./model/domain/entities",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  }
);
