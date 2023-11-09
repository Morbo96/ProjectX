import express, { Request, Response } from "express";
import { Router } from "express";
import { CRUDController } from "../controllers/CRUDController";
import { dailySubtaskService } from "../model/services/implementations/dailyTasksServices/DailySubtaskService";
import { DailySubtaskController } from "../controllers/DailySubtaskController";

const DailySubtaskRoute = Router();
const crudController = new CRUDController(dailySubtaskService);
const dailySubtaskController = new DailySubtaskController();

DailySubtaskRoute.use(express.json());

DailySubtaskRoute.get("/dailySubtasks/:id", (req: Request, res: Response) => {
  crudController.getByID(req, res);
});
DailySubtaskRoute.get("/dailySubtasks", (req: Request, res: Response) => {
  crudController.getAll(req, res);
});
DailySubtaskRoute.post("/dailySubtasks", (req: Request, res: Response) => {
  dailySubtaskController.createDailySubtask(req, res);
});
DailySubtaskRoute.patch("/dailySubtasks/:id", (req: Request, res: Response) => {
  crudController.update(req, res);
});
DailySubtaskRoute.delete("/dailySubtasks", (req: Request, res: Response) => {
  crudController.delete(req, res);
});

export default DailySubtaskRoute;
