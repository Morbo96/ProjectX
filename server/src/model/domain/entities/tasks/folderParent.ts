import { Model, Column,Table,BelongsTo, ForeignKey, HasMany } from "sequelize-typescript";
import { User } from "../user/users";
import { Folder } from "./folders";

@Table

export class FolderParent extends Model<FolderParent> {//FUTURE for child-parent association between Folders

  @ForeignKey(()=>Folder)
  @Column
  parentFolderId!:number;

  @ForeignKey(()=>Folder)
  @Column
  folderId!:number;

}

