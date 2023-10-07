import express, { Request, Response } from "express";
import { Router } from "express";
import { userService } from "../model/services/implementations/UserService";
import { CRUDController } from "../controllers/CRUDController";
import { UserController } from "../controllers/UserController";
import { userCheck } from "../middleware/UserCheck";

const UserRoute = Router();
const crudController = new CRUDController(userService);
const userController = new UserController();

UserRoute.use(express.json());

UserRoute.patch("/users/:id/changePassword", (req: Request, res: Response) => {
  userController.changePassword(req, res);
});

UserRoute.get("/users/folders", (req: Request, res: Response) => {
  userController.getFolders(req, res);
});

UserRoute.get("/users/usersPet", (req: Request, res: Response) => {
  userController.getUsersPet(req, res);
});

UserRoute.get("/users/signIn", (req: Request, res: Response) => {
  userController.signIn(req, res);
});

UserRoute.post("/users/signUp", (req: Request, res: Response) => {
  userController.signUp(req, res);
});

UserRoute.get("/users/:id", (req: Request, res: Response) => {
  crudController.getByID(req, res);
});

UserRoute.get("/users", userCheck, (req: Request, res: Response) => {
  crudController.getAll(req, res);
});

UserRoute.post("/users", (req: Request, res: Response) => {
  crudController.create(req, res);
});

UserRoute.patch("/users/:id", (req: Request, res: Response) => {
  crudController.update(req, res);
});

UserRoute.delete("/users", (req: Request, res: Response) => {
  crudController.delete(req, res);
});

UserRoute.get("/users/login/:login", (req: Request, res: Response) => {
  userController.getByLogin(req, res);
});

export default UserRoute;
