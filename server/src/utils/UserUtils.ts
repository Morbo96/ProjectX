import { User } from "../model/domain/entities/user/users";
import { userService } from "../model/services/implementations/usersServices/UserService";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";

export async function generateAccessToken(user: User) {
  const accessSecret: Secret = process.env.JWT_ACCESS_SECRET;
  const accessToken = await jwt.sign(
    {
      login: user.login,
      password: user.passwordEncrypted,
      name: user.name,
    },
    accessSecret,
    { expiresIn: "30s" }
  );
  return accessToken;
}

export async function getUserByToken(token: string) {
  const payload = jwt.decode(token) as JwtPayload;
  const userLogin = payload.login;
  const foundUser = await userService.getByLogin(userLogin);
  return foundUser;
}
