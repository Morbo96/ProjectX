import { Model, Column,Table,BelongsTo, ForeignKey, HasMany, HasOne } from "sequelize-typescript";
import { Task } from "./tasks";
import { SubtaskInfo } from "./subtaskInfos";

@Table

export class Subtask extends Model<Subtask> {

  @Column
  name!:string;

  @Column
  description!:string;

  @ForeignKey(()=>Task)
  @Column
  taskId!:number;

  @BelongsTo(()=>Task)
  task!:Task;

  @HasOne(()=>SubtaskInfo)
  substaskInfo?:SubtaskInfo

}

