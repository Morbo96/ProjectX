import { Model, Column,Table,BelongsTo, ForeignKey, HasMany, HasOne } from "sequelize-typescript";
import { User } from "../user/users";
import { DailyTask } from "./dailyTasks";
import { DailySubtaskNotification } from "./dailySubtaskNotifications";
import { DailySubtaskNotificationTime } from "./dailySubtaskNotificationTime";

@Table

export class DailySubtask extends Model<DailySubtask> {

  @Column
  name!:string;

  @Column
  notification!:boolean;

  @ForeignKey(()=>DailyTask)
  @Column
  dailyTaskId!:number;

  @BelongsTo(()=>DailyTask,{onDelete: 'cascade'})
  dailyTask!:DailyTask;

  @HasOne(()=>DailySubtaskNotification)
  dailySubtaskNotifications?:DailySubtaskNotification

  @HasMany(()=>DailySubtaskNotificationTime)
  dailySubtaskNotificationsTime?:DailySubtaskNotification[]

}

