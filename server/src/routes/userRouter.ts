import express, { Request, Response } from "express";
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
  (req: Request, res: Response) => {
    userController.getDailyTasks(req, res);
  }
);

UserRoute.get(
  "/users/folders",
  accessTokenVerify,
  findUserByToken,
  (req: Request, res: Response) => {
    userController.getFolders(req, res);
  }
);

UserRoute.get(
  "/users/usersPet",
  accessTokenVerify,
  findUserByToken,
  (req: Request, res: Response) => {
    userController.getUsersPet(req, res);
  }
);

UserRoute.get(
  "/users/:id",
  accessTokenVerify,
  findUserByToken,
  userCheck,
  (req: Request, res: Response) => {
    crudController.getByID(req, res);
  }
);

UserRoute.get("/users", (req: Request, res: Response) => {
  crudController.getAll(req, res);
});

UserRoute.patch(
  "/users/:id",
  accessTokenVerify,
  findUserByToken,
  userCheck,
  (req: Request, res: Response) => {
    crudController.update(req, res);
  }
);

UserRoute.delete(
  "/users/:id",
  accessTokenVerify,
  findUserByToken,
  userCheck,
  (req: Request, res: Response) => {
    crudController.delete(req, res);
  }
);

export default UserRoute;
