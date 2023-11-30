import { Request, Response, NextFunction } from "express";
import { Task } from "../model/domain/entities/tasks/tasks";
import { Goal } from "../model/domain/entities/tasks/goals";
import { Folder } from "../model/domain/entities/tasks/folders";

export const taskCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const task = await Task.findOne({
      where: { id: req.params.id },
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
    });
    if (!task) {
      return res.status(500).json({ message: "You don't have access" });
    }
    next();
  } catch (error) {
    next(error);
  }
};
