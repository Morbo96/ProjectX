import {
  Model,
  Column,
  Table,
  BelongsTo,
  ForeignKey,
  Default,
  DataType,
} from "sequelize-typescript";
import { User } from "../user/users";
import { Task } from "./tasks";
import { Subtask } from "./subtasks";

export enum Difficulty {
  EASY = "EASY",
  MEDIUM = "MEDIUM",
  HARD = "HARD",
}

@Table
export class SubtaskInfo extends Model<SubtaskInfo> {
  @Column({
    defaultValue: Difficulty.EASY,
    type: DataType.ENUM(...Object.values(Difficulty)),
  })
  difficulty!: Difficulty;

  @Column
  dateStart!: Date;

  @Column
  dateEnd!: Date;

  @Default(0)
  @Column
  orderNumber!: number;

  @Default(false)
  @Column
  completed!: boolean;

  @ForeignKey(() => Subtask)
  @Column
  subtaskId!: number;

  @BelongsTo(() => Subtask, { onDelete: "cascade" })
  subtask!: Subtask;
}
