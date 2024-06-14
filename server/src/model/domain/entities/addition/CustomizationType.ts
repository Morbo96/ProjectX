import { Model, Column, Table, BelongsToMany } from "sequelize-typescript";
import { UserPet } from "../user/usersPets";
import { PetCustomization } from "./PetCustomization";

@Table({ underscored: true })
export class CustomizationType extends Model<CustomizationType> {
  @Column
  name!: string;

  @BelongsToMany(() => UserPet, () => PetCustomization)
  userPets!: Array<UserPet & { PetCustomization: PetCustomization }>;
}
