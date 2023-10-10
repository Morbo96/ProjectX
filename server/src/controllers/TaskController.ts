import { Request, Response } from "express";
import { taskService } from "../model/services/implementations/tasksServices/TaskService";

export class TaskController {

  async getSubtasks(req: Request, res: Response) {
    try {
      const tasksSubtasks = await taskService.getSubtasks(req.body.id);
      res.json(tasksSubtasks);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}