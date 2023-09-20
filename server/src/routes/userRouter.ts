import express from "express";
import { Router } from "express";
import { CRUDController } from "../controllers/CRUDController";
import { UserService } from "../model/services/implementations/UserService";

const UserRoute = Router();
const userService = new UserService();
const crudController = new CRUDController(userService)

UserRoute.use(express.json())
UserRoute.post("/users", crudController.createUser);
UserRoute.get("/users", crudController.getAll);
// UserRoute.get("/users/id", CRUDController.getOneByID);
// UserRoute.get("/users/tasks", CRUDController.getAllByTask);

export default UserRoute;
