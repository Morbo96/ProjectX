import express, { NextFunction, Request, Response } from "express";
import { Router } from "express";
import { dailyTaskService } from "../model/services/implementations/dailyTasksServices/DailyTaskService";
import { CRUDController } from "../controllers/CRUDController";
import { DailytaskController } from "../controllers/DailytaskController";
import { accessTokenVerify } from "../middleware/AccessTokenVerify";
import { findUserByToken } from "../middleware/FindUserByToken";
import { dailyTaskCheck } from "../middleware/DailyTaskCheck";

const DailyTaskRoute = Router();
const crudController = new CRUDController(dailyTaskService);
const dailytaskController = new DailytaskController();

DailyTaskRoute.use(express.json());

DailyTaskRoute.get(
  "/dailytasks/:id/dailySubtasks",
  accessTokenVerify,
  findUserByToken,
  dailyTaskCheck,
  (req: Request, res: Response, next: NextFunction) => {
    dailytaskController.getDailysubtasks(req, res, next);
  }
);
DailyTaskRoute.post(
  "/dailytasks/:id/dailySubtasks",
  accessTokenVerify,
  findUserByToken,
  dailyTaskCheck,
  (req: Request, res: Response, next: NextFunction) => {
    dailytaskController.createDailySubtask(req, res, next);
  }
);
DailyTaskRoute.get(
  "/dailytasks/:id",
  accessTokenVerify,
  findUserByToken,
  dailyTaskCheck,
  (req: Request, res: Response, next: NextFunction) => {
    crudController.getByID(req, res, next);
  }
);
DailyTaskRoute.get(
  "/dailytasks",
  (req: Request, res: Response, next: NextFunction) => {
    crudController.getAll(req, res, next);
  }
);
DailyTaskRoute.post(
  "/dailytasks",
  accessTokenVerify,
  findUserByToken,
  (req: Request, res: Response, next: NextFunction) => {
    crudController.create(req, res, next);
  }
);
DailyTaskRoute.patch(
  "/dailytasks/:id",
  accessTokenVerify,
  findUserByToken,
  dailyTaskCheck,
  (req: Request, res: Response, next: NextFunction) => {
    crudController.update(req, res, next);
  }
);
DailyTaskRoute.delete(
  "/dailytasks/:id",
  accessTokenVerify,
  findUserByToken,
  dailyTaskCheck,
  (req: Request, res: Response, next: NextFunction) => {
    crudController.delete(req, res, next);
  }
);

export default DailyTaskRoute;
