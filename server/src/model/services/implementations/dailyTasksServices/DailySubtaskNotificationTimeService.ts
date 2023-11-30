import { DailySubtaskNotificationTime } from "../../../domain/entities/dailyTasks/dailySubtaskNotificationTime";
import { CRUDServiceInterface } from "../../interfaces/CRUDServiceInterface";

class DailySubtaskNotificationTimeService
  implements CRUDServiceInterface<DailySubtaskNotificationTime>
{
  async itemExists(id: number) {
    const result = await DailySubtaskNotificationTime.findOne({
      where: { id },
    });

    return result ? true : false;
  }

  async update(item: DailySubtaskNotificationTime) {
    await DailySubtaskNotificationTime.update(item, {
      where: { id: item.id },
    });

    const result = await DailySubtaskNotificationTime.findByPk(item.id);

    return result;
  }

  async getAll() {
    const result = await DailySubtaskNotificationTime.findAll();

    return result;
  }

  async getItemById(id: Number) {
    const result = await DailySubtaskNotificationTime.findOne({
      where: { id },
    });

    return result;
  }

  async create(dailySubtaskNotificationTime: DailySubtaskNotificationTime) {
    const result = await DailySubtaskNotificationTime.create(
      dailySubtaskNotificationTime
    );

    return result;
  }
  async deleteItem(id: Number) {
    await DailySubtaskNotificationTime.destroy({ where: { id } });

    return true;
  }
}
export const dailySubtaskNotificationTimeService =
  new DailySubtaskNotificationTimeService();
