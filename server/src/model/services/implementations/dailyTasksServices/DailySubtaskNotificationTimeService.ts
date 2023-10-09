import { DailySubtaskNotificationTime } from "../../../domain/entities/dailyTasks/dailySubtaskNotificationTime";
import { CRUDServiceInterface } from "../../interfaces/CRUDServiceInterface";

class DailySubtaskNotificationTimeService implements CRUDServiceInterface<DailySubtaskNotificationTime>{
    
  async itemExists(id:number) {
    try {
      const result = await DailySubtaskNotificationTime.findOne({where:{id}});
        
      return result ? true:false;

    } catch (error) {

      return false;

      }
    }

  async update(item:DailySubtaskNotificationTime){
    try {
      await DailySubtaskNotificationTime.update(item, {where:{id:item.id}})

      const result = await DailySubtaskNotificationTime.findByPk(item.id)

      return result;

    } catch (error) {

      console.log(error)

      return null;

      }
    }

  async getAll(){
    try {
      const result = await DailySubtaskNotificationTime.findAll();

      return result;

    } catch(error){

      return null;

      }
    }

  async getItemById (id:Number) {
    try{
      const result = await DailySubtaskNotificationTime.findOne({where:{id}})

      return result;

    } catch (error){

      return null;

    }
  }

  async create (dailySubtaskNotificationTime: DailySubtaskNotificationTime ){
    try {
      const result = await DailySubtaskNotificationTime.create(dailySubtaskNotificationTime);

      return result;

    } catch(error){
      
      return null;

    }
  }
  
  async deleteItem(id:Number){
    try{
      await DailySubtaskNotificationTime.destroy({where: {id}})

      return true;

    } catch(error){

      return false;

    }

  }
}
export const dailySubtaskNotificationTimeService = new DailySubtaskNotificationTimeService()