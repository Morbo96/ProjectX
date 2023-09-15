// import { Optional } from 'sequelize';
// import { Table, Model } from 'sequelize-typescript';

// interface UserAttributes {
//   id: number;
//   login:string;
//   passwordEncrypted:string;
//   email:string;
//   name: string;
// }

// interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

// @Table
// class User extends Model<UserAttributes, UserCreationAttributes> {}
import {
  Table,
  Column,
  Model,
  HasMany,
  DataType,
  PrimaryKey,
  AutoIncrement,
} from "sequelize-typescript";

@Table
export class User extends Model<User> {
  
  @Column(DataType.TEXT)
  email!: string;

  @Column(DataType.TEXT)
  login!: string;

  @Column(DataType.TEXT)
  passwordEncrypted!: string;

  @Column(DataType.TEXT)
  name!: string;

  @Column(DataType.INTEGER)
  money!: number;

  @Column(DataType.INTEGER)
  diamonds!: number;
}
