import { Request, Response } from "express";
import { folderService } from "../model/services/implementations/tasksServices/FolderService";
import { goalService } from "../model/services/implementations/tasksServices/GoalService";

export class FolderController {
  //FUTURE for child-parent association between Folders
  // async createChildAssociation(req: Request, res: Response) {

  //   try {
  //     const parentFolder = await folderService.createChildAssociation(
  //       req.body.folderId,
  //       req.body.childId
  //     );
  //     res.json(parentFolder);
  //   } catch (error) {
  //     res.status(500).json(error);
  //   }
  // }

  async getGoals(req: Request, res: Response) {
    try {
      const foldersGoals = await folderService.getGoals(Number(req.params.id));
      res.json(foldersGoals);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async createGoal(req: Request, res: Response) {
    try {
      req.body.folderId = req.params.id;
      const newGoal = await goalService.create(req.body);
      res.status(200).json(newGoal);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
