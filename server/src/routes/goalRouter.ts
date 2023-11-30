import express, { NextFunction, Request, Response } from "express";
import { Router } from "express";
import { goalService } from "../model/services/implementations/tasksServices/GoalService";
import { CRUDController } from "../controllers/CRUDController";
import { GoalController } from "../controllers/GoalController";
import { accessTokenVerify } from "../middleware/AccessTokenVerify";
import { findUserByToken } from "../middleware/FindUserByToken";
import { goalCheck } from "../middleware/GoalCheck";

const GoalRoute = Router();
const crudController = new CRUDController(goalService);
const goalController = new GoalController();

GoalRoute.use(express.json());

GoalRoute.get(
  "/goals/:id/tasks",
  accessTokenVerify,
  findUserByToken,
  goalCheck,
  (req: Request, res: Response, next: NextFunction) => {
    goalController.getTasks(req, res, next);
  }
);
GoalRoute.post(
  "/goals/:id/tasks",
  accessTokenVerify,
  findUserByToken,
  goalCheck,
  (req: Request, res: Response, next: NextFunction) => {
    goalController.createTask(req, res, next);
  }
);
GoalRoute.get(
  "/goals/:id",
  accessTokenVerify,
  findUserByToken,
  goalCheck,
  (req: Request, res: Response, next: NextFunction) => {
    crudController.getByID(req, res, next);
  }
);
GoalRoute.get("/goals", (req: Request, res: Response, next: NextFunction) => {
  crudController.getAll(req, res, next);
});
GoalRoute.patch(
  "/goals/:id",
  accessTokenVerify,
  findUserByToken,
  goalCheck,
  (req: Request, res: Response, next: NextFunction) => {
    crudController.update(req, res, next);
  }
);
GoalRoute.delete(
  "/goals/:id",
  accessTokenVerify,
  findUserByToken,
  goalCheck,
  (req: Request, res: Response, next: NextFunction) => {
    crudController.delete(req, res, next);
  }
);

export default GoalRoute;
