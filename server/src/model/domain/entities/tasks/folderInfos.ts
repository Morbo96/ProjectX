import { Model, Column,Table,BelongsTo, ForeignKey, HasMany } from "sequelize-typescript";
import { User } from "../users";
import { Folder } from "./folders";

@Table

export class FolderInfo extends Model<FolderInfo> { // Нужен ли BelongsTo

  @ForeignKey(()=>Folder)
  @Column
  previousFolderId!:number;

  @ForeignKey(()=>Folder)
  @Column
  nextFolderId!:number;

  @ForeignKey(()=>Folder)
  @Column
  folderId!:number;

}

