import { Request, Response } from "express";
import { folderService } from "../model/services/implementations/tasksServices/FolderService";

export class FolderController {

  async getGoals(req: Request, res: Response) {
    try {
      const foldersGoals = await folderService.getGoals(req.body.id);
      res.json(foldersGoals);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}