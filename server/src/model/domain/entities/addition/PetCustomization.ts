import { Model, Column, Table, ForeignKey } from "sequelize-typescript";
import { CustomizationType } from "./CustomizationType";
import { UserPet } from "../user/usersPets";

@Table({ underscored: true })
export class PetCustomization extends Model<PetCustomization> {
  @ForeignKey(() => CustomizationType)
  @Column
  customizationTypeId!: number;

  @ForeignKey(() => UserPet)
  @Column
  userPetIt!: number;
}
