import { UserBank } from "../../../domain/entities/user/usersBanks";
import { CRUDServiceInterface } from "../../interfaces/CRUDServiceInterface";


class UserBankService implements CRUDServiceInterface<UserBank>{
    
  async itemExists (id:number) {
    try {
      const result = await UserBank.findOne({where:{id}});
        
      return result ? true:false;

    } catch (error) {

      return false;

      }
    }

  async update(item:UserBank){
    try {
      await UserBank.update(item,{where:{id:item.id}})

      const result = await UserBank.findByPk(item.id)

      return result;

    } catch (error) {

      console.log(error)

      return null;

      }
    }

  async getAll(){
    try {
      const result = await UserBank.findAll();

      return result;

    } catch(error){

      return null;

      }
    }

  async getItemById (id:number) {
    try{
      const result = await UserBank.findOne({where:{id}})

      return result;

    } catch (error){

      return null;

    }
  }

  async create (userBank: UserBank ){
    try {

      const result = await UserBank.create(userBank);

      return result;

    } catch(error){
      
      return null;

    }
  }
  
  async deleteItem(id:number){
    try{
      await UserBank.destroy({where: {id}})

      return true;

    } catch(error){

      return false;

    }
  }
}
export const userBankService = new UserBankService()