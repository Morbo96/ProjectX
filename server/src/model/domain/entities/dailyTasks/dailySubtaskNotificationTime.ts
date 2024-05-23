import {
  Model,
  Column,
  Table,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import { User } from "../user/users";
import { DailyTask } from "./dailyTasks";
import { DailySubtask } from "./dailySubtasks";
import { DailySubtaskNotification } from "./dailySubtaskNotifications";

@Table //({tableName: "daily_subtask_notification_time"})
export class DailySubtaskNotificationTime extends Model<DailySubtaskNotificationTime> {
  @Column
  time!: Date;

  @ForeignKey(() => DailySubtaskNotification)
  @Column
  dailySubtaskNotificationId!: number;

  @BelongsTo(() => DailySubtaskNotification, { onDelete: "cascade" })
  dailySubtaskNotification!: DailySubtaskNotification;
}
