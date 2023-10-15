import { BelongsTo, Column, Default, ForeignKey, Min, Model, Table } from "sequelize-typescript";
import { User } from "./users";

@Table

export class UserBank extends Model<UserBank> {

  @Default(0)
  @Min(0)
  @Column
  money!:number;

  @Default(0)
  @Min(0)
  @Column
  diamonds!:number;

  @ForeignKey(()=>User)
  @Column
  userId!:number;

  @BelongsTo(()=>User,{onDelete: 'cascade'})
  user!:User;

}

