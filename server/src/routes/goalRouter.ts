import express, { Request, Response } from "express";
import { Router } from "express";
import { goalService } from "../model/services/implementations/tasksServices/GoalService";
import { CRUDController } from "../controllers/CRUDController";
import { GoalController } from "../controllers/GoalController";

const GoalRoute = Router();
const crudController = new CRUDController(goalService);
const goalController = new GoalController();

GoalRoute.use(express.json());

GoalRoute.get("/goals/:id/tasks", (req: Request, res: Response) => {
  goalController.getTasks(req, res);
});
GoalRoute.get("/goals/:id", (req: Request, res: Response) => {
  crudController.getByID(req, res);
});
GoalRoute.get("/goals", (req: Request, res: Response) => {
  crudController.getAll(req, res);
});
GoalRoute.post("/goals", (req: Request, res: Response) => {
  crudController.create(req, res);
});
GoalRoute.patch("/goals/:id", (req: Request, res: Response) => {
  crudController.update(req, res);
});
GoalRoute.delete("/goals", (req: Request, res: Response) => {
  crudController.delete(req, res);
});

export default GoalRoute;
