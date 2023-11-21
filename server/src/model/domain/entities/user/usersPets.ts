import {
  Model,
  Column,
  Table,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import { User } from "./users";

@Table
export class UserPet extends Model<UserPet> {
  @Column
  name!: string;

  @Column
  hunger!: number;

  @Column
  energy!: number;

  @ForeignKey(() => User)
  @Column
  userId!: number;

  @BelongsTo(() => User, { onDelete: "cascade" })
  user!: User;
}
