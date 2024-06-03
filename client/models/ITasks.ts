import { ISubtask } from './ISubTask'

export interface ITask {
  id: number
  name: string
  icon: null | undefined
  goalId: number
  createdAt: Date | undefined
  updatedAt: Date | undefined
  subtasks: ISubtask[] | undefined
}
