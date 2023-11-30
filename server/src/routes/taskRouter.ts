import express, { NextFunction, Request, Response } from "express";
import { Router } from "express";
import { CRUDController } from "../controllers/CRUDController";
import { taskService } from "../model/services/implementations/tasksServices/TaskService";
import { TaskController } from "../controllers/TaskController";
import { accessTokenVerify } from "../middleware/AccessTokenVerify";
import { findUserByToken } from "../middleware/FindUserByToken";
import { taskCheck } from "../middleware/TaskCheck";

const TaskRoute = Router();
const crudController = new CRUDController(taskService);
const taskController = new TaskController();

TaskRoute.use(express.json());

TaskRoute.get(
  "/tasks/:id/subtasks",
  accessTokenVerify,
  findUserByToken,
  taskCheck,
  (req: Request, res: Response, next: NextFunction) => {
    taskController.getSubtasks(req, res, next);
  }
);

TaskRoute.post(
  "/tasks/:id/subtasks",
  accessTokenVerify,
  findUserByToken,
  taskCheck,
  (req: Request, res: Response, next: NextFunction) => {
    taskController.createSubtask(req, res, next);
  }
);

TaskRoute.get(
  "/tasks/:id",
  accessTokenVerify,
  findUserByToken,
  taskCheck,
  (req: Request, res: Response, next: NextFunction) => {
    crudController.getByID(req, res, next);
  }
);

TaskRoute.get(
  "/tasks",
  accessTokenVerify,
  findUserByToken,
  (req: Request, res: Response, next: NextFunction) => {
    taskController.getUsersTasks(req, res, next);
  }
);
TaskRoute.patch(
  "/tasks/:id",
  accessTokenVerify,
  findUserByToken,
  taskCheck,
  (req: Request, res: Response, next: NextFunction) => {
    crudController.update(req, res, next);
  }
);
TaskRoute.delete(
  "/tasks/:id",
  accessTokenVerify,
  findUserByToken,
  taskCheck,
  (req: Request, res: Response, next: NextFunction) => {
    crudController.delete(req, res, next);
  }
);

export default TaskRoute;
