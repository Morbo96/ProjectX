import { Folder } from "../../../domain/entities/tasks/folders";
import { Goal } from "../../../domain/entities/tasks/goals";
import { Subtask } from "../../../domain/entities/tasks/subtasks";
import { Task } from "../../../domain/entities/tasks/tasks";
import { CRUDServiceInterface } from "../../interfaces/CRUDServiceInterface";
import { TaskServiceInterface } from "../../interfaces/TaskServiceInterface";

class TaskService implements CRUDServiceInterface<Task>, TaskServiceInterface {
  async getUsersTasks(userId: number) {
    const tasks = await Task.findAll({
      include: [
        {
          model: Goal,
          include: [
            {
              model: Folder,
              where: { userId: userId },
              required: true,
            },
          ],
          required: true,
        },
      ],
    });
    return tasks;
  }

  async getSubtasks(taskId: number) {
    const result = await Subtask.findAll({ where: { taskId: taskId } });

    return result;
  }

  async itemExists(id: number) {
    const result = await Task.findOne({ where: { id } });

    return result ? true : false;
  }

  async update(item: Task) {
    await Task.update(item, { where: { id: item.id } });

    const result = await Task.findByPk(item.id);

    return result;
  }

  async getAll() {
    const result = await Task.findAll();

    return result;
  }

  async getItemById(id: number) {
    const result = await Task.findOne({ where: { id } });

    return result;
  }

  async create(task: Task) {
    const result = await Task.create(task);

    return result;
  }

  async deleteItem(id: number) {
    await Task.destroy({ where: { id } });

    return true;
  }
}
export const taskService = new TaskService();
