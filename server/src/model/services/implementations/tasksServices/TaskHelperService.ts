import { TaskHelper } from "../../../domain/entities/tasks/taskHelper";
import { CRUDServiceInterface } from "../../interfaces/CRUDServiceInterface";

class TaskHelperService implements CRUDServiceInterface<TaskHelper> {
  async itemExists(id: number) {
    const result = await TaskHelper.findOne({ where: { id } });

    return result ? true : false;
  }

  async update(item: TaskHelper) {
    await TaskHelper.update(item, { where: { id: item.id } });

    const result = await TaskHelper.findByPk(item.id);

    return result;
  }

  async getAll() {
    const result = await TaskHelper.findAll();

    return result;
  }

  async getItemById(id: number) {
    const result = await TaskHelper.findOne({ where: { id } });

    return result;
  }

  async create(taskHelper: TaskHelper) {
    const result = await TaskHelper.create(taskHelper);

    return result;
  }

  async deleteItem(id: number) {
    await TaskHelper.destroy({ where: { id } });

    return true;
  }
}
export const taskHelperService = new TaskHelperService();
