import { Request, Response, NextFunction } from "express";
import { Folder } from "../model/domain/entities/tasks/folders";

export const folderCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const folder = await Folder.findOne({
      where: { id: req.params.id, userId: req.body.userId },
    });
    if (!folder) {
      return res.status(500).json({ message: "You don't have access" });
    }
    next();
  } catch (error) {
    next(error);
  }
};
