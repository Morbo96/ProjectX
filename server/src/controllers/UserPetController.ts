import { NextFunction, Request, Response } from "express";
import { userService } from "../model/services/implementations/usersServices/UserService";
import { userPetService } from "../model/services/implementations/usersServices/UserPetService";

export class UserPetController {
  async calculateCurrentHunger(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const hungerMultiplierRate = Number("0.0463"); //FUTURE hungerMultiplier should be in env
      const userPet = await userPetService.getItemById(Number(req.params.id));
      const currentTime = new Date();
      const minutesPassed =
        (currentTime.getTime() - userPet.lastFed.getTime()) / (60 * 1000);

      userPet.hunger = Math.min(
        Math.round(userPet.hunger + minutesPassed * hungerMultiplierRate),
        100
      );
      await userPetService.update(userPet);
      res.status(200).json(userPet);
    } catch (error) {
      next(error);
    }
  }
  async feed(req: Request, res: Response, next: NextFunction) {
    try {
      const userPet = await userPetService.getItemById(Number(req.params.id));

      userPet.lastFed = new Date();
      await userPetService.update(userPet);
    } catch (error) {
      next(error);
    }
  }
}
