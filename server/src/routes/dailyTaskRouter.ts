import express, { Request, Response } from "express";
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
  (req: Request, res: Response) => {
    dailytaskController.getDailysubtasks(req, res);
  }
);
DailyTaskRoute.get(
  "/dailytasks/:id",
  accessTokenVerify,
  findUserByToken,
  dailyTaskCheck,
  (req: Request, res: Response) => {
    crudController.getByID(req, res);
  }
);
DailyTaskRoute.get("/dailytasks", (req: Request, res: Response) => {
  crudController.getAll(req, res);
});
DailyTaskRoute.post(
  "/dailytasks",
  accessTokenVerify,
  findUserByToken,
  (req: Request, res: Response) => {
    crudController.create(req, res);
  }
);
DailyTaskRoute.patch(
  "/dailytasks/:id",
  accessTokenVerify,
  findUserByToken,
  dailyTaskCheck,
  (req: Request, res: Response) => {
    crudController.update(req, res);
  }
);
DailyTaskRoute.delete(
  "/dailytasks/:id",
  accessTokenVerify,
  findUserByToken,
  dailyTaskCheck,
  (req: Request, res: Response) => {
    crudController.delete(req, res);
  }
);

export default DailyTaskRoute;
