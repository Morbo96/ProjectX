import { TaskHelper } from "../../../domain/entities/tasks/taskHelper";
import { CRUDServiceInterface } from "../../interfaces/CRUDServiceInterface";


class TaskHelperService implements CRUDServiceInterface<TaskHelper>{
    
  async itemExists (id:number) {
    try {
      const result = await TaskHelper.findOne({where:{id}});
        
      return result ? true:false;

    } catch (error) {

      return false;

      }
    }

  async update(item:TaskHelper){
    try {
      await TaskHelper.update(item,{where:{id:item.id}})

      const result = await TaskHelper.findByPk(item.id)

      return result;

    } catch (error) {

      console.log(error)

      return null;

      }
    }

  async getAll(){
    try {
      const result = await TaskHelper.findAll();

      return result;

    } catch(error){

      return null;

      }
    }

  async getItemById (id:number) {
    try{
      const result = await TaskHelper.findOne({where:{id}})

      return result;

    } catch (error){

      return null;

    }
  }

  async create (taskHelper: TaskHelper ){
    try {
      const result = await TaskHelper.create(taskHelper);

      return result;

    } catch(error){
      
      return null;

    }
  }
  
  async deleteItem(id:number){
    try{
      await TaskHelper.destroy({where: {id}})

      return true;

    } catch(error){

      return false;

    }
  }
}
export const taskHelperService = new TaskHelperService()