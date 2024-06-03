import express, { NextFunction, Request, Response } from "express";
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
const subtaskController = new SubtaskController();

SubtaskRoute.use(express.json());

SubtaskRoute.patch(
  "/subtasks/:id/complete",
  accessTokenVerify,
  findUserByToken,
  subtaskCheck,
  (req: Request, res: Response, next: NextFunction) => {
    subtaskController.complete(req, res, next);
  }
);

SubtaskRoute.get(
  "/subtasks/:id",
  accessTokenVerify,
  findUserByToken,
  subtaskCheck,
  (req: Request, res: Response, next: NextFunction) => {
    subtaskController.getById(req, res, next);
  }
);

SubtaskRoute.get(
  "/subtasks",
  (req: Request, res: Response, next: NextFunction) => {
    crudController.getAll(req, res, next);
  }
);

SubtaskRoute.patch(
  "/subtasks/:id",
  accessTokenVerify,
  findUserByToken,
  subtaskCheck,
  (req: Request, res: Response, next: NextFunction) => {
    subtaskController.update(req, res, next);
  }
);

SubtaskRoute.delete(
  "/subtasks/:id",
  accessTokenVerify,
  findUserByToken,
  subtaskCheck,
  (req: Request, res: Response, next: NextFunction) => {
    crudController.delete(req, res, next);
  }
);

export default SubtaskRoute;
