import {
  Model,
  Column,
  Table,
  BelongsTo,
  ForeignKey,
  HasMany,
} from "sequelize-typescript";
import { User } from "../user/users";
import { DailyTask } from "./dailyTasks";
import { DailySubtask } from "./dailySubtasks";
import { DailySubtaskNotificationTime } from "./dailySubtaskNotificationTime";

@Table
export class DailySubtaskNotification extends Model<DailySubtaskNotification> {
  @Column
  description!: string;

  @Column
  hasCertainTime!: boolean;

  @Column
  periodDate!: Date;

  @ForeignKey(() => DailySubtask)
  @Column
  dailySubtaskId!: number;

  @BelongsTo(() => DailySubtask, { onDelete: "cascade" })
  dailySubtask!: DailySubtask;

  @HasMany(() => DailySubtaskNotificationTime)
  dailySubtaskNotificationTimes?: DailySubtaskNotificationTime[];
}
