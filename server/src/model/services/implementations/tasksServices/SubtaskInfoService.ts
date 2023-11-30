import { SubtaskInfo } from "../../../domain/entities/tasks/subtaskInfos";
import { CRUDServiceInterface } from "../../interfaces/CRUDServiceInterface";

class SubtaskInfoService implements CRUDServiceInterface<SubtaskInfo> {
  async itemExists(id: number) {
    const result = await SubtaskInfo.findOne({ where: { id } });

    return result ? true : false;
  }

  async update(item: SubtaskInfo) {
    await SubtaskInfo.update(item, { where: { id: item.id } });

    const result = await SubtaskInfo.findByPk(item.id);

    return result;
  }

  async getAll() {
    const result = await SubtaskInfo.findAll();

    return result;
  }

  async getItemById(id: number) {
    const result = await SubtaskInfo.findOne({ where: { id } });

    return result;
  }

  async create(subtaskInfo: SubtaskInfo) {
    const result = await SubtaskInfo.create(subtaskInfo);

    return result;
  }

  async deleteItem(id: number) {
    await SubtaskInfo.destroy({ where: { id } });

    return true;
  }
}
export const subtaskInfoService = new SubtaskInfoService();
