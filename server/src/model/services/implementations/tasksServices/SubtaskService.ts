import { Subtask } from "../../../domain/entities/tasks/subtasks";
import { CRUDServiceInterface } from "../../interfaces/CRUDServiceInterface";


class SubtaskService implements CRUDServiceInterface<Subtask>{
    
  async itemExists (id:number) {
    try {
      const result = await Subtask.findOne({where:{id}});
        
      return result ? true:false;

    } catch (error) {

      return false;

      }
    }

  async update(item:Subtask){
    try {
      await Subtask.update(item,{where:{id:item.id}})

      const result = await Subtask.findByPk(item.id)

      return result;

    } catch (error) {

      console.log(error)

      return null;

      }
    }

  async getAll(){
    try {
      const result = await Subtask.findAll();

      return result;

    } catch(error){

      return null;

      }
    }

  async getItemById (id:number) {
    try{
      const result = await Subtask.findOne({where:{id}})

      return result;

    } catch (error){

      return null;

    }
  }

  async create (subtask: Subtask ){
    try {
      const result = await Subtask.create(subtask);

      return result;

    } catch(error){
      
      return null;

    }
  }
  
  async deleteItem(id:number){
    try{
      await Subtask.destroy({where: {id}})

      return true;

    } catch(error){

      return false;

    }
  }
}
export const subtaskService = new SubtaskService()