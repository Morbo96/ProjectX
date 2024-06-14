import { Model, Column, Table, BelongsTo } from "sequelize-typescript";
import { ProductType } from "./ProductType";

@Table({ underscored: true })
export class Product extends Model<Product> {
  @Column
  name!: string;

  @Column
  description!: string;

  @BelongsTo(() => ProductType, { onDelete: "cascade" })
  productType!: ProductType;
}
