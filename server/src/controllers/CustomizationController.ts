import { NextFunction, Request, Response } from "express";
import { userPetService } from "../model/services/implementations/usersServices/UserPetService";
import { CustomizationType } from "../model/domain/entities/addition/CustomizationType";
import { UserPet } from "../model/domain/entities/user/usersPets";

export class CustomizationController {
  async addCustomization(req: Request, res: Response, next: NextFunction) {
    try {
      const userPet = await userPetService.getItemById(req.body.userPetId);
      const customizationType = await CustomizationType.findByPk(
        req.body.customizationTypeId
      );

      if (userPet.$has("customizationTypes", customizationType)) {
        res.status(500).json("Pet already has that customization!");
        return;
      }

      await userPet.$add("customizationTypes", customizationType);
      await userPet.update(userPet);

      const userPetWithProduct = await UserPet.findByPk(userPet.id, {
        include: [{ model: CustomizationType }],
      });

      res.status(200).json({ userPetWithProduct });
    } catch (error) {
      next(error);
    }
  }
  async deleteCustomization(req: Request, res: Response, next: NextFunction) {
    try {
      const userPet = await userPetService.getItemById(req.body.userPetId);
      const customizationType = await CustomizationType.findByPk(
        req.body.customizationTypeId
      );

      if (!userPet.$has("customizationTypes", customizationType)) {
        res.status(500).json("Pet doesn't have that customization!");
        return;
      }

      await userPet.$remove("customizationTypes", customizationType);
      await userPet.update(userPet);

      const userPetWithProduct = await UserPet.findByPk(userPet.id, {
        include: [{ model: CustomizationType }],
      });

      res.status(200).json({ userPetWithProduct });
    } catch (error) {
      next(error);
    }
  }
}
