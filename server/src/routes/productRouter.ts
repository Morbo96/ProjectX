import express, { NextFunction, Request, Response } from "express";
import { Router } from "express";
import { CRUDController } from "../controllers/CRUDController";
import { findUserByToken } from "../middleware/FindUserByToken";
import { accessTokenVerify } from "../middleware/AccessTokenVerify";
import { foodService } from "../model/services/implementations/gamification/FoodService";
import { ProductController } from "../controllers/ProductController";

const ProductRouter = Router();
const crudController = new CRUDController(foodService);
const productController = new ProductController();

ProductRouter.use(express.json());

ProductRouter.get(
  "/product/:id",
  accessTokenVerify,
  findUserByToken,
  (req: Request, res: Response, next: NextFunction) => {
    crudController.getByID(req, res, next);
  }
);

ProductRouter.get(
  "/product",
  (req: Request, res: Response, next: NextFunction) => {
    crudController.getAll(req, res, next);
  }
);

ProductRouter.patch(
  "/product/:id",
  accessTokenVerify,
  findUserByToken,
  (req: Request, res: Response, next: NextFunction) => {
    crudController.update(req, res, next);
  }
);

ProductRouter.delete(
  "/product/:id",
  accessTokenVerify,
  findUserByToken,
  (req: Request, res: Response, next: NextFunction) => {
    crudController.delete(req, res, next);
  }
);

ProductRouter.patch(
  "/product/:id/buy",
  accessTokenVerify,
  findUserByToken,
  (req: Request, res: Response, next: NextFunction) => {
    productController.buy(req, res, next);
  }
);

export default ProductRouter;
