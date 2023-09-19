import express, { Request, Response } from "express";
import { DailyTask } from "../model/domain/entities/dailyTasks";

class DailyTaskController {
  async createDailyTask(req: Request, res: Response) {
    try {
      const createdDailyTask = await DailyTask.create(req.body);
      console.log(req.body)
      res.json(createdDailyTask);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const allDailyTask = await DailyTask.findAll();
      res.json(allDailyTask);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getOneByID(req: Request, res: Response) {
    try {
      const oneDailyTask = await DailyTask.findOne({where: {id: req.body.id} })
      res.json(oneDailyTask);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export const dailyTaskController = new DailyTaskController();
