import { DailyTask } from "../../../domain/entities/dailyTasks/dailyTasks";
import { Folder } from "../../../domain/entities/tasks/folders";
import { Goal } from "../../../domain/entities/tasks/goals";
import { Subtask } from "../../../domain/entities/tasks/subtasks";
import { Task } from "../../../domain/entities/tasks/tasks";
import { User } from "../../../domain/entities/user/users";
import { UserBank } from "../../../domain/entities/user/usersBanks";
import { UserPet } from "../../../domain/entities/user/usersPets";
import { CRUDServiceInterface } from "../../interfaces/CRUDServiceInterface";
import { UserServiceInterface } from "../../interfaces/UserServiceInterface";
import { userBankService } from "./UserBankService";

class UserService implements CRUDServiceInterface<User>, UserServiceInterface {
  async getByLogin(login: string) {
    try {
      const result = await User.findOne({ where: { login: login } });

      return result;
    } catch (error) {
      return null;
    }
  }

  async getDailyTasks(userId: number) {
    try {
      const result = await DailyTask.findAll({ where: { userId: userId } });

      return result;
    } catch (error) {
      return null;
    }
  }

  async getUsersPets(userId: number) {
    try {
      const result = await UserPet.findAll({ where: { userId: userId } });

      return result;
    } catch (error) {
      return null;
    }
  }

  async getFolders(userId: number) {
    try {
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
                include: [{ model: Subtask, required: false }],
              },
            ],
          },
        ],
      });

      return result;
    } catch (error) {
      return null;
    }
  }

  async itemExists(id: number) {
    try {
      const result = await User.findOne({ where: { id } });

      return result ? true : false;
    } catch (error) {
      return false;
    }
  }

  async update(item: User) {
    try {
      await User.update(item, { where: { id: item.id } });

      const result = await User.findByPk(item.id);

      return result;
    } catch (error) {
      console.log(error);

      return null;
    }
  }

  async getAll() {
    try {
      const result = await User.findAll();

      return result;
    } catch (error) {
      return null;
    }
  }

  async getItemById(id: number) {
    try {
      const result = await User.findOne({ where: { id } });

      return result;
    } catch (error) {
      return null;
    }
  }

  async create(user: User) {
    try {
      const result = await User.create(user);

      const relatedUserBank = UserBank.build({
        userId: result.id,
      });

      await userBankService.create(relatedUserBank.toJSON());

      return result;
    } catch (error) {
      return null;
    }
  }

  async deleteItem(id: number) {
    try {
      await UserBank.destroy({ where: { userId: id } });

      await User.destroy({ where: { id } });

      return true;
    } catch (error) {
      console.log(error);

      return false;
    }
  }
}
export const userService = new UserService();
