import { NextFunction, Request, Response } from "express";
import { subtaskService } from "../model/services/implementations/tasksServices/SubtaskService";
import { SubtaskInfo } from "../model/domain/entities/tasks/subtaskInfos";
import { Subtask } from "../model/domain/entities/tasks/subtasks";

export class SubtaskController {
  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const subtask = await Subtask.findOne({
        where: { id: req.params.id },
        include: { model: SubtaskInfo },
      });
      res.json(subtask);
    } catch (error) {
      next(error);
    }
  }
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      req.body.id = req.params.id;
      var updatedSubtask = await subtaskService.update(req.body);
      if (req.body.subtaskInfo) {
        const subtaskInfo = await updatedSubtask.$get("subtaskInfo"); //FUTURE change from models method to service
        await SubtaskInfo.update(req.body.subtaskInfo, {
          where: { id: subtaskInfo.id },
        });
      }
      updatedSubtask = await Subtask.findOne({
        where: { id: req.params.id },
        include: { model: SubtaskInfo },
      });
      res.json(updatedSubtask);
    } catch (error) {
      next(error);
    }
  }
}
