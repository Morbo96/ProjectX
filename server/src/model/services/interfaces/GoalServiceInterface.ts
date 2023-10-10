import { Task } from "../../domain/entities/tasks/tasks"

export interface GoalServiceInterface{
    
    getTasks:(goalId:number) => Promise<Task[]| null>

}