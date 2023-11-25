import express, { Request, Response } from "express";
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
  (req: Request, res: Response) => {
    goalController.getTasks(req, res);
  }
);
GoalRoute.post(
  "/goals/:id/tasks",
  accessTokenVerify,
  findUserByToken,
  goalCheck,
  (req: Request, res: Response) => {
    goalController.createTask(req, res);
  }
);
GoalRoute.get(
  "/goals/:id",
  accessTokenVerify,
  findUserByToken,
  goalCheck,
  (req: Request, res: Response) => {
    crudController.getByID(req, res);
  }
);
GoalRoute.get("/goals", (req: Request, res: Response) => {
  crudController.getAll(req, res);
});
GoalRoute.patch(
  "/goals/:id",
  accessTokenVerify,
  findUserByToken,
  goalCheck,
  (req: Request, res: Response) => {
    crudController.update(req, res);
  }
);
GoalRoute.delete(
  "/goals/:id",
  accessTokenVerify,
  findUserByToken,
  goalCheck,
  (req: Request, res: Response) => {
    crudController.delete(req, res);
  }
);

export default GoalRoute;
