import { Folder } from "../../domain/entities/tasks/folders";
import { Goal } from "../../domain/entities/tasks/goals";

export interface FolderServiceInterface{
    
    getGoals:(folderId:number) => Promise<Goal[]| null>

    //FUTURE for for child-parent association between Folders

    getParentFolders:(folderId:number) => Promise<Folder[]|null>

    getChildFolders:(folderId:number) => Promise<Folder[]|null>
    
}