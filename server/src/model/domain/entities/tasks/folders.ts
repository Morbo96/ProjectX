import { Model, Column,Table,BelongsTo, ForeignKey, HasMany } from "sequelize-typescript";
import { User } from "../user/users";
import { Goal } from "./goals";

@Table

export class Folder extends Model<Folder> {

  @Column
  name!:string;

  @Column
  isSystem!:boolean;

  @ForeignKey(()=>User)
  @Column
  userId!:number;

  @BelongsTo(()=>User)
  user!:User;

  @HasMany(()=>Goal)
  goals?:Goal[]

}

