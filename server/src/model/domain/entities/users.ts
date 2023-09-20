import { Model, Column,Table, HasMany } from "sequelize-typescript";
import { DailyTask } from "./dailyTasks";

@Table

export class User extends Model<User> {

  @Column
  email!:string;

  @Column
  login!:string

  @Column
  passwordEncrypted!:string

  @Column
  name!:string

  @HasMany(()=> DailyTask)
  dailyTasks?:DailyTask[];
}
