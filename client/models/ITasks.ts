import { ISubtask } from './ISubTask'

export interface ITask {
  id: number
  name: string
  icon: null
  goalId: number
  createdAt: Date
  updatedAt: Date
  subtasks: ISubtask[]
}
