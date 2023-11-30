import { Request, Response, NextFunction } from "express";
import { Folder } from "../model/domain/entities/tasks/folders";
import { DailyTask } from "../model/domain/entities/dailyTasks/dailyTasks";

export const dailyTaskCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dailyTask = await DailyTask.findOne({
      where: { id: req.params.id, userId: req.body.userId },
    });
    if (!dailyTask) {
      return res.status(500).json({ message: "You don't have access" });
    }
    next();
  } catch (error) {
    next(error);
  }
};
