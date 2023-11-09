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

@Table
export class DailySubtaskNotificationTime extends Model<DailySubtaskNotificationTime> {
  @Column
  time!: Date;

  @ForeignKey(() => DailySubtaskNotification)
  @Column
  dailySubtaskNotificationId!: number;

  @BelongsTo(() => DailySubtaskNotification, { onDelete: "cascade" })
  dailySubtaskNotification!: DailySubtaskNotification;
}
