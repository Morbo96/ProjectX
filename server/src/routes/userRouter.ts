import express from "express";
import { Router } from "express";
import { userController } from "../controllers/userController";

const UserRoute = Router();

UserRoute.use(express.json())
UserRoute.post("/users", userController.createUser);
UserRoute.get("/users", userController.getAll);
UserRoute.get("/users/id", userController.getOneByID);

export default UserRoute;
