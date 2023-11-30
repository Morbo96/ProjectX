import { Request, Response, NextFunction } from "express";
import { UserPet } from "../model/domain/entities/user/usersPets";

export const userPetCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userPet = await UserPet.findOne({
      where: { id: req.params.id, userId: req.body.userId },
    });
    if (!userPet) {
      return res.status(500).json({ message: "You don't have access" });
    }
    next();
  } catch (error) {
    next(error);
  }
};
