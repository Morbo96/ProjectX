import { Model, Column,Table,BelongsTo, ForeignKey, Default } from "sequelize-typescript";
import { User } from "../user/users";
import { Task } from "./tasks";
import { Subtask } from "./subtasks";

@Table

export class SubtaskInfo extends Model<SubtaskInfo> {

  @Column
  dateStart!:Date;

  @Column
  dateEnd!:Date;

  @Default(0)
  @Column
  orderNumber!:number;

  @Default(false)
  @Column
  completed!:boolean

  @ForeignKey(()=>Subtask)
  @Column
  subtaskId!:number;

  @BelongsTo(()=>Subtask,{onDelete: 'cascade'})
  subtask!:Subtask;

}

