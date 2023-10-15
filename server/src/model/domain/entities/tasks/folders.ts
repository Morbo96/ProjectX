import { Model, Column,Table,BelongsTo, ForeignKey, HasMany, HasOne, BelongsToMany, Default } from "sequelize-typescript";
import { User } from "../user/users";
import { Goal } from "./goals";
import { FolderParent } from "./folderParent";
import { FolderChild } from "./folderChild";

@Table

export class Folder extends Model<Folder> {

  @Column
  name!:string;

  @Default(false)
  @Column
  isSystem!:boolean;

  @ForeignKey(()=>User)
  @Column
  userId!:number;

  @BelongsTo(()=>User,{onDelete: 'cascade'})
  user!:User;

  @HasMany(()=>Goal)
  goals?:Goal[]

  @BelongsToMany(()=>Folder,()=>FolderParent,'parentId','folderId')
  parents?:Folder[]

  @BelongsToMany(()=>Folder,()=>FolderChild,'childId','folderId')
  children?:Folder[]

}

