import { Request, Response, NextFunction } from "express";
import { Task } from "../model/domain/entities/tasks/tasks";
import { Goal } from "../model/domain/entities/tasks/goals";
import { Folder } from "../model/domain/entities/tasks/folders";
import { Subtask } from "../model/domain/entities/tasks/subtasks";

export const subtaskCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const subtask = await Subtask.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Task,
          include: [
            {
              model: Goal,
              include: [
                {
                  model: Folder,
                  where: { userId: req.body.userId },
                  required: true,
                },
              ],
              required: true,
            },
          ],
          required: true,
        },
      ],
    });
    if (!subtask) {
      return res.status(500).json({ message: "You don't have access" });
    }
    next();
  } catch (error) {
    next(error);
  }
};
