import { Model, Column,Table,BelongsTo, ForeignKey, HasMany } from "sequelize-typescript";
import { User } from "../user/users";
import { Folder } from "./folders";

@Table

export class FolderChild extends Model<FolderChild> {//FUTURE for child-parent association between Folders

  @ForeignKey(()=>Folder)
  @Column
  childId!:number;

  @ForeignKey(()=>Folder)
  @Column
  folderId!:number;

}

