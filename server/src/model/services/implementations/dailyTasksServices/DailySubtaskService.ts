import { DailySubtask } from "../../../domain/entities/dailyTasks/dailySubtasks";
import { CRUDServiceInterface } from "../../interfaces/CRUDServiceInterface";

class DailySubtaskService implements CRUDServiceInterface<DailySubtask> {
  async itemExists(id: number) {
    const result = await DailySubtask.findOne({ where: { id } });

    return result ? true : false;
  }

  async update(item: DailySubtask) {
    await DailySubtask.update(item, { where: { id: item.id } });

    const result = await DailySubtask.findByPk(item.id);

    return result;
  }

  async getAll() {
    const result = await DailySubtask.findAll();

    return result;
  }

  async getItemById(id: Number) {
    const result = await DailySubtask.findOne({ where: { id } });

    return result;
  }

  async create(dailySubtask: DailySubtask) {
    const result = await DailySubtask.create(dailySubtask);

    return result;
  }

  async deleteItem(id: Number) {
    await DailySubtask.destroy({ where: { id } });

    return true;
  }
}
export const dailySubtaskService = new DailySubtaskService();
