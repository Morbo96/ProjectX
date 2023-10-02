import { Model, Column,Table, HasMany, HasOne, Unique, NotNull, AllowNull } from "sequelize-typescript";
import { DailyTask } from "./dailyTasks/dailyTasks";
import { UserBank } from "./usersBanks";
import { UserPet } from "./usersPets";

@Table

export class User extends Model<User> {

  @AllowNull(false)
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

  @HasOne(()=>UserBank)
  userBank?:UserBank;

  @HasMany(()=> UserPet)
  userPets?:UserPet[];
}
