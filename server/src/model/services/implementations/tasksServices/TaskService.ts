import { Task } from "../../../domain/entities/tasks/tasks";
import { CRUDServiceInterface } from "../../interfaces/CRUDServiceInterface";


class TaskService implements CRUDServiceInterface<Task>{
    
  async itemExists (id:number) {
    try {
      const result = await Task.findOne({where:{id}});
        
      return result ? true:false;

    } catch (error) {

      return false;

      }
    }

  async update(item:Task){
    try {
      await Task.update(item,{where:{id:item.id}})

      const result = await Task.findByPk(item.id)

      return result;

    } catch (error) {

      console.log(error)

      return null;

      }
    }

  async getAll(){
    try {
      const result = await Task.findAll();

      return result;

    } catch(error){

      return null;

      }
    }

  async getItemById (id:number) {
    try{
      const result = await Task.findOne({where:{id}})

      return result;

    } catch (error){

      return null;

    }
  }

  async create (task: Task ){
    try {
      const result = await Task.create(task);

      return result;

    } catch(error){
      
      return null;

    }
  }
  
  async deleteItem(id:number){
    try{
      await Task.destroy({where: {id}})

      return true;

    } catch(error){

      return false;

    }
  }
}
export const taskService = new TaskService()