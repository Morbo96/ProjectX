import { DailyTaskHelper } from "../../../domain/entities/dailyTasks/dailyTaskHelper";
import { CRUDServiceInterface } from "../../interfaces/CRUDServiceInterface";

class DailyTaskHelperService implements CRUDServiceInterface<DailyTaskHelper>{
    
  async itemExists(id:number) {
    try {
      const result = await DailyTaskHelper.findOne({where:{id}});
        
      return result ? true:false;

    } catch (error) {

      return false;

      }
    }

  async update(item:DailyTaskHelper){
    try {
      await DailyTaskHelper.update(item, {where:{id:item.id}})

      const result = await DailyTaskHelper.findByPk(item.id)

      return result;

    } catch (error) {

      console.log(error)

      return null;

      }
    }

  async getAll(){
    try {
      const result = await DailyTaskHelper.findAll();

      return result;

    } catch(error){

      return null;

      }
    }

  async getItemById (id:Number) {
    try{
      const result = await DailyTaskHelper.findOne({where:{id}})

      return result;

    } catch (error){

      return null;

    }
  }

  async create (dailyTaskHelper: DailyTaskHelper ){
    try {
      const result = await DailyTaskHelper.create(dailyTaskHelper);

      return result;

    } catch(error){
      
      return null;

    }
  }
  
  async deleteItem(id:Number){
    try{
      await DailyTaskHelper.destroy({where: {id}})

      return true;

    } catch(error){

      return false;

    }

  }
}
export const dailyTaskHelperService = new DailyTaskHelperService()