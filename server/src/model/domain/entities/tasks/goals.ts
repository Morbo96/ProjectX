import { Model, Column,Table,BelongsTo, ForeignKey, HasMany } from "sequelize-typescript";
import { Folder } from "./folders";
import { Task } from "./tasks";

@Table

export class Goal extends Model<Goal> {

  @Column
  name!:string;

  @Column
  dateStart!:Date;

  @Column
  dateEnd!:Date;

  @ForeignKey(()=>Folder)
  @Column
  folderId!:number;

  @BelongsTo(()=>Folder,{onDelete: 'cascade'})
  folder!:Folder;

  @HasMany(()=>Task)
  tasks?:Task[]

}

