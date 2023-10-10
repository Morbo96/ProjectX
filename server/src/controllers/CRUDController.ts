import { Request, Response } from "express";
import { CRUDServiceInterface } from "../model/services/interfaces/CRUDServiceInterface";

export class CRUDController<T extends {}>{

  itemService: CRUDServiceInterface<T>;

  constructor(service:CRUDServiceInterface<T>){
      this.itemService = service
  }

  async create(req: Request, res: Response) {
    try {
      const createdItem = await this.itemService.create(req.body);
      if (createdItem == null) res.status(500)
      res.json(createdItem);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const allItems = await this.itemService.getAll();
      res.json({allItems});
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getByID(req: Request, res: Response) {
    try {
      const oneItem = await this.itemService.getItemById(Number(req.params.id))//добавить проверку на число
      res.json(oneItem);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async delete(req: Request, res: Response) {// удаление каскадно
    try {
      const isSuccess = await this.itemService.deleteItem(req.body.id)
      isSuccess ? res.status(201).json(true):res.status(500).json(false)
    } catch (error) {
      res.status(500).json(error);
    }
  }
  
  async update(req: Request, res: Response) {
    try {
      req.body.id = req.params.id// добавить проверку на число
      const updatedItem = await this.itemService.update(req.body);
      res.json(updatedItem);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
