import { Request, Response, NextFunction } from "express";
import { DailySubtask } from "../model/domain/entities/dailyTasks/dailySubtasks";
import { Folder } from "../model/domain/entities/tasks/folders";
import { DailyTask } from "../model/domain/entities/dailyTasks/dailyTasks";

export const dailySubtaskCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dailySubtask = await DailySubtask.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: DailyTask,
          where: { userId: req.body.userId },
          required: true,
        },
      ],
    });
    if (!dailySubtask) {
      return res.status(500).json({ message: "You don't have access" });
    }
    next();
  } catch (error) {
    next(error);
  }
};
