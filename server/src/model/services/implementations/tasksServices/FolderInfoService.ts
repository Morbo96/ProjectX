import { FolderInfo } from "../../../domain/entities/tasks/folderInfos";
import { CRUDServiceInterface } from "../../interfaces/CRUDServiceInterface";


class FolderInfoService implements CRUDServiceInterface<FolderInfo>{
    
  async itemExists (id:number) {
    try {
      const result = await FolderInfo.findOne({where:{id}});
        
      return result ? true:false;

    } catch (error) {

      return false;

      }
    }

  async update(item:FolderInfo){
    try {
      await FolderInfo.update(item,{where:{id:item.id}})

      const result = await FolderInfo.findByPk(item.id)

      return result;

    } catch (error) {

      console.log(error)

      return null;

      }
    }

  async getAll(){
    try {
      const result = await FolderInfo.findAll();

      return result;

    } catch(error){

      return null;

      }
    }

  async getItemById (id:number) {
    try{
      const result = await FolderInfo.findOne({where:{id}})

      return result;

    } catch (error){

      return null;

    }
  }

  async create (folderInfo: FolderInfo ){
    try {
      const result = await FolderInfo.create(folderInfo);

      return result;

    } catch(error){
      
      return null;

    }
  }
  
  async deleteItem(id:number){
    try{
      await FolderInfo.destroy({where: {id}})

      return true;

    } catch(error){

      return false;

    }
  }
}
export const folderInfoService = new FolderInfoService()