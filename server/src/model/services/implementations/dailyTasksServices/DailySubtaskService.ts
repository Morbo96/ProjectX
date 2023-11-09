import { DailySubtask } from "../../../domain/entities/dailyTasks/dailySubtasks";
import { CRUDServiceInterface } from "../../interfaces/CRUDServiceInterface";

class DailySubtaskService implements CRUDServiceInterface<DailySubtask> {
  async itemExists(id: number) {
    try {
      const result = await DailySubtask.findOne({ where: { id } });

      return result ? true : false;
    } catch (error) {
      return false;
    }
  }

  async update(item: DailySubtask) {
    try {
      await DailySubtask.update(item, { where: { id: item.id } });

      const result = await DailySubtask.findByPk(item.id);

      return result;
    } catch (error) {
      console.log(error);

      return null;
    }
  }

  async getAll() {
    try {
      const result = await DailySubtask.findAll();

      return result;
    } catch (error) {
      return null;
    }
  }

  async getItemById(id: Number) {
    try {
      const result = await DailySubtask.findOne({ where: { id } });

      return result;
    } catch (error) {
      return null;
    }
  }

  async create(dailySubtask: DailySubtask) {
    try {
      const result = await DailySubtask.create(dailySubtask);

      return result;
    } catch (error) {
      return null;
    }
  }

  async deleteItem(id: Number) {
    try {
      await DailySubtask.destroy({ where: { id } });

      return true;
    } catch (error) {
      return false;
    }
  }
}
export const dailySubtaskService = new DailySubtaskService();
