import { Request, Response } from "express";
import { taskService } from "../model/services/implementations/tasksServices/TaskService";
import { SubtaskInfo } from "../model/domain/entities/tasks/subtaskInfos";
import { Subtask } from "../model/domain/entities/tasks/subtasks";
import { subtaskService } from "../model/services/implementations/tasksServices/SubtaskService";

export class TaskController {
  async getSubtasks(req: Request, res: Response) {
    try {
      const tasksSubtasks = await taskService.getSubtasks(
        Number(req.params.id)
      );
      res.json(tasksSubtasks);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async createSubtask(req: Request, res: Response) {
    try {
      req.body.taskId = req.params.id;
      const subtask = await subtaskService.create(req.body);

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
