import { Model, Column,Table,BelongsTo, ForeignKey, HasMany } from "sequelize-typescript";
import { Task } from "./tasks";
import { Subtask } from "./subtasks";
import { Goal } from "./goals";
import { Folder } from "./folders";

@Table

export class TaskHelper extends Model<TaskHelper> {

  @ForeignKey(()=>Folder)
  @Column
  folderId!:number;

  @ForeignKey(()=>Goal)
  @Column
  goalId!:number

  @ForeignKey(()=>Task)
  @Column
  taskId!:number

  @ForeignKey(()=>Subtask)
  @Column
  subtaskId!:number

}

