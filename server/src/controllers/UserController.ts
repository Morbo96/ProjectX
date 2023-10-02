import { Request, Response } from "express";
import { userService } from "../model/services/implementations/UserService";

export class UserController{

  async getByLogin(req: Request, res: Response) {
    try {
      const oneItem = await userService.getByLogin(req.params.login)
      res.json(oneItem);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async signIn(req: Request, res: Response){
    try {
      const user = await userService.getByLogin(req.body.login)
      if (user == null){
        res.status(500).json("Login or password incorrect")
      }
      else{
        const userPassword = user.passwordEncrypted
        if (req.body.passwordEncrypted == userPassword){
            res.status(200).json(user)
        }
        else{
            res.status(500).json("Login or password incorrect")
        }
      }
    } catch (error) {
        res.status(500).json(error)
    }
  }
  async signUp(req: Request, res: Response){
    try {
      if(validateEmail(req.body.email) == null){
        res.status(500).json("input correct email")
        return
      }
      if(validateLogin(req.body.login) == null){
        res.status(500).json("input login")
        return
      }
      if(req.body.passwordEncrypted == null){
        res.status(500).json("input password")
        return
      }
      const user = await userService.create(req.body)
      res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
  }
  async getUsersPet(req: Request, res: Response){
    try {
      const usersPets = await userService.getUsersPets(req.body.id);
      res.json(usersPets);
    } catch (error) {
      res.status(500).json(error)  
    }
  } 
}

const validateEmail = (email:string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

const validateLogin = (login:string) => {
return String(login)
    .toLowerCase()
    .match(
    /^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\d.-]{3,19}$/
    );
};


