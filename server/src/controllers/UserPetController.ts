import { NextFunction, Request, Response } from "express";
import { userPetService } from "../model/services/implementations/usersServices/UserPetService";
import { foodService } from "../model/services/implementations/gamification/FoodService";
import { UserFood } from "../model/domain/entities/gamification/UserFood";

export class UserPetController {
  async feed(req: Request, res: Response, next: NextFunction) {
    try {
      const food = await foodService.getItemById(Number(req.body.foodId));
      const userFood = await UserFood.findOne({
        where: { userId: Number(req.body.userId), foodId: food.id },
      });
      if (!userFood) {
        res.json("Don't have this food on user");
        return;
      }
      if (userFood.quantity <= 0) {
        res.json("Not enough food on user");
        return;
      }

      const userPet = await userPetService.getItemById(Number(req.params.id));
      userPet.hunger = Math.max(0, userPet.hunger - food.nourishmentValue);
      userPet.lastFed = new Date();
      await userPetService.update(userPet.toJSON());

      await UserFood.decrement("quantity", {
        where: { userId: Number(req.body.userId), foodId: food.id },
      });
      res.status(200).json({ userPet });
    } catch (error) {
      next(error);
    }
  }
}
