import { DailyTaskHelper } from "../../../domain/entities/dailyTasks/dailyTaskHelper";
import { CRUDServiceInterface } from "../../interfaces/CRUDServiceInterface";

class DailyTaskHelperService implements CRUDServiceInterface<DailyTaskHelper> {
  async itemExists(id: number) {
    const result = await DailyTaskHelper.findOne({ where: { id } });

    return result ? true : false;
  }

  async update(item: DailyTaskHelper) {
    await DailyTaskHelper.update(item, { where: { id: item.id } });

    const result = await DailyTaskHelper.findByPk(item.id);

    return result;
  }

  async getAll() {
    const result = await DailyTaskHelper.findAll();

    return result;
  }

  async getItemById(id: Number) {
    const result = await DailyTaskHelper.findOne({ where: { id } });

    return result;
  }

  async create(dailyTaskHelper: DailyTaskHelper) {
    const result = await DailyTaskHelper.create(dailyTaskHelper);

    return result;
  }

  async deleteItem(id: Number) {
    await DailyTaskHelper.destroy({ where: { id } });

    return true;
  }
}
export const dailyTaskHelperService = new DailyTaskHelperService();
