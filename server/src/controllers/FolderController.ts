import { Request, Response } from "express";
import { folderService } from "../model/services/implementations/tasksServices/FolderService";
import { handleError } from "../utils/ErrorHandler";

export class FolderController {
  async createChildAssociation(req: Request, res: Response) {
    //FUTURE for child-parent association between Folders
    try {
      const parentFolder = await folderService.createChildAssociation(
        req.body.folderId,
        req.body.childId
      );
      res.json(parentFolder);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getGoals(req: Request, res: Response) {
    //
    try {
      const foldersGoals = await folderService.getGoals(req.body.id);
      res.json(foldersGoals);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
