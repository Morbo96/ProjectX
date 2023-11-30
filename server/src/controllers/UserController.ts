import { NextFunction, Request, Response } from "express";
import { userService } from "../model/services/implementations/usersServices/UserService";

export class UserController {
  async getDailyTasks(req: Request, res: Response, next: NextFunction) {
    try {
      const usersDailyTasks = await userService.getDailyTasks(req.body.userId);
      res.json(usersDailyTasks);
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
