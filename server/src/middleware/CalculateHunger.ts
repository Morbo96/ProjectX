import { Request, Response, NextFunction } from "express";
import { userPetService } from "../model/services/implementations/usersServices/UserPetService";

export const calculateCurrentHunger = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const hungerMultiplierRate = Number(process.env.HUNGER_MULTIPLIER_RATE);
    const userPet = await userPetService.getItemById(Number(req.params.id));
    const currentTime = new Date();
    const minutesPassed =
      (currentTime.getTime() - userPet.lastFed.getTime()) / (60 * 1000);

    userPet.hunger = Math.min(
      Math.round(userPet.hunger + minutesPassed * hungerMultiplierRate),
      100
    );
    await userPetService.update(userPet.toJSON());
    next();
  } catch (error) {
    next(error);
  }
};
