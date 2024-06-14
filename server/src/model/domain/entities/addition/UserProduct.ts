import { Model, Column, Table, ForeignKey } from "sequelize-typescript";
import { User } from "../user/users";
import { Product } from "./Product";

@Table({ underscored: true })
export class UserProduct extends Model<UserProduct> {
  @ForeignKey(() => User)
  @Column
  userId!: number;

  @ForeignKey(() => Product)
  @Column
  productId!: number;
}
