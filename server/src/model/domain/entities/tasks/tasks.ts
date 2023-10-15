import { Model, Column,Table,BelongsTo, ForeignKey, HasMany } from "sequelize-typescript";
import { Goal } from "./goals";
import { Subtask } from "./subtasks";

@Table

export class Task extends Model<Task> {

  @Column
  name!:string;

  @Column
  icon!:string;

  @ForeignKey(()=>Goal)
  @Column
  goalId!:number;

  @BelongsTo(()=>Goal,{onDelete: 'cascade'})
  goal!:Goal;

  @HasMany(()=>Subtask)
  subtasks?:Subtask[]

}

