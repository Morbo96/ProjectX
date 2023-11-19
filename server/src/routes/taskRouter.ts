import express, { Request, Response } from "express";
import { Router } from "express";
import { CRUDController } from "../controllers/CRUDController";
import { taskService } from "../model/services/implementations/tasksServices/TaskService";
import { TaskController } from "../controllers/TaskController";

const TaskRoute = Router();
const crudController = new CRUDController(taskService);
const taskController = new TaskController();

TaskRoute.use(express.json());

TaskRoute.get("/tasks/:id/subtasks", (req: Request, res: Response) => {
  taskController.getSubtasks(req, res);
});
TaskRoute.get("/tasks/:id", (req: Request, res: Response) => {
  crudController.getByID(req, res);
});
TaskRoute.get("/tasks", (req: Request, res: Response) => {
  crudController.getAll(req, res);
});
TaskRoute.post("/tasks", (req: Request, res: Response) => {
  crudController.create(req, res);
});
TaskRoute.patch("/tasks/:id", (req: Request, res: Response) => {
  crudController.update(req, res);
});
TaskRoute.delete("/tasks", (req: Request, res: Response) => {
  crudController.delete(req, res);
});

export default TaskRoute;
