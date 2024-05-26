import {
  Model,
  Column,
  Table,
  BelongsTo,
  ForeignKey,
  Max,
  Min,
  Default,
} from "sequelize-typescript";
import { User } from "./users";

@Table
export class UserPet extends Model<UserPet> {
  @Column
  name!: string;

  @Max(100)
  @Min(0)
  @Default(0)
  @Column
  hunger!: number;

  @Default(Date.now)
  @Column
  lastFed!: Date;

  @ForeignKey(() => User)
  @Column
  userId!: number;

  @BelongsTo(() => User, { onDelete: "cascade" })
  user!: User;
}
