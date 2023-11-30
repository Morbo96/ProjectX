import { NextFunction, Request, Response } from "express";
import { dailySubtaskService } from "../model/services/implementations/dailyTasksServices/DailySubtaskService";
import { DailySubtask } from "../model/domain/entities/dailyTasks/dailySubtasks";
import { DailySubtaskNotification } from "../model/domain/entities/dailyTasks/dailySubtaskNotifications";
import { DailySubtaskNotificationTime } from "../model/domain/entities/dailyTasks/dailySubtaskNotificationTime";

export class DailySubtaskController {
  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const dailySubtask = await DailySubtask.findOne({
        where: { id: req.params.id },
        include: [
          {
            model: DailySubtaskNotification,
            include: [{ model: DailySubtaskNotificationTime, required: false }],
            required: false,
          },
        ],
      });
      res.json(dailySubtask);
    } catch (error) {
      next(error);
    }
  }
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      req.body.id = req.params.id;
      var updatedDailySubtask = await dailySubtaskService.update(req.body);
      if (req.body.dailySubtaskNotification) {
        const dailySubtaskNotification = await updatedDailySubtask.$get(
          "dailySubtaskNotification"
        );
        await DailySubtaskNotification.update(
          req.body.dailySubtaskNotification,
          {
            where: { id: dailySubtaskNotification.id },
          }
        );
      }
      updatedDailySubtask = await DailySubtask.findOne({
        where: { id: req.params.id },
        include: [
          {
            model: DailySubtaskNotification,
            include: [{ model: DailySubtaskNotificationTime, required: false }],
            required: false,
          },
        ],
      });
      res.json(updatedDailySubtask);
    } catch (error) {
      next(error);
    }
  }
}
