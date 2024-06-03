import express, { NextFunction, Request, Response } from "express";
import { Router } from "express";
import { userPetService } from "../model/services/implementations/usersServices/UserPetService";
import { CRUDController } from "../controllers/CRUDController";
import { findUserByToken } from "../middleware/FindUserByToken";
import { accessTokenVerify } from "../middleware/AccessTokenVerify";
import { userPetCheck } from "../middleware/UserPetCheck";
import { foodService } from "../model/services/implementations/gamification/FoodService";
import { FoodController } from "../controllers/FoodController";
import sequelize from "../model/domain/dbConnection";

const FoodRoute = Router();
const crudController = new CRUDController(foodService);
const foodController = new FoodController();

FoodRoute.use(express.json());

FoodRoute.get(
  "/food/:id",
  accessTokenVerify,
  findUserByToken,
  (req: Request, res: Response, next: NextFunction) => {
    crudController.getByID(req, res, next);
  }
);

FoodRoute.get("/food", (req: Request, res: Response, next: NextFunction) => {
  crudController.getAll(req, res, next);
});

FoodRoute.post("/food", (req: Request, res: Response, next: NextFunction) => {
  crudController.create(req, res, next);
}); //TODO не забудь убрать

FoodRoute.patch(
  "/food/:id",
  accessTokenVerify,
  findUserByToken,
  (req: Request, res: Response, next: NextFunction) => {
    crudController.update(req, res, next);
  }
);

FoodRoute.delete(
  "/food/:id",
  accessTokenVerify,
  findUserByToken,
  (req: Request, res: Response, next: NextFunction) => {
    crudController.delete(req, res, next);
  }
);

FoodRoute.patch(
  "/food/:id/buy",
  accessTokenVerify,
  findUserByToken,
  (req: Request, res: Response, next: NextFunction) => {
    foodController.buy(req, res, next);
  }
);

export default FoodRoute;
