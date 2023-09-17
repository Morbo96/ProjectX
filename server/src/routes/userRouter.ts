import { Router } from "express";
import { userController } from "../controllers/userController";

const UserRoute = Router();

UserRoute.post("/users", userController.createUser);
UserRoute.get("/users", userController.getAll);

export default UserRoute;
