// import { Table, Column, Model, DataType } from "sequelize-typescript";

// @Table
// export class User extends Model {
//   @Column(DataType.TEXT)
//   email!: string;

//   @Column(DataType.TEXT)
//   login!: string;

//   @Column(DataType.TEXT)
//   passwordEncrypted!: string;

//   @Column(DataType.TEXT)
//   name!: string;

//   @Column(DataType.INTEGER)
//   money!: number;

//   @Column(DataType.INTEGER)
//   diamonds!: number;
// }

import { DataType } from "sequelize-typescript";
import sequelize from "../db";

// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');

export const user = sequelize.define("User", {
  // Model attributes are defined here
  email: { type: DataType.STRING },
  login: { type: DataType.STRING },
  passwordEncrypted: { type: DataType.STRING },
  name: { type: DataType.STRING },
  money: { type: DataType.INTEGER },
  diamonds: { type: DataType.INTEGER },
});

// `sequelize.define` also returns the model
//console.log(user === sequelize.models.User); // true
