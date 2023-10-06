import { Folder } from "../../domain/entities/tasks/folders";
import { User } from "../../domain/entities/user/users";
import { UserPet } from "../../domain/entities/user/usersPets";
import { CRUDServiceInterface } from "../interfaces/CRUDServiceInterface";
import { UserServiceInterface } from "../interfaces/UserServiceInterface";


class UserService implements CRUDServiceInterface<User>, UserServiceInterface{
    
  async getByLogin(login:string){
    try {
      const result = await User.findOne({where:{login: login}});

      return result;

    } catch (error) {

      return null;

    }
  }

  async getUsersPets(userId:number){
    try {
      const result = await UserPet.findAll({where:{userId:userId}}) 

      return result

    } catch (error) {

      return null
      
    }
  }

  async getFolders(userId:number){
    try {
      const result = await Folder.findAll({where:{userId:userId}}) 

      return result

    } catch (error) {
      
      return null

    }
  }

  async changePassword(id:number, newPassword:string){// возможно нет смысла
    try {
      const result = await User.findByPk(id);

      if (result == null) return false;

      const oldPassword = result.passwordEncrypted

      await result.update({passwordEncrypted: newPassword})

      return oldPassword != result.passwordEncrypted;

    } catch (error) {
      
      return false

    }
  }

  async itemExists (id:number) {
    try {
      const result = await User.findOne({where:{id}});
        
      return result ? true:false;

    } catch (error) {

      return false;

      }
    }

  async update(item:User){
    try {
      await User.update(item,{where:{id:item.id}})

      const result = await User.findByPk(item.id)

      return result;

    } catch (error) {

      console.log(error)

      return null;

      }
    }

  async getAll(){
    try {
      const result = await User.findAll();

      return result;

    } catch(error){

      return null;

      }
    }

  async getItemById (id:number) {
    try{
      const result = await User.findOne({where:{id}})

      return result;

    } catch (error){

      return null;

    }
  }

  async create (user: User ){
    try {
      const result = await User.create(user);

      return result;

    } catch(error){
      
      return null;

    }
  }
  
  async deleteItem(id:number){
    try{
      await User.destroy({where: {id}})

      return true;

    } catch(error){

      return false;

    }
  }
}
export const userService = new UserService()