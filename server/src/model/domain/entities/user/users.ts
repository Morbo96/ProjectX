import {
  Model,
  Column,
  Table,
  HasMany,
  HasOne,
  Unique,
  NotNull,
  AllowNull,
} from "sequelize-typescript";
import { DailyTask } from "../dailyTasks/dailyTasks";
import { UserBank } from "./usersBanks";
import { UserPet } from "./usersPets";
import { Folder } from "../tasks/folders";

@Table
export class User extends Model<User> {
  @Unique(true)
  @AllowNull(false)
  @Column
  email!: string;

  @Unique(true)
  @AllowNull(false)
  @Column
  login!: string;

  @AllowNull(false)
  @Column
  passwordEncrypted!: string;

  @Column
  name!: string;

  @Column
  refreshToken!: string;

  @HasMany(() => Folder)
  folders?: Folder[];

  @HasMany(() => DailyTask)
  dailyTasks?: DailyTask[];

  @HasOne(() => UserBank)
  userBank!: UserBank;

  @HasMany(() => UserPet)
  userPets?: UserPet[];
}
