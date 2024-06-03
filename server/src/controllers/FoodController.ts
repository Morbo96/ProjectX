import { NextFunction, Request, Response } from "express";
import { userService } from "../model/services/implementations/usersServices/UserService";
import { foodService } from "../model/services/implementations/gamification/FoodService";
import { UserFood } from "../model/domain/entities/gamification/UserFood";
import { User } from "../model/domain/entities/user/users";
import { Food } from "../model/domain/entities/gamification/Food";
import { userBankService } from "../model/services/implementations/usersServices/UserBankService";
import { UserBank } from "../model/domain/entities/user/usersBanks";

export class FoodController {
  async buy(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await userService.getItemById(req.body.userId);
      const userBank = await UserBank.findOne({ where: { userId: user.id } });
      const food = await foodService.getItemById(Number(req.params.id));

      if (userBank.money < food.cost) {
        res.status(500).json("Not enough money!");
        return;
      }
      if (!(await user.$has("foods", food))) {
        await user.$add("foods", food, { through: { quantity: 1 } });
      } else {
        await UserFood.increment("quantity", {
          where: { userId: user.id, foodId: food.id },
        });
      }

      userBank.money -= food.cost;
      await userBankService.update(userBank.toJSON());

      const userWithFood = await User.findByPk(user.id, {
        include: [{ model: Food }],
      });

      res.status(200).json({ userWithFood });
    } catch (error) {
      next(error);
    }
  }
}
