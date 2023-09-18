import { DataType } from "sequelize-typescript";
import sequelize from "../db";

export const user = sequelize.define("User", {
  // Model attributes are defined here
  email: { type: DataType.STRING },
  login: { type: DataType.STRING },
  passwordEncrypted: { type: DataType.STRING },
  name: { type: DataType.STRING },
  money: { type: DataType.INTEGER },
  diamonds: { type: DataType.INTEGER },
});

