import {
  Model,
  Column,
  Table,
  BelongsTo,
  ForeignKey,
  Max,
  Min,
  Default,
  HasMany,
} from "sequelize-typescript";
import { Food } from "./Food";

@Table
export class FoodType extends Model<FoodType> {
  @Column
  name!: string;

  @Column
  nourishmentValue!: number;

  @HasMany(() => Food)
  foods?: Food[];
}
