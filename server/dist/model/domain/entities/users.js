"use strict";
// import { Table, Column, Model, DataType } from "sequelize-typescript";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
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
const sequelize_typescript_1 = require("sequelize-typescript");
const db_1 = __importDefault(require("../db"));
// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');
exports.user = db_1.default.define("User", {
    // Model attributes are defined here
    email: { type: sequelize_typescript_1.DataType.STRING },
    login: { type: sequelize_typescript_1.DataType.STRING },
    passwordEncrypted: { type: sequelize_typescript_1.DataType.STRING },
    name: { type: sequelize_typescript_1.DataType.STRING },
    money: { type: sequelize_typescript_1.DataType.INTEGER },
    diamonds: { type: sequelize_typescript_1.DataType.INTEGER },
});
// `sequelize.define` also returns the model
//console.log(user === sequelize.models.User); // true
