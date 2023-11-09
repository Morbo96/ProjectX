import { Request, Response } from "express";
import { dailyTaskService } from "../model/services/implementations/dailyTasksServices/DailyTaskService";
import { dailySubtaskService } from "../model/services/implementations/dailyTasksServices/DailySubtaskService";
import { DailySubtask } from "../model/domain/entities/dailyTasks/dailySubtasks";
import { DailySubtaskNotification } from "../model/domain/entities/dailyTasks/dailySubtaskNotifications";

export class DailySubtaskController {
  async createDailySubtask(req: Request, res: Response) {
    try {
      const newDailySubtask = await dailySubtaskService.create(
        req.body.dailySubtask
      );

      if (req.body.dailySubtaskNotification != null) {
        req.body.dailySubtaskNotification.dailySubtaskId = newDailySubtask.id;

        const newDailySubtaskNotification = await newDailySubtask.$create(
          "dailySubtaskNotification",
          req.body.dailySubtaskNotification
        );

        await newDailySubtaskNotification.$create(
          "dailySubtaskNotificationTime",
          req.body.dailySubtaskNotificationTime
        );
      }

      const foundDailySubtask = await DailySubtask.findOne({
        where: { id: newDailySubtask.id },
        include: [{ all: true, include: [{ all: true }] }],
      });

      res.json(foundDailySubtask);
    } catch (error) {
      console.log(error);
      const newEr = error as Error;
      res.status(500).json({ error: newEr.message });
    }
  }
}
