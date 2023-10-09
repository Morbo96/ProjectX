import { Goal } from "../../domain/entities/tasks/goals";

export interface FolderServiceInterface{
    
    getGoals:(folderId:number) => Promise<Goal[]| null>

}