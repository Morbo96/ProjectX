import { Model, Column, Table, Min, HasMany } from "sequelize-typescript";
import { Product } from "./Product";

@Table({ underscored: true })
export class ProductType extends Model<ProductType> {
  @Column
  name!: string;

  @Min(0)
  @Column
  price!: number;

  @HasMany(() => Product)
  products?: Product[];
}
