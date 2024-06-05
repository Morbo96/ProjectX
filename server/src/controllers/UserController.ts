import { NextFunction, Request, Response } from "express";
import { userService } from "../model/services/implementations/usersServices/UserService";
import { UserBank } from "../model/domain/entities/user/usersBanks";
import { UserFood } from "../model/domain/entities/gamification/UserFood";

export class UserController {
  async getDailyTasks(req: Request, res: Response, next: NextFunction) {
    try {
      const usersDailyTasks = await userService.getDailyTasks(req.body.userId);
      res.json(usersDailyTasks);
    } catch (error) {
      next(error);
    }
  }
  async getFood(req: Request, res: Response, next: NextFunction) {
    try {
      const usersFood = await UserFood.findAll({
        where: { userId: req.body.userId },
      });
      res.json(usersFood);
    } catch (error) {
      next(error);
    }
  }
  async getUserBank(req: Request, res: Response, next: NextFunction) {
    try {
      const userBank = await UserBank.findOne({
        where: { userId: req.body.userId },
      });
      res.json(userBank);
    } catch (error) {
      next(error);
    }
  }

  async getFolders(req: Request, res: Response, next: NextFunction) {
    try {
      const usersFolders = await userService.getFolders(req.body.userId);
      res.json(usersFolders);
    } catch (error) {
      next(error);
    }
  }

  async getUsersPet(req: Request, res: Response, next: NextFunction) {
    try {
      const usersPets = await userService.getUsersPets(req.body.userId);
      res.json(usersPets);
    } catch (error) {
      next(error);
    }
  }

  async getByLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const oneItem = await userService.getByLogin(req.params.login);
      res.json(oneItem);
    } catch (error) {
      next(error);
    }
  }
}
