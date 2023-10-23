import { Request, Response } from "express";
import { goalService } from "../model/services/implementations/tasksServices/GoalService";
import { subtaskService } from "../model/services/implementations/tasksServices/SubtaskService";
import { SubtaskInfo } from "../model/domain/entities/tasks/subtaskInfos";
import { Subtask } from "../model/domain/entities/tasks/subtasks";

export class SubtaskController {

  async createSubtask(req: Request, res: Response) {
    try {
      const subtask = await subtaskService.create(req.body.subtask);

      req.body.subtaskInfo.subtaskId = subtask.id

      await subtask.$create('subtaskInfo',req.body.subtaskInfo)

      const foundSubtask = await Subtask.findOne({where:{id:subtask.id},include: [{model:SubtaskInfo}]})
      
      res.json(foundSubtask);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}