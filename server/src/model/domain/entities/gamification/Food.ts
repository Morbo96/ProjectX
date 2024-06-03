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
  HasMany,
  BelongsToMany,
} from "sequelize-typescript";
import { UserFood } from "./UserFood";
import { User } from "../user/users";

@Table({ underscored: true })
export class Food extends Model<Food> {
  @Column
  name!: string;

  @Min(0)
  @Max(100)
  @Column
  nourishmentValue!: number;

  @Min(0)
  @Column
  cost!: number;

  @BelongsToMany(() => User, () => UserFood)
  users!: Array<User & { UserFood: UserFood }>;
}
