import { Model, Column,Table,BelongsTo, ForeignKey, HasMany } from "sequelize-typescript";
import { User } from "../user/users";
import { DailySubtask } from "./dailySubtasks";

@Table

export class DailyTask extends Model<DailyTask> {
  @Column
  name!:string;

  @Column
  icon!:string;

  @Column
  complicity!:number

  @ForeignKey(()=>User)
  @Column
  userId!:number;

  @BelongsTo(()=>User,{onDelete: 'cascade'})
  user!:User;

  @HasMany(()=>DailySubtask)
  dailySubtasks?:DailySubtask[]
}

