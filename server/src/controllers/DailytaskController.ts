import { Request, Response } from "express";
import { taskService } from "../model/services/implementations/tasksServices/TaskService";
import { dailyTaskService } from "../model/services/implementations/dailyTasksServices/DailyTaskService";

export class DailytaskController {

  async getDailysubtasks(req: Request, res: Response) {
    try {
      const dailytasksDailysubtasks = await dailyTaskService.getDailysubtasks(req.body.id);
      res.json(dailytasksDailysubtasks);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}