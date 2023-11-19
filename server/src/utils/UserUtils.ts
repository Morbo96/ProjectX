import { User } from "../model/domain/entities/user/users";
import { userService } from "../model/services/implementations/usersServices/UserService";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";

export async function getUserByToken(token: string) {
  const payload = jwt.decode(token) as JwtPayload;
  const userLogin = payload.login;
  const foundUser = await userService.getByLogin(userLogin);
  return foundUser;
}
