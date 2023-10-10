import { DailySubtask } from "../../../domain/entities/dailyTasks/dailySubtasks";
import { DailyTask } from "../../../domain/entities/dailyTasks/dailyTasks";
import { CRUDServiceInterface } from "../../interfaces/CRUDServiceInterface";
import { DailyTaskServiceInterface } from "../../interfaces/DailytaskServiceInterface";

class DailyTaskService implements CRUDServiceInterface<DailyTask>,DailyTaskServiceInterface{
    
  async getDailysubtasks(dailyTaskId:number){
    try {
      const result = await DailySubtask.findAll({where:{dailyTaskId:dailyTaskId}}) 

      return result

    } catch (error) {

      return null
      
    }
  }
  
  async itemExists(id:number) {
    try {
      const result = await DailyTask.findOne({where:{id}});
        
      return result ? true:false;

    } catch (error) {

      return false;

      }
    }

  async update(item:DailyTask){
    try {
      await DailyTask.update(item, {where:{id:item.id}})

      const result = await DailyTask.findByPk(item.id)

      return result;

    } catch (error) {

      console.log(error)

      return null;

      }
    }

  async getAll(){
    try {
      const result = await DailyTask.findAll();

      return result;

    } catch(error){

      return null;

      }
    }

  async getItemById (id:Number) {
    try{
      const result = await DailyTask.findOne({where:{id}})

      return result;

    } catch (error){

      return null;

    }
  }

  async create (dailyTask: DailyTask ){
    try {
      const result = await DailyTask.create(dailyTask);

      return result;

    } catch(error){
      
      return null;

    }
  }
  
  async deleteItem(id:Number){
    try{
      await DailyTask.destroy({where: {id}})

      return true;

    } catch(error){

      return false;

    }

  }
}
export const dailyTaskService = new DailyTaskService()