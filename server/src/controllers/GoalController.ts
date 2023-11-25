import { Request, Response } from "express";
import { goalService } from "../model/services/implementations/tasksServices/GoalService";
import { taskService } from "../model/services/implementations/tasksServices/TaskService";

export class GoalController {
  async getTasks(req: Request, res: Response) {
    try {
      const goalsTasks = await goalService.getTasks(Number(req.params.id));
      res.json(goalsTasks);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async createTask(req: Request, res: Response) {
    try {
      req.body.goalId = req.params.id;
      const newTask = await taskService.create(req.body);
      res.status(200).json(newTask);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
