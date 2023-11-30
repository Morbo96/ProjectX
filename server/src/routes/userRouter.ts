import express, { NextFunction, Request, Response } from "express";
import { Router } from "express";
import { userService } from "../model/services/implementations/usersServices/UserService";
import { CRUDController } from "../controllers/CRUDController";
import { UserController } from "../controllers/UserController";
import { accessTokenVerify } from "../middleware/AccessTokenVerify";
import { findUserByToken } from "../middleware/FindUserByToken";
import { userCheck } from "../middleware/UserCheck";

const UserRoute = Router();
const crudController = new CRUDController(userService);
const userController = new UserController();

UserRoute.use(express.json());

UserRoute.get(
  "/users/dailyTasks",
  accessTokenVerify,
  findUserByToken,
  (req: Request, res: Response, next: NextFunction) => {
    userController.getDailyTasks(req, res, next);
  }
);

UserRoute.get(
  "/users/folders",
  accessTokenVerify,
  findUserByToken,
  (req: Request, res: Response, next: NextFunction) => {
    userController.getFolders(req, res, next);
  }
);

UserRoute.get(
  "/users/usersPet",
  accessTokenVerify,
  findUserByToken,
  (req: Request, res: Response, next: NextFunction) => {
    userController.getUsersPet(req, res, next);
  }
);

UserRoute.get(
  "/users/:id",
  accessTokenVerify,
  findUserByToken,
  userCheck,
  (req: Request, res: Response, next: NextFunction) => {
    crudController.getByID(req, res, next);
  }
);

UserRoute.get("/users", (req: Request, res: Response, next: NextFunction) => {
  crudController.getAll(req, res, next);
});

UserRoute.patch(
  "/users/:id",
  accessTokenVerify,
  findUserByToken,
  userCheck,
  (req: Request, res: Response, next: NextFunction) => {
    crudController.update(req, res, next);
  }
);

UserRoute.delete(
  "/users/:id",
  accessTokenVerify,
  findUserByToken,
  userCheck,
  (req: Request, res: Response, next: NextFunction) => {
    crudController.delete(req, res, next);
  }
);

export default UserRoute;
