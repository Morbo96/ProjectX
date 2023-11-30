import { Subtask } from "../../domain/entities/tasks/subtasks";
import { Task } from "../../domain/entities/tasks/tasks";

export interface TaskServiceInterface {
  getSubtasks: (taskId: number) => Promise<Subtask[] | null>;

  getUsersTasks: (userId: number) => Promise<Task[] | null>;
}
