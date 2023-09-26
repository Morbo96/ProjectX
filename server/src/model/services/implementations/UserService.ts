import { User } from "../../domain/entities/users";
import { ItemServiceInterface } from "../interfaces/ItemServiceInterface";
import { UserServiceInterface } from "../interfaces/UserServiceInterface";


class UserService implements ItemServiceInterface<User>, UserServiceInterface{
    
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

  async getItemById (id:Number) {
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
  
  async deleteItem(id:Number){
    try{
      await User.destroy({where: {id}})

      return true;

    } catch(error){

      return false;

    }

  }
}
export const userService = new UserService()