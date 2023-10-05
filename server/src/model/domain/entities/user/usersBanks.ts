import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "./users";

@Table

export class UserBank extends Model<UserBank> {

  @Column
  money!:number;

  @Column
  diamonds!:number;

  @ForeignKey(()=>User)
  @Column
  userId!:number;

  @BelongsTo(()=>User)
  user!:User;

}

