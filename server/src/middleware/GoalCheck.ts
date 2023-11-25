import { Request, Response, NextFunction } from "express";
import { Goal } from "../model/domain/entities/tasks/goals";
import { Folder } from "../model/domain/entities/tasks/folders";

export const goalCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const goal = await Goal.findOne({
      where: { id: req.params.id },
      include: [
        { model: Folder, where: { userId: req.body.userId }, required: true },
      ],
    });
    if (!goal) {
      return res.status(500).json({ message: "You don't have access" });
    }
    next();
  } catch (error) {
    const err = error as Error;
    res.status(500).json(err.message);
  }
};
