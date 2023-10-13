import {
  Model,
  Column,
  Table,
  HasMany,
  HasOne,
  Unique,
  NotNull,
  AllowNull,
  IsEmail,
  ValidationFailed,
} from "sequelize-typescript";
import { DailyTask } from "../dailyTasks/dailyTasks";
import { UserBank } from "./usersBanks";
import { UserPet } from "./usersPets";
import { Folder } from "../tasks/folders";
import {
  UniqueConstraintError,
  UnknownConstraintError,
  ValidationError,
} from "sequelize";

@Table
export class User extends Model<User> {
  @Unique(true)
  @AllowNull(false)
  @IsEmail // для будущей валидации модели на уровне её создания
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

  @HasMany(() => Folder)
  folders?: Folder[];

  @HasMany(() => DailyTask)
  dailyTasks?: DailyTask[];

  @HasOne(() => UserBank)
  userBank!: UserBank;

  @HasMany(() => UserPet)
  userPets?: UserPet[];

  @ValidationFailed // для будущей валидации модели на уровне её создания
  static validationFailedHook(instance: User, options: any, error: any) {
    console.log(error.message);
  }
}
