import { ISubTaskInfo } from './ISubtaskInfo'

export interface ISubtask {
  id: number
  name: string | undefined
  description: string | undefined
  taskId: number | undefined
  createdAt: Date | undefined
  updatedAt: Date | undefined
  subtaskInfo: ISubTaskInfo | undefined
}
