import { Subtask } from "../../../domain/entities/tasks/subtasks";
import { CRUDServiceInterface } from "../../interfaces/CRUDServiceInterface";

class SubtaskService implements CRUDServiceInterface<Subtask> {
  async itemExists(id: number) {
    const result = await Subtask.findOne({ where: { id } });

    return result ? true : false;
  }

  async update(item: Subtask) {
    await Subtask.update(item, { where: { id: item.id } });

    const result = await Subtask.findByPk(item.id);

    return result;
  }

  async getAll() {
    const result = await Subtask.findAll();

    return result;
  }

  async getItemById(id: number) {
    const result = await Subtask.findOne({ where: { id } });

    return result;
  }

  async create(subtask: Subtask) {
    const result = await Subtask.create(subtask);

    return result;
  }

  async deleteItem(id: number) {
    await Subtask.destroy({ where: { id } });

    return true;
  }
}
export const subtaskService = new SubtaskService();
