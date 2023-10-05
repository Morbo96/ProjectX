import { Model, Column,Table,BelongsTo, ForeignKey } from "sequelize-typescript";
import { User } from "../user/users";
import { Task } from "./tasks";
import { Subtask } from "./subtasks";

@Table

export class SubtaskInfo extends Model<SubtaskInfo> {

  @Column
  deadline!:Date;

  @Column
  orderNumber!:number;

  @Column
  completed!:boolean

  @ForeignKey(()=>Subtask)
  @Column
  subtaskId!:number;

  @BelongsTo(()=>Subtask)
  subtask!:Subtask;

}

