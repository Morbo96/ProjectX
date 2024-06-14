import { NextFunction, Request, Response } from "express";
import { userService } from "../model/services/implementations/usersServices/UserService";
import { foodService } from "../model/services/implementations/gamification/FoodService";
import { UserFood } from "../model/domain/entities/gamification/UserFood";
import { User } from "../model/domain/entities/user/users";
import { Food } from "../model/domain/entities/gamification/Food";
import { userBankService } from "../model/services/implementations/usersServices/UserBankService";
import { UserBank } from "../model/domain/entities/user/usersBanks";
import { Product } from "../model/domain/entities/addition/Product";

export class ProductController {
  async buy(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await userService.getItemById(req.body.userId);
      const userBank = await UserBank.findOne({ where: { userId: user.id } });
      const product = await Product.findByPk(req.body.productId);
      const productType = await product.$get("productType");

      if (user.$has("products", product)) {
        res.status(500).json("User already has that product!");
        return;
      }
      if (userBank.money < productType.price) {
        res.status(500).json("Not enough money!");
        return;
      }

      await user.$add("products", product);
      await userService.update(user);

      userBank.money -= productType.price;
      await userBankService.update(userBank.toJSON());

      const userWithProduct = await User.findByPk(user.id, {
        include: [{ model: Product }],
      });

      res.status(200).json({ userWithProduct });
    } catch (error) {
      next(error);
    }
  }
}
