import { SubtaskInfo } from "../../../domain/entities/tasks/subtaskInfos";
import { CRUDServiceInterface } from "../../interfaces/CRUDServiceInterface";


class SubtaskInfoService implements CRUDServiceInterface<SubtaskInfo>{
    
  async itemExists (id:number) {
    try {
      const result = await SubtaskInfo.findOne({where:{id}});
        
      return result ? true:false;

    } catch (error) {

      return false;

      }
    }

  async update(item:SubtaskInfo){
    try {
      await SubtaskInfo.update(item,{where:{id:item.id}})

      const result = await SubtaskInfo.findByPk(item.id)

      return result;

    } catch (error) {

      console.log(error)

      return null;

      }
    }

  async getAll(){
    try {
      const result = await SubtaskInfo.findAll();

      return result;

    } catch(error){

      return null;

      }
    }

  async getItemById (id:number) {
    try{
      const result = await SubtaskInfo.findOne({where:{id}})

      return result;

    } catch (error){

      return null;

    }
  }

  async create (subtaskInfo: SubtaskInfo ){
    try {
      const result = await SubtaskInfo.create(subtaskInfo);

      return result;

    } catch(error){
      
      return null;

    }
  }
  
  async deleteItem(id:number){
    try{
      await SubtaskInfo.destroy({where: {id}})

      return true;

    } catch(error){

      return false;

    }
  }
}
export const subtaskInfoService = new SubtaskInfoService()