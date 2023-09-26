import { Model, Column,Table,BelongsTo, ForeignKey, HasMany } from "sequelize-typescript";
import { User } from "../users";
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

  @BelongsTo(()=>Folder)
  folder!:Folder;

  @HasMany(()=>Task)
  tasks?:Task[]

}

