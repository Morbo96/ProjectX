import { Subtask } from "../../domain/entities/tasks/subtasks";

export interface TaskServiceInterface{
    
    getSubtasks:(taskId:number) => Promise<Subtask[]| null>

}