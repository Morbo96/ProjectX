import express, { Request, Response } from "express";
import { Router } from "express";
import { CRUDController } from "../controllers/CRUDController";
import { dailySubtaskService } from "../model/services/implementations/dailyTasksServices/DailySubtaskService";
import { DailySubtaskController } from "../controllers/DailySubtaskController";
import { accessTokenVerify } from "../middleware/AccessTokenVerify";
import { findUserByToken } from "../middleware/FindUserByToken";
import { dailySubtaskCheck } from "../middleware/DailySubtaskCheck";

const DailySubtaskRoute = Router();
const crudController = new CRUDController(dailySubtaskService);
const dailySubtaskController = new DailySubtaskController();

DailySubtaskRoute.use(express.json());

DailySubtaskRoute.get(
  "/dailySubtasks/:id",
  accessTokenVerify,
  findUserByToken,
  dailySubtaskCheck,
  (req: Request, res: Response) => {
    crudController.getByID(req, res);
  }
);
DailySubtaskRoute.get("/dailySubtasks", (req: Request, res: Response) => {
  crudController.getAll(req, res);
});

DailySubtaskRoute.patch(
  "/dailySubtasks/:id",
  accessTokenVerify,
  findUserByToken,
  dailySubtaskCheck,
  (req: Request, res: Response) => {
    crudController.update(req, res);
  }
);
DailySubtaskRoute.delete(
  "/dailySubtasks/:id",
  accessTokenVerify,
  findUserByToken,
  dailySubtaskCheck,
  (req: Request, res: Response) => {
    crudController.delete(req, res);
  }
);

export default DailySubtaskRoute;
