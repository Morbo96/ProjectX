import { Request, Response } from "express";
import { dailyTaskService } from "../model/services/implementations/dailyTasksServices/DailyTaskService";
import { dailySubtaskService } from "../model/services/implementations/dailyTasksServices/DailySubtaskService";
import { DailySubtask } from "../model/domain/entities/dailyTasks/dailySubtasks";
import { DailySubtaskNotification } from "../model/domain/entities/dailyTasks/dailySubtaskNotifications";

export class DailySubtaskController {}
