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
} from "sequelize-typescript";
import { FoodType } from "./FoodType";

@Table
export class Food extends Model<Food> {
  @Column
  name!: string;

  @ForeignKey(() => FoodType)
  @Column
  foodTypeId!: number;

  @BelongsTo(() => FoodType, { onDelete: "cascade" })
  foodType!: FoodType;
}
