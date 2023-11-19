import { Request, Response } from "express";
import { goalService } from "../model/services/implementations/tasksServices/GoalService";
import { subtaskService } from "../model/services/implementations/tasksServices/SubtaskService";
import { SubtaskInfo } from "../model/domain/entities/tasks/subtaskInfos";
import { Subtask } from "../model/domain/entities/tasks/subtasks";
import { subtaskInfoService } from "../model/services/implementations/tasksServices/SubtaskInfoService";

export class SubtaskController {
  async createSubtask(req: Request, res: Response) {
    try {
      const subtask = await subtaskService.create(req.body.subtask);

      await subtask.$create("subtaskInfo", req.body.subtaskInfo);

      const foundSubtask = await Subtask.findOne({
        where: { id: subtask.id },
        include: [{ model: SubtaskInfo }],
      });

      res.json(foundSubtask);
    } catch (error) {
      const err = error as Error;
      res.status(500).json(err.message);
    }
  }
}
