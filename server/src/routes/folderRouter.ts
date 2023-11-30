import express, { NextFunction, Request, Response } from "express";
import { Router } from "express";
import { CRUDController } from "../controllers/CRUDController";
import { folderService } from "../model/services/implementations/tasksServices/FolderService";
import { FolderController } from "../controllers/FolderController";
import { accessTokenVerify } from "../middleware/AccessTokenVerify";
import { findUserByToken } from "../middleware/FindUserByToken";
import { folderCheck } from "../middleware/FolderCheck";

const FolderRoute = Router();
const crudController = new CRUDController(folderService);
const folderController = new FolderController();

FolderRoute.use(express.json());

FolderRoute.get(
  "/folders/:id/goals",
  accessTokenVerify,
  findUserByToken,
  folderCheck,
  (req: Request, res: Response, next: NextFunction) => {
    folderController.getGoals(req, res, next);
  }
);

FolderRoute.post(
  "/folders/:id/goals",
  accessTokenVerify,
  findUserByToken,
  folderCheck,
  (req: Request, res: Response, next: NextFunction) => {
    folderController.createGoal(req, res, next);
  }
);

FolderRoute.get(
  "/folders/:id",
  accessTokenVerify,
  findUserByToken,
  folderCheck,
  (req: Request, res: Response, next: NextFunction) => {
    crudController.getByID(req, res, next);
  }
);

FolderRoute.get(
  "/folders",
  (req: Request, res: Response, next: NextFunction) => {
    crudController.getAll(req, res, next);
  }
);

FolderRoute.post(
  "/folders",
  accessTokenVerify,
  findUserByToken,
  (req: Request, res: Response, next: NextFunction) => {
    crudController.create(req, res, next);
  }
);

FolderRoute.patch(
  "/folders/:id",
  accessTokenVerify,
  findUserByToken,
  folderCheck,
  (req: Request, res: Response, next: NextFunction) => {
    crudController.update(req, res, next);
  }
);

FolderRoute.delete(
  "/folders/:id",
  accessTokenVerify,
  findUserByToken,
  folderCheck,
  (req: Request, res: Response, next: NextFunction) => {
    crudController.delete(req, res, next);
  }
);

export default FolderRoute;
