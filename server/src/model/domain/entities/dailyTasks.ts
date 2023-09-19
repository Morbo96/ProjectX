import { Model, Column,Table,BelongsTo, ForeignKey } from "sequelize-typescript";
import { User } from "./users";

@Table

export class DailyTask extends Model<DailyTask> {

  @Column
  name!:string;

  @Column
  icon!:string;

  @ForeignKey(()=>User)
  @Column
  userId!:number;

  @BelongsTo(()=>User)
  user!:User;


}

