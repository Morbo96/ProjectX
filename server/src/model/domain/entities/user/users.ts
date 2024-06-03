import {
  Model,
  Column,
  Table,
  HasMany,
  HasOne,
  Unique,
  AllowNull,
  IsEmail,
  BelongsToMany,
} from "sequelize-typescript";
import { DailyTask } from "../dailyTasks/dailyTasks";
import { UserBank } from "./usersBanks";
import { UserPet } from "./usersPets";
import { Folder } from "../tasks/folders";
import { UserFood } from "../gamification/UserFood";
import { Food } from "../gamification/Food";

@Table
export class User extends Model<User> {
  @Unique(true)
  @AllowNull(false)
  @IsEmail
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

  @BelongsToMany(() => Food, () => UserFood)
  foods!: Array<Food & { UserFood: UserFood }>;
}
