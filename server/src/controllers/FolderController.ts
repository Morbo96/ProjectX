import { NextFunction, Request, Response } from "express";
import { folderService } from "../model/services/implementations/tasksServices/FolderService";
import { goalService } from "../model/services/implementations/tasksServices/GoalService";

export class FolderController {
  async getGoals(req: Request, res: Response, next: NextFunction) {
    try {
      const foldersGoals = await folderService.getGoals(Number(req.params.id));
      res.json(foldersGoals);
    } catch (error) {
      next(error);
    }
  }
  async createGoal(req: Request, res: Response, next: NextFunction) {
    try {
      req.body.folderId = req.params.id;
      const newGoal = await goalService.create(req.body);
      res.status(200).json(newGoal);
    } catch (error) {
      next(error);
    }
  }
}
