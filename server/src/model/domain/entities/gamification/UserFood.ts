import {
  Model,
  Column,
  Table,
  BelongsTo,
  ForeignKey,
  Max,
  Min,
  Default,
  HasOne,
  PrimaryKey,
} from "sequelize-typescript";
import { User } from "../user/users";
import { Food } from "./Food";

@Table({ underscored: true })
export class UserFood extends Model<UserFood> {
  @Min(0)
  @Column
  quantity!: number;

  @ForeignKey(() => User)
  @Column
  userId!: number;

  @ForeignKey(() => Food)
  @Column
  foodId!: number;
}
