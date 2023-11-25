import express, { Request, Response } from "express";
import { Router } from "express";
import { CRUDController } from "../controllers/CRUDController";
import { subtaskService } from "../model/services/implementations/tasksServices/SubtaskService";
import { SubtaskController } from "../controllers/SubtaskController";
import { subtaskInfoService } from "../model/services/implementations/tasksServices/SubtaskInfoService";
import { accessTokenVerify } from "../middleware/AccessTokenVerify";
import { findUserByToken } from "../middleware/FindUserByToken";
import { subtaskCheck } from "../middleware/SubtaskCheck";

const SubtaskRoute = Router();
const crudController = new CRUDController(subtaskService);
const crudInfoController = new CRUDController(subtaskInfoService);
const subtaskController = new SubtaskController();

SubtaskRoute.use(express.json());

SubtaskRoute.get(
  "/subtasks/:id",
  accessTokenVerify,
  findUserByToken,
  subtaskCheck,
  (req: Request, res: Response) => {
    crudController.getByID(req, res);
  }
);
SubtaskRoute.get("/subtasks", (req: Request, res: Response) => {
  crudController.getAll(req, res);
});
SubtaskRoute.post("/subtasks", (req: Request, res: Response) => {
  subtaskController.createSubtask(req, res);
});
SubtaskRoute.patch(
  "/subtasks/:id",
  accessTokenVerify,
  findUserByToken,
  subtaskCheck,
  (req: Request, res: Response) => {
    crudController.update(req, res);
  }
);
SubtaskRoute.delete(
  "/subtasks/:id",
  accessTokenVerify,
  findUserByToken,
  subtaskCheck,
  (req: Request, res: Response) => {
    crudController.delete(req, res);
  }
);

export default SubtaskRoute;
