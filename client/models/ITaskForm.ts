import { ISubtask } from './ISubTask'

export interface ITaskForm {
  name: string | undefined
  icon: null | undefined
  goalId: number
  createdAt: Date | undefined
  updatedAt: Date | undefined
  subtasks: ISubtask[] | undefined
}
