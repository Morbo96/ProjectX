import { Model, Column,Table,BelongsTo, ForeignKey, HasMany, HasOne } from "sequelize-typescript";
import { Task } from "./tasks";
import { SubtaskInfo } from "./subtaskInfos";
import { Attachment } from "./attachments";

@Table

export class Subtask extends Model<Subtask> {

  @Column
  name!:string;

  @Column
  description!:string;

  @ForeignKey(()=>Task)
  @Column
  taskId!:number;

  @BelongsTo(()=>Task,{onDelete: 'cascade'})
  task!:Task;

  @HasOne(()=>SubtaskInfo)
  subtaskInfo!:SubtaskInfo

  @HasMany(()=>Attachment)
  attachemnts?:Attachment[]

}

