import { Request, Response } from "express";
import { goalService } from "../model/services/implementations/tasksServices/GoalService";

export class GoalController {

  async getTasks(req: Request, res: Response) {
    try {
      const goalsTasks = await goalService.getTasks(req.body.id);
      res.json(goalsTasks);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}