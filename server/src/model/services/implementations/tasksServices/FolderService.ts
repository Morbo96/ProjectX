import { Folder } from "../../../domain/entities/tasks/folders";
import { Goal } from "../../../domain/entities/tasks/goals";
import { User } from "../../../domain/entities/user/users";
import { CRUDServiceInterface } from "../../interfaces/CRUDServiceInterface";
import { FolderServiceInterface } from "../../interfaces/FolderServiceInterface";


class FolderService implements CRUDServiceInterface<Folder>,FolderServiceInterface{
    
  async getGoals(folderId:number){
    try {
      const result = await Goal.findAll({where:{folderId:folderId}}) 

      return result

    } catch (error) {

      return null
      
    }
  }

  async itemExists (id:number) {
    try {
      const result = await Folder.findOne({where:{id}});
        
      return result ? true:false;

    } catch (error) {

      return false;

      }
    }

  async update(item:Folder){
    try {
      await Folder.update(item,{where:{id:item.id}})

      const result = await Folder.findByPk(item.id)

      return result;

    } catch (error) {

      console.log(error)

      return null;

      }
    }

  async getAll(){
    try {
      const result = await Folder.findAll();

      return result;

    } catch(error){

      return null;

      }
    }

  async getItemById (id:number) {
    try{
      const result = await Folder.findOne({where:{id}})

      return result;

    } catch (error){

      return null;

    }
  }

  async create (folder: Folder ){
    try {

      const result = await Folder.create(folder);

      return result;

    } catch(error){
      
      return null;

    }
  }
  
  async deleteItem(id:number){
    try{
      await Folder.destroy({where: {id}})

      return true;

    } catch(error){

      return false;

    }
  }
}
export const folderService = new FolderService()