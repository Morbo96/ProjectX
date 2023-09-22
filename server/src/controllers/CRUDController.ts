import express, { Request, Response } from "express";
import { User } from "../model/domain/entities/users";
import { NotEmpty, NotNull } from "sequelize-typescript";
import { DailyTask } from "../model/domain/entities/dailyTasks";
import { ItemServiceInterface } from "../model/services/interfaces/ItemServiceInterface";

export class CRUDController<T extends {}>{

  itemService: ItemServiceInterface<T>;

  constructor(service:ItemServiceInterface<T>){
      this.itemService = service
  }

  async createUser(req: Request, res: Response) {
    try {
      const createdUser = await this.itemService.create(req.body);
      res.json(createdUser);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const allUsers = await this.itemService.getAll();
      res.json({allUsers});
    } catch (error) {
      res.status(500).json(error);
    }
  }

// async getByID(req: Request, res: Response) {
//   try {
//     const oneUser = await User.findOne({where: {id: req.body.id} })
//     res.json(oneUser);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// }

//   async getAllByTask(req: Request, res: Response) {
//     try {
//       const oneUser = await User.findAll({include: [DailyTask] })
//       res.json(oneUser);
//     } catch (error) {
//       console.log(error);
//       res.status(500).json(error);
//     }
//   }
}

//export const crudController = CRUDController;
