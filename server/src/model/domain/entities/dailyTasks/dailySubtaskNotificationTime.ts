import { Model, Column,Table,BelongsTo, ForeignKey } from "sequelize-typescript";
import { User } from "../user/users";
import { DailyTask } from "./dailyTasks";
import { DailySubtask } from "./dailySubtasks";

@Table

export class DailySubtaskNotificationTime extends Model<DailySubtaskNotificationTime> {//с чем связано?

  @Column
  time!:Date;

  @ForeignKey(()=>DailySubtask)
  @Column
  dailySubtaskId!:number;

  @BelongsTo(()=>DailySubtask)
  dailySubtask!:DailySubtask;

}

