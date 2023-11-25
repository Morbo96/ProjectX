import express, { Request, Response } from "express";
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
  (req: Request, res: Response) => {
    taskController.getSubtasks(req, res);
  }
);

TaskRoute.post(
  "/tasks/:id/subtasks",
  accessTokenVerify,
  findUserByToken,
  taskCheck,
  (req: Request, res: Response) => {
    taskController.createSubtask(req, res);
  }
);

TaskRoute.get(
  "/tasks/:id",
  accessTokenVerify,
  findUserByToken,
  taskCheck,
  (req: Request, res: Response) => {
    crudController.getByID(req, res);
  }
);

TaskRoute.get("/tasks", (req: Request, res: Response) => {
  crudController.getAll(req, res);
});
TaskRoute.patch(
  "/tasks/:id",
  accessTokenVerify,
  findUserByToken,
  taskCheck,
  (req: Request, res: Response) => {
    crudController.update(req, res);
  }
);
TaskRoute.delete(
  "/tasks/:id",
  accessTokenVerify,
  findUserByToken,
  taskCheck,
  (req: Request, res: Response) => {
    crudController.delete(req, res);
  }
);

export default TaskRoute;
