import { DailySubtaskNotification } from "../../../domain/entities/dailyTasks/dailySubtaskNotifications";
import { CRUDServiceInterface } from "../../interfaces/CRUDServiceInterface";

class DailySubtaskNotificationService
  implements CRUDServiceInterface<DailySubtaskNotification>
{
  async itemExists(id: number) {
    const result = await DailySubtaskNotification.findOne({ where: { id } });

    return result ? true : false;
  }

  async update(item: DailySubtaskNotification) {
    await DailySubtaskNotification.update(item, { where: { id: item.id } });

    const result = await DailySubtaskNotification.findByPk(item.id);

    return result;
  }

  async getAll() {
    const result = await DailySubtaskNotification.findAll();

    return result;
  }

  async getItemById(id: Number) {
    const result = await DailySubtaskNotification.findOne({ where: { id } });

    return result;
  }

  async create(dailySubtaskNotification: DailySubtaskNotification) {
    const result = await DailySubtaskNotification.create(
      dailySubtaskNotification
    );

    return result;
  }

  async deleteItem(id: Number) {
    await DailySubtaskNotification.destroy({ where: { id } });

    return true;
  }
}
export const dailySubtaskNotificationService =
  new DailySubtaskNotificationService();
