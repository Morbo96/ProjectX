import express, { Request, Response } from "express";
import { User } from "../model/domain/entities/users";
import { NotEmpty, NotNull } from "sequelize-typescript";
import { DailyTask } from "../model/domain/entities/dailyTasks";

class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const createdUser = await User.create(req.body);
      res.json(createdUser);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const allUsers = await User.findAll();
      res.json(allUsers);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getOneByID(req: Request, res: Response) {
    try {
      const oneUser = await User.findOne({where: {id: req.body.id} })
      res.json(oneUser);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getAllByTask(req: Request, res: Response) {
    try {
      const oneUser = await User.findAll({include: [DailyTask] })
      res.json(oneUser);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}

export const userController = new UserController();
