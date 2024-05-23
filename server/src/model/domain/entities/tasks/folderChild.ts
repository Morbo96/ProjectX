import { Model, Column, Table, ForeignKey } from "sequelize-typescript";
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

