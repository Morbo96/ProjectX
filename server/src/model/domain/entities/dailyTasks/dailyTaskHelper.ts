import { Model, Column,Table,BelongsTo, ForeignKey, HasMany } from "sequelize-typescript";
import { DailyTask } from "./dailyTasks";
import { DailySubtaskNotification } from "./dailySubtaskNotifications";
import { DailySubtask } from "./dailySubtasks";

@Table

export class DailyTaskHelper extends Model<DailyTaskHelper> {

  @ForeignKey(()=>DailyTask)
  @Column
  dailyTaskId!:number;

  @ForeignKey(()=>DailySubtask)
  dailySubtaskId!:number

  @ForeignKey(()=>DailySubtaskNotification)
  @Column
  dailySubtaskNotification!:number

}

