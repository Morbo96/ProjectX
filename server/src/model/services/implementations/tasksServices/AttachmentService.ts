import { Attachment } from "../../../domain/entities/tasks/attachments";
import { CRUDServiceInterface } from "../../interfaces/CRUDServiceInterface";


class AttachmentService implements CRUDServiceInterface<Attachment>{
    
  async itemExists (id:number) {
    try {
      const result = await Attachment.findOne({where:{id}});
        
      return result ? true:false;

    } catch (error) {

      return false;

      }
    }

  async update(item:Attachment){
    try {
      await Attachment.update(item,{where:{id:item.id}})

      const result = await Attachment.findByPk(item.id)

      return result;

    } catch (error) {

      console.log(error)

      return null;

      }
    }

  async getAll(){
    try {
      const result = await Attachment.findAll();

      return result;

    } catch(error){

      return null;

      }
    }

  async getItemById (id:number) {
    try{
      const result = await Attachment.findOne({where:{id}})

      return result;

    } catch (error){

      return null;

    }
  }

  async create (attachment: Attachment ){
    try {
      const result = await Attachment.create(attachment);

      return result;

    } catch(error){
      
      return null;

    }
  }
  
  async deleteItem(id:number){
    try{
      await Attachment.destroy({where: {id}})

      return true;

    } catch(error){

      return false;

    }
  }
}
export const attachmentService = new AttachmentService()