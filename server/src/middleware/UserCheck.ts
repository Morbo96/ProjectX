import { Request, Response, NextFunction } from "express";
import { Folder } from "../model/domain/entities/tasks/folders";
import { User } from "../model/domain/entities/user/users";

export const userCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.body.userId != req.params.id) {
      return res.status(500).json({ message: "You don't have access" });
    }
    next();
  } catch (error) {
    next(error);
  }
};
