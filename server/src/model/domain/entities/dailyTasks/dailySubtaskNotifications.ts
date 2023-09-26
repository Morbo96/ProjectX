import { Model, Column,Table,BelongsTo, ForeignKey } from "sequelize-typescript";
import { User } from "../users";
import { DailyTask } from "./dailyTasks";
import { DailySubtask } from "./dailySubtasks";

@Table

export class DailySubtaskNotification extends Model<DailySubtaskNotification> {

  @Column
  description!:string;

  @Column
  time!:Date;

  @Column
  periodDate!:Date;

  @ForeignKey(()=>DailySubtask)
  @Column
  dailySubtaskId!:number;

  @BelongsTo(()=>DailySubtask)
  dailySubtask!:DailySubtask;

}

