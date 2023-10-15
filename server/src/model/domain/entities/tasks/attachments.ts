import { Model, Column,Table,BelongsTo, ForeignKey } from "sequelize-typescript";
import { Subtask } from "./subtasks";

@Table

export class Attachment extends Model<Attachment> {

  @Column
  image!:string;

  @ForeignKey(()=>Subtask)
  @Column
  subtaskId!:number;

  @BelongsTo(()=>Subtask,{onDelete: 'cascade'})
  subtask!:Subtask;
}

