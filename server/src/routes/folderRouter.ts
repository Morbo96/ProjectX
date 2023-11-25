import express, { Request, Response } from "express";
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
  (req: Request, res: Response) => {
    folderController.getGoals(req, res);
  }
);

FolderRoute.post(
  "/folders/:id/goals",
  accessTokenVerify,
  findUserByToken,
  folderCheck,
  (req: Request, res: Response) => {
    folderController.createGoal(req, res);
  }
);

FolderRoute.get(
  "/folders/:id",
  accessTokenVerify,
  findUserByToken,
  folderCheck,
  (req: Request, res: Response) => {
    crudController.getByID(req, res);
  }
);

FolderRoute.get("/folders", (req: Request, res: Response) => {
  crudController.getAll(req, res);
});

FolderRoute.post(
  "/folders",
  accessTokenVerify,
  findUserByToken,
  (req: Request, res: Response) => {
    crudController.create(req, res);
  }
);

FolderRoute.patch(
  "/folders/:id",
  accessTokenVerify,
  findUserByToken,
  folderCheck,
  (req: Request, res: Response) => {
    crudController.update(req, res);
  }
);

FolderRoute.delete(
  "/folders/:id",
  accessTokenVerify,
  findUserByToken,
  folderCheck,
  (req: Request, res: Response) => {
    crudController.delete(req, res);
  }
);

export default FolderRoute;
