import express, { Request, Response } from "express";
import { user } from "../model/domain/entities/users";

class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const createdUser = await user.create(req.body);
      res.json(createdUser);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getAll(req: Request, res: Response) {
    try {
      const allUsers = await user.findAll();
      res.json(allUsers);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getOneByID(req: Request, res: Response) {
    try {
      const oneUser = await user.findOne({where: {id: req.body.id} })
      res.json(oneUser);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export const userController = new UserController();
