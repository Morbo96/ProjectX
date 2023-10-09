import { Goal } from "../../../domain/entities/tasks/goals";
import { CRUDServiceInterface } from "../../interfaces/CRUDServiceInterface";


class GoalService implements CRUDServiceInterface<Goal>{
    
  async itemExists (id:number) {
    try {
      const result = await Goal.findOne({where:{id}});
        
      return result ? true:false;

    } catch (error) {

      return false;

      }
    }

  async update(item:Goal){
    try {
      await Goal.update(item,{where:{id:item.id}})

      const result = await Goal.findByPk(item.id)

      return result;

    } catch (error) {

      console.log(error)

      return null;

      }
    }

  async getAll(){
    try {
      const result = await Goal.findAll();

      return result;

    } catch(error){

      return null;

      }
    }

  async getItemById (id:number) {
    try{
      const result = await Goal.findOne({where:{id}})

      return result;

    } catch (error){

      return null;

    }
  }

  async create (goal: Goal ){
    try {
      const result = await Goal.create(goal);

      return result;

    } catch(error){
      
      return null;

    }
  }
  
  async deleteItem(id:number){
    try{
      await Goal.destroy({where: {id}})

      return true;

    } catch(error){

      return false;

    }
  }
}
export const goalService = new GoalService()