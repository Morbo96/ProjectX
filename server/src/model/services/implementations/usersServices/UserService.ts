import { DailyTask } from "../../../domain/entities/dailyTasks/dailyTasks";
import { Folder } from "../../../domain/entities/tasks/folders";
import { Goal } from "../../../domain/entities/tasks/goals";
import { SubtaskInfo } from "../../../domain/entities/tasks/subtaskInfos";
import { Subtask } from "../../../domain/entities/tasks/subtasks";
import { Task } from "../../../domain/entities/tasks/tasks";
import { User } from "../../../domain/entities/user/users";
import { UserBank } from "../../../domain/entities/user/usersBanks";
import { UserPet } from "../../../domain/entities/user/usersPets";
import { CRUDServiceInterface } from "../../interfaces/CRUDServiceInterface";
import { UserServiceInterface } from "../../interfaces/UserServiceInterface";
import { userBankService } from "./UserBankService";

class UserService implements CRUDServiceInterface<User>, UserServiceInterface {
  async getByEmail(email: string) {
    const result = await User.findOne({ where: { email: email } });

    return result;
  }
  async getByLogin(login: string) {
    const result = await User.findOne({ where: { login: login } });

    return result;
  }

  async getDailyTasks(userId: number) {
    const result = await DailyTask.findAll({ where: { userId: userId } });

    return result;
  }

  async getUsersPets(userId: number) {
    const result = await UserPet.findAll({ where: { userId: userId } });

    return result;
  }

  async getFolders(userId: number) {
    const result = await Folder.findAll({
      where: { userId: userId },
      include: [
        {
          model: Goal,
          required: false,
          include: [
            {
              model: Task,
              required: false,
              include: [
                {
                  model: Subtask,
                  required: false,
                  include: [{ model: SubtaskInfo, required: false }],
                },
              ],
            },
          ],
        },
      ],
    });

    return result;
  }

  async itemExists(id: number) {
    const result = await User.findOne({ where: { id } });

    return result ? true : false;
  }

  async update(item: User) {
    await User.update(item, { where: { id: item.id } });

    const result = await User.findByPk(item.id);

    return result;
  }

  async getAll() {
    const result = await User.findAll();

    return result;
  }

  async getItemById(id: number) {
    const result = await User.findOne({ where: { id } });

    return result;
  }

  async create(user: User) {
    const result = await User.create(user);

    const relatedUserBank = UserBank.build({
      userId: result.id,
    });

    await userBankService.create(relatedUserBank.toJSON());

    return result;
  }

  async deleteItem(id: number) {
    await UserBank.destroy({ where: { userId: id } });

    await User.destroy({ where: { id } });

    return true;
  }
}
export const userService = new UserService();
