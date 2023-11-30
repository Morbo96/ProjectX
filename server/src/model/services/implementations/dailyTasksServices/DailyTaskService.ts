import { DailySubtask } from "../../../domain/entities/dailyTasks/dailySubtasks";
import { DailyTask } from "../../../domain/entities/dailyTasks/dailyTasks";
import { CRUDServiceInterface } from "../../interfaces/CRUDServiceInterface";
import { DailyTaskServiceInterface } from "../../interfaces/DailytaskServiceInterface";

class DailyTaskService
  implements CRUDServiceInterface<DailyTask>, DailyTaskServiceInterface
{
  async getDailysubtasks(dailyTaskId: number) {
    const result = await DailySubtask.findAll({
      where: { dailyTaskId: dailyTaskId },
    });

    return result;
  }

  async itemExists(id: number) {
    const result = await DailyTask.findOne({ where: { id } });

    return result ? true : false;
  }

  async update(item: DailyTask) {
    await DailyTask.update(item, { where: { id: item.id } });

    const result = await DailyTask.findByPk(item.id);

    return result;
  }

  async getAll() {
    const result = await DailyTask.findAll();

    return result;
  }

  async getItemById(id: Number) {
    const result = await DailyTask.findOne({ where: { id } });

    return result;
  }

  async create(dailyTask: DailyTask) {
    const result = await DailyTask.create(dailyTask);

    return result;
  }

  async deleteItem(id: Number) {
    await DailyTask.destroy({ where: { id } });

    return true;
  }
}
export const dailyTaskService = new DailyTaskService();
