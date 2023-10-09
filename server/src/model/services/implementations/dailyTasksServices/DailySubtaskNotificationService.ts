import { DailySubtaskNotification } from "../../../domain/entities/dailyTasks/dailySubtaskNotifications";
import { CRUDServiceInterface } from "../../interfaces/CRUDServiceInterface";

class DailySubtaskNotificationService implements CRUDServiceInterface<DailySubtaskNotification>{
    
  async itemExists(id:number) {
    try {
      const result = await DailySubtaskNotification.findOne({where:{id}});
        
      return result ? true:false;

    } catch (error) {

      return false;

      }
    }

  async update(item:DailySubtaskNotification){
    try {
      await DailySubtaskNotification.update(item, {where:{id:item.id}})

      const result = await DailySubtaskNotification.findByPk(item.id)

      return result;

    } catch (error) {

      console.log(error)

      return null;

      }
    }

  async getAll(){
    try {
      const result = await DailySubtaskNotification.findAll();

      return result;

    } catch(error){

      return null;

      }
    }

  async getItemById (id:Number) {
    try{
      const result = await DailySubtaskNotification.findOne({where:{id}})

      return result;

    } catch (error){

      return null;

    }
  }

  async create (dailySubtaskNotification: DailySubtaskNotification ){
    try {
      const result = await DailySubtaskNotification.create(dailySubtaskNotification);

      return result;

    } catch(error){
      
      return null;

    }
  }
  
  async deleteItem(id:Number){
    try{
      await DailySubtaskNotification.destroy({where: {id}})

      return true;

    } catch(error){

      return false;

    }
  }
}
export const dailySubtaskNotificationService = new DailySubtaskNotificationService()