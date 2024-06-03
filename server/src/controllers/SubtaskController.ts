import { NextFunction, Request, Response } from "express";
import { subtaskService } from "../model/services/implementations/tasksServices/SubtaskService";
import {
  Difficulty,
  SubtaskInfo,
} from "../model/domain/entities/tasks/subtaskInfos";
import { Subtask } from "../model/domain/entities/tasks/subtasks";
import { userService } from "../model/services/implementations/usersServices/UserService";
import { UserBank } from "../model/domain/entities/user/usersBanks";
import { subtaskInfoService } from "../model/services/implementations/tasksServices/SubtaskInfoService";
import { userBankService } from "../model/services/implementations/usersServices/UserBankService";

export class SubtaskController {
  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const subtask = await Subtask.findOne({
        where: { id: req.params.id },
        include: { model: SubtaskInfo },
      });
      res.json(subtask);
    } catch (error) {
      next(error);
    }
  }
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      req.body.id = req.params.id;
      var updatedSubtask = await subtaskService.update(req.body);
      if (req.body.subtaskInfo) {
        if (req.body.subtaskInfo.completed == "true") {
          delete req.body.subtaskInfo.completed;
        }
        const subtaskInfo = await updatedSubtask.$get("subtaskInfo"); //FUTURE change from models method to service
        await SubtaskInfo.update(req.body.subtaskInfo, {
          where: { id: subtaskInfo.id },
        });
      }
      updatedSubtask = await Subtask.findOne({
        where: { id: req.params.id },
        include: { model: SubtaskInfo },
      });
      res.json(updatedSubtask);
    } catch (error) {
      next(error);
    }
  }
  async complete(req: Request, res: Response, next: NextFunction) {
    try {
      const subtaskInfo = await SubtaskInfo.findOne({
        where: { subtaskId: Number(req.params.id) },
      });
      if (subtaskInfo.completed == true) {
        return res.status(500).json("already completed");
      }
      subtaskInfo.completed = true;
      await subtaskInfoService.update(subtaskInfo.toJSON());

      const userBank = await UserBank.findOne({
        where: { userId: Number(req.body.userId) },
      });
      if (subtaskInfo.difficulty == "EASY") {
        userBank.money += Number(process.env.EASY_REWARD);
      } else if (subtaskInfo.difficulty == "MEDIUM") {
        userBank.money += Number(process.env.MEDIUM_REWARD);
      } else if (subtaskInfo.difficulty == "HARD") {
        userBank.money += Number(process.env.HARD_REWARD);
      }
      await userBankService.update(userBank.toJSON());

      res.json(
        "Current balance:" +
          userBank.money +
          "   Subtask status:" +
          subtaskInfo.completed
      ); //TODO какой ответ будет
    } catch (error) {
      next(error);
    }
  }
}
