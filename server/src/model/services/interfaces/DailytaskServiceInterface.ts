import { DailySubtask } from "../../domain/entities/dailyTasks/dailySubtasks"

export interface DailyTaskServiceInterface{
    
    getDailysubtasks:(dailyTaskId:number) => Promise<DailySubtask[]| null>

}