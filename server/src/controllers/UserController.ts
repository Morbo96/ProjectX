import { Request, Response } from "express";
import { userService } from "../model/services/implementations/usersServices/UserService";

export class UserController {
  async getDailyTasks(req: Request, res: Response) {
    try {
      const usersDailyTasks = await userService.getDailyTasks(req.body.userId);
      res.json(usersDailyTasks);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getFolders(req: Request, res: Response) {
    try {
      const usersFolders = await userService.getFolders(req.body.userId);
      res.json(usersFolders);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getUsersPet(req: Request, res: Response) {
    try {
      const usersPets = await userService.getUsersPets(req.body.userId);
      res.json(usersPets);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getByLogin(req: Request, res: Response) {
    try {
      const oneItem = await userService.getByLogin(req.params.login);
      res.json(oneItem);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
