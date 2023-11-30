import { NextFunction, Request, Response } from "express";
import { dailyTaskService } from "../model/services/implementations/dailyTasksServices/DailyTaskService";
import { DailySubtask } from "../model/domain/entities/dailyTasks/dailySubtasks";
import { dailySubtaskService } from "../model/services/implementations/dailyTasksServices/DailySubtaskService";
import { DailySubtaskNotification } from "../model/domain/entities/dailyTasks/dailySubtaskNotifications";
import { DailySubtaskNotificationTime } from "../model/domain/entities/dailyTasks/dailySubtaskNotificationTime";

export class DailytaskController {
  async getDailysubtasks(req: Request, res: Response, next: NextFunction) {
    try {
      const dailytasksDailysubtasks = await dailyTaskService.getDailysubtasks(
        Number(req.params.id)
      );
      res.json(dailytasksDailysubtasks);
    } catch (error) {
      next(error);
    }
  }
  async createDailySubtask(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.body.dailySubtask) {
        return res.status(500).json("No dailySubtask provided");
      }
      const newDailySubtask = await dailySubtaskService.create(
        req.body.dailySubtask
      );
      newDailySubtask.dailyTaskId = Number(req.params.id);
      await dailySubtaskService.update(newDailySubtask.toJSON());

      if (req.body.dailySubtaskNotification != null) {
        req.body.dailySubtaskNotification.dailySubtaskId = newDailySubtask.id;

        const newDailySubtaskNotification = await newDailySubtask.$create(
          "dailySubtaskNotification",
          req.body.dailySubtaskNotification
        );
        if (req.body.dailySubtaskNotificationTime != null) {
          await newDailySubtaskNotification.$create(
            "dailySubtaskNotificationTime",
            req.body.dailySubtaskNotificationTime
          );
        }
      }

      const foundDailySubtask = await DailySubtask.findOne({
        where: { id: newDailySubtask.id },
        include: [
          {
            model: DailySubtaskNotification,
            include: [{ model: DailySubtaskNotificationTime, required: false }],
            required: false,
          },
        ],
      });

      res.json(foundDailySubtask);
    } catch (error) {
      console.log(error);
      const newEr = error as Error;
      res.status(500).json({ error: newEr.message });
    }
  }
}
