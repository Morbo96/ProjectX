import { Goal } from "../../../domain/entities/tasks/goals";
import { SubtaskInfo } from "../../../domain/entities/tasks/subtaskInfos";
import { Subtask } from "../../../domain/entities/tasks/subtasks";
import { Task } from "../../../domain/entities/tasks/tasks";
import { CRUDServiceInterface } from "../../interfaces/CRUDServiceInterface";
import { GoalServiceInterface } from "../../interfaces/GoalServiceInterface";

class GoalService implements CRUDServiceInterface<Goal>, GoalServiceInterface {
  async getTasks(goalId: number) {
    const result = await Task.findAll({
      where: { goalId: goalId },
      include: [
        {
          model: Subtask,
          required: false,
          include: [{ model: SubtaskInfo, required: false }],
        },
      ],
    });
    return result;
  }

  async itemExists(id: number) {
    const result = await Goal.findOne({ where: { id } });

    return result ? true : false;
  }

  async update(item: Goal) {
    await Goal.update(item, { where: { id: item.id } });

    const result = await Goal.findByPk(item.id);

    return result;
  }

  async getAll() {
    const result = await Goal.findAll();

    return result;
  }

  async getItemById(id: number) {
    const result = await Goal.findOne({ where: { id } });

    return result;
  }

  async create(goal: Goal) {
    const result = await Goal.create(goal);

    return result;
  }

  async deleteItem(id: number) {
    await Goal.destroy({ where: { id } });

    return true;
  }
}
export const goalService = new GoalService();
