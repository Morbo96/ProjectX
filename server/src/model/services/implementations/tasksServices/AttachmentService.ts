import { Attachment } from "../../../domain/entities/tasks/attachments";
import { CRUDServiceInterface } from "../../interfaces/CRUDServiceInterface";

class AttachmentService implements CRUDServiceInterface<Attachment> {
  async itemExists(id: number) {
    const result = await Attachment.findOne({ where: { id } });

    return result ? true : false;
  }

  async update(item: Attachment) {
    await Attachment.update(item, { where: { id: item.id } });

    const result = await Attachment.findByPk(item.id);

    return result;
  }

  async getAll() {
    const result = await Attachment.findAll();

    return result;
  }

  async getItemById(id: number) {
    const result = await Attachment.findOne({ where: { id } });

    return result;
  }

  async create(attachment: Attachment) {
    const result = await Attachment.create(attachment);

    return result;
  }

  async deleteItem(id: number) {
    await Attachment.destroy({ where: { id } });

    return true;
  }
}
export const attachmentService = new AttachmentService();
