import { Model } from "sequelize-typescript";
import { User } from "../../domain/entities/users";
import { ItemServiceInterface } from "../interfaces/ItemServiceInterface";
import { UserServiceInterface } from "../interfaces/UserServiceInterface";

export class UserService implements ItemServiceInterface<User>,UserServiceInterface<User>{
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
            const result = await User.findByPk(item.id);

            await User.update(item,{where:item.id})

            return true;

          } catch (error) {

            return false;

          }
    }
    ////////////////////////////////////////////////////////////////////
    async create (user: User ){
      const createdUser = await User.create(user);
      return createdUser;
    }
    // export const findAll = async (): Promise<Item[]> => Object.values(items);

    // export const find = async (id: number): Promise<Item> => items[id];
}