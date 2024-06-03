import { ISubTaskInfo } from './ISubtaskInfo'

export interface ISubtask {
  id: number | undefined
  name: string | undefined
  description: string | undefined
  taskId: number | undefined
  createdAt: Date | undefined
  updatedAt: Date | undefined
  subtaskInfo: ISubTaskInfo | undefined
}
