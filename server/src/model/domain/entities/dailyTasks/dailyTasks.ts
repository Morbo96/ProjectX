import { Model, Column,Table,BelongsTo, ForeignKey, HasMany } from "sequelize-typescript";
import { User } from "../users";
import { DailySubtask } from "./dailySubtasks";

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

  @HasMany(()=>DailySubtask)
  dailySubtasks?:DailySubtask[]
}

