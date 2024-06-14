import {
  Model,
  Column,
  Table,
  BelongsTo,
  ForeignKey,
  Max,
  Min,
  Default,
  BelongsToMany,
} from "sequelize-typescript";
import { User } from "./users";
import { CustomizationType } from "../addition/CustomizationType";
import { PetCustomization } from "../addition/PetCustomization";

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

  @BelongsToMany(() => CustomizationType, () => PetCustomization)
  customizationTypes!: Array<
    CustomizationType & { PetCustomization: PetCustomization }
  >;
}
